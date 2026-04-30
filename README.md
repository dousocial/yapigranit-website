# Yapı Granit — Kurumsal Web Sitesi

Doğal taş, mermer, granit ve porselen yüzey çözümleri sunan Yapı Granit'in B2B
satış odaklı kurumsal web sitesi. Mimar, müteahhit, yapı firmaları ve son
kullanıcılar için tasarlanmış premium dijital deneyim.

## Teknoloji Stack

- **Next.js 16** (App Router, Server Components)
- **TypeScript 5** + strict mode
- **Tailwind CSS 4** + custom design tokens
- **Motion (Framer Motion)** — animasyonlar ve scroll efektleri
- **shadcn/ui pattern** — Radix UI primitives (Dialog, Dropdown, Accordion vb.)
- **Embla Carousel** — proje vitrini
- **React Hook Form + Zod** — form validasyonu
- **Prisma 7 + better-sqlite3** — veritabanı (dev: SQLite, prod: PostgreSQL'e geçirilebilir)
- **NextAuth v5 (Auth.js)** — admin paneli kimlik doğrulama
- **Resend** — e-posta gönderimi (opsiyonel; key set edilmezse log'lar)
- **Lucide Icons** — ikonografi
- **Sonner** — toast bildirimleri

## Klasör Yapısı

```
src/
├── app/
│   ├── (marketing)/        — Public sayfalar (header + footer + floating actions)
│   │   ├── page.tsx        — Anasayfa
│   │   ├── kurumsal/       — Kurumsal
│   │   ├── urunler/        — Ürünler index + [slug]
│   │   ├── hizmetler/      — Hizmetler index + [slug]
│   │   ├── projeler/       — Projeler index + [slug] (filter + galeri)
│   │   ├── blog/           — Blog index + [slug] (filter + arama + sıralama)
│   │   ├── iletisim/       — İletişim formu + harita
│   │   ├── teklif/         — B2B teklif formu (dosya upload dahil)
│   │   ├── kvkk/, gizlilik/, kullanim-sartlari/
│   ├── admin/              — Yönetim paneli (NextAuth korumalı)
│   │   ├── login/, page.tsx, projeler/, blog/, teklifler/, iletisim/, abone/
│   ├── api/
│   │   ├── auth/[...nextauth]/, contact/, newsletter/, quote/
│   │   └── admin/projects/, admin/blog/
│   ├── layout.tsx          — Root layout + metadata + JSON-LD
│   ├── globals.css         — Design tokens + utilities
│   ├── sitemap.ts, robots.ts
├── components/
│   ├── brand/logo.tsx
│   ├── layout/header.tsx, footer.tsx, floating-actions.tsx
│   ├── sections/           — Hero, ProductsGrid, B2BSolutions, Timeline, ProjectsGallery, BlogList, ContactForm, QuoteForm, CtaBand, NewsletterBand, vb.
│   ├── ui/                 — Button, Container, Input, Eyebrow, Reveal, Counter
│   ├── seo/structured-data.tsx
│   └── admin/data-table.tsx, project-form.tsx, blog-form.tsx
├── lib/
│   ├── data/               — Mock veri (products, projects, services, blog, b2b, stats)
│   ├── prisma.ts, auth.ts, auth.config.ts, email.ts, site.ts, utils.ts
└── middleware.ts
prisma/
├── schema.prisma           — User, Project, BlogPost, Quote, ContactMessage, NewsletterSubscriber
├── dev.db                  — SQLite dev veritabanı
```

## Geliştirme

```bash
npm install
npm run dev
```

Site `http://localhost:3000` adresinde açılır.

## Veritabanı

```bash
npx prisma db push       # şemayı veritabanına uygula
npx prisma generate      # client'ı yeniden üret
npx prisma studio        # web tabanlı veritabanı yöneticisi
```

## Admin Paneli

`/admin/login` adresinden giriş yapın. İlk girişte `.env.local` içindeki
`ADMIN_EMAIL` ve `ADMIN_PASSWORD` ile otomatik admin kullanıcısı oluşturulur.

Varsayılan:
- Email: `admin@yapigranit.com.tr`
- Parola: `changeme123`

> **Production'a geçmeden önce mutlaka `.env.local` içindeki AUTH_SECRET ve
> ADMIN_PASSWORD değerlerini değiştirin.**

Admin modülleri:
- **Projeler** — listele, yeni ekle, düzenle/sil
- **Blog** — listele, yeni ekle, düzenle/sil
- **Teklifler** — gelen teklif taleplerini görüntüle
- **İletişim** — gelen mesajları görüntüle
- **Bülten** — abone listesini görüntüle

## E-posta

Resend API key'i `.env.local` dosyasında `RESEND_API_KEY` olarak ayarlanırsa,
form gönderimleri otomatik olarak e-posta ile iletilir. Key yoksa form yine
çalışır, sadece konsola log düşer.

## SEO Altyapısı

- `sitemap.xml` ve `robots.txt` otomatik üretilir.
- Schema.org JSON-LD: Organization, LocalBusiness (HomeAndConstructionBusiness), Breadcrumb.
- Tüm sayfalarda dinamik OpenGraph ve Twitter card metadataları.
- Türkçe karakter destekli SEO uyumlu URL slug'ları.

## Görseller

Şu an Unsplash'ten yer tutucu görseller kullanılıyor. Gerçek proje, ürün ve
hizmet görselleri eklendikçe `/public/images/` altına yüklenip
`src/lib/data/*.ts` dosyalarındaki URL'ler güncellenmeli.

## Yapım Sırası — Tamamlanan Fazlar

✅ **Faz 1 — Foundation:** Next.js + Tailwind + shadcn pattern + design tokens (renk, font, spacing).

✅ **Faz 2 — Public sayfalar:**
- Anasayfa (Hero, ürün grupları, B2B çözümleri, proje carousel, istatistik bandı, CTA)
- Kurumsal (parallax hero, hakkımızda, istatistik, **interaktif timeline**, değerler, alt CTA)
- Hizmetler (8 hizmet kartı, "Neden Yapı Granit", alt CTA)
- Projeler (filtreleme: kategori + yıl, grid + CTA kart)
- Blog (filtreleme + arama + sıralama, bülten bandı)
- İletişim (4 bilgi kartı, form, harita iframe, güven bandı)
- Teklif (B2B form: müşteri tipi, proje detayları, dosya upload, KVKK)
- Yasal sayfalar: KVKK, Gizlilik, Kullanım Şartları

✅ **Faz 3 — Detay sayfaları:** Ürün detay, proje detay, hizmet detay, blog detay (paylaşım butonları, ilgili yazılar).

✅ **Faz 4 — Admin Panel + CMS:** NextAuth auth, dashboard, proje/blog CRUD, teklif/mesaj/abone listeleme.

✅ **Faz 5 — SEO + API:** sitemap, robots, JSON-LD, contact/newsletter/quote API'ları.

## Sırada (faz 6+)

- 🔲 Gerçek görsellerin entegrasyonu (Unsplash → public/images)
- 🔲 next-intl ile çoklu dil (TR/EN/DE)
- 🔲 Lighthouse 90+ doğrulaması (statik dışa aktarım, image preconnect, kritik CSS)
- 🔲 Google Analytics 4 + Meta Pixel + GTM entegrasyonu
- 🔲 Numune talep modülü, teklif hesaplayıcı (kapsamı genişletilirse)
- 🔲 Admin'de proje/blog düzenleme ve silme aksiyonları (CRUD'un U/D parçaları)
- 🔲 Production veritabanı (PostgreSQL) ve deploy
