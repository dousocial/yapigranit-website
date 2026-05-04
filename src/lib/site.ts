export const siteConfig = {
  name: "YAPIGRANİT",
  legalName: "YAPIGRANİT A.Ş.",
  tagline: "Doğal Taş & Yüzey Çözümleri",
  slogan: "Taşa hayat veriyoruz...",
  url: "https://yapigranit.com",
  altUrl: "https://yapigranit.de",
  description:
    "Doğanın sanata dönüştüğü yer. Mimar ve müteahhitler için 5 Eksen CNC, Waterjet Kesim ve Mekanik Cephe Sistemleri. Bireysel projeler için çizilmez porselen tezgahlar ve butik doğal taş tasarımları.",
  contact: {
    address: {
      line1: "Zafer Mah. Zafer Cd.",
      line2: "No:60/1 Merkezefendi",
      city: "Denizli",
    },
    phones: ["0 258 372 22 50"],
    emails: {
      info: "info@yapigranit.com",
      project: "info@yapigranit.com",
    },
    workHours: [{ days: "Hafta içi", hours: "09:00 - 18:00" }],
    whatsapp: "+902583722250",
    map: {
      // Merkezefendi / Denizli — Zafer Caddesi yaklaşık koordinat
      lat: 37.7726,
      lng: 29.0865,
    },
  },
  social: {
    instagram: "https://www.instagram.com/yapigranitmermer/",
    linkedin: "https://www.linkedin.com/company/yapigrani%CC%87t-mermer-sanayi-ve-ticaret-a-%C5%9F/",
    youtube: "https://youtube.com/@yapigranit",
  },
  metrics: {
    yearsExperience: 25,
    projectsCompleted: 500,
    expertTeam: 50,
    countriesExported: 12,
    customerSatisfaction: 100,
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
        { label: "Porselen", href: "/urunler/porselen", description: "Teknolojinin zirvesi" },
        { label: "Doğal Taş (Mermer)", href: "/urunler/mermer", description: "Doğanın sanatı" },
        { label: "Kuvars", href: "/urunler/kuvars", description: "Pratik ve estetik" },
        { label: "Granit", href: "/urunler/granit", description: "Dayanıklı ve güçlü" },
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
      { label: "Porselen", href: "/urunler/porselen" },
      { label: "Mermer (Doğal Taş)", href: "/urunler/mermer" },
      { label: "Kuvars", href: "/urunler/kuvars" },
      { label: "Granit", href: "/urunler/granit" },
      { label: "Tüm Ürünler", href: "/urunler" },
    ],
    hizmetler: [
      { label: "Mekanik Cephe Sistemleri", href: "/hizmetler/mekanik-cephe-sistemleri" },
      { label: "Mutfak Tezgahı", href: "/hizmetler/mutfak-tezgahi" },
      { label: "Banyo & Islak Hacim", href: "/hizmetler/banyo-islak-hacim" },
      { label: "Şömine Yapımı", href: "/hizmetler/somine-yapimi" },
      { label: "5 Eksen CNC İşleme", href: "/hizmetler/bes-eksen-cnc" },
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
