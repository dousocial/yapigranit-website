import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { b2bFeatures } from "@/lib/data/b2b";

export function B2BSolutions() {
  return (
    <section className="bg-surface-darker text-on-dark py-20 lg:py-28 relative overflow-hidden">
      <div className="absolute inset-0 marble-bg opacity-40" aria-hidden />

      <Container size="wide" className="relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          <Reveal className="lg:col-span-5">
            <Eyebrow variant="light">Mimar & Müteahhit</Eyebrow>
            <h2 className="display-lg mt-4 text-on-dark text-balance">
              Mimar ve proje çözüm ortaklığı.
            </h2>
            <p className="mt-6 text-[0.95rem] text-on-dark-muted leading-relaxed max-w-[440px]">
              5 Eksen CNC, Waterjet Kesim ve Mekanik Cephe Sistemleri ile
              karmaşık geometrileri ve büyük ölçekli projeleri tek elden
              hayata geçiriyoruz. Lazer rölöveden sanal montaja, fireyi sıfıra
              indiren bir mühendislik akışı.
            </p>
            <Button asChild variant="outline-light" size="lg" className="mt-8">
              <Link href="/hizmetler">
                Kurumsal Çözümleri Keşfet
                <ArrowRight />
              </Link>
            </Button>
          </Reveal>

          <div className="lg:col-span-7 grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10">
            {b2bFeatures.map((feature, idx) => (
              <Reveal key={feature.title} delay={idx * 0.06}>
                <div className="group">
                  <div className="size-10 grid place-items-center text-gold mb-5 group-hover:scale-110 transition-transform">
                    <feature.icon className="size-7" strokeWidth={1.4} />
                  </div>
                  <h3 className="font-display text-[1.2rem] text-on-dark mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-[0.85rem] text-on-dark-muted leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
