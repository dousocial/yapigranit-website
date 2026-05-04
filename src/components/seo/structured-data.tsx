import { siteConfig } from "@/lib/site";

export function OrganizationJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
    logo: `${siteConfig.url}/logo.png`,
    description: siteConfig.description,
    address: {
      "@type": "PostalAddress",
      streetAddress: `${siteConfig.contact.address.line1}, ${siteConfig.contact.address.line2}`,
      addressLocality: "Tuzla",
      addressRegion: "İstanbul",
      addressCountry: "TR",
    },
    contactPoint: siteConfig.contact.phones.map((p) => ({
      "@type": "ContactPoint",
      telephone: p,
      contactType: "sales",
      areaServed: "TR",
      availableLanguage: ["tr", "en"],
    })),
    sameAs: [
      siteConfig.altUrl,
      siteConfig.social.instagram,
      siteConfig.social.linkedin,
      siteConfig.social.youtube,
    ],
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function LocalBusinessJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "@id": `${siteConfig.url}#localbusiness`,
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    telephone: siteConfig.contact.phones[0],
    email: siteConfig.contact.emails.info,
    address: {
      "@type": "PostalAddress",
      streetAddress: `${siteConfig.contact.address.line1}, ${siteConfig.contact.address.line2}`,
      addressLocality: "Tuzla",
      addressRegion: "İstanbul",
      addressCountry: "TR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: siteConfig.contact.map.lat,
      longitude: siteConfig.contact.map.lng,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:30",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Saturday"],
        opens: "09:00",
        closes: "14:00",
      },
    ],
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function BreadcrumbJsonLd({
  items,
}: {
  items: { label: string; href: string }[];
}) {
  const data = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      name: item.label,
      item: `${siteConfig.url}${item.href}`,
    })),
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

/**
 * Article schema — blog/rehber yazıları için.
 * Google Search Console'da rich result olarak yayın tarihi, yazar, görsel görünür.
 */
export function ArticleJsonLd({
  headline,
  description,
  image,
  datePublished,
  dateModified,
  url,
  authorName = siteConfig.name,
  category,
}: {
  headline: string;
  description: string;
  image: string;
  datePublished: string;
  dateModified?: string;
  url: string;
  authorName?: string;
  category?: string;
}) {
  const data = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline,
    description,
    image: image.startsWith("http") ? image : `${siteConfig.url}${image}`,
    datePublished,
    dateModified: dateModified ?? datePublished,
    author: {
      "@type": "Organization",
      name: authorName,
      url: siteConfig.url,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      logo: {
        "@type": "ImageObject",
        url: `${siteConfig.url}/logo.png`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url.startsWith("http") ? url : `${siteConfig.url}${url}`,
    },
    ...(category && { articleSection: category }),
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

/**
 * Product schema — ürün detay sayfaları için.
 * Google Shopping ve rich snippet'lerde fiyat, marka, görsel görünür.
 */
export function ProductJsonLd({
  name,
  description,
  image,
  brand = siteConfig.name,
  category,
  url,
  sku,
  material,
}: {
  name: string;
  description: string;
  image: string | string[];
  brand?: string;
  category?: string;
  url: string;
  sku?: string;
  material?: string;
}) {
  const images = Array.isArray(image) ? image : [image];
  const data = {
    "@context": "https://schema.org",
    "@type": "Product",
    name,
    description,
    image: images.map((src) =>
      src.startsWith("http") ? src : `${siteConfig.url}${src}`,
    ),
    brand: {
      "@type": "Brand",
      name: brand,
    },
    ...(category && { category }),
    ...(sku && { sku }),
    ...(material && { material }),
    url: url.startsWith("http") ? url : `${siteConfig.url}${url}`,
    offers: {
      "@type": "Offer",
      url: url.startsWith("http") ? url : `${siteConfig.url}${url}`,
      availability: "https://schema.org/InStock",
      priceCurrency: "TRY",
      priceSpecification: {
        "@type": "PriceSpecification",
        priceCurrency: "TRY",
      },
      seller: {
        "@type": "Organization",
        name: siteConfig.name,
      },
    },
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

/**
 * FAQ schema — sayfaların sonunda kullan.
 * Google sonuçlarında akordeon biçiminde direkt görünür → CTR önemli ölçüde artar.
 */
export function FaqJsonLd({
  questions,
}: {
  questions: { question: string; answer: string }[];
}) {
  const data = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: questions.map((q) => ({
      "@type": "Question",
      name: q.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: q.answer,
      },
    })),
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
