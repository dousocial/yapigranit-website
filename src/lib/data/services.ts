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

export interface Service {
  slug: string;
  number: string;
  category: "cephe" | "mutfak-banyo" | "mobilya" | "dekoratif" | "teknoloji";
  categoryLabel: string;
  title: string;
  description: string;
  details: string[];
  tags: string[];
  icon: LucideIcon;
  image: string;
}

export const serviceCategories = [
  { slug: "cephe", label: "Dış Cephe & Mimari Kaplama" },
  { slug: "mutfak-banyo", label: "Mutfak & Banyo Çözümleri" },
  { slug: "mobilya", label: "Özel Tasarım Taş Mobilya" },
  { slug: "dekoratif", label: "Dekoratif Uygulamalar" },
  { slug: "teknoloji", label: "Üretim Teknolojileri" },
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
    image:
      "https://images.unsplash.com/photo-1486718448742-163732cd1544?auto=format&fit=crop&w=800&q=80",
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
    image:
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=800&q=80",
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
    image:
      "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=800&q=80",
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
    image:
      "https://images.unsplash.com/photo-1604147495798-57beb5d6af73?auto=format&fit=crop&w=800&q=80",
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
    image:
      "https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=800&q=80",
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
    image:
      "https://images.unsplash.com/photo-1581094288338-2314dddb7ece?auto=format&fit=crop&w=800&q=80",
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
    image:
      "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=800&q=80",
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
    image:
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=800&q=80",
  },
];
