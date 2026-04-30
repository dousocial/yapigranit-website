import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar, Clock, Share2 } from "lucide-react";

import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import { Eyebrow } from "@/components/ui/eyebrow";
import { blogPosts } from "@/lib/data/blog";
import { formatDate } from "@/lib/utils";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [post.cover],
      type: "article",
      publishedTime: post.date,
    },
  };
}

export default async function BlogDetailPage({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  const related = blogPosts
    .filter((p) => p.category === post.category && p.slug !== post.slug)
    .slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="bg-surface-darker text-on-dark relative overflow-hidden pt-12 lg:pt-16 pb-20">
        <Container size="wide" className="relative">
          <nav aria-label="Breadcrumb" className="text-[0.78rem] text-on-dark-muted">
            <Link href="/" className="hover:text-gold">Anasayfa</Link>
            <span className="mx-2">/</span>
            <Link href="/blog" className="hover:text-gold">Blog</Link>
            <span className="mx-2">/</span>
            <span className="text-gold">{post.categoryLabel}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 mt-10 items-center">
            <div className="lg:col-span-6">
              <Eyebrow variant="light">{post.categoryLabel}</Eyebrow>
              <h1 className="display-xl mt-4 text-on-dark text-balance">
                {post.title}
              </h1>
              <div className="w-12 h-px bg-gold mt-7" />
              <div className="mt-6 flex items-center gap-5 text-[0.85rem] text-on-dark-muted">
                <span className="flex items-center gap-2">
                  <Calendar className="size-4" />
                  {formatDate(post.date)}
                </span>
                <span className="flex items-center gap-2">
                  <Clock className="size-4" />
                  {post.readMinutes} dk okuma
                </span>
              </div>
            </div>
            <div className="lg:col-span-6 relative aspect-[4/3] overflow-hidden">
              <Image
                src={post.cover}
                alt={post.title}
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
                {post.excerpt}
              </p>
              <p className="mt-6 text-[0.98rem] text-ink-muted leading-relaxed">
                Doğal taş, mimari yapılarda yalnızca estetik bir tercih değil;
                aynı zamanda dayanıklılık, kullanım ömrü ve sürdürülebilirlik
                açısından da kritik bir karardır. Yapı Granit olarak, projelerin
                ihtiyaçlarına özel malzeme önerileri ve uygulama çözümleri
                sunuyoruz.
              </p>
              <h2 className="font-display text-[1.8rem] text-ink mt-12">
                Doğru Malzeme Seçimi Neden Önemlidir?
              </h2>
              <p className="mt-4 text-[0.98rem] text-ink-muted leading-relaxed">
                Bir projenin kalitesini, kullanılan malzemenin uzun vadede nasıl
                performans göstereceği belirler. Mermer, granit ve porselen
                yüzeylerin her biri farklı koşullara, farklı tasarım stillerine
                uygundur. Bu nedenle malzeme seçimi, tasarım sürecinin en kritik
                aşamasıdır.
              </p>
              <h2 className="font-display text-[1.8rem] text-ink mt-12">
                Yapı Granit Yaklaşımı
              </h2>
              <p className="mt-4 text-[0.98rem] text-ink-muted leading-relaxed">
                Her projede mimar, müteahhit ve son kullanıcının ihtiyaçlarını
                analiz ediyor, tasarım amacına en uygun malzemeyi öneriyoruz. 5
                Eksen CNC, Waterjet ve özel ölçü üretim olanaklarımızla,
                projenize özel detaylar üretiyoruz.
              </p>
            </article>

            <div className="mt-12 flex items-center gap-3 border-y border-line py-5">
              <span className="text-[0.78rem] uppercase tracking-[0.18em] text-ink-soft">
                Paylaş
              </span>
              <ShareButton label="Twitter / X" url={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}`} />
              <ShareButton label="LinkedIn" url={`https://www.linkedin.com/sharing/share-offsite/?url=https://yapigranit.com.tr/blog/${post.slug}`} />
              <ShareButton label="WhatsApp" url={`https://wa.me/?text=${encodeURIComponent(post.title)}`} />
            </div>

            <div className="mt-12 bg-surface-muted p-8 lg:p-10 text-center">
              <Eyebrow>Profesyonel Destek</Eyebrow>
              <h3 className="display-md text-ink mt-3">
                Projeniz için doğru malzemeyi birlikte seçelim.
              </h3>
              <Button asChild size="lg" className="mt-6">
                <Link href="/teklif">
                  Uzmanla Görüş
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
            <h3 className="display-md text-ink mb-10">Benzer Yazılar</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
              {related.map((p) => (
                <Link
                  key={p.slug}
                  href={`/blog/${p.slug}`}
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
                    <span className="text-[0.7rem] uppercase tracking-[0.15em] text-gold-deep">
                      {p.categoryLabel}
                    </span>
                    <h4 className="font-display text-[1.15rem] text-ink mt-2 group-hover:text-gold-deep transition-colors">
                      {p.title}
                    </h4>
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
