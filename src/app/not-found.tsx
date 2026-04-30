import Link from "next/link";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="flex-1 pb-16 lg:pb-0">
        <section className="min-h-[calc(100vh-80px)] flex items-center bg-background">
          <Container className="py-24 text-center">
            <p className="eyebrow mb-6">404 — Sayfa Bulunamadı</p>

            <h1
              className="font-display text-[clamp(6rem,20vw,14rem)] font-light leading-none tracking-tight text-line-strong select-none"
              aria-hidden="true"
            >
              404
            </h1>

            <p className="mt-8 text-ink-muted text-lg max-w-md mx-auto leading-relaxed">
              Aradığınız sayfa taşınmış, silinmiş ya da hiç var olmamış olabilir.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center">
              <Button asChild size="lg">
                <Link href="/">Ana Sayfaya Dön</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/iletisim">Bize Ulaşın</Link>
              </Button>
            </div>

            <nav className="mt-16 flex flex-wrap gap-x-8 gap-y-3 justify-center text-sm text-ink-soft">
              {[
                { label: "Ürünler", href: "/urunler" },
                { label: "Projeler", href: "/projeler" },
                { label: "Hizmetler", href: "/hizmetler" },
                { label: "Blog", href: "/blog" },
                { label: "Teklif Al", href: "/teklif" },
              ].map(({ label, href }) => (
                <Link
                  key={href}
                  href={href}
                  className="hover:text-gold-deep underline-grow transition-colors"
                >
                  {label}
                </Link>
              ))}
            </nav>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
