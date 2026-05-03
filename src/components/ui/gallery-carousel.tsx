"use client";

import * as React from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X, ZoomIn, Pause, Play } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";

interface GalleryCarouselProps {
  images: string[];
  alt: string;
}

export function GalleryCarousel({ images, alt }: GalleryCarouselProps) {
  const autoScroll = React.useMemo(
    () =>
      AutoScroll({
        speed: 0.8,          // px/frame — yavaş akış
        stopOnInteraction: false,
        stopOnMouseEnter: true,
        stopOnFocusIn: false,
      }),
    [],
  );

  const [emblaRef, embla] = useEmblaCarousel(
    { loop: true, align: "start", dragFree: true },
    [autoScroll],
  );

  const [isPlaying, setIsPlaying] = React.useState(true);
  const [lightbox, setLightbox] = React.useState<number | null>(null);

  // Lightbox açıkken scroll'u durdur
  React.useEffect(() => {
    const as = embla?.plugins()?.autoScroll;
    if (!as) return;
    if (lightbox !== null) {
      as.stop();
    } else if (isPlaying) {
      as.play();
    }
  }, [lightbox, embla, isPlaying]);

  const togglePlay = React.useCallback(() => {
    const as = embla?.plugins()?.autoScroll;
    if (!as) return;
    if (as.isPlaying()) {
      as.stop();
      setIsPlaying(false);
    } else {
      as.play();
      setIsPlaying(true);
    }
  }, [embla]);

  // Lightbox
  const closeLightbox = React.useCallback(() => setLightbox(null), []);
  const lbNext = React.useCallback(
    () => setLightbox((i) => (i === null ? null : (i + 1) % images.length)),
    [images.length],
  );
  const lbPrev = React.useCallback(
    () =>
      setLightbox((i) =>
        i === null ? null : (i - 1 + images.length) % images.length,
      ),
    [images.length],
  );

  React.useEffect(() => {
    if (lightbox === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") lbNext();
      if (e.key === "ArrowLeft") lbPrev();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [lightbox, closeLightbox, lbNext, lbPrev]);

  const touchStart = React.useRef<number | null>(null);
  function onTouchStart(e: React.TouchEvent) {
    touchStart.current = e.touches[0].clientX;
  }
  function onTouchEnd(e: React.TouchEvent) {
    if (touchStart.current === null) return;
    const diff = e.changedTouches[0].clientX - touchStart.current;
    if (Math.abs(diff) > 50) {
      if (diff > 0) lbPrev();
      else lbNext();
    }
    touchStart.current = null;
  }

  return (
    <>
      {/* Carousel */}
      <div className="relative">
        {/* Sol/sağ fade kenarları */}
        <div className="absolute left-0 top-0 bottom-0 w-16 z-10 pointer-events-none bg-gradient-to-r from-surface-muted to-transparent" />
        <div className="absolute right-0 top-0 bottom-0 w-16 z-10 pointer-events-none bg-gradient-to-l from-surface-muted to-transparent" />

        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-3 lg:gap-4">
            {images.map((src, i) => (
              <button
                key={`${src}-${i}`}
                type="button"
                onClick={() => setLightbox(i)}
                className="group relative flex-[0_0_82%] sm:flex-[0_0_58%] md:flex-[0_0_44%] lg:flex-[0_0_36%] aspect-[4/3] overflow-hidden bg-surface-muted"
              >
                <Image
                  src={src}
                  alt={`${alt} - ${i + 1}`}
                  fill
                  priority={i === 0}
                  sizes="(max-width: 768px) 82vw, 36vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-surface-darker/0 group-hover:bg-surface-darker/25 transition-colors flex items-center justify-center">
                  <ZoomIn className="size-7 text-on-dark opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Kontroller */}
        <div className="flex items-center justify-between mt-5">
          <span className="text-[0.82rem] text-ink-soft hidden sm:block">
            Görsele tıklayarak büyütebilirsiniz
          </span>
          <div className="flex items-center gap-2">
            <button
              onClick={() => embla?.scrollPrev()}
              aria-label="Önceki"
              className="size-10 grid place-items-center border border-line-strong text-ink hover:bg-ink hover:text-on-dark transition-all"
            >
              <ChevronLeft className="size-4" />
            </button>
            <button
              onClick={togglePlay}
              aria-label={isPlaying ? "Duraklat" : "Oynat"}
              className="size-10 grid place-items-center border border-line-strong text-ink hover:bg-ink hover:text-on-dark transition-all"
            >
              {isPlaying ? <Pause className="size-4" /> : <Play className="size-4" />}
            </button>
            <button
              onClick={() => embla?.scrollNext()}
              aria-label="Sonraki"
              className="size-10 grid place-items-center bg-gold text-ink hover:bg-gold-soft transition-all"
            >
              <ChevronRight className="size-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[60] bg-surface-darker/95 backdrop-blur-md flex items-center justify-center"
            onClick={closeLightbox}
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
          >
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 size-11 grid place-items-center text-on-dark hover:text-gold z-10"
              aria-label="Kapat"
            >
              <X className="size-6" />
            </button>

            {images.length > 1 && (
              <>
                <button
                  onClick={(e) => { e.stopPropagation(); lbPrev(); }}
                  className="absolute left-4 size-11 grid place-items-center text-on-dark hover:text-gold z-10"
                  aria-label="Önceki"
                >
                  <ChevronLeft className="size-7" />
                </button>
                <button
                  onClick={(e) => { e.stopPropagation(); lbNext(); }}
                  className="absolute right-4 size-11 grid place-items-center text-on-dark hover:text-gold z-10"
                  aria-label="Sonraki"
                >
                  <ChevronRight className="size-7" />
                </button>
              </>
            )}

            <motion.div
              key={lightbox}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-[90vw] h-[80vh] max-w-[1280px]"
            >
              <Image
                src={images[lightbox]}
                alt={`${alt} - ${lightbox + 1}`}
                fill
                priority
                sizes="90vw"
                className="object-contain"
              />
            </motion.div>

            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-on-dark-muted text-[0.85rem] tabular-nums">
              {lightbox + 1} / {images.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
