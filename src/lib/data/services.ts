import {
  Building2,
  ChefHat,
  Bath,
  Flame,
  StepForward,
  Cpu,
  Droplets,
  ScanLine,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { Locale } from "@/i18n/routing";

export interface ServiceTranslation {
  title: string;
  description: string;
  details: string[];
  tags: string[];
  categoryLabel: string;
}

export interface Service extends ServiceTranslation {
  slug: string;
  number: string;
  category: "cephe" | "mutfak-banyo" | "mobilya" | "dekoratif" | "teknoloji";
  icon: LucideIcon;
  image: string;
  i18n?: Partial<Record<Exclude<Locale, "tr">, Partial<ServiceTranslation>>>;
}

export const serviceCategories = [
  {
    slug: "cephe",
    label: {
      tr: "Dış Cephe & Mimari Kaplama",
      en: "Exterior Façade & Cladding",
      de: "Außenfassade & Verkleidung",
    },
  },
  {
    slug: "mutfak-banyo",
    label: {
      tr: "Mutfak & Banyo Çözümleri",
      en: "Kitchen & Bathroom",
      de: "Küche & Bad",
    },
  },
  {
    slug: "mobilya",
    label: {
      tr: "Özel Tasarım Taş Mobilya",
      en: "Custom Stone Furniture",
      de: "Maßgefertigte Steinmöbel",
    },
  },
  {
    slug: "dekoratif",
    label: {
      tr: "Dekoratif Uygulamalar",
      en: "Decorative Applications",
      de: "Dekorative Anwendungen",
    },
  },
  {
    slug: "teknoloji",
    label: {
      tr: "Üretim Teknolojileri",
      en: "Manufacturing Technologies",
      de: "Fertigungstechnologien",
    },
  },
] as const;

export const services: Service[] = [
  {
    slug: "mekanik-cephe-sistemleri",
    number: "01",
    category: "cephe",
    categoryLabel: "Dış Cephe & Mimari Kaplama",
    title: "Mekanik Cephe Sistemleri",
    description:
      "Çok katlı yapılarda yapıştırma yerine 304/316 paslanmaz çelik ankrajlarla güvenli montaj sağlıyoruz. Taş ile bina arasında bırakılan hava boşluğu havalandırmalı cephe etkisi yaratır.",
    details: [
      "304/316 paslanmaz çelik ankraj sistemleri",
      "Havalandırmalı cephe çözümü",
      "Deprem güvenli statik tasarım",
      "Yalıtım uyumlu detay çözümleri",
    ],
    tags: ["304/316 Çelik", "Deprem Güvenli", "Havalandırmalı"],
    icon: Building2,
    image: "/images/services/hizmet-uygulama.webp",
    i18n: {
      en: {
        title: "Mechanical Façade Systems",
        categoryLabel: "Exterior Façade & Cladding",
        description:
          "On multi-story buildings we ensure secure installation with 304/316 stainless-steel anchors instead of adhesives. The air gap between stone and building creates a ventilated façade effect.",
        details: [
          "304/316 stainless-steel anchor systems",
          "Ventilated façade solution",
          "Earthquake-safe structural design",
          "Insulation-compatible detailing",
        ],
        tags: ["304/316 Steel", "Earthquake Safe", "Ventilated"],
      },
      de: {
        title: "Mechanische Fassadensysteme",
        categoryLabel: "Außenfassade & Verkleidung",
        description:
          "Bei mehrgeschossigen Gebäuden gewährleisten wir die sichere Montage mit Edelstahlankern 304/316 statt Verklebung. Der Luftspalt zwischen Stein und Gebäude erzeugt einen hinterlüfteten Fassadeneffekt.",
        details: [
          "Edelstahlanker-Systeme 304/316",
          "Hinterlüftete Fassadenlösung",
          "Erdbebensichere statische Konstruktion",
          "Dämmungsverträgliche Detaillösungen",
        ],
        tags: ["304/316 Stahl", "Erdbebensicher", "Hinterlüftet"],
      },
    },
  },
  {
    slug: "mutfak-tezgahi",
    number: "02",
    category: "mutfak-banyo",
    categoryLabel: "Mutfak & Banyo Çözümleri",
    title: "Mutfak Tezgahı (Porselen & Kuvars)",
    description:
      "Çizilmez, leke tutmaz ve ısıya dayanıklı Porselen (Neolith, Dekton, Laminam) ve Kuvars (Çimstone, Belenco) tezgah uygulamaları. Asitlere karşı üstün direnç sağlayan sinterlenmiş taş teknolojisi.",
    details: [
      "Sinterlenmiş porselen yüzey uygulaması",
      "Çimstone & Belenco kuvars tezgahlar",
      "Waterfall (şelale) ada tasarımı",
      "Entegre evye sistemleri",
    ],
    tags: ["Porselen", "Kuvars", "Sinter Taş"],
    icon: ChefHat,
    image: "/images/services/hizmet-uygulama.webp",
    i18n: {
      en: {
        title: "Kitchen Countertop (Porcelain & Quartz)",
        categoryLabel: "Kitchen & Bathroom",
        description:
          "Scratch-, stain- and heat-resistant porcelain (Neolith, Dekton, Laminam) and quartz (Çimstone, Belenco) countertop applications. Sintered stone technology with superior acid resistance.",
        details: [
          "Sintered porcelain surface application",
          "Çimstone & Belenco quartz countertops",
          "Waterfall island design",
          "Integrated sink systems",
        ],
        tags: ["Porcelain", "Quartz", "Sintered Stone"],
      },
      de: {
        title: "Küchenarbeitsplatte (Porzellan & Quarz)",
        categoryLabel: "Küche & Bad",
        description:
          "Kratz-, fleck- und hitzebeständige Porzellan- (Neolith, Dekton, Laminam) und Quarz- (Çimstone, Belenco) Arbeitsplatten. Sintersteintechnologie mit überlegener Säurebeständigkeit.",
        details: [
          "Sinterporzellan-Oberflächenanwendung",
          "Çimstone & Belenco Quarz-Arbeitsplatten",
          "Waterfall-Inseldesign",
          "Integrierte Spülensysteme",
        ],
        tags: ["Porzellan", "Quarz", "Sinterstein"],
      },
    },
  },
  {
    slug: "banyo-islak-hacim",
    number: "03",
    category: "mutfak-banyo",
    categoryLabel: "Mutfak & Banyo Çözümleri",
    title: "Banyo & Islak Hacim",
    description:
      "Mermer ve oniks duş tekneleri, duvar kaplamaları, Hilton lavabo tezgahları ve neme dayanıklı yüzeyler. Islak hacimlerde hijyen, dayanıklılık ve fonksiyonelliğin buluşması.",
    details: [
      "Tek parça mermer / oniks duş teknesi",
      "Hilton lavabo tezgahı",
      "Bookmatch banyo duvar kaplaması",
      "Neme dayanıklı sealer uygulaması",
    ],
    tags: ["Hijyen", "Bookmatch", "Tek Parça"],
    icon: Bath,
    image: "/images/services/hizmet-uygulama.webp",
    i18n: {
      en: {
        title: "Bathroom & Wet Areas",
        categoryLabel: "Kitchen & Bathroom",
        description:
          "Marble and onyx shower trays, wall cladding, Hilton sink countertops and moisture-resistant surfaces. Hygiene, durability and functionality meet in wet areas.",
        details: [
          "Single-piece marble / onyx shower tray",
          "Hilton sink countertop",
          "Bookmatch bathroom wall cladding",
          "Moisture-resistant sealer application",
        ],
        tags: ["Hygiene", "Bookmatch", "Single Piece"],
      },
      de: {
        title: "Bad & Nassbereiche",
        categoryLabel: "Küche & Bad",
        description:
          "Marmor- und Onyx-Duschwannen, Wandverkleidungen, Hilton-Waschtische und feuchtigkeitsbeständige Oberflächen. Hygiene, Haltbarkeit und Funktionalität treffen in Nassbereichen aufeinander.",
        details: [
          "Einteilige Marmor- / Onyx-Duschwanne",
          "Hilton-Waschtisch",
          "Bookmatch-Badwandverkleidung",
          "Feuchtigkeitsbeständige Sealer-Anwendung",
        ],
        tags: ["Hygiene", "Bookmatch", "Einteilig"],
      },
    },
  },
  {
    slug: "somine-yapimi",
    number: "04",
    category: "dekoratif",
    categoryLabel: "Dekoratif Uygulamalar",
    title: "Şömine Yapımı",
    description:
      "Isıya dayanıklı granit veya mermer kullanılarak tasarlanan; klasik, modern veya minimalist şömine kaplamaları. CNC ile işlenmiş sütun ve taç detayları.",
    details: [
      "Isıya dayanıklı malzeme seçimi",
      "Klasik / modern / minimalist tasarım",
      "CNC ile sütun ve taç detayları",
      "Yerinde montaj koordinasyonu",
    ],
    tags: ["Isıya Dayanıklı", "CNC Detay"],
    icon: Flame,
    image: "/images/services/hizmet-uygulama.webp",
    i18n: {
      en: {
        title: "Fireplace Construction",
        categoryLabel: "Decorative Applications",
        description:
          "Classic, modern or minimalist fireplace cladding designed with heat-resistant granite or marble. Column and crown details processed with CNC.",
        details: [
          "Heat-resistant material selection",
          "Classic / modern / minimalist design",
          "Column and crown details with CNC",
          "On-site installation coordination",
        ],
        tags: ["Heat Resistant", "CNC Detail"],
      },
      de: {
        title: "Kaminbau",
        categoryLabel: "Dekorative Anwendungen",
        description:
          "Klassische, moderne oder minimalistische Kaminverkleidungen aus hitzebeständigem Granit oder Marmor. Säulen- und Kronendetails per CNC bearbeitet.",
        details: [
          "Auswahl hitzebeständiger Materialien",
          "Klassisches / modernes / minimalistisches Design",
          "Säulen- und Kronendetails per CNC",
          "Vor-Ort-Montagekoordination",
        ],
        tags: ["Hitzebeständig", "CNC-Detail"],
      },
    },
  },
  {
    slug: "basamak-doseme",
    number: "05",
    category: "dekoratif",
    categoryLabel: "Dekoratif Uygulamalar",
    title: "Basamak Döşeme & Merdiven",
    description:
      "İç mekanlarda mermer, dış mekanlarda kaymaz granit kullanılarak yapılan rıhtlı veya rıhtsız merdiven basamakları. LED aydınlatma uyumlu çözümler.",
    details: [
      "Mermer iç mekan basamak",
      "Kaymaz granit dış mekan basamak",
      "Rıhtlı / rıhtsız sistem",
      "LED aydınlatma uyumlu detay",
    ],
    tags: ["Kaymaz Granit", "LED Uyumlu"],
    icon: StepForward,
    image: "/images/services/hizmet-uygulama.webp",
    i18n: {
      en: {
        title: "Stairs & Steps",
        categoryLabel: "Decorative Applications",
        description:
          "Risered or open-riser stairs in marble for interior and non-slip granite for exterior. LED-lighting compatible solutions.",
        details: [
          "Marble interior stair treads",
          "Non-slip granite exterior steps",
          "Risered / open-riser system",
          "LED-lighting compatible detailing",
        ],
        tags: ["Non-slip Granite", "LED Compatible"],
      },
      de: {
        title: "Treppen & Stufen",
        categoryLabel: "Dekorative Anwendungen",
        description:
          "Setzstufen oder offene Treppen — Marmor im Innenbereich, rutschfester Granit im Außenbereich. LED-beleuchtungskompatible Lösungen.",
        details: [
          "Marmor-Innenstufen",
          "Rutschfeste Granit-Außenstufen",
          "Mit/ohne Setzstufe",
          "LED-Beleuchtung kompatible Details",
        ],
        tags: ["Rutschfester Granit", "LED-kompatibel"],
      },
    },
  },
  {
    slug: "bes-eksen-cnc",
    number: "06",
    category: "teknoloji",
    categoryLabel: "Üretim Teknolojileri",
    title: "5 Eksen CNC İşleme",
    description:
      "Monoblok gövde yapısı ile titreşimsiz üretim. ± 0.005 mm hassasiyetle karmaşık geometrik formlar, sütun başlıkları ve 3D yüzey işlemeleri.",
    details: [
      "± 0.005 mm hassasiyet",
      "Monoblok gövde yapısı, titreşimsiz",
      "Karmaşık geometri & 3D yüzey",
      "Sütun başlığı, taç, dekoratif form üretimi",
    ],
    tags: ["3D Yüzey", "Monoblok", "Hassas İşleme"],
    icon: Cpu,
    image: "/images/services/hizmet-uygulama.webp",
    i18n: {
      en: {
        title: "5-Axis CNC Machining",
        categoryLabel: "Manufacturing Technologies",
        description:
          "Vibration-free production with monoblock body structure. Complex geometric forms, column heads and 3D surface processing with ± 0.005 mm precision.",
        details: [
          "± 0.005 mm precision",
          "Monoblock body — vibration-free",
          "Complex geometry & 3D surface",
          "Column heads, crowns, decorative forms",
        ],
        tags: ["3D Surface", "Monoblock", "Precision"],
      },
      de: {
        title: "5-Achs-CNC-Bearbeitung",
        categoryLabel: "Fertigungstechnologien",
        description:
          "Vibrationsfreie Produktion mit Monoblock-Gehäuse. Komplexe geometrische Formen, Säulenkapitelle und 3D-Oberflächenbearbeitung mit ± 0,005 mm Präzision.",
        details: [
          "± 0,005 mm Präzision",
          "Monoblock-Gehäuse — vibrationsfrei",
          "Komplexe Geometrie & 3D-Oberfläche",
          "Säulenkapitelle, Kronen, dekorative Formen",
        ],
        tags: ["3D-Oberfläche", "Monoblock", "Präzision"],
      },
    },
  },
  {
    slug: "waterjet-kesim",
    number: "07",
    category: "teknoloji",
    categoryLabel: "Üretim Teknolojileri",
    title: "Waterjet (Su Jeti) Kesim",
    description:
      "Isısız kesim teknolojisi (Cold Cutting). Granit, porselen ve metalleri deformasyon ve çatlama riski olmadan, ± 0.1 mm hassasiyetle 200 mm kalınlığa kadar işliyoruz.",
    details: [
      "± 0.1 mm hassasiyet",
      "200 mm kalınlığa kadar kesim",
      "Isısız kesim — deformasyon yok",
      "Karmaşık desen ve mozaik üretimi",
    ],
    tags: ["Cold Cutting", "Deformasyonsuz", "Çatlama Yok"],
    icon: Droplets,
    image: "/images/services/hizmet-uygulama.webp",
    i18n: {
      en: {
        title: "Waterjet Cutting",
        categoryLabel: "Manufacturing Technologies",
        description:
          "Cold cutting technology. We process granite, porcelain and metals without deformation or cracking risk, with ± 0.1 mm precision up to 200 mm thickness.",
        details: [
          "± 0.1 mm precision",
          "Cuts up to 200 mm thickness",
          "Cold cutting — no deformation",
          "Complex pattern and mosaic production",
        ],
        tags: ["Cold Cutting", "No Deformation", "No Cracks"],
      },
      de: {
        title: "Wasserstrahlschneiden",
        categoryLabel: "Fertigungstechnologien",
        description:
          "Kaltschnitttechnologie. Granit, Porzellan und Metalle ohne Deformations- oder Rissrisiko, mit ± 0,1 mm Präzision bis 200 mm Dicke verarbeiten.",
        details: [
          "± 0,1 mm Präzision",
          "Schneidet bis 200 mm Dicke",
          "Kaltschnitt — keine Deformation",
          "Komplexe Muster- und Mosaikproduktion",
        ],
        tags: ["Kaltschnitt", "Verformungsfrei", "Rissfrei"],
      },
    },
  },
  {
    slug: "dijital-roleve",
    number: "08",
    category: "teknoloji",
    categoryLabel: "Üretim Teknolojileri",
    title: "Dijital Rölöve & Lazer Tarama",
    description:
      "Şantiyeyi dijitalleştirip mm hassasiyetinde 3D veriye dönüştürüyoruz. Üretim öncesi dijital ikiz üzerinde montaj yaparak fireyi sıfıra indiriyoruz.",
    details: [
      "Lazer tarama ile sahanın 3D modeli",
      "Proje–saha sapma analizi",
      "Sanal montaj & fire önleme",
      "Üretim öncesi onay süreci",
    ],
    tags: ["Lazer Tarama", "Sanal Montaj", "Sıfır Fire"],
    icon: ScanLine,
    image: "/images/services/hizmet-uygulama.webp",
    i18n: {
      en: {
        title: "Digital Surveying & Laser Scanning",
        categoryLabel: "Manufacturing Technologies",
        description:
          "We digitize the site and convert it into 3D data with mm precision. Pre-production virtual installation drives waste to zero.",
        details: [
          "3D site model via laser scanning",
          "Project-site deviation analysis",
          "Virtual installation & waste prevention",
          "Pre-production approval process",
        ],
        tags: ["Laser Scanning", "Virtual Installation", "Zero Waste"],
      },
      de: {
        title: "Digitales Aufmaß & Laserscanning",
        categoryLabel: "Fertigungstechnologien",
        description:
          "Wir digitalisieren die Baustelle und konvertieren sie in 3D-Daten mit mm-Präzision. Virtuelle Montage vor der Produktion reduziert Verschnitt auf null.",
        details: [
          "3D-Geländemodell per Laserscanning",
          "Projekt-Standort-Abweichungsanalyse",
          "Virtuelle Montage & Verschnittvermeidung",
          "Genehmigungsprozess vor der Produktion",
        ],
        tags: ["Laserscanning", "Virtuelle Montage", "Null Verschnitt"],
      },
    },
  },
];

export function localizedService(
  service: Service,
  locale: Locale,
): ServiceTranslation {
  if (locale === "tr") return service;
  const o = service.i18n?.[locale];
  return {
    title: o?.title ?? service.title,
    description: o?.description ?? service.description,
    details: o?.details ?? service.details,
    tags: o?.tags ?? service.tags,
    categoryLabel: o?.categoryLabel ?? service.categoryLabel,
  };
}
