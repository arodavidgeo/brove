import { useState } from "react";
import { Link } from "react-router-dom";
import NumberFlow from "@number-flow/react";
import { motion } from "motion/react";
import { Check, ArrowRight, ShieldCheck, Sparkles, Layers } from "lucide-react";
import { BUSINESS_FACTS } from "../../data/brove-content";

export function PricingSection() {
  const [selectedQuantityTier, setSelectedQuantityTier] = useState<"standard" | "bulk">("standard");

  // Standard pricing base numbers from BROVE catalog
  const basicPrice = selectedQuantityTier === "standard" ? 350 : 330;
  const premiumPrice = selectedQuantityTier === "standard" ? 450 : 425;

  return (
    <section className="py-20 bg-brove-paper border-b-2 border-brove-charcoal">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-block bg-brove-yellow text-brove-charcoal px-3 py-1 font-mono text-xs font-bold tracking-widest border border-brove-charcoal">
            TRANSPARENT APPAREL PRICING
          </div>
          <h2 className="font-display text-5xl sm:text-6xl font-bold text-brove-charcoal tracking-tight">
            SIMPLE PRICING. CLEAR CHOICES.
          </h2>
          <p className="text-brove-ink text-base sm:text-lg font-sans">
            Every order includes quality apparel, custom DTF printing or embroidery, and careful quality check before delivery.
          </p>
        </div>

        {/* Quantity Switcher */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-white p-1.5 border-2 border-brove-charcoal shadow-[4px_4px_0px_0px_rgba(23,23,23,1)]">
            <button
              onClick={() => setSelectedQuantityTier("standard")}
              className={`px-6 py-2.5 font-display text-lg tracking-wider transition-colors relative ${
                selectedQuantityTier === "standard"
                  ? "bg-brove-yellow text-brove-charcoal border border-brove-charcoal font-bold"
                  : "text-brove-ink hover:text-brove-charcoal"
              }`}
            >
              STANDARD (5–25 PCS)
            </button>
            <button
              onClick={() => setSelectedQuantityTier("bulk")}
              className={`px-6 py-2.5 font-display text-lg tracking-wider transition-colors relative ${
                selectedQuantityTier === "bulk"
                  ? "bg-brove-yellow text-brove-charcoal border border-brove-charcoal font-bold"
                  : "text-brove-ink hover:text-brove-charcoal"
              }`}
            >
              BULK (25+ PCS)
            </button>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Card 1: Basic Apparel */}
          <motion.div
            whileHover={{ y: -4 }}
            className="bg-white border-2 border-brove-charcoal p-8 flex flex-col justify-between shadow-[6px_6px_0px_0px_rgba(23,23,23,1)]"
          >
            <div className="space-y-6">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-display text-3xl font-bold text-brove-charcoal">BASIC APPAREL</h3>
                  <p className="text-xs font-mono text-brove-ink mt-1">Perfect for everyday custom apparel</p>
                </div>
                <div className="bg-brove-paper p-2 border border-brove-border">
                  <Layers className="w-6 h-6 text-brove-charcoal" />
                </div>
              </div>

              <div className="border-y border-brove-border py-4">
                <div className="text-xs font-mono text-brove-ink uppercase">Starting From</div>
                <div className="flex items-baseline gap-1 font-display text-5xl font-bold text-brove-charcoal">
                  <span>₹</span>
                  <NumberFlow value={basicPrice} />
                </div>
                <div className="text-xs font-mono text-brove-ink mt-1">{BUSINESS_FACTS.moqText}</div>
              </div>

              <ul className="space-y-3 text-sm font-sans text-brove-charcoal">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-brove-yellow shrink-0 stroke-[3]" />
                  <span>Regular Fit T-Shirt starting from ₹350</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-brove-yellow shrink-0 stroke-[3]" />
                  <span>Polo T-Shirt starting from ₹360</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-brove-yellow shrink-0 stroke-[3]" />
                  <span>DTF or Embroidery finish</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-brove-yellow shrink-0 stroke-[3]" />
                  <span>ST Courier delivery all India</span>
                </li>
              </ul>
            </div>

            <div className="pt-8">
              <Link
                to="/wardrobe"
                className="w-full inline-flex items-center justify-center gap-2 bg-brove-yellow text-brove-charcoal py-3 px-4 font-display text-xl tracking-wider border-2 border-brove-charcoal hover:bg-brove-highlight transition-all active:scale-95 shadow-[3px_3px_0px_0px_rgba(23,23,23,1)]"
              >
                <span>START ORDER</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>

          {/* Card 2: Custom Premium (Featured) */}
          <motion.div
            whileHover={{ y: -4 }}
            className="bg-brove-charcoal text-brove-paper border-4 border-brove-yellow p-8 flex flex-col justify-between shadow-[8px_8px_0px_0px_rgba(242,212,0,1)] relative"
          >
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brove-yellow text-brove-charcoal px-4 py-1 font-mono text-xs font-bold tracking-widest border border-brove-charcoal">
              MOST POPULAR CHOICE
            </div>

            <div className="space-y-6 pt-2">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-display text-3xl font-bold text-brove-yellow">CUSTOM PREMIUM</h3>
                  <p className="text-xs font-mono text-brove-ink mt-1">For statement pieces & streetwear</p>
                </div>
                <div className="bg-brove-graphite p-2 border border-brove-yellow">
                  <Sparkles className="w-6 h-6 text-brove-yellow" />
                </div>
              </div>

              <div className="border-y border-brove-graphite py-4">
                <div className="text-xs font-mono text-brove-ink uppercase">Starting From</div>
                <div className="flex items-baseline gap-1 font-display text-5xl font-bold text-brove-yellow">
                  <span>₹</span>
                  <NumberFlow value={premiumPrice} />
                </div>
                <div className="text-xs font-mono text-brove-ink mt-1">{BUSINESS_FACTS.moqText}</div>
              </div>

              <ul className="space-y-3 text-sm font-sans text-brove-paper">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-brove-yellow shrink-0 stroke-[3]" />
                  <span>Oversized T-Shirt starting from ₹450</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-brove-yellow shrink-0 stroke-[3]" />
                  <span>Acid Wash Oversized starting from ₹500</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-brove-yellow shrink-0 stroke-[3]" />
                  <span>Hoodies (₹800) & Sweatshirts (₹500)</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-brove-yellow shrink-0 stroke-[3]" />
                  <span>High-density DTF or tactile embroidery</span>
                </li>
              </ul>
            </div>

            <div className="pt-8">
              <Link
                to="/customize/oversized-tshirt"
                className="w-full inline-flex items-center justify-center gap-2 bg-brove-yellow text-brove-charcoal py-3 px-4 font-display text-xl tracking-wider border-2 border-brove-charcoal hover:bg-brove-highlight transition-all active:scale-95 shadow-[3px_3px_0px_0px_rgba(255,255,255,1)]"
              >
                <span>CUSTOMIZE NOW</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>

          {/* Card 3: Bulk Orders */}
          <motion.div
            whileHover={{ y: -4 }}
            className="bg-white border-2 border-brove-charcoal p-8 flex flex-col justify-between shadow-[6px_6px_0px_0px_rgba(23,23,23,1)]"
          >
            <div className="space-y-6">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-display text-3xl font-bold text-brove-charcoal">BULK ORDERS</h3>
                  <p className="text-xs font-mono text-brove-ink mt-1">Colleges, companies & large events</p>
                </div>
                <div className="bg-brove-paper p-2 border border-brove-border">
                  <ShieldCheck className="w-6 h-6 text-brove-charcoal" />
                </div>
              </div>

              <div className="border-y border-brove-border py-4">
                <div className="text-xs font-mono text-brove-ink uppercase">Custom Quote</div>
                <div className="font-display text-4xl font-bold text-brove-charcoal">
                  GET A QUOTE
                </div>
                <div className="text-xs font-mono text-brove-ink mt-1">For large volume requirements</div>
              </div>

              <p className="text-sm font-sans text-brove-ink leading-relaxed">
                Planning a larger order? Talk to us about your quantity, apparel type, printing method, and design.
              </p>

              <ul className="space-y-2 text-sm font-sans text-brove-charcoal pt-2">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-brove-yellow shrink-0 stroke-[3]" />
                  <span>Custom shirts & corporate uniforms</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-brove-yellow shrink-0 stroke-[3]" />
                  <span>Special quantity pricing tiers</span>
                </li>
              </ul>
            </div>

            <div className="pt-8">
              <Link
                to="/custom-order"
                className="w-full inline-flex items-center justify-center gap-2 bg-brove-charcoal text-brove-paper py-3 px-4 font-display text-xl tracking-wider border-2 border-brove-charcoal hover:bg-brove-graphite transition-all active:scale-95 shadow-[3px_3px_0px_0px_rgba(242,212,0,1)]"
              >
                <span>CONTACT US</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
