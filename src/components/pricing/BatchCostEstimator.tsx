import React, { useState } from "react";
import { Link } from "react-router-dom";
import { PRODUCTS } from "../../data/products";
import { BUSINESS_FACTS } from "../../data/brove-content";
import { Calculator, ShieldCheck, MessageCircle, ArrowRight, Sparkles } from "lucide-react";

export const BatchCostEstimator: React.FC = () => {
  // Only products with known base pricing
  const eligibleProducts = PRODUCTS.filter((p) => p.price !== null);

  const [selectedProductId, setSelectedProductId] = useState<string>("oversized-tshirt");
  const [quantity, setQuantity] = useState<number>(20);
  const [placement, setPlacement] = useState<"standard" | "double" | "embroidery">("standard");

  const selectedProduct = eligibleProducts.find((p) => p.id === selectedProductId) || eligibleProducts[0];

  // Additional placement adjustment
  const placementAddon = placement === "double" ? 80 : placement === "embroidery" ? 60 : 0;
  const unitRate = (selectedProduct.price || 450) + placementAddon;
  const totalEstimatedCost = unitRate * quantity;

  const quickQuantities = [5, 15, 25, 50, 100];

  const whatsAppMessage = encodeURIComponent(
    `Hello BROVE, I used your website Batch Estimator and would like to order:
- Apparel: ${selectedProduct.name}
- Quantity: ${quantity} pieces
- Decoration: ${
      placement === "double"
        ? "Front & Large Back DTF Print"
        : placement === "embroidery"
        ? "High-Density Chest Embroidery"
        : "Standard Front DTF Print"
    }
- Estimated Batch Rate: ₹${unitRate}/piece (Total ~ ₹${totalEstimatedCost.toLocaleString("en-IN")})
Can you confirm feasibility and sizing options?`
  );

  return (
    <div className="w-full bg-[#FFFFFF] text-[#2A2A24] rounded-lg border-2 border-[#E6E2D3] p-6 sm:p-10 shadow-[0_4px_24px_rgba(42,42,36,0.08)]">
      <div className="space-y-6">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#E6E2D3] pb-6">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-2 text-[#5A680C] font-mono text-xs font-bold uppercase tracking-widest">
              <Calculator className="w-4 h-4" />
              <span>INTERACTIVE BATCH ESTIMATOR</span>
            </div>
            <h3 className="font-headline text-3xl sm:text-4xl uppercase text-[#2A2A24] leading-tight">
              CALCULATE YOUR BATCH INVESTMENT
            </h3>
            <p className="font-body text-xs sm:text-sm text-[#55544D] max-w-xl">
              Get an instant real-time rate for your symposium, department merch, sports club, or personal group batch.
            </p>
          </div>

          <div className="bg-[#FAF8F0] border border-[#E6E2D3] px-4 py-2 rounded text-right shrink-0">
            <span className="font-mono text-[10px] text-[#66645A] uppercase block">MINIMUM THRESHOLD</span>
            <span className="font-mono text-xs text-[#5A680C] font-bold">5 PIECES (ANY SIZES)</span>
          </div>
        </div>

        {/* 1. Apparel Selection Buttons */}
        <div className="space-y-3">
          <label className="font-mono text-xs font-bold uppercase tracking-wider text-[#66645A] block">
            1. SELECT APPAREL BLANK
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5">
            {eligibleProducts.map((prod) => {
              const isSelected = prod.id === selectedProductId;
              return (
                <button
                  key={prod.id}
                  onClick={() => setSelectedProductId(prod.id)}
                  className={`p-3 rounded text-left transition-all flex flex-col justify-between border ${
                    isSelected
                      ? "bg-primary-container text-text-primary border-primary-container shadow-xs font-bold"
                      : "bg-[#FAF8F0] text-[#2A2A24] border-[#E6E2D3] hover:border-primary-container"
                  }`}
                >
                  <span className="font-headline text-sm uppercase leading-tight line-clamp-2">
                    {prod.name}
                  </span>
                  <span
                    className={`font-mono text-xs font-bold mt-2 ${
                      isSelected ? "text-text-primary" : "text-[#5A680C]"
                    }`}
                  >
                    ₹{prod.price}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* 2. Print Placement & Quantity Slider */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start pt-2">
          
          {/* Left Column: Configuration Controls */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Decoration Option */}
            <div className="space-y-3">
              <label className="font-mono text-xs font-bold uppercase tracking-wider text-[#66645A] block">
                2. PRINT PLACEMENT / TECHNIQUE
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                <button
                  type="button"
                  onClick={() => setPlacement("standard")}
                  className={`p-3 rounded text-left border font-mono text-xs transition-all ${
                    placement === "standard"
                      ? "bg-[#FFFFFF] text-[#2A2A24] border-2 border-[#2A2A24] font-bold shadow-xs"
                      : "bg-[#FAF8F0] text-[#2A2A24] border-[#E6E2D3]"
                  }`}
                >
                  <span className="block font-bold">Standard Single Print</span>
                  <span className="text-[10px] text-[#66645A]">Included in base rate</span>
                </button>

                <button
                  type="button"
                  onClick={() => setPlacement("double")}
                  className={`p-3 rounded text-left border font-mono text-xs transition-all ${
                    placement === "double"
                      ? "bg-[#FFFFFF] text-[#2A2A24] border-2 border-[#2A2A24] font-bold shadow-xs"
                      : "bg-[#FAF8F0] text-[#2A2A24] border-[#E6E2D3]"
                  }`}
                >
                  <span className="block font-bold">Front + Large Back (+₹80)</span>
                  <span className="text-[10px] text-[#66645A]">Streetwear standard</span>
                </button>

                <button
                  type="button"
                  onClick={() => setPlacement("embroidery")}
                  className={`p-3 rounded text-left border font-mono text-xs transition-all ${
                    placement === "embroidery"
                      ? "bg-[#FFFFFF] text-[#2A2A24] border-2 border-[#2A2A24] font-bold shadow-xs"
                      : "bg-[#FAF8F0] text-[#2A2A24] border-[#E6E2D3]"
                  }`}
                >
                  <span className="block font-bold">Embroidery (+₹60)</span>
                  <span className="text-[10px] text-[#66645A]">Tactile stitched badge</span>
                </button>
              </div>
            </div>

            {/* Quantity Slider & Pills */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <label className="font-mono text-xs font-bold uppercase tracking-wider text-[#66645A]">
                  3. BATCH QUANTITY: <span className="text-[#5A680C] text-sm font-bold">{quantity} PIECES</span>
                </label>
                <span className="text-xs font-mono text-[#66645A]">Min 5 pcs</span>
              </div>

              {/* Slider Input */}
              <input
                type="range"
                min={5}
                max={150}
                step={1}
                value={quantity}
                onChange={(e) => setQuantity(parseInt(e.target.value) || 5)}
                className="w-full accent-primary-container cursor-pointer h-2 bg-[#E6E2D3] rounded-lg"
              />

              {/* Quick Preset Buttons */}
              <div className="flex flex-wrap items-center gap-2 pt-1">
                <span className="text-[10px] font-mono text-[#66645A] uppercase mr-1">Quick Select:</span>
                {quickQuantities.map((preset) => (
                  <button
                    key={preset}
                    type="button"
                    onClick={() => setQuantity(preset)}
                    className={`font-mono text-xs px-2.5 py-1 rounded border transition-colors ${
                      quantity === preset
                        ? "bg-primary-container text-text-primary font-bold border-primary-container shadow-xs"
                        : "bg-[#FAF8F0] text-[#2A2A24] border-[#E6E2D3] hover:border-primary-container"
                    }`}
                  >
                    {preset} PCS
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Calculated Summary Box */}
          <div className="lg:col-span-5 bg-[#FAF8F0] p-6 rounded border border-[#E6E2D3] space-y-6 shadow-xs">
            <div className="space-y-2 border-b border-[#E6E2D3] pb-4">
              <span className="font-mono text-[10px] uppercase tracking-widest text-[#5A680C] font-bold block">
                ESTIMATED BATCH INVESTMENT
              </span>
              <div className="flex items-baseline justify-between">
                <span className="font-headline text-5xl sm:text-6xl text-[#2A2A24]">
                  ₹{totalEstimatedCost.toLocaleString("en-IN")}
                </span>
                <span className="font-mono text-xs text-[#66645A]">
                  (₹{unitRate}/piece)
                </span>
              </div>
              <p className="font-mono text-[11px] text-[#66645A]">
                {quantity} × {selectedProduct.name} ({placement === "double" ? "Front + Back" : placement === "embroidery" ? "Embroidered" : "Standard"})
              </p>
            </div>

            {/* Perks */}
            <div className="space-y-2 font-mono text-xs text-[#55544D]">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#5A680C] shrink-0" />
                <span>Sizes S to 2XL mixed freely within batch</span>
              </div>
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#5A680C] shrink-0" />
                <span>High-density wash-durable print cure</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[16px] text-[#5A680C] shrink-0">local_shipping</span>
                <span>ST Courier dispatch in 3–7 working days</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="space-y-3 pt-2">
              <a
                href={`https://wa.me/91${BUSINESS_FACTS.contact.whatsapp}?text=${whatsAppMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 bg-primary-container text-text-primary py-3.5 px-4 font-headline text-lg uppercase tracking-wider rounded hover:bg-primary-fixed active:scale-95 transition-all shadow-[2px_2px_0px_#2A2A24]"
              >
                <MessageCircle className="w-5 h-5" />
                <span>ORDER THIS BATCH ON WHATSAPP →</span>
              </a>

              <Link
                to={`/custom-order?product=${selectedProduct.id}`}
                className="w-full inline-flex items-center justify-center gap-2 bg-[#FFFFFF] text-[#2A2A24] py-2.5 px-4 font-mono text-xs uppercase tracking-wider rounded hover:bg-[#FAF8F0] transition-colors border border-[#E6E2D3]"
              >
                <span>OPEN REQUIREMENT FORM</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
