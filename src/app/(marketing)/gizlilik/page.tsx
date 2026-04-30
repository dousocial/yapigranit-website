import type { Metadata } from "next";
import { LegalPage } from "@/components/sections/legal-page";

export const metadata: Metadata = {
  title: "Gizlilik Politikası",
  description: "Yapı Granit gizlilik politikası ve çerez politikası.",
  alternates: { canonical: "/gizlilik" },
};

export default function GizlilikPage() {
  return (
    <LegalPage
      title="Gizlilik Politikası"
      intro="Yapı Granit olarak ziyaretçilerimizin gizliliğine değer veriyoruz. Bu politika, web sitemizi kullandığınızda hangi bilgilerin toplandığını ve nasıl işlendiğini açıklar."
      updatedAt="Nisan 2026"
      sections={[
        {
          heading: "Toplanan Bilgiler",
          paragraphs: [
            "Web sitemiz aracılığıyla, ad-soyad, e-posta, telefon, firma ve proje bilgileriniz gibi kişisel verileri yalnızca sizin tarafınızdan iletildiği sürece toplamaktayız.",
            "Otomatik olarak; tarayıcı bilgisi, ziyaret saatleri, IP adresi ve site içi etkileşim bilgileri analitik amaçlarla toplanmaktadır.",
          ],
        },
        {
          heading: "Çerez Kullanımı",
          paragraphs: [
            "Web sitemiz, kullanıcı deneyimini iyileştirmek ve site performansını ölçmek için zorunlu, performans ve analitik çerezler kullanır.",
            "Tarayıcı ayarlarınızdan çerezleri devre dışı bırakabilirsiniz; ancak bu, sitenin bazı işlevlerinin düzgün çalışmamasına yol açabilir.",
          ],
        },
        {
          heading: "Üçüncü Taraf Hizmetler",
          paragraphs: [
            "Site analitik altyapısı için Google Analytics, hosting altyapımız ve e-posta servis sağlayıcılarımız kullanılmaktadır. Bu hizmetler kendi gizlilik politikalarına tabidir.",
          ],
        },
        {
          heading: "Veri Saklama Süresi",
          paragraphs: [
            "Verileriniz, yalnızca işleme amacının gerektirdiği süre boyunca veya yasal saklama süreleri boyunca muhafaza edilir.",
          ],
        },
        {
          heading: "İletişim",
          paragraphs: [
            "Gizlilik politikamızla ilgili sorularınız için info@yapigranit.com.tr adresine yazabilirsiniz.",
          ],
        },
      ]}
    />
  );
}
