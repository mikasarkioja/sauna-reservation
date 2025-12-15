module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/src/app/actions/data:9c67d2 [app-ssr] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"40e558c964b00310a5a13d8d96defbb8470f6960a7":"createBooking"},"src/app/actions/create-booking.ts",""] */ __turbopack_context__.s([
    "createBooking",
    ()=>createBooking
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-ssr] (ecmascript)");
"use turbopack no side effects";
;
var createBooking = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createServerReference"])("40e558c964b00310a5a13d8d96defbb8470f6960a7", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findSourceMapURL"], "createBooking"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vY3JlYXRlLWJvb2tpbmcudHMiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzZXJ2ZXInO1xyXG5cclxuaW1wb3J0IHByaXNtYSBmcm9tICcuLi8uLi9saWIvcHJpc21hJztcclxuaW1wb3J0IHsgc3RyaXBlIH0gZnJvbSAnLi4vLi4vbGliL3N0cmlwZSc7XHJcbmltcG9ydCB7IGNhbGN1bGF0ZVNhdW5hUHJpY2UsIFByaWNpbmdFcnJvciB9IGZyb20gJy4uLy4uL2xpYi9wcmljaW5nJztcclxuaW1wb3J0IHsgQm9va2luZ1N0YXR1cyB9IGZyb20gJ0BwcmlzbWEvY2xpZW50JztcclxuXHJcbi8qKlxyXG4gKiBJbnRlcmZhY2UgZm9yIHRoZSBib29raW5nIHJlcXVlc3QgcGF5bG9hZFxyXG4gKi9cclxuaW50ZXJmYWNlIENyZWF0ZUJvb2tpbmdSZXF1ZXN0IHtcclxuICB1c2VyRW1haWw6IHN0cmluZztcclxuICB1c2VyTmFtZT86IHN0cmluZztcclxuICBzdGFydFRpbWU6IHN0cmluZzsgLy8gSVNPIHN0cmluZ1xyXG4gIGVuZFRpbWU6IHN0cmluZzsgICAvLyBJU08gc3RyaW5nXHJcbn1cclxuXHJcbi8qKlxyXG4gKiBJbnRlcmZhY2UgZm9yIHRoZSBzZXJ2ZXIgYWN0aW9uIHJlc3BvbnNlXHJcbiAqL1xyXG5pbnRlcmZhY2UgQ3JlYXRlQm9va2luZ1Jlc3BvbnNlIHtcclxuICBzdWNjZXNzOiBib29sZWFuO1xyXG4gIHVybD86IHN0cmluZztcclxuICBlcnJvcj86IHN0cmluZztcclxufVxyXG5cclxuLyoqXHJcbiAqIFNlcnZlciBBY3Rpb24gdG8gY3JlYXRlIGEgc2F1bmEgYm9va2luZy5cclxuICogXHJcbiAqIEZsb3c6XHJcbiAqIDEuIFZhbGlkYXRlIGlucHV0cyBhbmQgY2FsY3VsYXRlIHByaWNlLlxyXG4gKiAyLiBDaGVjayBmb3IgYXZhaWxhYmlsaXR5IChjb25jdXJyZW5jeSBoYW5kbGluZykuXHJcbiAqIDMuIENyZWF0ZSBQRU5ESU5HIGJvb2tpbmcgaW4gREIuXHJcbiAqIDQuIENyZWF0ZSBTdHJpcGUgQ2hlY2tvdXQgU2Vzc2lvbi5cclxuICogNS4gVXBkYXRlIGJvb2tpbmcgd2l0aCBTdHJpcGUgU2Vzc2lvbiBJRC5cclxuICogNi4gUmV0dXJuIFN0cmlwZSBVUkwuXHJcbiAqL1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlQm9va2luZyhkYXRhOiBDcmVhdGVCb29raW5nUmVxdWVzdCk6IFByb21pc2U8Q3JlYXRlQm9va2luZ1Jlc3BvbnNlPiB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHN0YXJ0ID0gbmV3IERhdGUoZGF0YS5zdGFydFRpbWUpO1xyXG4gICAgY29uc3QgZW5kID0gbmV3IERhdGUoZGF0YS5lbmRUaW1lKTtcclxuICAgIGNvbnN0IHsgdXNlckVtYWlsLCB1c2VyTmFtZSB9ID0gZGF0YTtcclxuXHJcbiAgICAvLyAxLiBCYXNpYyBWYWxpZGF0aW9uXHJcbiAgICBpZiAoIXVzZXJFbWFpbCkge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1VzZXIgZW1haWwgaXMgcmVxdWlyZWQuJyk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC8vIFZhbGlkYXRlIGRhdGVzIGFuZCBjYWxjdWxhdGUgcHJpY2VcclxuICAgIC8vIFRoaXMgdGhyb3dzIFByaWNpbmdFcnJvciBpZiBpbnZhbGlkXHJcbiAgICBjb25zdCBwcmljZUluQ2VudHMgPSBjYWxjdWxhdGVTYXVuYVByaWNlKHN0YXJ0LCBlbmQpO1xyXG5cclxuICAgIC8vIDIuIEF2YWlsYWJpbGl0eSBDaGVjayAmIFJlc2VydmF0aW9uIChDb25jdXJyZW5jeSBIYW5kbGluZylcclxuICAgIC8vIFxyXG4gICAgLy8gQ09OQ1VSUkVOQ1kgRVhQTEFOQVRJT046XHJcbiAgICAvLyBUaGUgXCJDaGVjay1UaGVuLUFjdFwiIHJhY2UgY29uZGl0aW9uIG9jY3VycyB3aGVuIHR3byByZXF1ZXN0cyBjaGVjayBmb3IgYXZhaWxhYmlsaXR5IFxyXG4gICAgLy8gYXQgdGhlIHNhbWUgdGltZSwgYm90aCBzZWUgdGhlIHNsb3QgYXMgZnJlZSwgYW5kIGJvdGggaW5zZXJ0IGEgYm9va2luZy5cclxuICAgIC8vXHJcbiAgICAvLyBUbyBzb2x2ZSB0aGlzIGluIGEgcm9idXN0IHByb2R1Y3Rpb24gZW52aXJvbm1lbnQsIHdlIGhhdmUgYSBmZXcgb3B0aW9uczpcclxuICAgIC8vIEEpIFBvc3RncmVzIEV4Y2x1c2lvbiBDb25zdHJhaW50czogQWRkIGEgY29uc3RyYWludCB0byB0aGUgREIgdG8gcGh5c2ljYWxseSBwcmV2ZW50IG92ZXJsYXBwaW5nIHRpbWUgcmFuZ2VzIChiZXN0KS5cclxuICAgIC8vIEIpIFNlcmlhbGl6YWJsZSBUcmFuc2FjdGlvbnM6IFJ1biB0aGUgdHJhbnNhY3Rpb24gd2l0aCAnU2VyaWFsaXphYmxlJyBpc29sYXRpb24gbGV2ZWwuXHJcbiAgICAvLyBDKSBUYWJsZSBMb2NraW5nOiBMb2NrIHRoZSB0YWJsZSAoYmFkIGZvciBwZXJmb3JtYW5jZSkuXHJcbiAgICAvL1xyXG4gICAgLy8gSGVyZSwgd2UgdXNlIGEgUHJpc21hIHRyYW5zYWN0aW9uIHRvIGdyb3VwIHRoZSBjaGVjayBhbmQgdGhlIGluc2VydC4gXHJcbiAgICAvLyBJZGVhbGx5LCB3ZSB3b3VsZCB1c2UgYGlzb2xhdGlvbkxldmVsOiAnU2VyaWFsaXphYmxlJ2AsIGJ1dCB0aGF0IHJlcXVpcmVzIHJldHJ5IGxvZ2ljIGFzIHNlcmlhbGl6YXRpb24gZmFpbHVyZXMgYXJlIGV4cGVjdGVkLlxyXG4gICAgLy8gRm9yIHRoaXMgc2NhZmZvbGQsIHdlIHBlcmZvcm0gYSBjaGVjayBmb3Igb3ZlcmxhcHBpbmcgYm9va2luZ3Mgd2l0aGluIHRoZSB0cmFuc2FjdGlvbi4gXHJcbiAgICAvLyBOb3RlOiBXaXRob3V0IFNlcmlhbGl6YWJsZSBpc29sYXRpb24gb3IgRXhjbHVzaW9uIGNvbnN0cmFpbnRzLCBhIHJhY2UgY29uZGl0aW9uIGlzIHN0aWxsIHRoZW9yZXRpY2FsbHkgcG9zc2libGUgXHJcbiAgICAvLyBpZiB0aGUgREIgaXNvbGF0aW9uIGxldmVsIGlzIFJlYWQgQ29tbWl0dGVkIChkZWZhdWx0KS5cclxuICAgIFxyXG4gICAgY29uc3QgYm9va2luZyA9IGF3YWl0IHByaXNtYS4kdHJhbnNhY3Rpb24oYXN5bmMgKHR4KSA9PiB7XHJcbiAgICAgIC8vIENoZWNrIGZvciBvdmVybGFwcGluZyBib29raW5ncyB0aGF0IGFyZSBOT1QgZmFpbGVkL2NhbmNlbGxlZFxyXG4gICAgICAvLyBPdmVybGFwIGxvZ2ljOiAoU3RhcnRBIDwgRW5kQikgYW5kIChFbmRBID4gU3RhcnRCKVxyXG4gICAgICBjb25zdCBleGlzdGluZ0Jvb2tpbmcgPSBhd2FpdCB0eC5ib29raW5nLmZpbmRGaXJzdCh7XHJcbiAgICAgICAgd2hlcmU6IHtcclxuICAgICAgICAgIEFORDogW1xyXG4gICAgICAgICAgICB7IHN0YXJ0VGltZTogeyBsdDogZW5kIH0gfSxcclxuICAgICAgICAgICAgeyBlbmRUaW1lOiB7IGd0OiBzdGFydCB9IH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICBzdGF0dXM6IHtcclxuICAgICAgICAgICAgICAgIGluOiBbQm9va2luZ1N0YXR1cy5QRU5ESU5HLCBCb29raW5nU3RhdHVzLlBBSURdLFxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICBdLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgaWYgKGV4aXN0aW5nQm9va2luZykge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignVGhlIHNlbGVjdGVkIHRpbWUgc2xvdCBpcyBhbHJlYWR5IGJvb2tlZC4nKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gQ3JlYXRlIFBFTkRJTkcgYm9va2luZ1xyXG4gICAgICByZXR1cm4gdHguYm9va2luZy5jcmVhdGUoe1xyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgIHVzZXJFbWFpbCxcclxuICAgICAgICAgIHVzZXJOYW1lLFxyXG4gICAgICAgICAgc3RhcnRUaW1lOiBzdGFydCxcclxuICAgICAgICAgIGVuZFRpbWU6IGVuZCxcclxuICAgICAgICAgIHRvdGFsUHJpY2U6IHByaWNlSW5DZW50cyxcclxuICAgICAgICAgIHN0YXR1czogQm9va2luZ1N0YXR1cy5QRU5ESU5HLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gMy4gQ3JlYXRlIFN0cmlwZSBDaGVja291dCBTZXNzaW9uXHJcbiAgICAvLyBXZSBkbyB0aGlzIEFGVEVSIGNyZWF0aW5nIHRoZSBib29raW5nIHJlY29yZCBzbyB3ZSBoYXZlIHRoZSBJRC5cclxuICAgIC8vIElmIFN0cmlwZSBmYWlscywgdGhlIFBFTkRJTkcgYm9va2luZyB3aWxsIGV2ZW50dWFsbHkgbmVlZCB0byBiZSBjbGVhbmVkIHVwIChlLmcuIGNyb24gam9iIG9yIHdlYmhvb2sgZXhwaXJ5KS5cclxuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBzdHJpcGUuY2hlY2tvdXQuc2Vzc2lvbnMuY3JlYXRlKHtcclxuICAgICAgcGF5bWVudF9tZXRob2RfdHlwZXM6IFsnY2FyZCddLFxyXG4gICAgICBsaW5lX2l0ZW1zOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgcHJpY2VfZGF0YToge1xyXG4gICAgICAgICAgICBjdXJyZW5jeTogJ2V1cicsXHJcbiAgICAgICAgICAgIHByb2R1Y3RfZGF0YToge1xyXG4gICAgICAgICAgICAgIG5hbWU6ICdTYXVuYSBSZXNlcnZhdGlvbicsXHJcbiAgICAgICAgICAgICAgZGVzY3JpcHRpb246IGAke3N0YXJ0LnRvTG9jYWxlU3RyaW5nKCl9IC0gJHtlbmQudG9Mb2NhbGVTdHJpbmcoKX1gLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB1bml0X2Ftb3VudDogcHJpY2VJbkNlbnRzLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHF1YW50aXR5OiAxLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIF0sXHJcbiAgICAgIG1vZGU6ICdwYXltZW50JyxcclxuICAgICAgc3VjY2Vzc191cmw6IGAke3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0FQUF9VUkx9L3N1Y2Nlc3M/c2Vzc2lvbl9pZD17Q0hFQ0tPVVRfU0VTU0lPTl9JRH1gLFxyXG4gICAgICBjYW5jZWxfdXJsOiBgJHtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19BUFBfVVJMfS9jYW5jZWxgLFxyXG4gICAgICBtZXRhZGF0YToge1xyXG4gICAgICAgIGJvb2tpbmdJZDogYm9va2luZy5pZCwgLy8gQ3JpdGljYWw6IExpbmsgU3RyaXBlIHNlc3Npb24gdG8gb3VyIEJvb2tpbmdcclxuICAgICAgfSxcclxuICAgICAgY3VzdG9tZXJfZW1haWw6IHVzZXJFbWFpbCxcclxuICAgIH0pO1xyXG5cclxuICAgIGlmICghc2Vzc2lvbi51cmwpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdGYWlsZWQgdG8gY3JlYXRlIFN0cmlwZSBzZXNzaW9uIFVSTC4nKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyA0LiBVcGRhdGUgYm9va2luZyB3aXRoIFN0cmlwZSBTZXNzaW9uIElEXHJcbiAgICAvLyBUaGlzIGFsbG93cyB1cyB0byBsb29rIHVwIHRoZSBib29raW5nIHdoZW4gdGhlIFN0cmlwZSBXZWJob29rIGZpcmVzLlxyXG4gICAgYXdhaXQgcHJpc21hLmJvb2tpbmcudXBkYXRlKHtcclxuICAgICAgd2hlcmU6IHsgaWQ6IGJvb2tpbmcuaWQgfSxcclxuICAgICAgZGF0YTogeyBzdHJpcGVTZXNzaW9uSWQ6IHNlc3Npb24uaWQgfSxcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIHVybDogc2Vzc2lvbi51cmwgfTtcclxuXHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ0NyZWF0ZSBCb29raW5nIEVycm9yOicsIGVycm9yKTtcclxuICAgIFxyXG4gICAgLy8gRGlzdGluZ3Vpc2ggZXhwZWN0ZWQgdmFsaWRhdGlvbiBlcnJvcnMgZnJvbSBzeXN0ZW0gZXJyb3JzXHJcbiAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBQcmljaW5nRXJyb3IpIHtcclxuICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvLyBSZXR1cm4gYSBnZW5lcmljIGVycm9yIGZvciBzYWZldHksIG9yIHNwZWNpZmljIGlmIGl0J3MgYW4gZXhwZWN0ZWQgXCJTbG90IHRha2VuXCIgZXJyb3JcclxuICAgIGNvbnN0IG1lc3NhZ2UgPSBlcnJvciBpbnN0YW5jZW9mIEVycm9yID8gZXJyb3IubWVzc2FnZSA6ICdBbiB1bmV4cGVjdGVkIGVycm9yIG9jY3VycmVkLic7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IG1lc3NhZ2UgfTtcclxuICB9XHJcbn1cclxuXHJcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoid1NBcUNzQiJ9
}),
"[project]/src/lib/pricing.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/src/components/booking/BookingForm.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>BookingForm
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
// Fix: Import 'createBooking' but rename it to 'createSaunaCheckout' 
// so the rest of your component works without changes.
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$9c67d2__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/app/actions/data:9c67d2 [app-ssr] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/date-fns/format.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$addMinutes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/date-fns/addMinutes.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$isSameDay$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/date-fns/isSameDay.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$startOfToday$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/date-fns/startOfToday.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$parse$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/date-fns/parse.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$DayPicker$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-day-picker/dist/esm/DayPicker.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/calendar.js [app-ssr] (ecmascript) <export default as Calendar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clock.js [app-ssr] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check-big.js [app-ssr] (ecmascript) <export default as CheckCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-alert.js [app-ssr] (ecmascript) <export default as AlertCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$pricing$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/pricing.ts [app-ssr] (ecmascript)");
'use client';
;
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
    // --- State ---
    const [selectedDate, setSelectedDate] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](undefined);
    const [startTime, setStartTime] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](null);
    const [durationMinutes, setDurationMinutes] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$pricing$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MIN_DURATION_MINUTES"]); // Default 1 hour
    const [isSubmitting, setIsSubmitting] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](false);
    // --- Derived State & Helpers ---
    // Generate available start times for the selected date
    const timeSlots = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"](()=>{
        if (!selectedDate) return [];
        const slots = [];
        const today = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$startOfToday$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["startOfToday"])();
        const isToday = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$isSameDay$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isSameDay"])(selectedDate, today);
        const now = new Date();
        // Iterate from OPENING_HOUR to CLOSING_HOUR - (MIN_DURATION)
        // We stop early because the last booking must be at least MIN_DURATION long.
        // E.g. Closing 22:00, Min 1h -> Last start time 21:00.
        const lastStartHour = CLOSING_HOUR - __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$pricing$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MIN_DURATION_MINUTES"] / 60;
        for(let hour = OPENING_HOUR; hour <= lastStartHour; hour++){
            for(let minute = 0; minute < 60; minute += 30){
                // Skip if this slot would start after the cut-off
                if (hour === lastStartHour && minute > 0) continue;
                const timeString = `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`;
                // Filter out past times if date is today
                if (isToday) {
                    const slotDate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$parse$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["parse"])(timeString, 'HH:mm', selectedDate);
                    if (slotDate < now) continue;
                }
                // Filter out booked slots (Dummy Logic)
                if (DUMMY_BOOKED_SLOTS.includes(timeString)) continue;
                slots.push(timeString);
            }
        }
        return slots;
    }, [
        selectedDate
    ]);
    // Generate duration options based on selected start time
    const durationOptions = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"](()=>{
        if (!startTime || !selectedDate) return [];
        const [startHour, startMinute] = startTime.split(':').map(Number);
        const startTotalMinutes = startHour * 60 + startMinute;
        const closingTotalMinutes = CLOSING_HOUR * 60;
        const maxDurationMinutes = closingTotalMinutes - startTotalMinutes;
        const options = [];
        // Increment by 30 mins, starting from MIN_DURATION
        for(let d = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$pricing$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MIN_DURATION_MINUTES"]; d <= maxDurationMinutes; d += 30){
            // Check if this duration overlaps with any booked slots (Simplified check)
            // In a real app, you'd check if the range [startTime, startTime + d] overlaps with existing bookings
            const priceEur = d / 30 * (__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$pricing$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PRICING_PER_30_MINS_CENTS"] / 100);
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
    }, [
        startTime,
        selectedDate
    ]);
    // Calculate Total Price
    const totalPrice = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"](()=>{
        return durationMinutes / 30 * (__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$pricing$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PRICING_PER_30_MINS_CENTS"] / 100);
    }, [
        durationMinutes
    ]);
    // --- Handlers ---
    const handleDateSelect = (date)=>{
        setSelectedDate(date);
        setStartTime(null); // Reset time when date changes
        setDurationMinutes(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$pricing$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MIN_DURATION_MINUTES"]);
    };
    const handleTimeSelect = (time)=>{
        setStartTime(time);
        setDurationMinutes(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$pricing$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MIN_DURATION_MINUTES"]); // Reset duration to min
    };
    const handleSubmit = async ()=>{
        if (!selectedDate || !startTime) return;
        setIsSubmitting(true);
        try {
            // 1. Calculate the start and end Date objects
            // "startTime" is a string like "14:30", we need to combine it with "selectedDate"
            const startDateTime = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$parse$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["parse"])(startTime, 'HH:mm', selectedDate);
            const endDateTime = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$addMinutes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addMinutes"])(startDateTime, durationMinutes);
            // 2. Call the Server Action (This runs on the server, creates DB record, and talks to Stripe)
            // We assume you have a hardcoded user email for now, or you can add an input field for it
            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$9c67d2__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["createBooking"])(startDateTime, endDateTime, "test-user@example.com");
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "max-w-4xl mx-auto p-4 md:p-6 bg-white rounded-xl shadow-sm border border-stone-200",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid grid-cols-1 md:grid-cols-2 gap-8",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-xl font-bold text-stone-800 mb-4 flex items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
                                    className: "w-5 h-5 text-stone-600"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/booking/BookingForm.tsx",
                                    lineNumber: 172,
                                    columnNumber: 13
                                }, this),
                                "Select Date"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/booking/BookingForm.tsx",
                            lineNumber: 171,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-stone-50/50 p-4 rounded-lg flex justify-center border border-stone-200",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$DayPicker$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DayPicker"], {
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
                                lineNumber: 176,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/booking/BookingForm.tsx",
                            lineNumber: 175,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm text-stone-500 mt-4 text-center",
                            children: selectedDate ? `Selected: ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])(selectedDate, 'EEEE, MMMM do, yyyy')}` : 'Please pick a date to see available times.'
                        }, void 0, false, {
                            fileName: "[project]/src/components/booking/BookingForm.tsx",
                            lineNumber: 194,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/booking/BookingForm.tsx",
                    lineNumber: 170,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-xl font-bold text-stone-800 mb-4 flex items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                    className: "w-5 h-5 text-stone-600"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/booking/BookingForm.tsx",
                                    lineNumber: 204,
                                    columnNumber: 13
                                }, this),
                                "Select Time"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/booking/BookingForm.tsx",
                            lineNumber: 203,
                            columnNumber: 11
                        }, this),
                        !selectedDate ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex-1 flex flex-col items-center justify-center text-stone-400 bg-stone-50 rounded-lg border border-dashed border-stone-200 min-h-[300px]",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
                                    className: "w-12 h-12 mb-2 opacity-20"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/booking/BookingForm.tsx",
                                    lineNumber: 210,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: "Choose a date first"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/booking/BookingForm.tsx",
                                    lineNumber: 211,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/booking/BookingForm.tsx",
                            lineNumber: 209,
                            columnNumber: 13
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-sm font-medium text-stone-700 mb-2",
                                            children: "Start Time"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/booking/BookingForm.tsx",
                                            lineNumber: 218,
                                            columnNumber: 17
                                        }, this),
                                        timeSlots.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-center p-4 bg-amber-50 text-amber-800 rounded-md border border-amber-100 flex items-center justify-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
                                                    className: "w-4 h-4"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/booking/BookingForm.tsx",
                                                    lineNumber: 223,
                                                    columnNumber: 21
                                                }, this),
                                                "No slots available for this date."
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/booking/BookingForm.tsx",
                                            lineNumber: 222,
                                            columnNumber: 19
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid grid-cols-3 sm:grid-cols-4 gap-2 max-h-[200px] overflow-y-auto pr-2 custom-scrollbar",
                                            children: timeSlots.map((time)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>handleTimeSelect(time),
                                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clsx"])("py-2 px-1 text-sm rounded-md border transition-all duration-200", startTime === time ? "bg-stone-800 text-white border-stone-800 shadow-sm transform scale-105" : "bg-white text-stone-600 border-stone-200 hover:border-stone-400 hover:bg-stone-50"),
                                                    children: time
                                                }, time, false, {
                                                    fileName: "[project]/src/components/booking/BookingForm.tsx",
                                                    lineNumber: 229,
                                                    columnNumber: 23
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/booking/BookingForm.tsx",
                                            lineNumber: 227,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/booking/BookingForm.tsx",
                                    lineNumber: 217,
                                    columnNumber: 15
                                }, this),
                                startTime && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "animate-in fade-in slide-in-from-top-2 duration-300",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-sm font-medium text-stone-700 mb-2",
                                            children: "Duration"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/booking/BookingForm.tsx",
                                            lineNumber: 249,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                            value: durationMinutes,
                                            onChange: (e)=>setDurationMinutes(Number(e.target.value)),
                                            className: "w-full p-2.5 bg-white border border-stone-300 rounded-md shadow-sm focus:ring-2 focus:ring-stone-500 focus:border-stone-500 outline-none text-stone-700",
                                            children: durationOptions.map((option)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: option.value,
                                                    children: option.label
                                                }, option.value, false, {
                                                    fileName: "[project]/src/components/booking/BookingForm.tsx",
                                                    lineNumber: 258,
                                                    columnNumber: 23
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/booking/BookingForm.tsx",
                                            lineNumber: 252,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-stone-500 mt-1",
                                            children: "Price: 10€ / 30 mins"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/booking/BookingForm.tsx",
                                            lineNumber: 263,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/booking/BookingForm.tsx",
                                    lineNumber: 248,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/booking/BookingForm.tsx",
                            lineNumber: 214,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex-grow"
                        }, void 0, false, {
                            fileName: "[project]/src/components/booking/BookingForm.tsx",
                            lineNumber: 273,
                            columnNumber: 11
                        }, this),
                        startTime && selectedDate && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-8 bg-stone-100 text-stone-800 p-6 rounded-xl border border-stone-200 animate-in fade-in slide-in-from-bottom-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-lg font-semibold mb-4 border-b border-stone-200 pb-2 text-stone-900",
                                    children: "Reservation Summary"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/booking/BookingForm.tsx",
                                    lineNumber: 278,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-2 text-sm text-stone-600 mb-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex justify-between",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "Date:"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/booking/BookingForm.tsx",
                                                    lineNumber: 284,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-medium text-stone-900",
                                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])(selectedDate, 'MMM do, yyyy')
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/booking/BookingForm.tsx",
                                                    lineNumber: 285,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/booking/BookingForm.tsx",
                                            lineNumber: 283,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex justify-between",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "Time:"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/booking/BookingForm.tsx",
                                                    lineNumber: 288,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-medium text-stone-900",
                                                    children: [
                                                        startTime,
                                                        " - ",
                                                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$addMinutes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addMinutes"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$parse$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["parse"])(startTime, 'HH:mm', selectedDate), durationMinutes), 'HH:mm')
                                                    ]
                                                }, void 0, true, {
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
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex justify-between",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "Duration:"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/booking/BookingForm.tsx",
                                                    lineNumber: 292,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-medium text-stone-900",
                                                    children: [
                                                        durationMinutes / 60,
                                                        " hours"
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
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/booking/BookingForm.tsx",
                                    lineNumber: 282,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-end justify-between mb-6 border-t border-stone-200 pt-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-stone-500",
                                            children: "Total Price"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/booking/BookingForm.tsx",
                                            lineNumber: 298,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-3xl font-bold text-stone-800",
                                            children: [
                                                totalPrice.toFixed(2),
                                                "€"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/booking/BookingForm.tsx",
                                            lineNumber: 299,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/booking/BookingForm.tsx",
                                    lineNumber: 297,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: handleSubmit,
                                    disabled: isSubmitting,
                                    className: "w-full bg-stone-800 hover:bg-stone-900 text-white font-bold py-3 px-4 rounded-lg transition-colors flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed shadow-sm",
                                    children: isSubmitting ? 'Processing...' : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                        children: [
                                            "Reserve Now",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__["CheckCircle"], {
                                                className: "w-5 h-5"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/booking/BookingForm.tsx",
                                                lineNumber: 310,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/booking/BookingForm.tsx",
                                    lineNumber: 302,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/booking/BookingForm.tsx",
                            lineNumber: 277,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/booking/BookingForm.tsx",
                    lineNumber: 202,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/booking/BookingForm.tsx",
            lineNumber: 167,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/booking/BookingForm.tsx",
        lineNumber: 166,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__3c1b1a5f._.js.map