import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

import { renderRows, sendMail } from "@/lib/email";

const schema = z.object({
  email: z.string().email(),
  name: z.string().min(2).max(80),
  asset: z.string().min(2).max(80),
});

/**
 * Lead magnet email gate.
 * Body: { email, name, asset } → returns { downloadUrl }
 *
 * Email + isim → CRM/email list'e gider.
 * Asset → /downloads/{asset} URL'i döner.
 */
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const data = schema.parse(body);

    // Bildirim e-postası — başarısız olsa bile indirmeye izin ver
    try {
      await sendMail({
        subject: `📥 Lead Magnet: ${data.asset}`,
        replyTo: data.email,
        html: `
          <h2>Yeni Lead Magnet İndirme</h2>
          <table cellpadding="0" cellspacing="0" style="font-family:system-ui;font-size:14px;width:100%;max-width:640px">
            ${renderRows({
              Asset: data.asset,
              İsim: data.name,
              "E-posta": data.email,
              Tarih: new Date().toISOString(),
            })}
          </table>
        `,
      });
    } catch (err) {
      console.error("[lead-magnet] mail failed:", err);
    }

    const downloadUrl = `/downloads/${data.asset}`;
    return NextResponse.json({ ok: true, downloadUrl });
  } catch (err) {
    if (err instanceof z.ZodError) {
      return NextResponse.json(
        { ok: false, error: "Invalid request" },
        { status: 400 },
      );
    }
    return NextResponse.json(
      { ok: false, error: "Server error" },
      { status: 500 },
    );
  }
}
