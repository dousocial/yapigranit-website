import type { Metadata } from "next";
import { Link } from "@/i18n/navigation";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";

import { PageHero } from "@/components/sections/page-hero";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { services, localizedService } from "@/lib/data/services";
import { whyUs } from "@/lib/data/b2b";
import type { Locale } from "@/i18n/routing";

interface Props {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Pages.services" });
  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
    keywords: [
      "yapı granit hizmetleri",
      "doğal taş cephe kaplama",
      "mekanik cephe kaplama",
      "mermer cephe kaplama",
      "granit cephe uygulama",
      "cnc taş kaplama",
      "cnc işlemli duvar kaplama",
      "taş cephe sistemleri",
      "dış cephe taş uygulama",
      "zemin kaplama uygulamaları",
      "merdiven kaplama",
      "asansör kaplama",
      "tezgah uygulaması",
      "denizli doğal taş hizmetleri",
    ],
    alternates: {
      canonical: locale === "tr" ? "/hizmetler" : `/${locale}/hizmetler`,
    },
  };
}

export default async function HizmetlerPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <HizmetlerContent />;
}

function HizmetlerContent() {
  const t = useTranslations("Pages.services");
  const tNav = useTranslations("Nav");
  const tWhyUs = useTranslations("WhyUs");
  const tCommon = useTranslations("Common");
  const locale = useLocale() as Locale;

  return (
    <>
      <PageHero
        title={t("title")}
        description={t("description")}
        breadcrumb={[
          { label: tNav("home"), href: "/" },
          { label: t("metaTitle") },
        ]}
        image="/images/hero/hero-hizmetler.webp"
        imageAlt={t("title")}
      />

      <section className="bg-surface-muted py-20 lg:py-28">
        <Container size="wide">
          <Reveal className="text-center max-w-[640px] mx-auto mb-16">
            <h2 className="display-md text-ink text-balance">
              {t("introTitle")}
            </h2>
            <div className="w-12 h-px bg-gold mt-6 mx-auto" />
            <p className="mt-6 text-[0.95rem] text-ink-muted leading-relaxed">
              {t("introDesc")}
            </p>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4">
            {services
              .filter((s) => s.category !== "teknoloji")
              .map((service, idx) => {
              const l = localizedService(service, locale);
              return (
                <Reveal key={service.slug} delay={(idx % 4) * 0.06}>
                  <Link
                    href={`/hizmetler/${service.slug}`}
                    className="group block bg-surface overflow-hidden h-full flex flex-col"
                  >
                    <div className="relative aspect-[5/4] overflow-hidden bg-surface-darker">
                      <Image
                        src={service.image}
                        alt={l.title}
                        fill
                        sizes="(max-width: 1024px) 50vw, 25vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-surface-darker/40 to-transparent" />
                      <div className="absolute top-4 left-4 size-10 grid place-items-center bg-surface-darker text-gold rounded-full">
                        <service.icon className="size-5" strokeWidth={1.5} />
                      </div>
                    </div>
                    <div className="p-6 flex-1 flex flex-col">
                      <span className="text-[0.78rem] uppercase tracking-[0.18em] text-gold-deep">
                        {service.number}
                      </span>
                      <h3 className="font-display text-[1.3rem] text-ink mt-2 group-hover:text-gold-deep transition-colors">
                        {l.title}
                      </h3>
                      <p className="mt-3 text-[0.86rem] text-ink-muted leading-relaxed flex-1">
                        {l.description}
                      </p>
                      <ArrowRight className="mt-5 size-4 text-ink-soft transition-all group-hover:text-gold-deep group-hover:translate-x-1" />
                    </div>
                  </Link>
                </Reveal>
              );
            })}
          </div>

          {/* Makine Parkuru bağlantı bandı */}
          <Reveal delay={0.1} className="mt-16 lg:mt-20">
            <Link
              href="/makine-parkuru"
              className="group block bg-surface-darker text-on-dark p-8 lg:p-10 hover:bg-ink transition-colors"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                <div className="lg:col-span-9">
                  <p className="text-[0.78rem] uppercase tracking-[0.18em] text-gold mb-3">
                    {locale === "en" ? "Production Technology" : locale === "de" ? "Fertigungstechnologie" : "Üretim Teknolojisi"}
                  </p>
                  <h3 className="font-display text-[1.6rem] lg:text-[2rem] text-on-dark text-balance">
                    {locale === "en"
                      ? "Discover our machinery — waterjet, 5-axis CNC, bridge saw and more"
                      : locale === "de"
                      ? "Entdecken Sie unseren Maschinenpark — Wasserstrahl, 5-Achsen-CNC, Brückensäge und mehr"
                      : "Makine parkurumuzu keşfedin — su jeti, 5 eksen CNC, köprü kesme ve daha fazlası"}
                  </h3>
                </div>
                <div className="lg:col-span-3 lg:text-right">
                  <span className="inline-flex items-center gap-2 text-gold group-hover:text-gold-soft transition-colors">
                    <span className="text-[0.85rem] font-medium uppercase tracking-[0.18em]">
                      {tNav("machinePark")}
                    </span>
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </div>
            </Link>
          </Reveal>
        </Container>
      </section>

      {/* Why us */}
      <section className="bg-surface-darker text-on-dark py-16 lg:py-20 relative overflow-hidden">
        <div className="absolute inset-0 marble-bg opacity-40" aria-hidden />
        <Container size="wide" className="relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            <Reveal className="lg:col-span-3">
              <h3 className="display-md text-on-dark text-balance">
                {t("whyUsTitle")}
              </h3>
            </Reveal>
            <div className="lg:col-span-9 grid grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-4">
              {whyUs.map((item, idx) => {
                type WhyUsKey = Parameters<typeof tWhyUs>[0];
                return (
                  <Reveal key={item.titleKey} delay={idx * 0.06}>
                    <div className="text-center lg:text-left">
                      <div className="size-9 grid place-items-center text-gold mx-auto lg:mx-0 mb-3 group">
                        <item.icon className="size-7" strokeWidth={1.4} />
                      </div>
                      <p className="text-[0.85rem] font-medium text-on-dark leading-snug">
                        {tWhyUs(item.titleKey as WhyUsKey)}
                      </p>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </Container>
      </section>

      {/* CTA — full-bleed dark stone */}
      <section className="relative bg-surface-darker text-on-dark overflow-hidden">
        <div className="absolute inset-0 z-0" aria-hidden>
          <Image
            src="/images/sections/hizmetler-cta-bg.webp"
            alt=""
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(105deg, rgba(8,7,10,0.78) 0%, rgba(8,7,10,0.5) 38%, rgba(8,7,10,0.18) 65%, rgba(8,7,10,0.05) 100%)",
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to top, rgba(8,7,10,0.6) 0%, rgba(8,7,10,0) 35%, rgba(8,7,10,0) 70%, rgba(8,7,10,0.32) 100%)",
            }}
          />
        </div>
        <Container size="wide" className="relative z-10">
          <div className="grid lg:grid-cols-2 gap-10 items-center py-20 lg:py-28 min-h-[380px] lg:min-h-[460px]">
            <h3 className="display-md text-on-dark text-balance hero-title">
              {t("ctaTitle")}
            </h3>
            <div className="flex flex-wrap items-center gap-3 lg:justify-end">
              <Button asChild size="lg">
                <Link href="/teklif">
                  {t("ctaPrimary")}
                  <ArrowRight />
                </Link>
              </Button>
              <span className="text-on-dark-soft text-[0.85rem] mx-1">
                {tCommon("or")}
              </span>
              <Button asChild size="lg" variant="outline-light">
                <Link href="/iletisim">{t("ctaSecondary")}</Link>
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
