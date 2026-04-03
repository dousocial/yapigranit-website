"use client";

import { useState } from "react";

import { useLanguage } from "@/lib/i18n/LanguageContext";

type FormState = {
  projectType: string;
  area: string;
  stoneColor: string;
  name: string;
  phone: string;
};

function IconArrowRight() {
  return (
    <svg
      className="h-4 w-4"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="m13 5 6 7-6 7" />
    </svg>
  );
}

function IconSend() {
  return (
    <svg
      className="h-4 w-4"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m22 2-7 20-4-9-9-4 20-7Z" />
      <path d="m22 2-11 11" />
    </svg>
  );
}

function IconCheck() {
  return (
    <svg
      className="h-10 w-10"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

function IconFile() {
  return (
    <svg
      className="h-5 w-5"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z" />
      <path d="M14 2v6h6" />
      <path d="M8 13h8" />
      <path d="M8 17h5" />
    </svg>
  );
}

function IconRuler() {
  return (
    <svg
      className="h-4 w-4"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 7 17 21l4-4L7 3 3 7Z" />
      <path d="M7 7l2 2" />
      <path d="M11 11l2 2" />
      <path d="M15 15l2 2" />
    </svg>
  );
}

function IconPalette() {
  return (
    <svg
      className="h-4 w-4"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 3a9 9 0 0 0 0 18c1.1 0 2-.9 2-2 0-.5-.2-1-.6-1.4-.6-.6-.9-1.4-.9-2.2 0-1.7 1.4-3.1 3.1-3.1h1.4a4.5 4.5 0 0 0 0-9H12Z" />
      <circle cx="8" cy="9" r="1" />
      <circle cx="12" cy="7" r="1" />
      <circle cx="16" cy="9" r="1" />
      <circle cx="8" cy="13" r="1" />
    </svg>
  );
}

function IconBuilding() {
  return (
    <svg
      className="h-4 w-4"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 22V7l9-4 9 4v15" />
      <path d="M9 22V12h6v10" />
      <path d="M9 8h.01" />
      <path d="M15 8h.01" />
      <path d="M9 16h.01" />
      <path d="M15 16h.01" />
    </svg>
  );
}

function IconMessage() {
  return (
    <svg
      className="h-6 w-6"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 15a4 4 0 0 1-4 4H7l-4 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4Z" />
    </svg>
  );
}

function IconPhone() {
  return (
    <svg
      className="h-4 w-4"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 16.9v3a2 2 0 0 1-2.2 2c-2.3-.2-4.5-.8-6.5-1.9a19.7 19.7 0 0 1-6-6 19 19 0 0 1-1.9-6.5A2 2 0 0 1 6.1 3h3a2 2 0 0 1 2 1.7c.1.8.3 1.6.6 2.4a2 2 0 0 1-.5 2.1L10 10a16 16 0 0 0 6 6l.8-.8a2 2 0 0 1 2.1-.5c.8.3 1.6.5 2.4.6a2 2 0 0 1 1.7 2.1Z" />
    </svg>
  );
}

function IconMapPin() {
  return (
    <svg
      className="h-4 w-4"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 1 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

export default function CollectionContactSection() {
  const { t } = useLanguage();
  const stoneOptions = t.contact.stoneOptions;
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState<FormState>({
    projectType: "",
    area: "",
    stoneColor: "",
    name: "",
    phone: ""
  });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitted(true);
  };

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section className="py-24 bg-stone text-white relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="grid-3d grid-3d--base" />
        <div className="grid-3d grid-3d--glow" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/35 to-black/85" />
        <div className="absolute -top-24 right-10 h-72 w-72 rounded-full bg-gold/10 blur-[140px]" />
        <div className="absolute -bottom-28 left-6 h-64 w-64 rounded-full bg-white/5 blur-[160px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-white">
            {t.contact.title} <span className="text-gold">{t.contact.titleHighlight}</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto mt-4 text-base md:text-lg">
            {t.contact.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          <div className="lg:col-span-8 bg-black/55 border border-white/10 p-8 md:p-10 rounded-2xl backdrop-blur-sm relative overflow-hidden">
            {isSubmitted ? (
              <div className="absolute inset-0 z-20 bg-black flex flex-col items-center justify-center text-center p-8">
                <div className="w-20 h-20 bg-gold/15 rounded-full flex items-center justify-center mb-6 text-gold">
                  <IconCheck />
                </div>
                <h3 className="text-2xl font-serif text-white mb-2">
                  {t.contact.successTitle}
                </h3>
                <p className="text-gray-400 max-w-md">
                  {t.contact.successMsg.split(t.contact.successWithin)[0]}
                  <strong className="text-white">{t.contact.successWithin}</strong>
                  {t.contact.successMsg.split(t.contact.successWithin)[1]}
                </p>
                <button
                  type="button"
                  onClick={() => setIsSubmitted(false)}
                  className="mt-8 text-gold hover:text-white text-xs font-bold uppercase tracking-[0.3em] transition-colors"
                >
                  {t.contact.newForm}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-serif flex items-center gap-3 text-white">
                    <span className="text-gold">
                      <IconFile />
                    </span>
                    {t.contact.formTitle}
                  </h3>
                  <span className="text-[10px] text-gold uppercase tracking-[0.3em] font-bold bg-gold/10 px-3 py-1 rounded-full border border-gold/30">
                    {t.contact.freeConsult}
                  </span>
                </div>

                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <label className="space-y-2">
                      <span className="text-xs text-gray-500 font-bold uppercase tracking-[0.3em] flex items-center gap-2">
                        <IconBuilding /> {t.contact.projectType}
                      </span>
                      <select
                        name="projectType"
                        required
                        value={formData.projectType}
                        onChange={handleInputChange}
                        className="w-full bg-black border border-white/10 text-white px-4 py-3 rounded-md focus:outline-none focus:border-gold transition-colors"
                      >
                        <option value="" disabled>
                          {t.contact.selectPlaceholder}
                        </option>
                        {t.contact.projectOptions.map((opt) => (
                          <option key={opt.value} value={opt.value}>{opt.label}</option>
                        ))}
                      </select>
                    </label>

                    <label className="space-y-2">
                      <span className="text-xs text-gray-500 font-bold uppercase tracking-[0.3em] flex items-center gap-2">
                        <IconRuler /> {t.contact.area}
                      </span>
                      <input
                        type="text"
                        name="area"
                        value={formData.area}
                        onChange={handleInputChange}
                        placeholder={t.contact.areaPlaceholder}
                        className="w-full bg-black border border-white/10 text-white px-4 py-3 rounded-md focus:outline-none focus:border-gold transition-colors placeholder:text-white/30"
                      />
                    </label>
                  </div>

                  <div className="space-y-2">
                    <span className="text-xs text-gray-500 font-bold uppercase tracking-[0.3em] flex items-center gap-2">
                      <IconPalette /> {t.contact.stonePreference}
                    </span>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                      {stoneOptions.map((option) => (
                        <label
                          key={option}
                          className={`cursor-pointer border px-3 py-3 text-xs md:text-sm text-center transition-all duration-300 rounded-md ${
                            formData.stoneColor === option
                              ? "bg-gold text-black border-gold font-bold"
                              : "border-white/10 text-gray-400 hover:border-gold/40 bg-black/70"
                          }`}
                        >
                          <input
                            type="radio"
                            name="stoneColor"
                            value={option}
                            checked={formData.stoneColor === option}
                            onChange={handleInputChange}
                            className="hidden"
                          />
                          {option}
                        </label>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="h-px bg-white/10" />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <label className="space-y-2">
                    <span className="text-xs text-gray-500 font-bold uppercase tracking-[0.3em]">
                      {t.contact.name}
                    </span>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      autoComplete="name"
                      required
                      className="w-full bg-black border border-white/10 text-white px-4 py-3 rounded-md focus:outline-none focus:border-gold transition-colors"
                    />
                  </label>
                  <label className="space-y-2">
                    <span className="text-xs text-gray-500 font-bold uppercase tracking-[0.3em]">
                      {t.contact.phone}
                    </span>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      autoComplete="tel"
                      required
                      placeholder={t.contact.phonePlaceholder}
                      className="w-full bg-black border border-white/10 text-white px-4 py-3 rounded-md focus:outline-none focus:border-gold transition-colors placeholder:text-white/30"
                    />
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gold text-black font-bold py-4 uppercase tracking-[0.3em] hover:bg-white transition-colors duration-300 flex items-center justify-center gap-3"
                >
                  {t.contact.submitBtn} <IconSend />
                </button>

                <p className="text-[10px] text-gray-500 text-center">
                  {t.contact.gdpr}
                </p>
              </form>
            )}
          </div>

          <div className="lg:col-span-4 flex flex-col justify-between space-y-10">
            <a
              href={t.contact.whatsappHref}
              target="_blank"
              rel="noreferrer"
              className="bg-gradient-to-br from-emerald-900/30 via-black to-black border border-emerald-500/30 p-8 rounded-2xl relative overflow-hidden group hover:border-emerald-400/60 transition-colors"
            >
              <div className="absolute -top-12 right-0 w-40 h-40 bg-emerald-500/10 blur-[80px]" />
              <div className="relative z-10">
                <div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center mb-6 text-black shadow-lg shadow-emerald-500/30 group-hover:scale-110 transition-transform duration-300">
                  <IconMessage />
                </div>
                <h3 className="text-2xl font-serif text-white mb-2">
                  {t.contact.whatsappTitle}
                </h3>
                <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                  {t.contact.whatsappMsg}
                </p>
                <div className="flex items-center gap-2 text-emerald-300 font-bold text-xs uppercase tracking-[0.3em] group-hover:text-emerald-200 transition-colors">
                  {t.contact.whatsappStart} <IconArrowRight />
                </div>
              </div>
            </a>

            <div className="space-y-8 pl-4 border-l border-white/10">
              <div className="group">
                <h4 className="text-gray-500 text-xs font-bold uppercase tracking-[0.3em] mb-2 flex items-center gap-2">
                  <IconPhone /> {t.contact.customerService}
                </h4>
                <a
                  href={t.footer.phoneHref}
                  className="text-2xl font-serif text-white group-hover:text-gold transition-colors"
                >
                  {t.contact.phone_tr}
                </a>
                <p className="text-gray-500 text-xs mt-1">
                  {t.contact.weekdays}
                </p>
              </div>

              <div className="group">
                <h4 className="text-gray-500 text-xs font-bold uppercase tracking-[0.3em] mb-2 flex items-center gap-2">
                  <IconMapPin /> {t.contact.showroom}
                </h4>
                <a
                  href="https://maps.app.goo.gl/N32BfXN6XaTfoe5y9"
                  target="_blank"
                  rel="noreferrer"
                  className="block text-base text-gray-300 leading-relaxed group-hover:text-white transition-colors"
                >
                  {t.contact.showroomAddress}
                  <div className="mt-3 text-gold text-xs font-bold uppercase tracking-[0.3em] flex items-center gap-2">
                    {t.contact.seeOnMap} <IconArrowRight />
                  </div>
                </a>
              </div>
            </div>

            <div className="bg-black/70 p-4 rounded-xl border border-gold/20 flex items-center gap-4">
              <div className="w-2 h-2 rounded-full bg-gold animate-pulse" />
              <p className="text-xs text-gray-400">
                <span className="text-white font-bold">{t.contact.aiOnline}</span>{" "}
                {t.contact.aiOnlineMsg}
              </p>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .grid-3d {
          position: absolute;
          inset: -20% -6% 0 -6%;
          transform-origin: top center;
          transform: perspective(1200px) rotateX(62deg) translateY(-4%);
          mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.95), transparent 80%);
          animation: grid-move 18s linear infinite;
        }
        .grid-3d--base {
          background-image: linear-gradient(rgba(212, 175, 55, 0.35) 1px, transparent 1px),
            linear-gradient(90deg, rgba(212, 175, 55, 0.28) 1px, transparent 1px);
          background-size: 70px 70px;
          opacity: 0.45;
          mix-blend-mode: screen;
        }
        .grid-3d--glow {
          background-image: linear-gradient(rgba(212, 175, 55, 0.4) 1px, transparent 1px),
            linear-gradient(90deg, rgba(212, 175, 55, 0.32) 1px, transparent 1px);
          background-size: 110px 110px;
          opacity: 0.3;
          filter: blur(0.3px) drop-shadow(0 0 6px rgba(212, 175, 55, 0.35));
          mix-blend-mode: screen;
          animation-duration: 26s;
        }
        @keyframes grid-move {
          from {
            background-position: 0 0;
          }
          to {
            background-position: 0 220px;
          }
        }
      `}</style>
    </section>
  );
}
