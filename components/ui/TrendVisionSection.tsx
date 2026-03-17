"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";

import { blogPosts } from "@/components/blog/blogPosts";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function TrendVisionSection() {
  const { t } = useLanguage();
  const sliderRef = useRef<HTMLDivElement>(null);

  const scrollByCard = (direction: "next" | "prev") => {
    const slider = sliderRef.current;
    if (!slider) return;
    const card = slider.querySelector<HTMLElement>("[data-card]");
    const gap = 24;
    const scrollAmount = card ? card.offsetWidth + gap : slider.clientWidth * 0.85;
    slider.scrollBy({
      left: direction === "next" ? scrollAmount : -scrollAmount,
      behavior: "smooth"
    });
  };

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    let rafId: number | null = null;

    const setInitialPosition = () => {
      const loopWidth = slider.scrollWidth / 2;
      slider.scrollLeft = loopWidth;
    };

    const handleScroll = () => {
      const loopWidth = slider.scrollWidth / 2;
      if (slider.scrollLeft <= 0) {
        slider.scrollLeft += loopWidth;
      } else if (slider.scrollLeft >= slider.scrollWidth - slider.clientWidth) {
        slider.scrollLeft -= loopWidth;
      }
    };

    const handleScrollRaf = () => {
      if (rafId !== null) return;
      rafId = requestAnimationFrame(() => {
        handleScroll();
        rafId = null;
      });
    };

    setInitialPosition();
    slider.addEventListener("scroll", handleScrollRaf);
    return () => {
      slider.removeEventListener("scroll", handleScrollRaf);
      if (rafId !== null) {
        cancelAnimationFrame(rafId);
      }
    };
  }, []);

  const loopItems = [...blogPosts, ...blogPosts];

  return (
    <section id="trend-vision" className="py-24 bg-black relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.18),transparent_55%)]" />
        <div className="absolute inset-0 opacity-20 bg-[repeating-linear-gradient(120deg,rgba(255,255,255,0.06)_0px,rgba(255,255,255,0.06)_1px,transparent_1px,transparent_18px)]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative">
        <header className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <span className="h-px w-12 bg-gradient-to-r from-transparent via-gold/80 to-gold" />
            <span className="text-gold tracking-[0.3em] text-xs uppercase font-bold">
              {t.trend.badge}
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-serif text-white">
            {t.trend.title}{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f7e7b3] via-gold to-[#b5811d]">
              {t.trend.titleHighlight}
            </span>
            <span className="block text-3xl md:text-5xl text-white/40 font-serif italic mt-2">
              {t.trend.year}
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl text-base md:text-lg leading-relaxed border-l-2 border-white/10 pl-6 mt-4">
            {t.trend.description}
          </p>
        </header>

        <div className="relative">
          <div
            ref={sliderRef}
            className="trend-vision-slider flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory scroll-smooth"
            style={{ scrollPaddingLeft: "1.5rem" }}
          >
            {loopItems.map((item, index) => (
              <article
                key={`${item.id}-${index}`}
                data-card
                className="group relative flex-shrink-0 w-[85vw] md:w-[420px] lg:w-[460px] snap-start overflow-hidden rounded-2xl border border-white/10 bg-black/60"
              >
                {item.href && (
                  <Link
                    href={item.href}
                    className="absolute inset-0 z-20"
                    aria-label={`${item.title}`}
                  />
                )}
                <div className="absolute inset-0">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover opacity-70 transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 1024px) 90vw, 420px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
                </div>

                <div className="relative z-10 p-6 md:p-8 space-y-4 min-h-[320px] flex flex-col justify-end">
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center gap-2 px-3 py-1 border border-gold/30 bg-gold/10 text-gold text-[10px] uppercase tracking-[0.3em] font-bold">
                      {item.category}
                    </span>
                    <span className="text-white/70 text-xs border border-white/10 px-2 py-1">
                      {item.readTime}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-2xl md:text-3xl font-serif text-white group-hover:text-gold transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-white/70 text-xs md:text-sm uppercase tracking-[0.2em] mt-2">
                      {item.subtitle}
                    </p>
                  </div>

                  <p className="text-white/60 text-sm leading-relaxed border-t border-white/10 pt-4">
                    {item.description}
                  </p>

                  <div className="flex items-center gap-2 text-gold text-xs uppercase tracking-[0.3em] font-bold">
                    {t.trend.readMore} <span className="text-base">→</span>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <button
            type="button"
            onClick={() => scrollByCard("prev")}
            className="flex absolute -left-4 top-1/2 -translate-y-1/2 h-10 w-10 md:h-11 md:w-11 items-center justify-center rounded-full border border-gold/40 bg-black/70 text-gold hover:bg-black/90 transition-colors"
            aria-label={t.trend.prevContent}
          >
            ←
          </button>
          <button
            type="button"
            onClick={() => scrollByCard("next")}
            className="flex absolute -right-4 top-1/2 -translate-y-1/2 h-10 w-10 md:h-11 md:w-11 items-center justify-center rounded-full border border-gold/40 bg-black/70 text-gold hover:bg-black/90 transition-colors"
            aria-label={t.trend.nextContent}
          >
            →
          </button>

          <div className="absolute left-0 top-0 h-full w-12 bg-gradient-to-r from-black to-transparent pointer-events-none" />
          <div className="absolute right-0 top-0 h-full w-12 bg-gradient-to-l from-black to-transparent pointer-events-none" />
        </div>
      </div>
      <style jsx global>{`
        .trend-vision-slider::-webkit-scrollbar {
          height: 8px;
        }
        .trend-vision-slider::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.12);
          border-radius: 999px;
        }
        .trend-vision-slider::-webkit-scrollbar-thumb {
          background: #5d0e18;
          border-radius: 999px;
        }
        .trend-vision-slider {
          scrollbar-color: #5d0e18 rgba(255, 255, 255, 0.12);
          scrollbar-width: thin;
        }
      `}</style>
    </section>
  );
}
