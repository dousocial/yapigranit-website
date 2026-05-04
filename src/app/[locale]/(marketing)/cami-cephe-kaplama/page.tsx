import type { Metadata } from "next";
import { Link } from "@/i18n/navigation";
import { setRequestLocale } from "next-intl/server";
import {
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Building2,
  Wrench,
  Award,
} from "lucide-react";

import { PageHero } from "@/components/sections/page-hero";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import { CtaBand } from "@/components/sections/cta-band";
import { ProductJsonLd, FaqJsonLd } from "@/components/seo/structured-data";
import { siteConfig } from "@/lib/site";
import { buildAlternates } from "@/lib/i18n-urls";
import type { Locale } from "@/i18n/routing";

interface Props {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { locale } = await params;
  const meta = {
    tr: {
      title: "Cami Cephe Kaplama Fiyat — Mekanik Cephe Sistemleri | Yapı Granit",
      description:
        "Cami ve külliyeler için 304/316 paslanmaz çelik ankrajlı mekanik cephe kaplama sistemleri. CNC işlemli taş paneller, doğal taş cephe uygulamaları. Fiyat teklifi ve teknik detaylar.",
    },
    en: {
      title: "Mosque Façade Cladding Pricing — Mechanical Systems | Yapı Granit",
      description:
        "Mechanical façade cladding with 304/316 stainless steel anchors for mosques and religious complexes. CNC-processed stone panels, natural stone façade applications.",
    },
    de: {
      title: "Moschee-Fassadenverkleidung Preise — Mechanische Systeme | Yapı Granit",
      description:
        "Mechanische Fassadenverkleidung mit 304/316 Edelstahlankern für Moscheen. CNC-bearbeitete Steinpaneele, Natursteinfassaden.",
    },
  };
  const m = meta[locale as "tr" | "en" | "de"] ?? meta.tr;
  return {
    title: m.title,
    description: m.description,
    keywords: [
      "cami cephe kaplama",
      "cami cephe kaplama fiyat",
      "külliye cephe kaplama",
      "mekanik cephe kaplama",
      "doğal taş cephe kaplama",
      "cnc taş kaplama",
      "304 paslanmaz çelik ankraj",
      "cami yapı granit",
      "cami mermer cephe",
      "mihrap kaplama",
      "havalandırmalı cephe sistemi",
      "denizli cami cephe",
    ],
    alternates: buildAlternates(locale as Locale, "/cami-cephe-kaplama"),
  };
}

export default async function CamiCepheKaplamaPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <PageContent locale={locale} />;
}

const i18n = {
  tr: {
    eyebrow: "Külliye & Cami",
    h1: "Cami Cephe Kaplama Sistemleri.",
    sub: "Mekanik ankrajlı, havalandırmalı, ısı yalıtımlı, asırlık dayanımlı taş cephe çözümleri.",
    breadcrumbHome: "Anasayfa",
    breadcrumbServices: "Hizmetler",
    crumb: "Cami Cephe Kaplama",
    primaryCta: "Projemi Fiyatlandır",
    secondaryCta: "Teknik Bilgi Talep Et",
    benefitsEyebrow: "Mekanik Cephe Avantajları",
    benefitsTitle: "Yapıştırma yerine 304 paslanmaz çelik ankraj.",
    benefits: [
      {
        title: "Yapısal Güvenlik",
        body: "304/316 paslanmaz çelik ankraj sistemiyle deprem ve rüzgar yüküne karşı sertifikalı dayanım.",
      },
      {
        title: "Havalandırmalı Cephe",
        body: "Taş ile bina arasında 4-8 cm hava boşluğu; nem yoğuşmasını önler, ısı yalıtımı sağlar.",
      },
      {
        title: "Uzun Ömür",
        body: "Mineral esaslı malzeme — UV ışınlarına ve atmosferik etkilere karşı 50+ yıl dayanım.",
      },
      {
        title: "CNC İşlenmiş Detay",
        body: "Mihrap, kemer, kalligrafi panelleri için 5 eksen CNC ile özel desenler ve rölyefler.",
      },
      {
        title: "Geleneksel Estetik",
        body: "Klasik Osmanlı taşçılığı estetiğini modern üretim teknolojisiyle birleştiren çözümler.",
      },
      {
        title: "Tek Parça Yönetim",
        body: "Statik proje, malzeme tedariği, üretim, uygulama, kalite kontrol — tek partnerden.",
      },
    ],
    pricingEyebrow: "Yatırım Aralığı",
    pricingTitle: "Cami cephe kaplama metrekare fiyatları",
    pricingSub: "Yatırım kararınız için bilgilendirici 2026 aralıkları. Net fiyat — taş cinsi, ebat, kalınlık ve yapı yüksekliğine göre projelendirilir.",
    tiers: [
      {
        name: "Klasik",
        scope: "Travertien / Honlanmış Mermer",
        priceRange: "₺3.500 – ₺6.000",
        per: "/m²",
        features: [
          "30-40 mm kalınlık",
          "Yerli taş seçenekleri",
          "Standart ankraj sistemi",
          "Ana cephe ve giriş bölgeleri",
        ],
      },
      {
        name: "Külliye Standardı",
        scope: "Bookmatch + CNC Detay",
        priceRange: "₺6.500 – ₺11.000",
        per: "/m²",
        highlighted: true,
        features: [
          "40-60 mm taş + 304 ankraj",
          "Bookmatch panel uygulamaları",
          "CNC işlenmiş kemer ve mihraplar",
          "Hattat panellerinde rölyef",
          "Hidrofob koruyucu",
          "10 yıl proje garantisi",
        ],
      },
      {
        name: "Anıtsal",
        scope: "Özel Tasarım & Heykelsi",
        priceRange: "Proje özel teklif",
        per: "",
        features: [
          "Özel taş ithali (Calacatta, Botticino)",
          "El işçiliği detaylar",
          "3D CNC heykelsi formlar",
          "Backlit kalligrafi panelleri",
          "Tüm külliye kapsamı",
        ],
      },
    ],
    chooseTier: "Bu Standartta Teklif Al",
    processEyebrow: "Süreç",
    processTitle: "Mekanik cephe — uygulama akışı",
    processSteps: [
      {
        n: "01",
        title: "Statik Proje & Hesap",
        body: "Yapı yüksekliği, rüzgar yükü, deprem bölgesi verileriyle ankraj sayısı ve aralığı hesaplanır.",
      },
      {
        n: "02",
        title: "Taş Seçimi & Kesim",
        body: "Mermer veya granit blok, projeye özel ölçüde köprü kesme ve CNC ile işlenir.",
      },
      {
        n: "03",
        title: "Ankraj Montajı",
        body: "304 / 316 paslanmaz çelik gizli ankrajlar betona zemin / lifli zemine sabitlenir.",
      },
      {
        n: "04",
        title: "Taş Asma",
        body: "Plakalar ankraja kanca / kelepçe sistemiyle asılır. Hava boşluğu kontrol edilir.",
      },
      {
        n: "05",
        title: "Derz Dolgusu & Sızdırmazlık",
        body: "Silikon dolgu, hidrofob emprenye uygulanır. Detaylı kalite kontrol.",
      },
      {
        n: "06",
        title: "Teslim & Garanti",
        body: "Statik raporu, garanti belgesi, bakım kılavuzu teslim edilir.",
      },
    ],
    referencesEyebrow: "Referans Proje",
    referencesTitle: "Ahmet Hulusi Efendi Külliyesi — 1.500 m²",
    referencesBody:
      "Mekanik cephe kaplama, doğal taş cephe sistemleri ve CNC işlemli duvar kaplamalarıyla — yapı güvenliği, uzun ömür ve estetik bütünlük gözetilerek hayata geçirildi.",
    referencesCta: "Projeyi İncele",
    faqEyebrow: "Sıkça Sorulan",
    faqTitle: "Cami cephe kaplama hakkında",
  },
  en: {
    eyebrow: "Religious Complex & Mosque",
    h1: "Mosque Façade Cladding Systems.",
    sub: "Mechanically anchored, ventilated, insulated stone façade solutions with century-long durability.",
    breadcrumbHome: "Home",
    breadcrumbServices: "Services",
    crumb: "Mosque Façade Cladding",
    primaryCta: "Get My Project Priced",
    secondaryCta: "Request Technical Info",
    benefitsEyebrow: "Mechanical Façade Benefits",
    benefitsTitle: "304 stainless steel anchors instead of adhesive.",
    benefits: [
      {
        title: "Structural Safety",
        body: "Certified resistance to earthquake and wind loads with 304/316 stainless steel anchor systems.",
      },
      {
        title: "Ventilated Façade",
        body: "4-8 cm air gap between stone and building — prevents condensation, provides insulation.",
      },
      {
        title: "Long Life",
        body: "Mineral-based material — 50+ years resistance to UV and atmospheric effects.",
      },
      {
        title: "CNC-Processed Details",
        body: "Custom patterns and reliefs for mihrab, arches, calligraphy panels via 5-axis CNC.",
      },
      {
        title: "Traditional Aesthetics",
        body: "Solutions that combine classical Ottoman stonecraft aesthetics with modern production technology.",
      },
      {
        title: "Single-Source Management",
        body: "Static project, material supply, production, application, quality control — from one partner.",
      },
    ],
    pricingEyebrow: "Investment Range",
    pricingTitle: "Mosque façade cladding per-square-meter pricing",
    pricingSub: "Indicative 2026 ranges. Final price depends on stone type, dimension, thickness, and building height.",
    tiers: [
      {
        name: "Classic",
        scope: "Travertine / Honed Marble",
        priceRange: "$110 – $190",
        per: "/m²",
        features: [
          "30-40 mm thickness",
          "Local stone options",
          "Standard anchor system",
          "Main façade and entrance zones",
        ],
      },
      {
        name: "Complex Standard",
        scope: "Bookmatch + CNC Detail",
        priceRange: "$210 – $360",
        per: "/m²",
        highlighted: true,
        features: [
          "40-60 mm stone + 304 anchors",
          "Bookmatch panel applications",
          "CNC-processed arches and mihrabs",
          "Relief on calligraphy panels",
          "Hydrophobic protection",
          "10-year project warranty",
        ],
      },
      {
        name: "Monumental",
        scope: "Custom Design & Sculptural",
        priceRange: "Quote",
        per: "",
        features: [
          "Imported stone (Calacatta, Botticino)",
          "Hand-crafted details",
          "3D CNC sculptural forms",
          "Backlit calligraphy panels",
          "Full complex scope",
        ],
      },
    ],
    chooseTier: "Get Quote at This Standard",
    processEyebrow: "Process",
    processTitle: "Mechanical façade — application flow",
    processSteps: [
      {
        n: "01",
        title: "Static Project & Calculation",
        body: "Anchor count and spacing calculated using building height, wind load, and seismic zone data.",
      },
      { n: "02", title: "Stone Selection & Cutting", body: "Marble or granite blocks cut to project-specific dimensions via bridge saw and CNC." },
      { n: "03", title: "Anchor Installation", body: "304/316 stainless steel hidden anchors fixed to concrete/composite base." },
      { n: "04", title: "Stone Hanging", body: "Slabs hung on anchors via hook/clip system. Air gap verified." },
      { n: "05", title: "Joint Filling & Sealing", body: "Silicone filling and hydrophobic impregnation applied. Detailed QC." },
      { n: "06", title: "Delivery & Warranty", body: "Static report, warranty certificate, maintenance manual delivered." },
    ],
    referencesEyebrow: "Reference Project",
    referencesTitle: "Ahmet Hulusi Efendi Complex — 1,500 m²",
    referencesBody:
      "Mechanical façade cladding, natural stone façade systems, and CNC-processed wall cladding — implemented with structural safety, longevity, and aesthetic integrity.",
    referencesCta: "View Project",
    faqEyebrow: "FAQ",
    faqTitle: "About mosque façade cladding",
  },
  de: {
    eyebrow: "Külliye & Moschee",
    h1: "Moschee-Fassadenverkleidungssysteme.",
    sub: "Mechanisch verankerte, hinterlüftete, gedämmte Steinfassaden mit jahrhundertelanger Haltbarkeit.",
    breadcrumbHome: "Startseite",
    breadcrumbServices: "Leistungen",
    crumb: "Moschee-Fassadenverkleidung",
    primaryCta: "Mein Projekt kalkulieren",
    secondaryCta: "Technische Infos anfragen",
    benefitsEyebrow: "Vorteile der Mechanischen Fassade",
    benefitsTitle: "304 Edelstahlanker statt Klebstoff.",
    benefits: [
      { title: "Strukturelle Sicherheit", body: "Zertifizierte Beständigkeit gegen Erdbeben- und Windlasten." },
      { title: "Hinterlüftete Fassade", body: "4-8 cm Luftspalt — verhindert Kondensation, dämmt." },
      { title: "Langlebigkeit", body: "50+ Jahre Beständigkeit gegen UV und Atmosphäre." },
      { title: "CNC-Details", body: "5-Achsen-CNC für Mihrabs, Bögen, Kalligrafie-Paneele." },
      { title: "Traditionelle Ästhetik", body: "Klassische osmanische Steinmetzkunst trifft moderne Technologie." },
      { title: "Komplettes Projektmanagement", body: "Statik, Materiallieferung, Fertigung, Anwendung — aus einer Hand." },
    ],
    pricingEyebrow: "Investitionsbereich",
    pricingTitle: "Moschee-Fassadenverkleidung Quadratmeterpreise",
    pricingSub: "Richtwerte 2026. Endpreis je nach Stein, Maß, Stärke und Gebäudehöhe.",
    tiers: [
      {
        name: "Klassisch",
        scope: "Travertin / gehohnter Marmor",
        priceRange: "100 € – 170 €",
        per: "/m²",
        features: [
          "30-40 mm Stärke",
          "Lokale Steinoptionen",
          "Standardankersystem",
          "Hauptfassade und Eingangsbereich",
        ],
      },
      {
        name: "Külliye-Standard",
        scope: "Bookmatch + CNC-Detail",
        priceRange: "190 € – 330 €",
        per: "/m²",
        highlighted: true,
        features: [
          "40-60 mm Stein + 304 Anker",
          "Bookmatch-Paneele",
          "CNC-Bögen und Mihrabs",
          "Kalligrafie-Reliefs",
          "Hydrophober Schutz",
          "10 Jahre Projektgarantie",
        ],
      },
      {
        name: "Monumental",
        scope: "Sonderdesign & Skulpturelle Formen",
        priceRange: "Angebot",
        per: "",
        features: [
          "Importsteine (Calacatta, Botticino)",
          "Handarbeit",
          "3D-CNC-Skulpturen",
          "Hinterleuchtete Kalligrafie",
          "Komplette Külliye",
        ],
      },
    ],
    chooseTier: "Angebot auf dieser Stufe",
    processEyebrow: "Prozess",
    processTitle: "Mechanische Fassade — Ablauf",
    processSteps: [
      { n: "01", title: "Statik & Berechnung", body: "Ankerzahl und -abstand berechnet aus Gebäudehöhe, Wind- und Seismikdaten." },
      { n: "02", title: "Steinauswahl & Zuschnitt", body: "Marmor / Granit-Blöcke per Brückensäge und CNC zugeschnitten." },
      { n: "03", title: "Ankermontage", body: "Verdeckte 304/316 Edelstahlanker am Beton-/Verbundgrund befestigt." },
      { n: "04", title: "Steinaufhängung", body: "Platten per Haken/Klemme aufgehängt. Luftspalt geprüft." },
      { n: "05", title: "Fugendichtung", body: "Silikon-Verfugung und hydrophobe Imprägnierung." },
      { n: "06", title: "Übergabe & Garantie", body: "Statikbericht, Garantieurkunde, Wartungshandbuch." },
    ],
    referencesEyebrow: "Referenzprojekt",
    referencesTitle: "Ahmet Hulusi Efendi Komplex — 1.500 m²",
    referencesBody:
      "Mechanische Fassadenverkleidung, Natursteinfassadensysteme und CNC-bearbeitete Wandverkleidungen — mit struktureller Sicherheit und ästhetischer Integrität realisiert.",
    referencesCta: "Projekt ansehen",
    faqEyebrow: "FAQ",
    faqTitle: "Über Moschee-Fassadenverkleidung",
  },
};

const benefitIcons = [ShieldCheck, Building2, Award, Wrench, CheckCircle2, CheckCircle2];

function PageContent({ locale }: { locale: string }) {
  const tx = i18n[locale as "tr" | "en" | "de"] ?? i18n.tr;

  const faq = [
    {
      question:
        locale === "en"
          ? "What's the difference between mechanical and adhesive façade cladding?"
          : locale === "de"
          ? "Was ist der Unterschied zwischen mechanischer und geklebter Fassadenverkleidung?"
          : "Mekanik cephe ile yapıştırma cephe arasındaki fark nedir?",
      answer:
        locale === "en"
          ? "Mechanical cladding uses stainless steel anchors — no adhesive. It's earthquake-safe, ventilated, and insulating. Adhesive cladding fails over time at heights >10m."
          : locale === "de"
          ? "Mechanisch nutzt Edelstahlanker — kein Klebstoff. Erdbebensicher, hinterlüftet, dämmend. Geklebte Verkleidungen versagen über 10 m Höhe."
          : "Mekanik kaplamada 304 paslanmaz çelik ankraj kullanılır — yapıştırıcı yok. Deprem güvenli, havalandırmalı ve yalıtımlıdır. Yapıştırma cephe 10 m üzeri yüksekliklerde zamanla başarısız olur.",
    },
    {
      question:
        locale === "en"
          ? "Which stones are suitable for mosque façades?"
          : locale === "de"
          ? "Welche Steine eignen sich für Moscheefassaden?"
          : "Cami cephesi için hangi taşlar uygundur?",
      answer:
        locale === "en"
          ? "Travertine, Marmara marble, Afyon white, granite — based on local climate. CNC-processed details preserve traditional Ottoman aesthetics."
          : locale === "de"
          ? "Travertin, Marmara-Marmor, Afyon-Weiß, Granit — je nach lokalem Klima. CNC-Details bewahren traditionelle Ästhetik."
          : "Travertin, Marmara mermeri, Afyon beyaz, granit — yerel iklim koşullarına göre. CNC işlenmiş detaylar geleneksel estetiği korur.",
    },
    {
      question:
        locale === "en"
          ? "How long does the project take?"
          : locale === "de"
          ? "Wie lange dauert das Projekt?"
          : "Proje ne kadar sürer?",
      answer:
        locale === "en"
          ? "1,500 m² mosque façade typically takes 4-6 months from static project approval to handover, depending on CNC detail volume."
          : locale === "de"
          ? "1.500 m² typischerweise 4-6 Monate von Statikfreigabe bis Übergabe, abhängig vom CNC-Detailvolumen."
          : "1.500 m²'lik bir cami cephesi, statik onayından teslime tipik olarak 4-6 ay sürer (CNC detay yoğunluğuna bağlı).",
    },
    {
      question:
        locale === "en"
          ? "What warranty is provided?"
          : locale === "de"
          ? "Welche Garantie wird gewährt?"
          : "Garanti süresi nedir?",
      answer:
        locale === "en"
          ? "10-year project warranty including anchor system, stone, and application. Static report and maintenance manual provided."
          : locale === "de"
          ? "10 Jahre Projektgarantie inkl. Ankersystem, Stein und Verarbeitung. Statikbericht und Wartungshandbuch."
          : "10 yıl proje garantisi — ankraj sistemi, taş ve uygulama dahil. Statik raporu ve bakım kılavuzu teslim edilir.",
    },
  ];

  const productUrl =
    locale === "tr"
      ? `${siteConfig.url}/cami-cephe-kaplama`
      : `${siteConfig.url}/${locale}/cami-cephe-kaplama`;

  return (
    <>
      <ProductJsonLd
        name={tx.h1}
        description={tx.sub}
        image="/images/projects/ahmet-hulusi/ahmet-hulusi-efendi-kulliyesi-denizli-cami-dis-cephe-gunbatimi.webp"
        category="Cami Cephe Kaplama"
        url={productUrl}
        sku="MEKANIK-CEPHE-CAMI"
        material="Doğal Taş + 304 Paslanmaz Çelik Ankraj"
      />
      <FaqJsonLd questions={faq} />

      <PageHero
        title={tx.h1}
        description={tx.sub}
        breadcrumb={[
          { label: tx.breadcrumbHome, href: "/" },
          { label: tx.breadcrumbServices, href: "/hizmetler" },
          { label: tx.crumb },
        ]}
        image="/images/projects/ahmet-hulusi/ahmet-hulusi-efendi-kulliyesi-denizli-cami-dis-cephe-gunbatimi.webp"
        imageAlt={tx.h1}
      />

      {/* CTA bandı */}
      <section className="bg-background py-10 lg:py-12 border-b border-line">
        <Container size="wide">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg">
              <Link href="/teklif">
                {tx.primaryCta}
                <ArrowRight />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/iletisim">
                {tx.secondaryCta}
                <ArrowRight />
              </Link>
            </Button>
          </div>
        </Container>
      </section>

      {/* Benefits */}
      <section className="bg-background py-20 lg:py-24">
        <Container size="wide">
          <Reveal className="text-center max-w-[640px] mx-auto mb-14">
            <Eyebrow>{tx.benefitsEyebrow}</Eyebrow>
            <h2 className="display-lg text-ink mt-4 text-balance">
              {tx.benefitsTitle}
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
            {tx.benefits.map((b, idx) => {
              const Icon = benefitIcons[idx] ?? CheckCircle2;
              return (
                <Reveal key={b.title} delay={idx * 0.06}>
                  <div className="bg-surface-muted p-7 lg:p-8 h-full">
                    <Icon
                      className="size-7 text-gold-deep mb-5"
                      strokeWidth={1.4}
                    />
                    <h3 className="font-display text-[1.3rem] text-ink mb-3">
                      {b.title}
                    </h3>
                    <p className="text-[0.92rem] text-ink-muted leading-relaxed">
                      {b.body}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Pricing */}
      <section className="bg-surface-muted py-20 lg:py-24">
        <Container size="wide">
          <Reveal className="text-center max-w-[640px] mx-auto mb-12">
            <Eyebrow>{tx.pricingEyebrow}</Eyebrow>
            <h2 className="display-lg text-ink mt-4 text-balance">
              {tx.pricingTitle}
            </h2>
            <p className="mt-5 text-[0.95rem] text-ink-muted leading-relaxed">
              {tx.pricingSub}
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6">
            {tx.tiers.map((tier, idx) => (
              <Reveal key={tier.name} delay={idx * 0.08}>
                <div
                  className={
                    "highlighted" in tier && (tier as { highlighted?: boolean }).highlighted
                      ? "bg-surface-darker text-on-dark p-8 lg:p-10 h-full flex flex-col relative shadow-xl"
                      : "bg-surface text-ink p-8 lg:p-10 h-full flex flex-col border border-line"
                  }
                >
                  {"highlighted" in tier && (tier as { highlighted?: boolean }).highlighted && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-gold text-ink text-[0.66rem] uppercase tracking-[0.18em] font-medium">
                      {locale === "en" ? "Recommended" : locale === "de" ? "Empfohlen" : "En Çok Tercih"}
                    </span>
                  )}
                  <h3
                    className={`font-display text-[1.6rem] mb-1 ${
                      "highlighted" in tier && (tier as { highlighted?: boolean }).highlighted
                        ? "text-on-dark"
                        : "text-ink"
                    }`}
                  >
                    {tier.name}
                  </h3>
                  <p
                    className={`text-[0.78rem] uppercase tracking-[0.18em] mb-5 ${
                      "highlighted" in tier && (tier as { highlighted?: boolean }).highlighted
                        ? "text-gold"
                        : "text-ink-soft"
                    }`}
                  >
                    {tier.scope}
                  </p>
                  <div className="mb-6">
                    <span
                      className={`font-display text-[2rem] ${
                        "highlighted" in tier && (tier as { highlighted?: boolean }).highlighted
                          ? "text-on-dark"
                          : "text-ink"
                      }`}
                    >
                      {tier.priceRange}
                    </span>
                    <span
                      className={`text-[0.85rem] ml-1 ${
                        "highlighted" in tier && (tier as { highlighted?: boolean }).highlighted
                          ? "text-on-dark-muted"
                          : "text-ink-soft"
                      }`}
                    >
                      {tier.per}
                    </span>
                  </div>
                  <ul className="space-y-2.5 flex-1 mb-7">
                    {tier.features.map((f) => (
                      <li
                        key={f}
                        className={`flex items-start gap-2 text-[0.9rem] ${
                          "highlighted" in tier && (tier as { highlighted?: boolean }).highlighted
                            ? "text-on-dark-muted"
                            : "text-ink-muted"
                        }`}
                      >
                        <CheckCircle2
                          className="size-4 text-gold mt-0.5 flex-shrink-0"
                          strokeWidth={1.6}
                        />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Button
                    asChild
                    size="md"
                    variant={
                      "highlighted" in tier && (tier as { highlighted?: boolean }).highlighted
                        ? "primary"
                        : "outline"
                    }
                  >
                    <Link href="/teklif">
                      {tx.chooseTier}
                      <ArrowRight />
                    </Link>
                  </Button>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Process */}
      <section className="bg-background py-20 lg:py-24">
        <Container size="wide">
          <Reveal className="max-w-[640px] mb-14">
            <Eyebrow>{tx.processEyebrow}</Eyebrow>
            <h2 className="display-lg text-ink mt-4 text-balance">
              {tx.processTitle}
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
            {tx.processSteps.map((step, idx) => (
              <Reveal key={step.n} delay={idx * 0.06}>
                <div className="bg-surface-muted p-7 lg:p-8 h-full border-l-2 border-gold">
                  <span className="font-display text-[2.2rem] text-gold-deep">
                    {step.n}
                  </span>
                  <h3 className="font-display text-[1.2rem] text-ink mt-3 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-[0.9rem] text-ink-muted leading-relaxed">
                    {step.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Reference project */}
      <section className="bg-surface-darker text-on-dark relative overflow-hidden py-20 lg:py-24">
        <div className="absolute inset-0 marble-bg opacity-30" aria-hidden />
        <Container size="wide" className="relative">
          <Reveal>
            <Eyebrow variant="light">{tx.referencesEyebrow}</Eyebrow>
            <h2 className="display-lg mt-4 text-on-dark text-balance max-w-[760px]">
              {tx.referencesTitle}
            </h2>
            <p className="mt-6 text-[0.95rem] text-on-dark-muted leading-relaxed max-w-[640px]">
              {tx.referencesBody}
            </p>
            <Button asChild size="lg" className="mt-8">
              <Link href="/projeler/ahmet-hulusi-efendi-kulliyesi">
                {tx.referencesCta}
                <ArrowRight />
              </Link>
            </Button>
          </Reveal>
        </Container>
      </section>

      {/* FAQ */}
      <section className="bg-surface-muted py-16 lg:py-20">
        <Container size="narrow">
          <Reveal className="mb-10">
            <Eyebrow>{tx.faqEyebrow}</Eyebrow>
            <h2 className="display-md text-ink mt-3 text-balance">
              {tx.faqTitle}
            </h2>
          </Reveal>
          <div className="space-y-3">
            {faq.map((q, idx) => (
              <Reveal key={q.question} delay={idx * 0.05}>
                <details className="group bg-surface border border-line p-5 cursor-pointer">
                  <summary className="font-display text-[1.05rem] text-ink list-none flex items-center justify-between gap-3">
                    {q.question}
                    <ArrowRight className="size-4 text-ink-soft transition-transform group-open:rotate-90 flex-shrink-0" />
                  </summary>
                  <p className="mt-4 text-[0.92rem] text-ink-muted leading-relaxed">
                    {q.answer}
                  </p>
                </details>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <CtaBand />
    </>
  );
}
