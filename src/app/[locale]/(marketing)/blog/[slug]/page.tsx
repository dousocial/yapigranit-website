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
import {
  ArticleJsonLd,
  BreadcrumbJsonLd,
  FaqJsonLd,
} from "@/components/seo/structured-data";
import { blogPosts, localizedPost } from "@/lib/data/blog";
import { localizedBlogContent, type ContentBlock } from "@/lib/data/blog-content";
import { siteConfig } from "@/lib/site";
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

  const blogUrl =
    locale === "tr"
      ? `${siteConfig.url}/blog/${post.slug}`
      : `${siteConfig.url}/${locale}/blog/${post.slug}`;

  // Yazıdan otomatik üretilen genel SSS (her yazıda görünür, JSON-LD ile)
  const faqQuestions = [
    {
      question:
        locale === "en"
          ? "What is the difference between marble and porcelain?"
          : locale === "de"
          ? "Was ist der Unterschied zwischen Marmor und Porzellan?"
          : "Mermer ve porselen arasındaki temel fark nedir?",
      answer:
        locale === "en"
          ? "Marble is a natural stone formed by metamorphism — each slab is unique and porous. Porcelain (sintered stone) is fired at 1200°C, non-porous, scratch-resistant up to Mohs 7-8, and stain-proof. Marble offers irreplaceable aesthetic; porcelain offers maintenance-free durability."
          : locale === "de"
          ? "Marmor ist ein natürlicher Stein, der durch Metamorphose entsteht — jede Platte ist einzigartig und porös. Porzellan (gesinterter Stein) wird bei 1200°C gebrannt, ist porenfrei, kratzfest bis Mohs 7-8 und fleckenresistent."
          : "Mermer doğal bir taştır — her plaka eşsiz ve gözeneklidir. Porselen (sinterlenmiş taş) 1200°C'de pişirilir, gözeneksizdir, Mohs 7-8 sertlikle çizilmez ve leke tutmaz. Mermer eşsiz estetik sunar; porselen bakımsız dayanıklılık sağlar.",
    },
    {
      question:
        locale === "en"
          ? "How long does a porcelain countertop last?"
          : locale === "de"
          ? "Wie lange hält eine Porzellan-Arbeitsplatte?"
          : "Porselen tezgah ne kadar dayanır?",
      answer:
        locale === "en"
          ? "With proper use, porcelain countertops last 20+ years without losing their original look — no sealing required, scratch and stain-resistant."
          : locale === "de"
          ? "Bei sachgemäßer Nutzung halten Porzellan-Arbeitsplatten 20+ Jahre ohne Verlust des Originalaussehens — keine Versiegelung erforderlich."
          : "Doğru kullanımla porselen tezgahlar 20+ yıl orijinal görünümünü koruyarak dayanır — sealer gerektirmez, çizilmez ve leke tutmaz.",
    },
    {
      question:
        locale === "en"
          ? "Can you ship and install in Germany?"
          : locale === "de"
          ? "Liefern und montieren Sie auch in Deutschland?"
          : "Almanya'ya teslimat ve montaj yapıyor musunuz?",
      answer:
        locale === "en"
          ? "Yes — Yapı Granit serves 12 countries including Germany via our Troisdorf office. We handle delivery, installation, and after-sales support."
          : locale === "de"
          ? "Ja — Yapi Granit & Natursteine GmbH (Troisdorf) bietet Lieferung, Montage und After-Sales-Support in Deutschland und 11 weiteren Ländern."
          : "Evet — Yapı Granit, Almanya dahil 12 ülkeye hizmet vermektedir. Teslimat, montaj ve satış sonrası destek dahil tam paket sunuyoruz.",
    },
  ];

  return (
    <>
      <ArticleJsonLd
        headline={l.title}
        description={l.excerpt}
        image={post.cover}
        datePublished={post.date}
        url={blogUrl}
        category={l.categoryLabel}
      />
      <BreadcrumbJsonLd
        items={[
          { label: tNav("home"), href: locale === "tr" ? "/" : `/${locale}` },
          { label: tNav("blog"), href: locale === "tr" ? "/blog" : `/${locale}/blog` },
          { label: l.title, href: locale === "tr" ? `/blog/${post.slug}` : `/${locale}/blog/${post.slug}` },
        ]}
      />
      <FaqJsonLd questions={faqQuestions} />

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
            <article className="max-w-none">
              <BlogContentRenderer
                slug={post.slug}
                locale={locale}
                fallbackExcerpt={l.excerpt}
              />
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

function BlogContentRenderer({
  slug,
  locale,
  fallbackExcerpt,
}: {
  slug: string;
  locale: Locale;
  fallbackExcerpt: string;
}) {
  const blocks: ContentBlock[] | undefined = localizedBlogContent(slug, locale);

  if (!blocks || blocks.length === 0) {
    return (
      <p className="text-[1.05rem] text-ink leading-relaxed">{fallbackExcerpt}</p>
    );
  }

  return (
    <div className="space-y-6">
      {blocks.map((block, i) => {
        switch (block.type) {
          case "lead":
            return (
              <p
                key={i}
                className="text-[1.15rem] lg:text-[1.2rem] text-ink leading-relaxed font-display"
              >
                {block.text}
              </p>
            );
          case "h2":
            return (
              <div key={i} className="pt-4">
                <h2 className="font-display text-[1.7rem] lg:text-[2rem] text-ink mt-8 mb-3 text-balance">
                  {block.text}
                </h2>
                <div className="w-10 h-px bg-gold" />
              </div>
            );
          case "h3":
            return (
              <h3
                key={i}
                className="font-display text-[1.3rem] lg:text-[1.45rem] text-ink mt-6 mb-2"
              >
                {block.text}
              </h3>
            );
          case "p":
            return (
              <p
                key={i}
                className="text-[0.98rem] text-ink-muted leading-relaxed"
              >
                {block.text}
              </p>
            );
          case "quote":
            return (
              <blockquote
                key={i}
                className="border-l-2 border-gold pl-5 my-6 italic text-[1.05rem] text-ink"
              >
                {block.text}
              </blockquote>
            );
          case "ul":
            return (
              <ul key={i} className="space-y-2.5 my-2">
                {block.items.map((item, j) => (
                  <li key={j} className="flex gap-3 text-[0.96rem] leading-relaxed">
                    <span className="mt-2 size-1.5 rounded-full bg-gold flex-shrink-0" />
                    <span className="text-ink-muted">
                      {item.strong && (
                        <strong className="text-ink font-medium">
                          {item.strong}:
                        </strong>
                      )}{" "}
                      {item.text}
                    </span>
                  </li>
                ))}
              </ul>
            );
          case "ol":
            return (
              <ol key={i} className="space-y-2.5 my-2 counter-reset-list">
                {block.items.map((item, j) => (
                  <li
                    key={j}
                    className="flex gap-3 text-[0.96rem] leading-relaxed"
                  >
                    <span className="font-display text-gold-deep w-6 flex-shrink-0">
                      {String(j + 1).padStart(2, "0")}
                    </span>
                    <span className="text-ink-muted">
                      {item.strong && (
                        <strong className="text-ink font-medium">
                          {item.strong}:
                        </strong>
                      )}{" "}
                      {item.text}
                    </span>
                  </li>
                ))}
              </ol>
            );
          case "table":
            return (
              <div key={i} className="my-8 overflow-x-auto border border-line">
                <table className="w-full text-[0.88rem]">
                  <thead className="bg-surface-darker text-on-dark">
                    <tr>
                      {block.headers.map((h, k) => (
                        <th
                          key={k}
                          className="text-left px-4 py-3 font-medium uppercase tracking-[0.12em] text-[0.78rem]"
                        >
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {block.rows.map((row, k) => (
                      <tr
                        key={k}
                        className="border-t border-line even:bg-surface-muted"
                      >
                        {row.map((cell, l) => (
                          <td
                            key={l}
                            className={`px-4 py-3 align-top ${l === 0 ? "font-medium text-ink" : "text-ink-muted"}`}
                          >
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            );
          case "callout":
            return (
              <aside
                key={i}
                className="my-8 bg-surface-muted border-l-2 border-gold p-6 lg:p-7"
              >
                {block.eyebrow && (
                  <p className="text-[0.72rem] uppercase tracking-[0.18em] text-gold-deep mb-2">
                    {block.eyebrow}
                  </p>
                )}
                <h4 className="font-display text-[1.2rem] text-ink mb-2">
                  {block.title}
                </h4>
                <p className="text-[0.92rem] text-ink-muted leading-relaxed">
                  {block.body}
                </p>
              </aside>
            );
          case "divider":
            return <hr key={i} className="my-8 border-line" />;
          case "image":
            return (
              <figure
                key={i}
                className={`my-10 ${block.bleed ? "lg:-mx-24 xl:-mx-40" : ""}`}
              >
                <div
                  className="relative w-full overflow-hidden bg-surface-muted"
                  style={{ aspectRatio: block.aspect ?? "3 / 2" }}
                >
                  <Image
                    src={block.src}
                    alt={block.alt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 760px"
                    className="object-cover"
                  />
                </div>
                {block.caption && (
                  <figcaption className="mt-3 text-[0.82rem] text-ink-soft text-center italic">
                    {block.caption}
                  </figcaption>
                )}
              </figure>
            );
          case "imagePair":
            return (
              <div
                key={i}
                className="my-10 grid grid-cols-1 md:grid-cols-2 gap-4"
              >
                {[block.left, block.right].map((img, k) => (
                  <figure key={k}>
                    <div className="relative w-full aspect-[4/5] overflow-hidden bg-surface-muted">
                      <Image
                        src={img.src}
                        alt={img.alt}
                        fill
                        sizes="(max-width: 768px) 100vw, 380px"
                        className="object-cover"
                      />
                    </div>
                    {img.caption && (
                      <figcaption className="mt-2 text-[0.78rem] text-ink-soft text-center">
                        {img.caption}
                      </figcaption>
                    )}
                  </figure>
                ))}
              </div>
            );
          case "imageQuote":
            return (
              <div
                key={i}
                className="my-12 relative overflow-hidden bg-surface-darker text-on-dark lg:-mx-24 xl:-mx-40"
              >
                <div className="absolute inset-0 z-0">
                  <Image
                    src={block.src}
                    alt={block.alt}
                    fill
                    sizes="100vw"
                    className="object-cover opacity-40"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-surface-darker/90 via-surface-darker/60 to-surface-darker/90" />
                </div>
                <div className="relative z-10 px-8 py-16 lg:px-16 lg:py-20 text-center max-w-[800px] mx-auto">
                  <span className="text-gold text-3xl leading-none font-display block mb-4">
                    &ldquo;
                  </span>
                  <p className="font-display text-[1.5rem] lg:text-[1.8rem] text-on-dark leading-snug text-balance">
                    {block.quote}
                  </p>
                  {block.attribution && (
                    <p className="mt-5 text-[0.82rem] text-gold uppercase tracking-[0.18em]">
                      — {block.attribution}
                    </p>
                  )}
                </div>
              </div>
            );
        }
      })}
    </div>
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
