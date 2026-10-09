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

      <div ref={containerRef} className="w-full bg-surface-paper dark:bg-surface-dark text-text-primary dark:text-text-on-dark pt-20 transition-colors duration-200">
        
        {/* Header Hero */}
        <section className="w-full bg-surface-dark text-text-on-dark py-12 md:py-16 border-b-4 border-primary-container relative overflow-hidden">
          <div className="max-w-[1400px] mx-auto px-margin-mobile lg:px-margin space-y-4 relative z-10">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 bg-primary-container inline-block"></span>
                <span className="font-mono text-xs uppercase tracking-widest text-primary-container font-bold">
                  PRODUCTION METHODOLOGY &amp; PRINT LAB
                </span>
              </div>
              <div className="bg-primary-container text-text-primary px-3 py-1 font-mono text-xs uppercase tracking-wider font-bold shadow-sm">
                MINIMUM ORDER: 5 PIECES
              </div>
            </div>

            <div className="max-w-3xl space-y-2">
              <h1 className="font-headline text-5xl sm:text-7xl lg:text-8xl uppercase tracking-tight text-text-on-dark leading-none">
                FROM IDEA TO INK.
              </h1>
              <p className="font-headline text-2xl sm:text-3xl text-primary-container uppercase tracking-wide">
                PHYSICAL PRINTMAKING &amp; EMBROIDERY.
              </p>
              <p className="font-body text-base text-surface-container-highest max-w-2xl leading-relaxed">
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
            <div className="border-b-2 border-text-primary dark:border-surface-dark-secondary pb-4">
              <span className="font-mono text-xs uppercase tracking-widest text-text-muted font-bold block mb-1">
                STAGE 01 // 5-STEP CORE JOURNEY
              </span>
              <h2 className="font-headline text-3xl sm:text-5xl uppercase tracking-tight text-text-primary dark:text-text-on-dark">
                HOW BROVE TURNS IDEAS INTO APPAREL
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
              {BUSINESS_FACTS.processSteps.map((step) => (
                <div
                  key={step.step}
                  className="process-step-item bg-surface-white dark:bg-surface-dark-secondary border-2 border-text-primary dark:border-surface-dark-secondary p-6 rounded-lg flex flex-col justify-between space-y-6 shadow-[4px_4px_0px_#171717] dark:shadow-[4px_4px_0px_#F2D400]"
                >
                  <div className="space-y-3">
                    <span className="font-headline text-5xl text-primary-container bg-surface-dark px-3 py-1 rounded inline-block leading-none">
                      {step.step}
                    </span>
                    <h3 className="font-headline text-2xl uppercase tracking-tight text-text-primary dark:text-text-on-dark pt-2">
                      {step.title}
                    </h3>
                    <p className="font-mono text-xs text-primary font-bold uppercase">
                      {step.subtitle}
                    </p>
                    <p className="font-body text-xs text-text-muted dark:text-surface-container-highest leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-border-neutral dark:border-surface-dark font-mono text-[11px] text-text-muted">
                    <span>BROVE PRODUCTION</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-5 rounded bg-surface-dark text-text-on-dark border-2 border-primary-container flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs">
              <div className="flex items-center gap-2">
                <Truck className="w-4 h-4 text-primary-container" />
                <span>NATIONWIDE PARCEL DISPATCH: <strong>ST COURIER (3–7 DAYS)</strong></span>
              </div>
              <Link
                to="/custom-order"
                className="text-primary-container font-bold hover:underline uppercase inline-flex items-center gap-1"
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
            <div className="border-b-2 border-text-primary dark:border-surface-dark-secondary pb-4">
              <span className="font-mono text-xs uppercase tracking-widest text-text-muted font-bold block mb-1">
                STAGE 02 // MANUFACTURING DISCIPLINES
              </span>
              <h2 className="font-headline text-3xl sm:text-5xl uppercase tracking-tight text-text-primary dark:text-text-on-dark">
                TWO DISTINCT TECHNIQUES
              </h2>
            </div>

            {/* DTF PRINTING SECTION */}
            <div id="dtf" className="bg-surface-white dark:bg-surface-dark-secondary border-2 border-text-primary dark:border-surface-dark-secondary p-6 sm:p-10 rounded-lg shadow-[6px_6px_0px_#171717] dark:shadow-[6px_6px_0px_#F2D400] space-y-8">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                
                <div className="lg:col-span-7 space-y-4">
                  <div className="flex items-center gap-2">
                    <span className="bg-primary-container text-text-primary font-mono text-xs font-bold px-3 py-1 rounded uppercase tracking-wider">
                      METHOD 01
                    </span>
                    <span className="font-mono text-xs text-text-muted uppercase">DIRECT-TO-FILM</span>
                  </div>

                  <h3 className="font-headline text-4xl sm:text-5xl uppercase tracking-tight text-text-primary dark:text-text-on-dark">
                    DTF PRINTING
                  </h3>

                  <p className="font-headline text-2xl text-primary uppercase tracking-wide">
                    VIBRANT. DETAILED. CUSTOM.
                  </p>

                  <p className="font-body text-base text-text-muted dark:text-surface-container-highest leading-relaxed">
                    Direct-to-Film printing gives artwork vibrant colors and detailed graphics. Ink is digitally deposited onto specialized PET film and bonded to textile fibers using hot-melt adhesive powder and calibrated heat presses.
                  </p>

                  {/* Ideal for list */}
                  <div className="space-y-2 pt-2 border-t border-border-neutral dark:border-surface-dark">
                    <span className="font-mono text-xs font-bold text-text-primary dark:text-text-on-dark uppercase block">
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
                          className="bg-surface-paper dark:bg-surface-dark px-3 py-1 rounded font-mono text-xs text-text-primary dark:text-text-on-dark border border-border-neutral dark:border-surface-dark"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="p-3.5 bg-primary-container/15 rounded border border-primary-container text-xs font-mono text-text-primary dark:text-text-on-dark font-bold">
                    BEST FOR: Detailed, colorful and expressive artwork.
                  </div>
                </div>

                {/* Real workshop photo demonstration for DTF */}
                <div className="lg:col-span-5 space-y-3">
                  <div className="aspect-[4/3] rounded-lg overflow-hidden bg-black border border-border-neutral">
                    <img
                      src="/reference-dress/WhatsApp Image 2026-08-22 at 10.37.46 PM.jpeg"
                      alt="Real workshop DTF back graphic"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex items-center justify-between text-xs font-mono text-text-muted">
                    <span>✓ REAL BROVE WORKSHOP SAMPLE</span>
                    <span>14" DTF BACK GRAPHIC</span>
                  </div>
                </div>

              </div>
            </div>

            {/* EMBROIDERY SECTION */}
            <div id="embroidery" className="bg-surface-white dark:bg-surface-dark-secondary border-2 border-text-primary dark:border-surface-dark-secondary p-6 sm:p-10 rounded-lg shadow-[6px_6px_0px_#171717] dark:shadow-[6px_6px_0px_#F2D400] space-y-8">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                
                <div className="lg:col-span-7 space-y-4">
                  <div className="flex items-center gap-2">
                    <span className="bg-surface-dark text-text-on-dark font-mono text-xs font-bold px-3 py-1 rounded uppercase tracking-wider">
                      METHOD 02
                    </span>
                    <span className="font-mono text-xs text-text-muted uppercase">PRECISION STITCH</span>
                  </div>

                  <h3 className="font-headline text-4xl sm:text-5xl uppercase tracking-tight text-text-primary dark:text-text-on-dark">
                    EMBROIDERY
                  </h3>

                  <p className="font-headline text-2xl text-primary uppercase tracking-wide">
                    TEXTURE YOU CAN FEEL.
                  </p>

                  <p className="font-body text-base text-text-muted dark:text-surface-container-highest leading-relaxed">
                    Embroidery gives apparel a premium tactile finish. Specialized automated multi-needle embroidery heads sew high-tensile polyester filament directly into the knit, creating dimensional relief that lasts the life of the garment.
                  </p>

                  {/* Ideal for list */}
                  <div className="space-y-2 pt-2 border-t border-border-neutral dark:border-surface-dark">
                    <span className="font-mono text-xs font-bold text-text-primary dark:text-text-on-dark uppercase block">
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
                          className="bg-surface-paper dark:bg-surface-dark px-3 py-1 rounded font-mono text-xs text-text-primary dark:text-text-on-dark border border-border-neutral dark:border-surface-dark"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="p-3.5 bg-surface-dark text-text-on-dark rounded border border-surface-dark text-xs font-mono font-bold">
                    BEST FOR: Logos, names, branding and premium minimal designs.
                  </div>
                </div>

                {/* Real workshop photo demonstration for Embroidery / Craft */}
                <div className="lg:col-span-5 space-y-3">
                  <div className="aspect-[4/3] rounded-lg overflow-hidden bg-black border border-border-neutral">
                    <img
                      src="/reference-dress/WhatsApp Image 2026-08-22 at 10.43.02 PM.jpeg"
                      alt="Real workshop macro stitch and fabric bond"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex items-center justify-between text-xs font-mono text-text-muted">
                    <span>✓ REAL BROVE WORKSHOP SAMPLE</span>
                    <span>MACRO STITCH &amp; FIBER DETAIL</span>
                  </div>
                </div>

              </div>
            </div>

          </section>

          {/* CTA Box */}
          <div className="bg-primary-container text-text-primary p-8 rounded-lg border-2 border-text-primary flex flex-col sm:flex-row items-center justify-between gap-6 shadow-[6px_6px_0px_#171717]">
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
              className="px-6 py-3.5 bg-surface-dark text-text-on-dark font-headline text-sm uppercase tracking-wider rounded hover:bg-surface-dark-secondary active:scale-95 transition-all shadow-[2px_2px_0px_#FFFFFF] shrink-0"
            >
              SEND YOUR REQUIREMENT →
            </Link>
          </div>

        </div>

      </div>
    </>
  );
};
