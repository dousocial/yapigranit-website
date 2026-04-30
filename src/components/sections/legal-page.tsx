import { Link } from "@/i18n/navigation";
import { ChevronRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";

interface LegalSection {
  heading: string;
  paragraphs: string[];
}

interface LegalPageProps {
  title: string;
  intro: string;
  sections: LegalSection[];
  updatedAt?: string;
}

export function LegalPage({ title, intro, sections, updatedAt }: LegalPageProps) {
  return (
    <>
      <section className="bg-surface-darker text-on-dark py-16 lg:py-20">
        <Container size="wide">
          <nav aria-label="Breadcrumb" className="text-[0.78rem] text-on-dark-muted">
            <Link href="/" className="hover:text-gold">Anasayfa</Link>
            <ChevronRight className="inline size-3 mx-1.5" />
            <span className="text-gold">{title}</span>
          </nav>
          <h1 className="display-lg mt-6 text-on-dark">{title}</h1>
          <div className="w-12 h-px bg-gold mt-6" />
          <p className="mt-6 text-[0.95rem] text-on-dark-muted leading-relaxed max-w-[640px]">
            {intro}
          </p>
          {updatedAt && (
            <p className="mt-4 text-[0.78rem] text-on-dark-soft">
              Son güncelleme: {updatedAt}
            </p>
          )}
        </Container>
      </section>

      <section className="bg-background py-16 lg:py-20">
        <Container size="narrow">
          <div className="space-y-10">
            {sections.map((s, idx) => (
              <div key={s.heading}>
                <Eyebrow>Madde {String(idx + 1).padStart(2, "0")}</Eyebrow>
                <h2 className="font-display text-[1.6rem] text-ink mt-3 mb-4">
                  {s.heading}
                </h2>
                <div className="space-y-4">
                  {s.paragraphs.map((p, i) => (
                    <p key={i} className="text-[0.95rem] text-ink-muted leading-relaxed">
                      {p}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
