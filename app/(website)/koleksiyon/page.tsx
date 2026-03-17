import StoneAssistant from "@/components/assistant/StoneAssistant";
import Navbar from "@/components/layout/Navbar";
import CollectionGridSection from "@/components/ui/CollectionGridSection";
import CollectionContactSection from "@/components/ui/CollectionContactSection";
import KoleksiyonHeroSection from "@/components/ui/KoleksiyonHeroSection";
import StoneGuideSection from "@/components/ui/StoneGuideSection";
import TrendVisionSection from "@/components/ui/TrendVisionSection";
import { promises as fs } from "fs";
import path from "path";

type CollectionItem = {
  id: string;
  name: string;
  brand: string;
  color: string;
  image: string;
  desc: string;
};

const COLLECTION_LIST_PATH = path.join(process.cwd(), "collection-list.txt");
const FALLBACK_IMAGE =
  "https://images.unsplash.com/photo-1617103996702-96ff29b1c467?q=80&w=1000&auto=format&fit=crop";

const isImageUrl = (value: string) =>
  value.startsWith("http://") || value.startsWith("https://") || value.startsWith("/");

const extractColor = (input: string) => {
  const explicitMatch = input.match(
    /Renk\s*:\s*([A-Za-zÇĞİÖŞÜçğıöşü\s-]+)/i
  );
  if (explicitMatch?.[1]) {
    const value = explicitMatch[1].split(/[.,;]/)[0].trim();
    return value;
  }

  const patterns: Array<[RegExp, string]> = [
    [/(siyah|black|noir|nero|onyx)/i, "Siyah"],
    [/(beyaz|white|ivory|bianco|alba)/i, "Beyaz"],
    [/(gri|grey|gray|silver|argent|argentium)/i, "Gri"],
    [/(bej|beige|crema|sand|ecru)/i, "Bej"],
    [/(kahverengi|brown|marron|moro|chocolate)/i, "Kahverengi"],
    [/(mavi|blue|ocean|azure|sky)/i, "Mavi"],
    [/(yesil|yeşil|green|emerald|verde)/i, "Yeşil"],
    [/(kirmizi|kırmızı|rosso|red)/i, "Kırmızı"],
    [/(mor|purple|violet|viola)/i, "Mor"],
    [/(altin|altın|gold|oro)/i, "Altın"],
    [/(turuncu|orange|amber)/i, "Turuncu"]
  ];

  const normalized = input.toLowerCase();
  for (const [pattern, label] of patterns) {
    if (pattern.test(normalized)) {
      return label;
    }
  }

  return "";
};

const normalizeColorLabel = (value: string) => {
  if (!value) return "";
  const normalized = value
    .trim()
    .replace(/\s+/g, " ")
    .replace(/\s*\/\s*/g, " / ")
    .toLocaleLowerCase("tr-TR");
  return normalized
    .split(" ")
    .map((part) =>
      part === "/" ? part : part.charAt(0).toLocaleUpperCase("tr-TR") + part.slice(1)
    )
    .join(" ");
};

const slugify = (value: string) =>
  value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");

const parseCollectionList = (raw: string): CollectionItem[] => {
  const lines = raw
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter(Boolean)
    .filter((line) => !line.startsWith("#"));

  const entries = lines.slice(1);

  return entries
    .map((line, index) => {
      const parts = line.split("|").map((part) => part.trim());
      const brand = parts[0] ?? "";
      const name = parts[1] ?? "";
      let color = "";
      let image = "";
      let desc = "";

      if (!brand || !name) {
        return null;
      }

      if (parts.length >= 5 || (parts.length >= 4 && !isImageUrl(parts[2]) && isImageUrl(parts[3]))) {
        color = parts[2] ?? "";
        image = parts[3] ?? "";
        desc = parts.slice(4).join(" | ").trim();
      } else {
        image = parts[2] ?? "";
        desc = parts.slice(3).join(" | ").trim();
      }

      const resolvedColor = normalizeColorLabel(color) || extractColor(`${name} ${desc}`);
      const id = `${slugify(brand)}-${slugify(name)}-${index + 1}`;
      return {
        id,
        name: name.trim(),
        brand: brand.trim(),
        color: resolvedColor,
        image: image || FALLBACK_IMAGE,
        desc
      };
    })
    .filter(Boolean) as CollectionItem[];
};

const getCollectionItems = async () => {
  try {
    const raw = await fs.readFile(COLLECTION_LIST_PATH, "utf8");
    return parseCollectionList(raw);
  } catch (error) {
    console.warn("collection-list.txt okunamadı.", error);
    return [];
  }
};

export default async function KoleksiyonPage() {
  const collectionItems = await getCollectionItems();

  return (
    <main className="min-h-screen bg-stone text-white pt-12 pb-20">
      <Navbar />

      <KoleksiyonHeroSection />

      <CollectionGridSection items={collectionItems} />

      <StoneGuideSection />

      <TrendVisionSection />

      {/*
      <section className="py-24 bg-black">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-gold text-xs font-bold tracking-[0.2em] uppercase mb-3 block">
                Taş Uzmanı
              </span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
                Yapay Zeka Destekli Danışman
              </h2>
              <p className="text-gray-400 leading-relaxed">
                Sağ alt köşedeki akıllı asistanımız, kullanım alışkanlıklarınıza
                göre en doğru yüzeyi önerir. Malzeme seçimi, bakım ve dayanım
                konularında hızlı yanıt alabilirsiniz.
              </p>
            </div>

            <div className="border border-white/10 bg-white/5 p-6 md:p-8">
              <p className="text-xs uppercase tracking-[0.2em] text-gray-400 mb-4">
                Örnek Diyalog
              </p>
              <div className="space-y-4 text-sm">
                <div className="rounded-2xl bg-white/10 p-4">
                  Limonu çok kullanırım, tezgahım bozulur mu?
                </div>
                <div className="rounded-2xl bg-gold/20 p-4 text-gray-100">
                  Limon asidik olduğu için mermer yüzeylerde matlaşma
                  yapabilir. Sizin için asitlere tam dirençli Porselen veya
                  Kuvars tezgahlarımızı öneririm.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      */}

      <CollectionContactSection />

      <StoneAssistant />
    </main>
  );
}
