import type { Locale } from "@/i18n/routing";

export interface MachineTranslation {
  title: string;
  subtitle: string;
  description: string;
  precisionLabel: string;
  precisionValue: string;
  tags: string[];
}

export interface Machine extends MachineTranslation {
  slug: string;
  number: string;
  image: string;
  i18n?: Partial<Record<Exclude<Locale, "tr">, Partial<MachineTranslation>>>;
}

export const machinery: Machine[] = [
  {
    slug: "su-jeti-waterjet",
    number: "01",
    title: "Su Jeti (Waterjet)",
    subtitle: "Cold Cutting Teknolojisi",
    description:
      "Isısız kesim teknolojisi (Cold Cutting). Granit, porselen ve metalleri deformasyon ve çatlama riski olmadan işliyoruz.",
    precisionLabel: "Hassasiyet",
    precisionValue: "± 0.1 mm / 200 mm Kalınlık",
    tags: ["Deformasyonsuz", "Çatlama Yok"],
    image: "/images/machinery/waterjet.webp",
    i18n: {
      en: {
        title: "Waterjet",
        subtitle: "Cold Cutting Technology",
        description:
          "Heatless cutting technology. We process granite, porcelain, and metals with no deformation or cracking risk.",
        precisionLabel: "Precision",
        precisionValue: "± 0.1 mm / 200 mm thickness",
        tags: ["No Deformation", "No Cracking"],
      },
      de: {
        title: "Wasserstrahl (Waterjet)",
        subtitle: "Kaltschneidetechnologie",
        description:
          "Hitzefreie Schneidetechnologie. Granit, Porzellan und Metalle ohne Verformungs- oder Rissrisiko.",
        precisionLabel: "Präzision",
        precisionValue: "± 0,1 mm / 200 mm Dicke",
        tags: ["Verformungsfrei", "Kein Bruch"],
      },
    },
  },
  {
    slug: "5-eksen-cnc",
    number: "02",
    title: "5 Eksen CNC",
    subtitle: "Monoblok Gövde, Titreşimsiz Üretim",
    description:
      "Monoblok gövde yapısı ile titreşimsiz üretim. Karmaşık geometrik formlar, sütun başlıkları ve 3D yüzey işlemeleri.",
    precisionLabel: "Hassasiyet",
    precisionValue: "± 0.005 mm / 5 Eksen",
    tags: ["3D Yüzeyler", "Monoblok Gövde"],
    image: "/images/machinery/5-eksen-cnc.webp",
    i18n: {
      en: {
        title: "5-Axis CNC",
        subtitle: "Monoblock Body, Vibration-Free Production",
        description:
          "Vibration-free production with monoblock body. Complex geometric forms, column capitals, and 3D surface processing.",
        precisionLabel: "Precision",
        precisionValue: "± 0.005 mm / 5 Axes",
        tags: ["3D Surfaces", "Monoblock Body"],
      },
      de: {
        title: "5-Achsen-CNC",
        subtitle: "Monoblock-Korpus, vibrationsfreie Fertigung",
        description:
          "Vibrationsfreie Fertigung mit Monoblock-Korpus. Komplexe geometrische Formen, Säulenkapitelle und 3D-Oberflächenbearbeitung.",
        precisionLabel: "Präzision",
        precisionValue: "± 0,005 mm / 5 Achsen",
        tags: ["3D-Oberflächen", "Monoblock-Korpus"],
      },
    },
  },
  {
    slug: "kopru-kesme-bridge-saw",
    number: "03",
    title: "Köprü Kesme (Bridge Saw)",
    subtitle: "Yüksek Hızlı Plaka Ebatlama",
    description:
      "Yüksek hızlı plaka ebatlama teknolojisi. Doğal taş plakalarını, istenilen ölçülerde ve açılarda, firesiz ve gönyesinde keserek projeye hazır hale getiriyoruz.",
    precisionLabel: "Hassasiyet",
    precisionValue: "± 0.2 mm / Levha Kesim",
    tags: ["Seri Üretim", "Gönyeli Kesim"],
    image: "/images/machinery/kopru-kesme.webp",
    i18n: {
      en: {
        title: "Bridge Saw",
        subtitle: "High-Speed Slab Cutting",
        description:
          "High-speed slab sizing technology. We cut natural stone slabs to desired dimensions and angles, waste-free and perfectly squared, ready for the project.",
        precisionLabel: "Precision",
        precisionValue: "± 0.2 mm / Slab Cut",
        tags: ["Mass Production", "Squared Cutting"],
      },
      de: {
        title: "Brückensäge",
        subtitle: "Hochgeschwindigkeits-Plattenzuschnitt",
        description:
          "Hochgeschwindigkeits-Zuschnittstechnologie. Natursteinplatten in gewünschten Maßen und Winkeln, abfallfrei und exakt rechtwinklig.",
        precisionLabel: "Präzision",
        precisionValue: "± 0,2 mm / Plattenschnitt",
        tags: ["Serienfertigung", "Gehrungsschnitt"],
      },
    },
  },
  {
    slug: "yan-kesme-side-cutting",
    number: "04",
    title: "Yan Kesme (Side Cutting)",
    subtitle: "Kusursuz Kenar Düzeltme",
    description:
      "Kusursuz kenar düzeltme işlemi. Bant halindeki taşların kenarlarını traşlayarak, ürünün tam genişliğe ulaşmasını ve montaj sırasında mükemmel birleşim sağlar.",
    precisionLabel: "Hassasiyet",
    precisionValue: "± 0.1 mm / Paralellik",
    tags: ["Tam Ölçü", "Düzgün Kenar"],
    image: "/images/machinery/yan-kesme.webp",
    i18n: {
      en: {
        title: "Side Cutting",
        subtitle: "Flawless Edge Trimming",
        description:
          "Flawless edge trimming process. By trimming the edges of strip-cut stones, the product reaches exact width and perfect joint alignment during installation.",
        precisionLabel: "Precision",
        precisionValue: "± 0.1 mm / Parallelism",
        tags: ["Exact Width", "Clean Edges"],
      },
      de: {
        title: "Seitenschnitt",
        subtitle: "Perfekte Kantenbearbeitung",
        description:
          "Perfekte Kantenbearbeitung. Durch das Beschneiden der Kanten erreicht das Produkt die exakte Breite und perfekte Fugenanpassung.",
        precisionLabel: "Präzision",
        precisionValue: "± 0,1 mm / Parallelität",
        tags: ["Exakte Breite", "Saubere Kanten"],
      },
    },
  },
  {
    slug: "kafa-kesme-cross-cutting",
    number: "05",
    title: "Kafa Kesme (Cross Cutting)",
    subtitle: "Hızlı ve Hassas Boylama",
    description:
      "Hızlı ve hassas boylama teknolojisi. Şerit halindeki ürünlerin boylarını milimetrik hassasiyetle keserek, standart döşeme ölçülerine (fayans/plaka) getiriyoruz.",
    precisionLabel: "Hassasiyet",
    precisionValue: "± 0.5 mm / Boy Ebatlama",
    tags: ["Standart Ebat", "Hızlı İşlem"],
    image: "/images/machinery/kafa-kesme.webp",
    i18n: {
      en: {
        title: "Cross Cutting",
        subtitle: "Fast and Precise Length Sizing",
        description:
          "Fast and precise length sizing technology. We cut strip products to standard floor dimensions (tile/slab) with millimeter precision.",
        precisionLabel: "Precision",
        precisionValue: "± 0.5 mm / Length Sizing",
        tags: ["Standard Sizes", "Fast Processing"],
      },
      de: {
        title: "Kopfschnitt",
        subtitle: "Schnelles und präzises Längenmaß",
        description:
          "Schnelle und präzise Längenmaßtechnologie. Streifenprodukte werden mit Millimeterpräzision auf Standardmaße zugeschnitten.",
        precisionLabel: "Präzision",
        precisionValue: "± 0,5 mm / Längenmaß",
        tags: ["Standardmaße", "Schnelle Bearbeitung"],
      },
    },
  },
  {
    slug: "pah-makinesi-chamfering",
    number: "06",
    title: "PAH Makinesi (Chamfering)",
    subtitle: "Estetik Kenar Bitiş",
    description:
      "Estetik kenar bitiş teknolojisi. Keskin taş kenarlarını açılı (pahlı) işleyerek hem estetik bir görünüm kazandırıyor hem de kenar kırılmalarına karşı dayanıklılığı artırıyoruz.",
    precisionLabel: "Hassasiyet",
    precisionValue: "45° / Açısal Parlaklık",
    tags: ["Estetik Görünüm", "Pürüzsüz Bitiş"],
    image: "/images/machinery/pah-makinesi.webp",
    i18n: {
      en: {
        title: "Chamfering Machine",
        subtitle: "Aesthetic Edge Finishing",
        description:
          "Aesthetic edge finishing technology. Sharp stone edges are processed at an angle (chamfer), giving aesthetic appearance and increased durability against edge breakage.",
        precisionLabel: "Precision",
        precisionValue: "45° / Polished Angle",
        tags: ["Aesthetic Look", "Smooth Finish"],
      },
      de: {
        title: "Fasenmaschine",
        subtitle: "Ästhetische Kantenbearbeitung",
        description:
          "Ästhetische Kantenbearbeitungstechnologie. Scharfe Steinkanten werden im Winkel (Fase) bearbeitet — ästhetische Optik und erhöhte Bruchfestigkeit.",
        precisionLabel: "Präzision",
        precisionValue: "45° / Polierte Kante",
        tags: ["Ästhetische Optik", "Glatter Abschluss"],
      },
    },
  },
];

export function localizedMachine(machine: Machine, locale: Locale): MachineTranslation {
  if (locale === "tr") return machine;
  const o = machine.i18n?.[locale];
  return {
    title: o?.title ?? machine.title,
    subtitle: o?.subtitle ?? machine.subtitle,
    description: o?.description ?? machine.description,
    precisionLabel: o?.precisionLabel ?? machine.precisionLabel,
    precisionValue: o?.precisionValue ?? machine.precisionValue,
    tags: o?.tags ?? machine.tags,
  };
}
