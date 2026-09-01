// Thin wrapper around whichever analytics scripts are configured via env
// vars (see Analytics.tsx). Safe to call even when no analytics provider is
// configured — it simply becomes a no-op, so components never need to check
// `typeof window` or guard against missing globals themselves.

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    lintrk?: (...args: unknown[]) => void;
  }
}

export type AnalyticsEvent =
  | "cta_click"
  | "contact_form_submit"
  | "resource_request_submit"
  | "poc_request_submit";

export function trackEvent(event: AnalyticsEvent, params: Record<string, unknown> = {}) {
  if (typeof window === "undefined") return;

  try {
    window.gtag?.("event", event, params);
  } catch {
    // analytics must never break the page
  }

  try {
    // LinkedIn Insight Tag conversion tracking is normally configured with
    // a conversion ID per event inside the LinkedIn Campaign Manager UI.
    // window.lintrk?.('track', { conversion_id: 12345678 });
    window.lintrk?.("track");
  } catch {
    // no-op
  }
}
