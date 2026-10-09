/**
 * Numune gönderim bölgesi.
 * Teknik bir aksaklık nedeniyle numuneler şimdilik yalnızca Denizli il
 * sınırları içine gönderiliyor. Kısıtlama kalktığında form tekrar serbest
 * şehir alanına döndürülebilir.
 */

export const SAMPLE_SHIPPING_PROVINCE = "Denizli";

// Denizli'nin 19 ilçesi (alfabetik)
export const DENIZLI_DISTRICTS = [
  "Acıpayam",
  "Babadağ",
  "Baklan",
  "Bekilli",
  "Beyağaç",
  "Bozkurt",
  "Buldan",
  "Çal",
  "Çameli",
  "Çardak",
  "Çivril",
  "Güney",
  "Honaz",
  "Kale",
  "Merkezefendi",
  "Pamukkale",
  "Sarayköy",
  "Serinhisar",
  "Tavas",
] as const;

export type DenizliDistrict = (typeof DENIZLI_DISTRICTS)[number];
