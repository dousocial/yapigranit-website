"use client";

import * as React from "react";
import { Link, usePathname } from "@/i18n/navigation";
import {
  ChevronDown,
  Globe,
  Menu,
  X,
  ArrowUpRight,
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

import { Logo } from "@/components/brand/logo";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { SiteSearch } from "@/components/search/site-search";
import { navigation } from "@/lib/site";
import { cn } from "@/lib/utils";

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = React.useState(false);
  const [productsOpen, setProductsOpen] = React.useState(false);
  const [langOpen, setLangOpen] = React.useState(false);
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [lang, setLang] = React.useState<"tr" | "en" | "de">("tr");

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  React.useEffect(() => {
    React.startTransition(() => setMobileOpen(false));
  }, [pathname]);

  const isActive = (href: string) =>
    href === "/"
      ? pathname === "/"
      : pathname.startsWith(href);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "bg-background/95 backdrop-blur-md border-b border-line"
          : "bg-background/80 backdrop-blur-sm border-b border-transparent",
      )}
    >
      <Container size="wide">
        <div className="flex items-center justify-between h-[88px]">
          <Logo />

          {/* Desktop Nav */}
          <nav
            aria-label="Ana navigasyon"
            className="hidden lg:flex items-center gap-1"
          >
            {navigation.main.map((item) => {
              if ("children" in item && item.children) {
                return (
                  <DropdownItem
                    key={item.href}
                    item={item}
                    open={productsOpen}
                    onOpenChange={setProductsOpen}
                    active={isActive(item.href)}
                  />
                );
              }
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  data-active={isActive(item.href)}
                  className={cn(
                    "relative px-4 py-2 text-[0.92rem] font-medium transition-colors underline-grow",
                    isActive(item.href)
                      ? "text-gold-deep"
                      : "text-ink hover:text-gold-deep",
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-1">
            {/* Site search */}
            <SiteSearch className="hidden md:flex" />

            {/* Language switcher */}
            <div className="hidden md:block relative">
              <button
                onClick={() => setLangOpen((s) => !s)}
                onBlur={() => setTimeout(() => setLangOpen(false), 120)}
                className="flex items-center gap-1.5 px-3 py-2 text-[0.85rem] font-medium text-ink hover:text-gold-deep transition-colors"
                aria-haspopup="menu"
                aria-expanded={langOpen}
              >
                <Globe className="size-4" />
                <span className="uppercase tracking-wider">{lang}</span>
                <ChevronDown
                  className={cn(
                    "size-3.5 transition-transform",
                    langOpen && "rotate-180",
                  )}
                />
              </button>
              <AnimatePresence>
                {langOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.15 }}
                    className="absolute right-0 top-full mt-2 min-w-[120px] bg-surface border border-line shadow-md rounded-md py-1.5"
                  >
                    {navigation.languages.map((l) => (
                      <button
                        key={l.code}
                        onClick={() => {
                          setLang(l.code as typeof lang);
                          setLangOpen(false);
                        }}
                        className={cn(
                          "block w-full text-left px-4 py-2 text-[0.85rem] hover:bg-surface-muted transition-colors",
                          lang === l.code
                            ? "text-gold-deep font-medium"
                            : "text-ink",
                        )}
                      >
                        {l.label}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Button asChild size="md" className="hidden sm:inline-flex ml-2">
              <Link href="/teklif">
                Teklif Alın
                <ArrowUpRight />
              </Link>
            </Button>

            {/* Mobile search */}
            <SiteSearch className="md:hidden" />

            {/* Mobile burger */}
            <button
              onClick={() => setMobileOpen(true)}
              className="lg:hidden p-2 -mr-2 text-ink hover:text-gold-deep transition-colors"
              aria-label="Menü"
            >
              <Menu className="size-6" />
            </button>
          </div>
        </div>
      </Container>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <MobileMenu
            onClose={() => setMobileOpen(false)}
            isActive={isActive}
            lang={lang}
            setLang={setLang}
          />
        )}
      </AnimatePresence>
    </header>
  );
}

interface DropdownItemProps {
  item: typeof navigation.main[number];
  open: boolean;
  onOpenChange: (open: boolean) => void;
  active: boolean;
}

function DropdownItem({ item, open, onOpenChange, active }: DropdownItemProps) {
  if (!("children" in item) || !item.children) return null;

  return (
    <div
      className="relative"
      onMouseEnter={() => onOpenChange(true)}
      onMouseLeave={() => onOpenChange(false)}
    >
      <Link
        href={item.href}
        data-active={active}
        className={cn(
          "flex items-center gap-1 px-4 py-2 text-[0.92rem] font-medium transition-colors underline-grow",
          active
            ? "text-gold-deep"
            : "text-ink hover:text-gold-deep",
        )}
      >
        {item.label}
        <ChevronDown
          className={cn(
            "size-3.5 transition-transform mt-0.5",
            open && "rotate-180",
          )}
        />
      </Link>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.18 }}
            className="absolute left-1/2 top-full -translate-x-1/2 pt-3"
          >
            <div className="w-[640px] bg-surface border border-line shadow-lg rounded-lg overflow-hidden">
              <div className="grid grid-cols-2">
                <div className="p-6 border-r border-line">
                  <p className="eyebrow mb-4">Ürün Grupları</p>
                  <ul className="space-y-2.5">
                    {item.children.map((child) => (
                      <li key={child.href}>
                        <Link
                          href={child.href}
                          className="group block py-1.5"
                        >
                          <div className="flex items-baseline justify-between">
                            <span className="font-display text-[1.15rem] text-ink group-hover:text-gold-deep transition-colors">
                              {child.label}
                            </span>
                            <ArrowUpRight className="size-3.5 text-ink-soft opacity-0 -translate-x-2 transition-all group-hover:opacity-100 group-hover:translate-x-0 group-hover:text-gold-deep" />
                          </div>
                          {"description" in child && child.description && (
                            <p className="text-[0.8rem] text-ink-soft mt-0.5">
                              {child.description}
                            </p>
                          )}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="p-6 bg-surface-muted/50">
                  <p className="eyebrow mb-4">Mimar & Müteahhitler İçin</p>
                  <h4 className="font-display text-[1.4rem] text-ink leading-tight mb-3">
                    Projenize özel numune talep edin.
                  </h4>
                  <p className="text-[0.85rem] text-ink-muted leading-relaxed mb-5">
                    Mermer, granit ve porselen yüzeylerden ücretsiz numune setiyle
                    projelerinize doğru malzemeyi seçin.
                  </p>
                  <Button asChild size="sm" variant="outline">
                    <Link href="/numune-talep">
                      Numune Talep Et
                      <ArrowUpRight />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

interface MobileMenuProps {
  onClose: () => void;
  isActive: (href: string) => boolean;
  lang: "tr" | "en" | "de";
  setLang: (l: "tr" | "en" | "de") => void;
}

function MobileMenu({ onClose, isActive, lang, setLang }: MobileMenuProps) {
  const [productsOpen, setProductsOpen] = React.useState(false);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 z-50 lg:hidden"
    >
      <div
        className="absolute inset-0 bg-ink/40 backdrop-blur-sm"
        onClick={onClose}
      />
      <motion.aside
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{ type: "tween", duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="absolute right-0 top-0 bottom-0 w-full max-w-[400px] bg-background flex flex-col overflow-y-auto"
      >
        <div className="flex items-center justify-between px-6 h-[88px] border-b border-line">
          <Logo withTagline={false} />
          <button
            onClick={onClose}
            className="p-2 -mr-2 text-ink hover:text-gold-deep"
            aria-label="Kapat"
          >
            <X className="size-6" />
          </button>
        </div>

        <nav className="flex-1 px-6 py-8 space-y-1">
          {navigation.main.map((item) => {
            if ("children" in item && item.children) {
              return (
                <div key={item.href}>
                  <button
                    onClick={() => setProductsOpen((s) => !s)}
                    className="w-full flex items-center justify-between py-3 text-[1.05rem] font-medium text-ink"
                  >
                    {item.label}
                    <ChevronDown
                      className={cn(
                        "size-4 transition-transform",
                        productsOpen && "rotate-180",
                      )}
                    />
                  </button>
                  <AnimatePresence>
                    {productsOpen && (
                      <motion.ul
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden pl-4 border-l border-line ml-1"
                      >
                        {item.children.map((child) => (
                          <li key={child.href}>
                            <Link
                              href={child.href}
                              className="block py-2 text-[0.95rem] text-ink-muted hover:text-gold-deep"
                            >
                              {child.label}
                            </Link>
                          </li>
                        ))}
                      </motion.ul>
                    )}
                  </AnimatePresence>
                </div>
              );
            }
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "block py-3 text-[1.05rem] font-medium transition-colors",
                  isActive(item.href)
                    ? "text-gold-deep"
                    : "text-ink hover:text-gold-deep",
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="px-6 py-6 border-t border-line space-y-4">
          <div className="flex items-center gap-2">
            {navigation.languages.map((l) => (
              <button
                key={l.code}
                onClick={() => setLang(l.code as typeof lang)}
                className={cn(
                  "px-3 py-1.5 text-[0.8rem] font-medium uppercase tracking-wider rounded transition-colors",
                  lang === l.code
                    ? "bg-ink text-on-dark"
                    : "text-ink-muted hover:text-ink",
                )}
              >
                {l.label}
              </button>
            ))}
          </div>
          <Button asChild size="lg" className="w-full">
            <Link href="/teklif">
              Teklif Alın
              <ArrowUpRight />
            </Link>
          </Button>
        </div>
      </motion.aside>
    </motion.div>
  );
}
