import { useTranslations } from "next-intl";
import { Container } from "@/components/ui/container";
import { Counter } from "@/components/ui/counter";
import { Reveal } from "@/components/ui/reveal";
import { stats, statsExtended } from "@/lib/data/stats";

interface StatsBandProps {
  variant?: "default" | "extended";
  withIcons?: boolean;
}

export function StatsBand({ variant = "default" }: StatsBandProps) {
  const t = useTranslations("Stats");
  const items = variant === "extended" ? statsExtended : stats;

  return (
    <section className="bg-surface-darker text-on-dark relative overflow-hidden">
      <div
        className="absolute inset-0 bg-[url('/images/sections/stats-bg.webp')] bg-cover bg-center opacity-15"
        aria-hidden
      />
      <div className="absolute inset-0 bg-gradient-to-r from-surface-darker via-surface-darker/90 to-surface-darker/70" />

      <Container size="wide" className="relative">
        <div
          className={`grid grid-cols-2 ${
            variant === "extended" ? "md:grid-cols-5" : "md:grid-cols-4"
          } gap-6 lg:gap-10 py-14 lg:py-16`}
        >
          {items.map((stat, idx) => {
            type StatKey = Parameters<typeof t>[0];
            return (
              <Reveal
                key={stat.labelKey}
                delay={idx * 0.08}
                className="text-center md:text-left"
              >
                <div className="font-display text-[3rem] lg:text-[3.6rem] leading-none text-on-dark">
                  <Counter to={stat.value} suffix={stat.suffix} />
                </div>
                <p className="mt-2 text-[0.78rem] uppercase tracking-[0.18em] text-gold">
                  {t(stat.labelKey as StatKey)}
                </p>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
