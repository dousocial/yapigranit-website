"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import Image from "next/image";
import {
  ArrowRight,
  ArrowDown,
  Award,
  ShieldCheck,
  Clock4,
  Sparkles,
  Instagram,
  Linkedin,
  Youtube,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { siteConfig } from "@/lib/site";

const trustPills = [
  { icon: Award, key: "trustExperience" as const },
  { icon: ShieldCheck, key: "trustTechnology" as const },
  { icon: Clock4, key: "trustExport" as const },
  { icon: Sparkles, key: "trustSatisfaction" as const },
];

export function HeroHome() {
  const t = useTranslations("Hero");

  return (
    <section className="relative bg-surface-darker text-on-dark overflow-hidden">
      {/* Full-bleed background image */}
      <div className="absolute inset-0 z-0 hero-bg-fade" aria-hidden>
        <Image
          src="/images/sections/hero-home.webp"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        {/* Soft directional vignette — readability without hiding image */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(105deg, rgba(8,7,10,0.62) 0%, rgba(8,7,10,0.32) 38%, rgba(8,7,10,0.06) 65%, rgba(8,7,10,0) 100%)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, rgba(8,7,10,0.4) 0%, rgba(8,7,10,0) 30%, rgba(8,7,10,0) 80%, rgba(8,7,10,0.18) 100%)",
          }}
        />
      </div>

      <style>{`
        .hero-bg-fade {
          animation: heroBgIn 1.4s cubic-bezier(0.22, 1, 0.36, 1) both;
          will-change: opacity, transform;
        }
        @keyframes heroBgIn {
          from { opacity: 0; transform: scale(1.06); }
          to { opacity: 1; transform: scale(1); }
        }
        .hero-title { text-shadow: 0 2px 28px rgba(0,0,0,0.55), 0 1px 4px rgba(0,0,0,0.4); }
        .hero-desc  { text-shadow: 0 1px 8px rgba(0,0,0,0.55); }
        .hero-fade-1, .hero-fade-2, .hero-fade-3, .hero-fade-4, .hero-fade-5 {
          opacity: 0;
          animation: heroTextIn 0.85s cubic-bezier(0.22, 1, 0.36, 1) forwards;
          will-change: opacity, transform;
        }
        .hero-fade-1 { animation-delay: 0.1s; }
        .hero-fade-2 { animation-delay: 0.2s; }
        .hero-fade-3 { animation-delay: 0.4s; }
        .hero-fade-4 { animation-delay: 0.55s; }
        .hero-fade-5 { animation-delay: 0.7s; }
        @keyframes heroTextIn {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @media (prefers-reduced-motion: reduce) {
          .hero-bg-fade,
          .hero-fade-1, .hero-fade-2, .hero-fade-3, .hero-fade-4, .hero-fade-5 {
            animation: none;
            opacity: 1;
          }
        }
      `}</style>

      <Container size="wide" className="relative z-10">
        <div className="flex flex-col justify-center pt-12 pb-16 lg:pt-24 lg:pb-28 min-h-[760px] lg:min-h-[820px]">
          <div className="max-w-[640px]">
            <p className="eyebrow text-gold mb-4 hero-fade-1">
              {t("eyebrow")}
            </p>
            <h1 className="display-xl text-on-dark text-balance hero-title hero-fade-2">
              {t("titlePart1")}
              <br />
              <span className="italic font-light text-gold">
                {t("titlePart2")}
              </span>{" "}
              {t("titlePart3")}
              <br />
              {t("titlePart4")}
            </h1>

            <p className="mt-8 max-w-[480px] text-[1.02rem] text-on-dark-muted leading-relaxed hero-desc hero-fade-3">
              {t("description")}
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4 hero-fade-4">
              <Button asChild size="lg">
                <Link href="/urunler">
                  {t("ctaPrimary")}
                  <ArrowRight />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline-light">
                <Link href="/projeler">
                  {t("ctaSecondary")}
                  <ArrowRight />
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Trust pills */}
        <div className="relative pb-10 -mt-4 lg:-mt-12 hero-fade-5">
          <div className="border-t border-on-dark/15 pt-6 backdrop-blur-sm">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-4">
              {trustPills.map((pill) => (
                <div
                  key={pill.key}
                  className="flex items-center gap-3 text-on-dark-muted"
                >
                  <pill.icon className="size-4 text-gold shrink-0" />
                  <span className="text-[0.85rem] font-medium drop-shadow-[0_1px_4px_rgba(0,0,0,0.6)]">
                    {t(pill.key)}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>

      {/* Right edge social column */}
      <div className="hidden lg:flex absolute right-6 top-1/2 -translate-y-1/2 flex-col items-center gap-5 z-20">
        <a
          href={siteConfig.social.instagram}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="text-on-dark/70 hover:text-gold transition-colors drop-shadow-[0_1px_4px_rgba(0,0,0,0.6)]"
        >
          <Instagram className="size-4" />
        </a>
        <a
          href={siteConfig.social.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="text-on-dark/70 hover:text-gold transition-colors drop-shadow-[0_1px_4px_rgba(0,0,0,0.6)]"
        >
          <Linkedin className="size-4" />
        </a>
        <a
          href={siteConfig.social.youtube}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="YouTube"
          className="text-on-dark/70 hover:text-gold transition-colors drop-shadow-[0_1px_4px_rgba(0,0,0,0.6)]"
        >
          <Youtube className="size-4" />
        </a>
      </div>

      {/* Scroll cue */}
      <button
        onClick={() => {
          document
            .getElementById("urun-gruplarimiz")
            ?.scrollIntoView({ behavior: "smooth" });
        }}
        className="hidden lg:flex absolute right-6 bottom-10 flex-col items-center gap-2 text-on-dark/70 hover:text-gold transition-colors group z-20"
        aria-label={t("scrollDown")}
      >
        <span className="text-[0.65rem] tracking-[0.2em] uppercase rotate-90 origin-bottom-right translate-y-12 -translate-x-2 drop-shadow-[0_1px_4px_rgba(0,0,0,0.6)]">
          {t("scrollDown")}
        </span>
        <div className="scroll-cue-bounce">
          <ArrowDown className="size-4 mt-12 drop-shadow-[0_1px_4px_rgba(0,0,0,0.6)]" />
        </div>
        <style>{`
          .scroll-cue-bounce {
            animation: scrollCueBounce 1.8s ease-in-out infinite;
          }
          @keyframes scrollCueBounce {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(6px); }
          }
        `}</style>
      </button>
    </section>
  );
}
