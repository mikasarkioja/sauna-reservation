module.exports = [
"[externals]/@prisma/client [external] (@prisma/client, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("@prisma/client", () => require("@prisma/client"));

module.exports = mod;
}),
"[project]/src/lib/prisma.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/@prisma/client [external] (@prisma/client, cjs)");
;
const prismaClientSingleton = ()=>{
    return new __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["PrismaClient"]();
};
const globalForPrisma = globalThis;
const prisma = globalForPrisma.prisma ?? prismaClientSingleton();
const __TURBOPACK__default__export__ = prisma;
if ("TURBOPACK compile-time truthy", 1) globalForPrisma.prisma = prisma;
}),
"[externals]/crypto [external] (crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}),
"[externals]/events [external] (events, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("events", () => require("events"));

module.exports = mod;
}),
"[externals]/http [external] (http, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("http", () => require("http"));

module.exports = mod;
}),
"[externals]/https [external] (https, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("https", () => require("https"));

module.exports = mod;
}),
"[externals]/child_process [external] (child_process, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("child_process", () => require("child_process"));

module.exports = mod;
}),
"[project]/src/lib/stripe.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "stripe",
    ()=>stripe
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stripe$2f$esm$2f$stripe$2e$esm$2e$node$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/stripe/esm/stripe.esm.node.js [app-rsc] (ecmascript)");
;
if (!process.env.STRIPE_SECRET_KEY) {
    throw new Error('STRIPE_SECRET_KEY is missing. Please set it in your .env file.');
}
const stripe = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stripe$2f$esm$2f$stripe$2e$esm$2e$node$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"](process.env.STRIPE_SECRET_KEY, {
    apiVersion: '2024-11-20.acacia',
    typescript: true
});
}),
"[project]/src/lib/pricing.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MIN_DURATION_MINUTES",
    ()=>MIN_DURATION_MINUTES,
    "PRICING_PER_30_MINS_CENTS",
    ()=>PRICING_PER_30_MINS_CENTS,
    "PricingError",
    ()=>PricingError,
    "calculateSaunaPrice",
    ()=>calculateSaunaPrice
]);
const PRICING_PER_30_MINS_CENTS = 1000; // 10.00€
const MIN_DURATION_MINUTES = 60;
class PricingError extends Error {
    constructor(message){
        super(message);
        this.name = 'PricingError';
    }
}
function calculateSaunaPrice(start, end) {
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
}),
"[project]/src/app/actions/create-booking.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"40e558c964b00310a5a13d8d96defbb8470f6960a7":"createBooking"},"",""] */ __turbopack_context__.s([
    "createBooking",
    ()=>createBooking
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/prisma.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$stripe$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/stripe.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$pricing$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/pricing.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/@prisma/client [external] (@prisma/client, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
;
;
;
;
async function createBooking(data) {
    try {
        const start = new Date(data.startTime);
        const end = new Date(data.endTime);
        const { userEmail, userName } = data;
        console.log('DEBUG: NEXT_PUBLIC_APP_URL is:', ("TURBOPACK compile-time value", "http://localhost:3000")); // Debug log
        // 1. Basic Validation
        if (!userEmail) {
            throw new Error('User email is required.');
        }
        // Validate dates and calculate price
        // This throws PricingError if invalid
        const priceInCents = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$pricing$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["calculateSaunaPrice"])(start, end);
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
        const booking = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].$transaction(async (tx)=>{
            // Check for overlapping bookings that are NOT failed/cancelled
            // Overlap logic: (StartA < EndB) and (EndA > StartB)
            const existingBooking = await tx.booking.findFirst({
                where: {
                    AND: [
                        {
                            startTime: {
                                lt: end
                            }
                        },
                        {
                            endTime: {
                                gt: start
                            }
                        },
                        {
                            status: {
                                in: [
                                    __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["BookingStatus"].PENDING,
                                    __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["BookingStatus"].PAID
                                ]
                            }
                        }
                    ]
                }
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
                    status: __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["BookingStatus"].PENDING
                }
            });
        });
        // 3. Create Stripe Checkout Session
        // We do this AFTER creating the booking record so we have the ID.
        // If Stripe fails, the PENDING booking will eventually need to be cleaned up (e.g. cron job or webhook expiry).
        // Fallback to localhost if env var is missing (helpful for dev)
        const appUrl = ("TURBOPACK compile-time value", "http://localhost:3000") || 'http://localhost:3000';
        console.log('Using App URL:', appUrl);
        const session = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$stripe$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["stripe"].checkout.sessions.create({
            payment_method_types: [
                'card'
            ],
            line_items: [
                {
                    price_data: {
                        currency: 'eur',
                        product_data: {
                            name: 'Sauna Reservation',
                            description: `${start.toLocaleString()} - ${end.toLocaleString()}`
                        },
                        unit_amount: priceInCents
                    },
                    quantity: 1
                }
            ],
            mode: 'payment',
            success_url: `${appUrl}/success?session_id={CHECKOUT_SESSION_ID}`,
            cancel_url: `${appUrl}/cancel`,
            metadata: {
                bookingId: booking.id
            },
            customer_email: userEmail
        });
        if (!session.url) {
            throw new Error('Failed to create Stripe session URL.');
        }
        // 4. Update booking with Stripe Session ID
        // This allows us to look up the booking when the Stripe Webhook fires.
        await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].booking.update({
            where: {
                id: booking.id
            },
            data: {
                stripeSessionId: session.id
            }
        });
        return {
            success: true,
            url: session.url
        };
    } catch (error) {
        console.error('Create Booking Error:', error);
        // Distinguish expected validation errors from system errors
        if (error instanceof __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$pricing$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["PricingError"]) {
            return {
                success: false,
                error: error.message
            };
        }
        // Return a generic error for safety, or specific if it's an expected "Slot taken" error
        const message = error instanceof Error ? error.message : 'An unexpected error occurred.';
        return {
            success: false,
            error: message
        };
    }
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    createBooking
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(createBooking, "40e558c964b00310a5a13d8d96defbb8470f6960a7", null);
}),
"[project]/.next-internal/server/app/page/actions.js { ACTIONS_MODULE0 => \"[project]/src/app/actions/create-booking.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$create$2d$booking$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/actions/create-booking.ts [app-rsc] (ecmascript)");
;
}),
"[project]/.next-internal/server/app/page/actions.js { ACTIONS_MODULE0 => \"[project]/src/app/actions/create-booking.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "40e558c964b00310a5a13d8d96defbb8470f6960a7",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$create$2d$booking$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createBooking"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$app$2f$actions$2f$create$2d$booking$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/page/actions.js { ACTIONS_MODULE0 => "[project]/src/app/actions/create-booking.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$create$2d$booking$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/actions/create-booking.ts [app-rsc] (ecmascript)");
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__a3148874._.js.map