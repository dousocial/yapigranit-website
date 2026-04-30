import { Link } from "@/i18n/navigation";
import { Instagram, Linkedin, Youtube, MapPin, Phone, Mail } from "lucide-react";

import { Logo } from "@/components/brand/logo";
import { Container } from "@/components/ui/container";
import { navigation, siteConfig } from "@/lib/site";

export function Footer() {
  const sections: { title: string; key: keyof typeof navigation.footer }[] = [
    { title: "Kurumsal", key: "kurumsal" },
    { title: "Ürünler", key: "urunler" },
    { title: "Hizmetler", key: "hizmetler" },
    { title: "Projeler", key: "projeler" },
  ];

  return (
    <footer className="bg-surface-darker text-on-dark relative">
      <div className="absolute inset-0 marble-bg opacity-40" aria-hidden />

      <Container size="wide" className="relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 py-16 md:py-20">
          {/* Brand */}
          <div className="lg:col-span-3">
            <Logo variant="light" />
            <p className="mt-5 italic text-[0.95rem] text-gold/90 max-w-[280px]">
              {siteConfig.slogan}
            </p>
            <p className="mt-4 text-[0.88rem] text-on-dark-muted leading-relaxed max-w-[280px]">
              1994&apos;ten bu yana doğal taşı, modern mimarinin zarafetiyle
              buluşturuyoruz.
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
          {sections.map((section) => (
            <div key={section.key} className="lg:col-span-2">
              <h4 className="eyebrow text-gold mb-5">{section.title}</h4>
              <ul className="space-y-2.5">
                {navigation.footer[section.key].map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-[0.9rem] text-on-dark-muted hover:text-gold transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact */}
          <div className="lg:col-span-3">
            <h4 className="eyebrow text-gold mb-5">İletişim</h4>
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
                <Phone className="size-4 text-gold shrink-0 mt-0.5" />
                <div className="text-[0.88rem] text-on-dark-muted">
                  {siteConfig.contact.phones.map((p) => (
                    <a
                      key={p}
                      href={`tel:${p.replace(/\s/g, "")}`}
                      className="block hover:text-gold transition-colors"
                    >
                      {p}
                    </a>
                  ))}
                </div>
              </div>
              <div className="flex gap-3">
                <Mail className="size-4 text-gold shrink-0 mt-0.5" />
                <a
                  href={`mailto:${siteConfig.contact.emails.info}`}
                  className="text-[0.88rem] text-on-dark-muted hover:text-gold transition-colors"
                >
                  {siteConfig.contact.emails.info}
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-line-dark py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[0.8rem] text-on-dark-soft">
            © {new Date().getFullYear()} Yapı Granit. Tüm hakları saklıdır.
          </p>
          <ul className="flex flex-wrap items-center gap-x-6 gap-y-2">
            {navigation.legal.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-[0.8rem] text-on-dark-soft hover:text-gold transition-colors"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <p className="text-[0.8rem] text-on-dark-soft">
            Web Tasarım:{" "}
            <Link href="/" className="text-gold hover:text-gold-soft">
              Yapı Granit Dijital
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
      className="size-9 grid place-items-center border border-line-dark hover:border-gold hover:text-gold text-on-dark-muted transition-colors"
    >
      {icon}
    </a>
  );
}
