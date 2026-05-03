import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { FloatingActions } from "@/components/layout/floating-actions";
import { MobileStickyBar } from "@/components/layout/mobile-sticky-bar";
import { ExitIntentPopup } from "@/components/ui/exit-intent-popup";

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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
