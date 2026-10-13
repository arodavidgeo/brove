import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight, Eye } from "lucide-react";
import { CategorySection, CategoryProduct } from "../../data/category-products";
import { WorkSample } from "../../types";

interface CategoryScrollRowProps {
  section: CategorySection;
  onPreviewSample?: (sample: WorkSample) => void;
}

export const CategoryScrollRow: React.FC<CategoryScrollRowProps> = ({
  section,
  onPreviewSample,
}) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 360;
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const handlePreview = (product: CategoryProduct) => {
    if (onPreviewSample) {
      onPreviewSample({
        id: product.id,
        image: product.image,
        title: product.name,
        perspective: "front",
        perspectiveLabel: "COLLECTION SAMPLE",
        apparelType: product.category,
        printMethod: product.printMethods.join(" • "),
        highlight: `₹${product.price} • MOQ ${product.moq} Pcs`,
        description: product.description,
      });
    }
  };

  return (
    <section className="space-y-6 py-6 border-b border-[#E6E2D3] last:border-b-0">
      {/* Category Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 bg-primary-container inline-block"></span>
            <span className="font-mono text-xs uppercase tracking-widest text-[#66645A] font-bold">
              CATEGORY // {section.folderName}
            </span>
            <span className="bg-primary-container text-text-primary px-2 py-0.5 font-mono text-[11px] font-bold uppercase rounded">
              {section.products.length} {section.products.length === 1 ? "STYLE" : "STYLES"}
            </span>
          </div>

          <h2 className="font-headline text-3xl sm:text-5xl uppercase tracking-tight text-[#2A2A24]">
            {section.displayName}
          </h2>

          <p className="font-body text-xs sm:text-sm text-[#55544D] max-w-2xl">
            {section.description}
          </p>
        </div>

        {/* Price Tag & Desktop Navigation Controls */}
        <div className="flex items-center gap-3 shrink-0">
          <span className="font-headline text-xl sm:text-2xl text-[#2A2A24] bg-primary-container px-3 py-1 rounded border border-[#E6E2D3] shadow-xs">
            {section.priceTag}
          </span>

          <div className="flex items-center gap-1.5">
            <button
              type="button"
              onClick={() => scroll("left")}
              className="p-2 rounded bg-[#FFFFFF] border-2 border-[#E6E2D3] hover:bg-primary-container hover:text-text-primary text-[#2A2A24] transition-colors shadow-xs active:scale-95"
              aria-label={`Scroll ${section.displayName} Left`}
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={() => scroll("right")}
              className="p-2 rounded bg-[#FFFFFF] border-2 border-[#E6E2D3] hover:bg-primary-container hover:text-text-primary text-[#2A2A24] transition-colors shadow-xs active:scale-95"
              aria-label={`Scroll ${section.displayName} Right`}
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Single Horizontal Scrolling Row */}
      <div
        ref={scrollContainerRef}
        className="flex items-stretch gap-6 overflow-x-auto pb-6 pt-2 snap-x snap-mandatory scroll-smooth no-scrollbar"
        style={{ scrollbarWidth: "thin" }}
      >
        {section.products.map((prod) => (
          <div
            key={prod.id}
            id={prod.id}
            className="flex-none w-[280px] sm:w-[320px] md:w-[350px] snap-start bg-[#FFFFFF] border-2 border-[#E6E2D3] rounded-lg overflow-hidden flex flex-col justify-between shadow-[0_4px_16px_rgba(42,42,36,0.06)] transition-transform hover:-translate-y-1 duration-200"
          >
            <div>
              {/* Card Spec Header */}
              <div className="p-3.5 bg-[#FAF8F0] border-b border-[#E6E2D3] flex items-center justify-between">
                <span className="font-mono text-xs font-bold uppercase text-[#66645A] truncate max-w-[170px]">
                  {prod.category}
                </span>
                <span className="font-headline text-xl text-[#2A2A24] bg-primary-container px-2.5 py-0.5 rounded shrink-0 shadow-xs">
                  ₹{prod.price}
                </span>
              </div>

              {/* Product Photography Display */}
              <div className="relative aspect-[4/3] bg-[#FAF8F0] flex items-center justify-center p-4 overflow-hidden group">
                <img
                  src={encodeURI(prod.image)}
                  alt={prod.name}
                  className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />

                <div className="absolute bottom-2 left-2 bg-[#FAF8F0]/90 text-[#2A2A24] border border-[#E6E2D3] font-mono text-[10px] px-2 py-0.5 rounded font-bold uppercase backdrop-blur-sm">
                  ✓ ACTUAL SAMPLE
                </div>

                {/* Inspect Zoom Button */}
                <button
                  type="button"
                  onClick={() => handlePreview(prod)}
                  className="absolute bottom-2 right-2 p-1.5 bg-[#FFFFFF]/90 text-[#2A2A24] rounded hover:bg-primary-container transition-all backdrop-blur-sm border border-[#E6E2D3] shadow-xs"
                  title="Inspect Full Image"
                  aria-label={`Inspect ${prod.name}`}
                >
                  <Eye className="w-4 h-4" />
                </button>
              </div>

              {/* Product Card Details */}
              <div className="p-5 space-y-3">
                <div className="space-y-1">
                  <h3 className="font-headline text-lg sm:text-xl uppercase tracking-tight text-[#2A2A24] line-clamp-2 min-h-[3rem]">
                    {prod.name}
                  </h3>
                  <p className="font-body text-xs text-[#55544D] leading-relaxed line-clamp-2">
                    {prod.description}
                  </p>
                </div>

                {/* Available Specs */}
                <div className="space-y-1.5 border-t border-[#E6E2D3] pt-3 font-mono text-xs">
                  <div className="flex items-center justify-between">
                    <span className="text-[#66645A] uppercase">PRINT METHODS:</span>
                    <span className="font-bold text-[#2A2A24]">
                      {prod.printMethods.join(" • ")}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[#66645A] uppercase">MINIMUM ORDER:</span>
                    <span className="font-bold text-[#2A2A24] bg-primary-container px-1.5 py-0.2 rounded">
                      {prod.moq} PIECES
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[#66645A] uppercase">SIZES:</span>
                    <span className="text-[#2A2A24]">
                      {prod.availableSizes.join(", ")}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Shopping & Custom Order Button */}
            <div className="p-5 pt-0">
              <Link
                to={`/custom-order?product=${encodeURIComponent(prod.id)}&name=${encodeURIComponent(prod.name)}`}
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 bg-primary-container text-text-primary font-headline text-sm uppercase tracking-wider rounded hover:bg-primary-fixed active:scale-95 transition-all shadow-[2px_2px_0px_#2A2A24] font-bold"
              >
                <span>SEND REQUIREMENT →</span>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
