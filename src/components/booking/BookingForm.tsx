'use client';

// Fix: Import 'createBooking' but rename it to 'createSaunaCheckout' 
// so the rest of your component works without changes.
import { createBooking as createSaunaCheckout } from '@/app/actions/create-booking';
import * as React from 'react';
import { format, addMinutes, isSameDay, startOfToday, parse } from 'date-fns';
import { DayPicker } from 'react-day-picker';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { Calendar as CalendarIcon, Clock, CheckCircle, AlertCircle } from 'lucide-react';
import 'react-day-picker/dist/style.css';
import { PRICING_PER_30_MINS_CENTS, MIN_DURATION_MINUTES } from '@/lib/pricing';

// --- Types ---
interface BookingFormProps {
  // We can pass pre-fetched blocked dates/slots here in the future
  blockedDates?: Date[]; 
}

// Dummy data for booked slots to demonstrate logic
// In a real app, this would be fetched based on the selected date
const DUMMY_BOOKED_SLOTS = [
  '14:00', '14:30', '15:00' // Someone booked 14:00 - 15:30
];

// Configuration
const OPENING_HOUR = 10;
const CLOSING_HOUR = 22;

/**
 * BookingForm Component
 * 
 * Handles the full reservation flow:
 * 1. Date Selection
 * 2. Start Time Selection
 * 3. Duration Selection
 * 4. Cost Calculation & Summary
 */
export default function BookingForm({ blockedDates = [] }: BookingFormProps) {
  // --- State ---
  const [selectedDate, setSelectedDate] = React.useState<Date | undefined>(undefined);
  const [startTime, setStartTime] = React.useState<string | null>(null);
  const [durationMinutes, setDurationMinutes] = React.useState<number>(MIN_DURATION_MINUTES); // Default 1 hour
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  // --- Derived State & Helpers ---

  // Generate available start times for the selected date
  const timeSlots = React.useMemo(() => {
    if (!selectedDate) return [];

    const slots: string[] = [];
    const today = startOfToday();
    const isToday = isSameDay(selectedDate, today);
    const now = new Date();
    
    // Iterate from OPENING_HOUR to CLOSING_HOUR - (MIN_DURATION)
    // We stop early because the last booking must be at least MIN_DURATION long.
    // E.g. Closing 22:00, Min 1h -> Last start time 21:00.
    const lastStartHour = CLOSING_HOUR - (MIN_DURATION_MINUTES / 60);

    for (let hour = OPENING_HOUR; hour <= lastStartHour; hour++) {
      for (let minute = 0; minute < 60; minute += 30) {
        // Skip if this slot would start after the cut-off
        if (hour === lastStartHour && minute > 0) continue;

        const timeString = `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`;
        
        // Filter out past times if date is today
        if (isToday) {
          const slotDate = parse(timeString, 'HH:mm', selectedDate);
          if (slotDate < now) continue;
        }

        // Filter out booked slots (Dummy Logic)
        if (DUMMY_BOOKED_SLOTS.includes(timeString)) continue;

        slots.push(timeString);
      }
    }
    return slots;
  }, [selectedDate]);

  // Generate duration options based on selected start time
  const durationOptions = React.useMemo(() => {
    if (!startTime || !selectedDate) return [];

    const [startHour, startMinute] = startTime.split(':').map(Number);
    const startTotalMinutes = startHour * 60 + startMinute;
    const closingTotalMinutes = CLOSING_HOUR * 60;
    
    const maxDurationMinutes = closingTotalMinutes - startTotalMinutes;
    
    const options = [];
    // Increment by 30 mins, starting from MIN_DURATION
    for (let d = MIN_DURATION_MINUTES; d <= maxDurationMinutes; d += 30) {
      // Check if this duration overlaps with any booked slots (Simplified check)
      // In a real app, you'd check if the range [startTime, startTime + d] overlaps with existing bookings
      
      const priceEur = (d / 30) * (PRICING_PER_30_MINS_CENTS / 100);
      const hours = Math.floor(d / 60);
      const mins = d % 60;
      const label = `${hours > 0 ? `${hours}h` : ''} ${mins > 0 ? `${mins}m` : ''}`.trim();

      options.push({
        value: d,
        label: `${label} (${priceEur.toFixed(2)}€)`,
        price: priceEur
      });
    }
    return options;
  }, [startTime, selectedDate]);

  // Calculate Total Price
  const totalPrice = React.useMemo(() => {
    return (durationMinutes / 30) * (PRICING_PER_30_MINS_CENTS / 100);
  }, [durationMinutes]);

  // --- Handlers ---

  const handleDateSelect = (date: Date | undefined) => {
    setSelectedDate(date);
    setStartTime(null); // Reset time when date changes
    setDurationMinutes(MIN_DURATION_MINUTES);
  };

  const handleTimeSelect = (time: string) => {
    setStartTime(time);
    setDurationMinutes(MIN_DURATION_MINUTES); // Reset duration to min
  };

  const handleSubmit = async () => {
    if (!selectedDate || !startTime) return;

    setIsSubmitting(true);

    try {
      // 1. Calculate the start and end Date objects
      // "startTime" is a string like "14:30", we need to combine it with "selectedDate"
      const startDateTime = parse(startTime, 'HH:mm', selectedDate);
      const endDateTime = addMinutes(startDateTime, durationMinutes);

      // 2. Call the Server Action (This runs on the server, creates DB record, and talks to Stripe)
      // We assume you have a hardcoded user email for now, or you can add an input field for it
      const result = await createSaunaCheckout({
        startTime: startDateTime.toISOString(),
        endTime: endDateTime.toISOString(),
        userEmail: "test-user@example.com"
      });

      // 3. If we get a URL back, that means Stripe is ready. Go there!
      if (result?.url) {
        window.location.href = result.url;
      } else {
        alert("Something went wrong. No payment URL returned.");
      }

    } catch (error) {
      console.error(error);
      alert("Failed to create reservation. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // --- Render ---

  return (
    <div className="max-w-4xl mx-auto p-4 md:p-6 bg-white rounded-xl shadow-sm border border-stone-200">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* LEFT COLUMN: Calendar */}
        <div className="flex flex-col">
          <h2 className="text-xl font-bold text-stone-800 mb-4 flex items-center gap-2">
            <CalendarIcon className="w-5 h-5 text-stone-600" />
            Select Date
          </h2>
          <div className="bg-stone-50/50 p-4 rounded-lg flex justify-center border border-stone-200">
            <DayPicker
              mode="single"
              selected={selectedDate}
              onSelect={handleDateSelect}
              disabled={[{ before: new Date() }, ...blockedDates]}
              modifiersClassNames={{
                selected: 'bg-stone-800 text-white hover:bg-stone-900',
                today: 'font-bold text-amber-700'
              }}
              className="p-0"
              classNames={{
                day_selected: "bg-stone-800 text-white hover:bg-stone-800 hover:text-white focus:bg-stone-800 focus:text-white rounded-md",
                day_today: "text-amber-700 font-bold",
                day: "h-9 w-9 p-0 font-normal aria-selected:opacity-100 hover:bg-stone-100 rounded-md transition-colors",
                head_cell: "text-stone-500 rounded-md w-9 font-normal text-[0.8rem]",
              }}
            />
          </div>
          <p className="text-sm text-stone-500 mt-4 text-center">
            {selectedDate 
              ? `Selected: ${format(selectedDate, 'EEEE, MMMM do, yyyy')}`
              : 'Please pick a date to see available times.'}
          </p>
        </div>

        {/* RIGHT COLUMN: Time & Duration */}
        <div className="flex flex-col">
          <h2 className="text-xl font-bold text-stone-800 mb-4 flex items-center gap-2">
            <Clock className="w-5 h-5 text-stone-600" />
            Select Time
          </h2>

          {!selectedDate ? (
            <div className="flex-1 flex flex-col items-center justify-center text-stone-400 bg-stone-50 rounded-lg border border-dashed border-stone-200 min-h-[300px]">
              <CalendarIcon className="w-12 h-12 mb-2 opacity-20" />
              <p>Choose a date first</p>
            </div>
          ) : (
            <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
              
              {/* Time Slots Grid */}
              <div>
                <label className="block text-sm font-medium text-stone-700 mb-2">
                  Start Time
                </label>
                {timeSlots.length === 0 ? (
                  <div className="text-center p-4 bg-amber-50 text-amber-800 rounded-md border border-amber-100 flex items-center justify-center gap-2">
                    <AlertCircle className="w-4 h-4" />
                    No slots available for this date.
                  </div>
                ) : (
                  <div className="grid grid-cols-3 sm:grid-cols-4 gap-2 max-h-[200px] overflow-y-auto pr-2 custom-scrollbar">
                    {timeSlots.map((time) => (
                      <button
                        key={time}
                        onClick={() => handleTimeSelect(time)}
                        className={clsx(
                          "py-2 px-1 text-sm rounded-md border transition-all duration-200",
                          startTime === time
                            ? "bg-stone-800 text-white border-stone-800 shadow-sm transform scale-105"
                            : "bg-white text-stone-600 border-stone-200 hover:border-stone-400 hover:bg-stone-50"
                        )}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Duration Selection (Only visible if Start Time selected) */}
              {startTime && (
                <div className="animate-in fade-in slide-in-from-top-2 duration-300">
                  <label className="block text-sm font-medium text-stone-700 mb-2">
                    Duration
                  </label>
                  <select
                    value={durationMinutes}
                    onChange={(e) => setDurationMinutes(Number(e.target.value))}
                    className="w-full p-2.5 bg-white border border-stone-300 rounded-md shadow-sm focus:ring-2 focus:ring-stone-500 focus:border-stone-500 outline-none text-stone-700"
                  >
                    {durationOptions.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                  <p className="text-xs text-stone-500 mt-1">
                    Price: 10€ / 30 mins
                  </p>
                </div>
              )}

            </div>
          )}

          {/* Spacer to push summary to bottom */}
          <div className="flex-grow" />

          {/* Summary Card */}
          {startTime && selectedDate && (
            <div className="mt-8 bg-stone-100 text-stone-800 p-6 rounded-xl border border-stone-200 animate-in fade-in slide-in-from-bottom-4">
              <h3 className="text-lg font-semibold mb-4 border-b border-stone-200 pb-2 text-stone-900">
                Reservation Summary
              </h3>
              
              <div className="space-y-2 text-sm text-stone-600 mb-6">
                <div className="flex justify-between">
                  <span>Date:</span>
                  <span className="font-medium text-stone-900">{format(selectedDate, 'MMM do, yyyy')}</span>
                </div>
                <div className="flex justify-between">
                  <span>Time:</span>
                  <span className="font-medium text-stone-900">{startTime} - {format(addMinutes(parse(startTime, 'HH:mm', selectedDate), durationMinutes), 'HH:mm')}</span>
                </div>
                <div className="flex justify-between">
                  <span>Duration:</span>
                  <span className="font-medium text-stone-900">{durationMinutes / 60} hours</span>
                </div>
              </div>

              <div className="flex items-end justify-between mb-6 border-t border-stone-200 pt-4">
                <span className="text-stone-500">Total Price</span>
                <span className="text-3xl font-bold text-stone-800">{totalPrice.toFixed(2)}€</span>
              </div>

              <button
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="w-full bg-stone-800 hover:bg-stone-900 text-white font-bold py-3 px-4 rounded-lg transition-colors flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed shadow-sm"
              >
                {isSubmitting ? 'Processing...' : (
                  <>
                    Reserve Now
                    <CheckCircle className="w-5 h-5" />
                  </>
                )}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

