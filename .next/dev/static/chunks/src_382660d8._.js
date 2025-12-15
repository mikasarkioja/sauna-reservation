(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/app/actions/data:a8c2cd [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"40e558c964b00310a5a13d8d96defbb8470f6960a7":"createBooking"},"src/app/actions/create-booking.ts",""] */ __turbopack_context__.s([
    "createBooking",
    ()=>createBooking
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
"use turbopack no side effects";
;
var createBooking = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("40e558c964b00310a5a13d8d96defbb8470f6960a7", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "createBooking"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vY3JlYXRlLWJvb2tpbmcudHMiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzZXJ2ZXInO1xuXG5pbXBvcnQgcHJpc21hIGZyb20gJy4uLy4uL2xpYi9wcmlzbWEnO1xuaW1wb3J0IHsgc3RyaXBlIH0gZnJvbSAnLi4vLi4vbGliL3N0cmlwZSc7XG5pbXBvcnQgeyBjYWxjdWxhdGVTYXVuYVByaWNlLCBQcmljaW5nRXJyb3IgfSBmcm9tICcuLi8uLi9saWIvcHJpY2luZyc7XG5pbXBvcnQgeyBCb29raW5nU3RhdHVzIH0gZnJvbSAnQHByaXNtYS9jbGllbnQnO1xuXG4vKipcbiAqIEludGVyZmFjZSBmb3IgdGhlIGJvb2tpbmcgcmVxdWVzdCBwYXlsb2FkXG4gKi9cbmludGVyZmFjZSBDcmVhdGVCb29raW5nUmVxdWVzdCB7XG4gIHVzZXJFbWFpbDogc3RyaW5nO1xuICB1c2VyTmFtZT86IHN0cmluZztcbiAgc3RhcnRUaW1lOiBzdHJpbmc7IC8vIElTTyBzdHJpbmdcbiAgZW5kVGltZTogc3RyaW5nOyAgIC8vIElTTyBzdHJpbmdcbn1cblxuLyoqXG4gKiBJbnRlcmZhY2UgZm9yIHRoZSBzZXJ2ZXIgYWN0aW9uIHJlc3BvbnNlXG4gKi9cbmludGVyZmFjZSBDcmVhdGVCb29raW5nUmVzcG9uc2Uge1xuICBzdWNjZXNzOiBib29sZWFuO1xuICB1cmw/OiBzdHJpbmc7XG4gIGVycm9yPzogc3RyaW5nO1xufVxuXG4vKipcbiAqIFNlcnZlciBBY3Rpb24gdG8gY3JlYXRlIGEgc2F1bmEgYm9va2luZy5cbiAqIFxuICogRmxvdzpcbiAqIDEuIFZhbGlkYXRlIGlucHV0cyBhbmQgY2FsY3VsYXRlIHByaWNlLlxuICogMi4gQ2hlY2sgZm9yIGF2YWlsYWJpbGl0eSAoY29uY3VycmVuY3kgaGFuZGxpbmcpLlxuICogMy4gQ3JlYXRlIFBFTkRJTkcgYm9va2luZyBpbiBEQi5cbiAqIDQuIENyZWF0ZSBTdHJpcGUgQ2hlY2tvdXQgU2Vzc2lvbi5cbiAqIDUuIFVwZGF0ZSBib29raW5nIHdpdGggU3RyaXBlIFNlc3Npb24gSUQuXG4gKiA2LiBSZXR1cm4gU3RyaXBlIFVSTC5cbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZUJvb2tpbmcoZGF0YTogQ3JlYXRlQm9va2luZ1JlcXVlc3QpOiBQcm9taXNlPENyZWF0ZUJvb2tpbmdSZXNwb25zZT4ge1xuICB0cnkge1xuICAgIGNvbnN0IHN0YXJ0ID0gbmV3IERhdGUoZGF0YS5zdGFydFRpbWUpO1xuICAgIGNvbnN0IGVuZCA9IG5ldyBEYXRlKGRhdGEuZW5kVGltZSk7XG4gICAgY29uc3QgeyB1c2VyRW1haWwsIHVzZXJOYW1lIH0gPSBkYXRhO1xuXG4gICAgLy8gMS4gQmFzaWMgVmFsaWRhdGlvblxuICAgIGlmICghdXNlckVtYWlsKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1VzZXIgZW1haWwgaXMgcmVxdWlyZWQuJyk7XG4gICAgfVxuICAgIFxuICAgIC8vIFZhbGlkYXRlIGRhdGVzIGFuZCBjYWxjdWxhdGUgcHJpY2VcbiAgICAvLyBUaGlzIHRocm93cyBQcmljaW5nRXJyb3IgaWYgaW52YWxpZFxuICAgIGNvbnN0IHByaWNlSW5DZW50cyA9IGNhbGN1bGF0ZVNhdW5hUHJpY2Uoc3RhcnQsIGVuZCk7XG5cbiAgICAvLyAyLiBBdmFpbGFiaWxpdHkgQ2hlY2sgJiBSZXNlcnZhdGlvbiAoQ29uY3VycmVuY3kgSGFuZGxpbmcpXG4gICAgLy8gXG4gICAgLy8gQ09OQ1VSUkVOQ1kgRVhQTEFOQVRJT046XG4gICAgLy8gVGhlIFwiQ2hlY2stVGhlbi1BY3RcIiByYWNlIGNvbmRpdGlvbiBvY2N1cnMgd2hlbiB0d28gcmVxdWVzdHMgY2hlY2sgZm9yIGF2YWlsYWJpbGl0eSBcbiAgICAvLyBhdCB0aGUgc2FtZSB0aW1lLCBib3RoIHNlZSB0aGUgc2xvdCBhcyBmcmVlLCBhbmQgYm90aCBpbnNlcnQgYSBib29raW5nLlxuICAgIC8vXG4gICAgLy8gVG8gc29sdmUgdGhpcyBpbiBhIHJvYnVzdCBwcm9kdWN0aW9uIGVudmlyb25tZW50LCB3ZSBoYXZlIGEgZmV3IG9wdGlvbnM6XG4gICAgLy8gQSkgUG9zdGdyZXMgRXhjbHVzaW9uIENvbnN0cmFpbnRzOiBBZGQgYSBjb25zdHJhaW50IHRvIHRoZSBEQiB0byBwaHlzaWNhbGx5IHByZXZlbnQgb3ZlcmxhcHBpbmcgdGltZSByYW5nZXMgKGJlc3QpLlxuICAgIC8vIEIpIFNlcmlhbGl6YWJsZSBUcmFuc2FjdGlvbnM6IFJ1biB0aGUgdHJhbnNhY3Rpb24gd2l0aCAnU2VyaWFsaXphYmxlJyBpc29sYXRpb24gbGV2ZWwuXG4gICAgLy8gQykgVGFibGUgTG9ja2luZzogTG9jayB0aGUgdGFibGUgKGJhZCBmb3IgcGVyZm9ybWFuY2UpLlxuICAgIC8vXG4gICAgLy8gSGVyZSwgd2UgdXNlIGEgUHJpc21hIHRyYW5zYWN0aW9uIHRvIGdyb3VwIHRoZSBjaGVjayBhbmQgdGhlIGluc2VydC4gXG4gICAgLy8gSWRlYWxseSwgd2Ugd291bGQgdXNlIGBpc29sYXRpb25MZXZlbDogJ1NlcmlhbGl6YWJsZSdgLCBidXQgdGhhdCByZXF1aXJlcyByZXRyeSBsb2dpYyBhcyBzZXJpYWxpemF0aW9uIGZhaWx1cmVzIGFyZSBleHBlY3RlZC5cbiAgICAvLyBGb3IgdGhpcyBzY2FmZm9sZCwgd2UgcGVyZm9ybSBhIGNoZWNrIGZvciBvdmVybGFwcGluZyBib29raW5ncyB3aXRoaW4gdGhlIHRyYW5zYWN0aW9uLiBcbiAgICAvLyBOb3RlOiBXaXRob3V0IFNlcmlhbGl6YWJsZSBpc29sYXRpb24gb3IgRXhjbHVzaW9uIGNvbnN0cmFpbnRzLCBhIHJhY2UgY29uZGl0aW9uIGlzIHN0aWxsIHRoZW9yZXRpY2FsbHkgcG9zc2libGUgXG4gICAgLy8gaWYgdGhlIERCIGlzb2xhdGlvbiBsZXZlbCBpcyBSZWFkIENvbW1pdHRlZCAoZGVmYXVsdCkuXG4gICAgXG4gICAgY29uc3QgYm9va2luZyA9IGF3YWl0IHByaXNtYS4kdHJhbnNhY3Rpb24oYXN5bmMgKHR4KSA9PiB7XG4gICAgICAvLyBDaGVjayBmb3Igb3ZlcmxhcHBpbmcgYm9va2luZ3MgdGhhdCBhcmUgTk9UIGZhaWxlZC9jYW5jZWxsZWRcbiAgICAgIC8vIE92ZXJsYXAgbG9naWM6IChTdGFydEEgPCBFbmRCKSBhbmQgKEVuZEEgPiBTdGFydEIpXG4gICAgICBjb25zdCBleGlzdGluZ0Jvb2tpbmcgPSBhd2FpdCB0eC5ib29raW5nLmZpbmRGaXJzdCh7XG4gICAgICAgIHdoZXJlOiB7XG4gICAgICAgICAgQU5EOiBbXG4gICAgICAgICAgICB7IHN0YXJ0VGltZTogeyBsdDogZW5kIH0gfSxcbiAgICAgICAgICAgIHsgZW5kVGltZTogeyBndDogc3RhcnQgfSB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBzdGF0dXM6IHtcbiAgICAgICAgICAgICAgICBpbjogW0Jvb2tpbmdTdGF0dXMuUEVORElORywgQm9va2luZ1N0YXR1cy5QQUlEXSxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgXSxcbiAgICAgICAgfSxcbiAgICAgIH0pO1xuXG4gICAgICBpZiAoZXhpc3RpbmdCb29raW5nKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignVGhlIHNlbGVjdGVkIHRpbWUgc2xvdCBpcyBhbHJlYWR5IGJvb2tlZC4nKTtcbiAgICAgIH1cblxuICAgICAgLy8gQ3JlYXRlIFBFTkRJTkcgYm9va2luZ1xuICAgICAgcmV0dXJuIHR4LmJvb2tpbmcuY3JlYXRlKHtcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgIHVzZXJFbWFpbCxcbiAgICAgICAgICB1c2VyTmFtZSxcbiAgICAgICAgICBzdGFydFRpbWU6IHN0YXJ0LFxuICAgICAgICAgIGVuZFRpbWU6IGVuZCxcbiAgICAgICAgICB0b3RhbFByaWNlOiBwcmljZUluQ2VudHMsXG4gICAgICAgICAgc3RhdHVzOiBCb29raW5nU3RhdHVzLlBFTkRJTkcsXG4gICAgICAgIH0sXG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIC8vIDMuIENyZWF0ZSBTdHJpcGUgQ2hlY2tvdXQgU2Vzc2lvblxuICAgIC8vIFdlIGRvIHRoaXMgQUZURVIgY3JlYXRpbmcgdGhlIGJvb2tpbmcgcmVjb3JkIHNvIHdlIGhhdmUgdGhlIElELlxuICAgIC8vIElmIFN0cmlwZSBmYWlscywgdGhlIFBFTkRJTkcgYm9va2luZyB3aWxsIGV2ZW50dWFsbHkgbmVlZCB0byBiZSBjbGVhbmVkIHVwIChlLmcuIGNyb24gam9iIG9yIHdlYmhvb2sgZXhwaXJ5KS5cbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgc3RyaXBlLmNoZWNrb3V0LnNlc3Npb25zLmNyZWF0ZSh7XG4gICAgICBwYXltZW50X21ldGhvZF90eXBlczogWydjYXJkJ10sXG4gICAgICBsaW5lX2l0ZW1zOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBwcmljZV9kYXRhOiB7XG4gICAgICAgICAgICBjdXJyZW5jeTogJ2V1cicsXG4gICAgICAgICAgICBwcm9kdWN0X2RhdGE6IHtcbiAgICAgICAgICAgICAgbmFtZTogJ1NhdW5hIFJlc2VydmF0aW9uJyxcbiAgICAgICAgICAgICAgZGVzY3JpcHRpb246IGAke3N0YXJ0LnRvTG9jYWxlU3RyaW5nKCl9IC0gJHtlbmQudG9Mb2NhbGVTdHJpbmcoKX1gLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHVuaXRfYW1vdW50OiBwcmljZUluQ2VudHMsXG4gICAgICAgICAgfSxcbiAgICAgICAgICBxdWFudGl0eTogMSxcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgICBtb2RlOiAncGF5bWVudCcsXG4gICAgICBzdWNjZXNzX3VybDogYCR7cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQVBQX1VSTH0vc3VjY2Vzcz9zZXNzaW9uX2lkPXtDSEVDS09VVF9TRVNTSU9OX0lEfWAsXG4gICAgICBjYW5jZWxfdXJsOiBgJHtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19BUFBfVVJMfS9jYW5jZWxgLFxuICAgICAgbWV0YWRhdGE6IHtcbiAgICAgICAgYm9va2luZ0lkOiBib29raW5nLmlkLCAvLyBDcml0aWNhbDogTGluayBTdHJpcGUgc2Vzc2lvbiB0byBvdXIgQm9va2luZ1xuICAgICAgfSxcbiAgICAgIGN1c3RvbWVyX2VtYWlsOiB1c2VyRW1haWwsXG4gICAgfSk7XG5cbiAgICBpZiAoIXNlc3Npb24udXJsKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ZhaWxlZCB0byBjcmVhdGUgU3RyaXBlIHNlc3Npb24gVVJMLicpO1xuICAgIH1cblxuICAgIC8vIDQuIFVwZGF0ZSBib29raW5nIHdpdGggU3RyaXBlIFNlc3Npb24gSURcbiAgICAvLyBUaGlzIGFsbG93cyB1cyB0byBsb29rIHVwIHRoZSBib29raW5nIHdoZW4gdGhlIFN0cmlwZSBXZWJob29rIGZpcmVzLlxuICAgIGF3YWl0IHByaXNtYS5ib29raW5nLnVwZGF0ZSh7XG4gICAgICB3aGVyZTogeyBpZDogYm9va2luZy5pZCB9LFxuICAgICAgZGF0YTogeyBzdHJpcGVTZXNzaW9uSWQ6IHNlc3Npb24uaWQgfSxcbiAgICB9KTtcblxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIHVybDogc2Vzc2lvbi51cmwgfTtcblxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoJ0NyZWF0ZSBCb29raW5nIEVycm9yOicsIGVycm9yKTtcbiAgICBcbiAgICAvLyBEaXN0aW5ndWlzaCBleHBlY3RlZCB2YWxpZGF0aW9uIGVycm9ycyBmcm9tIHN5c3RlbSBlcnJvcnNcbiAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBQcmljaW5nRXJyb3IpIHtcbiAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcbiAgICB9XG4gICAgXG4gICAgLy8gUmV0dXJuIGEgZ2VuZXJpYyBlcnJvciBmb3Igc2FmZXR5LCBvciBzcGVjaWZpYyBpZiBpdCdzIGFuIGV4cGVjdGVkIFwiU2xvdCB0YWtlblwiIGVycm9yXG4gICAgY29uc3QgbWVzc2FnZSA9IGVycm9yIGluc3RhbmNlb2YgRXJyb3IgPyBlcnJvci5tZXNzYWdlIDogJ0FuIHVuZXhwZWN0ZWQgZXJyb3Igb2NjdXJyZWQuJztcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IG1lc3NhZ2UgfTtcbiAgfVxufVxuXG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IndTQXFDc0IifQ==
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/pricing.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/booking/BookingForm.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>BookingForm
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
// Fix: Import 'createBooking' but rename it to 'createSaunaCheckout' 
// so the rest of your component works without changes.
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$a8c2cd__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/app/actions/data:a8c2cd [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/date-fns/format.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$addMinutes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/date-fns/addMinutes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$isSameDay$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/date-fns/isSameDay.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$startOfToday$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/date-fns/startOfToday.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$parse$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/date-fns/parse.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$DayPicker$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-day-picker/dist/esm/DayPicker.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/calendar.js [app-client] (ecmascript) <export default as Calendar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clock.js [app-client] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check-big.js [app-client] (ecmascript) <export default as CheckCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-alert.js [app-client] (ecmascript) <export default as AlertCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$pricing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/pricing.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
;
// Dummy data for booked slots to demonstrate logic
// In a real app, this would be fetched based on the selected date
const DUMMY_BOOKED_SLOTS = [
    '14:00',
    '14:30',
    '15:00' // Someone booked 14:00 - 15:30
];
// Configuration
const OPENING_HOUR = 10;
const CLOSING_HOUR = 22;
function BookingForm({ blockedDates = [] }) {
    _s();
    // --- State ---
    const [selectedDate, setSelectedDate] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](undefined);
    const [startTime, setStartTime] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](null);
    const [durationMinutes, setDurationMinutes] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$pricing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MIN_DURATION_MINUTES"]); // Default 1 hour
    const [isSubmitting, setIsSubmitting] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](false);
    // --- Derived State & Helpers ---
    // Generate available start times for the selected date
    const timeSlots = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "BookingForm.useMemo[timeSlots]": ()=>{
            if (!selectedDate) return [];
            const slots = [];
            const today = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$startOfToday$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["startOfToday"])();
            const isToday = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$isSameDay$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isSameDay"])(selectedDate, today);
            const now = new Date();
            // Iterate from OPENING_HOUR to CLOSING_HOUR - (MIN_DURATION)
            // We stop early because the last booking must be at least MIN_DURATION long.
            // E.g. Closing 22:00, Min 1h -> Last start time 21:00.
            const lastStartHour = CLOSING_HOUR - __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$pricing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MIN_DURATION_MINUTES"] / 60;
            for(let hour = OPENING_HOUR; hour <= lastStartHour; hour++){
                for(let minute = 0; minute < 60; minute += 30){
                    // Skip if this slot would start after the cut-off
                    if (hour === lastStartHour && minute > 0) continue;
                    const timeString = `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`;
                    // Filter out past times if date is today
                    if (isToday) {
                        const slotDate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$parse$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["parse"])(timeString, 'HH:mm', selectedDate);
                        if (slotDate < now) continue;
                    }
                    // Filter out booked slots (Dummy Logic)
                    if (DUMMY_BOOKED_SLOTS.includes(timeString)) continue;
                    slots.push(timeString);
                }
            }
            return slots;
        }
    }["BookingForm.useMemo[timeSlots]"], [
        selectedDate
    ]);
    // Generate duration options based on selected start time
    const durationOptions = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "BookingForm.useMemo[durationOptions]": ()=>{
            if (!startTime || !selectedDate) return [];
            const [startHour, startMinute] = startTime.split(':').map(Number);
            const startTotalMinutes = startHour * 60 + startMinute;
            const closingTotalMinutes = CLOSING_HOUR * 60;
            const maxDurationMinutes = closingTotalMinutes - startTotalMinutes;
            const options = [];
            // Increment by 30 mins, starting from MIN_DURATION
            for(let d = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$pricing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MIN_DURATION_MINUTES"]; d <= maxDurationMinutes; d += 30){
                // Check if this duration overlaps with any booked slots (Simplified check)
                // In a real app, you'd check if the range [startTime, startTime + d] overlaps with existing bookings
                const priceEur = d / 30 * (__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$pricing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PRICING_PER_30_MINS_CENTS"] / 100);
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
        }
    }["BookingForm.useMemo[durationOptions]"], [
        startTime,
        selectedDate
    ]);
    // Calculate Total Price
    const totalPrice = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "BookingForm.useMemo[totalPrice]": ()=>{
            return durationMinutes / 30 * (__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$pricing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PRICING_PER_30_MINS_CENTS"] / 100);
        }
    }["BookingForm.useMemo[totalPrice]"], [
        durationMinutes
    ]);
    // --- Handlers ---
    const handleDateSelect = (date)=>{
        setSelectedDate(date);
        setStartTime(null); // Reset time when date changes
        setDurationMinutes(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$pricing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MIN_DURATION_MINUTES"]);
    };
    const handleTimeSelect = (time)=>{
        setStartTime(time);
        setDurationMinutes(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$pricing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MIN_DURATION_MINUTES"]); // Reset duration to min
    };
    const handleSubmit = async ()=>{
        if (!selectedDate || !startTime) return;
        setIsSubmitting(true);
        try {
            // 1. Calculate the start and end Date objects
            // "startTime" is a string like "14:30", we need to combine it with "selectedDate"
            const startDateTime = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$parse$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["parse"])(startTime, 'HH:mm', selectedDate);
            const endDateTime = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$addMinutes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addMinutes"])(startDateTime, durationMinutes);
            // 2. Call the Server Action (This runs on the server, creates DB record, and talks to Stripe)
            // We assume you have a hardcoded user email for now, or you can add an input field for it
            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$a8c2cd__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["createBooking"])({
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
        } finally{
            setIsSubmitting(false);
        }
    };
    // --- Render ---
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "max-w-4xl mx-auto p-4 md:p-6 bg-white rounded-xl shadow-sm border border-stone-200",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid grid-cols-1 md:grid-cols-2 gap-8",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-xl font-bold text-stone-800 mb-4 flex items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
                                    className: "w-5 h-5 text-stone-600"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/booking/BookingForm.tsx",
                                    lineNumber: 176,
                                    columnNumber: 13
                                }, this),
                                "Select Date"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/booking/BookingForm.tsx",
                            lineNumber: 175,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-stone-50/50 p-4 rounded-lg flex justify-center border border-stone-200",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$DayPicker$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DayPicker"], {
                                mode: "single",
                                selected: selectedDate,
                                onSelect: handleDateSelect,
                                disabled: [
                                    {
                                        before: new Date()
                                    },
                                    ...blockedDates
                                ],
                                modifiersClassNames: {
                                    selected: 'bg-stone-800 text-white hover:bg-stone-900',
                                    today: 'font-bold text-amber-700'
                                },
                                className: "p-0",
                                classNames: {
                                    day_selected: "bg-stone-800 text-white hover:bg-stone-800 hover:text-white focus:bg-stone-800 focus:text-white rounded-md",
                                    day_today: "text-amber-700 font-bold",
                                    day: "h-9 w-9 p-0 font-normal aria-selected:opacity-100 hover:bg-stone-100 rounded-md transition-colors",
                                    head_cell: "text-stone-500 rounded-md w-9 font-normal text-[0.8rem]"
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/components/booking/BookingForm.tsx",
                                lineNumber: 180,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/booking/BookingForm.tsx",
                            lineNumber: 179,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm text-stone-500 mt-4 text-center",
                            children: selectedDate ? `Selected: ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])(selectedDate, 'EEEE, MMMM do, yyyy')}` : 'Please pick a date to see available times.'
                        }, void 0, false, {
                            fileName: "[project]/src/components/booking/BookingForm.tsx",
                            lineNumber: 198,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/booking/BookingForm.tsx",
                    lineNumber: 174,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-xl font-bold text-stone-800 mb-4 flex items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                    className: "w-5 h-5 text-stone-600"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/booking/BookingForm.tsx",
                                    lineNumber: 208,
                                    columnNumber: 13
                                }, this),
                                "Select Time"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/booking/BookingForm.tsx",
                            lineNumber: 207,
                            columnNumber: 11
                        }, this),
                        !selectedDate ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex-1 flex flex-col items-center justify-center text-stone-400 bg-stone-50 rounded-lg border border-dashed border-stone-200 min-h-[300px]",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
                                    className: "w-12 h-12 mb-2 opacity-20"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/booking/BookingForm.tsx",
                                    lineNumber: 214,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: "Choose a date first"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/booking/BookingForm.tsx",
                                    lineNumber: 215,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/booking/BookingForm.tsx",
                            lineNumber: 213,
                            columnNumber: 13
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-sm font-medium text-stone-700 mb-2",
                                            children: "Start Time"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/booking/BookingForm.tsx",
                                            lineNumber: 222,
                                            columnNumber: 17
                                        }, this),
                                        timeSlots.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-center p-4 bg-amber-50 text-amber-800 rounded-md border border-amber-100 flex items-center justify-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
                                                    className: "w-4 h-4"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/booking/BookingForm.tsx",
                                                    lineNumber: 227,
                                                    columnNumber: 21
                                                }, this),
                                                "No slots available for this date."
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/booking/BookingForm.tsx",
                                            lineNumber: 226,
                                            columnNumber: 19
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid grid-cols-3 sm:grid-cols-4 gap-2 max-h-[200px] overflow-y-auto pr-2 custom-scrollbar",
                                            children: timeSlots.map((time)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>handleTimeSelect(time),
                                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])("py-2 px-1 text-sm rounded-md border transition-all duration-200", startTime === time ? "bg-stone-800 text-white border-stone-800 shadow-sm transform scale-105" : "bg-white text-stone-600 border-stone-200 hover:border-stone-400 hover:bg-stone-50"),
                                                    children: time
                                                }, time, false, {
                                                    fileName: "[project]/src/components/booking/BookingForm.tsx",
                                                    lineNumber: 233,
                                                    columnNumber: 23
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/booking/BookingForm.tsx",
                                            lineNumber: 231,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/booking/BookingForm.tsx",
                                    lineNumber: 221,
                                    columnNumber: 15
                                }, this),
                                startTime && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "animate-in fade-in slide-in-from-top-2 duration-300",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-sm font-medium text-stone-700 mb-2",
                                            children: "Duration"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/booking/BookingForm.tsx",
                                            lineNumber: 253,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                            value: durationMinutes,
                                            onChange: (e)=>setDurationMinutes(Number(e.target.value)),
                                            className: "w-full p-2.5 bg-white border border-stone-300 rounded-md shadow-sm focus:ring-2 focus:ring-stone-500 focus:border-stone-500 outline-none text-stone-700",
                                            children: durationOptions.map((option)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: option.value,
                                                    children: option.label
                                                }, option.value, false, {
                                                    fileName: "[project]/src/components/booking/BookingForm.tsx",
                                                    lineNumber: 262,
                                                    columnNumber: 23
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/booking/BookingForm.tsx",
                                            lineNumber: 256,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-stone-500 mt-1",
                                            children: "Price: 10€ / 30 mins"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/booking/BookingForm.tsx",
                                            lineNumber: 267,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/booking/BookingForm.tsx",
                                    lineNumber: 252,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/booking/BookingForm.tsx",
                            lineNumber: 218,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex-grow"
                        }, void 0, false, {
                            fileName: "[project]/src/components/booking/BookingForm.tsx",
                            lineNumber: 277,
                            columnNumber: 11
                        }, this),
                        startTime && selectedDate && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-8 bg-stone-100 text-stone-800 p-6 rounded-xl border border-stone-200 animate-in fade-in slide-in-from-bottom-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-lg font-semibold mb-4 border-b border-stone-200 pb-2 text-stone-900",
                                    children: "Reservation Summary"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/booking/BookingForm.tsx",
                                    lineNumber: 282,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-2 text-sm text-stone-600 mb-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex justify-between",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "Date:"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/booking/BookingForm.tsx",
                                                    lineNumber: 288,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-medium text-stone-900",
                                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])(selectedDate, 'MMM do, yyyy')
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/booking/BookingForm.tsx",
                                                    lineNumber: 289,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/booking/BookingForm.tsx",
                                            lineNumber: 287,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex justify-between",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "Time:"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/booking/BookingForm.tsx",
                                                    lineNumber: 292,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-medium text-stone-900",
                                                    children: [
                                                        startTime,
                                                        " - ",
                                                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$addMinutes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addMinutes"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$parse$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["parse"])(startTime, 'HH:mm', selectedDate), durationMinutes), 'HH:mm')
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/booking/BookingForm.tsx",
                                                    lineNumber: 293,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/booking/BookingForm.tsx",
                                            lineNumber: 291,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex justify-between",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "Duration:"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/booking/BookingForm.tsx",
                                                    lineNumber: 296,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-medium text-stone-900",
                                                    children: [
                                                        durationMinutes / 60,
                                                        " hours"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/booking/BookingForm.tsx",
                                                    lineNumber: 297,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/booking/BookingForm.tsx",
                                            lineNumber: 295,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/booking/BookingForm.tsx",
                                    lineNumber: 286,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-end justify-between mb-6 border-t border-stone-200 pt-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-stone-500",
                                            children: "Total Price"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/booking/BookingForm.tsx",
                                            lineNumber: 302,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-3xl font-bold text-stone-800",
                                            children: [
                                                totalPrice.toFixed(2),
                                                "€"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/booking/BookingForm.tsx",
                                            lineNumber: 303,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/booking/BookingForm.tsx",
                                    lineNumber: 301,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: handleSubmit,
                                    disabled: isSubmitting,
                                    className: "w-full bg-stone-800 hover:bg-stone-900 text-white font-bold py-3 px-4 rounded-lg transition-colors flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed shadow-sm",
                                    children: isSubmitting ? 'Processing...' : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                        children: [
                                            "Reserve Now",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__["CheckCircle"], {
                                                className: "w-5 h-5"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/booking/BookingForm.tsx",
                                                lineNumber: 314,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/booking/BookingForm.tsx",
                                    lineNumber: 306,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/booking/BookingForm.tsx",
                            lineNumber: 281,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/booking/BookingForm.tsx",
                    lineNumber: 206,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/booking/BookingForm.tsx",
            lineNumber: 171,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/booking/BookingForm.tsx",
        lineNumber: 170,
        columnNumber: 5
    }, this);
}
_s(BookingForm, "a3GAQ1BCovcXVz+RokXICEBHdOM=");
_c = BookingForm;
var _c;
__turbopack_context__.k.register(_c, "BookingForm");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_382660d8._.js.map