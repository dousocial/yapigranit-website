/**
 * Öğrenci programı formu — istemci ve sunucunun ortak kullandığı doğrulama
 * yardımcıları. Tarayıcıya da gittiği için saf fonksiyonlar, Node API yok.
 */

export const MAX_PDF_BYTES = 4 * 1024 * 1024; // Vercel istek limiti 4.5 MB

// ─── Ad Soyad ───────────────────────────────────────────────────────────

const NAME_RE = /^[\p{L}][\p{L}' .-]*$/u;

export function nameError(value: string): string | null {
  const v = value.trim().replace(/\s+/g, " ");
  if (!v) return "Adını ve soyadını yaz";
  if (!NAME_RE.test(v)) return "Ad soyad yalnızca harf içermeli";
  const parts = v.split(" ").filter((p) => p.replace(/[.'-]/g, "").length >= 2);
  if (parts.length < 2) return "Ad ve soyadını birlikte yaz";
  return null;
}

// ─── Telefon (TR cep) ───────────────────────────────────────────────────

/** Girdiden 10 haneli ulusal numarayı çıkarır: "+90 (532) 111..." → "532111..." */
export function phoneDigits(value: string): string {
  let d = value.replace(/\D/g, "");
  if (d.startsWith("90") && d.length > 10) d = d.slice(2);
  if (d.startsWith("0")) d = d.slice(1);
  return d.slice(0, 10);
}

/** Yazarken maske: "0 (5XX) XXX XX XX" */
export function formatPhoneInput(value: string): string {
  const d = phoneDigits(value);
  if (!d) return "";
  let out = "0 (" + d.slice(0, 3);
  if (d.length >= 3) out += ")";
  if (d.length > 3) out += " " + d.slice(3, 6);
  if (d.length > 6) out += " " + d.slice(6, 8);
  if (d.length > 8) out += " " + d.slice(8, 10);
  return out;
}

export function phoneError(value: string): string | null {
  const d = phoneDigits(value);
  if (!d) return "Telefon numaranı yaz";
  if (d[0] !== "5") return "Cep telefonu 05 ile başlamalı";
  if (d.length < 10) return "Numara eksik: 0 (5XX) XXX XX XX";
  return null;
}

/** E-postada okunaklı gösterim: +90 532 111 22 33 */
export function formatPhoneIntl(value: string): string {
  const d = phoneDigits(value);
  return `+90 ${d.slice(0, 3)} ${d.slice(3, 6)} ${d.slice(6, 8)} ${d.slice(8, 10)}`;
}

// ─── E-posta ────────────────────────────────────────────────────────────

const EMAIL_RE =
  /^[a-z0-9](?:[a-z0-9._%+-]{0,62}[a-z0-9_%+-])?@(?:[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?\.)+[a-z]{2,24}$/;

// Birebir yazıldığında geçerli sayılan yaygın servisler
const KNOWN_DOMAINS = [
  "gmail.com",
  "googlemail.com",
  "hotmail.com",
  "hotmail.com.tr",
  "outlook.com",
  "outlook.com.tr",
  "live.com",
  "msn.com",
  "yahoo.com",
  "ymail.com",
  "icloud.com",
  "me.com",
  "mac.com",
  "yandex.com",
  "yandex.com.tr",
  "proton.me",
  "protonmail.com",
  "mail.com",
  "email.com",
  "gmx.com",
  "aol.com",
];

// Yazım hatası kontrolünde hedef alınan popüler servisler
const TYPO_TARGETS = [
  "gmail.com",
  "hotmail.com",
  "outlook.com",
  "yahoo.com",
  "icloud.com",
  "yandex.com",
];

function levenshtein(a: string, b: string): number {
  const dp = Array.from({ length: b.length + 1 }, (_, i) => i);
  for (let i = 1; i <= a.length; i++) {
    let prev = dp[0];
    dp[0] = i;
    for (let j = 1; j <= b.length; j++) {
      const tmp = dp[j];
      dp[j] = Math.min(
        dp[j] + 1,
        dp[j - 1] + 1,
        prev + (a[i - 1] === b[j - 1] ? 0 : 1),
      );
      prev = tmp;
    }
  }
  return dp[b.length];
}

export function normalizeEmail(value: string): string {
  return value.trim().toLowerCase();
}

/** "ali@gmial.com" → "ali@gmail.com"; öneri yoksa null */
export function suggestEmail(value: string): string | null {
  const email = normalizeEmail(value);
  const at = email.lastIndexOf("@");
  if (at < 1) return null;
  const local = email.slice(0, at);
  const domain = email.slice(at + 1);
  if (!domain || KNOWN_DOMAINS.includes(domain)) return null;
  // Üniversite ve kurum adresleri serbest
  if (domain.endsWith(".edu.tr") || domain.endsWith(".edu")) return null;

  // "gmail.com.tr" gibi fazladan uzantı
  for (const target of TYPO_TARGETS) {
    if (domain.startsWith(target + ".")) return `${local}@${target}`;
  }

  // "gmail" / "gmail." / "gmail.c" gibi eksik uzantılar
  const bare = domain.replace(/\.[a-z]{0,3}$/, "");
  for (const target of TYPO_TARGETS) {
    if (bare === target.split(".")[0] && domain !== target) {
      return `${local}@${target}`;
    }
  }

  let best: string | null = null;
  let bestDist = Infinity;
  for (const target of TYPO_TARGETS) {
    const dist = levenshtein(domain, target);
    if (dist < bestDist) {
      bestDist = dist;
      best = target;
    }
  }
  const threshold = domain.length >= 9 ? 2 : 1;
  if (best && bestDist > 0 && bestDist <= threshold) return `${local}@${best}`;
  return null;
}

export function emailError(value: string): string | null {
  const email = normalizeEmail(value);
  if (!email) return "E-posta adresini yaz";
  if (/\s/.test(email)) return "E-postada boşluk olamaz";
  if (/[çğıöşü]/i.test(email)) return "E-postada Türkçe karakter olamaz (ç, ğ, ı, ö, ş, ü)";
  if (!email.includes("@")) return "E-postada @ işareti eksik";
  if (email.split("@").length > 2) return "E-postada yalnızca bir @ olmalı";
  if (email.includes("..")) return "E-postada art arda nokta olamaz";
  const suggestion = suggestEmail(email);
  if (suggestion) return `Yazım hatası olabilir — ${suggestion} mi demek istedin?`;
  if (!EMAIL_RE.test(email)) return "Geçerli bir e-posta gir (ör. ad@gmail.com)";
  return null;
}

// ─── PDF ────────────────────────────────────────────────────────────────

export function formatBytes(bytes: number): string {
  if (bytes < 1024 * 1024) return `${Math.max(1, Math.round(bytes / 1024))} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1).replace(".", ",")} MB`;
}

/** Tarayıcı ve sunucuda ortak dosya kontrolü (içerik imzası sunucuda ayrıca). */
export function pdfFileError(file: { name: string; size: number; type: string }): string | null {
  const isPdf = file.type === "application/pdf" || /\.pdf$/i.test(file.name);
  if (!isPdf) return "Yalnızca PDF dosyası yükleyebilirsin";
  if (file.size === 0) return "Dosya boş görünüyor";
  if (file.size > MAX_PDF_BYTES)
    return `Dosya çok büyük (${formatBytes(file.size)}). En fazla 4 MB olmalı`;
  return null;
}

export function safePdfName(name: string): string {
  const base = name
    .replace(/\.pdf$/i, "")
    .normalize("NFKD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/ı/g, "i")
    .replace(/[^a-zA-Z0-9-_ ]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .slice(0, 80);
  return `${base || "portfolyo"}.pdf`;
}
