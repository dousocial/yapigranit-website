"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import { ArrowRight } from "lucide-react";
import { toast } from "sonner";

import { Container } from "@/components/ui/container";
import { Logo } from "@/components/brand/logo";
import { Input } from "@/components/ui/input";

export default function AdminLoginPage() {
  const router = useRouter();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [loading, setLoading] = React.useState(false);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });
      if (res?.error) {
        toast.error("Giriş başarısız. Bilgileri kontrol edin.");
      } else {
        router.push("/admin");
        router.refresh();
      }
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen flex flex-col bg-surface-darker text-on-dark">
      <header className="py-6 border-b border-line-dark">
        <Container size="wide">
          <Logo variant="light" />
        </Container>
      </header>

      <main className="flex-1 grid place-items-center px-6">
        <div className="w-full max-w-[400px] py-16">
          <p className="eyebrow text-gold">Yönetim Paneli</p>
          <h1 className="display-md mt-3 text-on-dark">Yapı Granit Admin</h1>
          <p className="mt-3 text-[0.92rem] text-on-dark-muted">
            İçerik yönetimi paneline erişmek için giriş yapın.
          </p>

          <form onSubmit={onSubmit} className="mt-10 space-y-6">
            <Input
              type="email"
              placeholder="E-posta"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="text-on-dark border-line-dark placeholder:text-on-dark-soft"
            />
            <Input
              type="password"
              placeholder="Parola"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="text-on-dark border-line-dark placeholder:text-on-dark-soft"
            />
            <button
              type="submit"
              disabled={loading}
              className="w-full inline-flex items-center justify-center gap-2 h-12 bg-gold hover:bg-gold-soft text-ink font-medium uppercase tracking-wider text-[0.78rem] transition-colors disabled:opacity-60"
            >
              {loading ? "Giriş yapılıyor..." : "Giriş Yap"}
              {!loading && <ArrowRight className="size-4" />}
            </button>
          </form>
        </div>
      </main>
    </div>
  );
}
