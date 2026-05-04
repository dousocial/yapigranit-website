import type { Metadata } from "next";
import { useTranslations } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";

import { PageHero } from "@/components/sections/page-hero";
import { BlogList } from "@/components/sections/blog-list";
import { NewsletterBand } from "@/components/sections/newsletter-band";
import { buildAlternates } from "@/lib/i18n-urls";
import type { Locale } from "@/i18n/routing";

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
    alternates: buildAlternates(locale as Locale, "/blog"),
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
        image="/images/hero/hero-kurumsal.webp"
        imageAlt={t("title")}
      />

      <BlogList />
      <NewsletterBand />
    </>
  );
}
