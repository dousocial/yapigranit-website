"use client";

import * as React from "react";
import { useTranslations } from "next-intl";
import { MessageCircle, Phone, X, ArrowUp } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";

export function FloatingActions() {
  const t = useTranslations("FloatingActions");
  const [open, setOpen] = React.useState(false);
  const [showTop, setShowTop] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3">
      <AnimatePresence>
        {showTop && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="size-11 grid place-items-center bg-surface-dark text-on-dark hover:bg-ink shadow-md rounded-full border border-line-dark"
            aria-label={t("scrollTop")}
          >
            <ArrowUp className="size-4" />
          </motion.button>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: 10 }}
            transition={{ duration: 0.15 }}
            className="flex flex-col gap-2"
          >
            <a
              href={`https://wa.me/${siteConfig.contact.whatsapp.replace(/\D/g, "")}?text=${encodeURIComponent(
                t("whatsappMessage"),
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-[#25D366] hover:bg-[#1DA851] text-white pl-4 pr-5 h-12 rounded-full shadow-lg text-[0.85rem] font-medium"
            >
              <MessageCircle className="size-5" />
              {t("whatsapp")}
            </a>
            <a
              href={`tel:${siteConfig.contact.phones[0].replace(/\s/g, "")}`}
              className="flex items-center gap-3 bg-surface-dark hover:bg-ink text-on-dark pl-4 pr-5 h-12 rounded-full shadow-lg text-[0.85rem] font-medium"
            >
              <Phone className="size-4" />
              {t("phone")}
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setOpen((s) => !s)}
        className={cn(
          "size-14 grid place-items-center bg-gold hover:bg-gold-soft text-ink shadow-lg rounded-full transition-all",
          open && "rotate-90",
        )}
        aria-label={open ? t("close") : t("openOptions")}
      >
        {open ? (
          <X className="size-5" />
        ) : (
          <MessageCircle className="size-5" />
        )}
      </button>
    </div>
  );
}
