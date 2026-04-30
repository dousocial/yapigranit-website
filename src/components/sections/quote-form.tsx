"use client";

import * as React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { ArrowRight, ChevronDown, Upload, X, FileText } from "lucide-react";
import { toast } from "sonner";

import { Input, Textarea } from "@/components/ui/input";
import { cn } from "@/lib/utils";

const projectTypes = [
  { value: "konut", label: "Konut Projesi" },
  { value: "villa", label: "Villa" },
  { value: "otel", label: "Otel" },
  { value: "ticari", label: "Ticari Yapı" },
  { value: "kamusal", label: "Kamusal Yapı" },
  { value: "restoran", label: "Restoran / Kafe" },
  { value: "diger", label: "Diğer" },
];

const applicationAreas = [
  { value: "mutfak-tezgahi", label: "Mutfak Tezgahı" },
  { value: "banyo", label: "Banyo Uygulamaları" },
  { value: "zemin", label: "Zemin Kaplama" },
  { value: "cephe", label: "Cephe Kaplama" },
  { value: "merdiven", label: "Merdiven & Basamak" },
  { value: "ozel-yuzey", label: "Özel Yüzey Çözümü" },
  { value: "diger", label: "Diğer" },
];

const materials = [
  { value: "mermer", label: "Mermer" },
  { value: "granit", label: "Granit" },
  { value: "porselen", label: "Porselen" },
  { value: "ozel-yuzey", label: "Özel Yüzey" },
  { value: "kararsizim", label: "Kararsızım, danışmak istiyorum" },
];

const quoteSchema = z.object({
  customerType: z.enum(["bireysel", "kurumsal"]),
  companyName: z.string().optional(),
  name: z.string().min(2, "Ad soyad gerekli."),
  email: z.string().email("Geçerli bir e-posta girin."),
  phone: z.string().min(7, "Telefon numarası gerekli."),
  city: z.string().min(2, "Şehir gerekli."),
  projectType: z.string().min(1, "Proje tipi seçin."),
  applicationArea: z.string().min(1, "Uygulama alanı seçin."),
  material: z.string().min(1, "Malzeme tercihinizi seçin."),
  area: z.string().optional(),
  deadline: z.string().optional(),
  message: z.string().optional(),
  consent: z
    .boolean()
    .refine((v) => v === true, "Aydınlatma metnini onaylayın."),
});

type QuoteValues = z.infer<typeof quoteSchema>;

export function QuoteForm() {
  const [files, setFiles] = React.useState<File[]>([]);
  const inputRef = React.useRef<HTMLInputElement>(null);

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
      toast.error("Bazı dosyalar 10 MB sınırını aşıyor.");
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
      toast.success("Teklif talebiniz alındı. En kısa sürede dönüş yapacağız.");
      reset();
      setFiles([]);
    } catch {
      toast.error("Talebiniz iletilemedi. Lütfen tekrar deneyin.");
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-7">
      {/* Customer type */}
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
        <Field error={errors.companyName?.message}>
          <Input placeholder="Firma Adı" {...register("companyName")} />
        </Field>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <Field error={errors.name?.message}>
          <Input placeholder="Ad Soyad *" {...register("name")} />
        </Field>
        <Field error={errors.email?.message}>
          <Input
            type="email"
            placeholder="E-posta *"
            {...register("email")}
          />
        </Field>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <Field error={errors.phone?.message}>
          <Input
            type="tel"
            placeholder="Telefon *"
            {...register("phone")}
          />
        </Field>
        <Field error={errors.city?.message}>
          <Input placeholder="Şehir / Lokasyon *" {...register("city")} />
        </Field>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <Field error={errors.projectType?.message}>
          <SelectField
            placeholder="Proje Tipi *"
            value={projectType}
            options={projectTypes}
            onChange={(v) => setValue("projectType", v, { shouldValidate: true })}
          />
        </Field>
        <Field error={errors.applicationArea?.message}>
          <SelectField
            placeholder="Uygulama Alanı *"
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
            placeholder="Malzeme Tercihi *"
            value={material}
            options={materials}
            onChange={(v) => setValue("material", v, { shouldValidate: true })}
          />
        </Field>
        <Field>
          <Input placeholder="Yaklaşık Metraj (m²)" {...register("area")} />
        </Field>
      </div>

      <Field>
        <Input
          type="text"
          placeholder="İstenen Teslim Tarihi"
          {...register("deadline")}
        />
      </Field>

      <Field>
        <Textarea
          placeholder="Proje hakkında kısa not, özel istekler..."
          rows={3}
          {...register("message")}
        />
      </Field>

      {/* File upload */}
      <div>
        <p className="text-[0.78rem] uppercase tracking-[0.18em] text-ink-soft mb-3">
          Proje Dosyaları (DWG, PDF, görsel)
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
            Dosyaları sürükleyip bırakın veya{" "}
            <span className="text-gold-deep underline-grow">seçin</span>
          </p>
          <p className="text-[0.72rem] text-ink-soft mt-1">
            Maks. 5 dosya, dosya başına 10 MB
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
        {isSubmitting ? "Gönderiliyor..." : "Teklif Talep Et"}
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

function SelectField({ placeholder, value, options, onChange }: SelectFieldProps) {
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
