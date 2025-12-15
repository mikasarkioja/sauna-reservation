'use server';

import prisma from '../../lib/prisma';
import { stripe } from '../../lib/stripe';
import { calculateSaunaPrice, PricingError } from '../../lib/pricing';
import { BookingStatus } from '@prisma/client';

/**
 * Interface for the booking request payload
 */
interface CreateBookingRequest {
  userEmail: string;
  userName?: string;
  startTime: string; // ISO string
  endTime: string;   // ISO string
}

/**
 * Interface for the server action response
 */
interface CreateBookingResponse {
  success: boolean;
  url?: string;
  error?: string;
}

/**
 * Server Action to create a sauna booking.
 * 
 * Flow:
 * 1. Validate inputs and calculate price.
 * 2. Check for availability (concurrency handling).
 * 3. Create PENDING booking in DB.
 * 4. Create Stripe Checkout Session.
 * 5. Update booking with Stripe Session ID.
 * 6. Return Stripe URL.
 */
export async function createBooking(data: CreateBookingRequest): Promise<CreateBookingResponse> {
  try {
    const start = new Date(data.startTime);
    const end = new Date(data.endTime);
    const { userEmail, userName } = data;

    console.log('DEBUG: NEXT_PUBLIC_APP_URL is:', process.env.NEXT_PUBLIC_APP_URL); // Debug log

    // 1. Basic Validation
    if (!userEmail) {
      throw new Error('User email is required.');
    }
    
    // Validate dates and calculate price
    // This throws PricingError if invalid
    const priceInCents = calculateSaunaPrice(start, end);

    // 2. Availability Check & Reservation (Concurrency Handling)
    // 
    // CONCURRENCY EXPLANATION:
    // The "Check-Then-Act" race condition occurs when two requests check for availability 
    // at the same time, both see the slot as free, and both insert a booking.
    //
    // To solve this in a robust production environment, we have a few options:
    // A) Postgres Exclusion Constraints: Add a constraint to the DB to physically prevent overlapping time ranges (best).
    // B) Serializable Transactions: Run the transaction with 'Serializable' isolation level.
    // C) Table Locking: Lock the table (bad for performance).
    //
    // Here, we use a Prisma transaction to group the check and the insert. 
    // Ideally, we would use `isolationLevel: 'Serializable'`, but that requires retry logic as serialization failures are expected.
    // For this scaffold, we perform a check for overlapping bookings within the transaction. 
    // Note: Without Serializable isolation or Exclusion constraints, a race condition is still theoretically possible 
    // if the DB isolation level is Read Committed (default).
    
    const booking = await prisma.$transaction(async (tx) => {
      // Check for overlapping bookings that are NOT failed/cancelled
      // Overlap logic: (StartA < EndB) and (EndA > StartB)
      const existingBooking = await tx.booking.findFirst({
        where: {
          AND: [
            { startTime: { lt: end } },
            { endTime: { gt: start } },
            {
              status: {
                in: [BookingStatus.PENDING, BookingStatus.PAID],
              },
            },
          ],
        },
      });

      if (existingBooking) {
        throw new Error('The selected time slot is already booked.');
      }

      // Create PENDING booking
      return tx.booking.create({
        data: {
          userEmail,
          userName,
          startTime: start,
          endTime: end,
          totalPrice: priceInCents,
          status: BookingStatus.PENDING,
        },
      });
    });

    // 3. Create Stripe Checkout Session
    // We do this AFTER creating the booking record so we have the ID.
    // If Stripe fails, the PENDING booking will eventually need to be cleaned up (e.g. cron job or webhook expiry).
    
    // Fallback to localhost if env var is missing (helpful for dev)
    const appUrl = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000';
    console.log('Using App URL:', appUrl);

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'eur',
            product_data: {
              name: 'Sauna Reservation',
              description: `${start.toLocaleString()} - ${end.toLocaleString()}`,
            },
            unit_amount: priceInCents,
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${appUrl}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${appUrl}/cancel`,
      metadata: {
        bookingId: booking.id, // Critical: Link Stripe session to our Booking
      },
      customer_email: userEmail,
    });

    if (!session.url) {
      throw new Error('Failed to create Stripe session URL.');
    }

    // 4. Update booking with Stripe Session ID
    // This allows us to look up the booking when the Stripe Webhook fires.
    await prisma.booking.update({
      where: { id: booking.id },
      data: { stripeSessionId: session.id },
    });

    return { success: true, url: session.url };

  } catch (error) {
    console.error('Create Booking Error:', error);
    
    // Distinguish expected validation errors from system errors
    if (error instanceof PricingError) {
       return { success: false, error: error.message };
    }
    
    // Return a generic error for safety, or specific if it's an expected "Slot taken" error
    const message = error instanceof Error ? error.message : 'An unexpected error occurred.';
    return { success: false, error: message };
  }
}

