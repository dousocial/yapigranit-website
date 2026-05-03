"use client";

import * as React from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface LightboxProps {
  images: string[];
  alt: string;
  className?: string;
  /**
   * If true, the first thumbnail in the grid loads with `priority` so that
   * Next.js can mark it as the LCP candidate on detail pages.
   */
  priorityFirst?: boolean;
}

export function Lightbox({
  images,
  alt,
  className,
  priorityFirst = false,
}: LightboxProps) {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);

  const close = React.useCallback(() => setOpenIndex(null), []);
  const next = React.useCallback(() => {
    setOpenIndex((i) => (i === null ? null : (i + 1) % images.length));
  }, [images.length]);
  const prev = React.useCallback(() => {
    setOpenIndex((i) =>
      i === null ? null : (i - 1 + images.length) % images.length,
    );
  }, [images.length]);

  React.useEffect(() => {
    if (openIndex === null) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    }
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [openIndex, close, next, prev]);

  // Touch swipe
  const touchStart = React.useRef<number | null>(null);
  function onTouchStart(e: React.TouchEvent) {
    touchStart.current = e.touches[0].clientX;
  }
  function onTouchEnd(e: React.TouchEvent) {
    if (touchStart.current === null) return;
    const diff = e.changedTouches[0].clientX - touchStart.current;
    if (Math.abs(diff) > 50) {
      if (diff > 0) prev();
      else next();
    }
    touchStart.current = null;
  }

  return (
    <>
      <div className={className}>
        {images.map((src, i) => (
          <button
            key={`${src}-${i}`}
            type="button"
            onClick={() => setOpenIndex(i)}
            className="group relative aspect-[4/3] overflow-hidden bg-surface block w-full"
          >
            <Image
              src={src}
              alt={`${alt} - ${i + 1}`}
              fill
              priority={priorityFirst && i === 0}
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
            />
            <div className="absolute inset-0 bg-surface-darker/0 group-hover:bg-surface-darker/20 transition-colors" />
          </button>
        ))}
      </div>

      <AnimatePresence>
        {openIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[60] bg-surface-darker/95 backdrop-blur-md flex items-center justify-center"
            onClick={close}
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
          >
            <button
              onClick={close}
              className="absolute top-4 right-4 size-11 grid place-items-center text-on-dark hover:text-gold z-10"
              aria-label="Kapat"
            >
              <X className="size-6" />
            </button>

            {images.length > 1 && (
              <>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    prev();
                  }}
                  className="absolute left-4 size-11 grid place-items-center text-on-dark hover:text-gold z-10"
                  aria-label="Önceki"
                >
                  <ChevronLeft className="size-7" />
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    next();
                  }}
                  className="absolute right-4 size-11 grid place-items-center text-on-dark hover:text-gold z-10"
                  aria-label="Sonraki"
                >
                  <ChevronRight className="size-7" />
                </button>
              </>
            )}

            <motion.div
              key={openIndex}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-[90vw] h-[80vh] max-w-[1280px]"
            >
              <Image
                src={images[openIndex]}
                alt={`${alt} - ${openIndex + 1}`}
                fill
                priority
                sizes="90vw"
                className="object-contain"
              />
            </motion.div>

            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-on-dark-muted text-[0.85rem]">
              {openIndex + 1} / {images.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
