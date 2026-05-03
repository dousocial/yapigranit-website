"use client";

import * as React from "react";
import Image from "next/image";
import { useLocale } from "next-intl";
import { Hand } from "lucide-react";

import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Reveal } from "@/components/ui/reveal";

interface DigitalScanProps {
  /** Alt katman — teknik çizim, her zaman görünür */
  cadSrc?: string;
  /** Üst katman — foto-realistik render, sadece lens içinde görünür */
  realSrc?: string;
  aspect?: string;
  eyebrow?: string;
  title?: string;
  hint?: string;
  description?: string;
  /** Lens yarıçapı (px) */
  lensRadius?: number;
}

const i18nMap: Record<
  string,
  { eyebrow: string; title: string; hint: string; description: string }
> = {
  tr: {
    eyebrow: "Dijital Rölöve",
    title: "Dijital İkiz ile Kusursuz Başlangıç",
    hint: "Mouse'u gezdirerek tarama yapın.",
    description:
      "Milimetrik hassasiyet, sıfır risk: şantiyenizi sanal ortama taşıyoruz.",
  },
  en: {
    eyebrow: "Digital Survey",
    title: "Flawless Start with Digital Twin",
    hint: "Hover to scan.",
    description:
      "Millimeter precision, zero risk: your site, transferred into a virtual environment.",
  },
  de: {
    eyebrow: "Digitales Aufmaß",
    title: "Perfekter Start mit dem digitalen Zwilling",
    hint: "Mit der Maus scannen.",
    description:
      "Millimeterpräzision, null Risiko: Ihre Baustelle, übertragen in eine virtuelle Umgebung.",
  },
};

export function DigitalScan({
  cadSrc = "/images/scanning/cad.webp",
  realSrc = "/images/scanning/real.webp",
  aspect = "3 / 2",
  eyebrow,
  title,
  hint,
  description,
  lensRadius = 125,
}: DigitalScanProps) {
  const locale = useLocale();
  const tx = i18nMap[locale] ?? i18nMap.tr;

  const containerRef = React.useRef<HTMLDivElement | null>(null);
  const isInteractingRef = React.useRef(false);
  const rafRef = React.useRef<number | null>(null);
  const timeRef = React.useRef(0);

  const [coords, setCoords] = React.useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });
  const [active, setActive] = React.useState(false);

  // CSS custom properties — güncellemenin tek noktası
  const updateLens = React.useCallback((x: number, y: number) => {
    const el = containerRef.current;
    if (!el) return;
    el.style.setProperty("--x", `${x}px`);
    el.style.setProperty("--y", `${y}px`);
    setCoords({ x: Math.round(x), y: Math.round(y) });
  }, []);

  // Otomatik tarama — Lissajous eğrisi
  const startAuto = React.useCallback(() => {
    const tick = () => {
      const el = containerRef.current;
      if (!el || isInteractingRef.current) return;
      const rect = el.getBoundingClientRect();
      timeRef.current += 0.005;
      const cx = rect.width / 2;
      const cy = rect.height / 2;
      const x = cx + Math.sin(timeRef.current) * (rect.width * 0.3);
      const y = cy + Math.cos(timeRef.current * 1.5) * (rect.height * 0.2);
      updateLens(x, y);
      rafRef.current = requestAnimationFrame(tick);
    };
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(tick);
  }, [updateLens]);

  const stopAuto = React.useCallback(() => {
    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    }
  }, []);

  // İlk yükleme: merkeze konumla, oto-taramayı başlat
  React.useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    updateLens(rect.width / 2, rect.height / 2);
    startAuto();
    return () => stopAuto();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Mouse handlers
  function handleEnter() {
    isInteractingRef.current = true;
    setActive(true);
    stopAuto();
  }
  function handleLeave() {
    isInteractingRef.current = false;
    setActive(false);
    startAuto();
  }
  function handleMove(e: React.PointerEvent<HTMLDivElement>) {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    updateLens(e.clientX - rect.left, e.clientY - rect.top);
  }

  // Touch handlers — sayfanın scroll etmesini engelle
  function handleTouchMove(e: React.TouchEvent<HTMLDivElement>) {
    const el = containerRef.current;
    if (!el || e.touches.length === 0) return;
    e.preventDefault();
    const rect = el.getBoundingClientRect();
    const t = e.touches[0];
    updateLens(t.clientX - rect.left, t.clientY - rect.top);
  }

  const pad = (n: number) => String(n).padStart(3, "0");

  return (
    <section className="relative bg-surface-darker text-on-dark overflow-hidden py-20 lg:py-28">
      {/* arka grain dot pattern */}
      <div
        className="absolute inset-0 opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "20px 20px",
        }}
        aria-hidden
      />

      <Container size="wide" className="relative">
        <Reveal className="text-center max-w-[760px] mx-auto mb-12">
          <Eyebrow variant="light">{eyebrow ?? tx.eyebrow}</Eyebrow>
          <h2 className="display-lg mt-4 text-on-dark text-balance">
            {title ?? tx.title}
          </h2>
          <p className="mt-5 text-[0.95rem] text-gold font-medium">
            {hint ?? tx.hint}
          </p>
          <p className="mt-2 text-[0.9rem] text-on-dark-muted">
            {description ?? tx.description}
          </p>
        </Reveal>

        <Reveal>
          <div
            ref={containerRef}
            onPointerMove={handleMove}
            onPointerEnter={handleEnter}
            onPointerLeave={handleLeave}
            onTouchStart={handleEnter}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleLeave}
            onTouchCancel={handleLeave}
            className="relative w-full overflow-hidden bg-on-dark cursor-none select-none"
            style={
              {
                aspectRatio: aspect,
                "--x": "50%",
                "--y": "50%",
              } as React.CSSProperties
            }
          >
            {/* ALT KATMAN: teknik çizim — her zaman görünür */}
            <Image
              src={cadSrc}
              alt="Point cloud blueprint"
              fill
              sizes="100vw"
              className="object-cover"
              priority
            />

            {/* ÜST KATMAN: foto-realistik — clip-path circle ile sadece lens içinde */}
            <div
              className="absolute inset-0 will-change-[clip-path]"
              style={{
                clipPath: `circle(${lensRadius}px at var(--x) var(--y))`,
                WebkitClipPath: `circle(${lensRadius}px at var(--x) var(--y))`,
              }}
            >
              <Image
                src={realSrc}
                alt="3D BIM model"
                fill
                sizes="100vw"
                className="object-cover contrast-125 saturate-[0.2] brightness-110 mix-blend-screen"
                priority
              />
              {/* Altın nokta grid'i */}
              <div
                className="absolute inset-0 pointer-events-none opacity-30"
                style={{
                  backgroundImage:
                    "radial-gradient(circle, rgba(212,175,55,0.6) 1px, transparent 1px)",
                  backgroundSize: "22px 22px",
                  clipPath: `circle(${lensRadius}px at var(--x) var(--y))`,
                  WebkitClipPath: `circle(${lensRadius}px at var(--x) var(--y))`,
                }}
                aria-hidden
              />
              {/* Soldan sağa altın gradient süpürme */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(90deg, rgba(212,175,55,0) 0%, rgba(212,175,55,0.18) 50%, rgba(212,175,55,0) 100%)",
                  clipPath: `circle(${lensRadius}px at var(--x) var(--y))`,
                  WebkitClipPath: `circle(${lensRadius}px at var(--x) var(--y))`,
                }}
                aria-hidden
              />
            </div>

            {/* Lens çerçevesi — altın halka + crosshair + tarama çizgisi */}
            <div
              className="pointer-events-none absolute"
              style={{
                left: "var(--x)",
                top: "var(--y)",
                width: lensRadius * 2,
                height: lensRadius * 2,
                transform: "translate(-50%, -50%)",
                borderRadius: "9999px",
                boxShadow:
                  "0 0 0 1px rgba(212,175,55,0.65), 0 0 30px rgba(212,175,55,0.25), inset 0 0 1px 1px rgba(212,175,55,0.5)",
              }}
              aria-hidden
            >
              {/* Crosshair */}
              <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-gold text-xs leading-none select-none">
                +
              </span>
              {/* Yatay tarama çizgisi */}
              <span
                className="absolute left-2 right-2 h-px bg-gold/60"
                style={{
                  animation: "xrayScan 2.4s ease-in-out infinite",
                }}
              />
            </div>

            {/* Mouse içeride değilse el ikonu hint */}
            {!active && coords.x !== 0 && (
              <div
                className="pointer-events-none absolute z-10 text-gold/80"
                style={{
                  left: "var(--x)",
                  top: "var(--y)",
                  transform: "translate(-50%, calc(-50% + 22px))",
                }}
                aria-hidden
              >
                <Hand className="size-4" />
              </div>
            )}

            {/* Sağ üst — 3D BIM MODEL */}
            <div className="absolute top-4 right-4 z-10 px-3 py-1.5 bg-on-dark/10 border border-on-dark/20 backdrop-blur-sm">
              <span className="text-[0.68rem] uppercase tracking-[0.22em] text-on-dark-muted font-mono">
                3D BIM Model
              </span>
            </div>

            {/* Sol alt — POINT CLOUD DATA, yanıp sönen sarı nokta */}
            <div className="absolute bottom-4 left-4 z-10 inline-flex items-center gap-2 px-3 py-1.5 bg-on-dark/10 border border-gold/40 backdrop-blur-sm">
              <span
                className="size-1.5 rounded-full bg-gold"
                style={{ animation: "scanPulse 1.4s ease-in-out infinite" }}
              />
              <span className="text-[0.68rem] uppercase tracking-[0.22em] text-gold font-mono">
                Point Cloud Data
              </span>
            </div>

            {/* Sağ alt — koordinat HUD */}
            <div className="absolute bottom-4 right-4 z-10 px-3 py-1.5 bg-on-dark/10 border border-on-dark/20 backdrop-blur-sm">
              <p className="text-[0.66rem] uppercase tracking-[0.18em] text-on-dark-muted font-mono leading-tight">
                X: {pad(coords.x)} | Y: {pad(coords.y)}
              </p>
              <p
                className="text-[0.66rem] uppercase tracking-[0.18em] font-mono leading-tight"
                style={{ color: active ? "#d4af37" : "rgba(255,255,255,0.45)" }}
              >
                Scan: {active ? "Active" : "Auto"}
              </p>
            </div>
          </div>
        </Reveal>
      </Container>

      <style>{`
        @keyframes scanPulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.4; transform: scale(0.6); }
        }
        @keyframes xrayScan {
          0%   { top: 12%; opacity: 0; }
          15%  { opacity: 1; }
          85%  { opacity: 1; }
          100% { top: 88%; opacity: 0; }
        }
      `}</style>
    </section>
  );
}
