import Link from "next/link";
import { ProjectForm } from "@/components/admin/project-form";
import { ArrowLeft } from "lucide-react";

export default function NewProjectPage() {
  return (
    <div>
      <Link
        href="/admin/projeler"
        className="inline-flex items-center gap-2 text-[0.85rem] text-ink-muted hover:text-ink mb-6"
      >
        <ArrowLeft className="size-4" />
        Projelere dön
      </Link>
      <p className="eyebrow text-gold-deep">Yeni Kayıt</p>
      <h1 className="display-md mt-3 text-ink mb-8">Yeni Proje Ekle</h1>
      <ProjectForm />
    </div>
  );
}
