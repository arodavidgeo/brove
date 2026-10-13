import React from "react";
import { SEOHead } from "../components/layout/SEOHead";
import { BUSINESS_FACTS, OWNER_CONFIG_TODOS } from "../data/brove-content";
import { AlertCircle } from "lucide-react";

export const TermsPage: React.FC = () => {
  return (
    <>
      <SEOHead
        title="TERMS OF SERVICE : BROVE Custom Apparel"
        description="BROVE terms of service covering custom apparel orders, minimum order quantity (5 pieces), printing specifications, and delivery via ST Courier."
        path="/terms"
      />

      <section className="py-16 bg-transparent border-b-2 border-[#E6E2D3]">
        <div className="max-w-[900px] mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          {/* Header */}
          <div className="border-b-2 border-[#E6E2D3] pb-6 space-y-2">
            <div className="inline-block bg-primary-container text-text-primary px-3 py-1 font-mono text-xs font-bold border border-[#E6E2D3] rounded">
              LEGAL DOCUMENTATION
            </div>
            <h1 className="font-display text-5xl sm:text-6xl font-bold text-[#2A2A24]">
              TERMS OF SERVICE
            </h1>
            <div className="font-mono text-xs text-[#66645A]">
              LAST UPDATED: {OWNER_CONFIG_TODOS.LAST_UPDATED_DATE} • JURISDICTION: {OWNER_CONFIG_TODOS.LEGAL_JURISDICTION}
            </div>
          </div>

          {/* Pre-launch Notice */}
          <div className="bg-[#FAF8F0] border-2 border-amber-500/40 p-4 font-mono text-xs text-amber-900 space-y-1 rounded">
            <div className="font-bold flex items-center gap-2">
              <AlertCircle className="w-4 h-4 text-amber-700 shrink-0" />
              <span>LEGAL REVIEW NOTICE</span>
            </div>
            <p>
              These Terms of Service are a baseline operational draft generated strictly from supplied business facts. They must be formally reviewed and finalized by a qualified legal professional prior to public launch.
            </p>
          </div>

          <div className="bg-[#FFFFFF] border-2 border-[#E6E2D3] p-8 space-y-6 font-sans text-sm text-[#2A2A24] leading-relaxed shadow-[0_4px_20px_rgba(42,42,36,0.06)] rounded-lg">
            
            <section className="space-y-2">
              <h2 className="font-display text-2xl font-bold text-[#2A2A24]">1. APPAREL CUSTOMIZATION & ORDERS</h2>
              <p>
                BROVE produces custom printed apparel using Direct-to-Film (DTF) printing and precision embroidery. By placing an order, you confirm that you own or possess authorization for any artwork, logo, or trademark submitted for printing.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="font-display text-2xl font-bold text-[#2A2A24]">2. MINIMUM ORDER QUANTITY (MOQ)</h2>
              <p className="font-mono text-xs bg-[#FAF8F0] p-3 border border-[#E6E2D3] font-bold rounded">
                {BUSINESS_FACTS.moqText}
              </p>
              <p>
                All standard orders require a minimum order quantity of 5 pieces. Custom quotes may be requested for bulk requirements.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="font-display text-2xl font-bold text-[#2A2A24]">3. DELIVERY & COURIER</h2>
              <p>
                Orders are packed and dispatched via {BUSINESS_FACTS.delivery.courier}. Delivery timeframe generally takes {BUSINESS_FACTS.delivery.timeframe} across India following quality inspection.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="font-display text-2xl font-bold text-[#2A2A24]">4. GOVERNING LAW</h2>
              <p>
                These terms shall be governed in accordance with the laws of {OWNER_CONFIG_TODOS.LEGAL_JURISDICTION}.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="font-display text-2xl font-bold text-[#2A2A24]">5. CONTACT INFORMATION</h2>
              <p>For questions or custom order clarifications:</p>
              <div className="font-mono text-xs bg-[#FAF8F0] p-3 border border-[#E6E2D3] rounded">
                Phone: {BUSINESS_FACTS.contact.phone} • Email: {BUSINESS_FACTS.contact.email}
              </div>
            </section>

          </div>

        </div>
      </section>
    </>
  );
};
