import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";

import { PageHero } from "@/components/sections/page-hero";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import { Eyebrow } from "@/components/ui/eyebrow";
import {
  ProductJsonLd,
  BreadcrumbJsonLd,
  FaqJsonLd,
} from "@/components/seo/structured-data";
import { products, localizedProduct } from "@/lib/data/products";
import { projects, localizedProject } from "@/lib/data/projects";
import { routing, type Locale } from "@/i18n/routing";
import { siteConfig } from "@/lib/site";

interface Props {
  params: Promise<{ slug: string; locale: string }>;
}

export async function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    products.map((p) => ({ locale, slug: p.slug })),
  );
}

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { slug, locale } = await params;
  const product = products.find((p) => p.slug === slug);
  if (!product) return {};
  const l = localizedProduct(product, locale as Locale);
  return {
    title: l.name,
    description: l.description,
    alternates: {
      canonical:
        locale === "tr"
          ? `/urunler/${product.slug}`
          : `/${locale}/urunler/${product.slug}`,
    },
  };
}

export default async function ProductDetailPage({ params }: Props) {
  const { slug, locale } = await params;
  setRequestLocale(locale);
  const product = products.find((p) => p.slug === slug);
  if (!product) notFound();
  return <ProductContent slug={slug} />;
}

function ProductContent({ slug }: { slug: string }) {
  const locale = useLocale() as Locale;
  const t = useTranslations("Pages.products");
  const tNav = useTranslations("Nav");

  const product = products.find((p) => p.slug === slug);
  if (!product) return null;
  const l = localizedProduct(product, locale);

  const relatedProjects = projects
    .filter((p) =>
      p.material.some((m) =>
        m.toLowerCase().includes(product.name.toLowerCase().split(" ")[0]),
      ),
    )
    .slice(0, 3);

  type BenefitKey =
    | "benefitNatural"
    | "benefitDurability"
    | "benefitColors"
    | "benefitArchitecture"
    | "benefitInstallation";

  const benefits: BenefitKey[] = [
    "benefitNatural",
    "benefitDurability",
    "benefitColors",
    "benefitArchitecture",
    "benefitInstallation",
  ];

  const productUrl =
    locale === "tr"
      ? `${siteConfig.url}/urunler/${product.slug}`
      : `${siteConfig.url}/${locale}/urunler/${product.slug}`;

  // Ürün-spesifik SSS — locale aware
  const productFaq = [
    {
      question:
        locale === "en"
          ? `Is ${l.name} suitable for kitchen countertops?`
          : locale === "de"
          ? `Ist ${l.name} für Küchenarbeitsplatten geeignet?`
          : `${l.name} mutfak tezgahı için uygun mudur?`,
      answer:
        locale === "en"
          ? `Yes — ${l.name} can be used in kitchens. Check the product specifications for heat, scratch, and stain resistance details.`
          : locale === "de"
          ? `Ja — ${l.name} kann in Küchen verwendet werden. Prüfen Sie die Produktspezifikationen.`
          : `Evet — ${l.name} mutfaklarda kullanılabilir. Isı, çizilme ve leke direnci için ürün teknik özelliklerini inceleyin.`,
    },
    {
      question:
        locale === "en"
          ? `What slab sizes are available for ${l.name}?`
          : locale === "de"
          ? `Welche Plattengrößen sind bei ${l.name} verfügbar?`
          : `${l.name} hangi plaka ebatlarında üretiliyor?`,
      answer:
        locale === "en"
          ? "Standard slabs are available in sizes up to 320×160 cm. Custom dimensions are possible for project-specific requirements."
          : locale === "de"
          ? "Standardplatten sind in Größen bis zu 320×160 cm erhältlich. Sonderformate für projektspezifische Anforderungen möglich."
          : "Standart plakalar 320×160 cm'ye kadar boyutlarda mevcuttur. Projeye özel ölçüler için iletişime geçin.",
    },
    {
      question:
        locale === "en"
          ? "Can I request a sample before ordering?"
          : locale === "de"
          ? "Kann ich vor der Bestellung ein Muster anfordern?"
          : "Sipariş öncesi numune talep edebilir miyim?",
      answer:
        locale === "en"
          ? "Yes — we provide free samples for architects and contractors. Visit our sample request page to order."
          : locale === "de"
          ? "Ja — wir bieten kostenlose Muster für Architekten und Bauunternehmer. Besuchen Sie unsere Musterbestellseite."
          : "Evet — mimar ve müteahhitler için ücretsiz numune gönderiyoruz. Numune talep sayfamızı ziyaret edin.",
    },
  ];

  return (
    <>
      <ProductJsonLd
        name={l.name}
        description={l.description ?? l.tagline ?? ""}
        image={product.image}
        category={l.tagline ?? "Doğal Taş"}
        url={productUrl}
        sku={product.slug.toUpperCase()}
        material={l.tagline}
      />
      <BreadcrumbJsonLd
        items={[
          { label: tNav("home"), href: locale === "tr" ? "/" : `/${locale}` },
          {
            label: tNav("products"),
            href: locale === "tr" ? "/urunler" : `/${locale}/urunler`,
          },
          {
            label: l.name,
            href:
              locale === "tr"
                ? `/urunler/${product.slug}`
                : `/${locale}/urunler/${product.slug}`,
          },
        ]}
      />
      <FaqJsonLd questions={productFaq} />

      <PageHero
        title={l.name}
        description={l.description}
        breadcrumb={[
          { label: tNav("home"), href: "/" },
          { label: tNav("products"), href: "/urunler" },
          { label: l.name },
        ]}
        image={product.image}
        imageAlt={l.name}
      />

      <section className="py-20 lg:py-28 bg-background">
        <Container size="wide">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
            <Reveal className="lg:col-span-7">
              <Eyebrow>{t("detailFeaturesEyebrow")}</Eyebrow>
              <h2 className="display-md text-ink mt-3 text-balance">
                {l.name} {t("detailTitlePrefix")}
              </h2>
              <div className="w-12 h-px bg-gold mt-6" />
              <p className="mt-7 text-[0.96rem] text-ink-muted leading-relaxed">
                {l.description}{" "}
                {t("detailDescription", { productName: l.name.toLowerCase() })}
              </p>

              <ul className="mt-8 space-y-3">
                {benefits.map((bKey) => (
                  <li
                    key={bKey}
                    className="flex items-start gap-3 text-[0.92rem] text-ink"
                  >
                    <CheckCircle2 className="size-5 text-gold-deep shrink-0 mt-0.5" />
                    {t(bKey)}
                  </li>
                ))}
              </ul>

              <div className="mt-10 flex flex-wrap gap-3">
                <Button asChild size="lg">
                  <Link href="/teklif">
                    {t("ctaQuote")}
                    <ArrowRight />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link href="/numune-talep">{t("ctaSample")}</Link>
                </Button>
              </div>
            </Reveal>

            <Reveal delay={0.15} className="lg:col-span-5">
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src={product.image}
                  alt={l.name}
                  fill
                  priority
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
                <Eyebrow>{t("relatedEyebrow")}</Eyebrow>
                <h3 className="display-md text-ink mt-3">
                  {t("relatedTitle", { productName: l.name })}
                </h3>
              </div>
              <Link
                href="/projeler"
                className="hidden md:inline-flex items-center gap-2 text-[0.78rem] font-medium uppercase tracking-[0.18em] text-gold-deep hover:text-gold"
              >
                {t("relatedSeeAll")}
                <ArrowRight className="size-4" />
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
              {relatedProjects.map((p) => {
                const ol = localizedProject(p, locale);
                return (
                  <Link
                    key={p.slug}
                    href={`/projeler/${p.slug}`}
                    className="group block bg-surface overflow-hidden"
                  >
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <Image
                        src={p.cover}
                        alt={ol.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                      />
                    </div>
                    <div className="p-5">
                      <h4 className="font-display text-[1.2rem] text-ink group-hover:text-gold-deep transition-colors">
                        {ol.title}
                      </h4>
                      <p className="text-[0.82rem] text-ink-soft mt-1">
                        {ol.categoryLabel}
                      </p>
                    </div>
                  </Link>
                );
              })}
            </div>
          </Container>
        </section>
      )}
    </>
  );
}
