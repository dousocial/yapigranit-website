import { defineRouting } from "next-intl/routing";

export const COM_DOMAIN = "yapigranit.com";
export const DE_DOMAIN = "yapigranit.de";

export const localeDomainMap = {
  tr: COM_DOMAIN,
  en: COM_DOMAIN,
  de: DE_DOMAIN,
} as const;

export const routing = defineRouting({
  locales: ["tr", "en", "de"] as const,
  defaultLocale: "tr",
  localePrefix: "as-needed",
  localeDetection: false,
  domains: [
    {
      domain: COM_DOMAIN,
      defaultLocale: "tr",
      locales: ["tr", "en"],
      localePrefix: "as-needed",
    },
    {
      domain: DE_DOMAIN,
      defaultLocale: "de",
      locales: ["de"],
      localePrefix: "as-needed",
    },
  ],
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
