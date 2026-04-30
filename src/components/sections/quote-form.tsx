"use client";

import * as React from "react";
import { useTranslations } from "next-intl";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { ArrowRight, ChevronDown, Upload, X, FileText } from "lucide-react";
import { toast } from "sonner";

import { Input, Textarea } from "@/components/ui/input";
import { cn } from "@/lib/utils";

// project type values + EN/DE/TR labels via simple lookup
const projectTypeLabels: Record<
  string,
  { tr: string; en: string; de: string }
> = {
  konut: { tr: "Konut Projesi", en: "Residential", de: "Wohnprojekt" },
  villa: { tr: "Villa", en: "Villa", de: "Villa" },
  otel: { tr: "Otel", en: "Hotel", de: "Hotel" },
  ticari: { tr: "Ticari Yapı", en: "Commercial Building", de: "Gewerbebau" },
  kamusal: {
    tr: "Kamusal Yapı",
    en: "Public Building",
    de: "Öffentliches Gebäude",
  },
  restoran: {
    tr: "Restoran / Kafe",
    en: "Restaurant / Café",
    de: "Restaurant / Café",
  },
  diger: { tr: "Diğer", en: "Other", de: "Sonstiges" },
};

const applicationAreaLabels: Record<
  string,
  { tr: string; en: string; de: string }
> = {
  "mutfak-tezgahi": {
    tr: "Mutfak Tezgahı",
    en: "Kitchen Countertop",
    de: "Küchenarbeitsplatte",
  },
  banyo: { tr: "Banyo Uygulamaları", en: "Bathroom", de: "Bad" },
  zemin: { tr: "Zemin Kaplama", en: "Floor Cladding", de: "Bodenbelag" },
  cephe: {
    tr: "Cephe Kaplama",
    en: "Façade Cladding",
    de: "Fassadenverkleidung",
  },
  merdiven: {
    tr: "Merdiven & Basamak",
    en: "Stairs & Steps",
    de: "Treppen & Stufen",
  },
  "ozel-yuzey": {
    tr: "Özel Yüzey Çözümü",
    en: "Special Surface",
    de: "Spezialoberfläche",
  },
  diger: { tr: "Diğer", en: "Other", de: "Sonstiges" },
};

const materialLabels: Record<string, { tr: string; en: string; de: string }> = {
  mermer: { tr: "Mermer", en: "Marble", de: "Marmor" },
  granit: { tr: "Granit", en: "Granite", de: "Granit" },
  porselen: { tr: "Porselen", en: "Porcelain", de: "Porzellan" },
  "ozel-yuzey": {
    tr: "Özel Yüzey",
    en: "Special Surface",
    de: "Spezialoberfläche",
  },
  kararsizim: {
    tr: "Kararsızım, danışmak istiyorum",
    en: "Undecided, I'd like advice",
    de: "Unentschlossen, ich möchte Beratung",
  },
};

import { useLocale } from "next-intl";
import type { Locale } from "@/i18n/routing";

export function QuoteForm() {
  const t = useTranslations("Forms");
  const locale = useLocale() as Locale;
  const [files, setFiles] = React.useState<File[]>([]);
  const inputRef = React.useRef<HTMLInputElement>(null);

  const projectTypes = React.useMemo(
    () =>
      Object.entries(projectTypeLabels).map(([value, labels]) => ({
        value,
        label: labels[locale] ?? labels.tr,
      })),
    [locale],
  );

  const applicationAreas = React.useMemo(
    () =>
      Object.entries(applicationAreaLabels).map(([value, labels]) => ({
        value,
        label: labels[locale] ?? labels.tr,
      })),
    [locale],
  );

  const materials = React.useMemo(
    () =>
      Object.entries(materialLabels).map(([value, labels]) => ({
        value,
        label: labels[locale] ?? labels.tr,
      })),
    [locale],
  );

  const quoteSchema = React.useMemo(
    () =>
      z.object({
        customerType: z.enum(["bireysel", "kurumsal"]),
        companyName: z.string().optional(),
        name: z.string().min(2, t("errorNameRequired")),
        email: z.string().email(t("errorEmail")),
        phone: z.string().min(7, t("errorPhoneRequired")),
        city: z.string().min(2, t("errorCity")),
        projectType: z.string().min(1, t("errorProjectType")),
        applicationArea: z.string().min(1, t("errorApplicationArea")),
        material: z.string().min(1, t("errorMaterial")),
        area: z.string().optional(),
        deadline: z.string().optional(),
        message: z.string().optional(),
        consent: z.boolean().refine((v) => v === true, t("errorKvkkShort")),
      }),
    [t],
  );

  type QuoteValues = z.infer<typeof quoteSchema>;

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<QuoteValues>({
    resolver: zodResolver(quoteSchema),
    defaultValues: {
      customerType: "kurumsal",
      consent: false,
    },
  });

  const customerType = watch("customerType");
  const projectType = watch("projectType");
  const applicationArea = watch("applicationArea");
  const material = watch("material");

  function handleFiles(list: FileList | null) {
    if (!list) return;
    const newFiles = Array.from(list).filter(
      (f) => f.size <= 10 * 1024 * 1024,
    );
    if (newFiles.length !== list.length) {
      toast.error(t("uploadSizeError"));
    }
    setFiles((prev) => [...prev, ...newFiles].slice(0, 5));
  }

  async function onSubmit(values: QuoteValues) {
    try {
      const formData = new FormData();
      Object.entries(values).forEach(([k, v]) => {
        formData.append(k, String(v));
      });
      files.forEach((f) => formData.append("files", f));

      const res = await fetch("/api/quote", {
        method: "POST",
        body: formData,
      });
      if (!res.ok) throw new Error();
      toast.success(t("successQuote"));
      reset();
      setFiles([]);
    } catch {
      toast.error(t("errorQuote"));
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-7">
      {/* Customer type */}
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
        <Field error={errors.companyName?.message}>
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

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <Field error={errors.projectType?.message}>
          <SelectField
            placeholder={`${t("labelProjectType")} *`}
            value={projectType}
            options={projectTypes}
            onChange={(v) => setValue("projectType", v, { shouldValidate: true })}
          />
        </Field>
        <Field error={errors.applicationArea?.message}>
          <SelectField
            placeholder={`${t("labelApplicationArea")} *`}
            value={applicationArea}
            options={applicationAreas}
            onChange={(v) =>
              setValue("applicationArea", v, { shouldValidate: true })
            }
          />
        </Field>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <Field error={errors.material?.message}>
          <SelectField
            placeholder={`${t("labelMaterial")} *`}
            value={material}
            options={materials}
            onChange={(v) => setValue("material", v, { shouldValidate: true })}
          />
        </Field>
        <Field>
          <Input placeholder={t("labelArea")} {...register("area")} />
        </Field>
      </div>

      <Field>
        <Input
          type="text"
          placeholder={t("labelDeadline")}
          {...register("deadline")}
        />
      </Field>

      <Field>
        <Textarea
          placeholder={t("labelNotes")}
          rows={3}
          {...register("message")}
        />
      </Field>

      {/* File upload */}
      <div>
        <p className="text-[0.78rem] uppercase tracking-[0.18em] text-ink-soft mb-3">
          {t("uploadCategory")}
        </p>
        <div
          onClick={() => inputRef.current?.click()}
          onDragOver={(e) => e.preventDefault()}
          onDrop={(e) => {
            e.preventDefault();
            handleFiles(e.dataTransfer.files);
          }}
          className="border border-dashed border-line-strong p-6 text-center cursor-pointer hover:border-gold hover:bg-surface-muted/40 transition-colors"
        >
          <Upload className="size-6 text-ink-soft mx-auto mb-2" />
          <p className="text-[0.85rem] text-ink-muted">
            {t("uploadHint")}{" "}
            <span className="text-gold-deep underline-grow">
              {t("uploadAction")}
            </span>
          </p>
          <p className="text-[0.72rem] text-ink-soft mt-1">
            {t("uploadLimits")}
          </p>
          <input
            ref={inputRef}
            type="file"
            multiple
            accept=".pdf,.jpg,.jpeg,.png,.dwg,.dxf"
            onChange={(e) => handleFiles(e.target.files)}
            className="hidden"
          />
        </div>

        {files.length > 0 && (
          <ul className="mt-3 space-y-1.5">
            {files.map((f, i) => (
              <li
                key={i}
                className="flex items-center gap-2 text-[0.82rem] text-ink-muted"
              >
                <FileText className="size-3.5 text-gold-deep" />
                <span className="flex-1 truncate">{f.name}</span>
                <span className="text-ink-soft">
                  {(f.size / 1024 / 1024).toFixed(1)} MB
                </span>
                <button
                  type="button"
                  onClick={() =>
                    setFiles((prev) => prev.filter((_, idx) => idx !== i))
                  }
                  className="text-ink-soft hover:text-ink"
                >
                  <X className="size-3.5" />
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div>
        <label className="flex items-start gap-3 cursor-pointer group">
          <input
            type="checkbox"
            {...register("consent")}
            className="size-4 mt-0.5 accent-gold"
          />
          <span className="text-[0.82rem] text-ink-muted group-hover:text-ink">
            {t("labelKvkk")}{" "}
            <a href="/kvkk" className="text-gold-deep underline-grow">
              {t("labelKvkkLink")}
            </a>{" "}
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
        {isSubmitting ? t("buttonSending") : t("buttonRequestQuote")}
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

interface SelectFieldProps {
  placeholder: string;
  value: string | undefined;
  options: { value: string; label: string }[];
  onChange: (value: string) => void;
}

function SelectField({
  placeholder,
  value,
  options,
  onChange,
}: SelectFieldProps) {
  const [open, setOpen] = React.useState(false);
  const selected = options.find((o) => o.value === value);

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setOpen((s) => !s)}
        onBlur={() => setTimeout(() => setOpen(false), 120)}
        className={cn(
          "w-full flex items-center justify-between py-3 border-0 border-b border-line-strong text-[0.95rem] focus:outline-none focus:border-gold transition-colors",
          value ? "text-ink" : "text-ink-soft",
        )}
      >
        {selected ? selected.label : placeholder}
        <ChevronDown className="size-4 text-ink-soft" />
      </button>
      {open && (
        <div className="absolute left-0 right-0 top-full mt-1 bg-surface border border-line shadow-md z-10 max-h-[260px] overflow-y-auto">
          {options.map((o) => (
            <button
              key={o.value}
              type="button"
              onClick={() => {
                onChange(o.value);
                setOpen(false);
              }}
              className="block w-full text-left px-4 py-2.5 text-[0.85rem] text-ink hover:bg-surface-muted"
            >
              {o.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
