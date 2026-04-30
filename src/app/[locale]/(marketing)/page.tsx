import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";

import { HeroHome } from "@/components/sections/hero-home";
import { ProductsGrid } from "@/components/sections/products-grid";
import { B2BSolutions } from "@/components/sections/b2b-solutions";
import { BrandStrip } from "@/components/sections/brand-strip";
import { ProjectsCarousel } from "@/components/sections/projects-carousel";
import { StatsBand } from "@/components/sections/stats-band";
import { CtaBand } from "@/components/sections/cta-band";

interface Props {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Hero" });
  const tSite = await getTranslations({ locale, namespace: "Site" });

  return {
    title: `${t("titlePart1")} ${t("titlePart2")} ${t("titlePart3")} ${t("titlePart4")}`.replace(
      /\.\s*$/,
      "",
    ),
    description: tSite("description"),
    alternates: { canonical: locale === "tr" ? "/" : `/${locale}` },
  };
}

export default async function HomePage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <HeroHome />
      <ProductsGrid />
      <B2BSolutions />
      <BrandStrip />
      <ProjectsCarousel />
      <StatsBand />
      <CtaBand />
    </>
  );
}
