import type { Metadata } from "next";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  ArrowRight,
  Users2,
  Building2,
  Ruler,
  ShieldCheck,
} from "lucide-react";
import { useTranslations } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";

import { PageHero } from "@/components/sections/page-hero";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { ContactForm } from "@/components/sections/contact-form";
import { siteConfig } from "@/lib/site";

interface Props {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Pages.contact" });
  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
    alternates: {
      canonical: locale === "tr" ? "/iletisim" : `/${locale}/iletisim`,
    },
  };
}

export default async function IletisimPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <IletisimContent />;
}

function IletisimContent() {
  const t = useTranslations("Pages.contact");
  const tNav = useTranslations("Nav");

  const trustItems: {
    icon: typeof Users2;
    titleKey: "trustExpertTitle" | "trustQuickTitle" | "trustProjectTitle" | "trustReliableTitle";
    descKey: "trustExpertDesc" | "trustQuickDesc" | "trustProjectDesc" | "trustReliableDesc";
  }[] = [
    {
      icon: Users2,
      titleKey: "trustExpertTitle",
      descKey: "trustExpertDesc",
    },
    {
      icon: Building2,
      titleKey: "trustQuickTitle",
      descKey: "trustQuickDesc",
    },
    {
      icon: Ruler,
      titleKey: "trustProjectTitle",
      descKey: "trustProjectDesc",
    },
    {
      icon: ShieldCheck,
      titleKey: "trustReliableTitle",
      descKey: "trustReliableDesc",
    },
  ];

  return (
    <>
      <PageHero
        title={t("title")}
        description={t("description")}
        breadcrumb={[
          { label: tNav("home"), href: "/" },
          { label: tNav("contact") },
        ]}
        image="/images/hero/hero-iletisim.webp"
        imageAlt={t("title")}
      />

      {/* Info cards */}
      <section className="bg-background -mt-16 lg:-mt-20 relative z-10 pb-2">
        <Container size="wide">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4">
            <InfoCard
              icon={MapPin}
              title={t("infoCenterTitle")}
              lines={[
                siteConfig.contact.address.line1,
                siteConfig.contact.address.line2,
                siteConfig.contact.address.city,
              ]}
              actionLabel={t("infoCenterAction")}
              actionHref={`https://www.google.com/maps/dir/?api=1&destination=${siteConfig.contact.map.lat},${siteConfig.contact.map.lng}`}
              external
            />
            <InfoCard
              icon={Phone}
              title={t("infoPhoneTitle")}
              lines={siteConfig.contact.phones}
              actionLabel={t("infoPhoneAction")}
              actionHref={`tel:${siteConfig.contact.phones[0].replace(/\s/g, "")}`}
            />
            <InfoCard
              icon={Mail}
              title={t("infoEmailTitle")}
              lines={[
                siteConfig.contact.emails.info,
                siteConfig.contact.emails.project,
              ]}
              actionLabel={t("infoEmailAction")}
              actionHref={`mailto:${siteConfig.contact.emails.info}`}
            />
            <InfoCard
              icon={Clock}
              title={t("infoHoursTitle")}
              lines={siteConfig.contact.workHours.flatMap((w) => [
                t("infoHoursWeekdays"),
                w.hours,
              ])}
            />
          </div>
        </Container>
      </section>

      {/* Form + Map */}
      <section className="bg-background py-16 lg:py-20">
        <Container size="wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            <Reveal>
              <div className="bg-surface p-8 lg:p-10 border border-line">
                <p className="eyebrow">{t("formEyebrow")}</p>
                <h2 className="display-md text-ink mt-3 text-balance">
                  {t("formTitle")}
                </h2>
                <div className="w-12 h-px bg-gold mt-5" />
                <ContactForm className="mt-8" />
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="relative h-full min-h-[480px] bg-surface-muted overflow-hidden">
                <iframe
                  src={`https://www.openstreetmap.org/export/embed.html?bbox=${
                    siteConfig.contact.map.lng - 0.02
                  }%2C${siteConfig.contact.map.lat - 0.01}%2C${
                    siteConfig.contact.map.lng + 0.02
                  }%2C${siteConfig.contact.map.lat + 0.01}&layer=mapnik&marker=${
                    siteConfig.contact.map.lat
                  }%2C${siteConfig.contact.map.lng}`}
                  className="absolute inset-0 w-full h-full grayscale-[0.4]"
                  loading="lazy"
                  title="YAPIGRANİT"
                />
                <div className="absolute left-6 bottom-6 right-6 lg:right-auto lg:max-w-[320px] bg-surface p-5 shadow-md">
                  <h4 className="font-display text-[1.2rem] text-ink mb-2">
                    {siteConfig.name}
                  </h4>
                  <p className="text-[0.82rem] text-ink-muted leading-relaxed mb-3">
                    {siteConfig.contact.address.line1}
                    <br />
                    {siteConfig.contact.address.line2}
                    <br />
                    {siteConfig.contact.address.city}
                  </p>
                  <a
                    href={`https://www.google.com/maps/dir/?api=1&destination=${siteConfig.contact.map.lat},${siteConfig.contact.map.lng}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-[0.78rem] font-medium uppercase tracking-[0.15em] text-gold-deep hover:text-gold"
                  >
                    {t("mapInDirections")}
                    <ArrowRight className="size-3.5" />
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Trust */}
      <section className="bg-surface-darker text-on-dark py-14 lg:py-16 relative overflow-hidden">
        <div className="absolute inset-0 marble-bg opacity-40" aria-hidden />
        <Container size="wide" className="relative">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {trustItems.map((item, idx) => (
              <Reveal key={item.titleKey} delay={idx * 0.06}>
                <div className="flex items-start gap-4">
                  <item.icon
                    className="size-7 text-gold shrink-0"
                    strokeWidth={1.4}
                  />
                  <div>
                    <h4 className="font-display text-[1.05rem] text-on-dark mb-1">
                      {t(item.titleKey)}
                    </h4>
                    <p className="text-[0.82rem] text-on-dark-muted leading-relaxed">
                      {t(item.descKey)}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}

interface InfoCardProps {
  icon: React.ComponentType<{ className?: string; strokeWidth?: number }>;
  title: string;
  lines: readonly string[];
  actionLabel?: string;
  actionHref?: string;
  external?: boolean;
}

function InfoCard({
  icon: Icon,
  title,
  lines,
  actionLabel,
  actionHref,
  external,
}: InfoCardProps) {
  return (
    <div className="bg-surface-darker text-on-dark p-6 lg:p-7 flex flex-col h-full">
      <Icon className="size-7 text-gold mb-5" strokeWidth={1.4} />
      <h3 className="font-display text-[1.2rem] text-on-dark mb-3">{title}</h3>
      <div className="text-[0.85rem] text-on-dark-muted space-y-1 flex-1">
        {lines.map((line, i) => (
          <p key={i}>{line}</p>
        ))}
      </div>
      {actionLabel && actionHref && (
        <a
          href={actionHref}
          target={external ? "_blank" : undefined}
          rel={external ? "noopener noreferrer" : undefined}
          className="mt-5 inline-flex items-center gap-1.5 text-[0.78rem] font-medium uppercase tracking-[0.15em] text-gold hover:text-gold-soft self-start"
        >
          {actionLabel}
          <ArrowRight className="size-3.5" />
        </a>
      )}
    </div>
  );
}
