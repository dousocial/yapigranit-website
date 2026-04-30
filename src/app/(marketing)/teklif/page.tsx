import type { Metadata } from "next";
import {
  CheckCircle2,
  Clock4,
  Users2,
  Award,
} from "lucide-react";

import { PageHero } from "@/components/sections/page-hero";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { QuoteForm } from "@/components/sections/quote-form";

export const metadata: Metadata = {
  title: "Teklif Alın",
  description:
    "Projeniz için Yapı Granit'ten ücretsiz fiyat teklifi alın. B2B projelerde ölçü, malzeme ve detay bilgilerinizi paylaşın.",
  alternates: { canonical: "/teklif" },
};

const benefits = [
  {
    icon: Clock4,
    title: "24 Saatte Geri Dönüş",
    description: "Talebinize en geç 24 saat içinde detaylı dönüş yaparız.",
  },
  {
    icon: Award,
    title: "Projeye Özel Fiyatlandırma",
    description: "Her projeye özel ölçü, malzeme ve teknik detay analizi.",
  },
  {
    icon: Users2,
    title: "Uzman Teknik Destek",
    description: "Mimar ve müteahhitlere özel danışmanlık.",
  },
  {
    icon: CheckCircle2,
    title: "Ücretsiz Keşif",
    description: "İstanbul ve çevresinde ücretsiz yerinde keşif imkanı.",
  },
];

export default function TeklifPage() {
  return (
    <>
      <PageHero
        title="Projeniz için teklif alın."
        description="Bilgilerinizi paylaşın, projenize özel fiyatlandırmayı en kısa sürede iletelim."
        breadcrumb={[
          { label: "Anasayfa", href: "/" },
          { label: "Teklif Alın" },
        ]}
        image="https://images.unsplash.com/photo-1581094288338-2314dddb7ece?auto=format&fit=crop&w=1600&q=80"
        imageAlt="Teklif sürecimiz"
      />

      <section className="bg-background py-16 lg:py-20">
        <Container size="wide">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
            <Reveal className="lg:col-span-4">
              <p className="eyebrow">Süreç</p>
              <h2 className="display-md text-ink mt-3 text-balance">
                Doğru çözüm, hızlı geri dönüş.
              </h2>
              <div className="w-12 h-px bg-gold mt-5 mb-7" />

              <ul className="space-y-6">
                {benefits.map((b) => (
                  <li key={b.title} className="flex items-start gap-4">
                    <div className="size-10 grid place-items-center bg-surface-muted text-gold-deep shrink-0">
                      <b.icon className="size-5" strokeWidth={1.5} />
                    </div>
                    <div>
                      <h4 className="font-display text-[1.1rem] text-ink">
                        {b.title}
                      </h4>
                      <p className="text-[0.85rem] text-ink-muted leading-relaxed mt-1">
                        {b.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={0.15} className="lg:col-span-8">
              <div className="bg-surface border border-line p-8 lg:p-10">
                <QuoteForm />
              </div>
            </Reveal>
          </div>
        </Container>
      </section>
    </>
  );
}
