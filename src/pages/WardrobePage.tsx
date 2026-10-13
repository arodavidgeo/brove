import React, { useState } from "react";
import { Link } from "react-router-dom";
import { SEOHead } from "../components/layout/SEOHead";
import { PRODUCTS } from "../data/products";
import { DRESS_CATEGORIES } from "../data/category-products";
import { CategoryScrollRow } from "../components/wardrobe/CategoryScrollRow";
import { formatPrice } from "../lib/utils";
import { WorkSample } from "../types";
import { SampleLightbox } from "../components/ui/SampleLightbox";
import { WorkshopTicker } from "../components/layout/WorkshopTicker";
import { Eye, Info } from "lucide-react";

export const WardrobePage: React.FC = () => {
  const [selectedCategoryTab, setSelectedCategoryTab] = useState<string>("all");
  const [selectedCanvasCategory, setSelectedCanvasCategory] = useState<string>("all");
  const [selectedSample, setSelectedSample] = useState<WorkSample | null>(null);

  const filterTabs = [
    { id: "all", label: "ALL COLLECTIONS", count: 42 },
    { id: "Hoodies", label: "HOODIES", count: 4 },
    { id: "Oversized Acid Wash T-shirts", label: "ACID WASH", count: 8 },
    { id: "Oversized T-shirts", label: "OVERSIZED TEES", count: 26 },
    { id: "Polo shirts", label: "POLO SHIRTS", count: 4 },
    { id: "canvases", label: "BLANK CANVASES", count: PRODUCTS.length },
  ];

  const canvasCategories = [
    { id: "all", label: "ALL CANVASES" },
    { id: "T-Shirts", label: "T-SHIRTS" },
    { id: "Polos", label: "POLOS" },
    { id: "Outerwear", label: "HOODIES & SWEATSHIRTS" },
    { id: "Shirts", label: "SHIRTS" },
  ];

  const visibleDressCategories = DRESS_CATEGORIES.filter((cat) => {
    if (selectedCategoryTab === "all") return true;
    if (selectedCategoryTab === "canvases") return false;
    return cat.folderName === selectedCategoryTab;
  });

  const filteredCanvases = PRODUCTS.filter((prod) => {
    if (selectedCanvasCategory === "all") return true;
    return prod.category === selectedCanvasCategory;
  });

  return (
    <>
      <SEOHead
        title="THE BROVE WARDROBE : Wear It Your Way | Printed Dress Collections & Apparel Canvases"
        description="Choose your fit. Choose your fabric. Add your identity. Explore our printed collections: Hoodies, Oversized Acid Wash, Oversized Tees, and Polo Shirts. Plus unprinted apparel canvases. Minimum order 5 pieces."
        path="/wardrobe"
      />

      <SampleLightbox sample={selectedSample} onClose={() => setSelectedSample(null)} />

      <div className="w-full bg-transparent text-[#2A2A24] pt-20 transition-colors duration-200">
        
        {/* Header Hero Section */}
        <section className="w-full bg-transparent text-[#2A2A24] py-12 md:py-16 border-b-2 border-[#E6E2D3] relative overflow-hidden">
          <div className="max-w-[1400px] mx-auto px-margin-mobile lg:px-margin space-y-4 relative z-10">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 bg-primary-container inline-block"></span>
                <span className="font-mono text-xs uppercase tracking-widest text-[#5A680C] font-bold">
                  PRINTED DRESS COLLECTIONS &amp; CUSTOM APPAREL
                </span>
              </div>
              <div className="bg-primary-container text-text-primary px-3 py-1 font-mono text-xs uppercase tracking-wider font-bold shadow-xs">
                MINIMUM ORDER: 5 PIECES
              </div>
            </div>

            <div className="max-w-3xl space-y-2">
              <h1 className="font-headline text-5xl sm:text-7xl lg:text-8xl uppercase tracking-tight text-[#2A2A24] leading-none">
                THE BROVE WARDROBE.
              </h1>
              <p className="font-headline text-2xl sm:text-3xl text-[#5A680C] uppercase tracking-wide">
                WEAR IT YOUR WAY.
              </p>
              <p className="font-body text-base text-[#55544D] max-w-2xl leading-relaxed">
                Explore our printed dress and apparel collections across Hoodies, Oversized Acid Wash, Oversized T-Shirts, and Polo Shirts. Engineered for custom DTF graphics, tactile embroidery, and streetwear drops.
              </p>
            </div>
          </div>
        </section>

        <WorkshopTicker />

        {/* Filter Navigation */}
        <section className="border-b border-[#E6E2D3] bg-[#FFFFFF]/90 backdrop-blur-md sticky top-16 sm:top-20 z-30 transition-colors">
          <div className="max-w-[1400px] mx-auto px-margin-mobile lg:px-margin py-3 flex items-center justify-between gap-4 overflow-x-auto">
            <div className="flex items-center gap-2">
              {filterTabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setSelectedCategoryTab(tab.id)}
                  className={`px-3.5 py-1.5 font-mono text-xs uppercase font-bold rounded transition-colors whitespace-nowrap flex items-center gap-1.5 ${
                    selectedCategoryTab === tab.id
                      ? "bg-primary-container text-text-primary shadow-xs"
                      : "text-[#66645A] hover:text-[#2A2A24]"
                  }`}
                >
                  <span>{tab.label}</span>
                  <span className="opacity-75 text-[10px]">({tab.count})</span>
                </button>
              ))}
            </div>

            <span className="hidden md:inline-block font-mono text-xs text-[#66645A] uppercase">
              42 PRINTED STYLES • 7 BLANK CANVASES
            </span>
          </div>
        </section>

        {/* ==================================================
            01. PRINTED DRESS & APPAREL CATEGORY SECTIONS
            - Each category displayed as a separate section, one below another
            - Each category in a single horizontal scrolling row
            ================================================== */}
        {visibleDressCategories.length > 0 && (
          <div className="max-w-[1400px] mx-auto px-margin-mobile lg:px-margin py-8 sm:py-12 space-y-12">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b-2 border-[#E6E2D3] pb-4">
              <div>
                <span className="font-mono text-xs uppercase tracking-widest text-[#66645A] font-bold block mb-1">
                  PRINTED DRESS COLLECTIONS // 01
                </span>
                <h2 className="font-headline text-3xl sm:text-5xl uppercase tracking-tight text-[#2A2A24]">
                  PRINTED DRESS &amp; STREETWEAR EDITIONS
                </h2>
              </div>
              <p className="font-body text-xs sm:text-sm text-[#55544D] max-w-md">
                Browse our real physical workshop prints by category. Swipe or use the arrow controls to view all styles in each category row.
              </p>
            </div>

            {/* Render Category Sections One Below Another */}
            <div className="space-y-12">
              {visibleDressCategories.map((section) => (
                <CategoryScrollRow
                  key={section.id}
                  section={section}
                  onPreviewSample={(sample) => setSelectedSample(sample)}
                />
              ))}
            </div>
          </div>
        )}

        {/* ==================================================
            02. BLANK APPAREL CANVASES SECTION
            - For custom orders from scratch
            ================================================== */}
        {(selectedCategoryTab === "all" || selectedCategoryTab === "canvases") && (
          <section className="py-12 sm:py-16 max-w-[1400px] mx-auto px-margin-mobile lg:px-margin space-y-10 border-t-2 border-[#E6E2D3]">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b-2 border-[#E6E2D3] pb-4">
              <div>
                <span className="font-mono text-xs uppercase tracking-widest text-[#66645A] font-bold block mb-1">
                  BLANK CANVASES // 02
                </span>
                <h2 className="font-headline text-3xl sm:text-5xl uppercase tracking-tight text-[#2A2A24]">
                  UNPRINTED APPAREL CANVASES
                </h2>
              </div>
              <p className="font-body text-xs sm:text-sm text-[#55544D] max-w-md">
                Looking to start with raw unprinted blanks? Choose your fit, submit your graphic artwork, and we print your batch.
              </p>
            </div>

            {/* Canvas Category Filter */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2">
              {canvasCategories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCanvasCategory(cat.id)}
                  className={`px-3 py-1 font-mono text-xs uppercase font-bold rounded transition-colors whitespace-nowrap ${
                    selectedCanvasCategory === cat.id
                      ? "bg-primary-container text-text-primary shadow-xs"
                      : "border border-[#E6E2D3] bg-[#FFFFFF] text-[#66645A] hover:text-[#2A2A24]"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Canvases Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredCanvases.map((prod) => (
                <div
                  key={prod.id}
                  id={prod.id}
                  className="bg-[#FFFFFF] border-2 border-[#E6E2D3] rounded-lg overflow-hidden flex flex-col justify-between shadow-[0_4px_20px_rgba(42,42,36,0.06)] transition-transform hover:-translate-y-1"
                >
                  <div>
                    {/* Top Canvas Spec Header */}
                    <div className="p-4 bg-[#FAF8F0] border-b border-[#E6E2D3] flex items-center justify-between">
                      <span className="font-mono text-xs font-bold uppercase text-[#66645A]">
                        {prod.category}
                      </span>
                      <span className="font-headline text-2xl text-[#2A2A24] bg-primary-container px-2.5 py-0.5 rounded shadow-xs">
                        {formatPrice(prod.price, prod.pricingType)}
                      </span>
                    </div>

                    {/* Primary Canvas Photography */}
                    <div className="relative aspect-[4/3] bg-[#FAF8F0] flex items-center justify-center p-6 overflow-hidden">
                      <img
                        src={prod.referenceImages[0] || prod.image}
                        alt={prod.name}
                        className="w-full h-full object-contain transition-transform duration-500 hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute bottom-2 left-2 bg-[#FAF8F0]/90 text-[#2A2A24] border border-[#E6E2D3] font-mono text-[10px] px-2 py-0.5 rounded font-bold uppercase">
                        ✓ RAW BLANK SAMPLE
                      </div>
                    </div>

                    {/* Apparel Details */}
                    <div className="p-6 space-y-4">
                      <div className="space-y-1">
                        <h3 className="font-headline text-3xl uppercase tracking-tight text-[#2A2A24]">
                          {prod.name}
                        </h3>
                        <p className="font-body text-xs text-[#55544D] leading-relaxed">
                          {prod.description}
                        </p>
                      </div>

                      {/* Available Use & Methods */}
                      <div className="space-y-2 border-t border-[#E6E2D3] pt-3 font-mono text-xs">
                        <div className="flex items-center justify-between">
                          <span className="text-[#66645A] uppercase">PRINT METHODS:</span>
                          <span className="font-bold text-[#2A2A24]">
                            {prod.availablePrintingMethods.join(" • ")}
                          </span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-[#66645A] uppercase">MINIMUM ORDER:</span>
                          <span className="font-bold text-[#2A2A24] bg-primary-container px-1.5 py-0.2 rounded">
                            5 PIECES
                          </span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-[#66645A] uppercase">SIZES:</span>
                          <span className="text-[#2A2A24]">
                            {prod.availableSizes.join(", ")}
                          </span>
                        </div>
                      </div>

                      {/* Real Work Reference Thumbnails */}
                      {prod.workSamples && prod.workSamples.length > 0 && (
                        <div className="space-y-1.5 pt-2">
                          <span className="font-mono text-[11px] text-[#66645A] uppercase font-bold block">
                            REAL WORK SAMPLES:
                          </span>
                          <div className="flex items-center gap-2">
                            {prod.workSamples.slice(0, 3).map((sample) => (
                              <button
                                key={sample.id}
                                type="button"
                                onClick={() => setSelectedSample(sample)}
                                className="w-12 h-12 rounded border border-[#E6E2D3] overflow-hidden hover:scale-105 transition-transform shrink-0 relative group"
                                title={sample.title}
                              >
                                <img
                                  src={sample.image}
                                  alt={sample.title}
                                  className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-[#2A2A24]/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                  <Eye className="w-3.5 h-3.5 text-primary-container" />
                                </div>
                              </button>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Card CTA */}
                  <div className="p-6 pt-0">
                    <Link
                      to={`/custom-order?product=${prod.id}`}
                      className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 bg-primary-container text-text-primary font-headline text-sm uppercase tracking-wider rounded hover:bg-primary-fixed active:scale-95 transition-all shadow-[2px_2px_0px_#2A2A24]"
                    >
                      <span>SEND REQUIREMENT →</span>
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom Guidance Box */}
            <div className="bg-[#FAF8F0] text-[#2A2A24] p-6 sm:p-8 rounded-lg border-2 border-primary-container space-y-4 shadow-sm">
              <div className="flex items-center gap-2 text-[#5A680C] font-mono text-xs uppercase font-bold">
                <Info className="w-4 h-4" />
                <span>CUSTOM FABRICATION GUIDANCE</span>
              </div>
              <p className="font-body text-sm sm:text-base leading-relaxed text-[#55544D]">
                Customers choose a blank apparel canvas or printed dress style, and BROVE applies your customized DTF artwork or tactile embroidery. All products can be ordered with mixed sizes (e.g., 2 M, 2 L, 1 XL) to meet the 5-piece minimum order requirement.
              </p>
              <div className="pt-2">
                <Link
                  to="/custom-order"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-primary-container text-text-primary font-headline text-sm uppercase tracking-wider rounded hover:bg-primary-fixed active:scale-95 transition-all shadow-[2px_2px_0px_#2A2A24]"
                >
                  <span>HAVE YOUR OWN SPECIFICATION? SEND REQUIREMENT →</span>
                </Link>
              </div>
            </div>
          </section>
        )}

      </div>
    </>
  );
};
