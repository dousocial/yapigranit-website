import { Resend } from "resend";

const apiKey = process.env.RESEND_API_KEY;
const fromAddress = process.env.RESEND_FROM || "Yapı Granit <noreply@yapigranit.com.tr>";
const toAddress = process.env.RESEND_TO || "info@yapigranit.com.tr";

const resend = apiKey ? new Resend(apiKey) : null;

export async function sendMail({
  subject,
  html,
  replyTo,
}: {
  subject: string;
  html: string;
  replyTo?: string;
}) {
  if (!resend) {
    console.log("[Email — RESEND_API_KEY not set, skipping]", subject);
    return { ok: true, skipped: true };
  }
  await resend.emails.send({
    from: fromAddress,
    to: toAddress,
    subject,
    html,
    replyTo,
  });
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
