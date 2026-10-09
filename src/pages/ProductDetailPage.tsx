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
      <div className="py-24 text-center space-y-4 bg-surface-paper dark:bg-surface-dark min-h-[60vh] flex flex-col justify-center items-center">
        <h1 className="font-headline text-5xl font-bold uppercase text-text-primary dark:text-text-on-dark">
          PRODUCT NOT FOUND
        </h1>
        <p className="font-body text-text-muted">The requested garment canvas does not exist in our studio catalogue.</p>
        <Link
          to="/wardrobe"
          className="inline-flex items-center gap-2 bg-primary-container text-text-primary px-6 py-3 font-headline text-sm uppercase tracking-wider font-bold shadow-[2px_2px_0px_#171717] hover:bg-primary-fixed transition-all"
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

      <div className="flex flex-col w-full bg-surface-paper dark:bg-surface-dark text-text-primary dark:text-text-on-dark pt-20 transition-colors duration-200">
        {/* Studio Sub-Header Breadcrumb Bar */}
        <section className="w-full bg-surface-dark text-text-on-dark py-4 border-b border-surface-dark-secondary">
          <div className="max-w-[1400px] mx-auto px-margin-mobile lg:px-margin flex items-center justify-between text-xs font-mono">
            <nav className="flex items-center gap-2 text-surface-container-high" aria-label="Breadcrumb">
              <Link to="/" className="hover:text-primary-container transition-colors uppercase">HOME</Link>
              <span>/</span>
              <Link to="/wardrobe" className="hover:text-primary-container transition-colors uppercase">WARDROBE</Link>
              <span>/</span>
              <span className="text-primary-container font-bold uppercase">{product.name}</span>
            </nav>
            <div className="hidden sm:flex items-center gap-4 text-surface-container-high">
              <span className="flex items-center gap-1.5 text-primary-container">
                <span className="w-2 h-2 rounded-full bg-primary-container animate-pulse"></span>
                ACTIVE WORKBENCH
              </span>
              <span>MOQ: 5 PIECES</span>
            </div>
          </div>
        </section>

        {/* Main Product Canvas Section */}
        <section className="py-12 md:py-16 border-b border-border-neutral dark:border-surface-dark-secondary">
          <div className="max-w-[1400px] mx-auto px-margin-mobile lg:px-margin">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
              
              {/* Left Column: Visual Presentation Canvas */}
              <div className="lg:col-span-7 space-y-6">
                <div className="relative bg-surface-white dark:bg-surface-dark-secondary border-2 border-text-primary dark:border-surface-dark-secondary rounded-lg p-8 sm:p-12 flex items-center justify-center min-h-[460px] md:min-h-[540px] shadow-[4px_4px_0px_#171717] dark:shadow-[4px_4px_0px_#F2D400] overflow-hidden group">
                  <div className="absolute top-4 left-4 z-10 flex flex-col gap-1.5">
                    <span className="bg-primary-container text-text-primary px-3 py-1 font-mono text-xs uppercase tracking-widest font-bold">
                      {product.fabricWeight || "HEAVYWEIGHT COTTON"}
                    </span>
                    <span className="bg-surface-dark text-text-on-dark px-3 py-1 font-mono text-xs uppercase tracking-widest font-bold">
                      {product.category.toUpperCase()}
                    </span>
                  </div>

                  <img
                    src={product.referenceImages[0] || product.image}
                    alt={product.name}
                    className="w-full max-h-[460px] object-contain drop-shadow-2xl transition-transform duration-300 group-hover:scale-105"
                  />

                  <div className="absolute bottom-4 right-4 bg-surface-dark/90 text-text-on-dark px-3 py-1.5 rounded font-mono text-[11px] uppercase tracking-wider backdrop-blur-sm">
                    COLOR: {product.availableColors[selectedColorIndex]?.name.toUpperCase() || "CORE"}
                  </div>
                </div>

                {/* Real reference work samples if available */}
                {product.referenceImages && product.referenceImages.length > 0 && (
                  <div className="bg-surface-white dark:bg-surface-dark-secondary p-4 rounded-lg border-2 border-text-primary dark:border-surface-dark-secondary shadow-[3px_3px_0px_#171717] dark:shadow-[3px_3px_0px_#F2D400] space-y-3">
                    <span className="font-mono text-xs uppercase font-bold text-text-primary dark:text-text-on-dark block">
                      ACTUAL BROVE PRINT SAMPLES ON THIS APPAREL:
                    </span>
                    <div className="grid grid-cols-3 gap-2">
                      {product.referenceImages.slice(0, 3).map((img, idx) => (
                        <div key={idx} className="aspect-square rounded overflow-hidden border border-border-neutral dark:border-surface-dark bg-black">
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
                    <span className="font-mono text-xs uppercase tracking-widest text-text-muted font-bold">
                      AUTHENTIC WORKSHOP CANVAS
                    </span>
                  </div>

                  <h1 className="font-headline text-5xl md:text-6xl uppercase text-text-primary dark:text-text-on-dark leading-none tracking-tight">
                    {product.name}
                  </h1>

                  <div className="flex items-baseline gap-4 pt-2">
                    <span className="font-headline text-5xl text-primary-container bg-surface-dark px-3 py-1 rounded">
                      {formatPrice(product.price, product.pricingType)}
                    </span>
                    <span className="font-mono text-xs uppercase text-text-muted font-bold">
                      PER PIECE (MIN. 5 UNITS)
                    </span>
                  </div>

                  <p className="font-body text-base text-text-muted leading-relaxed pt-2">
                    {product.description}
                  </p>
                </div>

                {/* Color Selection Palette */}
                <div className="space-y-3 pt-4 border-t border-border-neutral dark:border-surface-dark-secondary">
                  <div className="flex items-center justify-between font-mono text-xs">
                    <span className="font-bold text-text-primary dark:text-text-on-dark uppercase">SELECT CANVAS SHADE:</span>
                    <span className="text-text-muted font-bold uppercase">
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
                            ? "border-text-primary dark:border-primary-container bg-surface-white dark:bg-surface-dark shadow-[2px_2px_0px_#171717]"
                            : "border-border-neutral dark:border-surface-dark-secondary bg-surface-white dark:bg-surface-dark hover:border-text-primary"
                        }`}
                      >
                        <span
                          className="w-4 h-4 rounded-full border border-border-neutral shrink-0"
                          style={{ backgroundColor: color.hex }}
                        />
                        <span className="text-xs font-mono font-bold uppercase text-text-primary dark:text-text-on-dark">{color.name}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Available Sizes Specification */}
                <div className="space-y-3 pt-2">
                  <div className="flex items-center justify-between font-mono text-xs">
                    <span className="font-bold text-text-primary dark:text-text-on-dark uppercase">AVAILABLE SIZES:</span>
                    <span className="text-text-muted font-bold">MIX SIZES FREELY IN 5-PIECE RUN</span>
                  </div>
                  <div className="flex flex-wrap gap-2 font-mono text-xs font-bold">
                    {product.availableSizes.map((size) => (
                      <span
                        key={size}
                        className="bg-surface-white dark:bg-surface-dark border-2 border-text-primary dark:border-surface-dark-secondary px-3.5 py-1.5 shadow-[1px_1px_0px_#171717] dark:shadow-[1px_1px_0px_#F2D400]"
                      >
                        {size}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Technical Specifications */}
                {product.details && product.details.length > 0 && (
                  <div className="space-y-2 pt-4 border-t border-border-neutral dark:border-surface-dark-secondary">
                    <span className="font-mono text-xs uppercase text-text-primary dark:text-text-on-dark font-bold block mb-2">
                      FABRIC SPECIFICATIONS &amp; CUT:
                    </span>
                    <ul className="space-y-2 font-body text-sm text-text-muted">
                      {product.details.map((detail) => (
                        <li key={detail} className="flex items-start gap-2.5">
                          <Check className="w-4 h-4 text-primary-container shrink-0 mt-0.5" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Proof & Logistics Badges */}
                <div className="grid grid-cols-2 gap-3 pt-4 border-t border-border-neutral dark:border-surface-dark-secondary font-mono text-xs">
                  <div className="flex items-center gap-2 bg-surface-white dark:bg-surface-dark-secondary p-3 rounded border border-border-neutral dark:border-surface-dark font-bold text-text-primary dark:text-text-on-dark">
                    <ShieldCheck className="w-4 h-4 text-primary-container shrink-0" />
                    <span>STRICT 5-PIECE MOQ</span>
                  </div>
                  <div className="flex items-center gap-2 bg-surface-white dark:bg-surface-dark-secondary p-3 rounded border border-border-neutral dark:border-surface-dark font-bold text-text-primary dark:text-text-on-dark">
                    <Truck className="w-4 h-4 text-primary-container shrink-0" />
                    <span>ST COURIER 3–7 DAYS</span>
                  </div>
                </div>

                {/* Primary Action Buttons */}
                <div className="space-y-3 pt-2">
                  <button
                    onClick={() => navigate(`/custom-order?product=${product.id}`)}
                    className="w-full inline-flex items-center justify-center gap-3 bg-primary-container text-text-primary py-4 px-8 font-headline text-xl sm:text-2xl uppercase tracking-wider shadow-[4px_4px_0px_#171717] dark:shadow-[4px_4px_0px_#FFFFFF] hover:bg-primary-fixed active:scale-95 transition-all border-2 border-text-primary"
                  >
                    <span>SEND YOUR REQUIREMENT FOR THIS APPAREL →</span>
                    <ArrowRight className="w-6 h-6" />
                  </button>

                  <a
                    href={`https://wa.me/91${BUSINESS_FACTS.contact.whatsapp}?text=Hello%20BROVE,%20I%20am%20interested%20in%20customizing%20${encodeURIComponent(product.name)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 bg-surface-dark text-text-on-dark py-3 px-6 font-mono text-xs uppercase tracking-wider font-bold hover:bg-surface-dark-secondary transition-all"
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
