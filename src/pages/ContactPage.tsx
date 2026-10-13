import React from "react";
import { SEOHead } from "../components/layout/SEOHead";
import { BUSINESS_FACTS } from "../data/brove-content";
import { CopyButton } from "../components/ui/CopyButton";
import { RequirementForm } from "../components/order/RequirementForm";
import { WorkshopTicker } from "../components/layout/WorkshopTicker";
import {
  Phone,
  MessageCircle,
  Instagram,
  Mail,
  ExternalLink,
  MapPin,
  Navigation
} from "lucide-react";

export const ContactPage: React.FC = () => {
  return (
    <>
      <SEOHead
        title="CONTACT BROVE : Custom Apparel Studio Communications"
        description="Connect with the BROVE custom apparel workshop. Phone / WhatsApp: 9443941897, Instagram: @brove_fabrics, Email: ashwinkumar412002@gmail.com. Dispatched across India."
        path="/contact"
      />

      <div className="w-full bg-transparent text-[#2A2A24] pt-20 transition-colors duration-200">
        
        {/* Header Hero */}
        <section className="w-full bg-transparent text-[#2A2A24] py-12 md:py-16 border-b-2 border-[#E6E2D3] relative overflow-hidden">
          <div className="max-w-[1400px] mx-auto px-margin-mobile lg:px-margin space-y-4 relative z-10">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 bg-primary-container inline-block"></span>
                <span className="font-mono text-xs uppercase tracking-widest text-[#5A680C] font-bold">
                  COMMUNICATIONS &amp; ATELIER ACCESS
                </span>
              </div>
              <div className="bg-primary-container text-text-primary px-3 py-1 font-mono text-xs uppercase tracking-wider font-bold shadow-xs">
                DIRECT TO WORKSHOP
              </div>
            </div>

            <div className="max-w-3xl space-y-2">
              <h1 className="font-headline text-5xl sm:text-7xl lg:text-8xl uppercase tracking-tight text-[#2A2A24] leading-none">
                TALK TO BROVE.
              </h1>
              <p className="font-headline text-2xl sm:text-3xl text-[#5A680C] uppercase tracking-wide">
                NO AUTOMATED QUEUES. DIRECT HUMAN CRAFTSMEN.
              </p>
              <p className="font-body text-base text-[#55544D] max-w-2xl leading-relaxed">
                Connect directly with our printing and fabrication workshop regarding fabric weights, color proofs, batch estimates, and courier timelines.
              </p>
            </div>
          </div>
        </section>

        <WorkshopTicker />

        <div className="max-w-[1400px] mx-auto px-margin-mobile lg:px-margin py-12 sm:py-16 space-y-16">
          
          {/* 4 Primary Communication Channels with Copy functionality */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* 1. Phone Call */}
            <div className="bg-[#FFFFFF] border-2 border-[#E6E2D3] p-6 rounded-lg flex flex-col justify-between shadow-[0_4px_16px_rgba(42,42,36,0.06)] space-y-6">
              <div className="space-y-3">
                <div className="w-12 h-12 bg-primary-container text-text-primary flex items-center justify-center rounded border border-[#E6E2D3]">
                  <Phone className="w-6 h-6" />
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[11px] font-bold text-[#66645A] uppercase">VOICE CALL</span>
                  <CopyButton textToCopy={BUSINESS_FACTS.contact.phone} label="Copy" />
                </div>
                <h3 className="font-headline text-2xl uppercase text-[#2A2A24]">
                  {BUSINESS_FACTS.contact.phone}
                </h3>
                <p className="font-body text-xs text-[#55544D] leading-relaxed">
                  Call directly for urgent batch feasibility and sizing consultation.
                </p>
              </div>

              <div className="pt-2">
                <a
                  href={`tel:${BUSINESS_FACTS.contact.phone}`}
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#FFFFFF] text-[#2A2A24] py-2.5 px-4 font-headline text-xs uppercase tracking-wider rounded hover:bg-[#FAF8F0] active:scale-95 transition-all border border-[#E6E2D3] shadow-xs"
                >
                  <span>CALL DIRECTLY</span>
                </a>
              </div>
            </div>

            {/* 2. WhatsApp */}
            <div className="bg-[#FFFFFF] border-2 border-[#E6E2D3] p-6 rounded-lg flex flex-col justify-between shadow-[0_4px_16px_rgba(42,42,36,0.06)] space-y-6">
              <div className="space-y-3">
                <div className="w-12 h-12 bg-primary-container text-text-primary flex items-center justify-center rounded border border-[#E6E2D3]">
                  <MessageCircle className="w-6 h-6 fill-current stroke-none" />
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[11px] font-bold text-[#66645A] uppercase">WHATSAPP CHAT</span>
                  <CopyButton textToCopy={BUSINESS_FACTS.contact.whatsapp} label="Copy" />
                </div>
                <h3 className="font-headline text-2xl uppercase text-[#2A2A24]">
                  {BUSINESS_FACTS.contact.whatsapp}
                </h3>
                <p className="font-body text-xs text-[#55544D] leading-relaxed">
                  Fastest response. Send artwork files, reference photos, or rough concepts.
                </p>
              </div>

              <div className="pt-2">
                <a
                  href={`https://wa.me/91${BUSINESS_FACTS.contact.whatsapp}?text=${encodeURIComponent(
                    "Hello BROVE, I'd like to discuss custom apparel printing."
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 bg-primary-container text-text-primary py-2.5 px-4 font-headline text-xs uppercase tracking-wider rounded hover:bg-primary-fixed active:scale-95 transition-all shadow-[2px_2px_0px_#2A2A24]"
                >
                  <MessageCircle className="w-4 h-4 fill-current stroke-none" />
                  <span>OPEN WHATSAPP →</span>
                </a>
              </div>
            </div>

            {/* 3. Instagram */}
            <div className="bg-[#FFFFFF] border-2 border-[#E6E2D3] p-6 rounded-lg flex flex-col justify-between shadow-[0_4px_16px_rgba(42,42,36,0.06)] space-y-6">
              <div className="space-y-3">
                <div className="w-12 h-12 bg-primary-container text-text-primary flex items-center justify-center rounded border border-[#E6E2D3]">
                  <Instagram className="w-6 h-6" />
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[11px] font-bold text-[#66645A] uppercase">INSTAGRAM</span>
                  <CopyButton textToCopy={`@${BUSINESS_FACTS.contact.instagram}`} label="Copy" />
                </div>
                <h3 className="font-headline text-2xl uppercase text-[#2A2A24]">
                  @{BUSINESS_FACTS.contact.instagram}
                </h3>
                <p className="font-body text-xs text-[#55544D] leading-relaxed">
                  Follow new sample drops, live print floor reels, and mineral wash batches.
                </p>
              </div>

              <div className="pt-2">
                <a
                  href={BUSINESS_FACTS.contact.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-1.5 bg-[#FFFFFF] text-[#2A2A24] py-2.5 px-4 font-headline text-xs uppercase tracking-wider rounded hover:bg-[#FAF8F0] active:scale-95 transition-all border border-[#E6E2D3] shadow-xs"
                >
                  <span>VIEW INSTAGRAM</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* 4. Email */}
            <div className="bg-[#FFFFFF] border-2 border-[#E6E2D3] p-6 rounded-lg flex flex-col justify-between shadow-[0_4px_16px_rgba(42,42,36,0.06)] space-y-6">
              <div className="space-y-3">
                <div className="w-12 h-12 bg-primary-container text-text-primary flex items-center justify-center rounded border border-[#E6E2D3]">
                  <Mail className="w-6 h-6" />
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[11px] font-bold text-[#66645A] uppercase">OFFICIAL EMAIL</span>
                  <CopyButton textToCopy={BUSINESS_FACTS.contact.email} label="Copy" />
                </div>
                <h3 className="font-headline text-lg uppercase text-[#2A2A24] break-all">
                  {BUSINESS_FACTS.contact.email}
                </h3>
                <p className="font-body text-xs text-[#55544D] leading-relaxed">
                  Send high-resolution vector packs (AI, PDF, PSD) or formal purchase orders.
                </p>
              </div>

              <div className="pt-2">
                <a
                  href={`mailto:${BUSINESS_FACTS.contact.email}?subject=Custom%20Apparel%20Requirement`}
                  className="w-full inline-flex items-center justify-center gap-1.5 bg-[#FFFFFF] text-[#2A2A24] py-2.5 px-4 font-headline text-xs uppercase tracking-wider rounded hover:bg-[#FAF8F0] active:scale-95 transition-all border border-[#E6E2D3] shadow-xs"
                >
                  <span>SEND EMAIL</span>
                </a>
              </div>
            </div>

          </div>

          {/* ==================================================
              LOCATION: THE BROVE ATELIER & PRINT FLOOR
              - Official Google Maps link: https://maps.app.goo.gl/AsPHhVM3eJ84twAR8?g_st=aw
              - Tactile Physical Location & Navigation Hub
              ================================================== */}
          <section className="bg-[#FFFFFF] border-2 border-[#E6E2D3] rounded-xl p-6 sm:p-10 shadow-[0_4px_24px_rgba(42,42,36,0.06)] space-y-8 relative overflow-hidden">
            {/* Top Badge Strip */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-[#E6E2D3]">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
                  <span className="font-mono text-xs uppercase tracking-widest text-[#2A2A24] bg-primary-container px-2.5 py-0.5 rounded font-bold shadow-xs">
                    PHYSICAL PRINT FLOOR • OPEN
                  </span>
                </div>
                <h2 className="font-headline text-3xl sm:text-5xl uppercase tracking-tight text-[#2A2A24] pt-2">
                  THE BROVE ATELIER &amp; STUDIO.
                </h2>
                <p className="font-mono text-xs sm:text-sm text-[#66645A]">
                  M90, TNHB COLONY, STAGE 3, KTC NAGAR, TIRUNELVELI, TAMIL NADU 627011
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <a
                  href="https://maps.app.goo.gl/AsPHhVM3eJ84twAR8?g_st=aw"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded bg-primary-container text-text-primary font-headline text-sm uppercase tracking-wider hover:bg-primary-fixed active:scale-95 transition-all shadow-[2px_2px_0px_#2A2A24]"
                >
                  <Navigation className="w-4 h-4 fill-current stroke-none" />
                  <span>GET DIRECTIONS IN GOOGLE MAPS ↗</span>
                </a>
                <CopyButton textToCopy="M90, TNHB colony, Stage 3, KTC Nagar, Tirunelveli, Tamil Nadu 627011" label="Copy Full Address" />
              </div>
            </div>

            {/* Grid: Studio Intel & Interactive Map Frame */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
              
              {/* Left Column: Studio Visiting Guidelines */}
              <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <h3 className="font-headline text-xl uppercase tracking-wide text-[#2A2A24] flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-[#5A680C]" />
                    <span>WORKSHOP LOCATION SPECS</span>
                  </h3>
                  
                  <div className="space-y-3 font-mono text-xs">
                    <div className="p-3.5 bg-[#FAF8F0] rounded border border-[#E6E2D3] space-y-1">
                      <span className="text-[#66645A] uppercase block font-bold text-[10px]">PHYSICAL STUDIO ADDRESS</span>
                      <span className="text-[#2A2A24] font-bold text-sm block leading-snug">
                        M90, TNHB colony, Stage 3, KTC Nagar
                      </span>
                      <span className="text-[#2A2A24] font-mono text-xs block">
                        Tirunelveli, Tamil Nadu 627011
                      </span>
                      <p className="text-[11px] text-[#66645A] pt-1">Direct walk-in studio &amp; physical print floor.</p>
                    </div>

                    <div className="p-3.5 bg-[#FAF8F0] rounded border border-[#E6E2D3]">
                      <span className="text-[#66645A] uppercase block font-bold text-[10px]">CITY &amp; LOGISTICS HUB</span>
                      <span className="text-[#2A2A24] font-bold text-sm">Tirunelveli, Tamil Nadu — India</span>
                      <p className="text-[11px] text-[#66645A] pt-1">Direct dispatch corridor via ST Courier across all Indian states (3–7 days).</p>
                    </div>

                    <div className="p-3.5 bg-[#FAF8F0] rounded border border-[#E6E2D3] space-y-1">
                      <span className="text-[#66645A] uppercase block font-bold text-[10px]">VISITING HOURS &amp; PROOFING</span>
                      <span className="text-[#2A2A24] font-bold text-xs">Monday – Saturday: 10:00 AM – 7:30 PM</span>
                      <p className="text-[11px] text-[#66645A]">Feel fabric swatches, compare 240 GSM oversized tees, and examine embroidery crests in person.</p>
                    </div>
                  </div>
                </div>

                {/* Direct quick action */}
                <div className="p-4 bg-[#FAF8F0] border border-primary-container rounded flex items-center justify-between gap-3">
                  <div className="space-y-0.5">
                    <span className="font-mono text-[11px] font-bold uppercase text-[#2A2A24] block">
                      VISITING IN PERSON?
                    </span>
                    <span className="font-body text-xs text-[#55544D]">
                      Drop a quick WhatsApp ping before coming for instant sample readiness.
                    </span>
                  </div>
                  <a
                    href={`https://wa.me/91${BUSINESS_FACTS.contact.whatsapp}?text=${encodeURIComponent(
                      "Hello BROVE, I'm planning to visit the studio for fabric inspection."
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shrink-0 px-3 py-2 bg-primary-container text-text-primary font-headline text-xs uppercase tracking-wider rounded hover:bg-primary-fixed transition-colors shadow-xs"
                  >
                    PING US →
                  </a>
                </div>
              </div>

              {/* Right Column: Creative Industrial Interactive Map Display */}
              <div className="lg:col-span-7 flex flex-col justify-between rounded-lg overflow-hidden border-2 border-[#E6E2D3] bg-[#FAF8F0] relative min-h-[380px]">
                {/* Registration Crosshairs (Streetwear workshop detail) */}
                <div className="absolute top-2 left-2 font-mono text-[10px] text-[#2A2A24] z-20 pointer-events-none bg-[#FAF8F0]/90 border border-[#E6E2D3] px-2 py-0.5 rounded shadow-xs">
                  + TIRUNELVELI PRINT ATELIER
                </div>
                <div className="absolute top-2 right-2 font-mono text-[10px] text-[#2A2A24] z-20 pointer-events-none bg-[#FAF8F0]/90 border border-[#E6E2D3] px-2 py-0.5 rounded shadow-xs">
                  GPS: 8.7139° N, 77.7567° E +
                </div>

                {/* Embedded Responsive Interactive Map */}
                <div className="w-full h-full min-h-[320px] relative">
                  <iframe
                    title="BROVE Studio Map"
                    src="https://maps.google.com/maps?q=M90,+TNHB+colony,+Stage+3,+KTC+Nagar,+Tirunelveli,+Tamil+Nadu+627011&t=&z=15&ie=UTF8&iwloc=&output=embed"
                    className="w-full h-full min-h-[340px] border-0 filter contrast-125 opacity-95 hover:opacity-100 transition-opacity"
                    loading="lazy"
                    allowFullScreen
                  />
                  {/* Subtle soft gradient overlay at top for industrial polish */}
                  <div className="absolute inset-x-0 top-0 h-8 bg-gradient-to-b from-[#F4F1E6]/40 to-transparent pointer-events-none" />
                </div>

                {/* Interactive Map Footer Bar */}
                <div className="bg-[#FAF8F0] border-t-2 border-[#E6E2D3] p-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-[#2A2A24] font-mono text-xs z-10">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-[#5A680C] shrink-0" />
                    <span className="truncate">BROVE Studio • M90, TNHB colony, KTC Nagar, Tirunelveli</span>
                  </div>

                  <a
                    href="https://maps.app.goo.gl/AsPHhVM3eJ84twAR8?g_st=aw"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-[#5A680C] hover:text-[#2A2A24] uppercase tracking-wider font-bold transition-colors"
                  >
                    <span>OPEN FULLSCREEN MAP</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

            </div>
          </section>

          {/* Integrated Requirement Form */}
          <div className="space-y-6 pt-6">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <span className="font-mono text-xs uppercase tracking-widest text-[#66645A] font-bold block">
                DIRECT SUBMISSION
              </span>
              <h2 className="font-headline text-3xl sm:text-5xl uppercase tracking-tight text-[#2A2A24]">
                SEND YOUR REQUIREMENTS
              </h2>
              <p className="font-body text-sm text-[#55544D] leading-relaxed">
                Fill in your apparel canvas, quantity, and design requirements below.
              </p>
            </div>

            <RequirementForm embedded={true} />
          </div>

        </div>

      </div>
    </>
  );
};
