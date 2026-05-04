import { COM_DOMAIN, DE_DOMAIN, type Locale } from "@/i18n/routing";

function clean(path: string): string {
  if (!path || path === "/") return "";
  return path.startsWith("/") ? path : `/${path}`;
}

export function canonicalFor(locale: Locale, path: string): string {
  const p = clean(path);
  if (locale === "tr") return `https://${COM_DOMAIN}${p || "/"}`;
  if (locale === "en") return `https://${COM_DOMAIN}/en${p}`;
  return `https://${DE_DOMAIN}${p || "/"}`;
}

export function buildAlternates(currentLocale: Locale, path: string) {
  return {
    canonical: canonicalFor(currentLocale, path),
    languages: {
      "tr-TR": canonicalFor("tr", path),
      en: canonicalFor("en", path),
      "de-DE": canonicalFor("de", path),
      "x-default": canonicalFor("tr", path),
    },
  };
}
