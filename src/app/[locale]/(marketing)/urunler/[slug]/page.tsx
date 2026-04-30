import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { ArrowRight, CheckCircle2 } from "lucide-react";

import { PageHero } from "@/components/sections/page-hero";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import { Eyebrow } from "@/components/ui/eyebrow";
import { products } from "@/lib/data/products";
import { projects } from "@/lib/data/projects";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);
  if (!product) return {};
  return {
    title: product.name,
    description: product.description,
    alternates: { canonical: `/urunler/${product.slug}` },
  };
}

const benefits = [
  "Doğa kaynaklı ve uzun ömürlü malzeme",
  "Yüksek dayanıklılık ve estetik",
  "Geniş renk ve doku seçenekleri",
  "Mimari projelere özel kesim",
  "Profesyonel uygulama süreci",
];

export default async function ProductDetailPage({ params }: Props) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);
  if (!product) notFound();

  const relatedProjects = projects
    .filter((p) =>
      p.material.some((m) => m.toLowerCase().includes(product.name.toLowerCase())),
    )
    .slice(0, 3);

  return (
    <>
      <PageHero
        title={product.name}
        description={product.description}
        breadcrumb={[
          { label: "Anasayfa", href: "/" },
          { label: "Ürünler", href: "/urunler" },
          { label: product.name },
        ]}
        image={product.image}
        imageAlt={product.name}
      />

      <section className="py-20 lg:py-28 bg-background">
        <Container size="wide">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
            <Reveal className="lg:col-span-7">
              <Eyebrow>Özellikler</Eyebrow>
              <h2 className="display-md text-ink mt-3 text-balance">
                {product.name} ile zamansız yüzeyler.
              </h2>
              <div className="w-12 h-px bg-gold mt-6" />
              <p className="mt-7 text-[0.96rem] text-ink-muted leading-relaxed">
                {product.description} Mimari projelerinize değer katacak
                geniş renk skalası, dayanıklılık ve estetik sunan {product.name.toLowerCase()}{" "}
                seçeneklerimizle, hem iç mekan hem dış mekan uygulamalarınız için
                profesyonel çözümler üretiyoruz.
              </p>

              <ul className="mt-8 space-y-3">
                {benefits.map((b) => (
                  <li
                    key={b}
                    className="flex items-start gap-3 text-[0.92rem] text-ink"
                  >
                    <CheckCircle2 className="size-5 text-gold-deep shrink-0 mt-0.5" />
                    {b}
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
                  <Link href="/iletisim">Numune Talep Et</Link>
                </Button>
              </div>
            </Reveal>

            <Reveal delay={0.15} className="lg:col-span-5">
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {relatedProjects.length > 0 && (
        <section className="bg-surface-muted py-16 lg:py-20">
          <Container size="wide">
            <div className="flex items-end justify-between mb-10">
              <div>
                <Eyebrow>İlgili Projeler</Eyebrow>
                <h3 className="display-md text-ink mt-3">
                  {product.name} kullanılan projeler
                </h3>
              </div>
              <Link
                href="/projeler"
                className="hidden md:inline-flex items-center gap-2 text-[0.78rem] font-medium uppercase tracking-[0.18em] text-gold-deep hover:text-gold"
              >
                Tüm Projeler
                <ArrowRight className="size-4" />
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
              {relatedProjects.map((p) => (
                <Link
                  key={p.slug}
                  href={`/projeler/${p.slug}`}
                  className="group block bg-surface overflow-hidden"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={p.cover}
                      alt={p.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                    />
                  </div>
                  <div className="p-5">
                    <h4 className="font-display text-[1.2rem] text-ink group-hover:text-gold-deep transition-colors">
                      {p.title}
                    </h4>
                    <p className="text-[0.82rem] text-ink-soft mt-1">
                      {p.categoryLabel}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </Container>
        </section>
      )}
    </>
  );
}
