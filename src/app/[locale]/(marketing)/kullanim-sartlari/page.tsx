import type { Metadata } from "next";
import { LegalPage } from "@/components/sections/legal-page";
import { buildAlternates } from "@/lib/i18n-urls";
import type { Locale } from "@/i18n/routing";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: "Kullanım Şartları",
    description: "Yapı Granit web sitesi kullanım şartları.",
    alternates: buildAlternates(locale as Locale, "/kullanim-sartlari"),
  };
}

export default function KullanimPage() {
  return (
    <LegalPage
      title="Kullanım Şartları"
      intro="Web sitemizi ziyaret eden tüm kullanıcılar, aşağıdaki kullanım şartlarını kabul etmiş sayılır."
      updatedAt="Nisan 2026"
      sections={[
        {
          heading: "Genel Kullanım",
          paragraphs: [
            "Web sitemiz, Yapı Granit ürün ve hizmetleri hakkında bilgi vermek amacıyla yayınlanmaktadır. Sitedeki içerikler bilgilendirme amaçlıdır.",
          ],
        },
        {
          heading: "Fikri Mülkiyet Hakları",
          paragraphs: [
            "Web sitesindeki tüm görseller, metinler, logo ve markalar Yapı Granit'e aittir veya kullanım hakkı sahibidir. İzinsiz kopyalanması, çoğaltılması ve dağıtılması yasaktır.",
          ],
        },
        {
          heading: "Sorumluluk Reddi",
          paragraphs: [
            "Web sitemizdeki bilgilerin doğruluğunu sağlamak için her türlü özen gösterilmekle birlikte, herhangi bir hata veya eksiklikten doğacak doğrudan veya dolaylı zararlardan sorumluluk kabul edilmez.",
          ],
        },
        {
          heading: "Değişiklikler",
          paragraphs: [
            "Yapı Granit, kullanım şartlarını dilediği zaman güncelleme hakkını saklı tutar.",
          ],
        },
      ]}
    />
  );
}
