"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";

import { Input, Textarea } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { slugify, readingMinutes } from "@/lib/utils";

const schema = z.object({
  title: z.string().min(2),
  slug: z.string().min(2),
  excerpt: z.string().min(10),
  body: z.string().min(50),
  category: z.string().min(1),
  categoryLabel: z.string().min(1),
  cover: z.string().url(),
  featured: z.boolean(),
  published: z.boolean(),
});

type Values = z.infer<typeof schema>;

export function BlogForm({
  initial,
  postId,
}: {
  initial?: Partial<Values>;
  postId?: string;
}) {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<Values>({
    resolver: zodResolver(schema),
    defaultValues: {
      title: "",
      slug: "",
      excerpt: "",
      body: "",
      category: "tasarim",
      categoryLabel: "Tasarım",
      cover: "",
      featured: false,
      published: true,
      ...initial,
    },
  });

  const title = watch("title");
  const slug = watch("slug");
  const body = watch("body");

  React.useEffect(() => {
    if (title && !slug) {
      setValue("slug", slugify(title));
    }
  }, [title, slug, setValue]);

  async function onSubmit(values: Values) {
    try {
      const url = postId ? `/api/admin/blog/${postId}` : "/api/admin/blog";
      const method = postId ? "PATCH" : "POST";
      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...values,
          readMinutes: readingMinutes(values.body),
        }),
      });
      if (!res.ok) throw new Error();
      toast.success(postId ? "Yazı güncellendi." : "Yazı kaydedildi.");
      router.push("/admin/blog");
      router.refresh();
    } catch {
      toast.error("Kayıt sırasında bir hata oluştu.");
    }
  }

  async function onDelete() {
    if (!postId) return;
    if (!confirm("Bu yazıyı silmek istediğinizden emin misiniz?")) return;
    try {
      const res = await fetch(`/api/admin/blog/${postId}`, {
        method: "DELETE",
      });
      if (!res.ok) throw new Error();
      toast.success("Yazı silindi.");
      router.push("/admin/blog");
      router.refresh();
    } catch {
      toast.error("Silme sırasında bir hata oluştu.");
    }
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-surface p-8 space-y-5 max-w-[800px]"
    >
      <Field label="Başlık" error={errors.title?.message}>
        <Input {...register("title")} />
      </Field>
      <Field label="Slug" error={errors.slug?.message}>
        <Input {...register("slug")} />
      </Field>
      <div className="grid grid-cols-2 gap-5">
        <Field label="Kategori (slug)" error={errors.category?.message}>
          <Input {...register("category")} placeholder="tasarim, dogal-tas..." />
        </Field>
        <Field label="Kategori (label)" error={errors.categoryLabel?.message}>
          <Input {...register("categoryLabel")} />
        </Field>
      </div>
      <Field label="Özet" error={errors.excerpt?.message}>
        <Textarea rows={2} {...register("excerpt")} />
      </Field>
      <Field label="İçerik (Markdown desteklenir)" error={errors.body?.message}>
        <Textarea rows={10} {...register("body")} />
        <p className="mt-1 text-[0.75rem] text-ink-soft">
          Tahmini okuma: {readingMinutes(body || "")} dk
        </p>
      </Field>
      <Field label="Kapak Görsel URL" error={errors.cover?.message}>
        <Input {...register("cover")} placeholder="https://..." />
      </Field>
      <div className="flex flex-wrap items-center gap-6">
        <label className="flex items-center gap-3 cursor-pointer">
          <input type="checkbox" {...register("featured")} className="size-4 accent-gold" />
          <span className="text-[0.9rem] text-ink">Öne Çıkar</span>
        </label>
        <label className="flex items-center gap-3 cursor-pointer">
          <input type="checkbox" {...register("published")} className="size-4 accent-gold" />
          <span className="text-[0.9rem] text-ink">Yayında</span>
        </label>
      </div>

      <div className="flex items-center justify-between pt-2">
        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting
            ? "Kaydediliyor..."
            : postId
              ? "Değişiklikleri Kaydet"
              : "Yazıyı Kaydet"}
        </Button>
        {postId && (
          <button
            type="button"
            onClick={onDelete}
            className="text-[0.85rem] text-red-600 hover:text-red-700 underline-grow"
          >
            Sil
          </button>
        )}
      </div>
    </form>
  );
}

function Field({
  label,
  children,
  error,
}: {
  label: string;
  children: React.ReactNode;
  error?: string;
}) {
  return (
    <div>
      <label className="block text-[0.78rem] uppercase tracking-[0.15em] text-ink-soft mb-2">
        {label}
      </label>
      {children}
      {error && <p className="mt-1 text-[0.78rem] text-red-600">{error}</p>}
    </div>
  );
}
