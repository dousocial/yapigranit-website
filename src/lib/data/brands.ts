/**
 * Global çözüm ortağı markalar — sinterlenmiş porselen, kuvars,
 * büyük ebat yüzeyler ve dekoratif taş üreticileri.
 */

export interface Brand {
  name: string;
  category: "porselen" | "kuvars" | "buyuk-ebat" | "dekoratif";
  country?: string;
  url?: string;
}

export const brands: Brand[] = [
  { name: "DEKTON", category: "buyuk-ebat", country: "İspanya" },
  { name: "INFINITY", category: "buyuk-ebat", country: "İtalya" },
  { name: "NEOLITH", category: "porselen", country: "İspanya" },
  { name: "FLORIM", category: "porselen", country: "İtalya" },
  { name: "LAMİNAM", category: "porselen", country: "İtalya" },
  { name: "NUOVOCORSO", category: "porselen", country: "İtalya" },
  { name: "ANATOLIA", category: "dekoratif" },
  { name: "ATLASPLAN", category: "buyuk-ebat", country: "İtalya" },
  { name: "TECHLAM", category: "porselen", country: "İspanya" },
  { name: "MATERİA", category: "dekoratif" },
  { name: "T-ONE", category: "buyuk-ebat" },
  { name: "ÇİMSTONE", category: "kuvars", country: "Türkiye" },
  { name: "BELENCO", category: "kuvars", country: "Türkiye" },
];

export const brandCategoryLabels: Record<Brand["category"], string> = {
  porselen: "Sinterlenmiş Porselen",
  kuvars: "Kuvars Yüzey",
  "buyuk-ebat": "Büyük Ebat Yüzey",
  dekoratif: "Dekoratif Yüzey",
};
