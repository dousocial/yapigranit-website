"use client";

import Image from "next/image";
import { useState } from "react";
import { useLanguage } from "@/lib/i18n/LanguageContext";

type ProjectType = "home" | "corporate";

type CorporateContactSectionProps = {
  whatsappHref: string;
};

export default function CorporateContactSection({
  whatsappHref
}: CorporateContactSectionProps) {
  const { t } = useLanguage();
  const [projectType, setProjectType] = useState<ProjectType>("corporate");
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    setStatus("idle");

    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const area = String(formData.get("area") || "").trim();
    const size = String(formData.get("size") || "").trim();
    const color = String(formData.get("color") || "").trim();
    const note = String(formData.get("message") || "").trim();

    const details = [
      `Project Type: ${projectType}`,
      area ? `Area: ${area}` : null,
      size ? `Size: ${size}` : null,
      color ? `Stone: ${color}` : null,
      note ? `Message: ${note}` : null
    ]
      .filter(Boolean)
      .join("\n");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, subject: "teklif", message: details })
      });

      if (!res.ok) throw new Error("error");

      setStatus("success");
      event.currentTarget.reset();
      setProjectType("corporate");
    } catch (error) {
      console.error(error);
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-24 bg-black relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top,_rgba(212,175,55,0.12),_transparent_45%)]" />
        <div className="absolute -top-24 right-12 h-64 w-64 rounded-full bg-gold/10 blur-[120px]" />
        <div className="absolute -bottom-24 left-10 h-64 w-64 rounded-full bg-gold/10 blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 relative">
        <div className="w-full max-w-5xl mx-auto bg-white/5 rounded-3xl shadow-2xl overflow-hidden border border-white/10">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="bg-black/80 text-white p-10 lg:p-12 flex flex-col justify-between relative overflow-hidden">
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-[-30%] right-[-20%] w-[360px] h-[360px] bg-gold/20 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-25%] left-[-20%] w-[320px] h-[320px] bg-white/10 rounded-full blur-[140px]" />
              </div>

              <div className="relative z-10 space-y-8">
                <div>
                  <span className="text-gold font-bold tracking-[0.3em] text-xs uppercase mb-3 block">
                    {t.contact.contactBadge}
                  </span>
                  <h2 className="text-3xl lg:text-4xl font-serif font-bold leading-tight">
                    {t.contact.contactTitle1} <br />
                    <span className="text-gold">{t.contact.contactTitle2}</span>
                  </h2>
                  <div className="w-12 h-[2px] bg-gold/80 mt-6 mb-6" />
                  <p className="text-gray-400 leading-relaxed text-sm lg:text-base">
                    {t.contact.contactDesc}
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-4 text-sm">
                    <div className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gold">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path d="M22 16.9v2a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.1-8.6A2 2 0 0 1 4.1 2h2a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.7a2 2 0 0 1-.5 2L7 9a16 16 0 0 0 6 6l.6-.2a2 2 0 0 1 2 .5 12.5 12.5 0 0 0 2.7.6 2 2 0 0 1 1.7 2z" strokeWidth="1.5" />
                      </svg>
                    </div>
                    <a href={t.footer.phoneHref} className="text-gray-300 transition-colors hover:text-white">
                      {t.contact.phone_tr}
                    </a>
                  </div>
                  <div className="flex items-center gap-4 text-sm">
                    <div className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gold">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z" strokeWidth="1.5" />
                        <path d="m22 6-10 7L2 6" strokeWidth="1.5" />
                      </svg>
                    </div>
                    <a href={t.footer.emailHref} className="text-gray-300 transition-colors hover:text-white">
                      {t.contact.email_tr}
                    </a>
                  </div>
                  <div className="flex items-center gap-4 text-sm">
                    <div className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gold">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path d="M12 22s7-4.4 7-10a7 7 0 0 0-14 0c0 5.6 7 10 7 10z" strokeWidth="1.5" />
                        <circle cx="12" cy="12" r="2.5" strokeWidth="1.5" />
                      </svg>
                    </div>
                    <a
                      href="https://maps.app.goo.gl/N32BfXN6XaTfoe5y9"
                      target="_blank"
                      rel="noreferrer"
                      className="text-gray-300 transition-colors hover:text-white"
                    >
                      {t.contact.showroomAddress}
                    </a>
                  </div>
                </div>

                <div className="relative h-40 rounded-2xl overflow-hidden border border-white/10">
                  <Image
                    src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=1200&auto=format&fit=crop"
                    alt="Yapıgranit production facility"
                    fill
                    className="object-cover grayscale contrast-125"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-black/80 via-black/30 to-transparent" />
                  <div className="absolute bottom-3 left-3 text-[10px] uppercase tracking-[0.3em] text-gold/80">
                    {t.contact.productionLabel}
                  </div>
                </div>
              </div>

              <div className="relative z-10 mt-10 pt-8 border-t border-white/10">
                <p className="text-xs text-gray-400 mb-4">
                  {t.contact.quickContact}
                </p>
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-3 px-4 bg-gold text-stone rounded-lg text-sm font-semibold flex items-center justify-between group transition-colors hover:bg-white"
                >
                  <div className="flex items-center gap-3">
                    <span className="h-9 w-9 rounded-full bg-black/20 flex items-center justify-center">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path d="M21 15a4 4 0 0 1-4 4H7l-4 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4z" strokeWidth="1.5" />
                        <path d="M8 9h8M8 13h5" strokeWidth="1.5" />
                      </svg>
                    </span>
                    <span>{t.contact.whatsappTitle}</span>
                  </div>
                  <span className="text-lg group-hover:translate-x-1 transition-transform">→</span>
                </a>
              </div>
            </div>

            <div className="p-10 lg:p-12 bg-black/90 flex flex-col justify-center">
              {status === "success" ? (
                <div className="bg-green-900/30 border border-green-500/40 text-green-100 p-6 text-center rounded-2xl">
                  <p className="font-bold text-lg mb-2">{t.contact.successTitle}</p>
                  <p className="text-sm">{t.contact.successMsg}</p>
                  <button
                    onClick={() => setStatus("idle")}
                    className="mt-4 text-xs uppercase tracking-[0.3em] text-gold hover:text-white transition-colors"
                  >
                    {t.contact.newForm}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="flex p-1 bg-white/5 rounded-lg border border-white/10">
                    <button
                      type="button"
                      onClick={() => setProjectType("home")}
                      className={`flex-1 flex items-center justify-center gap-2 py-2.5 text-xs font-semibold uppercase tracking-[0.2em] rounded-md transition-all ${
                        projectType === "home" ? "bg-gold text-stone" : "text-gray-400 hover:text-white"
                      }`}
                    >
                      <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path d="M3 11l9-7 9 7v9a2 2 0 0 1-2 2h-5v-7H10v7H5a2 2 0 0 1-2-2z" strokeWidth="1.5" />
                      </svg>
                      {t.contact.homeProjectBtn}
                    </button>
                    <button
                      type="button"
                      onClick={() => setProjectType("corporate")}
                      className={`flex-1 flex items-center justify-center gap-2 py-2.5 text-xs font-semibold uppercase tracking-[0.2em] rounded-md transition-all ${
                        projectType === "corporate" ? "bg-gold text-stone" : "text-gray-400 hover:text-white"
                      }`}
                    >
                      <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path d="M3 21h18M6 21V7a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v14M9 21V9h6v12" strokeWidth="1.5" />
                      </svg>
                      {t.contact.corporateProjectBtn}
                    </button>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-8">
                    <div className="group relative z-0">
                      <input
                        required type="text" id="name" name="name"
                        className="block w-full py-2.5 text-sm text-white bg-transparent border-b border-white/20 appearance-none focus:outline-none focus:ring-0 focus:border-gold peer"
                        placeholder=" "
                      />
                      <label htmlFor="name" className="pointer-events-none absolute text-xs uppercase tracking-[0.25em] text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 origin-[0] peer-focus:left-0 peer-focus:text-gold peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                        {t.contact.name}
                      </label>
                    </div>

                    <div className="group relative z-0">
                      <input
                        required type="email" id="email" name="email"
                        className="block w-full py-2.5 text-sm text-white bg-transparent border-b border-white/20 appearance-none focus:outline-none focus:ring-0 focus:border-gold peer"
                        placeholder=" "
                      />
                      <label htmlFor="email" className="pointer-events-none absolute text-xs uppercase tracking-[0.25em] text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 origin-[0] peer-focus:left-0 peer-focus:text-gold peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                        {t.contact.emailLbl}
                      </label>
                    </div>

                    <div className="group relative z-0">
                      <select
                        id="area" name="area" defaultValue=""
                        className="block w-full py-2.5 text-sm text-white bg-transparent border-b border-white/20 appearance-none focus:outline-none focus:ring-0 focus:border-gold peer"
                      >
                        <option value="" disabled hidden />
                        {t.contact.areaOptions.map((opt) => (
                          <option key={opt}>{opt}</option>
                        ))}
                      </select>
                      <label htmlFor="area" className="pointer-events-none absolute text-xs uppercase tracking-[0.25em] text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 origin-[0] peer-focus:left-0 peer-focus:text-gold peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                        {t.contact.homeAreaLbl}
                      </label>
                    </div>

                    <div className="group relative z-0">
                      <input
                        type="text" id="size" name="size"
                        className="block w-full py-2.5 text-sm text-white bg-transparent border-b border-white/20 appearance-none focus:outline-none focus:ring-0 focus:border-gold peer"
                        placeholder=" "
                      />
                      <label htmlFor="size" className="pointer-events-none absolute text-xs uppercase tracking-[0.25em] text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 origin-[0] peer-focus:left-0 peer-focus:text-gold peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                        {t.contact.area}
                      </label>
                    </div>
                  </div>

                  <div className="group relative z-0">
                    <input
                      type="text" id="color" name="color"
                      className="block w-full py-2.5 text-sm text-white bg-transparent border-b border-white/20 appearance-none focus:outline-none focus:ring-0 focus:border-gold peer"
                      placeholder=" "
                    />
                    <label htmlFor="color" className="pointer-events-none absolute text-xs uppercase tracking-[0.25em] text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 origin-[0] peer-focus:left-0 peer-focus:text-gold peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                      {t.contact.stoneColorLbl}
                    </label>
                  </div>

                  <div className="group relative z-0">
                    <textarea
                      id="message" name="message" rows={3} required
                      className="block w-full py-2.5 text-sm text-white bg-transparent border-b border-white/20 appearance-none focus:outline-none focus:ring-0 focus:border-gold peer resize-none"
                      placeholder=" "
                    />
                    <label htmlFor="message" className="pointer-events-none absolute text-xs uppercase tracking-[0.25em] text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 origin-[0] peer-focus:left-0 peer-focus:text-gold peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                      {t.contact.messageLbl}
                    </label>
                  </div>

                  <div className="pt-4">
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full py-3 bg-gold text-stone rounded-lg text-sm font-semibold hover:bg-white transition-all flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <span>{loading ? t.contact.loading : t.contact.submitBtn}</span>
                      <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path d="M5 12h14M13 5l6 7-6 7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </button>
                  </div>

                  {status === "error" && (
                    <p className="text-red-400 text-sm text-center">
                      {t.contact.errorMsg}
                    </p>
                  )}
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
