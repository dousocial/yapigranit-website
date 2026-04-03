"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function Header() {
  const { t } = useLanguage();

  const navItems = [
    { href: "/kurumsal", label: t.nav.corporate },
    { href: "/koleksiyon", label: t.nav.individual },
    { href: "/projeler", label: t.nav.about },
    { href: "/iletisim", label: t.nav.contact },
  ];

  return (
    <header className="border-b border-neutral-200">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-5">
        <Link href="/" className="text-lg font-semibold tracking-tight">
          YAPIGRANIT
        </Link>
        <nav className="hidden items-center gap-6 text-sm text-neutral-600 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition hover:text-neutral-900"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <Link
          href="/iletisim"
          className="rounded-full border border-neutral-900 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em]"
        >
          {t.nav.quoteBtn}
        </Link>
      </div>
    </header>
  );
}
