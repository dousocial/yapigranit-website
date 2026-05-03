"use client";

import * as React from "react";
import { useLocale } from "next-intl";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";
import { Quote, Star, ChevronLeft, ChevronRight } from "lucide-react";

import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Reveal } from "@/components/ui/reveal";
import {
  testimonials,
  localizedTestimonial,
} from "@/lib/data/testimonials";
import type { Locale } from "@/i18n/routing";
import { cn } from "@/lib/utils";

interface TestimonialsProps {
  variant?: "light" | "dark";
}

const i18n = {
  tr: {
    eyebrow: "Müşteri Yorumları",
    title: "Birlikte çalıştığımız mimarlar ve işverenler",
    description:
      "Mermer ve porselen uygulamalarında — projeden teslimata, kalite ve titizliğin tek bir partnerden gelmesinin değerini biliyoruz.",
  },
  en: {
    eyebrow: "Client Testimonials",
    title: "Architects and clients we've worked with",
    description:
      "From design to delivery — we know the value of bringing quality and care from a single partner.",
  },
  de: {
    eyebrow: "Kundenbewertungen",
    title: "Architekten und Kunden, mit denen wir gearbeitet haben",
    description:
      "Vom Design bis zur Lieferung — Qualität und Sorgfalt aus einer Hand.",
  },
};

export function Testimonials({ variant = "light" }: TestimonialsProps) {
  const locale = useLocale() as Locale;
  const tx = i18n[locale as "tr" | "en" | "de"] ?? i18n.tr;

  const autoScroll = React.useMemo(
    () =>
      AutoScroll({
        speed: 0.6,
        stopOnInteraction: false,
        stopOnMouseEnter: true,
      }),
    [],
  );

  const [emblaRef, embla] = useEmblaCarousel(
    { loop: true, align: "start", dragFree: true },
    [autoScroll],
  );

  const onDark = variant === "dark";

  return (
    <section
      className={cn(
        "py-20 lg:py-28 relative overflow-hidden",
        onDark
          ? "bg-surface-darker text-on-dark"
          : "bg-surface-muted text-ink",
      )}
    >
      {onDark && (
        <div className="absolute inset-0 marble-bg opacity-30" aria-hidden />
      )}
      <Container size="wide" className="relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-12 lg:mb-14 items-end">
          <Reveal className="lg:col-span-7">
            <Eyebrow variant={onDark ? "light" : undefined}>
              {tx.eyebrow}
            </Eyebrow>
            <h2
              className={cn(
                "display-lg mt-4 text-balance",
                onDark ? "text-on-dark" : "text-ink",
              )}
            >
              {tx.title}
            </h2>
          </Reveal>
          <Reveal delay={0.08} className="lg:col-span-5">
            <p
              className={cn(
                "text-[0.95rem] leading-relaxed",
                onDark ? "text-on-dark-muted" : "text-ink-muted",
              )}
            >
              {tx.description}
            </p>
            <div className="mt-6 flex gap-2">
              <button
                onClick={() => embla?.scrollPrev()}
                aria-label="Previous"
                className={cn(
                  "size-10 grid place-items-center border transition-all",
                  onDark
                    ? "border-on-dark/30 text-on-dark hover:bg-on-dark hover:text-ink"
                    : "border-line-strong text-ink hover:bg-ink hover:text-on-dark",
                )}
              >
                <ChevronLeft className="size-4" />
              </button>
              <button
                onClick={() => embla?.scrollNext()}
                aria-label="Next"
                className="size-10 grid place-items-center bg-gold text-ink hover:bg-gold-soft transition-all"
              >
                <ChevronRight className="size-4" />
              </button>
            </div>
          </Reveal>
        </div>

        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-4 lg:gap-6">
            {testimonials.map((t) => {
              const l = localizedTestimonial(t, locale);
              return (
                <article
                  key={t.id}
                  className={cn(
                    "flex-[0_0_88%] sm:flex-[0_0_60%] md:flex-[0_0_44%] lg:flex-[0_0_34%] p-7 lg:p-8 flex flex-col",
                    onDark
                      ? "bg-on-dark/[0.04] border border-on-dark/15"
                      : "bg-surface border border-line",
                  )}
                >
                  <div className="flex items-center justify-between mb-5">
                    <Quote
                      className={cn(
                        "size-7",
                        onDark ? "text-gold" : "text-gold-deep",
                      )}
                      strokeWidth={1.4}
                    />
                    {t.rating && (
                      <div className="flex gap-0.5">
                        {Array.from({ length: t.rating }).map((_, i) => (
                          <Star
                            key={i}
                            className="size-3.5 fill-gold text-gold"
                          />
                        ))}
                      </div>
                    )}
                  </div>

                  <p
                    className={cn(
                      "font-display text-[1.05rem] lg:text-[1.1rem] leading-relaxed flex-1 text-balance",
                      onDark ? "text-on-dark" : "text-ink",
                    )}
                  >
                    {l.quote}
                  </p>

                  <div
                    className={cn(
                      "mt-7 pt-5 border-t",
                      onDark ? "border-on-dark/15" : "border-line",
                    )}
                  >
                    <p
                      className={cn(
                        "font-display text-[1.05rem]",
                        onDark ? "text-on-dark" : "text-ink",
                      )}
                    >
                      {t.authorName}
                    </p>
                    <p
                      className={cn(
                        "text-[0.78rem] mt-1",
                        onDark ? "text-on-dark-muted" : "text-ink-soft",
                      )}
                    >
                      {l.authorTitle}
                      {t.authorCompany && ` · ${t.authorCompany}`}
                      {t.city && ` · ${t.city}`}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
