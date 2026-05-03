import type { NextConfig } from "next";
import path from "path";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");

// Turbopack root için projenin çalıştığı dizin
const projectRoot = path.resolve(process.cwd());

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "plus.unsplash.com" },
      { protocol: "https", hostname: "yapigranit.com.tr" },
    ],
    deviceSizes: [360, 480, 640, 750, 828, 1080, 1200, 1440, 1920, 2560],
    minimumCacheTTL: 60 * 60 * 24 * 30,
  },
  experimental: {
    optimizePackageImports: ["lucide-react", "motion"],
  },
  // Turbopack workspace root — multi-lockfile uyarısını giderir
  turbopack: {
    root: projectRoot,
  },
  poweredByHeader: false,
  compress: true,
};

export default withNextIntl(nextConfig);
