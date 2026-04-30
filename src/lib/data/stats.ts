export interface Stat {
  value: number;
  suffix: string;
  // Stats namespace key (e.g. "yearsExperienceLabel")
  labelKey: string;
}

export const stats: Stat[] = [
  { value: 25, suffix: "+", labelKey: "yearsExperienceLabel" },
  { value: 500, suffix: "+", labelKey: "projectsCompletedLabel" },
  { value: 12, suffix: "", labelKey: "countriesExportedLabel" },
  { value: 100, suffix: "%", labelKey: "satisfactionLabel" },
];

export const statsExtended: Stat[] = [
  ...stats,
  { value: 14, suffix: "", labelKey: "rawMaterialCountriesLabel" },
];
