"use client";

import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

import { translations, type Language, type Translations } from "./translations";

const DE_DOMAINS = ["yapigranit.de", "www.yapigranit.de"];

type LanguageContextType = {
  lang: Language;
  setLang: (lang: Language) => void;
  t: Translations;
  isDeDomain: boolean;
};

const LanguageContext = createContext<LanguageContextType>({
  lang: "tr",
  setLang: () => {},
  t: translations.tr,
  isDeDomain: false,
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Language>("tr");
  const [isDeDomain, setIsDeDomain] = useState(false);

  useEffect(() => {
    const hostname = window.location.hostname;
    const onDeDomain = DE_DOMAINS.includes(hostname);
    setIsDeDomain(onDeDomain);

    if (onDeDomain) {
      // On yapigranit.de → always German
      setLangState("de");
      return;
    }

    // On yapigranit.com / localhost → check localStorage
    try {
      const stored = localStorage.getItem("yapigranit-lang") as Language | null;
      if (stored && ["tr", "en"].includes(stored)) {
        setLangState(stored);
      }
    } catch {
      // ignore
    }
  }, []);

  const setLang = (newLang: Language) => {
    setLangState(newLang);
    try {
      localStorage.setItem("yapigranit-lang", newLang);
    } catch {
      // ignore
    }
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t: translations[lang], isDeDomain }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
