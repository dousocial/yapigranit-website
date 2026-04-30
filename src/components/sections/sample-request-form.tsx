"use client";

import * as React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { ArrowRight } from "lucide-react";
import { toast } from "sonner";

import { Input, Textarea } from "@/components/ui/input";
import { cn } from "@/lib/utils";

const materialOptions = [
  { value: "mermer-classic", label: "Mermer (Klasik tonlar)" },
  { value: "mermer-modern", label: "Mermer (Modern / koyu)" },
  { value: "granit-light", label: "Granit (Açık tonlar)" },
  { value: "granit-dark", label: "Granit (Koyu / siyah)" },
  { value: "porselen-statuario", label: "Porselen (Statuario / beyaz)" },
  { value: "porselen-marquina", label: "Porselen (Marquina / siyah)" },
  { value: "ozel", label: "Özel yüzey önerileri" },
];

const projectTypes = [
  "Konut Projesi",
  "Villa",
  "Otel",
  "Ticari Yapı",
  "Restoran / Kafe",
  "Diğer",
];

const schema = z.object({
  customerType: z.enum(["bireysel", "kurumsal"]),
  companyName: z.string().optional(),
  name: z.string().min(2, "Ad soyad gerekli."),
  email: z.string().email("Geçerli bir e-posta girin."),
  phone: z.string().min(7, "Telefon gerekli."),
  address: z.string().min(10, "Tam adres gerekli."),
  city: z.string().min(2, "Şehir gerekli."),
  projectType: z.string().min(1, "Proje tipi seçin."),
  materials: z
    .array(z.string())
    .min(1, "En az bir malzeme seçin."),
  notes: z.string().optional(),
  consent: z
    .boolean()
    .refine((v) => v === true, "Aydınlatma metnini onaylayın."),
});

type Values = z.infer<typeof schema>;

export function SampleRequestForm() {
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
      customerType: "kurumsal",
      materials: [],
      consent: false,
    },
  });

  const customerType = watch("customerType");
  const materials = watch("materials");

  function toggleMaterial(value: string) {
    const next = materials.includes(value)
      ? materials.filter((m) => m !== value)
      : [...materials, value];
    setValue("materials", next, { shouldValidate: true });
  }

  async function onSubmit(values: Values) {
    try {
      const res = await fetch("/api/sample-request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...values, materials: values.materials.join(",") }),
      });
      if (!res.ok) throw new Error();
      toast.success(
        "Numune talebiniz alındı. 2-3 iş günü içinde kargolayacağız.",
      );
      reset();
    } catch {
      toast.error("Talebiniz iletilemedi. Lütfen tekrar deneyin.");
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-7">
      <div>
        <p className="text-[0.78rem] uppercase tracking-[0.18em] text-ink-soft mb-3">
          Müşteri Tipi
        </p>
        <div className="grid grid-cols-2 gap-3">
          {(["kurumsal", "bireysel"] as const).map((type) => (
            <label
              key={type}
              className={cn(
                "flex items-center justify-center gap-2 h-12 border cursor-pointer text-[0.85rem] font-medium transition-all",
                customerType === type
                  ? "border-gold bg-gold/10 text-ink"
                  : "border-line text-ink-muted hover:border-line-strong",
              )}
            >
              <input
                type="radio"
                value={type}
                {...register("customerType")}
                className="sr-only"
              />
              {type === "kurumsal" ? "Mimar / Müteahhit / Firma" : "Bireysel"}
            </label>
          ))}
        </div>
      </div>

      {customerType === "kurumsal" && (
        <Field>
          <Input placeholder="Firma Adı" {...register("companyName")} />
        </Field>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <Field error={errors.name?.message}>
          <Input placeholder="Ad Soyad *" {...register("name")} />
        </Field>
        <Field error={errors.email?.message}>
          <Input type="email" placeholder="E-posta *" {...register("email")} />
        </Field>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <Field error={errors.phone?.message}>
          <Input type="tel" placeholder="Telefon *" {...register("phone")} />
        </Field>
        <Field error={errors.city?.message}>
          <Input placeholder="Şehir *" {...register("city")} />
        </Field>
      </div>

      <Field error={errors.address?.message}>
        <Textarea
          rows={2}
          placeholder="Numune kargolanacak tam adres *"
          {...register("address")}
        />
      </Field>

      <Field error={errors.projectType?.message}>
        <select
          {...register("projectType")}
          className="w-full bg-transparent text-ink py-3 border-0 border-b border-line-strong focus:outline-none focus:border-gold text-[0.95rem]"
        >
          <option value="">Proje Tipi *</option>
          {projectTypes.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
      </Field>

      <div>
        <p className="text-[0.78rem] uppercase tracking-[0.18em] text-ink-soft mb-3">
          Numune Tercihleri *
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {materialOptions.map((m) => {
            const checked = materials.includes(m.value);
            return (
              <label
                key={m.value}
                className={cn(
                  "flex items-center gap-3 px-4 py-3 border cursor-pointer text-[0.88rem] transition-colors",
                  checked
                    ? "border-gold bg-gold/10 text-ink"
                    : "border-line text-ink-muted hover:border-line-strong",
                )}
              >
                <input
                  type="checkbox"
                  checked={checked}
                  onChange={() => toggleMaterial(m.value)}
                  className="size-4 accent-gold"
                />
                {m.label}
              </label>
            );
          })}
        </div>
        {errors.materials?.message && (
          <p className="mt-1.5 text-[0.78rem] text-red-600">
            {errors.materials.message as string}
          </p>
        )}
      </div>

      <Field>
        <Textarea
          rows={3}
          placeholder="Eklemek istediğiniz notlar..."
          {...register("notes")}
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
            Kişisel verilerin işlenmesine ilişkin{" "}
            <a href="/kvkk" className="text-gold-deep underline-grow">
              aydınlatma metnini
            </a>{" "}
            okudum.
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
        className="inline-flex items-center justify-center gap-2 h-13 px-10 bg-gold hover:bg-gold-soft text-ink font-medium uppercase tracking-wider text-[0.78rem] transition-colors disabled:opacity-60"
      >
        {isSubmitting ? "Gönderiliyor..." : "Numune Talep Et"}
        <ArrowRight className="size-4" />
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
