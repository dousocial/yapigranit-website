import {
  Building2,
  HeadphonesIcon,
  Truck,
  Layers,
  TrendingUp,
  PackageCheck,
  Award,
  Users2,
  Factory,
  Clock4,
  Heart,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface B2BFeature {
  title: string;
  description: string;
  icon: LucideIcon;
}

export const b2bFeatures: B2BFeature[] = [
  {
    title: "Proje Odaklı Üretim",
    description: "Projelerinize özel ölçü, ebat ve kalınlıkta üretim çözümleri.",
    icon: Building2,
  },
  {
    title: "Teknik Destek",
    description: "Keşiften uygulamaya teknik ekibimiz yanınızda.",
    icon: HeadphonesIcon,
  },
  {
    title: "Lojistik & Teslimat",
    description: "Zamanında ve güvenli teslimat anlayışı.",
    icon: Truck,
  },
  {
    title: "Numune & Seçim Desteği",
    description: "Doğru ürün seçimi için numune ve uzman desteği.",
    icon: Layers,
  },
  {
    title: "Rekabetçi Fiyatlandırma",
    description: "Kaliteden ödün vermeden rekabetçi çözümler.",
    icon: TrendingUp,
  },
  {
    title: "Sürekli Tedarik Güvencesi",
    description: "Büyük ölçekli projeler için sürekli stok ve tedarik güvencesi.",
    icon: PackageCheck,
  },
];

export interface WhyUs {
  title: string;
  description: string;
  icon: LucideIcon;
}

export const whyUs: WhyUs[] = [
  {
    title: "Yüksek Kalite Standartları",
    description: "ISO sertifikalı üretim süreçleri ve sıkı kalite kontrol.",
    icon: Award,
  },
  {
    title: "Deneyimli Uzman Kadro",
    description: "Sektörde 20+ yıl tecrübeli teknik ekip.",
    icon: Users2,
  },
  {
    title: "Teknolojik Üretim Altyapısı",
    description: "5 Eksen CNC, Waterjet ve özel ölçü üretim olanakları.",
    icon: Factory,
  },
  {
    title: "Zamanında Teslimat",
    description: "Planlı koordinasyon ve takvime uygun teslim süreci.",
    icon: Clock4,
  },
  {
    title: "Müşteri Odaklı Yaklaşım",
    description: "Her proje için özel iletişim ve destek.",
    icon: Heart,
  },
];

export interface BrandValue {
  title: string;
  description: string;
  icon: LucideIcon;
}

import { ShieldCheck, Handshake, Lightbulb, Leaf, Sparkles } from "lucide-react";

export const brandValues: BrandValue[] = [
  {
    title: "Kalite",
    description: "En iyi malzeme ve işçiliği, her projede standart olarak sunarız.",
    icon: ShieldCheck,
  },
  {
    title: "Güven",
    description: "İş ortaklarımızla uzun vadeli, şeffaf ve sürdürülebilir ilişkiler kurarız.",
    icon: Handshake,
  },
  {
    title: "Yenilik",
    description: "Teknolojik gelişmeleri takip eder, üretim ve hizmetlerimizi sürekli geliştiririz.",
    icon: Lightbulb,
  },
  {
    title: "Sürdürülebilirlik",
    description: "Doğaya ve gelecek nesillere karşı sorumluluğumuzun farkındayız.",
    icon: Leaf,
  },
  {
    title: "Çözüm Odaklılık",
    description: "Her projeye özel, ihtiyaca uygun ve etkin çözümler üretiriz.",
    icon: Sparkles,
  },
];

export interface TimelineItem {
  year: string;
  title: string;
  description: string;
}

export const timeline: TimelineItem[] = [
  {
    year: "2004",
    title: "Kuruluş",
    description: "Yapı Granit'in temelleri İstanbul'da atıldı.",
  },
  {
    year: "2008",
    title: "Üretim Genişlemesi",
    description: "Doğal taş ve mermer sektöründe üretim kapasitemiz artırıldı.",
  },
  {
    year: "2012",
    title: "Teknolojik Yatırım",
    description: "CNC ve ileri üretim teknolojilerine yatırım yapıldı.",
  },
  {
    year: "2016",
    title: "Uluslararası Projeler",
    description: "Yurt içi ve yurt dışı büyük ölçekli projelerde yer almaya başladık.",
  },
  {
    year: "2020",
    title: "Sürdürülebilirlik",
    description: "Sürdürülebilir ve çevre dostu üretim anlayışını kurumsal yapımıza entegre ettik.",
  },
  {
    year: "2026",
    title: "Global Genişleme",
    description: "Daha geniş üretim alanı ve global iş ortaklıklarıyla büyümeye devam ediyoruz.",
  },
];
