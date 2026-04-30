import type { Metadata } from "next";

import { HeroHome } from "@/components/sections/hero-home";
import { ProductsGrid } from "@/components/sections/products-grid";
import { B2BSolutions } from "@/components/sections/b2b-solutions";
import { BrandStrip } from "@/components/sections/brand-strip";
import { ProjectsCarousel } from "@/components/sections/projects-carousel";
import { StatsBand } from "@/components/sections/stats-band";
import { CtaBand } from "@/components/sections/cta-band";

export const metadata: Metadata = {
  title: "Doğanın Sanata Dönüştüğü Yer — Doğal Taş, Mermer, Porselen",
  description:
    "1994'ten bu yana mimar ve müteahhitler için 5 Eksen CNC, Waterjet kesim ve Mekanik Cephe Sistemleri. 25+ yıllık tecrübe, 12 ülkeye ihracat, %100 müşteri memnuniyeti.",
  alternates: { canonical: "/" },
};

export default function HomePage() {
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
