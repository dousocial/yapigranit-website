"use client";

import Image from "next/image";

import Navbar from "@/components/layout/Navbar";
import { useLanguage } from "@/lib/i18n/LanguageContext";

const timelineMeta = [
  {
    image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=2670&auto=format&fit=crop",
    iconClass: "fa-solid fa-hammer",
    iconWrapperClass: "bg-[#d4af37] text-white",
    accentClass: "absolute top-0 right-0 h-20 w-20 rounded-bl-full -mr-4 -mt-4 bg-[#d4af37]/10",
    reverse: false,
  },
  {
    image: "https://images.unsplash.com/photo-1597336767351-7f9999a43a85?q=80&w=2670&auto=format&fit=crop",
    iconClass: "fa-solid fa-chart-line",
    iconWrapperClass: "bg-[#2c2c2c] text-white",
    accentClass: "absolute top-0 left-0 h-20 w-20 rounded-br-full -ml-4 -mt-4 bg-[#2c2c2c]/5",
    reverse: true,
  },
  {
    image: "https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2600&auto=format&fit=crop",
    iconClass: "fa-solid fa-earth-americas",
    iconWrapperClass: "bg-blue-600 text-white",
    accentClass: "absolute bottom-0 right-0 h-24 w-24 rounded-tl-full -mr-4 -mb-4 bg-blue-50",
    reverse: false,
  },
  {
    image: "https://images.unsplash.com/photo-1620613914072-4e449a75902f?q=80&w=2574&auto=format&fit=crop",
    iconClass: "fa-solid fa-truck-fast",
    iconWrapperClass: "bg-red-700 text-white",
    accentClass: "absolute top-0 left-0 h-20 w-20 rounded-br-full -ml-4 -mt-4 bg-red-50",
    reverse: true,
  },
];

export default function BizKimizPage() {
  const { t } = useLanguage();

  return (
    <main className="min-h-screen bg-[#fdfcf8] text-[#2c2c2c] font-sans overflow-x-hidden">
      <Navbar />

      <header className="relative pt-28 pb-16">
        <div className="mx-auto w-full max-w-6xl px-6">
          <span className="text-xs uppercase tracking-[0.4em] text-[#b58a2a] mb-4 inline-block">
            {t.about.badge}
          </span>
          <div className="relative overflow-hidden rounded-[2.5rem] border border-black/10 bg-[#f6f2ea] shadow-2xl">
            <div className="relative aspect-[16/9]">
              <Image
                src="/images/unnamed.avif"
                alt="Yapı Granit: Kuruluştan Liderliğe Yolculuk"
                fill
                className="object-contain"
                priority
                sizes="100vw"
              />
            </div>
          </div>
          <div className="mt-10 max-w-3xl">
            <span className="block text-[#b58a2a] font-serif italic text-lg md:text-xl mb-4">
              {t.about.from1994}
            </span>
            <h1 className="font-serif text-4xl md:text-6xl font-bold leading-tight mb-6">
              {t.about.heading}
            </h1>
            <p className="text-base md:text-lg text-[#3f3a35] leading-relaxed">
              {t.about.subheading}
            </p>
          </div>
        </div>
      </header>

      <section className="py-20 px-6 bg-[#fdfcf8]">
        <div className="max-w-3xl mx-auto text-center">
          <i className="fa-solid fa-quote-left text-4xl text-[#d4af37]/30 mb-6" />
          <p className="text-2xl md:text-3xl font-serif leading-relaxed text-[#2c2c2c]">
            {t.about.quote}
          </p>
          <div className="w-24 h-1 bg-[#d4af37] mx-auto mt-8 rounded-full" />
        </div>
      </section>

      <section className="py-20 px-4 md:px-0 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-64 h-64 bg-[#e6e2dd] rounded-full -translate-x-1/2 -translate-y-1/2 opacity-50 blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#d4af37] rounded-full translate-x-1/3 translate-y-1/3 opacity-10 blur-3xl" />

        <div className="max-w-5xl mx-auto relative z-10">
          <div className="hidden md:block absolute left-1/2 top-0 -translate-x-1/2 h-full w-0.5 bg-[#e6e2dd]" />

          {t.about.timeline.map((item, index) => {
            const meta = timelineMeta[index];
            const isReversed = meta.reverse;
            const textClasses = isReversed
              ? "md:w-5/12 text-left order-2 md:order-3 md:pl-10"
              : "md:w-5/12 text-right order-2 md:order-1 md:pr-10";
            const imageClasses = isReversed
              ? "md:w-5/12 order-3 md:order-1 md:pr-10"
              : "md:w-5/12 order-3 md:order-3 md:pl-10";

            return (
              <div
                key={item.year}
                className={`group flex flex-col md:flex-row items-center justify-between mb-24 ${
                  index === t.about.timeline.length - 1 ? "mb-0" : ""
                }`}
              >
                <div className={textClasses}>
                  <div className="bg-white p-8 rounded-2xl shadow-xl border border-[#f0ede7] transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl relative overflow-hidden">
                    <div className={meta.accentClass} />
                    <span className="text-[#d4af37] font-bold text-sm tracking-widest uppercase mb-2 block">
                      {item.label}
                    </span>
                    <h3 className="font-serif text-3xl font-bold mb-4">
                      {item.title}
                    </h3>
                    <p className="text-[#6b625a] leading-relaxed">
                      {"description" in item ? (
                        item.description
                      ) : (
                        <>
                          {item.descPre}
                          <span className="font-bold text-[#d4af37]">{item.descHighlight}</span>
                          {item.descPost}
                        </>
                      )}
                    </p>
                  </div>
                </div>
                <div className="md:w-2/12 flex justify-center order-1 md:order-2 mb-6 md:mb-0 relative">
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center shadow-lg z-10 ring-4 ring-white ${meta.iconWrapperClass}`}
                  >
                    <i className={meta.iconClass} />
                  </div>
                </div>
                <div className={imageClasses}>
                  <div className="relative h-64 w-full overflow-hidden rounded-2xl shadow-lg">
                    <Image
                      src={meta.image}
                      alt={item.title}
                      fill
                      className="object-cover grayscale transition duration-500 group-hover:grayscale-0"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="py-24 bg-[#2c2c2c] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-8">
            {t.about.title1}
          </h2>
          <p className="text-lg md:text-xl font-light text-[#d9d2c8] mb-12 leading-relaxed">
            {t.about.desc1}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 border border-[#3b3b3b] rounded-xl hover:bg-[#343434] transition">
              <i className="fa-solid fa-compass-drafting text-4xl text-[#d4af37] mb-4" />
              <h4 className="font-bold text-xl mb-2">{t.about.planning}</h4>
              <p className="text-sm text-[#bdb5ab]">
                {t.about.planningDesc}
              </p>
            </div>
            <div className="p-6 border border-[#3b3b3b] rounded-xl hover:bg-[#343434] transition">
              <i className="fa-solid fa-hands-holding-circle text-4xl text-[#d4af37] mb-4" />
              <h4 className="font-bold text-xl mb-2">{t.about.craftsmanship}</h4>
              <p className="text-sm text-[#bdb5ab]">
                {t.about.craftsmanshipDesc}
              </p>
            </div>
            <div className="p-6 border border-[#3b3b3b] rounded-xl hover:bg-[#343434] transition">
              <i className="fa-regular fa-clock text-4xl text-[#d4af37] mb-4" />
              <h4 className="font-bold text-xl mb-2">{t.about.assembly}</h4>
              <p className="text-sm text-[#bdb5ab]">
                {t.about.assemblyDesc}
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-white py-12 border-t border-[#eee9e2]">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <i className="fa-solid fa-layer-group text-[#d4af37] text-xl" />
            <h2 className="font-serif text-xl font-bold text-[#2c2c2c]">
              YAPI GRANİT
            </h2>
          </div>
          <p className="text-[#8c8378] text-sm italic">
            {t.about.tagline}
          </p>
          <div className="flex gap-4">
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-[#f3efe8] flex items-center justify-center text-[#6d645b] hover:bg-[#d4af37] hover:text-white transition"
              aria-label="Instagram"
            >
              <i className="fa-brands fa-instagram" />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-[#f3efe8] flex items-center justify-center text-[#6d645b] hover:bg-[#d4af37] hover:text-white transition"
              aria-label="LinkedIn"
            >
              <i className="fa-brands fa-linkedin-in" />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-[#f3efe8] flex items-center justify-center text-[#6d645b] hover:bg-[#d4af37] hover:text-white transition"
              aria-label="E-posta"
            >
              <i className="fa-regular fa-envelope" />
            </a>
          </div>
        </div>
        <div className="text-center mt-8 text-xs text-[#b0a79c]">
          &copy; {t.about.copyright}
        </div>
      </footer>
    </main>
  );
}
