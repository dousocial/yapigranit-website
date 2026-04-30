"use client";

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
import { motion } from "motion/react";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { siteConfig } from "@/lib/site";

const trustPills = [
  { icon: Award, label: "25+ Yıllık Tecrübe" },
  { icon: ShieldCheck, label: "5 Eksen CNC & Waterjet" },
  { icon: Clock4, label: "12 Ülkeye İhracat" },
  { icon: Sparkles, label: "%100 Müşteri Memnuniyeti" },
];

export function HeroHome() {
  return (
    <section className="relative bg-surface-darker text-on-dark overflow-hidden">
      <div className="absolute inset-0 marble-bg opacity-50" aria-hidden />

      <Container size="wide" className="relative">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 pt-12 pb-16 lg:pt-20 lg:pb-24 min-h-[760px] lg:min-h-[820px]">
          {/* Left text */}
          <div className="lg:col-span-6 flex flex-col justify-center pt-4 lg:pt-12">
            <p className="eyebrow text-gold mb-4">Premium Doğal Taş</p>
            <motion.h1
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="display-xl text-on-dark text-balance"
            >
              Doğanın
              <br />
              <span className="italic font-light text-gold">
                sanata
              </span>{" "}
              dönüştüğü
              <br />
              yer.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-8 max-w-[460px] text-[1.02rem] text-on-dark-muted leading-relaxed"
            >
              Milyonlarca yıllık jeolojik mirası, modern mimarinin zarafetiyle
              buluşturuyoruz. Yaşam alanlarınız için sonsuzluk kadar dayanıklı,
              sanat kadar eşsiz çözümler.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              <Button asChild size="lg">
                <Link href="/urunler">
                  Koleksiyonu Keşfet
                  <ArrowRight />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline-light">
                <Link href="/projeler">
                  Projeleri Gör
                  <ArrowRight />
                </Link>
              </Button>
            </motion.div>
          </div>

          {/* Right image */}
          <motion.div
            initial={{ opacity: 0, scale: 1.04 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-6 relative min-h-[400px] lg:min-h-[640px]"
          >
            <div className="absolute inset-0 lg:-mr-8 xl:-mr-16 overflow-hidden rounded-sm">
              <Image
                src="/images/sections/hero-home.webp"
                alt="Premium mermer mutfak uygulaması"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div
                className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-surface-darker/40"
                aria-hidden
              />
            </div>
          </motion.div>
        </div>

        {/* Trust pills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="relative pb-10 -mt-4 lg:-mt-12"
        >
          <div className="border-t border-line-dark pt-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-4">
              {trustPills.map((pill) => (
                <div
                  key={pill.label}
                  className="flex items-center gap-3 text-on-dark-muted"
                >
                  <pill.icon className="size-4 text-gold shrink-0" />
                  <span className="text-[0.85rem] font-medium">
                    {pill.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </Container>

      {/* Right edge social column */}
      <div className="hidden lg:flex absolute right-6 top-1/2 -translate-y-1/2 flex-col items-center gap-5 z-10">
        <a
          href={siteConfig.social.instagram}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="text-on-dark-muted hover:text-gold transition-colors"
        >
          <Instagram className="size-4" />
        </a>
        <a
          href={siteConfig.social.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="text-on-dark-muted hover:text-gold transition-colors"
        >
          <Linkedin className="size-4" />
        </a>
        <a
          href={siteConfig.social.youtube}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="YouTube"
          className="text-on-dark-muted hover:text-gold transition-colors"
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
        className="hidden lg:flex absolute right-6 bottom-10 flex-col items-center gap-2 text-on-dark-muted hover:text-gold transition-colors group"
        aria-label="Aşağı in"
      >
        <span className="text-[0.65rem] tracking-[0.2em] uppercase rotate-90 origin-bottom-right translate-y-12 -translate-x-2">
          Aşağı In
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown className="size-4 mt-12" />
        </motion.div>
      </button>
    </section>
  );
}
