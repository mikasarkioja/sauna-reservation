export const PRICING_PER_30_MINS_CENTS = 1000; // 10.00€
export const MIN_DURATION_MINUTES = 60;

export class PricingError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'PricingError';
  }
}

/**
 * Calculates the sauna reservation price based on start and end time.
 * 
 * Rules:
 * - Minimum reservation is 1 hour.
 * - Pricing is 10€ per 30-minute block.
 * - Duration must be a multiple of 30 minutes.
 * 
 * @param start Start date of the reservation
 * @param end End date of the reservation
 * @returns Price in cents
 * @throws PricingError if validation fails
 */
export function calculateSaunaPrice(start: Date, end: Date): number {
  const startTime = start.getTime();
  const endTime = end.getTime();

  if (endTime <= startTime) {
    throw new PricingError('End time must be after start time.');
  }

  const durationMs = endTime - startTime;
  const durationMinutes = durationMs / (1000 * 60);

  // 1. Validate minimum duration
  if (durationMinutes < MIN_DURATION_MINUTES) {
    throw new PricingError(`Minimum reservation time is ${MIN_DURATION_MINUTES / 60} hour(s).`);
  }

  // 2. Validate 30-minute blocks
  if (durationMinutes % 30 !== 0) {
    throw new PricingError('Reservation duration must be in 30-minute increments.');
  }

  // 3. Calculate price
  const blocks = durationMinutes / 30;
  const priceCents = blocks * PRICING_PER_30_MINS_CENTS;

  return priceCents;
}





