import React from "react";
import { SEOHead } from "../components/layout/SEOHead";
import { BUSINESS_FACTS, OWNER_CONFIG_TODOS } from "../data/brove-content";
import { AlertCircle } from "lucide-react";

export const PrivacyPage: React.FC = () => {
  return (
    <>
      <SEOHead
        title="PRIVACY POLICY : BROVE Custom Apparel"
        description="BROVE privacy policy regarding customer data, uploaded artwork files, order information, and local storage usage."
        path="/privacy"
      />

      <section className="py-16 bg-brove-paper border-b-2 border-brove-charcoal">
        <div className="max-w-[900px] mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          {/* Header */}
          <div className="border-b-2 border-brove-charcoal pb-6 space-y-2">
            <div className="inline-block bg-brove-yellow text-brove-charcoal px-3 py-1 font-mono text-xs font-bold border border-brove-charcoal">
              LEGAL DOCUMENTATION
            </div>
            <h1 className="font-display text-5xl sm:text-6xl font-bold text-brove-charcoal">
              PRIVACY POLICY
            </h1>
            <div className="font-mono text-xs text-brove-ink">
              LAST UPDATED: {OWNER_CONFIG_TODOS.LAST_UPDATED_DATE} • OPERATING ENTITY: {OWNER_CONFIG_TODOS.LEGAL_ENTITY_NAME}
            </div>
          </div>

          {/* Mandatory Pre-launch Review Notice */}
          <div className="bg-amber-100 border-2 border-amber-500 p-4 font-mono text-xs text-amber-900 space-y-1">
            <div className="font-bold flex items-center gap-2">
              <AlertCircle className="w-4 h-4 text-amber-700 shrink-0" />
              <span>LEGAL REVIEW NOTICE</span>
            </div>
            <p>
              This Privacy Policy is a baseline operational draft generated strictly from supplied business facts. It must be formally reviewed and finalized by a qualified legal professional prior to public launch.
            </p>
          </div>

          <div className="bg-white border-2 border-brove-charcoal p-8 space-y-6 font-sans text-sm text-brove-charcoal leading-relaxed shadow-[6px_6px_0px_0px_rgba(23,23,23,1)]">
            
            <section className="space-y-2">
              <h2 className="font-display text-2xl font-bold text-brove-charcoal">1. OVERVIEW</h2>
              <p>
                {OWNER_CONFIG_TODOS.LEGAL_ENTITY_NAME} ("BROVE", "we", "our") respects your privacy. This policy outlines how we handle information collected when you use our custom apparel printing website.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="font-display text-2xl font-bold text-brove-charcoal">2. INFORMATION WE COLLECT</h2>
              <p>We collect only data necessary to process and deliver your custom apparel orders:</p>
              <ul className="list-disc pl-5 space-y-1 font-mono text-xs">
                <li>Contact Information: Name, phone/WhatsApp number, email address.</li>
                <li>Shipping Details: Street address, city, state, PIN code.</li>
                <li>Custom Artwork: Image and graphic files uploaded for DTF printing or embroidery.</li>
                <li>Local Browser Data: Transient cart items stored in your web browser's LocalStorage.</li>
              </ul>
            </section>

            <section className="space-y-2">
              <h2 className="font-display text-2xl font-bold text-brove-charcoal">3. HOW WE USE YOUR DATA</h2>
              <p>
                Your information is used strictly to verify custom printing specifications, communicate order status via Phone/WhatsApp/Email, and dispatch packages via {BUSINESS_FACTS.delivery.courier}.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="font-display text-2xl font-bold text-brove-charcoal">4. THIRD-PARTY DISCLOSURE</h2>
              <p>
                We do not sell or trade your data. Customer delivery addresses are shared only with our logistics courier partner ({BUSINESS_FACTS.delivery.courier}) for delivery execution across India.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="font-display text-2xl font-bold text-brove-charcoal">5. CONTACT US</h2>
              <p>For questions regarding this privacy policy draft, contact us at:</p>
              <div className="font-mono text-xs bg-brove-paper p-3 border border-brove-border">
                Email: {BUSINESS_FACTS.contact.email} • Phone: {BUSINESS_FACTS.contact.phone}
              </div>
            </section>

          </div>

        </div>
      </section>
    </>
  );
};
