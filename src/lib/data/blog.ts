export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category:
    | "dogal-tas"
    | "tasarim"
    | "uygulama"
    | "sektor"
    | "proje"
    | "bakim-kullanim";
  categoryLabel: string;
  date: string;
  readMinutes: number;
  cover: string;
  featured?: boolean;
}

export const blogCategories = [
  { slug: "all", label: "Tüm Yazılar" },
  { slug: "dogal-tas", label: "Doğal Taş" },
  { slug: "tasarim", label: "Tasarım" },
  { slug: "uygulama", label: "Uygulama" },
  { slug: "sektor", label: "Sektör" },
  { slug: "proje", label: "Proje" },
  { slug: "bakim-kullanim", label: "Bakım & Kullanım" },
] as const;

export const blogPosts: BlogPost[] = [
  {
    slug: "mermer-mi-granit-mi",
    title: "Mermer mi, Granit mi? Hangisini Seçmeliyim?",
    excerpt:
      "Mermer ve granit arasındaki farklar, kullanım alanları ve seçim yaparken dikkat edilmesi gereken noktaları keşfedin.",
    category: "dogal-tas",
    categoryLabel: "Doğal Taş",
    date: "2026-04-12",
    readMinutes: 5,
    cover:
      "https://images.unsplash.com/photo-1556909172-54557c7e4fb7?auto=format&fit=crop&w=900&q=80",
  },
  {
    slug: "dogal-tas-sektorunde-2026-trendleri",
    title: "Doğal Taş Sektöründe 2026 Trendleri",
    excerpt:
      "Doğal taş sektöründe öne çıkan trendler, yeni renkler, yüzey dokuları ve tasarım anlayışları.",
    category: "sektor",
    categoryLabel: "Sektör",
    date: "2026-04-08",
    readMinutes: 4,
    cover:
      "https://images.unsplash.com/photo-1604147706283-d7119b5b822c?auto=format&fit=crop&w=900&q=80",
  },
  {
    slug: "banyo-tasariminda-dogal-tasin-etkisi",
    title: "Banyo Tasarımlarında Doğal Taşın Etkisi",
    excerpt:
      "Doğal taşın banyolarda estetik ve fonksiyonel kullanımına dair ilham veren tasarım önerileri.",
    category: "tasarim",
    categoryLabel: "Tasarım",
    date: "2026-04-03",
    readMinutes: 6,
    cover:
      "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=900&q=80",
  },
  {
    slug: "cephe-kaplamalarinda-dogal-tasin-gucu",
    title: "Cephe Kaplamalarında Doğal Taşın Gücü",
    excerpt:
      "Mekanik cephe sistemleriyle doğal taşın birleşimi: dayanıklılık, estetik ve uzun ömürlü çözümler.",
    category: "proje",
    categoryLabel: "Proje",
    date: "2026-03-28",
    readMinutes: 5,
    cover:
      "https://images.unsplash.com/photo-1523413555719-e2f0b3c8de32?auto=format&fit=crop&w=900&q=80",
  },
  {
    slug: "porselen-yuzeyler-nerelerde-kullanilir",
    title: "Porselen Yüzeyler Nerelerde Kullanılır?",
    excerpt:
      "Porselen yüzeylerin iç ve dış mekan kullanım alanları, avantajları ve uygulama detayları.",
    category: "uygulama",
    categoryLabel: "Uygulama",
    date: "2026-03-22",
    readMinutes: 4,
    cover:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=80",
  },
  {
    slug: "dogal-tas-yuzeylerin-bakimi",
    title: "Doğal Taş Yüzeylerin Bakımı Nasıl Yapılır?",
    excerpt:
      "Mermer ve granit yüzeylerin uzun ömürlü olması için düzenli bakım ve temizlik önerileri.",
    category: "bakim-kullanim",
    categoryLabel: "Bakım & Kullanım",
    date: "2026-03-18",
    readMinutes: 6,
    cover:
      "https://images.unsplash.com/photo-1556909114-aabb1f8ee8c8?auto=format&fit=crop&w=900&q=80",
  },
  {
    slug: "mutfak-tezgahi-seciminde-dikkat",
    title: "Mutfak Tezgâhı Seçiminde Nelere Dikkat Edilmeli?",
    excerpt:
      "Doğru mutfak tezgahı seçimi için malzeme, kalınlık, dayanıklılık ve estetik kriterleri.",
    category: "tasarim",
    categoryLabel: "Tasarım",
    date: "2026-03-12",
    readMinutes: 5,
    cover:
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=900&q=80",
  },
  {
    slug: "dogal-tasin-yolculugu",
    title: "Doğal Taşın Yolculuğu: Ocaktan Projeye",
    excerpt:
      "Doğal taşın çıkarımından üretim ve uygulama aşamasına kadar geçen süreç.",
    category: "sektor",
    categoryLabel: "Sektör",
    date: "2026-03-07",
    readMinutes: 7,
    cover:
      "https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=900&q=80",
  },
  {
    slug: "otel-projelerinde-luks-ve-zamansiz-yuzeyler",
    title: "Otel Projelerinde Lüks ve Zamansız Yüzeyler",
    excerpt:
      "Otel projelerinde doğal taş kullanımının yarattığı prestij ve kalıcı etkiler.",
    category: "proje",
    categoryLabel: "Proje",
    date: "2026-03-02",
    readMinutes: 6,
    cover:
      "https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=900&q=80",
  },
  {
    slug: "buyuk-ebatli-porselen-uygulamalari",
    title: "Büyük Ebatlı Porselen Uygulamalarında Dikkat Edilmesi Gerekenler",
    excerpt:
      "Büyük ebatlı porselen uygulamalarında doğru taşıma, kesim ve uygulama teknikleri.",
    category: "uygulama",
    categoryLabel: "Uygulama",
    date: "2026-02-28",
    readMinutes: 5,
    cover:
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=900&q=80",
  },
  {
    slug: "ofis-tasarimlarinda-dogal-tas-kullanimi",
    title: "Ofis Tasarımlarında Doğal Taş Kullanımı",
    excerpt:
      "Modern ofislerde doğal taş ile yaratılan kurumsal, sofistike ve ilham verici atmosferler.",
    category: "tasarim",
    categoryLabel: "Tasarım",
    date: "2026-02-20",
    readMinutes: 4,
    cover:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=900&q=80",
  },
  {
    slug: "dis-mekan-dogal-tas-kullanimi",
    title: "Dış Mekân Doğal Taş Kullanımı ve Bakımı",
    excerpt:
      "Dış mekan zemin ve cephelerde doğal taş kullanımı ve bakımına dair pratik bilgiler.",
    category: "bakim-kullanim",
    categoryLabel: "Bakım & Kullanım",
    date: "2026-02-15",
    readMinutes: 5,
    cover:
      "https://images.unsplash.com/photo-1523413555719-e2f0b3c8de32?auto=format&fit=crop&w=900&q=80",
  },
];
