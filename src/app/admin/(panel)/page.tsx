import Link from "next/link";
import {
  FolderKanban,
  Newspaper,
  FileText,
  MessageSquare,
  Mail,
  ArrowRight,
} from "lucide-react";

import { prisma } from "@/lib/prisma";

async function getMetrics() {
  try {
    const [projects, posts, quotes, contacts, subscribers] = await Promise.all([
      prisma.project.count(),
      prisma.blogPost.count(),
      prisma.quote.count(),
      prisma.contactMessage.count(),
      prisma.newsletterSubscriber.count(),
    ]);
    return { projects, posts, quotes, contacts, subscribers };
  } catch {
    return { projects: 0, posts: 0, quotes: 0, contacts: 0, subscribers: 0 };
  }
}

export default async function AdminDashboard() {
  const m = await getMetrics();

  const cards = [
    {
      label: "Projeler",
      value: m.projects,
      href: "/admin/projeler",
      icon: FolderKanban,
    },
    {
      label: "Blog Yazıları",
      value: m.posts,
      href: "/admin/blog",
      icon: Newspaper,
    },
    {
      label: "Yeni Teklifler",
      value: m.quotes,
      href: "/admin/teklifler",
      icon: FileText,
    },
    {
      label: "İletişim Mesajları",
      value: m.contacts,
      href: "/admin/iletisim",
      icon: MessageSquare,
    },
    {
      label: "Bülten Aboneleri",
      value: m.subscribers,
      href: "/admin/abone",
      icon: Mail,
    },
  ];

  return (
    <div>
      <p className="eyebrow text-gold-deep">Yönetim Paneli</p>
      <h1 className="display-md mt-3 text-ink">Hoş geldiniz</h1>
      <p className="mt-3 text-[0.95rem] text-ink-muted max-w-[640px]">
        Web sitenizdeki içerik ve gelen talepleri buradan yönetebilirsiniz.
      </p>

      <div className="mt-10 grid grid-cols-2 lg:grid-cols-5 gap-4">
        {cards.map((c) => (
          <Link
            key={c.label}
            href={c.href}
            className="group bg-surface p-6 hover:shadow-md transition-shadow"
          >
            <c.icon className="size-6 text-gold-deep mb-4" strokeWidth={1.4} />
            <p className="text-[0.78rem] uppercase tracking-[0.18em] text-ink-soft">
              {c.label}
            </p>
            <p className="font-display text-[2rem] text-ink mt-1">{c.value}</p>
            <span className="mt-4 inline-flex items-center gap-1.5 text-[0.78rem] font-medium text-gold-deep">
              Yönet
              <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
