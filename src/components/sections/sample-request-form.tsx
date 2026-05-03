"use client";

import * as React from "react";
import { useLocale, useTranslations } from "next-intl";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { ArrowRight } from "lucide-react";
import { toast } from "sonner";

import { Input, Textarea } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { trackLead } from "@/lib/tracking";
import { Link } from "@/i18n/navigation";
import type { Locale } from "@/i18n/routing";

const materialOptionsLabels: Record<
  string,
  { tr: string; en: string; de: string }
> = {
  "mermer-classic": {
    tr: "Mermer (Klasik tonlar)",
    en: "Marble (Classic tones)",
    de: "Marmor (Klassische Töne)",
  },
  "mermer-modern": {
    tr: "Mermer (Modern / koyu)",
    en: "Marble (Modern / dark)",
    de: "Marmor (Modern / dunkel)",
  },
  "granit-light": {
    tr: "Granit (Açık tonlar)",
    en: "Granite (Light tones)",
    de: "Granit (Helle Töne)",
  },
  "granit-dark": {
    tr: "Granit (Koyu / siyah)",
    en: "Granite (Dark / black)",
    de: "Granit (Dunkel / schwarz)",
  },
  "porselen-statuario": {
    tr: "Porselen (Statuario / beyaz)",
    en: "Porcelain (Statuario / white)",
    de: "Porzellan (Statuario / weiß)",
  },
  "porselen-marquina": {
    tr: "Porselen (Marquina / siyah)",
    en: "Porcelain (Marquina / black)",
    de: "Porzellan (Marquina / schwarz)",
  },
  ozel: {
    tr: "Özel yüzey önerileri",
    en: "Custom surface suggestions",
    de: "Maßgeschneiderte Oberflächen",
  },
};

const projectTypesLabels: { tr: string; en: string; de: string }[] = [
  { tr: "Konut Projesi", en: "Residential", de: "Wohnprojekt" },
  { tr: "Villa", en: "Villa", de: "Villa" },
  { tr: "Otel", en: "Hotel", de: "Hotel" },
  { tr: "Ticari Yapı", en: "Commercial Building", de: "Gewerbebau" },
  {
    tr: "Restoran / Kafe",
    en: "Restaurant / Café",
    de: "Restaurant / Café",
  },
  { tr: "Diğer", en: "Other", de: "Sonstiges" },
];

export function SampleRequestForm() {
  const t = useTranslations("Forms");
  const locale = useLocale() as Locale;

  const materialOptions = React.useMemo(
    () =>
      Object.entries(materialOptionsLabels).map(([value, labels]) => ({
        value,
        label: labels[locale] ?? labels.tr,
      })),
    [locale],
  );

  const projectTypes = React.useMemo(
    () => projectTypesLabels.map((p) => p[locale] ?? p.tr),
    [locale],
  );

  const schema = React.useMemo(
    () =>
      z.object({
        customerType: z.enum(["bireysel", "kurumsal"]),
        companyName: z.string().optional(),
        name: z.string().min(2, t("errorNameRequired")),
        email: z.string().email(t("errorEmail")),
        phone: z.string().min(7, t("errorPhoneShort")),
        address: z.string().min(10, t("errorAddress")),
        city: z.string().min(2, t("errorCity")),
        projectType: z.string().min(1, t("errorProjectType")),
        materials: z.array(z.string()).min(1, t("errorMaterialMin")),
        notes: z.string().optional(),
        consent: z.boolean().refine((v) => v === true, t("errorKvkkShort")),
      }),
    [t],
  );

  type Values = z.infer<typeof schema>;

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
        body: JSON.stringify({
          ...values,
          materials: values.materials.join(","),
        }),
      });
      if (!res.ok) throw new Error();
      trackLead({ formName: "sample-request", value: 50 });
      toast.success(t("successSample"));
      reset();
    } catch {
      toast.error(t("errorSample"));
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-7">
      <div>
        <p className="text-[0.78rem] uppercase tracking-[0.18em] text-ink-soft mb-3">
          {t("labelCustomerType")}
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
              {type === "kurumsal" ? t("labelCorporate") : t("labelIndividual")}
            </label>
          ))}
        </div>
      </div>

      {customerType === "kurumsal" && (
        <Field>
          <Input placeholder={t("labelCompanyName")} {...register("companyName")} />
        </Field>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <Field error={errors.name?.message}>
          <Input placeholder={`${t("labelFullName")} *`} {...register("name")} />
        </Field>
        <Field error={errors.email?.message}>
          <Input
            type="email"
            placeholder={`${t("labelEmail")} *`}
            {...register("email")}
          />
        </Field>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <Field error={errors.phone?.message}>
          <Input
            type="tel"
            placeholder={`${t("labelPhone")} *`}
            {...register("phone")}
          />
        </Field>
        <Field error={errors.city?.message}>
          <Input placeholder={`${t("labelCity")} *`} {...register("city")} />
        </Field>
      </div>

      <Field error={errors.address?.message}>
        <Textarea
          rows={2}
          placeholder={`${t("labelAddress")} *`}
          {...register("address")}
        />
      </Field>

      <Field error={errors.projectType?.message}>
        <select
          {...register("projectType")}
          className="w-full bg-transparent text-ink py-3 border-0 border-b border-line-strong focus:outline-none focus:border-gold text-[0.95rem]"
        >
          <option value="">{`${t("labelProjectType")} *`}</option>
          {projectTypes.map((label) => (
            <option key={label} value={label}>
              {label}
            </option>
          ))}
        </select>
      </Field>

      <div>
        <p className="text-[0.78rem] uppercase tracking-[0.18em] text-ink-soft mb-3">
          {t("labelMaterialPrefs")} *
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
          placeholder={t("labelExtraNotes")}
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
            {t("labelKvkk")}{" "}
            <Link href="/kvkk" className="text-gold-deep underline-grow">
              {t("labelKvkkLink")}
            </Link>{" "}
            {t("labelKvkkSuffix")}
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
        {isSubmitting ? t("buttonSending") : t("buttonRequestSample")}
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
