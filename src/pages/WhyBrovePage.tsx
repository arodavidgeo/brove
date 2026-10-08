import React from "react";
import { Link } from "react-router-dom";
import { SEOHead } from "../components/layout/SEOHead";
import { ShieldCheck, Sparkles, Layers, Heart, ArrowRight } from "lucide-react";

export const WhyBrovePage: React.FC = () => {
  const pillars = [
    {
      title: "PREMIUM DTF",
      description: "Vibrant colors and detailed graphics that bring your designs to life.",
      icon: <Layers className="w-8 h-8 text-brove-yellow" />,
    },
    {
      title: "PRECISION EMBROIDERY",
      description: "A tactile, premium finish for logos, names, uniforms, polos, hoodies, and more.",
      icon: <Sparkles className="w-8 h-8 text-brove-yellow" />,
    },
    {
      title: "LOW MOQ (MIN 5 PIECES)",
      description: "You don't need hundreds of pieces to create something custom. Start with five.",
      icon: <ShieldCheck className="w-8 h-8 text-brove-yellow" />,
    },
    {
      title: "QUALITY FIRST",
      description: "We care about the fabric, print, placement, finishing, and the final piece you receive.",
      icon: <Heart className="w-8 h-8 text-brove-yellow" />,
    },
  ];

  return (
    <>
      <SEOHead
        title="WHY BROVE? : Custom Apparel Made Personal"
        description="Discover why colleges, companies, teams, and individuals choose BROVE for custom apparel printing in DTF and embroidery with a low minimum order of 5 pieces."
        path="/why-brove"
      />

      <section className="py-16 bg-brove-paper border-b-2 border-brove-charcoal">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-block bg-brove-yellow text-brove-charcoal px-3 py-1 font-mono text-xs font-bold border border-brove-charcoal">
              BRAND PHILOSOPHY
            </div>
            <h1 className="font-display text-5xl sm:text-7xl font-bold text-brove-charcoal tracking-tight">
              WHY BROVE?
            </h1>
            <p className="text-brove-ink text-base sm:text-lg font-sans">
              Because custom apparel should feel personal. From a single concept to team wear for colleges and businesses, we turn ideas into clothing that speaks your style.
            </p>
          </div>

          {/* Pillars Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {pillars.map((pillar) => (
              <div
                key={pillar.title}
                className="bg-white border-2 border-brove-charcoal p-8 space-y-4 shadow-[6px_6px_0px_0px_rgba(23,23,23,1)]"
              >
                <div className="w-14 h-14 bg-brove-charcoal flex items-center justify-center border border-brove-yellow">
                  {pillar.icon}
                </div>
                <h2 className="font-display text-3xl font-bold text-brove-charcoal">
                  {pillar.title}
                </h2>
                <p className="text-sm font-sans text-brove-ink leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>

          {/* Banner CTA */}
          <div className="bg-brove-yellow text-brove-charcoal border-4 border-brove-charcoal p-8 sm:p-12 text-center space-y-6 shadow-[8px_8px_0px_0px_rgba(23,23,23,1)]">
            <h2 className="font-display text-4xl sm:text-6xl font-bold uppercase">
              MADE FOR EVERYONE.
            </h2>
            <p className="text-base max-w-xl mx-auto font-sans">
              Colleges. Companies. Teams. Events. Businesses. Friends. Individuals. If you have an idea, we can print it.
            </p>
            <div>
              <Link
                to="/wardrobe"
                className="inline-flex items-center gap-3 bg-brove-charcoal text-brove-paper px-8 py-4 font-display text-2xl tracking-wider border-2 border-brove-charcoal hover:bg-brove-graphite transition-all shadow-[4px_4px_0px_0px_rgba(242,212,0,1)]"
              >
                <span>EXPLORE WARDROBE</span>
                <ArrowRight className="w-6 h-6 text-brove-yellow" />
              </Link>
            </div>
          </div>

        </div>
      </section>
    </>
  );
};
