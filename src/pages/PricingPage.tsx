import React from "react";
import { Link } from "react-router-dom";
import { SEOHead } from "../components/layout/SEOHead";
import { PRODUCTS } from "../data/products";
import { BUSINESS_FACTS, OWNER_CONFIG_TODOS } from "../data/brove-content";
import { formatPrice } from "../lib/utils";
import { WorkshopTicker } from "../components/layout/WorkshopTicker";
import { BatchCostEstimator } from "../components/pricing/BatchCostEstimator";
import {
  Printer as PrintIcon,
  Info
} from "lucide-react";

export const PricingPage: React.FC = () => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <>
      <SEOHead
        title="BROVE APPAREL PRICING : Clear Apparel Prices. No Confusion."
        description="Transparent physical apparel specification rates from the BROVE workshop. Regular Fit ₹350, Oversized ₹450, Acid Wash ₹500, Polo ₹360, Hoodie ₹800, Sweatshirt ₹500, Shirts Custom Pricing. Minimum order 5 pieces."
        path="/pricing"
      />

      <div className="w-full bg-transparent text-[#2A2A24] pt-20 transition-colors duration-200">
        
        {/* Header Hero */}
        <section className="w-full bg-transparent text-[#2A2A24] py-12 md:py-16 border-b-2 border-[#E6E2D3] relative overflow-hidden">
          <div className="max-w-[1400px] mx-auto px-margin-mobile lg:px-margin space-y-4 relative z-10">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 bg-primary-container inline-block"></span>
                <span className="font-mono text-xs uppercase tracking-widest text-[#5A680C] font-bold">
                  BROVE WORKSHOP RATE CARD // SPEC SHEET
                </span>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={handlePrint}
                  className="no-print inline-flex items-center gap-1.5 px-3 py-1 bg-[#FFFFFF] hover:bg-[#FAF8F0] text-[#2A2A24] border border-[#E6E2D3] hover:border-primary-container rounded font-mono text-xs uppercase tracking-wider transition-colors shadow-xs"
                  title="Print rate card or save as PDF"
                >
                  <PrintIcon className="w-3.5 h-3.5 text-[#5A680C]" />
                  <span>PRINT RATE CARD</span>
                </button>
                <div className="bg-primary-container text-text-primary px-3 py-1 font-mono text-xs uppercase tracking-wider font-bold shadow-xs">
                  MINIMUM ORDER: 5 PIECES
                </div>
              </div>
            </div>

            <div className="max-w-3xl space-y-2">
              <h1 className="font-headline text-5xl sm:text-7xl lg:text-8xl uppercase tracking-tight text-[#2A2A24] leading-none">
                BROVE APPAREL PRICING.
              </h1>
              <p className="font-headline text-2xl sm:text-3xl text-[#5A680C] uppercase tracking-wide">
                CLEAR APPAREL PRICES. NO CONFUSION.
              </p>
              <p className="font-body text-base text-[#55544D] max-w-2xl leading-relaxed">
                Direct workshop manufacturing rates. No subscription tiers, no hidden monthly commitments, and no artificial pricing plans.
              </p>
            </div>
          </div>
        </section>

        <WorkshopTicker />

        <div className="max-w-[1400px] mx-auto px-margin-mobile lg:px-margin py-12 sm:py-16 space-y-16">
          
          {/* Specification Rate Card Table / Grid */}
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b-2 border-[#E6E2D3] pb-4">
              <div>
                <span className="font-mono text-xs uppercase tracking-widest text-[#66645A] font-bold block mb-1">
                  OFFICIAL WORKSHOP RATE CARD
                </span>
                <h2 className="font-headline text-3xl sm:text-5xl uppercase tracking-tight text-[#2A2A24]">
                  INDIVIDUAL APPAREL RATES
                </h2>
              </div>
              <div className="text-right font-mono text-xs text-[#66645A]">
                <p>CURRENCY: INR (₹) • MINIMUM ORDER: 5 PIECES</p>
                <p className="text-[#5A680C] font-bold">LAST UPDATED: {OWNER_CONFIG_TODOS.LAST_UPDATED_DATE}</p>
              </div>
            </div>

            {/* Industrial Specification Sheet Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {PRODUCTS.map((prod) => (
                <div
                  key={prod.id}
                  className="bg-[#FFFFFF] border-2 border-[#E6E2D3] rounded-lg p-6 flex flex-col justify-between shadow-[0_4px_16px_rgba(42,42,36,0.06)] transition-transform hover:-translate-y-1"
                >
                  <div className="space-y-4">
                    <div className="flex items-start justify-between gap-2 border-b border-[#E6E2D3] pb-3">
                      <div>
                        <span className="font-mono text-[10px] uppercase text-[#66645A] font-bold block">
                          ITEM // {prod.category}
                        </span>
                        <h3 className="font-headline text-2xl uppercase tracking-tight text-[#2A2A24] leading-tight">
                          {prod.name}
                        </h3>
                      </div>
                      <div className="text-right shrink-0">
                        <span className="font-headline text-3xl text-[#2A2A24] bg-primary-container px-2.5 py-1 rounded inline-block shadow-xs">
                          {formatPrice(prod.price, prod.pricingType)}
                        </span>
                      </div>
                    </div>

                    <p className="font-body text-xs text-[#55544D] leading-relaxed">
                      {prod.description}
                    </p>

                    <div className="bg-[#FAF8F0] p-3.5 rounded border border-[#E6E2D3] space-y-2 font-mono text-xs">
                      <div className="flex justify-between items-center">
                        <span className="text-[#66645A] uppercase">PRINT METHODS:</span>
                        <span className="font-bold text-[#2A2A24]">
                          {prod.availablePrintingMethods.join(" / ")}
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-[#66645A] uppercase">MINIMUM ORDER:</span>
                        <span className="text-[#5A680C] font-bold">5 PIECES</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-[#66645A] uppercase">SIZING RANGE:</span>
                        <span className="text-[#2A2A24]">{prod.availableSizes.join(", ")}</span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-6">
                    <Link
                      to={`/custom-order?product=${prod.id}`}
                      className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 bg-primary-container text-text-primary font-headline text-sm uppercase tracking-wider rounded hover:bg-primary-fixed active:scale-95 transition-all shadow-[2px_2px_0px_#2A2A24]"
                    >
                      <span>SEND YOUR REQUIREMENT →</span>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Pricing Factors Explanation Box */}
          <div className="bg-[#FFFFFF] border-2 border-[#E6E2D3] p-6 sm:p-10 rounded-lg shadow-[0_4px_16px_rgba(42,42,36,0.06)] space-y-6">
            <div className="flex items-center gap-2">
              <Info className="w-5 h-5 text-[#5A680C] shrink-0" />
              <h3 className="font-headline text-2xl sm:text-3xl uppercase text-[#2A2A24]">
                HOW FINAL QUOTES ARE CALCULATED
              </h3>
            </div>

            <p className="font-body text-sm sm:text-base text-[#55544D] leading-relaxed">
              BROVE provides transparent base garment pricing with DTF printing. Your final quotation can vary depending on your specific requirements:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 pt-2 font-mono text-xs">
              <div className="bg-[#FAF8F0] p-4 rounded border border-[#E6E2D3] space-y-1">
                <span className="font-bold text-[#5A680C] uppercase block">01 / QUANTITY</span>
                <p className="text-[#55544D] leading-relaxed">
                  Bulk runs (25, 50, 100+ pieces) qualify for volume production efficiencies.
                </p>
              </div>

              <div className="bg-[#FAF8F0] p-4 rounded border border-[#E6E2D3] space-y-1">
                <span className="font-bold text-[#5A680C] uppercase block">02 / APPAREL CANVAS</span>
                <p className="text-[#55544D] leading-relaxed">
                  Regular Fit, Oversized, Mineral Acid Wash, Hoodies, or Polos.
                </p>
              </div>

              <div className="bg-[#FAF8F0] p-4 rounded border border-[#E6E2D3] space-y-1">
                <span className="font-bold text-[#5A680C] uppercase block">03 / PRINT METHOD</span>
                <p className="text-[#55544D] leading-relaxed">
                  Full CMYK DTF digital heat transfer or precision thread embroidery.
                </p>
              </div>

              <div className="bg-[#FAF8F0] p-4 rounded border border-[#E6E2D3] space-y-1">
                <span className="font-bold text-[#5A680C] uppercase block">04 / DESIGN PLACEMENT</span>
                <p className="text-[#55544D] leading-relaxed">
                  Front chest emblem, oversized 14" back graphic, sleeve logos, or neck tags.
                </p>
              </div>

              <div className="bg-[#FAF8F0] p-4 rounded border border-[#E6E2D3] space-y-1">
                <span className="font-bold text-[#5A680C] uppercase block">05 / CUSTOMIZATION</span>
                <p className="text-[#55544D] leading-relaxed">
                  Specialty colorways, individual name tags, or department badges.
                </p>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap items-center justify-between gap-4 border-t border-[#E6E2D3] font-mono text-xs">
              <span className="text-[#66645A]">
                NO HIDDEN CHARGES • ST COURIER TRACKED PARCEL • PAN-INDIA DISPATCH
              </span>
              <Link
                to="/custom-order"
                className="inline-flex items-center gap-1.5 text-[#5A680C] font-bold hover:underline uppercase"
              >
                <span>GET A DIRECT QUOTE →</span>
              </Link>
            </div>
          </div>

          {/* Interactive Batch Cost Estimator */}
          <div className="space-y-6">
            <div className="space-y-1">
              <span className="font-mono text-xs uppercase tracking-widest text-[#66645A] font-bold block">
                PRODUCTION PLANNING TOOL
              </span>
              <h2 className="font-headline text-3xl sm:text-5xl uppercase tracking-tight text-[#2A2A24]">
                BATCH COST ESTIMATOR
              </h2>
            </div>
            <BatchCostEstimator />
          </div>

          {/* Bottom Conversion Strip */}
          <div className="bg-primary-container text-text-primary p-8 rounded-lg border-2 border-[#2A2A24] flex flex-col md:flex-row items-center justify-between gap-6 shadow-[2px_2px_0px_#2A2A24]">
            <div className="space-y-1 text-center md:text-left">
              <h3 className="font-headline text-3xl sm:text-4xl uppercase leading-tight">
                HAVE A SPECIFIC ORDER IN MIND?
              </h3>
              <p className="font-body text-sm text-[#2A2A24]/90">
                Share your artwork, garment choice, and timeline with our workshop.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <Link
                to="/custom-order"
                className="px-6 py-3.5 bg-[#2A2A24] text-[#FAF8F0] font-headline text-base uppercase tracking-wider rounded hover:bg-[#3A3A34] active:scale-95 transition-all shadow-[2px_2px_0px_#FFFFFF]"
              >
                SEND YOUR REQUIREMENT →
              </Link>
              <a
                href={`https://wa.me/91${BUSINESS_FACTS.contact.whatsapp}?text=${encodeURIComponent(
                  "Hello BROVE, I'd like a custom quotation for an apparel batch."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3.5 bg-[#FFFFFF] text-[#2A2A24] font-mono text-xs font-bold uppercase tracking-wider rounded border border-[#2A2A24] hover:bg-[#FAF8F0] transition-all shadow-xs"
              >
                WHATSAPP US
              </a>
            </div>
          </div>

        </div>

      </div>
    </>
  );
};
