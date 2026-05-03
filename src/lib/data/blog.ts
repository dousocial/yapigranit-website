import type { Locale } from "@/i18n/routing";

export interface BlogPostTranslation {
  title: string;
  subtitle?: string;
  excerpt: string;
  categoryLabel: string;
}

export interface BlogPost extends BlogPostTranslation {
  slug: string;
  category:
    | "trendler"
    | "tasarim"
    | "ic-mimari"
    | "malzeme"
    | "sanat-zanaat"
    | "yonetim"
    | "bakim"
    | "surdurulebilirlik"
    | "pazarlama";
  date: string;
  readMinutes: number;
  cover: string;
  featured?: boolean;
  i18n?: Partial<Record<Exclude<Locale, "tr">, Partial<BlogPostTranslation>>>;
}

export const blogCategories = [
  {
    slug: "all",
    label: { tr: "Tüm Yazılar", en: "All Posts", de: "Alle Beiträge" },
  },
  { slug: "trendler", label: { tr: "Trendler", en: "Trends", de: "Trends" } },
  { slug: "tasarim", label: { tr: "Tasarım", en: "Design", de: "Design" } },
  {
    slug: "ic-mimari",
    label: {
      tr: "İç Mimari",
      en: "Interior Architecture",
      de: "Innenarchitektur",
    },
  },
  {
    slug: "malzeme",
    label: {
      tr: "Malzeme Rehberi",
      en: "Material Guide",
      de: "Materialratgeber",
    },
  },
  {
    slug: "sanat-zanaat",
    label: {
      tr: "Sanat & Zanaat",
      en: "Art & Craft",
      de: "Kunst & Handwerk",
    },
  },
  {
    slug: "bakim",
    label: {
      tr: "Bakım & Koruma",
      en: "Care & Protection",
      de: "Pflege & Schutz",
    },
  },
  {
    slug: "surdurulebilirlik",
    label: {
      tr: "Sürdürülebilirlik",
      en: "Sustainability",
      de: "Nachhaltigkeit",
    },
  },
] as const;

export const blogPosts: BlogPost[] = [
  {
    slug: "neo-deco-mermer-gorunumlu-porselen-2026",
    title: "2026 Trend: Neo Deco & Mermer Görünümlü Porselen",
    subtitle: "Geleceğin Kodları",
    excerpt:
      "Neo Deco akımı, sessiz lüks ve hiper-gerçekçi porselen yüzeylerle buluşuyor. Mermer estetiğinin dayanıklı versiyonuyla mekanlarınıza zamansız bir karakter kazandırın.",
    category: "trendler",
    categoryLabel: "Dekorasyon Trendleri",
    date: "2026-04-12",
    readMinutes: 7,
    cover: "/images/blog/neo-deco-mermer-gorunumlu-porselen-2026/hero.webp",
    featured: true,
    i18n: {
      en: {
        title: "2026 Trend: Neo Deco & Marble-look Porcelain",
        subtitle: "Codes of the Future",
        excerpt:
          "Neo Deco meets quiet luxury and hyper-realistic porcelain surfaces. Bring timeless character to your spaces with the durable version of marble aesthetics.",
        categoryLabel: "Decoration Trends",
      },
      de: {
        title: "2026 Trend: Neo Deco & Marmoroptik-Porzellan",
        subtitle: "Codes der Zukunft",
        excerpt:
          "Neo Deco trifft auf stillen Luxus und hyperrealistische Porzellanoberflächen. Verleihen Sie Ihren Räumen mit der haltbaren Version der Marmorästhetik einen zeitlosen Charakter.",
        categoryLabel: "Dekorationstrends",
      },
    },
  },
  {
    slug: "atolye-urun-fikirleri-mermer-porselen",
    title: "Atölye Ürün Fikirleri: Mermer & Porselen",
    subtitle: "Dekoratif Ürün Seçkisi",
    excerpt:
      "Atölye üretiminde öne çıkan dekoratif ürün ve hediye konseptleri. Küçük ölçekli üretimlerle yüksek katma değerli ürün koleksiyonları oluşturma rehberi.",
    category: "tasarim",
    categoryLabel: "Tasarım & Üretim",
    date: "2026-04-08",
    readMinutes: 8,
    cover: "/images/blog/atolye-urun-fikirleri-mermer-porselen/hero.webp",
    i18n: {
      en: {
        title: "Workshop Product Ideas: Marble & Porcelain",
        subtitle: "Decorative Product Selection",
        excerpt:
          "Decorative product and gift concepts standing out in workshop production. Guide to building high-value-added collections with small-scale production.",
        categoryLabel: "Design & Production",
      },
      de: {
        title: "Werkstatt-Produktideen: Marmor & Porzellan",
        subtitle: "Dekorative Produktauswahl",
        excerpt:
          "Hervorstechende Dekorations- und Geschenkkonzepte in der Werkstattproduktion. Leitfaden zum Aufbau hochwertiger Kollektionen in Kleinstserien.",
        categoryLabel: "Design & Produktion",
      },
    },
  },
  {
    slug: "mermer-porselen-kombinasyonu-tasarim-fikirleri",
    title: "Mermer ve Porselen Kombinasyonuyla Tasarım Fikirleri",
    subtitle: "Zıtlıkların Uyumu",
    excerpt:
      "Mermerin doğal şıklığını porselenin teknolojisiyle birleştiren mekan önerileri. İki malzemenin güçlü yönlerinin nasıl bir araya getirileceğine dair detaylı rehber.",
    category: "ic-mimari",
    categoryLabel: "İç Mimari & Dekorasyon",
    date: "2026-04-03",
    readMinutes: 8,
    cover: "/images/blog/mermer-porselen-kombinasyonu-tasarim-fikirleri/hero.webp",
    i18n: {
      en: {
        title: "Design Ideas with Marble and Porcelain Combinations",
        subtitle: "Harmony of Contrasts",
        excerpt:
          "Space suggestions combining marble's natural elegance with porcelain technology. A detailed guide on bringing together the strengths of two materials.",
        categoryLabel: "Interior Architecture & Decoration",
      },
      de: {
        title: "Designideen mit Marmor- und Porzellankombinationen",
        subtitle: "Harmonie der Kontraste",
        excerpt:
          "Raumvorschläge, die die natürliche Eleganz von Marmor mit Porzellantechnologie kombinieren. Ein detaillierter Leitfaden zur Verbindung der Stärken zweier Materialien.",
        categoryLabel: "Innenarchitektur & Dekoration",
      },
    },
  },
  {
    slug: "bookmatch-doganin-senfonisi",
    title: "Bookmatch: Doğanın Senfonisi",
    subtitle: "Kelebek Kanadı Etkisi",
    excerpt:
      "Simetrik damar kurgusuyla duvarlarda dramatik bir sanat etkisi. Bookmatch tekniği nedir, hangi mermerlerle uygulanır, projeye nasıl entegre edilir?",
    category: "ic-mimari",
    categoryLabel: "İç Mimari & Tasarım",
    date: "2026-03-28",
    readMinutes: 6,
    cover: "/images/blog/bookmatch-doganin-senfonisi/hero.webp",
    i18n: {
      en: {
        title: "Bookmatch: Nature's Symphony",
        subtitle: "Butterfly Wing Effect",
        excerpt:
          "A dramatic artistic effect on walls through symmetric vein composition. What is bookmatch technique, with which marbles is it applied, how is it integrated into a project?",
        categoryLabel: "Interior Architecture & Design",
      },
      de: {
        title: "Bookmatch: Sinfonie der Natur",
        subtitle: "Schmetterlingsflügel-Effekt",
        excerpt:
          "Eine dramatische künstlerische Wirkung an Wänden durch symmetrische Maserungskomposition. Was ist die Bookmatch-Technik, mit welchen Marmoren wird sie angewendet?",
        categoryLabel: "Innenarchitektur & Design",
      },
    },
  },
  {
    slug: "mermer-porselenin-mimaride-kullanimi",
    title: "Mermer ve Porselenin Mimaride Kullanımı",
    subtitle: "Malzeme Stratejisi",
    excerpt:
      "Lüks projelerde mermer ve porselenin mimariye kattığı prestij ve performans. Otel, rezidans ve ticari yapılar için stratejik malzeme tercihleri.",
    category: "ic-mimari",
    categoryLabel: "Mimari & İç Mekan",
    date: "2026-03-22",
    readMinutes: 9,
    cover: "/images/blog/mermer-porselenin-mimaride-kullanimi/hero.webp",
    i18n: {
      en: {
        title: "Marble and Porcelain in Architecture",
        subtitle: "Material Strategy",
        excerpt:
          "The prestige and performance marble and porcelain bring to luxury projects. Strategic material choices for hotels, residences and commercial buildings.",
        categoryLabel: "Architecture & Interior",
      },
      de: {
        title: "Marmor und Porzellan in der Architektur",
        subtitle: "Materialstrategie",
        excerpt:
          "Prestige und Leistung, die Marmor und Porzellan Luxusprojekten verleihen. Strategische Materialwahl für Hotels, Residenzen und Gewerbebauten.",
        categoryLabel: "Architektur & Innenraum",
      },
    },
  },
  {
    slug: "porselen-desenleme-sanati-teknikleri",
    title: "Porselen Desenleme Sanatı ve Teknikleri",
    subtitle: "Renklerin Ateşle Dansı",
    excerpt:
      "Porselen yüzeylerde desen, motif ve renk uygulamalarının tarihsel teknikleri. Geleneksel sanattan modern üretime uzanan dönüşüm.",
    category: "sanat-zanaat",
    categoryLabel: "Sanat & Zanaat",
    date: "2026-03-18",
    readMinutes: 6,
    cover: "/images/blog/porselen-desenleme-sanati-teknikleri/hero.webp",
    i18n: {
      en: {
        title: "The Art and Techniques of Porcelain Patterning",
        subtitle: "The Dance of Colors with Fire",
        excerpt:
          "Historical techniques of pattern, motif and color applications on porcelain surfaces. The transformation from traditional art to modern production.",
        categoryLabel: "Art & Craft",
      },
      de: {
        title: "Die Kunst und Techniken der Porzellanmusterung",
        subtitle: "Tanz der Farben mit Feuer",
        excerpt:
          "Historische Techniken der Muster-, Motiv- und Farbanwendungen auf Porzellanoberflächen. Die Transformation von traditioneller Kunst zur modernen Produktion.",
        categoryLabel: "Kunst & Handwerk",
      },
    },
  },
  {
    slug: "musteri-talepleri-ozel-tasarim-surecleri",
    title: "Müşteri Taleplerine Göre Özel Tasarım Süreçleri",
    subtitle: "Doğru Analiz, Kusursuz Üretim",
    excerpt:
      "Müşteri ihtiyaçlarını doğru analiz ederek özel tasarım süreçlerini yönetme. Brief'ten üretime geçiş aşamasında dikkat edilmesi gerekenler.",
    category: "yonetim",
    categoryLabel: "Tasarım & İşletme",
    date: "2026-03-12",
    readMinutes: 9,
    cover: "/images/blog/musteri-talepleri-ozel-tasarim-surecleri/hero.webp",
    i18n: {
      en: {
        title: "Custom Design Processes Based on Customer Requests",
        subtitle: "Right Analysis, Perfect Production",
        excerpt:
          "Managing custom design processes by accurately analyzing customer needs. What to consider in the transition from brief to production.",
        categoryLabel: "Design & Management",
      },
      de: {
        title: "Maßgeschneiderte Designprozesse nach Kundenanfragen",
        subtitle: "Richtige Analyse, perfekte Produktion",
        excerpt:
          "Maßgeschneiderte Designprozesse durch genaue Analyse der Kundenbedürfnisse verwalten. Was beim Übergang vom Briefing zur Produktion zu beachten ist.",
        categoryLabel: "Design & Management",
      },
    },
  },
  {
    slug: "waterfall-tasarim-akiskan-yuzeyler",
    title: "Waterfall Tasarım: Akışkan Yüzeyler",
    subtitle: "Kesintisiz Form",
    excerpt:
      "Tezgahtan zemine akan tek parça yüzeylerle modern ada tasarımı. Waterfall tekniğinin uygulama detayları ve estetik avantajları.",
    category: "ic-mimari",
    categoryLabel: "İç Mimari & Dekorasyon",
    date: "2026-03-07",
    readMinutes: 6,
    cover: "/images/blog/waterfall-tasarim-akiskan-yuzeyler/hero.webp",
    i18n: {
      en: {
        title: "Waterfall Design: Flowing Surfaces",
        subtitle: "Uninterrupted Form",
        excerpt:
          "Modern island design with single-piece surfaces flowing from countertop to floor. Application details and aesthetic advantages of the waterfall technique.",
        categoryLabel: "Interior Architecture & Decoration",
      },
      de: {
        title: "Waterfall-Design: Fließende Oberflächen",
        subtitle: "Ununterbrochene Form",
        excerpt:
          "Modernes Inseldesign mit einteiligen Oberflächen, die von der Arbeitsplatte bis zum Boden fließen. Anwendungsdetails und ästhetische Vorteile der Waterfall-Technik.",
        categoryLabel: "Innenarchitektur & Dekoration",
      },
    },
  },
  {
    slug: "mermer-tasarim-teknikleri-isleme-yontemleri",
    title: "Mermer Tasarım Teknikleri ve İşleme Yöntemleri",
    subtitle: "Zanaat ve Teknoloji",
    excerpt:
      "Ham bloktan bitmiş ürüne mermer işleme teknikleri ve modern makineler. 5 Eksen CNC, Waterjet ve Bridge Saw teknolojilerinin atölyedeki rolü.",
    category: "malzeme",
    categoryLabel: "Doğal Taş & Mimari",
    date: "2026-03-02",
    readMinutes: 7,
    cover: "/images/blog/mermer-tasarim-teknikleri-isleme-yontemleri/hero.webp",
    i18n: {
      en: {
        title: "Marble Design Techniques and Processing Methods",
        subtitle: "Craft and Technology",
        excerpt:
          "Marble processing techniques from raw block to finished product, and modern machinery. The role of 5-Axis CNC, Waterjet and Bridge Saw technologies in the workshop.",
        categoryLabel: "Natural Stone & Architecture",
      },
      de: {
        title: "Marmor-Designtechniken und Bearbeitungsmethoden",
        subtitle: "Handwerk und Technologie",
        excerpt:
          "Marmorbearbeitungstechniken vom Rohblock zum fertigen Produkt sowie moderne Maschinen. Die Rolle der 5-Achs-CNC-, Wasserstrahl- und Brückensägentechnologien.",
        categoryLabel: "Naturstein & Architektur",
      },
    },
  },
  {
    slug: "mermer-porselen-malzemelerinin-ozellikleri",
    title: "Mermer ve Porselen Malzemelerinin Özellikleri",
    subtitle: "Karşılaştırmalı Bakış",
    excerpt:
      "Dayanıklılık, bakım ve kullanım senaryoları için hızlı karşılaştırma. Hangi malzeme hangi kullanıma daha uygun? Detaylı teknik analiz.",
    category: "malzeme",
    categoryLabel: "Malzeme Rehberi",
    date: "2026-02-25",
    readMinutes: 8,
    cover: "/images/blog/mermer-porselen-malzemelerinin-ozellikleri/hero.webp",
    i18n: {
      en: {
        title: "Properties of Marble and Porcelain Materials",
        subtitle: "Comparative View",
        excerpt:
          "Quick comparison for durability, maintenance and use cases. Which material suits which use better? Detailed technical analysis.",
        categoryLabel: "Material Guide",
      },
      de: {
        title: "Eigenschaften von Marmor- und Porzellanmaterialien",
        subtitle: "Vergleichende Betrachtung",
        excerpt:
          "Schneller Vergleich für Haltbarkeit, Pflege und Einsatzszenarien. Welches Material eignet sich besser für welche Verwendung? Detaillierte technische Analyse.",
        categoryLabel: "Materialratgeber",
      },
    },
  },
  {
    slug: "mermer-vs-porselen",
    title: "Mermer vs Porselen",
    subtitle: "Karşılaştırmalı Analiz",
    excerpt:
      "Estetik, dayanıklılık ve fiyat ekseninde hangisi sizin için doğru seçim? Mutfak ve banyo tezgahları için pratik karar rehberi.",
    category: "malzeme",
    categoryLabel: "Seçim Rehberi",
    date: "2026-02-18",
    readMinutes: 6,
    cover: "/images/blog/mermer-vs-porselen/hero.webp",
    i18n: {
      en: {
        title: "Marble vs Porcelain",
        subtitle: "Comparative Analysis",
        excerpt:
          "Which is the right choice for you on the axis of aesthetics, durability and price? A practical decision guide for kitchen and bathroom countertops.",
        categoryLabel: "Selection Guide",
      },
      de: {
        title: "Marmor vs Porzellan",
        subtitle: "Vergleichende Analyse",
        excerpt:
          "Welche ist die richtige Wahl für Sie in Sachen Ästhetik, Haltbarkeit und Preis? Praktischer Entscheidungsleitfaden für Küchen- und Badarbeitsplatten.",
        categoryLabel: "Auswahlratgeber",
      },
    },
  },
  {
    slug: "yuzey-bakim-rehberi",
    title: "Yüzey Bakım Rehberi",
    subtitle: "İlk Günkü Işıltı",
    excerpt:
      "Mermer ve porselen yüzeyleri iz bırakmadan temizlemek için profesyonel ipuçları. Günlük bakım, leke giderme ve uzun vadeli koruma yöntemleri.",
    category: "bakim",
    categoryLabel: "Bakım & Koruma",
    date: "2026-02-12",
    readMinutes: 7,
    cover: "/images/blog/yuzey-bakim-rehberi/hero.webp",
    i18n: {
      en: {
        title: "Surface Care Guide",
        subtitle: "First-day Shine",
        excerpt:
          "Professional tips for cleaning marble and porcelain surfaces without leaving marks. Daily care, stain removal and long-term protection methods.",
        categoryLabel: "Care & Protection",
      },
      de: {
        title: "Oberflächenpflegeratgeber",
        subtitle: "Glanz wie am ersten Tag",
        excerpt:
          "Professionelle Tipps zur spurlosen Reinigung von Marmor- und Porzellanoberflächen. Tägliche Pflege, Fleckentfernung und langfristige Schutzmethoden.",
        categoryLabel: "Pflege & Schutz",
      },
    },
  },
  {
    slug: "mermer-atolyesi-surdurulebilir-uretim",
    title: "Mermer Atölyesinde Sürdürülebilir Üretim ve Atık Yönetimi",
    subtitle: "Yeşil Üretim Merkezleri",
    excerpt:
      "Atıkların geri kazanımı ve sürdürülebilir üretim pratikleriyle verimlilik artırma. Doğal taş atölyelerinde döngüsel ekonomi nasıl kurulur?",
    category: "surdurulebilirlik",
    categoryLabel: "Sürdürülebilirlik & Endüstri",
    date: "2026-02-05",
    readMinutes: 7,
    cover: "/images/blog/mermer-atolyesi-surdurulebilir-uretim/hero.webp",
    i18n: {
      en: {
        title: "Sustainable Production and Waste Management in Marble Workshops",
        subtitle: "Green Production Centers",
        excerpt:
          "Increasing efficiency through waste recycling and sustainable production practices. How to establish a circular economy in natural stone workshops?",
        categoryLabel: "Sustainability & Industry",
      },
      de: {
        title: "Nachhaltige Produktion und Abfallmanagement in Marmorwerkstätten",
        subtitle: "Grüne Produktionszentren",
        excerpt:
          "Effizienzsteigerung durch Abfallrecycling und nachhaltige Produktionspraktiken. Wie etabliert man eine Kreislaufwirtschaft in Natursteinwerkstätten?",
        categoryLabel: "Nachhaltigkeit & Industrie",
      },
    },
  },
  {
    slug: "mermer-porselen-pazarlama-stratejileri",
    title: "Mermer & Porselen Ürünlerde Pazarlama Stratejileri",
    subtitle: "Dijital Görünürlük",
    excerpt:
      "Mimar ve proje ofislerine ulaşmak için dijital pazarlamada öne çıkan taktikler. Doğal taş sektöründe içerik, SEO ve B2B kanal stratejileri.",
    category: "pazarlama",
    categoryLabel: "Dijital Pazarlama",
    date: "2026-01-28",
    readMinutes: 9,
    cover: "/images/blog/mermer-porselen-pazarlama-stratejileri/hero.webp",
    i18n: {
      en: {
        title: "Marketing Strategies for Marble & Porcelain Products",
        subtitle: "Digital Visibility",
        excerpt:
          "Outstanding tactics in digital marketing to reach architects and project offices. Content, SEO and B2B channel strategies in the natural stone industry.",
        categoryLabel: "Digital Marketing",
      },
      de: {
        title: "Marketingstrategien für Marmor- & Porzellanprodukte",
        subtitle: "Digitale Sichtbarkeit",
        excerpt:
          "Hervorragende Taktiken im digitalen Marketing, um Architekten und Projektbüros zu erreichen. Inhalts-, SEO- und B2B-Kanalstrategien in der Natursteinbranche.",
        categoryLabel: "Digitales Marketing",
      },
    },
  },
];

export function localizedPost(
  post: BlogPost,
  locale: Locale,
): BlogPostTranslation {
  if (locale === "tr") return post;
  const o = post.i18n?.[locale];
  return {
    title: o?.title ?? post.title,
    subtitle: o?.subtitle ?? post.subtitle,
    excerpt: o?.excerpt ?? post.excerpt,
    categoryLabel: o?.categoryLabel ?? post.categoryLabel,
  };
}
