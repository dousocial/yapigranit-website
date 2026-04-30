import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

import { PageHero } from "@/components/sections/page-hero";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import { Eyebrow } from "@/components/ui/eyebrow";
import { services } from "@/lib/data/services";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return {};
  return {
    title: service.title,
    description: service.description,
    alternates: { canonical: `/hizmetler/${service.slug}` },
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();

  const otherServices = services.filter((s) => s.slug !== service.slug).slice(0, 3);
  const Icon = service.icon;

  return (
    <>
      <PageHero
        title={service.title}
        description={service.description}
        breadcrumb={[
          { label: "Anasayfa", href: "/" },
          { label: "Hizmetler", href: "/hizmetler" },
          { label: service.title },
        ]}
        image={service.image}
        imageAlt={service.title}
      />

      <section className="bg-background py-20 lg:py-28">
        <Container size="wide">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
            <Reveal className="lg:col-span-7">
              <div className="size-14 grid place-items-center bg-surface-darker text-gold rounded-full mb-6">
                <Icon className="size-6" strokeWidth={1.5} />
              </div>
              <Eyebrow>Hizmet {service.number}</Eyebrow>
              <h2 className="display-md text-ink mt-3 text-balance">
                {service.title}
              </h2>
              <div className="w-12 h-px bg-gold mt-6" />
              <p className="mt-7 text-[0.96rem] text-ink-muted leading-relaxed">
                {service.description}
              </p>

              <h3 className="font-display text-[1.4rem] text-ink mt-10 mb-5">
                Sürecimiz
              </h3>
              <ul className="space-y-3">
                {service.details.map((d) => (
                  <li
                    key={d}
                    className="flex items-start gap-3 text-[0.92rem] text-ink"
                  >
                    <CheckCircle2 className="size-5 text-gold-deep shrink-0 mt-0.5" />
                    {d}
                  </li>
                ))}
              </ul>

              <div className="mt-10 flex flex-wrap gap-3">
                <Button asChild size="lg">
                  <Link href="/teklif">
                    Teklif Alın
                    <ArrowRight />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link href="/iletisim">Bilgi Al</Link>
                </Button>
              </div>
            </Reveal>

            <Reveal delay={0.15} className="lg:col-span-5">
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="bg-surface-muted py-16 lg:py-20">
        <Container size="wide">
          <div className="flex items-end justify-between mb-10">
            <h3 className="display-md text-ink">Diğer Hizmetlerimiz</h3>
            <Link
              href="/hizmetler"
              className="hidden md:inline-flex items-center gap-2 text-[0.78rem] font-medium uppercase tracking-[0.18em] text-gold-deep hover:text-gold"
            >
              Tüm Hizmetler
              <ArrowRight className="size-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
            {otherServices.map((s) => (
              <Link
                key={s.slug}
                href={`/hizmetler/${s.slug}`}
                className="group block bg-surface p-6 hover:shadow-md transition-shadow"
              >
                <s.icon className="size-7 text-gold-deep mb-4" strokeWidth={1.4} />
                <span className="text-[0.78rem] uppercase tracking-[0.18em] text-gold-deep">
                  {s.number}
                </span>
                <h4 className="font-display text-[1.2rem] text-ink mt-2 group-hover:text-gold-deep transition-colors">
                  {s.title}
                </h4>
                <p className="mt-3 text-[0.85rem] text-ink-muted leading-relaxed line-clamp-2">
                  {s.description}
                </p>
              </Link>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
