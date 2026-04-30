"use client";

import * as React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { ArrowRight, ChevronDown } from "lucide-react";
import { toast } from "sonner";

import { Input, Textarea } from "@/components/ui/input";
import { cn } from "@/lib/utils";

const subjects = [
  { value: "teklif", label: "Teklif Talebi" },
  { value: "mimar-muteahhit", label: "Mimar / Müteahhit Projesi" },
  { value: "mutfak-tezgahi", label: "Mutfak Tezgâhı" },
  { value: "banyo-zemin", label: "Banyo / Zemin Uygulaması" },
  { value: "cephe", label: "Cephe Kaplama" },
  { value: "numune", label: "Ürün / Numune Talebi" },
  { value: "satis-sonrasi", label: "Satış Sonrası Destek" },
  { value: "diger", label: "Diğer" },
] as const;

const contactSchema = z.object({
  name: z.string().min(2, "Lütfen adınızı girin."),
  email: z.string().email("Geçerli bir e-posta adresi girin."),
  phone: z.string().min(7, "Size ulaşabilmemiz için telefon numaranızı girin."),
  subject: z.string().min(1, "Bir konu seçin."),
  message: z.string().min(10, "Mesajınız çok kısa."),
  consent: z
    .boolean()
    .refine(
      (v) => v === true,
      "Devam etmek için aydınlatma metnini onaylamalısınız.",
    ),
});

type ContactValues = z.infer<typeof contactSchema>;

export function ContactForm({ className }: { className?: string }) {
  const [subjectOpen, setSubjectOpen] = React.useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
      consent: false,
    },
  });

  const subject = watch("subject");

  async function onSubmit(values: ContactValues) {
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (!res.ok) throw new Error();
      toast.success("Mesajınız iletildi. En kısa sürede dönüş yapacağız.");
      reset();
    } catch {
      toast.error("Mesaj gönderilemedi. Lütfen tekrar deneyin.");
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={cn("space-y-5", className)} noValidate>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <Field error={errors.name?.message}>
          <Input
            placeholder="Adınız Soyadınız *"
            {...register("name")}
          />
        </Field>
        <Field error={errors.email?.message}>
          <Input
            type="email"
            placeholder="E-posta Adresiniz *"
            {...register("email")}
          />
        </Field>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <Field error={errors.phone?.message}>
          <Input
            type="tel"
            placeholder="Telefon Numaranız *"
            {...register("phone")}
          />
        </Field>
        <Field error={errors.subject?.message}>
          <div className="relative">
            <button
              type="button"
              onClick={() => setSubjectOpen((s) => !s)}
              onBlur={() => setTimeout(() => setSubjectOpen(false), 120)}
              className={cn(
                "w-full flex items-center justify-between py-3 border-0 border-b border-line-strong text-[0.95rem] focus:outline-none focus:border-gold transition-colors",
                subject ? "text-ink" : "text-ink-soft",
              )}
            >
              {subject
                ? subjects.find((s) => s.value === subject)?.label
                : "Konu *"}
              <ChevronDown className="size-4 text-ink-soft" />
            </button>
            {subjectOpen && (
              <div className="absolute left-0 right-0 top-full mt-1 bg-surface border border-line shadow-md z-10 max-h-[260px] overflow-y-auto">
                {subjects.map((s) => (
                  <button
                    key={s.value}
                    type="button"
                    onClick={() => {
                      setValue("subject", s.value, { shouldValidate: true });
                      setSubjectOpen(false);
                    }}
                    className="block w-full text-left px-4 py-2.5 text-[0.85rem] text-ink hover:bg-surface-muted"
                  >
                    {s.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        </Field>
      </div>

      <Field error={errors.message?.message}>
        <Textarea placeholder="Mesajınız *" rows={4} {...register("message")} />
      </Field>

      <div>
        <label className="flex items-start gap-3 cursor-pointer group">
          <input
            type="checkbox"
            {...register("consent")}
            className="size-4 mt-0.5 accent-gold border-line-strong"
          />
          <span className="text-[0.82rem] text-ink-muted group-hover:text-ink transition-colors">
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
        className="inline-flex items-center justify-center gap-2 h-13 px-8 bg-gold hover:bg-gold-soft text-ink font-medium uppercase tracking-wider text-[0.78rem] transition-colors disabled:opacity-60"
      >
        {isSubmitting ? "Gönderiliyor..." : "Mesaj Gönder"}
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
