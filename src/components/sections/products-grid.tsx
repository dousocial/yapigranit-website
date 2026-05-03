import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Reveal } from "@/components/ui/reveal";
import { products } from "@/lib/data/products";
import { localizedProductName, localizedProductTagline } from "@/lib/data/products";
import { useLocale } from "next-intl";
import type { Locale } from "@/i18n/routing";

export function ProductsGrid() {
  const t = useTranslations("ProductsGrid");
  const locale = useLocale() as Locale;

  return (
    <section
      id="urun-gruplarimiz"
      className="bg-background py-20 lg:py-28"
    >
      <Container size="wide">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
          <Reveal className="lg:col-span-3 flex flex-col justify-center">
            <Eyebrow>{t("eyebrow")}</Eyebrow>
            <h2 className="display-lg mt-4 text-ink text-balance">
              {t("title")}
            </h2>
            <Link
              href="/urunler"
              className="mt-6 inline-flex items-center min-h-11 py-2 gap-2 text-[0.78rem] font-medium uppercase tracking-[0.18em] text-gold-deep hover:text-gold transition-colors group"
            >
              {t("ctaSeeAll")}
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Reveal>

          <div className="lg:col-span-9 grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            {products.map((product, idx) => (
              <Reveal key={product.slug} delay={idx * 0.08}>
                <ProductCard product={product} locale={locale} />
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

function ProductCard({
  product,
  locale,
}: {
  product: typeof products[number];
  locale: Locale;
}) {
  const name = localizedProductName(product, locale);
  const tagline = localizedProductTagline(product, locale);
  return (
    <Link
      href={`/urunler/${product.slug}`}
      className="group flex flex-col bg-surface overflow-hidden border border-line hover:border-line-strong transition-all hover:shadow-md"
    >
      <div className="relative aspect-[4/5] overflow-hidden bg-surface-muted">
        <Image
          src={product.image}
          alt={name}
          fill
          sizes="(max-width: 768px) 50vw, 25vw"
          className="object-cover transition-transform duration-700 group-hover:scale-[1.06]"
        />
      </div>
      <div className="p-5 flex items-center justify-between">
        <div>
          <h3 className="font-display text-[1.4rem] text-ink leading-none mb-1 group-hover:text-gold-deep transition-colors">
            {name}
          </h3>
          <p className="text-[0.8rem] text-ink-soft">{tagline}</p>
        </div>
        <ArrowRight className="size-4 text-ink-soft transition-all group-hover:text-gold-deep group-hover:translate-x-1" />
      </div>
    </Link>
  );
}
