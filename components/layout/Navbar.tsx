"use client";

import Link from "next/link";
import { useState } from "react";

import { useLanguage } from "@/lib/i18n/LanguageContext";
import type { Language } from "@/lib/i18n/translations";

const LANGUAGES: { code: Language; label: string }[] = [
  { code: "tr", label: "TR" },
  { code: "de", label: "DE" },
  { code: "en", label: "EN" },
];

export default function Navbar() {
  const { lang, setLang, t, isDeDomain } = useLanguage();
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { href: "/kurumsal", label: t.nav.corporate },
    { href: "/koleksiyon", label: t.nav.individual },
    { href: "/koleksiyon#trend-vision", label: t.nav.blogVision },
    { href: "/projeler", label: t.nav.about },
    { href: "/iletisim", label: t.nav.contact },
    ...(lang === "de" ? [{ href: "/impressum", label: t.nav.impressum }] : []),
  ];

  const handleLangClick = (code: Language) => {
    // DE button on .com → navigate to yapigranit.de
    if (code === "de" && !isDeDomain) {
      window.location.href = "https://yapigranit.de" + window.location.pathname;
      return;
    }
    // All language switches (including TR/EN on .de) → switch in-place
    setLang(code);
  };

  return (
    <nav className="absolute top-0 left-0 z-50 flex w-full items-center justify-between p-6 pointer-events-none bg-black/50 backdrop-blur">
      <div className="pointer-events-auto">
        <Link
          href="/"
          className="text-2xl font-serif font-bold tracking-widest text-white border-b-2 border-white/20 pb-1 hover:border-gold transition-colors duration-300"
        >
          YAPIGRANİT
        </Link>
      </div>

      {/* Desktop nav */}
      <div className="hidden space-x-6 text-sm font-sans tracking-wide pointer-events-auto md:flex items-center">
        {navLinks.map((link) => (
          <Link
            key={link.href + link.label}
            href={link.href}
            className="hover:text-gold transition-colors relative group"
          >
            {link.label}
            <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-gold transition-all group-hover:w-full" />
          </Link>
        ))}

        {/* Language switcher */}
        <div className="flex items-center gap-1 border border-white/20 rounded-full px-2 py-1">
          {LANGUAGES.map((l, i) => (
            <span key={l.code} className="flex items-center">
              <button
                type="button"
                onClick={() => handleLangClick(l.code)}
                className={`text-[11px] font-bold uppercase tracking-wider px-1 transition-colors ${
                  lang === l.code ? "text-gold" : "text-white/50 hover:text-white"
                }`}
              >
                {l.label}
              </button>
              {i < LANGUAGES.length - 1 && (
                <span className="text-white/20 text-[10px] mx-0.5">|</span>
              )}
            </span>
          ))}
        </div>
      </div>

      {/* Mobile hamburger */}
      <button
        type="button"
        className="text-2xl cursor-pointer pointer-events-auto hover:text-gold transition-colors md:hidden"
        onClick={() => setMobileOpen((v) => !v)}
        aria-label="Toggle menu"
      >
        {mobileOpen ? "✕" : "☰"}
      </button>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="absolute top-full left-0 w-full bg-black/95 border-t border-white/10 pointer-events-auto md:hidden">
          <div className="flex flex-col p-6 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.href + link.label}
                href={link.href}
                className="text-sm text-white/80 hover:text-gold transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            {/* Mobile language switcher */}
            <div className="flex items-center gap-2 pt-2 border-t border-white/10">
              <span className="text-[10px] text-white/40 uppercase tracking-widest mr-1">
                Lang:
              </span>
              {LANGUAGES.map((l) => (
                <button
                  key={l.code}
                  type="button"
                  onClick={() => { handleLangClick(l.code); setMobileOpen(false); }}
                  className={`text-xs font-bold uppercase px-2 py-1 rounded border transition-colors ${
                    lang === l.code
                      ? "border-gold text-gold"
                      : "border-white/20 text-white/50 hover:border-white/40 hover:text-white"
                  }`}
                >
                  {l.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
