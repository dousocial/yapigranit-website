import { useLocale, useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Instagram, Linkedin, Youtube, MapPin, Phone, Mail } from "lucide-react";

import { Logo } from "@/components/brand/logo";
import { Container } from "@/components/ui/container";
import { siteConfig } from "@/lib/site";

interface FooterLink {
  href: string;
  key: Parameters<ReturnType<typeof useTranslations<"Footer.links">>>[0];
}

const footerSections: {
  titleKey: Parameters<ReturnType<typeof useTranslations<"Footer">>>[0];
  links: FooterLink[];
}[] = [
  {
    titleKey: "corporate",
    links: [
      { href: "/kurumsal#hakkimizda", key: "about" },
      { href: "/kurumsal#vizyon", key: "vision" },
      { href: "/kurumsal#degerler", key: "values" },
      { href: "/kurumsal#surdurulebilirlik", key: "sustainability" },
      { href: "/kariyer", key: "career" },
    ],
  },
  {
    titleKey: "products",
    links: [
      { href: "/urunler/porselen", key: "porselen" },
      { href: "/urunler/mermer", key: "mermer" },
      { href: "/urunler/kuvars", key: "kuvars" },
      { href: "/urunler/granit", key: "granit" },
      { href: "/urunler", key: "allProducts" },
    ],
  },
  {
    titleKey: "services",
    links: [
      { href: "/hizmetler/mekanik-cephe-sistemleri", key: "mekanikCephe" },
      { href: "/hizmetler/mutfak-tezgahi", key: "mutfakTezgahi" },
      { href: "/hizmetler/banyo-islak-hacim", key: "banyo" },
      { href: "/hizmetler/somine-yapimi", key: "somine" },
      { href: "/hizmetler/bes-eksen-cnc", key: "besEksenCnc" },
    ],
  },
  {
    titleKey: "projects",
    links: [
      { href: "/projeler", key: "allProjects" },
      { href: "/projeler?kategori=oteller", key: "hotelProjects" },
      { href: "/projeler?kategori=konut", key: "residenceProjects" },
      { href: "/projeler?kategori=ticari", key: "commercialProjects" },
      { href: "/projeler?kategori=kamusal", key: "publicProjects" },
    ],
  },
];

const legalLinks: FooterLink[] = [
  { href: "/gizlilik", key: "privacy" },
  { href: "/kvkk", key: "kvkk" },
  { href: "/kullanim-sartlari", key: "terms" },
];

export function Footer() {
  const tFooter = useTranslations("Footer");
  const tLinks = useTranslations("Footer.links");
  const tSite = useTranslations("Site");
  const locale = useLocale();
  const visibleLegalLinks =
    locale === "de"
      ? [...legalLinks, { href: "/impressum", key: "impressum" as const }]
      : legalLinks;

  return (
    <footer className="bg-surface-darker text-on-dark relative pb-[88px] lg:pb-0">
      <div className="absolute inset-0 marble-bg opacity-40" aria-hidden />

      <Container size="wide" className="relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 py-16 md:py-20">
          {/* Brand */}
          <div className="lg:col-span-3">
            <Logo variant="light" />
            <p className="mt-5 italic text-[0.95rem] text-gold/90 max-w-[280px]">
              {tSite("slogan")}
            </p>
            <p className="mt-4 text-[0.88rem] text-on-dark-muted leading-relaxed max-w-[280px]">
              {tFooter("brandIntro")}
            </p>
            <div className="mt-6 flex items-center gap-2">
              <SocialLink
                href={siteConfig.social.instagram}
                icon={<Instagram className="size-4" />}
                label="Instagram"
              />
              <SocialLink
                href={siteConfig.social.linkedin}
                icon={<Linkedin className="size-4" />}
                label="LinkedIn"
              />
              <SocialLink
                href={siteConfig.social.youtube}
                icon={<Youtube className="size-4" />}
                label="YouTube"
              />
            </div>
          </div>

          {/* Link sections */}
          {footerSections.map((section) => (
            <div key={section.titleKey} className="lg:col-span-2">
              <h4 className="eyebrow text-gold mb-5">
                {tFooter(section.titleKey)}
              </h4>
              <ul className="space-y-1">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="inline-flex items-center min-h-11 py-2 text-[0.9rem] text-on-dark-muted hover:text-gold transition-colors"
                    >
                      {tLinks(link.key)}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact */}
          <div className="lg:col-span-3">
            <h4 className="eyebrow text-gold mb-5">{tFooter("contact")}</h4>
            <div className="space-y-4">
              <div className="flex gap-3">
                <MapPin className="size-4 text-gold shrink-0 mt-0.5" />
                <p className="text-[0.88rem] text-on-dark-muted leading-relaxed">
                  {siteConfig.contact.address.line1}
                  <br />
                  {siteConfig.contact.address.line2}
                  <br />
                  {siteConfig.contact.address.city}
                </p>
              </div>
              <div className="flex gap-3">
                <Phone className="size-4 text-gold shrink-0 mt-3" />
                <div className="text-[0.88rem] text-on-dark-muted flex flex-col">
                  {siteConfig.contact.phones.map((p) => (
                    <a
                      key={p}
                      href={`tel:${p.replace(/\s/g, "")}`}
                      className="inline-flex items-center min-h-11 py-2 hover:text-gold transition-colors"
                    >
                      {p}
                    </a>
                  ))}
                </div>
              </div>
              <div className="flex gap-3">
                <Mail className="size-4 text-gold shrink-0 mt-3" />
                <a
                  href={`mailto:${siteConfig.contact.emails.info}`}
                  className="inline-flex items-center min-h-11 py-2 text-[0.88rem] text-on-dark-muted hover:text-gold transition-colors"
                >
                  {siteConfig.contact.emails.info}
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-line-dark py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[0.8rem] text-on-dark-soft">
            © {new Date().getFullYear()} {siteConfig.name}.{" "}
            {tFooter("rights")}
          </p>
          <ul className="flex flex-wrap items-center gap-x-4 gap-y-1">
            {visibleLegalLinks.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="inline-flex items-center min-h-11 py-2 px-1 text-[0.8rem] text-on-dark-soft hover:text-gold transition-colors"
                >
                  {tLinks(item.key)}
                </Link>
              </li>
            ))}
          </ul>
          <p className="text-[0.8rem] text-on-dark-soft inline-flex items-center min-h-11 py-2 gap-1">
            {tFooter("webDesign")}{" "}
            <Link
              href="/"
              className="inline-flex items-center min-h-11 py-2 text-gold hover:text-gold-soft"
            >
              {tFooter("webDesignBy")}
            </Link>
          </p>
        </div>
      </Container>
    </footer>
  );
}

function SocialLink({
  href,
  icon,
  label,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="size-11 grid place-items-center border border-line-dark hover:border-gold hover:text-gold text-on-dark-muted transition-colors"
    >
      {icon}
    </a>
  );
}
