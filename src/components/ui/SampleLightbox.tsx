import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { X, Sparkles, MessageCircle, ArrowRight } from "lucide-react";
import { WorkSample } from "../../types";
import { BUSINESS_FACTS } from "../../data/brove-content";

interface SampleLightboxProps {
  sample: WorkSample | null;
  onClose: () => void;
}

export const SampleLightbox: React.FC<SampleLightboxProps> = ({ sample, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (sample) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [sample, onClose]);

  if (!sample) return null;

  const whatsAppText = encodeURIComponent(
    `Hello BROVE, I am interested in custom apparel printed like your workshop sample: "${sample.title}" (${sample.apparelType}, ${sample.printMethod}). Can we discuss an order batch?`
  );

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#2A2A24]/40 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="relative w-full max-w-4xl bg-[#FAF8F0] border-2 border-primary-container rounded-lg overflow-hidden shadow-[0_16px_48px_rgba(42,42,36,0.15)] text-[#2A2A24] flex flex-col md:flex-row max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-30 p-2 bg-[#FFFFFF] hover:bg-primary-container hover:text-[#2A2A24] text-[#2A2A24] rounded-full transition-colors border border-[#E6E2D3]"
          aria-label="Close Preview"
        >
          <X className="w-5 h-5" />
        </button>

        {/* High-Res Image Display */}
        <div className="md:w-3/5 bg-[#FAF8F0] flex items-center justify-center p-4 overflow-hidden relative min-h-[300px] md:min-h-[480px]">
          <img
            src={sample.image}
            alt={sample.title}
            className="w-full h-full object-contain max-h-[70vh] rounded"
          />
          <div className="absolute bottom-3 left-3 bg-[#FAF8F0]/90 backdrop-blur-xs border border-[#E6E2D3] text-[#5A680C] font-mono text-[10px] px-2.5 py-1 rounded font-bold uppercase tracking-wider flex items-center gap-1.5 shadow-xs">
            <Sparkles className="w-3 h-3" />
            <span>REAL WORKSHOP PIECE • UNEDITED</span>
          </div>
        </div>

        {/* Sample Technical Details & CTAs */}
        <div className="md:w-2/5 p-6 sm:p-8 flex flex-col justify-between bg-[#FFFFFF] border-t md:border-t-0 md:border-l border-[#E6E2D3] space-y-6 overflow-y-auto">
          <div className="space-y-4">
            <div className="flex flex-wrap items-center gap-2">
              <span className="bg-primary-container text-text-primary font-mono text-[10px] font-bold px-2.5 py-0.5 rounded uppercase tracking-wider">
                {sample.perspectiveLabel}
              </span>
              <span className="bg-[#FAF8F0] text-[#5A680C] font-mono text-[10px] px-2 py-0.5 rounded border border-[#E6E2D3] uppercase font-bold">
                {sample.printMethod}
              </span>
            </div>

            <h3 className="font-headline text-2xl sm:text-3xl uppercase leading-tight text-[#2A2A24]">
              {sample.title}
            </h3>

            <p className="font-mono text-xs text-[#5A680C] font-bold uppercase">
              APPAREL: {sample.apparelType}
            </p>

            {sample.highlight && (
              <div className="bg-[#FAF8F0] p-3.5 rounded border border-[#E6E2D3] text-xs font-mono text-[#2A2A24] leading-relaxed">
                <span className="text-[#5A680C] font-bold block mb-1 uppercase tracking-wider">
                  CRAFT SPECIFICATION:
                </span>
                {sample.highlight}
              </div>
            )}

            {sample.description && (
              <p className="font-body text-xs text-[#66645A] leading-relaxed">
                {sample.description}
              </p>
            )}

            <div className="font-mono text-[11px] text-[#66645A] space-y-1 pt-1">
              <p>• Minimum Order: 5 Pieces</p>
              <p>• Dispatch: ST Courier (3–7 Days Pan-India)</p>
              <p>• Sizing: Mix S to 2XL in same batch</p>
            </div>
          </div>

          <div className="space-y-3 pt-4 border-t border-[#E6E2D3]">
            <a
              href={`https://wa.me/91${BUSINESS_FACTS.contact.whatsapp}?text=${whatsAppText}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 bg-primary-container text-text-primary font-headline text-base uppercase tracking-wider rounded hover:bg-primary-fixed active:scale-95 transition-all shadow-[2px_2px_0px_rgba(42,42,36,0.1)]"
            >
              <MessageCircle className="w-4 h-4" />
              <span>ENQUIRE THIS STYLE ON WHATSAPP</span>
            </a>

            <Link
              to="/custom-order"
              onClick={onClose}
              className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 bg-[#FAF8F0] text-[#2A2A24] font-mono text-xs uppercase tracking-wider rounded hover:bg-[#FFFFFF] transition-colors border border-[#E6E2D3]"
            >
              <span>SUBMIT CUSTOM REQUIREMENT</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
