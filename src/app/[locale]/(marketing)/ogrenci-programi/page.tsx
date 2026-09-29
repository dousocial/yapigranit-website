import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import localFont from "next/font/local";
import { setRequestLocale } from "next-intl/server";
import {
  ArrowDownRight,
  ArrowRight,
  Factory,
  Layers,
  Mail,
  MapPin,
  MessagesSquare,
  Phone,
  ScanLine,
  Trophy,
  UserRoundSearch,
} from "lucide-react";

import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { StudentProgramForm } from "@/components/sections/student-program-form";
import { siteConfig } from "@/lib/site";
import { canonicalFor } from "@/lib/i18n-urls";
import { cn } from "@/lib/utils";

import s from "./ogrenci.module.css";

// Sayfaya özel tipografi: öğrenci / çizim paftası dili.
// Font dosyaları repoda (Latin + Türkçe alt küme, OFL) — build sırasında
// Google Fonts'a bağımlı kalmasın diye next/font/google yerine local.
const grotesk = localFont({
  src: "./fonts/SpaceGrotesk.woff2",
  weight: "300 700",
  variable: "--font-grotesk",
  display: "swap",
});
const plexMono = localFont({
  src: [
    { path: "./fonts/PlexMono-Regular.woff2", weight: "400" },
    { path: "./fonts/PlexMono-Medium.woff2", weight: "500" },
  ],
  variable: "--font-plex-mono",
  display: "swap",
});

interface Props {
  params: Promise<{ locale: string }>;
}

const PATH = "/ogrenci-programi";
const TITLE = "Öğrenci Programı — Geleceğin Mimarlarıyla Birlikte";
const DESCRIPTION =
  "Mimarlık, iç mimarlık ve tasarım öğrencilerine atölye gezisi, staj, bitirme projesi malzeme desteği, numune, tasarım yarışmaları ve CNC / Waterjet prototip desteği. Yapıgranit'te doğal taşı yakından tanı.";

// Bu sayfa şimdilik yalnızca Türkçe (yapigranit.com) yayında.
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  if (locale !== "tr") return {};
  return {
    title: TITLE,
    description: DESCRIPTION,
    alternates: { canonical: canonicalFor("tr", PATH) },
    openGraph: {
      title: TITLE,
      description: DESCRIPTION,
      url: canonicalFor("tr", PATH),
      images: ["/images/services/hizmet-tasarim.webp"],
    },
  };
}

const opportunities = [
  {
    code: "A-01",
    icon: Factory,
    title: "Teknik atölye ve üretim gezileri",
    body: "Bloğun plakaya, plakanın projeye dönüştüğü süreci atölyemizde yerinde gör.",
    tag: "Saha",
  },
  {
    code: "A-02",
    icon: UserRoundSearch,
    title: "Staj ve mesleki gözlem olanakları",
    body: "Üretim, proje ve uygulama ekiplerimizin yanında mesleği sahada tanı.",
    tag: "Deneyim",
  },
  {
    code: "A-03",
    icon: Layers,
    title: "Bitirme projelerine malzeme desteği",
    body: "Doğal taşla çalışmak isteyen bitirme ve dönem projelerine malzeme desteği.",
    tag: "Malzeme",
  },
  {
    code: "A-04",
    icon: MessagesSquare,
    title: "Numune ve teknik danışmanlık",
    body: "Mermer, granit ve porselen numuneleri; detay çözümleri için ekibimize danış.",
    tag: "Detay",
  },
  {
    code: "A-05",
    icon: Trophy,
    title: "Öğrencilere yönelik tasarım yarışmaları",
    body: "Doğal taşla üretilen fikirleri öne çıkaran yarışmalarla işini görünür kıl.",
    tag: "Yarışma",
  },
  {
    code: "A-06",
    icon: ScanLine,
    title: "CNC / Waterjet ile prototip üretim desteği",
    body: "Maket ve prototiplerini 5 eksen CNC ve waterjet teknolojisiyle hayata geçir.",
    tag: "Prototip",
  },
];

const steps = [
  {
    title: "Başvurunu bırak",
    body: "Formu doldur ya da standımıza uğrayıp bizimle tanış.",
  },
  {
    title: "Seni arayalım",
    body: "İlgi alanına ve projene göre programı birlikte planlayalım.",
  },
  {
    title: "Atölyede buluşalım",
    body: "Gezi, numune, prototip… Fikrin taşla buluşsun.",
  },
];

const tickerItems = [
  "Mimarlık",
  "İç Mimarlık",
  "Endüstriyel Tasarım",
  "Peyzaj Mimarlığı",
  "Atölye Gezisi",
  "Staj",
  "Bitirme Projesi",
  "CNC / Waterjet",
  "Tasarım Yarışması",
];

function Crosshairs({ className }: { className?: string }) {
  return (
    <>
      <span className={cn(s.crosshair, "-left-[9px] -top-[9px]", className)} aria-hidden />
      <span className={cn(s.crosshair, "-right-[9px] -top-[9px]", className)} aria-hidden />
      <span className={cn(s.crosshair, "-left-[9px] -bottom-[9px]", className)} aria-hidden />
      <span className={cn(s.crosshair, "-right-[9px] -bottom-[9px]", className)} aria-hidden />
    </>
  );
}

function SectionLabel({
  children,
  sheet,
  dark,
}: {
  children: React.ReactNode;
  sheet: string;
  dark?: boolean;
}) {
  return (
    <div
      className={cn(
        s.mono,
        "flex items-center justify-between gap-4 border-b border-dashed pb-3 text-[0.7rem] uppercase",
        dark ? "border-on-dark/20 text-on-dark-soft" : "border-ink/25 text-ink-soft",
      )}
    >
      <span>{children}</span>
      <span>{sheet}</span>
    </div>
  );
}

export default async function StudentProgramPage({ params }: Props) {
  const { locale } = await params;
  if (locale !== "tr") notFound();
  setRequestLocale(locale);

  const { phones, emails, whatsapp } = siteConfig.contact;

  return (
    <div className={cn(grotesk.variable, plexMono.variable)}>
      {/* ───────────── HERO — PAFTA 01 ───────────── */}
      <section className={cn(s.gridDark, "relative text-on-dark overflow-hidden")}>
        <Container size="wide" className="relative pt-8 pb-16 lg:pt-10 lg:pb-24">
          <div
            className={cn(
              s.mono,
              "hero-fade-1 grid grid-cols-2 sm:grid-cols-4 gap-y-2 border-b border-dashed border-on-dark/20 pb-4 text-[0.66rem] uppercase text-on-dark-soft",
            )}
          >
            <span>Yapıgranit / Öğrenci Programı</span>
            <span className="text-right sm:text-left">Pafta 01 — Giriş</span>
            <span className="hidden sm:block">Ölçek 1:1</span>
            <span className="hidden sm:block sm:text-right">Denizli · 2026</span>
          </div>

          <h1
            className={cn(
              s.grotesk,
              "hero-fade-2 mt-10 lg:mt-14 uppercase font-bold tracking-[-0.035em] text-[clamp(2.4rem,11.5vw,11.5rem)] leading-[0.94]",
            )}
          >
            <span className="block text-on-dark">Geleceğin</span>
            <span className={cn(s.stroke, "block")}>Mimarlarıyla</span>
            <span className="block font-display font-normal italic normal-case tracking-[-0.02em] text-gold">
              birlikte.
            </span>
          </h1>

          <div className={cn(s.dimensionWrap, "hero-fade-3 mt-8 lg:mt-10 text-gold")}>
            <p
              className={cn(
                s.mono,
                s.dimension,
                "text-[0.68rem] sm:text-[0.74rem] uppercase whitespace-nowrap",
              )}
            >
              Sen tasarla · birlikte geliştirelim
            </p>
          </div>

          <div className="mt-12 lg:mt-16 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-6 hero-fade-4">
              <p
                className={cn(
                  s.grotesk,
                  "font-medium text-[clamp(1.5rem,2.6vw,2.25rem)] leading-[1.15] tracking-[-0.01em] text-on-dark text-balance",
                )}
              >
                Tasarımını <span className="text-gold">malzemeyle</span>, fikrini{" "}
                <span className="text-gold">üretimle</span> buluştur.
              </p>
              <p className="mt-6 max-w-[520px] text-[1.05rem] leading-relaxed text-on-dark-muted">
                Yapıgranit’te doğal taşı yakından tanıman ve projelerini
                geliştirmen için sana alan açıyoruz.
              </p>

              <div className="mt-10 flex flex-col sm:flex-row gap-3">
                <a
                  href="#basvuru"
                  className={cn(
                    s.grotesk,
                    "group inline-flex items-center justify-center gap-3 h-14 px-8 bg-gold text-ink font-bold uppercase tracking-[0.06em] text-[0.9rem] transition-colors hover:bg-on-dark",
                  )}
                >
                  Atölye gezisine katıl
                  <ArrowRight className="size-5 transition-transform group-hover:translate-x-1" />
                </a>
                <a
                  href="#firsatlar"
                  className={cn(
                    s.mono,
                    "inline-flex items-center justify-center gap-2 h-14 px-6 border border-on-dark/30 text-on-dark uppercase text-[0.74rem] transition-colors hover:border-gold hover:text-gold",
                  )}
                >
                  Neler var?
                  <ArrowDownRight className="size-4" />
                </a>
              </div>
            </div>

            <figure className="lg:col-span-6 hero-fade-5">
              <div className="relative text-gold">
                <Crosshairs />
                <div className="relative aspect-[4/3] overflow-hidden border border-gold/40">
                  <Image
                    src="/images/services/hizmet-tasarim.webp"
                    alt="Çizim masasında mermer numuneleri ve mimari paftalar"
                    fill
                    priority
                    sizes="(min-width: 1024px) 45vw, 100vw"
                    className="object-cover"
                  />
                </div>
              </div>
              <figcaption
                className={cn(
                  s.mono,
                  "mt-4 flex justify-between text-[0.66rem] uppercase text-on-dark-soft",
                )}
              >
                <span>Fig. 01 — Malzeme + fikir</span>
                <span>Doğal taş</span>
              </figcaption>
            </figure>
          </div>
        </Container>
      </section>

      {/* ───────────── MANİFESTO ───────────── */}
      <section className="relative bg-gold text-ink overflow-hidden">
        <Container size="wide" className="py-16 lg:py-24">
          <Reveal className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <p
              className={cn(
                s.mono,
                "lg:col-span-3 text-[0.7rem] uppercase text-ink/70 leading-relaxed order-2 lg:order-1",
              )}
            >
              Not:
              <br />
              Fikir senden,
              <br />
              malzeme ve üretim bizden.
            </p>
            <h2 className="lg:col-span-9 order-1 lg:order-2 font-display italic font-normal tracking-[-0.02em] text-[clamp(2.8rem,8vw,7.5rem)] text-balance leading-[0.95]">
              Sen tasarla,{" "}
              <span className={cn(s.grotesk, "not-italic font-bold uppercase tracking-[-0.04em]")}>
                birlikte
              </span>{" "}
              geliştirelim.
            </h2>
          </Reveal>
        </Container>

        <div className="bg-ink text-gold py-4 overflow-hidden" aria-hidden>
          <div className={s.marquee}>
            {[0, 1].map((dup) => (
              <div key={dup} className="flex shrink-0">
                {tickerItems.map((t) => (
                  <span
                    key={`${dup}-${t}`}
                    className={cn(s.mono, "px-6 text-[0.8rem] uppercase whitespace-nowrap")}
                  >
                    {t} <span className="ml-6 text-on-dark-soft">✦</span>
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────── FIRSATLAR — PAFTA 02 ───────────── */}
      <section id="firsatlar" className={cn(s.gridPaper, "py-20 lg:py-28 scroll-mt-20")}>
        <Container size="wide">
          <SectionLabel sheet="Pafta 02">Bölüm A — Fırsatlar</SectionLabel>

          <Reveal className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-end mb-12 lg:mb-16">
            <h2
              className={cn(
                s.grotesk,
                "lg:col-span-8 uppercase font-bold tracking-[-0.03em] text-ink text-[clamp(2.2rem,5.4vw,4.8rem)] leading-[0.95]",
              )}
            >
              Fikrin kâğıtta
              <br />
              <span className={s.strokeInk}>kalmasın.</span>
            </h2>
            <p className="lg:col-span-4 text-[1rem] text-ink-muted leading-relaxed">
              Atölyemizin, makine parkurumuzun ve ekibimizin kapısını mimarlık
              ve tasarım öğrencilerine açıyoruz. İhtiyacına göre bir ya da
              birkaçını seç.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-ink/20 border border-ink/20">
            {opportunities.map((o, idx) => (
              <Reveal key={o.code} delay={idx * 0.05} className="h-full">
                <div className="group h-full bg-[#f8f5ef] p-7 lg:p-9 flex flex-col transition-colors duration-300 hover:bg-ink">
                  <div className="flex items-center justify-between">
                    <span
                      className={cn(
                        s.mono,
                        "text-[0.72rem] text-gold-deep transition-colors group-hover:text-gold",
                      )}
                    >
                      {o.code}
                    </span>
                    <o.icon
                      className="size-6 text-ink/60 transition-colors group-hover:text-gold"
                      strokeWidth={1.4}
                    />
                  </div>
                  <h3
                    className={cn(
                      s.grotesk,
                      "mt-10 lg:mt-14 text-[1.45rem] leading-[1.15] font-medium tracking-[-0.01em] text-ink transition-colors group-hover:text-on-dark text-balance",
                    )}
                  >
                    {o.title}
                  </h3>
                  <p className="mt-3 text-[0.92rem] leading-relaxed text-ink-muted transition-colors group-hover:text-on-dark-muted">
                    {o.body}
                  </p>
                  <span
                    className={cn(
                      s.mono,
                      "mt-auto pt-8 text-[0.66rem] uppercase text-ink-soft transition-colors group-hover:text-on-dark-soft",
                    )}
                  >
                    → {o.tag}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ───────────── SÜREÇ — PAFTA 03 ───────────── */}
      <section className={cn(s.gridDark, "text-on-dark py-20 lg:py-28")}>
        <Container size="wide">
          <SectionLabel sheet="Pafta 03" dark>
            Bölüm B — Süreç
          </SectionLabel>

          <Reveal className="mt-10 mb-14 lg:mb-20">
            <h2
              className={cn(
                s.grotesk,
                "uppercase font-bold tracking-[-0.03em] text-[clamp(2.2rem,5.4vw,4.8rem)] leading-[0.95]",
              )}
            >
              Üç adımda <span className={s.stroke}>atölyedesin.</span>
            </h2>
          </Reveal>

          <ol className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
            {steps.map((st, idx) => (
              <Reveal as="li" key={st.title} delay={0.08 * idx}>
                <div className="flex items-center gap-4 text-gold">
                  <span
                    className={cn(
                      s.grotesk,
                      s.stroke,
                      "font-bold leading-none text-[4.5rem] lg:text-[5.5rem]",
                    )}
                  >
                    0{idx + 1}
                  </span>
                  {idx < steps.length - 1 && (
                    <span className="hidden md:block flex-1 h-px bg-gold/50 relative">
                      <span className="absolute right-0 top-1/2 -translate-y-1/2 h-3 w-px bg-gold" />
                    </span>
                  )}
                </div>
                <h3 className={cn(s.grotesk, "mt-6 text-[1.5rem] font-medium")}>{st.title}</h3>
                <p className="mt-2 text-[0.95rem] leading-relaxed text-on-dark-muted max-w-[340px]">
                  {st.body}
                </p>
              </Reveal>
            ))}
          </ol>

          <figure className="mt-16 lg:mt-24">
            <div className="relative text-gold">
              <Crosshairs />
              <div className="relative aspect-[16/7] overflow-hidden border border-gold/40">
                <Image
                  src="/images/sections/kurumsal-fabrika.webp"
                  alt="Yapıgranit atölyesinde 5 eksen CNC ile mermer işleme"
                  fill
                  sizes="(min-width: 1440px) 1380px, 100vw"
                  className="object-cover"
                />
              </div>
            </div>
            <figcaption
              className={cn(
                s.mono,
                "mt-4 flex justify-between text-[0.66rem] uppercase text-on-dark-soft",
              )}
            >
              <span>Fig. 02 — Atölye / 5 eksen CNC</span>
              <span>Merkezefendi, Denizli</span>
            </figcaption>
          </figure>
        </Container>
      </section>

      {/* ───────────── BAŞVURU — PAFTA 04 ───────────── */}
      <section id="basvuru" className={cn(s.gridPaper, "py-20 lg:py-28 scroll-mt-20")}>
        <Container size="wide">
          <SectionLabel sheet="Pafta 04">Bölüm C — Başvuru</SectionLabel>

          <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14">
            <Reveal className="lg:col-span-5">
              <h2
                className={cn(
                  s.grotesk,
                  "uppercase font-bold tracking-[-0.035em] text-ink text-[clamp(2.6rem,5.6vw,5.2rem)] leading-[0.92]",
                )}
              >
                Atölye
                <br />
                gezisine
                <br />
                <span className="font-display italic font-normal normal-case tracking-[-0.02em] text-gold-deep">
                  katıl.
                </span>
              </h2>
              <p className="mt-8 text-[1rem] text-ink-muted leading-relaxed max-w-[440px]">
                Katılım koşulları ve destek kapsamı hakkında bilgi almak için
                standımıza uğra veya bizimle iletişime geç.
              </p>

              {/* Antet (title block) */}
              <dl className="mt-10 border border-ink/80 bg-[#f8f5ef] text-ink divide-y divide-ink/80">
                <div className={cn(s.mono, "px-4 py-2.5 text-[0.66rem] uppercase bg-ink text-gold")}>
                  Merkez &amp; Showroom
                </div>
                <div className="grid grid-cols-[104px_1fr] divide-x divide-ink/80">
                  <dt className={cn(s.mono, "px-4 py-3 text-[0.62rem] uppercase text-ink-soft flex items-center gap-1.5")}>
                    <MapPin className="size-3" /> Adres
                  </dt>
                  <dd className="px-4 py-3 text-[0.9rem]">
                    Zafer Mah. Zafer Cd. No:60/1
                    <br />
                    Merkezefendi / Denizli
                  </dd>
                </div>
                <div className="grid grid-cols-[104px_1fr] divide-x divide-ink/80">
                  <dt className={cn(s.mono, "px-4 py-3 text-[0.62rem] uppercase text-ink-soft flex items-center gap-1.5")}>
                    <Phone className="size-3" /> Tel
                  </dt>
                  <dd className="px-4 py-3 text-[0.9rem]">
                    <a href={`tel:${whatsapp}`} className="hover:text-gold-deep transition-colors">
                      {phones[0]}
                    </a>
                  </dd>
                </div>
                <div className="grid grid-cols-[104px_1fr] divide-x divide-ink/80">
                  <dt className={cn(s.mono, "px-4 py-3 text-[0.62rem] uppercase text-ink-soft flex items-center gap-1.5")}>
                    <Mail className="size-3" /> E-posta
                  </dt>
                  <dd className="px-4 py-3 text-[0.9rem]">
                    <a href={`mailto:${emails.info}`} className="hover:text-gold-deep transition-colors">
                      {emails.info}
                    </a>
                  </dd>
                </div>
              </dl>
            </Reveal>

            <Reveal delay={0.12} className="lg:col-span-7">
              <div className="relative text-ink">
                <Crosshairs />
                <div className="relative bg-surface border border-ink/80">
                  <div
                    className={cn(
                      s.mono,
                      "flex justify-between border-b border-ink/80 px-6 sm:px-8 py-3 text-[0.66rem] uppercase text-ink-soft",
                    )}
                  >
                    <span>Başvuru formu</span>
                    <span>~ 1 dk</span>
                  </div>
                  <div className="relative p-6 sm:p-8 lg:p-10">
                    <StudentProgramForm />
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>
    </div>
  );
}
