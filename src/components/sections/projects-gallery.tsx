"use client";

import * as React from "react";
import { useLocale, useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import Image from "next/image";
import { ArrowRight, Filter, ChevronDown, Building2 } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import {
  projects as allProjects,
  projectCategories,
  localizedProject,
} from "@/lib/data/projects";
import type { Locale } from "@/i18n/routing";
import { cn } from "@/lib/utils";

export function ProjectsGallery() {
  const t = useTranslations("Pages.projects");
  const locale = useLocale() as Locale;
  const [category, setCategory] = React.useState<string>("all");
  const [year, setYear] = React.useState<string>("all");
  const [yearOpen, setYearOpen] = React.useState(false);

  const yearOptions = React.useMemo(
    () => [
      { value: "all", label: t("filterYear") },
      { value: "2026", label: "2026" },
      { value: "2025", label: "2025" },
      { value: "2024", label: "2024" },
      { value: "2023", label: "2023" },
      { value: "2022", label: t("yearAndOlder", { year: 2022 }) },
    ],
    [t],
  );

  const projects = React.useMemo(() => {
    return allProjects.filter((p) => {
      const catMatch = category === "all" || p.category === category;
      const yearMatch =
        year === "all" ||
        (year === "2022" ? p.year <= 2022 : p.year === parseInt(year));
      return catMatch && yearMatch;
    });
  }, [category, year]);

  return (
    <section className="bg-background pt-2 pb-20 lg:pb-28">
      <Container size="wide">
        {/* Filters */}
        <div className="flex flex-wrap items-center justify-between gap-4 py-6 border-y border-line mb-8 lg:mb-10">
          <div className="flex flex-wrap gap-2 overflow-x-auto scrollbar-hide flex-1">
            {projectCategories.map((cat) => (
              <button
                key={cat.slug}
                onClick={() => setCategory(cat.slug)}
                className={cn(
                  "inline-flex items-center min-h-11 px-4 py-2 text-[0.78rem] font-medium uppercase tracking-[0.12em] transition-all whitespace-nowrap rounded-full border",
                  category === cat.slug
                    ? "bg-gold text-ink border-gold"
                    : "text-ink-muted border-line hover:text-ink hover:border-line-strong",
                )}
              >
                {cat.label[locale] ?? cat.label.tr}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <div className="relative">
              <button
                onClick={() => setYearOpen((s) => !s)}
                onBlur={() => setTimeout(() => setYearOpen(false), 120)}
                className="flex items-center gap-2 h-11 px-4 border border-line-strong text-[0.85rem] text-ink hover:border-ink transition-colors"
              >
                {yearOptions.find((y) => y.value === year)?.label}
                <ChevronDown
                  className={cn(
                    "size-3.5 transition-transform",
                    yearOpen && "rotate-180",
                  )}
                />
              </button>
              <AnimatePresence>
                {yearOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -4 }}
                    transition={{ duration: 0.15 }}
                    className="absolute right-0 top-full mt-1 min-w-[180px] bg-surface border border-line shadow-md z-10"
                  >
                    {yearOptions.map((y) => (
                      <button
                        key={y.value}
                        onClick={() => {
                          setYear(y.value);
                          setYearOpen(false);
                        }}
                        className={cn(
                          "block w-full text-left px-4 py-2.5 text-[0.85rem] hover:bg-surface-muted",
                          year === y.value
                            ? "text-gold-deep font-medium"
                            : "text-ink",
                        )}
                      >
                        {y.label}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Button variant="dark" size="md">
              <Filter className="size-3.5" />
              {t("filterButton")}
            </Button>
          </div>
        </div>

        {/* Grid */}
        <AnimatePresence mode="popLayout">
          <motion.div
            layout
            key={`${category}-${year}`}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6"
          >
            {projects.map((project, idx) => (
              <motion.div
                key={project.slug}
                layout
                className="reveal-in"
                style={{ animationDelay: `${(idx % 6) * 0.05}s` }}
              >
                <ProjectCard project={project} locale={locale} />
              </motion.div>
            ))}

            {/* CTA card */}
            <motion.div
              layout
              className="bg-surface-darker text-on-dark p-10 lg:p-12 flex flex-col justify-center"
            >
              <div className="size-12 grid place-items-center bg-on-dark/10 text-gold mb-5 rounded">
                <Building2 className="size-6" />
              </div>
              <p className="font-display text-[1.4rem] text-on-dark leading-snug mb-6">
                {t("ctaCardTitle")}
              </p>
              <Button asChild size="md" className="self-start">
                <Link href="/teklif">
                  {t("ctaCardButton")}
                  <ArrowRight />
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </AnimatePresence>

        {projects.length === 0 && (
          <div className="text-center py-20">
            <p className="text-ink-muted">{t("noResults")}</p>
          </div>
        )}
      </Container>
    </section>
  );
}

function ProjectCard({
  project,
  locale,
}: {
  project: typeof allProjects[number];
  locale: Locale;
}) {
  const l = localizedProject(project, locale);
  return (
    <Link
      href={`/projeler/${project.slug}`}
      className="group block bg-surface overflow-hidden"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-surface-muted">
        <Image
          src={project.cover}
          alt={l.title}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition-transform duration-700 group-hover:scale-[1.05]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-surface-darker/80 via-transparent to-transparent transition-opacity group-hover:from-surface-darker/90" />
        <div className="absolute inset-x-0 bottom-0 p-5 flex items-end justify-between text-on-dark">
          <div>
            <h3 className="font-display text-[1.4rem] leading-tight">
              {l.title}
            </h3>
            <p className="text-[0.8rem] text-on-dark-muted mt-1">
              {l.categoryLabel}
            </p>
          </div>
          <div className="size-9 grid place-items-center bg-on-dark/15 backdrop-blur-sm rounded-full transition-transform group-hover:translate-x-1">
            <ArrowRight className="size-3.5" />
          </div>
        </div>
      </div>
    </Link>
  );
}
