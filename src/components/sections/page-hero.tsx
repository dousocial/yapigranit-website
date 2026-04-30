import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

import { Container } from "@/components/ui/container";

interface PageHeroProps {
  title: string;
  description?: string;
  breadcrumb: { label: string; href?: string }[];
  image?: string;
  imageAlt?: string;
  variant?: "split" | "full";
}

export function PageHero({
  title,
  description,
  breadcrumb,
  image,
  imageAlt = "",
  variant = "split",
}: PageHeroProps) {
  return (
    <section className="relative bg-surface-darker text-on-dark overflow-hidden">
      <Container size="wide" className="relative z-10">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 pt-12 pb-16 lg:pt-20 lg:pb-24 min-h-[440px] lg:min-h-[520px]">
          <div
            className={
              variant === "split"
                ? "lg:col-span-6 flex flex-col justify-end"
                : "lg:col-span-12 flex flex-col justify-center"
            }
          >
            <Breadcrumb items={breadcrumb} />
            <h1 className="display-xl mt-6 text-on-dark text-balance">
              {title}
            </h1>
            <div className="w-12 h-px bg-gold mt-8" />
            {description && (
              <p className="mt-6 max-w-[480px] text-[1rem] text-on-dark-muted leading-relaxed">
                {description}
              </p>
            )}
          </div>
          {variant === "split" && image && (
            <div className="lg:col-span-6 relative min-h-[280px] lg:min-h-0">
              <div className="absolute inset-0 lg:-mr-8 xl:-mr-16 overflow-hidden rounded-sm">
                <Image
                  src={image}
                  alt={imageAlt}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-l from-transparent to-surface-darker/40" />
              </div>
            </div>
          )}
        </div>
      </Container>

      {variant === "full" && image && (
        <div className="absolute inset-0 z-0">
          <Image
            src={image}
            alt={imageAlt}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-surface-darker via-surface-darker/85 to-surface-darker/40" />
        </div>
      )}
    </section>
  );
}

function Breadcrumb({ items }: { items: { label: string; href?: string }[] }) {
  return (
    <nav aria-label="Breadcrumb">
      <ol className="flex items-center gap-1.5 text-[0.78rem] text-on-dark-muted">
        {items.map((item, idx) => (
          <li key={`${item.label}-${idx}`} className="flex items-center gap-1.5">
            {idx > 0 && (
              <ChevronRight className="size-3 text-on-dark-soft" />
            )}
            {item.href ? (
              <Link
                href={item.href}
                className="hover:text-gold transition-colors"
              >
                {item.label}
              </Link>
            ) : (
              <span className="text-gold">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
