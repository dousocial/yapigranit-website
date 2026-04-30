"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";

import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Reveal } from "@/components/ui/reveal";
import { projects } from "@/lib/data/projects";
import { cn } from "@/lib/utils";

export function ProjectsCarousel() {
  const [emblaRef, embla] = useEmblaCarousel({
    align: "start",
    dragFree: true,
    containScroll: "trimSnaps",
  });
  const [canPrev, setCanPrev] = React.useState(false);
  const [canNext, setCanNext] = React.useState(true);

  React.useEffect(() => {
    if (!embla) return;
    const onSelect = () => {
      setCanPrev(embla.canScrollPrev());
      setCanNext(embla.canScrollNext());
    };
    embla.on("select", onSelect);
    embla.on("reInit", onSelect);
    onSelect();
  }, [embla]);

  return (
    <section className="bg-background py-20 lg:py-28">
      <Container size="wide">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-10 lg:mb-12">
          <Reveal className="lg:col-span-5">
            <Eyebrow>Projeler</Eyebrow>
            <h2 className="display-lg mt-4 text-ink text-balance">
              Hayata geçirdiğimiz seçkin projeler.
            </h2>
            <Link
              href="/projeler"
              className="mt-6 inline-flex items-center gap-2 text-[0.78rem] font-medium uppercase tracking-[0.18em] text-gold-deep hover:text-gold transition-colors group"
            >
              Tüm Projeleri Gör
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Reveal>

          <div className="lg:col-span-7 flex items-end justify-end gap-2">
            <button
              onClick={() => embla?.scrollPrev()}
              disabled={!canPrev}
              aria-label="Önceki proje"
              className={cn(
                "size-11 grid place-items-center border transition-all",
                canPrev
                  ? "border-line-strong text-ink hover:bg-ink hover:text-on-dark hover:border-ink"
                  : "border-line text-ink-soft cursor-not-allowed",
              )}
            >
              <ArrowLeft className="size-4" />
            </button>
            <button
              onClick={() => embla?.scrollNext()}
              disabled={!canNext}
              aria-label="Sonraki proje"
              className={cn(
                "size-11 grid place-items-center transition-all",
                canNext
                  ? "bg-gold text-ink hover:bg-gold-soft"
                  : "border border-line text-ink-soft cursor-not-allowed",
              )}
            >
              <ArrowRight className="size-4" />
            </button>
          </div>
        </div>

        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-4 lg:gap-6">
            {projects.slice(0, 6).map((project) => (
              <div
                key={project.slug}
                className="flex-[0_0_85%] sm:flex-[0_0_60%] md:flex-[0_0_45%] lg:flex-[0_0_32%]"
              >
                <ProjectCard project={project} />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

function ProjectCard({ project }: { project: typeof projects[number] }) {
  return (
    <Link
      href={`/projeler/${project.slug}`}
      className="group block bg-surface overflow-hidden"
    >
      <div className="relative aspect-[5/4] overflow-hidden bg-surface-muted">
        <Image
          src={project.cover}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 85vw, 32vw"
          className="object-cover transition-transform duration-700 group-hover:scale-[1.05]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-surface-darker/70 via-transparent to-transparent" />
        <div className="absolute inset-x-0 bottom-0 p-5 flex items-end justify-between text-on-dark">
          <div>
            <h3 className="font-display text-[1.4rem] leading-tight">
              {project.title}
            </h3>
            <p className="text-[0.8rem] text-on-dark-muted mt-1">
              {project.type}
            </p>
          </div>
          <div className="size-9 grid place-items-center bg-on-dark/15 backdrop-blur-sm rounded-full transition-transform group-hover:translate-x-1">
            <ArrowRight className="size-3.5" />
          </div>
        </div>
      </div>
    </Link>
  );
}
