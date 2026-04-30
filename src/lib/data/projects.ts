export interface Project {
  slug: string;
  title: string;
  category:
    | "oteller"
    | "konut"
    | "ticari"
    | "kamusal"
    | "restoran-kafe"
    | "diger";
  categoryLabel: string;
  type: string;
  location: string;
  year: number;
  material: string[];
  area?: string;
  scope: string;
  summary: string;
  cover: string;
  gallery: string[];
}

export const projectCategories = [
  { slug: "all", label: "Tüm Projeler" },
  { slug: "oteller", label: "Oteller" },
  { slug: "konut", label: "Konut Projeleri" },
  { slug: "ticari", label: "Ticari Yapılar" },
  { slug: "kamusal", label: "Kamusal Yapılar" },
  { slug: "restoran-kafe", label: "Restoran & Kafe" },
  { slug: "diger", label: "Diğer" },
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
    gallery: [
      "/images/projects/proje-rixos-cover.webp",
    ],
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
    gallery: [
      "/images/projects/proje-rixos-3.webp",
    ],
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
  },
];
