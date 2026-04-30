import type { Metadata } from "next";
import {
  PackageCheck,
  Truck,
  Layers,
  Palette,
} from "lucide-react";

import { PageHero } from "@/components/sections/page-hero";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SampleRequestForm } from "@/components/sections/sample-request-form";

export const metadata: Metadata = {
  title: "Numune Talep Et",
  description:
    "Mermer, granit ve porselen yüzeylerden ücretsiz numune setiyle projelerinize doğru malzemeyi seçin.",
  alternates: { canonical: "/numune-talep" },
};

const benefits = [
  {
    icon: Palette,
    title: "Renk ve Doku Karşılaştırma",
    description: "Numune setiyle malzeme tonlarını projenizde değerlendirin.",
  },
  {
    icon: Layers,
    title: "Profesyonel Numune Seti",
    description: "Mermer, granit ve porselen kategorilerinden seçim hakkı.",
  },
  {
    icon: Truck,
    title: "Ücretsiz Kargo",
    description: "Mimar ve müteahhit ofis adreslerine ücretsiz teslimat.",
  },
  {
    icon: PackageCheck,
    title: "Hızlı Hazırlık",
    description: "Talep sonrası 2-3 iş günü içinde kargolanır.",
  },
];

export default function SampleRequestPage() {
  return (
    <>
      <PageHero
        title="Numune Talep Et"
        description="Projenize en uygun yüzeyi seçmenize yardımcı oluyoruz. Birkaç dakikada numune setinizi talep edin."
        breadcrumb={[
          { label: "Anasayfa", href: "/" },
          { label: "Numune Talep" },
        ]}
        image="https://images.unsplash.com/photo-1604147706283-d7119b5b822c?auto=format&fit=crop&w=1600&q=80"
        imageAlt="Numune koleksiyonu"
      />

      <section className="bg-background py-16 lg:py-20">
        <Container size="wide">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
            <Reveal className="lg:col-span-4">
              <p className="eyebrow">Mimarlar İçin</p>
              <h2 className="display-md text-ink mt-3 text-balance">
                Doğru malzemenin yolu numuneden geçer.
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
                <SampleRequestForm />
              </div>
            </Reveal>
          </div>
        </Container>
      </section>
    </>
  );
}
