"use client";

import { useReportWebVitals } from "next/web-vitals";

type GtagFn = (...args: unknown[]) => void;

/**
 * Core Web Vitals raporu.
 *
 * Her sayfa yüklemesinde LCP, CLS, INP, FCP, TTFB ölçümlerini alır,
 * GA4'e custom event olarak POST eder.
 */
export function WebVitalsReporter() {
  useReportWebVitals((metric) => {
    const value =
      metric.name === "CLS"
        ? Math.round(metric.value * 1000)
        : Math.round(metric.value);

    if (typeof window === "undefined") return;
    const w = window as unknown as { gtag?: GtagFn; dataLayer?: unknown[] };

    // GA4 (gtag) event
    if (typeof w.gtag === "function") {
      w.gtag("event", metric.name, {
        event_category: "Web Vitals",
        event_label: metric.id,
        value,
        metric_id: metric.id,
        metric_value: metric.value,
        metric_delta: metric.delta,
        metric_rating: metric.rating,
        non_interaction: true,
      });
    }

    // GTM dataLayer push
    if (Array.isArray(w.dataLayer)) {
      w.dataLayer.push({
        event: "web_vitals",
        web_vitals_name: metric.name,
        web_vitals_value: value,
        web_vitals_rating: metric.rating,
        web_vitals_id: metric.id,
      });
    }

    // Dev'de console'a da yaz
    if (process.env.NODE_ENV === "development") {
      console.log("[Web Vitals]", metric.name, value, metric.rating);
    }
  });

  return null;
}
