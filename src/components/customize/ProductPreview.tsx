import React from "react";
import { Product, PrintMethodType } from "../../types";

interface ProductPreviewProps {
  product: Product;
  selectedColorHex: string;
  printMethod: PrintMethodType;
  artworkUrl: string | null;
}

export const ProductPreview: React.FC<ProductPreviewProps> = ({
  product,
  selectedColorHex,
  printMethod,
  artworkUrl,
}) => {
  return (
    <div className="bg-white border-2 border-brove-charcoal p-6 relative flex flex-col items-center justify-center min-h-[420px] shadow-[6px_6px_0px_0px_rgba(23,23,23,1)]">
      {/* Print Method & Color Badge Header */}
      <div className="absolute top-4 left-4 right-4 flex justify-between items-center font-mono text-xs z-10">
        <span className="bg-brove-yellow text-brove-charcoal px-2.5 py-1 font-bold border border-brove-charcoal">
          {printMethod === "dtf" ? "DTF PRINTING" : "EMBROIDERY"}
        </span>
        <div className="flex items-center gap-2 bg-brove-paper px-2 py-1 border border-brove-border">
          <span
            className="w-3.5 h-3.5 rounded-full border border-brove-charcoal"
            style={{ backgroundColor: selectedColorHex }}
          />
          <span className="font-bold text-[10px] text-brove-charcoal uppercase">PREVIEW</span>
        </div>
      </div>

      {/* Vector Canvas Container */}
      <div className="relative w-full max-w-[340px] aspect-square flex items-center justify-center my-6">
        {/* Background Apparel Image */}
        <img
          src={product.image}
          alt={`${product.name} Preview`}
          className="w-full h-full object-contain filter drop-shadow-md"
        />

        {/* Live Artwork Overlay inside Print Area */}
        {artworkUrl ? (
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-[120px] h-[140px] border-2 border-brove-yellow border-dashed flex items-center justify-center bg-white/40 p-2 overflow-hidden shadow-inner">
              <img
                src={artworkUrl}
                alt="Uploaded Custom Design Artwork"
                className="max-w-full max-h-full object-contain filter drop-shadow"
              />
            </div>
          </div>
        ) : (
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-[130px] h-[150px] border-2 border-brove-yellow/60 border-dashed flex flex-col items-center justify-center text-center p-2">
              <span className="font-mono text-[10px] text-brove-ink font-bold">
                {printMethod === "dtf" ? "YOUR ARTWORK HERE" : "YOUR EMBROIDERY LOGO"}
              </span>
            </div>
          </div>
        )}
      </div>

      {/* Footer Info */}
      <div className="w-full pt-4 border-t border-brove-border flex justify-between items-center text-xs font-mono text-brove-ink">
        <span>{product.name}</span>
        <span className="font-bold text-brove-charcoal">MIN 5 PCS</span>
      </div>
    </div>
  );
};
