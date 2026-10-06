import { Resend } from "resend";

const apiKey = process.env.RESEND_API_KEY;
const fromAddress = process.env.RESEND_FROM || "YAPIGRANIT <noreply@yapigranit.com>";

/** Sitedeki tüm form bildirimlerinin gittiği adres (iletişim, teklif, numune, öğrenci programı, katalog). */
export const FORM_INBOX = "info@dousocial.com";

const resend = apiKey ? new Resend(apiKey) : null;

export async function sendMail({
  subject,
  html,
  replyTo,
  to,
  attachments,
}: {
  subject: string;
  html: string;
  replyTo?: string;
  /** Varsayılan alıcıyı (FORM_INBOX) bu form için ezmek istersen. */
  to?: string;
  attachments?: { filename: string; content: Buffer }[];
}) {
  if (!resend) {
    console.log("[Email — RESEND_API_KEY not set, skipping]", subject);
    return { ok: true, skipped: true };
  }
  const { error } = await resend.emails.send({
    from: fromAddress,
    to: to ?? FORM_INBOX,
    subject,
    html,
    replyTo,
    attachments,
  });
  if (error) {
    // Resend hata fırlatmaz, döndürür — çağıran taraf isterse kontrol eder
    console.error("[Email — Resend error]", subject, error);
    return { ok: false, error };
  }
  return { ok: true };
}

export function renderRows(rows: Record<string, string | undefined>) {
  return Object.entries(rows)
    .filter(([, v]) => Boolean(v))
    .map(
      ([k, v]) =>
        `<tr><td style="padding:6px 12px;color:#5a5246;border-bottom:1px solid #eee">${escapeHtml(
          k,
        )}</td><td style="padding:6px 12px;color:#15110b;border-bottom:1px solid #eee">${escapeHtml(
          String(v),
        )}</td></tr>`,
    )
    .join("");
}

function escapeHtml(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
