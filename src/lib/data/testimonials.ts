import type { Locale } from "@/i18n/routing";

export interface TestimonialTranslation {
  quote: string;
  authorTitle: string;
}

export interface Testimonial extends TestimonialTranslation {
  id: string;
  authorName: string;
  authorCompany?: string;
  rating?: number;
  city?: string;
  i18n?: Partial<Record<Exclude<Locale, "tr">, Partial<TestimonialTranslation>>>;
}

export const testimonials: Testimonial[] = [
  {
    id: "01",
    authorName: "Mehmet Çelik",
    authorCompany: "Çelik Mimarlık",
    city: "İstanbul",
    rating: 5,
    quote:
      "Forum Çamlık projemizde 12.000 m² mermer ve porselen kaplamasını eksiksiz teslim ettiler. Hızlı, milimetrik ve sözünün eri bir ekip — birlikte çalıştığımız her projede aynı disiplini sürdürüyorlar.",
    authorTitle: "Mimar",
    i18n: {
      en: {
        quote:
          "On our Forum Çamlık project, they delivered 12,000 m² of marble and porcelain cladding flawlessly. Fast, millimeter-precise, and reliable — they keep the same discipline on every project.",
        authorTitle: "Architect",
      },
      de: {
        quote:
          "Bei unserem Forum Çamlık Projekt haben sie 12.000 m² Marmor- und Porzellanverkleidung makellos geliefert. Schnell, millimetergenau und zuverlässig.",
        authorTitle: "Architekt",
      },
    },
  },
  {
    id: "02",
    authorName: "Selin Aydın",
    authorCompany: "SkyCity Denizli",
    city: "Denizli",
    rating: 5,
    quote:
      "Basamak ve asansör kaplamalarındaki işçilik kalitesi gerçekten farkını gösteriyor. Kaymaz yüzey detayları ile güvenliği, mermer cilası ile estetiği bir araya getirdiler. Sahip olduğumuz prestiji yansıtıyor.",
    authorTitle: "Proje Müdürü",
    i18n: {
      en: {
        quote:
          "The craftsmanship on our stair and elevator cladding really stands out. Anti-slip surface details for safety, polished marble for aesthetics — exactly the prestige we wanted.",
        authorTitle: "Project Manager",
      },
      de: {
        quote:
          "Die Verarbeitung der Treppen- und Aufzugsverkleidungen ist wirklich erstklassig. Rutschhemmende Oberflächendetails und polierter Marmor — genau das Prestige, das wir wollten.",
        authorTitle: "Projektleiter",
      },
    },
  },
  {
    id: "03",
    authorName: "Ahmet Yılmaz",
    authorCompany: "Anemon Hotels",
    city: "Denizli",
    rating: 5,
    quote:
      "Otel zincirimizin farklı lokasyonlarında bar zeminleri ve oda tezgahları için çalıştık. Yoğun sirkülasyona dayanıklı malzeme seçimi ve tutarlı uygulama kalitesi sayesinde işletme kayıplarımız sıfıra yaklaştı.",
    authorTitle: "Operasyon Direktörü",
    i18n: {
      en: {
        quote:
          "We worked with them on bar floors and room countertops across our hotel chain. Their durable material selection and consistent application quality eliminated our maintenance losses.",
        authorTitle: "Operations Director",
      },
      de: {
        quote:
          "Wir haben mit ihnen an Barböden und Zimmer-Arbeitsplatten in unserer Hotelkette gearbeitet. Strapazierfähige Materialwahl und konstante Qualität — null Wartungsverluste.",
        authorTitle: "Operationsdirektor",
      },
    },
  },
  {
    id: "04",
    authorName: "Hans Müller",
    authorCompany: "Müller Architektur GmbH",
    city: "Köln, Deutschland",
    rating: 5,
    quote:
      "Almanya'daki villalarımızda Yapı Granit'in mermer levhalarını tercih ediyoruz. Lojistik kusursuz, kalite mükemmel. 320×160 cm ebatlardaki bookmatch uygulamaları müşterilerimizden tam puan aldı.",
    authorTitle: "Mimar",
    i18n: {
      en: {
        quote:
          "For our villas in Germany, we choose Yapı Granit marble slabs. Flawless logistics, excellent quality. The 320×160 cm bookmatch applications got full marks from our clients.",
        authorTitle: "Architect",
      },
      de: {
        quote:
          "Für unsere Villen in Deutschland wählen wir Yapı Granit Marmorplatten. Tadellose Logistik, exzellente Qualität. Die 320×160 cm Bookmatch-Anwendungen bekamen volle Punktzahl.",
        authorTitle: "Architekt",
      },
    },
  },
  {
    id: "05",
    authorName: "Berkay Demir",
    authorCompany: "Ahmet Hulusi Efendi Külliyesi",
    city: "Denizli",
    rating: 5,
    quote:
      "1.500 m² mekanik cephe kaplama ve CNC işlemli taş paneller için tercihimizdi. Külliyemizin manevi atmosferine uygun bir titizlikle çalıştılar. Mühendislik ve sanat birleşimi.",
    authorTitle: "Yapı Sorumlusu",
    i18n: {
      en: {
        quote:
          "Our choice for 1,500 m² of mechanical façade cladding and CNC-processed stone panels. They worked with care befitting the spiritual atmosphere — engineering meets art.",
        authorTitle: "Construction Officer",
      },
      de: {
        quote:
          "Unsere Wahl für 1.500 m² mechanische Fassadenverkleidung und CNC-bearbeitete Steinpaneele. Sie arbeiteten mit Sorgfalt, würdig der spirituellen Atmosphäre.",
        authorTitle: "Bauleiter",
      },
    },
  },
];

export function localizedTestimonial(
  t: Testimonial,
  locale: Locale,
): TestimonialTranslation {
  if (locale === "tr") return t;
  const o = t.i18n?.[locale];
  return {
    quote: o?.quote ?? t.quote,
    authorTitle: o?.authorTitle ?? t.authorTitle,
  };
}
