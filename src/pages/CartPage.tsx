import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { SEOHead } from "../components/layout/SEOHead";
import { useCart } from "../context/CartContext";

export const CartPage: React.FC = () => {
  const { cart, removeFromCart, updateQuantity, subtotal, itemCount } = useCart();
  const navigate = useNavigate();

  if (cart.length === 0) {
    return (
      <>
        <SEOHead
          title="YOUR CART IS EMPTY : BROVE Studio"
          description="Your workshop batch is currently empty. Explore our wardrobe canvases to begin customizing."
          path="/cart"
        />
        <div className="w-full bg-transparent min-h-[70vh] flex items-center justify-center pt-24 px-4 text-[#2A2A24]">
          <div className="max-w-md mx-auto text-center space-y-6 bg-[#FFFFFF] p-space-xl rounded shadow-xs border border-[#E6E2D3]">
            <div className="w-16 h-16 bg-[#FAF8F0] mx-auto rounded-full flex items-center justify-center text-[#2A2A24] border border-[#E6E2D3]">
              <span className="material-symbols-outlined text-[32px]">shopping_bag</span>
            </div>
            <h1 className="font-headline text-4xl uppercase text-[#2A2A24]">YOUR CART IS EMPTY</h1>
            <p className="text-xs text-[#66645A] leading-relaxed">
              No garments have been placed into this batch. Select a silhouette from the wardrobe and configure your custom print.
            </p>
            <Link
              to="/wardrobe"
              className="inline-flex items-center justify-center px-space-xl py-space-md rounded bg-primary-container text-text-primary font-headline text-base uppercase tracking-wider hover:bg-primary-fixed active:scale-95 transition-all shadow-[2px_2px_0px_rgba(42,42,36,0.1)]"
            >
              EXPLORE WARDROBE →
            </Link>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <SEOHead
        title={`YOUR CART (${itemCount} PIECES) : BROVE Workshop`}
        description="Review custom batch specifications, size distribution, and artwork pre-flight verification."
        path="/cart"
      />

      <div className="w-full bg-transparent min-h-screen pt-20 text-[#2A2A24]">
        {/* Top Status & Step Header */}
        <section className="w-full py-space-lg lg:py-space-xl px-margin-mobile lg:px-margin border-b border-[#E6E2D3]">
          <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row md:items-end justify-between gap-space-md">
            <div>
              <div className="inline-flex items-center gap-space-xs bg-[#FAF8F0] text-[#2A2A24] border border-[#E6E2D3] px-space-sm py-0.5 rounded font-mono text-[10px] uppercase tracking-widest mb-space-xs">
                <span className="w-1.5 h-1.5 rounded-full bg-primary-container animate-pulse"></span>
                ORDER REVIEW • WORKSHOP BATCH
              </div>
              <h1 className="font-headline text-5xl sm:text-6xl uppercase tracking-tight text-[#2A2A24] m-0">
                YOUR CART
              </h1>
            </div>

            {/* Stepper Progress */}
            <div className="bg-[#FAF8F0] px-space-md py-space-sm rounded flex flex-wrap items-center gap-space-xs font-mono text-xs text-[#66645A] border border-[#E6E2D3]">
              <span className="bg-primary-container text-text-primary px-space-xs py-0.5 rounded font-bold">
                01 CART
              </span>
              <span>→</span>
              <span className="text-[#2A2A24] font-semibold">02 INFORMATION</span>
              <span>→</span>
              <span>03 PAYMENT</span>
              <span>→</span>
              <span>04 CONFIRMATION</span>
            </div>
          </div>
        </section>

        {/* Main Cart Content Area */}
        <section className="w-full py-space-xl px-margin-mobile lg:px-margin">
          <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-start">
            
            {/* Left Column (8 Cols): Line Items */}
            <div className="lg:col-span-8 flex flex-col gap-space-md">
              {/* Batch Minimum Alert Banner */}
              <div className="bg-primary-container text-text-primary px-space-md py-space-sm rounded flex items-center justify-between gap-space-sm shadow-xs border border-[#E6E2D3]">
                <div className="flex items-center gap-space-xs">
                  <span className="material-symbols-outlined text-[20px]">verified</span>
                  <span className="font-headline text-sm uppercase tracking-wide">
                    STUDIO PROTOCOL: 5-PIECE BATCH QUALIFIED ({itemCount} TOTAL PCS)
                  </span>
                </div>
                <span className="font-mono text-[10px] uppercase tracking-wider bg-[#FFFFFF] text-[#2A2A24] border border-[#E6E2D3] px-space-xs py-0.5 rounded font-bold">
                  MOQ MET
                </span>
              </div>

              {/* Items Card List */}
              {cart.map((item) => {
                const itemTotal = (item.unitPrice || 450) * item.quantity;
                return (
                  <div
                    key={item.id}
                    className="bg-[#FFFFFF] rounded p-space-md lg:p-space-lg shadow-xs flex flex-col md:flex-row gap-space-lg relative border border-[#E6E2D3]"
                  >
                    {/* Thumbnail */}
                    <div className="w-full md:w-56 shrink-0 aspect-[4/5] bg-[#FAF8F0] rounded relative overflow-hidden flex items-center justify-center border border-[#E6E2D3]">
                      <img
                        src={item.image}
                        alt={item.productName}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-2 left-2 bg-[#FAF8F0]/90 backdrop-blur-xs text-[#2A2A24] border border-[#E6E2D3] font-mono text-[10px] uppercase tracking-wider px-space-xs py-0.5 rounded font-bold">
                        240 GSM COTTON
                      </div>
                    </div>

                    {/* Details */}
                    <div className="flex flex-col justify-between flex-1 gap-space-md">
                      <div>
                        <div className="flex items-start justify-between gap-space-sm mb-space-xs">
                          <div>
                            <span className="font-mono text-[10px] text-text-muted uppercase tracking-widest block">
                              STYLE // HEAVYWEIGHT SILHOUETTE
                            </span>
                            <h2 className="font-headline text-2xl uppercase text-text-primary tracking-wide">
                              {item.productName}
                            </h2>
                          </div>
                          <button
                            type="button"
                            onClick={() => removeFromCart(item.id)}
                            className="text-text-muted hover:text-red-600 transition-colors flex items-center gap-0.5 font-mono text-xs uppercase tracking-wider"
                            title="Remove line item"
                          >
                            <span className="material-symbols-outlined text-[18px]">close</span>
                            <span>Remove</span>
                          </button>
                        </div>

                        {/* Specs Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-xs mt-space-sm text-xs text-text-primary">
                          <div className="bg-surface-paper px-space-sm py-space-xs rounded flex flex-col border border-border-neutral">
                            <span className="font-mono text-[10px] text-text-muted uppercase">Print Method</span>
                            <span className="font-semibold uppercase tracking-wide">
                              {item.printMethod === "dtf" ? "DTF Full Color (Front Chest A3)" : "Tactile High-Density Embroidery"}
                            </span>
                          </div>
                          <div className="bg-surface-paper px-space-sm py-space-xs rounded flex flex-col border border-border-neutral">
                            <span className="font-mono text-[10px] text-text-muted uppercase">Color & Finish</span>
                            <span className="font-semibold uppercase tracking-wide">{item.color}</span>
                          </div>
                          <div className="bg-surface-paper px-space-sm py-space-xs rounded flex flex-col sm:col-span-2 border border-border-neutral">
                            <span className="font-mono text-[10px] text-text-muted uppercase">Size Breakdown</span>
                            <span className="font-mono text-xs font-semibold">{item.size}</span>
                          </div>
                        </div>

                        {/* Uploaded File Pill */}
                        <div className="mt-space-sm bg-surface-container-high px-space-sm py-space-xs rounded flex items-center justify-between gap-space-xs border border-border-neutral">
                          <div className="flex items-center gap-space-xs truncate">
                            <span className="material-symbols-outlined text-[18px] text-text-primary">attachment</span>
                            <span className="font-mono text-xs text-text-primary uppercase truncate font-bold">
                              {item.artworkName || "identity_graphic_v2.png"}
                            </span>
                            <span className="bg-surface-white text-text-primary text-[10px] font-mono px-1 rounded uppercase font-bold">
                              300 DPI
                            </span>
                          </div>
                          <span className="font-mono text-[10px] uppercase font-bold text-text-primary bg-primary-container px-1.5 py-0.5 rounded">
                            VERIFIED
                          </span>
                        </div>
                      </div>

                      {/* Stepper & Line Subtotal */}
                      <div className="pt-space-sm flex flex-wrap items-center justify-between gap-space-md bg-surface-paper p-space-sm rounded border border-border-neutral">
                        <div className="flex items-center gap-space-sm">
                          <div className="flex items-center bg-surface-white rounded shadow-sm border border-border-neutral">
                            <button
                              type="button"
                              onClick={() => updateQuantity(item.id, Math.max(5, item.quantity - 1))}
                              className="w-8 h-8 flex items-center justify-center font-bold text-text-primary hover:bg-surface-container"
                            >
                              -
                            </button>
                            <span className="w-10 text-center font-headline text-xl text-text-primary">
                              {item.quantity}
                            </span>
                            <button
                              type="button"
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="w-8 h-8 flex items-center justify-center font-bold text-text-primary hover:bg-surface-container"
                            >
                              +
                            </button>
                          </div>
                          <div className="flex flex-col font-mono text-xs">
                            <span className="text-text-muted uppercase text-[10px]">Rate per garment</span>
                            <span className="font-bold text-text-primary">₹{item.unitPrice}</span>
                          </div>
                        </div>

                        <div className="text-right">
                          <span className="font-mono text-[10px] text-text-muted uppercase tracking-wider block">
                            Total Batch Price
                          </span>
                          <span className="font-headline text-3xl text-text-primary tracking-tight">
                            ₹{itemTotal.toLocaleString("en-IN")}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}

              {/* Pre-Flight Promise Strip */}
              <div className="bg-surface-container-high rounded p-space-md flex flex-col sm:flex-row items-start sm:items-center justify-between gap-space-md border border-border-neutral">
                <div className="flex items-start gap-space-sm">
                  <span className="material-symbols-outlined text-[24px] text-text-primary">fact_check</span>
                  <div>
                    <p className="font-headline text-base uppercase tracking-wider text-text-primary">
                      PRE-FLIGHT WORKSHOP PROMISE
                    </p>
                    <p className="text-xs text-text-muted">
                      Master screen printers review artwork vector paths, pixel density, and color separations prior to production.
                    </p>
                  </div>
                </div>
                <div className="bg-surface-white px-space-sm py-space-xs rounded font-mono text-[10px] font-bold uppercase tracking-wider shrink-0 text-text-primary border border-border-neutral">
                  ZERO PRINT MISALIGNMENT
                </div>
              </div>

              {/* Continue Link */}
              <div>
                <Link
                  to="/wardrobe"
                  className="inline-flex items-center gap-space-xs font-headline text-base text-text-primary hover:text-primary uppercase transition-colors"
                >
                  <span className="material-symbols-outlined text-[20px]">arrow_back</span>
                  <span>CONTINUE SHOPPING</span>
                </Link>
              </div>
            </div>

            {/* Right Column (4 Cols): Order Summary & Checkout Action */}
            <div className="lg:col-span-4 flex flex-col gap-space-md lg:sticky lg:top-24">
              <div className="bg-surface-white rounded p-space-md lg:p-space-lg shadow-sm border border-border-neutral space-y-space-md">
                <h2 className="font-headline text-2xl uppercase tracking-wide text-text-primary pb-space-xs border-b border-border-neutral">
                  ORDER SUMMARY
                </h2>

                <div className="space-y-space-sm py-space-xs text-sm">
                  <div className="flex items-center justify-between text-text-primary">
                    <span className="text-text-muted">Subtotal ({itemCount} items)</span>
                    <span className="font-bold font-mono">₹{subtotal.toLocaleString("en-IN")}</span>
                  </div>

                  <div className="flex items-start justify-between text-text-primary gap-space-sm">
                    <div className="flex flex-col">
                      <span className="text-text-muted">Shipping</span>
                      <span className="font-mono text-[10px] text-text-muted">ST Courier pan-India</span>
                    </div>
                    <span className="font-mono text-xs uppercase tracking-wider bg-surface-paper px-space-xs py-0.5 rounded text-text-primary shrink-0 border border-border-neutral font-bold">
                      FREE / INCL
                    </span>
                  </div>

                  <div className="flex items-center justify-between text-text-primary">
                    <span className="text-text-muted">Artwork Proofing</span>
                    <span className="font-mono text-xs text-primary font-bold uppercase">FREE</span>
                  </div>

                  <div className="pt-space-sm border-t border-border-neutral flex justify-between items-baseline">
                    <div>
                      <p className="font-headline text-2xl uppercase text-text-primary">ESTIMATED TOTAL</p>
                      <p className="font-mono text-[10px] text-text-muted">Includes 5% Garment GST</p>
                    </div>
                    <span className="font-headline text-4xl text-text-primary">
                      ₹{subtotal.toLocaleString("en-IN")}
                    </span>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => navigate("/checkout")}
                  className="w-full py-space-md px-space-lg bg-primary-container text-text-primary font-headline text-xl uppercase tracking-wider rounded text-center hover:bg-primary-fixed active:scale-95 transition-all shadow-[2px_2px_0px_rgba(42,42,36,0.1)] block"
                >
                  PROCEED TO CHECKOUT →
                </button>

                <div className="pt-space-xs text-center font-mono text-[10px] text-text-muted uppercase">
                  Encrypted checkout • Direct workshop order handling
                </div>
              </div>
            </div>

          </div>
        </section>
      </div>
    </>
  );
};
