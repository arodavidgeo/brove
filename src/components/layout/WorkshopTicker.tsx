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
    "OFFICIAL TIRUNELVELI STUDIO",
  ];

  return (
    <div
      data-component="workshop-ticker"
      className={`workshop-ticker w-full bg-[#F2D400] text-[#2A2A24] border-y-2 border-[#2A2A24] overflow-hidden py-2.5 select-none relative z-20 shadow-sm ${className}`}
      style={{ backgroundColor: "#F2D400", background: "#F2D400", color: "#2A2A24" }}
      aria-label="BROVE Studio Announcements"
    >
      <div className="flex whitespace-nowrap animate-marquee font-mono text-xs sm:text-sm font-black uppercase tracking-wider text-[#2A2A24]">
        <div className="flex items-center gap-6 shrink-0 pr-6 text-[#2A2A24]">
          {items.map((item, idx) => (
            <React.Fragment key={`ticker-1-${idx}`}>
              <span className="text-[#2A2A24] font-black">{item}</span>
              <span className="w-2 h-2 rounded-full bg-[#2A2A24] inline-block opacity-80"></span>
            </React.Fragment>
          ))}
        </div>
        <div className="flex items-center gap-6 shrink-0 pr-6 text-[#2A2A24]" aria-hidden="true">
          {items.map((item, idx) => (
            <React.Fragment key={`ticker-2-${idx}`}>
              <span className="text-[#2A2A24] font-black">{item}</span>
              <span className="w-2 h-2 rounded-full bg-[#2A2A24] inline-block opacity-80"></span>
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};
