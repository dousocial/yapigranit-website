import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";

export function CtaBand() {
  const t = useTranslations("Cta");

  return (
    <section className="relative bg-surface-darker text-on-dark overflow-hidden">
      {/* Full-bleed background image */}
      <div className="absolute inset-0 z-0" aria-hidden>
        <Image
          src="/images/sections/cta-bg.webp"
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
        />
        {/* Soft directional vignette — readability without hiding image.
            Inverted from PageHero so the text on the RIGHT is legible. */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(255deg, rgba(8,7,10,0.78) 0%, rgba(8,7,10,0.5) 38%, rgba(8,7,10,0.18) 65%, rgba(8,7,10,0.05) 100%)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, rgba(8,7,10,0.6) 0%, rgba(8,7,10,0) 35%, rgba(8,7,10,0) 70%, rgba(8,7,10,0.32) 100%)",
          }}
        />
      </div>

      <Container size="wide" className="relative z-10">
        <div className="flex flex-col items-end justify-center pt-16 pb-20 lg:pt-24 lg:pb-28 min-h-[420px] lg:min-h-[520px]">
          <Reveal className="max-w-[560px] text-right ml-auto">
            <Eyebrow variant="light">{t("eyebrow")}</Eyebrow>
            <h2 className="display-lg mt-4 text-on-dark text-balance hero-title">
              {t("title")}
            </h2>
            <div className="w-12 h-px bg-gold mt-7 ml-auto" />
            <p className="mt-6 text-[0.98rem] text-on-dark-muted leading-relaxed max-w-[440px] ml-auto hero-desc">
              {t("description")}
            </p>
            <Button asChild size="lg" className="mt-8">
              <Link href="/teklif">
                {t("ctaForm")}
                <ArrowRight />
              </Link>
            </Button>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
