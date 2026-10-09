import React, { useState } from "react";
import { Link } from "react-router-dom";
import { SEOHead } from "../components/layout/SEOHead";
import { ALL_REFERENCE_WORK } from "../data/products";
import { WorkSample } from "../types";
import { SampleLightbox } from "../components/ui/SampleLightbox";
import { WorkshopTicker } from "../components/layout/WorkshopTicker";
import { Eye } from "lucide-react";

export const OurWorkPage: React.FC = () => {
  const [filter, setFilter] = useState<"ALL" | "CUSTOM TEES" | "OVERSIZED" | "EMBROIDERY" | "TEAM & EVENT WEAR">("ALL");
  const [selectedSample, setSelectedSample] = useState<WorkSample | null>(null);

  const categories = ["ALL", "CUSTOM TEES", "OVERSIZED", "EMBROIDERY", "TEAM & EVENT WEAR"] as const;

  const filteredWork = ALL_REFERENCE_WORK.filter((item) => {
    if (filter === "ALL") return true;
    if (filter === "OVERSIZED") return item.apparelType.includes("Oversized");
    if (filter === "CUSTOM TEES") return item.apparelType.includes("T-Shirt");
    if (filter === "EMBROIDERY") return item.printMethod.includes("Embroidery") || item.apparelType === "Polo T-Shirt";
    if (filter === "TEAM & EVENT WEAR") return item.category === "back-print" || item.apparelType.includes("Regular");
    return true;
  });

  return (
    <>
      <SEOHead
        title="OUR WORK : Real Apparel & Print Archive | BROVE"
        description="Authentic physical garments photographed in our workshop. DTF back graphics, chest placements, mineral acid wash finishes, and precision embroidery details."
        path="/our-work"
      />

      <SampleLightbox sample={selectedSample} onClose={() => setSelectedSample(null)} />

      <div className="w-full bg-surface-paper dark:bg-surface-dark text-text-primary dark:text-text-on-dark pt-20 transition-colors duration-200">
        
        {/* Header Hero */}
        <section className="w-full bg-surface-dark text-text-on-dark py-12 md:py-16 border-b-4 border-primary-container relative overflow-hidden">
          <div className="max-w-[1400px] mx-auto px-margin-mobile lg:px-margin space-y-4 relative z-10">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 bg-primary-container inline-block"></span>
                <span className="font-mono text-xs uppercase tracking-widest text-primary-container font-bold">
                  AUTHENTIC PHYSICAL WORKSHOP ARCHIVE
                </span>
              </div>
              <div className="bg-primary-container text-text-primary px-3 py-1 font-mono text-xs uppercase tracking-wider font-bold shadow-sm">
                UNEDITED PHOTOGRAPHY
              </div>
            </div>

            <div className="max-w-3xl space-y-2">
              <h1 className="font-headline text-5xl sm:text-7xl lg:text-8xl uppercase tracking-tight text-text-on-dark leading-none">
                OUR WORK.
              </h1>
              <p className="font-headline text-2xl sm:text-3xl text-primary-container uppercase tracking-wide">
                WHAT BROVE HAS PRINTED.
              </p>
              <p className="font-body text-base text-surface-container-highest max-w-2xl leading-relaxed">
                Real garments from our Tirunelveli print laboratory floor. Examine physical DTF ink adhesion, soft hand-feel, mineral wash texture variations, and reinforced neckline seams.
              </p>
            </div>
          </div>
        </section>

        <WorkshopTicker />

        <div className="max-w-[1400px] mx-auto px-margin-mobile lg:px-margin py-12 sm:py-16 space-y-12">
          
          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 border-b border-border-neutral dark:border-surface-dark-secondary pb-6">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 font-mono text-xs uppercase font-bold rounded transition-all ${
                  filter === cat
                    ? "bg-surface-dark text-primary-container shadow-[2px_2px_0px_#F2D400]"
                    : "bg-surface-white dark:bg-surface-dark-secondary text-text-primary dark:text-text-on-dark border border-border-neutral dark:border-surface-dark-secondary hover:border-primary-container"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Asymmetrical Editorial Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredWork.map((sample, idx) => {
              // Create visual variety: featured large card for first item in desktop
              const isLarge = idx === 0;

              return (
                <div
                  key={sample.id}
                  onClick={() => setSelectedSample(sample)}
                  className={`group bg-surface-white dark:bg-surface-dark-secondary border-2 border-text-primary dark:border-surface-dark-secondary rounded-lg overflow-hidden cursor-pointer shadow-[4px_4px_0px_#171717] dark:shadow-[4px_4px_0px_#F2D400] transition-transform hover:-translate-y-1 ${
                    isLarge ? "md:col-span-2 lg:col-span-2" : ""
                  }`}
                >
                  <div className={`relative bg-black overflow-hidden flex items-center justify-center ${
                    isLarge ? "aspect-[16/10]" : "aspect-[4/5]"
                  }`}>
                    <img
                      src={sample.image}
                      alt={sample.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-surface-dark/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                      <span className="font-mono text-xs text-primary-container font-bold flex items-center gap-1.5">
                        <Eye className="w-4 h-4" />
                        <span>CLICK TO INSPECT DETAIL</span>
                      </span>
                    </div>

                    <div className="absolute top-3 left-3 bg-surface-dark/90 text-primary-container px-2.5 py-1 font-mono text-[10px] font-bold rounded uppercase">
                      {sample.perspectiveLabel}
                    </div>

                    {sample.highlight && (
                      <div className="absolute bottom-3 right-3 bg-primary-container text-text-primary px-2.5 py-0.5 font-mono text-[10px] font-bold uppercase hidden sm:block">
                        ✓ VERIFIED BATCH
                      </div>
                    )}
                  </div>

                  <div className="p-5 space-y-1.5">
                    <div className="flex items-center justify-between gap-2">
                      <h3 className="font-headline text-xl uppercase tracking-wide text-text-primary dark:text-text-on-dark truncate">
                        {sample.title}
                      </h3>
                      <span className="font-mono text-[10px] text-primary-container bg-surface-dark px-2 py-0.5 rounded shrink-0 uppercase">
                        {sample.printMethod}
                      </span>
                    </div>

                    <p className="font-mono text-xs text-text-muted">
                      CANVAS: {sample.apparelType}
                    </p>

                    {sample.description && (
                      <p className="font-body text-xs text-text-muted leading-relaxed pt-1">
                        {sample.description}
                      </p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom Custom Batch Callout */}
          <div className="bg-surface-dark text-text-on-dark p-8 rounded-lg border-2 border-primary-container flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-1 text-center md:text-left">
              <span className="font-mono text-xs text-primary-container uppercase font-bold block">
                PRINT YOUR OWN DESIGN
              </span>
              <h3 className="font-headline text-3xl uppercase">
                WANT SIMILAR QUALITY FOR YOUR CREW?
              </h3>
              <p className="font-body text-xs text-surface-container-highest">
                Minimum order is just 5 pieces. We review your artwork and match it with the right apparel canvas.
              </p>
            </div>

            <Link
              to="/custom-order"
              className="px-6 py-3.5 bg-primary-container text-text-primary font-headline text-sm uppercase tracking-wider rounded hover:bg-primary-fixed active:scale-95 transition-all shadow-[2px_2px_0px_#FFFFFF] shrink-0"
            >
              SEND YOUR REQUIREMENT →
            </Link>
          </div>

        </div>

      </div>
    </>
  );
};
