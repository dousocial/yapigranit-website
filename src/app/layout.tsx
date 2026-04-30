import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import { Toaster } from "sonner";
import { OrganizationJsonLd, LocalBusinessJsonLd } from "@/components/seo/structured-data";
import "./globals.css";

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

export const metadata: Metadata = {
  metadataBase: new URL("https://yapigranit.com.tr"),
  title: {
    default: "Yapı Granit | Doğal Taş, Mermer, Granit ve Porselen Çözümleri",
    template: "%s | Yapı Granit",
  },
  description:
    "Mimari projeleriniz için premium doğal taş, mermer, granit ve porselen yüzey çözümleri. Mimar, müteahhit ve yapı firmalarına özel B2B üretim, uygulama ve teslimat.",
  keywords: [
    "mermer",
    "granit",
    "porselen",
    "doğal taş",
    "mutfak tezgahı",
    "Yapı Granit",
    "mimari taş çözümleri",
    "B2B doğal taş",
  ],
  openGraph: {
    type: "website",
    locale: "tr_TR",
    siteName: "Yapı Granit",
    title: "Yapı Granit | Doğal Taş ve Yüzey Çözümleri",
    description:
      "Mimari projelerinize özel premium doğal taş, mermer, granit ve porselen çözümleri.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Yapı Granit | Doğal Taş ve Yüzey Çözümleri",
    description:
      "Mimari projelerinize özel premium doğal taş, mermer, granit ve porselen çözümleri.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="tr"
      className={`${display.variable} ${sans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
        <OrganizationJsonLd />
        <LocalBusinessJsonLd />
        <Toaster
          position="bottom-right"
          theme="light"
          richColors
          closeButton
        />
      </body>
    </html>
  );
}
