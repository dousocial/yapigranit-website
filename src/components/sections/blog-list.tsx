"use client";

import * as React from "react";
import { useLocale, useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import Image from "next/image";
import {
  Search as SearchIcon,
  ArrowRight,
  ChevronDown,
  Calendar,
  Clock,
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

import { Container } from "@/components/ui/container";
import { blogCategories, blogPosts, localizedPost } from "@/lib/data/blog";
import type { Locale } from "@/i18n/routing";
import { cn, formatDateShort } from "@/lib/utils";

type Sort = "newest" | "popular" | "category" | "shortest" | "longest";

export function BlogList() {
  const t = useTranslations("Pages.blog");
  const tCommon = useTranslations("Common");
  const locale = useLocale() as Locale;

  const dateLocale =
    locale === "en" ? "en-US" : locale === "de" ? "de-DE" : "tr-TR";

  const [category, setCategory] = React.useState<string>("all");
  const [search, setSearch] = React.useState("");
  const [sort, setSort] = React.useState<Sort>("newest");
  const [sortOpen, setSortOpen] = React.useState(false);

  const sortOptions: { value: Sort; labelKey: Parameters<typeof t>[0] }[] = [
    { value: "newest", labelKey: "sortNewest" },
    { value: "popular", labelKey: "sortPopular" },
    { value: "category", labelKey: "sortCategory" },
    { value: "shortest", labelKey: "sortShortest" },
    { value: "longest", labelKey: "sortLongest" },
  ];

  const posts = React.useMemo(() => {
    let filtered = blogPosts;
    if (category !== "all")
      filtered = filtered.filter((p) => p.category === category);
    if (search.trim().length >= 3) {
      const q = search.trim().toLowerCase();
      filtered = filtered.filter((p) => {
        const l = localizedPost(p, locale);
        return (
          l.title.toLowerCase().includes(q) ||
          l.excerpt.toLowerCase().includes(q) ||
          l.categoryLabel.toLowerCase().includes(q)
        );
      });
    }
    const sorted = [...filtered];
    switch (sort) {
      case "newest":
        sorted.sort(
          (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
        );
        break;
      case "popular":
        sorted.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
        break;
      case "category":
        sorted.sort((a, b) =>
          localizedPost(a, locale).categoryLabel.localeCompare(
            localizedPost(b, locale).categoryLabel,
          ),
        );
        break;
      case "shortest":
        sorted.sort((a, b) => a.readMinutes - b.readMinutes);
        break;
      case "longest":
        sorted.sort((a, b) => b.readMinutes - a.readMinutes);
        break;
    }
    return sorted;
  }, [category, search, sort, locale]);

  return (
    <section className="bg-background py-16 lg:py-20">
      <Container size="wide">
        {/* Filters bar */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 pb-8 mb-2">
          <div className="flex flex-wrap gap-1 -mx-1 overflow-x-auto scrollbar-hide">
            {blogCategories.map((cat) => (
              <button
                key={cat.slug}
                onClick={() => setCategory(cat.slug)}
                className={cn(
                  "px-4 py-2 text-[0.78rem] font-medium uppercase tracking-[0.12em] transition-all whitespace-nowrap relative",
                  category === cat.slug
                    ? "text-gold-deep after:content-[''] after:absolute after:left-3 after:right-3 after:bottom-0 after:h-px after:bg-gold"
                    : "text-ink-muted hover:text-ink",
                )}
              >
                {cat.label[locale] ?? cat.label.tr}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <div className="relative flex-1 lg:flex-none lg:w-[280px]">
              <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 size-4 text-ink-soft" />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder={t("searchPlaceholder")}
                className="w-full h-11 pl-11 pr-4 bg-surface border border-line text-[0.88rem] text-ink placeholder:text-ink-soft focus:outline-none focus:border-gold"
              />
            </div>

            <div className="relative">
              <button
                onClick={() => setSortOpen((s) => !s)}
                onBlur={() => setTimeout(() => setSortOpen(false), 120)}
                className="flex items-center gap-2 h-11 px-5 bg-ink text-on-dark text-[0.85rem] hover:bg-surface-darker transition-colors"
              >
                {t(sortOptions.find((s) => s.value === sort)!.labelKey)}
                <ChevronDown
                  className={cn(
                    "size-3.5 transition-transform",
                    sortOpen && "rotate-180",
                  )}
                />
              </button>
              <AnimatePresence>
                {sortOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -4 }}
                    transition={{ duration: 0.15 }}
                    className="absolute right-0 top-full mt-1 min-w-[200px] bg-surface border border-line shadow-md z-10"
                  >
                    {sortOptions.map((s) => (
                      <button
                        key={s.value}
                        onClick={() => {
                          setSort(s.value);
                          setSortOpen(false);
                        }}
                        className={cn(
                          "block w-full text-left px-4 py-2.5 text-[0.85rem] hover:bg-surface-muted",
                          sort === s.value
                            ? "text-gold-deep font-medium"
                            : "text-ink",
                        )}
                      >
                        {t(s.labelKey)}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Posts grid */}
        <AnimatePresence mode="popLayout">
          <motion.div
            layout
            key={`${category}-${sort}-${search}-${locale}`}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6"
          >
            {posts.map((post, idx) => (
              <motion.article
                key={post.slug}
                layout
                className="reveal-in"
                style={{ animationDelay: `${(idx % 8) * 0.04}s` }}
              >
                <BlogCard
                  post={post}
                  locale={locale}
                  dateLocale={dateLocale}
                  minReadLabel={tCommon("minRead", {
                    minutes: post.readMinutes,
                  })}
                />
              </motion.article>
            ))}
          </motion.div>
        </AnimatePresence>

        {posts.length === 0 && (
          <div className="text-center py-20">
            <p className="text-ink-muted">{t("noResults")}</p>
          </div>
        )}
      </Container>
    </section>
  );
}

function BlogCard({
  post,
  locale,
  dateLocale,
  minReadLabel,
}: {
  post: typeof blogPosts[number];
  locale: Locale;
  dateLocale: string;
  minReadLabel: string;
}) {
  const l = localizedPost(post, locale);
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group block bg-surface overflow-hidden h-full flex flex-col"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-surface-muted">
        <Image
          src={post.cover}
          alt={l.title}
          fill
          sizes="(max-width: 640px) 100vw, 25vw"
          className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
        />
      </div>
      <div className="p-5 flex-1 flex flex-col">
        <span className="text-[0.7rem] uppercase tracking-[0.15em] text-gold-deep font-medium mb-3">
          {l.categoryLabel}
        </span>
        <h3 className="font-display text-[1.15rem] text-ink leading-snug group-hover:text-gold-deep transition-colors text-balance">
          {l.title}
        </h3>
        <p className="mt-3 text-[0.82rem] text-ink-muted leading-relaxed line-clamp-3">
          {l.excerpt}
        </p>
        <div className="mt-5 pt-4 border-t border-line flex items-center justify-between text-[0.75rem] text-ink-soft">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1.5">
              <Calendar className="size-3" />
              {formatDateShort(post.date, dateLocale)}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="size-3" />
              {minReadLabel}
            </span>
          </div>
          <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1 text-gold-deep" />
        </div>
      </div>
    </Link>
  );
}
