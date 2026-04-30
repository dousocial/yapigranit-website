import { prisma } from "@/lib/prisma";
import { DataTable } from "@/components/admin/data-table";
import { formatDateShort } from "@/lib/utils";

export const dynamic = "force-dynamic";

async function getSubscribers() {
  try {
    return await prisma.newsletterSubscriber.findMany({
      orderBy: { createdAt: "desc" },
    });
  } catch {
    return [];
  }
}

export default async function AdminSubscribersPage() {
  const subs = await getSubscribers();

  return (
    <div>
      <p className="eyebrow text-gold-deep">İçerik</p>
      <h1 className="display-md mt-3 text-ink mb-8">Bülten Aboneleri</h1>

      <DataTable
        data={subs}
        empty="Henüz abone yok."
        columns={[
          {
            key: "createdAt",
            header: "Abone Olma Tarihi",
            render: (s) => formatDateShort(s.createdAt),
          },
          { key: "email", header: "E-posta", render: (s) => s.email },
          {
            key: "active",
            header: "Durum",
            render: (s) => (
              <span
                className={`inline-block px-2 py-0.5 text-[0.72rem] uppercase tracking-wider ${
                  s.active ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-500"
                }`}
              >
                {s.active ? "Aktif" : "Pasif"}
              </span>
            ),
          },
        ]}
      />
    </div>
  );
}
