export interface Stat {
  value: number;
  suffix: string;
  label: string;
  description?: string;
}

export const stats: Stat[] = [
  {
    value: 20,
    suffix: "+",
    label: "Yıllık Deneyim",
    description: "Sektörde 2004'ten beri",
  },
  {
    value: 1000,
    suffix: "+",
    label: "Tamamlanan Proje",
    description: "Konut, otel, ticari ve özel üretim projeleri",
  },
  {
    value: 50,
    suffix: "+",
    label: "Uzman Ekip",
    description: "Tasarım, üretim ve uygulama uzmanı",
  },
  {
    value: 30,
    suffix: "+",
    label: "Ülkeye İhracat",
    description: "Avrupa, Orta Doğu ve global pazarlara",
  },
];

export const statsExtended = [
  ...stats,
  {
    value: 98,
    suffix: "%",
    label: "Müşteri Memnuniyeti",
    description: "Kalite ve teslimat süreçlerinde",
  },
];
