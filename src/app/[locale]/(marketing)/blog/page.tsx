import type { Metadata } from "next";

import { PageHero } from "@/components/sections/page-hero";
import { BlogList } from "@/components/sections/blog-list";
import { NewsletterBand } from "@/components/sections/newsletter-band";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Doğal taş, tasarım, uygulama ve sektör trendleri hakkında güncel içerikler.",
  alternates: { canonical: "/blog" },
};

export default function BlogPage() {
  return (
    <>
      <PageHero
        title="Blog"
        description="Doğal taş, tasarım, uygulama ve sektör trendleri hakkında güncel içerikler."
        breadcrumb={[
          { label: "Anasayfa", href: "/" },
          { label: "Blog" },
        ]}
        image="https://images.unsplash.com/photo-1604147495798-57beb5d6af73?auto=format&fit=crop&w=1600&q=80"
        imageAlt="Yapı Granit blog"
      />

      <BlogList />
      <NewsletterBand />
    </>
  );
}
