export interface BlogPost {
  slug: string;
  title: string;
  subtitle?: string;
  excerpt: string;
  category:
    | "trendler"
    | "tasarim"
    | "ic-mimari"
    | "malzeme"
    | "sanat-zanaat"
    | "yonetim"
    | "bakim"
    | "surdurulebilirlik"
    | "pazarlama";
  categoryLabel: string;
  date: string;
  readMinutes: number;
  cover: string;
  featured?: boolean;
}

export const blogCategories = [
  { slug: "all", label: "Tüm Yazılar" },
  { slug: "trendler", label: "Trendler" },
  { slug: "tasarim", label: "Tasarım" },
  { slug: "ic-mimari", label: "İç Mimari" },
  { slug: "malzeme", label: "Malzeme Rehberi" },
  { slug: "sanat-zanaat", label: "Sanat & Zanaat" },
  { slug: "bakim", label: "Bakım & Koruma" },
  { slug: "surdurulebilirlik", label: "Sürdürülebilirlik" },
] as const;

export const blogPosts: BlogPost[] = [
  {
    slug: "neo-deco-mermer-gorunumlu-porselen-2026",
    title: "2026 Trend: Neo Deco & Mermer Görünümlü Porselen",
    subtitle: "Geleceğin Kodları",
    excerpt:
      "Neo Deco akımı, sessiz lüks ve hiper-gerçekçi porselen yüzeylerle buluşuyor. Mermer estetiğinin dayanıklı versiyonuyla mekanlarınıza zamansız bir karakter kazandırın.",
    category: "trendler",
    categoryLabel: "Dekorasyon Trendleri",
    date: "2026-04-12",
    readMinutes: 7,
    cover:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=80",
    featured: true,
  },
  {
    slug: "atolye-urun-fikirleri-mermer-porselen",
    title: "Atölye Ürün Fikirleri: Mermer & Porselen",
    subtitle: "Dekoratif Ürün Seçkisi",
    excerpt:
      "Atölye üretiminde öne çıkan dekoratif ürün ve hediye konseptleri. Küçük ölçekli üretimlerle yüksek katma değerli ürün koleksiyonları oluşturma rehberi.",
    category: "tasarim",
    categoryLabel: "Tasarım & Üretim",
    date: "2026-04-08",
    readMinutes: 8,
    cover:
      "https://images.unsplash.com/photo-1604147706283-d7119b5b822c?auto=format&fit=crop&w=900&q=80",
  },
  {
    slug: "mermer-porselen-kombinasyonu-tasarim-fikirleri",
    title: "Mermer ve Porselen Kombinasyonuyla Tasarım Fikirleri",
    subtitle: "Zıtlıkların Uyumu",
    excerpt:
      "Mermerin doğal şıklığını porselenin teknolojisiyle birleştiren mekan önerileri. İki malzemenin güçlü yönlerinin nasıl bir araya getirileceğine dair detaylı rehber.",
    category: "ic-mimari",
    categoryLabel: "İç Mimari & Dekorasyon",
    date: "2026-04-03",
    readMinutes: 8,
    cover:
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=900&q=80",
  },
  {
    slug: "bookmatch-doganin-senfonisi",
    title: "Bookmatch: Doğanın Senfonisi",
    subtitle: "Kelebek Kanadı Etkisi",
    excerpt:
      "Simetrik damar kurgusuyla duvarlarda dramatik bir sanat etkisi. Bookmatch tekniği nedir, hangi mermerlerle uygulanır, projeye nasıl entegre edilir?",
    category: "ic-mimari",
    categoryLabel: "İç Mimari & Tasarım",
    date: "2026-03-28",
    readMinutes: 6,
    cover:
      "https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=900&q=80",
  },
  {
    slug: "mermer-porselenin-mimaride-kullanimi",
    title: "Mermer ve Porselenin Mimaride Kullanımı",
    subtitle: "Malzeme Stratejisi",
    excerpt:
      "Lüks projelerde mermer ve porselenin mimariye kattığı prestij ve performans. Otel, rezidans ve ticari yapılar için stratejik malzeme tercihleri.",
    category: "ic-mimari",
    categoryLabel: "Mimari & İç Mekan",
    date: "2026-03-22",
    readMinutes: 9,
    cover:
      "https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=900&q=80",
  },
  {
    slug: "porselen-desenleme-sanati-teknikleri",
    title: "Porselen Desenleme Sanatı ve Teknikleri",
    subtitle: "Renklerin Ateşle Dansı",
    excerpt:
      "Porselen yüzeylerde desen, motif ve renk uygulamalarının tarihsel teknikleri. Geleneksel sanattan modern üretime uzanan dönüşüm.",
    category: "sanat-zanaat",
    categoryLabel: "Sanat & Zanaat",
    date: "2026-03-18",
    readMinutes: 6,
    cover:
      "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=900&q=80",
  },
  {
    slug: "musteri-talepleri-ozel-tasarim-surecleri",
    title: "Müşteri Taleplerine Göre Özel Tasarım Süreçleri",
    subtitle: "Doğru Analiz, Kusursuz Üretim",
    excerpt:
      "Müşteri ihtiyaçlarını doğru analiz ederek özel tasarım süreçlerini yönetme. Brief'ten üretime geçiş aşamasında dikkat edilmesi gerekenler.",
    category: "yonetim",
    categoryLabel: "Tasarım & İşletme",
    date: "2026-03-12",
    readMinutes: 9,
    cover:
      "https://images.unsplash.com/photo-1581094288338-2314dddb7ece?auto=format&fit=crop&w=900&q=80",
  },
  {
    slug: "waterfall-tasarim-akiskan-yuzeyler",
    title: "Waterfall Tasarım: Akışkan Yüzeyler",
    subtitle: "Kesintisiz Form",
    excerpt:
      "Tezgahtan zemine akan tek parça yüzeylerle modern ada tasarımı. Waterfall tekniğinin uygulama detayları ve estetik avantajları.",
    category: "ic-mimari",
    categoryLabel: "İç Mimari & Dekorasyon",
    date: "2026-03-07",
    readMinutes: 6,
    cover:
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=900&q=80",
  },
  {
    slug: "mermer-tasarim-teknikleri-isleme-yontemleri",
    title: "Mermer Tasarım Teknikleri ve İşleme Yöntemleri",
    subtitle: "Zanaat ve Teknoloji",
    excerpt:
      "Ham bloktan bitmiş ürüne mermer işleme teknikleri ve modern makineler. 5 Eksen CNC, Waterjet ve Bridge Saw teknolojilerinin atölyedeki rolü.",
    category: "malzeme",
    categoryLabel: "Doğal Taş & Mimari",
    date: "2026-03-02",
    readMinutes: 7,
    cover:
      "https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=900&q=80",
  },
  {
    slug: "mermer-porselen-malzemelerinin-ozellikleri",
    title: "Mermer ve Porselen Malzemelerinin Özellikleri",
    subtitle: "Karşılaştırmalı Bakış",
    excerpt:
      "Dayanıklılık, bakım ve kullanım senaryoları için hızlı karşılaştırma. Hangi malzeme hangi kullanıma daha uygun? Detaylı teknik analiz.",
    category: "malzeme",
    categoryLabel: "Malzeme Rehberi",
    date: "2026-02-25",
    readMinutes: 8,
    cover:
      "https://images.unsplash.com/photo-1556909172-54557c7e4fb7?auto=format&fit=crop&w=900&q=80",
  },
  {
    slug: "mermer-vs-porselen",
    title: "Mermer vs Porselen",
    subtitle: "Karşılaştırmalı Analiz",
    excerpt:
      "Estetik, dayanıklılık ve fiyat ekseninde hangisi sizin için doğru seçim? Mutfak ve banyo tezgahları için pratik karar rehberi.",
    category: "malzeme",
    categoryLabel: "Seçim Rehberi",
    date: "2026-02-18",
    readMinutes: 6,
    cover:
      "https://images.unsplash.com/photo-1604147495798-57beb5d6af73?auto=format&fit=crop&w=900&q=80",
  },
  {
    slug: "yuzey-bakim-rehberi",
    title: "Yüzey Bakım Rehberi",
    subtitle: "İlk Günkü Işıltı",
    excerpt:
      "Mermer ve porselen yüzeyleri iz bırakmadan temizlemek için profesyonel ipuçları. Günlük bakım, leke giderme ve uzun vadeli koruma yöntemleri.",
    category: "bakim",
    categoryLabel: "Bakım & Koruma",
    date: "2026-02-12",
    readMinutes: 7,
    cover:
      "https://images.unsplash.com/photo-1556909114-aabb1f8ee8c8?auto=format&fit=crop&w=900&q=80",
  },
  {
    slug: "mermer-atolyesi-surdurulebilir-uretim",
    title: "Mermer Atölyesinde Sürdürülebilir Üretim ve Atık Yönetimi",
    subtitle: "Yeşil Üretim Merkezleri",
    excerpt:
      "Atıkların geri kazanımı ve sürdürülebilir üretim pratikleriyle verimlilik artırma. Doğal taş atölyelerinde döngüsel ekonomi nasıl kurulur?",
    category: "surdurulebilirlik",
    categoryLabel: "Sürdürülebilirlik & Endüstri",
    date: "2026-02-05",
    readMinutes: 7,
    cover:
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=900&q=80",
  },
  {
    slug: "mermer-porselen-pazarlama-stratejileri",
    title: "Mermer & Porselen Ürünlerde Pazarlama Stratejileri",
    subtitle: "Dijital Görünürlük",
    excerpt:
      "Mimar ve proje ofislerine ulaşmak için dijital pazarlamada öne çıkan taktikler. Doğal taş sektöründe içerik, SEO ve B2B kanal stratejileri.",
    category: "pazarlama",
    categoryLabel: "Dijital Pazarlama",
    date: "2026-01-28",
    readMinutes: 9,
    cover:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=900&q=80",
  },
];
