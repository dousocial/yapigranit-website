import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { BlogForm } from "@/components/admin/blog-form";

export default function NewBlogPostPage() {
  return (
    <div>
      <Link
        href="/admin/blog"
        className="inline-flex items-center gap-2 text-[0.85rem] text-ink-muted hover:text-ink mb-6"
      >
        <ArrowLeft className="size-4" />
        Bloglara dön
      </Link>
      <p className="eyebrow text-gold-deep">Yeni Kayıt</p>
      <h1 className="display-md mt-3 text-ink mb-8">Yeni Blog Yazısı</h1>
      <BlogForm />
    </div>
  );
}
