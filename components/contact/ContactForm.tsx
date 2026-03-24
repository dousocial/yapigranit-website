"use client";

import { useState } from "react";
import { useLanguage } from "@/lib/i18n/LanguageContext";

type ProjectType = "home" | "corporate";

type ContactFormProps = {
  defaultProjectType?: ProjectType;
};

export default function ContactForm({
  defaultProjectType = "home"
}: ContactFormProps) {
  const { t } = useLanguage();
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [projectType, setProjectType] =
    useState<ProjectType>(defaultProjectType);

  const resetFormState = () => {
    setProjectType(defaultProjectType);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setStatus("idle");

    const formData = new FormData(e.currentTarget);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: formData
      });

      if (!res.ok) {
        throw new Error("error");
      }

      setStatus("success");
      e.currentTarget.reset();
      resetFormState();
    } catch (error) {
      console.error(error);
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white/5 border border-white/10 p-8 backdrop-blur-md">
      <h3 className="text-2xl font-serif font-bold text-white mb-6">
        {t.contact.contactBadge}
      </h3>

      {status === "success" ? (
        <div className="bg-green-900/30 border border-green-500 text-green-200 p-6 text-center">
          <p className="font-bold text-lg mb-2">{t.contact.successTitle}</p>
          <p className="text-sm">{t.contact.successMsg}</p>
          <button
            onClick={() => {
              setStatus("idle");
              resetFormState();
            }}
            className="mt-4 text-xs underline hover:text-white"
          >
            {t.contact.newForm}
          </button>
        </div>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="space-y-6"
          encType="multipart/form-data"
        >
          <input type="hidden" name="projectType" value={projectType} />

          <div className="space-y-3">
            <label className="text-xs font-bold uppercase tracking-widest text-gold">
              {t.contact.projectType}
            </label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => setProjectType("home")}
                aria-pressed={projectType === "home"}
                className={`border px-4 py-3 text-xs uppercase tracking-widest transition-colors ${
                  projectType === "home"
                    ? "border-gold bg-gold text-stone"
                    : "border-white/20 text-gray-300 hover:border-gold hover:text-white"
                }`}
              >
                {t.contact.homeBtn}
              </button>
              <button
                type="button"
                onClick={() => setProjectType("corporate")}
                aria-pressed={projectType === "corporate"}
                className={`border px-4 py-3 text-xs uppercase tracking-widest transition-colors ${
                  projectType === "corporate"
                    ? "border-gold bg-gold text-stone"
                    : "border-white/20 text-gray-300 hover:border-gold hover:text-white"
                }`}
              >
                {t.contact.corporateBtn}
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label
                htmlFor="name"
                className="text-xs font-bold uppercase tracking-widest text-gold"
              >
                {t.contact.name}
              </label>
              <input
                required
                name="name"
                id="name"
                type="text"
                className="w-full bg-black/50 border border-white/20 p-3 text-white focus:border-gold focus:outline-none transition-colors"
                placeholder={t.contact.name}
              />
            </div>
            <div className="space-y-2">
              <label
                htmlFor="email"
                className="text-xs font-bold uppercase tracking-widest text-gold"
              >
                {t.contact.emailLbl}
              </label>
              <input
                required
                name="email"
                id="email"
                type="email"
                className="w-full bg-black/50 border border-white/20 p-3 text-white focus:border-gold focus:outline-none transition-colors"
                placeholder={t.contact.email_tr}
              />
            </div>
          </div>

          {projectType === "home" ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label
                  htmlFor="homeArea"
                  className="text-xs font-bold uppercase tracking-widest text-gold"
                >
                  {t.contact.homeAreaLbl}
                </label>
                <select
                  required
                  name="homeArea"
                  id="homeArea"
                  className="w-full bg-black/50 border border-white/20 p-3 text-white focus:border-gold focus:outline-none transition-colors appearance-none"
                >
                  {t.contact.areaOptions.map((opt) => (
                    <option key={opt} value={opt.toLowerCase()}>{opt}</option>
                  ))}
                </select>
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="estimatedSize"
                  className="text-xs font-bold uppercase tracking-widest text-gold"
                >
                  {t.contact.area}
                </label>
                <input
                  required
                  name="estimatedSize"
                  id="estimatedSize"
                  type="text"
                  className="w-full bg-black/50 border border-white/20 p-3 text-white focus:border-gold focus:outline-none transition-colors"
                  placeholder={t.contact.sizePlaceholder}
                />
              </div>
              <div className="space-y-2 md:col-span-2">
                <label
                  htmlFor="stoneColor"
                  className="text-xs font-bold uppercase tracking-widest text-gold"
                >
                  {t.contact.stoneColorLbl}
                </label>
                <input
                  name="stoneColor"
                  id="stoneColor"
                  type="text"
                  className="w-full bg-black/50 border border-white/20 p-3 text-white focus:border-gold focus:outline-none transition-colors"
                  placeholder={t.contact.stoneColorPlaceholder}
                />
              </div>
            </div>
          ) : (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label
                    htmlFor="companyName"
                    className="text-xs font-bold uppercase tracking-widest text-gold"
                  >
                    {t.contact.companyName}
                  </label>
                  <input
                    required
                    name="companyName"
                    id="companyName"
                    type="text"
                    className="w-full bg-black/50 border border-white/20 p-3 text-white focus:border-gold focus:outline-none transition-colors"
                    placeholder={t.contact.companyNamePlaceholder}
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="companyRole"
                    className="text-xs font-bold uppercase tracking-widest text-gold"
                  >
                    {t.contact.companyRole}
                  </label>
                  <input
                    required
                    name="companyRole"
                    id="companyRole"
                    type="text"
                    className="w-full bg-black/50 border border-white/20 p-3 text-white focus:border-gold focus:outline-none transition-colors"
                    placeholder={t.contact.companyRolePlaceholder}
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="companyPhone"
                    className="text-xs font-bold uppercase tracking-widest text-gold"
                  >
                    {t.contact.phone}
                  </label>
                  <input
                    required
                    name="companyPhone"
                    id="companyPhone"
                    type="tel"
                    className="w-full bg-black/50 border border-white/20 p-3 text-white focus:border-gold focus:outline-none transition-colors"
                    placeholder={t.contact.phonePlaceholder}
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="corporateScope"
                    className="text-xs font-bold uppercase tracking-widest text-gold"
                  >
                    {t.contact.corporateScopeLbl}
                  </label>
                  <select
                    name="corporateScope"
                    id="corporateScope"
                    className="w-full bg-black/50 border border-white/20 p-3 text-white focus:border-gold focus:outline-none transition-colors appearance-none"
                  >
                    {t.contact.corporateScopeOptions.map((opt) => (
                      <option key={opt} value={opt.toLowerCase()}>{opt}</option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="projectFile"
                  className="text-xs font-bold uppercase tracking-widest text-gold"
                >
                  {t.contact.projectFileLbl}
                </label>
                <input
                  name="projectFile"
                  id="projectFile"
                  type="file"
                  accept=".pdf,.dwg"
                  className="w-full text-sm text-gray-300 file:mr-4 file:rounded-full file:border-0 file:bg-white/10 file:px-4 file:py-2 file:text-xs file:uppercase file:tracking-[0.2em] file:text-white hover:file:bg-gold hover:file:text-stone"
                />
                <p className="text-[11px] text-gray-500">
                  {t.contact.projectFileHint}
                </p>
              </div>
            </div>
          )}

          <div className="space-y-2">
            <label
              htmlFor="subject"
              className="text-xs font-bold uppercase tracking-widest text-gold"
            >
              {t.contact.subjectLbl}
            </label>
            <select
              name="subject"
              id="subject"
              className="w-full bg-black/50 border border-white/20 p-3 text-white focus:border-gold focus:outline-none transition-colors appearance-none"
            >
              {t.contact.subjectOptions.map((opt, i) => (
                <option key={i} value={i === 0 ? "teklif" : i === 1 ? "bilgi" : i === 2 ? "randevu" : "diger"}>{opt}</option>
              ))}
            </select>
          </div>

          <div className="space-y-2">
            <label
              htmlFor="message"
              className="text-xs font-bold uppercase tracking-widest text-gold"
            >
              {t.contact.messageLbl}
            </label>
            <textarea
              required
              name="message"
              id="message"
              rows={4}
              className="w-full bg-black/50 border border-white/20 p-3 text-white focus:border-gold focus:outline-none transition-colors"
              placeholder={t.contact.messagePlaceholder}
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-gold text-stone font-bold py-4 uppercase tracking-widest hover:bg-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? t.contact.loading : t.contact.submitBtn}
          </button>

          {status === "error" && (
            <p className="text-red-400 text-sm text-center">
              {t.contact.errorMsg}
            </p>
          )}
        </form>
      )}
    </div>
  );
}
