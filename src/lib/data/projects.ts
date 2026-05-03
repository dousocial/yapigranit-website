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
    type: "Zemin & Duvar Kaplama",
    location: "Denizli",
    year: 2018,
    material: ["Doğal Taş", "Granit", "Porselen"],
    area: "12.000 m²",
    scope:
      "İç ve dış mekân zemin kaplamaları, dikey yüzeylerde duvar kaplama uygulamaları; yoğun sirkülasyona uygun dayanıklı ve uzun ömürlü malzeme kullanımı.",
    summary:
      "Yapı Granit olarak, toplam 12.000 m² zemin ve duvar kaplama uygulamasını başarıyla tamamladığımız bu projede; kalite, hız ve detay odaklı yaklaşımımızı bir kez daha sahaya yansıttık. Projede kullanılan doğal taş ve porselen yüzeyler, mekanın mimari kimliğine uygun olarak titizlikle seçilmiş; uygulama sürecinde ise milimetrik hassasiyetle işçilik gerçekleştirilmiştir.",
    cover: "/images/projects/forum-camlik/forum-camlik-avm-denizli-dis-cephe-gunbatimi.webp",
    gallery: [
      "/images/projects/forum-camlik/forum-camlik-avm-denizli-ana-giris-gece.webp",
      "/images/projects/forum-camlik/forum-camlik-avm-denizli-havuzlu-dis-alan-gece.webp",
      "/images/projects/forum-camlik/forum-camlik-avm-denizli-cephe-gece-trafik.webp",
      "/images/projects/forum-camlik/forum-camlik-avm-denizli-meydan-gunbatimi.webp",
      "/images/projects/forum-camlik/forum-camlik-avm-denizli-genis-acili-cephe-gece.webp",
      "/images/projects/forum-camlik/forum-camlik-avm-denizli-ic-mekan-alisveris-alani.webp",
      "/images/projects/forum-camlik/forum-camlik-avm-denizli-cinetime-sinema-zemin.webp",
      "/images/projects/forum-camlik/forum-camlik-avm-denizli-yemek-alani-zemin-kaplama.webp",
      "/images/projects/forum-camlik/forum-camlik-avm-denizli-koridor-porselen-zemin.webp",
    ],
    i18n: {
      en: {
        title: "Forum Çamlık Mall",
        categoryLabel: "Commercial",
        type: "Floor & Wall Cladding",
        material: ["Natural Stone", "Granite", "Porcelain"],
        scope:
          "Interior and exterior floor cladding, wall cladding on vertical surfaces; durable and long-lasting materials suitable for high-traffic circulation.",
        summary:
          "At Yapı Granit, we successfully completed a total of 12,000 m² of floor and wall cladding in this project, once again demonstrating our quality, speed, and detail-oriented approach. The natural stone and porcelain surfaces were meticulously selected to suit the architectural identity of the space, with millimeter-precision craftsmanship throughout.",
      },
      de: {
        title: "Forum Çamlık Einkaufszentrum",
        categoryLabel: "Gewerbebau",
        type: "Boden- & Wandverkleidung",
        material: ["Naturstein", "Granit", "Porzellan"],
        scope:
          "Innen- und Außenbodenbeläge, Wandverkleidungen auf vertikalen Flächen; langlebige und strapazierfähige Materialien für stark frequentierte Bereiche.",
        summary:
          "Bei Yapı Granit haben wir eine Boden- und Wandverkleidung von insgesamt 12.000 m² erfolgreich abgeschlossen und dabei unseren qualitäts-, geschwindigkeits- und detailorientierten Ansatz erneut unter Beweis gestellt.",
      },
    },
  },
  {
    slug: "skycity-denizli",
    title: "SkyCity Denizli",
    category: "konut",
    categoryLabel: "Karma Yapı",
    type: "Basamak & Asansör Kaplama",
    location: "Denizli",
    year: 2020,
    material: ["Doğal Taş", "Mermer", "Porselen"],
    scope:
      "Basamak ve asansör iç-dış kaplama uygulamaları; yoğun sirkülasyona uygun dayanıklı malzemeler, basamaklarda kaymaz yüzey detayları, asansörlerde yansıtıcı ve sofistike yüzeyler.",
    summary:
      "Denizli'nin prestij projelerinden SkyCity'de, Yapı Granit olarak basamak ve asansör kaplama uygulamalarını yüksek kalite standartlarımızla hayata geçirdik. Modern mimari diliyle uyumlu doğal taş ve porselen yüzeyler, hem estetik bütünlük hem de uzun ömürlü kullanım hedefiyle titizlikle uygulandı.",
    cover: "/images/projects/skycity/skycity-denizli-kule-gunbatimi-hava-goruntu.webp",
    gallery: [
      "/images/projects/skycity/skycity-denizli-kule-gunbatimi-onden-cephe.webp",
      "/images/projects/skycity/skycity-denizli-kule-cam-cephe-dis-gorunum.webp",
      "/images/projects/skycity/skycity-denizli-sehir-panoramik-tepe-manzarasi.webp",
      "/images/projects/skycity/skycity-denizli-cam-cephe-yansima-sehir.webp",
      "/images/projects/skycity/skycity-denizli-cam-cephe-gunes-detay.webp",
      "/images/projects/skycity/skycity-denizli-lobi-mermer-resepsiyon-asansor.webp",
      "/images/projects/skycity/skycity-denizli-asansor-koridor-mermer-zemin.webp",
      "/images/projects/skycity/skycity-denizli-ofis-cafe-cam-cephe-manzara.webp",
    ],
    i18n: {
      en: {
        title: "SkyCity Denizli",
        categoryLabel: "Mixed-Use",
        type: "Stair & Elevator Cladding",
        material: ["Natural Stone", "Marble", "Porcelain"],
        scope:
          "Stair and elevator interior/exterior cladding applications; durable materials for high-traffic circulation, anti-slip surface details on stairs, reflective and sophisticated finishes in elevators.",
        summary:
          "At SkyCity, one of Denizli's prestige projects, Yapı Granit delivered stair and elevator cladding applications to our highest quality standards. Natural stone and porcelain surfaces, selected to harmonize with the modern architecture, were meticulously applied for both aesthetic integrity and long-lasting durability.",
      },
      de: {
        title: "SkyCity Denizli",
        categoryLabel: "Mischnutzung",
        type: "Treppen- & Aufzugsverkleidung",
        material: ["Naturstein", "Marmor", "Porzellan"],
        scope:
          "Treppen- und Aufzugs-Innen-/Außenverkleidungen; strapazierfähige Materialien, rutschhemmende Oberflächendetails auf Treppen, reflektierende und anspruchsvolle Oberflächen in Aufzügen.",
        summary:
          "Bei SkyCity, einem der Prestigeprojekte Denizlis, hat Yapı Granit Treppen- und Aufzugsverkleidungen mit höchsten Qualitätsstandards realisiert. Naturstein- und Porzellanoberflächen wurden im Einklang mit der modernen Architektur sorgfältig appliziert.",
      },
    },
  },
  {
    slug: "ahmet-hulusi-efendi-kulliyesi",
    title: "Ahmet Hulusi Efendi Külliyesi",
    category: "kamusal",
    categoryLabel: "Külliye / Kamusal Yapı",
    type: "Mekanik Cephe & CNC Taş Kaplama",
    location: "Denizli",
    year: 2021,
    material: ["Doğal Taş", "Mermer", "CNC İşlemli Taş"],
    area: "1.500 m²",
    scope:
      "Mekanik cephe kaplama sistemleri, doğal taş dış cephe uygulamaları, CNC kesim ve işlemli taş kaplamalar; projeye özel mimari detay çözümleri.",
    summary:
      "Yapı Granit, külliye projeleri kapsamında mekanik cephe kaplama, doğal taş cephe sistemleri ve CNC işlemli duvar kaplamalarıyla yüksek standartlı çözümler sunmaktadır. Bu projede toplam 1.500 m² mekanik cephe kaplama uygulaması; yapı güvenliği, uzun ömürlü kullanım ve estetik bütünlük gözetilerek hayata geçirilmiştir. CNC işlemli taş duvar kaplamaları ise modern üretim teknolojileriyle yüksek hassasiyette işlenerek mimari projeye özgü desenler oluşturulmuştur.",
    cover: "/images/projects/ahmet-hulusi/ahmet-hulusi-efendi-kulliyesi-denizli-cami-dis-cephe-gunbatimi.webp",
    gallery: [
      "/images/projects/ahmet-hulusi/ahmet-hulusi-efendi-kulliyesi-denizli-hava-goruntu-panoramik.webp",
      "/images/projects/ahmet-hulusi/ahmet-hulusi-efendi-kulliyesi-denizli-cami-yan-cephe-minare.webp",
      "/images/projects/ahmet-hulusi/ahmet-hulusi-efendi-kulliyesi-denizli-tas-cephe-kemer-detay.webp",
      "/images/projects/ahmet-hulusi/ahmet-hulusi-efendi-kulliyesi-denizli-cnc-islemli-tas-cephe-detay.webp",
      "/images/projects/ahmet-hulusi/ahmet-hulusi-efendi-kulliyesi-denizli-cami-ic-mekan-mihrap.webp",
      "/images/projects/ahmet-hulusi/ahmet-hulusi-efendi-kulliyesi-denizli-cami-ic-mekan-kubbe-altin.webp",
      "/images/projects/ahmet-hulusi/ahmet-hulusi-efendi-kulliyesi-denizli-sadirvan-mermer-kaplama.webp",
      "/images/projects/ahmet-hulusi/ahmet-hulusi-efendi-kulliyesi-denizli-koridor-cnc-mermer-zemin.webp",
    ],
    i18n: {
      en: {
        title: "Ahmet Hulusi Efendi Complex",
        categoryLabel: "Religious / Public Building",
        type: "Mechanical Façade & CNC Stone Cladding",
        material: ["Natural Stone", "Marble", "CNC-Processed Stone"],
        scope:
          "Mechanical façade cladding systems, natural stone exterior applications, CNC-cut and processed stone cladding; project-specific architectural detail solutions.",
        summary:
          "Yapı Granit delivers high-standard solutions in mechanical façade cladding, natural stone façade systems, and CNC-processed wall cladding for külliye (religious complex) projects. A total of 1,500 m² of mechanical façade cladding was applied with structural safety, longevity, and aesthetic integrity in mind.",
      },
      de: {
        title: "Ahmet Hulusi Efendi Komplex",
        categoryLabel: "Religiöses / Öffentliches Gebäude",
        type: "Mechanische Fassade & CNC-Steinverkleidung",
        material: ["Naturstein", "Marmor", "CNC-bearbeiteter Stein"],
        scope:
          "Mechanische Fassadensysteme, Natursteinfassadenanwendungen, CNC-geschnittene und -bearbeitete Steinverkleidungen; projektspezifische architektonische Detaillösungen.",
        summary:
          "Yapı Granit bietet hohe Standards in mechanischer Fassadenverkleidung, Natursteinfassadensystemen und CNC-bearbeiteten Wandverkleidungen für Külliye-Projekte.",
      },
    },
  },
  {
    slug: "anemon-hotel-denizli",
    title: "Anemon Hotel Denizli",
    category: "oteller",
    categoryLabel: "Otel",
    type: "Bar Zemin & Oda Tezgah Uygulaması",
    location: "Denizli",
    year: 2019,
    material: ["Doğal Taş", "Mermer", "Porselen"],
    scope:
      "Bar zemin kaplamaları ve oda tezgah uygulamaları; mekanın konseptine uygun doğal taş ve porselen yüzey seçimi, yoğun kullanıma dayanıklı uzun ömürlü çözümler.",
    summary:
      "Yapı Granit olarak, Anemon Otelleri zincirinin farklı lokasyonlarında bar zemin kaplamaları ve oda tezgah uygulamalarını başarıyla hayata geçirdik. Yüksek sirkülasyonlu alanlarda dayanıklılığı ön planda tutan uygulamalar ve estetik-fonksiyonelliği bir araya getiren oda içi tezgah çözümleriyle bütüncül bir mimari yaklaşım benimsendi.",
    cover: "/images/projects/anemon-hotel/anemon-hotel-denizli-dis-cephe-gunbatimi.webp",
    gallery: [
      "/images/projects/anemon-hotel/anemon-hotel-denizli-hava-goruntu-gece.webp",
      "/images/projects/anemon-hotel/anemon-hotel-denizli-hava-goruntu-gunduz.webp",
      "/images/projects/anemon-hotel/anemon-hotel-denizli-dis-cephe-giris-gunduz.webp",
      "/images/projects/anemon-hotel/anemon-hotel-denizli-lobi-mermer-zemin-kaplama.webp",
      "/images/projects/anemon-hotel/anemon-hotel-denizli-bar-lounge-zemin-kaplama.webp",
      "/images/projects/anemon-hotel/anemon-hotel-denizli-banyo-mermer-duvar-tezgah.webp",
      "/images/projects/anemon-hotel/anemon-hotel-denizli-oda-zemin-sehir-manzarasi.webp",
      "/images/projects/anemon-hotel/anemon-hotel-denizli-restoran-mermer-zemin.webp",
      "/images/projects/anemon-hotel/anemon-hotel-denizli-rooftop-restoran-panorama.webp",
    ],
    i18n: {
      en: {
        categoryLabel: "Hotel",
        type: "Bar Floor & Room Countertop Application",
        material: ["Natural Stone", "Marble", "Porcelain"],
        scope:
          "Bar floor cladding and room countertop applications; natural stone and porcelain surface selection suited to the space concept, durable long-lasting solutions for high-traffic areas.",
        summary:
          "At Yapı Granit, we successfully completed bar floor cladding and room countertop applications across multiple Anemon Hotels locations. A holistic architectural approach was adopted — combining high-traffic-resistant floor solutions with aesthetic and functional room interior countertop designs.",
      },
      de: {
        categoryLabel: "Hotel",
        type: "Bar-Boden & Zimmer-Arbeitsplatten",
        material: ["Naturstein", "Marmor", "Porzellan"],
        scope:
          "Bar-Bodenverkleidungen und Zimmer-Arbeitsplattenanwendungen; Naturstein- und Porzellanoberflächen passend zum Raumkonzept, langlebige und strapazierfähige Lösungen.",
        summary:
          "Bei Yapı Granit haben wir Bar-Bodenverkleidungen und Zimmer-Arbeitsplattenanwendungen in verschiedenen Anemon Hotels-Standorten erfolgreich realisiert.",
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
