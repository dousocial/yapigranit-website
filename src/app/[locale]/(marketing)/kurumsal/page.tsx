import type { Metadata } from "next";
import { Link } from "@/i18n/navigation";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";

import { PageHero } from "@/components/sections/page-hero";
import { StatsBand } from "@/components/sections/stats-band";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { Timeline } from "@/components/sections/timeline";
import { brandValues } from "@/lib/data/b2b";
import { buildAlternates } from "@/lib/i18n-urls";
import type { Locale } from "@/i18n/routing";

interface Props {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Pages.corporate" });
  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
    alternates: buildAlternates(locale as Locale, "/kurumsal"),
  };
}

export default async function KurumsalPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <KurumsalContent />;
}

function KurumsalContent() {
  const t = useTranslations("Pages.corporate");
  const tValues = useTranslations("Values");
  const tNav = useTranslations("Nav");

  return (
    <>
      <PageHero
        title={t("title")}
        description={t("description")}
        breadcrumb={[
          { label: tNav("home"), href: "/" },
          { label: t("metaTitle") },
        ]}
        image="/images/hero/hero-kurumsal.webp"
        imageAlt="YAPIGRANİT"
      />

      {/* Hakkımızda */}
      <section id="hakkimizda" className="py-20 lg:py-28">
        <Container size="wide">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            <Reveal className="lg:col-span-6">
              <Eyebrow>{t("aboutEyebrow")}</Eyebrow>
              <h2 className="display-lg mt-4 text-ink text-balance">
                {t("aboutTitle")}
              </h2>
              <div className="w-12 h-px bg-gold mt-6" />
              <p className="mt-6 italic text-[1.02rem] text-ink leading-relaxed border-l-2 border-gold pl-5">
                &quot;{t("aboutQuote")}&quot;
              </p>
              <div className="mt-7 space-y-5 text-[0.96rem] text-ink-muted leading-relaxed">
                <p>{t("aboutPara1")}</p>
                <ul className="space-y-2 text-ink">
                  <li>
                    <strong>{t("principleProjectingTitle")}</strong> —{" "}
                    {t("principleProjectingDesc")}
                  </li>
                  <li>
                    <strong>{t("principleCraftTitle")}</strong> —{" "}
                    {t("principleCraftDesc")}
                  </li>
                  <li>
                    <strong>{t("principleDeliveryTitle")}</strong> —{" "}
                    {t("principleDeliveryDesc")}
                  </li>
                </ul>
              </div>
              <Button asChild size="lg" variant="dark" className="mt-8">
                <Link href="/projeler">
                  {t("ctaSeeProjects")}
                  <ArrowRight />
                </Link>
              </Button>
            </Reveal>

            <Reveal delay={0.15} className="lg:col-span-6">
              <div className="relative aspect-[5/4] overflow-hidden">
                <Image
                  src="/images/sections/kurumsal-fabrika.webp"
                  alt=""
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <StatsBand />

      <Timeline />

      {/* Değerler */}
      <section id="degerler" className="bg-surface-muted py-20 lg:py-28">
        <Container size="wide">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
            <Reveal className="lg:col-span-4">
              <Eyebrow>{t("valuesEyebrow")}</Eyebrow>
              <h2 className="display-lg mt-4 text-ink text-balance">
                {t("valuesTitle")}
              </h2>
            </Reveal>

            <div className="lg:col-span-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {brandValues.map((value, idx) => {
                type ValuesKey = Parameters<typeof tValues>[0];
                return (
                  <Reveal key={value.titleKey} delay={idx * 0.06}>
                    <div className="group">
                      <div className="size-11 grid place-items-center text-gold-deep mb-5 transition-transform group-hover:scale-110">
                        <value.icon className="size-7" strokeWidth={1.4} />
                      </div>
                      <h3 className="font-display text-[1.25rem] text-ink mb-2">
                        {tValues(value.titleKey as ValuesKey)}
                      </h3>
                      <p className="text-[0.88rem] text-ink-muted leading-relaxed">
                        {tValues(value.descKey as ValuesKey)}
                      </p>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </Container>
      </section>

      {/* Closing CTA — full-bleed dark marble */}
      <section className="relative bg-surface-darker text-on-dark overflow-hidden">
        <div className="absolute inset-0 z-0" aria-hidden>
          <Image
            src="/images/sections/kurumsal-cta-bg.webp"
            alt=""
            fill
            sizes="100vw"
            className="object-cover"
          />
          {/* Two-layer vignette: left for title, right keeps stone visible */}
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
            <h2 className="display-lg text-on-dark text-balance hero-title">
              {t("closeTitle")}
            </h2>
            <div className="lg:text-right">
              <p className="text-[0.95rem] text-on-dark-muted mb-6 lg:max-w-[420px] lg:ml-auto hero-desc">
                {t("closeDesc")}
              </p>
              <Button asChild size="lg">
                <Link href="/teklif">
                  {t("closeCta")}
                  <ArrowRight />
                </Link>
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
