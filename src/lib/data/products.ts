export interface Product {
  slug: string;
  name: string;
  tagline: string;
  badge?: string;
  description: string;
  features: string[];
  benefits: string[];
  bestUse: string;
  image: string;
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
    image: "/images/products/urun-ozel.webp",
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
  },
];
