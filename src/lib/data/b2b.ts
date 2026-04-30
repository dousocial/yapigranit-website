import {
  Building2,
  Truck,
  Layers,
  TrendingUp,
  PackageCheck,
  Award,
  Users2,
  Factory,
  Clock4,
  Heart,
  ShieldCheck,
  Handshake,
  Lightbulb,
  Leaf,
  Sparkles,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

// All keys reference messages.json — TR fallbacks live there.

export interface B2BFeature {
  titleKey: string; // "B2BFeatures.<keyTitle>"
  descKey: string; // "B2BFeatures.<keyDesc>"
  icon: LucideIcon;
}

export const b2bFeatures: B2BFeature[] = [
  { titleKey: "mekanikCepheTitle", descKey: "mekanikCepheDesc", icon: Building2 },
  { titleKey: "cncTitle", descKey: "cncDesc", icon: Factory },
  { titleKey: "rolveTitle", descKey: "rolveDesc", icon: TrendingUp },
  { titleKey: "sampleTitle", descKey: "sampleDesc", icon: Layers },
  { titleKey: "logisticsTitle", descKey: "logisticsDesc", icon: Truck },
  { titleKey: "supplyTitle", descKey: "supplyDesc", icon: PackageCheck },
];

export interface WhyUs {
  titleKey: string;
  descKey: string;
  icon: LucideIcon;
}

export const whyUs: WhyUs[] = [
  { titleKey: "experienceTitle", descKey: "experienceDesc", icon: Award },
  { titleKey: "teamTitle", descKey: "teamDesc", icon: Users2 },
  { titleKey: "techTitle", descKey: "techDesc", icon: Factory },
  { titleKey: "ontimeTitle", descKey: "ontimeDesc", icon: Clock4 },
  {
    titleKey: "satisfactionTitle",
    descKey: "satisfactionDesc",
    icon: Heart,
  },
];

export interface BrandValue {
  titleKey: string;
  descKey: string;
  icon: LucideIcon;
}

export const brandValues: BrandValue[] = [
  { titleKey: "qualityTitle", descKey: "qualityDesc", icon: ShieldCheck },
  { titleKey: "trustTitle", descKey: "trustDesc", icon: Handshake },
  { titleKey: "innovationTitle", descKey: "innovationDesc", icon: Lightbulb },
  { titleKey: "sustainTitle", descKey: "sustainDesc", icon: Leaf },
  { titleKey: "solutionTitle", descKey: "solutionDesc", icon: Sparkles },
];

export interface TimelineItem {
  year: string;
  // both year-prefixed keys: "y1994Title", "y1994Desc"
  titleKey: string;
  descKey: string;
}

export const timeline: TimelineItem[] = [
  { year: "1994", titleKey: "y1994Title", descKey: "y1994Desc" },
  { year: "2000", titleKey: "y2000Title", descKey: "y2000Desc" },
  { year: "2004", titleKey: "y2004Title", descKey: "y2004Desc" },
  { year: "2005", titleKey: "y2005Title", descKey: "y2005Desc" },
  { year: "2015", titleKey: "y2015Title", descKey: "y2015Desc" },
  { year: "2026", titleKey: "y2026Title", descKey: "y2026Desc" },
];
