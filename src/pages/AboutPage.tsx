import React from "react";
import { Link } from "react-router-dom";
import { SEOHead } from "../components/layout/SEOHead";

export const AboutPage: React.FC = () => {
  return (
    <>
      <SEOHead
        title="ABOUT OUR WORKSHOP : Wear Your Identity | BROVE"
        description="BROVE is a custom apparel and printing workshop built around turning ideas, crews, and identities into tactile, wearable garments."
        path="/about"
      />

      <div className="w-full bg-surface min-h-screen pt-20">
        {/* 1. Editorial Hero Section (Deep Charcoal & Workshop Imagery) */}
        <section className="w-full bg-surface-dark text-text-on-dark relative overflow-hidden">
          <div className="max-w-[1400px] mx-auto px-margin-mobile lg:px-margin pt-space-xl pb-space-xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg lg:gap-gutter items-center">
              
              {/* Left Content Column */}
              <div className="lg:col-span-7 space-y-space-md z-10">
                <div className="inline-flex items-center gap-space-xs bg-surface-dark-secondary px-space-sm py-1 rounded border border-surface-dark-secondary">
                  <span className="w-2 h-2 rounded-full bg-primary-container"></span>
                  <span className="font-mono text-xs uppercase tracking-widest text-primary-container font-bold">
                    OUR WORKSHOP & VALUES
                  </span>
                </div>
                <h1 className="font-headline text-5xl sm:text-7xl lg:text-8xl uppercase leading-none tracking-tight text-text-on-dark">
                  WEAR YOUR <span className="text-primary-container">IDENTITY.</span>
                </h1>
                <p className="text-base sm:text-lg text-surface-paper max-w-xl font-normal leading-relaxed">
                  BROVE is an apparel printing workshop built around turning ideas, crews, and identities into tactile, wearable garments.
                </p>
                <div className="pt-space-sm flex flex-wrap items-center gap-space-md font-mono text-xs uppercase tracking-wider text-text-muted">
                  <span className="flex items-center gap-1.5 text-text-on-dark">
                    <span className="material-symbols-outlined text-[16px] text-primary-container">layers</span> 240+ GSM STREETWEAR CUTS
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1.5 text-text-on-dark">
                    <span className="material-symbols-outlined text-[16px] text-primary-container">straighten</span> MINIMUM ORDER: 5 PCS
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1.5 text-text-on-dark">
                    <span className="material-symbols-outlined text-[16px] text-primary-container">local_shipping</span> ALL-INDIA DISPATCH
                  </span>
                </div>
              </div>

              {/* Right Workshop Banner Card */}
              <div className="lg:col-span-5 relative">
                <div className="relative bg-surface-dark-secondary p-space-xs rounded shadow-[4px_4px_0px_#f2d400] border border-surface-dark-secondary">
                  <div className="relative h-[340px] sm:h-[420px] w-full overflow-hidden rounded bg-surface-dark">
                    <img
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuBlcTTpuSkltTcAekHFEU96HLW7K4jQsqbG5B5xJ5EOsDeICi-X_eBmf-jto53IBh0vb2rMdFTzX3ol5d6NzvrMO1T3-HxyPkw53A5iXz-dbmdPRxJLRRuEv8zwPBDpFcQTBtqzPlvst-Cr5d3-RqOd3PUioRHvxkMO3nj-CFZCEAOg4gCZVIQnBZz6EnJgWZNza3PD7YFoX8qHlz_kcJo6sx0-xwc5YNTvnafW8LpgxWnXEGqay4K-"
                      alt="Screen printing carousel and industrial workshop"
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-surface-dark via-transparent to-transparent opacity-80"></div>
                    <div className="absolute bottom-space-md left-space-md right-space-md flex items-end justify-between">
                      <div>
                        <p className="font-mono text-xs uppercase tracking-widest text-primary-container font-bold">DIRECT ATELIER</p>
                        <p className="font-headline text-xl uppercase text-text-on-dark">CRAFTED UNDER INK & PRESSURE</p>
                      </div>
                      <span className="px-space-xs py-0.5 bg-surface-dark text-text-on-dark font-mono text-xs rounded uppercase tracking-wider">
                        SEC.28 // BROVE
                      </span>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* 2. WHO WE ARE (Tactile Editorial Paper Section) */}
        <section className="w-full bg-surface-paper py-space-xl text-text-primary border-b border-border-neutral">
          <div className="max-w-[1400px] mx-auto px-margin-mobile lg:px-margin">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg lg:gap-gutter items-start">
              <div className="lg:col-span-4 space-y-space-sm">
                <div className="inline-block bg-surface-container-high px-space-sm py-0.5 rounded font-mono text-xs uppercase tracking-widest text-text-muted font-bold">
                  01 / MANIFESTO
                </div>
                <h2 className="font-headline text-4xl sm:text-5xl uppercase leading-tight text-text-primary">
                  WE DON'T SELL BLANKS.<br />WE BUILD YOUR <span className="bg-primary-container px-1.5 py-0.5">IDENTITY.</span>
                </h2>
                <div className="pt-space-sm">
                  <span className="inline-block font-mono text-xs uppercase tracking-wider text-text-muted font-bold">
                    EST. DIRECT CRAFTSMANSHIP // NO DROP-SHIPPING
                  </span>
                </div>
              </div>

              <div className="lg:col-span-8 space-y-space-md">
                <div className="bg-surface-white p-space-lg rounded shadow-sm space-y-space-md border border-border-neutral">
                  <p className="text-base sm:text-lg text-text-primary leading-relaxed font-normal">
                    BROVE is a custom apparel printing studio founded on physical craftsmanship, honest communication, and accessible batch production. Too many custom printers either demand 100-piece bulk corporate orders or send thin, poorly transferred shirts through uncalibrated drop-shippers.
                  </p>
                  <p className="text-sm text-text-muted leading-relaxed">
                    We bridge that gap by offering genuine premium heavyweight streetwear silhouettes with a democratic, true 5-piece minimum order. Every single yard of fabric, plastisol paste, thermal film print, and embroidery filament is handled inside our workspace with zero synthetic middlemen.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-space-md pt-space-sm">
                    <div className="p-space-md bg-surface-paper rounded space-y-1 border border-border-neutral">
                      <p className="font-headline text-3xl text-text-primary">5 PCS</p>
                      <p className="font-mono text-xs uppercase text-text-muted tracking-wider">Democratic Min Order</p>
                    </div>
                    <div className="p-space-md bg-surface-paper rounded space-y-1 border border-border-neutral">
                      <p className="font-headline text-3xl text-text-primary">240 GSM</p>
                      <p className="font-mono text-xs uppercase text-text-muted tracking-wider">Combed Compact Silhouettes</p>
                    </div>
                    <div className="p-space-md bg-surface-paper rounded space-y-1 border border-border-neutral">
                      <p className="font-headline text-3xl text-text-primary">3-7 DAYS</p>
                      <p className="font-mono text-xs uppercase text-text-muted tracking-wider">ST Courier Doorstep Delivery</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. WHAT WE DO: 4 Architectural Pillars */}
        <section className="w-full bg-surface-container-high py-space-xl text-text-primary">
          <div className="max-w-[1400px] mx-auto px-margin-mobile lg:px-margin space-y-space-lg">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-sm pb-space-sm">
              <div>
                <span className="font-mono text-xs uppercase tracking-widest text-text-muted font-bold">
                  02 / WORKSHOP CAPABILITIES
                </span>
                <h2 className="font-headline text-4xl sm:text-5xl uppercase text-text-primary leading-tight mt-1">
                  WHAT WE DO
                </h2>
              </div>
              <p className="text-sm text-text-muted max-w-md leading-relaxed">
                Four distinct workshop competencies engineered to bring street-credible durability, tactile depth, and graphic accuracy to your identity.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-gutter">
              {/* Pillar 1 */}
              <div className="lg:col-span-7 bg-surface-white p-space-lg rounded shadow-sm flex flex-col justify-between space-y-space-md border border-border-neutral">
                <div className="space-y-space-sm">
                  <div className="flex items-center justify-between">
                    <span className="px-space-xs py-0.5 bg-surface-paper text-text-primary font-mono text-xs rounded uppercase tracking-wider font-bold">
                      PILLAR 01
                    </span>
                    <span className="material-symbols-outlined text-[28px] text-text-primary">checkroom</span>
                  </div>
                  <h3 className="font-headline text-2xl uppercase text-text-primary">Silhouettes & Fabrics</h3>
                  <p className="text-xs text-text-muted leading-relaxed">
                    Heavyweight 240 GSM combed cottons, boxy drop-shoulder streetwear cuts, 380 GSM brushed fleece hoodies, and acid-wash mineral treatments designed to drape properly.
                  </p>
                </div>
                <div className="pt-space-sm flex flex-wrap gap-2 font-mono text-xs">
                  <span className="bg-surface-paper px-space-sm py-1 rounded uppercase tracking-wider text-text-primary border border-border-neutral">
                    240 GSM Terry Loop
                  </span>
                  <span className="bg-surface-paper px-space-sm py-1 rounded uppercase tracking-wider text-text-primary border border-border-neutral">
                    Pre-Shrunk Bio-Wash
                  </span>
                  <span className="bg-surface-paper px-space-sm py-1 rounded uppercase tracking-wider text-text-primary border border-border-neutral">
                    Anti-Roll Rib Collars
                  </span>
                </div>
              </div>

              {/* Pillar 2 */}
              <div className="lg:col-span-5 bg-surface-dark text-text-on-dark p-space-lg rounded shadow-sm flex flex-col justify-between space-y-space-md border border-surface-dark-secondary">
                <div className="space-y-space-sm">
                  <div className="flex items-center justify-between">
                    <span className="px-space-xs py-0.5 bg-surface-dark-secondary text-primary-container font-mono text-xs rounded uppercase tracking-wider font-bold">
                      PILLAR 02
                    </span>
                    <span className="material-symbols-outlined text-[28px] text-primary-container">print</span>
                  </div>
                  <h3 className="font-headline text-2xl uppercase text-text-on-dark">High-Precision DTF Printing</h3>
                  <p className="text-xs text-text-on-dark/80 leading-relaxed">
                    Rich CMYK+White thermal film transfers that reproduce micro-fine lines, vibrant gradients, and full back art without peeling, cracking, or rigid cardboard feel.
                  </p>
                </div>
                <div className="pt-space-sm flex items-center justify-between font-mono text-xs uppercase text-text-muted">
                  <span className="text-primary-container font-bold">50+ WASH RESISTANCE</span>
                  <span>ZERO COLOR RESTRICTIONS</span>
                </div>
              </div>

              {/* Pillar 3 */}
              <div className="lg:col-span-5 bg-surface-white p-space-lg rounded shadow-sm flex flex-col justify-between space-y-space-md border border-border-neutral">
                <div className="space-y-space-sm">
                  <div className="flex items-center justify-between">
                    <span className="px-space-xs py-0.5 bg-surface-paper text-text-primary font-mono text-xs rounded uppercase tracking-wider font-bold">
                      PILLAR 03
                    </span>
                    <span className="material-symbols-outlined text-[28px] text-text-primary">texture</span>
                  </div>
                  <h3 className="font-headline text-2xl uppercase text-text-primary">High-Density Embroidery</h3>
                  <p className="text-xs text-text-muted leading-relaxed">
                    Dimensional thread embroidery calibrated for polos, chest insignias, varsity patches, and fleece garments with guaranteed wash longevity.
                  </p>
                </div>
                <div className="pt-space-sm flex items-center justify-between font-mono text-xs uppercase text-text-muted">
                  <span className="text-text-primary font-bold">HIGH-TENSION EMBROIDERY</span>
                  <span>NO SCRATCH LININGS</span>
                </div>
              </div>

              {/* Pillar 4 */}
              <div className="lg:col-span-7 bg-surface-white p-space-lg rounded shadow-sm flex flex-col justify-between space-y-space-md border border-border-neutral">
                <div className="space-y-space-sm">
                  <div className="flex items-center justify-between">
                    <span className="px-space-xs py-0.5 bg-surface-paper text-text-primary font-mono text-xs rounded uppercase tracking-wider font-bold">
                      PILLAR 04
                    </span>
                    <span className="material-symbols-outlined text-[28px] text-text-primary">local_shipping</span>
                  </div>
                  <h3 className="font-headline text-2xl uppercase text-text-primary">Pan-India Direct Logistics</h3>
                  <p className="text-xs text-text-muted leading-relaxed">
                    Fast air and surface dispatch via ST Courier covering campuses, studios, agencies, and private residences nationwide within 3–7 business days.
                  </p>
                </div>
                <div className="pt-space-sm flex items-center justify-between font-mono text-xs uppercase text-text-muted">
                  <span className="text-text-primary font-bold">ALL INDIA COVERAGE</span>
                  <span>INSURED TRANSIT</span>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="pt-space-lg text-center">
              <Link
                to="/custom-order"
                className="inline-flex items-center justify-center px-space-xl py-space-md rounded bg-primary-container text-text-primary font-headline text-lg uppercase tracking-wider hover:bg-primary-fixed active:scale-95 transition-all shadow-[2px_2px_0px_#171717]"
              >
                START YOUR ORDER →
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
