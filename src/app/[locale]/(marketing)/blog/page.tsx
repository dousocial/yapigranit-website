import type { Metadata } from "next";
import { useTranslations } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";

import { PageHero } from "@/components/sections/page-hero";
import { BlogList } from "@/components/sections/blog-list";
import { NewsletterBand } from "@/components/sections/newsletter-band";

interface Props {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Pages.blog" });
  return {
    title: t("title"),
    description: t("metaDescription"),
    alternates: {
      canonical: locale === "tr" ? "/blog" : `/${locale}/blog`,
    },
  };
}

export default async function BlogPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <BlogContent />;
}

function BlogContent() {
  const t = useTranslations("Pages.blog");
  const tNav = useTranslations("Nav");

  return (
    <>
      <PageHero
        title={t("title")}
        description={t("description")}
        breadcrumb={[
          { label: tNav("home"), href: "/" },
          { label: tNav("blog") },
        ]}
        image="/images/sections/blog-hero.webp"
        imageAlt={t("title")}
      />

      <BlogList />
      <NewsletterBand />
    </>
  );
}
