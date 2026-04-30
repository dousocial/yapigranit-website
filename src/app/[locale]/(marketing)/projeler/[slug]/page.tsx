import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { ArrowRight, MapPin, Calendar, Layers, Building2 } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";

import { PageHero } from "@/components/sections/page-hero";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Lightbox } from "@/components/ui/lightbox";
import { projects, localizedProject } from "@/lib/data/projects";
import { routing, type Locale } from "@/i18n/routing";

interface Props {
  params: Promise<{ slug: string; locale: string }>;
}

export async function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    projects.map((p) => ({ locale, slug: p.slug })),
  );
}

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { slug, locale } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  const l = localizedProject(project, locale as Locale);
  return {
    title: l.title,
    description: l.summary,
    alternates: {
      canonical:
        locale === "tr"
          ? `/projeler/${project.slug}`
          : `/${locale}/projeler/${project.slug}`,
    },
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug, locale } = await params;
  setRequestLocale(locale);
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();
  return <ProjectContent slug={slug} />;
}

function ProjectContent({ slug }: { slug: string }) {
  const locale = useLocale() as Locale;
  const t = useTranslations("Pages.projects");
  const tNav = useTranslations("Nav");

  const project = projects.find((p) => p.slug === slug);
  if (!project) return null;
  const l = localizedProject(project, locale);

  const relatedProjects = projects
    .filter((p) => p.category === project.category && p.slug !== project.slug)
    .slice(0, 3);

  const meta = [
    {
      icon: Building2,
      label: t("detailMetaProjectType"),
      value: l.categoryLabel,
    },
    { icon: MapPin, label: t("detailMetaLocation"), value: project.location },
    { icon: Calendar, label: t("detailMetaYear"), value: String(project.year) },
    {
      icon: Layers,
      label: t("detailMetaMaterial"),
      value: l.material.join(", "),
    },
  ];

  return (
    <>
      <PageHero
        title={l.title}
        description={l.summary}
        breadcrumb={[
          { label: tNav("home"), href: "/" },
          { label: tNav("projects"), href: "/projeler" },
          { label: l.title },
        ]}
        image={project.cover}
        imageAlt={l.title}
      />

      {/* Meta */}
      <section className="bg-background py-12">
        <Container size="wide">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-10 py-8 border-y border-line">
            {meta.map((m) => (
              <div key={m.label}>
                <m.icon
                  className="size-5 text-gold-deep mb-3"
                  strokeWidth={1.4}
                />
                <p className="text-[0.72rem] uppercase tracking-[0.18em] text-ink-soft">
                  {m.label}
                </p>
                <p className="font-display text-[1.1rem] text-ink mt-1">
                  {m.value}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Description */}
      <section className="bg-background pb-20">
        <Container size="wide">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
            <Reveal className="lg:col-span-7">
              <Eyebrow>{t("detailAboutEyebrow")}</Eyebrow>
              <h2 className="display-md text-ink mt-3 text-balance">
                {l.title} {t("detailAboutTitleSuffix")}
              </h2>
              <div className="w-12 h-px bg-gold mt-6" />
              <p className="mt-7 text-[0.96rem] text-ink-muted leading-relaxed">
                {l.summary}
              </p>
              <p className="mt-4 text-[0.96rem] text-ink-muted leading-relaxed">
                <strong className="text-ink">{t("detailScopeLabel")}</strong>{" "}
                {l.scope}
                {l.area &&
                  " " + t("detailAreaSuffix", { area: l.area })}
              </p>

              <div className="mt-8">
                <p className="eyebrow mb-3">{t("detailMaterialsHeading")}</p>
                <div className="flex flex-wrap gap-2">
                  {l.material.map((m) => (
                    <Link
                      key={m}
                      href="/urunler"
                      className="px-3 py-1.5 text-[0.78rem] bg-surface-muted text-ink hover:bg-gold hover:text-ink transition-colors"
                    >
                      {m}
                    </Link>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.15} className="lg:col-span-5">
              <div className="bg-surface-darker text-on-dark p-8 lg:p-10">
                <h3 className="font-display text-[1.5rem] text-on-dark mb-3">
                  {t("detailSidebarTitle")}
                </h3>
                <p className="text-[0.88rem] text-on-dark-muted mb-6">
                  {t("detailSidebarDesc")}
                </p>
                <Button asChild size="lg" className="w-full sm:w-auto">
                  <Link href="/teklif">
                    {t("detailSidebarCta")}
                    <ArrowRight />
                  </Link>
                </Button>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Gallery */}
      {project.gallery.length > 0 && (
        <section className="bg-surface-muted py-16 lg:py-20">
          <Container size="wide">
            <Eyebrow>{t("galleryEyebrow")}</Eyebrow>
            <h3 className="display-md text-ink mt-3 mb-3">
              {t("galleryTitle")}
            </h3>
            <p className="text-[0.85rem] text-ink-soft mb-10">
              {t("galleryHint")}
            </p>
            <Lightbox
              images={project.gallery}
              alt={l.title}
              className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6"
            />
          </Container>
        </section>
      )}

      {relatedProjects.length > 0 && (
        <section className="bg-background py-16 lg:py-20">
          <Container size="wide">
            <div className="flex items-end justify-between mb-10">
              <h3 className="display-md text-ink">{t("relatedTitle")}</h3>
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
