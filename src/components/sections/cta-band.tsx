import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";

export function CtaBand() {
  return (
    <section className="bg-background">
      <Container size="wide" className="px-0 sm:px-6 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 bg-surface-muted overflow-hidden">
          <div className="relative aspect-[5/4] md:aspect-auto md:min-h-[420px] bg-surface-darker">
            <Image
              src="https://images.unsplash.com/photo-1604147706283-d7119b5b822c?auto=format&fit=crop&w=1400&q=80"
              alt="Mermer doku"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-1/3 bg-gold" />
          </div>

          <Reveal className="flex flex-col justify-center p-10 md:p-14 lg:p-16">
            <Eyebrow>Teklif Alın</Eyebrow>
            <h2 className="display-lg mt-4 text-ink text-balance">
              Projeniz için
              <br />
              hemen teklif alın.
            </h2>
            <p className="mt-5 text-[0.95rem] text-ink-muted leading-relaxed max-w-[400px]">
              Projenize özel fiyatlandırma almak ve detaylı bilgi için formu
              doldurun. Ekibimiz en kısa sürede size dönüş yapsın.
            </p>
            <Button asChild size="lg" className="mt-8 self-start">
              <Link href="/teklif">
                Teklif Formu
                <ArrowRight />
              </Link>
            </Button>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
