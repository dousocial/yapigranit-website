import type { Locale } from "@/i18n/routing";

export interface ProjectTranslation {
  title: string;
  categoryLabel: string;
  type: string;
  scope: string;
  summary: string;
  material: string[];
  area?: string;
}

export interface Project extends ProjectTranslation {
  slug: string;
  category:
    | "oteller"
    | "konut"
    | "ticari"
    | "kamusal"
    | "restoran-kafe"
    | "diger";
  location: string;
  year: number;
  cover: string;
  gallery: string[];
  i18n?: Partial<Record<Exclude<Locale, "tr">, Partial<ProjectTranslation>>>;
}

export const projectCategories = [
  {
    slug: "all",
    label: { tr: "Tüm Projeler", en: "All Projects", de: "Alle Projekte" },
  },
  {
    slug: "oteller",
    label: { tr: "Oteller", en: "Hotels", de: "Hotels" },
  },
  {
    slug: "konut",
    label: {
      tr: "Konut Projeleri",
      en: "Residential",
      de: "Wohnprojekte",
    },
  },
  {
    slug: "ticari",
    label: {
      tr: "Ticari Yapılar",
      en: "Commercial",
      de: "Gewerbebauten",
    },
  },
  {
    slug: "kamusal",
    label: {
      tr: "Kamusal Yapılar",
      en: "Public",
      de: "Öffentliche Bauten",
    },
  },
  {
    slug: "restoran-kafe",
    label: {
      tr: "Restoran & Kafe",
      en: "Restaurant & Café",
      de: "Restaurant & Café",
    },
  },
  {
    slug: "diger",
    label: { tr: "Diğer", en: "Other", de: "Sonstige" },
  },
] as const;

export const projects: Project[] = [
  {
    slug: "forum-camlik-avm",
    title: "Forum Çamlık AVM",
    category: "ticari",
    categoryLabel: "Ticari Yapı",
    type: "Cephe & Zemin Kaplama",
    location: "Denizli",
    year: 2018,
    material: ["Doğal Taş", "Granit"],
    area: "45.000 m²",
    scope:
      "Doğal taş zemin kaplaması ve havalandırmalı mekanik cephe sistemleri uygulaması.",
    summary:
      "45.000 m² doğal taş zemin kaplaması ve havalandırmalı cephe sistemleri uygulaması ile Denizli'nin önde gelen alışveriş merkezi projesi.",
    cover: "/images/projects/proje-maslak.webp",
    gallery: [
      "/images/projects/proje-arkestra.webp",
      "/images/projects/proje-bodrum-villa.webp",
    ],
    i18n: {
      en: {
        title: "Forum Çamlık Mall",
        categoryLabel: "Commercial",
        type: "Façade & Floor Cladding",
        material: ["Natural Stone", "Granite"],
        scope:
          "Natural stone floor cladding and ventilated mechanical façade systems.",
        summary:
          "Denizli's leading shopping center project with 45,000 m² natural stone floor and ventilated façade systems.",
      },
      de: {
        title: "Forum Çamlık Einkaufszentrum",
        categoryLabel: "Gewerbebau",
        type: "Fassaden- & Bodenverkleidung",
        material: ["Naturstein", "Granit"],
        scope:
          "Naturstein-Bodenbelag und hinterlüftete mechanische Fassadensysteme.",
        summary:
          "Denizlis führendes Einkaufszentrumsprojekt mit 45.000 m² Naturstein-Boden und hinterlüfteten Fassadensystemen.",
      },
    },
  },
  {
    slug: "skycity-denizli",
    title: "Skycity Denizli",
    category: "konut",
    categoryLabel: "Konut Projesi",
    type: "Waterjet & Mermer Uygulama",
    location: "Denizli",
    year: 2020,
    material: ["Calacatta Mermer", "Bookmatch Plakalar"],
    scope:
      "Lobi ve genel alanlar için waterjet kesim özel desenli mermer uygulamaları.",
    summary:
      "Lobi ve genel alanlar için waterjet kesim özel desenli mermer uygulamaları. Karmaşık geometrik desenlerle prestijli giriş atmosferi.",
    cover: "/images/projects/proje-zorlu.webp",
    gallery: ["/images/projects/proje-rixos-cover.webp"],
    i18n: {
      en: {
        categoryLabel: "Residential",
        type: "Waterjet & Marble Application",
        material: ["Calacatta Marble", "Bookmatch Slabs"],
        scope:
          "Custom-pattern waterjet-cut marble applications for lobby and common areas.",
        summary:
          "Custom-pattern waterjet-cut marble for lobbies and common areas. A prestigious entrance atmosphere with intricate geometric patterns.",
      },
      de: {
        categoryLabel: "Wohnprojekt",
        type: "Wasserstrahl & Marmor",
        material: ["Calacatta Marmor", "Bookmatch-Platten"],
        scope:
          "Wasserstrahlgeschnittene Marmoranwendungen mit Spezialmustern für Lobby und Gemeinschaftsbereiche.",
        summary:
          "Spezialgemusterter, wasserstrahlgeschnittener Marmor für Lobby und Gemeinschaftsbereiche. Prestigeträchtige Eingangsatmosphäre mit komplexen geometrischen Mustern.",
      },
    },
  },
  {
    slug: "ahmet-hulusi-efendi-kulliyesi",
    title: "Ahmet Hulusi Efendi Külliyesi",
    category: "kamusal",
    categoryLabel: "Kamusal Yapı",
    type: "Bookmatch Mermer Kaplama",
    location: "Denizli",
    year: 2021,
    material: ["Bookmatch Mermer", "Beyaz Mermer"],
    scope:
      "Yönetici katları için bookmatch (kelebek) mermer duvar kaplamaları.",
    summary:
      "Yönetici katları için bookmatch kelebek desenli mermer duvar kaplamaları. Simetrik damar kurgusuyla mekana sanat eseri etkisi katan uygulama.",
    cover: "/images/projects/proje-adalet.webp",
    gallery: ["/images/projects/proje-rixos-3.webp"],
    i18n: {
      en: {
        title: "Ahmet Hulusi Efendi Complex",
        categoryLabel: "Public Building",
        type: "Bookmatch Marble Cladding",
        material: ["Bookmatch Marble", "White Marble"],
        scope:
          "Bookmatch (butterfly) marble wall cladding for executive floors.",
        summary:
          "Bookmatch butterfly-pattern marble wall cladding for executive floors. Symmetric vein composition adds an artwork-like effect to the space.",
      },
      de: {
        title: "Ahmet Hulusi Efendi Komplex",
        categoryLabel: "Öffentliches Gebäude",
        type: "Bookmatch-Marmorverkleidung",
        material: ["Bookmatch-Marmor", "Weißer Marmor"],
        scope:
          "Bookmatch- (Schmetterlings-) Marmorwandverkleidungen für Führungsetagen.",
        summary:
          "Bookmatch-Schmetterlingsmuster-Marmorwandverkleidungen für Führungsetagen. Symmetrische Maserungskomposition verleiht dem Raum einen Kunstwerkeffekt.",
      },
    },
  },
  {
    slug: "anemon-hotel-denizli",
    title: "Anemon Hotel Denizli",
    category: "oteller",
    categoryLabel: "Otel",
    type: "Mermer & SPA Uygulaması",
    location: "Denizli",
    year: 2019,
    material: ["Calacatta Mermer", "Travertino"],
    scope: "Banyo ve SPA alanları için tek parça Calacatta mermer uygulamaları.",
    summary:
      "Banyo ve SPA alanları için tek parça Calacatta mermer uygulamaları. Lüks otel deneyiminin hammaddesi olarak doğal taşın gücü.",
    cover: "/images/projects/proje-rixos-cover.webp",
    gallery: [
      "/images/projects/proje-four-seasons.webp",
      "/images/projects/proje-rixos-2.webp",
    ],
    i18n: {
      en: {
        categoryLabel: "Hotel",
        type: "Marble & SPA Application",
        material: ["Calacatta Marble", "Travertine"],
        scope:
          "Single-piece Calacatta marble applications for bathrooms and SPA areas.",
        summary:
          "Single-piece Calacatta marble for bathrooms and SPA areas. The power of natural stone as the raw material of luxury hotel experience.",
      },
      de: {
        categoryLabel: "Hotel",
        type: "Marmor & SPA-Anwendung",
        material: ["Calacatta-Marmor", "Travertin"],
        scope:
          "Einteilige Calacatta-Marmoranwendungen für Bäder und SPA-Bereiche.",
        summary:
          "Einteilige Calacatta-Marmor-Anwendungen für Bäder und SPA-Bereiche. Die Kraft von Naturstein als Rohstoff der Luxus-Hotelerfahrung.",
      },
    },
  },
];

// Helpers
export function localizedProject(
  project: Project,
  locale: Locale,
): ProjectTranslation {
  if (locale === "tr") {
    return project;
  }
  const o = project.i18n?.[locale];
  return {
    title: o?.title ?? project.title,
    categoryLabel: o?.categoryLabel ?? project.categoryLabel,
    type: o?.type ?? project.type,
    scope: o?.scope ?? project.scope,
    summary: o?.summary ?? project.summary,
    material: o?.material ?? project.material,
    area: o?.area ?? project.area,
  };
}

export function localizedCategoryLabel(
  slug: string,
  locale: Locale,
): string {
  const cat = projectCategories.find((c) => c.slug === slug);
  if (!cat) return slug;
  return cat.label[locale] ?? cat.label.tr;
}
