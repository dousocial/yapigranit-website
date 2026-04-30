import { Cormorant_Garamond, Inter } from "next/font/google";
import { Toaster } from "sonner";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";

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

// Admin paneli sadece TR'de — i18n provider sabit TR locale ile sağlanıyor.
// Bu, marketing tarafındaki ortak komponentler (Logo, Button vb.) için
// gerekli context'i sağlar.
export const dynamic = "force-dynamic";

export default async function AdminRootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  setRequestLocale("tr");
  const messages = await getMessages({ locale: "tr" });

  return (
    <html
      lang="tr"
      className={`${display.variable} ${sans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <NextIntlClientProvider locale="tr" messages={messages}>
          {children}
        </NextIntlClientProvider>
        <Toaster position="bottom-right" theme="light" richColors closeButton />
      </body>
    </html>
  );
}
