import React, { useState } from "react";
import { Link } from "react-router-dom";
import { SEOHead } from "../components/layout/SEOHead";
import { PRODUCTS } from "../data/products";
import { formatPrice } from "../lib/utils";
import { WorkSample } from "../types";
import { SampleLightbox } from "../components/ui/SampleLightbox";
import { WorkshopTicker } from "../components/layout/WorkshopTicker";
import { Eye, Info } from "lucide-react";

export const WardrobePage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedSample, setSelectedSample] = useState<WorkSample | null>(null);

  const categories = [
    { id: "all", label: "ALL CANVASES" },
    { id: "T-Shirts", label: "T-SHIRTS" },
    { id: "Polos", label: "POLOS" },
    { id: "Outerwear", label: "HOODIES & SWEATSHIRTS" },
    { id: "Shirts", label: "SHIRTS" },
  ];

  const filteredProducts = PRODUCTS.filter((prod) => {
    if (selectedCategory === "all") return true;
    return prod.category === selectedCategory;
  });

  return (
    <>
      <SEOHead
        title="THE BROVE WARDROBE : Wear It Your Way | Custom Apparel Canvases"
        description="Choose your fit. Choose your fabric. Add your identity. Explore our blank apparel canvases: Regular Fit ₹350, Oversized ₹450, Acid Wash ₹500, Polo ₹360, Hoodie ₹800, Sweatshirt ₹500, Shirts. Minimum order 5 pieces."
        path="/wardrobe"
      />

      <SampleLightbox sample={selectedSample} onClose={() => setSelectedSample(null)} />

      <div className="w-full bg-surface-paper dark:bg-surface-dark text-text-primary dark:text-text-on-dark pt-20 transition-colors duration-200">
        
        {/* Header Hero Section */}
        <section className="w-full bg-surface-dark text-text-on-dark py-12 md:py-16 border-b-4 border-primary-container relative overflow-hidden">
          <div className="max-w-[1400px] mx-auto px-margin-mobile lg:px-margin space-y-4 relative z-10">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 bg-primary-container inline-block"></span>
                <span className="font-mono text-xs uppercase tracking-widest text-primary-container font-bold">
                  APPAREL CANVASES FOR CUSTOMIZATION
                </span>
              </div>
              <div className="bg-primary-container text-text-primary px-3 py-1 font-mono text-xs uppercase tracking-wider font-bold shadow-sm">
                MINIMUM ORDER: 5 PIECES
              </div>
            </div>

            <div className="max-w-3xl space-y-2">
              <h1 className="font-headline text-5xl sm:text-7xl lg:text-8xl uppercase tracking-tight text-text-on-dark leading-none">
                THE BROVE WARDROBE.
              </h1>
              <p className="font-headline text-2xl sm:text-3xl text-primary-container uppercase tracking-wide">
                WEAR IT YOUR WAY.
              </p>
              <p className="font-body text-base text-surface-container-highest max-w-2xl leading-relaxed">
                Choose your fit. Choose your fabric. Add your identity. These are unprinted physical blanks engineered for your custom DTF graphics and embroidery.
              </p>
            </div>
          </div>
        </section>

        <WorkshopTicker />

        {/* Filter Navigation */}
        <section className="border-b border-border-neutral dark:border-surface-dark-secondary bg-surface-white dark:bg-surface-dark-secondary sticky top-16 sm:top-20 z-30 transition-colors">
          <div className="max-w-[1400px] mx-auto px-margin-mobile lg:px-margin py-3 flex items-center justify-between gap-4 overflow-x-auto">
            <div className="flex items-center gap-2">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-3.5 py-1.5 font-mono text-xs uppercase font-bold rounded transition-colors whitespace-nowrap ${
                    selectedCategory === cat.id
                      ? "bg-surface-dark text-primary-container dark:bg-primary-container dark:text-text-primary"
                      : "text-text-muted hover:text-text-primary dark:hover:text-text-on-dark"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            <span className="hidden md:inline-block font-mono text-xs text-text-muted uppercase">
              SHOWING {filteredProducts.length} CANVASES
            </span>
          </div>
        </section>

        {/* Main Canvases Grid */}
        <section className="py-12 sm:py-16 max-w-[1400px] mx-auto px-margin-mobile lg:px-margin space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((prod) => (
              <div
                key={prod.id}
                id={prod.id}
                className="bg-surface-white dark:bg-surface-dark-secondary border-2 border-text-primary dark:border-surface-dark-secondary rounded-lg overflow-hidden flex flex-col justify-between shadow-[6px_6px_0px_#171717] dark:shadow-[6px_6px_0px_#F2D400] transition-transform hover:-translate-y-1"
              >
                <div>
                  {/* Top Canvas Spec Header */}
                  <div className="p-4 bg-surface-paper dark:bg-surface-dark border-b border-border-neutral dark:border-surface-dark-secondary flex items-center justify-between">
                    <span className="font-mono text-xs font-bold uppercase text-text-muted">
                      {prod.category}
                    </span>
                    <span className="font-headline text-2xl text-primary-container bg-surface-dark px-2.5 py-0.5 rounded">
                      {formatPrice(prod.price, prod.pricingType)}
                    </span>
                  </div>

                  {/* Primary Canvas Photography */}
                  <div className="relative aspect-[4/3] bg-surface-paper dark:bg-surface-dark flex items-center justify-center p-6 overflow-hidden">
                    <img
                      src={prod.referenceImages[0] || prod.image}
                      alt={prod.name}
                      className="w-full h-full object-contain transition-transform duration-500 hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute bottom-2 left-2 bg-surface-dark/90 text-primary-container font-mono text-[10px] px-2 py-0.5 rounded font-bold uppercase">
                      ✓ ACTUAL SAMPLE
                    </div>
                  </div>

                  {/* Apparel Details */}
                  <div className="p-6 space-y-4">
                    <div className="space-y-1">
                      <h2 className="font-headline text-3xl uppercase tracking-tight text-text-primary dark:text-text-on-dark">
                        {prod.name}
                      </h2>
                      <p className="font-body text-xs text-text-muted leading-relaxed">
                        {prod.description}
                      </p>
                    </div>

                    {/* Available Use & Methods */}
                    <div className="space-y-2 border-t border-border-neutral dark:border-surface-dark pt-3 font-mono text-xs">
                      <div className="flex items-center justify-between">
                        <span className="text-text-muted uppercase">PRINT METHODS:</span>
                        <span className="font-bold text-text-primary dark:text-text-on-dark">
                          {prod.availablePrintingMethods.join(" • ")}
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-text-muted uppercase">MINIMUM ORDER:</span>
                        <span className="font-bold text-primary-container bg-surface-dark px-1.5 py-0.2 rounded">
                          5 PIECES
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-text-muted uppercase">SIZES:</span>
                        <span className="text-text-primary dark:text-text-on-dark">
                          {prod.availableSizes.join(", ")}
                        </span>
                      </div>
                    </div>

                    {/* Real Work Reference Thumbnails */}
                    {prod.workSamples && prod.workSamples.length > 0 && (
                      <div className="space-y-1.5 pt-2">
                        <span className="font-mono text-[11px] text-text-muted uppercase font-bold block">
                          REAL WORK SAMPLES:
                        </span>
                        <div className="flex items-center gap-2">
                          {prod.workSamples.slice(0, 3).map((sample) => (
                            <button
                              key={sample.id}
                              type="button"
                              onClick={() => setSelectedSample(sample)}
                              className="w-12 h-12 rounded border border-border-neutral dark:border-surface-dark overflow-hidden hover:scale-105 transition-transform shrink-0 relative group"
                              title={sample.title}
                            >
                              <img
                                src={sample.image}
                                alt={sample.title}
                                className="w-full h-full object-cover"
                              />
                              <div className="absolute inset-0 bg-surface-dark/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
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
                    className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 bg-primary-container text-text-primary font-headline text-sm uppercase tracking-wider rounded hover:bg-primary-fixed active:scale-95 transition-all shadow-[2px_2px_0px_#171717]"
                  >
                    <span>SEND REQUIREMENT →</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Guidance Box */}
          <div className="bg-surface-dark text-text-on-dark p-6 sm:p-8 rounded-lg border-2 border-primary-container space-y-4">
            <div className="flex items-center gap-2 text-primary-container font-mono text-xs uppercase font-bold">
              <Info className="w-4 h-4" />
              <span>CUSTOM FABRICATION GUIDANCE</span>
            </div>
            <p className="font-body text-sm sm:text-base leading-relaxed text-surface-container-highest">
              Customers choose a blank apparel canvas, and BROVE applies your customized DTF artwork or tactile embroidery. All products can be ordered with mixed sizes (e.g., 2 M, 2 L, 1 XL) to meet the 5-piece minimum order requirement.
            </p>
            <div className="pt-2">
              <Link
                to="/custom-order"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary-container text-text-primary font-headline text-sm uppercase tracking-wider rounded hover:bg-primary-fixed active:scale-95 transition-all shadow-[2px_2px_0px_#FFFFFF]"
              >
                <span>HAVE YOUR OWN SPECIFICATION? SEND REQUIREMENT →</span>
              </Link>
            </div>
          </div>
        </section>

      </div>
    </>
  );
};
