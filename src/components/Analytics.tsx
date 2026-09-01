"use client";

import Script from "next/script";
import { useEffect } from "react";
import { siteConfig } from "@/lib/config";
import { trackEvent } from "@/lib/analytics";

/**
 * Renders analytics scripts only when the relevant env var is configured.
 * In local development, none of these render, so nothing calls out to a
 * third party while you're building. See README.md → "How to configure
 * analytics" for the full setup guide.
 */
export function Analytics() {
  const { gaMeasurementId, linkedInPartnerId } = siteConfig.analytics;

  // Global click tracking for any element carrying data-cta-id — this is
  // how every "Talk to an Expert" / "Request a Resource" style CTA gets
  // tracked without wiring an onClick handler into every single button.
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      const target = (e.target as HTMLElement)?.closest<HTMLElement>(
        "[data-cta-id]"
      );
      if (target) {
        trackEvent("cta_click", { cta_id: target.dataset.ctaId });
      }
    };
    document.addEventListener("click", handler);
    return () => document.removeEventListener("click", handler);
  }, []);

  return (
    <>
      {gaMeasurementId ? (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${gaMeasurementId}`}
            strategy="afterInteractive"
          />
          <Script id="ga-init" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${gaMeasurementId}');
            `}
          </Script>
        </>
      ) : null}

      {linkedInPartnerId ? (
        <Script id="linkedin-insight" strategy="afterInteractive">
          {`
            _linkedin_partner_id = "${linkedInPartnerId}";
            window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
            window._linkedin_data_partner_ids.push(_linkedin_partner_id);
            (function(l) {
              if (!l){window.lintrk = function(a,b){window.lintrk.q.push([a,b])};
              window.lintrk.q=[]}
              var s = document.getElementsByTagName("script")[0];
              var b = document.createElement("script");
              b.type = "text/javascript";b.async = true;
              b.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js";
              s.parentNode.insertBefore(b, s);
            })(window.lintrk);
          `}
        </Script>
      ) : null}
    </>
  );
}
