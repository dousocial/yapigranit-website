"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Phone, MessageCircle, MapPin, FileText } from "lucide-react";
import { siteConfig } from "@/lib/site";

export function MobileStickyBar() {
  const pathname = usePathname();

  // Admin'de gösterme
  if (pathname.startsWith("/admin")) return null;

  const phone = siteConfig.contact.phones[0].replace(/\s/g, "");
  const wa = siteConfig.contact.whatsapp.replace(/\D/g, "");
  const mapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${siteConfig.contact.map.lat},${siteConfig.contact.map.lng}`;

  const items = [
    { href: `tel:${phone}`, label: "Ara", icon: Phone },
    {
      href: `https://wa.me/${wa}?text=${encodeURIComponent(
        "Merhaba, Yapı Granit web sitenizden ulaşıyorum.",
      )}`,
      label: "WhatsApp",
      icon: MessageCircle,
      external: true,
    },
    { href: mapsUrl, label: "Yol Tarifi", icon: MapPin, external: true },
    { href: "/teklif", label: "Teklif", icon: FileText, primary: true },
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
              {...(item.external
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
              className={
                item.primary
                  ? "flex flex-col items-center justify-center gap-1 py-3 bg-gold text-ink"
                  : "flex flex-col items-center justify-center gap-1 py-3 text-on-dark-muted hover:text-gold transition-colors"
              }
            >
              <item.icon className="size-4" />
              <span className="text-[0.65rem] uppercase tracking-wider font-medium">
                {item.label}
              </span>
            </Component>
          );
        })}
      </div>
    </div>
  );
}
