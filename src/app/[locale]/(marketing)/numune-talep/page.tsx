import type { Metadata } from "next";
import { PackageCheck, Truck, Layers, Palette } from "lucide-react";
import { useTranslations } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";

import { PageHero } from "@/components/sections/page-hero";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SampleRequestForm } from "@/components/sections/sample-request-form";

interface Props {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Pages.sample" });
  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
    alternates: {
      canonical: locale === "tr" ? "/numune-talep" : `/${locale}/numune-talep`,
    },
  };
}

export default async function SampleRequestPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <SampleContent />;
}

function SampleContent() {
  const t = useTranslations("Pages.sample");
  const tNav = useTranslations("Nav");

  const benefits: {
    icon: typeof Palette;
    titleKey:
      | "benefitColorTitle"
      | "benefitSetTitle"
      | "benefitShippingTitle"
      | "benefitFastTitle";
    descKey:
      | "benefitColorDesc"
      | "benefitSetDesc"
      | "benefitShippingDesc"
      | "benefitFastDesc";
  }[] = [
    {
      icon: Palette,
      titleKey: "benefitColorTitle",
      descKey: "benefitColorDesc",
    },
    { icon: Layers, titleKey: "benefitSetTitle", descKey: "benefitSetDesc" },
    {
      icon: Truck,
      titleKey: "benefitShippingTitle",
      descKey: "benefitShippingDesc",
    },
    {
      icon: PackageCheck,
      titleKey: "benefitFastTitle",
      descKey: "benefitFastDesc",
    },
  ];

  return (
    <>
      <PageHero
        title={t("title")}
        description={t("description")}
        breadcrumb={[
          { label: tNav("home"), href: "/" },
          { label: t("metaTitle") },
        ]}
        image="/images/hero/hero-numune.webp"
        imageAlt={t("title")}
      />

      <section className="bg-background py-16 lg:py-20">
        <Container size="wide">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
            <Reveal className="lg:col-span-4">
              <p className="eyebrow">{t("introEyebrow")}</p>
              <h2 className="display-md text-ink mt-3 text-balance">
                {t("introTitle")}
              </h2>
              <div className="w-12 h-px bg-gold mt-5 mb-7" />

              <ul className="space-y-6">
                {benefits.map((b) => (
                  <li key={b.titleKey} className="flex items-start gap-4">
                    <div className="size-10 grid place-items-center bg-surface-muted text-gold-deep shrink-0">
                      <b.icon className="size-5" strokeWidth={1.5} />
                    </div>
                    <div>
                      <h4 className="font-display text-[1.1rem] text-ink">
                        {t(b.titleKey)}
                      </h4>
                      <p className="text-[0.85rem] text-ink-muted leading-relaxed mt-1">
                        {t(b.descKey)}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={0.15} className="lg:col-span-8">
              <div className="bg-surface border border-line p-8 lg:p-10">
                <SampleRequestForm />
              </div>
            </Reveal>
          </div>
        </Container>
      </section>
    </>
  );
}
