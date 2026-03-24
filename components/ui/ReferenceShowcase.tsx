"use client";

import Image from "next/image";
import { useRef, useState, type PointerEvent, type ReactElement } from "react";
import { useLanguage } from "@/lib/i18n/LanguageContext";

type Brand = {
  name: string;
  icon: ReactElement;
};

const brands: Brand[] = [
  {
    name: "DEKTON",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <rect x="4" y="4" width="16" height="16" strokeWidth="1.5" />
        <path d="M8 8h8M8 12h8M8 16h5" strokeWidth="1.5" />
      </svg>
    )
  },
  {
    name: "INFINITY",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path d="M3 12c2.2-3 4.8-3 7 0s4.8 3 7 0 4.8-3 7 0" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    )
  },
  {
    name: "NEOLITH",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path d="M12 3L3 21h18L12 3z" strokeWidth="1.5" strokeLinejoin="round" />
      </svg>
    )
  },
  {
    name: "FLORIM",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <circle cx="12" cy="12" r="3" strokeWidth="1.5" />
        <path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.5 5.5l2.1 2.1M16.4 16.4l2.1 2.1M18.5 5.5l-2.1 2.1M7.6 16.4l-2.1 2.1" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    )
  },
  {
    name: "LAMİNAM",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path d="M4 7h16M4 12h16M4 17h16" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    )
  },
  {
    name: "NUOVOCORSO",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path d="M2 12c2.5-3.5 5.5-3.5 8 0s5.5 3.5 8 0 5.5-3.5 8 0" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    )
  },
  {
    name: "ANATOLIA",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path d="M3 18l6-8 4 5 3-4 5 7H3z" strokeWidth="1.5" strokeLinejoin="round" />
        <circle cx="17" cy="7" r="2" strokeWidth="1.5" />
      </svg>
    )
  },
  {
    name: "ATLASPLAN",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <circle cx="12" cy="12" r="8" strokeWidth="1.5" />
        <path d="M4 12h16" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M12 4c2.5 3 2.5 13 0 16" strokeWidth="1.5" />
        <path d="M12 4c-2.5 3-2.5 13 0 16" strokeWidth="1.5" />
      </svg>
    )
  },
  {
    name: "TECHLAM",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path d="M7 4h10l5 8-5 8H7l-5-8 5-8z" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M12 8v8M9 12h6" strokeWidth="1.5" />
      </svg>
    )
  },
  {
    name: "MATERİA",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <circle cx="7" cy="7" r="1.5" strokeWidth="1.5" />
        <circle cx="12" cy="7" r="1.5" strokeWidth="1.5" />
        <circle cx="17" cy="7" r="1.5" strokeWidth="1.5" />
        <circle cx="9.5" cy="12" r="1.5" strokeWidth="1.5" />
        <circle cx="14.5" cy="12" r="1.5" strokeWidth="1.5" />
        <circle cx="12" cy="17" r="1.5" strokeWidth="1.5" />
      </svg>
    )
  },
  {
    name: "T-ONE",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path d="M4 6h16M12 6v12" strokeWidth="1.5" />
      </svg>
    )
  }
];

export default function ReferenceShowcase() {
  const { t } = useLanguage();
  const sliderRef = useRef<HTMLDivElement>(null);
  const isDraggingRef = useRef(false);
  const startXRef = useRef(0);
  const scrollLeftRef = useRef(0);
  const [isDragging, setIsDragging] = useState(false);

  const handlePointerDown = (event: PointerEvent<HTMLDivElement>) => {
    const slider = sliderRef.current;
    if (!slider) return;
    isDraggingRef.current = true;
    setIsDragging(true);
    startXRef.current = event.clientX;
    scrollLeftRef.current = slider.scrollLeft;
    slider.setPointerCapture(event.pointerId);
  };

  const handlePointerMove = (event: PointerEvent<HTMLDivElement>) => {
    const slider = sliderRef.current;
    if (!slider || !isDraggingRef.current) return;
    const walk = (event.clientX - startXRef.current) * 1.5;
    slider.scrollLeft = scrollLeftRef.current - walk;
  };

  const handlePointerUp = (event: PointerEvent<HTMLDivElement>) => {
    const slider = sliderRef.current;
    if (!slider) return;
    isDraggingRef.current = false;
    setIsDragging(false);
    slider.releasePointerCapture(event.pointerId);
  };

  const handlePointerLeave = () => {
    isDraggingRef.current = false;
    setIsDragging(false);
  };

  const handleScrollNext = () => {
    const slider = sliderRef.current;
    if (!slider) return;
    const card = slider.querySelector<HTMLElement>("[data-card]");
    const gap = 32;
    const scrollAmount = card ? card.offsetWidth + gap : slider.clientWidth * 0.9;
    slider.scrollBy({ left: scrollAmount, behavior: "smooth" });
  };

  return (
    <section className="py-24 bg-black relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top,_rgba(212,175,55,0.12),_transparent_50%)]" />
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(212,175,55,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(212,175,55,0.08) 1px, transparent 1px)",
            backgroundSize: "56px 56px"
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative">
        <div className="text-center mb-20 space-y-4">
          <span className="text-gold text-xs font-bold tracking-[0.3em] uppercase">
            {t.reference.badge}
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold leading-tight">
            {t.reference.title}{" "}
            <span className="text-gold">{t.reference.titleHighlight}</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg leading-relaxed">
            {t.reference.desc}
          </p>
        </div>

        <div className="mb-20 border-y border-white/10 bg-white/5 backdrop-blur-sm">
          <div
            className="overflow-hidden"
            style={{
              maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
              WebkitMaskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)"
            }}
          >
            <div className="flex items-center gap-16 py-8 whitespace-nowrap w-max animate-marquee">
              {[...brands, ...brands].map((brand, index) => (
                <div
                  key={`${brand.name}-${index}`}
                  aria-hidden={index >= brands.length}
                  className="flex items-center gap-3 text-gold/60 uppercase tracking-[0.3em] text-xs font-semibold hover:text-gold transition-colors"
                >
                  <span className="h-6 w-6">{brand.icon}</span>
                  <span>{brand.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="relative">
          <div
            ref={sliderRef}
            className={`flex gap-8 overflow-x-auto pb-10 snap-x snap-mandatory custom-scrollbar ${
              isDragging ? "cursor-grabbing" : "cursor-grab"
            }`}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            onPointerCancel={handlePointerLeave}
            onPointerLeave={handlePointerLeave}
            style={{ touchAction: "pan-y" }}
          >
            {t.reference.projects.map((project, idx) => (
              <div
                key={idx}
                data-card
                className="group relative flex-shrink-0 w-[85vw] md:w-[440px] snap-center rounded-2xl border border-white/10 bg-white/5 overflow-hidden transition-transform duration-300 hover:-translate-y-1"
                style={{ "--mouse-x": "50%", "--mouse-y": "50%" } as React.CSSProperties}
                onMouseMove={(event) => {
                  const rect = event.currentTarget.getBoundingClientRect();
                  event.currentTarget.style.setProperty("--mouse-x", `${event.clientX - rect.left}px`);
                  event.currentTarget.style.setProperty("--mouse-y", `${event.clientY - rect.top}px`);
                }}
              >
                <div
                  className="absolute inset-0 opacity-0 transition-opacity duration-500 pointer-events-none group-hover:opacity-100"
                  style={{ background: "radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(212,175,55,0.18), transparent 45%)" }}
                />
                <div className="h-72 relative overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 grayscale contrast-110 group-hover:scale-110 group-hover:grayscale-0 group-hover:contrast-125"
                    sizes="(max-width: 768px) 85vw, 440px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <span className="text-[10px] uppercase tracking-[0.3em] text-gold/80">
                      {project.city}
                    </span>
                    <h3 className="text-2xl font-serif font-bold text-white">
                      {project.title}
                    </h3>
                  </div>
                </div>
                <div className="p-8 relative z-10">
                  <p className="text-sm text-gray-400 leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="absolute top-0 right-0 h-full w-28 bg-gradient-to-l from-black to-transparent pointer-events-none hidden md:block" />
          <button
            type="button"
            onClick={handleScrollNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-full border border-gold/40 bg-black/70 text-gold shadow-lg hover:bg-black/90 transition-colors"
            aria-label={t.reference.nextProjects}
          >
            →
          </button>
        </div>

        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-white/10 pt-12">
          {t.reference.stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-4xl font-serif font-bold text-white mb-2">
                {stat.value}
              </div>
              <div className="text-xs text-gray-500 uppercase tracking-[0.3em]">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
