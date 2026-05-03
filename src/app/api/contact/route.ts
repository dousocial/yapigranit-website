import { NextResponse } from "next/server";
import { z } from "zod";

import { prisma } from "@/lib/prisma";
import { renderRows, sendMail } from "@/lib/email";
import { escapeHtml } from "@/lib/utils";

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(5),
  subject: z.string().min(1),
  message: z.string().min(5),
  // KVKK onayı zorunlu — true olmalı, sadece boolean dönüştürmek yetmez
  consent: z
    .union([z.boolean(), z.literal("true")])
    .transform(Boolean)
    .refine((v) => v === true, { message: "KVKK onayı gereklidir" }),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const parsed = schema.parse(body);

    let saved = false;
    try {
      await prisma.contactMessage.create({
        data: {
          name: parsed.name,
          email: parsed.email,
          phone: parsed.phone,
          subject: parsed.subject,
          message: parsed.message,
        },
      });
      saved = true;
    } catch {
      // DB henüz hazır değilse mail göndermeye devam et
    }

    await sendMail({
      subject: `Yeni iletişim mesajı — ${parsed.subject}`,
      replyTo: parsed.email,
      html: `
        <h2>Yeni İletişim Mesajı</h2>
        <table cellpadding="0" cellspacing="0" style="font-family:system-ui;font-size:14px;width:100%;max-width:600px">
          ${renderRows({
            "Ad Soyad": parsed.name,
            "E-posta": parsed.email,
            Telefon: parsed.phone,
            Konu: parsed.subject,
          })}
        </table>
        <h3>Mesaj</h3>
        <p>${escapeHtml(parsed.message).replace(/\n/g, "<br>")}</p>
      `,
    });

    return NextResponse.json({ ok: true, saved });
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
