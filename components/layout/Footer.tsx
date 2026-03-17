"use client";

import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();
  return (
    <footer className="border-t border-neutral-200">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-3 px-6 py-8 text-sm text-neutral-600 md:flex-row md:items-center md:justify-between">
        <p>YAPIGRANİT (c) {new Date().getFullYear()}</p>
        <div className="flex items-center gap-4">
          <a
            href={t.footer.emailHref}
            className="transition-colors hover:text-neutral-900"
          >
            {t.footer.email}
          </a>
          <a
            href={t.footer.phoneHref}
            className="transition-colors hover:text-neutral-900"
          >
            {t.footer.phone}
          </a>
        </div>
      </div>
    </footer>
  );
}
