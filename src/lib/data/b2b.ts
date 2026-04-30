import {
  Building2,
  Truck,
  Layers,
  TrendingUp,
  PackageCheck,
  Award,
  Users2,
  Factory,
  Clock4,
  Heart,
  ShieldCheck,
  Handshake,
  Lightbulb,
  Leaf,
  Sparkles,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface B2BFeature {
  title: string;
  description: string;
  icon: LucideIcon;
}

export const b2bFeatures: B2BFeature[] = [
  {
    title: "Mekanik Cephe Sistemleri",
    description:
      "304/316 paslanmaz çelik ankrajlarla güvenli, havalandırmalı cephe çözümleri.",
    icon: Building2,
  },
  {
    title: "5 Eksen CNC & Waterjet",
    description:
      "± 0.005 mm hassasiyet, karmaşık geometriler ve isısız kesim teknolojisi.",
    icon: Factory,
  },
  {
    title: "Dijital Rölöve",
    description:
      "Lazer tarama ile sahanın 3D modeli, sanal montaj ile sıfır fire.",
    icon: TrendingUp,
  },
  {
    title: "Numune & Seçim Desteği",
    description:
      "Doğru ürün seçimi için Dekton, Neolith, Florim numune ve uzman desteği.",
    icon: Layers,
  },
  {
    title: "Lojistik & Teslimat",
    description: "12 ülkeye ihracat tecrübesiyle güvenli ve zamanında teslimat.",
    icon: Truck,
  },
  {
    title: "Sürekli Tedarik Güvencesi",
    description:
      "14 farklı ülkeden doğrudan temin ile büyük ölçekli projelere kesintisiz arz.",
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
    title: "25+ Yıllık Tecrübe",
    description: "1994'ten bugüne taşı işleyen ustalık ve mühendislik birikimi.",
    icon: Award,
  },
  {
    title: "Deneyimli Uzman Kadro",
    description: "Sektöre yıllarını vermiş ustalar ve teknik ekip.",
    icon: Users2,
  },
  {
    title: "Teknolojik Üretim",
    description: "5 Eksen CNC, Waterjet, Bridge Saw ve Lazer Tarama altyapısı.",
    icon: Factory,
  },
  {
    title: "Zamanında Teslimat",
    description: "Verilen sözlerin eksiksiz yerine getirilmesi prensibi.",
    icon: Clock4,
  },
  {
    title: "%100 Müşteri Memnuniyeti",
    description: "Her projede kalite ve süreç odaklı yaklaşım.",
    icon: Heart,
  },
];

export interface BrandValue {
  title: string;
  description: string;
  icon: LucideIcon;
}

export const brandValues: BrandValue[] = [
  {
    title: "Kalite",
    description:
      "En iyi malzeme ve ustalığı, her projede standart olarak sunarız.",
    icon: ShieldCheck,
  },
  {
    title: "Güven",
    description:
      "1994'ten bu yana kazandığımız güveni, her projede yeniden üretiyoruz.",
    icon: Handshake,
  },
  {
    title: "Yenilik",
    description:
      "5 Eksen CNC'den dijital rölöveye, sektörün öncü teknolojilerini kullanıyoruz.",
    icon: Lightbulb,
  },
  {
    title: "Sürdürülebilirlik",
    description:
      "Atık yönetimi ve döngüsel üretimle doğaya karşı sorumluluğumuzun farkındayız.",
    icon: Leaf,
  },
  {
    title: "Çözüm Odaklılık",
    description:
      "Mekanınıza en uygun çözümü tasarlıyor, taşa sanatkar ellerle hayat veriyoruz.",
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
    year: "1994",
    title: "Temeller Atılıyor",
    description:
      "Yapı Granit'in serüveni 1994 yılında başladı. Küçük bir atölyede, büyük hayallerle kurulan firmamız, ilk günden itibaren kaliteyi hedefledi.",
  },
  {
    year: "2000",
    title: "Yeni Merkez & Güven",
    description:
      "Mevcut merkezimize taşınmamızla birlikte edindiğimiz tecrübe ve müşterilerimizin güveni, her yıl %300 büyüme gerçekleştirmemizi sağladı.",
  },
  {
    year: "2004",
    title: "Dünyaya Açılış",
    description:
      "Aracıları kaldırdık. Granit hammadde ihtiyacımızı dünyanın 14 farklı ülkesindeki ocak ve fabrikalardan doğrudan temin etmeye başladık.",
  },
  {
    year: "2005",
    title: "Almanya'ya İhracat",
    description:
      "Büyümemizi Almanya'ya ihracat yaparak taçlandırdık. Artık sadece malzeme tedariği değil, proje bazlı hizmet vererek kompleks yapıları hayata geçiriyoruz.",
  },
  {
    year: "2015",
    title: "Teknolojik Yatırım",
    description:
      "5 Eksen CNC, Waterjet ve Bridge Saw makinalarımızla üretim altyapımızı uzay endüstrisi standartlarına taşıdık.",
  },
  {
    year: "2026",
    title: "Bugün",
    description:
      "12 ülkeye ihracat, 500+ tamamlanan proje ve 25+ yıllık birikimle Denizli'den dünyaya taş işleyen bir mühendislik markası.",
  },
];
