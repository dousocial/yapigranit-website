"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

import { useLanguage } from "@/lib/i18n/LanguageContext";

type CollectionItem = {
  id: string;
  name: string;
  brand?: string;
  category?: string;
  color: string;
  image: string;
  desc?: string;
};

type Filters = {
  brand: string[];
  color: string[];
};

const preferredOrder = {
  brand: [
    "Dekton",
    "Infinity",
    "Florim",
    "Atlas Plan",
    "Laminam",
    "Materia",
    "NuovoCorso",
    "Anatolia",
    "T-One"
  ]
};

const sortOptions = (values: string[], order: string[]) => {
  const set = new Set(values.filter(Boolean));
  const sorted = order.filter((value) => set.delete(value));
  return [...sorted, ...Array.from(set).sort()];
};

const uniqueInOrder = (values: string[]) => {
  const seen = new Set<string>();
  const result: string[] = [];
  values.forEach((value) => {
    const key = value.toLocaleLowerCase("tr-TR");
    if (!seen.has(key)) {
      seen.add(key);
      result.push(value);
    }
  });
  return result;
};

const getBrandLabel = (item: CollectionItem) =>
  item.brand?.trim() || item.category?.trim() || "Diğer";

const getColorLabel = (item: CollectionItem) => item.color?.trim() ?? "";

function IconSearch({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-3.5-3.5" />
    </svg>
  );
}

function IconSlider({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M3 6h14" />
      <path d="M3 12h10" />
      <path d="M3 18h18" />
      <circle cx="18" cy="6" r="2" />
      <circle cx="14" cy="12" r="2" />
      <circle cx="8" cy="18" r="2" />
    </svg>
  );
}

function IconX({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M18 6 6 18" />
      <path d="M6 6l12 12" />
    </svg>
  );
}

function IconChevronDown({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

function IconCheck({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M5 13l4 4L19 7" />
    </svg>
  );
}

export default function CollectionGridSection({ items }: { items: CollectionItem[] }) {
  const { t } = useLanguage();
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [activeFilters, setActiveFilters] = useState<Filters>({
    brand: [],
    color: []
  });
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  const filterOptions = useMemo(() => {
    const brands = sortOptions(
      Array.from(new Set(items.map((item) => getBrandLabel(item)).filter(Boolean))),
      preferredOrder.brand
    );
    const colors = uniqueInOrder(items.map((item) => getColorLabel(item)).filter(Boolean));

    return {
      brand: brands,
      color: colors
    };
  }, [items]);

  const toggleFilter = (type: keyof Filters, value: string) => {
    setActiveFilters((prev) => {
      const isActive = prev[type].includes(value);
      return {
        ...prev,
        [type]: isActive
          ? prev[type].filter((item) => item !== value)
          : [...prev[type], value]
      };
    });
  };

  const hasFilters = activeFilters.brand.length > 0 || activeFilters.color.length > 0;

  const filteredItems = useMemo(() => {
    const term = searchTerm.trim().toLowerCase();
    return items.filter((item) => {
      const itemBrand = getBrandLabel(item);
      const itemColor = getColorLabel(item);
      const brandMatch =
        activeFilters.brand.length === 0 ||
        activeFilters.brand.includes(itemBrand);
      const colorMatch =
        activeFilters.color.length === 0 ||
        activeFilters.color.includes(itemColor);
      const searchMatch =
        term.length === 0 ||
        item.name.toLowerCase().includes(term);
      return brandMatch && colorMatch && searchMatch;
    });
  }, [items, activeFilters, searchTerm]);

  const totalPages = Math.max(1, Math.ceil(filteredItems.length / itemsPerPage));
  const safePage = Math.min(currentPage, totalPages);
  const paginatedItems = filteredItems.slice(
    (safePage - 1) * itemsPerPage,
    safePage * itemsPerPage
  );

  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, activeFilters.brand.join("|"), activeFilters.color.join("|")]);

  useEffect(() => {
    if (currentPage !== safePage) {
      setCurrentPage(safePage);
    }
  }, [currentPage, safePage]);

  return (
    <section id="koleksiyon-grid" className="py-24 bg-black relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 opacity-25 bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.18),transparent_45%)]" />
        <div className="absolute inset-0 opacity-20 bg-[repeating-linear-gradient(120deg,rgba(255,255,255,0.05)_0px,rgba(255,255,255,0.05)_1px,transparent_1px,transparent_18px)]" />
      </div>

      <div className="container mx-auto px-6 relative">
        <header className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between border-b border-white/10 pb-6">
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-gold/60" />
            <h2 className="text-2xl md:text-3xl font-serif tracking-[0.2em] text-white">
              {t.grid.title}
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <div className="relative hidden md:block">
              <IconSearch className="absolute left-4 top-3.5 h-4 w-4 text-gold/60" />
              <input
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
                placeholder={t.grid.searchPlaceholder}
                className="w-72 rounded-full border border-white/10 bg-black/60 px-4 py-2 pl-10 text-sm text-white placeholder:text-white/40 focus:border-gold focus:outline-none"
              />
            </div>

            <button
              type="button"
              onClick={() => setIsMobileFilterOpen(true)}
              className="md:hidden inline-flex items-center justify-center rounded-full border border-white/20 p-2 text-white/80 hover:text-gold transition-colors"
            >
              <IconSlider className="h-5 w-5" />
            </button>
          </div>
        </header>

        <div className="mt-8 flex flex-col gap-10 lg:flex-row">
          <aside
            className={`fixed inset-y-0 left-0 z-[70] w-80 bg-black/95 border-r border-white/10 p-6 transition-transform duration-300 md:static md:z-auto md:w-72 md:translate-x-0 md:bg-transparent md:border-r-0 md:p-0 ${
              isMobileFilterOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
            }`}
          >
            <div className="flex items-center justify-between md:hidden mb-6">
              <span className="text-xs uppercase tracking-[0.3em] text-gold font-bold">
                {t.grid.filters}
              </span>
              <button
                type="button"
                onClick={() => setIsMobileFilterOpen(false)}
                className="text-white/70 hover:text-gold"
              >
                <IconX className="h-5 w-5" />
              </button>
            </div>

            <div className="space-y-8">
              {(
                [
                  ["brand", t.grid.brandName],
                  ["color", t.grid.color]
                ] as Array<[keyof Filters, string]>
              ).map(([key, label]) => (
                <div key={key}>
                  <h3 className="text-[11px] font-bold uppercase tracking-[0.3em] text-white/50 mb-4">
                    {label}
                  </h3>
                  <div className="space-y-3">
                    {filterOptions[key].map((option) => {
                      const active = activeFilters[key].includes(option);
                      return (
                        <button
                          key={option}
                          type="button"
                          onClick={() => toggleFilter(key, option)}
                          className="flex w-full items-center gap-3 text-left"
                        >
                          <span
                            className={`h-5 w-5 border flex items-center justify-center ${
                              active
                                ? "bg-gold border-gold text-stone"
                                : "border-white/20 text-transparent"
                            }`}
                          >
                            {active && <IconCheck className="h-3 w-3 text-stone" />}
                          </span>
                          <span
                            className={`text-sm ${
                              active ? "text-white" : "text-white/60"
                            }`}
                          >
                            {option}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              ))}

              {hasFilters && (
                <button
                  type="button"
                  onClick={() => setActiveFilters({ brand: [], color: [] })}
                  className="w-full border border-gold/40 text-gold text-xs uppercase tracking-[0.3em] py-3 hover:bg-gold/10 transition-colors"
                >
                  {t.grid.clearFilters}
                </button>
              )}
            </div>
          </aside>

          <main className="flex-1">
            <div className="flex items-center justify-between mb-6">
              <span className="text-sm text-white/60">
                <strong className="text-white">{filteredItems.length}</strong>{" "}
                {t.grid.results}
              </span>
              <button
                type="button"
                className="flex items-center gap-2 text-sm text-white/50 hover:text-white transition-colors"
              >
                {t.grid.sort} <IconChevronDown className="h-4 w-4" />
              </button>
            </div>

            {filteredItems.length === 0 ? (
                <div className="text-center py-16 border border-white/10 bg-white/5">
                  <h3 className="text-xl font-serif mb-2 text-white">
                    {t.grid.noResults}
                  </h3>
                  <p className="text-white/50 text-sm">
                    {t.grid.noResultsDesc}
                  </p>
                  {hasFilters && (
                    <button
                      type="button"
                      onClick={() => setActiveFilters({ brand: [], color: [] })}
                      className="mt-4 text-gold text-xs uppercase tracking-[0.3em]"
                    >
                      {t.grid.clearFilters}
                    </button>
                  )}
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {paginatedItems.map((item) => {
                    const itemBrand = getBrandLabel(item);
                    const itemColor = getColorLabel(item);
                    return (
                    <div key={item.id} className="group relative">
                      <div className="aspect-[4/5] overflow-hidden border border-white/10 bg-black/60 relative">
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                      </div>

                      <div className="mt-4 space-y-1">
                        <div className="flex items-start justify-between gap-3">
                          <div>
                            <h3 className="text-lg font-serif text-white">
                              {item.name}
                            </h3>
                            <p className="text-xs uppercase tracking-[0.3em] text-white/50">
                              {itemBrand}
                              {itemColor ? ` — ${itemColor}` : ""}
                            </p>
                          </div>
                          <span className="text-gold text-[10px] uppercase tracking-[0.3em] border border-gold/30 px-2 py-1">
                            {itemBrand}
                          </span>
                        </div>
                        {item.desc && (
                          <p className="text-xs text-white/50 line-clamp-2">
                            {item.desc}
                          </p>
                        )}
                      </div>
                    </div>
                      );
                  })}
                </div>
              )}

              {filteredItems.length > 0 && totalPages > 1 && (
                <div className="mt-12 flex items-center justify-center gap-2 text-sm text-white/70">
                  <button
                    type="button"
                    onClick={() => setCurrentPage((page) => Math.max(1, page - 1))}
                    disabled={safePage === 1}
                    className="h-9 w-9 border border-white/20 rounded-full flex items-center justify-center disabled:opacity-40 disabled:cursor-not-allowed hover:border-gold/60 hover:text-gold transition-colors"
                    aria-label={t.grid.prevPage}
                  >
                    ‹
                  </button>
                  {Array.from({ length: totalPages }, (_, index) => {
                    const page = index + 1;
                    const isActive = page === safePage;
                    return (
                      <button
                        key={`page-${page}`}
                        type="button"
                        onClick={() => setCurrentPage(page)}
                        className={`h-9 w-9 rounded-full border text-xs ${
                          isActive
                            ? "border-gold text-gold"
                            : "border-white/20 text-white/70 hover:border-gold/60 hover:text-gold"
                        } transition-colors`}
                      >
                        {page}
                      </button>
                    );
                  })}
                  <button
                    type="button"
                    onClick={() =>
                      setCurrentPage((page) => Math.min(totalPages, page + 1))
                    }
                    disabled={safePage === totalPages}
                    className="h-9 w-9 border border-white/20 rounded-full flex items-center justify-center disabled:opacity-40 disabled:cursor-not-allowed hover:border-gold/60 hover:text-gold transition-colors"
                    aria-label={t.grid.nextPage}
                  >
                    ›
                  </button>
                </div>
              )}
          </main>
        </div>

        {isMobileFilterOpen && (
          <button
            type="button"
            onClick={() => setIsMobileFilterOpen(false)}
            className="fixed inset-0 bg-black/70 z-50 md:hidden"
            aria-label={t.grid.closeFilters}
          />
        )}
      </div>
    </section>
  );
}
