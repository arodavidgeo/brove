import React from "react";
import { Link } from "react-router-dom";
import { SEOHead } from "../components/layout/SEOHead";
import { BUSINESS_FACTS } from "../data/brove-content";
import { WorkshopTicker } from "../components/layout/WorkshopTicker";
import {
  Sparkles,
  ShieldCheck,
  Tag,
  Smile
} from "lucide-react";

export const AboutPage: React.FC = () => {
  return (
    <>
      <SEOHead
        title="ABOUT BROVE : Custom Apparel & Printing Workshop"
        description="BROVE is a custom apparel and T-shirt printing company focused on creating clothing that represents the people wearing it. Quality, Creativity, Comfort, Affordability."
        path="/about"
      />

      <div className="w-full bg-surface-paper dark:bg-surface-dark text-text-primary dark:text-text-on-dark pt-20 transition-colors duration-200">
        
        {/* Header Hero */}
        <section className="w-full bg-surface-dark text-text-on-dark py-12 md:py-16 border-b-4 border-primary-container relative overflow-hidden">
          <div className="max-w-[1400px] mx-auto px-margin-mobile lg:px-margin space-y-4 relative z-10">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 bg-primary-container inline-block"></span>
                <span className="font-mono text-xs uppercase tracking-widest text-primary-container font-bold">
                  STUDIO ETHOS &amp; WORKSHOP CRAFT
                </span>
              </div>
              <div className="bg-primary-container text-text-primary px-3 py-1 font-mono text-xs uppercase tracking-wider font-bold shadow-sm">
                PHYSICAL PRINTMAKING
              </div>
            </div>

            <div className="max-w-3xl space-y-2">
              <h1 className="font-headline text-5xl sm:text-7xl lg:text-8xl uppercase tracking-tight text-text-on-dark leading-none">
                ABOUT BROVE.
              </h1>
              <p className="font-headline text-2xl sm:text-3xl text-primary-container uppercase tracking-wide">
                WEAR YOUR IDENTITY.
              </p>
              <p className="font-body text-base text-surface-container-highest max-w-2xl leading-relaxed">
                {BUSINESS_FACTS.aboutContent.intro}
              </p>
            </div>
          </div>
        </section>

        <WorkshopTicker />

        <div className="max-w-[1400px] mx-auto px-margin-mobile lg:px-margin py-12 sm:py-16 space-y-16">
          
          {/* Mission & Studio Composition */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <span className="font-mono text-xs uppercase tracking-widest text-text-muted font-bold block">
                ATELIER MANIFESTO
              </span>
              <h2 className="font-headline text-4xl sm:text-6xl uppercase tracking-tight text-text-primary dark:text-text-on-dark leading-tight">
                TURNING CONCEPTS <br />
                <span className="text-primary underline decoration-primary/40 underline-offset-4">
                  INTO WEARABLE ART.
                </span>
              </h2>

              <p className="font-body text-base sm:text-lg text-text-muted leading-relaxed">
                {BUSINESS_FACTS.aboutContent.body}
              </p>

              <div className="p-5 rounded bg-surface-white dark:bg-surface-dark-secondary border-2 border-text-primary dark:border-surface-dark-secondary shadow-[4px_4px_0px_#171717] dark:shadow-[4px_4px_0px_#F2D400] space-y-2">
                <span className="font-mono text-xs uppercase font-bold text-primary-container bg-surface-dark px-2 py-0.5 rounded">
                  OUR COMBINED CRAFT:
                </span>
                <p className="font-body text-sm text-text-muted leading-relaxed">
                  We combine <strong>quality apparel</strong>, <strong>custom printing</strong>, <strong>precision embroidery</strong>, and <strong>careful finishing</strong> to build garments that carry identity, durability, and character.
                </p>
              </div>

              <div className="pt-2 flex items-center gap-4">
                <Link
                  to="/wardrobe"
                  className="px-6 py-3 bg-primary-container text-text-primary font-headline text-sm uppercase tracking-wider rounded hover:bg-primary-fixed active:scale-95 transition-all shadow-[2px_2px_0px_#171717]"
                >
                  EXPLORE WARDROBE →
                </Link>
                <Link
                  to="/contact"
                  className="px-5 py-3 bg-surface-dark text-text-on-dark font-mono text-xs uppercase tracking-wider rounded hover:bg-surface-dark-secondary transition-colors"
                >
                  TALK TO THE WORKSHOP
                </Link>
              </div>
            </div>

            {/* Visual Real Apparel Collage */}
            <div className="lg:col-span-5 relative">
              <div className="bg-surface-white dark:bg-surface-dark-secondary border-2 border-text-primary dark:border-surface-dark-secondary p-4 rounded-lg shadow-[8px_8px_0px_#171717] dark:shadow-[8px_8px_0px_#F2D400] space-y-3">
                <div className="aspect-[4/5] rounded overflow-hidden bg-black flex items-center justify-center">
                  <img
                    src="/reference-dress/WhatsApp Image 2026-08-22 at 10.38.47 PM.jpeg"
                    alt="Real BROVE Mineral Acid Wash T-Shirt Sample"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex items-center justify-between text-xs font-mono text-text-muted">
                  <span className="font-bold text-text-primary dark:text-text-on-dark uppercase">BROVE ATELIER</span>
                  <span className="text-primary-container bg-surface-dark px-2 py-0.5 rounded font-bold">
                    MINERAL ACID WASH
                  </span>
                </div>
              </div>
            </div>

          </div>

          {/* 4 Pillars Section: QUALITY, CREATIVITY, COMFORT, AFFORDABILITY */}
          <div className="space-y-8">
            <div className="border-b-2 border-text-primary dark:border-surface-dark-secondary pb-4">
              <span className="font-mono text-xs uppercase tracking-widest text-text-muted font-bold block mb-1">
                OUR GUIDING PRINCIPLES
              </span>
              <h2 className="font-headline text-3xl sm:text-5xl uppercase tracking-tight text-text-primary dark:text-text-on-dark">
                THE FOUR BRAND PILLARS
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              
              <div className="bg-surface-white dark:bg-surface-dark-secondary border-2 border-text-primary dark:border-surface-dark-secondary p-6 rounded-lg shadow-[4px_4px_0px_#171717] dark:shadow-[4px_4px_0px_#F2D400] space-y-3">
                <div className="w-10 h-10 rounded bg-primary-container text-text-primary flex items-center justify-center font-bold">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h3 className="font-headline text-2xl uppercase text-text-primary dark:text-text-on-dark">
                  QUALITY
                </h3>
                <p className="font-body text-xs text-text-muted leading-relaxed">
                  We care about the final piece, not just the print. Dense inks, reinforced seams, and tensile fabric resistance.
                </p>
              </div>

              <div className="bg-surface-white dark:bg-surface-dark-secondary border-2 border-text-primary dark:border-surface-dark-secondary p-6 rounded-lg shadow-[4px_4px_0px_#171717] dark:shadow-[4px_4px_0px_#F2D400] space-y-3">
                <div className="w-10 h-10 rounded bg-primary-container text-text-primary flex items-center justify-center font-bold">
                  <Sparkles className="w-5 h-5" />
                </div>
                <h3 className="font-headline text-2xl uppercase text-text-primary dark:text-text-on-dark">
                  CREATIVITY
                </h3>
                <p className="font-body text-xs text-text-muted leading-relaxed">
                  Your apparel should look like yours. We preserve your exact color nuances, typography kerning, and illustration details.
                </p>
              </div>

              <div className="bg-surface-white dark:bg-surface-dark-secondary border-2 border-text-primary dark:border-surface-dark-secondary p-6 rounded-lg shadow-[4px_4px_0px_#171717] dark:shadow-[4px_4px_0px_#F2D400] space-y-3">
                <div className="w-10 h-10 rounded bg-primary-container text-text-primary flex items-center justify-center font-bold">
                  <Smile className="w-5 h-5" />
                </div>
                <h3 className="font-headline text-2xl uppercase text-text-primary dark:text-text-on-dark">
                  COMFORT
                </h3>
                <p className="font-body text-xs text-text-muted leading-relaxed">
                  Good design starts with good clothing. 100% bio-washed combed cotton that feels soft against the skin all day.
                </p>
              </div>

              <div className="bg-surface-white dark:bg-surface-dark-secondary border-2 border-text-primary dark:border-surface-dark-secondary p-6 rounded-lg shadow-[4px_4px_0px_#171717] dark:shadow-[4px_4px_0px_#F2D400] space-y-3">
                <div className="w-10 h-10 rounded bg-primary-container text-text-primary flex items-center justify-center font-bold">
                  <Tag className="w-5 h-5" />
                </div>
                <h3 className="font-headline text-2xl uppercase text-text-primary dark:text-text-on-dark">
                  AFFORDABILITY
                </h3>
                <p className="font-body text-xs text-text-muted leading-relaxed">
                  Premium doesn't have to mean impossible. Honest direct pricing from ₹350 with accessible 5-piece minimums.
                </p>
              </div>

            </div>
          </div>

          {/* Bottom CTA */}
          <div className="bg-surface-dark text-text-on-dark p-8 rounded-lg border-2 border-primary-container flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-1 text-center md:text-left">
              <h3 className="font-headline text-3xl uppercase">
                READY TO WEAR YOUR IDENTITY?
              </h3>
              <p className="font-body text-xs text-surface-container-highest">
                Tell us about your team, event, brand, or personal idea.
              </p>
            </div>
            <Link
              to="/custom-order"
              className="px-6 py-3.5 bg-primary-container text-text-primary font-headline text-sm uppercase tracking-wider rounded hover:bg-primary-fixed active:scale-95 transition-all shadow-[2px_2px_0px_#FFFFFF] shrink-0"
            >
              SEND YOUR REQUIREMENT →
            </Link>
          </div>

        </div>

      </div>
    </>
  );
};
