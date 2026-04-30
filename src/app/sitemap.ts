import type { MetadataRoute } from "next";
import { products } from "@/lib/data/products";
import { projects } from "@/lib/data/projects";
import { services } from "@/lib/data/services";
import { blogPosts } from "@/lib/data/blog";
import { siteConfig } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url;
  const now = new Date();

  const staticPages = [
    "",
    "/kurumsal",
    "/urunler",
    "/hizmetler",
    "/projeler",
    "/blog",
    "/iletisim",
    "/teklif",
    "/kvkk",
    "/gizlilik",
    "/kullanim-sartlari",
  ].map((p) => ({
    url: `${base}${p}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: p === "" ? 1.0 : 0.8,
  }));

  const productPages = products.map((p) => ({
    url: `${base}/urunler/${p.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const servicePages = services.map((s) => ({
    url: `${base}/hizmetler/${s.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const projectPages = projects.map((p) => ({
    url: `${base}/projeler/${p.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const blogPages = blogPosts.map((p) => ({
    url: `${base}/blog/${p.slug}`,
    lastModified: new Date(p.date),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [
    ...staticPages,
    ...productPages,
    ...servicePages,
    ...projectPages,
    ...blogPages,
  ];
}
