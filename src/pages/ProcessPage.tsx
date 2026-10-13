import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SEOHead } from "../components/layout/SEOHead";
import { BUSINESS_FACTS } from "../data/brove-content";
import { WorkshopTicker } from "../components/layout/WorkshopTicker";
import { Truck } from "lucide-react";

export const ProcessPage: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Step cards subtle entry
      gsap.utils.toArray<HTMLElement>(".process-step-item").forEach((item, idx) => {
        gsap.from(item, {
          y: 30,
          opacity: 0,
          duration: 0.6,
          delay: idx * 0.1,
          scrollTrigger: {
            trigger: item,
            start: "top 85%",
          },
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <SEOHead
        title="PROCESS & PRINTING : From Idea to Ink | BROVE"
        description="Learn how BROVE creates custom apparel: Your Idea, We Design, We Print, Quality Check, and Delivered across India. Explore DTF Printing and tactile Embroidery techniques."
        path="/process"
      />

      <div ref={containerRef} className="w-full bg-transparent text-[#2A2A24] pt-20 transition-colors duration-200">
        
        {/* Header Hero */}
        <section className="w-full bg-transparent text-[#2A2A24] py-12 md:py-16 border-b-2 border-[#E6E2D3] relative overflow-hidden">
          <div className="max-w-[1400px] mx-auto px-margin-mobile lg:px-margin space-y-4 relative z-10">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 bg-primary-container inline-block"></span>
                <span className="font-mono text-xs uppercase tracking-widest text-[#5A680C] font-bold">
                  PRODUCTION METHODOLOGY &amp; PRINT LAB
                </span>
              </div>
              <div className="bg-primary-container text-text-primary px-3 py-1 font-mono text-xs uppercase tracking-wider font-bold shadow-xs">
                MINIMUM ORDER: 5 PIECES
              </div>
            </div>

            <div className="max-w-3xl space-y-2">
              <h1 className="font-headline text-5xl sm:text-7xl lg:text-8xl uppercase tracking-tight text-[#2A2A24] leading-none">
                FROM IDEA TO INK.
              </h1>
              <p className="font-headline text-2xl sm:text-3xl text-[#5A680C] uppercase tracking-wide">
                PHYSICAL PRINTMAKING &amp; EMBROIDERY.
              </p>
              <p className="font-body text-base text-[#55544D] max-w-2xl leading-relaxed">
                We bridge your creative ideas and raw fabric. Explore our 5-step journey from initial concept review to courier dispatch, and understand the right print method for your design.
              </p>
            </div>
          </div>
        </section>

        <WorkshopTicker />

        <div className="max-w-[1400px] mx-auto px-margin-mobile lg:px-margin py-12 sm:py-16 space-y-20">
          
          {/* ==================================================
              5-STEP WORKFLOW JOURNEY
              - YOUR IDEA
              - WE DESIGN
              - WE PRINT
              - QUALITY CHECK
              - DELIVERED
              ================================================== */}
          <section className="space-y-10">
            <div className="border-b-2 border-[#E6E2D3] pb-4">
              <span className="font-mono text-xs uppercase tracking-widest text-[#66645A] font-bold block mb-1">
                STAGE 01 // 5-STEP CORE JOURNEY
              </span>
              <h2 className="font-headline text-3xl sm:text-5xl uppercase tracking-tight text-[#2A2A24]">
                HOW BROVE TURNS IDEAS INTO APPAREL
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
              {BUSINESS_FACTS.processSteps.map((step) => (
                <div
                  key={step.step}
                  className="process-step-item bg-[#FFFFFF] border-2 border-[#E6E2D3] p-6 rounded-lg flex flex-col justify-between space-y-6 shadow-[0_4px_16px_rgba(42,42,36,0.06)]"
                >
                  <div className="space-y-3">
                    <span className="font-headline text-5xl text-[#2A2A24] bg-primary-container px-3 py-1 rounded inline-block leading-none shadow-xs">
                      {step.step}
                    </span>
                    <h3 className="font-headline text-2xl uppercase tracking-tight text-[#2A2A24] pt-2">
                      {step.title}
                    </h3>
                    <p className="font-mono text-xs text-[#5A680C] font-bold uppercase">
                      {step.subtitle}
                    </p>
                    <p className="font-body text-xs text-[#55544D] leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-[#E6E2D3] font-mono text-[11px] text-[#66645A]">
                    <span>BROVE PRODUCTION</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-5 rounded bg-[#FAF8F0] text-[#2A2A24] border-2 border-primary-container flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs shadow-xs">
              <div className="flex items-center gap-2">
                <Truck className="w-4 h-4 text-[#5A680C]" />
                <span>NATIONWIDE PARCEL DISPATCH: <strong>ST COURIER (3–7 DAYS)</strong></span>
              </div>
              <Link
                to="/custom-order"
                className="text-[#5A680C] font-bold hover:underline uppercase inline-flex items-center gap-1"
              >
                <span>READY TO SUBMIT YOUR IDEA? →</span>
              </Link>
            </div>
          </section>

          {/* ==================================================
              PRINTING METHODS COMPARISON
              - DTF PRINTING
              - EMBROIDERY
              ================================================== */}
          <section id="methods" className="space-y-12">
            <div className="border-b-2 border-[#E6E2D3] pb-4">
              <span className="font-mono text-xs uppercase tracking-widest text-[#66645A] font-bold block mb-1">
                STAGE 02 // MANUFACTURING DISCIPLINES
              </span>
              <h2 className="font-headline text-3xl sm:text-5xl uppercase tracking-tight text-[#2A2A24]">
                TWO DISTINCT TECHNIQUES
              </h2>
            </div>

            {/* DTF PRINTING SECTION */}
            <div id="dtf" className="bg-[#FFFFFF] border-2 border-[#E6E2D3] p-6 sm:p-10 rounded-lg shadow-[0_4px_20px_rgba(42,42,36,0.06)] space-y-8">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                
                <div className="lg:col-span-7 space-y-4">
                  <div className="flex items-center gap-2">
                    <span className="bg-primary-container text-text-primary font-mono text-xs font-bold px-3 py-1 rounded uppercase tracking-wider shadow-xs">
                      METHOD 01
                    </span>
                    <span className="font-mono text-xs text-[#66645A] uppercase">DIRECT-TO-FILM</span>
                  </div>

                  <h3 className="font-headline text-4xl sm:text-5xl uppercase tracking-tight text-[#2A2A24]">
                    DTF PRINTING
                  </h3>

                  <p className="font-headline text-2xl text-[#5A680C] uppercase tracking-wide">
                    VIBRANT. DETAILED. CUSTOM.
                  </p>

                  <p className="font-body text-base text-[#55544D] leading-relaxed">
                    Direct-to-Film printing gives artwork vibrant colors and detailed graphics. Ink is digitally deposited onto specialized PET film and bonded to textile fibers using hot-melt adhesive powder and calibrated heat presses.
                  </p>

                  {/* Ideal for list */}
                  <div className="space-y-2 pt-2 border-t border-[#E6E2D3]">
                    <span className="font-mono text-xs font-bold text-[#2A2A24] uppercase block">
                      IDEAL FOR:
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {[
                        "Custom T-shirts",
                        "Oversized apparel",
                        "Hoodies",
                        "Sweatshirts",
                        "Event apparel",
                        "Team apparel",
                        "Custom graphics",
                      ].map((item) => (
                        <span
                          key={item}
                          className="bg-[#FAF8F0] px-3 py-1 rounded font-mono text-xs text-[#2A2A24] border border-[#E6E2D3]"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="p-3.5 bg-[#FAF8F0] rounded border border-primary-container text-xs font-mono text-[#2A2A24] font-bold">
                    BEST FOR: Detailed, colorful and expressive artwork.
                  </div>
                </div>

                {/* Real workshop photo demonstration for DTF */}
                <div className="lg:col-span-5 space-y-3">
                  <div className="aspect-[4/3] rounded-lg overflow-hidden bg-[#FAF8F0] border border-[#E6E2D3]">
                    <img
                      src="/reference-dress/WhatsApp Image 2026-08-22 at 10.37.46 PM.jpeg"
                      alt="Real workshop DTF back graphic"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex items-center justify-between text-xs font-mono text-[#66645A]">
                    <span>✓ REAL BROVE WORKSHOP SAMPLE</span>
                    <span>14" DTF BACK GRAPHIC</span>
                  </div>
                </div>

              </div>
            </div>

            {/* EMBROIDERY SECTION */}
            <div id="embroidery" className="bg-[#FFFFFF] border-2 border-[#E6E2D3] p-6 sm:p-10 rounded-lg shadow-[0_4px_20px_rgba(42,42,36,0.06)] space-y-8">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                
                <div className="lg:col-span-7 space-y-4">
                  <div className="flex items-center gap-2">
                    <span className="bg-[#FAF8F0] text-[#2A2A24] border border-[#E6E2D3] font-mono text-xs font-bold px-3 py-1 rounded uppercase tracking-wider">
                      METHOD 02
                    </span>
                    <span className="font-mono text-xs text-[#66645A] uppercase">PRECISION STITCH</span>
                  </div>

                  <h3 className="font-headline text-4xl sm:text-5xl uppercase tracking-tight text-[#2A2A24]">
                    EMBROIDERY
                  </h3>

                  <p className="font-headline text-2xl text-[#5A680C] uppercase tracking-wide">
                    TEXTURE YOU CAN FEEL.
                  </p>

                  <p className="font-body text-base text-[#55544D] leading-relaxed">
                    Embroidery gives apparel a premium tactile finish. Specialized automated multi-needle embroidery heads sew high-tensile polyester filament directly into the knit, creating dimensional relief that lasts the life of the garment.
                  </p>

                  {/* Ideal for list */}
                  <div className="space-y-2 pt-2 border-t border-[#E6E2D3]">
                    <span className="font-mono text-xs font-bold text-[#2A2A24] uppercase block">
                      IDEAL FOR:
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {[
                        "Polo T-shirts",
                        "Hoodies",
                        "Shirts",
                        "Uniforms",
                        "Company apparel",
                        "Team apparel",
                        "Logos and branding",
                      ].map((item) => (
                        <span
                          key={item}
                          className="bg-[#FAF8F0] px-3 py-1 rounded font-mono text-xs text-[#2A2A24] border border-[#E6E2D3]"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="p-3.5 bg-[#FAF8F0] text-[#2A2A24] rounded border border-primary-container text-xs font-mono font-bold">
                    BEST FOR: Logos, names, branding and premium minimal designs.
                  </div>
                </div>

                {/* Real workshop photo demonstration for Embroidery / Craft */}
                <div className="lg:col-span-5 space-y-3">
                  <div className="aspect-[4/3] rounded-lg overflow-hidden bg-[#FAF8F0] border border-[#E6E2D3]">
                    <img
                      src="/reference-dress/WhatsApp Image 2026-08-22 at 10.43.02 PM.jpeg"
                      alt="Real workshop macro stitch and fabric bond"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex items-center justify-between text-xs font-mono text-[#66645A]">
                    <span>✓ REAL BROVE WORKSHOP SAMPLE</span>
                    <span>MACRO STITCH &amp; FIBER DETAIL</span>
                  </div>
                </div>

              </div>
            </div>

          </section>

          {/* CTA Box */}
          <div className="bg-primary-container text-text-primary p-8 rounded-lg border-2 border-[#2A2A24] flex flex-col sm:flex-row items-center justify-between gap-6 shadow-[2px_2px_0px_#2A2A24]">
            <div className="space-y-1">
              <h3 className="font-headline text-3xl uppercase leading-tight">
                NEED ADVICE ON DTF VS EMBROIDERY?
              </h3>
              <p className="font-body text-sm">
                Share your artwork and we'll tell you which technique suits your garment best.
              </p>
            </div>
            <Link
              to="/custom-order"
              className="px-6 py-3.5 bg-[#2A2A24] text-[#FAF8F0] font-headline text-sm uppercase tracking-wider rounded hover:bg-[#3A3A34] active:scale-95 transition-all shadow-[2px_2px_0px_#FFFFFF] shrink-0"
            >
              SEND YOUR REQUIREMENT →
            </Link>
          </div>

        </div>

      </div>
    </>
  );
};
