import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Search, X, ArrowRight, CornerDownLeft } from "lucide-react";
import { PRODUCTS } from "../../data/products";
import { FAQS } from "../../data/faq";

interface SearchResultItem {
  id: string;
  title: string;
  category: "Apparel" | "Methods" | "Information" | "FAQ";
  subtitle: string;
  path: string;
  keywords: string[];
}

interface SiteSearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SEARCH_DATABASE: SearchResultItem[] = [
  // Apparel Products
  ...PRODUCTS.map((prod) => ({
    id: `prod-${prod.id}`,
    title: prod.name,
    category: "Apparel" as const,
    subtitle: `${prod.pricingType === "custom" ? "Custom Pricing" : `₹${prod.price}`} • ${prod.category} • MOQ 5`,
    path: `/wardrobe#${prod.id}`,
    keywords: [
      prod.name.toLowerCase(),
      prod.category.toLowerCase(),
      "tshirt",
      "t-shirt",
      "cotton",
      "garment",
      "blank",
      "price",
      prod.id,
    ],
  })),

  // Techniques & Methods
  {
    id: "method-dtf",
    title: "DTF Printing (Direct-to-Film)",
    category: "Methods",
    subtitle: "VIBRANT. DETAILED. CUSTOM. Multi-color gradients & illustrative graphics",
    path: "/process#dtf",
    keywords: ["dtf", "direct to film", "printing", "print", "colors", "graphics", "vibrant", "gradient"],
  },
  {
    id: "method-embroidery",
    title: "Embroidery (Precision Threadwork)",
    category: "Methods",
    subtitle: "TEXTURE YOU CAN FEEL. Tactile dimensional stitch for logos & polos",
    path: "/process#embroidery",
    keywords: ["embroidery", "stitch", "thread", "tactile", "polo", "hoodie", "logo", "crest"],
  },

  // Information & Workflow
  {
    id: "info-process",
    title: "How It Works (Process)",
    category: "Information",
    subtitle: "Your Idea → We Design → We Print → Quality Check → Delivered",
    path: "/process",
    keywords: ["process", "workflow", "steps", "timeline", "design", "delivery", "st courier"],
  },
  {
    id: "info-pricing",
    title: "Apparel Pricing & Rate Card",
    category: "Information",
    subtitle: "Clear apparel rates starting from ₹350. MOQ 5 pieces",
    path: "/pricing",
    keywords: ["pricing", "price", "rate card", "cost", "moq", "minimum order", "estimate", "quote"],
  },
  {
    id: "info-moq",
    title: "Minimum Order Quantity (MOQ 5)",
    category: "Information",
    subtitle: "Just 5 pieces per batch. Mix sizes freely across the batch",
    path: "/pricing#moq",
    keywords: ["moq", "minimum", "5 pieces", "batch", "quantity"],
  },
  {
    id: "info-gallery",
    title: "Apparel Canvases & Workshop Archive",
    category: "Information",
    subtitle: "Actual physical samples and garments in BROVE wardrobe",
    path: "/wardrobe",
    keywords: ["wardrobe", "samples", "real work", "archive", "photos", "acid wash", "apparel"],
  },
  {
    id: "info-custom-order",
    title: "Send Your Requirement",
    category: "Information",
    subtitle: "Custom apparel requirement form for colleges, teams, and brands",
    path: "/custom-order",
    keywords: ["custom order", "requirement", "enquiry", "quote", "order", "form", "send"],
  },
  {
    id: "info-about",
    title: "About BROVE Studio",
    category: "Information",
    subtitle: "Custom apparel printing studio: Quality, Creativity, Comfort, Affordability",
    path: "/about",
    keywords: ["about", "studio", "manifesto", "brand", "values", "story"],
  },
  {
    id: "info-contact",
    title: "Contact & Studio Location",
    category: "Information",
    subtitle: "Call / WhatsApp: 9443941897 • ashwinkumar412002@gmail.com",
    path: "/contact",
    keywords: ["contact", "phone", "whatsapp", "email", "instagram", "call", "address", "location"],
  },

  // FAQs
  ...FAQS.map((faq, i) => ({
    id: `faq-${i}`,
    title: faq.question,
    category: "FAQ" as const,
    subtitle: faq.answer,
    path: "/#faq",
    keywords: ["faq", "question", "help", ...faq.question.toLowerCase().split(" ")],
  })),
];

export const SiteSearchModal: React.FC<SiteSearchModalProps> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  // Focus input on open
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 50);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      setQuery("");
      setSelectedIndex(0);
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Global '/' keyboard listener
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  // Filter items
  const cleanQuery = query.trim().toLowerCase();
  const results = cleanQuery
    ? SEARCH_DATABASE.filter((item) => {
        const titleMatch = item.title.toLowerCase().includes(cleanQuery);
        const subMatch = item.subtitle.toLowerCase().includes(cleanQuery);
        const kwMatch = item.keywords.some((kw) => kw.includes(cleanQuery));
        return titleMatch || subMatch || kwMatch;
      })
    : SEARCH_DATABASE.slice(0, 8); // show popular initial items when query is empty

  // Handle arrow navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev + 1) % results.length);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev - 1 + results.length) % results.length);
    } else if (e.key === "Enter" && results[selectedIndex]) {
      e.preventDefault();
      handleSelect(results[selectedIndex]);
    }
  };

  const handleSelect = (item: SearchResultItem) => {
    onClose();
    navigate(item.path);
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-start justify-center pt-16 sm:pt-24 px-4 bg-[#2A2A24]/40 backdrop-blur-sm animate-in fade-in duration-150"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Site Search"
    >
      <div
        className="relative w-full max-w-2xl bg-[#FAF8F0] border-2 border-primary-container rounded-lg shadow-[0_12px_40px_rgba(42,42,36,0.15)] overflow-hidden text-[#2A2A24] flex flex-col"
        onClick={(e) => e.stopPropagation()}
        onKeyDown={handleKeyDown}
      >
        {/* Search Input Bar */}
        <div className="flex items-center gap-3 p-4 sm:p-5 border-b border-[#E6E2D3] bg-[#FFFFFF]">
          <Search className="w-5 h-5 text-[#5A680C] shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setSelectedIndex(0);
            }}
            placeholder="Search wardrobe, DTF, embroidery, pricing, FAQ..."
            className="w-full bg-transparent text-[#2A2A24] placeholder-[#66645A]/70 font-body text-base sm:text-lg focus:outline-none"
          />
          {query ? (
            <button
              onClick={() => setQuery("")}
              className="p-1 hover:text-[#5A680C] text-[#66645A] transition-colors"
              aria-label="Clear query"
            >
              <X className="w-5 h-5" />
            </button>
          ) : (
            <kbd className="hidden sm:inline-block px-2 py-0.5 font-mono text-[11px] bg-[#FAF8F0] text-[#66645A] rounded border border-[#E6E2D3]">
              ESC
            </kbd>
          )}
        </div>

        {/* Results List */}
        <div className="max-h-[60vh] overflow-y-auto divide-y divide-[#E6E2D3] p-2 bg-[#FAF8F0]">
          {results.length > 0 ? (
            results.map((item, index) => {
              const isSelected = index === selectedIndex;
              return (
                <button
                  key={item.id}
                  onClick={() => handleSelect(item)}
                  onMouseEnter={() => setSelectedIndex(index)}
                  className={`w-full text-left p-3.5 rounded flex items-center justify-between gap-3 transition-colors ${
                    isSelected
                      ? "bg-[#FFFFFF] text-[#2A2A24] shadow-xs"
                      : "hover:bg-[#FFFFFF]/70 text-[#2A2A24]"
                  }`}
                >
                  <div className="space-y-1 overflow-hidden pr-2">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-[10px] uppercase font-bold px-1.5 py-0.5 rounded bg-[#FAF8F0] text-[#5A680C] border border-[#E6E2D3]">
                        {item.category}
                      </span>
                      <span className="font-headline text-lg uppercase tracking-wide text-[#2A2A24] truncate">
                        {item.title}
                      </span>
                    </div>
                    <p className="font-body text-xs text-[#66645A] truncate">
                      {item.subtitle}
                    </p>
                  </div>

                  <div className="shrink-0 flex items-center gap-1 text-[#5A680C]">
                    {isSelected && (
                      <span className="hidden sm:inline-flex items-center gap-1 font-mono text-[10px] text-[#66645A] uppercase">
                        <span>Select</span>
                        <CornerDownLeft className="w-3 h-3" />
                      </span>
                    )}
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </div>
                </button>
              );
            })
          ) : (
            <div className="p-8 text-center space-y-2">
              <p className="font-headline text-xl text-[#2A2A24] uppercase">No matching entries</p>
              <p className="font-body text-xs text-[#66645A]">
                Try searching for "Oversized", "DTF", "Pricing", "Embroidery", or "MOQ".
              </p>
            </div>
          )}
        </div>

        {/* Bottom Help Bar */}
        <div className="p-3 bg-[#FAF8F0] border-t border-[#E6E2D3] flex items-center justify-between font-mono text-[11px] text-[#66645A] px-4">
          <div className="flex items-center gap-3">
            <span>↑↓ Navigate</span>
            <span>↵ Select</span>
            <span>ESC Close</span>
          </div>
          <span className="text-[#5A680C] font-bold">BROVE SEARCH</span>
        </div>
      </div>
    </div>
  );
};
