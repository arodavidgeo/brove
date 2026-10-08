import React, { useState } from "react";
import { Link } from "react-router-dom";
import { SEOHead } from "../components/layout/SEOHead";
import { ALL_REFERENCE_WORK } from "../data/products";
import { WorkSample } from "../types";
import { ArrowRight, Sparkles, MessageCircle, Eye } from "lucide-react";
import { BUSINESS_FACTS } from "../data/brove-content";
import { WorkshopTicker } from "../components/layout/WorkshopTicker";
import { SampleLightbox } from "../components/ui/SampleLightbox";

export const OurWorkPage: React.FC = () => {
  const [filter, setFilter] = useState<string>("all");
  const [selectedSample, setSelectedSample] = useState<WorkSample | null>(null);

  const filteredWork = ALL_REFERENCE_WORK.filter((item) => {
    if (filter === "all") return true;
    if (filter === "back-print") return item.category === "back-print";
    if (filter === "acid-wash") return item.category === "acid-wash";
    if (filter === "t-shirt") return item.category === "t-shirt";
    if (filter === "macro") return item.category === "macro";
    return true;
  });

  return (
    <>
      <SEOHead
        title="OUR WORK : Real Apparel & Print Samples | BROVE"
        description="Explore actual custom apparel and print samples created by BROVE. Real photographs of printed T-shirts, oversized streetwear, and mineral acid wash pieces."
        path="/our-work"
      />

      {/* Lightbox modal */}
      <SampleLightbox sample={selectedSample} onClose={() => setSelectedSample(null)} />

      <div className="w-full bg-surface-paper py-8 md:py-16 pt-24">
        
        {/* Workshop Marquee Ticker */}
        <WorkshopTicker className="mb-8" />

        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 space-y-10">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 bg-primary-container text-text-primary px-3 py-1 font-mono text-xs font-bold border border-text-primary shadow-[2px_2px_0px_#171717]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>AUTHENTIC WORKSHOP ARCHIVE</span>
            </div>
            <h1 className="font-headline text-5xl sm:text-7xl uppercase text-text-primary tracking-tight leading-none">
              OUR WORK.
            </h1>
            <p className="font-body text-sm sm:text-base text-text-muted leading-relaxed">
              WHAT BROVE HAS PRINTED. Real unedited apparel photographed in our physical workshop in Coimbatore. Explore actual DTF back graphics, front chest placements, mineral acid wash finishes, and print cure details.
            </p>
          </div>

          {/* Filter Tabs by Perspective & Technique */}
          <div className="flex flex-wrap items-center justify-center gap-2 border-b border-border-neutral pb-6">
            <button
              onClick={() => setFilter("all")}
              className={`px-4 py-2 font-mono text-xs uppercase tracking-wider rounded font-bold transition-all ${
                filter === "all"
                  ? "bg-surface-dark text-text-on-dark shadow-[2px_2px_0px_#171717]"
                  : "bg-white text-text-primary hover:bg-surface-paper border border-border-neutral"
              }`}
            >
              ALL SAMPLES ({ALL_REFERENCE_WORK.length})
            </button>
            <button
              onClick={() => setFilter("back-print")}
              className={`px-4 py-2 font-mono text-xs uppercase tracking-wider rounded font-bold transition-all ${
                filter === "back-print"
                  ? "bg-surface-dark text-text-on-dark shadow-[2px_2px_0px_#171717]"
                  : "bg-white text-text-primary hover:bg-surface-paper border border-border-neutral"
              }`}
            >
              FULL BACK GRAPHICS
            </button>
            <button
              onClick={() => setFilter("acid-wash")}
              className={`px-4 py-2 font-mono text-xs uppercase tracking-wider rounded font-bold transition-all ${
                filter === "acid-wash"
                  ? "bg-surface-dark text-text-on-dark shadow-[2px_2px_0px_#171717]"
                  : "bg-white text-text-primary hover:bg-surface-paper border border-border-neutral"
              }`}
            >
              ACID WASH PRINTS
            </button>
            <button
              onClick={() => setFilter("t-shirt")}
              className={`px-4 py-2 font-mono text-xs uppercase tracking-wider rounded font-bold transition-all ${
                filter === "t-shirt"
                  ? "bg-surface-dark text-text-on-dark shadow-[2px_2px_0px_#171717]"
                  : "bg-white text-text-primary hover:bg-surface-paper border border-border-neutral"
              }`}
            >
              FRONT CHEST ART
            </button>
            <button
              onClick={() => setFilter("macro")}
              className={`px-4 py-2 font-mono text-xs uppercase tracking-wider rounded font-bold transition-all ${
                filter === "macro"
                  ? "bg-surface-dark text-text-on-dark shadow-[2px_2px_0px_#171717]"
                  : "bg-white text-text-primary hover:bg-surface-paper border border-border-neutral"
              }`}
            >
              MACRO CURE DETAILS
            </button>
          </div>

          {/* Real Work Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredWork.map((item) => (
              <div
                key={item.id}
                onClick={() => setSelectedSample(item)}
                className="bg-white border-2 border-text-primary rounded overflow-hidden shadow-[4px_4px_0px_#171717] flex flex-col justify-between group cursor-pointer hover:-translate-y-1 transition-all"
              >
                <div className="relative aspect-[4/5] bg-surface-dark overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  
                  {/* Perspective badge */}
                  <div className="absolute top-2.5 left-2.5 bg-primary-container text-text-primary font-mono text-[10px] px-2 py-0.5 rounded font-bold uppercase tracking-wider shadow-sm">
                    {item.perspectiveLabel}
                  </div>

                  <div className="absolute bottom-2.5 right-2.5 bg-surface-dark/90 text-text-on-dark font-mono text-[10px] px-2 py-0.5 rounded font-bold uppercase">
                    {item.printMethod}
                  </div>

                  {/* Hover prompt */}
                  <div className="absolute inset-0 bg-surface-dark/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-1.5 text-white font-mono text-xs uppercase font-bold">
                    <Eye className="w-4 h-4 text-primary-container" />
                    <span>INSPECT FULL-RES</span>
                  </div>
                </div>

                <div className="p-4 space-y-2 flex-grow flex flex-col justify-between bg-white">
                  <div>
                    <h3 className="font-headline text-lg uppercase text-text-primary leading-tight group-hover:text-primary-DEFAULT transition-colors">
                      {item.title}
                    </h3>
                    <p className="font-mono text-xs text-text-muted mt-0.5">
                      {item.apparelType}
                    </p>
                    {item.highlight && (
                      <p className="font-mono text-[11px] text-text-muted line-clamp-1 pt-1">
                        {item.highlight}
                      </p>
                    )}
                  </div>

                  <div className="pt-3 border-t border-border-neutral">
                    <span className="w-full inline-flex items-center justify-center gap-1.5 bg-surface-paper group-hover:bg-primary-container text-text-primary py-2 px-3 font-mono text-xs uppercase tracking-wider font-bold rounded transition-colors">
                      <span>INSPECT SAMPLE →</span>
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Callout Box */}
          <div className="bg-surface-dark text-text-on-dark border-4 border-primary-container p-8 sm:p-12 rounded flex flex-col md:flex-row items-center justify-between gap-8 shadow-[8px_8px_0px_#171717]">
            <div className="space-y-2 text-center md:text-left">
              <span className="font-mono text-xs uppercase text-primary-container tracking-widest font-bold">
                PRINT YOUR OWN DESIGN
              </span>
              <h2 className="font-headline text-3xl sm:text-5xl uppercase text-text-on-dark leading-tight">
                READY TO BRING YOUR IDEA TO LIFE?
              </h2>
              <p className="font-body text-sm text-surface-container-high max-w-xl">
                Submit your requirement with quantity, sizes, and design. Minimum 5 pieces for your college, company, or club.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <Link
                to="/custom-order"
                className="inline-flex items-center gap-2 bg-primary-container text-text-primary px-8 py-4 font-headline text-xl uppercase tracking-wider hover:bg-white active:scale-95 transition-all shadow-[2px_2px_0px_#ffffff] rounded"
              >
                <span>SEND YOUR REQUIREMENT →</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href={`https://wa.me/91${BUSINESS_FACTS.contact.whatsapp}?text=Hello%20BROVE,%20I%20saw%20your%20work%20samples%20and%20want%20to%20discuss%20an%20order.`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-surface-dark-secondary text-text-on-dark px-6 py-4 font-mono text-xs uppercase tracking-wider font-bold hover:text-primary-container transition-colors border border-surface-dark-secondary rounded"
              >
                <MessageCircle className="w-4 h-4 text-primary-container" />
                <span>WHATSAPP US</span>
              </a>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};
