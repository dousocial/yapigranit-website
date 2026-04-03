import type { Language } from "@/lib/i18n/translations";

export type BlogPost = {
  id: string;
  category: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  readTime: string;
  href: string;
};

type BlogPostTranslation = Omit<BlogPost, "id" | "image" | "href">;

type BlogPostData = {
  id: string;
  image: string;
  href: string;
  tr: BlogPostTranslation;
  de: BlogPostTranslation;
  en: BlogPostTranslation;
};

const blogPostsData: BlogPostData[] = [
  {
    id: "neo-deco",
    image: "https://i.pinimg.com/1200x/bf/5a/e4/bf5ae48388c40b355a64559cb8f750ad.jpg",
    href: "/koleksiyon/rehber/neo-deco-mermer-gorunumlu-porselen",
    tr: {
      category: "Dekorasyon Trendleri",
      title: "2026 Trend: Neo Deco & Mermer Görünümlü Porselen",
      subtitle: "Geleceğin Kodları",
      description: "Neo Deco akımı, sessiz lüks ve hiper-gerçekçi porselen yüzeylerle buluşuyor.",
      readTime: "7 dk okuma",
    },
    de: {
      category: "Dekorationstrends",
      title: "2026 Trend: Neo Deco & Porzellan in Marmor-Optik",
      subtitle: "Die Codes der Zukunft",
      description: "Die Neo-Deco-Bewegung trifft auf stillen Luxus und hyperrealistische Porzellanoberflächen.",
      readTime: "7 Min. Lesezeit",
    },
    en: {
      category: "Decoration Trends",
      title: "2026 Trend: Neo Deco & Marble-Look Porcelain",
      subtitle: "The Codes of the Future",
      description: "The Neo Deco movement meets silent luxury and hyper-realistic porcelain surfaces.",
      readTime: "7 min read",
    },
  },
  {
    id: "atolye-urun-fikirleri",
    image: "/images/m1.png",
    href: "/koleksiyon/rehber/atolye-urun-fikirleri",
    tr: {
      category: "Tasarım ve Üretim Fikirleri",
      title: "Atölye Ürün Fikirleri: Mermer & Porselen",
      subtitle: "Dekoratif Ürün Seçkisi",
      description: "Atölye üretiminde öne çıkan dekoratif ürün ve hediye konseptleri.",
      readTime: "8 dk okuma",
    },
    de: {
      category: "Design- und Produktionsideen",
      title: "Atelier-Produktideen: Marmor & Porzellan",
      subtitle: "Dekoratives Produktsortiment",
      description: "Herausragende Dekorationsprodukte und Geschenkkonzepte aus der Atelierproduktion.",
      readTime: "8 Min. Lesezeit",
    },
    en: {
      category: "Design & Production Ideas",
      title: "Atelier Product Ideas: Marble & Porcelain",
      subtitle: "Decorative Product Selection",
      description: "Outstanding decorative products and gift concepts from atelier production.",
      readTime: "8 min read",
    },
  },
  {
    id: "kombinasyon-fikirleri",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=2000&auto=format&fit=crop",
    href: "/koleksiyon/rehber/mermer-porselen-kombinasyon-tasarim-fikirleri",
    tr: {
      category: "İç Mimari ve Dekorasyon",
      title: "Mermer ve Porselen Kombinasyonuyla Tasarım Fikirleri",
      subtitle: "Zıtlıkların Uyumu",
      description: "Mermerin doğal şıklığını porselenin teknolojisiyle birleştiren mekan önerileri.",
      readTime: "8 dk okuma",
    },
    de: {
      category: "Innenarchitektur & Dekoration",
      title: "Designideen mit Marmor- und Porzellan-Kombination",
      subtitle: "Harmonie der Gegensätze",
      description: "Raumvorschläge, die die natürliche Eleganz von Marmor mit der Technologie von Porzellan verbinden.",
      readTime: "8 Min. Lesezeit",
    },
    en: {
      category: "Interior Design & Decoration",
      title: "Design Ideas with Marble and Porcelain Combination",
      subtitle: "Harmony of Contrasts",
      description: "Space proposals combining the natural elegance of marble with the technology of porcelain.",
      readTime: "8 min read",
    },
  },
  {
    id: "bookmatch",
    image: "https://images.unsplash.com/photo-1618221381711-42ca8ab6e908?q=80&w=2000&auto=format&fit=crop",
    href: "/koleksiyon/rehber/bookmatch-doganin-senfonisi",
    tr: {
      category: "İç Mimari ve Tasarım",
      title: "Bookmatch: Doğanın Senfonisi",
      subtitle: "Kelebek Kanadı Etkisi",
      description: "Simetrik damar kurgusuyla duvarlarda dramatik bir sanat etkisi.",
      readTime: "6 dk okuma",
    },
    de: {
      category: "Innenarchitektur & Design",
      title: "Bookmatch: Sinfonie der Natur",
      subtitle: "Der Schmetterlingsflügel-Effekt",
      description: "Ein dramatischer Kunsteffekt an Wänden durch symmetrische Aderstruktur.",
      readTime: "6 Min. Lesezeit",
    },
    en: {
      category: "Interior Design",
      title: "Bookmatch: Symphony of Nature",
      subtitle: "The Butterfly Wing Effect",
      description: "A dramatic art effect on walls through symmetric vein composition.",
      readTime: "6 min read",
    },
  },
  {
    id: "mimaride-kullanim",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2000&auto=format&fit=crop",
    href: "/koleksiyon/rehber/mermer-porselenin-mimaride-kullanimi",
    tr: {
      category: "Mimari ve İç Mekan Tasarımı",
      title: "Mermer ve Porselenin Mimaride Kullanımı",
      subtitle: "Malzeme Stratejisi",
      description: "Lüks projelerde mermer ve porselenin mimariye kattığı prestij ve performans.",
      readTime: "9 dk okuma",
    },
    de: {
      category: "Architektur & Innenraumgestaltung",
      title: "Marmor und Porzellan in der Architektur",
      subtitle: "Materialstrategie",
      description: "Prestige und Leistung, die Marmor und Porzellan in Luxusprojekten zur Architektur beitragen.",
      readTime: "9 Min. Lesezeit",
    },
    en: {
      category: "Architecture & Interior Design",
      title: "Use of Marble and Porcelain in Architecture",
      subtitle: "Material Strategy",
      description: "The prestige and performance that marble and porcelain contribute to architecture in luxury projects.",
      readTime: "9 min read",
    },
  },
  {
    id: "porselen-desenleme",
    image: "https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?q=80&w=2000&auto=format&fit=crop",
    href: "/koleksiyon/rehber/porselen-desenleme-sanati-ve-teknikleri",
    tr: {
      category: "Sanat ve Zanaat",
      title: "Porselen Desenleme Sanatı ve Teknikleri",
      subtitle: "Renklerin Ateşle Dansı",
      description: "Porselen yüzeylerde desen, motif ve renk uygulamalarının tarihsel teknikleri.",
      readTime: "6 dk okuma",
    },
    de: {
      category: "Kunst & Handwerk",
      title: "Die Kunst der Porzellangestaltung und ihre Techniken",
      subtitle: "Der Tanz der Farben mit dem Feuer",
      description: "Historische Techniken der Muster-, Motiv- und Farbanwendungen auf Porzellanoberflächen.",
      readTime: "6 Min. Lesezeit",
    },
    en: {
      category: "Art & Craft",
      title: "The Art of Porcelain Design and Its Techniques",
      subtitle: "The Dance of Colors with Fire",
      description: "Historical techniques of pattern, motif and color applications on porcelain surfaces.",
      readTime: "6 min read",
    },
  },
  {
    id: "ozel-tasarim",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2000&auto=format&fit=crop",
    href: "/koleksiyon/rehber/musteri-taleplerine-gore-ozel-tasarim-surecleri",
    tr: {
      category: "Tasarım ve İşletme Yönetimi",
      title: "Müşteri Taleplerine Göre Özel Tasarım Süreçleri",
      subtitle: "Doğru Analiz, Kusursuz Üretim",
      description: "Müşteri ihtiyaçlarını doğru analiz ederek özel tasarım süreçlerini yönetme.",
      readTime: "9 dk okuma",
    },
    de: {
      category: "Design & Betriebsführung",
      title: "Individuelle Designprozesse nach Kundenwunsch",
      subtitle: "Präzise Analyse, makellose Produktion",
      description: "Steuerung individueller Designprozesse durch präzise Analyse der Kundenbedürfnisse.",
      readTime: "9 Min. Lesezeit",
    },
    en: {
      category: "Design & Business Management",
      title: "Custom Design Processes According to Customer Requests",
      subtitle: "Accurate Analysis, Flawless Production",
      description: "Managing custom design processes by accurately analyzing customer needs.",
      readTime: "9 min read",
    },
  },
  {
    id: "waterfall",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2000&auto=format&fit=crop",
    href: "/koleksiyon/rehber/waterfall-tasarim-ve-akiskan-yuzeyler",
    tr: {
      category: "İç Mimari ve Dekorasyon",
      title: "Waterfall Tasarım: Akışkan Yüzeyler",
      subtitle: "Kesintisiz Form",
      description: "Tezgahtan zemine akan tek parça yüzeylerle modern ada tasarımı.",
      readTime: "6 dk okuma",
    },
    de: {
      category: "Innenarchitektur & Dekoration",
      title: "Waterfall-Design: Fließende Oberflächen",
      subtitle: "Unterbrechungsfreie Form",
      description: "Modernes Inseldesign mit einteiligen Oberflächen, die von der Arbeitsplatte bis zum Boden fließen.",
      readTime: "6 Min. Lesezeit",
    },
    en: {
      category: "Interior Design & Decoration",
      title: "Waterfall Design: Fluid Surfaces",
      subtitle: "Uninterrupted Form",
      description: "Modern island design with one-piece surfaces flowing from the countertop to the floor.",
      readTime: "6 min read",
    },
  },
  {
    id: "mermer-teknikleri",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000&auto=format&fit=crop",
    href: "/koleksiyon/rehber/mermer-tasarim-teknikleri-isleme-yontemleri",
    tr: {
      category: "Doğal Taş ve Mimari",
      title: "Mermer Tasarım Teknikleri ve İşleme Yöntemleri",
      subtitle: "Zanaat ve Teknoloji",
      description: "Ham bloktan bitmiş ürüne mermer işleme teknikleri ve modern makineler.",
      readTime: "7 dk okuma",
    },
    de: {
      category: "Naturstein & Architektur",
      title: "Marmor-Designtechniken und Bearbeitungsmethoden",
      subtitle: "Handwerk und Technologie",
      description: "Marmor-Bearbeitungstechniken und moderne Maschinen vom Rohblock bis zum fertigen Produkt.",
      readTime: "7 Min. Lesezeit",
    },
    en: {
      category: "Natural Stone & Architecture",
      title: "Marble Design Techniques and Processing Methods",
      subtitle: "Craft and Technology",
      description: "Marble processing techniques and modern machines from raw block to finished product.",
      readTime: "7 min read",
    },
  },
  {
    id: "malzeme-ozellikleri",
    image: "https://images.unsplash.com/photo-1574359411659-15573a27fd0c?q=80&w=2000&auto=format&fit=crop",
    href: "/koleksiyon/rehber/mermer-ve-porselen-malzemelerinin-ozellikleri",
    tr: {
      category: "Malzeme Rehberi",
      title: "Mermer ve Porselen Malzemelerinin Özellikleri",
      subtitle: "Karşılaştırmalı Bakış",
      description: "Dayanıklılık, bakım ve kullanım senaryoları için hızlı karşılaştırma.",
      readTime: "8 dk okuma",
    },
    de: {
      category: "Materialratgeber",
      title: "Eigenschaften von Marmor und Porzellan",
      subtitle: "Vergleichender Überblick",
      description: "Schneller Vergleich für Haltbarkeit, Pflege und Einsatzszenarien.",
      readTime: "8 Min. Lesezeit",
    },
    en: {
      category: "Material Guide",
      title: "Properties of Marble and Porcelain Materials",
      subtitle: "Comparative Overview",
      description: "Quick comparison for durability, maintenance and usage scenarios.",
      readTime: "8 min read",
    },
  },
  {
    id: "mermer-vs-porselen",
    image: "https://biesso.com/wp-content/uploads/2024/04/Porselen-vs-mermer-yemek-masasi.jpg",
    href: "/koleksiyon/rehber/mermer-vs-porselen",
    tr: {
      category: "Seçim Rehberi",
      title: "Mermer vs Porselen",
      subtitle: "Karşılaştırmalı Analiz",
      description: "Estetik, dayanıklılık ve fiyat ekseninde hangisi sizin için doğru seçim?",
      readTime: "6 dk okuma",
    },
    de: {
      category: "Auswahlratgeber",
      title: "Marmor vs. Porzellan",
      subtitle: "Vergleichende Analyse",
      description: "Welche Wahl ist die richtige für Sie? Ästhetik, Haltbarkeit und Preis im Vergleich.",
      readTime: "6 Min. Lesezeit",
    },
    en: {
      category: "Selection Guide",
      title: "Marble vs Porcelain",
      subtitle: "Comparative Analysis",
      description: "Which is the right choice for you? Comparing aesthetics, durability and price.",
      readTime: "6 min read",
    },
  },
  {
    id: "yuzey-bakim",
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=2000&auto=format&fit=crop",
    href: "/koleksiyon/rehber/yuzey-bakim-rehberi",
    tr: {
      category: "Bakım & Koruma",
      title: "Yüzey Bakım Rehberi",
      subtitle: "İlk Günkü Işıltı",
      description: "Mermer ve porselen yüzeyleri iz bırakmadan temizlemek için profesyonel ipuçları.",
      readTime: "7 dk okuma",
    },
    de: {
      category: "Pflege & Schutz",
      title: "Oberflächenpflegeratgeber",
      subtitle: "Der Glanz wie am ersten Tag",
      description: "Professionelle Tipps zur spurfreien Reinigung von Marmor- und Porzellanoberflächen.",
      readTime: "7 Min. Lesezeit",
    },
    en: {
      category: "Care & Protection",
      title: "Surface Care Guide",
      subtitle: "The Shine of the First Day",
      description: "Professional tips for cleaning marble and porcelain surfaces without leaving marks.",
      readTime: "7 min read",
    },
  },
  {
    id: "surdurulebilir-uretim",
    image: "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?q=80&w=2000&auto=format&fit=crop",
    href: "/koleksiyon/rehber/mermer-atolyesinde-surdurulebilir-uretim-atik-yonetimi",
    tr: {
      category: "Sürdürülebilirlik ve Endüstri",
      title: "Mermer Atölyesinde Sürdürülebilir Üretim ve Atık Yönetimi",
      subtitle: "Yeşil Üretim Merkezleri",
      description: "Atıkların geri kazanımı ve sürdürülebilir üretim pratikleriyle verimlilik artırma.",
      readTime: "7 dk okuma",
    },
    de: {
      category: "Nachhaltigkeit & Industrie",
      title: "Nachhaltige Produktion und Abfallmanagement im Marmoratelier",
      subtitle: "Grüne Produktionszentren",
      description: "Effizienzsteigerung durch Abfallrückgewinnung und nachhaltige Produktionspraktiken.",
      readTime: "7 Min. Lesezeit",
    },
    en: {
      category: "Sustainability & Industry",
      title: "Sustainable Production and Waste Management in the Marble Workshop",
      subtitle: "Green Production Centers",
      description: "Increasing efficiency through waste recovery and sustainable production practices.",
      readTime: "7 min read",
    },
  },
  {
    id: "pazarlama-stratejileri",
    image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=2000&auto=format&fit=crop",
    href: "/koleksiyon/rehber/mermer-porselen-urunlerde-pazarlama-stratejileri",
    tr: {
      category: "Dijital Pazarlama ve Sektörel Büyüme",
      title: "Mermer & Porselen Ürünlerde Pazarlama Stratejileri",
      subtitle: "Dijital Görünürlük",
      description: "Mimar ve proje ofislerine ulaşmak için dijital pazarlamada öne çıkan taktikler.",
      readTime: "9 dk okuma",
    },
    de: {
      category: "Digitales Marketing & Branchenwachstum",
      title: "Marketingstrategien für Marmor & Porzellan-Produkte",
      subtitle: "Digitale Sichtbarkeit",
      description: "Führende Taktiken im digitalen Marketing zur Erreichung von Architektur- und Projektbüros.",
      readTime: "9 Min. Lesezeit",
    },
    en: {
      category: "Digital Marketing & Industry Growth",
      title: "Marketing Strategies for Marble & Porcelain Products",
      subtitle: "Digital Visibility",
      description: "Leading tactics in digital marketing for reaching architecture and project offices.",
      readTime: "9 min read",
    },
  },
];

export function getBlogPosts(lang: Language): BlogPost[] {
  return blogPostsData.map((post) => ({
    id: post.id,
    image: post.image,
    href: post.href,
    ...post[lang],
  }));
}

// Legacy export for backward compatibility
export const blogPosts: BlogPost[] = getBlogPosts("tr");
