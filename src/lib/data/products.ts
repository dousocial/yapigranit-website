import type { Locale } from "@/i18n/routing";

export interface ProductTranslation {
  name: string;
  tagline: string;
  badge?: string;
  description: string;
  features: string[];
  benefits: string[];
  bestUse: string;
}

export interface Product extends ProductTranslation {
  slug: string;
  image: string;
  i18n?: Partial<Record<Exclude<Locale, "tr">, Partial<ProductTranslation>>>;
}

export const products: Product[] = [
  {
    slug: "porselen",
    name: "Porselen",
    tagline: "Teknolojinin Zirvesi",
    badge: "En Dayanıklı",
    description:
      "Yüksek teknoloji ile sıkıştırılmış, ultra dayanıklı porselen yüzeyler. Neolith, Dekton ve Laminam markalarıyla sinterlenmiş taş teknolojisinin tüm avantajlarını sunuyoruz.",
    features: ["Isı Direnci", "Çizilmezlik", "Leke Tutmaz"],
    benefits: [
      "Ateşe ve UV ışınlarına tam direnç",
      "Dış mekan kullanımına uygun",
      "İnce ve hafif yapı",
    ],
    bestUse: "Yoğun mutfaklar & dış mekan",
    image: "/images/products/urun-porselen.webp",
    i18n: {
      en: {
        name: "Porcelain",
        tagline: "Peak of Technology",
        badge: "Most Durable",
        description:
          "Ultra-durable porcelain surfaces compressed with high technology. We offer all the advantages of sintered stone technology with Neolith, Dekton and Laminam brands.",
        features: ["Heat Resistance", "Scratch-proof", "Stain-proof"],
        benefits: [
          "Full resistance to fire and UV",
          "Suitable for outdoor use",
          "Thin and lightweight",
        ],
        bestUse: "High-traffic kitchens & outdoor",
      },
      de: {
        name: "Porzellan",
        tagline: "Spitzentechnologie",
        badge: "Am haltbarsten",
        description:
          "Hochtechnologisch verdichtete, ultra-langlebige Porzellanoberflächen. Mit Neolith-, Dekton- und Laminam-Marken bieten wir alle Vorteile der Sintersteintechnologie.",
        features: ["Hitzebeständigkeit", "Kratzfest", "Fleckenresistent"],
        benefits: [
          "Vollständige Beständigkeit gegen Feuer und UV",
          "Für Außenbereiche geeignet",
          "Dünn und leicht",
        ],
        bestUse: "Hochfrequentierte Küchen & Außenbereich",
      },
    },
  },
  {
    slug: "mermer",
    name: "Doğal Taş (Mermer)",
    tagline: "Doğanın Sanatı",
    badge: "Premium Seçim",
    description:
      "Milyonlarca yılda oluşan, eşsiz ve tekrarı olmayan plakalar. Calacatta, Bianco Carrara, Nero Marquina ve daha pek çok mermer çeşidi ile prestijli mekanlar.",
    features: ["Benzersizlik", "Isı Direnci", "Doğallık"],
    benefits: [
      "Her plaka bir sanat eseri",
      "Zamanla değerlenen estetik",
      "Prestijli görünüm",
    ],
    bestUse: "Lüks banyo, şömine, salon",
    image: "/images/products/urun-mermer.webp",
    i18n: {
      en: {
        name: "Natural Stone (Marble)",
        tagline: "Art of Nature",
        badge: "Premium Choice",
        description:
          "Slabs formed over millions of years, each unique and unrepeatable. Prestigious spaces with Calacatta, Bianco Carrara, Nero Marquina and many more marble varieties.",
        features: ["Uniqueness", "Heat Resistance", "Naturalness"],
        benefits: [
          "Every slab is a work of art",
          "Aesthetics that appreciate over time",
          "Prestigious appearance",
        ],
        bestUse: "Luxury bathroom, fireplace, living room",
      },
      de: {
        name: "Naturstein (Marmor)",
        tagline: "Kunst der Natur",
        badge: "Premium-Wahl",
        description:
          "In Millionen Jahren entstandene, einzigartige und unwiederholbare Platten. Prestigeträchtige Räume mit Calacatta, Bianco Carrara, Nero Marquina und vielen weiteren Marmorvarianten.",
        features: ["Einzigartigkeit", "Hitzebeständigkeit", "Natürlichkeit"],
        benefits: [
          "Jede Platte ein Kunstwerk",
          "Im Wert steigende Ästhetik",
          "Prestigeträchtiges Aussehen",
        ],
        bestUse: "Luxusbad, Kamin, Wohnzimmer",
      },
    },
  },
  {
    slug: "kuvars",
    name: "Kuvars",
    tagline: "Pratik ve Estetik",
    badge: "Bakımı Kolay",
    description:
      "Doğal kuvars minerallerinin reçine ile güçlendirilmiş hali. Çimstone ve Belenco markalarıyla, gözeneksiz hijyenik yüzeyler.",
    features: ["Hijyen", "Renk Tutarlılığı", "Esneklik"],
    benefits: [
      "Gözeneksiz hijyenik yüzey",
      "Bakım gerektirmez",
      "Geniş renk seçeneği",
    ],
    bestUse: "Aile mutfağı & banyo",
    image: "/images/products/urun-kuvars.webp",
    i18n: {
      en: {
        name: "Quartz",
        tagline: "Practical and Aesthetic",
        badge: "Easy Maintenance",
        description:
          "Natural quartz minerals reinforced with resin. Non-porous, hygienic surfaces with Çimstone and Belenco brands.",
        features: ["Hygiene", "Color Consistency", "Flexibility"],
        benefits: [
          "Non-porous hygienic surface",
          "Maintenance-free",
          "Wide color selection",
        ],
        bestUse: "Family kitchen & bathroom",
      },
      de: {
        name: "Quarz",
        tagline: "Praktisch und ästhetisch",
        badge: "Pflegeleicht",
        description:
          "Natürliche Quarzmineralien mit Harz verstärkt. Nicht-poröse, hygienische Oberflächen mit den Marken Çimstone und Belenco.",
        features: ["Hygiene", "Farbkonsistenz", "Flexibilität"],
        benefits: [
          "Nicht-poröse hygienische Oberfläche",
          "Wartungsfrei",
          "Große Farbauswahl",
        ],
        bestUse: "Familienküche & Bad",
      },
    },
  },
  {
    slug: "granit",
    name: "Granit",
    tagline: "Dayanıklı ve güçlü",
    description:
      "Yüksek dayanıklılığı ve karakteristik desenleriyle iç ve dış mekanların güçlü çözümü. Dünyanın 14 farklı ülkesindeki ocak ve fabrikalardan doğrudan temin.",
    features: ["Yüksek Dayanım", "Aşınma Direnci", "Doğal Doku"],
    benefits: [
      "Ağır yaya trafiğine uygun",
      "Dış mekanda uzun ömürlü",
      "Doğa kaynaklı zengin renk skalası",
    ],
    bestUse: "Cephe, zemin, basamak",
    image: "/images/products/urun-granit.webp",
    i18n: {
      en: {
        name: "Granite",
        tagline: "Durable and strong",
        description:
          "Strong solution for interior and exterior spaces with high durability and characteristic patterns. Direct sourcing from quarries and factories in 14 different countries worldwide.",
        features: ["High Strength", "Wear Resistance", "Natural Texture"],
        benefits: [
          "Suitable for heavy foot traffic",
          "Long-lasting outdoors",
          "Naturally rich color palette",
        ],
        bestUse: "Façade, floor, steps",
      },
      de: {
        name: "Granit",
        tagline: "Robust und stark",
        description:
          "Starke Lösung für Innen- und Außenbereiche mit hoher Haltbarkeit und charakteristischen Mustern. Direkter Bezug aus Steinbrüchen und Werken in 14 verschiedenen Ländern weltweit.",
        features: ["Hohe Festigkeit", "Verschleißfest", "Natürliche Textur"],
        benefits: [
          "Geeignet für hohe Fußgängerfrequenz",
          "Langlebig im Freien",
          "Natürlich reiche Farbpalette",
        ],
        bestUse: "Fassade, Boden, Stufen",
      },
    },
  },
];

// Locale-aware getters — TR is base, EN/DE override individual fields
export function localizedProduct(
  product: Product,
  locale: Locale,
): ProductTranslation {
  if (locale === "tr") {
    return product;
  }
  const override = product.i18n?.[locale];
  return {
    name: override?.name ?? product.name,
    tagline: override?.tagline ?? product.tagline,
    badge: override?.badge ?? product.badge,
    description: override?.description ?? product.description,
    features: override?.features ?? product.features,
    benefits: override?.benefits ?? product.benefits,
    bestUse: override?.bestUse ?? product.bestUse,
  };
}

export function localizedProductName(product: Product, locale: Locale): string {
  return localizedProduct(product, locale).name;
}

export function localizedProductTagline(
  product: Product,
  locale: Locale,
): string {
  return localizedProduct(product, locale).tagline;
}
