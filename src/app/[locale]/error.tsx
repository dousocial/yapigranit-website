"use client";

import { useEffect } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  const t = useTranslations("Errors");

  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen bg-background flex items-center">
      <Container className="py-24 text-center">
        <p className="eyebrow mb-6">{t("title")}</p>

        <h1 className="font-display text-4xl md:text-5xl font-light text-ink mb-4">
          {t("title")}
        </h1>

        <p className="text-ink-muted text-lg max-w-md mx-auto mb-10">
          {t("description")}
        </p>

        {process.env.NODE_ENV === "development" && error.message && (
          <pre className="mb-8 mx-auto max-w-xl text-left text-xs bg-surface-muted border border-line rounded-lg p-4 overflow-auto text-ink-soft">
            {error.message}
            {error.digest && `\n\nDigest: ${error.digest}`}
          </pre>
        )}

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button onClick={reset} size="lg">
            {t("retry")}
          </Button>
          <Button variant="outline" size="lg" asChild>
            <Link href="/">{t("home")}</Link>
          </Button>
        </div>
      </Container>
    </div>
  );
}
