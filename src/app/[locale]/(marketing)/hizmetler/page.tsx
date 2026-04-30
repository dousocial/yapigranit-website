import type { Metadata } from "next";
import { Link } from "@/i18n/navigation";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

import { PageHero } from "@/components/sections/page-hero";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { services } from "@/lib/data/services";
import { whyUs } from "@/lib/data/b2b";

export const metadata: Metadata = {
  title: "Hizmetler",
  description:
    "Keşif, malzeme seçimi, üretim, uygulama ve satış sonrası destek — projenizin her aşamasında profesyonel hizmet.",
  alternates: { canonical: "/hizmetler" },
};

export default function HizmetlerPage() {
  return (
    <>
      <PageHero
        title="Hizmetlerimiz"
        description="Doğal taşın estetiğini, profesyonel işçilik ve yenilikçi çözümlerle buluşturuyoruz."
        breadcrumb={[
          { label: "Anasayfa", href: "/" },
          { label: "Hizmetler" },
        ]}
        image="/images/hero/hero-hizmetler.webp"
        imageAlt="Hizmet sürecimiz"
      />

      <section className="bg-surface-muted py-20 lg:py-28">
        <Container size="wide">
          <Reveal className="text-center max-w-[640px] mx-auto mb-16">
            <h2 className="display-md text-ink text-balance">
              Projenizin her aşamasında yanınızdayız.
            </h2>
            <div className="w-12 h-px bg-gold mt-6 mx-auto" />
            <p className="mt-6 text-[0.95rem] text-ink-muted leading-relaxed">
              Keşiften uygulamaya, üretimden teslimata kadar tüm süreçlerde size
              değer katan çözümler sunuyoruz.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4">
            {services.map((service, idx) => (
              <Reveal key={service.slug} delay={(idx % 4) * 0.06}>
                <Link
                  href={`/hizmetler/${service.slug}`}
                  className="group block bg-surface overflow-hidden h-full flex flex-col"
                >
                  <div className="relative aspect-[5/4] overflow-hidden bg-surface-darker">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      sizes="(max-width: 1024px) 50vw, 25vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-surface-darker/40 to-transparent" />
                    <div className="absolute top-4 left-4 size-10 grid place-items-center bg-surface-darker text-gold rounded-full">
                      <service.icon className="size-5" strokeWidth={1.5} />
                    </div>
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <span className="text-[0.78rem] uppercase tracking-[0.18em] text-gold-deep">
                      {service.number}
                    </span>
                    <h3 className="font-display text-[1.3rem] text-ink mt-2 group-hover:text-gold-deep transition-colors">
                      {service.title}
                    </h3>
                    <p className="mt-3 text-[0.86rem] text-ink-muted leading-relaxed flex-1">
                      {service.description}
                    </p>
                    <ArrowRight className="mt-5 size-4 text-ink-soft transition-all group-hover:text-gold-deep group-hover:translate-x-1" />
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Why us */}
      <section className="bg-surface-darker text-on-dark py-16 lg:py-20 relative overflow-hidden">
        <div className="absolute inset-0 marble-bg opacity-40" aria-hidden />
        <Container size="wide" className="relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            <Reveal className="lg:col-span-3">
              <h3 className="display-md text-on-dark text-balance">
                Neden Yapı Granit?
              </h3>
            </Reveal>
            <div className="lg:col-span-9 grid grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-4">
              {whyUs.map((item, idx) => (
                <Reveal key={item.title} delay={idx * 0.06}>
                  <div className="text-center lg:text-left">
                    <div className="size-9 grid place-items-center text-gold mx-auto lg:mx-0 mb-3 group">
                      <item.icon className="size-7" strokeWidth={1.4} />
                    </div>
                    <p className="text-[0.85rem] font-medium text-on-dark leading-snug">
                      {item.title}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="relative bg-background overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/sections/hizmetler-cta-bg.webp"
            alt=""
            fill
            sizes="100vw"
            className="object-cover opacity-30"
          />
        </div>
        <Container size="wide" className="relative">
          <div className="grid lg:grid-cols-2 gap-10 items-center py-20 lg:py-24">
            <h3 className="display-md text-ink text-balance">
              Projeniz için doğru çözümlerle değer yaratmaya hazırız.
            </h3>
            <div className="flex flex-wrap items-center gap-3 lg:justify-end">
              <Button asChild size="lg">
                <Link href="/teklif">
                  Teklif Formu
                  <ArrowRight />
                </Link>
              </Button>
              <span className="text-ink-soft text-[0.85rem] mx-1">veya</span>
              <Button asChild size="lg" variant="outline">
                <Link href="/iletisim">Bize Ulaşın</Link>
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
