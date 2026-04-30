import Link from "next/link";
import {
  LayoutDashboard,
  FolderKanban,
  Newspaper,
  MessageSquare,
  FileText,
  Mail,
  LogOut,
  Package,
} from "lucide-react";

import { auth, signOut } from "@/auth";
import { Logo } from "@/components/brand/logo";

const items = [
  { href: "/admin", label: "Gösterge", icon: LayoutDashboard },
  { href: "/admin/projeler", label: "Projeler", icon: FolderKanban },
  { href: "/admin/blog", label: "Blog", icon: Newspaper },
  { href: "/admin/teklifler", label: "Teklifler", icon: FileText },
  { href: "/admin/numune", label: "Numune Talepleri", icon: Package },
  { href: "/admin/iletisim", label: "İletişim", icon: MessageSquare },
  { href: "/admin/abone", label: "Bülten", icon: Mail },
];

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();

  return (
    <div className="min-h-screen flex bg-surface-muted">
      <aside className="w-[260px] bg-surface-darker text-on-dark flex flex-col sticky top-0 h-screen">
        <div className="p-6 border-b border-line-dark">
          <Logo variant="light" withTagline={false} href="/admin" />
        </div>

        <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="flex items-center gap-3 px-3 py-2.5 text-[0.9rem] text-on-dark-muted hover:text-gold hover:bg-on-dark/5 rounded-md transition-colors"
            >
              <item.icon className="size-4" />
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="p-4 border-t border-line-dark">
          <p className="text-[0.78rem] text-on-dark-soft mb-3">
            {session?.user?.email ?? "Yönetici"}
          </p>
          <form
            action={async () => {
              "use server";
              await signOut({ redirectTo: "/admin/login" });
            }}
          >
            <button
              type="submit"
              className="w-full flex items-center gap-2 px-3 py-2 text-[0.85rem] text-on-dark-muted hover:text-gold transition-colors"
            >
              <LogOut className="size-4" />
              Çıkış Yap
            </button>
          </form>
        </div>
      </aside>

      <main className="flex-1 min-h-screen overflow-y-auto">
        <div className="px-8 py-10 max-w-[1200px]">{children}</div>
      </main>
    </div>
  );
}
