import { prisma } from "@/lib/prisma";
import { DataTable } from "@/components/admin/data-table";
import { formatDateShort } from "@/lib/utils";

export const dynamic = "force-dynamic";

async function getRequests() {
  try {
    return await prisma.sampleRequest.findMany({
      orderBy: { createdAt: "desc" },
    });
  } catch {
    return [];
  }
}

export default async function AdminSamplesPage() {
  const requests = await getRequests();

  return (
    <div>
      <p className="eyebrow text-gold-deep">İçerik</p>
      <h1 className="display-md mt-3 text-ink mb-8">Numune Talepleri</h1>

      <DataTable
        data={requests}
        empty="Henüz numune talebi yok."
        columns={[
          {
            key: "createdAt",
            header: "Tarih",
            render: (r) => formatDateShort(r.createdAt),
          },
          {
            key: "name",
            header: "Ad Soyad",
            render: (r) => (
              <div>
                <div className="font-medium">{r.name}</div>
                {r.companyName && (
                  <div className="text-[0.78rem] text-ink-soft">
                    {r.companyName}
                  </div>
                )}
              </div>
            ),
          },
          {
            key: "contact",
            header: "İletişim",
            render: (r) => (
              <div className="text-[0.82rem]">
                <div>{r.email}</div>
                <div className="text-ink-soft">{r.phone}</div>
              </div>
            ),
          },
          {
            key: "address",
            header: "Adres",
            render: (r) => (
              <div className="text-[0.82rem] line-clamp-2 max-w-[260px]">
                {r.address}
                <div className="text-ink-soft">{r.city}</div>
              </div>
            ),
          },
          {
            key: "materials",
            header: "Numuneler",
            render: (r) => (
              <div className="text-[0.78rem] text-ink-muted line-clamp-2 max-w-[220px]">
                {r.materials}
              </div>
            ),
          },
        ]}
      />
    </div>
  );
}
