import type { NextConfig } from "next";
import path from "path";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");

// Turbopack root için projenin çalıştığı dizin
const projectRoot = path.resolve(process.cwd());

const nextConfig: NextConfig = {
  images: {
    // Vercel Hobby görsel optimizasyon kotası (aylık dönüşüm limiti) dolunca
    // önbellekte olmayan boyutlar 402 dönüyordu. /public/images zaten
    // sıkıştırılmış webp; dosyalar olduğu gibi CDN'den servis edilir.
    unoptimized: true,
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "plus.unsplash.com" },
      { protocol: "https", hostname: "yapigranit.com.tr" },
    ],
  },
  experimental: {
    optimizePackageImports: ["lucide-react", "motion"],
  },
  // Turbopack workspace root — multi-lockfile uyarısını giderir
  turbopack: {
    root: projectRoot,
  },
  async redirects() {
    return [
      // Broşür / QR'da kısa yazım da çalışsın
      {
        source: "/ogrenci-program",
        destination: "/ogrenci-programi",
        permanent: true,
      },
    ];
  },
  poweredByHeader: false,
  compress: true,
};

export default withNextIntl(nextConfig);
