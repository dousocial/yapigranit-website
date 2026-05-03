import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";

import { LegalPage } from "@/components/sections/legal-page";

interface Props {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { locale } = await params;
  if (locale !== "de") return {};
  return {
    title: "Impressum | YAPIGRANİT",
    description:
      "Impressum & rechtliche Hinweise — Yapi Granit & Natursteine GmbH, Troisdorf.",
    alternates: { canonical: "/de/impressum" },
    robots: { index: true, follow: true },
  };
}

export default async function ImpressumPage({ params }: Props) {
  const { locale } = await params;
  // Yalnızca .de site içinde erişilebilir
  if (locale !== "de") notFound();
  setRequestLocale(locale);

  return (
    <LegalPage
      title="Impressum"
      intro="Angaben gemäß § 5 TMG — Yapi Granit & Natursteine GmbH"
      updatedAt="Mai 2026"
      sections={[
        {
          heading: "Firmenangaben",
          paragraphs: [
            "Yapi Granit & Natursteine GmbH",
            "Frankfurter Straße 60, 53840 Troisdorf, Deutschland",
            "Vertretungsberechtigter Geschäftsführer: Emin Kahraman",
          ],
        },
        {
          heading: "Kontakt",
          paragraphs: [
            "Telefon: +49 (0) 172 389 6084",
            "E-Mail: info@yapigranit.de",
          ],
        },
        {
          heading: "Registereintrag",
          paragraphs: [
            "Eintragung im Handelsregister: HRB 768194",
            "Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz: DE 322340635",
          ],
        },
        {
          heading: "Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV",
          paragraphs: [
            "Emin Kahraman",
            "Frankfurter Straße 60, 53840 Troisdorf, Deutschland",
          ],
        },
        {
          heading: "Haftung für Inhalte",
          paragraphs: [
            "Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.",
            "Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.",
          ],
        },
        {
          heading: "Haftung für Links",
          paragraphs: [
            "Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.",
            "Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.",
          ],
        },
        {
          heading: "Urheberrecht",
          paragraphs: [
            "Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.",
            "Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet. Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet.",
          ],
        },
        {
          heading: "Datenschutz",
          paragraphs: [
            "Personenbezogene Daten (z. B. Name, Anschrift oder E-Mail-Adressen) werden nach Möglichkeit stets auf freiwilliger Basis erhoben. Eine Weitergabe der Daten an Dritte erfolgt nicht ohne ausdrückliche Zustimmung des Nutzers.",
            "Diese Website benutzt Google Analytics, einen Webanalysedienst der Google Inc. Google Analytics verwendet sogenannte Cookies — Textdateien, die auf Ihrem Computer gespeichert werden und die eine Analyse der Benutzung der Website durch Sie ermöglichen.",
            "Sie können die Erfassung Ihrer Daten durch Google Analytics verhindern, indem Sie das Browser-Plugin von Google deaktivieren oder Cookies in Ihrem Browser nicht zulassen.",
          ],
        },
        {
          heading: "Werbe-Mails / Spam",
          paragraphs: [
            "Der Nutzung von im Rahmen der Impressumspflicht veröffentlichten Kontaktdaten zur Übersendung von nicht ausdrücklich angeforderter Werbung und Informationsmaterialien wird hiermit ausdrücklich widersprochen.",
            "Die Betreiber der Seiten behalten sich ausdrücklich rechtliche Schritte im Falle der unverlangten Zusendung von Werbeinformationen, etwa durch Spam-Mails, vor.",
          ],
        },
      ]}
    />
  );
}
