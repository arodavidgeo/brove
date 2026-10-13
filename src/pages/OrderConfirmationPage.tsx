import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { SEOHead } from "../components/layout/SEOHead";
import { OrderRecord } from "../types";
import { BUSINESS_FACTS } from "../data/brove-content";

export const OrderConfirmationPage: React.FC = () => {
  const [order, setOrder] = useState<OrderRecord | null>(null);

  useEffect(() => {
    const saved = sessionStorage.getItem("brove_last_order");
    if (saved) {
      try {
        setOrder(JSON.parse(saved));
      } catch (e) {
        // default
      }
    }
  }, []);

  return (
    <>
      <SEOHead
        title="ORDER CONFIRMED : 04 Production Pass | BROVE"
        description="Your batch order has been registered into the BROVE print floor schedule. WhatsApp digital mock-up and ST Courier dispatch tracking details."
        path="/order-confirmation"
      />

      <div className="w-full bg-transparent text-[#2A2A24] min-h-screen pt-20">
        <div className="relative w-full overflow-hidden">
          <div className="max-w-[1400px] mx-auto px-margin-mobile lg:px-margin py-space-lg lg:py-space-xl relative z-10 flex flex-col gap-space-xl">
            
            {/* Stepper Navigation */}
            <div className="bg-[#FAF8F0] rounded-lg p-space-sm sm:p-space-md shadow-xs border border-[#E6E2D3]">
              <ol className="grid grid-cols-2 md:grid-cols-4 gap-space-xs sm:gap-space-sm font-mono text-xs">
                {/* Step 1 */}
                <li className="flex items-center gap-space-xs p-space-xs">
                  <span className="flex items-center justify-center w-6 h-6 rounded bg-primary-container text-text-primary font-bold">
                    <span className="material-symbols-outlined text-[14px]">check</span>
                  </span>
                  <div className="flex flex-col">
                    <span className="text-[10px] text-[#66645A] uppercase">STEP 01</span>
                    <span className="uppercase tracking-wide text-[#2A2A24] font-bold">CART</span>
                  </div>
                </li>

                {/* Step 2 */}
                <li className="flex items-center gap-space-xs p-space-xs">
                  <span className="flex items-center justify-center w-6 h-6 rounded bg-primary-container text-text-primary font-bold">
                    <span className="material-symbols-outlined text-[14px]">check</span>
                  </span>
                  <div className="flex flex-col">
                    <span className="text-[10px] text-[#66645A] uppercase">STEP 02</span>
                    <span className="uppercase tracking-wide text-[#2A2A24] font-bold">DETAILS</span>
                  </div>
                </li>

                {/* Step 3 */}
                <li className="flex items-center gap-space-xs p-space-xs">
                  <span className="flex items-center justify-center w-6 h-6 rounded bg-primary-container text-text-primary font-bold">
                    <span className="material-symbols-outlined text-[14px]">check</span>
                  </span>
                  <div className="flex flex-col">
                    <span className="text-[10px] text-[#66645A] uppercase">STEP 03</span>
                    <span className="uppercase tracking-wide text-[#2A2A24] font-bold">PAYMENT</span>
                  </div>
                </li>

                {/* Step 4 (Active) */}
                <li className="flex items-center gap-space-xs p-space-xs bg-[#FFFFFF] rounded shadow-xs border border-primary-container">
                  <span className="flex items-center justify-center w-6 h-6 rounded bg-primary-container text-text-primary font-bold animate-pulse">
                    <span className="material-symbols-outlined text-[14px]">verified</span>
                  </span>
                  <div className="flex flex-col">
                    <span className="text-[10px] text-[#5A680C] uppercase font-bold">CURRENT</span>
                    <span className="uppercase tracking-wide text-[#2A2A24] font-bold">04 CONFIRMED</span>
                  </div>
                </li>
              </ol>
            </div>

            {/* Confirmation Hero Banner */}
            <section className="flex flex-col items-center text-center space-y-space-md py-space-sm">
              <div className="relative flex items-center justify-center">
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-primary-container flex items-center justify-center text-text-primary shadow-[0_4px_16px_rgba(42,42,36,0.1)] transform -rotate-3 transition-transform hover:rotate-0">
                  <span className="material-symbols-outlined text-[44px] sm:text-[54px] font-bold">done_all</span>
                </div>
                <span className="absolute -bottom-2 -right-4 bg-[#FFFFFF] text-[#2A2A24] border border-[#E6E2D3] font-mono text-[10px] px-2 py-0.5 rounded uppercase tracking-wider font-bold shadow-xs">
                  PAID
                </span>
              </div>

              <div className="space-y-space-xs max-w-2xl">
                <h1 className="font-headline text-5xl sm:text-7xl uppercase text-[#2A2A24] tracking-tight leading-none">
                  ORDER CONFIRMED.
                </h1>
                <p className="font-headline text-2xl sm:text-3xl uppercase text-[#5A680C] tracking-wider">
                  WE'VE RECEIVED YOUR BATCH & ARTWORK.
                </p>
              </div>

              {/* Monospace Reference Strip */}
              <div className="flex flex-wrap items-center justify-center gap-space-sm pt-space-xs">
                <div className="inline-flex items-center gap-space-xs bg-[#FAF8F0] px-space-md py-space-xs rounded shadow-xs border border-[#E6E2D3]">
                  <span className="text-[#5A680C] font-mono text-xs uppercase tracking-widest font-bold">BATCH ID:</span>
                  <span className="font-mono text-xs uppercase text-[#2A2A24] font-bold tracking-wider">
                    {order ? `#${order.orderId}` : "#BRV-89412-2025"}
                  </span>
                </div>
                <div className="inline-flex items-center gap-space-xs bg-[#FAF8F0] px-space-md py-space-xs rounded shadow-xs border border-[#E6E2D3]">
                  <span className="w-2 h-2 rounded-full bg-primary-container"></span>
                  <span className="font-mono text-xs uppercase tracking-wider text-[#66645A]">
                    STATUS: QUEUED FOR PRE-FLIGHT
                  </span>
                </div>
              </div>

              <p className="text-sm text-[#66645A] max-w-xl leading-relaxed">
                Receipt and workshop pre-flight proof status sent to{" "}
                <span className="text-[#2A2A24] font-medium">{order?.customer.email || BUSINESS_FACTS.contact.email}</span> and WhatsApp{" "}
                <span className="text-[#2A2A24] font-medium">+91 {order?.customer.phone || BUSINESS_FACTS.contact.whatsapp}</span>.
              </p>
            </section>

            {/* Main Editorial Layout: Pipeline vs Batch Details */}
            <section className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-start">
              {/* Left Column (7 Cols): 5 Stages of Craft Pipeline */}
              <div className="lg:col-span-7 bg-[#FAF8F0] p-space-md sm:p-space-lg rounded-lg shadow-xs space-y-space-lg border border-[#E6E2D3]">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-space-xs">
                  <div className="space-y-space-xs">
                    <span className="font-mono text-xs text-[#5A680C] uppercase tracking-widest font-bold">
                      STUDIO DISPATCH PIPELINE
                    </span>
                    <h2 className="font-headline text-2xl uppercase text-[#2A2A24] tracking-wide">
                      WHAT HAPPENS NEXT?
                    </h2>
                  </div>
                  <span className="font-mono text-xs text-[#66645A] bg-[#FFFFFF] px-space-sm py-1 rounded uppercase tracking-wider border border-[#E6E2D3]">
                    5 STAGES OF CRAFT
                  </span>
                </div>

                <div className="relative flex flex-col gap-space-md pl-4">
                  <div className="absolute left-[23px] top-4 bottom-4 w-[2px] bg-[#E6E2D3] pointer-events-none"></div>

                  {/* Stage 1 */}
                  <div className="relative flex items-start gap-space-md">
                    <div className="relative z-10 flex-shrink-0 w-8 h-8 rounded-full bg-primary-container flex items-center justify-center text-text-primary shadow-[0_0_12px_rgba(242,212,0,0.35)]">
                      <span className="font-mono text-xs font-bold">01</span>
                    </div>
                    <div className="bg-[#FFFFFF] p-space-md rounded flex-1 space-y-space-xs border border-[#E6E2D3] shadow-xs">
                      <div className="flex flex-wrap items-center justify-between gap-space-xs">
                        <p className="font-headline text-lg uppercase text-[#5A680C] tracking-wide flex items-center gap-space-xs">
                          ARTWORK PRE-FLIGHT
                          <span className="inline-block w-2 h-2 rounded-full bg-primary-container animate-ping"></span>
                        </p>
                        <span className="bg-primary-container/20 text-[#2A2A24] font-mono text-[10px] px-2 py-0.5 rounded font-bold uppercase tracking-widest">
                          IN PROGRESS
                        </span>
                      </div>
                      <p className="text-xs text-[#2A2A24] leading-relaxed">
                        Print technician inspects artwork resolution, edge clarity, and vector paths for maximum ink vibrancy.
                      </p>
                    </div>
                  </div>

                  {/* Stage 2 */}
                  <div className="relative flex items-start gap-space-md">
                    <div className="relative z-10 flex-shrink-0 w-8 h-8 rounded-full bg-[#FFFFFF] border border-[#E6E2D3] flex items-center justify-center text-[#66645A] font-mono text-xs font-bold">
                      02
                    </div>
                    <div className="bg-[#FFFFFF] p-space-md rounded flex-1 space-y-space-xs border border-[#E6E2D3]">
                      <div className="flex items-center justify-between">
                        <p className="font-headline text-lg uppercase text-[#2A2A24] tracking-wide">
                          DIGITAL PROOF APPROVAL
                        </p>
                        <span className="text-[#66645A] font-mono text-xs uppercase">EST. ~4 HOURS</span>
                      </div>
                      <p className="text-xs text-[#66645A] leading-relaxed">
                        You receive an exact WhatsApp mock-up depicting dimension scales, chest placement coordinates, and color breakdown before printing.
                      </p>
                    </div>
                  </div>

                  {/* Stage 3 */}
                  <div className="relative flex items-start gap-space-md">
                    <div className="relative z-10 flex-shrink-0 w-8 h-8 rounded-full bg-[#FFFFFF] border border-[#E6E2D3] flex items-center justify-center text-[#66645A] font-mono text-xs font-bold">
                      03
                    </div>
                    <div className="bg-[#FFFFFF] p-space-md rounded flex-1 space-y-space-xs border border-[#E6E2D3]">
                      <div className="flex items-center justify-between">
                        <p className="font-headline text-lg uppercase text-[#2A2A24] tracking-wide">
                          WORKSHOP DTF PRINT & CURE
                        </p>
                        <span className="text-[#66645A] font-mono text-xs uppercase">STAGE 3</span>
                      </div>
                      <p className="text-xs text-[#66645A] leading-relaxed">
                        Garments physically mounted, heat-pressed with dense thermoplastic adhesive, and tunnel-cured for ultra-high wash durability.
                      </p>
                    </div>
                  </div>

                  {/* Stage 4 */}
                  <div className="relative flex items-start gap-space-md">
                    <div className="relative z-10 flex-shrink-0 w-8 h-8 rounded-full bg-[#FFFFFF] border border-[#E6E2D3] flex items-center justify-center text-[#66645A] font-mono text-xs font-bold">
                      04
                    </div>
                    <div className="bg-[#FFFFFF] p-space-md rounded flex-1 space-y-space-xs border border-[#E6E2D3]">
                      <div className="flex items-center justify-between">
                        <p className="font-headline text-lg uppercase text-[#2A2A24] tracking-wide">
                          QC AUDIT & PACKING
                        </p>
                        <span className="text-[#66645A] font-mono text-xs uppercase">STAGE 4</span>
                      </div>
                      <p className="text-xs text-[#66645A] leading-relaxed">
                        Inspection of thread seams, tensile strength, and individual size tagging.
                      </p>
                    </div>
                  </div>

                  {/* Stage 5 */}
                  <div className="relative flex items-start gap-space-md">
                    <div className="relative z-10 flex-shrink-0 w-8 h-8 rounded-full bg-[#FFFFFF] border border-[#E6E2D3] flex items-center justify-center text-[#66645A] font-mono text-xs font-bold">
                      05
                    </div>
                    <div className="bg-[#FFFFFF] p-space-md rounded flex-1 space-y-space-xs border border-[#E6E2D3]">
                      <div className="flex items-center justify-between">
                        <p className="font-headline text-lg uppercase text-[#2A2A24] tracking-wide">
                          ST COURIER DISPATCH
                        </p>
                        <span className="text-[#66645A] font-mono text-xs uppercase">STAGE 5</span>
                      </div>
                      <p className="text-xs text-[#66645A] leading-relaxed">
                        Direct tracking airway bill sent via SMS & WhatsApp for 3–7 day delivery across India.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column (5 Cols): Confirmed Batch Summary & Actions */}
              <div className="lg:col-span-5 bg-[#FAF8F0] p-space-md sm:p-space-lg rounded-lg shadow-xs space-y-space-md border border-[#E6E2D3]">
                <div className="flex items-center justify-between pb-space-xs border-b border-[#E6E2D3]">
                  <h2 className="font-headline text-2xl uppercase text-[#2A2A24] tracking-wide">
                    DISPATCH SPECS
                  </h2>
                  <span className="bg-primary-container text-text-primary font-mono text-[10px] px-2 py-0.5 rounded font-bold uppercase">
                    CONFIRMED
                  </span>
                </div>

                <div className="space-y-space-xs font-mono text-xs">
                  <p className="text-[#5A680C] font-bold uppercase text-[10px] tracking-wider">RECIPIENT</p>
                  <p className="text-[#2A2A24] text-sm font-headline uppercase">{order?.customer.name || "Ashwin Kumar"}</p>
                  <p className="text-[#66645A]">{order?.customer.address || "M90, TNHB colony, Stage 3, KTC Nagar"}</p>
                  <p className="text-[#66645A]">{order?.customer.city || "Tirunelveli"}, {order?.customer.state || "Tamil Nadu"} - {order?.customer.pinCode || "627011"}</p>
                  <p className="text-[#66645A]">WhatsApp / Phone: +91 {order?.customer.phone || "9443941897"}</p>
                </div>

                <div className="pt-space-md border-t border-[#E6E2D3] space-y-3">
                  <a
                    href={`https://wa.me/91${BUSINESS_FACTS.contact.whatsapp}?text=Hi%20BROVE,%20I've%20confirmed%20Batch%20${order?.orderId || "BRV-CUSTOM"}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-space-md px-space-lg bg-primary-container text-text-primary font-headline text-lg uppercase tracking-wider rounded text-center hover:bg-primary-fixed active:scale-95 transition-all shadow-[2px_2px_0px_rgba(42,42,36,0.1)] block"
                  >
                    WHATSAPP STUDIO DESK →
                  </a>
                  <Link
                    to="/wardrobe"
                    className="w-full py-space-sm px-space-md bg-[#FFFFFF] text-[#2A2A24] font-mono text-xs uppercase tracking-wider rounded text-center hover:bg-[#FAF8F0] transition-all block border border-[#E6E2D3]"
                  >
                    CONTINUE SHOPPING
                  </Link>
                </div>
              </div>
            </section>

          </div>
        </div>
      </div>
    </>
  );
};
