import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { brands } from "@/lib/data/brands";

interface BrandStripProps {
  variant?: "light" | "dark";
  showHeader?: boolean;
}

export function BrandStrip({
  variant = "light",
  showHeader = true,
}: BrandStripProps) {
  // Marquee için listeyi 2 kere tekrar et — kesintisiz akış
  const loop = [...brands, ...brands];

  const isDark = variant === "dark";

  return (
    <section
      className={
        isDark
          ? "bg-surface-darker text-on-dark py-14 lg:py-16 relative overflow-hidden"
          : "bg-surface-muted text-ink py-14 lg:py-16 relative overflow-hidden"
      }
    >
      {isDark && (
        <div className="absolute inset-0 marble-bg opacity-40" aria-hidden />
      )}

      <Container size="wide" className="relative">
        {showHeader && (
          <div className="text-center mb-10 max-w-[680px] mx-auto">
            <Eyebrow variant={isDark ? "light" : "gold"}>
              Güçlü İş Birlikleri
            </Eyebrow>
            <h2
              className={
                isDark
                  ? "display-md text-on-dark mt-3 text-balance"
                  : "display-md text-ink mt-3 text-balance"
              }
            >
              Çözüm ortağı olduğumuz global markalar
            </h2>
            <p
              className={
                isDark
                  ? "mt-4 text-[0.92rem] text-on-dark-muted"
                  : "mt-4 text-[0.92rem] text-ink-muted"
              }
            >
              Dünyanın en prestijli sinterlenmiş porselen, kuvars ve büyük ebat
              yüzey markalarıyla çalışıyoruz.
            </p>
          </div>
        )}
      </Container>

      {/* Marquee strip — full bleed */}
      <div className="relative">
        {/* Edge fades */}
        <div
          className={
            isDark
              ? "pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-surface-darker to-transparent z-10"
              : "pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-surface-muted to-transparent z-10"
          }
        />
        <div
          className={
            isDark
              ? "pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-surface-darker to-transparent z-10"
              : "pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-surface-muted to-transparent z-10"
          }
        />

        <div className="overflow-hidden">
          <div className="flex items-center gap-12 lg:gap-16 marquee-track whitespace-nowrap">
            {loop.map((brand, i) => (
              <div
                key={`${brand.name}-${i}`}
                className={
                  isDark
                    ? "shrink-0 font-display text-[1.4rem] lg:text-[1.6rem] tracking-[0.18em] text-on-dark/70 hover:text-gold transition-colors uppercase"
                    : "shrink-0 font-display text-[1.4rem] lg:text-[1.6rem] tracking-[0.18em] text-ink-soft hover:text-gold-deep transition-colors uppercase"
                }
                title={brand.country}
              >
                {brand.name}
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .marquee-track {
          animation: marquee 40s linear infinite;
          width: max-content;
        }
        .marquee-track:hover {
          animation-play-state: paused;
        }
        @media (prefers-reduced-motion: reduce) {
          .marquee-track {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}
