"use client";

import * as React from "react";
import { useLocale } from "next-intl";
import { motion, AnimatePresence } from "motion/react";
import { X, ArrowRight, Gift } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { trackEvent } from "@/lib/tracking";

const STORAGE_KEY = "yg_exit_popup_shown";
const SHOW_AFTER_MS = 14 * 24 * 60 * 60 * 1000; // 14 gün boyunca tekrar gösterme

const i18n = {
  tr: {
    eyebrow: "Bekleyin — Bu Fırsatı Kaçırmayın",
    title: "İlk siparişinize özel ücretsiz numune.",
    body: "Mimarınıza ya da müteahhidinize göndermeden önce, malzemeyi elinize alın. Numune gönderim ücreti bizden.",
    primary: "Ücretsiz Numune İste",
    secondary: "Hayır, daha sonra",
    bullets: [
      "Adresinize 3-5 iş günü içinde teslim",
      "Tüm doğal taş, porselen ve mermer çeşitleri",
      "Renk-doku karşılaştırma kartları dahil",
    ],
  },
  en: {
    eyebrow: "Wait — Don't Miss This Offer",
    title: "Free sample for your first order.",
    body: "Before sharing with your architect or contractor, hold the material in your hand. Sample shipping is on us.",
    primary: "Request Free Sample",
    secondary: "No, maybe later",
    bullets: [
      "Delivered in 3-5 business days",
      "All natural stone, porcelain & marble types",
      "Color-texture comparison cards included",
    ],
  },
  de: {
    eyebrow: "Warten Sie — Verpassen Sie nicht dieses Angebot",
    title: "Kostenloses Muster für Ihre erste Bestellung.",
    body: "Bevor Sie es Ihrem Architekten oder Bauunternehmer zeigen, halten Sie das Material in der Hand. Versand auf uns.",
    primary: "Kostenloses Muster anfordern",
    secondary: "Nein, später",
    bullets: [
      "Lieferung in 3-5 Werktagen",
      "Alle Naturstein-, Porzellan- und Marmortypen",
      "Farb- und Texturvergleichskarten inklusive",
    ],
  },
};

export function ExitIntentPopup() {
  const locale = useLocale();
  const tx = i18n[locale as "tr" | "en" | "de"] ?? i18n.tr;

  const [open, setOpen] = React.useState(false);
  const triggeredRef = React.useRef(false);

  React.useEffect(() => {
    // yapigranit.de (DE) sitesinde numune pop-up'ı gösterilmez
    if (locale === "de") return;

    // Daha önce gösterildi mi?
    const last = localStorage.getItem(STORAGE_KEY);
    if (last && Date.now() - parseInt(last, 10) < SHOW_AFTER_MS) return;

    let scrollDepth = 0;

    function maybeShow(reason: string) {
      if (triggeredRef.current) return;
      triggeredRef.current = true;
      setOpen(true);
      localStorage.setItem(STORAGE_KEY, String(Date.now()));
      trackEvent("exit_intent_shown", { trigger: reason });
    }

    // 1) Mouse imleci viewport'tan ÜSTTEN çıkıyor (close butonuna gidiyor)
    function onMouseLeave(e: MouseEvent) {
      if (e.clientY <= 0 && !triggeredRef.current) {
        maybeShow("mouse-leave-top");
      }
    }

    // 2) Scroll derinliği %50'yi geçti + 25 saniye geçti (dwell time)
    function onScroll() {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const pct = max > 0 ? window.scrollY / max : 0;
      scrollDepth = Math.max(scrollDepth, pct);
    }
    window.addEventListener("scroll", onScroll, { passive: true });

    const dwellTimer = setTimeout(() => {
      if (scrollDepth > 0.5) maybeShow("scroll-50-dwell-25s");
    }, 25_000);

    // 3) Sekme gizleniyor (kullanıcı sekme değiştiriyor / tab kapatıyor)
    function onVisibilityChange() {
      if (document.visibilityState === "hidden" && scrollDepth > 0.3) {
        maybeShow("tab-hidden");
      }
    }

    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("visibilitychange", onVisibilityChange);

    return () => {
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("visibilitychange", onVisibilityChange);
      window.removeEventListener("scroll", onScroll);
      clearTimeout(dwellTimer);
    };
  }, [locale]);

  function close() {
    setOpen(false);
    trackEvent("exit_intent_dismissed");
  }
  function clickPrimary() {
    setOpen(false);
    trackEvent("exit_intent_cta_click");
  }

  // yapigranit.de'de numune pop-up kaldırıldı — sadece .com (TR/EN) için render edilir
  if (locale === "de") return null;

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[80] bg-surface-darker/85 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={close}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 20 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-[560px] bg-background overflow-hidden shadow-2xl"
          >
            <button
              onClick={close}
              aria-label="Close"
              className="absolute top-4 right-4 z-10 size-9 grid place-items-center text-ink-muted hover:text-ink hover:bg-surface-muted rounded-full transition-colors"
            >
              <X className="size-5" />
            </button>

            {/* Üst altın bant */}
            <div className="bg-gold text-ink px-8 py-5 flex items-center gap-3">
              <Gift className="size-5 shrink-0" strokeWidth={1.5} />
              <span className="text-[0.78rem] uppercase tracking-[0.2em] font-medium">
                {tx.eyebrow}
              </span>
            </div>

            <div className="px-8 py-8 lg:px-10 lg:py-10">
              <h2 className="font-display text-[1.7rem] lg:text-[2.1rem] text-ink leading-tight text-balance">
                {tx.title}
              </h2>
              <div className="w-12 h-px bg-gold mt-5" />
              <p className="mt-5 text-[0.95rem] text-ink-muted leading-relaxed">
                {tx.body}
              </p>

              <ul className="mt-6 space-y-2.5">
                {tx.bullets.map((b) => (
                  <li
                    key={b}
                    className="flex items-start gap-2.5 text-[0.9rem] text-ink"
                  >
                    <span className="mt-2 size-1.5 rounded-full bg-gold flex-shrink-0" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <Link
                  href="/numune-talep"
                  onClick={clickPrimary}
                  className="inline-flex items-center justify-center gap-2 px-6 h-12 bg-gold hover:bg-gold-soft text-ink text-[0.88rem] font-medium uppercase tracking-[0.12em] transition-colors"
                >
                  {tx.primary}
                  <ArrowRight className="size-4" />
                </Link>
                <button
                  onClick={close}
                  className="text-[0.85rem] text-ink-soft hover:text-ink transition-colors px-2"
                >
                  {tx.secondary}
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
