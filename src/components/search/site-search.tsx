"use client";

import * as React from "react";
import { useTranslations } from "next-intl";
import { Link, useRouter } from "@/i18n/navigation";
import { Command } from "cmdk";
import {
  Search as SearchIcon,
  ArrowRight,
  FileText,
  Building2,
  Layers,
  Wrench,
  Phone,
  X,
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

import { blogPosts } from "@/lib/data/blog";
import { projects } from "@/lib/data/projects";
import { products } from "@/lib/data/products";
import { services } from "@/lib/data/services";
import { cn } from "@/lib/utils";

interface SiteSearchProps {
  variant?: "icon" | "trigger";
  className?: string;
}

export function SiteSearch({ variant = "icon", className }: SiteSearchProps) {
  const router = useRouter();
  const t = useTranslations("Search");
  const [open, setOpen] = React.useState(false);
  const [query, setQuery] = React.useState("");

  const close = React.useCallback(() => {
    setOpen(false);
    setQuery("");
  }, []);

  React.useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setOpen((s) => !s);
      }
      if (e.key === "Escape") close();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [close]);

  React.useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  function navigate(href: string) {
    close();
    router.push(href);
  }

  return (
    <>
      {variant === "icon" ? (
        <button
          onClick={() => setOpen(true)}
          className={cn(
            "flex items-center gap-1.5 px-3 py-2 text-[0.85rem] font-medium text-ink hover:text-gold-deep transition-colors",
            className,
          )}
          aria-label={t("buttonAriaLabel")}
        >
          <SearchIcon className="size-4" />
          <span className="hidden xl:inline-flex items-center gap-1.5 text-ink-soft">
            <kbd className="text-[0.65rem] font-mono px-1.5 py-0.5 bg-surface-muted border border-line rounded">
              ⌘K
            </kbd>
          </span>
        </button>
      ) : (
        <button
          onClick={() => setOpen(true)}
          className={cn(
            "flex items-center gap-3 w-full max-w-[360px] px-4 h-10 bg-surface-muted hover:bg-surface text-[0.88rem] text-ink-soft border border-line transition-colors",
            className,
          )}
        >
          <SearchIcon className="size-4" />
          <span className="flex-1 text-left">{t("triggerPlaceholder")}</span>
          <kbd className="text-[0.7rem] font-mono px-1.5 py-0.5 bg-surface border border-line rounded">
            ⌘K
          </kbd>
        </button>
      )}

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="fixed inset-0 z-[60] bg-ink/40 backdrop-blur-sm flex items-start justify-center pt-[10vh] px-4"
            onClick={close}
          >
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.98 }}
              transition={{ duration: 0.18 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-[640px] bg-background border border-line shadow-lg rounded-md overflow-hidden"
            >
              <Command label={t("ariaLabel")} shouldFilter={true}>
                <div className="flex items-center gap-3 px-5 h-14 border-b border-line">
                  <SearchIcon className="size-4 text-ink-soft shrink-0" />
                  <Command.Input
                    autoFocus
                    value={query}
                    onValueChange={setQuery}
                    placeholder={t("inputPlaceholder")}
                    className="flex-1 h-full bg-transparent text-[0.95rem] text-ink placeholder:text-ink-soft focus:outline-none"
                  />
                  <kbd className="hidden sm:inline-block text-[0.7rem] font-mono px-2 py-1 bg-surface-muted border border-line rounded text-ink-soft">
                    ESC
                  </kbd>
                  <button
                    onClick={close}
                    className="sm:hidden p-1 -mr-1 text-ink-soft hover:text-ink"
                    aria-label={t("buttonAriaLabel")}
                  >
                    <X className="size-4" />
                  </button>
                </div>

                <Command.List className="max-h-[60vh] overflow-y-auto py-2">
                  <Command.Empty className="px-5 py-10 text-center">
                    <p className="text-ink-soft text-[0.92rem]">
                      &quot;{query}&quot; {t("emptyResult")}
                    </p>
                    <Link
                      href="/iletisim"
                      onClick={close}
                      className="mt-4 inline-flex items-center gap-2 text-[0.85rem] text-gold-deep hover:text-gold"
                    >
                      <Phone className="size-3.5" />
                      {t("emptyContact")}
                      <ArrowRight className="size-3.5" />
                    </Link>
                  </Command.Empty>

                  {!query && (
                    <Command.Group heading={t("groupQuickAccess")}>
                      <SearchItem
                        onSelect={() => navigate("/teklif")}
                        icon={<FileText className="size-4" />}
                        title={t("quickQuoteTitle")}
                        subtitle={t("quickQuoteDesc")}
                      />
                      <SearchItem
                        onSelect={() => navigate("/numune-talep")}
                        icon={<Layers className="size-4" />}
                        title={t("quickSampleTitle")}
                        subtitle={t("quickSampleDesc")}
                      />
                      <SearchItem
                        onSelect={() => navigate("/iletisim")}
                        icon={<Phone className="size-4" />}
                        title={t("quickContactTitle")}
                        subtitle={t("quickContactDesc")}
                      />
                    </Command.Group>
                  )}

                  {/* Hizmetler */}
                  <Command.Group heading={t("groupServices")}>
                    {services.map((s) => (
                      <SearchItem
                        key={s.slug}
                        value={`${s.title} ${s.description} ${s.tags.join(" ")}`}
                        onSelect={() => navigate(`/hizmetler/${s.slug}`)}
                        icon={<Wrench className="size-4" />}
                        title={s.title}
                        subtitle={s.categoryLabel}
                      />
                    ))}
                  </Command.Group>

                  {/* Ürünler */}
                  <Command.Group heading={t("groupProducts")}>
                    {products.map((p) => (
                      <SearchItem
                        key={p.slug}
                        value={`${p.name} ${p.tagline} ${p.description}`}
                        onSelect={() => navigate(`/urunler/${p.slug}`)}
                        icon={<Layers className="size-4" />}
                        title={p.name}
                        subtitle={p.tagline}
                      />
                    ))}
                  </Command.Group>

                  {/* Projeler */}
                  <Command.Group heading={t("groupProjects")}>
                    {projects.map((p) => (
                      <SearchItem
                        key={p.slug}
                        value={`${p.title} ${p.location} ${p.material.join(" ")} ${p.summary}`}
                        onSelect={() => navigate(`/projeler/${p.slug}`)}
                        icon={<Building2 className="size-4" />}
                        title={p.title}
                        subtitle={`${p.categoryLabel} · ${p.location} · ${p.year}`}
                      />
                    ))}
                  </Command.Group>

                  {/* Blog */}
                  <Command.Group heading={t("groupBlog")}>
                    {blogPosts.map((b) => (
                      <SearchItem
                        key={b.slug}
                        value={`${b.title} ${b.subtitle ?? ""} ${b.excerpt} ${b.categoryLabel}`}
                        onSelect={() => navigate(`/blog/${b.slug}`)}
                        icon={<FileText className="size-4" />}
                        title={b.title}
                        subtitle={`${b.categoryLabel} · ${b.readMinutes} dk`}
                      />
                    ))}
                  </Command.Group>
                </Command.List>

                <div className="px-5 py-2.5 border-t border-line bg-surface-muted/40 flex items-center justify-between text-[0.7rem] text-ink-soft">
                  <span className="flex items-center gap-3">
                    <span className="flex items-center gap-1">
                      <kbd className="font-mono px-1 py-0.5 bg-surface border border-line rounded">↑↓</kbd>
                      {t("navigate")}
                    </span>
                    <span className="flex items-center gap-1">
                      <kbd className="font-mono px-1 py-0.5 bg-surface border border-line rounded">↵</kbd>
                      {t("select")}
                    </span>
                  </span>
                  <span>{t("footerLabel")}</span>
                </div>
              </Command>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

interface SearchItemProps {
  onSelect: () => void;
  icon: React.ReactNode;
  title: string;
  subtitle?: string;
  value?: string;
}

function SearchItem({ onSelect, icon, title, subtitle, value }: SearchItemProps) {
  return (
    <Command.Item
      value={value ?? title}
      onSelect={onSelect}
      className="flex items-center gap-3 px-5 py-2.5 text-[0.9rem] cursor-pointer aria-selected:bg-surface-muted aria-selected:text-gold-deep transition-colors"
    >
      <span className="size-8 grid place-items-center bg-surface-muted text-ink-soft rounded shrink-0">
        {icon}
      </span>
      <div className="flex-1 min-w-0">
        <div className="text-ink truncate">{title}</div>
        {subtitle && (
          <div className="text-[0.78rem] text-ink-soft truncate">{subtitle}</div>
        )}
      </div>
      <ArrowRight className="size-3.5 text-ink-soft shrink-0" />
    </Command.Item>
  );
}
