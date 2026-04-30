import type { Metadata } from "next";
import { Link } from "@/i18n/navigation";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

import { PageHero } from "@/components/sections/page-hero";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Reveal } from "@/components/ui/reveal";
import { CtaBand } from "@/components/sections/cta-band";
import { products } from "@/lib/data/products";

export const metadata: Metadata = {
  title: "Ürünler",
  description:
    "Mermer, granit, porselen ve özel yüzeyler — projeleriniz için premium doğal taş ürün gruplarımız.",
  alternates: { canonical: "/urunler" },
};

export default function UrunlerPage() {
  return (
    <>
      <PageHero
        title="Ürünler"
        description="Mermer, granit, porselen ve özel yüzeyler — projeleriniz için zamansız çözümler."
        breadcrumb={[
          { label: "Anasayfa", href: "/" },
          { label: "Ürünler" },
        ]}
        image="https://images.unsplash.com/photo-1604147706283-d7119b5b822c?auto=format&fit=crop&w=1600&q=80"
        imageAlt="Ürün gruplarımız"
      />

      <section className="bg-background py-20 lg:py-28">
        <Container size="wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            {products.map((product, idx) => (
              <Reveal key={product.slug} delay={(idx % 2) * 0.1}>
                <Link
                  href={`/urunler/${product.slug}`}
                  className="group block bg-surface overflow-hidden h-full"
                >
                  <div className="relative aspect-[16/10] overflow-hidden bg-surface-muted">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                    />
                  </div>
                  <div className="p-8 lg:p-10">
                    <Eyebrow>{product.tagline}</Eyebrow>
                    <h2 className="font-display text-[2rem] text-ink mt-3 group-hover:text-gold-deep transition-colors">
                      {product.name}
                    </h2>
                    <p className="mt-4 text-[0.95rem] text-ink-muted leading-relaxed">
                      {product.description}
                    </p>
                    <span className="mt-6 inline-flex items-center gap-2 text-[0.78rem] font-medium uppercase tracking-[0.18em] text-gold-deep">
                      Ürünleri Keşfet
                      <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <CtaBand />
    </>
  );
}
