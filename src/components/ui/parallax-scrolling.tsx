import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, ShieldCheck, Truck } from "lucide-react";
import { BUSINESS_FACTS } from "../../data/brove-content";

export function ParallaxHero() {
  const parallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Disable heavy parallax if reduced motion preferred
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    gsap.registerPlugin(ScrollTrigger);
    const triggerElement = parallaxRef.current?.querySelector("[data-parallax-layers]");

    if (triggerElement) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: triggerElement,
          start: "0% 0%",
          end: "100% 0%",
          scrub: 0.5,
        },
      });

      const layers = [
        { layer: "1", yPercent: 40 },
        { layer: "2", yPercent: 25 },
        { layer: "3", yPercent: 15 },
        { layer: "4", yPercent: 5 },
      ];

      layers.forEach((layerObj, idx) => {
        const target = triggerElement.querySelectorAll(`[data-parallax-layer="${layerObj.layer}"]`);
        if (target.length > 0) {
          tl.to(
            target,
            {
              yPercent: layerObj.yPercent,
              ease: "none",
            },
            idx === 0 ? undefined : "<"
          );
        }
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  return (
    <section className="relative overflow-hidden bg-brove-paper border-b-2 border-brove-charcoal pt-8 pb-16 lg:py-24" ref={parallaxRef}>
      {/* Background Graphic Texture Layer */}
      <div className="absolute inset-0 opacity-15 pointer-events-none bg-[radial-gradient(#171717_1px,transparent_1px)] [background-size:24px_24px]" />

      <div data-parallax-layers className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text / Copy Column */}
          <div data-parallax-layer="3" className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 bg-brove-yellow text-brove-charcoal px-3 py-1 text-xs font-mono font-bold tracking-widest border border-brove-charcoal shadow-[2px_2px_0px_0px_rgba(23,23,23,1)]">
              <span>T-SHIRT PRINTING COMPANY</span>
            </div>

            <h1 className="font-display text-6xl sm:text-7xl lg:text-8xl font-bold tracking-tight text-brove-charcoal leading-[0.9]">
              WE PRINT <br />
              <span className="bg-brove-yellow px-2 py-1 inline-block transform -rotate-1 border-2 border-brove-charcoal shadow-[4px_4px_0px_0px_rgba(23,23,23,1)]">
                YOUR IDENTITY.
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-brove-ink font-sans max-w-2xl leading-relaxed">
              {BUSINESS_FACTS.heroSubtext}
            </p>

            {/* Quick Proof Badges */}
            <div className="flex flex-wrap gap-4 pt-2 font-mono text-xs text-brove-charcoal">
              <div className="flex items-center gap-1.5 bg-white px-3 py-1.5 border border-brove-border font-bold">
                <ShieldCheck className="w-4 h-4 text-brove-yellow" />
                <span>{BUSINESS_FACTS.moqText}</span>
              </div>
              <div className="flex items-center gap-1.5 bg-white px-3 py-1.5 border border-brove-border font-bold">
                <Truck className="w-4 h-4 text-brove-yellow" />
                <span>ST COURIER • 3–7 DAYS ALL INDIA</span>
              </div>
            </div>

            {/* Hero CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <Link
                to="/wardrobe"
                className="inline-flex items-center gap-3 bg-brove-yellow text-brove-charcoal px-8 py-4 font-display text-2xl tracking-wider border-2 border-brove-charcoal hover:bg-brove-highlight transition-all active:scale-95 shadow-[4px_4px_0px_0px_rgba(23,23,23,1)]"
              >
                <span>EXPLORE WARDROBE</span>
                <ArrowRight className="w-6 h-6" />
              </Link>
              
              <Link
                to="/custom-order"
                className="inline-flex items-center gap-2 bg-brove-charcoal text-brove-paper px-6 py-4 font-display text-xl tracking-wider border-2 border-brove-charcoal hover:bg-brove-graphite transition-all shadow-[4px_4px_0px_0px_rgba(242,212,0,1)]"
              >
                <span>CUSTOM QUOTE</span>
              </Link>
            </div>
          </div>

          {/* Right Visual Parallax Composition Layer */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Layer 1: Workshop Backplate */}
              <div
                data-parallax-layer="1"
                className="w-full aspect-[4/5] bg-brove-graphite border-4 border-brove-charcoal p-6 flex flex-col justify-between shadow-[8px_8px_0px_0px_rgba(23,23,23,1)] relative overflow-hidden"
              >
                <div className="font-mono text-xs text-brove-yellow tracking-widest flex justify-between">
                  <span>BROVE STUDIO CANVAS</span>
                  <span>DTF / EMBROIDERY</span>
                </div>

                {/* Layer 2: Featured Apparel Vector Mockup */}
                <div data-parallax-layer="2" className="relative z-10 my-auto py-4">
                  <img
                    src="/assets/products/oversized-tshirt.svg"
                    alt="BROVE Oversized Custom Printed Apparel Canvas"
                    loading="eager"
                    width="600"
                    height="600"
                    className="w-full h-auto object-contain max-h-[380px] drop-shadow-2xl transition-transform hover:scale-105"
                  />
                </div>

                {/* Layer 4: Tag & Spec Sticker Overlay */}
                <div data-parallax-layer="4" className="bg-brove-yellow text-brove-charcoal p-4 border-2 border-brove-charcoal font-mono text-xs flex justify-between items-center shadow-[4px_4px_0px_0px_rgba(23,23,23,1)]">
                  <div>
                    <span className="block font-bold">OVERSIZED CANVAS</span>
                    <span className="text-[10px]">DTF & EMBROIDERY READY</span>
                  </div>
                  <div className="font-display text-2xl font-bold">₹450</div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
