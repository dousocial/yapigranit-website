"use client";

import * as React from "react";
import { useLocale, useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Calculator, ArrowRight } from "lucide-react";

import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Reveal } from "@/components/ui/reveal";
import { cn } from "@/lib/utils";
import type { Locale } from "@/i18n/routing";

const applicationOptions = [
  { value: "areaCounterTop", priceRange: [3500, 5500] },
  { value: "areaBath", priceRange: [2200, 4200] },
  { value: "areaFloor", priceRange: [1800, 3500] },
  { value: "areaFacade", priceRange: [2500, 4500] },
  { value: "areaStair", priceRange: [3800, 6000] },
] as const;

const materialOptions = [
  { value: "matMermer", multiplier: 1.1 },
  { value: "matGranit", multiplier: 1.0 },
  { value: "matPorselen", multiplier: 0.9 },
  { value: "matOzel", multiplier: 1.4 },
] as const;

export function QuoteCalculator() {
  const t = useTranslations("QuoteCalculator");
  const locale = useLocale() as Locale;

  const [application, setApplication] = React.useState<string>(
    applicationOptions[0].value,
  );
  const [material, setMaterial] = React.useState<string>(
    materialOptions[0].value,
  );
  const [area, setArea] = React.useState(20);

  const numberLocale =
    locale === "en" ? "en-US" : locale === "de" ? "de-DE" : "tr-TR";
  const currency = locale === "en" ? "$" : "€";
  const usingTry = locale === "tr";
  // For TR show ₺, for EN/DE show converted approx (not actual rate — illustration)
  const conversionRate = usingTry ? 1 : locale === "en" ? 0.031 : 0.029;
  const currencySymbol = usingTry ? "₺" : currency;

  const estimate = React.useMemo(() => {
    const app = applicationOptions.find((a) => a.value === application);
    const mat = materialOptions.find((m) => m.value === material);
    if (!app || !mat) return null;
    const min = Math.round(
      app.priceRange[0] * mat.multiplier * area * conversionRate,
    );
    const max = Math.round(
      app.priceRange[1] * mat.multiplier * area * conversionRate,
    );
    return { min, max };
  }, [application, material, area, conversionRate]);

  type AppKey = (typeof applicationOptions)[number]["value"];
  type MatKey = (typeof materialOptions)[number]["value"];

  return (
    <section className="bg-surface-muted py-20 lg:py-24">
      <Container size="wide">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          <Reveal className="lg:col-span-5">
            <Eyebrow>{t("eyebrow")}</Eyebrow>
            <h2 className="display-md text-ink mt-3 text-balance">
              {t("title")}
            </h2>
            <div className="w-12 h-px bg-gold mt-6" />
            <p className="mt-6 text-[0.95rem] text-ink-muted leading-relaxed">
              {t("description")}
            </p>
            <p className="mt-3 text-[0.78rem] text-ink-soft italic">
              {t("disclaimer")}
            </p>
          </Reveal>

          <Reveal delay={0.15} className="lg:col-span-7">
            <div className="bg-surface p-8 lg:p-10 border border-line">
              <div className="flex items-center gap-3 mb-8">
                <div className="size-10 grid place-items-center bg-surface-darker text-gold rounded-full">
                  <Calculator className="size-5" />
                </div>
                <h3 className="font-display text-[1.4rem] text-ink">
                  {t("widgetTitle")}
                </h3>
              </div>

              <div className="space-y-6">
                <div>
                  <label className="text-[0.78rem] uppercase tracking-[0.18em] text-ink-soft">
                    {t("labelArea")}
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mt-3">
                    {applicationOptions.map((opt) => (
                      <button
                        key={opt.value}
                        type="button"
                        onClick={() => setApplication(opt.value)}
                        className={cn(
                          "h-11 px-3 text-[0.82rem] border transition-colors",
                          application === opt.value
                            ? "border-gold bg-gold/10 text-ink"
                            : "border-line text-ink-muted hover:border-line-strong",
                        )}
                      >
                        {t(opt.value as AppKey)}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="text-[0.78rem] uppercase tracking-[0.18em] text-ink-soft">
                    {t("labelMaterial")}
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mt-3">
                    {materialOptions.map((opt) => (
                      <button
                        key={opt.value}
                        type="button"
                        onClick={() => setMaterial(opt.value)}
                        className={cn(
                          "h-11 px-3 text-[0.82rem] border transition-colors",
                          material === opt.value
                            ? "border-gold bg-gold/10 text-ink"
                            : "border-line text-ink-muted hover:border-line-strong",
                        )}
                      >
                        {t(opt.value as MatKey)}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between">
                    <label className="text-[0.78rem] uppercase tracking-[0.18em] text-ink-soft">
                      {t("labelMeters")}
                    </label>
                    <span className="font-display text-[1.4rem] text-gold-deep">
                      {area} m²
                    </span>
                  </div>
                  <input
                    type="range"
                    min={5}
                    max={500}
                    step={5}
                    value={area}
                    onChange={(e) => setArea(Number(e.target.value))}
                    className="w-full mt-3 accent-gold"
                  />
                  <div className="flex justify-between text-[0.7rem] text-ink-soft mt-1">
                    <span>5 m²</span>
                    <span>500 m²</span>
                  </div>
                </div>
              </div>

              {estimate && (
                <div className="mt-8 p-6 bg-surface-darker text-on-dark">
                  <p className="text-[0.78rem] uppercase tracking-[0.18em] text-gold mb-2">
                    {t("resultLabel")}
                  </p>
                  <p className="font-display text-[2.4rem] text-on-dark leading-none">
                    {estimate.min.toLocaleString(numberLocale)}{" "}
                    {currencySymbol} – {estimate.max.toLocaleString(numberLocale)}{" "}
                    {currencySymbol}
                  </p>
                  <Link
                    href="/teklif"
                    className="mt-5 inline-flex items-center gap-2 text-[0.78rem] font-medium uppercase tracking-[0.15em] text-gold hover:text-gold-soft"
                  >
                    {t("resultCta")}
                    <ArrowRight className="size-4" />
                  </Link>
                </div>
              )}
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
