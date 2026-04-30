import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["tr", "en", "de"] as const,
  defaultLocale: "tr",
  localePrefix: "as-needed",
});

export type Locale = (typeof routing.locales)[number];

export const localeLabels: Record<Locale, string> = {
  tr: "TR",
  en: "EN",
  de: "DE",
};

export const localeFullNames: Record<Locale, string> = {
  tr: "Türkçe",
  en: "English",
  de: "Deutsch",
};

export const localeOgFormats: Record<Locale, string> = {
  tr: "tr_TR",
  en: "en_US",
  de: "de_DE",
};
