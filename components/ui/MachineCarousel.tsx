"use client";

import Image from "next/image";
import { useRef } from "react";
import type { ReactNode } from "react";
import { useLanguage } from "@/lib/i18n/LanguageContext";

type MachineCardStatic = {
  id: string;
  image: string;
  icon: ReactNode;
};

const precisionIcon = (
  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M13 10V3L4 14h7v7l9-11h-7z"
    />
  </svg>
);

const machineStatic: MachineCardStatic[] = [
  {
    id: "waterjet",
    image: "/images/sujeti.avif",
    icon: (
      <svg
        className="w-6 h-6 text-gold/70"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
        />
      </svg>
    ),
  },
  {
    id: "cnc",
    image: "/images/cnc.avif",
    icon: (
      <svg
        className="w-6 h-6 text-gold/70"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5"
        />
      </svg>
    ),
  },
  {
    id: "bridge-saw",
    image: "/images/koprukesim.avif",
    icon: (
      <svg
        className="w-6 h-6 text-gold/70"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M3 7h18M6 7l2 14h8l2-14M9 7V5a3 3 0 013-3h0a3 3 0 013 3v2"
        />
      </svg>
    ),
  },
  {
    id: "side-cutting",
    image: "/images/yankesme.avif",
    icon: (
      <svg
        className="w-6 h-6 text-gold/70"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M3 6h18M3 12h18M3 18h18"
        />
      </svg>
    ),
  },
  {
    id: "cross-cutting",
    image: "/images/kafakesme.avif",
    icon: (
      <svg
        className="w-6 h-6 text-gold/70"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M3 12h18M12 3v18"
        />
      </svg>
    ),
  },
  {
    id: "chamfering",
    image: "/images/PAH.avif",
    icon: (
      <svg
        className="w-6 h-6 text-gold/70"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M4 12h8l-4 8M12 4h8l-4 8"
        />
      </svg>
    ),
  },
];

const imageSizes = "(max-width: 640px) 85vw, (max-width: 1024px) 60vw, 420px";

export default function MachineCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const { t } = useLanguage();
  const m = t.machines;

  const scrollByAmount = (direction: "prev" | "next") => {
    const container = scrollRef.current;
    if (!container) return;
    const amount = container.clientWidth * 0.85;
    container.scrollBy({
      left: direction === "next" ? amount : -amount,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative">
      <button
        type="button"
        aria-label={m.prevLabel}
        onClick={() => scrollByAmount("prev")}
        className="absolute left-0 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-gold/40 bg-black/70 text-gold shadow-lg backdrop-blur transition-colors hover:bg-gold hover:text-black"
      >
        <svg
          className="h-4 w-4"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M15 18l-6-6 6-6" />
        </svg>
      </button>
      <button
        type="button"
        aria-label={m.nextLabel}
        onClick={() => scrollByAmount("next")}
        className="absolute right-0 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-gold/40 bg-black/70 text-gold shadow-lg backdrop-blur transition-colors hover:bg-gold hover:text-black"
      >
        <svg
          className="h-4 w-4"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M9 18l6-6-6-6" />
        </svg>
      </button>

      <div
        ref={scrollRef}
        className="flex gap-10 overflow-x-auto pb-8 snap-x snap-mandatory custom-scrollbar scroll-smooth px-6 md:px-10"
      >
        {m.items.map((item, index) => {
          const staticData = machineStatic[index];
          return (
            <div
              key={staticData.id}
              className="group relative min-w-[280px] sm:min-w-[360px] lg:min-w-[420px] flex-shrink-0 snap-start"
            >
              <div className="absolute inset-0 -right-3 -bottom-3 rounded-2xl border border-gold/20 bg-[linear-gradient(135deg,_rgba(212,175,55,0.08)_25%,_transparent_25%,_transparent_50%,_rgba(212,175,55,0.08)_50%,_rgba(212,175,55,0.08)_75%,_transparent_75%,_transparent)] bg-[size:12px_12px] transition-transform duration-500 group-hover:translate-x-1 group-hover:translate-y-1" />
              <div className="relative bg-black/80 border border-white/10 rounded-2xl overflow-hidden z-10 transition-colors duration-500 group-hover:border-gold/40">
                <div className="relative w-full h-72 overflow-hidden">
                  <Image
                    src={staticData.image}
                    alt={item.alt}
                    fill
                    className="absolute inset-0 object-cover transition-all duration-700 ease-in-out grayscale contrast-105 brightness-110 group-hover:grayscale-0 group-hover:contrast-125 group-hover:scale-105"
                    sizes={imageSizes}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90 group-hover:opacity-60 transition-opacity duration-700" />
                  <div className="absolute bottom-4 left-6 translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100 flex items-center gap-3">
                    <div className="h-8 w-8 rounded bg-gold/10 backdrop-blur border border-gold/40 flex items-center justify-center text-gold">
                      {precisionIcon}
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[10px] text-gold/80 uppercase tracking-[0.3em]">
                        {m.precisionLabel}
                      </span>
                      <span className="text-sm font-semibold text-white">
                        {item.precision}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="p-8 relative">
                  <div className="absolute top-0 right-0 -mt-6 mr-6 bg-black/70 border border-white/10 p-2 rounded shadow-xl group-hover:border-gold/40 transition-colors duration-300">
                    {staticData.icon}
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-3 font-serif group-hover:text-gold transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-400 leading-relaxed mb-4">
                    {item.description}
                  </p>

                  <div className="w-full h-px bg-white/10 group-hover:bg-gold/30 transition-colors my-4" />

                  <div className="flex gap-4 text-xs uppercase tracking-[0.2em] text-gold/70">
                    {item.tags.map((tag) => (
                      <span key={`${staticData.id}-${tag}`}>{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
