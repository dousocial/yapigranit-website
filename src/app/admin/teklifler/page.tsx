import { prisma } from "@/lib/prisma";
import { DataTable } from "@/components/admin/data-table";
import { formatDateShort } from "@/lib/utils";

export const dynamic = "force-dynamic";

async function getQuotes() {
  try {
    return await prisma.quote.findMany({ orderBy: { createdAt: "desc" } });
  } catch {
    return [];
  }
}

export default async function AdminQuotesPage() {
  const quotes = await getQuotes();

  return (
    <div>
      <p className="eyebrow text-gold-deep">İçerik</p>
      <h1 className="display-md mt-3 text-ink mb-8">Teklif Talepleri</h1>

      <DataTable
        data={quotes}
        empty="Henüz teklif talebi yok."
        columns={[
          {
            key: "createdAt",
            header: "Tarih",
            render: (q) => formatDateShort(q.createdAt),
          },
          {
            key: "name",
            header: "Ad Soyad",
            render: (q) => (
              <div>
                <div className="font-medium">{q.name}</div>
                {q.companyName && (
                  <div className="text-[0.78rem] text-ink-soft">
                    {q.companyName}
                  </div>
                )}
              </div>
            ),
          },
          {
            key: "contact",
            header: "İletişim",
            render: (q) => (
              <div className="text-[0.82rem]">
                <div>{q.email}</div>
                <div className="text-ink-soft">{q.phone}</div>
              </div>
            ),
          },
          {
            key: "project",
            header: "Proje",
            render: (q) => (
              <div className="text-[0.82rem]">
                <div>{q.projectType}</div>
                <div className="text-ink-soft">
                  {q.applicationArea} · {q.material}
                </div>
              </div>
            ),
          },
          {
            key: "city",
            header: "Şehir",
            render: (q) => q.city,
          },
          {
            key: "status",
            header: "Durum",
            render: (q) => (
              <span className="inline-block px-2 py-0.5 text-[0.72rem] uppercase tracking-wider bg-gold/10 text-gold-deep">
                {q.status}
              </span>
            ),
          },
        ]}
      />
    </div>
  );
}
