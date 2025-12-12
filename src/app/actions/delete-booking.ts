'use server';

import prisma from '@/lib/prisma';
import { revalidatePath } from 'next/cache';

/**
 * Server Action to delete a booking by ID.
 * 
 * @param bookingId The ID of the booking to delete
 */
export async function deleteBooking(bookingId: string) {
  try {
    if (!bookingId) {
      throw new Error('Booking ID is required');
    }

    await prisma.booking.delete({
      where: {
        id: bookingId,
      },
    });

    // Revalidate the admin dashboard so the row disappears immediately
    revalidatePath('/admin');
    return { success: true };
  } catch (error) {
    console.error('Failed to delete booking:', error);
    return { success: false, error: 'Failed to delete booking' };
  }
}

