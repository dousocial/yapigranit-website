import {
  Search,
  Layers,
  PenTool,
  Ruler,
  Hammer,
  ShieldCheck,
  Truck,
  Headphones,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface Service {
  slug: string;
  number: string;
  title: string;
  description: string;
  details: string[];
  icon: LucideIcon;
  image: string;
}

export const services: Service[] = [
  {
    slug: "kesif-danismanlik",
    number: "01",
    title: "Keşif & Danışmanlık",
    description:
      "Projenizin ihtiyaçlarını analiz ediyor, doğru malzeme ve çözüm önerileriyle değer yaratıyoruz.",
    details: [
      "Saha ziyareti ve ölçü kontrolü",
      "Proje gereksinim analizi",
      "Malzeme uygunluk değerlendirmesi",
      "Bütçe ve zaman planlaması",
    ],
    icon: Search,
    image:
      "https://images.unsplash.com/photo-1556909114-44e3e9399a2c?auto=format&fit=crop&w=800&q=80",
  },
  {
    slug: "malzeme-secimi",
    number: "02",
    title: "Malzeme Seçimi",
    description:
      "Mermer, granit, porselen ve özel yüzey seçeneklerimizle projeleriniz için en uygun malzemeyi belirliyoruz.",
    details: [
      "Numune ve örnek uygulama",
      "Renk, doku ve desen seçimi",
      "Performans ve dayanıklılık değerlendirmesi",
      "Sürdürülebilirlik kriterleri",
    ],
    icon: Layers,
    image:
      "https://images.unsplash.com/photo-1604147706283-d7119b5b822c?auto=format&fit=crop&w=800&q=80",
  },
  {
    slug: "proje-tasarim",
    number: "03",
    title: "Proje Tasarım & Çizim",
    description:
      "Teknik çizimler ve 3D görsellemeler ile projenizi daha üretime başlamadan önce detaylıca planlıyoruz.",
    details: [
      "DWG / 3D teknik çizim",
      "Detaylı kesit ve plan",
      "Damarlı malzeme yerleşim simülasyonu",
      "Ön onay ve revizyon süreci",
    ],
    icon: PenTool,
    image:
      "https://images.unsplash.com/photo-1581094288338-2314dddb7ece?auto=format&fit=crop&w=800&q=80",
  },
  {
    slug: "olcu-uretim",
    number: "04",
    title: "Ölçü & Üretim",
    description:
      "Son teknoloji makinelerimizle, yüksek hassasiyet ve kalite standartlarında üretim gerçekleştiriyoruz.",
    details: [
      "Lazer ve dijital ölçüm",
      "5 Eksen CNC işleme",
      "Waterjet kesim",
      "Kenar profil ve cila",
    ],
    icon: Ruler,
    image:
      "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=800&q=80",
  },
  {
    slug: "uygulama",
    number: "05",
    title: "Uygulama",
    description:
      "Deneyimli ekibimizle montaj ve uygulama süreçlerini titizlikle gerçekleştiriyoruz.",
    details: [
      "Profesyonel montaj ekibi",
      "Yapıştırıcı ve derz uygulaması",
      "Hassasiyet kontrol ve düzlem testi",
      "Detay birleşimleri",
    ],
    icon: Hammer,
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80",
  },
  {
    slug: "kalite-kontrol",
    number: "06",
    title: "Kalite Kontrol",
    description:
      "Üretimin her aşamasında kalite kontrol süreçleriyle, uzun ömürlü ve kusursuz çözümler sunuyoruz.",
    details: [
      "Hammadde kalite kontrolü",
      "Üretim sürecinde periyodik kontrol",
      "Final kalite testi",
      "Ambalaj öncesi inceleme",
    ],
    icon: ShieldCheck,
    image:
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=800&q=80",
  },
  {
    slug: "lojistik-teslimat",
    number: "07",
    title: "Lojistik & Teslimat",
    description:
      "Zamanında ve güvenli teslimat anlayışıyla, projenizin takvimine değer katıyoruz.",
    details: [
      "Özel ambalaj ve sevkiyat",
      "Yurt içi ve yurt dışı lojistik",
      "Sigortalı taşıma",
      "Saha teslim koordinasyonu",
    ],
    icon: Truck,
    image:
      "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?auto=format&fit=crop&w=800&q=80",
  },
  {
    slug: "satis-sonrasi-destek",
    number: "08",
    title: "Satış Sonrası Destek",
    description:
      "Uygulama sonrası bakım, destek ve garanti hizmetlerimizle her zaman yanınızdayız.",
    details: [
      "Bakım ve temizlik danışmanlığı",
      "Garanti süresince teknik destek",
      "Yenileme ve cila hizmetleri",
      "Acil tamir desteği",
    ],
    icon: Headphones,
    image:
      "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=800&q=80",
  },
];
