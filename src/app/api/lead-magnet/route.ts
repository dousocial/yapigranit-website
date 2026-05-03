import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

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

    // Resend ile e-posta listesine ekle / bildirim gönder
    const apiKey = process.env.RESEND_API_KEY;
    const from = process.env.RESEND_FROM ?? "noreply@yapigranit.com";
    const to = process.env.RESEND_TO ?? "info@yapigranit.com";

    if (apiKey) {
      try {
        await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${apiKey}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            from,
            to: [to],
            subject: `📥 Lead Magnet: ${data.asset}`,
            html: `
              <h2>Yeni Lead Magnet İndirme</h2>
              <p><strong>Asset:</strong> ${data.asset}</p>
              <p><strong>İsim:</strong> ${data.name}</p>
              <p><strong>E-posta:</strong> ${data.email}</p>
              <p><em>${new Date().toISOString()}</em></p>
            `,
          }),
        });
      } catch (err) {
        // Email başarısız olsa bile download'a izin ver
        console.error("[lead-magnet] resend failed:", err);
      }
    } else {
      console.log("[lead-magnet]", data);
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
