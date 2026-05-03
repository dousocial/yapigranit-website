import type { Metadata } from "next";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { ArrowRight, Cpu } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";

import { PageHero } from "@/components/sections/page-hero";
import { CtaBand } from "@/components/sections/cta-band";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import { machinery, localizedMachine } from "@/lib/data/machinery";
import type { Locale } from "@/i18n/routing";

interface Props {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { locale } = await params;
  const titles: Record<string, { title: string; description: string }> = {
    tr: {
      title: "Makine Parkuru",
      description:
        "Yapı Granit makine parkuru: Su jeti, 5 eksen CNC, köprü kesme, yan kesme, kafa kesme ve PAH makinesi ile milimetrik hassasiyetli doğal taş işleme.",
    },
    en: {
      title: "Machinery",
      description:
        "Yapı Granit machinery: Waterjet, 5-axis CNC, bridge saw, side cutting, cross cutting, and chamfering machines for millimeter-precision natural stone processing.",
    },
    de: {
      title: "Maschinenpark",
      description:
        "Yapı Granit Maschinenpark: Wasserstrahl, 5-Achsen-CNC, Brückensäge, Seitenschnitt, Kopfschnitt und Fasenmaschine für millimetergenaue Natursteinbearbeitung.",
    },
  };
  const meta = titles[locale] ?? titles.tr;
  return {
    title: meta.title,
    description: meta.description,
    keywords: [
      "yapı granit makine parkuru",
      "su jeti waterjet",
      "5 eksen cnc",
      "köprü kesme",
      "bridge saw",
      "yan kesme",
      "kafa kesme",
      "pah makinesi",
      "chamfering",
      "doğal taş işleme",
      "cnc taş kaplama",
      "doğal taş üretim teknolojileri",
      "denizli taş işleme",
    ],
    alternates: {
      canonical:
        locale === "tr" ? "/makine-parkuru" : `/${locale}/makine-parkuru`,
    },
  };
}

export default async function MakineParkuruPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <MakineContent />;
}

function MakineContent() {
  const locale = useLocale() as Locale;
  const tNav = useTranslations("Nav");

  const heroTitle =
    locale === "en"
      ? "Machinery"
      : locale === "de"
      ? "Maschinenpark"
      : "Makine Parkuru";

  const heroDescription =
    locale === "en"
      ? "From cold-cutting waterjet to 5-axis CNC — production technologies that bring millimeter precision to natural stone."
      : locale === "de"
      ? "Vom kaltschneidenden Wasserstrahl bis zur 5-Achsen-CNC — Fertigungstechnologien für millimetergenaue Natursteinbearbeitung."
      : "Soğuk kesim su jetinden 5 eksen CNC'ye — doğal taşa milimetrik hassasiyet kazandıran üretim teknolojileri.";

  const introEyebrow =
    locale === "en" ? "Production Technology" : locale === "de" ? "Fertigungstechnologie" : "Üretim Teknolojisi";

  const introTitle =
    locale === "en"
      ? "Engineering precision in every cut"
      : locale === "de"
      ? "Ingenieurpräzision in jedem Schnitt"
      : "Her kesimde mühendislik hassasiyeti";

  const introBody =
    locale === "en"
      ? "Our integrated production line combines cold-cutting, multi-axis machining, and precision finishing — turning raw slabs into ready-to-install architectural surfaces."
      : locale === "de"
      ? "Unsere integrierte Produktionslinie kombiniert Kaltschneiden, Mehrachsenbearbeitung und Präzisionsbearbeitung — von Rohplatten zu installationsfertigen Architekturoberflächen."
      : "Entegre üretim hattımız soğuk kesim, çok eksenli işleme ve hassas bitiş süreçlerini birleştirir — ham levhayı uygulamaya hazır mimari yüzeylere dönüştürür.";

  return (
    <>
      <PageHero
        title={heroTitle}
        description={heroDescription}
        breadcrumb={[
          { label: tNav("home"), href: "/" },
          { label: tNav("machinePark") },
        ]}
        image="/images/machinery/5-eksen-cnc.webp"
        imageAlt={heroTitle}
      />

      {/* Intro */}
      <section className="bg-background py-16 lg:py-20">
        <Container size="wide">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
            <Reveal className="lg:col-span-7">
              <Eyebrow>{introEyebrow}</Eyebrow>
              <h2 className="display-lg text-ink mt-4 text-balance">
                {introTitle}
              </h2>
            </Reveal>
            <Reveal delay={0.1} className="lg:col-span-5">
              <p className="text-[0.96rem] text-ink-muted leading-relaxed">
                {introBody}
              </p>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Machinery list — alternating */}
      <section className="bg-background pb-20">
        <Container size="wide">
          <div className="space-y-16 lg:space-y-24">
            {machinery.map((machine, idx) => {
              const m = localizedMachine(machine, locale);
              const reversed = idx % 2 === 1;
              return (
                <Reveal
                  key={machine.slug}
                  delay={0.05}
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center ${
                    reversed ? "lg:[&>div:first-child]:order-2" : ""
                  }`}
                >
                  <div className="lg:col-span-7">
                    <div className="relative aspect-[4/3] overflow-hidden bg-surface-muted group">
                      <Image
                        src={machine.image}
                        alt={m.title}
                        fill
                        sizes="(max-width: 1024px) 100vw, 58vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                      />
                      <div className="absolute top-4 left-4 px-3 py-1.5 bg-on-dark/90 backdrop-blur-sm">
                        <span className="text-[0.72rem] uppercase tracking-[0.18em] text-ink font-medium">
                          {machine.number}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="lg:col-span-5">
                    <Eyebrow>
                      <Cpu className="inline size-3.5 mr-1.5 -mt-0.5" />
                      {m.subtitle}
                    </Eyebrow>
                    <h3 className="display-md text-ink mt-3 text-balance">
                      {m.title}
                    </h3>
                    <div className="w-12 h-px bg-gold mt-5" />
                    <p className="mt-5 text-[0.95rem] text-ink-muted leading-relaxed">
                      {m.description}
                    </p>

                    <div className="mt-6 p-4 bg-surface-muted border-l-2 border-gold">
                      <p className="text-[0.72rem] uppercase tracking-[0.18em] text-ink-soft">
                        {m.precisionLabel}
                      </p>
                      <p className="font-display text-[1.3rem] text-ink mt-1">
                        {m.precisionValue}
                      </p>
                    </div>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {m.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1.5 text-[0.76rem] bg-ink text-on-dark"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Hizmetler bağlantı bandı */}
      <section className="bg-surface-muted py-16 lg:py-20">
        <Container size="wide">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-7">
              <Eyebrow>
                {locale === "en" ? "Services" : locale === "de" ? "Leistungen" : "Hizmetler"}
              </Eyebrow>
              <h3 className="display-md text-ink mt-3 text-balance">
                {locale === "en"
                  ? "Beyond machinery: end-to-end solutions"
                  : locale === "de"
                  ? "Über Maschinen hinaus: durchgängige Lösungen"
                  : "Makinenin ötesinde: uçtan uca çözümler"}
              </h3>
              <p className="mt-5 text-[0.95rem] text-ink-muted leading-relaxed max-w-[640px]">
                {locale === "en"
                  ? "Mechanical façade systems, kitchen and bathroom solutions, custom stone furniture, and decorative applications — explore our full service portfolio."
                  : locale === "de"
                  ? "Mechanische Fassadensysteme, Küchen- und Badlösungen, maßgefertigte Steinmöbel und dekorative Anwendungen — entdecken Sie unser komplettes Leistungsportfolio."
                  : "Mekanik cephe sistemleri, mutfak-banyo çözümleri, özel tasarım taş mobilya ve dekoratif uygulamalar — tüm hizmet portföyümüzü keşfedin."}
              </p>
            </div>
            <div className="lg:col-span-5 lg:text-right">
              <Button asChild size="lg">
                <Link href="/hizmetler">
                  {locale === "en"
                    ? "View Services"
                    : locale === "de"
                    ? "Leistungen ansehen"
                    : "Hizmetleri Görüntüle"}
                  <ArrowRight />
                </Link>
              </Button>
            </div>
          </div>
        </Container>
      </section>

      <CtaBand />
    </>
  );
}
