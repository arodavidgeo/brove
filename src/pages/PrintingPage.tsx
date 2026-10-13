import React from "react";
import { Link } from "react-router-dom";
import { SEOHead } from "../components/layout/SEOHead";

export const PrintingPage: React.FC = () => {
  return (
    <>
      <SEOHead
        title="PRINTING ARCHITECTURE : DTF vs High-Density Embroidery | BROVE"
        description="Direct physical printmaking and tactile embroidery built for real streetwear. No automated dead-ends; real printers examine your art, fabric density, and ink fusion."
        path="/printing"
      />

      <div className="w-full bg-transparent min-h-screen pt-20 text-[#2A2A24]">
        {/* SECTION 1: HERO HEADER */}
        <section className="w-full bg-transparent text-[#2A2A24] py-space-xl border-b-2 border-[#E6E2D3]">
          <div className="max-w-[1400px] mx-auto px-margin-mobile lg:px-margin flex flex-col gap-space-lg">
            <div className="flex items-center gap-space-sm">
              <span className="inline-block w-2.5 h-2.5 bg-primary-container"></span>
              <span className="font-mono text-xs uppercase tracking-widest text-[#5A680C] font-bold">
                CRAFT & PRODUCTION ARCHITECTURE
              </span>
            </div>

            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-space-lg">
              <div className="max-w-3xl space-y-space-sm">
                <h1 className="font-headline text-5xl sm:text-7xl uppercase text-[#2A2A24] tracking-tight leading-none">
                  FROM IDEA TO INK.
                </h1>
                <p className="text-base sm:text-lg text-[#66645A] max-w-2xl leading-relaxed">
                  Direct physical printmaking and tactile embroidery built for real streetwear. No automated dead-ends; real printers examine your art, fabric density, and ink fusion on every single batch.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-space-xs font-mono text-xs">
                <span className="bg-primary-container text-text-primary px-space-md py-space-xs font-bold uppercase tracking-wider rounded shadow-xs">
                  MINIMUM ORDER: 5 PIECES
                </span>
                <span className="bg-[#FAF8F0] text-[#2A2A24] px-space-md py-space-xs uppercase tracking-wider rounded border border-[#E6E2D3]">
                  ST COURIER ALL INDIA (3–7 DAYS)
                </span>
              </div>
            </div>

            {/* Workshop Atmospheric Visual */}
            <div className="relative w-full h-72 md:h-96 rounded-xl overflow-hidden shadow-md mt-space-sm border border-[#E6E2D3]">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCFqNi0ec2WuAZqv2mhll_mzE8TEqZjxTclwVtcitJ_U3dw4cIeyuq9JhYq0fnn8uW2KoJ-0Yz5cOHsySWJW6TyTt2sjxRwmVMM5YmkR43ri64Ecp37uP2ux7d8rdLcw_4psitjNS3yuERX4jt8U_lt6rjcUiwlpqG79Xd8EK_UMAI_Ie15NjBmpwyg9UKXrmnGFMUtYF_19Cm_D8dldSd1u9rphdsyBOnhpo5ifYNTCtCrAM0xe81-"
                alt="BROVE Workshop Print Floor and Heavyweight Apparel"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2A2A24]/90 via-[#2A2A24]/40 to-transparent flex items-end p-space-md lg:p-space-lg">
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between w-full gap-space-sm">
                  <div className="space-y-0.5">
                    <span className="font-mono text-xs uppercase text-primary-container tracking-widest font-bold">
                      WORKSHOP DIRECT
                    </span>
                    <p className="font-headline text-2xl uppercase text-[#FFFFFF] tracking-wide">
                      PHYSICAL ATELIER IN TAMIL NADU
                    </p>
                  </div>
                  <div className="flex items-center gap-space-xs text-[#FAF8F0] font-mono text-xs uppercase tracking-wider">
                    <span>DUAL SPECIALIZATION:</span>
                    <span className="text-primary-container font-bold">DTF DIRECT FILM</span>
                    <span>&</span>
                    <span className="text-primary-container font-bold">HIGH-DENSITY EMBROIDERY</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2: PRINTING METHODS COMPARISON */}
        <section className="w-full bg-transparent py-space-xl">
          <div className="max-w-[1400px] mx-auto px-margin-mobile lg:px-margin space-y-space-lg">
            <div className="space-y-space-xs">
              <span className="font-mono text-xs uppercase text-[#5A680C] tracking-widest font-bold">
                PRECISION APPAREL FINISHING
              </span>
              <h2 className="font-headline text-4xl sm:text-6xl uppercase text-[#2A2A24] tracking-tight">
                CHOOSE YOUR PRINT CRAFT.
              </h2>
              <p className="text-[#66645A] text-base max-w-2xl leading-relaxed">
                Engineered for streetwear durability. We do not use paper-thin iron-ons or fragile vinyl transfers. Each piece is cured under hydraulic heat presses or threaded on industrial multi-needle beds.
              </p>
            </div>

            {/* 50/50 Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-space-lg">
              {/* CARD A: DTF */}
              <div className="bg-[#FAF8F0] rounded p-space-md lg:p-space-lg flex flex-col justify-between shadow-[0_4px_20px_rgba(42,42,36,0.04)] border-2 border-[#E6E2D3]">
                <div className="space-y-space-md">
                  <div className="relative w-full h-72 rounded overflow-hidden border border-[#E6E2D3]">
                    <img
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuClb2JpAbJVeQLD3cxh2l6dtaytWOYN15FfVUr2RKKRWZewGBd2uMBwGbBs37wwrr23h-EdLnqWmj8AV5I8aZg5D0I4GHByusN_Ek5Zp72DzhwqMizWj-L712nkXxUgIaexxp2OIWFLHLN6S-MV18oAgpo7snktiq62NeT5aWImlJchksnBvIvbGNUQV0zOGnUQHpKvCqS-8hNO_fER2X8fURl1NBjIaxFHOVKktfGlG1sondeNXhAx"
                      alt="DTF transfer film peel on black cotton t-shirt"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-space-sm left-space-sm">
                      <span className="bg-primary-container text-text-primary px-space-sm py-0.5 font-mono text-[10px] uppercase tracking-widest font-bold">
                        HIGH RESOLUTION & COLOR DEPTH
                      </span>
                    </div>
                  </div>

                  <div className="space-y-space-xs">
                    <div className="flex items-center justify-between">
                      <h3 className="font-headline text-3xl uppercase text-[#2A2A24]">DTF PRINTING</h3>
                      <span className="font-mono text-xs uppercase bg-[#FFFFFF] border border-[#E6E2D3] text-[#66645A] px-2 py-1 rounded">
                        METHOD 01
                      </span>
                    </div>
                    <p className="font-headline text-xl uppercase text-[#5A680C]">VIBRANT. DETAILED. CUSTOM.</p>
                    <p className="text-xs text-[#66645A] leading-relaxed">
                      Direct-to-Film printing fuses artwork with vibrant color density, smooth multi-tonal gradients, and micro-line illustrative definition directly into heavyweight 240+ GSM cotton fibers.
                    </p>
                  </div>

                  <div className="space-y-space-sm">
                    <div className="bg-[#FFFFFF] border border-[#E6E2D3] p-space-sm rounded space-y-1">
                      <span className="font-mono text-[10px] uppercase text-[#2A2A24] font-bold">BEST FOR</span>
                      <p className="text-xs text-[#2A2A24]">Detailed, colorful, photographic, and expressive streetwear illustrations.</p>
                    </div>
                    <div className="bg-[#FFFFFF] border border-[#E6E2D3] p-space-sm rounded space-y-1">
                      <span className="font-mono text-[10px] uppercase text-[#2A2A24] font-bold">IDEAL GARMENTS</span>
                      <p className="text-xs text-[#66645A]">
                        Custom Regular T-Shirts, Oversized Apparel, Acid Wash Tees, Heavyweight Hoodies, Sweatshirts.
                      </p>
                    </div>
                    <div className="bg-[#FFFFFF] text-[#2A2A24] border border-[#E6E2D3] p-space-sm rounded flex items-center justify-between">
                      <div className="space-y-0.5">
                        <span className="font-mono text-[10px] uppercase text-[#5A680C] font-bold">TECHNICAL ADVANTAGE</span>
                        <p className="text-xs text-[#66645A]">Flexible ink layer • Zero cracking • 50+ wash tests verified</p>
                      </div>
                      <span className="material-symbols-outlined text-[#5A680C] text-2xl">layers</span>
                    </div>
                  </div>
                </div>

                <div className="pt-space-md">
                  <Link
                    to="/customize/oversized-tshirt"
                    className="w-full flex items-center justify-center gap-space-xs bg-primary-container text-text-primary py-space-sm px-space-md font-headline text-base uppercase tracking-wider hover:bg-primary-fixed active:scale-95 transition-all shadow-[2px_2px_0px_rgba(42,42,36,0.1)] rounded"
                  >
                    <span>CUSTOMIZE WITH DTF</span>
                    <span className="material-symbols-outlined text-lg">arrow_forward</span>
                  </Link>
                </div>
              </div>

              {/* CARD B: EMBROIDERY */}
              <div className="bg-[#FAF8F0] rounded p-space-md lg:p-space-lg flex flex-col justify-between shadow-[0_4px_20px_rgba(42,42,36,0.04)] border-2 border-[#E6E2D3]">
                <div className="space-y-space-md">
                  <div className="relative w-full h-72 rounded overflow-hidden border border-[#E6E2D3]">
                    <img
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuCdA8u9304BtSHZgjL7cEv_v1DmNRaIz3olubkRdcdX-lTQGqAHMVtbkjxz7Q8KxxVQ14fMuCrWNQvj2TXClrJww_hPVAUr8pNJAvrz4G4UONjc6UprqzNz_Fqn-csB9ZxqZLam1aaX9cWgYX_0dKwbtBTQLX6_yAb1IEaEeOOgruhF2FvtTkTnLPikEKO7jAVc8UE_GKpTav1a9qChvs6AcX8L69CuCkpjCAqJdHoISLmHnRZzQfBu"
                      alt="Industrial multi-needle embroidery machine on black fleece"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-space-sm left-space-sm">
                      <span className="bg-[#FAF8F0]/90 backdrop-blur-xs text-[#2A2A24] border border-[#E6E2D3] px-space-sm py-0.5 font-mono text-[10px] uppercase tracking-widest font-bold">
                        TACTILE THREAD WORK
                      </span>
                    </div>
                  </div>

                  <div className="space-y-space-xs">
                    <div className="flex items-center justify-between">
                      <h3 className="font-headline text-3xl uppercase text-[#2A2A24]">EMBROIDERY</h3>
                      <span className="font-mono text-xs uppercase bg-[#FFFFFF] border border-[#E6E2D3] text-[#66645A] px-2 py-1 rounded">
                        METHOD 02
                      </span>
                    </div>
                    <p className="font-headline text-xl uppercase text-[#2A2A24]">TEXTURE YOU CAN FEEL.</p>
                    <p className="text-xs text-[#66645A] leading-relaxed">
                      High-density needlework providing three-dimensional tactile durability for breast logos, sleeve patches, collegiate typography, and premium uniform crests that never fade.
                    </p>
                  </div>

                  <div className="space-y-space-sm">
                    <div className="bg-[#FFFFFF] border border-[#E6E2D3] p-space-sm rounded space-y-1">
                      <span className="font-mono text-[10px] uppercase text-[#2A2A24] font-bold">BEST FOR</span>
                      <p className="text-xs text-[#2A2A24]">Minimalist branding, breast emblems, typography, crests, and collegiate logos.</p>
                    </div>
                    <div className="bg-[#FFFFFF] border border-[#E6E2D3] p-space-sm rounded space-y-1">
                      <span className="font-mono text-[10px] uppercase text-[#2A2A24] font-bold">IDEAL GARMENTS</span>
                      <p className="text-xs text-[#66645A]">
                        Polo T-Shirts, Premium Hoodies, Crewneck Sweatshirts, Corporate Workwear, Custom Shirts.
                      </p>
                    </div>
                    <div className="bg-[#FFFFFF] text-[#2A2A24] border border-[#E6E2D3] p-space-sm rounded flex items-center justify-between">
                      <div className="space-y-0.5">
                        <span className="font-mono text-[10px] uppercase text-[#5A680C] font-bold">TECHNICAL ADVANTAGE</span>
                        <p className="text-xs text-[#66645A]">High-tension thread • Zero scratch back-lining • Lifetime durability</p>
                      </div>
                      <span className="material-symbols-outlined text-[#5A680C] text-2xl">texture</span>
                    </div>
                  </div>
                </div>

                <div className="pt-space-md">
                  <Link
                    to="/customize/polo-tshirt"
                    className="w-full flex items-center justify-center gap-space-xs bg-[#FFFFFF] text-[#2A2A24] border border-[#E6E2D3] py-space-sm px-space-md font-headline text-base uppercase tracking-wider hover:bg-[#FAF8F0] active:scale-95 transition-all shadow-[2px_2px_0px_rgba(42,42,36,0.1)] rounded"
                  >
                    <span>CUSTOMIZE WITH EMBROIDERY</span>
                    <span className="material-symbols-outlined text-lg">arrow_forward</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
