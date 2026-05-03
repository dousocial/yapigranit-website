import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { Briefcase, MapPin, Mail, ArrowRight } from "lucide-react";

import { PageHero } from "@/components/sections/page-hero";
import { CtaBand } from "@/components/sections/cta-band";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/navigation";
import { siteConfig } from "@/lib/site";

interface Props {
  params: Promise<{ locale: string }>;
}

const i18n = {
  tr: {
    title: "Kariyer",
    description:
      "Mermer ve doğal taş sektörünün öncü markalarından biri olan ekibimize katılın. Uzun soluklu, gelişim odaklı bir kariyer.",
    breadcrumbHome: "Anasayfa",
    crumb: "Kariyer",
    introEyebrow: "Birlikte Çalışmak",
    introTitle: "Geleceğin doğal taş atölyesinde biz yer alıyoruz.",
    introBody:
      "32 yıllık tecrübemizle, mimar ve mühendis ekibimizle, en yeni CNC ve waterjet teknolojileriyle Anadolu'dan dünyaya doğal taş işliyoruz. Öğrenmeye, geliştirmeye ve büyümeye açık ekip arkadaşları arıyoruz.",
    valuesEyebrow: "Değerlerimiz",
    valuesTitle: "Yapı Granit'te çalışmak ne demek?",
    values: [
      {
        title: "Sürdürülebilirlik",
        body: "Atıktan değer üreten, su geri kazanım sistemli, yenilenebilir enerjiye geçen bir atölye.",
      },
      {
        title: "Gelişim",
        body: "5 eksen CNC, waterjet, dijital rölöve — sektörün en yeni teknolojilerini elinizin altında bulun.",
      },
      {
        title: "Uzun Vadeli Bakış",
        body: "Quartal hedefler değil, 10 yıllık vizyon — ekibimizle birlikte büyüyoruz.",
      },
    ],
    openPositionsEyebrow: "Açık Pozisyonlar",
    openPositionsTitle: "Şu an aradığımız ekip arkadaşları",
    noOpenings:
      "Şu anda yayınlanmış açık pozisyonumuz bulunmuyor. Ancak başvurunuzu her zaman değerlendiriyoruz — CV'nizi aşağıdaki e-posta adresine iletin.",
    emailLabel: "Başvuru E-postası",
    locationLabel: "Lokasyon",
    locationValue: "Denizli, Türkiye",
    ctaTitle: "CV'niz hazır mı?",
    ctaBody:
      "Pozisyon listesinde olmasanız bile yetenekli ekip arkadaşlarına ihtiyacımız var. CV'nizi e-posta ile gönderin — ekibimize en uygun rolü birlikte bulalım.",
    ctaPrimary: "Bizimle İletişime Geç",
  },
  en: {
    title: "Careers",
    description:
      "Join our team — one of the leading brands in marble and natural stone. A long-term, growth-oriented career.",
    breadcrumbHome: "Home",
    crumb: "Careers",
    introEyebrow: "Working Together",
    introTitle: "We are the natural stone workshop of the future.",
    introBody:
      "With 32 years of experience, our architect and engineer team, and the latest CNC and waterjet technologies, we process natural stone from Anatolia to the world. We are looking for teammates who are open to learning, developing, and growing.",
    valuesEyebrow: "Our Values",
    valuesTitle: "What does it mean to work at Yapı Granit?",
    values: [
      {
        title: "Sustainability",
        body: "A workshop that creates value from waste, with water recovery systems and renewable energy.",
      },
      {
        title: "Growth",
        body: "5-axis CNC, waterjet, digital surveying — the latest technologies in the industry at your fingertips.",
      },
      {
        title: "Long-Term Vision",
        body: "Not quarterly targets, but a 10-year vision — we grow together with our team.",
      },
    ],
    openPositionsEyebrow: "Open Positions",
    openPositionsTitle: "Roles we're looking for right now",
    noOpenings:
      "We don't have any open positions published right now. However, we always evaluate applications — send your CV to the email below.",
    emailLabel: "Application Email",
    locationLabel: "Location",
    locationValue: "Denizli, Turkey",
    ctaTitle: "Got your CV ready?",
    ctaBody:
      "Even if you're not on the position list, we need talented teammates. Send your CV by email and let's find the best role together.",
    ctaPrimary: "Get in Touch",
  },
  de: {
    title: "Karriere",
    description:
      "Schließen Sie sich unserem Team an — einer der führenden Marken in Marmor und Naturstein. Eine langfristige, wachstumsorientierte Karriere.",
    breadcrumbHome: "Startseite",
    crumb: "Karriere",
    introEyebrow: "Gemeinsam arbeiten",
    introTitle: "Wir sind die Natursteinwerkstatt der Zukunft.",
    introBody:
      "Mit 32 Jahren Erfahrung, unserem Architekten- und Ingenieurteam und den neuesten CNC- und Wasserstrahltechnologien verarbeiten wir Naturstein von Anatolien in die Welt.",
    valuesEyebrow: "Unsere Werte",
    valuesTitle: "Was bedeutet es, bei Yapı Granit zu arbeiten?",
    values: [
      { title: "Nachhaltigkeit", body: "Eine Werkstatt, die aus Abfall Wert schafft." },
      { title: "Wachstum", body: "5-Achsen-CNC, Wasserstrahl, digitales Aufmaß — die neuesten Technologien." },
      { title: "Langfristige Vision", body: "Keine Quartalsziele, sondern eine 10-Jahres-Vision." },
    ],
    openPositionsEyebrow: "Offene Stellen",
    openPositionsTitle: "Rollen, die wir suchen",
    noOpenings:
      "Wir haben derzeit keine offenen Stellen veröffentlicht. Wir bewerten jedoch immer Bewerbungen — senden Sie Ihren Lebenslauf an die untenstehende E-Mail.",
    emailLabel: "Bewerbungs-E-Mail",
    locationLabel: "Standort",
    locationValue: "Denizli, Türkei",
    ctaTitle: "Lebenslauf bereit?",
    ctaBody:
      "Auch wenn Sie nicht auf der Positionsliste stehen, brauchen wir talentierte Teamkollegen.",
    ctaPrimary: "Kontakt aufnehmen",
  },
};

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { locale } = await params;
  const tx = i18n[locale as "tr" | "en" | "de"] ?? i18n.tr;
  return {
    title: tx.title,
    description: tx.description,
    alternates: {
      canonical: locale === "tr" ? "/kariyer" : `/${locale}/kariyer`,
    },
  };
}

export default async function KariyerPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const tx = i18n[locale as "tr" | "en" | "de"] ?? i18n.tr;
  const emails = siteConfig.contact.emails as Record<string, string>;
  const careerEmail = emails.career ?? emails.info;

  return (
    <>
      <PageHero
        title={tx.title}
        description={tx.description}
        breadcrumb={[
          { label: tx.breadcrumbHome, href: "/" },
          { label: tx.crumb },
        ]}
        image="/images/hero/hero-kurumsal.webp"
        imageAlt={tx.title}
      />

      {/* Intro */}
      <section className="bg-background py-20 lg:py-24">
        <Container size="wide">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
            <Reveal className="lg:col-span-6">
              <Eyebrow>{tx.introEyebrow}</Eyebrow>
              <h2 className="display-lg text-ink mt-4 text-balance">
                {tx.introTitle}
              </h2>
            </Reveal>
            <Reveal delay={0.1} className="lg:col-span-6">
              <p className="text-[0.96rem] text-ink-muted leading-relaxed">
                {tx.introBody}
              </p>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Values */}
      <section className="bg-surface-muted py-20 lg:py-24">
        <Container size="wide">
          <Reveal className="text-center max-w-[640px] mx-auto mb-14">
            <Eyebrow>{tx.valuesEyebrow}</Eyebrow>
            <h2 className="display-md text-ink mt-3 text-balance">
              {tx.valuesTitle}
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6">
            {tx.values.map((v, idx) => (
              <Reveal key={v.title} delay={idx * 0.06}>
                <div className="bg-surface p-7 lg:p-8 h-full border-l-2 border-gold">
                  <h3 className="font-display text-[1.3rem] text-ink mb-3">
                    {v.title}
                  </h3>
                  <p className="text-[0.92rem] text-ink-muted leading-relaxed">
                    {v.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Open positions */}
      <section className="bg-background py-20 lg:py-24">
        <Container size="wide">
          <Reveal className="mb-12">
            <Eyebrow>{tx.openPositionsEyebrow}</Eyebrow>
            <h2 className="display-md text-ink mt-3 text-balance">
              {tx.openPositionsTitle}
            </h2>
          </Reveal>

          <Reveal>
            <div className="bg-surface-muted p-8 lg:p-10 border-l-2 border-gold-deep">
              <Briefcase
                className="size-10 text-gold-deep mb-5"
                strokeWidth={1.4}
              />
              <p className="text-[0.96rem] text-ink-muted leading-relaxed mb-7 max-w-[640px]">
                {tx.noOpenings}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-7">
                <div>
                  <p className="text-[0.72rem] uppercase tracking-[0.18em] text-ink-soft mb-2">
                    {tx.emailLabel}
                  </p>
                  <a
                    href={`mailto:${careerEmail}`}
                    className="font-display text-[1.1rem] text-ink hover:text-gold-deep flex items-center gap-2"
                  >
                    <Mail className="size-4 text-gold-deep" strokeWidth={1.6} />
                    {careerEmail}
                  </a>
                </div>
                <div>
                  <p className="text-[0.72rem] uppercase tracking-[0.18em] text-ink-soft mb-2">
                    {tx.locationLabel}
                  </p>
                  <p className="font-display text-[1.1rem] text-ink flex items-center gap-2">
                    <MapPin className="size-4 text-gold-deep" strokeWidth={1.6} />
                    {tx.locationValue}
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* CTA */}
      <section className="bg-surface-darker text-on-dark relative overflow-hidden py-20 lg:py-24">
        <div className="absolute inset-0 marble-bg opacity-30" aria-hidden />
        <Container size="wide" className="relative">
          <Reveal className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7">
              <h2 className="display-lg text-on-dark text-balance">
                {tx.ctaTitle}
              </h2>
              <p className="mt-6 text-[0.95rem] text-on-dark-muted leading-relaxed max-w-[600px]">
                {tx.ctaBody}
              </p>
            </div>
            <div className="lg:col-span-5 lg:text-right">
              <Button asChild size="lg">
                <Link href="/iletisim">
                  {tx.ctaPrimary}
                  <ArrowRight />
                </Link>
              </Button>
            </div>
          </Reveal>
        </Container>
      </section>

      <CtaBand />
    </>
  );
}
