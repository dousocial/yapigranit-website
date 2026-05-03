import type { Metadata } from "next";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { setRequestLocale } from "next-intl/server";
import {
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Flame,
  Droplets,
  Sparkles,
  Award,
} from "lucide-react";

import { PageHero } from "@/components/sections/page-hero";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import { Testimonials } from "@/components/sections/testimonials";
import { CtaBand } from "@/components/sections/cta-band";
import { ProductJsonLd, FaqJsonLd } from "@/components/seo/structured-data";
import { siteConfig } from "@/lib/site";

interface Props {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { locale } = await params;
  const meta = {
    tr: {
      title: "Çizilmez Porselen Mutfak Tezgahı — Yapı Granit",
      description:
        "Mohs 7-8 sertlikte, 1200°C'de sinterlenmiş porselen mutfak tezgahları. Çizilmez, leke tutmaz, asitten etkilenmez. Mutfak tezgahı fiyatları, ölçüler ve uygulama detayları.",
    },
    en: {
      title: "Scratch-Proof Porcelain Kitchen Countertop — Yapı Granit",
      description:
        "Mohs 7-8 hardness, sintered at 1200°C porcelain kitchen countertops. Scratch-proof, stain-resistant, acid-resistant. Pricing, dimensions, and application details.",
    },
    de: {
      title: "Kratzfeste Porzellan-Küchenarbeitsplatte — Yapı Granit",
      description:
        "Porzellan-Küchenarbeitsplatten mit Mohs 7-8 Härte, bei 1200°C gesintert. Kratzfest, fleckenresistent, säurebeständig. Preise, Maße und Anwendungsdetails.",
    },
  };
  const m = meta[locale as "tr" | "en" | "de"] ?? meta.tr;
  return {
    title: m.title,
    description: m.description,
    keywords: [
      "porselen mutfak tezgahı",
      "çizilmez mutfak tezgahı",
      "porselen tezgah fiyatları",
      "sinterlenmiş tezgah",
      "Lamar tezgah",
      "Dekton tezgah",
      "Neolith tezgah",
      "leke tutmaz tezgah",
      "premium mutfak tezgahı",
      "yapı granit",
    ],
    alternates: {
      canonical:
        locale === "tr"
          ? "/mutfak-tezgah-porselen"
          : `/${locale}/mutfak-tezgah-porselen`,
    },
  };
}

export default async function MutfakTezgahPorselenPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <PageContent locale={locale} />;
}

const i18n = {
  tr: {
    eyebrow: "Mutfak Tezgahları",
    h1: "Çizilmez Porselen Mutfak Tezgahı.",
    sub: "Limon, sirke, sıcak tencere — endişesiz kullanım için sinterlenmiş porselen.",
    breadcrumbHome: "Anasayfa",
    breadcrumbProducts: "Ürünler",
    crumb: "Porselen Mutfak Tezgahı",
    primaryCta: "Mutfağımı Fiyatlandır",
    secondaryCta: "Ücretsiz Numune İste",
    benefitsEyebrow: "Neden Porselen?",
    benefitsTitle: "Mermerden 8 kat daha sert.",
    benefits: [
      {
        title: "Çizilmez",
        body: "Mohs sertlik skalasında 7-8 — bıçak, çelik tel ve metal alet izi bırakmaz.",
      },
      {
        title: "Leke Tutmaz",
        body: "%0,05 su emilimi. Şarap, kahve, yağ — anında temizlenir, kalıcı leke yapmaz.",
      },
      {
        title: "Isı Direnci",
        body: "2000°C'ye dayanıklı. Sıcak tencereyi doğrudan tezgaha koyabilirsiniz.",
      },
      {
        title: "Asit Direnci",
        body: "Limon, sirke, deterjan — hassasiyetsiz. Mermerin aksine etching oluşmaz.",
      },
      {
        title: "Hijyen",
        body: "Gözeneksiz yapı sayesinde bakteri ve küf barındırmaz. Hastane standardında.",
      },
      {
        title: "Tasarım",
        body: "Calacatta, Carrara, Bookmatch — mermer estetiği, porselen dayanıklılığıyla.",
      },
    ],
    pricingEyebrow: "Fiyatlandırma",
    pricingTitle: "Şeffaf metrekare fiyatlandırması",
    pricingSub: "2026 fiyatları, KDV hariç. Özel ölçüler ve özel uygulamalar için iletişime geçin.",
    pricingDisclaimer: "*Fiyatlar bilgi amaçlıdır. Net fiyat ölçü ve markaya göre değişir.",
    tiers: [
      {
        name: "Standart",
        slabSize: "120×60 cm",
        priceRange: "₺4.000 – ₺6.000",
        per: "/m²",
        features: [
          "12 mm kalınlık",
          "Mat veya parlak yüzey",
          "Yerli markalar",
          "Standart kenar profilleri",
        ],
      },
      {
        name: "Premium",
        slabSize: "320×160 cm",
        priceRange: "₺7.500 – ₺12.000",
        per: "/m²",
        highlighted: true,
        features: [
          "20 mm kalınlık + bookmatch",
          "Lamar / Dekton / Neolith",
          "Yekpare ada — minimum derz",
          "Waterfall ve pahlı kenar",
          "Kendinden evyeli tasarım",
        ],
      },
      {
        name: "Özel",
        slabSize: "Proje özel",
        priceRange: "Fiyat teklifi",
        per: "",
        features: [
          "Özel ölçü ve form",
          "CNC işlenmiş 3D yüzey",
          "Backlight uygulamalar",
          "Su Jeti kesim göbekler",
        ],
      },
    ],
    chooseTier: "Bu Pakette Teklif Al",
    techEyebrow: "Teknik Veriler",
    techTitle: "Üretim ve uygulama hassasiyeti",
    techData: [
      { label: "Sertlik", value: "Mohs 7-8" },
      { label: "Su Emilimi", value: "%0,05 ↓" },
      { label: "Standart Kalınlık", value: "6 / 12 / 20 mm" },
      { label: "Maks. Plaka", value: "320 × 160 cm" },
      { label: "Isı Direnci", value: "2000°C" },
      { label: "Garanti", value: "10 yıl" },
    ],
    faqEyebrow: "Sıkça Sorulan",
    faqTitle: "Porselen tezgah hakkında",
  },
  en: {
    eyebrow: "Kitchen Countertops",
    h1: "Scratch-Proof Porcelain Kitchen Countertop.",
    sub: "Lemon, vinegar, hot pots — sintered porcelain for worry-free use.",
    breadcrumbHome: "Home",
    breadcrumbProducts: "Products",
    crumb: "Porcelain Kitchen Countertop",
    primaryCta: "Get My Kitchen Priced",
    secondaryCta: "Request Free Sample",
    benefitsEyebrow: "Why Porcelain?",
    benefitsTitle: "8× harder than marble.",
    benefits: [
      {
        title: "Scratch-Proof",
        body: "Mohs 7-8 hardness — knives, steel wool, and metal tools leave no marks.",
      },
      {
        title: "Stain-Free",
        body: "0.05% water absorption. Wine, coffee, oil — wipes clean instantly.",
      },
      {
        title: "Heat Resistant",
        body: "Resistant up to 2000°C. Place hot pots directly on the surface.",
      },
      {
        title: "Acid Resistant",
        body: "Lemon, vinegar, detergent — no etching, unlike marble.",
      },
      {
        title: "Hygienic",
        body: "Non-porous structure — no bacteria or mold. Hospital-grade.",
      },
      {
        title: "Design",
        body: "Calacatta, Carrara, Bookmatch — marble aesthetics with porcelain durability.",
      },
    ],
    pricingEyebrow: "Pricing",
    pricingTitle: "Transparent per-square-meter pricing",
    pricingSub: "2026 prices, VAT excluded. Contact us for custom dimensions.",
    pricingDisclaimer: "*Prices are indicative. Final price varies by size and brand.",
    tiers: [
      {
        name: "Standard",
        slabSize: "120×60 cm",
        priceRange: "$130 – $200",
        per: "/m²",
        features: [
          "12 mm thickness",
          "Matte or polished",
          "Local brands",
          "Standard edge profiles",
        ],
      },
      {
        name: "Premium",
        slabSize: "320×160 cm",
        priceRange: "$240 – $390",
        per: "/m²",
        highlighted: true,
        features: [
          "20 mm thickness + bookmatch",
          "Lamar / Dekton / Neolith",
          "Single-piece island — minimum joints",
          "Waterfall and chamfered edges",
          "Integrated sink design",
        ],
      },
      {
        name: "Custom",
        slabSize: "Project-specific",
        priceRange: "Quote",
        per: "",
        features: [
          "Custom dimensions and forms",
          "CNC-processed 3D surfaces",
          "Backlit applications",
          "Waterjet-cut centerpieces",
        ],
      },
    ],
    chooseTier: "Get Quote for This Tier",
    techEyebrow: "Technical Specs",
    techTitle: "Production and application precision",
    techData: [
      { label: "Hardness", value: "Mohs 7-8" },
      { label: "Water Absorption", value: "0.05% ↓" },
      { label: "Standard Thickness", value: "6 / 12 / 20 mm" },
      { label: "Max. Slab", value: "320 × 160 cm" },
      { label: "Heat Resistance", value: "2000°C" },
      { label: "Warranty", value: "10 years" },
    ],
    faqEyebrow: "FAQ",
    faqTitle: "About porcelain countertops",
  },
  de: {
    eyebrow: "Küchenarbeitsplatten",
    h1: "Kratzfeste Porzellan-Küchenarbeitsplatte.",
    sub: "Zitrone, Essig, heiße Töpfe — gesintertes Porzellan für sorglose Nutzung.",
    breadcrumbHome: "Startseite",
    breadcrumbProducts: "Produkte",
    crumb: "Porzellan-Küchenarbeitsplatte",
    primaryCta: "Meine Küche kalkulieren",
    secondaryCta: "Kostenloses Muster anfordern",
    benefitsEyebrow: "Warum Porzellan?",
    benefitsTitle: "8× härter als Marmor.",
    benefits: [
      { title: "Kratzfest", body: "Mohs 7-8 Härte — Messer und Stahl hinterlassen keine Spuren." },
      { title: "Fleckenresistent", body: "0,05% Wasseraufnahme. Wein, Kaffee, Öl — sofort sauber." },
      { title: "Hitzebeständig", body: "Bis 2000°C. Heiße Töpfe direkt auf die Oberfläche." },
      { title: "Säurebeständig", body: "Zitrone, Essig — keine Ätzung, im Gegensatz zu Marmor." },
      { title: "Hygienisch", body: "Porenfrei — keine Bakterien oder Schimmel. Krankenhaus-Standard." },
      { title: "Design", body: "Calacatta, Carrara, Bookmatch — Marmor-Ästhetik mit Porzellan-Härte." },
    ],
    pricingEyebrow: "Preise",
    pricingTitle: "Transparente Quadratmeterpreise",
    pricingSub: "Preise 2026, ohne MwSt. Sondermaße auf Anfrage.",
    pricingDisclaimer: "*Preise als Richtwert. Endpreis je nach Maß und Marke.",
    tiers: [
      {
        name: "Standard",
        slabSize: "120×60 cm",
        priceRange: "120 € – 180 €",
        per: "/m²",
        features: ["12 mm Stärke", "Matt oder poliert", "Lokale Marken", "Standardkanten"],
      },
      {
        name: "Premium",
        slabSize: "320×160 cm",
        priceRange: "220 € – 360 €",
        per: "/m²",
        highlighted: true,
        features: [
          "20 mm + Bookmatch",
          "Lamar / Dekton / Neolith",
          "Einteilige Insel",
          "Waterfall und Fasenkante",
          "Integrierte Spüle",
        ],
      },
      {
        name: "Sonder",
        slabSize: "Projektspezifisch",
        priceRange: "Angebot",
        per: "",
        features: [
          "Sondermaße und -formen",
          "CNC-bearbeitete 3D-Oberflächen",
          "Hinterleuchtete Anwendungen",
          "Wasserstrahl-Mittelstücke",
        ],
      },
    ],
    chooseTier: "Angebot für diese Stufe",
    techEyebrow: "Technische Daten",
    techTitle: "Produktions- und Anwendungspräzision",
    techData: [
      { label: "Härte", value: "Mohs 7-8" },
      { label: "Wasseraufnahme", value: "0,05% ↓" },
      { label: "Standardstärke", value: "6 / 12 / 20 mm" },
      { label: "Max. Platte", value: "320 × 160 cm" },
      { label: "Hitzebeständigkeit", value: "2000°C" },
      { label: "Garantie", value: "10 Jahre" },
    ],
    faqEyebrow: "FAQ",
    faqTitle: "Über Porzellan-Arbeitsplatten",
  },
};

const benefitIcons = [Award, Droplets, Flame, ShieldCheck, Sparkles, CheckCircle2];

function PageContent({ locale }: { locale: string }) {
  const tx = i18n[locale as "tr" | "en" | "de"] ?? i18n.tr;

  const faq = [
    {
      question:
        locale === "en"
          ? "Can I cut directly on the porcelain countertop?"
          : locale === "de"
          ? "Kann ich direkt auf der Porzellan-Arbeitsplatte schneiden?"
          : "Porselen tezgah üzerinde doğrudan kesim yapabilir miyim?",
      answer:
        locale === "en"
          ? "Yes, the surface won't be damaged — but your knives will dull faster. We recommend a cutting board to extend knife life."
          : locale === "de"
          ? "Ja, die Oberfläche bleibt unbeschädigt — aber Ihre Messer werden schneller stumpf. Wir empfehlen ein Schneidebrett."
          : "Evet, yüzey zarar görmez — ama bıçaklarınız daha hızlı körelir. Bıçak ömrü için kesim tahtası öneririz.",
    },
    {
      question:
        locale === "en"
          ? "How thick should a porcelain kitchen countertop be?"
          : locale === "de"
          ? "Wie dick sollte eine Porzellan-Arbeitsplatte sein?"
          : "Porselen mutfak tezgahı kaç mm olmalı?",
      answer:
        locale === "en"
          ? "12 mm is standard for kitchen islands. For waterfall designs and high-traffic edges, 20 mm is recommended."
          : locale === "de"
          ? "12 mm ist Standard für Kücheninseln. Für Waterfall-Designs werden 20 mm empfohlen."
          : "Mutfak adası için 12 mm standarttır. Waterfall ve yüksek darbe alanlarında 20 mm önerilir.",
    },
    {
      question:
        locale === "en"
          ? "Can porcelain edges chip?"
          : locale === "de"
          ? "Können Porzellankanten absplittern?"
          : "Porselen tezgah kenarları kırılabilir mi?",
      answer:
        locale === "en"
          ? "Yes, on hard impacts. We mitigate this with chamfered or bullnose edge profiles instead of 90° angles."
          : locale === "de"
          ? "Bei starken Stößen ja. Wir minimieren dies durch Fasen- oder Rundkanten statt 90°-Winkeln."
          : "Sert darbede evet. 90° yerine pahlı veya yuvarlatılmış kenar profilleriyle bu risk minimize edilir.",
    },
    {
      question:
        locale === "en"
          ? "How long does a porcelain countertop last?"
          : locale === "de"
          ? "Wie lange hält eine Porzellan-Arbeitsplatte?"
          : "Porselen tezgah ömrü ne kadardır?",
      answer:
        locale === "en"
          ? "20+ years with normal use. We provide a 10-year warranty."
          : locale === "de"
          ? "20+ Jahre bei normaler Nutzung. Wir bieten 10 Jahre Garantie."
          : "Normal kullanımda 20+ yıl. 10 yıl garanti veriyoruz.",
    },
  ];

  const productUrl =
    locale === "tr"
      ? `${siteConfig.url}/mutfak-tezgah-porselen`
      : `${siteConfig.url}/${locale}/mutfak-tezgah-porselen`;

  return (
    <>
      <ProductJsonLd
        name={tx.h1}
        description={tx.sub}
        image="/images/services/mutfak-tezgahi.webp"
        category="Mutfak Tezgahı"
        url={productUrl}
        sku="PORSELEN-MUTFAK-TEZGAH"
        material="Sinterlenmiş Porselen"
      />
      <FaqJsonLd questions={faq} />

      <PageHero
        title={tx.h1}
        description={tx.sub}
        breadcrumb={[
          { label: tx.breadcrumbHome, href: "/" },
          { label: tx.breadcrumbProducts, href: "/urunler" },
          { label: tx.crumb },
        ]}
        image="/images/services/mutfak-tezgahi.webp"
        imageAlt={tx.h1}
      />

      {/* Hero altı CTA bandı */}
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
              <Link href="/numune-talep">
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

      {/* Pricing — 3 tier decoy */}
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
                      {locale === "en" ? "Recommended" : locale === "de" ? "Empfohlen" : "En Popüler"}
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
                    {tier.slabSize}
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
          <p className="mt-8 text-center text-[0.78rem] text-ink-soft italic">
            {tx.pricingDisclaimer}
          </p>
        </Container>
      </section>

      {/* Tech specs */}
      <section className="bg-background py-16 lg:py-20">
        <Container size="wide">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <Reveal className="lg:col-span-5">
              <Eyebrow>{tx.techEyebrow}</Eyebrow>
              <h2 className="display-md text-ink mt-3 text-balance">
                {tx.techTitle}
              </h2>
            </Reveal>
            <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-4">
              {tx.techData.map((d) => (
                <div
                  key={d.label}
                  className="bg-surface-muted p-5 border-l-2 border-gold"
                >
                  <p className="text-[0.7rem] uppercase tracking-[0.18em] text-ink-soft mb-1">
                    {d.label}
                  </p>
                  <p className="font-display text-[1.2rem] text-ink">
                    {d.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
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

      <Testimonials />
      <CtaBand />
    </>
  );
}
