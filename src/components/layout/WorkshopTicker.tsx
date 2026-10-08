import React from "react";

interface WorkshopTickerProps {
  className?: string;
}

export const WorkshopTicker: React.FC<WorkshopTickerProps> = ({ className = "" }) => {
  const items = [
    "⚡ BROVE PHYSICAL APPAREL LAB",
    "MINIMUM ORDER: 5 PIECES",
    "240+ GSM HEAVYWEIGHT COMBED COTTON",
    "HIGH-PRECISION DTF PRINTING",
    "TACTILE EMBROIDERY",
    "DISPATCH PAN-INDIA VIA ST COURIER (3–7 DAYS)",
    "MIX SIZES FREELY (S TO 2XL)",
    "ACID WASH & MINERAL TEXTURES",
    "NO AUTOMATED CARTS • TALK TO CRAFTSMEN",
    "OFFICIAL COIMBATORE STUDIO",
  ];

  return (
    <div
      className={`w-full bg-primary-container text-text-primary border-y-2 border-surface-dark overflow-hidden py-2 select-none z-20 ${className}`}
      aria-label="BROVE Studio Announcements"
    >
      <div className="flex whitespace-nowrap animate-marquee font-mono text-xs font-bold uppercase tracking-wider">
        <div className="flex items-center gap-6 shrink-0 pr-6">
          {items.map((item, idx) => (
            <React.Fragment key={`ticker-1-${idx}`}>
              <span>{item}</span>
              <span className="w-1.5 h-1.5 rounded-full bg-surface-dark inline-block opacity-60"></span>
            </React.Fragment>
          ))}
        </div>
        <div className="flex items-center gap-6 shrink-0 pr-6" aria-hidden="true">
          {items.map((item, idx) => (
            <React.Fragment key={`ticker-2-${idx}`}>
              <span>{item}</span>
              <span className="w-1.5 h-1.5 rounded-full bg-surface-dark inline-block opacity-60"></span>
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};
