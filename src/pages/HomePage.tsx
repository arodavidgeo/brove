import React, { useState } from "react";
import { Link } from "react-router-dom";
import { SEOHead } from "../components/layout/SEOHead";
import { BUSINESS_FACTS } from "../data/brove-content";
import { WorkshopTicker } from "../components/layout/WorkshopTicker";
import { BatchCostEstimator } from "../components/pricing/BatchCostEstimator";

export const HomePage: React.FC = () => {
  const [spotlightView, setSpotlightView] = useState<"front" | "back">("front");
  const [selectedColor, setSelectedColor] = useState<string>("BLACK");

  const colors = [
    { name: "BLACK", hex: "#1C1C1A" },
    { name: "OFF-WHITE", hex: "#F4F1EA" },
    { name: "CHARCOAL", hex: "#373838" },
    { name: "BOTTLE GREEN", hex: "#1F3325" },
  ];

  return (
    <>
      <SEOHead
        title="BROVE : WE PRINT YOUR IDENTITY | Custom Apparel & T-Shirt Printing"
        description="Direct physical printmaking studio. 240+ GSM heavyweight streetwear cuts, vibrant DTF printing, and tactile embroidery. Minimum order 5 pieces. Pan-India dispatch via ST Courier."
        path="/"
      />

      {/* 1. HERO SECTION (Deep Charcoal #171717) */}
      <section className="w-full bg-surface-dark text-text-on-dark overflow-hidden relative pt-20">
        {/* Subtle yellow paint mark / brush stroke background accent */}
        <div className="absolute -top-24 right-1/4 w-96 h-96 opacity-10 pointer-events-none select-none">
          <svg className="w-full h-full text-primary-container fill-current" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.5 120.4C34.2 92.1 78.4 68.3 124.6 54.2C155.8 44.7 182.1 48.9 194.2 62.4C208.2 78.1 190.4 114.7 159.1 138.8C126.5 163.9 76.1 176.2 39.4 165.7C17.3 159.4 3.2 136.2 12.5 120.4Z" />
          </svg>
        </div>

        <div className="max-w-[1400px] mx-auto px-margin-mobile lg:px-margin py-space-xl lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center">
            
            {/* Hero Text & CTA */}
            <div className="lg:col-span-7 flex flex-col items-start gap-space-md z-10">
              <div className="inline-flex items-center gap-space-xs bg-surface-dark-secondary px-space-md py-space-xs rounded">
                <span className="w-2 h-2 rounded-full bg-primary-container inline-block"></span>
                <span className="font-mono text-xs uppercase tracking-widest text-primary-container font-bold">
                  MINIMUM ORDER: 5 PIECES
                </span>
              </div>

              <h1 className="font-headline text-5xl sm:text-7xl lg:text-8xl uppercase tracking-tight text-text-on-dark leading-none">
                WE PRINT <br />
                <span className="text-primary-container relative inline-block">
                  YOUR IDENTITY.
                  <span className="absolute left-0 -bottom-2 w-full h-2 bg-primary-container/20 rounded"></span>
                </span>
              </h1>

              <p className="text-base sm:text-lg text-surface-container-highest max-w-xl leading-relaxed">
                Custom apparel built around your idea, your group, your brand, or your style. Dense inks, heavy combed cotton, and zero compromise on physical print craft.
              </p>

              <div className="flex flex-wrap items-center gap-space-md pt-space-sm">
                <Link
                  to="/custom-order"
                  className="inline-flex items-center justify-center px-space-xl py-space-md rounded bg-primary-container text-text-primary font-headline text-lg sm:text-xl uppercase tracking-wider hover:bg-primary-fixed active:scale-95 transition-all shadow-[3px_3px_0px_#FFFFFF]"
                >
                  START YOUR ORDER →
                </Link>
                <Link
                  to="/wardrobe"
                  className="inline-flex items-center justify-center px-space-lg py-space-md rounded bg-surface-dark-secondary text-text-on-dark font-mono text-xs uppercase tracking-wider hover:bg-surface-dark transition-all border border-surface-dark-secondary"
                >
                  VIEW WARDROBE →
                </Link>
              </div>

              {/* Studio Trust Tags */}
              <div className="flex flex-wrap items-center gap-space-lg pt-space-lg text-text-muted font-mono text-xs uppercase tracking-widest">
                <span className="flex items-center gap-space-xs text-text-on-dark">
                  <span className="material-symbols-outlined text-[18px] text-primary-container">verified</span> 100% COMBED COTTON
                </span>
                <span className="flex items-center gap-space-xs text-text-on-dark">
                  <span className="material-symbols-outlined text-[18px] text-primary-container">local_shipping</span> 3-7 DAYS PAN INDIA
                </span>
              </div>
            </div>

            {/* Garment Editorial Visual */}
            <div className="lg:col-span-5 relative mt-space-md lg:mt-0">
              <div className="relative bg-surface-dark-secondary p-space-md rounded-xl shadow-2xl overflow-hidden border border-surface-dark-secondary">
                {/* Studio Yellow Tape Badge */}
                <div className="absolute top-4 left-4 z-20 bg-primary-container text-text-primary px-space-md py-space-xs font-mono text-xs uppercase tracking-widest shadow-md rotate-[-2deg] font-bold">
                  STUDIO EDITION • 240 GSM
                </div>

                {/* T-Shirt Studio Image */}
                <div className="relative w-full aspect-[4/5] rounded overflow-hidden bg-surface-dark flex items-center justify-center">
                  <img
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCysZ0iAMb33TmOppEv3zZAOc5WoWoc-w-MlADwhoWqhQifZxlOOCZZL__tdaMT3FX-0vKUkOBVYe3uQlrNl4Rvd9fZaldcI1mBjweISBT-O7haLIiuHvtLXAJWSo1nROnu9TSquNsCFOu852_CcFELQNacJpL-kQ46wRmksjUfYTMrujCFnaKhZLNFwEDe1wQSxXkSVAZF50q1NLyidxLbRBfFxF7MrsJOqIZb9AM6A84N6ZKbMMn0"
                    alt="BROVE Heavyweight Oversized Streetwear T-Shirt on Wooden Hanger"
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>

                {/* Frame Meta Bar */}
                <div className="pt-space-md flex items-center justify-between text-text-on-dark font-mono text-xs">
                  <span className="uppercase tracking-widest text-text-muted">ARTICLE NO. // BROVE-OS-01</span>
                  <span className="bg-surface-dark px-space-sm py-space-xs rounded text-primary-container font-bold">
                    OVERSIZED CREWNECK
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Live Workshop Marquee Banner */}
      <WorkshopTicker />

      {/* 2. VALUE STRIP (High Contrast Workshop Specs in BROVE Yellow) */}
      <section className="w-full bg-primary-container text-text-primary border-y border-surface-dark">
        <div className="max-w-[1400px] mx-auto px-margin-mobile lg:px-margin py-space-md">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-gutter text-center divide-y md:divide-y-0 md:divide-x divide-text-primary/15">
            <div className="flex flex-col items-center justify-center p-space-xs">
              <span className="font-headline text-2xl uppercase tracking-wider">CUSTOM APPAREL</span>
              <span className="font-mono text-[11px] uppercase tracking-widest text-text-primary/80">Built From Heavy Native Fabrics</span>
            </div>
            <div className="flex flex-col items-center justify-center p-space-xs">
              <span className="font-headline text-2xl uppercase tracking-wider">DTF + EMBROIDERY</span>
              <span className="font-mono text-[11px] uppercase tracking-widest text-text-primary/80">Tactile Print Lab Accuracy</span>
            </div>
            <div className="flex flex-col items-center justify-center p-space-xs">
              <span className="font-headline text-2xl uppercase tracking-wider">MINIMUM 5 PIECES</span>
              <span className="font-mono text-[11px] uppercase tracking-widest text-text-primary/80">Democratic Ordering Threshold</span>
            </div>
            <div className="flex flex-col items-center justify-center p-space-xs">
              <span className="font-headline text-2xl uppercase tracking-wider">ALL INDIA EXPRESS</span>
              <span className="font-mono text-[11px] uppercase tracking-widest text-text-primary/80">ST Courier • 3–7 Day Delivery</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. PROCESS PREVIEW: FROM IDEA TO APPAREL */}
      <section className="w-full bg-surface-paper py-space-xl lg:py-24">
        <div className="max-w-[1400px] mx-auto px-margin-mobile lg:px-margin space-y-space-xl">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-text-muted block mb-space-xs font-bold">
                CRAFT METHODOLOGY
              </span>
              <h2 className="font-headline text-4xl sm:text-6xl uppercase tracking-tight text-text-primary">
                FROM IDEA TO APPAREL.
              </h2>
            </div>
            <p className="text-text-muted text-base max-w-md leading-relaxed">
              A physical print workshop flow engineered for clarity. No automated bot dead-ends; real printers examine your art and ink.
            </p>
          </div>

          {/* Workshop Visual & Journey Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-stretch">
            {/* Process Image Mosaic */}
            <div className="lg:col-span-5 relative rounded-xl overflow-hidden bg-surface-dark min-h-[380px] shadow-lg flex flex-col justify-end p-space-lg text-text-on-dark">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAZ5NLer3o_ALmEmHILb97TGsqMTwECIfvZ0XfMp0NS7lb7C6VMVIaVlK-oQT2XZQloSAfFqZ9SY1RjmrIv6m2_ABAA09Jlew7u62AjK3fsEXRc8xoCJ6Runqb5UUd-ATn8NCrXu6S9w9ah4UuL2p0DMwyq0N_kVMcx7FOsvWXOOwXoFMWeNiPKttafmh2GV15nEF7eziRuFzaP44ztmw4MmLBDN-3vspKhewrIrYx2BbNpfd2hRcqI"
                alt="BROVE Physical Print Workshop Carousel Floor"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface-dark via-surface-dark/40 to-transparent"></div>
              <div className="relative z-10 space-y-space-xs">
                <span className="bg-primary-container text-text-primary px-space-sm py-space-xs rounded font-mono text-xs uppercase tracking-widest inline-block font-bold">
                  LIVE PRINT FLOOR
                </span>
                <p className="font-headline text-2xl uppercase text-text-on-dark">PHYSICAL APPAREL LAB</p>
                <p className="text-xs text-surface-container-highest">
                  Every garment passes through manual curing ovens and strict fabric tensile inspection.
                </p>
              </div>
            </div>

            {/* 5-Step Connected Flow */}
            <div className="lg:col-span-7 flex flex-col justify-between gap-space-sm">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-space-xs">
                {BUSINESS_FACTS.processSteps.map((stepItem) => (
                  <div
                    key={stepItem.step}
                    className="bg-surface-white p-space-md rounded shadow-sm hover:shadow-md transition-all flex flex-col justify-between border border-border-neutral"
                  >
                    <span className="font-headline text-4xl text-primary-container leading-none">
                      {stepItem.step}
                    </span>
                    <div className="mt-space-md">
                      <p className="font-headline text-lg uppercase text-text-primary leading-tight">
                        {stepItem.title}
                      </p>
                      <p className="text-xs text-text-muted mt-space-xs leading-relaxed">
                        {stepItem.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Bottom SLA notice & link */}
              <div className="bg-surface-container-high p-space-md rounded flex flex-col sm:flex-row items-center justify-between gap-space-md mt-space-xs border border-border-neutral">
                <div className="flex items-center gap-space-sm">
                  <span className="material-symbols-outlined text-text-primary">schedule</span>
                  <p className="text-xs text-text-primary font-mono">
                    Standard turn-around: <strong>3 to 7 working days</strong> from artwork approval.
                  </p>
                </div>
                <Link
                  to="/process"
                  className="inline-flex items-center gap-space-xs font-mono text-xs uppercase text-text-primary hover:text-primary font-bold transition-colors shrink-0"
                >
                  SEE FULL PROCESS →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. PRINTING METHOD COMPARISON (DTF vs Embroidery) */}
      <section className="w-full bg-surface-bright py-space-xl lg:py-24 border-t border-border-neutral">
        <div className="max-w-[1400px] mx-auto px-margin-mobile lg:px-margin space-y-space-xl">
          <div className="text-center max-w-2xl mx-auto space-y-space-xs">
            <span className="font-mono text-xs uppercase tracking-widest text-text-muted font-bold">
              PRINT LABORATORY SPECIFICATIONS
            </span>
            <h2 className="font-headline text-4xl sm:text-6xl uppercase text-text-primary">
              CHOOSE YOUR TEXTURE.
            </h2>
            <p className="text-text-muted text-base leading-relaxed">
              Different graphics demand different techniques. We run specialized setups for hyper-vibrant color density and dimensional thread work.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
            {/* DTF Card */}
            <div className="bg-surface-white rounded-xl p-space-lg shadow-sm hover:shadow-md transition-all flex flex-col justify-between space-y-space-lg border border-border-neutral">
              <div className="space-y-space-md">
                <div className="flex items-center justify-between">
                  <span className="bg-primary-container text-text-primary px-space-md py-space-xs rounded font-mono text-xs uppercase tracking-widest font-bold">
                    METHOD // 01
                  </span>
                  <span className="font-mono text-xs uppercase tracking-wider text-text-muted">HIGH RESOLUTION</span>
                </div>
                <h3 className="font-headline text-3xl uppercase text-text-primary">DTF PRINTING</h3>
                <p className="text-lg text-text-primary font-bold">VIBRANT. DETAILED. CUSTOM.</p>
                <p className="text-sm text-text-muted leading-relaxed">
                  Ideal for multi-color gradients, photorealistic prints, streetwear back-pieces, and micro-line illustrative work. Fused with thermoplastic adhesive powder that flexes with the fabric.
                </p>

                {/* Specs */}
                <div className="grid grid-cols-2 gap-space-sm pt-space-xs">
                  <div className="bg-surface-container-low p-space-sm rounded">
                    <span className="font-mono text-[10px] uppercase text-text-muted block">DURABILITY</span>
                    <span className="text-sm font-bold text-text-primary">Wash Tested</span>
                  </div>
                  <div className="bg-surface-container-low p-space-sm rounded">
                    <span className="font-mono text-[10px] uppercase text-text-muted block">COLOR SPECTRUM</span>
                    <span className="text-sm font-bold text-text-primary">Unlimited CMYK</span>
                  </div>
                  <div className="bg-surface-container-low p-space-sm rounded">
                    <span className="font-mono text-[10px] uppercase text-text-muted block">FABRIC COMPATIBILITY</span>
                    <span className="text-sm font-bold text-text-primary">Cotton, French Terry, Poly</span>
                  </div>
                  <div className="bg-surface-container-low p-space-sm rounded">
                    <span className="font-mono text-[10px] uppercase text-text-muted block">MINIMUM PIECES</span>
                    <span className="text-sm font-bold text-text-primary">5 Units</span>
                  </div>
                </div>
              </div>

              <div className="pt-space-md">
                <Link
                  to="/process"
                  className="w-full inline-flex items-center justify-center px-space-md py-space-sm rounded bg-surface-dark text-text-on-dark font-headline text-base uppercase tracking-wider hover:bg-surface-dark-secondary active:scale-95 transition-all"
                >
                  LEARN ABOUT DTF →
                </Link>
              </div>
            </div>

            {/* Embroidery Card */}
            <div className="bg-surface-white rounded-xl p-space-lg shadow-sm hover:shadow-md transition-all flex flex-col justify-between space-y-space-lg border border-border-neutral">
              <div className="space-y-space-md">
                <div className="flex items-center justify-between">
                  <span className="bg-surface-dark text-text-on-dark px-space-md py-space-xs rounded font-mono text-xs uppercase tracking-widest font-bold">
                    METHOD // 02
                  </span>
                  <span className="font-mono text-xs uppercase tracking-wider text-text-muted">TACTILE STITCH</span>
                </div>
                <h3 className="font-headline text-3xl uppercase text-text-primary">EMBROIDERY</h3>
                <p className="text-lg text-text-primary font-bold">TEXTURE YOU CAN FEEL.</p>
                <p className="text-sm text-text-muted leading-relaxed">
                  Dimensional thread density engineered for chest patches, brand wordmarks, varsity lettering, and premium streetwear accents. Completely immune to wash fade.
                </p>

                {/* Specs */}
                <div className="grid grid-cols-2 gap-space-sm pt-space-xs">
                  <div className="bg-surface-container-low p-space-sm rounded">
                    <span className="font-mono text-[10px] uppercase text-text-muted block">LIFESPAN</span>
                    <span className="text-sm font-bold text-text-primary">Durable Thread</span>
                  </div>
                  <div className="bg-surface-container-low p-space-sm rounded">
                    <span className="font-mono text-[10px] uppercase text-text-muted block">STITCH DENSITY</span>
                    <span className="text-sm font-bold text-text-primary">High-Tension Thread</span>
                  </div>
                  <div className="bg-surface-container-low p-space-sm rounded">
                    <span className="font-mono text-[10px] uppercase text-text-muted block">IDEAL APPAREL</span>
                    <span className="text-sm font-bold text-text-primary">Hoodies, Polos, Heavy Crews</span>
                  </div>
                  <div className="bg-surface-container-low p-space-sm rounded">
                    <span className="font-mono text-[10px] uppercase text-text-muted block">MINIMUM PIECES</span>
                    <span className="text-sm font-bold text-text-primary">5 Units</span>
                  </div>
                </div>
              </div>

              <div className="pt-space-md">
                <Link
                  to="/process"
                  className="w-full inline-flex items-center justify-center px-space-md py-space-sm rounded bg-surface-dark text-text-on-dark font-headline text-base uppercase tracking-wider hover:bg-surface-dark-secondary active:scale-95 transition-all"
                >
                  LEARN ABOUT EMBROIDERY →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. PRODUCT SPOTLIGHT: OVERSIZED T-SHIRT (WITH INTERACTIVE PERSPECTIVE & SWATCHES) */}
      <section className="w-full bg-surface-paper py-space-xl lg:py-24">
        <div className="max-w-[1400px] mx-auto px-margin-mobile lg:px-margin">
          <div className="bg-surface-dark text-text-on-dark rounded-xl overflow-hidden shadow-2xl border-2 border-primary-container/40">
            <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
              
              {/* Garment Visual Split with Interactive Front / Back Sample Toggle */}
              <div className="lg:col-span-6 relative min-h-[460px] bg-surface-dark-secondary flex flex-col justify-between p-6 sm:p-8">
                
                {/* Top View Toggle */}
                <div className="flex items-center justify-between gap-2 z-20">
                  <div className="bg-primary-container text-text-primary font-mono text-xs uppercase tracking-widest px-3 py-1 rounded font-bold shadow-sm">
                    BESTSELLER BLANK
                  </div>

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

                {/* Image Display */}
                <div className="relative aspect-[4/5] max-h-[380px] mx-auto w-full my-4 flex items-center justify-center overflow-hidden rounded bg-surface-dark">
                  {spotlightView === "front" ? (
                    <img
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuCXa9_L_rgs4TMU7qJO9WSTxc63CjbKs0eajs4ydKPUzOPqFyKIcv2dMeu4ZYDiwicNVPEStRq-Ylje52Nkt0LR-ld0LfCOLmhfNpOuY8QnNsjyuZIs4hbKiG84DEV7XfhjRMmMt27S0vbEDVvYvu80S7_LGOJWOr5rSkiAeZwMleF1HqIWFQCNCn_0fIh4xrgdKOZEL7QERdm9FAkpXP5NyfC9krMsuQZgRS435CUeXUkXsEW-XDuE"
                      alt="Model wearing boxy oversized black t-shirt with dropped shoulders"
                      className="w-full h-full object-cover rounded transition-transform duration-500 hover:scale-105"
                    />
                  ) : (
                    <img
                      src="/reference-dress/WhatsApp Image 2026-08-22 at 10.37.46 PM.jpeg"
                      alt="Real BROVE workshop print - Oversized back graphic"
                      className="w-full h-full object-contain rounded transition-transform duration-500 hover:scale-105"
                    />
                  )}

                  {spotlightView === "back" && (
                    <div className="absolute bottom-2 left-2 bg-surface-dark/90 text-primary-container font-mono text-[10px] px-2 py-0.5 rounded font-bold uppercase">
                      ✓ ACTUAL WORKSHOP SAMPLE
                    </div>
                  )}
                </div>

                {/* Color swatches */}
                <div className="flex items-center justify-between text-xs font-mono pt-2 border-t border-surface-dark z-20">
                  <span className="text-text-muted uppercase">Selected: {selectedColor}</span>
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

              {/* Product Details & Specs */}
              <div className="lg:col-span-6 p-space-lg lg:p-space-xl flex flex-col justify-between space-y-space-lg">
                <div className="space-y-space-md">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs uppercase tracking-widest text-primary-container font-bold">
                      SIGNATURE BLANK
                    </span>
                    <span className="font-mono text-xs uppercase tracking-wider text-surface-container-highest">
                      240 GSM COMBED
                    </span>
                  </div>

                  <h3 className="font-headline text-4xl sm:text-5xl uppercase tracking-tight text-text-on-dark leading-none">
                    OVERSIZED T-SHIRT
                  </h3>

                  <div className="flex items-baseline gap-space-sm">
                    <span className="font-headline text-5xl text-primary-container">₹450</span>
                    <span className="text-xs text-text-muted font-mono uppercase tracking-wider">
                      / piece (Base garment + custom DTF print)
                    </span>
                  </div>

                  <p className="text-sm text-surface-container-highest leading-relaxed">
                    Engineered with heavy gauge 100% bio-washed combed cotton, relaxed dropped shoulders, and a thick 1.25" rib collar that retains structure through countless streetwear cycles.
                  </p>

                  <div className="space-y-space-xs pt-space-xs text-xs text-surface-container-highest font-mono">
                    <div className="flex items-center gap-space-xs">
                      <span className="material-symbols-outlined text-[18px] text-primary-container">check_circle</span>
                      <span>Heavyweight 240 GSM Fabric Density</span>
                    </div>
                    <div className="flex items-center gap-space-xs">
                      <span className="material-symbols-outlined text-[18px] text-primary-container">check_circle</span>
                      <span>Bio-washed premium cotton finish</span>
                    </div>
                    <div className="flex items-center gap-space-xs">
                      <span className="material-symbols-outlined text-[18px] text-primary-container">check_circle</span>
                      <span>Supports DTF front/back + High-density chest embroidery</span>
                    </div>
                    <div className="flex items-center gap-space-xs">
                      <span className="material-symbols-outlined text-[18px] text-primary-container">check_circle</span>
                      <span>Minimum order only 5 pieces (mix sizes freely)</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-space-md pt-space-md">
                  <Link
                    to="/custom-order?product=oversized-tshirt"
                    className="inline-flex items-center justify-center px-space-xl py-space-md rounded bg-primary-container text-text-primary font-headline text-lg uppercase tracking-wider hover:bg-primary-fixed active:scale-95 transition-all shadow-md"
                  >
                    START YOUR ORDER →
                  </Link>
                  <Link
                    to="/wardrobe#oversized-tshirt"
                    className="inline-flex items-center justify-center px-space-lg py-space-md rounded bg-surface-dark-secondary text-text-on-dark font-mono text-xs uppercase tracking-wider hover:bg-surface-dark transition-all border border-surface-dark-secondary"
                  >
                    INSPECT WORK SAMPLES
                  </Link>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* 6. LIVE BATCH COST ESTIMATOR ON HOMEPAGE */}
      <section className="w-full bg-surface-paper py-space-xl lg:py-24 border-t border-border-neutral">
        <div className="max-w-[1400px] mx-auto px-margin-mobile lg:px-margin space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="font-mono text-xs uppercase tracking-widest text-text-muted font-bold">
              TRANSPARENT PRODUCTION COSTS
            </span>
            <h2 className="font-headline text-4xl sm:text-6xl uppercase text-text-primary">
              INSTANT BATCH ESTIMATE.
            </h2>
            <p className="text-text-muted text-sm sm:text-base leading-relaxed">
              Plan your college event, symposium, or team budget right now. Adjust pieces and apparel to see the exact investment.
            </p>
          </div>

          <BatchCostEstimator />
        </div>
      </section>
    </>
  );
};
