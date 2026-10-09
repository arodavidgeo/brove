import React from "react";
import { useSearchParams } from "react-router-dom";
import { SEOHead } from "../components/layout/SEOHead";
import { PRODUCTS } from "../data/products";
import { BUSINESS_FACTS } from "../data/brove-content";
import { WorkshopTicker } from "../components/layout/WorkshopTicker";
import { RequirementForm } from "../components/order/RequirementForm";
import { ShieldCheck, Truck, MessageCircle, Phone } from "lucide-react";

export const CustomOrderPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const productId = searchParams.get("product");
  const initialQty = parseInt(searchParams.get("qty") || "") || 5;

  const matchedProduct = PRODUCTS.find((p) => p.id === productId);
  const initialApparel = matchedProduct ? matchedProduct.name : undefined;

  return (
    <>
      <SEOHead
        title="SEND YOUR REQUIREMENT : Custom Apparel Order | BROVE"
        description="Submit your custom apparel requirement directly to BROVE. Custom T-shirts, oversized streetwear, hoodies, and polos for colleges, companies, and teams. Minimum 5 pieces."
        path="/custom-order"
      />

      <div className="w-full bg-surface-paper dark:bg-surface-dark text-text-primary dark:text-text-on-dark pt-20 transition-colors duration-200">
        
        {/* Header Hero */}
        <section className="w-full bg-surface-dark text-text-on-dark py-12 md:py-16 border-b-4 border-primary-container relative overflow-hidden">
          <div className="max-w-[1400px] mx-auto px-margin-mobile lg:px-margin space-y-4 relative z-10">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 bg-primary-container inline-block"></span>
                <span className="font-mono text-xs uppercase tracking-widest text-primary-container font-bold">
                  DIRECT REQUIREMENT INTAKE
                </span>
              </div>
              <div className="bg-primary-container text-text-primary px-3 py-1 font-mono text-xs uppercase tracking-wider font-bold shadow-sm">
                MINIMUM ORDER: 5 PIECES
              </div>
            </div>

            <div className="max-w-3xl space-y-2">
              <h1 className="font-headline text-5xl sm:text-7xl lg:text-8xl uppercase tracking-tight text-text-on-dark leading-none">
                SEND YOUR REQUIREMENT.
              </h1>
              <p className="font-headline text-2xl sm:text-3xl text-primary-container uppercase tracking-wide">
                WE RECEIVE. WE DESIGN. WE PRINT.
              </p>
              <p className="font-body text-base text-surface-container-highest max-w-2xl leading-relaxed">
                No complex carts or payment funnels. Share your garment canvas, quantity, artwork, and event timeline. Our studio reviews your specs and reaches out directly.
              </p>
            </div>
          </div>
        </section>

        <WorkshopTicker />

        <div className="max-w-[1000px] mx-auto px-margin-mobile lg:px-margin py-12 sm:py-16 space-y-12">
          
          {/* Quick Notice Banner */}
          <div className="bg-surface-white dark:bg-surface-dark-secondary border-2 border-text-primary dark:border-surface-dark-secondary p-4 rounded flex flex-wrap items-center justify-between gap-4 font-mono text-xs shadow-[3px_3px_0px_#171717] dark:shadow-[3px_3px_0px_#F2D400]">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-primary-container shrink-0" />
              <span>MINIMUM ORDER: <strong>5 PIECES</strong> (MIX SIZES FREELY)</span>
            </div>
            <div className="flex items-center gap-2 text-text-muted">
              <Truck className="w-4 h-4 text-primary-container shrink-0" />
              <span>DELIVERY: 3–7 DAYS VIA ST COURIER ALL INDIA</span>
            </div>
          </div>

          {/* Interactive Requirement Form */}
          <RequirementForm
            initialApparel={initialApparel}
            initialQuantity={initialQty >= 5 ? initialQty : 5}
          />

          {/* Direct Support Alternatives */}
          <div className="bg-surface-dark text-text-on-dark p-6 sm:p-8 rounded-lg border-2 border-surface-dark-secondary flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="space-y-1 text-center sm:text-left">
              <span className="font-mono text-xs uppercase tracking-wider text-primary-container font-bold block">
                PREFER TO DISCUSS DIRECTLY?
              </span>
              <p className="font-headline text-2xl uppercase">
                SPEAK DIRECTLY WITH THE WORKSHOP
              </p>
              <p className="font-body text-xs text-text-muted">
                Available Mon–Sat: 9 AM to 8 PM IST for technical and sizing questions.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <a
                href={`tel:${BUSINESS_FACTS.contact.phone}`}
                className="px-4 py-2.5 bg-surface-dark-secondary hover:bg-surface-dark text-text-on-dark font-mono text-xs uppercase font-bold rounded border border-surface-dark-secondary flex items-center gap-2 transition-colors"
              >
                <Phone className="w-4 h-4 text-primary-container" />
                <span>{BUSINESS_FACTS.contact.phone}</span>
              </a>

              <a
                href={`https://wa.me/91${BUSINESS_FACTS.contact.whatsapp}?text=${encodeURIComponent(
                  "Hello BROVE, I'd like to consult on an apparel requirement."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 bg-primary-container text-text-primary font-headline text-xs uppercase tracking-wider font-bold rounded hover:bg-primary-fixed transition-colors flex items-center gap-1.5 shadow-[2px_2px_0px_#FFFFFF]"
              >
                <MessageCircle className="w-4 h-4 fill-current stroke-none" />
                <span>WHATSAPP CHAT</span>
              </a>
            </div>
          </div>

        </div>

      </div>
    </>
  );
};
