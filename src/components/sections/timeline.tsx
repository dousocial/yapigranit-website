"use client";

import * as React from "react";
import { motion } from "motion/react";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Reveal } from "@/components/ui/reveal";
import { timeline } from "@/lib/data/b2b";
import { cn } from "@/lib/utils";

export function Timeline() {
  const [active, setActive] = React.useState(0);

  return (
    <section className="bg-background py-20 lg:py-28">
      <Container size="wide">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 mb-12">
          <Reveal className="lg:col-span-4">
            <Eyebrow>Yolculuğumuz</Eyebrow>
            <h2 className="display-lg mt-4 text-ink text-balance">
              Güçlü bir geçmiş, daha sağlam bir gelecek.
            </h2>
          </Reveal>
          <div className="lg:col-span-8 hidden lg:flex items-end">
            <p className="text-[0.95rem] text-ink-muted leading-relaxed max-w-[480px]">
              2004&apos;ten bu yana doğal taş ve yüzey çözümlerinde sektöre yön
              veren bir uzmanlık birikimi geliştiriyoruz.
            </p>
          </div>
        </div>

        {/* Desktop horizontal timeline */}
        <div className="hidden lg:block">
          <div className="relative">
            <div className="absolute top-3 left-0 right-0 h-px bg-line-strong" />
            <div
              className="absolute top-3 left-0 h-px bg-gold transition-all duration-500"
              style={{
                width: `${((active + 1) / timeline.length) * 100}%`,
              }}
            />

            <div className="grid grid-cols-6 relative">
              {timeline.map((item, idx) => (
                <button
                  key={item.year}
                  onMouseEnter={() => setActive(idx)}
                  onClick={() => setActive(idx)}
                  className="text-left group"
                >
                  <span
                    className={cn(
                      "size-6 rounded-full grid place-items-center transition-all -mt-[10px] -ml-[2px]",
                      idx <= active
                        ? "bg-gold border-gold"
                        : "bg-background border border-line-strong",
                      idx === active && "scale-125",
                    )}
                  >
                    <span
                      className={cn(
                        "size-2 rounded-full",
                        idx <= active ? "bg-ink" : "bg-line-strong",
                      )}
                    />
                  </span>
                  <div className="mt-6 pr-4">
                    <div
                      className={cn(
                        "font-display text-[1.7rem] transition-colors",
                        idx === active ? "text-gold-deep" : "text-ink",
                      )}
                    >
                      {item.year}
                    </div>
                    <p className="text-[0.85rem] text-ink-muted leading-relaxed mt-2">
                      {item.description}
                    </p>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile vertical timeline */}
        <div className="lg:hidden">
          <ol className="relative border-l-2 border-line-strong pl-6 space-y-8">
            {timeline.map((item, idx) => (
              <motion.li
                key={item.year}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="relative"
              >
                <span className="absolute -left-[31px] top-1 size-4 rounded-full bg-gold ring-4 ring-background" />
                <div className="font-display text-[1.5rem] text-ink">
                  {item.year}
                </div>
                <p className="text-[0.88rem] text-ink-muted leading-relaxed mt-1">
                  {item.description}
                </p>
              </motion.li>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}
