# Production Deploy Notları

## 1. Vercel ile (önerilen — en basit)

```bash
npm i -g vercel
vercel link
vercel env add DATABASE_URL              # PostgreSQL URL'i
vercel env add AUTH_SECRET               # openssl rand -base64 32
vercel env add ADMIN_EMAIL
vercel env add ADMIN_PASSWORD
vercel env add RESEND_API_KEY
vercel env add NEXT_PUBLIC_GA_ID         # opsiyonel
vercel --prod
```

Vercel otomatik olarak:
- `npm run build` çalıştırır (`prisma generate` dahil)
- Edge / Serverless function'ları otomatik dağıtır
- CDN / image optimization aktif olur

## 2. Kendi sunucuyla (Docker)

`Dockerfile` örneği:

```dockerfile
FROM node:20-alpine AS deps
WORKDIR /app
COPY package*.json prisma.config.ts ./
COPY prisma ./prisma
RUN npm ci

FROM node:20-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npx prisma generate
RUN npm run build

FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/prisma ./prisma
COPY --from=builder /app/prisma.config.ts ./
EXPOSE 3000
CMD ["npm", "run", "start"]
```

Docker compose ile:

```yaml
services:
  web:
    build: .
    ports: ["3000:3000"]
    environment:
      DATABASE_URL: ${DATABASE_URL}
      AUTH_SECRET: ${AUTH_SECRET}
      AUTH_TRUST_HOST: "true"
      ADMIN_EMAIL: ${ADMIN_EMAIL}
      ADMIN_PASSWORD: ${ADMIN_PASSWORD}
      RESEND_API_KEY: ${RESEND_API_KEY}
    depends_on: [db]
  db:
    image: postgres:16-alpine
    environment:
      POSTGRES_PASSWORD: postgres
      POSTGRES_DB: yapigranit
    volumes:
      - pgdata:/var/lib/postgresql/data
volumes:
  pgdata:
```

## 3. Production'a geçmeden önce kontrol listesi

- [ ] `AUTH_SECRET` üret ve `.env` içine koy (`openssl rand -base64 32`)
- [ ] `ADMIN_PASSWORD` güçlü bir şeyle değiştir
- [ ] `DATABASE_URL` PostgreSQL'e çevir (SQLite yerine)
- [ ] `RESEND_API_KEY` bağla — formlar gerçekten mail göndersin
- [ ] DNS: `yapigranit.com.tr` → deploy hedefine yönlendir
- [ ] SSL sertifikası (Vercel/Cloudflare otomatik halleder)
- [ ] `siteConfig.url` (`src/lib/site.ts`) production URL'i ile güncelle
- [ ] Google Search Console'a domain ekle
- [ ] `/sitemap.xml` ve `/robots.txt`'i Search Console'a tanıt
- [ ] Google Analytics 4 ve Meta Pixel ID'lerini env'e koy
- [ ] Gerçek görselleri `/public/images/` altına yükle ve `src/lib/data/*.ts`
      içindeki Unsplash URL'lerini değiştir
- [ ] Veritabanına ilk içerik için: `npm run db:seed` çalıştır

## 4. Veritabanı migrasyonu

SQLite'tan PostgreSQL'e geçerken:

```bash
# 1. prisma/schema.prisma içinde
#    datasource db { provider = "postgresql" }
# 2. .env içinde DATABASE_URL'i postgres URL'i yap
# 3. Şemayı uygula
npx prisma db push
# 4. Seed et
npm run db:seed
```

`prisma.config.ts` içindeki adapter'ı da PostgreSQL'e değiştirmeyi unutma:
```ts
import { PrismaPg } from "@prisma/adapter-pg";
// adapter: () => Promise.resolve(new PrismaPg({ connectionString: url })),
```

## 5. Performance

Tüm görseller `next/image` ile servis ediliyor → otomatik AVIF/WebP. Vercel'de
bu opsiyon ekstra ayar gerektirmez. Kendi sunucunla deploy edersen Sharp
modülünü ekle: `npm i sharp`.

Lighthouse hedefi 90+ için:
- Hero görselleri `priority` ile yüklü ✅
- Fonts `display: swap` ile ✅
- Preconnect ve dns-prefetch eklendi ✅
- Static pages `generateStaticParams` ile ✅
- API route'lar minimal ✅
