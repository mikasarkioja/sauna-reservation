import Link from 'next/link';
import { format, isAfter } from 'date-fns';
import { RefreshCw, TrendingUp, Users, Calendar } from 'lucide-react';
import prisma from '@/lib/prisma';
import { BookingStatus } from '@prisma/client';
import DeleteBookingButton from '@/components/admin/DeleteBookingButton';

export const dynamic = 'force-dynamic'; // Ensure we always fetch fresh data

export default async function AdminPage() {
  // 1. Fetch Data
  const bookings = await prisma.booking.findMany({
    orderBy: { startTime: 'desc' }, // Newest first
  });

  // 2. Calculate Stats
  const paidBookings = bookings.filter((b) => b.status === BookingStatus.PAID);
  
  const totalRevenueCents = paidBookings.reduce((sum, b) => sum + b.totalPrice, 0);
  const totalRevenue = totalRevenueCents / 100;
  
  const totalBookingsCount = paidBookings.length;
  
  const now = new Date();
  const futureBookings = paidBookings
    .filter((b) => isAfter(b.startTime, now))
    .sort((a, b) => a.startTime.getTime() - b.startTime.getTime());
    
  const nextSession = futureBookings[0] ? format(futureBookings[0].startTime, 'MMM d, HH:mm') : 'None';

  return (
    <main className="min-h-screen bg-stone-50 p-6 md:p-10 text-stone-800">
      <div className="max-w-6xl mx-auto space-y-8">
        
        {/* Header */}
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold tracking-tight text-stone-900 font-serif">Sauna Admin</h1>
          <Link 
            href="/admin" 
            className="flex items-center gap-2 px-4 py-2 bg-white border border-stone-200 rounded-md text-sm font-medium text-stone-600 hover:bg-stone-100 hover:text-stone-900 transition-colors shadow-sm"
          >
            <RefreshCw className="w-4 h-4" />
            Refresh
          </Link>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <StatCard 
            title="Total Revenue" 
            value={`${totalRevenue.toFixed(2)}€`} 
            icon={<TrendingUp className="w-5 h-5 text-emerald-600" />}
          />
          <StatCard 
            title="Confirmed Bookings" 
            value={totalBookingsCount.toString()} 
            icon={<Users className="w-5 h-5 text-blue-600" />}
          />
          <StatCard 
            title="Next Session" 
            value={nextSession} 
            icon={<Calendar className="w-5 h-5 text-amber-600" />}
          />
        </div>

        {/* Bookings Table */}
        <div className="bg-white rounded-xl shadow-sm border border-stone-200 overflow-hidden">
          <div className="p-6 border-b border-stone-100">
            <h2 className="text-lg font-semibold text-stone-900">All Bookings</h2>
            <p className="text-sm text-stone-500">A list of all reservations including pending and cancelled.</p>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="bg-stone-50 text-stone-500 uppercase tracking-wider text-xs font-medium">
                <tr>
                  <th className="px-6 py-4">Date</th>
                  <th className="px-6 py-4">Time</th>
                  <th className="px-6 py-4">Customer</th>
                  <th className="px-6 py-4">Price</th>
                  <th className="px-6 py-4">Status</th>
                  <th className="px-6 py-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100">
                {bookings.length === 0 ? (
                  <tr>
                    <td colSpan={5} className="px-6 py-12 text-center text-stone-400">
                      No bookings found.
                    </td>
                  </tr>
                ) : (
                  bookings.map((booking) => (
                    <tr key={booking.id} className="hover:bg-stone-50 transition-colors">
                      <td className="px-6 py-4 font-medium text-stone-900">
                        {format(booking.startTime, 'MMM d, yyyy')}
                      </td>
                      <td className="px-6 py-4 text-stone-600">
                        {format(booking.startTime, 'HH:mm')} - {format(booking.endTime, 'HH:mm')}
                      </td>
                      <td className="px-6 py-4 text-stone-600">
                        <div className="flex flex-col">
                          <span>{booking.userEmail}</span>
                          {booking.userName && <span className="text-xs text-stone-400">{booking.userName}</span>}
                        </div>
                      </td>
                      <td className="px-6 py-4 font-medium text-stone-900">
                        {(booking.totalPrice / 100).toFixed(2)}€
                      </td>
                      <td className="px-6 py-4">
                        <StatusBadge status={booking.status} />
                      </td>
                      <td className="px-6 py-4 text-right">
                        <DeleteBookingButton id={booking.id} />
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </main>
  );
}

// --- Components ---

function StatCard({ title, value, icon }: { title: string, value: string, icon: React.ReactNode }) {
  return (
    <div className="bg-white p-6 rounded-xl border border-stone-200 shadow-sm flex items-start justify-between">
      <div>
        <p className="text-sm font-medium text-stone-500 mb-1">{title}</p>
        <p className="text-2xl font-bold text-stone-900">{value}</p>
      </div>
      <div className="p-2 bg-stone-50 rounded-lg border border-stone-100">
        {icon}
      </div>
    </div>
  );
}

function StatusBadge({ status }: { status: BookingStatus }) {
  let styles = '';
  
  switch (status) {
    case BookingStatus.PAID:
      styles = 'bg-emerald-100 text-emerald-800 border-emerald-200';
      break;
    case BookingStatus.PENDING:
      styles = 'bg-amber-100 text-amber-800 border-amber-200';
      break;
    case BookingStatus.FAILED:
    case BookingStatus.CANCELLED:
      styles = 'bg-red-100 text-red-800 border-red-200';
      break;
    default:
      styles = 'bg-gray-100 text-gray-800 border-gray-200';
  }

  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${styles}`}>
      {status}
    </span>
  );
}

