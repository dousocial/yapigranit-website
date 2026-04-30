export const siteConfig = {
  name: "Yapı Granit",
  tagline: "Doğal Taş & Yüzey Çözümleri",
  url: "https://yapigranit.com.tr",
  description:
    "Doğal taşın estetiğini, profesyonel işçilik ve yenilikçi çözümlerle buluşturuyoruz.",
  contact: {
    address: {
      line1: "İstanbul Deri Organize Sanayi Bölgesi",
      line2: "Bölgesi D.O.S.B. Mah. 11. Yol No:1",
      city: "Tuzla / İstanbul",
    },
    phones: ["+90 216 384 56 57", "+90 216 394 16 80"],
    emails: {
      info: "info@yapigranit.com.tr",
      project: "proje@yapigranit.com.tr",
    },
    workHours: [
      { days: "Pazartesi - Cuma", hours: "08:30 - 18:00" },
      { days: "Cumartesi", hours: "09:00 - 14:00" },
    ],
    whatsapp: "+902163845657",
    map: {
      lat: 40.8456,
      lng: 29.3158,
    },
  },
  social: {
    instagram: "https://instagram.com/yapigranit",
    linkedin: "https://linkedin.com/company/yapigranit",
    youtube: "https://youtube.com/@yapigranit",
  },
  metrics: {
    yearsExperience: 20,
    projectsCompleted: 1000,
    expertTeam: 50,
    countriesExported: 30,
  },
} as const;

export const navigation = {
  main: [
    { label: "Anasayfa", href: "/" },
    { label: "Kurumsal", href: "/kurumsal" },
    {
      label: "Ürünler",
      href: "/urunler",
      children: [
        { label: "Mermer", href: "/urunler/mermer", description: "Doğal ve şık" },
        { label: "Granit", href: "/urunler/granit", description: "Dayanıklı ve güçlü" },
        { label: "Porselen", href: "/urunler/porselen", description: "Modern ve fonksiyonel" },
        { label: "Özel Yüzeyler", href: "/urunler/ozel-yuzeyler", description: "Projenize özel çözümler" },
        { label: "Tüm Ürünler", href: "/urunler" },
      ],
    },
    { label: "Hizmetler", href: "/hizmetler" },
    { label: "Projeler", href: "/projeler" },
    { label: "Blog", href: "/blog" },
    { label: "İletişim", href: "/iletisim" },
  ],
  footer: {
    kurumsal: [
      { label: "Hakkımızda", href: "/kurumsal#hakkimizda" },
      { label: "Vizyon & Misyon", href: "/kurumsal#vizyon" },
      { label: "Değerlerimiz", href: "/kurumsal#degerler" },
      { label: "Sürdürülebilirlik", href: "/kurumsal#surdurulebilirlik" },
      { label: "Kariyer", href: "/kariyer" },
    ],
    urunler: [
      { label: "Mermer", href: "/urunler/mermer" },
      { label: "Granit", href: "/urunler/granit" },
      { label: "Porselen", href: "/urunler/porselen" },
      { label: "Özel Yüzeyler", href: "/urunler/ozel-yuzeyler" },
      { label: "Tüm Ürünler", href: "/urunler" },
    ],
    hizmetler: [
      { label: "Keşif & Danışmanlık", href: "/hizmetler#kesif" },
      { label: "Ölçü & Üretim", href: "/hizmetler#olcu" },
      { label: "Uygulama", href: "/hizmetler#uygulama" },
      { label: "Lojistik & Teslimat", href: "/hizmetler#lojistik" },
      { label: "Satış Sonrası Destek", href: "/hizmetler#satis-sonrasi" },
    ],
    projeler: [
      { label: "Tüm Projeler", href: "/projeler" },
      { label: "Otel Projeleri", href: "/projeler?kategori=oteller" },
      { label: "Konut Projeleri", href: "/projeler?kategori=konut" },
      { label: "Ticari Yapılar", href: "/projeler?kategori=ticari" },
      { label: "Kamusal Yapılar", href: "/projeler?kategori=kamusal" },
    ],
  },
  legal: [
    { label: "Gizlilik Politikası", href: "/gizlilik" },
    { label: "KVKK", href: "/kvkk" },
    { label: "Kullanım Şartları", href: "/kullanim-sartlari" },
  ],
  languages: [
    { code: "tr", label: "TR" },
    { code: "en", label: "EN" },
    { code: "de", label: "DE" },
  ],
} as const;

export type SiteConfig = typeof siteConfig;
export type Navigation = typeof navigation;
