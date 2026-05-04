import type { MetadataRoute } from "next";
import { headers } from "next/headers";
import { COM_DOMAIN, DE_DOMAIN } from "@/i18n/routing";

export default async function robots(): Promise<MetadataRoute.Robots> {
  const h = await headers();
  const rawHost = (
    h.get("x-forwarded-host") ??
    h.get("host") ??
    COM_DOMAIN
  ).toLowerCase();
  const bareHost = rawHost.replace(/^www\./, "");
  const base = `https://${rawHost}`;
  const isDe = bareHost === DE_DOMAIN;

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/admin", "/api", ...(isDe ? ["/tr", "/en"] : ["/de"])],
      },
    ],
    sitemap: `${base}/sitemap.xml`,
    host: base,
  };
}
