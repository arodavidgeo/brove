import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SEOHead } from "../components/layout/SEOHead";
import { BUSINESS_FACTS } from "../data/brove-content";
import { PRODUCTS, ALL_REFERENCE_WORK } from "../data/products";
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

      <div className="w-full bg-surface-paper dark:bg-surface-dark text-text-primary dark:text-text-on-dark transition-colors duration-200">
        
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
          className="relative w-full bg-surface-dark text-text-on-dark overflow-hidden pt-24 sm:pt-28 pb-16 lg:py-24 border-b-4 border-primary-container"
        >
          {/* Layer 1: Dark Industrial Workshop Background Texture */}
          <div className="absolute inset-0 opacity-20 pointer-events-none hero-bg-machinery bg-film-grain" />

          {/* Layer 2: Controlled Yellow Paint/Ink Accent */}
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
                <div className="inline-flex items-center gap-2 bg-surface-dark-secondary px-3.5 py-1.5 rounded border border-surface-dark-secondary">
                  <span className="w-2.5 h-2.5 rounded-full bg-primary-container animate-pulse"></span>
                  <span className="font-mono text-xs uppercase tracking-widest text-primary-container font-bold">
                    CUSTOM APPAREL &amp; PRINTING WORKSHOP
                  </span>
                </div>

                {/* Primary Brand Typography */}
                <div className="space-y-1">
                  <span className="font-mono text-xs sm:text-sm uppercase tracking-widest text-text-muted block">
                    BROVE • WEAR YOUR IDENTITY.
                  </span>
                  <h1 className="font-headline text-5xl sm:text-7xl lg:text-8xl xl:text-9xl uppercase tracking-tight text-text-on-dark leading-[0.95]">
                    WE PRINT <br />
                    <span className="text-primary-container inline-block underline decoration-primary-container/30 decoration-4 underline-offset-8">
                      YOUR IDENTITY.
                    </span>
                  </h1>
                </div>

                {/* Supporting Editorial Message */}
                <p className="font-body text-base sm:text-lg lg:text-xl text-surface-container-highest max-w-xl leading-relaxed font-normal">
                  From ideas to ink, we create custom apparel that speaks your style and story. Premium fabrics, vivid prints, and exact craftsmanship.
                </p>

                {/* Primary Conversion CTAs */}
                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <Link
                    to="/custom-order"
                    className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 rounded bg-primary-container text-text-primary font-headline text-base sm:text-lg uppercase tracking-wider hover:bg-primary-fixed active:scale-95 transition-all shadow-[4px_4px_0px_#FFFFFF]"
                  >
                    <span>SEND YOUR REQUIREMENT →</span>
                  </Link>

                  <Link
                    to="/wardrobe"
                    className="inline-flex items-center justify-center px-5 sm:px-6 py-3.5 sm:py-4 rounded bg-surface-dark-secondary text-text-on-dark font-mono text-xs sm:text-sm uppercase tracking-wider hover:bg-surface-dark border border-surface-dark-secondary hover:border-primary-container transition-all"
                  >
                    EXPLORE WARDROBE →
                  </Link>
                </div>

                {/* Studio Trust Meta Indicators */}
                <div className="flex flex-wrap items-center gap-6 pt-4 text-xs font-mono uppercase tracking-wider text-text-muted border-t border-surface-dark-secondary w-full">
                  <div className="flex items-center gap-1.5 text-text-on-dark">
                    <ShieldCheck className="w-4 h-4 text-primary-container" />
                    <span>MINIMUM ORDER: 5 PIECES</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-text-on-dark">
                    <Truck className="w-4 h-4 text-primary-container" />
                    <span>ST COURIER • 3–7 DAYS ALL INDIA</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-text-on-dark">
                    <Sparkles className="w-4 h-4 text-primary-container" />
                    <span>DTF &amp; EMBROIDERY CRAFT</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Realistic Apparel Hero Visual */}
              <div className="lg:col-span-5 relative mt-6 lg:mt-0 hero-apparel-visual">
                <div className="relative bg-surface-dark-secondary p-4 sm:p-5 rounded-lg shadow-2xl border border-surface-dark-secondary">
                  
                  {/* Studio Metallic Spec Badge */}
                  <div className="absolute top-6 left-6 z-20 bg-primary-container text-text-primary px-3 py-1 font-mono text-xs font-bold uppercase tracking-widest shadow-md rotate-[-2deg] hero-meta-badge">
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
                    <div className="absolute inset-0 bg-gradient-to-t from-surface-dark/80 via-transparent to-transparent pointer-events-none" />
                    <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs font-mono text-text-on-dark">
                      <span className="text-primary-container font-bold">PHYSICAL WORKSHOP SAMPLE</span>
                      <span className="text-text-muted">TIRUNELVELI PRINT FLOOR</span>
                    </div>
                  </div>

                  {/* Frame Technical Details */}
                  <div className="pt-3 flex items-center justify-between text-xs font-mono text-text-on-dark">
                    <span className="text-text-muted uppercase tracking-wider">CANVAS // OVERSIZED BOX CUT</span>
                    <span className="bg-surface-dark px-2.5 py-1 rounded text-primary-container font-bold">
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
            04. APPAREL INTRODUCTION
            - Distinct cards for the 7 apparel canvases with exact pricing
            - Regular Fit ₹350, Oversized ₹450, Acid Wash ₹500, Polo ₹360, Hoodie ₹800, Sweatshirt ₹500, Shirts Custom Pricing
            ================================================== */}
        <section className="py-16 lg:py-24 max-w-[1400px] mx-auto px-margin-mobile lg:px-margin space-y-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b-2 border-text-primary dark:border-surface-dark-secondary pb-4">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-text-muted font-bold block mb-1">
                APPAREL CANVASES // 01
              </span>
              <h2 className="font-headline text-4xl sm:text-6xl uppercase tracking-tight text-text-primary dark:text-text-on-dark">
                THE BROVE WARDROBE.
              </h2>
            </div>
            <div className="max-w-md">
              <p className="font-body text-sm text-text-muted leading-relaxed">
                Choose your fit. Choose your fabric. Add your identity. These are blank canvases ready for your artwork, logos, and custom printing.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {PRODUCTS.map((prod) => (
              <div
                key={prod.id}
                className="bg-surface-white dark:bg-surface-dark-secondary border-2 border-text-primary dark:border-surface-dark-secondary rounded-lg overflow-hidden flex flex-col justify-between shadow-[4px_4px_0px_#171717] dark:shadow-[4px_4px_0px_#F2D400] transition-transform hover:-translate-y-1 duration-200"
              >
                <div>
                  <div className="relative aspect-[4/3] bg-surface-paper dark:bg-surface-dark overflow-hidden p-4 flex items-center justify-center">
                    <img
                      src={prod.referenceImages[0] || prod.image}
                      alt={prod.name}
                      className="w-full h-full object-contain transition-transform duration-300 hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute top-2 right-2 bg-surface-dark text-primary-container px-2 py-0.5 font-mono text-[11px] font-bold uppercase rounded">
                      {prod.category}
                    </div>
                  </div>

                  <div className="p-5 space-y-2">
                    <div className="flex items-baseline justify-between gap-2">
                      <h3 className="font-headline text-xl uppercase tracking-wide text-text-primary dark:text-text-on-dark truncate">
                        {prod.name}
                      </h3>
                      <span className="font-headline text-2xl text-primary-container bg-surface-dark px-2 py-0.5 rounded shrink-0">
                        {formatPrice(prod.price, prod.pricingType)}
                      </span>
                    </div>

                    <p className="font-body text-xs text-text-muted leading-relaxed">
                      {prod.shortDescription || prod.description}
                    </p>

                    <div className="font-mono text-[11px] text-text-muted pt-1 flex items-center gap-2">
                      <span>• MOQ 5 Pcs</span>
                      <span>• {prod.availablePrintingMethods.join(" / ")}</span>
                    </div>
                  </div>
                </div>

                <div className="p-5 pt-0">
                  <Link
                    to={`/custom-order?product=${prod.id}`}
                    className="w-full inline-flex items-center justify-center gap-1.5 py-2.5 px-4 bg-primary-container text-text-primary font-headline text-xs uppercase tracking-wider rounded hover:bg-primary-fixed active:scale-95 transition-all shadow-[2px_2px_0px_#171717]"
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
              className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-text-primary dark:text-text-on-dark hover:text-primary font-bold border-b-2 border-text-primary dark:border-primary-container pb-1 transition-colors"
            >
              <span>VIEW FULL WARDROBE SPECIFICATIONS</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>

        {/* ==================================================
            05. PROCESS (FROM IDEA TO INK)
            - YOUR IDEA → WE DESIGN → WE PRINT → QUALITY CHECK → DELIVERED
            ================================================== */}
        <section className="py-16 lg:py-24 bg-surface-dark text-text-on-dark border-y-4 border-primary-container">
          <div className="max-w-[1400px] mx-auto px-margin-mobile lg:px-margin space-y-12">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div>
                <span className="font-mono text-xs uppercase tracking-widest text-primary-container font-bold block mb-1">
                  WORKFLOW METHODOLOGY // 02
                </span>
                <h2 className="font-headline text-4xl sm:text-6xl uppercase tracking-tight text-text-on-dark">
                  FROM IDEA TO INK.
                </h2>
              </div>
              <p className="font-body text-sm text-surface-container-highest max-w-md leading-relaxed">
                Simple, transparent 5-step custom apparel creation. No automated bot traps; our printers review every placement and mesh.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {BUSINESS_FACTS.processSteps.map((step) => (
                <div
                  key={step.step}
                  className="bg-surface-dark-secondary p-5 rounded border border-surface-dark-secondary flex flex-col justify-between space-y-6 hover:border-primary-container transition-colors"
                >
                  <div className="space-y-3">
                    <span className="font-headline text-5xl text-primary-container block leading-none">
                      {step.step}
                    </span>
                    <h3 className="font-headline text-2xl uppercase tracking-wide text-text-on-dark">
                      {step.title}
                    </h3>
                    <p className="font-mono text-[11px] text-primary-container font-bold uppercase">
                      {step.subtitle}
                    </p>
                    <p className="font-body text-xs text-surface-container-highest leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                  <div className="w-full h-1 bg-surface-dark rounded-full overflow-hidden">
                    <div className="w-1/3 h-full bg-primary-container" />
                  </div>
                </div>
              ))}
            </div>

            <div className="p-4 rounded bg-surface-dark-secondary/60 border border-surface-dark-secondary flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono">
              <span className="text-text-muted">
                COURIER PARTNER: <strong className="text-primary-container">ST COURIER</strong> • PAN-INDIA DISPATCH: <strong className="text-text-on-dark">3–7 DAYS</strong>
              </span>
              <Link
                to="/process"
                className="text-primary-container font-bold hover:underline inline-flex items-center gap-1 uppercase"
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
            <span className="font-mono text-xs uppercase tracking-widest text-text-muted font-bold">
              PRINT LABORATORY // 03
            </span>
            <h2 className="font-headline text-4xl sm:text-6xl uppercase tracking-tight text-text-primary dark:text-text-on-dark">
              TWO DISTINCT DISCIPLINES.
            </h2>
            <p className="font-body text-sm sm:text-base text-text-muted leading-relaxed">
              Artwork requires the right technique. Direct-to-Film for complex colorful illustrations; precision thread embroidery for tactile brand luxury.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* DTF Card */}
            <div className="bg-surface-white dark:bg-surface-dark-secondary border-2 border-text-primary dark:border-surface-dark-secondary rounded-lg p-6 sm:p-8 flex flex-col justify-between space-y-6 shadow-[6px_6px_0px_#171717] dark:shadow-[6px_6px_0px_#F2D400]">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="bg-primary-container text-text-primary font-mono text-xs font-bold px-3 py-1 rounded uppercase tracking-wider">
                    METHOD 01
                  </span>
                  <span className="font-mono text-xs text-text-muted uppercase">DIRECT-TO-FILM</span>
                </div>

                <h3 className="font-headline text-3xl sm:text-4xl uppercase text-text-primary dark:text-text-on-dark leading-tight">
                  DTF PRINTING
                </h3>
                <p className="font-mono text-sm text-primary font-bold uppercase tracking-wide">
                  VIBRANT. DETAILED. CUSTOM.
                </p>

                <p className="font-body text-sm text-text-muted dark:text-surface-container-highest leading-relaxed">
                  Direct-to-Film printing gives artwork vibrant colors and detailed graphics. Fused via heat and polymer adhesive powder, holding razor-sharp lines across stretches.
                </p>

                <div className="space-y-2 pt-2 border-t border-border-neutral dark:border-surface-dark font-mono text-xs">
                  <p className="font-bold text-text-primary dark:text-text-on-dark uppercase">IDEAL FOR:</p>
                  <p className="text-text-muted dark:text-surface-container-high leading-relaxed">
                    Custom T-shirts, Oversized apparel, Hoodies, Sweatshirts, Event apparel, Team apparel, Custom graphics.
                  </p>
                  <p className="text-primary-container font-bold uppercase pt-1">
                    BEST FOR: Detailed, colorful and expressive artwork.
                  </p>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  to="/process#dtf"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 bg-surface-dark text-text-on-dark dark:bg-surface-dark dark:border dark:border-surface-dark font-headline text-sm uppercase tracking-wider rounded hover:bg-surface-dark-secondary active:scale-95 transition-all"
                >
                  <span>SEE DTF SPECIFICATIONS →</span>
                </Link>
              </div>
            </div>

            {/* Embroidery Card */}
            <div className="bg-surface-white dark:bg-surface-dark-secondary border-2 border-text-primary dark:border-surface-dark-secondary rounded-lg p-6 sm:p-8 flex flex-col justify-between space-y-6 shadow-[6px_6px_0px_#171717] dark:shadow-[6px_6px_0px_#F2D400]">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="bg-surface-dark text-text-on-dark font-mono text-xs font-bold px-3 py-1 rounded uppercase tracking-wider">
                    METHOD 02
                  </span>
                  <span className="font-mono text-xs text-text-muted uppercase">PRECISION STITCH</span>
                </div>

                <h3 className="font-headline text-3xl sm:text-4xl uppercase text-text-primary dark:text-text-on-dark leading-tight">
                  EMBROIDERY
                </h3>
                <p className="font-mono text-sm text-primary font-bold uppercase tracking-wide">
                  TEXTURE YOU CAN FEEL.
                </p>

                <p className="font-body text-sm text-text-muted dark:text-surface-container-highest leading-relaxed">
                  Embroidery gives apparel a premium tactile finish with multi-strand viscose filaments sewn directly into the knit. Completely resilient against repeat laundry cycles.
                </p>

                <div className="space-y-2 pt-2 border-t border-border-neutral dark:border-surface-dark font-mono text-xs">
                  <p className="font-bold text-text-primary dark:text-text-on-dark uppercase">IDEAL FOR:</p>
                  <p className="text-text-muted dark:text-surface-container-high leading-relaxed">
                    Polo T-shirts, Hoodies, Shirts, Uniforms, Company apparel, Team apparel, Logos and branding.
                  </p>
                  <p className="text-primary-container font-bold uppercase pt-1">
                    BEST FOR: Logos, names, branding and premium minimal designs.
                  </p>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  to="/process#embroidery"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 bg-surface-dark text-text-on-dark dark:bg-surface-dark dark:border dark:border-surface-dark font-headline text-sm uppercase tracking-wider rounded hover:bg-surface-dark-secondary active:scale-95 transition-all"
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
        <section className="py-16 lg:py-24 bg-surface-paper dark:bg-surface-dark border-t-2 border-border-neutral dark:border-surface-dark-secondary">
          <div className="max-w-[1400px] mx-auto px-margin-mobile lg:px-margin space-y-10">
            
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b-2 border-text-primary dark:border-surface-dark-secondary pb-4">
              <div>
                <span className="font-mono text-xs uppercase tracking-widest text-text-muted font-bold block mb-1">
                  WORKSHOP ARCHIVE // 04
                </span>
                <h2 className="font-headline text-4xl sm:text-6xl uppercase tracking-tight text-text-primary dark:text-text-on-dark">
                  REAL WORK GALLERY.
                </h2>
              </div>
              <p className="font-body text-sm text-text-muted max-w-md leading-relaxed">
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
                      ? "bg-surface-dark text-primary-container shadow-[2px_2px_0px_#F2D400]"
                      : "bg-surface-white dark:bg-surface-dark-secondary text-text-primary dark:text-text-on-dark border border-border-neutral hover:border-primary-container"
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
                  className="group relative bg-surface-white dark:bg-surface-dark-secondary border-2 border-text-primary dark:border-surface-dark-secondary rounded-lg overflow-hidden cursor-pointer shadow-[4px_4px_0px_#171717] dark:shadow-[4px_4px_0px_#F2D400] transition-transform hover:-translate-y-1"
                >
                  <div className="relative aspect-[4/5] bg-black overflow-hidden flex items-center justify-center">
                    <img
                      src={sample.image}
                      alt={sample.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-surface-dark/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                      <span className="font-mono text-xs text-primary-container font-bold flex items-center gap-1">
                        <Eye className="w-3.5 h-3.5" />
                        <span>CLICK TO INSPECT DETAIL</span>
                      </span>
                    </div>
                    <div className="absolute top-2 left-2 bg-surface-dark/80 text-primary-container px-2 py-0.5 font-mono text-[10px] font-bold rounded uppercase">
                      {sample.perspectiveLabel}
                    </div>
                  </div>

                  <div className="p-4 space-y-1">
                    <p className="font-headline text-lg uppercase text-text-primary dark:text-text-on-dark truncate">
                      {sample.title}
                    </p>
                    <p className="font-mono text-xs text-text-muted truncate">
                      {sample.apparelType} • {sample.printMethod}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center pt-4">
              <Link
                to="/wardrobe"
                className="inline-flex items-center gap-2 px-6 py-3 bg-surface-dark text-text-on-dark font-headline text-sm uppercase tracking-wider rounded hover:bg-surface-dark-secondary active:scale-95 transition-all shadow-[2px_2px_0px_#F2D400]"
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
        <section className="py-16 lg:py-24 bg-surface-dark text-text-on-dark border-y-2 border-surface-dark-secondary">
          <div className="max-w-[1400px] mx-auto px-margin-mobile lg:px-margin space-y-12">
            <div className="max-w-2xl space-y-2">
              <span className="font-mono text-xs uppercase tracking-widest text-primary-container font-bold">
                CRAFT PILLARS // 05
              </span>
              <h2 className="font-headline text-4xl sm:text-6xl uppercase tracking-tight text-text-on-dark">
                WHY PEOPLE CHOOSE BROVE.
              </h2>
              <p className="font-body text-sm text-surface-container-highest leading-relaxed">
                We aren't a faceless automated drop-shipper. We run our own physical workshop with real inks, real embroidery heads, and obsessive quality checks.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              
              <div className="bg-surface-dark-secondary p-6 rounded border border-surface-dark-secondary space-y-3">
                <span className="font-mono text-xs font-bold text-primary-container uppercase">01 / LOW THRESHOLD</span>
                <h3 className="font-headline text-2xl uppercase text-text-on-dark">JUST 5 PIECES MOQ</h3>
                <p className="font-body text-xs text-surface-container-highest leading-relaxed">
                  You don't need a corporate budget of 100 shirts. Bring your band, team, or student club idea to life starting at just 5 pieces.
                </p>
              </div>

              <div className="bg-surface-dark-secondary p-6 rounded border border-surface-dark-secondary space-y-3">
                <span className="font-mono text-xs font-bold text-primary-container uppercase">02 / HEAVY COTTON</span>
                <h3 className="font-headline text-2xl uppercase text-text-on-dark">240+ GSM STREETWEAR</h3>
                <p className="font-body text-xs text-surface-container-highest leading-relaxed">
                  Boxy, dropped shoulder silhouettes made with premium bio-washed combed cotton that retains structure wash after wash.
                </p>
              </div>

              <div className="bg-surface-dark-secondary p-6 rounded border border-surface-dark-secondary space-y-3">
                <span className="font-mono text-xs font-bold text-primary-container uppercase">03 / DIRECT INK</span>
                <h3 className="font-headline text-2xl uppercase text-text-on-dark">PHYSICAL PRINT SHOP</h3>
                <p className="font-body text-xs text-surface-container-highest leading-relaxed">
                  Every print is handled under our curing lamps and heat presses. Real humans check your color proofs and typography balance.
                </p>
              </div>

              <div className="bg-surface-dark-secondary p-6 rounded border border-surface-dark-secondary space-y-3">
                <span className="font-mono text-xs font-bold text-primary-container uppercase">04 / ALL-INDIA DISPATCH</span>
                <h3 className="font-headline text-2xl uppercase text-text-on-dark">ST COURIER 3–7 DAYS</h3>
                <p className="font-body text-xs text-surface-container-highest leading-relaxed">
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
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b-2 border-text-primary dark:border-surface-dark-secondary pb-4">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-text-muted font-bold block mb-1">
                COMMUNITIES &amp; CREWS // 06
              </span>
              <h2 className="font-headline text-4xl sm:text-6xl uppercase tracking-tight text-text-primary dark:text-text-on-dark">
                WHO WE CREATE FOR.
              </h2>
            </div>
            <p className="font-body text-sm text-text-muted max-w-md leading-relaxed">
              From college symposiums to corporate launch drops, we engineer apparel tailored to how your group moves.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {BUSINESS_FACTS.audiences.map((aud, index) => (
              <div
                key={aud.title}
                className="p-6 rounded bg-surface-white dark:bg-surface-dark-secondary border-2 border-text-primary dark:border-surface-dark-secondary shadow-[4px_4px_0px_#171717] dark:shadow-[4px_4px_0px_#F2D400] space-y-2 flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <span className="font-mono text-xs text-primary-container bg-surface-dark px-2 py-0.5 rounded font-bold uppercase">
                    0{index + 1}
                  </span>
                  <h3 className="font-headline text-2xl uppercase text-text-primary dark:text-text-on-dark">
                    {aud.title}
                  </h3>
                  <p className="font-body text-xs text-text-muted leading-relaxed">
                    {aud.description}
                  </p>
                </div>
                <div className="pt-2">
                  <Link
                    to="/custom-order"
                    className="font-mono text-xs uppercase tracking-wider text-text-primary dark:text-text-on-dark hover:text-primary font-bold inline-flex items-center gap-1 transition-colors"
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
        <section className="py-16 lg:py-24 bg-surface-dark text-text-on-dark border-y-4 border-primary-container">
          <div className="max-w-[1400px] mx-auto px-margin-mobile lg:px-margin">
            <div className="bg-surface-dark-secondary rounded-xl overflow-hidden border-2 border-primary-container/40 p-6 sm:p-10">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                
                {/* Visual side with perspective toggle */}
                <div className="lg:col-span-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="bg-primary-container text-text-primary font-mono text-xs font-bold px-3 py-1 rounded uppercase tracking-wider">
                      SIGNATURE BLANK SPOTLIGHT
                    </span>

                    <div className="flex items-center gap-1 bg-surface-dark p-1 rounded border border-surface-dark-secondary">
                      <button
                        type="button"
                        onClick={() => setSpotlightView("front")}
                        className={`font-mono text-xs px-3 py-1 rounded font-bold uppercase transition-all ${
                          spotlightView === "front"
                            ? "bg-primary-container text-text-primary"
                            : "text-text-muted hover:text-white"
                        }`}
                      >
                        BLANK FIT
                      </button>
                      <button
                        type="button"
                        onClick={() => setSpotlightView("back")}
                        className={`font-mono text-xs px-3 py-1 rounded font-bold uppercase transition-all ${
                          spotlightView === "back"
                            ? "bg-primary-container text-text-primary"
                            : "text-text-muted hover:text-white"
                        }`}
                      >
                        REAL BACK PRINT
                      </button>
                    </div>
                  </div>

                  <div className="relative aspect-[4/5] max-h-[420px] mx-auto w-full rounded bg-surface-dark overflow-hidden flex items-center justify-center">
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
                    <div className="absolute bottom-2 left-2 bg-surface-dark/90 text-primary-container font-mono text-[10px] px-2 py-0.5 rounded font-bold uppercase">
                      {spotlightView === "front" ? "✓ 240 GSM BLANK CANVASES" : "✓ PHYSICAL BROVE WORK SAMPLE"}
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-xs font-mono pt-2 border-t border-surface-dark">
                    <span className="text-text-muted uppercase">SELECTED COLOR: {selectedColor}</span>
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
                    <span className="font-mono text-xs uppercase tracking-widest text-primary-container font-bold">
                      240 GSM COMBED COTTON
                    </span>
                    <h3 className="font-headline text-4xl sm:text-6xl uppercase tracking-tight text-text-on-dark leading-none">
                      OVERSIZED T-SHIRT
                    </h3>
                    <div className="flex items-baseline gap-3 pt-1">
                      <span className="font-headline text-5xl text-primary-container">₹450</span>
                      <span className="font-mono text-xs text-text-muted uppercase">
                        / PIECE (BASE APPAREL + CUSTOM DTF PRINT)
                      </span>
                    </div>
                  </div>

                  <p className="font-body text-sm sm:text-base text-surface-container-highest leading-relaxed">
                    Engineered with heavy gauge 100% bio-washed combed cotton, relaxed dropped shoulders, and a thick Lycra-reinforced rib collar that retains structure through countless streetwear cycles.
                  </p>

                  <div className="space-y-2 font-mono text-xs text-surface-container-high border-t border-surface-dark pt-4">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary-container shrink-0" />
                      <span>Heavyweight 240 GSM Fabric Density</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary-container shrink-0" />
                      <span>Drop-shoulder relaxed streetwear drape</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary-container shrink-0" />
                      <span>Compatible with DTF multi-color back artwork or chest embroidery</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary-container shrink-0" />
                      <span>Minimum order: Just 5 pieces (mix S to 2XL freely)</span>
                    </div>
                  </div>

                  <div className="pt-2 flex flex-wrap items-center gap-4">
                    <Link
                      to="/custom-order?product=oversized-tshirt"
                      className="px-6 py-3.5 bg-primary-container text-text-primary font-headline text-base uppercase tracking-wider rounded hover:bg-primary-fixed active:scale-95 transition-all shadow-[2px_2px_0px_#FFFFFF]"
                    >
                      ORDER OVERSIZED BATCH →
                    </Link>
                    <Link
                      to="/wardrobe#oversized-tshirt"
                      className="px-5 py-3.5 bg-surface-dark text-text-on-dark font-mono text-xs uppercase tracking-wider rounded hover:bg-surface-dark-secondary transition-colors border border-surface-dark-secondary"
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
              <span className="font-mono text-xs uppercase tracking-widest text-text-muted font-bold block">
                ABOUT OUR STUDIO // 08
              </span>
              <h2 className="font-headline text-4xl sm:text-6xl uppercase tracking-tight text-text-primary dark:text-text-on-dark leading-tight">
                WE MAKE YOUR <br />
                <span className="text-primary underline decoration-primary/40 underline-offset-4">
                  IDEA WEARABLE.
                </span>
              </h2>
              <p className="font-body text-base text-text-muted leading-relaxed">
                {BUSINESS_FACTS.aboutContent.intro}
              </p>
              <p className="font-body text-sm text-text-muted leading-relaxed">
                {BUSINESS_FACTS.aboutContent.body}
              </p>

              <div className="pt-2">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 font-mono text-xs uppercase font-bold text-text-primary dark:text-text-on-dark hover:text-primary transition-colors border-b-2 border-text-primary pb-1"
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
                  className="bg-surface-white dark:bg-surface-dark-secondary p-5 rounded border-2 border-text-primary dark:border-surface-dark-secondary shadow-[3px_3px_0px_#171717] dark:shadow-[3px_3px_0px_#F2D400] space-y-2"
                >
                  <h3 className="font-headline text-xl uppercase tracking-wider text-text-primary dark:text-text-on-dark flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary-container rounded-full"></span>
                    <span>{pillar.name}</span>
                  </h3>
                  <p className="font-body text-xs text-text-muted leading-relaxed">
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
        <section className="py-16 lg:py-24 bg-surface-paper dark:bg-surface-dark border-t-2 border-border-neutral dark:border-surface-dark-secondary">
          <div className="max-w-[1000px] mx-auto px-margin-mobile lg:px-margin space-y-8">
            <div className="text-center max-w-2xl mx-auto space-y-3">
              <span className="font-mono text-xs uppercase tracking-widest text-text-muted font-bold block">
                GET IN TOUCH // 09
              </span>
              <h2 className="font-headline text-4xl sm:text-6xl uppercase tracking-tight text-text-primary dark:text-text-on-dark">
                SEND YOUR REQUIREMENT.
              </h2>
              <p className="font-body text-sm text-text-muted leading-relaxed">
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
            <span className="font-mono text-xs uppercase tracking-widest text-text-muted font-bold">
              COMMON QUESTIONS // 10
            </span>
            <h2 className="font-headline text-4xl sm:text-6xl uppercase tracking-tight text-text-primary dark:text-text-on-dark">
              FREQUENTLY ASKED.
            </h2>
            <p className="font-body text-sm text-text-muted leading-relaxed">
              Clear answers regarding minimum order thresholds, customization, printing techniques, and nationwide delivery.
            </p>
          </div>

          <div className="space-y-3">
            {FAQS.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={faq.question}
                  className="bg-surface-white dark:bg-surface-dark-secondary border-2 border-text-primary dark:border-surface-dark-secondary rounded shadow-[3px_3px_0px_#171717] dark:shadow-[3px_3px_0px_#F2D400] overflow-hidden transition-all"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                    aria-expanded={isOpen}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 font-headline text-xl uppercase tracking-wide text-text-primary dark:text-text-on-dark hover:bg-surface-paper/50 dark:hover:bg-surface-dark transition-colors"
                  >
                    <span>{faq.question}</span>
                    <ChevronDown
                      className={`w-5 h-5 shrink-0 text-text-primary dark:text-primary-container transition-transform duration-200 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-sm font-body text-text-muted dark:text-surface-container-highest leading-relaxed border-t border-border-neutral dark:border-surface-dark">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="text-center pt-2">
            <p className="font-mono text-xs text-text-muted">
              HAVE ANOTHER QUESTION? CALL OR WHATSAPP US AT{" "}
              <a href={`tel:${BUSINESS_FACTS.contact.phone}`} className="text-primary-container bg-surface-dark px-2 py-0.5 rounded font-bold">
                {BUSINESS_FACTS.contact.phone}
              </a>
            </p>
          </div>
        </section>

        {/* ==================================================
            14. FINAL CTA
            - Bold editorial high-impact workshop close
            ================================================== */}
        <section className="py-20 bg-primary-container text-text-primary border-t-4 border-text-primary dark:border-surface-dark-secondary shadow-lg">
          <div className="max-w-[1200px] mx-auto px-margin-mobile lg:px-margin text-center space-y-6">
            <span className="font-mono text-xs uppercase tracking-widest text-text-primary/80 font-bold bg-white/40 px-3 py-1 rounded inline-block">
              READY TO BRING YOUR APPAREL TO LIFE?
            </span>

            <h2 className="font-headline text-5xl sm:text-7xl lg:text-8xl uppercase tracking-tight leading-[0.95] max-w-4xl mx-auto">
              WEAR YOUR IDENTITY. <br />
              <span className="text-surface-dark underline decoration-surface-dark/30 decoration-4 underline-offset-8">
                LET'S MAKE IT WEARABLE.
              </span>
            </h2>

            <p className="font-body text-base sm:text-lg text-text-primary/90 max-w-xl mx-auto leading-relaxed">
              Minimum order is just 5 pieces. Send your design, logo, or idea now and get a direct quote from the BROVE workshop.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              <Link
                to="/custom-order"
                className="px-8 py-4 bg-surface-dark text-text-on-dark font-headline text-lg uppercase tracking-wider rounded hover:bg-surface-dark-secondary active:scale-95 transition-all shadow-[4px_4px_0px_#FFFFFF]"
              >
                SEND YOUR REQUIREMENT →
              </Link>
              <a
                href={`https://wa.me/91${BUSINESS_FACTS.contact.whatsapp}?text=${encodeURIComponent(
                  "Hello BROVE, I want to discuss a custom apparel order."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-4 bg-surface-white text-text-primary border-2 border-text-primary font-headline text-base uppercase tracking-wider rounded hover:bg-surface-paper active:scale-95 transition-all shadow-[4px_4px_0px_#171717] flex items-center gap-2"
              >
                <MessageCircle className="w-5 h-5 fill-current stroke-none" />
                <span>CHAT ON WHATSAPP</span>
              </a>
            </div>

            <div className="pt-6 font-mono text-xs text-text-primary/80 uppercase tracking-wider">
              <span>9443941897</span> • <span>@brove_fabrics</span> • <span>ST COURIER ALL INDIA</span>
            </div>
          </div>
        </section>

      </div>
    </>
  );
};
