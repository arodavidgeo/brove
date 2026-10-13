import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SEOHead } from "../components/layout/SEOHead";
import { BUSINESS_FACTS } from "../data/brove-content";
import { PRODUCTS, ALL_REFERENCE_WORK } from "../data/products";
import { DRESS_CATEGORIES } from "../data/category-products";
import { CategoryScrollRow } from "../components/wardrobe/CategoryScrollRow";
import { FAQS } from "../data/faq";
import { WorkshopTicker } from "../components/layout/WorkshopTicker";
import { RequirementForm } from "../components/order/RequirementForm";
import { SampleLightbox } from "../components/ui/SampleLightbox";
import { formatPrice } from "../lib/utils";
import { WorkSample } from "../types";
import {
  ArrowRight,
  ShieldCheck,
  Truck,
  Sparkles,
  ChevronDown,
  CheckCircle2,
  MessageCircle,
  Eye
} from "lucide-react";

export const HomePage: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const [spotlightView, setSpotlightView] = useState<"front" | "back">("front");
  const [selectedColor, setSelectedColor] = useState<string>("BLACK");
  const [galleryFilter, setGalleryFilter] = useState<"ALL" | "CUSTOM TEES" | "OVERSIZED" | "EMBROIDERY" | "TEAM & EVENT WEAR">("ALL");
  const [selectedSample, setSelectedSample] = useState<WorkSample | null>(null);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const colors = [
    { name: "BLACK", hex: "#1C1C1A" },
    { name: "OFF-WHITE", hex: "#F4F1EA" },
    { name: "CHARCOAL", hex: "#373838" },
    { name: "BOTTLE GREEN", hex: "#1F3325" },
  ];

  // GSAP Layered Parallax for Hero
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Parallax layers in hero
      const heroEl = heroRef.current;
      if (heroEl) {
        const bgMachinery = heroEl.querySelector(".hero-bg-machinery");
        const apparelVisual = heroEl.querySelector(".hero-apparel-visual");
        const paintStroke = heroEl.querySelector(".hero-paint-accent");
        const metaTag = heroEl.querySelector(".hero-meta-badge");

        if (bgMachinery) {
          gsap.to(bgMachinery, {
            yPercent: 20,
            ease: "none",
            scrollTrigger: {
              trigger: heroEl,
              start: "top top",
              end: "bottom top",
              scrub: 0.5,
            },
          });
        }

        if (apparelVisual) {
          gsap.to(apparelVisual, {
            yPercent: -8,
            ease: "none",
            scrollTrigger: {
              trigger: heroEl,
              start: "top top",
              end: "bottom top",
              scrub: 0.5,
            },
          });
        }

        if (paintStroke) {
          gsap.to(paintStroke, {
            yPercent: 35,
            rotate: 5,
            ease: "none",
            scrollTrigger: {
              trigger: heroEl,
              start: "top top",
              end: "bottom top",
              scrub: 0.5,
            },
          });
        }

        if (metaTag) {
          gsap.to(metaTag, {
            yPercent: -15,
            ease: "none",
            scrollTrigger: {
              trigger: heroEl,
              start: "top top",
              end: "bottom top",
              scrub: 0.5,
            },
          });
        }
      }
    }, heroRef);

    return () => ctx.revert();
  }, []);

  // Filter real work gallery items
  const filteredGallery = ALL_REFERENCE_WORK.filter((item) => {
    if (galleryFilter === "ALL") return true;
    if (galleryFilter === "OVERSIZED") return item.apparelType.includes("Oversized");
    if (galleryFilter === "CUSTOM TEES") return item.apparelType.includes("T-Shirt");
    if (galleryFilter === "EMBROIDERY") return item.printMethod.includes("Embroidery") || item.apparelType === "Polo T-Shirt";
    if (galleryFilter === "TEAM & EVENT WEAR") return item.category === "back-print" || item.apparelType.includes("Regular");
    return true;
  });

  return (
    <>
      <SEOHead
        title="BROVE : WE PRINT YOUR IDENTITY | Custom Apparel & T-Shirt Printing"
        description="BROVE turns your ideas, artwork, and logos into wearable apparel. Direct DTF printing and tactile embroidery. Minimum order 5 pieces. Pan-India delivery via ST Courier."
        path="/"
      />

      <SampleLightbox sample={selectedSample} onClose={() => setSelectedSample(null)} />

      <div className="w-full bg-transparent text-[#2A2A24] transition-colors duration-200">
        
        {/* ==================================================
            02. HERO SECTION
            - Left: headline + supporting copy + CTAs
            - Right: realistic black apparel visual on wooden hanger in dark industrial print workshop
            - Controlled yellow ink/paint accents
            - Subtle multi-layered parallax
            - NO mascot / character
            ================================================== */}
        <section
          ref={heroRef}
          className="relative w-full bg-transparent text-[#2A2A24] overflow-hidden pt-24 sm:pt-28 pb-16 lg:py-24 border-b-2 border-[#E6E2D3]"
        >
          {/* Layer 1: Workshop Background Texture */}
          <div className="absolute inset-0 opacity-15 pointer-events-none hero-bg-machinery bg-film-grain" />

          {/* Layer 2: Controlled Lime Paint/Ink Accent */}
          <div className="absolute -top-16 right-1/4 w-[420px] h-[420px] opacity-15 pointer-events-none select-none hero-paint-accent">
            <svg viewBox="0 0 200 200" className="w-full h-full fill-primary-container">
              <path d="M14.2 118.4C32.1 86.3 75.6 62.1 122.4 51.5C154.2 44.2 181.6 51.3 192.5 67.8C204.8 86.4 184.2 122.9 151.7 145.3C118.2 168.4 68.4 178.6 33.1 166.1C12.4 158.7 1.8 134.8 14.2 118.4Z" />
            </svg>
          </div>

          <div className="max-w-[1400px] mx-auto px-margin-mobile lg:px-margin relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              {/* Left Column: Editorial Brand Headline, Story & CTAs */}
              <div className="lg:col-span-7 flex flex-col items-start gap-4 sm:gap-6 z-10">
                
                {/* Brand Signal Badge */}
                <div className="inline-flex items-center gap-2 bg-[#FAF8F0] px-3.5 py-1.5 rounded border border-[#E6E2D3] shadow-xs">
                  <span className="w-2.5 h-2.5 rounded-full bg-primary-container animate-pulse"></span>
                  <span className="font-mono text-xs uppercase tracking-widest text-[#2A2A24] font-bold">
                    CUSTOM APPAREL &amp; PRINTING WORKSHOP
                  </span>
                </div>

                {/* Primary Brand Typography */}
                <div className="space-y-1">
                  <span className="font-mono text-xs sm:text-sm uppercase tracking-widest text-[#66645A] block">
                    BROVE • WEAR YOUR IDENTITY.
                  </span>
                  <h1 className="font-headline text-5xl sm:text-7xl lg:text-8xl xl:text-9xl uppercase tracking-tight text-[#2A2A24] leading-[0.95]">
                    WE PRINT <br />
                    <span className="text-primary-container inline-block underline decoration-primary-container/40 decoration-4 underline-offset-8">
                      YOUR IDENTITY.
                    </span>
                  </h1>
                </div>

                {/* Supporting Editorial Message */}
                <p className="font-body text-base sm:text-lg lg:text-xl text-[#55544D] max-w-xl leading-relaxed font-normal">
                  From ideas to ink, we create custom apparel that speaks your style and story. Premium fabrics, vivid prints, and exact craftsmanship.
                </p>

                {/* Primary Conversion CTAs */}
                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <Link
                    to="/custom-order"
                    className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 rounded bg-primary-container text-text-primary font-headline text-base sm:text-lg uppercase tracking-wider hover:bg-primary-fixed active:scale-95 transition-all shadow-[2px_2px_0px_#2A2A24]"
                  >
                    <span>SEND YOUR REQUIREMENT →</span>
                  </Link>

                  <Link
                    to="/wardrobe"
                    className="inline-flex items-center justify-center px-5 sm:px-6 py-3.5 sm:py-4 rounded bg-[#FFFFFF] text-[#2A2A24] font-mono text-xs sm:text-sm uppercase tracking-wider hover:bg-[#FAF8F0] border border-[#E6E2D3] shadow-xs transition-all"
                  >
                    EXPLORE WARDROBE →
                  </Link>
                </div>

                {/* Studio Trust Meta Indicators */}
                <div className="flex flex-wrap items-center gap-6 pt-4 text-xs font-mono uppercase tracking-wider text-[#66645A] border-t border-[#E6E2D3] w-full">
                  <div className="flex items-center gap-1.5 text-[#2A2A24]">
                    <ShieldCheck className="w-4 h-4 text-primary-container" />
                    <span>MINIMUM ORDER: 5 PIECES</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-[#2A2A24]">
                    <Truck className="w-4 h-4 text-primary-container" />
                    <span>ST COURIER • 3–7 DAYS ALL INDIA</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-[#2A2A24]">
                    <Sparkles className="w-4 h-4 text-primary-container" />
                    <span>DTF &amp; EMBROIDERY CRAFT</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Realistic Apparel Hero Visual */}
              <div className="lg:col-span-5 relative mt-6 lg:mt-0 hero-apparel-visual">
                <div className="relative bg-[#FFFFFF] p-4 sm:p-5 rounded-lg shadow-md border border-[#E6E2D3]">
                  
                  {/* Studio Metallic Spec Badge */}
                  <div className="absolute top-6 left-6 z-20 bg-primary-container text-text-primary px-3 py-1 font-mono text-xs font-bold uppercase tracking-widest shadow-sm rotate-[-2deg] hero-meta-badge">
                    HEAVYWEIGHT • 240 GSM
                  </div>

                  {/* Realistic Apparel Visual on Wooden Hanger */}
                  <div className="relative w-full aspect-[4/5] rounded overflow-hidden bg-black flex items-center justify-center">
                    <img
                      src="/reference-dress/WhatsApp Image 2026-08-22 at 10.37.45 PM.jpeg"
                      alt="Realistic BROVE Heavyweight Streetwear T-Shirt Garment on Hanger in Print Studio"
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                      loading="eager"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                    <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs font-mono text-white drop-shadow-sm">
                      <span className="text-primary-container font-bold">PHYSICAL WORKSHOP SAMPLE</span>
                      <span className="text-white/80">TIRUNELVELI PRINT FLOOR</span>
                    </div>
                  </div>

                  {/* Frame Technical Details */}
                  <div className="pt-3 flex items-center justify-between text-xs font-mono text-[#2A2A24]">
                    <span className="text-[#66645A] uppercase tracking-wider">CANVAS // OVERSIZED BOX CUT</span>
                    <span className="bg-[#FAF8F0] border border-[#E6E2D3] px-2.5 py-1 rounded text-[#2A2A24] font-bold">
                      ₹450 / PIECE
                    </span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Live Workshop Ticker */}
        <WorkshopTicker />

        {/* ==================================================
            03. VALUE STRIP
            - PREMIUM FABRICS (Comfortable & Durable)
            - DTF PRINTING (Vibrant & Detailed)
            - EMBROIDERY (Premium Finish)
            - LOW MOQ (Just 5 Pieces)
            - ALL OVER INDIA (3–7 Days via ST Courier)
            ================================================== */}
        <section className="w-full bg-primary-container text-text-primary border-b-2 border-text-primary dark:border-primary-container shadow-sm">
          <div className="max-w-[1400px] mx-auto px-margin-mobile lg:px-margin py-4 sm:py-5">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-2 text-center divide-y md:divide-y-0 md:divide-x divide-text-primary/20">
              
              <div className="flex flex-col items-center justify-center p-2">
                <span className="font-headline text-lg sm:text-2xl uppercase tracking-wider">
                  PREMIUM FABRICS
                </span>
                <span className="font-mono text-[11px] sm:text-xs uppercase text-text-primary/80 font-bold">
                  Comfortable &amp; Durable
                </span>
              </div>

              <div className="flex flex-col items-center justify-center p-2">
                <span className="font-headline text-lg sm:text-2xl uppercase tracking-wider">
                  DTF PRINTING
                </span>
                <span className="font-mono text-[11px] sm:text-xs uppercase text-text-primary/80 font-bold">
                  Vibrant &amp; Detailed
                </span>
              </div>

              <div className="flex flex-col items-center justify-center p-2">
                <span className="font-headline text-lg sm:text-2xl uppercase tracking-wider">
                  EMBROIDERY
                </span>
                <span className="font-mono text-[11px] sm:text-xs uppercase text-text-primary/80 font-bold">
                  Premium Finish
                </span>
              </div>

              <div className="flex flex-col items-center justify-center p-2">
                <span className="font-headline text-lg sm:text-2xl uppercase tracking-wider">
                  LOW MOQ
                </span>
                <span className="font-mono text-[11px] sm:text-xs uppercase text-text-primary/80 font-bold">
                  Just 5 Pieces
                </span>
              </div>

              <div className="flex flex-col items-center justify-center p-2 col-span-2 md:col-span-1">
                <span className="font-headline text-lg sm:text-2xl uppercase tracking-wider">
                  ALL OVER INDIA
                </span>
                <span className="font-mono text-[11px] sm:text-xs uppercase text-text-primary/80 font-bold">
                  3–7 Days via ST Courier
                </span>
              </div>

            </div>
          </div>
        </section>

        {/* ==================================================
            04. APPAREL INTRODUCTION & DRESS COLLECTIONS
            - 4 Category sections (Hoodies, Oversized Acid Wash, Oversized Tees, Polos)
            - Each in a single horizontal scrolling row
            - Followed by apparel blank canvases
            ================================================== */}
        <section className="py-16 lg:py-24 max-w-[1400px] mx-auto px-margin-mobile lg:px-margin space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b-2 border-text-primary dark:border-surface-dark-secondary pb-4">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-text-muted font-bold block mb-1">
                APPAREL &amp; DRESS COLLECTIONS // 01
              </span>
              <h2 className="font-headline text-4xl sm:text-6xl uppercase tracking-tight text-text-primary dark:text-text-on-dark">
                THE BROVE WARDROBE.
              </h2>
            </div>
            <div className="max-w-md">
              <p className="font-body text-sm text-text-muted leading-relaxed">
                Choose your fit. Choose your fabric. Add your identity. Explore our printed dress collections and apparel canvases ready for your artwork and custom printing.
              </p>
            </div>
          </div>

          {/* 4 Category Sections, one below another, each in a single horizontal scrolling row */}
          <div className="space-y-10">
            {DRESS_CATEGORIES.map((section) => (
              <CategoryScrollRow
                key={section.id}
                section={section}
                onPreviewSample={(sample) => setSelectedSample(sample)}
              />
            ))}
          </div>

          <div className="pt-8 border-t-2 border-[#E6E2D3] space-y-8">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div>
                <span className="font-mono text-xs uppercase tracking-widest text-[#66645A] font-bold block mb-1">
                  UNPRINTED APPAREL CANVASES
                </span>
                <h3 className="font-headline text-2xl sm:text-4xl uppercase tracking-tight text-[#2A2A24]">
                  RAW BLANK SPECIFICATIONS
                </h3>
              </div>
              <p className="font-body text-xs sm:text-sm text-[#55544D] max-w-sm">
                Prefer to order blanks with bespoke printing specifications? Explore our core physical blank styles.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {PRODUCTS.map((prod) => (
                <div
                  key={prod.id}
                  className="bg-[#FFFFFF] border-2 border-[#E6E2D3] rounded-lg overflow-hidden flex flex-col justify-between shadow-[2px_2px_0px_rgba(42,42,36,0.08)] transition-transform hover:-translate-y-1 duration-200"
                >
                  <div>
                    <div className="relative aspect-[4/3] bg-[#FAF8F0] overflow-hidden p-4 flex items-center justify-center">
                      <img
                        src={prod.referenceImages[0] || prod.image}
                        alt={prod.name}
                        className="w-full h-full object-contain transition-transform duration-300 hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute top-2 right-2 bg-primary-container text-[#2A2A24] px-2 py-0.5 font-mono text-[11px] font-bold uppercase rounded border border-[#E6E2D3]">
                        {prod.category}
                      </div>
                    </div>

                    <div className="p-5 space-y-2">
                      <div className="flex items-baseline justify-between gap-2">
                        <h4 className="font-headline text-xl uppercase tracking-wide text-[#2A2A24] truncate">
                          {prod.name}
                        </h4>
                        <span className="font-headline text-2xl text-[#2A2A24] bg-[#FAF8F0] border border-[#E6E2D3] px-2 py-0.5 rounded shrink-0">
                          {formatPrice(prod.price, prod.pricingType)}
                        </span>
                      </div>

                      <p className="font-body text-xs text-[#55544D] leading-relaxed">
                        {prod.shortDescription || prod.description}
                      </p>

                      <div className="font-mono text-[11px] text-[#66645A] pt-1 flex items-center gap-2">
                        <span>• MOQ 5 Pcs</span>
                        <span>• {prod.availablePrintingMethods.join(" / ")}</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-5 pt-0">
                    <Link
                      to={`/custom-order?product=${prod.id}`}
                      className="w-full inline-flex items-center justify-center gap-1.5 py-2.5 px-4 bg-primary-container text-text-primary font-headline text-xs uppercase tracking-wider rounded hover:bg-primary-fixed active:scale-95 transition-all shadow-[2px_2px_0px_rgba(42,42,36,0.12)] border border-[#2A2A24]"
                    >
                      <span>CUSTOMIZE THIS FIT →</span>
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center pt-2">
              <Link
                to="/wardrobe"
                className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-[#2A2A24] hover:text-[#5A6B10] font-bold border-b-2 border-[#2A2A24] pb-1 transition-colors"
              >
                <span>EXPLORE ALL DRESS &amp; WARDROBE CATEGORIES</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* ==================================================
            05. PROCESS (FROM IDEA TO INK)
            - YOUR IDEA → WE DESIGN → WE PRINT → QUALITY CHECK → DELIVERED
            ================================================== */}
        <section className="py-16 lg:py-24 bg-transparent text-[#2A2A24] border-t-2 border-[#E6E2D3]">
          <div className="max-w-[1400px] mx-auto px-margin-mobile lg:px-margin space-y-12">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div>
                <span className="font-mono text-xs uppercase tracking-widest text-[#66645A] font-bold block mb-1">
                  WORKFLOW METHODOLOGY // 02
                </span>
                <h2 className="font-headline text-4xl sm:text-6xl uppercase tracking-tight text-[#2A2A24]">
                  FROM IDEA TO INK.
                </h2>
              </div>
              <p className="font-body text-sm text-[#55544D] max-w-md leading-relaxed">
                Simple, transparent 5-step custom apparel creation. No automated bot traps; our printers review every placement and mesh.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {BUSINESS_FACTS.processSteps.map((step) => (
                <div
                  key={step.step}
                  className="bg-[#FFFFFF] p-5 rounded-lg border-2 border-[#E6E2D3] flex flex-col justify-between space-y-6 hover:border-primary-container shadow-xs transition-colors"
                >
                  <div className="space-y-3">
                    <span className="font-headline text-5xl text-[#2A2A24] block leading-none">
                      {step.step}
                    </span>
                    <h3 className="font-headline text-2xl uppercase tracking-wide text-[#2A2A24]">
                      {step.title}
                    </h3>
                    <p className="font-mono text-[11px] text-[#5A6B10] font-bold uppercase">
                      {step.subtitle}
                    </p>
                    <p className="font-body text-xs text-[#55544D] leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                  <div className="w-full h-1.5 bg-[#FAF8F0] border border-[#E6E2D3] rounded-full overflow-hidden">
                    <div className="w-1/3 h-full bg-primary-container" />
                  </div>
                </div>
              ))}
            </div>

            <div className="p-4 rounded-lg bg-[#FAF8F0] border-2 border-[#E6E2D3] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono">
              <span className="text-[#66645A]">
                COURIER PARTNER: <strong className="text-[#2A2A24]">ST COURIER</strong> • PAN-INDIA DISPATCH: <strong className="text-[#2A2A24]">3–7 DAYS</strong>
              </span>
              <Link
                to="/process"
                className="text-[#2A2A24] font-bold hover:underline inline-flex items-center gap-1 uppercase"
              >
                <span>EXPLORE PROCESS DETAILS</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </section>

        {/* ==================================================
            06. PRINTING METHODS
            - DTF PRINTING (Vibrant. Detailed. Custom.)
            - EMBROIDERY (Texture You Can Feel.)
            ================================================== */}
        <section className="py-16 lg:py-24 max-w-[1400px] mx-auto px-margin-mobile lg:px-margin space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="font-mono text-xs uppercase tracking-widest text-[#66645A] font-bold">
              PRINT LABORATORY // 03
            </span>
            <h2 className="font-headline text-4xl sm:text-6xl uppercase tracking-tight text-[#2A2A24]">
              TWO DISTINCT DISCIPLINES.
            </h2>
            <p className="font-body text-sm sm:text-base text-[#55544D] leading-relaxed">
              Artwork requires the right technique. Direct-to-Film for complex colorful illustrations; precision thread embroidery for tactile brand luxury.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* DTF Card */}
            <div className="bg-[#FFFFFF] border-2 border-[#E6E2D3] rounded-lg p-6 sm:p-8 flex flex-col justify-between space-y-6 shadow-[0_4px_20px_rgba(42,42,36,0.06)]">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="bg-primary-container text-text-primary font-mono text-xs font-bold px-3 py-1 rounded uppercase tracking-wider shadow-xs">
                    METHOD 01
                  </span>
                  <span className="font-mono text-xs text-[#66645A] uppercase">DIRECT-TO-FILM</span>
                </div>

                <h3 className="font-headline text-3xl sm:text-4xl uppercase text-[#2A2A24] leading-tight">
                  DTF PRINTING
                </h3>
                <p className="font-mono text-sm text-[#5A6B10] font-bold uppercase tracking-wide">
                  VIBRANT. DETAILED. CUSTOM.
                </p>

                <p className="font-body text-sm text-[#55544D] leading-relaxed">
                  Direct-to-Film printing gives artwork vibrant colors and detailed graphics. Fused via heat and polymer adhesive powder, holding razor-sharp lines across stretches.
                </p>

                <div className="space-y-2 pt-2 border-t border-[#E6E2D3] font-mono text-xs">
                  <p className="font-bold text-[#2A2A24] uppercase">IDEAL FOR:</p>
                  <p className="text-[#55544D] leading-relaxed">
                    Custom T-shirts, Oversized apparel, Hoodies, Sweatshirts, Event apparel, Team apparel, Custom graphics.
                  </p>
                  <p className="text-[#5A6B10] font-bold uppercase pt-1">
                    BEST FOR: Detailed, colorful and expressive artwork.
                  </p>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  to="/process#dtf"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 bg-[#FFFFFF] hover:bg-[#FAF8F0] text-[#2A2A24] font-headline text-sm uppercase tracking-wider rounded border border-[#E6E2D3] shadow-xs active:scale-95 transition-all"
                >
                  <span>SEE DTF SPECIFICATIONS →</span>
                </Link>
              </div>
            </div>

            {/* Embroidery Card */}
            <div className="bg-[#FFFFFF] border-2 border-[#E6E2D3] rounded-lg p-6 sm:p-8 flex flex-col justify-between space-y-6 shadow-[0_4px_20px_rgba(42,42,36,0.06)]">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="bg-[#FAF8F0] text-[#2A2A24] border border-[#E6E2D3] font-mono text-xs font-bold px-3 py-1 rounded uppercase tracking-wider">
                    METHOD 02
                  </span>
                  <span className="font-mono text-xs text-[#66645A] uppercase">PRECISION STITCH</span>
                </div>

                <h3 className="font-headline text-3xl sm:text-4xl uppercase text-[#2A2A24] leading-tight">
                  EMBROIDERY
                </h3>
                <p className="font-mono text-sm text-[#5A6B10] font-bold uppercase tracking-wide">
                  TEXTURE YOU CAN FEEL.
                </p>

                <p className="font-body text-sm text-[#55544D] leading-relaxed">
                  Embroidery gives apparel a premium tactile finish with multi-strand viscose filaments sewn directly into the knit. Completely resilient against repeat laundry cycles.
                </p>

                <div className="space-y-2 pt-2 border-t border-[#E6E2D3] font-mono text-xs">
                  <p className="font-bold text-[#2A2A24] uppercase">IDEAL FOR:</p>
                  <p className="text-[#55544D] leading-relaxed">
                    Polo T-shirts, Hoodies, Shirts, Uniforms, Company apparel, Team apparel, Logos and branding.
                  </p>
                  <p className="text-[#5A6B10] font-bold uppercase pt-1">
                    BEST FOR: Logos, names, branding and premium minimal designs.
                  </p>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  to="/process#embroidery"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 bg-[#FFFFFF] hover:bg-[#FAF8F0] text-[#2A2A24] font-headline text-sm uppercase tracking-wider rounded border border-[#E6E2D3] shadow-xs active:scale-95 transition-all"
                >
                  <span>SEE EMBROIDERY SPECIFICATIONS →</span>
                </Link>
              </div>
            </div>

          </div>
        </section>

        {/* ==================================================
            07. REAL WORK GALLERY
            - Source of truth: /reference dress images
            - Categories: CUSTOM TEES, OVERSIZED, EMBROIDERY, TEAM & EVENT WEAR
            - Asymmetrical editorial grid + Lightbox modal
            ================================================== */}
        <section className="py-16 lg:py-24 bg-transparent border-t-2 border-[#E6E2D3]">
          <div className="max-w-[1400px] mx-auto px-margin-mobile lg:px-margin space-y-10">
            
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b-2 border-[#E6E2D3] pb-4">
              <div>
                <span className="font-mono text-xs uppercase tracking-widest text-[#66645A] font-bold block mb-1">
                  WORKSHOP ARCHIVE // 04
                </span>
                <h2 className="font-headline text-4xl sm:text-6xl uppercase tracking-tight text-[#2A2A24]">
                  REAL WORK GALLERY.
                </h2>
              </div>
              <p className="font-body text-sm text-[#55544D] max-w-md leading-relaxed">
                Actual physical apparel printed in the BROVE workshop. Unedited photographs showing DTF color saturation, macro knit grain, and full back streetwear graphics.
              </p>
            </div>

            {/* Category Filter Tabs */}
            <div className="flex flex-wrap items-center gap-2">
              {(["ALL", "CUSTOM TEES", "OVERSIZED", "EMBROIDERY", "TEAM & EVENT WEAR"] as const).map((cat) => (
                <button
                  key={cat}
                  onClick={() => setGalleryFilter(cat)}
                  className={`px-4 py-2 font-mono text-xs uppercase font-bold rounded transition-all ${
                    galleryFilter === cat
                      ? "bg-primary-container text-text-primary shadow-[2px_2px_0px_#2A2A24]"
                      : "bg-[#FFFFFF] text-[#2A2A24] border border-[#E6E2D3] hover:border-primary-container shadow-xs"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Asymmetrical Editorial Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredGallery.slice(0, 8).map((sample) => (
                <div
                  key={sample.id}
                  onClick={() => setSelectedSample(sample)}
                  className="group relative bg-[#FFFFFF] border-2 border-[#E6E2D3] rounded-lg overflow-hidden cursor-pointer shadow-[0_4px_16px_rgba(42,42,36,0.06)] transition-transform hover:-translate-y-1"
                >
                  <div className="relative aspect-[4/5] bg-[#FAF8F0] overflow-hidden flex items-center justify-center">
                    <img
                      src={sample.image}
                      alt={sample.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#2A2A24]/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                      <span className="font-mono text-xs text-primary-container font-bold flex items-center gap-1">
                        <Eye className="w-3.5 h-3.5" />
                        <span>CLICK TO INSPECT DETAIL</span>
                      </span>
                    </div>
                    <div className="absolute top-2 left-2 bg-[#FAF8F0]/90 text-[#2A2A24] border border-[#E6E2D3] px-2 py-0.5 font-mono text-[10px] font-bold rounded uppercase">
                      {sample.perspectiveLabel}
                    </div>
                  </div>

                  <div className="p-4 space-y-1">
                    <p className="font-headline text-lg uppercase text-[#2A2A24] truncate">
                      {sample.title}
                    </p>
                    <p className="font-mono text-xs text-[#66645A] truncate">
                      {sample.apparelType} • {sample.printMethod}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center pt-4">
              <Link
                to="/wardrobe"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#FFFFFF] text-[#2A2A24] font-headline text-sm uppercase tracking-wider rounded hover:bg-[#FAF8F0] active:scale-95 transition-all border border-[#E6E2D3] shadow-xs"
              >
                <span>EXPLORE ALL APPAREL IN WARDROBE →</span>
              </Link>
            </div>
          </div>
        </section>

        {/* ==================================================
            08. WHY BROVE
            - Direct Physical Printing (No Drop-shipping)
            - True 5-Piece Low MOQ
            - Heavyweight Combed Native Cotton
            - Transparent Delivery (3-7 Days ST Courier)
            ================================================== */}
        <section className="py-16 lg:py-24 bg-[#FAF8F0]/85 text-[#2A2A24] border-y-2 border-[#E6E2D3]">
          <div className="max-w-[1400px] mx-auto px-margin-mobile lg:px-margin space-y-12">
            <div className="max-w-2xl space-y-2">
              <span className="font-mono text-xs uppercase tracking-widest text-[#5A680C] font-bold">
                CRAFT PILLARS // 05
              </span>
              <h2 className="font-headline text-4xl sm:text-6xl uppercase tracking-tight text-[#2A2A24]">
                WHY PEOPLE CHOOSE BROVE.
              </h2>
              <p className="font-body text-sm text-[#55544D] leading-relaxed">
                We aren't a faceless automated drop-shipper. We run our own physical workshop with real inks, real embroidery heads, and obsessive quality checks.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              
              <div className="bg-[#FFFFFF] p-6 rounded border border-[#E6E2D3] space-y-3 shadow-xs">
                <span className="font-mono text-xs font-bold text-[#5A680C] uppercase">01 / LOW THRESHOLD</span>
                <h3 className="font-headline text-2xl uppercase text-[#2A2A24]">JUST 5 PIECES MOQ</h3>
                <p className="font-body text-xs text-[#55544D] leading-relaxed">
                  You don't need a corporate budget of 100 shirts. Bring your band, team, or student club idea to life starting at just 5 pieces.
                </p>
              </div>

              <div className="bg-[#FFFFFF] p-6 rounded border border-[#E6E2D3] space-y-3 shadow-xs">
                <span className="font-mono text-xs font-bold text-[#5A680C] uppercase">02 / HEAVY COTTON</span>
                <h3 className="font-headline text-2xl uppercase text-[#2A2A24]">240+ GSM STREETWEAR</h3>
                <p className="font-body text-xs text-[#55544D] leading-relaxed">
                  Boxy, dropped shoulder silhouettes made with premium bio-washed combed cotton that retains structure wash after wash.
                </p>
              </div>

              <div className="bg-[#FFFFFF] p-6 rounded border border-[#E6E2D3] space-y-3 shadow-xs">
                <span className="font-mono text-xs font-bold text-[#5A680C] uppercase">03 / DIRECT INK</span>
                <h3 className="font-headline text-2xl uppercase text-[#2A2A24]">PHYSICAL PRINT SHOP</h3>
                <p className="font-body text-xs text-[#55544D] leading-relaxed">
                  Every print is handled under our curing lamps and heat presses. Real humans check your color proofs and typography balance.
                </p>
              </div>

              <div className="bg-[#FFFFFF] p-6 rounded border border-[#E6E2D3] space-y-3 shadow-xs">
                <span className="font-mono text-xs font-bold text-[#5A680C] uppercase">04 / ALL-INDIA DISPATCH</span>
                <h3 className="font-headline text-2xl uppercase text-[#2A2A24]">ST COURIER 3–7 DAYS</h3>
                <p className="font-body text-xs text-[#55544D] leading-relaxed">
                  Reliable express parcel tracking across India directly to your campus, office, event hall, or doorstep.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* ==================================================
            09. WHO WE CREATE FOR
            - Colleges, Companies, Teams, Events, Businesses, Individuals
            ================================================== */}
        <section className="py-16 lg:py-24 max-w-[1400px] mx-auto px-margin-mobile lg:px-margin space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b-2 border-[#E6E2D3] pb-4">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-[#66645A] font-bold block mb-1">
                COMMUNITIES &amp; CREWS // 06
              </span>
              <h2 className="font-headline text-4xl sm:text-6xl uppercase tracking-tight text-[#2A2A24]">
                WHO WE CREATE FOR.
              </h2>
            </div>
            <p className="font-body text-sm text-[#55544D] max-w-md leading-relaxed">
              From college symposiums to corporate launch drops, we engineer apparel tailored to how your group moves.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {BUSINESS_FACTS.audiences.map((aud, index) => (
              <div
                key={aud.title}
                className="p-6 rounded bg-[#FFFFFF] border-2 border-[#E6E2D3] shadow-[0_4px_16px_rgba(42,42,36,0.06)] space-y-2 flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <span className="font-mono text-xs text-[#2A2A24] bg-[#FAF8F0] border border-[#E6E2D3] px-2 py-0.5 rounded font-bold uppercase">
                    0{index + 1}
                  </span>
                  <h3 className="font-headline text-2xl uppercase text-[#2A2A24]">
                    {aud.title}
                  </h3>
                  <p className="font-body text-xs text-[#55544D] leading-relaxed">
                    {aud.description}
                  </p>
                </div>
                <div className="pt-2">
                  <Link
                    to="/custom-order"
                    className="font-mono text-xs uppercase tracking-wider text-[#2A2A24] hover:text-[#5A680C] font-bold inline-flex items-center gap-1 transition-colors"
                  >
                    <span>START {aud.title} ORDER →</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ==================================================
            10. PRODUCT SPOTLIGHT: OVERSIZED T-SHIRT (₹450)
            - Interactive Blank vs Real Workshop Sample toggle
            - Swatches & Specs
            ================================================== */}
        <section className="py-16 lg:py-24 bg-[#FAF8F0] text-[#2A2A24] border-y-4 border-primary-container">
          <div className="max-w-[1400px] mx-auto px-margin-mobile lg:px-margin">
            <div className="bg-[#FFFFFF] rounded-xl overflow-hidden border-2 border-[#E6E2D3] p-6 sm:p-10 shadow-md">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                
                {/* Visual side with perspective toggle */}
                <div className="lg:col-span-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="bg-primary-container text-text-primary font-mono text-xs font-bold px-3 py-1 rounded uppercase tracking-wider shadow-xs">
                      SIGNATURE BLANK SPOTLIGHT
                    </span>

                    <div className="flex items-center gap-1 bg-[#FAF8F0] p-1 rounded border border-[#E6E2D3]">
                      <button
                        type="button"
                        onClick={() => setSpotlightView("front")}
                        className={`font-mono text-xs px-3 py-1 rounded font-bold uppercase transition-all ${
                          spotlightView === "front"
                            ? "bg-primary-container text-text-primary shadow-xs"
                            : "text-[#66645A] hover:text-[#2A2A24]"
                        }`}
                      >
                        BLANK FIT
                      </button>
                      <button
                        type="button"
                        onClick={() => setSpotlightView("back")}
                        className={`font-mono text-xs px-3 py-1 rounded font-bold uppercase transition-all ${
                          spotlightView === "back"
                            ? "bg-primary-container text-text-primary shadow-xs"
                            : "text-[#66645A] hover:text-[#2A2A24]"
                        }`}
                      >
                        REAL BACK PRINT
                      </button>
                    </div>
                  </div>

                  <div className="relative aspect-[4/5] max-h-[420px] mx-auto w-full rounded bg-[#FAF8F0] border border-[#E6E2D3] overflow-hidden flex items-center justify-center">
                    {spotlightView === "front" ? (
                      <img
                        src="/reference-dress/WhatsApp Image 2026-08-22 at 10.37.45 PM.jpeg"
                        alt="BROVE Oversized T-Shirt front blank on hanger"
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      />
                    ) : (
                      <img
                        src="/reference-dress/WhatsApp Image 2026-08-22 at 10.37.46 PM.jpeg"
                        alt="BROVE Oversized T-Shirt back print physical workshop sample"
                        className="w-full h-full object-contain transition-transform duration-500 hover:scale-105"
                      />
                    )}
                    <div className="absolute bottom-2 left-2 bg-[#FAF8F0]/90 border border-[#E6E2D3] text-[#2A2A24] font-mono text-[10px] px-2 py-0.5 rounded font-bold uppercase shadow-xs">
                      {spotlightView === "front" ? "✓ 240 GSM BLANK CANVASES" : "✓ PHYSICAL BROVE WORK SAMPLE"}
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-xs font-mono pt-2 border-t border-[#E6E2D3]">
                    <span className="text-[#66645A] uppercase">SELECTED COLOR: {selectedColor}</span>
                    <div className="flex items-center gap-1.5">
                      {colors.map((c) => (
                        <button
                          key={c.name}
                          type="button"
                          onClick={() => setSelectedColor(c.name)}
                          className={`w-5 h-5 rounded-full border transition-all ${
                            selectedColor === c.name
                              ? "border-primary-container scale-110 shadow-sm"
                              : "border-transparent opacity-70 hover:opacity-100"
                          }`}
                          style={{ backgroundColor: c.hex }}
                          title={c.name}
                        />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Specs and details */}
                <div className="lg:col-span-6 space-y-6">
                  <div className="space-y-2">
                    <span className="font-mono text-xs uppercase tracking-widest text-[#5A6B10] font-bold">
                      240 GSM COMBED COTTON
                    </span>
                    <h3 className="font-headline text-4xl sm:text-6xl uppercase tracking-tight text-[#2A2A24] leading-none">
                      OVERSIZED T-SHIRT
                    </h3>
                    <div className="flex items-baseline gap-3 pt-1">
                      <span className="font-headline text-5xl text-[#2A2A24]">₹450</span>
                      <span className="font-mono text-xs text-[#66645A] uppercase">
                        / PIECE (BASE APPAREL + CUSTOM DTF PRINT)
                      </span>
                    </div>
                  </div>

                  <p className="font-body text-sm sm:text-base text-[#55544D] leading-relaxed">
                    Engineered with heavy gauge 100% bio-washed combed cotton, relaxed dropped shoulders, and a thick Lycra-reinforced rib collar that retains structure through countless streetwear cycles.
                  </p>

                  <div className="space-y-2 font-mono text-xs text-[#2A2A24] border-t border-[#E6E2D3] pt-4">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#5A6B10] shrink-0" />
                      <span>Heavyweight 240 GSM Fabric Density</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#5A6B10] shrink-0" />
                      <span>Drop-shoulder relaxed streetwear drape</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#5A6B10] shrink-0" />
                      <span>Compatible with DTF multi-color back artwork or chest embroidery</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#5A6B10] shrink-0" />
                      <span>Minimum order: Just 5 pieces (mix S to 2XL freely)</span>
                    </div>
                  </div>

                  <div className="pt-2 flex flex-wrap items-center gap-4">
                    <Link
                      to="/custom-order?product=oversized-tshirt"
                      className="px-6 py-3.5 bg-primary-container text-text-primary font-headline text-base uppercase tracking-wider rounded hover:bg-primary-fixed active:scale-95 transition-all shadow-[2px_2px_0px_#2A2A24]"
                    >
                      ORDER OVERSIZED BATCH →
                    </Link>
                    <Link
                      to="/wardrobe#oversized-tshirt"
                      className="px-5 py-3.5 bg-[#FFFFFF] text-[#2A2A24] font-mono text-xs uppercase tracking-wider rounded hover:bg-[#FAF8F0] transition-colors border border-[#E6E2D3] shadow-xs"
                    >
                      VIEW SIZING &amp; SPECS
                    </Link>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* ==================================================
            11. ABOUT BROVE
            - Manifesto + 4 Pillars (Quality, Creativity, Comfort, Affordability)
            ================================================== */}
        <section className="py-16 lg:py-24 max-w-[1400px] mx-auto px-margin-mobile lg:px-margin space-y-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-4">
              <span className="font-mono text-xs uppercase tracking-widest text-[#66645A] font-bold block">
                ABOUT OUR STUDIO // 08
              </span>
              <h2 className="font-headline text-4xl sm:text-6xl uppercase tracking-tight text-[#2A2A24] leading-tight">
                WE MAKE YOUR <br />
                <span className="text-[#5A680C] underline decoration-[#C5D92D] underline-offset-4">
                  IDEA WEARABLE.
                </span>
              </h2>
              <p className="font-body text-base text-[#55544D] leading-relaxed">
                {BUSINESS_FACTS.aboutContent.intro}
              </p>
              <p className="font-body text-sm text-[#55544D] leading-relaxed">
                {BUSINESS_FACTS.aboutContent.body}
              </p>

              <div className="pt-2">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 font-mono text-xs uppercase font-bold text-[#2A2A24] hover:text-[#5A680C] transition-colors border-b-2 border-[#2A2A24] pb-1"
                >
                  <span>READ OUR FULL STORY &amp; ETHOS</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {BUSINESS_FACTS.aboutContent.pillars.map((pillar) => (
                <div
                  key={pillar.name}
                  className="bg-[#FFFFFF] p-5 rounded border-2 border-[#E6E2D3] shadow-[0_4px_16px_rgba(42,42,36,0.06)] space-y-2"
                >
                  <h3 className="font-headline text-xl uppercase tracking-wider text-[#2A2A24] flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary-container rounded-full"></span>
                    <span>{pillar.name}</span>
                  </h3>
                  <p className="font-body text-xs text-[#55544D] leading-relaxed">
                    {pillar.text}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* ==================================================
            12. CONTACT / REQUIREMENT FORM
            - Embedded interactive requirement intake form
            ================================================== */}
        <section className="py-16 lg:py-24 bg-transparent border-t-2 border-[#E6E2D3]">
          <div className="max-w-[1000px] mx-auto px-margin-mobile lg:px-margin space-y-8">
            <div className="text-center max-w-2xl mx-auto space-y-3">
              <span className="font-mono text-xs uppercase tracking-widest text-[#66645A] font-bold block">
                GET IN TOUCH // 09
              </span>
              <h2 className="font-headline text-4xl sm:text-6xl uppercase tracking-tight text-[#2A2A24]">
                SEND YOUR REQUIREMENT.
              </h2>
              <p className="font-body text-sm text-[#55544D] leading-relaxed">
                Tell us about your apparel idea, quantity, and printing preference. We'll inspect your concept and reach out with exact pricing.
              </p>
            </div>

            <RequirementForm embedded={true} />
          </div>
        </section>

        {/* ==================================================
            13. FAQ (EXPANDABLE ACCORDION)
            - 8 questions specified in section 20
            ================================================== */}
        <section id="faq" className="py-16 lg:py-24 max-w-[900px] mx-auto px-margin-mobile lg:px-margin space-y-10 scroll-mt-24">
          <div className="text-center space-y-2">
            <span className="font-mono text-xs uppercase tracking-widest text-[#66645A] font-bold">
              COMMON QUESTIONS // 10
            </span>
            <h2 className="font-headline text-4xl sm:text-6xl uppercase tracking-tight text-[#2A2A24]">
              FREQUENTLY ASKED.
            </h2>
            <p className="font-body text-sm text-[#55544D] leading-relaxed">
              Clear answers regarding minimum order thresholds, customization, printing techniques, and nationwide delivery.
            </p>
          </div>

          <div className="space-y-3">
            {FAQS.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={faq.question}
                  className="bg-[#FFFFFF] border-2 border-[#E6E2D3] rounded shadow-[0_4px_16px_rgba(42,42,36,0.06)] overflow-hidden transition-all"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                    aria-expanded={isOpen}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 font-headline text-xl uppercase tracking-wide text-[#2A2A24] hover:bg-[#FAF8F0] transition-colors"
                  >
                    <span>{faq.question}</span>
                    <ChevronDown
                      className={`w-5 h-5 shrink-0 text-[#2A2A24] transition-transform duration-200 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-sm font-body text-[#55544D] leading-relaxed border-t border-[#E6E2D3]">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="text-center pt-2">
            <p className="font-mono text-xs text-[#66645A]">
              HAVE ANOTHER QUESTION? CALL OR WHATSAPP US AT{" "}
              <a href={`tel:${BUSINESS_FACTS.contact.phone}`} className="text-primary-container bg-[#2A2A24] px-2 py-0.5 rounded font-bold">
                {BUSINESS_FACTS.contact.phone}
              </a>
            </p>
          </div>
        </section>

        {/* ==================================================
            14. FINAL CTA
            - Bold editorial high-impact workshop close
            ================================================== */}
        <section className="py-20 bg-primary-container text-[#2A2A24] border-t-4 border-[#2A2A24] shadow-lg">
          <div className="max-w-[1200px] mx-auto px-margin-mobile lg:px-margin text-center space-y-6">
            <span className="font-mono text-xs uppercase tracking-widest text-[#2A2A24]/80 font-bold bg-white/40 px-3 py-1 rounded inline-block">
              READY TO BRING YOUR APPAREL TO LIFE?
            </span>

            <h2 className="font-headline text-5xl sm:text-7xl lg:text-8xl uppercase tracking-tight leading-[0.95] max-w-4xl mx-auto">
              WEAR YOUR IDENTITY. <br />
              <span className="text-[#2A2A24] underline decoration-[#2A2A24]/30 decoration-4 underline-offset-8">
                LET'S MAKE IT WEARABLE.
              </span>
            </h2>

            <p className="font-body text-base sm:text-lg text-[#2A2A24]/90 max-w-xl mx-auto leading-relaxed">
              Minimum order is just 5 pieces. Send your design, logo, or idea now and get a direct quote from the BROVE workshop.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              <Link
                to="/custom-order"
                className="px-8 py-4 bg-[#2A2A24] text-[#FAF8F0] font-headline text-lg uppercase tracking-wider rounded hover:bg-[#3A3A34] active:scale-95 transition-all shadow-[2px_2px_0px_#FFFFFF]"
              >
                SEND YOUR REQUIREMENT →
              </Link>
              <a
                href={`https://wa.me/91${BUSINESS_FACTS.contact.whatsapp}?text=${encodeURIComponent(
                  "Hello BROVE, I want to discuss a custom apparel order."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-4 bg-[#FFFFFF] text-[#2A2A24] border-2 border-[#2A2A24] font-headline text-base uppercase tracking-wider rounded hover:bg-[#FAF8F0] active:scale-95 transition-all shadow-[2px_2px_0px_rgba(42,42,36,0.1)] flex items-center gap-2"
              >
                <MessageCircle className="w-5 h-5 fill-current stroke-none" />
                <span>CHAT ON WHATSAPP</span>
              </a>
            </div>

            <div className="pt-6 font-mono text-xs text-[#2A2A24]/80 uppercase tracking-wider">
              <span>9443941897</span> • <span>@brove_fabrics</span> • <span>ST COURIER ALL INDIA</span>
            </div>
          </div>
        </section>

      </div>
    </>
  );
};
