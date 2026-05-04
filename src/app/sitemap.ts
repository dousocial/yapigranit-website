import type { MetadataRoute } from "next";
import { products } from "@/lib/data/products";
import { projects } from "@/lib/data/projects";
import { services } from "@/lib/data/services";
import { blogPosts } from "@/lib/data/blog";
import { canonicalFor } from "@/lib/i18n-urls";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticPaths = [
    "",
    "/kurumsal",
    "/urunler",
    "/hizmetler",
    "/makine-parkuru",
    "/projeler",
    "/blog",
    "/iletisim",
    "/teklif",
    "/numune-talep",
    // Niyet odaklı landing'ler
    "/mutfak-tezgah-porselen",
    "/cami-cephe-kaplama",
    "/kvkk",
    "/gizlilik",
    "/kullanim-sartlari",
  ];

  function localized(path: string) {
    return {
      url: canonicalFor("tr", path),
      languages: {
        "tr-TR": canonicalFor("tr", path),
        en: canonicalFor("en", path),
        "de-DE": canonicalFor("de", path),
        "x-default": canonicalFor("tr", path),
      },
    };
  }

  const staticPages = staticPaths.map((p) => {
    const { url, languages } = localized(p);
    return {
      url,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: p === "" ? 1.0 : 0.8,
      alternates: { languages },
    };
  });

  const productPages = products.map((p) => {
    const { url, languages } = localized(`/urunler/${p.slug}`);
    return {
      url,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
      alternates: { languages },
    };
  });

  const servicePages = services.map((s) => {
    const { url, languages } = localized(`/hizmetler/${s.slug}`);
    return {
      url,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
      alternates: { languages },
    };
  });

  const projectPages = projects.map((p) => {
    const { url, languages } = localized(`/projeler/${p.slug}`);
    return {
      url,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
      alternates: { languages },
    };
  });

  const blogPages = blogPosts.map((p) => {
    const { url, languages } = localized(`/blog/${p.slug}`);
    return {
      url,
      lastModified: new Date(p.date),
      changeFrequency: "monthly" as const,
      priority: 0.6,
      alternates: { languages },
    };
  });

  return [
    ...staticPages,
    ...productPages,
    ...servicePages,
    ...projectPages,
    ...blogPages,
  ];
}
