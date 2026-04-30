"use client";

import * as React from "react";
import Link from "next/link";
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
import { blogCategories, blogPosts } from "@/lib/data/blog";
import { cn, formatDateShort } from "@/lib/utils";

type Sort = "newest" | "popular" | "category" | "shortest" | "longest";

const sortOptions: { value: Sort; label: string }[] = [
  { value: "newest", label: "En Yeni" },
  { value: "popular", label: "En Çok Okunan" },
  { value: "category", label: "Kategoriye Göre" },
  { value: "shortest", label: "Kısa Yazılar" },
  { value: "longest", label: "Uzun Yazılar" },
];

export function BlogList() {
  const [category, setCategory] = React.useState<string>("all");
  const [search, setSearch] = React.useState("");
  const [sort, setSort] = React.useState<Sort>("newest");
  const [sortOpen, setSortOpen] = React.useState(false);

  const posts = React.useMemo(() => {
    let filtered = blogPosts;
    if (category !== "all")
      filtered = filtered.filter((p) => p.category === category);
    if (search.trim().length >= 3) {
      const q = search.trim().toLowerCase();
      filtered = filtered.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.excerpt.toLowerCase().includes(q) ||
          p.categoryLabel.toLowerCase().includes(q),
      );
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
        sorted.sort((a, b) => a.categoryLabel.localeCompare(b.categoryLabel));
        break;
      case "shortest":
        sorted.sort((a, b) => a.readMinutes - b.readMinutes);
        break;
      case "longest":
        sorted.sort((a, b) => b.readMinutes - a.readMinutes);
        break;
    }
    return sorted;
  }, [category, search, sort]);

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
                {cat.label}
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
                placeholder="Blog yazılarında ara..."
                className="w-full h-11 pl-11 pr-4 bg-surface border border-line text-[0.88rem] text-ink placeholder:text-ink-soft focus:outline-none focus:border-gold"
              />
            </div>

            <div className="relative">
              <button
                onClick={() => setSortOpen((s) => !s)}
                onBlur={() => setTimeout(() => setSortOpen(false), 120)}
                className="flex items-center gap-2 h-11 px-5 bg-ink text-on-dark text-[0.85rem] hover:bg-surface-darker transition-colors"
              >
                {sortOptions.find((s) => s.value === sort)?.label}
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
                        {s.label}
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
            key={`${category}-${sort}-${search}`}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6"
          >
            {posts.map((post, idx) => (
              <motion.article
                key={post.slug}
                layout
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 16 }}
                transition={{ duration: 0.4, delay: (idx % 8) * 0.04 }}
              >
                <BlogCard post={post} />
              </motion.article>
            ))}
          </motion.div>
        </AnimatePresence>

        {posts.length === 0 && (
          <div className="text-center py-20">
            <p className="text-ink-muted">
              Aradığınız kriterlere uygun yazı bulunamadı.
            </p>
          </div>
        )}
      </Container>
    </section>
  );
}

function BlogCard({ post }: { post: typeof blogPosts[number] }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group block bg-surface overflow-hidden h-full flex flex-col"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-surface-muted">
        <Image
          src={post.cover}
          alt={post.title}
          fill
          sizes="(max-width: 640px) 100vw, 25vw"
          className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
        />
      </div>
      <div className="p-5 flex-1 flex flex-col">
        <span className="text-[0.7rem] uppercase tracking-[0.15em] text-gold-deep font-medium mb-3">
          {post.categoryLabel}
        </span>
        <h3 className="font-display text-[1.15rem] text-ink leading-snug group-hover:text-gold-deep transition-colors text-balance">
          {post.title}
        </h3>
        <p className="mt-3 text-[0.82rem] text-ink-muted leading-relaxed line-clamp-3">
          {post.excerpt}
        </p>
        <div className="mt-5 pt-4 border-t border-line flex items-center justify-between text-[0.75rem] text-ink-soft">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1.5">
              <Calendar className="size-3" />
              {formatDateShort(post.date)}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="size-3" />
              {post.readMinutes} dk okuma
            </span>
          </div>
          <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1 text-gold-deep" />
        </div>
      </div>
    </Link>
  );
}
