export interface Stat {
  value: number;
  suffix: string;
  label: string;
  description?: string;
}

export const stats: Stat[] = [
  {
    value: 25,
    suffix: "+",
    label: "Yıllık Tecrübe",
    description: "Sektörde 1994'ten beri",
  },
  {
    value: 500,
    suffix: "+",
    label: "Tamamlanan Proje",
    description: "Konut, otel, ticari ve kamusal projeler",
  },
  {
    value: 12,
    suffix: "",
    label: "Ülkeye İhracat",
    description: "Almanya başta olmak üzere global pazarlar",
  },
  {
    value: 100,
    suffix: "%",
    label: "Müşteri Memnuniyeti",
    description: "Kalite, teslimat ve süreç odaklı",
  },
];

export const statsExtended: Stat[] = [
  ...stats,
  {
    value: 14,
    suffix: "",
    label: "Hammadde Ülkesi",
    description: "Doğrudan ocak ve fabrikalardan tedarik",
  },
];
