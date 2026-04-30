import type { Metadata } from "next";

import { HeroHome } from "@/components/sections/hero-home";
import { ProductsGrid } from "@/components/sections/products-grid";
import { B2BSolutions } from "@/components/sections/b2b-solutions";
import { ProjectsCarousel } from "@/components/sections/projects-carousel";
import { StatsBand } from "@/components/sections/stats-band";
import { CtaBand } from "@/components/sections/cta-band";

export const metadata: Metadata = {
  title: "Doğal Taş, Mermer, Granit ve Porselen Çözümleri",
  description:
    "Mimari projeleriniz için premium doğal taş, mermer, granit ve porselen yüzey çözümleri. 20+ yıllık tecrübe, 1000+ tamamlanan proje.",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <HeroHome />
      <ProductsGrid />
      <B2BSolutions />
      <ProjectsCarousel />
      <StatsBand />
      <CtaBand />
    </>
  );
}
