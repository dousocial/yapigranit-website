import { NextResponse } from "next/server";
import { z } from "zod";

import { renderRows, sendMail } from "@/lib/email";
import { escapeHtml } from "@/lib/utils";
import {
  emailError,
  formatBytes,
  formatPhoneIntl,
  nameError,
  normalizeEmail,
  pdfFileError,
  phoneError,
  safePdfName,
} from "@/lib/student-form-validation";

// Öğrenci programı başvurularının gideceği adres
const RECIPIENT = "info@dousocial.com";

const refine = (check: (v: string) => string | null) => (v: string, ctx: z.RefinementCtx) => {
  const msg = check(v);
  if (msg) ctx.addIssue({ code: "custom", message: msg });
};

const schema = z.object({
  name: z.string().max(120).superRefine(refine(nameError)),
  email: z.string().max(160).superRefine(refine(emailError)),
  phone: z.string().max(30).superRefine(refine(phoneError)),
  university: z.string().trim().min(3).max(160),
  department: z.string().trim().min(2).max(80),
  grade: z.string().trim().max(40).optional(),
  interests: z.string().min(1).max(600),
  message: z.string().max(3000).optional(),
  // Bot tuzağı — gerçek kullanıcı bu alanı hiç görmez
  website: z.string().optional(),
  // KVKK onayı zorunlu
  consent: z.literal("true"),
});

function field(form: FormData, key: string): string | undefined {
  const v = form.get(key);
  return typeof v === "string" ? v : undefined;
}

export async function POST(req: Request) {
  let form: FormData;
  try {
    form = await req.formData();
  } catch {
    return NextResponse.json({ ok: false, message: "Geçersiz istek" }, { status: 400 });
  }

  const parsed = schema.safeParse({
    name: field(form, "name") ?? "",
    email: field(form, "email") ?? "",
    phone: field(form, "phone") ?? "",
    university: field(form, "university") ?? "",
    department: field(form, "department") ?? "",
    grade: field(form, "grade") || undefined,
    interests: field(form, "interests") ?? "",
    message: field(form, "message") || undefined,
    website: field(form, "website") || undefined,
    consent: field(form, "consent"),
  });
  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, errors: parsed.error.issues },
      { status: 400 },
    );
  }
  const data = parsed.data;

  // Honeypot dolu → bot. Sessizce başarılı dön, mail atma.
  if (data.website) {
    return NextResponse.json({ ok: true });
  }

  // Opsiyonel PDF (portfolyo / CV)
  let attachment: { filename: string; content: Buffer } | undefined;
  let attachmentInfo: string | undefined;
  const upload = form.get("portfolio");
  if (upload instanceof File && upload.size > 0) {
    const fileErr = pdfFileError(upload);
    if (fileErr) {
      return NextResponse.json({ ok: false, message: fileErr }, { status: 400 });
    }
    const content = Buffer.from(await upload.arrayBuffer());
    // İçerik imzası: gerçek PDF'ler "%PDF-" ile başlar
    if (content.subarray(0, 5).toString("latin1") !== "%PDF-") {
      return NextResponse.json(
        { ok: false, message: "Dosya geçerli bir PDF değil" },
        { status: 400 },
      );
    }
    attachment = { filename: safePdfName(upload.name), content };
    attachmentInfo = `${attachment.filename} (${formatBytes(upload.size)}) — ekte`;
  }

  const email = normalizeEmail(data.email);
  const name = data.name.trim().replace(/\s+/g, " ");

  try {
    const result = await sendMail({
      to: RECIPIENT,
      subject: `Öğrenci Programı Başvurusu — ${name} (${data.university})`,
      replyTo: email,
      attachments: attachment ? [attachment] : undefined,
      html: `
        <h2>Yeni Öğrenci Programı Başvurusu</h2>
        <p style="font-family:system-ui;font-size:13px;color:#5a5246">yapigranit.com/ogrenci-programi</p>
        <table cellpadding="0" cellspacing="0" style="font-family:system-ui;font-size:14px;width:100%;max-width:640px">
          ${renderRows({
            "Ad Soyad": name,
            "E-posta": email,
            Telefon: formatPhoneIntl(data.phone),
            Üniversite: data.university,
            Bölüm: data.department,
            Sınıf: data.grade,
            "İlgilendiği Başlıklar": data.interests,
            "Portfolyo / CV": attachmentInfo,
          })}
        </table>
        ${
          data.message
            ? `<h3>Mesaj / Proje Fikri</h3><p>${escapeHtml(data.message).replace(/\n/g, "<br>")}</p>`
            : ""
        }
      `,
    });
    if (!result.ok) {
      return NextResponse.json({ ok: false }, { status: 502 });
    }
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[student-program]", err);
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
