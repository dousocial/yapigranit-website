import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  const t = useTranslations("NotFound");

  const links: { key: "linkProducts" | "linkProjects" | "linkServices" | "linkBlog" | "linkQuote"; href: string }[] = [
    { key: "linkProducts", href: "/urunler" },
    { key: "linkProjects", href: "/projeler" },
    { key: "linkServices", href: "/hizmetler" },
    { key: "linkBlog", href: "/blog" },
    { key: "linkQuote", href: "/teklif" },
  ];

  return (
    <>
      <Header />
      <main className="flex-1 pb-16 lg:pb-0">
        <section className="min-h-[calc(100vh-80px)] flex items-center bg-background">
          <Container className="py-24 text-center">
            <p className="eyebrow mb-6">{t("eyebrow")}</p>

            <h1
              className="font-display text-[clamp(6rem,20vw,14rem)] font-light leading-none tracking-tight text-line-strong select-none"
              aria-hidden="true"
            >
              404
            </h1>

            <p className="mt-8 text-ink-muted text-lg max-w-md mx-auto leading-relaxed">
              {t("description")}
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center">
              <Button asChild size="lg">
                <Link href="/">{t("ctaHome")}</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/iletisim">{t("ctaContact")}</Link>
              </Button>
            </div>

            <nav className="mt-16 flex flex-wrap gap-x-8 gap-y-3 justify-center text-sm text-ink-soft">
              {links.map(({ key, href }) => (
                <Link
                  key={href}
                  href={href}
                  className="hover:text-gold-deep underline-grow transition-colors"
                >
                  {t(key)}
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
