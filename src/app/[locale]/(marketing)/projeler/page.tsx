import type { Metadata } from "next";
import { useTranslations } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";

import { PageHero } from "@/components/sections/page-hero";
import { StatsBand } from "@/components/sections/stats-band";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { ProjectsGallery } from "@/components/sections/projects-gallery";
import { Building2, ShieldCheck, Clock4, Leaf } from "lucide-react";

interface Props {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Pages.projects" });
  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
    keywords: [
      "yapı granit projeleri",
      "denizli mermer projeleri",
      "doğal taş projeleri",
      "mekanik cephe kaplama projeleri",
      "cnc taş kaplama projeleri",
      "külliye cephe kaplama",
      "cami cephe kaplama",
      "avm zemin kaplama",
      "otel mermer uygulama",
      "konut mermer uygulama",
      "merdiven asansör mermer kaplama",
      "doğal taş cephe kaplama",
      "taş cephe sistemleri",
    ],
    alternates: {
      canonical: locale === "tr" ? "/projeler" : `/${locale}/projeler`,
    },
  };
}

export default async function ProjelerPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <ProjelerContent />;
}

function ProjelerContent() {
  const t = useTranslations("Pages.projects");
  const tNav = useTranslations("Nav");

  const trustItems: {
    icon: typeof Building2;
    titleKey: "trustProjectTitle" | "trustQualityTitle" | "trustOnTimeTitle" | "trustSustainTitle";
    descKey: "trustProjectDesc" | "trustQualityDesc" | "trustOnTimeDesc" | "trustSustainDesc";
  }[] = [
    {
      icon: Building2,
      titleKey: "trustProjectTitle",
      descKey: "trustProjectDesc",
    },
    {
      icon: ShieldCheck,
      titleKey: "trustQualityTitle",
      descKey: "trustQualityDesc",
    },
    {
      icon: Clock4,
      titleKey: "trustOnTimeTitle",
      descKey: "trustOnTimeDesc",
    },
    {
      icon: Leaf,
      titleKey: "trustSustainTitle",
      descKey: "trustSustainDesc",
    },
  ];

  return (
    <>
      <PageHero
        title={t("title")}
        description={t("description")}
        breadcrumb={[
          { label: tNav("home"), href: "/" },
          { label: tNav("projects") },
        ]}
        image="/images/hero/hero-projeler.webp"
        imageAlt={t("title")}
      />

      {/* Trust strip */}
      <section className="bg-background py-14">
        <Container size="wide">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <Reveal className="lg:col-span-3">
              <p className="text-[0.95rem] text-ink-muted leading-relaxed">
                {t("trustText")}
              </p>
            </Reveal>
            <div className="lg:col-span-9 grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              {trustItems.map((item, idx) => (
                <Reveal key={item.titleKey} delay={idx * 0.06}>
                  <div className="text-center lg:text-left">
                    <item.icon
                      className="size-7 text-gold-deep mx-auto lg:mx-0 mb-3"
                      strokeWidth={1.4}
                    />
                    <h3 className="font-display text-[1.05rem] text-ink mb-1">
                      {t(item.titleKey)}
                    </h3>
                    <p className="text-[0.82rem] text-ink-muted leading-relaxed">
                      {t(item.descKey)}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <ProjectsGallery />

      <StatsBand variant="extended" />
    </>
  );
}
