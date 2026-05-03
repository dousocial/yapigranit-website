import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { ChevronRight } from "lucide-react";

import { Container } from "@/components/ui/container";

interface PageHeroProps {
  title: string;
  description?: string;
  breadcrumb: { label: string; href?: string }[];
  image?: string;
  imageAlt?: string;
  /**
   * @deprecated Layout is always full-bleed now.
   * Prop kept for backwards compatibility but ignored.
   */
  variant?: "split" | "full";
}

export function PageHero({
  title,
  description,
  breadcrumb,
  image,
  imageAlt = "",
}: PageHeroProps) {
  return (
    <section className="relative bg-surface-darker text-on-dark overflow-hidden">
      {/* Full-bleed background image */}
      {image && (
        <div className="absolute inset-0 z-0 hero-bg-fade" aria-hidden>
          <Image
            src={image}
            alt={imageAlt}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          {/* Soft directional vignette — readability without hiding image */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(105deg, rgba(8,7,10,0.82) 0%, rgba(8,7,10,0.55) 38%, rgba(8,7,10,0.22) 65%, rgba(8,7,10,0.08) 100%)",
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to top, rgba(8,7,10,0.82) 0%, rgba(8,7,10,0) 35%, rgba(8,7,10,0) 70%, rgba(8,7,10,0.4) 100%)",
            }}
          />
          {/* Right-side soft fade — extra contrast guard for descriptions
              that extend toward the brighter half of marble images. */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to left, rgba(8,7,10,0.32) 0%, rgba(8,7,10,0.05) 30%, rgba(8,7,10,0) 55%)",
            }}
          />
        </div>
      )}

      <Container size="wide" className="relative z-10">
        <div className="flex flex-col justify-center pt-12 pb-24 lg:pt-24 lg:pb-28 min-h-[440px] lg:min-h-[600px]">
          <div className="max-w-[640px]">
            <div className="hero-fade-1">
              <Breadcrumb items={breadcrumb} />
            </div>
            <h1 className="display-xl mt-6 text-on-dark text-balance hero-title hero-fade-2">
              {title}
            </h1>
            <div className="w-12 h-px bg-gold mt-8 hero-fade-3" />
            {description && (
              <p className="mt-6 max-w-[520px] text-[1rem] text-on-dark-muted leading-relaxed hero-desc hero-fade-4">
                {description}
              </p>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}

function Breadcrumb({ items }: { items: { label: string; href?: string }[] }) {
  // On narrow viewports, when there are 3+ levels we hide the middle items
  // so the breadcrumb stays on one line. Full chain shows from sm: up.
  const hasMiddle = items.length > 2;
  return (
    <nav aria-label="Breadcrumb">
      <ol className="flex flex-wrap items-center gap-1.5 text-[0.78rem] text-on-dark-muted drop-shadow-[0_1px_4px_rgba(0,0,0,0.6)]">
        {items.map((item, idx) => {
          const isFirst = idx === 0;
          const isLast = idx === items.length - 1;
          const isMiddle = !isFirst && !isLast;
          // Hide middle crumbs on mobile (xs) when we have 3+ levels
          const hideClass = hasMiddle && isMiddle ? "hidden sm:flex" : "flex";
          return (
            <li
              key={`${item.label}-${idx}`}
              className={`${hideClass} items-center gap-1.5 max-w-full`}
            >
              {idx > 0 && (
                <ChevronRight className="size-3 text-on-dark-soft drop-shadow-[0_1px_4px_rgba(0,0,0,0.6)] shrink-0" />
              )}
              {item.href ? (
                <Link
                  href={item.href}
                  className="hover:text-gold transition-colors"
                >
                  {item.label}
                </Link>
              ) : (
                <span className="text-gold truncate">{item.label}</span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
