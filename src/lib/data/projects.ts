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
    cover:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1486718448742-163732cd1544?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1604147495798-57beb5d6af73?auto=format&fit=crop&w=1600&q=80",
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
    cover:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1600&q=80",
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
    cover:
      "https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1604147706283-d7119b5b822c?auto=format&fit=crop&w=1600&q=80",
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
    cover:
      "https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=1600&q=80",
    ],
  },
];
