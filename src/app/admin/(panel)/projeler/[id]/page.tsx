import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ExternalLink } from "lucide-react";

import { prisma } from "@/lib/prisma";
import { ProjectForm } from "@/components/admin/project-form";

interface Props {
  params: Promise<{ id: string }>;
}

export default async function EditProjectPage({ params }: Props) {
  const { id } = await params;
  const project = await prisma.project.findUnique({ where: { id } });
  if (!project) notFound();

  return (
    <div>
      <Link
        href="/admin/projeler"
        className="inline-flex items-center gap-2 text-[0.85rem] text-ink-muted hover:text-ink mb-6"
      >
        <ArrowLeft className="size-4" />
        Projelere dön
      </Link>
      <p className="eyebrow text-gold-deep">Düzenle</p>
      <div className="flex items-center gap-3 mt-3 mb-8">
        <h1 className="display-md text-ink">{project.title}</h1>
        <Link
          href={`/projeler/${project.slug}`}
          target="_blank"
          className="inline-flex items-center gap-1 text-[0.78rem] text-gold-deep hover:text-gold"
        >
          <ExternalLink className="size-3.5" />
          Sayfayı görüntüle
        </Link>
      </div>
      <ProjectForm
        projectId={project.id}
        initial={{
          title: project.title,
          slug: project.slug,
          category: project.category,
          categoryLabel: project.categoryLabel,
          type: project.type,
          location: project.location,
          year: project.year,
          material: project.material,
          area: project.area ?? undefined,
          scope: project.scope,
          summary: project.summary,
          cover: project.cover,
          gallery: project.gallery ?? undefined,
          published: project.published,
        }}
      />
    </div>
  );
}
