"use client";

import * as React from "react";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { ArrowRight, Check, FileText, PartyPopper, Upload, X } from "lucide-react";
import { toast } from "sonner";

import { Input, Textarea } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { trackLead } from "@/lib/tracking";
import { Link } from "@/i18n/navigation";
import {
  emailError,
  formatBytes,
  formatPhoneInput,
  nameError,
  normalizeEmail,
  pdfFileError,
  phoneDigits,
  phoneError,
  suggestEmail,
} from "@/lib/student-form-validation";

export const studentInterests = [
  "Atölye / üretim gezisi",
  "Staj ve mesleki gözlem",
  "Bitirme projesi malzeme desteği",
  "Numune ve teknik danışmanlık",
  "Tasarım yarışmaları",
  "CNC / Waterjet prototip",
] as const;

const departments = [
  "Mimarlık",
  "İç Mimarlık",
  "Endüstriyel Tasarım",
  "Peyzaj Mimarlığı",
  "İnşaat Mühendisliği",
  "Diğer",
];

const grades = [
  "Hazırlık",
  "1. sınıf",
  "2. sınıf",
  "3. sınıf",
  "4. sınıf",
  "Yüksek lisans / Doktora",
  "Yeni mezun",
];

const refine = (check: (v: string) => string | null) => (v: string, ctx: z.RefinementCtx) => {
  const msg = check(v);
  if (msg) ctx.addIssue({ code: "custom", message: msg });
};

const schema = z.object({
  name: z.string().superRefine(refine(nameError)),
  email: z.string().superRefine(refine(emailError)),
  phone: z.string().superRefine(refine(phoneError)),
  university: z.string().trim().min(3, "Üniversiteni yaz"),
  department: z.string().min(1, "Bölümünü seç"),
  grade: z.string().optional(),
  interests: z.array(z.string()).min(1, "En az bir başlık seç"),
  message: z.string().max(3000, "Mesaj en fazla 3000 karakter olabilir").optional(),
  website: z.string().optional(),
  consent: z.boolean().refine((v) => v === true, "Devam etmek için onay gerekli"),
});

type Values = z.infer<typeof schema>;
type FieldName = keyof Values;

const selectClass =
  "w-full bg-transparent text-ink py-3 border-0 border-b border-line-strong focus:outline-none focus:border-gold text-[0.95rem]";
const invalidClass = "border-red-500 focus:border-red-500";

export function StudentProgramForm() {
  const [sent, setSent] = React.useState(false);
  const [file, setFile] = React.useState<File | null>(null);
  const [fileError, setFileError] = React.useState<string | null>(null);
  const [dragging, setDragging] = React.useState(false);
  const fileInputRef = React.useRef<HTMLInputElement>(null);

  const {
    register,
    control,
    handleSubmit,
    setValue,
    setError,
    watch,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<Values>({
    resolver: zodResolver(schema),
    mode: "onTouched",
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      university: "",
      department: "",
      grade: "",
      interests: [studentInterests[0]],
      consent: false,
    },
  });

  const interests = watch("interests");
  const emailValue = watch("email");
  const emailSuggestion = errors.email ? suggestEmail(emailValue) : null;

  function toggleInterest(value: string) {
    const next = interests.includes(value)
      ? interests.filter((i) => i !== value)
      : [...interests, value];
    setValue("interests", next, { shouldValidate: true });
  }

  function pickFile(f: File | undefined | null) {
    if (!f) return;
    const err = pdfFileError(f);
    setFileError(err);
    setFile(err ? null : f);
  }

  function clearFile() {
    setFile(null);
    setFileError(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
  }

  async function onSubmit(values: Values) {
    if (fileError) return;

    const body = new FormData();
    body.set("name", values.name.trim());
    body.set("email", normalizeEmail(values.email));
    body.set("phone", values.phone);
    body.set("university", values.university.trim());
    body.set("department", values.department);
    if (values.grade) body.set("grade", values.grade);
    body.set("interests", values.interests.join(", "));
    if (values.message) body.set("message", values.message);
    if (values.website) body.set("website", values.website);
    body.set("consent", String(values.consent));
    if (file) body.set("portfolio", file, file.name);

    try {
      const res = await fetch("/api/student-program", { method: "POST", body });
      if (!res.ok) {
        const data = (await res.json().catch(() => null)) as {
          message?: string;
          errors?: { path?: (string | number)[]; message: string }[];
        } | null;
        // Sunucu doğrulaması alan bazlı hata döndürdüyse ilgili alana yaz
        const fieldErrors = data?.errors?.filter((e) => e.path?.[0]) ?? [];
        if (fieldErrors.length) {
          for (const e of fieldErrors) {
            setError(String(e.path![0]) as FieldName, { message: e.message });
          }
          return;
        }
        if (data?.message) {
          toast.error(data.message);
          return;
        }
        throw new Error();
      }
      trackLead({ formName: "student-program", value: 10 });
      reset();
      clearFile();
      setSent(true);
    } catch {
      toast.error(
        "Başvurun gönderilemedi. Lütfen tekrar dene ya da info@yapigranit.com adresine yaz.",
      );
    }
  }

  if (sent) {
    return (
      <div className="py-10 text-center" role="status">
        <div className="size-16 mx-auto grid place-items-center rounded-full bg-gold/15 text-gold-deep">
          <PartyPopper className="size-7" strokeWidth={1.5} />
        </div>
        <h3 className="display-md text-ink mt-6">Başvurun bize ulaştı!</h3>
        <p className="mt-4 text-[0.95rem] text-ink-muted leading-relaxed max-w-[440px] mx-auto">
          Teşekkürler. Ekibimiz en kısa sürede seninle iletişime geçip atölye
          gezisi ve destek kapsamını birlikte planlayacak.
        </p>
        <button
          type="button"
          onClick={() => setSent(false)}
          className="mt-8 text-[0.82rem] text-gold-deep underline-grow"
        >
          Bir arkadaşın için yeni başvuru yap
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-7">
      {/* Honeypot — ekranda ve klavye sırasında yok */}
      <div aria-hidden className="absolute -left-[9999px] size-px overflow-hidden">
        <label>
          Web sitesi
          <input type="text" tabIndex={-1} autoComplete="off" {...register("website")} />
        </label>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <Field error={errors.name?.message}>
          <Input
            placeholder="Ad Soyad *"
            autoComplete="name"
            autoCapitalize="words"
            aria-invalid={!!errors.name}
            className={cn(errors.name && invalidClass)}
            {...register("name")}
          />
        </Field>

        <div>
          <Input
            type="email"
            inputMode="email"
            placeholder="E-posta *"
            autoComplete="email"
            autoCapitalize="none"
            spellCheck={false}
            aria-invalid={!!errors.email}
            className={cn(errors.email && invalidClass)}
            {...register("email", {
              onBlur: (e) =>
                setValue("email", normalizeEmail(e.target.value), { shouldValidate: true }),
            })}
          />
          {emailSuggestion ? (
            <p className="mt-1.5 text-[0.78rem] text-red-600">
              Yazım hatası olabilir. Bunu mu demek istedin:{" "}
              <button
                type="button"
                onClick={() =>
                  setValue("email", emailSuggestion, { shouldValidate: true })
                }
                className="font-medium text-ink underline underline-offset-2 hover:text-gold-deep"
              >
                {emailSuggestion}
              </button>
              ?
            </p>
          ) : (
            errors.email?.message && (
              <p className="mt-1.5 text-[0.78rem] text-red-600">{errors.email.message}</p>
            )
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <Field error={errors.phone?.message}>
          <Controller
            name="phone"
            control={control}
            render={({ field }) => (
              <Input
                type="tel"
                inputMode="numeric"
                autoComplete="tel-national"
                placeholder="Cep telefonu * — 0 (5XX) XXX XX XX"
                aria-invalid={!!errors.phone}
                className={cn(errors.phone && invalidClass)}
                ref={field.ref}
                name={field.name}
                value={field.value}
                onBlur={field.onBlur}
                onChange={(e) => {
                  const raw = e.target.value;
                  let digits = phoneDigits(raw);
                  // Maske karakterini (ör. ")") silince bir haneyi de sil
                  if (raw.length < field.value.length && digits === phoneDigits(field.value)) {
                    digits = digits.slice(0, -1);
                  }
                  field.onChange(formatPhoneInput(digits));
                }}
              />
            )}
          />
        </Field>
        <Field error={errors.university?.message}>
          <Input
            placeholder="Üniversite *"
            aria-invalid={!!errors.university}
            className={cn(errors.university && invalidClass)}
            {...register("university")}
          />
        </Field>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <Field error={errors.department?.message}>
          <select
            {...register("department")}
            aria-invalid={!!errors.department}
            className={cn(selectClass, errors.department && invalidClass)}
          >
            <option value="">Bölüm *</option>
            {departments.map((d) => (
              <option key={d} value={d}>
                {d}
              </option>
            ))}
          </select>
        </Field>
        <Field>
          <select {...register("grade")} className={selectClass}>
            <option value="">Sınıf</option>
            {grades.map((g) => (
              <option key={g} value={g}>
                {g}
              </option>
            ))}
          </select>
        </Field>
      </div>

      <div>
        <p className="text-[0.78rem] uppercase tracking-[0.18em] text-ink-soft mb-3">
          Neyle ilgileniyorsun? *
        </p>
        <div className="flex flex-wrap gap-2">
          {studentInterests.map((item) => {
            const checked = interests.includes(item);
            return (
              <label
                key={item}
                className={cn(
                  "inline-flex items-center gap-2 px-4 h-10 rounded-full border cursor-pointer text-[0.85rem] transition-colors select-none",
                  "has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-gold/60",
                  checked
                    ? "border-gold bg-gold/15 text-ink"
                    : "border-line-strong text-ink-muted hover:border-gold",
                )}
              >
                <input
                  type="checkbox"
                  checked={checked}
                  onChange={() => toggleInterest(item)}
                  className="sr-only"
                />
                <span
                  className={cn(
                    "size-4 grid place-items-center rounded-full border transition-colors",
                    checked ? "bg-gold border-gold text-ink" : "border-line-strong",
                  )}
                  aria-hidden
                >
                  {checked && <Check className="size-3" strokeWidth={3} />}
                </span>
                {item}
              </label>
            );
          })}
        </div>
        {errors.interests?.message && (
          <p className="mt-1.5 text-[0.78rem] text-red-600">
            {errors.interests.message as string}
          </p>
        )}
      </div>

      <Field error={errors.message?.message}>
        <Textarea
          rows={3}
          placeholder="Üzerinde çalıştığın proje ya da aklındaki fikir (opsiyonel)"
          {...register("message")}
        />
      </Field>

      {/* PDF: portfolyo / CV */}
      <div>
        <p className="text-[0.78rem] uppercase tracking-[0.18em] text-ink-soft mb-3">
          Portfolyo / CV <span className="normal-case tracking-normal">(opsiyonel)</span>
        </p>
        {file ? (
          <div className="flex items-center gap-4 border border-gold bg-gold/10 px-4 py-3">
            <FileText className="size-6 shrink-0 text-gold-deep" strokeWidth={1.5} />
            <div className="min-w-0 flex-1">
              <p className="truncate text-[0.9rem] text-ink">{file.name}</p>
              <p className="text-[0.75rem] text-ink-soft">{formatBytes(file.size)} · PDF</p>
            </div>
            <button
              type="button"
              onClick={clearFile}
              className="size-9 grid place-items-center rounded-full text-ink-muted hover:bg-ink/10 hover:text-ink"
              aria-label="Dosyayı kaldır"
            >
              <X className="size-4" />
            </button>
          </div>
        ) : (
          <label
            onDragOver={(e) => {
              e.preventDefault();
              setDragging(true);
            }}
            onDragLeave={() => setDragging(false)}
            onDrop={(e) => {
              e.preventDefault();
              setDragging(false);
              pickFile(e.dataTransfer.files?.[0]);
            }}
            className={cn(
              "flex flex-col items-center justify-center gap-2 border border-dashed px-6 py-7 text-center cursor-pointer transition-colors",
              "has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-gold/60",
              dragging
                ? "border-gold bg-gold/10"
                : fileError
                  ? "border-red-500"
                  : "border-line-strong hover:border-gold hover:bg-gold/5",
            )}
          >
            <Upload className="size-6 text-gold-deep" strokeWidth={1.5} />
            <span className="text-[0.9rem] text-ink">
              <span className="text-gold-deep underline">PDF seç</span> ya da buraya sürükle
            </span>
            <span className="text-[0.75rem] text-ink-soft">
              Yalnızca PDF · en fazla 4 MB
            </span>
            <input
              ref={fileInputRef}
              type="file"
              accept="application/pdf,.pdf"
              className="sr-only"
              onChange={(e) => pickFile(e.target.files?.[0])}
            />
          </label>
        )}
        {fileError && <p className="mt-1.5 text-[0.78rem] text-red-600">{fileError}</p>}
      </div>

      <div>
        <label className="flex items-start gap-3 cursor-pointer">
          <input
            type="checkbox"
            {...register("consent")}
            className="size-4 mt-0.5 accent-gold"
          />
          <span className="text-[0.82rem] text-ink-muted">
            Kişisel verilerimin{" "}
            <Link href="/kvkk" className="text-gold-deep underline-grow">
              KVKK Aydınlatma Metni
            </Link>{" "}
            kapsamında, öğrenci programı başvurum için işlenmesini kabul
            ediyorum.
          </span>
        </label>
        {errors.consent?.message && (
          <p className="mt-1.5 text-[0.78rem] text-red-600">
            {errors.consent.message}
          </p>
        )}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="group w-full sm:w-auto inline-flex items-center justify-center gap-3 h-14 px-10 bg-ink hover:bg-gold text-on-dark hover:text-ink font-(family-name:--font-grotesk) font-bold uppercase tracking-[0.06em] text-[0.9rem] transition-colors disabled:opacity-60"
      >
        {isSubmitting ? (file ? "Dosya yükleniyor…" : "Gönderiliyor…") : "Atölye Gezisine Katıl"}
        <ArrowRight className="size-5 transition-transform group-hover:translate-x-1" />
      </button>
    </form>
  );
}

function Field({
  children,
  error,
}: {
  children: React.ReactNode;
  error?: string;
}) {
  return (
    <div>
      {children}
      {error && <p className="mt-1.5 text-[0.78rem] text-red-600">{error}</p>}
    </div>
  );
}
