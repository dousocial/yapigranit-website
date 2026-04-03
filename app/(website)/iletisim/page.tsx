"use client";

import Navbar from "@/components/layout/Navbar";
import CollectionContactSection from "@/components/ui/CollectionContactSection";
import DeTeamSection from "@/components/ui/DeTeamSection";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function ContactPage() {
  const { isDeDomain } = useLanguage();

  return (
    <main className="bg-stone min-h-screen text-white">
      <Navbar />
      <CollectionContactSection />
      {isDeDomain && <DeTeamSection />}
    </main>
  );
}
