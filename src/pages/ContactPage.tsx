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

      <div className="w-full bg-surface-paper dark:bg-surface-dark text-text-primary dark:text-text-on-dark pt-20 transition-colors duration-200">
        
        {/* Header Hero */}
        <section className="w-full bg-surface-dark text-text-on-dark py-12 md:py-16 border-b-4 border-primary-container relative overflow-hidden">
          <div className="max-w-[1400px] mx-auto px-margin-mobile lg:px-margin space-y-4 relative z-10">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 bg-primary-container inline-block"></span>
                <span className="font-mono text-xs uppercase tracking-widest text-primary-container font-bold">
                  COMMUNICATIONS &amp; ATELIER ACCESS
                </span>
              </div>
              <div className="bg-primary-container text-text-primary px-3 py-1 font-mono text-xs uppercase tracking-wider font-bold shadow-sm">
                DIRECT TO WORKSHOP
              </div>
            </div>

            <div className="max-w-3xl space-y-2">
              <h1 className="font-headline text-5xl sm:text-7xl lg:text-8xl uppercase tracking-tight text-text-on-dark leading-none">
                TALK TO BROVE.
              </h1>
              <p className="font-headline text-2xl sm:text-3xl text-primary-container uppercase tracking-wide">
                NO AUTOMATED QUEUES. DIRECT HUMAN CRAFTSMEN.
              </p>
              <p className="font-body text-base text-surface-container-highest max-w-2xl leading-relaxed">
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
            <div className="bg-surface-white dark:bg-surface-dark-secondary border-2 border-text-primary dark:border-surface-dark-secondary p-6 rounded-lg flex flex-col justify-between shadow-[4px_4px_0px_#171717] dark:shadow-[4px_4px_0px_#F2D400] space-y-6">
              <div className="space-y-3">
                <div className="w-12 h-12 bg-primary-container text-text-primary flex items-center justify-center rounded border border-text-primary">
                  <Phone className="w-6 h-6" />
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[11px] font-bold text-text-muted uppercase">VOICE CALL</span>
                  <CopyButton textToCopy={BUSINESS_FACTS.contact.phone} label="Copy" />
                </div>
                <h3 className="font-headline text-2xl uppercase text-text-primary dark:text-text-on-dark">
                  {BUSINESS_FACTS.contact.phone}
                </h3>
                <p className="font-body text-xs text-text-muted leading-relaxed">
                  Call directly for urgent batch feasibility and sizing consultation.
                </p>
              </div>

              <div className="pt-2">
                <a
                  href={`tel:${BUSINESS_FACTS.contact.phone}`}
                  className="w-full inline-flex items-center justify-center gap-2 bg-surface-dark text-text-on-dark py-2.5 px-4 font-headline text-xs uppercase tracking-wider rounded hover:bg-surface-dark-secondary active:scale-95 transition-all"
                >
                  <span>CALL DIRECTLY</span>
                </a>
              </div>
            </div>

            {/* 2. WhatsApp */}
            <div className="bg-surface-white dark:bg-surface-dark-secondary border-2 border-text-primary dark:border-surface-dark-secondary p-6 rounded-lg flex flex-col justify-between shadow-[4px_4px_0px_#171717] dark:shadow-[4px_4px_0px_#F2D400] space-y-6">
              <div className="space-y-3">
                <div className="w-12 h-12 bg-primary-container text-text-primary flex items-center justify-center rounded border border-text-primary">
                  <MessageCircle className="w-6 h-6 fill-current stroke-none" />
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[11px] font-bold text-text-muted uppercase">WHATSAPP CHAT</span>
                  <CopyButton textToCopy={BUSINESS_FACTS.contact.whatsapp} label="Copy" />
                </div>
                <h3 className="font-headline text-2xl uppercase text-text-primary dark:text-text-on-dark">
                  {BUSINESS_FACTS.contact.whatsapp}
                </h3>
                <p className="font-body text-xs text-text-muted leading-relaxed">
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
                  className="w-full inline-flex items-center justify-center gap-2 bg-primary-container text-text-primary py-2.5 px-4 font-headline text-xs uppercase tracking-wider rounded hover:bg-primary-fixed active:scale-95 transition-all shadow-[2px_2px_0px_#171717]"
                >
                  <MessageCircle className="w-4 h-4 fill-current stroke-none" />
                  <span>OPEN WHATSAPP →</span>
                </a>
              </div>
            </div>

            {/* 3. Instagram */}
            <div className="bg-surface-white dark:bg-surface-dark-secondary border-2 border-text-primary dark:border-surface-dark-secondary p-6 rounded-lg flex flex-col justify-between shadow-[4px_4px_0px_#171717] dark:shadow-[4px_4px_0px_#F2D400] space-y-6">
              <div className="space-y-3">
                <div className="w-12 h-12 bg-primary-container text-text-primary flex items-center justify-center rounded border border-text-primary">
                  <Instagram className="w-6 h-6" />
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[11px] font-bold text-text-muted uppercase">INSTAGRAM</span>
                  <CopyButton textToCopy={`@${BUSINESS_FACTS.contact.instagram}`} label="Copy" />
                </div>
                <h3 className="font-headline text-2xl uppercase text-text-primary dark:text-text-on-dark">
                  @{BUSINESS_FACTS.contact.instagram}
                </h3>
                <p className="font-body text-xs text-text-muted leading-relaxed">
                  Follow new sample drops, live print floor reels, and mineral wash batches.
                </p>
              </div>

              <div className="pt-2">
                <a
                  href={BUSINESS_FACTS.contact.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-1.5 bg-surface-dark text-text-on-dark py-2.5 px-4 font-headline text-xs uppercase tracking-wider rounded hover:bg-surface-dark-secondary active:scale-95 transition-all"
                >
                  <span>VIEW INSTAGRAM</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* 4. Email */}
            <div className="bg-surface-white dark:bg-surface-dark-secondary border-2 border-text-primary dark:border-surface-dark-secondary p-6 rounded-lg flex flex-col justify-between shadow-[4px_4px_0px_#171717] dark:shadow-[4px_4px_0px_#F2D400] space-y-6">
              <div className="space-y-3">
                <div className="w-12 h-12 bg-primary-container text-text-primary flex items-center justify-center rounded border border-text-primary">
                  <Mail className="w-6 h-6" />
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[11px] font-bold text-text-muted uppercase">OFFICIAL EMAIL</span>
                  <CopyButton textToCopy={BUSINESS_FACTS.contact.email} label="Copy" />
                </div>
                <h3 className="font-headline text-lg uppercase text-text-primary dark:text-text-on-dark break-all">
                  {BUSINESS_FACTS.contact.email}
                </h3>
                <p className="font-body text-xs text-text-muted leading-relaxed">
                  Send high-resolution vector packs (AI, PDF, PSD) or formal purchase orders.
                </p>
              </div>

              <div className="pt-2">
                <a
                  href={`mailto:${BUSINESS_FACTS.contact.email}?subject=Custom%20Apparel%20Requirement`}
                  className="w-full inline-flex items-center justify-center gap-1.5 bg-surface-dark text-text-on-dark py-2.5 px-4 font-headline text-xs uppercase tracking-wider rounded hover:bg-surface-dark-secondary active:scale-95 transition-all"
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
          <section className="bg-surface-white dark:bg-surface-dark-secondary border-2 border-text-primary dark:border-primary-container rounded-xl p-6 sm:p-10 shadow-[6px_6px_0px_#171717] dark:shadow-[6px_6px_0px_#F2D400] space-y-8 relative overflow-hidden">
            {/* Top Badge Strip */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-border-neutral dark:border-surface-dark">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
                  <span className="font-mono text-xs uppercase tracking-widest text-primary-container bg-surface-dark px-2.5 py-0.5 rounded font-bold">
                    PHYSICAL PRINT FLOOR • OPEN
                  </span>
                </div>
                <h2 className="font-headline text-3xl sm:text-5xl uppercase tracking-tight text-text-primary dark:text-text-on-dark pt-2">
                  THE BROVE ATELIER &amp; STUDIO.
                </h2>
                <p className="font-mono text-xs sm:text-sm text-text-muted">
                  M90, TNHB COLONY, STAGE 3, KTC NAGAR, TIRUNELVELI, TAMIL NADU 627011
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <a
                  href="https://maps.app.goo.gl/AsPHhVM3eJ84twAR8?g_st=aw"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded bg-primary-container text-text-primary font-headline text-sm uppercase tracking-wider hover:bg-primary-fixed active:scale-95 transition-all shadow-[3px_3px_0px_#171717] dark:shadow-[3px_3px_0px_#FFFFFF]"
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
                  <h3 className="font-headline text-xl uppercase tracking-wide text-text-primary dark:text-text-on-dark flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-primary-container" />
                    <span>WORKSHOP LOCATION SPECS</span>
                  </h3>
                  
                  <div className="space-y-3 font-mono text-xs">
                    <div className="p-3.5 bg-surface-paper dark:bg-surface-dark rounded border border-border-neutral dark:border-surface-dark space-y-1">
                      <span className="text-text-muted uppercase block font-bold text-[10px]">PHYSICAL STUDIO ADDRESS</span>
                      <span className="text-text-primary dark:text-text-on-dark font-bold text-sm block leading-snug">
                        M90, TNHB colony, Stage 3, KTC Nagar
                      </span>
                      <span className="text-text-primary dark:text-text-on-dark font-mono text-xs block">
                        Tirunelveli, Tamil Nadu 627011
                      </span>
                      <p className="text-[11px] text-text-muted pt-1">Direct walk-in studio &amp; physical print floor.</p>
                    </div>

                    <div className="p-3.5 bg-surface-paper dark:bg-surface-dark rounded border border-border-neutral dark:border-surface-dark">
                      <span className="text-text-muted uppercase block font-bold text-[10px]">CITY &amp; LOGISTICS HUB</span>
                      <span className="text-text-primary dark:text-text-on-dark font-bold text-sm">Tirunelveli, Tamil Nadu — India</span>
                      <p className="text-[11px] text-text-muted pt-1">Direct dispatch corridor via ST Courier across all Indian states (3–7 days).</p>
                    </div>

                    <div className="p-3.5 bg-surface-paper dark:bg-surface-dark rounded border border-border-neutral dark:border-surface-dark space-y-1">
                      <span className="text-text-muted uppercase block font-bold text-[10px]">VISITING HOURS &amp; PROOFING</span>
                      <span className="text-text-primary dark:text-text-on-dark font-bold text-xs">Monday – Saturday: 10:00 AM – 7:30 PM</span>
                      <p className="text-[11px] text-text-muted">Feel fabric swatches, compare 240 GSM oversized tees, and examine embroidery crests in person.</p>
                    </div>
                  </div>
                </div>

                {/* Direct quick action */}
                <div className="p-4 bg-primary-container/10 border border-primary-container/30 rounded flex items-center justify-between gap-3">
                  <div className="space-y-0.5">
                    <span className="font-mono text-[11px] font-bold uppercase text-text-primary dark:text-text-on-dark block">
                      VISITING IN PERSON?
                    </span>
                    <span className="font-body text-xs text-text-muted">
                      Drop a quick WhatsApp ping before coming for instant sample readiness.
                    </span>
                  </div>
                  <a
                    href={`https://wa.me/91${BUSINESS_FACTS.contact.whatsapp}?text=${encodeURIComponent(
                      "Hello BROVE, I'm planning to visit the studio for fabric inspection."
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shrink-0 px-3 py-2 bg-primary-container text-text-primary font-headline text-xs uppercase tracking-wider rounded hover:bg-primary-fixed transition-colors"
                  >
                    PING US →
                  </a>
                </div>
              </div>

              {/* Right Column: Creative Industrial Interactive Map Display */}
              <div className="lg:col-span-7 flex flex-col justify-between rounded-lg overflow-hidden border-2 border-text-primary dark:border-surface-dark bg-surface-dark relative min-h-[380px]">
                {/* Registration Crosshairs (Streetwear workshop detail) */}
                <div className="absolute top-2 left-2 font-mono text-[10px] text-primary-container/80 z-20 pointer-events-none bg-surface-dark/80 px-2 py-0.5 rounded">
                  + TIRUNELVELI PRINT ATELIER
                </div>
                <div className="absolute top-2 right-2 font-mono text-[10px] text-primary-container/80 z-20 pointer-events-none bg-surface-dark/80 px-2 py-0.5 rounded">
                  GPS: 8.7139° N, 77.7567° E +
                </div>

                {/* Embedded Responsive Interactive Map */}
                <div className="w-full h-full min-h-[320px] relative">
                  <iframe
                    title="BROVE Studio Map"
                    src="https://maps.google.com/maps?q=M90,+TNHB+colony,+Stage+3,+KTC+Nagar,+Tirunelveli,+Tamil+Nadu+627011&t=&z=15&ie=UTF8&iwloc=&output=embed"
                    className="w-full h-full min-h-[340px] border-0 filter contrast-125 opacity-90 hover:opacity-100 transition-opacity"
                    loading="lazy"
                    allowFullScreen
                  />
                  {/* Subtle dark gradient overlay at top/bottom for industrial polish */}
                  <div className="absolute inset-x-0 top-0 h-8 bg-gradient-to-b from-surface-dark/40 to-transparent pointer-events-none" />
                </div>

                {/* Interactive Map Footer Bar */}
                <div className="bg-[#171717] border-t-2 border-surface-dark-secondary p-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-text-on-dark font-mono text-xs z-10">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-primary-container shrink-0" />
                    <span className="truncate">BROVE Studio • M90, TNHB colony, KTC Nagar, Tirunelveli</span>
                  </div>

                  <a
                    href="https://maps.app.goo.gl/AsPHhVM3eJ84twAR8?g_st=aw"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-primary-container hover:text-primary-fixed uppercase tracking-wider font-bold transition-colors"
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
              <span className="font-mono text-xs uppercase tracking-widest text-text-muted font-bold block">
                DIRECT SUBMISSION
              </span>
              <h2 className="font-headline text-3xl sm:text-5xl uppercase tracking-tight text-text-primary dark:text-text-on-dark">
                SEND YOUR REQUIREMENTS
              </h2>
              <p className="font-body text-sm text-text-muted leading-relaxed">
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
