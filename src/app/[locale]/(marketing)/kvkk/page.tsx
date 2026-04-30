import type { Metadata } from "next";
import { LegalPage } from "@/components/sections/legal-page";

export const metadata: Metadata = {
  title: "KVKK Aydınlatma Metni",
  description:
    "Yapı Granit kişisel verilerin korunması (KVKK) aydınlatma metni.",
  alternates: { canonical: "/kvkk" },
};

export default function KvkkPage() {
  return (
    <LegalPage
      title="KVKK Aydınlatma Metni"
      intro="6698 sayılı Kişisel Verilerin Korunması Kanunu (KVKK) kapsamında, Yapı Granit olarak kişisel verilerinizi nasıl işlediğimizi şeffaflıkla açıklamak isteriz."
      updatedAt="Nisan 2026"
      sections={[
        {
          heading: "Veri Sorumlusunun Kimliği",
          paragraphs: [
            "Bu aydınlatma metni, KVKK'nın 10. maddesi ve Aydınlatma Yükümlülüğünün Yerine Getirilmesinde Uyulacak Usul ve Esaslar Hakkında Tebliğ kapsamında, veri sorumlusu sıfatıyla Yapı Granit tarafından hazırlanmıştır.",
          ],
        },
        {
          heading: "İşlenen Kişisel Veriler",
          paragraphs: [
            "Web sitemiz aracılığıyla iletmiş olduğunuz iletişim ve teklif formları kapsamında ad-soyad, telefon, e-posta, firma adı, lokasyon ve proje detaylarınız işlenmektedir.",
            "Otomatik teknolojiler aracılığıyla IP adresi, tarayıcı bilgisi ve oturum çerezleri gibi teknik verileriniz işlenebilir.",
          ],
        },
        {
          heading: "İşleme Amaçları",
          paragraphs: [
            "Verilerinizi; teklif taleplerinizin değerlendirilmesi, iletişim taleplerinize yanıt verilmesi, sözleşme süreçlerinin yürütülmesi ve hizmet kalitemizin geliştirilmesi amacıyla işlemekteyiz.",
          ],
        },
        {
          heading: "Verilerin Aktarılması",
          paragraphs: [
            "Kişisel verileriniz; iş ortaklarımız, tedarikçilerimiz, yetkili kamu kurum ve kuruluşları ile yasal yükümlülüklerimiz çerçevesinde paylaşılabilir.",
          ],
        },
        {
          heading: "Haklarınız",
          paragraphs: [
            "KVKK'nın 11. maddesi kapsamında; kişisel verilerinizin işlenip işlenmediğini öğrenme, düzeltilmesini, silinmesini veya yok edilmesini talep etme haklarına sahipsiniz.",
            "Taleplerinizi info@yapigranit.com.tr adresine iletebilirsiniz.",
          ],
        },
      ]}
    />
  );
}
