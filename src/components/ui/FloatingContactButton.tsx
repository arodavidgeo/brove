import React from "react";
import { MessageCircle } from "lucide-react";
import { BUSINESS_FACTS } from "../../data/brove-content";

export const FloatingContactButton: React.FC = () => {
  const whatsAppUrl = `https://wa.me/91${BUSINESS_FACTS.contact.whatsapp}?text=${encodeURIComponent(
    "Hello BROVE, I'd like to enquire about custom apparel printing."
  )}`;

  return (
    <aside
      aria-label="Direct studio messaging"
      className="floating-contact fixed bottom-6 right-6 z-40 flex items-center group"
    >
      <a
        href={whatsAppUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp with BROVE"
        className="flex items-center gap-2.5 px-4 py-3 rounded-full bg-primary-container text-text-primary border-2 border-text-primary shadow-[4px_4px_0px_#171717] hover:bg-primary-fixed hover:scale-105 active:scale-95 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-text-primary"
      >
        <MessageCircle className="w-5 h-5 fill-current stroke-none shrink-0" />
        <span className="font-mono text-xs font-bold uppercase tracking-wider hidden sm:inline-block">
          CHAT WITH BROVE
        </span>
      </a>
    </aside>
  );
};
