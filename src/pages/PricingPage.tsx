import React from "react";
import { Link } from "react-router-dom";
import { SEOHead } from "../components/layout/SEOHead";
import { PRODUCTS } from "../data/products";
import { BUSINESS_FACTS } from "../data/brove-content";
import { formatPrice } from "../lib/utils";
import { ArrowRight, ShieldCheck, MessageCircle, Sparkles } from "lucide-react";
import { BatchCostEstimator } from "../components/pricing/BatchCostEstimator";
import { WorkshopTicker } from "../components/layout/WorkshopTicker";

export const PricingPage: React.FC = () => {
  return (
    <>
      <SEOHead
        title="APPAREL PRICING : Transparent Custom Apparel Rates | BROVE"
        description="Clear, honest apparel pricing starting at ₹350 per piece. Regular Fit, Oversized, Acid Wash, Polos, Hoodies, Sweatshirts, and Shirts with a 5-piece minimum order quantity."
        path="/pricing"
      />

      <div className="flex flex-col w-full bg-surface-paper pt-20">
        
        {/* Header Hero Section */}
        <section className="w-full bg-surface-dark text-text-on-dark py-8 md:py-12 border-b-4 border-primary-container relative overflow-hidden">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 flex flex-col gap-4 relative z-10">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 bg-primary-container inline-block"></span>
              <span className="font-mono text-xs uppercase tracking-widest text-primary-container font-bold">
                TRANSPARENT APPAREL PRICING
              </span>
            </div>

            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
              <div className="max-w-3xl space-y-2">
                <h1 className="font-headline text-5xl md:text-7xl uppercase text-text-on-dark tracking-tight leading-none">
                  SIMPLE PRICING. <br />
                  <span className="text-primary-container">CLEAR CHOICES.</span>
                </h1>
                <p className="font-body text-sm md:text-base text-surface-container-high max-w-2xl leading-relaxed">
                  How much does each apparel type cost? Here are the straightforward starting rates for each blank garment with custom DTF printing or embroidery.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-2">
                <span className="bg-primary-container text-text-primary px-3 py-1 font-mono text-xs uppercase tracking-wider font-bold shadow-sm">
                  MINIMUM ORDER: 5 PIECES
                </span>
                <span className="bg-surface-dark-secondary text-text-on-dark px-3 py-1 font-mono text-xs uppercase tracking-wider border border-surface-dark-secondary">
                  ST COURIER ALL INDIA
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Live Workshop Marquee Strip */}
        <WorkshopTicker />

        {/* Pricing Notice Strip */}
        <section className="bg-white py-2.5 border-b border-border-neutral text-text-primary">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
            <span className="font-bold uppercase tracking-wider flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-primary-container fill-primary-container stroke-text-primary shrink-0" />
              NO PACKAGING GIMMICKS • ORDER EXACTLY WHAT YOUR EVENT OR TEAM NEEDS
            </span>
            <span className="uppercase tracking-wider text-text-muted">
              MIX SIZES FREELY IN YOUR 5-PIECE BATCH
            </span>
          </div>
        </section>

        {/* Apparel Pricing Catalogue & Interactive Batch Estimator */}
        <section className="py-8 sm:py-10 bg-surface-paper">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 space-y-8">
            
            {/* Section Header - Compact and clear (no huge blank spacing) */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-3 border-b-2 border-text-primary pb-4">
              <div>
                <span className="font-mono text-xs uppercase text-text-muted font-bold tracking-widest block">
                  OFFICIAL BROVE CATALOGUE
                </span>
                <h2 className="font-headline text-3xl md:text-5xl uppercase text-text-primary">
                  INDIVIDUAL APPAREL RATES
                </h2>
              </div>
              <p className="text-xs font-mono text-text-muted">
                ALL RATES IN INR (₹) • MINIMUM 5 PIECES PER ORDER
              </p>
            </div>

            {/* Interactive Live Batch Calculator (Immediately accessible) */}
            <BatchCostEstimator />

            {/* Pricing Cards Grid - Guaranteed visible, no opacity 0 bugs */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 pt-4">
              {PRODUCTS.map((product) => {
                const isCustom = product.pricingType === "custom";
                const isFeatured = product.id === "oversized-tshirt";

                return (
                  <div
                    key={product.id}
                    className={`pricing-card flex flex-col justify-between rounded p-6 sm:p-7 transition-transform hover:-translate-y-1 duration-300 ${
                      isFeatured
                        ? "bg-surface-dark text-text-on-dark border-4 border-primary-container shadow-[6px_6px_0px_#171717] relative"
                        : "bg-white text-text-primary border-2 border-text-primary shadow-[4px_4px_0px_#171717]"
                    }`}
                  >
                    {isFeatured && (
                      <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-primary-container text-text-primary px-3.5 py-0.5 font-mono text-[11px] font-bold uppercase tracking-widest shadow-[2px_2px_0px_#171717] flex items-center gap-1.5">
                        <Sparkles className="w-3.5 h-3.5" />
                        <span>POPULAR CHOICE FOR EVENTS</span>
                      </div>
                    )}

                    <div className="space-y-5">
                      {/* Top Header */}
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <span
                            className={`font-mono text-xs uppercase tracking-wider block mb-1 font-bold ${
                              isFeatured ? "text-primary-container" : "text-text-muted"
                            }`}
                          >
                            {product.category}
                          </span>
                          <h3
                            className={`font-headline text-2xl sm:text-3xl uppercase leading-tight ${
                              isFeatured ? "text-text-on-dark" : "text-text-primary"
                            }`}
                          >
                            {product.name}
                          </h3>
                        </div>
                        <span
                          className={`font-mono text-[11px] px-2 py-1 rounded shrink-0 font-bold ${
                            isFeatured
                              ? "bg-surface-dark-secondary text-primary-container"
                              : "bg-surface-paper text-text-primary border border-border-neutral"
                          }`}
                        >
                          MOQ: 5 PCS
                        </span>
                      </div>

                      {/* Image Preview */}
                      <div
                        className={`w-full aspect-[4/3] rounded overflow-hidden flex items-center justify-center p-4 ${
                          isFeatured ? "bg-surface-dark-secondary" : "bg-surface-paper"
                        }`}
                      >
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-contain transition-transform duration-500 hover:scale-105"
                          loading="lazy"
                        />
                      </div>

                      {/* Price Display */}
                      <div
                        className={`border-y py-4 space-y-1 ${
                          isFeatured ? "border-surface-dark-secondary" : "border-border-neutral"
                        }`}
                      >
                        <span
                          className={`text-xs font-mono uppercase block ${
                            isFeatured ? "text-surface-container-high" : "text-text-muted"
                          }`}
                        >
                          {isCustom ? "PRICING STRUCTURE" : "STARTING PRICE"}
                        </span>
                        <div
                          className={`font-headline text-4xl sm:text-5xl ${
                            isFeatured ? "text-primary-container" : "text-text-primary"
                          }`}
                        >
                          {formatPrice(product.price, product.pricingType)}
                        </div>
                        <span
                          className={`text-xs font-mono block ${
                            isFeatured ? "text-surface-container-high" : "text-text-muted"
                          }`}
                        >
                          {isCustom
                            ? "Based on fabric, cut & quantity"
                            : "Per piece (Garment + Custom Print)"}
                        </span>
                      </div>

                      {/* Description & Methods */}
                      <div className="space-y-3">
                        <p
                          className={`text-sm leading-relaxed ${
                            isFeatured ? "text-surface-container-high" : "text-text-muted"
                          }`}
                        >
                          {product.description}
                        </p>

                        <div className="flex flex-wrap gap-1.5 pt-1">
                          {product.availablePrintingMethods.map((method) => (
                            <span
                              key={method}
                              className={`font-mono text-[11px] px-2.5 py-1 rounded font-bold uppercase ${
                                isFeatured
                                  ? "bg-primary-container text-text-primary"
                                  : "bg-surface-paper text-text-primary border border-border-neutral"
                              }`}
                            >
                              {method} READY
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* CTA Button */}
                    <div className="pt-6">
                      <Link
                        to={`/custom-order?product=${product.id}`}
                        className={`w-full inline-flex items-center justify-center gap-2 py-3.5 px-4 font-mono text-sm uppercase tracking-wider font-bold transition-all active:scale-95 ${
                          isFeatured
                            ? "bg-primary-container text-text-primary hover:bg-white shadow-[2px_2px_0px_#ffffff]"
                            : "bg-surface-dark text-text-on-dark hover:bg-primary-container hover:text-text-primary shadow-[2px_2px_0px_#171717] border border-surface-dark"
                        }`}
                      >
                        <span>
                          {isCustom ? "REQUEST A QUOTE →" : "SEND YOUR REQUIREMENT →"}
                        </span>
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Quick Comparison Table */}
        <section className="py-12 bg-white border-t border-b border-border-neutral">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 space-y-6">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div className="space-y-1">
                <span className="font-mono text-xs uppercase text-text-muted font-bold tracking-widest">
                  QUICK APPAREL COMPARISON
                </span>
                <h2 className="font-headline text-3xl md:text-4xl uppercase text-text-primary">
                  ALL APPAREL PRICES AT A GLANCE
                </h2>
              </div>
              <div className="flex items-center gap-2 font-mono text-xs text-text-muted">
                <ShieldCheck className="w-4 h-4 text-primary-container fill-primary-container stroke-text-primary" />
                <span>MINIMUM ORDER: 5 PIECES ACROSS ALL SILHOUETTES</span>
              </div>
            </div>

            <div className="border-2 border-text-primary rounded overflow-x-auto shadow-[4px_4px_0px_#171717]">
              <table className="w-full text-left font-body border-collapse">
                <thead>
                  <tr className="bg-surface-dark text-text-on-dark font-headline text-base sm:text-lg uppercase tracking-wider">
                    <th className="p-4 border-r border-surface-dark-secondary">APPAREL TYPE</th>
                    <th className="p-4 border-r border-surface-dark-secondary">CATEGORY</th>
                    <th className="p-4 border-r border-surface-dark-secondary">STARTING PRICE</th>
                    <th className="p-4 border-r border-surface-dark-secondary">PRINTING METHODS</th>
                    <th className="p-4 border-r border-surface-dark-secondary">MIN. ORDER</th>
                    <th className="p-4 text-center">ACTION</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border-neutral text-sm font-mono">
                  {PRODUCTS.map((prod) => (
                    <tr key={prod.id} className="hover:bg-surface-paper transition-colors">
                      <td className="p-4 font-bold text-text-primary border-r border-border-neutral">
                        {prod.name}
                      </td>
                      <td className="p-4 uppercase text-text-muted border-r border-border-neutral">
                        {prod.category}
                      </td>
                      <td className="p-4 font-bold text-text-primary border-r border-border-neutral text-base">
                        {formatPrice(prod.price, prod.pricingType)}
                      </td>
                      <td className="p-4 text-text-muted border-r border-border-neutral">
                        {prod.availablePrintingMethods.join(" / ")}
                      </td>
                      <td className="p-4 text-text-muted border-r border-border-neutral">
                        5 Pieces
                      </td>
                      <td className="p-4 text-center">
                        <Link
                          to={`/custom-order?product=${prod.id}`}
                          className="inline-flex items-center gap-1.5 text-xs font-bold text-text-primary bg-primary-container px-3 py-1.5 rounded shadow-[1px_1px_0px_#171717] hover:bg-white transition-all uppercase"
                        >
                          <span>{prod.pricingType === "custom" ? "GET QUOTE" : "ENQUIRE"}</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Direct WhatsApp Consultation Box */}
            <div className="bg-surface-dark text-text-on-dark p-6 sm:p-8 rounded flex flex-col md:flex-row items-center justify-between gap-6 border border-surface-dark-secondary">
              <div className="space-y-1">
                <span className="font-mono text-xs uppercase text-primary-container tracking-widest font-bold">
                  HAVE A BULK OR COLLEGE EVENT REQUIREMENT?
                </span>
                <p className="font-headline text-2xl uppercase text-text-on-dark">
                  TALK DIRECTLY TO BROVE
                </p>
                <p className="font-body text-xs text-surface-container-high">
                  Tell us what your symposium, department, company, or club needs. We provide quick pricing and recommendations.
                </p>
              </div>
              <a
                href={`https://wa.me/91${BUSINESS_FACTS.contact.whatsapp}?text=Hello%20BROVE,%20I%20have%20an%20enquiry%20regarding%20custom%20apparel%20pricing.`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-primary-container text-text-primary px-6 py-3 rounded font-mono text-xs uppercase tracking-wider font-bold hover:bg-white active:scale-95 transition-all shadow-[2px_2px_0px_#ffffff] shrink-0"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WHATSAPP: {BUSINESS_FACTS.contact.phone}</span>
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
