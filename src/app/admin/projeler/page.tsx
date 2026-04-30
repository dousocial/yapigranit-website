import Link from "next/link";
import { Plus } from "lucide-react";

import { prisma } from "@/lib/prisma";
import { DataTable } from "@/components/admin/data-table";
import { Button } from "@/components/ui/button";
import { formatDateShort } from "@/lib/utils";

export const dynamic = "force-dynamic";

async function getProjects() {
  try {
    return await prisma.project.findMany({ orderBy: { createdAt: "desc" } });
  } catch {
    return [];
  }
}

export default async function AdminProjelerPage() {
  const projects = await getProjects();

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <p className="eyebrow text-gold-deep">İçerik</p>
          <h1 className="display-md mt-3 text-ink">Projeler</h1>
        </div>
        <Button asChild variant="dark">
          <Link href="/admin/projeler/yeni">
            <Plus className="size-4" />
            Yeni Proje
          </Link>
        </Button>
      </div>

      <DataTable
        data={projects}
        empty="Henüz veritabanına eklenmiş proje yok. Site şu an mock veriyle çalışıyor; admin panelinden ekleyince gerçek veriden yayınlamaya geçebilirsiniz."
        columns={[
          {
            key: "title",
            header: "Başlık",
            render: (p) => (
              <div>
                <div className="font-medium">{p.title}</div>
                <div className="text-[0.75rem] text-ink-soft">{p.slug}</div>
              </div>
            ),
          },
          { key: "category", header: "Kategori", render: (p) => p.categoryLabel },
          { key: "location", header: "Lokasyon", render: (p) => p.location },
          { key: "year", header: "Yıl", render: (p) => p.year },
          {
            key: "status",
            header: "Durum",
            render: (p) => (
              <span
                className={`inline-block px-2 py-0.5 text-[0.72rem] uppercase tracking-wider ${
                  p.published
                    ? "bg-green-100 text-green-700"
                    : "bg-gray-100 text-gray-500"
                }`}
              >
                {p.published ? "Yayında" : "Taslak"}
              </span>
            ),
          },
          {
            key: "createdAt",
            header: "Eklendi",
            render: (p) => formatDateShort(p.createdAt),
          },
        ]}
      />
    </div>
  );
}
