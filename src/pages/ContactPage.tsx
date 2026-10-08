import React, { useState } from "react";
import { SEOHead } from "../components/layout/SEOHead";
import { BUSINESS_FACTS } from "../data/brove-content";
import { Phone, MessageSquare, Instagram, Mail, MapPin, ArrowUpRight, CheckCircle2, Send } from "lucide-react";

export const ContactPage: React.FC = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    apparelType: "Oversized T-Shirt",
    quantity: "5",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <>
      <SEOHead
        title="CONTACT BROVE : Tiruppur & Tamil Nadu Studio Workshop"
        description="Direct line to the BROVE print workshop. Call or WhatsApp 9443941897, email ashwinkumar412002@gmail.com, or drop your technical pack for pre-press evaluation."
        path="/contact"
      />

      <div className="flex flex-col w-full bg-surface-paper">
        {/* Dark Charcoal Studio Header */}
        <section className="w-full bg-surface-dark text-text-on-dark py-12 md:py-16 border-b-4 border-primary-container">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 flex flex-col gap-6">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 bg-primary-container"></span>
              <span className="font-mono text-xs uppercase tracking-widest text-primary-container font-bold">
                COMMUNICATIONS &amp; ATELIER ACCESS
              </span>
            </div>

            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
              <div className="max-w-3xl space-y-3">
                <h1 className="font-headline text-5xl md:text-7xl uppercase text-text-on-dark tracking-tight leading-none">
                  TALK TO THE WORKSHOP.
                </h1>
                <p className="font-body text-base md:text-lg text-surface-container-high max-w-2xl leading-relaxed">
                  No automated chatbots or generic ticketing queues. You speak directly to our printers and production technicians regarding fabric weights, color proofs, and custom timelines.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-2">
                <span className="bg-primary-container text-text-primary px-3 py-1 font-mono text-xs uppercase tracking-wider font-bold">
                  DIRECT WHATSAPP: 9443941897
                </span>
                <span className="bg-surface-dark-secondary text-text-on-dark px-3 py-1 font-mono text-xs uppercase tracking-wider">
                  MON–SAT: 9 AM – 8 PM IST
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* 4 Pillar Direct Channels */}
        <section className="py-12 bg-surface-paper">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              
              {/* Phone & WhatsApp */}
              <div className="bg-white border-2 border-text-primary p-6 rounded flex flex-col justify-between shadow-[4px_4px_0px_#171717] space-y-6">
                <div className="space-y-3">
                  <div className="w-12 h-12 bg-primary-container text-text-primary flex items-center justify-center rounded border border-text-primary">
                    <Phone className="w-6 h-6" />
                  </div>
                  <span className="font-mono text-xs font-bold text-text-muted uppercase">DIRECT CALL &amp; WHATSAPP</span>
                  <div className="font-headline text-3xl uppercase text-text-primary">
                    {BUSINESS_FACTS.contact.phone}
                  </div>
                  <p className="font-body text-xs text-text-muted">
                    Immediate print feasibility audit, fabric consultation, and dispatch coordination.
                  </p>
                </div>

                <div className="space-y-2 pt-2">
                  <a
                    href={`https://wa.me/91${BUSINESS_FACTS.contact.whatsapp}?text=Hello%20BROVE,%20I%20have%20an%20apparel%20printing%20enquiry`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 bg-primary-container text-text-primary py-2.5 px-4 font-mono text-xs uppercase tracking-wider font-bold shadow-[2px_2px_0px_#171717] hover:bg-white active:scale-95 transition-all border border-text-primary"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>OPEN WHATSAPP CHAT</span>
                  </a>
                  <a
                    href={`tel:${BUSINESS_FACTS.contact.phone}`}
                    className="w-full inline-flex items-center justify-center gap-2 bg-surface-dark text-text-on-dark py-2.5 px-4 font-mono text-xs uppercase tracking-wider font-bold hover:bg-surface-dark-secondary transition-all"
                  >
                    <span>CALL DIRECTLY</span>
                  </a>
                </div>
              </div>

              {/* Instagram */}
              <div className="bg-white border-2 border-text-primary p-6 rounded flex flex-col justify-between shadow-[4px_4px_0px_#171717] space-y-6">
                <div className="space-y-3">
                  <div className="w-12 h-12 bg-primary-container text-text-primary flex items-center justify-center rounded border border-text-primary">
                    <Instagram className="w-6 h-6" />
                  </div>
                  <span className="font-mono text-xs font-bold text-text-muted uppercase">OFFICIAL INSTAGRAM</span>
                  <div className="font-headline text-3xl uppercase text-text-primary">
                    @{BUSINESS_FACTS.contact.instagram}
                  </div>
                  <p className="font-body text-xs text-text-muted">
                    Daily print floor drops, DTF wash tests, embroidery macro shots, and client apparel runs.
                  </p>
                </div>

                <div className="pt-2">
                  <a
                    href={BUSINESS_FACTS.contact.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 bg-surface-dark text-text-on-dark py-2.5 px-4 font-mono text-xs uppercase tracking-wider font-bold hover:bg-surface-dark-secondary transition-all shadow-[2px_2px_0px_#f2d400]"
                  >
                    <span>FOLLOW @BROVE_FABRICS</span>
                    <ArrowUpRight className="w-4 h-4 text-primary-container" />
                  </a>
                </div>
              </div>

              {/* Email Enquiries */}
              <div className="bg-white border-2 border-text-primary p-6 rounded flex flex-col justify-between shadow-[4px_4px_0px_#171717] space-y-6">
                <div className="space-y-3">
                  <div className="w-12 h-12 bg-primary-container text-text-primary flex items-center justify-center rounded border border-text-primary">
                    <Mail className="w-6 h-6" />
                  </div>
                  <span className="font-mono text-xs font-bold text-text-muted uppercase">EMAIL TECH PACKS</span>
                  <div className="font-mono text-sm font-bold text-text-primary break-all">
                    {BUSINESS_FACTS.contact.email}
                  </div>
                  <p className="font-body text-xs text-text-muted">
                    Send vector files (.ai, .eps, .pdf), high-res PSD artwork, or corporate procurement sheets.
                  </p>
                </div>

                <div className="pt-2">
                  <a
                    href={`mailto:${BUSINESS_FACTS.contact.email}?subject=BROVE%20Custom%20Apparel%20Inquiry`}
                    className="w-full inline-flex items-center justify-center gap-2 bg-primary-container text-text-primary py-2.5 px-4 font-mono text-xs uppercase tracking-wider font-bold shadow-[2px_2px_0px_#171717] hover:bg-white transition-all border border-text-primary"
                  >
                    <span>COMPOSE EMAIL</span>
                  </a>
                </div>
              </div>

              {/* Physical Studio Hub */}
              <div className="bg-white border-2 border-text-primary p-6 rounded flex flex-col justify-between shadow-[4px_4px_0px_#171717] space-y-6">
                <div className="space-y-3">
                  <div className="w-12 h-12 bg-primary-container text-text-primary flex items-center justify-center rounded border border-text-primary">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <span className="font-mono text-xs font-bold text-text-muted uppercase">PRODUCTION LOCATION</span>
                  <div className="font-headline text-3xl uppercase text-text-primary">
                    TIRUPPUR STUDIO
                  </div>
                  <p className="font-body text-xs text-text-muted">
                    Located in Tamil Nadu textile manufacturing belt. Direct dispatch all over India via ST Courier.
                  </p>
                </div>

                <div className="pt-2">
                  <a
                    href={BUSINESS_FACTS.contact.locationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 bg-surface-paper text-text-primary py-2.5 px-4 font-mono text-xs uppercase tracking-wider font-bold hover:bg-white transition-all border border-text-primary"
                  >
                    <span>LOCATE ATELIER</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Studio Direct Message / Tech Pack Submission Section */}
        <section className="py-12 bg-white border-t border-b border-border-neutral">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              <div className="lg:col-span-5 space-y-6">
                <div className="space-y-2">
                  <span className="font-mono text-xs uppercase text-text-muted tracking-widest font-bold">
                    PRE-PRESS BRIEFING
                  </span>
                  <h2 className="font-headline text-4xl md:text-5xl uppercase text-text-primary leading-tight">
                    SUBMIT YOUR CUSTOM PRINT RUN REQUIREMENTS.
                  </h2>
                  <p className="font-body text-sm text-text-muted leading-relaxed">
                    Planning a brand drop, college event apparel, brand uniform, or gym merchandise? Send us your expected numbers and we'll reply with a pre-flight assessment within 2 business hours.
                  </p>
                </div>

                <div className="bg-surface-paper p-6 rounded border border-border-neutral space-y-3 font-mono text-xs">
                  <div className="flex items-center gap-2 text-text-primary font-bold">
                    <CheckCircle2 className="w-4 h-4 text-primary-container fill-primary-container stroke-text-primary" />
                    <span>STRICT 5-PIECE MINIMUM ORDER QUANTITY</span>
                  </div>
                  <div className="flex items-center gap-2 text-text-primary font-bold">
                    <CheckCircle2 className="w-4 h-4 text-primary-container fill-primary-container stroke-text-primary" />
                    <span>FREE COLOR &amp; SCALING PROOF ON SCREEN</span>
                  </div>
                  <div className="flex items-center gap-2 text-text-primary font-bold">
                    <CheckCircle2 className="w-4 h-4 text-primary-container fill-primary-container stroke-text-primary" />
                    <span>3–7 DAY PAN-INDIA DISPATCH VIA ST COURIER</span>
                  </div>
                </div>
              </div>

              {/* Interactive Form */}
              <div className="lg:col-span-7 bg-surface-paper p-8 rounded-lg border-2 border-text-primary shadow-[6px_6px_0px_#171717]">
                {formSubmitted ? (
                  <div className="py-12 text-center space-y-4">
                    <div className="w-16 h-16 bg-primary-container text-text-primary rounded-full mx-auto flex items-center justify-center font-headline text-3xl border-2 border-text-primary">
                      ✓
                    </div>
                    <h3 className="font-headline text-3xl uppercase text-text-primary">TECH PACK BRIEF RECEIVED</h3>
                    <p className="font-body text-sm text-text-muted max-w-md mx-auto">
                      Our workshop technician will review your specifications and contact you directly via WhatsApp at <strong>{formData.phone}</strong>.
                    </p>
                    <button
                      onClick={() => setFormSubmitted(false)}
                      className="inline-block mt-4 text-xs font-mono font-bold underline uppercase"
                    >
                      Submit Another Requirement
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block font-mono text-xs uppercase font-bold text-text-primary mb-1">
                          YOUR NAME *
                        </label>
                        <input
                          required
                          type="text"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="e.g. Ashwin Kumar"
                          className="w-full bg-white border border-border-neutral p-3 rounded font-body text-sm focus:outline-none focus:border-text-primary"
                        />
                      </div>
                      <div>
                        <label className="block font-mono text-xs uppercase font-bold text-text-primary mb-1">
                          WHATSAPP NUMBER *
                        </label>
                        <input
                          required
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="e.g. 9443941897"
                          className="w-full bg-white border border-border-neutral p-3 rounded font-body text-sm focus:outline-none focus:border-text-primary"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block font-mono text-xs uppercase font-bold text-text-primary mb-1">
                          APPAREL CANVASES
                        </label>
                        <select
                          value={formData.apparelType}
                          onChange={(e) => setFormData({ ...formData, apparelType: e.target.value })}
                          className="w-full bg-white border border-border-neutral p-3 rounded font-body text-sm focus:outline-none focus:border-text-primary"
                        >
                          <option>Oversized T-Shirt (₹450)</option>
                          <option>Regular Fit T-Shirt (₹350)</option>
                          <option>Acid Wash Oversized (₹500)</option>
                          <option>Polo T-Shirt (₹360)</option>
                          <option>Heavyweight Hoodie (₹800)</option>
                          <option>Full Hand Sweatshirt (₹500)</option>
                          <option>Custom Mix Batch</option>
                        </select>
                      </div>
                      <div>
                        <label className="block font-mono text-xs uppercase font-bold text-text-primary mb-1">
                          ESTIMATED QUANTITY (MIN. 5) *
                        </label>
                        <input
                          required
                          type="number"
                          min="5"
                          value={formData.quantity}
                          onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                          className="w-full bg-white border border-border-neutral p-3 rounded font-body text-sm focus:outline-none focus:border-text-primary font-mono"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block font-mono text-xs uppercase font-bold text-text-primary mb-1">
                        DESIGN NOTES &amp; PLACEMENT DETAILS
                      </label>
                      <textarea
                        rows={3}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Mention print size (A3 back, chest logo), colors, fabric color, or timeline requirements..."
                        className="w-full bg-white border border-border-neutral p-3 rounded font-body text-sm focus:outline-none focus:border-text-primary"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full inline-flex items-center justify-center gap-2 bg-primary-container text-text-primary py-3.5 px-6 font-mono text-sm uppercase tracking-wider font-bold shadow-[2px_2px_0px_#171717] hover:bg-white active:scale-95 transition-all border border-text-primary"
                    >
                      <Send className="w-4 h-4" />
                      <span>SUBMIT TO BROVE PRINTERS</span>
                    </button>
                  </form>
                )}
              </div>

            </div>
          </div>
        </section>
      </div>
    </>
  );
};
