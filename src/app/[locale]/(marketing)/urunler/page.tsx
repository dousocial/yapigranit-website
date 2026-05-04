import type { Metadata } from "next";
import { Link } from "@/i18n/navigation";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";

import { PageHero } from "@/components/sections/page-hero";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Reveal } from "@/components/ui/reveal";
import { CtaBand } from "@/components/sections/cta-band";
import { products, localizedProduct } from "@/lib/data/products";
import type { Locale } from "@/i18n/routing";
import { buildAlternates } from "@/lib/i18n-urls";

interface Props {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Pages.products" });
  const tNav = await getTranslations({ locale, namespace: "Nav" });
  return {
    title: tNav("products"),
    description: t("metaDescription"),
    alternates: buildAlternates(locale as Locale, "/urunler"),
  };
}

export default async function UrunlerPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <UrunlerContent />;
}

function UrunlerContent() {
  const t = useTranslations("Pages.products");
  const tNav = useTranslations("Nav");
  const locale = useLocale() as Locale;

  return (
    <>
      <PageHero
        title={tNav("products")}
        description={t("description")}
        breadcrumb={[
          { label: tNav("home"), href: "/" },
          { label: tNav("products") },
        ]}
        image="/images/hero/hero-urunler.webp"
        imageAlt={tNav("products")}
      />

      <section className="bg-background py-20 lg:py-28">
        <Container size="wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            {products.map((product, idx) => {
              const l = localizedProduct(product, locale);
              return (
                <Reveal key={product.slug} delay={(idx % 2) * 0.1}>
                  <Link
                    href={`/urunler/${product.slug}`}
                    className="group block bg-surface overflow-hidden h-full"
                  >
                    <div className="relative aspect-[16/10] overflow-hidden bg-surface-muted">
                      <Image
                        src={product.image}
                        alt={l.name}
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                      />
                    </div>
                    <div className="p-8 lg:p-10">
                      <Eyebrow>{l.tagline}</Eyebrow>
                      <h2 className="font-display text-[2rem] text-ink mt-3 group-hover:text-gold-deep transition-colors">
                        {l.name}
                      </h2>
                      <p className="mt-4 text-[0.95rem] text-ink-muted leading-relaxed">
                        {l.description}
                      </p>
                      <span className="mt-6 inline-flex items-center gap-2 text-[0.78rem] font-medium uppercase tracking-[0.18em] text-gold-deep">
                        {t("exploreLabel")}
                        <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                      </span>
                    </div>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </section>

      <CtaBand />
    </>
  );
}
