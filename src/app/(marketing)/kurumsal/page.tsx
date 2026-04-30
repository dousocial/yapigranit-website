import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

import { PageHero } from "@/components/sections/page-hero";
import { StatsBand } from "@/components/sections/stats-band";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { Timeline } from "@/components/sections/timeline";
import { brandValues } from "@/lib/data/b2b";

export const metadata: Metadata = {
  title: "Kurumsal",
  description:
    "Yapı Granit hakkında, vizyon ve misyonumuz, değerlerimiz ve 20+ yıllık tecrübeyle şekillenen yolculuğumuz.",
  alternates: { canonical: "/kurumsal" },
};

export default function KurumsalPage() {
  return (
    <>
      <PageHero
        title="Kurumsal"
        description="Doğal taşın zamansız güzelliğini, profesyonel işçilik ve sürdürülebilir üretim anlayışıyla projelerinize taşıyoruz."
        breadcrumb={[
          { label: "Anasayfa", href: "/" },
          { label: "Kurumsal" },
        ]}
        image="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80"
        imageAlt="Yapı Granit showroom"
      />

      {/* Hakkımızda */}
      <section id="hakkimizda" className="py-20 lg:py-28">
        <Container size="wide">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            <Reveal className="lg:col-span-6">
              <Eyebrow>Hakkımızda</Eyebrow>
              <h2 className="display-lg mt-4 text-ink text-balance">
                Taşa değer katan bir uzmanlık hikayesi.
              </h2>
              <div className="w-12 h-px bg-gold mt-6" />
              <div className="mt-7 space-y-5 text-[0.96rem] text-ink-muted leading-relaxed">
                <p>
                  Yapı Granit olarak, doğal taş, mermer, granit ve porselen
                  yüzeylerde sektörün ihtiyaçlarına yenilikçi çözümler sunuyoruz.
                  Mimari yapı firmalarına, atölyelerden yatırımcılara kadar geniş
                  bir iş ortaklığı ağıyla, estetik ve teknik beklentileri en üst
                  seviyede karşılıyoruz.
                </p>
                <p>
                  Modern teknolojimiz, deneyimli ekibimiz ve kalite odaklı üretim
                  anlayışımızla, her projeye uzun ömürlü değer katıyoruz.
                </p>
              </div>
              <Button asChild size="lg" variant="dark" className="mt-8">
                <Link href="/projeler">
                  Bizi Tanıyın
                  <ArrowRight />
                </Link>
              </Button>
            </Reveal>

            <Reveal delay={0.15} className="lg:col-span-6">
              <div className="relative aspect-[5/4] overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1581094288338-2314dddb7ece?auto=format&fit=crop&w=1400&q=80"
                  alt="Yapı Granit üretim tesisi"
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

      {/* Timeline */}
      <Timeline />

      {/* Değerler */}
      <section id="degerler" className="bg-surface-muted py-20 lg:py-28">
        <Container size="wide">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
            <Reveal className="lg:col-span-4">
              <Eyebrow>Değerlerimiz</Eyebrow>
              <h2 className="display-lg mt-4 text-ink text-balance">
                İşimizin temelini oluşturan değerler.
              </h2>
            </Reveal>

            <div className="lg:col-span-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {brandValues.map((value, idx) => (
                <Reveal key={value.title} delay={idx * 0.06}>
                  <div className="group">
                    <div className="size-11 grid place-items-center text-gold-deep mb-5 transition-transform group-hover:scale-110">
                      <value.icon className="size-7" strokeWidth={1.4} />
                    </div>
                    <h3 className="font-display text-[1.25rem] text-ink mb-2">
                      {value.title}
                    </h3>
                    <p className="text-[0.88rem] text-ink-muted leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Closing CTA */}
      <section className="relative bg-surface-darker text-on-dark overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1800&q=70"
            alt=""
            fill
            sizes="100vw"
            className="object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-surface-darker via-surface-darker/90 to-surface-darker/50" />
        </div>
        <Container size="wide" className="relative">
          <div className="grid lg:grid-cols-2 gap-10 items-center py-20 lg:py-24">
            <h2 className="display-lg text-on-dark text-balance">
              Birlikte değer üretmeye hazırız.
            </h2>
            <div className="lg:text-right">
              <p className="text-[0.95rem] text-on-dark-muted mb-6 lg:max-w-[420px] lg:ml-auto">
                Projeleriniz için doğru çözümü birlikte tasarlayalım.
              </p>
              <Button asChild size="lg">
                <Link href="/teklif">
                  Teklif Alın
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
