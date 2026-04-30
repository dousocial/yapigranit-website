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
  address: z.string().min(10),
  city: z.string().min(2),
  projectType: z.string().min(1),
  materials: z.string().min(1),
  notes: z.string().optional(),
  consent: z.union([z.boolean(), z.literal("true")]).transform(Boolean),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const parsed = schema.parse(body);

    try {
      await prisma.sampleRequest.create({
        data: {
          customerType: parsed.customerType,
          companyName: parsed.companyName,
          name: parsed.name,
          email: parsed.email,
          phone: parsed.phone,
          address: parsed.address,
          city: parsed.city,
          projectType: parsed.projectType,
          materials: parsed.materials,
          notes: parsed.notes,
        },
      });
    } catch {
      // ignore DB
    }

    await sendMail({
      subject: `Yeni Numune Talebi — ${parsed.name}`,
      replyTo: parsed.email,
      html: `
        <h2>Yeni Numune Talebi</h2>
        <table cellpadding="0" cellspacing="0" style="font-family:system-ui;font-size:14px;width:100%;max-width:640px">
          ${renderRows({
            "Müşteri Tipi": parsed.customerType,
            Firma: parsed.companyName,
            "Ad Soyad": parsed.name,
            "E-posta": parsed.email,
            Telefon: parsed.phone,
            Şehir: parsed.city,
            Adres: parsed.address,
            "Proje Tipi": parsed.projectType,
            "Numune Tercihleri": parsed.materials,
          })}
        </table>
        ${
          parsed.notes
            ? `<h3>Notlar</h3><p>${parsed.notes.replace(/\n/g, "<br>")}</p>`
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
