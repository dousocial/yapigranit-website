export interface Product {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  image: string;
}

export const products: Product[] = [
  {
    slug: "mermer",
    name: "Mermer",
    tagline: "Doğal ve şık",
    description:
      "Zamanın özünü taşıyan, projelerinize estetik ve prestij katan benzersiz mermer çeşitleri.",
    image:
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=900&q=80",
  },
  {
    slug: "granit",
    name: "Granit",
    tagline: "Dayanıklı ve güçlü",
    description:
      "Yüksek dayanıklılığı ve karakteristik desenleriyle iç ve dış mekanların güçlü çözümü.",
    image:
      "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=900&q=80",
  },
  {
    slug: "porselen",
    name: "Porselen",
    tagline: "Modern ve fonksiyonel",
    description:
      "Büyük ebatlı porselen yüzeylerle kusursuz, fonksiyonel ve modern iç mekan dokunuşu.",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=80",
  },
  {
    slug: "ozel-yuzeyler",
    name: "Özel Yüzeyler",
    tagline: "Projenize özel çözümler",
    description:
      "Ölçü, doku ve renk olarak projeye özel tasarlanan, sıra dışı yüzey çözümleri.",
    image:
      "https://images.unsplash.com/photo-1604147706283-d7119b5b822c?auto=format&fit=crop&w=900&q=80",
  },
];
