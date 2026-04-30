/**
 * Çeviri sözlüğü.
 * Şu an Türkçe varsayılan dil — bu dosya ilerideki next-intl entegrasyonu
 * için temel oluşturuyor. Tam çoklu dil için her route'un /[locale] altına
 * taşınması gerekiyor (faz 7).
 */

export const messages = {
  tr: {
    nav: {
      home: "Anasayfa",
      corporate: "Kurumsal",
      products: "Ürünler",
      services: "Hizmetler",
      projects: "Projeler",
      blog: "Blog",
      contact: "İletişim",
      getQuote: "Teklif Alın",
    },
    common: {
      readMore: "Devamını Oku",
      seeAll: "Tümünü Gör",
      back: "Geri",
    },
  },
  en: {
    nav: {
      home: "Home",
      corporate: "Corporate",
      products: "Products",
      services: "Services",
      projects: "Projects",
      blog: "Blog",
      contact: "Contact",
      getQuote: "Get Quote",
    },
    common: {
      readMore: "Read More",
      seeAll: "See All",
      back: "Back",
    },
  },
  de: {
    nav: {
      home: "Startseite",
      corporate: "Unternehmen",
      products: "Produkte",
      services: "Dienstleistungen",
      projects: "Projekte",
      blog: "Blog",
      contact: "Kontakt",
      getQuote: "Angebot Anfragen",
    },
    common: {
      readMore: "Weiterlesen",
      seeAll: "Alle Anzeigen",
      back: "Zurück",
    },
  },
} as const;

export type Locale = keyof typeof messages;
export type Messages = typeof messages.tr;
