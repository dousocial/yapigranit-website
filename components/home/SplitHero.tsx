"use client";

import type { SanityImageSource } from "@sanity/image-url";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { urlFor } from "@/lib/sanity/image";
import type { HeroSection, HomePageData } from "@/types/sanity";
import { useLanguage } from "@/lib/i18n/LanguageContext";

type SplitHeroProps = {
  hero: HomePageData["hero"];
};

const defaultLeftPoster =
  "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?q=80&w=2070&auto=format&fit=crop";

const renderTextWithBreaks = (text: string) => {
  const lines = text.split("\n");

  return lines.map((line, index) => (
    <span key={`${line}-${index}`}>
      {line}
      {index < lines.length - 1 && <br className="hidden md:block" />}
    </span>
  ));
};

const isVideoUrl = (url: string) =>
  /\.(mp4|webm|mov|m4v)(\?|#|$)/i.test(url);

const resolveImageUrl = (source: HeroSection["backgroundImage"]) => {
  if (!source) {
    return null;
  }

  const sourceValue = source as unknown;
  if (typeof sourceValue === "string") {
    return isVideoUrl(sourceValue) ? null : sourceValue;
  }

  return urlFor(source as SanityImageSource).url();
};

export default function SplitHero({ hero }: SplitHeroProps) {
  const { t } = useLanguage();
  const { leftSide, rightSide } = hero;
  const leftImageUrl = resolveImageUrl(leftSide.backgroundImage);
  const leftPoster = leftImageUrl ?? defaultLeftPoster;
  const [leftVideoFailed, setLeftVideoFailed] = useState(false);
  const [rightVideoFailed, setRightVideoFailed] = useState(false);
  const showLeftVideo = Boolean(leftSide.backgroundVideoUrl) && !leftVideoFailed;
  const showRightVideo =
    Boolean(rightSide.backgroundVideoUrl) && !rightVideoFailed;

  // Use translated hero text (falls back to Sanity data for title/subtitle/button)
  const leftTitle = t.hero.leftTitle || leftSide.title;
  const leftSubtitle = t.hero.leftSubtitle || leftSide.subtitle;
  const leftBtn = t.hero.leftBtn || leftSide.buttonText;
  const rightTitle = t.hero.rightTitle || rightSide.title;
  const rightSubtitle = t.hero.rightSubtitle || rightSide.subtitle;
  const rightBtn = t.hero.rightBtn || rightSide.buttonText;

  return (
    <div className="split-container group flex h-screen w-full flex-col bg-black md:flex-row">
      <section className="split-section border-b border-white/10 cursor-pointer md:border-b-0 md:border-r">
        <div className="bg-media">
          {showLeftVideo ? (
            <video
              className="h-full w-full object-cover"
              autoPlay
              muted
              loop
              playsInline
              poster={leftPoster}
              onError={() => setLeftVideoFailed(true)}
            >
              <source src={leftSide.backgroundVideoUrl} type="video/mp4" />
            </video>
          ) : (
            <Image
              src={leftPoster}
              alt={leftTitle}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          )}
        </div>

        <div className="overlay absolute inset-0 z-10 flex items-center justify-center bg-black/60 transition-colors duration-500 hover:bg-black/50">
          <div className="content-wrapper">
            <span className="mb-3 block text-[10px] font-bold uppercase tracking-[0.2em] text-gold opacity-90 md:text-xs">
              {t.hero.leftLabel}
            </span>
            <h2 className="mb-4 text-2xl font-serif font-bold leading-tight md:text-5xl">
              {renderTextWithBreaks(leftTitle)}
            </h2>
            <p className="mx-auto mb-8 max-w-sm text-xs font-medium text-gray-200 md:text-sm font-sans leading-relaxed">
              {renderTextWithBreaks(leftSubtitle)}
            </p>
            <Link href={leftSide.buttonLink}>
              <button className="border border-white/40 bg-white/5 px-8 py-4 text-xs font-sans uppercase tracking-[0.2em] text-white backdrop-blur-sm transition-all duration-300 hover:bg-gold hover:text-black hover:border-gold">
                {leftBtn}
              </button>
            </Link>
          </div>
        </div>
      </section>

      <section className="split-section relative cursor-pointer">
        {showRightVideo ? (
          <div className="bg-media">
            <video
              className="h-full w-full object-cover"
              autoPlay
              muted
              loop
              playsInline
              onError={() => setRightVideoFailed(true)}
            >
              <source src={rightSide.backgroundVideoUrl} type="video/mp4" />
            </video>
          </div>
        ) : (
          <div className="bg-media bg-gradient-to-br from-black via-black/70 to-black/90" />
        )}

        <div className="overlay absolute inset-0 z-10 flex items-center justify-center bg-black/50 transition-colors duration-500 hover:bg-black/40">
          <div className="content-wrapper">
            <span className="mb-3 block text-[10px] font-bold uppercase tracking-[0.2em] text-gold opacity-90 md:text-xs">
              {t.hero.rightLabel}
            </span>
            <h2 className="mb-4 text-2xl font-serif font-bold leading-tight md:text-5xl">
              {renderTextWithBreaks(rightTitle)}
            </h2>
            <p className="mx-auto mb-8 max-w-sm text-xs font-medium text-gray-200 md:text-sm font-sans leading-relaxed">
              {renderTextWithBreaks(rightSubtitle)}
            </p>
            <Link href={rightSide.buttonLink}>
              <button className="border border-white/40 bg-white/5 px-8 py-4 text-xs font-sans uppercase tracking-[0.2em] text-white backdrop-blur-sm transition-all duration-300 hover:bg-gold hover:text-black hover:border-gold">
                {rightBtn}
               </button>
            </Link>
          </div>
        </div>
      </section>

      <div className="pointer-events-none absolute bottom-0 z-40 flex w-full items-center justify-between bg-gradient-to-t from-black/90 to-transparent px-8 py-4 text-[10px] text-white/50 md:text-xs font-sans">
        <span className="pointer-events-auto cursor-default transition-colors hover:text-white">
          {t.hero.copyright}
        </span>
        <div className="pointer-events-auto flex space-x-6">
          <a href={t.footer.phoneHref} className="transition-colors hover:text-gold">
            {t.hero.phone}
          </a>
          <a
            href={t.footer.emailHref}
            className="hidden transition-colors hover:text-gold md:inline"
          >
            {t.hero.email}
          </a>
        </div>
      </div>
    </div>
  );
}
