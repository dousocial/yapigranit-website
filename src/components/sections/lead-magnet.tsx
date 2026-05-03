"use client";

import * as React from "react";
import { useLocale } from "next-intl";
import { Download, FileText, CheckCircle2 } from "lucide-react";

import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Reveal } from "@/components/ui/reveal";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { trackLead, trackDownload } from "@/lib/tracking";

interface LeadMagnetProps {
  /** İndirilecek dosya adı — /public/downloads/{asset} altında olmalı */
  asset?: string;
  /** Bölüm arka plan varyantı */
  variant?: "light" | "dark";
}

const i18n = {
  tr: {
    eyebrow: "Ücretsiz İçerik",
    title: "2026 Mimaride Doğal Taş Trendleri",
    description:
      "Mimar ve müteahhitler için hazırladığımız 32 sayfalık rehberi indirin: Neo Deco, hiper-gerçekçi porselen, sürdürülebilir kaplama trendleri ve uygulama detayları.",
    bullets: [
      "32 sayfa, ~6 MB PDF",
      "2026 renk paleti & malzeme önerileri",
      "Mutfak, banyo, cephe için karşılaştırma tabloları",
      "Bookmatch, waterfall, CNC örnek projeler",
    ],
    nameLabel: "Adınız",
    namePlaceholder: "İsim soyisim",
    emailLabel: "E-posta",
    emailPlaceholder: "ornek@firma.com",
    submit: "Kataloğu İndir",
    submitting: "Hazırlanıyor...",
    success: "Hazır! İndirme başlıyor.",
    privacy:
      "E-postanız 3. taraflarla paylaşılmaz. İstediğiniz zaman aboneliğinizi sonlandırabilirsiniz.",
    error: "Bir sorun oluştu, lütfen tekrar deneyin.",
  },
  en: {
    eyebrow: "Free Resource",
    title: "2026 Natural Stone Trends in Architecture",
    description:
      "Download our 32-page guide for architects and contractors: Neo Deco, hyper-realistic porcelain, sustainable cladding trends, and application details.",
    bullets: [
      "32 pages, ~6 MB PDF",
      "2026 color palette & material recommendations",
      "Comparison tables for kitchen, bathroom, façade",
      "Bookmatch, waterfall, CNC sample projects",
    ],
    nameLabel: "Your Name",
    namePlaceholder: "Full name",
    emailLabel: "Email",
    emailPlaceholder: "you@company.com",
    submit: "Download Guide",
    submitting: "Preparing...",
    success: "Ready! Download starting.",
    privacy:
      "Your email is not shared with third parties. You can unsubscribe anytime.",
    error: "Something went wrong, please try again.",
  },
  de: {
    eyebrow: "Kostenloser Inhalt",
    title: "Naturstein-Trends 2026 in der Architektur",
    description:
      "Laden Sie unseren 32-seitigen Leitfaden herunter: Neo Deco, hyperrealistisches Porzellan, nachhaltige Verkleidungstrends und Anwendungsdetails.",
    bullets: [
      "32 Seiten, ~6 MB PDF",
      "2026 Farbpalette & Materialempfehlungen",
      "Vergleichstabellen für Küche, Bad, Fassade",
      "Bookmatch, Waterfall, CNC Beispielprojekte",
    ],
    nameLabel: "Ihr Name",
    namePlaceholder: "Vor- und Nachname",
    emailLabel: "E-Mail",
    emailPlaceholder: "sie@firma.de",
    submit: "Leitfaden herunterladen",
    submitting: "Wird vorbereitet...",
    success: "Bereit! Download startet.",
    privacy:
      "Ihre E-Mail wird nicht an Dritte weitergegeben. Jederzeit abbestellbar.",
    error: "Es ist ein Fehler aufgetreten, bitte erneut versuchen.",
  },
};

export function LeadMagnet({
  asset = "yapigranit-2026-tas-trendleri.pdf",
  variant = "dark",
}: LeadMagnetProps) {
  const locale = useLocale();
  const tx = i18n[locale as "tr" | "en" | "de"] ?? i18n.tr;

  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [status, setStatus] = React.useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (status === "loading") return;
    setStatus("loading");
    try {
      const res = await fetch("/api/lead-magnet", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, asset }),
      });
      const data = await res.json();
      if (!res.ok || !data.ok) throw new Error("Submit failed");

      trackLead({ formName: "lead-magnet", value: 25 });
      trackDownload({ fileName: asset, fileType: "pdf" });

      setStatus("success");
      // Tarayıcı 800ms sonra indirmeyi başlatsın (success state'i gösterelim)
      setTimeout(() => {
        const a = document.createElement("a");
        a.href = data.downloadUrl;
        a.download = asset;
        document.body.appendChild(a);
        a.click();
        a.remove();
      }, 800);
    } catch {
      setStatus("error");
    }
  }

  const onDark = variant === "dark";

  return (
    <section
      className={
        onDark
          ? "bg-surface-darker text-on-dark relative overflow-hidden py-20 lg:py-24"
          : "bg-surface-muted text-ink py-20 lg:py-24"
      }
    >
      {onDark && (
        <div className="absolute inset-0 marble-bg opacity-30" aria-hidden />
      )}
      <Container size="wide" className="relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <Reveal className="lg:col-span-7">
            <Eyebrow variant={onDark ? "light" : undefined}>
              {tx.eyebrow}
            </Eyebrow>
            <h2
              className={`display-lg mt-4 text-balance ${
                onDark ? "text-on-dark" : "text-ink"
              }`}
            >
              {tx.title}
            </h2>
            <p
              className={`mt-6 text-[0.95rem] leading-relaxed max-w-[600px] ${
                onDark ? "text-on-dark-muted" : "text-ink-muted"
              }`}
            >
              {tx.description}
            </p>
            <ul className="mt-7 space-y-2.5">
              {tx.bullets.map((b) => (
                <li
                  key={b}
                  className={`flex items-start gap-2.5 text-[0.92rem] ${
                    onDark ? "text-on-dark" : "text-ink"
                  }`}
                >
                  <CheckCircle2
                    className="mt-0.5 size-4 text-gold flex-shrink-0"
                    strokeWidth={1.6}
                  />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-5">
            <div
              className={
                onDark
                  ? "bg-on-dark/[0.04] border border-on-dark/15 p-7 lg:p-8"
                  : "bg-surface border border-line p-7 lg:p-8 shadow-sm"
              }
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="size-10 grid place-items-center bg-gold text-ink rounded-full">
                  <FileText className="size-5" strokeWidth={1.6} />
                </div>
                <span
                  className={`text-[0.78rem] uppercase tracking-[0.2em] font-medium ${
                    onDark ? "text-on-dark-muted" : "text-ink-soft"
                  }`}
                >
                  PDF · 6 MB
                </span>
              </div>

              {status === "success" ? (
                <div className="text-center py-6">
                  <CheckCircle2
                    className="mx-auto size-12 text-gold mb-4"
                    strokeWidth={1.4}
                  />
                  <p
                    className={`font-display text-[1.2rem] ${
                      onDark ? "text-on-dark" : "text-ink"
                    }`}
                  >
                    {tx.success}
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                  <div>
                    <label
                      className={`block text-[0.8rem] uppercase tracking-[0.12em] mb-2 ${
                        onDark ? "text-on-dark-muted" : "text-ink-soft"
                      }`}
                    >
                      {tx.nameLabel}
                    </label>
                    <Input
                      required
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder={tx.namePlaceholder}
                      className={
                        onDark ? "bg-on-dark/5 border-on-dark/20 text-on-dark" : ""
                      }
                    />
                  </div>
                  <div>
                    <label
                      className={`block text-[0.8rem] uppercase tracking-[0.12em] mb-2 ${
                        onDark ? "text-on-dark-muted" : "text-ink-soft"
                      }`}
                    >
                      {tx.emailLabel}
                    </label>
                    <Input
                      required
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder={tx.emailPlaceholder}
                      className={
                        onDark ? "bg-on-dark/5 border-on-dark/20 text-on-dark" : ""
                      }
                    />
                  </div>
                  <Button
                    type="submit"
                    disabled={status === "loading"}
                    size="lg"
                    className="w-full"
                  >
                    {status === "loading" ? tx.submitting : tx.submit}
                    <Download className="size-4" />
                  </Button>
                  {status === "error" && (
                    <p className="text-[0.82rem] text-red-400 mt-2">
                      {tx.error}
                    </p>
                  )}
                  <p
                    className={`text-[0.72rem] leading-relaxed mt-3 ${
                      onDark ? "text-on-dark-soft" : "text-ink-soft"
                    }`}
                  >
                    {tx.privacy}
                  </p>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
