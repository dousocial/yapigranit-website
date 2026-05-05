"use client";

import * as React from "react";
import { useLocale, useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import { Phone, MessageCircle, MapPin, FileText } from "lucide-react";
import { siteConfig } from "@/lib/site";
import { trackContact } from "@/lib/tracking";

export function MobileStickyBar() {
  const pathname = usePathname();
  const t = useTranslations("MobileBar");
  const locale = useLocale();

  // Admin'de gösterme
  if (pathname.startsWith("/admin")) return null;

  const deOverride =
    locale === "de" ? siteConfig.contactByLocale.de : null;
  const phone = (
    deOverride?.phoneDisplay ?? siteConfig.contact.phones[0]
  ).replace(/\s/g, "");
  const wa = (deOverride?.whatsapp ?? siteConfig.contact.whatsapp).replace(
    /\D/g,
    "",
  );
  const mapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${siteConfig.contact.map.lat},${siteConfig.contact.map.lng}`;

  const items: Array<{
    href: string;
    label: string;
    icon: typeof Phone;
    external?: boolean;
    primary?: boolean;
    onClick?: () => void;
  }> = [
    {
      href: `tel:${phone}`,
      label: t("call"),
      icon: Phone,
      onClick: () => trackContact({ method: "phone", source: "sticky-bar" }),
    },
    {
      href: `https://wa.me/${wa}?text=${encodeURIComponent(t("whatsappMessage"))}`,
      label: t("whatsapp"),
      icon: MessageCircle,
      external: true,
      onClick: () => trackContact({ method: "whatsapp", source: "sticky-bar" }),
    },
    {
      href: mapsUrl,
      label: t("directions"),
      icon: MapPin,
      external: true,
      onClick: () =>
        trackContact({ method: "directions", source: "sticky-bar" }),
    },
    { href: "/teklif", label: t("quote"), icon: FileText, primary: true },
  ];

  return (
    <div className="lg:hidden fixed bottom-0 inset-x-0 z-30 bg-surface-darker text-on-dark border-t border-line-dark pb-[env(safe-area-inset-bottom)]">
      <div className="grid grid-cols-4">
        {items.map((item) => {
          const Component = item.external
            ? "a"
            : item.href.startsWith("tel:")
              ? "a"
              : Link;
          return (
            <Component
              key={item.label}
              href={item.href}
              onClick={item.onClick}
              {...(item.external
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
              className={
                item.primary
                  ? "flex flex-col items-center justify-center gap-1 py-3 px-1 min-h-[60px] bg-gold text-ink overflow-hidden"
                  : "flex flex-col items-center justify-center gap-1 py-3 px-1 min-h-[60px] text-on-dark-muted hover:text-gold transition-colors overflow-hidden"
              }
            >
              <item.icon className="size-4 shrink-0" />
              <span className="text-[0.6rem] uppercase tracking-[0.06em] font-medium leading-none whitespace-nowrap">
                {item.label}
              </span>
            </Component>
          );
        })}
      </div>
    </div>
  );
}
