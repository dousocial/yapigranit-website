import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { ArrowRight, Calendar, Clock, Share2 } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";

import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import { Eyebrow } from "@/components/ui/eyebrow";
import { blogPosts, localizedPost } from "@/lib/data/blog";
import { routing, type Locale } from "@/i18n/routing";
import { formatDate } from "@/lib/utils";

interface Props {
  params: Promise<{ slug: string; locale: string }>;
}

export async function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    blogPosts.map((p) => ({ locale, slug: p.slug })),
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug, locale } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};
  const l = localizedPost(post, locale as Locale);
  return {
    title: l.title,
    description: l.excerpt,
    alternates: {
      canonical:
        locale === "tr"
          ? `/blog/${post.slug}`
          : `/${locale}/blog/${post.slug}`,
    },
    openGraph: {
      title: l.title,
      description: l.excerpt,
      images: [post.cover],
      type: "article",
      publishedTime: post.date,
    },
  };
}

export default async function BlogDetailPage({ params }: Props) {
  const { slug, locale } = await params;
  setRequestLocale(locale);
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();
  return <BlogContent slug={slug} />;
}

function BlogContent({ slug }: { slug: string }) {
  const locale = useLocale() as Locale;
  const t = useTranslations("Pages.blog");
  const tNav = useTranslations("Nav");
  const tCommon = useTranslations("Common");

  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return null;
  const l = localizedPost(post, locale);

  const dateLocale =
    locale === "en" ? "en-US" : locale === "de" ? "de-DE" : "tr-TR";

  const related = blogPosts
    .filter((p) => p.category === post.category && p.slug !== post.slug)
    .slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="bg-surface-darker text-on-dark relative overflow-hidden pt-12 lg:pt-16 pb-20">
        <Container size="wide" className="relative">
          <nav
            aria-label="Breadcrumb"
            className="text-[0.78rem] text-on-dark-muted"
          >
            <Link href="/" className="hover:text-gold">
              {tNav("home")}
            </Link>
            <span className="mx-2">/</span>
            <Link href="/blog" className="hover:text-gold">
              {tNav("blog")}
            </Link>
            <span className="mx-2">/</span>
            <span className="text-gold">{l.categoryLabel}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 mt-10 items-center">
            <div className="lg:col-span-6">
              <Eyebrow variant="light">{l.categoryLabel}</Eyebrow>
              <h1 className="display-xl mt-4 text-on-dark text-balance">
                {l.title}
              </h1>
              <div className="w-12 h-px bg-gold mt-7" />
              <div className="mt-6 flex items-center gap-5 text-[0.85rem] text-on-dark-muted">
                <span className="flex items-center gap-2">
                  <Calendar className="size-4" />
                  {formatDate(post.date, dateLocale)}
                </span>
                <span className="flex items-center gap-2">
                  <Clock className="size-4" />
                  {tCommon("minRead", { minutes: post.readMinutes })}
                </span>
              </div>
            </div>
            <div className="lg:col-span-6 relative aspect-[4/3] overflow-hidden">
              <Image
                src={post.cover}
                alt={l.title}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* Content */}
      <section className="bg-background py-16 lg:py-20">
        <Container size="narrow">
          <Reveal>
            <article className="prose prose-lg max-w-none">
              <p className="text-[1.05rem] text-ink leading-relaxed">
                {l.excerpt}
              </p>
              <p className="mt-6 text-[0.98rem] text-ink-muted leading-relaxed">
                {locale === "tr" &&
                  "Doğal taş, mimari yapılarda yalnızca estetik bir tercih değil; aynı zamanda dayanıklılık, kullanım ömrü ve sürdürülebilirlik açısından da kritik bir karardır. YAPIGRANİT olarak, projelerin ihtiyaçlarına özel malzeme önerileri ve uygulama çözümleri sunuyoruz."}
                {locale === "en" &&
                  "Natural stone is not just an aesthetic choice in architectural buildings; it's also a critical decision in terms of durability, lifespan and sustainability. As YAPIGRANİT, we offer project-specific material recommendations and application solutions."}
                {locale === "de" &&
                  "Naturstein ist nicht nur eine ästhetische Wahl in architektonischen Gebäuden; er ist auch eine kritische Entscheidung in Bezug auf Haltbarkeit, Lebensdauer und Nachhaltigkeit. Bei YAPIGRANİT bieten wir projektspezifische Materialempfehlungen und Anwendungslösungen."}
              </p>
            </article>

            <div className="mt-12 flex items-center gap-3 border-y border-line py-5">
              <span className="text-[0.78rem] uppercase tracking-[0.18em] text-ink-soft">
                {t("shareLabel")}
              </span>
              <ShareButton
                label="Twitter / X"
                url={`https://twitter.com/intent/tweet?text=${encodeURIComponent(l.title)}`}
              />
              <ShareButton
                label="LinkedIn"
                url={`https://www.linkedin.com/sharing/share-offsite/?url=https://yapigranit.com${locale === "tr" ? "" : `/${locale}`}/blog/${post.slug}`}
              />
              <ShareButton
                label="WhatsApp"
                url={`https://wa.me/?text=${encodeURIComponent(l.title)}`}
              />
            </div>

            <div className="mt-12 bg-surface-muted p-8 lg:p-10 text-center">
              <Eyebrow>{t("professionalSupport")}</Eyebrow>
              <h3 className="display-md text-ink mt-3">{t("supportTitle")}</h3>
              <Button asChild size="lg" className="mt-6">
                <Link href="/teklif">
                  {t("supportCta")}
                  <ArrowRight />
                </Link>
              </Button>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Related */}
      {related.length > 0 && (
        <section className="bg-surface-muted py-16 lg:py-20">
          <Container size="wide">
            <h3 className="display-md text-ink mb-10">{t("relatedTitle")}</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
              {related.map((p) => {
                const ol = localizedPost(p, locale);
                return (
                  <Link
                    key={p.slug}
                    href={`/blog/${p.slug}`}
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
                      <span className="text-[0.7rem] uppercase tracking-[0.15em] text-gold-deep">
                        {ol.categoryLabel}
                      </span>
                      <h4 className="font-display text-[1.15rem] text-ink mt-2 group-hover:text-gold-deep transition-colors">
                        {ol.title}
                      </h4>
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

function ShareButton({ label, url }: { label: string; url: string }) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1.5 px-3 py-1.5 text-[0.75rem] text-ink-muted hover:text-gold-deep border border-line hover:border-gold transition-colors"
    >
      <Share2 className="size-3" />
      {label}
    </a>
  );
}
