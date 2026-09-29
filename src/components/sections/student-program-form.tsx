"use client";

import * as React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { ArrowRight, Check, PartyPopper } from "lucide-react";
import { toast } from "sonner";

import { Input, Textarea } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { trackLead } from "@/lib/tracking";
import { Link } from "@/i18n/navigation";

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

const schema = z.object({
  name: z.string().trim().min(2, "Adını ve soyadını yaz"),
  email: z.string().trim().email("Geçerli bir e-posta gir"),
  phone: z.string().trim().min(7, "Telefon numaran eksik görünüyor"),
  university: z.string().trim().min(2, "Üniversiteni yaz"),
  department: z.string().min(1, "Bölümünü seç"),
  grade: z.string().optional(),
  interests: z.array(z.string()).min(1, "En az bir başlık seç"),
  message: z.string().optional(),
  website: z.string().optional(),
  consent: z.boolean().refine((v) => v === true, "Devam etmek için onay gerekli"),
});

type Values = z.infer<typeof schema>;

const selectClass =
  "w-full bg-transparent text-ink py-3 border-0 border-b border-line-strong focus:outline-none focus:border-gold text-[0.95rem]";

export function StudentProgramForm() {
  const [sent, setSent] = React.useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<Values>({
    resolver: zodResolver(schema),
    defaultValues: {
      department: "",
      grade: "",
      interests: [studentInterests[0]],
      consent: false,
    },
  });

  const interests = watch("interests");

  function toggleInterest(value: string) {
    const next = interests.includes(value)
      ? interests.filter((i) => i !== value)
      : [...interests, value];
    setValue("interests", next, { shouldValidate: true });
  }

  async function onSubmit(values: Values) {
    try {
      const res = await fetch("/api/student-program", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...values,
          interests: values.interests.join(", "),
        }),
      });
      if (!res.ok) throw new Error();
      trackLead({ formName: "student-program", value: 10 });
      reset();
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
          <Input placeholder="Ad Soyad *" autoComplete="name" {...register("name")} />
        </Field>
        <Field error={errors.email?.message}>
          <Input
            type="email"
            placeholder="E-posta *"
            autoComplete="email"
            {...register("email")}
          />
        </Field>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <Field error={errors.phone?.message}>
          <Input
            type="tel"
            placeholder="Telefon *"
            autoComplete="tel"
            {...register("phone")}
          />
        </Field>
        <Field error={errors.university?.message}>
          <Input placeholder="Üniversite *" {...register("university")} />
        </Field>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <Field error={errors.department?.message}>
          <select {...register("department")} className={selectClass}>
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

      <Field>
        <Textarea
          rows={3}
          placeholder="Üzerinde çalıştığın proje ya da aklındaki fikir (opsiyonel)"
          {...register("message")}
        />
      </Field>

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
        {isSubmitting ? "Gönderiliyor…" : "Atölye Gezisine Katıl"}
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
