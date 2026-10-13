import React from "react";
import { Link } from "react-router-dom";
import { BRAND_LOGO, BUSINESS_FACTS } from "../../data/brove-content";
import { CopyButton } from "../ui/CopyButton";

export const Footer: React.FC = () => {
  const catalogueItems = [
    { name: "Regular Fit T-Shirt", price: "₹350", path: "/wardrobe#regular-fit-tshirt" },
    { name: "Oversized T-Shirt", price: "₹450", path: "/wardrobe#oversized-tshirt" },
    { name: "Oversized Acid Wash", price: "₹500", path: "/wardrobe#oversized-acid-wash-tshirt" },
    { name: "Polo T-Shirt", price: "₹360", path: "/wardrobe#polo-tshirt" },
    { name: "Hoodie", price: "₹800", path: "/wardrobe#hoodie" },
    { name: "Sweatshirt Full Hand", price: "₹500", path: "/wardrobe#sweatshirt-full-hand" },
    { name: "Shirts", price: "Custom Pricing", path: "/wardrobe#shirts" },
  ];

  return (
    <footer className="relative z-20 w-full bg-[#FAF8F0] text-[#2A2A24] border-t-4 border-primary-container shadow-sm">
      <div className="max-w-[1400px] mx-auto px-margin-mobile lg:px-margin pt-16 pb-12 space-y-12">
        
        {/* Top Header Strip */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-12 border-b border-[#E6E2D3]">
          <div className="flex items-center gap-4">
            <Link to="/" aria-label="BROVE Custom Apparel Home">
              <img
                src={BRAND_LOGO}
                alt="BROVE Logo"
                className="h-14 sm:h-16 w-auto object-contain shrink-0"
              />
            </Link>
            <div className="space-y-0.5">
              <p className="font-headline text-4xl sm:text-5xl uppercase text-[#2A2A24] leading-none tracking-tight">
                BROVE
              </p>
              <p className="font-headline text-lg sm:text-xl uppercase tracking-wider text-[#2A2A24]">
                WEAR YOUR IDENTITY.
              </p>
              <p className="font-mono text-xs text-[#66645A]">
                Custom apparel. Custom printing. Your identity.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <div className="bg-primary-container text-text-primary px-3 py-1 font-mono text-xs font-bold uppercase tracking-wider rounded shadow-xs">
              MINIMUM ORDER: 5 PIECES
            </div>
            <div className="bg-[#FFFFFF] text-[#2A2A24] px-3 py-1 font-mono text-xs uppercase tracking-wider rounded border border-[#E6E2D3] shadow-xs">
              ST COURIER • 3–7 DAYS • ALL INDIA
            </div>
          </div>
        </div>

        {/* 4 Column Structure */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Col 1: Navigation */}
          <div className="space-y-4">
            <p className="font-mono text-xs uppercase tracking-widest text-[#5A680C] font-bold">
              NAVIGATION
            </p>
            <ul className="space-y-2 text-sm font-bold uppercase tracking-wider">
              <li><Link className="text-[#2A2A24] hover:text-[#5A680C] transition-colors" to="/">HOME</Link></li>
              <li><Link className="text-[#2A2A24] hover:text-[#5A680C] transition-colors" to="/wardrobe">WARDROBE</Link></li>
              <li><Link className="text-[#2A2A24] hover:text-[#5A680C] transition-colors" to="/process">PROCESS</Link></li>
              <li><Link className="text-[#2A2A24] hover:text-[#5A680C] transition-colors" to="/pricing">PRICING</Link></li>
              <li><Link className="text-[#2A2A24] hover:text-[#5A680C] transition-colors" to="/about">ABOUT</Link></li>
              <li><Link className="text-[#2A2A24] hover:text-[#5A680C] transition-colors" to="/contact">CONTACT</Link></li>
              <li><Link className="text-[#2A2A24] hover:text-[#5A680C] transition-colors" to="/#faq">FAQ</Link></li>
            </ul>
          </div>

          {/* Col 2: Catalogue */}
          <div className="space-y-4">
            <p className="font-mono text-xs uppercase tracking-widest text-[#5A680C] font-bold">
              CATALOGUE
            </p>
            <ul className="space-y-2 text-xs font-mono">
              {catalogueItems.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className="hover:text-[#5A680C] transition-colors flex items-center justify-between gap-2"
                  >
                    <span className="text-[#2A2A24]">{item.name}</span>
                    <span className="text-[#5A680C] font-bold shrink-0">{item.price}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Contact */}
          <div className="space-y-4">
            <p className="font-mono text-xs uppercase tracking-widest text-[#5A680C] font-bold">
              CONTACT &amp; STUDIO
            </p>
            <div className="space-y-3 font-mono text-xs">
              <div className="flex items-center justify-between gap-2">
                <a href={`tel:${BUSINESS_FACTS.contact.phone}`} className="text-[#2A2A24] hover:text-[#5A680C]">
                  {BUSINESS_FACTS.contact.phone}
                </a>
                <CopyButton textToCopy={BUSINESS_FACTS.contact.phone} />
              </div>

              <div className="flex items-center justify-between gap-2">
                <a
                  href={`https://wa.me/91${BUSINESS_FACTS.contact.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#2A2A24] hover:text-[#5A680C]"
                >
                  WhatsApp: {BUSINESS_FACTS.contact.whatsapp}
                </a>
                <CopyButton textToCopy={BUSINESS_FACTS.contact.whatsapp} />
              </div>

              <div className="flex items-center justify-between gap-2">
                <a
                  href={BUSINESS_FACTS.contact.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#2A2A24] hover:text-[#5A680C]"
                >
                  @{BUSINESS_FACTS.contact.instagram}
                </a>
                <CopyButton textToCopy={`@${BUSINESS_FACTS.contact.instagram}`} />
              </div>

              <div className="flex items-center justify-between gap-2">
                <a
                  href={`mailto:${BUSINESS_FACTS.contact.email}`}
                  className="text-[#2A2A24] hover:text-[#5A680C] truncate"
                >
                  {BUSINESS_FACTS.contact.email}
                </a>
                <CopyButton textToCopy={BUSINESS_FACTS.contact.email} />
              </div>

              {/* Official Google Maps Directions Link & Physical Address */}
              <div className="pt-2 border-t border-[#E6E2D3] space-y-1.5">
                <span className="text-[#5A680C] uppercase block text-[10px] tracking-wider font-bold">
                  STUDIO ATELIER
                </span>
                <p className="text-[#66645A] leading-tight text-[11px]">
                  M90, TNHB colony, Stage 3, KTC Nagar, Tirunelveli, Tamil Nadu 627011
                </p>
                <div className="pt-1">
                  <a
                    href={BUSINESS_FACTS.contact.locationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-[#2A2A24] hover:text-[#5A680C] font-bold tracking-wider uppercase transition-colors text-[11px]"
                  >
                    <span>📍 GET DIRECTIONS (TIRUNELVELI) ↗</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Col 4: Studio Delivery & Notice */}
          <div className="space-y-4">
            <p className="font-mono text-xs uppercase tracking-widest text-[#5A680C] font-bold">
              DELIVERY &amp; MOQ
            </p>
            <div className="bg-[#FFFFFF] p-4 rounded space-y-3 border border-[#E6E2D3] font-mono text-xs shadow-xs text-[#2A2A24]">
              <div className="space-y-1">
                <span className="text-[#2A2A24] font-bold uppercase block">ST COURIER</span>
                <p className="text-[#66645A]">3–7 DAYS DELIVERY • ALL OVER INDIA</p>
              </div>

              <div className="pt-2 border-t border-[#E6E2D3] space-y-1">
                <span className="text-[#2A2A24] font-bold uppercase block">MINIMUM ORDER</span>
                <p className="text-[#5A680C] font-bold">5 PIECES PER ORDER</p>
              </div>

              <div className="pt-2">
                <Link
                  to="/custom-order"
                  className="w-full inline-flex items-center justify-center py-2 px-3 bg-primary-container text-text-primary font-headline text-xs uppercase tracking-wider rounded hover:bg-primary-fixed transition-colors shadow-[2px_2px_0px_#2A2A24]"
                >
                  SEND YOUR REQUIREMENT →
                </Link>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Legal & Copyright Strip */}
        <div className="pt-8 border-t border-[#E6E2D3] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#66645A]">
          <p>© {new Date().getFullYear()} BROVE. ALL RIGHTS RESERVED.</p>
          <div className="flex items-center gap-4">
            <Link to="/privacy" className="text-[#66645A] hover:text-[#2A2A24] transition-colors">PRIVACY POLICY</Link>
            <span>•</span>
            <Link to="/terms" className="text-[#66645A] hover:text-[#2A2A24] transition-colors">TERMS OF SERVICE</Link>
          </div>
        </div>

      </div>
    </footer>
  );
};
