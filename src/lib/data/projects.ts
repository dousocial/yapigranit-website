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

export type ProjectScale = "imza" | "bireysel";

export interface Project extends ProjectTranslation {
  slug: string;
  scale: ProjectScale;
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

export const projectScales = [
  {
    slug: "imza" as const,
    label: {
      tr: "İmza Projeler",
      en: "Signature Projects",
      de: "Signatur-Projekte",
    },
  },
  {
    slug: "bireysel" as const,
    label: {
      tr: "Bireysel Projeler",
      en: "Individual Projects",
      de: "Individuelle Projekte",
    },
  },
] as const;

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
    scale: "imza",
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
    scale: "imza",
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
    scale: "imza",
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
    scale: "imza",
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

  // -------- Bireysel Projeler --------

  {
    slug: "ceyda-tanrikulu-mutfak",
    scale: "bireysel",
    title: "Ceyda Tanrıkulu Mutfak Projesi",
    category: "konut",
    categoryLabel: "Mutfak Tezgahı",
    type: "T-One Calacatta Gold Mutfak Tezgahı",
    location: "Denizli",
    year: 2025,
    material: ["T-One Calacatta Gold", "Porselen"],
    area: "7 m²",
    scope:
      "T-One Calacatta Gold porselen yüzey ile mutfak tezgah ve tezgah arası uygulaması; özel ölçü kesim, hassas birleşim detayları ve montaj, 2 plaka.",
    summary:
      "Modern mutfak tasarımını zamansız mermer estetiğiyle buluşturan bu projede, Ceyda Tanrıkulu'na ait yaşam alanında T-One Calacatta Gold yüzey tercih edildi. Açık tonlu zemin yapısı ve doğal altın damar geçişleriyle mekâna ferah, bütünsel ve premium bir görünüm kazandırıldı. Tezgah ve arka yüzey uygulamalarında kullanılan T-One Calacatta Gold, estetik görünümünü günlük kullanıma uygun dayanıklı yapısıyla birleştirerek projeye modern bir karakter kattı.",
    cover:
      "/images/projects/ceyda-tanrikulu-mutfak/ceyda-tanrikulu-mutfak-tezgah-01.webp",
    gallery: [
      "/images/projects/ceyda-tanrikulu-mutfak/ceyda-tanrikulu-mutfak-tezgah-02.webp",
    ],
    i18n: {
      en: {
        title: "Ceyda Tanrıkulu Kitchen Project",
        categoryLabel: "Kitchen Countertop",
        type: "T-One Calacatta Gold Kitchen Countertop",
        material: ["T-One Calacatta Gold", "Porcelain"],
        scope:
          "Kitchen countertop and backsplash application using T-One Calacatta Gold porcelain; precision cuts, refined joinery and installation across 2 slabs.",
        summary:
          "This project bridges modern kitchen design with timeless marble aesthetics. T-One Calacatta Gold was chosen for Ceyda Tanrıkulu's residence — its light base and natural gold veining bringing an airy, cohesive and premium character to the space. Used on the countertop and backsplash, T-One Calacatta Gold combines refined visual appeal with the durability needed for daily use.",
      },
      de: {
        title: "Ceyda Tanrıkulu Küchenprojekt",
        categoryLabel: "Küchenarbeitsplatte",
        type: "T-One Calacatta Gold Küchenarbeitsplatte",
        material: ["T-One Calacatta Gold", "Porzellan"],
        scope:
          "Küchenarbeitsplatte und Rückwand-Verkleidung in T-One Calacatta Gold Porzellan; präzise Zuschnitte, sorgfältige Fügungen und Montage mit 2 Platten.",
        summary:
          "Dieses Projekt verbindet modernes Küchendesign mit zeitloser Marmorästhetik. Für die Wohnung von Ceyda Tanrıkulu wurde T-One Calacatta Gold gewählt — der helle Grundton und die natürlichen goldenen Adern verleihen dem Raum eine luftige, hochwertige Atmosphäre.",
      },
    },
  },
  {
    slug: "dekton-kairos-mutfak",
    scale: "bireysel",
    title: "Dekton Kairos Mutfak Projesi",
    category: "konut",
    categoryLabel: "Mutfak Tezgahı",
    type: "Dekton Kairos Mutfak Tezgahı",
    location: "Denizli",
    year: 2025,
    material: ["Dekton Kairos", "Ultra-Compact Yüzey"],
    area: "9 m²",
    scope:
      "Dekton Kairos ultra-kompakt yüzey ile mutfak tezgah ve tezgah arası uygulaması; özel ölçü kesim, hassas birleşim detayları ve damar devamlılığı, 3 plaka.",
    summary:
      "Modern çizgiler ve zamansız taş dokusunu bir araya getiren bu mutfak projesinde, yüzeylerde Dekton Kairos tercih edildi. İnce ve doğal damar geçişleriyle mekâna ferah bir görünüm kazandıran uygulama, minimalist mutfak tasarımıyla bütünleşerek güçlü bir estetik oluşturdu. Dayanıklı yapısı, düşük gözenekli yüzeyi ve uzun ömürlü kullanım avantajıyla öne çıkan Dekton Kairos; günlük kullanım konforunu modern mimari görünümle bir araya getirdi.",
    cover:
      "/images/projects/dekton-kairos-mutfak/dekton-kairos-mutfak-tezgah-01.webp",
    gallery: [
      "/images/projects/dekton-kairos-mutfak/dekton-kairos-mutfak-tezgah-02.webp",
      "/images/projects/dekton-kairos-mutfak/dekton-kairos-mutfak-tezgah-03.webp",
    ],
    i18n: {
      en: {
        title: "Dekton Kairos Kitchen Project",
        categoryLabel: "Kitchen Countertop",
        type: "Dekton Kairos Kitchen Countertop",
        material: ["Dekton Kairos", "Ultra-Compact Surface"],
        scope:
          "Kitchen countertop and backsplash application using Dekton Kairos ultra-compact surface; precision cuts, careful joinery and continuous veining across 3 slabs.",
        summary:
          "This kitchen project unites modern lines with timeless stone texture, with Dekton Kairos chosen for all surfaces. Subtle, natural veining lends the space an airy quality and integrates seamlessly with the minimalist design. With its durable, low-porosity surface and long-lasting performance, Dekton Kairos brings together everyday comfort and modern architectural presence.",
      },
      de: {
        title: "Dekton Kairos Küchenprojekt",
        categoryLabel: "Küchenarbeitsplatte",
        type: "Dekton Kairos Küchenarbeitsplatte",
        material: ["Dekton Kairos", "Ultra-Kompakt-Oberfläche"],
        scope:
          "Küchenarbeitsplatte und Rückwand-Verkleidung mit Dekton Kairos; präzise Zuschnitte, sorgfältige Fügungen und durchgehende Maserung mit 3 Platten.",
        summary:
          "Dieses Küchenprojekt verbindet moderne Linien mit zeitloser Steintextur — alle Oberflächen wurden in Dekton Kairos ausgeführt. Die feine, natürliche Maserung verleiht dem Raum Leichtigkeit und fügt sich nahtlos in das minimalistische Design ein. Mit seiner robusten, porenarmen Oberfläche bietet Dekton Kairos langlebigen Komfort und moderne architektonische Präsenz.",
      },
    },
  },
  {
    slug: "bullhead-cafe",
    scale: "bireysel",
    title: "Bullhead Cafe Banko Projesi",
    category: "restoran-kafe",
    categoryLabel: "Kafe Bankosu",
    type: "Dekton Trilium Banko Uygulaması",
    location: "Denizli",
    year: 2025,
    material: ["Dekton Trilium", "Ultra-Compact Yüzey"],
    area: "21 m²",
    scope:
      "Dekton Trilium ultra-kompakt yüzey ile servis bankosu ve detay birleşim uygulamaları; yoğun kullanım ortamına uygun dayanıklı yapı, kesintisiz yüzey bütünlüğü, 5 plaka.",
    summary:
      "Endüstriyel dokunun modern detaylarla buluştuğu Bullhead Cafe projesinde, mekânın karakterini tamamlayan özel banko uygulamalarını gerçekleştirdik. Projede tercih edilen Dekton Trilium yüzeyi; güçlü metalik geçişleri, doğal pas efektini andıran dokusu ve derin tonlarıyla mekâna özgün bir atmosfer kazandırdı. Yoğun kullanıma uygun yapısıyla öne çıkan Dekton Trilium; çizilme, ısı ve leke direnci sayesinde kafe projelerinde uzun ömürlü bir çözüm sunarken, mekânın endüstriyel konseptini de güçlü biçimde destekledi.",
    cover:
      "/images/projects/bullhead-cafe/bullhead-cafe-banko-dekton-trilium-01.webp",
    gallery: [
      "/images/projects/bullhead-cafe/bullhead-cafe-banko-dekton-trilium-02.webp",
      "/images/projects/bullhead-cafe/bullhead-cafe-banko-dekton-trilium-03.webp",
      "/images/projects/bullhead-cafe/bullhead-cafe-banko-dekton-trilium-04.webp",
      "/images/projects/bullhead-cafe/bullhead-cafe-banko-dekton-trilium-05.webp",
      "/images/projects/bullhead-cafe/bullhead-cafe-banko-dekton-trilium-06.webp",
    ],
    i18n: {
      en: {
        title: "Bullhead Cafe Counter Project",
        categoryLabel: "Café Counter",
        type: "Dekton Trilium Counter Application",
        material: ["Dekton Trilium", "Ultra-Compact Surface"],
        scope:
          "Service counter and detail joinery in Dekton Trilium ultra-compact surface; durable build for high-traffic environments, seamless surface continuity across 5 slabs.",
        summary:
          "Bullhead Cafe brings industrial texture together with modern detail, and we delivered the custom counter applications that complete the venue's character. Dekton Trilium — chosen for the project — adds a distinct atmosphere with its strong metallic transitions, natural rust-effect texture and deep tones. With its scratch, heat and stain resistance, Dekton Trilium offers a long-lasting solution while reinforcing the café's industrial concept.",
      },
      de: {
        title: "Bullhead Cafe Theken-Projekt",
        categoryLabel: "Café-Theke",
        type: "Dekton Trilium Thekenanwendung",
        material: ["Dekton Trilium", "Ultra-Kompakt-Oberfläche"],
        scope:
          "Service-Theke und Detailfügungen in Dekton Trilium Ultra-Kompakt-Oberfläche; robust für stark frequentierte Bereiche, durchgehende Oberfläche mit 5 Platten.",
        summary:
          "Im Bullhead Cafe verbinden sich industrielle Textur und moderne Details — wir haben die maßgefertigten Theken realisiert, die den Charakter des Lokals abrunden. Das gewählte Dekton Trilium verleiht dem Raum mit seinen kräftigen metallischen Übergängen, der natürlichen Rost-Optik und den tiefen Farbtönen eine eigenständige Atmosphäre.",
      },
    },
  },
  {
    slug: "karahanli-somine",
    scale: "bireysel",
    title: "Karahanlı Mimarlık Şömine Projesi",
    category: "konut",
    categoryLabel: "Şömine Uygulaması",
    type: "Dekton Trilium Şömine Kaplama",
    location: "Denizli",
    year: 2025,
    material: ["Dekton Trilium", "Ultra-Compact Yüzey"],
    area: "8 m²",
    scope:
      "Dekton Trilium ile şömine kaplama uygulaması; minimum derz yapısı, hassas kesim ve birleşim detayları, taşın doğal yüzey hareketleriyle desteklenen mimari form, 2 plaka.",
    summary:
      "Karahanlı Mimarlık projesi kapsamında tasarlanan bu özel şömine uygulamasında, endüstriyel dokusu ve güçlü yüzey karakteriyle öne çıkan Dekton Trilium tercih edildi. Mekânın modern mimari çizgisine uyum sağlayan yüzey tasarımı; doğal ışıkla birlikte derinlik kazanan pas efektli dokusu sayesinde güçlü ve sofistike bir atmosfer oluşturdu. Isıya dayanıklı yapısı, düşük bakım ihtiyacı ve uzun ömürlü yüzeyi sayesinde Dekton Trilium; yaşam alanlarında hem estetik hem de fonksiyonel bir çözüm sundu.",
    cover:
      "/images/projects/karahanli-somine/karahanli-somine-dekton-trilium-01.webp",
    gallery: [
      "/images/projects/karahanli-somine/karahanli-somine-dekton-trilium-02.webp",
      "/images/projects/karahanli-somine/karahanli-somine-dekton-trilium-03.webp",
      "/images/projects/karahanli-somine/karahanli-somine-dekton-trilium-04.webp",
    ],
    i18n: {
      en: {
        title: "Karahanlı Architecture Fireplace Project",
        categoryLabel: "Fireplace Cladding",
        type: "Dekton Trilium Fireplace Cladding",
        material: ["Dekton Trilium", "Ultra-Compact Surface"],
        scope:
          "Fireplace cladding in Dekton Trilium; minimal joints, precision cutting and joinery, architectural form supported by the surface's natural movement, 2 slabs.",
        summary:
          "For Karahanlı Architecture's bespoke fireplace, we chose Dekton Trilium for its industrial texture and strong surface character. Aligned with the modern architectural language of the space, the rust-effect texture deepens with natural light, creating a powerful and sophisticated atmosphere. Heat-resistant, low-maintenance and long-lasting, Dekton Trilium delivers both aesthetic and functional value in living spaces.",
      },
      de: {
        title: "Karahanlı Architektur Kamin-Projekt",
        categoryLabel: "Kaminverkleidung",
        type: "Dekton Trilium Kaminverkleidung",
        material: ["Dekton Trilium", "Ultra-Kompakt-Oberfläche"],
        scope:
          "Kaminverkleidung mit Dekton Trilium; minimale Fugen, präzise Zuschnitte und Fügungen, architektonische Form unterstützt durch natürliche Oberflächenbewegung, 2 Platten.",
        summary:
          "Für den maßgeschneiderten Kamin von Karahanlı Architektur wurde Dekton Trilium aufgrund seiner industriellen Textur und ausgeprägten Oberflächenwirkung gewählt. Im Einklang mit der modernen Architektur des Raums entsteht durch die rostartige Textur und das natürliche Licht eine kraftvolle, anspruchsvolle Atmosphäre.",
      },
    },
  },
  {
    slug: "karanlik-villa",
    scale: "bireysel",
    title: "Karanlık's Villa Projesi",
    category: "konut",
    categoryLabel: "Villa — Bütüncül Taş Uygulaması",
    type: "Basamak, Teras, Parapet & Mutfak Uygulamaları",
    location: "Denizli",
    year: 2026,
    material: ["Dekton Onix", "T-One Marro Metallo", "Ultra-Compact Yüzey"],
    area: "100 m²",
    scope:
      "Villa girişinde basamak kaplama, teras zemin, parapet detayları ve mutfak tezgahı/ada uygulaması; iç-dış mekânda dayanıklılık ve estetik bütünlüğü hedefleyen 21 plakalık bütüncül uygulama.",
    summary:
      "Karanlık's Villa projesinde, doğal taşın estetiği ile modern mimarinin sade çizgileri bir araya getirilerek zamansız bir yaşam alanı oluşturuldu. Kenan Karanlık'a ait bu özel projede, hem iç hem dış mekânda bütünsel bir tasarım dili benimsendi. Dış mekânda Dekton Onix; basamak, teras ve parapet uygulamalarında UV direnci ve doğal taş görünümüyle maksimum performans sağlarken, mutfakta T-One Marro Metallo modern endüstriyel dokusuyla iç mekâna güçlü bir karakter kazandırdı.",
    cover: "/images/projects/karanlik-villa/karanlik-villa-01.webp",
    gallery: [
      "/images/projects/karanlik-villa/karanlik-villa-02.webp",
      "/images/projects/karanlik-villa/karanlik-villa-03.webp",
      "/images/projects/karanlik-villa/karanlik-villa-04.webp",
      "/images/projects/karanlik-villa/karanlik-villa-05.webp",
      "/images/projects/karanlik-villa/karanlik-villa-06.webp",
      "/images/projects/karanlik-villa/karanlik-villa-07.webp",
      "/images/projects/karanlik-villa/karanlik-villa-08.webp",
      "/images/projects/karanlik-villa/karanlik-villa-09.webp",
      "/images/projects/karanlik-villa/karanlik-villa-10.webp",
      "/images/projects/karanlik-villa/karanlik-villa-11.webp",
      "/images/projects/karanlik-villa/karanlik-villa-12.webp",
      "/images/projects/karanlik-villa/karanlik-villa-13.webp",
    ],
    i18n: {
      en: {
        title: "Karanlık's Villa Project",
        categoryLabel: "Villa — Comprehensive Stone Application",
        type: "Stairs, Terrace, Parapet & Kitchen Applications",
        material: ["Dekton Onix", "T-One Marro Metallo", "Ultra-Compact Surface"],
        scope:
          "Stair cladding at the villa entrance, terrace flooring, parapet details and kitchen countertop/island application; a comprehensive 21-slab installation balancing durability and aesthetic continuity across interior and exterior.",
        summary:
          "Karanlık's Villa unites the aesthetics of natural stone with the clean lines of modern architecture to create a timeless living environment. Kenan Karanlık's residence follows a holistic design language across interior and exterior. Outside, Dekton Onix delivers maximum performance on stairs, terrace and parapet thanks to UV resistance and a natural stone appearance, while inside the kitchen, T-One Marro Metallo brings strong character with its modern industrial texture.",
      },
      de: {
        title: "Karanlık's Villa Projekt",
        categoryLabel: "Villa — Ganzheitliche Steinanwendung",
        type: "Treppen, Terrasse, Brüstung & Küchenanwendungen",
        material: ["Dekton Onix", "T-One Marro Metallo", "Ultra-Kompakt-Oberfläche"],
        scope:
          "Treppenverkleidung am Villa-Eingang, Terrassenboden, Brüstungsdetails und Küchenarbeitsplatte/Insel; ganzheitliche Anwendung mit 21 Platten für Innen- und Außenbereiche.",
        summary:
          "Karanlık's Villa vereint die Ästhetik des Natursteins mit den klaren Linien moderner Architektur. Außen sorgt Dekton Onix dank UV-Beständigkeit und Natursteinoptik für Höchstleistung; innen verleiht T-One Marro Metallo der Küche mit seiner modernen industriellen Textur einen ausdrucksstarken Charakter.",
      },
    },
  },
  {
    slug: "kirlaroglu-masa",
    scale: "bireysel",
    title: "Kırlaroğlu Masa Projesi",
    category: "konut",
    categoryLabel: "Masa Uygulaması",
    type: "Dekton Laurent Masa Uygulaması",
    location: "Denizli",
    year: 2025,
    material: ["Dekton Laurent", "Ultra-Compact Yüzey"],
    area: "4 m²",
    scope:
      "Dekton Laurent ile özel ölçü masa uygulaması; tek plaka üzerinden bütüncül yüzey, hassas kesim ve detaylı işçilik.",
    summary:
      "Modern yaşam alanlarına karakter kazandıran bu özel masa uygulamasında, güçlü damar yapısı ve sofistike görünümüyle öne çıkan Dekton Laurent tercih edildi. Koyu yüzey üzerinde hareket eden doğal bronz geçişler, mekâna lüks ve zamansız bir atmosfer katarken tasarımın merkezinde güçlü bir odak noktası oluşturdu. Isıya, çizilmeye ve günlük kullanıma karşı yüksek dayanıklılık sunan Dekton Laurent, estetik görünümü fonksiyonellikle birleştirerek projeye premium bir dokunuş kattı.",
    cover:
      "/images/projects/kirlaroglu-masa/kirlaroglu-masa-dekton-laurent-01.webp",
    gallery: [
      "/images/projects/kirlaroglu-masa/kirlaroglu-masa-dekton-laurent-02.webp",
    ],
    i18n: {
      en: {
        title: "Kırlaroğlu Table Project",
        categoryLabel: "Custom Table",
        type: "Dekton Laurent Table Application",
        material: ["Dekton Laurent", "Ultra-Compact Surface"],
        scope:
          "Custom-sized table application in Dekton Laurent; full-surface continuity from a single slab, precision cutting and detailed craftsmanship.",
        summary:
          "For this custom table that gives modern living spaces a defining character, Dekton Laurent was chosen for its strong veining and sophisticated appearance. Natural bronze transitions across the dark surface bring a luxurious, timeless atmosphere and create a powerful focal point. Highly resistant to heat, scratches and daily use, Dekton Laurent combines aesthetic appeal with functionality for a premium touch.",
      },
      de: {
        title: "Kırlaroğlu Tisch-Projekt",
        categoryLabel: "Tisch",
        type: "Dekton Laurent Tischanwendung",
        material: ["Dekton Laurent", "Ultra-Kompakt-Oberfläche"],
        scope:
          "Maßgefertigte Tischanwendung in Dekton Laurent; durchgehende Oberfläche aus einer Platte, präzise Zuschnitte und detaillierte Verarbeitung.",
        summary:
          "Für diesen maßgeschneiderten Tisch wurde Dekton Laurent wegen seiner kräftigen Maserung und anspruchsvollen Optik gewählt. Natürliche Bronze-Übergänge auf der dunklen Oberfläche schaffen eine luxuriöse, zeitlose Atmosphäre und einen starken Blickfang.",
      },
    },
  },
  {
    slug: "marmaris-villa",
    scale: "bireysel",
    title: "Marmaris Villa Mutfak Projesi",
    category: "konut",
    categoryLabel: "Villa — Mutfak Tezgahı",
    type: "Dekton Aura Mutfak Tezgahı",
    location: "Marmaris",
    year: 2025,
    material: ["Dekton Aura", "Ultra-Compact Yüzey"],
    area: "6 m²",
    scope:
      "Dekton Aura ile mutfak tezgah uygulaması; ince damar geçişleri, geniş yüzey bütünlüğü ve temiz işçilik detayları, 2 plaka.",
    summary:
      "Marmaris'in doğal ışığını ve modern mimari çizgisini tamamlayan bu özel mutfak uygulamasında, zarif damar yapısıyla öne çıkan Dekton Aura tercih edildi. Minimal tasarım anlayışıyla şekillenen projede, taşın doğal görünümü mekânın ferah atmosferiyle bütünleşerek modern ve zamansız bir görünüm oluşturdu. Yüksek dayanıklılığı, düşük gözenekli yapısı ve modern yüzey dokusuyla Dekton Aura; günlük kullanım konforu ve uzun ömürlü şıklık sundu.",
    cover:
      "/images/projects/marmaris-villa/marmaris-villa-mutfak-dekton-aura-01.webp",
    gallery: [
      "/images/projects/marmaris-villa/marmaris-villa-mutfak-dekton-aura-02.webp",
      "/images/projects/marmaris-villa/marmaris-villa-mutfak-dekton-aura-03.webp",
    ],
    i18n: {
      en: {
        title: "Marmaris Villa Kitchen Project",
        categoryLabel: "Villa — Kitchen Countertop",
        type: "Dekton Aura Kitchen Countertop",
        material: ["Dekton Aura", "Ultra-Compact Surface"],
        scope:
          "Kitchen countertop application in Dekton Aura; subtle veining transitions, wide-surface continuity and clean joinery, 2 slabs.",
        summary:
          "This kitchen project complements the natural light and modern architectural lines of Marmaris with Dekton Aura, chosen for its refined veining. Shaped by a minimal design approach, the natural appearance of the stone integrates with the open atmosphere of the space, creating a modern and timeless look.",
      },
      de: {
        title: "Marmaris Villa Küchenprojekt",
        categoryLabel: "Villa — Küchenarbeitsplatte",
        type: "Dekton Aura Küchenarbeitsplatte",
        material: ["Dekton Aura", "Ultra-Kompakt-Oberfläche"],
        scope:
          "Küchenarbeitsplatte in Dekton Aura; feine Maserungsübergänge, durchgehende Oberfläche und klare Fügungen, 2 Platten.",
        summary:
          "Dieses Küchenprojekt ergänzt das natürliche Licht und die moderne Architektur von Marmaris mit Dekton Aura — gewählt für seine elegante Maserung. Im minimalistischen Design fügt sich die natürliche Steinoptik in die offene Atmosphäre ein.",
      },
    },
  },
  {
    slug: "mimar-zuhal-tv-unitesi",
    scale: "bireysel",
    title: "Mimar Zuhal TV Ünitesi Projesi",
    category: "konut",
    categoryLabel: "TV Ünitesi",
    type: "Nouvo Corso Onice Cobalto TV Ünitesi Kaplama",
    location: "Denizli",
    year: 2025,
    material: ["Nouvo Corso Onice Cobalto", "Porselen"],
    area: "6 m²",
    scope:
      "Nouvo Corso Onice Cobalto ile TV ünitesi kaplama uygulaması; tek plaka üzerinden geniş ebatlı yüzey bütünlüğü, hassas kesim ve detaylı işçilik.",
    summary:
      "Mimar Zuhal'e özel olarak tasarlanan bu TV ünitesi uygulamasında, dikkat çekici desen yapısı ve doğal taş etkisiyle öne çıkan Nouvo Corso Onice Cobalto tercih edildi. Derin damar geçişleri ve güçlü yüzey hareketleri sayesinde yaşam alanına modern, sanatsal ve premium bir karakter kazandırıldı. Tek plaka üzerinden çalışılan geniş ebatlı yüzey yapısı, mekânda güçlü bir odak noktası oluştururken minimal mimari detaylarla kusursuz bir uyum sağladı.",
    cover:
      "/images/projects/mimar-zuhal-tv-unitesi/mimar-zuhal-tv-unitesi-onice-cobalto-01.webp",
    gallery: [
      "/images/projects/mimar-zuhal-tv-unitesi/mimar-zuhal-tv-unitesi-onice-cobalto-02.webp",
    ],
    i18n: {
      en: {
        title: "Architect Zuhal TV Unit Project",
        categoryLabel: "TV Unit",
        type: "Nouvo Corso Onice Cobalto TV Unit Cladding",
        material: ["Nouvo Corso Onice Cobalto", "Porcelain"],
        scope:
          "TV unit cladding application in Nouvo Corso Onice Cobalto; large-format surface continuity from a single slab, precision cutting and detailed craftsmanship.",
        summary:
          "For this TV unit designed for Architect Zuhal, Nouvo Corso Onice Cobalto was selected for its striking pattern and natural stone effect. Deep veining and powerful surface movement bring a modern, artistic and premium character to the living space. The wide-format surface from a single slab forms a strong focal point and integrates seamlessly with the minimal architectural details.",
      },
      de: {
        title: "Architektin Zuhal TV-Element Projekt",
        categoryLabel: "TV-Element",
        type: "Nouvo Corso Onice Cobalto TV-Element-Verkleidung",
        material: ["Nouvo Corso Onice Cobalto", "Porzellan"],
        scope:
          "TV-Element-Verkleidung in Nouvo Corso Onice Cobalto; großformatige Oberflächenkontinuität aus einer Platte, präzise Zuschnitte und detaillierte Verarbeitung.",
        summary:
          "Für dieses TV-Element, entworfen für Architektin Zuhal, wurde Nouvo Corso Onice Cobalto wegen seines markanten Musters und der Natursteinwirkung ausgewählt. Tiefe Maserung und kräftige Oberflächenbewegung verleihen dem Wohnraum einen modernen, künstlerischen und hochwertigen Charakter.",
      },
    },
  },
  {
    slug: "yaylali-mutfak",
    scale: "bireysel",
    title: "Yaylalı Mimarlık Mutfak Projesi",
    category: "konut",
    categoryLabel: "Mutfak Tezgahı",
    type: "Dekton Dove Mutfak Tezgahı",
    location: "Denizli",
    year: 2025,
    material: ["Dekton Dove", "Ultra-Compact Yüzey"],
    area: "15 m²",
    scope:
      "Dekton Dove ile U planlı mutfak tezgah ve çalışma yüzeyi uygulaması; geniş çalışma alanları, bütünsel dönüşler ve kesintisiz yüzey geçişleri, 4 plaka.",
    summary:
      "Modern çizgiler ve doğal dokunun buluştuğu bu mutfak projesinde, tezgah ve tüm çalışma yüzeylerinde Dekton Dove tercih edildi. Açık tonlu taşın yumuşak dokusu; koyu renk mobilyalar ve minimal mimari detaylarla dengeli bir kontrast oluşturarak mekâna sade ama güçlü bir karakter kazandırdı. Isıya, çizilmeye ve lekeye karşı yüksek dayanım sunan Dekton Dove; modern yaşam alanları için uzun ömürlü ve premium bir çözüm sunarken, mat dokusu sayesinde doğal ışıkta yalın ve şık bir görünüm sağladı.",
    cover:
      "/images/projects/yaylali-mutfak/yaylali-mutfak-tezgah-dekton-dove-01.webp",
    gallery: [
      "/images/projects/yaylali-mutfak/yaylali-mutfak-tezgah-dekton-dove-02.webp",
      "/images/projects/yaylali-mutfak/yaylali-mutfak-tezgah-dekton-dove-03.webp",
    ],
    i18n: {
      en: {
        title: "Yaylalı Architecture Kitchen Project",
        categoryLabel: "Kitchen Countertop",
        type: "Dekton Dove Kitchen Countertop",
        material: ["Dekton Dove", "Ultra-Compact Surface"],
        scope:
          "U-shaped kitchen countertop and work surface application in Dekton Dove; generous working areas, integrated turns and continuous surface transitions, 4 slabs.",
        summary:
          "In this kitchen where modern lines meet natural texture, Dekton Dove was chosen for the countertop and all work surfaces. The soft texture of the light-toned stone forms a balanced contrast with dark-toned cabinetry and minimal architectural details, lending the space a quiet but confident character. Highly resistant to heat, scratches and stains, Dekton Dove offers a long-lasting, premium solution.",
      },
      de: {
        title: "Yaylalı Architektur Küchenprojekt",
        categoryLabel: "Küchenarbeitsplatte",
        type: "Dekton Dove Küchenarbeitsplatte",
        material: ["Dekton Dove", "Ultra-Kompakt-Oberfläche"],
        scope:
          "U-förmige Küchenarbeitsplatte und Arbeitsflächen in Dekton Dove; großzügige Arbeitsbereiche, integrierte Eckverläufe und durchgehende Übergänge, 4 Platten.",
        summary:
          "In dieser Küche, in der moderne Linien auf natürliche Textur treffen, wurde Dekton Dove für Arbeitsplatte und alle Arbeitsflächen gewählt. Die weiche Textur des hellen Steins bildet einen ausgewogenen Kontrast zu dunklen Möbeln und minimalen architektonischen Details.",
      },
    },
  },
  {
    slug: "serife-hanim-mutfak",
    scale: "bireysel",
    title: "Şerife Hanım Mutfak Projesi",
    category: "konut",
    categoryLabel: "Mutfak Tezgahı",
    type: "Bien Vortex Mutfak Tezgahı & Duvar Kaplama",
    location: "Denizli",
    year: 2025,
    material: ["Bien Vortex", "Porselen"],
    area: "11 m²",
    scope:
      "Bien Vortex porselen yüzey ile mutfak tezgah ve duvar kaplama uygulaması; köşe dönüşleri, backsplash detayları, kesintisiz damar geçişleri, 3 plaka.",
    summary:
      "Şerife Hanım'a ait bu mutfak projesinde modern çizgiler ve doğal taş estetiği bir araya getirildi. Tezgah ve duvar yüzeylerinde tercih edilen Bien Vortex porselen yüzey, mekânın ferah atmosferini güçlendirirken kesintisiz damar geçişleriyle bütüncül bir görünüm sağladı. Minimal beyaz mutfak tasarımıyla uyumlu olarak uygulanan yüzeyler, hem estetik hem de günlük kullanım dayanıklılığı açısından uzun ömürlü bir çözüm sundu.",
    cover:
      "/images/projects/serife-hanim-mutfak/serife-hanim-mutfak-bien-vortex-01.webp",
    gallery: [
      "/images/projects/serife-hanim-mutfak/serife-hanim-mutfak-bien-vortex-02.webp",
      "/images/projects/serife-hanim-mutfak/serife-hanim-mutfak-bien-vortex-03.webp",
    ],
    i18n: {
      en: {
        title: "Şerife Hanım Kitchen Project",
        categoryLabel: "Kitchen Countertop",
        type: "Bien Vortex Kitchen Countertop & Wall Cladding",
        material: ["Bien Vortex", "Porcelain"],
        scope:
          "Kitchen countertop and wall cladding in Bien Vortex porcelain; corner transitions, backsplash details, continuous veining, 3 slabs.",
        summary:
          "Şerife Hanım's kitchen project unites modern lines with natural stone aesthetics. Bien Vortex porcelain — chosen for the countertop and wall surfaces — strengthens the airy atmosphere of the space while providing a seamless look thanks to continuous veining. Aligned with the minimal white kitchen design, the surfaces deliver a long-lasting, durable solution alongside refined aesthetics.",
      },
      de: {
        title: "Şerife Hanım Küchenprojekt",
        categoryLabel: "Küchenarbeitsplatte",
        type: "Bien Vortex Küchenarbeitsplatte & Wandverkleidung",
        material: ["Bien Vortex", "Porzellan"],
        scope:
          "Küchenarbeitsplatte und Wandverkleidung in Bien Vortex Porzellan; Eckübergänge, Backsplash-Details, durchgehende Maserung, 3 Platten.",
        summary:
          "Das Küchenprojekt von Şerife Hanım vereint moderne Linien mit der Ästhetik des Natursteins. Bien Vortex Porzellan auf Arbeitsplatte und Wand verstärkt die luftige Atmosphäre des Raums und schafft dank durchgehender Maserung einen geschlossenen Gesamteindruck.",
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

export function localizedScaleLabel(
  slug: ProjectScale,
  locale: Locale,
): string {
  const s = projectScales.find((x) => x.slug === slug);
  if (!s) return slug;
  return s.label[locale] ?? s.label.tr;
}
