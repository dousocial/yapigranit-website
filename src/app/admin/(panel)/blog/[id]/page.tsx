import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ExternalLink } from "lucide-react";

import { prisma } from "@/lib/prisma";
import { BlogForm } from "@/components/admin/blog-form";

interface Props {
  params: Promise<{ id: string }>;
}

export default async function EditBlogPage({ params }: Props) {
  const { id } = await params;
  const post = await prisma.blogPost.findUnique({ where: { id } });
  if (!post) notFound();

  return (
    <div>
      <Link
        href="/admin/blog"
        className="inline-flex items-center gap-2 text-[0.85rem] text-ink-muted hover:text-ink mb-6"
      >
        <ArrowLeft className="size-4" />
        Bloglara dön
      </Link>
      <p className="eyebrow text-gold-deep">Düzenle</p>
      <div className="flex items-center gap-3 mt-3 mb-8">
        <h1 className="display-md text-ink">{post.title}</h1>
        <Link
          href={`/blog/${post.slug}`}
          target="_blank"
          className="inline-flex items-center gap-1 text-[0.78rem] text-gold-deep hover:text-gold"
        >
          <ExternalLink className="size-3.5" />
          Sayfayı görüntüle
        </Link>
      </div>
      <BlogForm
        postId={post.id}
        initial={{
          title: post.title,
          slug: post.slug,
          excerpt: post.excerpt,
          body: post.body,
          category: post.category,
          categoryLabel: post.categoryLabel,
          cover: post.cover,
          featured: post.featured,
          published: post.published,
        }}
      />
    </div>
  );
}
