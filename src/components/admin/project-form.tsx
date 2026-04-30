"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";

import { Input, Textarea } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { slugify } from "@/lib/utils";

const schema = z.object({
  title: z.string().min(2),
  slug: z.string().min(2),
  category: z.string().min(1),
  categoryLabel: z.string().min(1),
  type: z.string().min(1),
  location: z.string().min(1),
  year: z.number().min(1990).max(2100),
  material: z.string().min(1),
  area: z.string().optional(),
  scope: z.string().min(2),
  summary: z.string().min(10),
  cover: z.string().url(),
  gallery: z.string().optional(),
  published: z.boolean(),
});

type Values = z.infer<typeof schema>;

export function ProjectForm({
  initial,
  projectId,
}: {
  initial?: Partial<Values>;
  projectId?: string;
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
      category: "konut",
      categoryLabel: "Konut Projesi",
      type: "",
      location: "İstanbul",
      year: new Date().getFullYear(),
      material: "",
      area: "",
      scope: "",
      summary: "",
      cover: "",
      gallery: "",
      published: true,
      ...initial,
    },
  });

  const title = watch("title");
  const slug = watch("slug");

  React.useEffect(() => {
    if (title && !slug) {
      setValue("slug", slugify(title));
    }
  }, [title, slug, setValue]);

  async function onSubmit(values: Values) {
    try {
      const url = projectId
        ? `/api/admin/projects/${projectId}`
        : "/api/admin/projects";
      const method = projectId ? "PATCH" : "POST";
      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (!res.ok) throw new Error();
      toast.success(projectId ? "Proje güncellendi." : "Proje kaydedildi.");
      router.push("/admin/projeler");
      router.refresh();
    } catch {
      toast.error("Kayıt sırasında bir hata oluştu.");
    }
  }

  async function onDelete() {
    if (!projectId) return;
    if (!confirm("Bu projeyi silmek istediğinizden emin misiniz?")) return;
    try {
      const res = await fetch(`/api/admin/projects/${projectId}`, {
        method: "DELETE",
      });
      if (!res.ok) throw new Error();
      toast.success("Proje silindi.");
      router.push("/admin/projeler");
      router.refresh();
    } catch {
      toast.error("Silme sırasında bir hata oluştu.");
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="bg-surface p-8 space-y-5 max-w-[800px]">
      <Field label="Başlık" error={errors.title?.message}>
        <Input {...register("title")} />
      </Field>
      <Field label="Slug" error={errors.slug?.message}>
        <Input {...register("slug")} placeholder="otomatik-olusturulur" />
      </Field>
      <div className="grid grid-cols-2 gap-5">
        <Field label="Kategori (slug)" error={errors.category?.message}>
          <Input {...register("category")} placeholder="oteller, konut, ticari..." />
        </Field>
        <Field label="Kategori (label)" error={errors.categoryLabel?.message}>
          <Input {...register("categoryLabel")} />
        </Field>
      </div>
      <div className="grid grid-cols-2 gap-5">
        <Field label="Tür" error={errors.type?.message}>
          <Input {...register("type")} placeholder="Mermer Uygulama" />
        </Field>
        <Field label="Lokasyon" error={errors.location?.message}>
          <Input {...register("location")} />
        </Field>
      </div>
      <div className="grid grid-cols-2 gap-5">
        <Field label="Yıl" error={errors.year?.message}>
          <Input type="number" {...register("year", { valueAsNumber: true })} />
        </Field>
        <Field label="Metraj" error={errors.area?.message}>
          <Input {...register("area")} placeholder="12.500 m²" />
        </Field>
      </div>
      <Field label="Malzeme (virgülle ayrılmış)" error={errors.material?.message}>
        <Input {...register("material")} placeholder="Calacatta Gold, Nero Marquina" />
      </Field>
      <Field label="Kapsam" error={errors.scope?.message}>
        <Input {...register("scope")} />
      </Field>
      <Field label="Özet" error={errors.summary?.message}>
        <Textarea rows={3} {...register("summary")} />
      </Field>
      <Field label="Kapak Görsel URL" error={errors.cover?.message}>
        <Input {...register("cover")} placeholder="https://..." />
      </Field>
      <Field label="Galeri (virgülle ayrılmış URL'ler)" error={errors.gallery?.message}>
        <Textarea rows={2} {...register("gallery")} />
      </Field>
      <label className="flex items-center gap-3 cursor-pointer">
        <input type="checkbox" {...register("published")} className="size-4 accent-gold" />
        <span className="text-[0.9rem] text-ink">Yayında</span>
      </label>

      <div className="flex items-center justify-between pt-2">
        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting
            ? "Kaydediliyor..."
            : projectId
              ? "Değişiklikleri Kaydet"
              : "Projeyi Kaydet"}
        </Button>
        {projectId && (
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
