import React from "react";
import { Link } from "react-router-dom";
import { SEOHead } from "../components/layout/SEOHead";
import { ShieldCheck, Sparkles, Layers, Heart } from "lucide-react";
import { WorkshopTicker } from "../components/layout/WorkshopTicker";

export const WhyBrovePage: React.FC = () => {
  const pillars = [
    {
      title: "PREMIUM DTF",
      description: "Vibrant colors and detailed graphics that bring your designs to life on premium cotton.",
      icon: <Layers className="w-6 h-6 text-primary-container" />,
    },
    {
      title: "PRECISION EMBROIDERY",
      description: "A tactile, premium finish for logos, names, uniforms, polos, hoodies, and club apparel.",
      icon: <Sparkles className="w-6 h-6 text-primary-container" />,
    },
    {
      title: "LOW MOQ (JUST 5 PIECES)",
      description: "You don't need hundreds of pieces to create something custom. Start with five.",
      icon: <ShieldCheck className="w-6 h-6 text-primary-container" />,
    },
    {
      title: "PHYSICAL QUALITY FIRST",
      description: "We care about the fabric weight, dense ink curing, placement, finishing, and the final piece you wear.",
      icon: <Heart className="w-6 h-6 text-primary-container" />,
    },
  ];

  return (
    <>
      <SEOHead
        title="WHY BROVE? : Custom Apparel Made Personal | BROVE"
        description="Discover why colleges, companies, teams, and individuals choose BROVE for custom apparel printing in DTF and embroidery with a low minimum order of 5 pieces."
        path="/why-brove"
      />

      <div className="w-full bg-surface-paper dark:bg-surface-dark text-text-primary dark:text-text-on-dark pt-20 transition-colors duration-200">
        
        {/* Header Hero */}
        <section className="w-full bg-surface-dark text-text-on-dark py-12 md:py-16 border-b-4 border-primary-container relative overflow-hidden">
          <div className="max-w-[1400px] mx-auto px-margin-mobile lg:px-margin space-y-4 relative z-10">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 bg-primary-container inline-block"></span>
              <span className="font-mono text-xs uppercase tracking-widest text-primary-container font-bold">
                BRAND PHILOSOPHY &amp; CRAFTSMANSHIP
              </span>
            </div>

            <div className="max-w-3xl space-y-2">
              <h1 className="font-headline text-5xl sm:text-7xl lg:text-8xl uppercase tracking-tight text-text-on-dark leading-none">
                WHY BROVE?
              </h1>
              <p className="font-headline text-2xl sm:text-3xl text-primary-container uppercase tracking-wide">
                CUSTOM APPAREL MADE PERSONAL.
              </p>
              <p className="font-body text-base text-surface-container-highest max-w-2xl leading-relaxed">
                Because custom clothing should feel like your identity. From a single creative idea to team wear for colleges and businesses, we turn concepts into tactile garments that speak your style.
              </p>
            </div>
          </div>
        </section>

        <WorkshopTicker />

        <div className="max-w-[1200px] mx-auto px-margin-mobile lg:px-margin py-12 sm:py-16 space-y-16">
          {/* Pillars Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {pillars.map((pillar) => (
              <div
                key={pillar.title}
                className="bg-surface-white dark:bg-surface-dark-secondary border-2 border-text-primary dark:border-surface-dark-secondary p-8 rounded-lg space-y-4 shadow-[6px_6px_0px_#171717] dark:shadow-[6px_6px_0px_#F2D400]"
              >
                <div className="w-12 h-12 bg-surface-dark rounded flex items-center justify-center border border-surface-dark-secondary">
                  {pillar.icon}
                </div>
                <h2 className="font-headline text-2xl sm:text-3xl uppercase tracking-tight text-text-primary dark:text-text-on-dark">
                  {pillar.title}
                </h2>
                <p className="text-sm font-body text-text-muted leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>

          {/* Banner CTA */}
          <div className="bg-primary-container text-text-primary border-4 border-text-primary dark:border-surface-dark-secondary p-8 sm:p-12 rounded-lg text-center space-y-6 shadow-[8px_8px_0px_#171717] dark:shadow-[8px_8px_0px_#FFFFFF]">
            <h2 className="font-headline text-4xl sm:text-6xl uppercase tracking-tight">
              MADE FOR EVERYONE.
            </h2>
            <p className="text-base max-w-xl mx-auto font-body leading-relaxed">
              Colleges. Companies. Teams. Events. Businesses. Friends. Individuals. If you have an idea, we make it wearable.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <Link
                to="/custom-order"
                className="inline-flex items-center gap-2 bg-surface-dark text-text-on-dark px-8 py-4 font-headline text-lg uppercase tracking-wider rounded hover:bg-surface-dark-secondary transition-all shadow-[4px_4px_0px_#FFFFFF]"
              >
                <span>SEND YOUR REQUIREMENT →</span>
              </Link>
              <Link
                to="/wardrobe"
                className="inline-flex items-center gap-2 bg-surface-white text-text-primary px-6 py-4 font-headline text-base uppercase tracking-wider rounded border border-text-primary hover:bg-surface-paper transition-all"
              >
                <span>EXPLORE WARDROBE</span>
              </Link>
            </div>
          </div>
        </div>

      </div>
    </>
  );
};
