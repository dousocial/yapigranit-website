import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  variant?: "light" | "dark";
  /** Show small tagline beneath wordmark. */
  withTagline?: boolean;
  /** Mark-only mode (no wordmark text). */
  markOnly?: boolean;
  href?: string;
  /** Mark height in pixels. */
  size?: number;
}

export function Logo({
  className,
  variant = "dark",
  withTagline = true,
  markOnly = false,
  href = "/",
  size = 52,
}: LogoProps) {
  const onDark = variant === "light";

  return (
    <Link
      href={href}
      aria-label="YAPIGRANİT"
      className={cn(
        "inline-flex items-center gap-3 group transition-opacity hover:opacity-90",
        className,
      )}
    >
      {/* Diamond + Y mark — actual brand mark (cropped from full logo) */}
      <span
        className={cn(
          "relative shrink-0 inline-block",
          onDark && "logo-mark-on-dark",
        )}
        style={{ width: size, height: size }}
      >
        <Image
          src="/images/brand/yapigranit-mark.png"
          alt=""
          fill
          sizes={`${size}px`}
          priority
          className="object-contain"
        />
      </span>

      {!markOnly && (
        <span className="flex flex-col leading-none">
          <span
            className={cn(
              "font-sans font-bold text-[1.1rem] tracking-[0.18em] uppercase",
              onDark ? "text-on-dark" : "text-ink",
            )}
          >
            YAPIGRANİT
          </span>
          {withTagline && (
            <span
              className={cn(
                "mt-1.5 text-[0.6rem] tracking-[0.22em] uppercase font-medium",
                onDark ? "text-on-dark-soft" : "text-ink-soft",
              )}
            >
              Doğal Taş & Yüzey Çözümleri
            </span>
          )}
        </span>
      )}

    </Link>
  );
}

/**
 * Inline SVG mark — useful when you need vector with currentColor styling.
 */
export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
    >
      <path
        d="M28 18 L72 18 L92 38 L50 84 L8 38 Z"
        stroke="currentColor"
        strokeWidth="6"
        strokeLinejoin="round"
        fill="none"
      />
      <path
        d="M34 30 L50 52 L66 30"
        stroke="currentColor"
        strokeWidth="7"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <path
        d="M50 52 L50 70"
        stroke="currentColor"
        strokeWidth="7"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}
