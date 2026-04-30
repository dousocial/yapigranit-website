import Link from "next/link";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  variant?: "light" | "dark";
  withTagline?: boolean;
  href?: string;
}

export function Logo({
  className,
  variant = "dark",
  withTagline = true,
  href = "/",
}: LogoProps) {
  const colorTitle = variant === "light" ? "text-on-dark" : "text-ink";
  const colorTagline =
    variant === "light" ? "text-on-dark-soft" : "text-ink-soft";
  const colorMark = variant === "light" ? "text-gold" : "text-gold-deep";

  return (
    <Link
      href={href}
      aria-label="Yapı Granit Anasayfa"
      className={cn(
        "flex items-center gap-3 transition-opacity hover:opacity-90",
        className,
      )}
    >
      <LogoMark className={cn("h-9 w-9 shrink-0", colorMark)} />
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            "font-display text-[1.35rem] tracking-[0.08em] uppercase font-medium",
            colorTitle,
          )}
        >
          Yapı Granit
        </span>
        {withTagline && (
          <span
            className={cn(
              "mt-1 text-[0.6rem] tracking-[0.22em] uppercase font-medium",
              colorTagline,
            )}
          >
            Doğal Taş & Yüzey Çözümleri
          </span>
        )}
      </span>
    </Link>
  );
}

export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
    >
      <path
        d="M9 6 L24 28 L24 42"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M39 6 L24 28"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="24" cy="42" r="1.6" fill="currentColor" />
    </svg>
  );
}
