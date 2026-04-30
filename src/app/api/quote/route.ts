import { NextResponse } from "next/server";
import { z } from "zod";
import { prisma } from "@/lib/prisma";
import { renderRows, sendMail } from "@/lib/email";

const schema = z.object({
  customerType: z.enum(["bireysel", "kurumsal"]),
  companyName: z.string().optional(),
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(5),
  city: z.string().min(2),
  projectType: z.string().min(1),
  applicationArea: z.string().min(1),
  material: z.string().min(1),
  area: z.string().optional(),
  deadline: z.string().optional(),
  message: z.string().optional(),
  consent: z.union([z.boolean(), z.literal("true")]).transform(Boolean),
});

export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    const raw: Record<string, string> = {};
    formData.forEach((v, k) => {
      if (k !== "files") raw[k] = String(v);
    });
    const parsed = schema.parse(raw);

    const fileNames = formData
      .getAll("files")
      .filter((f): f is File => typeof f === "object" && "name" in (f as object))
      .map((f) => f.name)
      .join(", ");

    try {
      await prisma.quote.create({
        data: {
          customerType: parsed.customerType,
          companyName: parsed.companyName,
          name: parsed.name,
          email: parsed.email,
          phone: parsed.phone,
          city: parsed.city,
          projectType: parsed.projectType,
          applicationArea: parsed.applicationArea,
          material: parsed.material,
          area: parsed.area,
          deadline: parsed.deadline,
          message: parsed.message,
          fileNames,
        },
      });
    } catch {
      // ignore DB
    }

    await sendMail({
      subject: `Yeni Teklif Talebi — ${parsed.projectType} / ${parsed.applicationArea}`,
      replyTo: parsed.email,
      html: `
        <h2>Yeni Teklif Talebi</h2>
        <table cellpadding="0" cellspacing="0" style="font-family:system-ui;font-size:14px;width:100%;max-width:640px">
          ${renderRows({
            "Müşteri Tipi": parsed.customerType,
            Firma: parsed.companyName,
            "Ad Soyad": parsed.name,
            "E-posta": parsed.email,
            Telefon: parsed.phone,
            Şehir: parsed.city,
            "Proje Tipi": parsed.projectType,
            "Uygulama Alanı": parsed.applicationArea,
            "Malzeme Tercihi": parsed.material,
            "Yaklaşık Metraj": parsed.area,
            "İstenen Teslim Tarihi": parsed.deadline,
            "Yüklenen Dosyalar": fileNames || "—",
          })}
        </table>
        ${
          parsed.message
            ? `<h3>Not</h3><p>${parsed.message.replace(/\n/g, "<br>")}</p>`
            : ""
        }
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    if (err instanceof z.ZodError) {
      return NextResponse.json(
        { ok: false, errors: err.issues },
        { status: 400 },
      );
    }
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}

export const config = { runtime: "nodejs" };
