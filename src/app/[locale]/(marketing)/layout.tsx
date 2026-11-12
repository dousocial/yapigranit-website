import { setRequestLocale } from "next-intl/server";

import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { FloatingActions } from "@/components/layout/floating-actions";
import { MobileStickyBar } from "@/components/layout/mobile-sticky-bar";
import { ExitIntentPopup } from "@/components/ui/exit-intent-popup";

export default async function MarketingLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  // Footer sunucu bileşeni çeviri kullanıyor; dil burada set edilmezse
  // next-intl dili istek başlıklarından okur ve tüm sayfalar dinamik olur.
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
      <FloatingActions />
      <MobileStickyBar />
      <ExitIntentPopup />
    </>
  );
}
