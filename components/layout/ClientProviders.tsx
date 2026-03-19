"use client";

import { useEffect, type ReactNode } from "react";

import { LanguageProvider, useLanguage } from "@/lib/i18n/LanguageContext";

function HtmlLangSync() {
  const { lang } = useLanguage();
  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);
  return null;
}

export default function ClientProviders({ children }: { children: ReactNode }) {
  return (
    <LanguageProvider>
      <HtmlLangSync />
      {children}
    </LanguageProvider>
  );
}
