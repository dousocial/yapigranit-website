/**
 * Conversion event helper'ları.
 *
 * Tüm tracking event'lerini buradan tetikleyin. Pixel/GA4/GTM (varsa)
 * paralel olarak güncellenir. Pixel veya GA4 yüklü değilse sessizce
 * geçer (no-op) — uygulama hata vermez.
 *
 * Kullanım:
 *   import { trackEvent, trackContact, trackLead } from "@/lib/tracking";
 *   trackContact({ method: "whatsapp" });
 */

type FbqFn = (...args: unknown[]) => void;
type GtagFn = (...args: unknown[]) => void;

function getFbq(): FbqFn | null {
  if (typeof window === "undefined") return null;
  const w = window as unknown as { fbq?: FbqFn };
  return w.fbq ?? null;
}

function getGtag(): GtagFn | null {
  if (typeof window === "undefined") return null;
  const w = window as unknown as { gtag?: GtagFn };
  return w.gtag ?? null;
}

function pushDataLayer(event: Record<string, unknown>) {
  if (typeof window === "undefined") return;
  const w = window as unknown as { dataLayer?: unknown[] };
  if (!Array.isArray(w.dataLayer)) w.dataLayer = [];
  w.dataLayer.push(event);
}

/**
 * Lead — form gönderimi (teklif, numune, iletişim).
 * Standart Meta Pixel event'i — reklam optimizasyonu için kritik.
 */
export function trackLead(params?: {
  formName?: string;
  value?: number;
  currency?: string;
}) {
  const fbq = getFbq();
  fbq?.("track", "Lead", {
    content_name: params?.formName ?? "form",
    value: params?.value ?? 0,
    currency: params?.currency ?? "TRY",
  });

  const gtag = getGtag();
  gtag?.("event", "generate_lead", {
    form_name: params?.formName ?? "form",
    value: params?.value ?? 0,
    currency: params?.currency ?? "TRY",
  });

  pushDataLayer({
    event: "form_submit",
    form_name: params?.formName ?? "form",
  });
}

/**
 * Contact — WhatsApp/telefon/email tıklama.
 */
export function trackContact(params?: {
  method?: "whatsapp" | "phone" | "email" | "directions";
  source?: string;
}) {
  const fbq = getFbq();
  fbq?.("track", "Contact", {
    content_name: params?.method ?? "unknown",
  });

  const gtag = getGtag();
  gtag?.("event", "contact", {
    method: params?.method ?? "unknown",
    source: params?.source,
  });

  pushDataLayer({
    event: "contact",
    contact_method: params?.method ?? "unknown",
    contact_source: params?.source,
  });
}

/**
 * View Content — ürün/proje detay sayfası görüntüleme.
 * Reklam yeniden hedefleme (retargeting) için temel.
 */
export function trackViewContent(params: {
  contentName: string;
  contentCategory?: string;
  contentIds?: string[];
}) {
  const fbq = getFbq();
  fbq?.("track", "ViewContent", {
    content_name: params.contentName,
    content_category: params.contentCategory,
    content_ids: params.contentIds,
  });

  const gtag = getGtag();
  gtag?.("event", "view_item", {
    item_name: params.contentName,
    item_category: params.contentCategory,
  });
}

/**
 * Search — site içi arama.
 */
export function trackSearch(query: string) {
  const fbq = getFbq();
  fbq?.("track", "Search", { search_string: query });

  const gtag = getGtag();
  gtag?.("event", "search", { search_term: query });
}

/**
 * Download — katalog/PDF indirme (lead magnet için kritik).
 */
export function trackDownload(params: {
  fileName: string;
  fileType?: string;
}) {
  const fbq = getFbq();
  fbq?.("trackCustom", "Download", {
    file_name: params.fileName,
    file_type: params.fileType,
  });

  const gtag = getGtag();
  gtag?.("event", "file_download", {
    file_name: params.fileName,
    file_extension: params.fileType,
  });
}

/**
 * Generic event — özel olaylar için.
 */
export function trackEvent(name: string, params?: Record<string, unknown>) {
  const fbq = getFbq();
  fbq?.("trackCustom", name, params);

  const gtag = getGtag();
  gtag?.("event", name, params);

  pushDataLayer({ event: name, ...(params ?? {}) });
}
