import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Cormorant_Garamond, Inter } from "next/font/google";
import { Toaster } from "sonner";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { setRequestLocale, getTranslations } from "next-intl/server";

import { OrganizationJsonLd, LocalBusinessJsonLd } from "@/components/seo/structured-data";
import { Analytics } from "@/components/seo/analytics";
import { routing, localeOgFormats, type Locale } from "@/i18n/routing";

const display = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

const sans = Inter({
  variable: "--font-sans",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

interface Props {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Site" });
  const ogLocale = localeOgFormats[locale as Locale] ?? "tr_TR";

  return {
    metadataBase: new URL("https://yapigranit.com"),
    title: {
      default: `YAPIGRANİT | ${t("tagline")}`,
      template: `%s | YAPIGRANİT`,
    },
    description: t("description"),
    keywords: [
      // Türkçe — ana hizmetler
      "yapı granit",
      "yapıgranit",
      "doğal taş",
      "mermer",
      "granit",
      "porselen",
      // Cephe & uygulama
      "mekanik cephe kaplama",
      "doğal taş cephe kaplama",
      "mermer cephe kaplama",
      "granit cephe uygulama",
      "taş cephe sistemleri",
      "dış cephe taş uygulama",
      // CNC & özel uygulama
      "cnc taş kaplama",
      "cnc işlemli duvar kaplama",
      // Sektör & yapı tipleri
      "külliye cephe kaplama",
      "cami cephe kaplama",
      "avm zemin kaplama",
      "otel mermer uygulama",
      "konut mermer uygulama",
      // Lokasyon
      "denizli mermer",
      "denizli doğal taş",
      "denizli cephe kaplama",
      // İngilizce
      "marble",
      "granite",
      "porcelain",
      "natural stone",
      "mechanical façade cladding",
      "cnc stone cladding",
      "kitchen countertop",
      "architectural stone",
      "B2B natural stone",
      "YAPIGRANİT",
    ],
    openGraph: {
      type: "website",
      locale: ogLocale,
      siteName: "YAPIGRANİT",
      title: `YAPIGRANİT | ${t("tagline")}`,
      description: t("description"),
    },
    twitter: {
      card: "summary_large_image",
      title: `YAPIGRANİT | ${t("tagline")}`,
      description: t("description"),
    },
    robots: { index: true, follow: true },
    alternates: {
      languages: {
        tr: "/",
        en: "/en",
        de: "/de",
        "x-default": "/",
      },
    },
  };
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);

  return (
    <html
      lang={locale}
      className={`${display.variable} ${sans.variable} h-full antialiased`}
    >
      <head>
        <link rel="preconnect" href="https://images.unsplash.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://connect.facebook.net" />
        <meta name="theme-color" content="#0e0d0c" />
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <NextIntlClientProvider>{children}</NextIntlClientProvider>
        <Analytics />
        <OrganizationJsonLd />
        <LocalBusinessJsonLd />
        <Toaster position="bottom-right" theme="light" richColors closeButton />
      </body>
    </html>
  );
}
