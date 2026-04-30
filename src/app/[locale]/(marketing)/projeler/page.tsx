import type { Metadata } from "next";

import { PageHero } from "@/components/sections/page-hero";
import { StatsBand } from "@/components/sections/stats-band";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { ProjectsGallery } from "@/components/sections/projects-gallery";
import {
  Building2,
  ShieldCheck,
  Clock4,
  Leaf,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Projeler",
  description:
    "Yapı Granit ile hayata geçirdiğimiz konut, otel, ticari ve kamusal projeleri keşfedin.",
  alternates: { canonical: "/projeler" },
};

const trustItems = [
  {
    icon: Building2,
    title: "Proje Odaklı Yaklaşım",
    description: "Her projeye özel çözüm süreçleri geliştiriyoruz.",
  },
  {
    icon: ShieldCheck,
    title: "Kaliteli Üretim",
    description: "En ileri teknoloji ve yüksek kalite standartlarıyla üretim.",
  },
  {
    icon: Clock4,
    title: "Zamanında Teslimat",
    description: "Planlama ve koordinasyonla zamanında teslim sağlıyoruz.",
  },
  {
    icon: Leaf,
    title: "Sürdürülebilir Çözümler",
    description: "Doğaya ve insana duyarlı, uzun ömürlü çözümler üretiyoruz.",
  },
];

export default function ProjelerPage() {
  return (
    <>
      <PageHero
        title="Projelerimiz"
        description="Doğal taşın estetiğini, profesyonel işçilik ve yenilikçi çözümlerle hayata geçiriyoruz."
        breadcrumb={[
          { label: "Anasayfa", href: "/" },
          { label: "Projeler" },
        ]}
        image="https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=1600&q=80"
        imageAlt="Yapı Granit projeleri"
      />

      {/* Trust strip */}
      <section className="bg-background py-14">
        <Container size="wide">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <Reveal className="lg:col-span-3">
              <p className="text-[0.95rem] text-ink-muted leading-relaxed">
                Mimar, iç mimar ve müteahhitlerle verdiğimiz güçlü iş
                birlikleri sayesinde, fark yaratan projelere imza atıyoruz.
              </p>
            </Reveal>
            <div className="lg:col-span-9 grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              {trustItems.map((item, idx) => (
                <Reveal key={item.title} delay={idx * 0.06}>
                  <div className="text-center lg:text-left">
                    <item.icon
                      className="size-7 text-gold-deep mx-auto lg:mx-0 mb-3"
                      strokeWidth={1.4}
                    />
                    <h3 className="font-display text-[1.05rem] text-ink mb-1">
                      {item.title}
                    </h3>
                    <p className="text-[0.82rem] text-ink-muted leading-relaxed">
                      {item.description}
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
