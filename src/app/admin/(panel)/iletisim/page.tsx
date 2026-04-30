import { prisma } from "@/lib/prisma";
import { DataTable } from "@/components/admin/data-table";
import { formatDateShort } from "@/lib/utils";

export const dynamic = "force-dynamic";

async function getMessages() {
  try {
    return await prisma.contactMessage.findMany({
      orderBy: { createdAt: "desc" },
    });
  } catch {
    return [];
  }
}

export default async function AdminContactPage() {
  const messages = await getMessages();

  return (
    <div>
      <p className="eyebrow text-gold-deep">İçerik</p>
      <h1 className="display-md mt-3 text-ink mb-8">İletişim Mesajları</h1>

      <DataTable
        data={messages}
        empty="Henüz mesaj yok."
        columns={[
          {
            key: "createdAt",
            header: "Tarih",
            render: (m) => formatDateShort(m.createdAt),
          },
          { key: "name", header: "Ad Soyad", render: (m) => m.name },
          {
            key: "contact",
            header: "İletişim",
            render: (m) => (
              <div className="text-[0.82rem]">
                <div>{m.email}</div>
                <div className="text-ink-soft">{m.phone}</div>
              </div>
            ),
          },
          { key: "subject", header: "Konu", render: (m) => m.subject },
          {
            key: "message",
            header: "Mesaj",
            render: (m) => (
              <div className="text-[0.82rem] text-ink-muted line-clamp-2 max-w-[280px]">
                {m.message}
              </div>
            ),
          },
        ]}
      />
    </div>
  );
}
