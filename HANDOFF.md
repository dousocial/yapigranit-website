# Yapı Granit Web — Geliştirme Devir Notları

> Bu doküman, proje yarıdan devam edenlerin (sen / yeni Claude session'ı) hızlıca hâkim olması için yazıldı.
>
> **Son commit:** `50088e4` — feat: mobil sticky bar + proje galeri lightbox

---

## 1. Proje Genel Bilgi

**Ne?** Yapı Granit kurumsal pazarlama web sitesi (public marketing site).

**Hangi sorunu çözüyor?**
- Mimar / müteahhit / yapı firmaları için B2B müşteri kazanma
- Doğal taş, mermer, granit, porselen ürünlerin tanıtımı
- Proje galerisi + referans / güven inşası
- Teklif ve numune talebi toplama
- Yerel SEO (Denizli + İstanbul + Türkiye geneli)

**Ayrı sistemler:**
- `~/Desktop/yapıgranit-website/` → ESKİ proje, Yapı Granit'in **iç yönetim sistemi** (CRM tarzı: teklifler, müşteriler, maliyet, kesim optimizasyonu, taş takibi). Bu projeyle ilgisi yok.
- `~/Desktop/yapigranit-web/` → **BU PROJE** (kamuya açık marketing site).

---

## 2. Teknik Stack

```
Next.js 16.2.4 (App Router, RSC)
React 19.2.4
TypeScript 5
Tailwind CSS 4 (CSS-first config, @theme inline)
Prisma 7.8 + better-sqlite3 (dev) / PostgreSQL (prod hazır)
NextAuth v5 (beta) — credentials provider
shadcn/ui pattern (manuel — Radix primitives + cva)
Motion (framer-motion'ın yeni adı) — animasyonlar
Embla Carousel — proje carousel
React Hook Form + Zod — formlar
Sonner — toast notifications
Resend — transactional e-posta
Lucide React 0.544 — ikonlar
Cormorant Garamond + Inter — fontlar
```

---

## 3. Proje Yapısı

```
yapigranit-web/
├── prisma/
│   ├── schema.prisma         # User, Project, BlogPost, Quote, ContactMessage, NewsletterSub, SampleRequest
│   ├── seed.ts               # 8 proje + 12 blog + admin user seed
│   └── dev.db                # SQLite (gitignore'da)
├── src/
│   ├── app/
│   │   ├── (marketing)/      # Public route group
│   │   │   ├── layout.tsx
│   │   │   ├── page.tsx              # Anasayfa
│   │   │   ├── kurumsal/page.tsx
│   │   │   ├── hizmetler/
│   │   │   │   ├── page.tsx
│   │   │   │   └── [slug]/page.tsx   # Hizmet detay
│   │   │   ├── projeler/
│   │   │   │   ├── page.tsx
│   │   │   │   └── [slug]/page.tsx
│   │   │   ├── blog/
│   │   │   │   ├── page.tsx
│   │   │   │   └── [slug]/page.tsx
│   │   │   ├── urunler/
│   │   │   │   ├── page.tsx
│   │   │   │   └── [slug]/page.tsx
│   │   │   ├── iletisim/page.tsx
│   │   │   ├── teklif/page.tsx
│   │   │   ├── numune-talep/page.tsx
│   │   │   ├── kvkk/page.tsx
│   │   │   ├── gizlilik/page.tsx
│   │   │   └── kullanim-sartlari/page.tsx
│   │   ├── admin/            # Admin panel (auth gerekli)
│   │   │   ├── layout.tsx    # Sidebar + auth check
│   │   │   ├── page.tsx              # Dashboard
│   │   │   ├── login/page.tsx
│   │   │   ├── projeler/
│   │   │   │   ├── page.tsx          # Liste
│   │   │   │   ├── yeni/page.tsx     # Yeni
│   │   │   │   └── [id]/page.tsx     # Düzenle (silme dahil)
│   │   │   ├── blog/
│   │   │   │   ├── page.tsx
│   │   │   │   ├── yeni/page.tsx
│   │   │   │   └── [id]/page.tsx
│   │   │   ├── teklifler/page.tsx
│   │   │   ├── numune/page.tsx
│   │   │   ├── iletisim/page.tsx
│   │   │   └── abone/page.tsx
│   │   ├── api/
│   │   │   ├── auth/[...nextauth]/route.ts
│   │   │   ├── contact/route.ts
│   │   │   ├── newsletter/route.ts
│   │   │   ├── quote/route.ts
│   │   │   ├── sample-request/route.ts
│   │   │   └── admin/
│   │   │       ├── projects/route.ts        # POST (yeni)
│   │   │       ├── projects/[id]/route.ts   # PATCH + DELETE
│   │   │       ├── blog/route.ts
│   │   │       └── blog/[id]/route.ts
│   │   ├── layout.tsx        # Root layout — Analytics, JSON-LD, fonts, preconnect
│   │   ├── globals.css       # Brand tokens, utilities
│   │   ├── sitemap.ts
│   │   ├── robots.ts
│   │   ├── not-found.tsx     # ❌ HENÜZ YOK
│   │   ├── loading.tsx       # ❌ HENÜZ YOK
│   │   └── error.tsx         # ❌ HENÜZ YOK
│   ├── components/
│   │   ├── brand/logo.tsx
│   │   ├── layout/
│   │   │   ├── header.tsx          # Sticky, dropdown, lang switcher, mobile menu
│   │   │   ├── footer.tsx
│   │   │   ├── floating-actions.tsx # WhatsApp + Phone yüzen buton
│   │   │   └── mobile-sticky-bar.tsx # Yeni — Ara/WA/Yol/Teklif
│   │   ├── sections/        # Sayfa section'ları
│   │   │   ├── hero-home.tsx
│   │   │   ├── page-hero.tsx       # Diğer sayfalar için ortak hero
│   │   │   ├── products-grid.tsx
│   │   │   ├── b2b-solutions.tsx
│   │   │   ├── projects-carousel.tsx
│   │   │   ├── projects-gallery.tsx # Filtreler + grid
│   │   │   ├── stats-band.tsx
│   │   │   ├── cta-band.tsx
│   │   │   ├── timeline.tsx
│   │   │   ├── blog-list.tsx        # Filter + search + sort
│   │   │   ├── newsletter-band.tsx
│   │   │   ├── contact-form.tsx
│   │   │   ├── quote-form.tsx       # B2B + dosya upload
│   │   │   ├── quote-calculator.tsx # Tahmini fiyat
│   │   │   └── sample-request-form.tsx
│   │   ├── admin/
│   │   │   ├── data-table.tsx
│   │   │   ├── project-form.tsx
│   │   │   └── blog-form.tsx
│   │   ├── seo/
│   │   │   ├── structured-data.tsx  # Organization + LocalBusiness JSON-LD
│   │   │   └── analytics.tsx        # GA4 + GTM + Meta Pixel (env-driven)
│   │   └── ui/
│   │       ├── button.tsx
│   │       ├── container.tsx
│   │       ├── eyebrow.tsx
│   │       ├── input.tsx           # Input + Textarea
│   │       ├── reveal.tsx          # Scroll-triggered fade-in
│   │       ├── counter.tsx         # Animated number counter
│   │       └── lightbox.tsx        # Yeni — proje galeri lightbox
│   ├── lib/
│   │   ├── utils.ts          # cn(), formatDate, slugify, readingMinutes
│   │   ├── prisma.ts         # Prisma client singleton
│   │   ├── email.ts          # Resend wrapper
│   │   └── site.ts           # siteConfig + navigation
│   ├── lib/data/             # Mock/seed data (TypeScript)
│   │   ├── products.ts
│   │   ├── projects.ts
│   │   ├── services.ts
│   │   ├── blog.ts
│   │   ├── b2b.ts            # B2BFeature, WhyUs, BrandValue, Timeline
│   │   └── stats.ts
│   ├── i18n/messages.ts      # TR/EN/DE sözlük (foundation, route refactor faz 7)
│   ├── auth.ts               # NextAuth v5 config
│   ├── auth.config.ts        # Edge-safe auth config
│   ├── middleware.ts         # /admin koruma
│   └── types/
├── public/
├── .env.example
├── DEPLOY.md
├── HANDOFF.md                # ← bu dosya
├── next.config.ts            # Image domains, AVIF/WebP, optimizePackageImports
├── prisma.config.ts
├── package.json
└── tsconfig.json
```

---

## 4. Tasarım Sistemi (Brand Tokens)

`src/app/globals.css` içinde Tailwind v4 `@theme inline` kullanılıyor:

| Token | Değer | Kullanım |
|---|---|---|
| `--background` | `#f7f3ec` | Krem/bej arka plan (light section) |
| `--foreground` / `--ink` | `#15110b` | Ana metin (dark text on light) |
| `--ink-muted` | `#5a5246` | İkincil metin |
| `--ink-soft` | `#837962` | Soft text |
| `--surface` | `#ffffff` | Kart arka planı |
| `--surface-muted` | `#efe9df` | Bölme/alt section |
| `--surface-dark` | `#0e0d0c` | Koyu section |
| `--surface-darker` | `#08070a` | Hero, footer |
| `--gold` | `#c9a876` | **Ana vurgu** — buton, link, ikon, vurgu |
| `--gold-soft` | `#d8bb8e` | Hover state |
| `--gold-deep` | `#a8884f` | Tıklama state, eyebrow text |
| `--on-dark` | `#f5efe2` | Dark bg üzerinde metin |
| `--on-dark-muted` | `#b8ad95` | Dark bg üzerinde ikincil |
| `--line` | `#e5ddcd` | İnce border |
| `--line-strong` | `#cdc1aa` | Güçlü border |
| `--line-dark` | `#1f1d1a` | Dark bg üzerinde border |

**Fontlar:**
- Display (heading): `Cormorant Garamond` 300/400/500/600
- Body: `Inter`

**Tailwind utilities (custom):**
- `.eyebrow` — Eyebrow text (uppercase, tracking, gold-deep)
- `.display-xl/lg/md` — Heading boyutları (clamp ile responsive)
- `.text-balance` — text-wrap: balance
- `.marble-bg` — Mermer doku radial gradient
- `.underline-grow` — Hover'da soldan sağa büyüyen alt çizgi
- `.scrollbar-hide`
- `.reveal-in` — keyframe fade-in
- `.gradient-fade-bottom` — Mask-image bottom fade

---

## 5. Tamamlanan İşler (Faz 1-6)

### Faz 1 — Foundation ✅
- Next.js 16 projesi + git init
- Bağımlılıklar (40+ paket)
- Tasarım tokenları + fontlar
- Layout shell (Header + Footer + FloatingActions + MobileNav)
- shadcn/ui pattern (Button, Container, Eyebrow, Input, Reveal, Counter)
- Prisma şeması (User, Project, BlogPost, Quote, ContactMessage, NewsletterSub, SampleRequest)
- Mock data (products, projects, services, blog, b2b, stats)

### Faz 2 — Public Sayfalar ✅
**Anasayfa (`/`):** Hero (image+CTA+social) → Ürün kartları (4) → B2B çözümler (6) → Projeler carousel → Stats band → CTA band

**Kurumsal (`/kurumsal`):** PageHero → Hakkımızda (split) → Stats → Timeline (interaktif) → Değerler (5) → Closing CTA

**Hizmetler (`/hizmetler`):** PageHero → 8 hizmet kartı → Why Us (5) → CTA

**Projeler (`/projeler`):** PageHero → Trust strip (4) → Filtreler (kategori + yıl) + grid + CTA card → Stats extended

**Blog (`/blog`):** PageHero → Filtreler + arama + sıralama → Grid → Newsletter

**İletişim (`/iletisim`):** PageHero → 4 info kartı → Form + harita (OpenStreetMap iframe) → Trust strip

**Teklif (`/teklif`):** PageHero → Süreç (4) + B2B form (dosya upload) → Quote calculator

**Numune Talep (`/numune-talep`):** PageHero → 4 benefit + form (multi-checkbox)

**Ürünler (`/urunler`):** PageHero → 4 büyük ürün kartı → CTA band

**Detay sayfaları:** Proje detay (lightbox galeri), Blog detay (içindekiler+share), Hizmet detay, Ürün detay — `generateStaticParams` ile static export hazır

**Legal:** KVKK, Gizlilik, Kullanım Şartları (placeholder içerik)

### Faz 3 — Admin Panel ✅
- NextAuth v5 + middleware
- Login sayfası (credentials)
- Sidebar + dashboard
- Project CRUD (liste + yeni + düzenle + sil)
- Blog CRUD (liste + yeni + düzenle + sil)
- Teklif listesi (read-only)
- Numune listesi (read-only)
- İletişim mesajları (read-only)
- Newsletter aboneleri (read-only)

### Faz 4 — API Routes ✅
- `/api/contact` — POST: Zod validate → DB + Resend mail
- `/api/newsletter` — POST: e-posta abonesi
- `/api/quote` — POST FormData: B2B teklif + dosya
- `/api/sample-request` — POST: numune talebi
- `/api/admin/projects` + `/api/admin/projects/[id]` — POST/PATCH/DELETE (auth)
- `/api/admin/blog` + `/api/admin/blog/[id]` — POST/PATCH/DELETE (auth)

### Faz 5 — SEO ✅
- `metadata` her sayfada (title template, description, canonical)
- OpenGraph + Twitter card
- `sitemap.ts` — dinamik (static + DB)
- `robots.ts`
- JSON-LD: Organization + LocalBusiness (HomeAndConstructionBusiness)
- Türkçe locale, breadcrumb, slug yapısı

### Faz 6 — Polish + Production ✅
- Mobil sticky bar (Ara/WhatsApp/Yol/Teklif)
- Lightbox (klavye + swipe + sayaç)
- Quote calculator
- Seed script (`npm run db:seed`)
- Analytics (GA4 + GTM + Meta Pixel — env-driven)
- Performans: preconnect, dns-prefetch, theme-color, optimizePackageImports
- i18n foundation (`src/i18n/messages.ts` — sözlük)
- `.env.example`, `DEPLOY.md` (Vercel + Docker rehberi)

---

## 6. Eksik / Sırada Olan İşler (Faz 7)

### A — Polish (öncelikli, kısa süre)
- [ ] **`src/app/not-found.tsx`** — 404 sayfası (brand tutarlı)
- [ ] **`src/app/loading.tsx`** — Global loading skeleton
- [ ] **`src/app/error.tsx`** — Error boundary (development + production stack)
- [ ] **`src/app/(marketing)/blog/loading.tsx`** ve diğer route loading'leri
- [ ] **Lint çalıştır + düzelt** — `npm run lint`
- [ ] **Type check** — `npx tsc --noEmit`
- [ ] **Build verification** — `npm run build` (production build hatasız mı?)

### B — UX Geliştirmeleri (orta süre)
- [ ] **Site içi arama** — Cmd/Ctrl + K dialog (cmdk paketi zaten kurulu)
  - Blog yazıları + projeler + ürünler index'i
  - Arrow key navigation
- [ ] **Karşılaştırma modülü** — Projeler sayfasında 2-3 proje seçip yan yana karşılaştırma (brief'te vardı)
- [ ] **Favori/numune sepeti** — Ürün kartlarında kalp ikonu, sonra teklif formuna otomatik aktarma
- [ ] **Numune sepeti API** — localStorage + admin notification
- [ ] **Öncesi/sonrası slider** — Proje detayda before/after image (gerçek görseller geldikten sonra)
- [ ] **Blog yazı içeriği** — Şu an placeholder, MDX support eklenebilir
- [ ] **Proje malzeme tag'leri** — Mevcut linkler ürün sayfasına gidiyor, slug eşleşmesi iyileştirilebilir

### C — i18n Tam Entegrasyon (büyük iş, faz 7)
- [ ] `src/app/[locale]/(marketing)/...` route segment refactor
- [ ] `next-intl` provider + middleware setup
- [ ] Tüm metinleri `t('key')` ile değiştir (mevcut metinler hard-coded)
- [ ] EN ve DE çevirilerini doldur (şu an sadece nav + common var)
- [ ] LanguageSwitcher gerçekten URL'i değiştirsin (`/`, `/en`, `/de`)
- [ ] Hreflang tag'leri

### D — Performans + Erişilebilirlik
- [ ] **Lighthouse 90+ doğrulaması** (gerçek görseller geldikten sonra)
- [ ] **A11y audit** — keyboard nav, ARIA labels, focus styles, reduced-motion
- [ ] **Bundle analysis** — `@next/bundle-analyzer`
- [ ] **Image priority/sizes** — Hero'lar zaten `priority`, diğerleri kontrol
- [ ] **Skip to content link**
- [ ] **prefers-reduced-motion** desteği (motion komponentlerinde)

### E — Görsel ve İçerik (kullanıcı tarafı)
- [ ] **Gerçek logo SVG** — Şu an placeholder Y harfi (LogoMark)
- [ ] **Gerçek görseller** — `src/lib/data/*.ts` içindeki Unsplash URL'leri → `/public/images/`
  - Hero görseli (`hero-home.tsx`)
  - 4 ürün görseli (mermer, granit, porselen, özel)
  - 8 hizmet görseli
  - 12+ blog kapak
  - 8 proje kapak + galeri
  - PageHero görselleri (kurumsal, hizmetler, projeler, blog, iletişim, teklif, numune)
- [ ] **Logo'yu favicon olarak** — `src/app/favicon.ico` ve `apple-icon.png`
- [ ] **OG default görsel** — `src/app/opengraph-image.png` (1200x630)

### F — Production Deploy (kullanıcı tarafı)
- [ ] **Vercel'e deploy** veya kendi sunucu (DEPLOY.md'de tüm adımlar)
- [ ] **PostgreSQL** prod DB
- [ ] **Resend** API key (form mailleri için)
- [ ] **GA4 + GTM + Meta Pixel** ID'leri
- [ ] **DNS** — `yapigranit.com.tr` → Vercel/sunucu
- [ ] **Search Console** + **Yandex Webmaster** kayıt
- [ ] **`siteConfig.url`** prod domain ile güncelle (`src/lib/site.ts`)

### G — Brief'te Olan Ama Henüz Yapılmamış (opsiyonel)
- [ ] **Mega menu görseli** — Header dropdown'da sağ taraftaki numune CTA'sı görsel ekleyebilir
- [ ] **Proje detayda mimar/müteahhit bilgisi** — Şu an gösterilmiyor (data'da da yok)
- [ ] **Çalışma günü vurgulama** — İletişim sayfasında "Bugün açık" tooltip
- [ ] **Telefon numarası kopyalama** — İletişim kartında

---

## 7. Hızlı Komutlar

```bash
# Geliştirme
npm run dev                    # http://localhost:3000

# Veritabanı
npm run db:push                # Şemayı uygula
npm run db:seed                # 8 proje + 12 blog + admin user
npm run db:studio              # Prisma Studio UI

# Production
npm run build                  # prisma generate + next build
npm start

# Kalite
npm run lint
npx tsc --noEmit               # type check
```

**Admin giriş (seed sonrası):**
- E-posta: `admin@yapigranit.com.tr`
- Şifre: `changeme123`
- URL: `http://localhost:3000/admin/login`

---

## 8. Önemli Notlar / Tuzaklar

1. **lucide-react sürümü**: Sıfır versiyondan başlamayan paket var (1.x), bizimki `^0.544.0` olmalı. Kurarken dikkat.

2. **better-sqlite3**: Native binary derleme gerekiyor. Hata alırsan `npm rebuild better-sqlite3`.

3. **Türkçe karakterli klasör adı**: Eski proje `~/Desktop/yapıgranit-website/` (Türkçe `ı`). Bu yeni proje `~/Desktop/yapigranit-web/` (ASCII). Karıştırma!

4. **Worktree karışıklığı (eski sessiondan kalma)**: Eğer Claude Code session worktree mantığıyla `~/Desktop/yapıgranit-website/.claude/worktrees/...` içinde başlatılırsa, dosya yolları doğru olsa bile preview/launch.json sorun çıkarır. **Yeni session'ı her zaman `cd ~/Desktop/yapigranit-web && claude` ile başlat.**

5. **Görsel linkler placeholder**: Tüm `https://images.unsplash.com/...` URL'leri yer tutucu. Production öncesi değiştir.

6. **siteConfig.contact**: Şu an `İstanbul Deri OSB / Tuzla` adres, telefon/email örnek. Brief'te Denizli geçmiş — gerçek bilgileri `src/lib/site.ts` içine koy.

7. **Tailwind v4**: `tailwind.config.ts` YOK. Tüm config `globals.css` içinde `@theme inline` ile.

8. **Prisma 7**: `adapter` pattern (driver adapter). Klasik Prisma'dan farklı.

9. **Form state**: Tüm formlar React Hook Form + Zod. KVKK checkbox zorunlu.

10. **Admin UI**: data-table.tsx generic component. Yeni admin sayfası ekleyince aynı pattern'i kullan.

---

## 9. Yeni Session'da Devam Ederken

Yeni Claude session'ı `~/Desktop/yapigranit-web/` içinde başlattıktan sonra şunu yaz:

> "HANDOFF.md'i oku, kaldığım yerden devam et. Sırada Faz 7-A var: not-found, loading, error sayfaları + lint/typecheck/build verification."

Veya hızlıca öncelikli işleri tek tek isteyebilirsin:

1. "404 + loading + error sayfalarını yap"
2. "Build hatasız çalışıyor mu, lint çalıştır + düzelt"
3. "Site içi arama (Cmd+K) dialog'u ekle"
4. "Karşılaştırma modülünü yap"
5. "Tam i18n için route refactor başlat"

---

## 10. Git Geçmişi

```
50088e4 feat: mobil sticky bar + proje galeri lightbox
1a06bae chore: .env.example'i versiyonlamaya dahil et
04145e2 feat: faz 6 — CRUD tamamlandı, numune talep, teklif hesaplayıcı, analytics, deploy notları
34dd75e feat: kurumsal web sitesi — public sayfalar, admin panel, SEO altyapısı
d7d95b0 chore: initialize Next.js project
```

Her commit ne içeriyor diye `git show <hash>` ile bakabilirsin.

---

**Son durum:** Yapılması gereken kritik bir blocker yok. Faz 7-A (404/loading/error + lint/build verification) önerilen sıradaki iş.
