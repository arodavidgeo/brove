import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SEOHead } from "../components/layout/SEOHead";
import { ArrowRight, MessageCircle, Sparkles, CheckCircle2 } from "lucide-react";
import { BUSINESS_FACTS } from "../data/brove-content";

export const ProcessPage: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Parallax reveals for process steps
      gsap.utils.toArray<HTMLElement>(".process-step-row").forEach((row) => {
        const visual = row.querySelector(".process-step-visual");
        const content = row.querySelector(".process-step-content");

        if (visual) {
          gsap.fromTo(
            visual,
            { y: 30, opacity: 0.6 },
            {
              y: -20,
              opacity: 1,
              ease: "none",
              scrollTrigger: {
                trigger: row,
                start: "top 80%",
                end: "bottom 20%",
                scrub: 1,
              },
            }
          );
        }

        if (content) {
          gsap.from(content, {
            scrollTrigger: {
              trigger: row,
              start: "top 75%",
            },
            x: 20,
            opacity: 0,
            duration: 0.8,
            ease: "power2.out",
          });
        }
      });

      // Parallax for DTF and Embroidery feature blocks
      gsap.utils.toArray<HTMLElement>(".method-feature-card").forEach((card, i) => {
        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
          },
          y: 40,
          opacity: 0,
          duration: 0.8,
          delay: i * 0.15,
          ease: "power2.out",
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <SEOHead
        title="OUR PROCESS : From Idea to Delivered Apparel | BROVE"
        description="The complete BROVE workflow: Your Idea, We Design, We Print (DTF Printing & Embroidery), Quality Check, and Tracked Delivery across India via ST Courier."
        path="/process"
      />

      <div ref={containerRef} className="flex flex-col w-full bg-surface-paper pt-20">
        {/* HERO SECTION */}
        <section className="w-full bg-surface-dark text-text-on-dark py-12 md:py-20 border-b-4 border-primary-container relative overflow-hidden">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 flex flex-col gap-8 relative z-10">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 bg-primary-container inline-block"></span>
              <span className="font-mono text-xs uppercase tracking-widest text-primary-container font-bold">
                BROVE WORKFLOW &amp; PRINT METHODS
              </span>
            </div>

            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
              <div className="max-w-3xl space-y-3">
                <h1 className="font-headline text-5xl sm:text-7xl lg:text-8xl uppercase text-text-on-dark tracking-tight leading-none">
                  FROM IDEA <br />
                  <span className="text-primary-container">TO APPAREL.</span>
                </h1>
                <p className="font-body text-base md:text-lg text-surface-container-high max-w-2xl leading-relaxed">
                  How does BROVE turn your concept into wearable apparel? We guide you through five clear stages — intake, design preparation, physical printing &amp; embroidery, piece audit, and all-India tracked delivery.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-2">
                <span className="bg-primary-container text-text-primary px-3 py-1 font-mono text-xs uppercase tracking-wider font-bold">
                  MINIMUM ORDER: 5 PIECES
                </span>
                <span className="bg-surface-dark-secondary text-text-on-dark px-3 py-1 font-mono text-xs uppercase tracking-wider border border-surface-dark-secondary">
                  ST COURIER 3–7 DAYS
                </span>
              </div>
            </div>

            {/* Visual Workshop Line Banner */}
            <div className="relative w-full h-64 md:h-80 rounded overflow-hidden shadow-2xl mt-4 border border-surface-dark-secondary">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCFqNi0ec2WuAZqv2mhll_mzE8TEqZjxTclwVtcitJ_U3dw4cIeyuq9JhYq0fnn8uW2KoJ-0Yz5cOHsySWJW6TyTt2sjxRwmVMM5YmkR43ri64Ecp37uP2ux7d8rdLcw_4psitjNS3yuERX4jt8U_lt6rjcUiwlpqG79Xd8EK_UMAI_Ie15NjBmpwyg9UKXrmnGFMUtYF_19Cm_D8dldSd1u9rphdsyBOnhpo5ifYNTCtCrAM0xe81-"
                alt="BROVE Physical Printing and Apparel Workshop Floor"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface-dark via-surface-dark/40 to-transparent flex items-end p-6 md:p-8">
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between w-full gap-4">
                  <div>
                    <span className="font-mono text-xs uppercase text-primary-container tracking-widest font-bold">
                      FIVE-STAGE FLOW
                    </span>
                    <p className="font-headline text-2xl uppercase text-text-on-dark">
                      01 IDEA → 02 DESIGN → 03 PRINT → 04 QUALITY → 05 DELIVERED
                    </p>
                  </div>
                  <div className="font-mono text-xs uppercase text-surface-container-high bg-surface-dark/80 px-3 py-1.5 rounded">
                    DTF PRINTING + EMBROIDERY SPECIALISTS
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 5-STAGE EDITORIAL WORKFLOW WITH PARALLAX */}
        <section className="py-20 bg-surface-paper">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 space-y-24">
            
            {/* STAGE 01: YOUR IDEA */}
            <div className="process-step-row grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-5 process-step-visual order-2 lg:order-1">
                <div className="relative rounded overflow-hidden border-2 border-text-primary shadow-[6px_6px_0px_#171717] bg-white p-6 sm:p-8 space-y-4">
                  <div className="flex justify-between items-center border-b border-border-neutral pb-3 font-mono text-xs">
                    <span className="font-bold uppercase text-text-primary">ACCEPTED ASSETS</span>
                    <span className="text-primary-container bg-surface-dark px-2 py-0.5 rounded font-bold">STAGE 01</span>
                  </div>
                  <div className="grid grid-cols-2 gap-3 font-mono text-xs">
                    <div className="bg-surface-paper p-3 rounded border border-border-neutral">
                      <span className="font-bold text-text-primary block">LOGO &amp; ARTWORK</span>
                      <span className="text-text-muted text-[11px]">PNG, PDF, AI, PSD, SVG</span>
                    </div>
                    <div className="bg-surface-paper p-3 rounded border border-border-neutral">
                      <span className="font-bold text-text-primary block">SKETCH / REFERENCE</span>
                      <span className="text-text-muted text-[11px]">Phone photo or link</span>
                    </div>
                    <div className="bg-surface-paper p-3 rounded border border-border-neutral">
                      <span className="font-bold text-text-primary block">TEXT &amp; TYPOGRAPHY</span>
                      <span className="text-text-muted text-[11px]">Quotes, event titles, names</span>
                    </div>
                    <div className="bg-surface-paper p-3 rounded border border-border-neutral">
                      <span className="font-bold text-text-primary block">ROUGH CONCEPT</span>
                      <span className="text-text-muted text-[11px]">Tell us what you want</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-7 process-step-content space-y-4 order-1 lg:order-2">
                <div className="flex items-center gap-3">
                  <span className="font-headline text-5xl sm:text-6xl text-primary-container leading-none">01</span>
                  <span className="font-mono text-xs uppercase tracking-widest text-text-muted font-bold">
                    STEP ONE // REQUIREMENT INTAKE
                  </span>
                </div>
                <h2 className="font-headline text-3xl sm:text-5xl uppercase text-text-primary tracking-tight">
                  YOUR IDEA
                </h2>
                <p className="font-body text-base text-text-muted leading-relaxed max-w-xl">
                  Everything begins with your requirement. You do not need finished technical print files to get started. You can share:
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 font-body text-sm text-text-primary pt-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-text-primary shrink-0" />
                    <span>Your brand logo or emblem</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-text-primary shrink-0" />
                    <span>College symposium or fest graphics</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-text-primary shrink-0" />
                    <span>Reference dress photos or design links</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-text-primary shrink-0" />
                    <span>Custom typography or team names</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* STAGE 02: WE DESIGN */}
            <div className="process-step-row grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-7 process-step-content space-y-4">
                <div className="flex items-center gap-3">
                  <span className="font-headline text-5xl sm:text-6xl text-primary-container leading-none">02</span>
                  <span className="font-mono text-xs uppercase tracking-widest text-text-muted font-bold">
                    STEP TWO // PRE-PRESS ADAPTATION
                  </span>
                </div>
                <h2 className="font-headline text-3xl sm:text-5xl uppercase text-text-primary tracking-tight">
                  WE DESIGN
                </h2>
                <p className="font-body text-base text-text-muted leading-relaxed max-w-xl">
                  BROVE prepares your artwork specifically for apparel reproduction. We review placement, scale, color separation, and fabric compatibility.
                </p>
                <div className="bg-white p-5 rounded border border-border-neutral space-y-2 max-w-xl">
                  <p className="font-headline text-lg uppercase text-text-primary">
                    MOCKUP REVIEW &amp; APPROVAL
                  </p>
                  <p className="font-body text-xs text-text-muted leading-relaxed">
                    Before any piece goes to the press or embroidery machine, we calibrate the digital mockup showing the exact placement on your chosen garment silhouette. You confirm the design before production begins.
                  </p>
                </div>
              </div>

              <div className="lg:col-span-5 process-step-visual">
                <div className="relative rounded overflow-hidden border-2 border-text-primary shadow-[6px_6px_0px_#171717] bg-surface-dark text-text-on-dark p-6 sm:p-8 space-y-4">
                  <div className="font-mono text-xs text-primary-container uppercase font-bold flex justify-between">
                    <span>DESIGN ALIGNMENT</span>
                    <span>STAGE 02</span>
                  </div>
                  <div className="space-y-3 font-mono text-xs text-surface-container-high">
                    <div className="p-3 bg-surface-dark-secondary rounded flex justify-between">
                      <span>CHEST PLACEMENT:</span>
                      <span className="text-primary-container font-bold">Centered or Left Breast</span>
                    </div>
                    <div className="p-3 bg-surface-dark-secondary rounded flex justify-between">
                      <span>BACK PLACEMENT:</span>
                      <span className="text-primary-container font-bold">Poster or Upper Back</span>
                    </div>
                    <div className="p-3 bg-surface-dark-secondary rounded flex justify-between">
                      <span>PRINT RESOLUTION:</span>
                      <span className="text-primary-container font-bold">High Fidelity Vector/Raster</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* STAGE 03: WE PRINT (DEEP DIVE: DTF & EMBROIDERY) */}
            <div className="space-y-12">
              <div className="text-center max-w-3xl mx-auto space-y-3">
                <div className="flex items-center justify-center gap-3">
                  <span className="font-headline text-5xl sm:text-6xl text-primary-container leading-none">03</span>
                  <span className="font-mono text-xs uppercase tracking-widest text-text-muted font-bold">
                    STEP THREE // APPAREL DECORATION
                  </span>
                </div>
                <h2 className="font-headline text-4xl sm:text-6xl uppercase text-text-primary tracking-tight">
                  WE PRINT
                </h2>
                <p className="font-body text-base sm:text-lg text-text-muted leading-relaxed">
                  Here your apparel meets the physical decoration method. BROVE offers two core decoration methods: DTF PRINTING and EMBROIDERY.
                </p>
              </div>

              {/* DUAL METHOD COMPARISON CARDS */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                
                {/* METHOD 01: DTF PRINTING */}
                <div className="method-feature-card bg-white border-2 border-text-primary rounded p-6 sm:p-8 flex flex-col justify-between shadow-[6px_6px_0px_#171717] space-y-6">
                  <div className="space-y-6">
                    <div className="flex items-center justify-between border-b border-border-neutral pb-4">
                      <div>
                        <span className="font-mono text-xs uppercase text-text-muted font-bold block mb-1">
                          PRINTING METHOD 01
                        </span>
                        <h3 className="font-headline text-3xl sm:text-4xl uppercase text-text-primary">
                          DTF PRINTING
                        </h3>
                      </div>
                      <span className="bg-primary-container text-text-primary font-mono text-xs uppercase px-2.5 py-1 rounded font-bold">
                        DIRECT-TO-FILM
                      </span>
                    </div>

                    {/* DTF Real Image */}
                    <div className="aspect-[16/9] rounded overflow-hidden bg-surface-paper border border-border-neutral">
                      <img
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuClb2JpAbJVeQLD3cxh2l6dtaytWOYN15FfVUr2RKKRWZewGBd2uMBwGbBs37wwrr23h-EdLnqWmj8AV5I8aZg5D0I4GHByusN_Ek5Zp72DzhwqMizWj-L712nkXxUgIaexxp2OIWFLHLN6S-MV18oAgpo7snktiq62NeT5aWImlJchksnBvIvbGNUQV0zOGnUQHpKvCqS-8hNO_fER2X8fURl1NBjIaxFHOVKktfGlG1sondeNXhAx"
                        alt="DTF Printing on Cotton Apparel"
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <div className="space-y-2">
                      <p className="font-headline text-xl uppercase text-text-primary">
                        VIBRANT. DETAILED. CUSTOM.
                      </p>
                      <p className="font-body text-sm text-text-muted leading-relaxed">
                        Direct-to-Film printing transfers your artwork directly into the apparel fabric with rich color density, clean detail, and custom illustration capability.
                      </p>
                    </div>

                    <div className="space-y-2 pt-2 border-t border-border-neutral">
                      <span className="font-mono text-xs uppercase text-text-primary font-bold block">
                        IDEAL APPAREL &amp; USE:
                      </span>
                      <ul className="space-y-1.5 font-body text-xs text-text-primary">
                        <li className="flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-text-primary shrink-0" />
                          <span>Detailed, colorful, and expressive artwork</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-text-primary shrink-0" />
                          <span>Regular Fit T-Shirts, Oversized, and Acid Wash T-Shirts</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-text-primary shrink-0" />
                          <span>Large back poster graphics and multi-color blends</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-text-primary shrink-0" />
                          <span>College fest merchandise and group team orders</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <Link
                    to="/custom-order"
                    className="w-full inline-flex items-center justify-center gap-2 bg-primary-container text-text-primary py-3 px-4 font-mono text-xs uppercase tracking-wider font-bold shadow-[2px_2px_0px_#171717] hover:bg-white transition-all border border-text-primary"
                  >
                    <span>ORDER WITH DTF PRINTING →</span>
                  </Link>
                </div>

                {/* METHOD 02: EMBROIDERY */}
                <div className="method-feature-card bg-surface-dark text-text-on-dark border-4 border-primary-container rounded p-6 sm:p-8 flex flex-col justify-between shadow-[6px_6px_0px_#171717] space-y-6">
                  <div className="space-y-6">
                    <div className="flex items-center justify-between border-b border-surface-dark-secondary pb-4">
                      <div>
                        <span className="font-mono text-xs uppercase text-primary-container font-bold block mb-1">
                          PRINTING METHOD 02
                        </span>
                        <h3 className="font-headline text-3xl sm:text-4xl uppercase text-text-on-dark">
                          EMBROIDERY
                        </h3>
                      </div>
                      <span className="bg-surface-dark-secondary text-primary-container font-mono text-xs uppercase px-2.5 py-1 rounded font-bold border border-surface-dark-secondary">
                        TACTILE THREAD WORK
                      </span>
                    </div>

                    {/* Embroidery Real Image */}
                    <div className="aspect-[16/9] rounded overflow-hidden bg-surface-dark border border-surface-dark-secondary">
                      <img
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuCdA8u9304BtSHZgjL7cEv_v1DmNRaIz3olubkRdcdX-lTQGqAHMVtbkjxz7Q8KxxVQ14fMuCrWNQvj2TXClrJww_hPVAUr8pNJAvrz4G4UONjc6UprqzNz_Fqn-csB9ZxqZLam1aaX9cWgYX_0dKwbtBTQLX6_yAb1IEaEeOOgruhF2FvtTkTnLPikEKO7jAVc8UE_GKpTav1a9qChvs6AcX8L69CuCkpjCAqJdHoISLmHnRZzQfBu"
                        alt="High Density Embroidery Machine on Apparel"
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <div className="space-y-2">
                      <p className="font-headline text-xl uppercase text-primary-container">
                        TEXTURE YOU CAN FEEL.
                      </p>
                      <p className="font-body text-sm text-surface-container-high leading-relaxed">
                        Precision thread embroidery provides a tactile, three-dimensional finish ideal for chest logos, crests, and branding with lasting durability.
                      </p>
                    </div>

                    <div className="space-y-2 pt-2 border-t border-surface-dark-secondary">
                      <span className="font-mono text-xs uppercase text-primary-container font-bold block">
                        IDEAL APPAREL &amp; USE:
                      </span>
                      <ul className="space-y-1.5 font-body text-xs text-surface-container-high">
                        <li className="flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-primary-container shrink-0" />
                          <span>Logos, names, branding, and premium minimal designs</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-primary-container shrink-0" />
                          <span>Polo T-Shirts, Hoodies, Sweatshirts, and Uniform Shirts</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-primary-container shrink-0" />
                          <span>Chest crests, sleeve emblems, and monogram initials</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-primary-container shrink-0" />
                          <span>Corporate uniforms and company apparel</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <Link
                    to="/custom-order"
                    className="w-full inline-flex items-center justify-center gap-2 bg-primary-container text-text-primary py-3 px-4 font-mono text-xs uppercase tracking-wider font-bold shadow-[2px_2px_0px_#ffffff] hover:bg-white transition-all"
                  >
                    <span>ORDER WITH EMBROIDERY →</span>
                  </Link>
                </div>

              </div>
            </div>

            {/* STAGE 04: QUALITY CHECK */}
            <div className="process-step-row grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-5 process-step-visual order-2 lg:order-1">
                <div className="relative rounded overflow-hidden border-2 border-text-primary shadow-[6px_6px_0px_#171717] bg-white p-6 sm:p-8 space-y-4">
                  <div className="flex justify-between items-center border-b border-border-neutral pb-3 font-mono text-xs font-bold uppercase">
                    <span>QUALITY AUDIT CHECKLIST</span>
                    <span className="text-primary-container bg-surface-dark px-2 py-0.5 rounded">STAGE 04</span>
                  </div>
                  <div className="space-y-2.5 font-mono text-xs">
                    <div className="flex items-center gap-2 text-text-primary">
                      <CheckCircle2 className="w-4 h-4 text-primary-container fill-primary-container stroke-text-primary" />
                      <span>Print adhesion and curing verification</span>
                    </div>
                    <div className="flex items-center gap-2 text-text-primary">
                      <CheckCircle2 className="w-4 h-4 text-primary-container fill-primary-container stroke-text-primary" />
                      <span>Stitch tension and trim check</span>
                    </div>
                    <div className="flex items-center gap-2 text-text-primary">
                      <CheckCircle2 className="w-4 h-4 text-primary-container fill-primary-container stroke-text-primary" />
                      <span>Color alignment against approved proof</span>
                    </div>
                    <div className="flex items-center gap-2 text-text-primary">
                      <CheckCircle2 className="w-4 h-4 text-primary-container fill-primary-container stroke-text-primary" />
                      <span>Garment size sorting and count accuracy</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-7 process-step-content space-y-4 order-1 lg:order-2">
                <div className="flex items-center gap-3">
                  <span className="font-headline text-5xl sm:text-6xl text-primary-container leading-none">04</span>
                  <span className="font-mono text-xs uppercase tracking-widest text-text-muted font-bold">
                    STEP FOUR // PHYSICAL AUDIT
                  </span>
                </div>
                <h2 className="font-headline text-3xl sm:text-5xl uppercase text-text-primary tracking-tight">
                  QUALITY CHECK
                </h2>
                <p className="font-body text-base text-text-muted leading-relaxed max-w-xl">
                  Every single piece gets checked before it leaves the workshop. We pay close attention to the print alignment, edge sharpness, embroidery backing, and size distribution.
                </p>
                <div className="bg-surface-paper p-4 rounded border border-border-neutral font-mono text-xs text-text-primary max-w-xl">
                  <strong>ZERO BLIND SHIPMENTS:</strong> We count, inspect, fold, and pack your order piece by piece so your event or team receives exactly what was requested.
                </div>
              </div>
            </div>

            {/* STAGE 05: DELIVERED */}
            <div className="process-step-row grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-7 process-step-content space-y-4">
                <div className="flex items-center gap-3">
                  <span className="font-headline text-5xl sm:text-6xl text-primary-container leading-none">05</span>
                  <span className="font-mono text-xs uppercase tracking-widest text-text-muted font-bold">
                    STEP FIVE // LOGISTICS &amp; DISPATCH
                  </span>
                </div>
                <h2 className="font-headline text-3xl sm:text-5xl uppercase text-text-primary tracking-tight">
                  DELIVERED
                </h2>
                <p className="font-body text-base text-text-muted leading-relaxed max-w-xl">
                  Packed and sent your way. Once audited, orders are carefully packed in protective parcels and dispatched to colleges, companies, and individuals across India.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 font-mono text-xs pt-2 max-w-xl">
                  <div className="bg-white p-3.5 rounded border border-border-neutral">
                    <span className="text-text-muted uppercase text-[10px] block">COURIER PARTNER</span>
                    <span className="font-bold text-text-primary text-sm">ST COURIER</span>
                  </div>
                  <div className="bg-white p-3.5 rounded border border-border-neutral">
                    <span className="text-text-muted uppercase text-[10px] block">TRANSIT TIME</span>
                    <span className="font-bold text-text-primary text-sm">3–7 DAYS</span>
                  </div>
                  <div className="bg-white p-3.5 rounded border border-border-neutral">
                    <span className="text-text-muted uppercase text-[10px] block">COVERAGE</span>
                    <span className="font-bold text-text-primary text-sm">ALL OVER INDIA</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 process-step-visual">
                <div className="relative rounded overflow-hidden border-2 border-text-primary shadow-[6px_6px_0px_#171717] bg-surface-dark text-text-on-dark p-6 sm:p-8 space-y-4">
                  <div className="flex justify-between items-center border-b border-surface-dark-secondary pb-3 font-mono text-xs">
                    <span className="text-primary-container font-bold uppercase">PAN-INDIA DISPATCH</span>
                    <span className="bg-surface-dark-secondary px-2 py-0.5 rounded">STAGE 05</span>
                  </div>
                  <p className="font-body text-sm text-surface-container-high leading-relaxed">
                    Tracked consignment dispatch direct to your doorstep, college campus, or office location anywhere in India.
                  </p>
                  <div className="p-3 bg-surface-dark-secondary rounded text-primary-container font-mono text-xs font-bold flex items-center gap-2">
                    <Sparkles className="w-4 h-4 shrink-0" />
                    <span>READY FOR YOUR EVENT OR TEAM LAUNCH</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* HUMAN PRINT CONSULTATION & CTA BANNER */}
        <section className="w-full bg-surface-dark text-text-on-dark py-16 border-t-2 border-surface-dark-secondary">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 space-y-10">
            <div className="bg-primary-container text-text-primary p-8 sm:p-12 rounded flex flex-col lg:flex-row items-center justify-between gap-8 shadow-[6px_6px_0px_#171717]">
              <div className="space-y-2 text-center lg:text-left">
                <span className="font-mono text-xs uppercase tracking-widest font-bold">
                  READY TO START YOUR APPAREL RUN?
                </span>
                <h3 className="font-headline text-3xl sm:text-5xl uppercase leading-tight">
                  TELL US WHAT YOU NEED.
                </h3>
                <p className="font-body text-sm max-w-xl">
                  Choose your apparel canvas, specify quantities (min. 5 pieces), select DTF or embroidery, and submit your requirement.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3 shrink-0">
                <Link
                  to="/custom-order"
                  className="inline-flex items-center gap-2 bg-surface-dark text-text-on-dark px-8 py-4 rounded font-mono text-sm uppercase tracking-wider font-bold hover:bg-surface-dark-secondary active:scale-95 transition-all shadow-[2px_2px_0px_#ffffff]"
                >
                  <span>START YOUR ORDER →</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href={`https://wa.me/91${BUSINESS_FACTS.contact.whatsapp}?text=Hello%20BROVE,%20I%20have%20an%20enquiry%20about%20your%20printing%20process.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-white text-text-primary px-6 py-4 rounded font-mono text-sm uppercase tracking-wider font-bold hover:bg-surface-paper transition-all border border-text-primary"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>TALK ON WHATSAPP</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
