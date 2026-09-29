import { NextResponse } from "next/server";
import { z } from "zod";

import { renderRows, sendMail } from "@/lib/email";
import { escapeHtml } from "@/lib/utils";
import { siteConfig } from "@/lib/site";

const schema = z.object({
  name: z.string().trim().min(2).max(120),
  email: z.string().trim().email().max(160),
  phone: z.string().trim().min(7).max(30),
  university: z.string().trim().min(2).max(160),
  department: z.string().trim().min(2).max(80),
  grade: z.string().trim().max(40).optional(),
  interests: z.string().min(1).max(600),
  message: z.string().max(3000).optional(),
  // Bot tuzağı — gerçek kullanıcı bu alanı hiç görmez
  website: z.string().optional(),
  // KVKK onayı zorunlu — true olmalı
  consent: z
    .union([z.boolean(), z.literal("true")])
    .transform(Boolean)
    .refine((v) => v === true, { message: "KVKK onayı gereklidir" }),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const parsed = schema.parse(body);

    // Honeypot dolu → bot. Sessizce başarılı dön, mail atma.
    if (parsed.website) {
      return NextResponse.json({ ok: true });
    }

    await sendMail({
      to: siteConfig.contact.emails.info,
      subject: `Öğrenci Programı Başvurusu — ${parsed.name} (${parsed.university})`,
      replyTo: parsed.email,
      html: `
        <h2>Yeni Öğrenci Programı Başvurusu</h2>
        <p style="font-family:system-ui;font-size:13px;color:#5a5246">yapigranit.com/ogrenci-programi</p>
        <table cellpadding="0" cellspacing="0" style="font-family:system-ui;font-size:14px;width:100%;max-width:640px">
          ${renderRows({
            "Ad Soyad": parsed.name,
            "E-posta": parsed.email,
            Telefon: parsed.phone,
            Üniversite: parsed.university,
            Bölüm: parsed.department,
            Sınıf: parsed.grade,
            "İlgilendiği Başlıklar": parsed.interests,
          })}
        </table>
        ${
          parsed.message
            ? `<h3>Mesaj / Proje Fikri</h3><p>${escapeHtml(parsed.message).replace(/\n/g, "<br>")}</p>`
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
    console.error("[student-program]", err);
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
