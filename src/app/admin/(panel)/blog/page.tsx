import Link from "next/link";
import { Plus } from "lucide-react";

import { prisma } from "@/lib/prisma";
import { DataTable } from "@/components/admin/data-table";
import { Button } from "@/components/ui/button";
import { formatDateShort } from "@/lib/utils";

export const dynamic = "force-dynamic";

async function getPosts() {
  try {
    return await prisma.blogPost.findMany({ orderBy: { publishedAt: "desc" } });
  } catch {
    return [];
  }
}

export default async function AdminBlogPage() {
  const posts = await getPosts();

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <p className="eyebrow text-gold-deep">İçerik</p>
          <h1 className="display-md mt-3 text-ink">Blog Yazıları</h1>
        </div>
        <Button asChild variant="dark">
          <Link href="/admin/blog/yeni">
            <Plus className="size-4" />
            Yeni Yazı
          </Link>
        </Button>
      </div>

      <DataTable
        data={posts}
        empty="Henüz veritabanında yazı yok. Site şu an mock veriyle çalışıyor."
        columns={[
          {
            key: "title",
            header: "Başlık",
            render: (p) => (
              <Link
                href={`/admin/blog/${p.id}`}
                className="block hover:text-gold-deep"
              >
                <div className="font-medium">{p.title}</div>
                <div className="text-[0.75rem] text-ink-soft">{p.slug}</div>
              </Link>
            ),
          },
          { key: "category", header: "Kategori", render: (p) => p.categoryLabel },
          {
            key: "publishedAt",
            header: "Yayın Tarihi",
            render: (p) => formatDateShort(p.publishedAt),
          },
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
        ]}
      />
    </div>
  );
}
