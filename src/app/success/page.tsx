import { redirect } from 'next/navigation';
import Link from 'next/link';
import { CheckCircle, AlertCircle, Calendar, Clock, CreditCard } from 'lucide-react';
import { format } from 'date-fns';
import { stripe } from '@/lib/stripe';
import prisma from '@/lib/prisma';

interface SuccessPageProps {
  searchParams: {
    session_id?: string;
  };
}

export default async function SuccessPage({ searchParams }: SuccessPageProps) {
  const { session_id } = searchParams;

  if (!session_id) {
    return (
      <ErrorState 
        title="Invalid Request" 
        message="No payment session found. Please return home and try again." 
      />
    );
  }

  try {
    // 1. Retrieve Stripe Session
    const session = await stripe.checkout.sessions.retrieve(session_id);
    
    // 2. Validate Payment Status
    if (session.payment_status !== 'paid') {
      return (
        <ErrorState 
          title="Payment Incomplete" 
          message="It looks like the payment hasn't been completed yet." 
        />
      );
    }

    const bookingId = session.metadata?.bookingId;

    if (!bookingId) {
       return (
        <ErrorState 
          title="Booking Not Found" 
          message="We received your payment but couldn't find the associated booking details. Please contact support." 
        />
      );
    }

    // 3. Fetch Booking from Prisma
    // We update the status to PAID here just to be safe, though Webhook is the primary source of truth.
    // In a real high-scale app, you might rely solely on the webhook, but for this UX, updating here ensures instant feedback.
    const booking = await prisma.booking.update({
      where: { id: bookingId },
      data: { status: 'PAID' },
    });

    return (
      <main className="min-h-screen bg-stone-50 flex items-center justify-center p-4">
        <div className="max-w-md w-full bg-white rounded-lg shadow-sm border border-stone-200 overflow-hidden">
          
          {/* Header Section */}
          <div className="p-8 text-center border-b border-stone-100">
            <div className="flex justify-center mb-4">
              <CheckCircle className="w-16 h-16 text-emerald-700" strokeWidth={1.5} />
            </div>
            <h1 className="text-2xl font-serif font-medium text-stone-900 mb-2">
              Reservation Confirmed
            </h1>
            <p className="text-stone-500 text-sm">
              We have sent a confirmation email to <span className="font-semibold text-stone-700">{session.customer_details?.email || booking.userEmail}</span>.
            </p>
          </div>

          {/* Details Section */}
          <div className="p-8 space-y-6">
            <div className="bg-stone-100 rounded-lg p-6 space-y-4">
              
              {/* Date */}
              <div className="flex items-center gap-3 text-stone-700">
                <Calendar className="w-5 h-5 text-stone-500" />
                <div>
                  <p className="text-xs text-stone-500 uppercase tracking-wide font-semibold">Date</p>
                  <p className="font-medium">
                    {format(booking.startTime, 'EEEE, d MMM yyyy')}
                  </p>
                </div>
              </div>

              {/* Time */}
              <div className="flex items-center gap-3 text-stone-700">
                <Clock className="w-5 h-5 text-stone-500" />
                <div>
                  <p className="text-xs text-stone-500 uppercase tracking-wide font-semibold">Time</p>
                  <p className="font-medium">
                    {format(booking.startTime, 'HH:mm')} - {format(booking.endTime, 'HH:mm')}
                  </p>
                </div>
              </div>

              {/* Total Paid */}
              <div className="flex items-center gap-3 text-stone-700 pt-2 border-t border-stone-200">
                <CreditCard className="w-5 h-5 text-stone-500" />
                <div>
                  <p className="text-xs text-stone-500 uppercase tracking-wide font-semibold">Total Paid</p>
                  <p className="font-medium text-stone-900">
                    {(booking.totalPrice / 100).toFixed(2)}€
                  </p>
                </div>
              </div>

            </div>

            {/* Actions */}
            <Link 
              href="/"
              className="block w-full bg-stone-800 hover:bg-stone-700 text-white text-center font-bold py-3 rounded-lg transition-colors shadow-sm"
            >
              Return to Home
            </Link>
          </div>
          
        </div>
      </main>
    );

  } catch (error) {
    console.error('Success Page Error:', error);
    return (
      <ErrorState 
        title="Something went wrong" 
        message="We couldn't verify your booking details. If you were charged, please contact support." 
      />
    );
  }
}

function ErrorState({ title, message }: { title: string, message: string }) {
  return (
    <main className="min-h-screen bg-stone-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-lg shadow-sm border border-stone-200 p-8 text-center">
        <div className="flex justify-center mb-4">
          <AlertCircle className="w-12 h-12 text-stone-400" />
        </div>
        <h1 className="text-xl font-bold text-stone-800 mb-2">{title}</h1>
        <p className="text-stone-500 mb-6">{message}</p>
        <Link 
          href="/"
          className="inline-block px-6 py-2 bg-stone-200 hover:bg-stone-300 text-stone-800 font-semibold rounded-md transition-colors"
        >
          Return Home
        </Link>
      </div>
    </main>
  );
}

