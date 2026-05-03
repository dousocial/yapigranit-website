"use client";

import * as React from "react";
import { createPortal } from "react-dom";
import { useParams } from "next/navigation";
import { useTranslations } from "next-intl";
import {
  Link,
  usePathname,
  useRouter,
} from "@/i18n/navigation";
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
import { routing, localeLabels, type Locale } from "@/i18n/routing";
import { cn } from "@/lib/utils";

interface NavItem {
  key:
    | "home"
    | "corporate"
    | "products"
    | "services"
    | "machinePark"
    | "projects"
    | "blog"
    | "contact"
    | "impressum";
  href: string;
  children?: { href: string; nameKey: string; descKey?: string }[];
}

const navItems: NavItem[] = [
  { key: "home", href: "/" },
  { key: "corporate", href: "/kurumsal" },
  {
    key: "products",
    href: "/urunler",
    children: [
      { href: "/urunler/porselen", nameKey: "Footer.links.porselen", descKey: "porselenDesc" },
      { href: "/urunler/mermer", nameKey: "Footer.links.mermer", descKey: "mermerDesc" },
      { href: "/urunler/kuvars", nameKey: "Footer.links.kuvars", descKey: "kuvarsDesc" },
      { href: "/urunler/granit", nameKey: "Footer.links.granit", descKey: "granitDesc" },
      { href: "/urunler", nameKey: "Footer.links.allProducts" },
    ],
  },
  { key: "services", href: "/hizmetler" },
  { key: "machinePark", href: "/makine-parkuru" },
  { key: "projects", href: "/projeler" },
  { key: "blog", href: "/blog" },
  { key: "contact", href: "/iletisim" },
];

const productDescKeys: Record<string, string> = {
  "/urunler/porselen": "Hero.eyebrow",
  "/urunler/mermer": "Hero.eyebrow",
  "/urunler/kuvars": "Hero.eyebrow",
  "/urunler/granit": "Hero.eyebrow",
};
void productDescKeys;

export function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const params = useParams();
  const t = useTranslations("Nav");
  const tMega = useTranslations("MegaMenu");
  const tFooter = useTranslations("Footer.links");

  const currentLocale = (params.locale as Locale) ?? routing.defaultLocale;

  // .de locale'de Impressum nav öğesini göster
  const visibleNavItems: NavItem[] =
    currentLocale === "de"
      ? [...navItems, { key: "impressum", href: "/impressum" }]
      : navItems;

  const [scrolled, setScrolled] = React.useState(false);
  const [productsOpen, setProductsOpen] = React.useState(false);
  const [langOpen, setLangOpen] = React.useState(false);
  const [mobileOpen, setMobileOpen] = React.useState(false);

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
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  function changeLocale(next: Locale) {
    setLangOpen(false);
    router.replace(pathname, { locale: next });
  }

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
            aria-label={t("ariaPrimary")}
            className="hidden lg:flex items-center gap-1"
          >
            {visibleNavItems.map((item) => {
              if (item.children) {
                return (
                  <DropdownItem
                    key={item.href}
                    href={item.href}
                    label={t(item.key)}
                    items={item.children}
                    open={productsOpen}
                    onOpenChange={setProductsOpen}
                    active={isActive(item.href)}
                    tFooter={tFooter}
                    tMega={tMega}
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
                  {t(item.key)}
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
                aria-label={t("language")}
              >
                <Globe className="size-4" />
                <span className="uppercase tracking-wider">
                  {localeLabels[currentLocale]}
                </span>
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
                    {routing.locales.map((l) => (
                      <button
                        key={l}
                        onClick={() => changeLocale(l)}
                        className={cn(
                          "block w-full text-left px-4 py-2 text-[0.85rem] hover:bg-surface-muted transition-colors",
                          currentLocale === l
                            ? "text-gold-deep font-medium"
                            : "text-ink",
                        )}
                      >
                        {localeLabels[l]}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Button asChild size="md" className="hidden sm:inline-flex ml-2">
              <Link href="/teklif">
                {t("getQuote")}
                <ArrowUpRight />
              </Link>
            </Button>

            {/* Mobile search */}
            <SiteSearch className="md:hidden" />

            {/* Mobile burger */}
            <button
              onClick={() => setMobileOpen(true)}
              className="lg:hidden grid place-items-center min-w-11 min-h-11 -mr-2 text-ink hover:text-gold-deep transition-colors"
              aria-label={t("openMenu")}
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
            navItems={visibleNavItems}
            currentLocale={currentLocale}
            onLocaleChange={changeLocale}
            t={t}
          />
        )}
      </AnimatePresence>
    </header>
  );
}

interface DropdownItemProps {
  href: string;
  label: string;
  items: NavItem["children"];
  open: boolean;
  onOpenChange: (open: boolean) => void;
  active: boolean;
  tFooter: ReturnType<typeof useTranslations<"Footer.links">>;
  tMega: ReturnType<typeof useTranslations<"MegaMenu">>;
}

function DropdownItem({
  href,
  label,
  items,
  open,
  onOpenChange,
  active,
  tFooter,
  tMega,
}: DropdownItemProps) {
  if (!items) return null;

  return (
    <div
      className="relative"
      onMouseEnter={() => onOpenChange(true)}
      onMouseLeave={() => onOpenChange(false)}
    >
      <Link
        href={href}
        data-active={active}
        className={cn(
          "flex items-center gap-1 px-4 py-2 text-[0.92rem] font-medium transition-colors underline-grow",
          active ? "text-gold-deep" : "text-ink hover:text-gold-deep",
        )}
      >
        {label}
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
                  <p className="eyebrow mb-4">{tMega("productGroups")}</p>
                  <ul className="space-y-2.5">
                    {items.map((child) => {
                      // nameKey is "Footer.links.<key>"; we already have tFooter scoped
                      const subKey = child.nameKey.replace("Footer.links.", "");
                      return (
                        <li key={child.href}>
                          <Link href={child.href} className="group block py-1.5">
                            <div className="flex items-baseline justify-between">
                              <span className="font-display text-[1.15rem] text-ink group-hover:text-gold-deep transition-colors">
                                {tFooter(subKey as Parameters<typeof tFooter>[0])}
                              </span>
                              <ArrowUpRight className="size-3.5 text-ink-soft opacity-0 -translate-x-2 transition-all group-hover:opacity-100 group-hover:translate-x-0 group-hover:text-gold-deep" />
                            </div>
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
                <div className="p-6 bg-surface-muted/50">
                  <p className="eyebrow mb-4">{tMega("forArchitects")}</p>
                  <h4 className="font-display text-[1.4rem] text-ink leading-tight mb-3">
                    {tMega("sampleHeading")}
                  </h4>
                  <p className="text-[0.85rem] text-ink-muted leading-relaxed mb-5">
                    {tMega("sampleBody")}
                  </p>
                  <Button asChild size="sm" variant="outline">
                    <Link href="/numune-talep">
                      {tMega("sampleCta")}
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
  navItems: NavItem[];
  currentLocale: Locale;
  onLocaleChange: (l: Locale) => void;
  t: ReturnType<typeof useTranslations<"Nav">>;
}

function MobileMenu({
  onClose,
  isActive,
  navItems,
  currentLocale,
  onLocaleChange,
  t,
}: MobileMenuProps) {
  const tFooter = useTranslations("Footer.links");
  const [productsOpen, setProductsOpen] = React.useState(false);

  React.useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  // SSR'da document yok — portal'ı sadece client'ta oluştur
  if (typeof document === "undefined") return null;

  const content = (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 z-[100] lg:hidden"
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
            className="grid place-items-center min-w-11 min-h-11 -mr-2 text-ink hover:text-gold-deep"
            aria-label={t("closeMenu")}
          >
            <X className="size-6" />
          </button>
        </div>

        <nav className="flex-1 px-6 py-8 space-y-1">
          {navItems.map((item) => {
            if (item.children) {
              return (
                <div key={item.href}>
                  <button
                    onClick={() => setProductsOpen((s) => !s)}
                    className="w-full flex items-center justify-between py-3 text-[1.05rem] font-medium text-ink"
                  >
                    {t(item.key)}
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
                        {item.children.map((child) => {
                          const subKey = child.nameKey.replace(
                            "Footer.links.",
                            "",
                          );
                          return (
                            <li key={child.href}>
                              <Link
                                href={child.href}
                                className="block py-2 text-[0.95rem] text-ink-muted hover:text-gold-deep"
                              >
                                {tFooter(
                                  subKey as Parameters<typeof tFooter>[0],
                                )}
                              </Link>
                            </li>
                          );
                        })}
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
                {t(item.key)}
              </Link>
            );
          })}
        </nav>

        <div className="px-6 py-6 border-t border-line space-y-4">
          <div className="flex items-center gap-2">
            {routing.locales.map((l) => (
              <button
                key={l}
                onClick={() => onLocaleChange(l)}
                className={cn(
                  "px-3 py-1.5 text-[0.8rem] font-medium uppercase tracking-wider rounded transition-colors",
                  currentLocale === l
                    ? "bg-ink text-on-dark"
                    : "text-ink-muted hover:text-ink",
                )}
              >
                {localeLabels[l]}
              </button>
            ))}
          </div>
          <Button asChild size="lg" className="w-full">
            <Link href="/teklif">
              {t("getQuote")}
              <ArrowUpRight />
            </Link>
          </Button>
        </div>
      </motion.aside>
    </motion.div>
  );

  return createPortal(content, document.body);
}
