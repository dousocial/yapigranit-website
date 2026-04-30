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
    slug: "rixos-tersane-istanbul",
    title: "Rixos Tersane İstanbul",
    category: "oteller",
    categoryLabel: "Otel",
    type: "Mermer Uygulama",
    location: "İstanbul",
    year: 2024,
    material: ["Calacatta Gold", "Nero Marquina"],
    area: "12.500 m²",
    scope: "Lobi, banyo ve ortak alanlarda mermer uygulama",
    summary:
      "Premium mermer çeşitlerinin ustalıkla bir araya getirildiği prestijli otel projesi.",
    cover:
      "https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=1600&q=80",
    ],
  },
  {
    slug: "four-seasons-hotel-bosphorus",
    title: "Four Seasons Hotel Bosphorus",
    category: "oteller",
    categoryLabel: "Otel",
    type: "Porselen Yüzey Uygulama",
    location: "İstanbul",
    year: 2024,
    material: ["Statuario Porselen", "Calacatta Porselen"],
    area: "8.200 m²",
    scope: "Banyo ve duş alanlarında porselen yüzey uygulaması",
    summary:
      "Boğaz manzaralı butik suitlerde, büyük ebatlı porselen yüzeylerle modern lüks dokunuş.",
    cover:
      "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=1200&q=80",
    gallery: [],
  },
  {
    slug: "zorlu-center-residences",
    title: "Zorlu Center Residences",
    category: "konut",
    categoryLabel: "Konut Projesi",
    type: "Özel Mermer Uygulama",
    location: "İstanbul",
    year: 2023,
    material: ["Travertino", "Crema Marfil"],
    area: "15.800 m²",
    scope: "Konut girişleri, lobi ve ortak alan mermer uygulaması",
    summary:
      "Zorlu Center bünyesindeki rezidans projesinde özel kesim mermer yüzeyler.",
    cover:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80",
    gallery: [],
  },
  {
    slug: "vadi-ofis-projesi",
    title: "Vadi Ofis Projesi",
    category: "ticari",
    categoryLabel: "Ticari Yapı",
    type: "Granit Tedarik",
    location: "İstanbul",
    year: 2023,
    material: ["Black Galaxy Granit", "Steel Grey Granit"],
    area: "6.400 m²",
    scope: "Ofis lobisi ve giriş alanlarında granit zemin",
    summary:
      "Yüksek trafiğe sahip ofis kompleksinde dayanıklı granit zemin uygulaması.",
    cover:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
    gallery: [],
  },
  {
    slug: "maslak-no1-plaza",
    title: "Maslak No:1 Plaza",
    category: "ticari",
    categoryLabel: "Ticari Yapı",
    type: "Mermer & Porselen",
    location: "İstanbul",
    year: 2023,
    material: ["Bianco Carrara", "Calacatta Porselen"],
    scope: "Lobi, asansör holleri ve ortak banyo uygulaması",
    summary:
      "Maslak siluetine yakışır prestijli kurumsal kompleks için kombine yüzey çözümleri.",
    cover:
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80",
    gallery: [],
  },
  {
    slug: "arkestra-restaurant",
    title: "Arkestra Restaurant",
    category: "restoran-kafe",
    categoryLabel: "Restoran & Kafe",
    type: "Özel Mermer Uygulama",
    location: "İstanbul",
    year: 2024,
    material: ["Verde Guatemala", "Nero Marquina"],
    scope: "Bar tezgahı, masa ve duvar yüzeyleri",
    summary:
      "Sofistike fine-dining restoranında karakteristik koyu mermer yüzeylerle teatral atmosfer.",
    cover:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80",
    gallery: [],
  },
  {
    slug: "istanbul-adalet-sarayi",
    title: "İstanbul Adalet Sarayı",
    category: "kamusal",
    categoryLabel: "Kamusal Yapı",
    type: "Geniş Ölçekli Granit",
    location: "İstanbul",
    year: 2022,
    material: ["G654 Granit", "Beyaz Mermer"],
    area: "32.000 m²",
    scope: "Cephe ve iç mekan kaplama uygulaması",
    summary:
      "Geniş ölçekli kamusal yapıda dayanıklılığı ve estetiği bir araya getiren uygulama.",
    cover:
      "https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=1200&q=80",
    gallery: [],
  },
  {
    slug: "bodrum-yalikavak-villa",
    title: "Bodrum Yalıkavak Villa",
    category: "konut",
    categoryLabel: "Konut Projesi",
    type: "Özel Yüzeyler",
    location: "Bodrum",
    year: 2024,
    material: ["Travertino Romano", "Calacatta Vagli"],
    scope: "Mutfak, banyo ve havuz çevresi mermer uygulaması",
    summary:
      "Egenin doğasıyla bütünleşen özel villa için sıcak tonlu doğal yüzeyler.",
    cover:
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=80",
    gallery: [],
  },
];
