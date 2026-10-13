import React, { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { SEOHead } from "../components/layout/SEOHead";
import { getProductById } from "../data/products";
import { BUSINESS_FACTS } from "../data/brove-content";
import { formatPrice } from "../lib/utils";
import { ArrowRight, ShieldCheck, Check, Truck, MessageCircle } from "lucide-react";

export const ProductDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const product = getProductById(id || "");
  const [selectedColorIndex, setSelectedColorIndex] = useState(0);

  if (!product) {
    return (
      <div className="py-24 text-center space-y-4 bg-transparent text-[#2A2A24] min-h-[60vh] flex flex-col justify-center items-center">
        <h1 className="font-headline text-5xl font-bold uppercase text-[#2A2A24]">
          PRODUCT NOT FOUND
        </h1>
        <p className="font-body text-[#55544D]">The requested garment canvas does not exist in our studio catalogue.</p>
        <Link
          to="/wardrobe"
          className="inline-flex items-center gap-2 bg-primary-container text-text-primary px-6 py-3 font-headline text-sm uppercase tracking-wider font-bold shadow-[2px_2px_0px_rgba(42,42,36,0.12)] border border-[#2A2A24] hover:bg-primary-fixed transition-all"
        >
          Return to Wardrobe
        </Link>
      </div>
    );
  }

  return (
    <>
      <SEOHead
        title={`${product.name} : BROVE Streetwear Custom Apparel`}
        description={`${product.description} Available for direct DTF printing and high-density 3D embroidery. 5-piece minimum order quantity.`}
        path={`/product/${product.id}`}
      />

      <div className="flex flex-col w-full bg-transparent text-[#2A2A24] pt-20 transition-colors duration-200">
        {/* Studio Sub-Header Breadcrumb Bar */}
        <section className="w-full bg-[#FAF8F0] text-[#2A2A24] py-4 border-b border-[#E6E2D3]">
          <div className="max-w-[1400px] mx-auto px-margin-mobile lg:px-margin flex items-center justify-between text-xs font-mono">
            <nav className="flex items-center gap-2 text-[#66645A]" aria-label="Breadcrumb">
              <Link to="/" className="hover:text-[#2A2A24] transition-colors uppercase">HOME</Link>
              <span>/</span>
              <Link to="/wardrobe" className="hover:text-[#2A2A24] transition-colors uppercase">WARDROBE</Link>
              <span>/</span>
              <span className="text-[#2A2A24] font-bold uppercase">{product.name}</span>
            </nav>
            <div className="hidden sm:flex items-center gap-4 text-[#66645A]">
              <span className="flex items-center gap-1.5 text-[#5A680C] font-bold">
                <span className="w-2 h-2 rounded-full bg-primary-container animate-pulse"></span>
                ACTIVE WORKBENCH
              </span>
              <span>MOQ: 5 PIECES</span>
            </div>
          </div>
        </section>

        {/* Main Product Canvas Section */}
        <section className="py-12 md:py-16 border-b border-[#E6E2D3]">
          <div className="max-w-[1400px] mx-auto px-margin-mobile lg:px-margin">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
              
              {/* Left Column: Visual Presentation Canvas */}
              <div className="lg:col-span-7 space-y-6">
                <div className="relative bg-[#FFFFFF] border-2 border-[#E6E2D3] rounded-lg p-8 sm:p-12 flex items-center justify-center min-h-[460px] md:min-h-[540px] shadow-[0_4px_24px_rgba(42,42,36,0.06)] overflow-hidden group">
                  <div className="absolute top-4 left-4 z-10 flex flex-col gap-1.5">
                    <span className="bg-primary-container text-text-primary px-3 py-1 font-mono text-xs uppercase tracking-widest font-bold shadow-xs">
                      {product.fabricWeight || "HEAVYWEIGHT COTTON"}
                    </span>
                    <span className="bg-[#FAF8F0] text-[#2A2A24] border border-[#E6E2D3] px-3 py-1 font-mono text-xs uppercase tracking-widest font-bold">
                      {product.category.toUpperCase()}
                    </span>
                  </div>

                  <img
                    src={product.referenceImages[0] || product.image}
                    alt={product.name}
                    className="w-full max-h-[460px] object-contain drop-shadow-md transition-transform duration-300 group-hover:scale-105"
                  />

                  <div className="absolute bottom-4 right-4 bg-[#FAF8F0]/90 text-[#2A2A24] border border-[#E6E2D3] px-3 py-1.5 rounded font-mono text-[11px] uppercase tracking-wider backdrop-blur-sm">
                    COLOR: {product.availableColors[selectedColorIndex]?.name.toUpperCase() || "CORE"}
                  </div>
                </div>

                {/* Real reference work samples if available */}
                {product.referenceImages && product.referenceImages.length > 0 && (
                  <div className="bg-[#FFFFFF] p-4 rounded-lg border-2 border-[#E6E2D3] shadow-[0_2px_12px_rgba(42,42,36,0.06)] space-y-3">
                    <span className="font-mono text-xs uppercase font-bold text-[#2A2A24] block">
                      ACTUAL BROVE PRINT SAMPLES ON THIS APPAREL:
                    </span>
                    <div className="grid grid-cols-3 gap-2">
                      {product.referenceImages.slice(0, 3).map((img, idx) => (
                        <div key={idx} className="aspect-square rounded overflow-hidden border border-[#E6E2D3] bg-[#FAF8F0]">
                          <img
                            src={img}
                            alt={`${product.name} sample ${idx + 1}`}
                            className="w-full h-full object-cover hover:scale-105 transition-transform"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Right Column: Specification & Action Workbench */}
              <div className="lg:col-span-5 space-y-8">
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 bg-primary-container"></span>
                    <span className="font-mono text-xs uppercase tracking-widest text-[#66645A] font-bold">
                      AUTHENTIC WORKSHOP CANVAS
                    </span>
                  </div>

                  <h1 className="font-headline text-5xl md:text-6xl uppercase text-[#2A2A24] leading-none tracking-tight">
                    {product.name}
                  </h1>

                  <div className="flex items-baseline gap-4 pt-2">
                    <span className="font-headline text-5xl text-[#2A2A24] bg-primary-container px-3 py-1 rounded shadow-xs">
                      {formatPrice(product.price, product.pricingType)}
                    </span>
                    <span className="font-mono text-xs uppercase text-[#66645A] font-bold">
                      PER PIECE (MIN. 5 UNITS)
                    </span>
                  </div>

                  <p className="font-body text-base text-[#55544D] leading-relaxed pt-2">
                    {product.description}
                  </p>
                </div>

                {/* Color Selection Palette */}
                <div className="space-y-3 pt-4 border-t border-[#E6E2D3]">
                  <div className="flex items-center justify-between font-mono text-xs">
                    <span className="font-bold text-[#2A2A24] uppercase">SELECT CANVAS SHADE:</span>
                    <span className="text-[#66645A] font-bold uppercase">
                      {product.availableColors[selectedColorIndex]?.name}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {product.availableColors.map((color, idx) => (
                      <button
                        key={color.name}
                        onClick={() => setSelectedColorIndex(idx)}
                        className={`flex items-center gap-2 px-3.5 py-2 rounded border-2 transition-all ${
                          selectedColorIndex === idx
                            ? "border-[#2A2A24] bg-[#FFFFFF] shadow-xs"
                            : "border-[#E6E2D3] bg-[#FAF8F0] hover:border-[#2A2A24]"
                        }`}
                      >
                        <span
                          className="w-4 h-4 rounded-full border border-[#E6E2D3] shrink-0"
                          style={{ backgroundColor: color.hex }}
                        />
                        <span className="text-xs font-mono font-bold uppercase text-[#2A2A24]">{color.name}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Available Sizes Specification */}
                <div className="space-y-3 pt-2">
                  <div className="flex items-center justify-between font-mono text-xs">
                    <span className="font-bold text-[#2A2A24] uppercase">AVAILABLE SIZES:</span>
                    <span className="text-[#66645A] font-bold">MIX SIZES FREELY IN 5-PIECE RUN</span>
                  </div>
                  <div className="flex flex-wrap gap-2 font-mono text-xs font-bold">
                    {product.availableSizes.map((size) => (
                      <span
                        key={size}
                        className="bg-[#FFFFFF] border border-[#E6E2D3] text-[#2A2A24] px-3.5 py-1.5 shadow-xs rounded"
                      >
                        {size}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Technical Specifications */}
                {product.details && product.details.length > 0 && (
                  <div className="space-y-2 pt-4 border-t border-[#E6E2D3]">
                    <span className="font-mono text-xs uppercase text-[#2A2A24] font-bold block mb-2">
                      FABRIC SPECIFICATIONS &amp; CUT:
                    </span>
                    <ul className="space-y-2 font-body text-sm text-[#55544D]">
                      {product.details.map((detail) => (
                        <li key={detail} className="flex items-start gap-2.5">
                          <Check className="w-4 h-4 text-[#5A680C] shrink-0 mt-0.5" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Proof & Logistics Badges */}
                <div className="grid grid-cols-2 gap-3 pt-4 border-t border-[#E6E2D3] font-mono text-xs">
                  <div className="flex items-center gap-2 bg-[#FAF8F0] p-3 rounded border border-[#E6E2D3] font-bold text-[#2A2A24]">
                    <ShieldCheck className="w-4 h-4 text-[#5A680C] shrink-0" />
                    <span>STRICT 5-PIECE MOQ</span>
                  </div>
                  <div className="flex items-center gap-2 bg-[#FAF8F0] p-3 rounded border border-[#E6E2D3] font-bold text-[#2A2A24]">
                    <Truck className="w-4 h-4 text-[#5A680C] shrink-0" />
                    <span>ST COURIER 3–7 DAYS</span>
                  </div>
                </div>

                {/* Primary Action Buttons */}
                <div className="space-y-3 pt-2">
                  <button
                    onClick={() => navigate(`/custom-order?product=${product.id}`)}
                    className="w-full inline-flex items-center justify-center gap-3 bg-primary-container text-text-primary py-4 px-8 font-headline text-xl sm:text-2xl uppercase tracking-wider shadow-[2px_2px_0px_#2A2A24] hover:bg-primary-fixed active:scale-95 transition-all border-2 border-primary-container"
                  >
                    <span>SEND YOUR REQUIREMENT FOR THIS APPAREL →</span>
                    <ArrowRight className="w-6 h-6" />
                  </button>

                  <a
                    href={`https://wa.me/91${BUSINESS_FACTS.contact.whatsapp}?text=Hello%20BROVE,%20I%20am%20interested%20in%20customizing%20${encodeURIComponent(product.name)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 bg-[#2A2A24] text-[#FAF8F0] py-3 px-6 font-mono text-xs uppercase tracking-wider font-bold hover:bg-[#3A3A34] transition-all shadow-[2px_2px_0px_#FFFFFF] rounded"
                  >
                    <MessageCircle className="w-4 h-4 text-primary-container" />
                    <span>CONSULT PRINTER ON WHATSAPP: {BUSINESS_FACTS.contact.phone}</span>
                  </a>
                </div>
              </div>

            </div>
          </div>
        </section>
      </div>
    </>
  );
};
