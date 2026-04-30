"use client";

import * as React from "react";
import { useTranslations } from "next-intl";
import { Mail, ArrowRight } from "lucide-react";
import { toast } from "sonner";
import { Container } from "@/components/ui/container";

export function NewsletterBand() {
  const t = useTranslations("Pages.blog");
  const [email, setEmail] = React.useState("");
  const [loading, setLoading] = React.useState(false);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      toast.error(t("newsletterInvalid"));
      return;
    }
    setLoading(true);
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (!res.ok) throw new Error();
      toast.success(t("newsletterSuccess"));
      setEmail("");
    } catch {
      toast.error(t("newsletterError"));
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="bg-surface-darker text-on-dark relative overflow-hidden">
      <div className="absolute inset-0 marble-bg opacity-50" aria-hidden />
      <Container size="wide" className="relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center py-12 lg:py-16">
          <div className="lg:col-span-5 flex items-center gap-5">
            <div className="size-14 grid place-items-center bg-on-dark/10 text-gold rounded-full shrink-0">
              <Mail className="size-6" strokeWidth={1.4} />
            </div>
            <div>
              <h3 className="font-display text-[1.6rem] text-on-dark leading-tight">
                {t("newsletterTitle")}
              </h3>
              <p className="mt-1 text-[0.88rem] text-on-dark-muted">
                {t("newsletterDesc")}
              </p>
            </div>
          </div>
          <form
            onSubmit={onSubmit}
            className="lg:col-span-7 flex flex-col sm:flex-row items-stretch gap-3"
          >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={t("newsletterPlaceholder")}
              className="flex-1 h-13 px-5 bg-on-dark/5 border border-line-dark text-on-dark placeholder:text-on-dark-soft focus:outline-none focus:border-gold transition-colors text-[0.92rem]"
            />
            <button
              type="submit"
              disabled={loading}
              className="h-13 px-7 bg-gold hover:bg-gold-soft text-ink font-medium uppercase tracking-wider text-[0.78rem] flex items-center justify-center gap-2 transition-colors disabled:opacity-60"
            >
              {loading ? t("newsletterSending") : t("newsletterButton")}
              {!loading && <ArrowRight className="size-4" />}
            </button>
          </form>
        </div>
      </Container>
    </section>
  );
}
