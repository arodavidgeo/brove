import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SEOHead } from "../components/layout/SEOHead";
import { PRODUCTS, ALL_REFERENCE_WORK } from "../data/products";
import { WorkSample } from "../types";
import { formatPrice } from "../lib/utils";
import { ArrowRight, ShieldCheck, Sparkles, Image as ImageIcon, ZoomIn, Eye } from "lucide-react";
import { WorkshopTicker } from "../components/layout/WorkshopTicker";
import { SampleLightbox } from "../components/ui/SampleLightbox";

export const WardrobePage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [workFilter, setWorkFilter] = useState<string>("all");
  const [selectedSample, setSelectedSample] = useState<WorkSample | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const categories = [
    { id: "all", label: "ALL APPAREL" },
    { id: "T-Shirts", label: "T-SHIRTS" },
    { id: "Polos", label: "POLOS" },
    { id: "Outerwear", label: "HOODIES & SWEATSHIRTS" },
    { id: "Shirts", label: "SHIRTS" },
  ];

  const filteredProducts = PRODUCTS.filter((prod) => {
    if (selectedCategory === "all") return true;
    return prod.category === selectedCategory;
  });

  const filteredReferenceWork = ALL_REFERENCE_WORK.filter((item) => {
    if (workFilter === "all") return true;
    if (workFilter === "back-print") return item.category === "back-print";
    if (workFilter === "acid-wash") return item.category === "acid-wash";
    if (workFilter === "t-shirt") return item.category === "t-shirt";
    if (workFilter === "macro") return item.category === "macro";
    return true;
  });

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Subtle parallax on wardrobe cards
      gsap.utils.toArray<HTMLElement>(".wardrobe-product-block").forEach((block) => {
        const image = block.querySelector(".parallax-product-img");
        if (image) {
          gsap.fromTo(
            image,
            { y: -10 },
            {
              y: 10,
              ease: "none",
              scrollTrigger: {
                trigger: block,
                start: "top bottom",
                end: "bottom top",
                scrub: 1,
              },
            }
          );
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, [selectedCategory]);

  return (
    <>
      <SEOHead
        title="THE WARDROBE : Apparel for Your Ideas | BROVE"
        description="Explore apparel types available for custom printing and embroidery: Regular Fit, Oversized, Acid Wash, Polos, Hoodies, Sweatshirts, and Shirts. Minimum order 5 pieces."
        path="/wardrobe"
      />

      {/* Lightbox inspection modal for real workshop samples */}
      <SampleLightbox sample={selectedSample} onClose={() => setSelectedSample(null)} />

      <div ref={containerRef} className="w-full bg-surface-paper pt-20">
        
        {/* WARDROBE HERO */}
        <section className="w-full bg-surface-dark text-text-on-dark py-12 md:py-16 border-b-4 border-primary-container relative overflow-hidden">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 flex flex-col gap-6 relative z-10">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 bg-primary-container inline-block"></span>
                <span className="font-mono text-xs uppercase tracking-widest text-primary-container font-bold">
                  BROVE APPAREL CATALOGUE
                </span>
              </div>
              <div className="bg-primary-container text-text-primary px-3 py-1 font-mono text-xs uppercase tracking-wider font-bold">
                MINIMUM ORDER: 5 PIECES
              </div>
            </div>

            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
              <div className="max-w-3xl space-y-3">
                <h1 className="font-headline text-5xl sm:text-7xl lg:text-8xl uppercase text-text-on-dark tracking-tight leading-none">
                  APPAREL FOR <br />
                  <span className="text-primary-container">YOUR IDEAS.</span>
                </h1>
                <p className="font-body text-base sm:text-lg text-surface-container-high max-w-2xl leading-relaxed">
                  Explore our complete blank apparel silhouettes, inspect real unedited workshop photographs showing front placements, full back graphics, and print cure details, and submit your requirement.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
                <Link
                  to="/custom-order"
                  className="inline-flex items-center gap-2 bg-primary-container text-text-primary px-6 py-3.5 font-mono text-sm uppercase tracking-wider font-bold hover:bg-white active:scale-95 transition-all shadow-[2px_2px_0px_#ffffff]"
                >
                  <span>START YOUR ORDER →</span>
                </Link>
                <a
                  href="#our-work"
                  className="inline-flex items-center gap-2 bg-surface-dark-secondary text-text-on-dark px-5 py-3.5 font-mono text-xs uppercase tracking-wider border border-surface-dark-secondary hover:text-primary-container transition-colors"
                >
                  <ImageIcon className="w-4 h-4 text-primary-container" />
                  <span>INSPECT REAL SAMPLES</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Live Workshop Marquee Banner */}
        <WorkshopTicker />

        {/* Category Navigation Toolbar */}
        <section className="bg-white border-b border-border-neutral sticky top-20 z-30 shadow-sm">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 py-3 flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-2">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-4 py-2 font-headline text-sm uppercase tracking-wider transition-all rounded ${
                    selectedCategory === cat.id
                      ? "bg-surface-dark text-text-on-dark"
                      : "bg-surface-paper text-text-primary hover:bg-surface-container"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
            <div className="font-mono text-xs text-text-muted flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-primary-container fill-primary-container stroke-text-primary" />
              <span>MIN. 5 PIECES • MIX SIZES FREELY</span>
            </div>
          </div>
        </section>

        {/* APPAREL CATALOGUE SECTIONS */}
        <section className="py-12 sm:py-16">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 space-y-16">
            {filteredProducts.map((product) => {
              const isCustom = product.pricingType === "custom";
              const samples = product.workSamples || [];
              const hasSamples = samples.length > 0;

              return (
                <article
                  key={product.id}
                  id={product.id}
                  className="wardrobe-product-block bg-white border-2 border-text-primary rounded shadow-[6px_6px_0px_#171717] overflow-hidden"
                >
                  {/* Top Bar */}
                  <div className="bg-surface-dark text-text-on-dark px-6 py-3.5 flex flex-wrap items-center justify-between gap-3 border-b border-surface-dark-secondary">
                    <div className="flex items-center gap-3">
                      <span className="w-2.5 h-2.5 rounded-full bg-primary-container inline-block"></span>
                      <span className="font-mono text-xs uppercase tracking-widest text-primary-container font-bold">
                        {product.category}
                      </span>
                    </div>
                    <div className="flex items-center gap-4 font-mono text-xs">
                      <span>MINIMUM ORDER: 5 PIECES</span>
                      <span className="hidden sm:inline">•</span>
                      <span className="hidden sm:inline">ST COURIER ALL INDIA</span>
                    </div>
                  </div>

                  {/* Main Product Info & Diverse Reference Gallery */}
                  <div className="p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                    
                    {/* Left: Apparel Product Presentation & Specifications */}
                    <div className="lg:col-span-5 space-y-6">
                      <div className="relative bg-surface-paper border border-border-neutral rounded p-6 sm:p-8 flex items-center justify-center min-h-[320px] overflow-hidden">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="parallax-product-img w-full max-h-[280px] object-contain transition-transform duration-500 hover:scale-105"
                          loading="lazy"
                        />
                        <div className="absolute top-3 left-3 bg-primary-container text-text-primary font-mono text-[10px] font-bold px-2 py-1 uppercase tracking-wider">
                          APPAREL BLANK
                        </div>
                      </div>

                      <div className="space-y-4">
                        <div className="flex items-baseline justify-between gap-3">
                          <h2 className="font-headline text-3xl sm:text-4xl uppercase text-text-primary leading-tight">
                            {product.name}
                          </h2>
                          <div className="text-right shrink-0">
                            <span className="font-headline text-3xl text-text-primary block">
                              {formatPrice(product.price, product.pricingType)}
                            </span>
                            <span className="font-mono text-[10px] text-text-muted uppercase block">
                              {isCustom ? "CUSTOM QUOTE" : "STARTING RATE"}
                            </span>
                          </div>
                        </div>

                        <p className="font-body text-sm text-text-muted leading-relaxed">
                          {product.description}
                        </p>

                        {/* Available Color Swatches */}
                        {product.availableColors && (
                          <div className="space-y-1.5 pt-1">
                            <span className="font-mono text-[11px] uppercase tracking-wider text-text-muted block font-bold">
                              STANDARD GARMENT COLORS:
                            </span>
                            <div className="flex flex-wrap items-center gap-2">
                              {product.availableColors.map((color) => (
                                <div
                                  key={color.name}
                                  className="flex items-center gap-1.5 bg-surface-paper px-2 py-1 rounded border border-border-neutral text-[11px] font-mono text-text-primary"
                                >
                                  <span
                                    className="w-3 h-3 rounded-full border border-surface-dark/40 inline-block shrink-0"
                                    style={{ backgroundColor: color.hex }}
                                  />
                                  <span>{color.name}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* Customization Support */}
                        <div className="pt-2 border-t border-border-neutral space-y-2">
                          <span className="font-mono text-xs uppercase text-text-primary font-bold block">
                            HOW BROVE CUSTOMIZES THIS:
                          </span>
                          <div className="flex flex-wrap gap-2">
                            {product.availablePrintingMethods.map((method) => (
                              <span
                                key={method}
                                className="bg-primary-container/20 border border-primary-container text-text-primary font-mono text-xs px-2.5 py-1 rounded font-bold uppercase"
                              >
                                {method === "DTF"
                                  ? "DTF PRINTING (Vibrant & Detailed)"
                                  : "EMBROIDERY (Tactile & Textured)"}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* CTA for this apparel */}
                        <div className="pt-4 flex flex-col sm:flex-row gap-3">
                          <Link
                            to={`/custom-order?product=${product.id}`}
                            className="inline-flex items-center justify-center gap-2 bg-primary-container text-text-primary py-3.5 px-6 font-mono text-sm uppercase tracking-wider font-bold shadow-[2px_2px_0px_#171717] hover:bg-white active:scale-95 transition-all border border-text-primary flex-1 rounded"
                          >
                            <span>
                              {isCustom ? "REQUEST A QUOTE →" : "SEND YOUR REQUIREMENT →"}
                            </span>
                            <ArrowRight className="w-4 h-4" />
                          </Link>
                          <Link
                            to={`/product/${product.id}`}
                            className="inline-flex items-center justify-center py-3.5 px-4 bg-surface-paper text-text-primary font-mono text-xs uppercase tracking-wider font-bold hover:bg-surface-container transition-colors border border-border-neutral rounded"
                          >
                            SPECS
                          </Link>
                        </div>
                      </div>
                    </div>

                    {/* Right: DIVERSE REAL BROVE WORK & PERSPECTIVE SAMPLES */}
                    <div className="lg:col-span-7 space-y-4 bg-surface-paper p-6 sm:p-8 rounded border border-border-neutral">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-border-neutral pb-3">
                        <div className="flex items-center gap-2">
                          <Sparkles className="w-4 h-4 text-primary-container fill-primary-container" />
                          <h3 className="font-headline text-xl sm:text-2xl uppercase text-text-primary">
                            REAL WORKSHOP SAMPLES ON THIS APPAREL
                          </h3>
                        </div>
                        <span className="font-mono text-[11px] text-text-muted uppercase">
                          CLICK ANY PHOTO TO ZOOM &amp; INSPECT
                        </span>
                      </div>

                      {hasSamples ? (
                        <div className="space-y-4">
                          {/* Rich varied cards showing different angles & craft features */}
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {samples.map((sample) => (
                              <div
                                key={sample.id}
                                onClick={() => setSelectedSample(sample)}
                                className="group relative bg-white rounded border-2 border-text-primary shadow-[3px_3px_0px_#171717] overflow-hidden cursor-pointer hover:-translate-y-0.5 transition-all flex flex-col justify-between"
                              >
                                <div className="relative aspect-[4/3] bg-surface-dark overflow-hidden">
                                  <img
                                    src={sample.image}
                                    alt={sample.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    loading="lazy"
                                  />
                                  {/* Explicit Perspective Badge */}
                                  <div className="absolute top-2.5 left-2.5 bg-surface-dark/95 border border-primary-container text-primary-container font-mono text-[10px] px-2 py-0.5 rounded font-bold uppercase tracking-wider">
                                    {sample.perspectiveLabel}
                                  </div>

                                  {/* Hover Click to Inspect Overlay */}
                                  <div className="absolute inset-0 bg-surface-dark/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 text-white font-mono text-xs uppercase font-bold">
                                    <ZoomIn className="w-4 h-4 text-primary-container" />
                                    <span>INSPECT HIGH-RES</span>
                                  </div>
                                </div>

                                {/* Metadata Footer */}
                                <div className="p-3 bg-white space-y-1">
                                  <p className="font-headline text-base uppercase text-text-primary leading-tight group-hover:text-primary-DEFAULT transition-colors">
                                    {sample.title}
                                  </p>
                                  {sample.highlight && (
                                    <p className="font-mono text-[11px] text-text-muted line-clamp-1">
                                      {sample.highlight}
                                    </p>
                                  )}
                                </div>
                              </div>
                            ))}
                          </div>

                          <div className="bg-white p-3.5 rounded border border-border-neutral flex items-center justify-between text-xs font-mono text-text-muted">
                            <span>Photographed directly from our Coimbatore print lab.</span>
                            <span className="text-text-primary font-bold">100% Physical Samples</span>
                          </div>
                        </div>
                      ) : (
                        <div className="space-y-4">
                          <div className="p-6 bg-white rounded border border-border-neutral space-y-3">
                            <p className="font-headline text-lg uppercase text-text-primary">
                              CUSTOMIZABLE WITH YOUR ARTWORK OR EMBROIDERY
                            </p>
                            <p className="font-body text-xs text-text-muted leading-relaxed">
                              We prepare this garment for college symposiums, corporate orders, sports clubs, and custom drops. Share your logo, text, or graphic concept with us.
                            </p>
                            <div className="pt-2 flex flex-wrap gap-2 text-xs font-mono">
                              <span className="bg-surface-paper px-2.5 py-1 rounded">
                                High-Density Embroidery
                              </span>
                              <span className="bg-surface-paper px-2.5 py-1 rounded">
                                Multi-Color DTF
                              </span>
                              <span className="bg-surface-paper px-2.5 py-1 rounded">
                                Front &amp; Back Placements
                              </span>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        {/* DEDICATED "WHAT WE'VE PRINTED" SHOWCASE WITH FILTER TABS & LIGHTBOX */}
        <section id="our-work" className="py-16 md:py-20 bg-surface-dark text-text-on-dark border-t-4 border-primary-container">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 space-y-10">
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 border-b border-surface-dark-secondary pb-8">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 bg-primary-container inline-block"></span>
                  <span className="font-mono text-xs uppercase tracking-widest text-primary-container font-bold">
                    VISUAL EVIDENCE OF PHYSICAL CRAFT
                  </span>
                </div>
                <h2 className="font-headline text-4xl sm:text-6xl uppercase tracking-tight text-text-on-dark">
                  WHAT WE'VE PRINTED.
                </h2>
                <p className="font-body text-sm sm:text-base text-surface-container-high max-w-2xl leading-relaxed">
                  Every photo below is an authentic garment produced inside our studio. Click on any piece to inspect the high-resolution ink curing, back span dimensions, and fabric grain.
                </p>
              </div>

              <div className="flex items-center gap-3">
                <Link
                  to="/custom-order"
                  className="inline-flex items-center gap-2 bg-primary-container text-text-primary px-6 py-3 font-mono text-xs uppercase tracking-wider font-bold hover:bg-white active:scale-95 transition-all shadow-[2px_2px_0px_#ffffff] rounded"
                >
                  <span>SEND YOUR REQUIREMENT →</span>
                </Link>
              </div>
            </div>

            {/* Visual Angle Filters: Diverse categorization so photos don't look repetitive */}
            <div className="flex flex-wrap items-center gap-2">
              <button
                onClick={() => setWorkFilter("all")}
                className={`px-4 py-2 font-mono text-xs uppercase tracking-wider rounded font-bold transition-all ${
                  workFilter === "all"
                    ? "bg-primary-container text-text-primary shadow-[2px_2px_0px_#ffffff]"
                    : "bg-surface-dark-secondary text-text-on-dark hover:bg-surface-dark border border-surface-dark-secondary"
                }`}
              >
                ALL SAMPLES ({ALL_REFERENCE_WORK.length})
              </button>
              <button
                onClick={() => setWorkFilter("back-print")}
                className={`px-4 py-2 font-mono text-xs uppercase tracking-wider rounded font-bold transition-all ${
                  workFilter === "back-print"
                    ? "bg-primary-container text-text-primary shadow-[2px_2px_0px_#ffffff]"
                    : "bg-surface-dark-secondary text-text-on-dark hover:bg-surface-dark border border-surface-dark-secondary"
                }`}
              >
                FULL BACK GRAPHICS
              </button>
              <button
                onClick={() => setWorkFilter("acid-wash")}
                className={`px-4 py-2 font-mono text-xs uppercase tracking-wider rounded font-bold transition-all ${
                  workFilter === "acid-wash"
                    ? "bg-primary-container text-text-primary shadow-[2px_2px_0px_#ffffff]"
                    : "bg-surface-dark-secondary text-text-on-dark hover:bg-surface-dark border border-surface-dark-secondary"
                }`}
              >
                ACID WASH &amp; MINERAL TEXTURES
              </button>
              <button
                onClick={() => setWorkFilter("t-shirt")}
                className={`px-4 py-2 font-mono text-xs uppercase tracking-wider rounded font-bold transition-all ${
                  workFilter === "t-shirt"
                    ? "bg-primary-container text-text-primary shadow-[2px_2px_0px_#ffffff]"
                    : "bg-surface-dark-secondary text-text-on-dark hover:bg-surface-dark border border-surface-dark-secondary"
                }`}
              >
                FRONT CHEST PLACEMENTS
              </button>
              <button
                onClick={() => setWorkFilter("macro")}
                className={`px-4 py-2 font-mono text-xs uppercase tracking-wider rounded font-bold transition-all ${
                  workFilter === "macro"
                    ? "bg-primary-container text-text-primary shadow-[2px_2px_0px_#ffffff]"
                    : "bg-surface-dark-secondary text-text-on-dark hover:bg-surface-dark border border-surface-dark-secondary"
                }`}
              >
                PRINT CURE MACRO DETAILS
              </button>
            </div>

            {/* Diverse Gallery Grid of Actual Work */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredReferenceWork.map((item) => (
                <div
                  key={item.id}
                  onClick={() => setSelectedSample(item)}
                  className="bg-surface-dark-secondary rounded overflow-hidden border border-surface-dark-secondary hover:border-primary-container transition-all group flex flex-col justify-between cursor-pointer"
                >
                  <div className="relative aspect-[4/5] overflow-hidden bg-surface-dark">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    
                    {/* Perspective Angle Tag */}
                    <div className="absolute top-2.5 left-2.5 bg-surface-dark/95 border border-primary-container text-primary-container font-mono text-[10px] px-2 py-0.5 rounded font-bold uppercase tracking-wider shadow-sm">
                      {item.perspectiveLabel}
                    </div>

                    {/* Hover Inspect Prompt */}
                    <div className="absolute inset-0 bg-surface-dark/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-1.5 text-white font-mono text-xs uppercase font-bold">
                      <Eye className="w-4 h-4 text-primary-container" />
                      <span>INSPECT SAMPLE</span>
                    </div>
                  </div>

                  <div className="p-4 space-y-1">
                    <h3 className="font-headline text-lg uppercase text-text-on-dark group-hover:text-primary-container transition-colors leading-tight">
                      {item.title}
                    </h3>
                    <p className="font-mono text-xs text-surface-container-high">
                      {item.apparelType}
                    </p>
                    {item.highlight && (
                      <p className="font-mono text-[10px] text-text-muted line-clamp-1 pt-1">
                        {item.highlight}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Callout box */}
            <div className="bg-primary-container text-text-primary p-8 rounded flex flex-col md:flex-row items-center justify-between gap-6 shadow-[4px_4px_0px_#171717]">
              <div className="space-y-1 text-center md:text-left">
                <span className="font-mono text-xs uppercase tracking-widest font-bold">
                  HAVE A DESIGN IN MIND?
                </span>
                <p className="font-headline text-3xl uppercase leading-tight">
                  TELL US WHAT YOU NEED FOR YOUR GROUP OR EVENT.
                </p>
                <p className="font-body text-xs">
                  Minimum 5 pieces • ST Courier 3–7 days all India • WhatsApp support
                </p>
              </div>
              <Link
                to="/custom-order"
                className="inline-flex items-center gap-2 bg-surface-dark text-text-on-dark px-8 py-3.5 rounded font-mono text-sm uppercase tracking-wider font-bold hover:bg-surface-dark-secondary active:scale-95 transition-all shrink-0 shadow-[2px_2px_0px_#ffffff]"
              >
                <span>SEND YOUR REQUIREMENT →</span>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
