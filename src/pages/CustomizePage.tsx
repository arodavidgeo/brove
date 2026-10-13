import React, { useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { SEOHead } from "../components/layout/SEOHead";
import { PRODUCTS, getProductById } from "../data/products";
import { PrintMethodType } from "../types";
import { useCart } from "../context/CartContext";

export const CustomizePage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const selectedProduct = getProductById(id || "") || PRODUCTS[1];

  // Studio Interactive State
  const [printTechnique, setPrintTechnique] = useState<PrintMethodType>("dtf");
  const [selectedColor, setSelectedColor] = useState(selectedProduct.availableColors[0]?.name || "WASHED BLACK");
  const [selectedPlacement, setSelectedPlacement] = useState<string>("chest_center");
  const [viewportView, setViewportView] = useState<"front" | "back">("front");
  const [workshopNotes, setWorkshopNotes] = useState<string>("");

  // Size distribution spread (Default batch meets 5-piece MOQ)
  const [sizeSpread, setSizeSpread] = useState<Record<string, number>>({
    S: 1,
    M: 2,
    L: 1,
    XL: 1,
    "2XL": 0,
  });

  // Local artwork upload state
  const [artworkFile, setArtworkFile] = useState<File | null>(null);
  const [artworkPreview, setArtworkPreview] = useState<string | null>(null);

  // Total batch units count
  const totalUnits = Object.values(sizeSpread).reduce((acc, count) => acc + count, 0);

  // Price calculations
  const baseRate = selectedProduct.price || 450;
  const methodPremium = printTechnique === "embroidery" ? 80 : 0;
  const unitRate = baseRate + methodPremium;
  const totalPrice = unitRate * totalUnits;

  const handleSizeChange = (sizeKey: string, delta: number) => {
    setSizeSpread((prev) => {
      const current = prev[sizeKey] || 0;
      const updated = Math.max(0, current + delta);
      return { ...prev, [sizeKey]: updated };
    });
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setArtworkFile(file);
      const url = URL.createObjectURL(file);
      setArtworkPreview(url);
    }
  };

  const handleRemoveFile = () => {
    setArtworkFile(null);
    setArtworkPreview(null);
  };

  const handleAddToCart = () => {
    if (totalUnits < 5) {
      alert("Minimum order batch is 5 pieces.");
      return;
    }

    addToCart({
      productId: selectedProduct.id,
      productName: selectedProduct.name,
      image: selectedProduct.image,
      printMethod: printTechnique,
      size: Object.entries(sizeSpread)
        .filter(([_, q]) => q > 0)
        .map(([s, q]) => `${s}: ${q}`)
        .join(", "),
      color: selectedColor,
      quantity: totalUnits,
      unitPrice: unitRate,
      pricingType: selectedProduct.pricingType,
      customNotes: `Placement: ${selectedPlacement}. Notes: ${workshopNotes}`,
      artworkUrl: artworkPreview || undefined,
      artworkName: artworkFile?.name || "identity_graphic_v2.png",
    });

    navigate("/cart");
  };

  return (
    <>
      <SEOHead
        title={`CUSTOMIZE ${selectedProduct.name.toUpperCase()} : BROVE Studio`}
        description="Studio Workbench for custom apparel. Interactive garment preview, multi-size batch distribution, DTF printing and embroidery selection."
        path={`/customize/${selectedProduct.id}`}
      />

      <div className="w-full bg-transparent min-h-[calc(100vh-5rem)] pt-20">
        {/* Studio Sub-Header Workbench Bar */}
        <div className="w-full bg-surface-paper py-space-md border-b border-border-neutral">
          <div className="max-w-[1400px] mx-auto px-margin-mobile lg:px-margin flex flex-wrap items-center justify-between gap-space-sm">
            <div className="flex items-center gap-space-sm">
              <span className="font-mono text-xs uppercase bg-primary-container text-text-primary px-space-xs py-0.5 rounded font-bold">
                STUDIO WORKBENCH
              </span>
              <span className="text-text-muted">/</span>
              <span className="font-mono text-xs uppercase tracking-wider text-text-primary">
                ORDER #BRV-CUSTOM-0924
              </span>
            </div>
            <div className="flex items-center gap-space-lg text-text-muted font-mono text-xs uppercase">
              <span className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-primary-container inline-block"></span>
                WORKSHOP LIVE
              </span>
              <span className="hidden sm:inline">TAMIL NADU SCREEN & DTF LAB</span>
              <span className="bg-surface-white px-2 py-1 rounded text-text-primary font-bold border border-border-neutral">
                BATCH SLA: 3–7 DAYS
              </span>
            </div>
          </div>
        </div>

        {/* Main Customizer Grid */}
        <div className="w-full max-w-[1400px] mx-auto px-margin-mobile lg:px-margin py-space-lg lg:py-space-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg lg:gap-space-xl items-start">
            
            {/* Customization Console (Left Column - 7 Cols) */}
            <div className="lg:col-span-7 flex flex-col gap-space-lg">
              {/* Header Pill & Base Garment Summary */}
              <div className="bg-surface-white p-space-lg rounded shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-space-md border border-border-neutral">
                <div className="space-y-space-xs">
                  <span className="font-mono text-xs uppercase tracking-widest text-primary font-bold">
                    BASE APPAREL SELECTED
                  </span>
                  <div className="flex items-center gap-space-sm">
                    <h1 className="font-headline text-3xl uppercase text-text-primary leading-none">
                      {selectedProduct.name}
                    </h1>
                    <span className="bg-surface-paper text-text-primary font-mono text-xs px-space-xs py-0.5 rounded font-bold border border-border-neutral">
                      240 GSM
                    </span>
                  </div>
                  <p className="text-xs text-text-muted leading-relaxed">
                    Heavyweight 100% combed cotton. Drop-shoulder relaxed streetwear drape.
                  </p>
                </div>
                <div className="flex sm:flex-col items-end justify-between sm:justify-center gap-space-xs shrink-0">
                  <span className="font-headline text-3xl text-text-primary leading-none">
                    ₹{unitRate} <span className="font-mono text-xs text-text-muted font-normal">/ pc</span>
                  </span>
                  <Link
                    to="/wardrobe"
                    className="font-mono text-xs uppercase text-text-primary hover:text-primary underline font-bold tracking-wider"
                  >
                    CHANGE SILHOUETTE
                  </Link>
                </div>
              </div>

              {/* 1. Print Method */}
              <div className="bg-surface-white p-space-lg rounded shadow-sm space-y-space-md border border-border-neutral">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-space-xs">
                    <span className="font-mono text-xs font-bold bg-[#FFFFFF] text-[#2A2A24] border border-[#E6E2D3] w-5 h-5 rounded-full flex items-center justify-center">
                      1
                    </span>
                    <h2 className="font-headline text-xl uppercase tracking-wider text-text-primary">
                      PRINTING METHOD
                    </h2>
                  </div>
                  <span className="font-mono text-xs text-text-muted uppercase">TACTILE LAB TESTED</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-sm">
                  {/* DTF Option */}
                  <div
                    onClick={() => setPrintTechnique("dtf")}
                    className={`relative flex flex-col p-space-md rounded cursor-pointer transition-all border ${
                      printTechnique === "dtf"
                        ? "bg-primary-container text-text-primary border-[#2A2A24] shadow-[2px_2px_0px_rgba(42,42,36,0.12)]"
                        : "bg-surface-paper text-text-primary border-border-neutral hover:bg-surface-container"
                    }`}
                  >
                    <div className="flex items-center justify-between pb-space-xs">
                      <span className="font-headline text-xl uppercase">DTF PRINTING</span>
                      <span className="material-symbols-outlined text-[20px]">verified</span>
                    </div>
                    <p className="text-xs leading-relaxed">
                      Vibrant, high-density continuous tones, precise photorealistic detail & gradient rendering.
                    </p>
                    <span className="mt-space-sm font-mono text-[10px] uppercase tracking-wider bg-[#FFFFFF] text-[#2A2A24] border border-[#E6E2D3] px-1.5 py-0.5 rounded w-max font-bold">
                      NO COLOR LIMIT
                    </span>
                  </div>

                  {/* Embroidery Option */}
                  <div
                    onClick={() => setPrintTechnique("embroidery")}
                    className={`relative flex flex-col p-space-md rounded cursor-pointer transition-all border ${
                      printTechnique === "embroidery"
                        ? "bg-primary-container text-text-primary border-[#2A2A24] shadow-[2px_2px_0px_rgba(42,42,36,0.12)]"
                        : "bg-surface-paper text-text-primary border-border-neutral hover:bg-surface-container"
                    }`}
                  >
                    <div className="flex items-center justify-between pb-space-xs">
                      <span className="font-headline text-xl uppercase">EMBROIDERY</span>
                      <span className="material-symbols-outlined text-[20px]">texture</span>
                    </div>
                    <p className="text-xs leading-relaxed text-text-muted">
                      High-density tactile stitched thread finish for pocket logos, monograms & premium crests.
                    </p>
                    <span className="mt-space-sm font-mono text-[10px] uppercase tracking-wider bg-surface-container-highest text-text-muted px-1.5 py-0.5 rounded w-max font-bold">
                      +₹80 / PC (THREAD RUN)
                    </span>
                  </div>
                </div>
              </div>

              {/* 2. Artwork & Stencil Upload */}
              <div className="bg-surface-white p-space-lg rounded shadow-sm space-y-space-md border border-border-neutral">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-space-xs">
                    <span className="font-mono text-xs font-bold bg-[#FFFFFF] text-[#2A2A24] border border-[#E6E2D3] w-5 h-5 rounded-full flex items-center justify-center">
                      2
                    </span>
                    <h2 className="font-headline text-xl uppercase tracking-wider text-text-primary">
                      ARTWORK & STENCIL
                    </h2>
                  </div>
                  <span className="font-mono text-xs text-text-muted uppercase">VECTOR / HIGH-RES</span>
                </div>

                {/* Dropzone */}
                <label className="relative bg-surface-paper rounded p-space-lg flex flex-col items-center justify-center text-center cursor-pointer transition-colors hover:bg-surface-container border-2 border-dashed border-[#2A2A24]/30">
                  <input
                    type="file"
                    onChange={handleFileUpload}
                    accept=".png,.jpg,.jpeg,.svg,.pdf"
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  />
                  <span className="material-symbols-outlined text-[36px] text-text-primary mb-space-xs">
                    cloud_upload
                  </span>
                  <p className="font-headline text-2xl uppercase text-text-primary tracking-wider">
                    DROP YOUR DESIGN HERE
                  </p>
                  <p className="text-xs text-text-muted mt-space-xs">
                    or click to browse your local device files
                  </p>
                  <div className="flex flex-wrap items-center justify-center gap-space-xs mt-space-md">
                    <span className="bg-surface-white px-2 py-0.5 rounded font-mono text-[10px] text-text-primary uppercase font-bold border border-border-neutral">
                      PNG
                    </span>
                    <span className="bg-surface-white px-2 py-0.5 rounded font-mono text-[10px] text-text-primary uppercase font-bold border border-border-neutral">
                      JPG
                    </span>
                    <span className="bg-surface-white px-2 py-0.5 rounded font-mono text-[10px] text-text-primary uppercase font-bold border border-border-neutral">
                      PDF
                    </span>
                    <span className="bg-surface-white px-2 py-0.5 rounded font-mono text-[10px] text-text-primary uppercase font-bold border border-border-neutral">
                      SVG
                    </span>
                    <span className="font-mono text-[10px] text-text-muted">
                      (MAX 25MB - 300 DPI RECOMMENDED)
                    </span>
                  </div>
                </label>

                {/* Verified Artwork Chip */}
                <div className="bg-surface-paper p-space-md rounded flex items-center justify-between gap-space-md border border-border-neutral">
                  <div className="flex items-center gap-space-md min-w-0">
                    <div className="w-12 h-12 bg-[#FFFFFF] border border-[#E6E2D3] rounded flex items-center justify-center shrink-0">
                      {artworkPreview ? (
                        <img
                          src={artworkPreview}
                          alt="Uploaded design"
                          className="w-full h-full object-contain p-1"
                        />
                      ) : (
                        <span className="material-symbols-outlined text-text-primary text-[24px]">
                          view_in_ar
                        </span>
                      )}
                    </div>
                    <div className="min-w-0">
                      <div className="flex items-center gap-space-xs">
                        <span className="font-mono text-xs font-bold text-text-primary truncate">
                          {artworkFile ? artworkFile.name : "identity_graphic_v2.png"}
                        </span>
                        <span className="bg-primary-container text-text-primary font-mono text-[10px] px-1.5 py-0.5 rounded font-bold shrink-0">
                          READY
                        </span>
                      </div>
                      <p className="text-xs text-text-muted mt-0.5">
                        {artworkFile ? `${(artworkFile.size / 1024 / 1024).toFixed(1)} MB • Native Alpha Layer` : "4.8 MB • 3508 × 4960 px • Transparent Alpha Layer"}
                      </p>
                    </div>
                  </div>
                  {artworkFile && (
                    <button
                      onClick={handleRemoveFile}
                      className="p-1 text-text-muted hover:text-red-600 transition-colors"
                      title="Remove artwork"
                    >
                      <span className="material-symbols-outlined text-[20px]">delete</span>
                    </button>
                  )}
                </div>
              </div>

              {/* 3. Color & Placement */}
              <div className="bg-surface-white p-space-lg rounded shadow-sm space-y-space-md border border-border-neutral">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-space-xs">
                    <span className="font-mono text-xs font-bold bg-[#FFFFFF] text-[#2A2A24] border border-[#E6E2D3] w-5 h-5 rounded-full flex items-center justify-center">
                      3
                    </span>
                    <h2 className="font-headline text-xl uppercase tracking-wider text-text-primary">
                      FABRIC COLOR & PLACEMENT
                    </h2>
                  </div>
                  <span className="font-mono text-xs text-text-muted uppercase font-bold">
                    {selectedColor}
                  </span>
                </div>

                {/* Swatches */}
                <div className="flex flex-wrap items-center gap-space-md">
                  {selectedProduct.availableColors.map((color) => (
                    <button
                      key={color.name}
                      onClick={() => setSelectedColor(color.name)}
                      className={`w-10 h-10 rounded flex items-center justify-center transition-all ${
                        selectedColor === color.name
                          ? "ring-2 ring-primary-container ring-offset-2 scale-105"
                          : "hover:scale-105 opacity-90 hover:opacity-100"
                      }`}
                      style={{ backgroundColor: color.hex }}
                      title={color.name}
                    >
                      {selectedColor === color.name && (
                        <span className="material-symbols-outlined text-primary-container text-[18px]">
                          check
                        </span>
                      )}
                    </button>
                  ))}
                </div>

                {/* Placement Options */}
                <div className="pt-space-xs space-y-space-xs">
                  <label className="font-mono text-xs uppercase tracking-wider text-text-primary font-bold">
                    PRINT PLACEMENT INSTRUCTION
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-space-xs">
                    {[
                      { id: "chest_center", label: "Chest Center (A3)" },
                      { id: "left_crest", label: "Left Pocket Crest" },
                      { id: "back_oversize", label: "Back Oversize Hero" },
                    ].map((plc) => (
                      <label
                        key={plc.id}
                        onClick={() => setSelectedPlacement(plc.id)}
                        className={`flex items-center gap-space-xs p-space-sm rounded cursor-pointer border ${
                          selectedPlacement === plc.id
                            ? "bg-primary-container/20 border-[#2A2A24] text-text-primary font-bold"
                            : "bg-surface-paper border-border-neutral text-text-muted hover:bg-surface-container"
                        }`}
                      >
                        <input
                          type="radio"
                          name="placement"
                          checked={selectedPlacement === plc.id}
                          readOnly
                          className="accent-[#2A2A24]"
                        />
                        <span className="text-xs">{plc.label}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>

              {/* 4. Quantity & Size Spread */}
              <div className="bg-surface-white p-space-lg rounded shadow-sm space-y-space-md border border-border-neutral">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-space-xs">
                    <span className="font-mono text-xs font-bold bg-[#FFFFFF] text-[#2A2A24] border border-[#E6E2D3] w-5 h-5 rounded-full flex items-center justify-center">
                      4
                    </span>
                    <h2 className="font-headline text-xl uppercase tracking-wider text-text-primary">
                      QUANTITY & SIZE SPREAD
                    </h2>
                  </div>
                  <span className="font-mono text-xs text-text-muted uppercase">
                    CHEST 42" TO 50"
                  </span>
                </div>

                <div className="bg-surface-paper p-space-sm rounded flex items-center gap-space-sm border border-border-neutral">
                  <span className="material-symbols-outlined text-[#2A2A24] bg-[#FFFFFF] border border-[#E6E2D3] p-1 rounded text-[18px]">
                    info
                  </span>
                  <p className="text-xs text-text-primary">
                    <span className="font-bold">MINIMUM ORDER: 5 PIECES.</span> Mix & match any sizes within this batch. Perfect for clothing labels, college clubs, and creative squads.
                  </p>
                </div>

                {/* Size Spread Steppers */}
                <div className="grid grid-cols-2 sm:grid-cols-5 gap-space-xs">
                  {Object.entries(sizeSpread).map(([sizeKey, count]) => (
                    <div
                      key={sizeKey}
                      className="bg-surface-paper p-space-sm rounded flex flex-col items-center gap-space-xs border border-border-neutral"
                    >
                      <span className="font-headline text-2xl text-text-primary">{sizeKey}</span>
                      <div className="flex items-center w-full justify-between bg-surface-white rounded px-1 py-0.5 border border-border-neutral">
                        <button
                          type="button"
                          onClick={() => handleSizeChange(sizeKey, -1)}
                          className="text-text-primary hover:bg-surface-container font-bold px-2 py-0.5"
                        >
                          -
                        </button>
                        <span className="font-mono text-xs font-bold text-text-primary">
                          {count}
                        </span>
                        <button
                          type="button"
                          onClick={() => handleSizeChange(sizeKey, 1)}
                          className="text-text-primary hover:bg-surface-container font-bold px-2 py-0.5"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Total Units Counter */}
                <div className="flex items-center justify-between pt-space-xs bg-surface-container-low p-space-md rounded border border-border-neutral">
                  <div>
                    <p className="font-headline text-lg text-text-primary uppercase">TOTAL BATCH PIECES</p>
                    <p className="text-xs text-text-muted">Calculated from sizes specified above</p>
                  </div>
                  <div className="flex items-center gap-space-sm">
                    <span className={`font-headline text-3xl px-space-md py-1 rounded ${
                      totalUnits >= 5 ? "bg-primary-container text-text-primary font-bold border border-[#E6E2D3]" : "bg-red-700 text-white"
                    }`}>
                      {totalUnits}
                    </span>
                    <span className="font-mono text-xs uppercase text-text-muted">UNITS</span>
                  </div>
                </div>
              </div>

              {/* Instructions */}
              <div className="bg-surface-white p-space-lg rounded shadow-sm space-y-space-xs border border-border-neutral">
                <label className="font-mono text-xs uppercase tracking-wider text-text-primary font-bold">
                  WORKSHOP & STENCIL INSTRUCTIONS (OPTIONAL)
                </label>
                <textarea
                  value={workshopNotes}
                  onChange={(e) => setWorkshopNotes(e.target.value)}
                  placeholder="e.g. Center graphics 2.5 inches below rib collar. Keep artwork edges sharp."
                  rows={2}
                  className="w-full p-space-sm rounded bg-surface-paper text-text-primary text-xs outline-none focus:bg-surface-white transition-colors border border-border-neutral"
                />
              </div>

              {/* Bottom Quote & Add To Cart CTA */}
              <div className="bg-[#FAF8F0] text-[#2A2A24] p-space-lg rounded shadow-md space-y-space-md border-2 border-[#E6E2D3]">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-space-sm border-b border-[#E6E2D3] pb-space-md">
                  <div>
                    <span className="font-mono text-xs text-text-muted uppercase tracking-wider font-bold">
                      ESTIMATED PRODUCTION QUOTE
                    </span>
                    <div className="flex items-baseline gap-space-xs">
                      <span className="font-headline text-5xl sm:text-6xl text-text-primary leading-none">
                        ₹{totalPrice.toLocaleString("en-IN")}
                      </span>
                      <span className="text-xs text-text-muted font-mono">ALL INCL. GST</span>
                    </div>
                  </div>
                  <div className="text-left sm:text-right text-text-muted text-xs font-mono">
                    <p>Base: <span className="text-text-primary font-bold">₹{unitRate}</span> × {totalUnits} pcs</p>
                    <p>Print Setup: <span className="text-text-primary font-bold bg-primary-container px-1 py-0.5 rounded">FREE</span> (5+ batch)</p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-center gap-space-md">
                  <button
                    type="button"
                    onClick={handleAddToCart}
                    disabled={totalUnits < 5}
                    className="w-full sm:flex-1 py-space-md px-space-lg bg-primary-container text-text-primary font-headline text-xl uppercase tracking-wider rounded text-center hover:bg-primary-fixed active:scale-95 transition-all shadow-[3px_3px_0px_rgba(42,42,36,0.12)] border border-[#2A2A24] disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    ADD TO CART →
                  </button>
                  <div className="flex items-center gap-space-xs text-text-muted font-mono text-xs uppercase tracking-wider">
                    <span className="material-symbols-outlined text-[18px] text-[#2A2A24]">local_shipping</span>
                    <span>SHIPS IN 3-7 DAYS PAN-INDIA</span>
                  </div>
                </div>
              </div>

            </div>

            {/* Live Apparel Interactive Viewport (Right Column - 5 Cols) */}
            <div className="lg:col-span-5 sticky top-24 space-y-space-md">
              <div className="bg-surface-white p-space-md rounded shadow-sm relative overflow-hidden flex flex-col items-center border border-border-neutral">
                {/* Viewport Top Bar */}
                <div className="w-full flex items-center justify-between pb-space-sm border-b border-border-neutral">
                  <div className="flex items-center gap-space-xs">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-600"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-primary-container"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-[#E6E2D3]"></span>
                    <span className="font-mono text-xs uppercase tracking-wider text-text-muted ml-space-xs">
                      VIEWPORT: {viewportView.toUpperCase()}
                    </span>
                  </div>
                  <div className="flex items-center gap-1 bg-surface-paper p-0.5 rounded border border-border-neutral">
                    <button
                      type="button"
                      onClick={() => setViewportView("front")}
                      className={`px-space-xs py-0.5 rounded font-mono text-xs uppercase font-bold transition-colors ${
                        viewportView === "front" ? "bg-[#FFFFFF] text-[#2A2A24] border border-[#E6E2D3] shadow-xs" : "text-text-primary hover:bg-surface-container"
                      }`}
                    >
                      FRONT
                    </button>
                    <button
                      type="button"
                      onClick={() => setViewportView("back")}
                      className={`px-space-xs py-0.5 rounded font-mono text-xs uppercase font-bold transition-colors ${
                        viewportView === "back" ? "bg-[#FFFFFF] text-[#2A2A24] border border-[#E6E2D3] shadow-xs" : "text-text-primary hover:bg-surface-container"
                      }`}
                    >
                      BACK
                    </button>
                  </div>
                </div>

                {/* Garment Frame Area */}
                <div className="relative w-full aspect-[4/5] bg-surface-paper rounded mt-space-sm flex items-center justify-center overflow-hidden border border-border-neutral">
                  <img
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBjDCK7p9N3AV6fWB1Qj4p5OL_Y8zDF0fF5LA-IHcmtnFruf1RzZv0z7x8YQbWFGs0O7LtpVN5Q4uZRdL9dOQBi76c9aTYbtrIKjK79Yi8XWWf14YlN7J2E5Lzy52ZarOdR0HT9cuL8oDRDGHhA_cGqy-NRRhcaA33ycx1jJEt3kf1ffliMUMASYPQjmqf19GJYR8cxIDSFJhw_r8gzWt_SrFNbddK0fD8j3Jxn1g3v9QY95wyLvyKw"
                    alt="Oversized T-Shirt Studio Preview"
                    className="w-full h-full object-cover select-none"
                  />

                  {/* Print Bounding Box Safe Overlay */}
                  <div className="absolute inset-x-12 top-28 bottom-32 pointer-events-none flex flex-col items-center justify-center border-2 border-dashed border-primary-container">
                    <div className="relative w-44 h-48 bg-[#FAF8F0]/90 backdrop-blur-xs rounded p-2 flex flex-col items-center justify-center text-center shadow-md border-2 border-primary-container">
                      {artworkPreview ? (
                        <img
                          src={artworkPreview}
                          alt="Custom Design"
                          className="max-w-full max-h-28 object-contain"
                        />
                      ) : (
                        <>
                          <span className="material-symbols-outlined text-text-primary text-[40px]">texture</span>
                          <span className="font-headline text-lg uppercase text-text-primary tracking-wider mt-1">
                            IDENTITY
                          </span>
                        </>
                      )}
                      <span className="font-mono text-[9px] text-text-muted tracking-widest uppercase font-bold mt-1">
                        {printTechnique === "dtf" ? "DTF PRINT READY" : "TACTILE EMBROIDERY"}
                      </span>
                    </div>

                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#FAF8F0] text-[#2A2A24] border border-[#E6E2D3] font-mono text-[10px] px-2 py-0.5 rounded uppercase font-bold shadow-xs">
                      A3 SAFE PRINT ZONE (12 × 16 IN)
                    </span>
                  </div>
                </div>

                {/* Telemetry Footer */}
                <div className="w-full pt-space-sm flex items-center justify-between text-text-muted font-mono text-xs">
                  <span>SCALE: 1:1 CALIBRATED</span>
                  <span className="text-[#2A2A24] font-bold bg-[#FAF8F0] border border-[#E6E2D3] px-2 py-0.5 rounded">
                    BATCH: {totalUnits} PCS
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};
