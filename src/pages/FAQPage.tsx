import React, { useState } from "react";
import { SEOHead } from "../components/layout/SEOHead";
import { FAQS } from "../data/faq";
import { ChevronDown, Phone } from "lucide-react";
import { BUSINESS_FACTS } from "../data/brove-content";

export const FAQPage: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <SEOHead
        title="FREQUENTLY ASKED QUESTIONS : BROVE"
        description="Find answers to common questions about BROVE custom apparel, minimum order quantity (5 pcs), DTF printing, embroidery, delivery, and bulk pricing."
        path="/faq"
      />

      <section className="py-16 bg-brove-paper border-b-2 border-brove-charcoal">
        <div className="max-w-[900px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <div className="inline-block bg-brove-yellow text-brove-charcoal px-3 py-1 font-mono text-xs font-bold border border-brove-charcoal">
              HELP & SUPPORT
            </div>
            <h1 className="font-display text-5xl sm:text-7xl font-bold text-brove-charcoal tracking-tight">
              FREQUENTLY ASKED QUESTIONS
            </h1>
            <p className="text-brove-ink text-base font-sans">
              Everything you need to know about placing custom orders, minimum quantities, printing methods, and delivery.
            </p>
          </div>

          {/* Accordion Container */}
          <div className="space-y-4">
            {FAQS.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={faq.question}
                  className="bg-white border-2 border-brove-charcoal shadow-[4px_4px_0px_0px_rgba(23,23,23,1)] transition-all"
                >
                  <button
                    type="button"
                    onClick={() => toggleAccordion(index)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${index}`}
                    className="w-full p-6 text-left flex items-center justify-between gap-4 font-display text-2xl text-brove-charcoal hover:bg-brove-paper/50 transition-colors focus-visible:ring-2 focus-visible:ring-brove-charcoal"
                  >
                    <span>{faq.question}</span>
                    <ChevronDown
                      className={`w-6 h-6 text-brove-charcoal shrink-0 transition-transform duration-200 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div
                      id={`faq-answer-${index}`}
                      className="px-6 pb-6 pt-2 text-sm font-sans text-brove-ink leading-relaxed border-t border-brove-border"
                    >
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Direct Support Contact */}
          <div className="bg-brove-yellow border-2 border-brove-charcoal p-8 text-center space-y-4 shadow-[6px_6px_0px_0px_rgba(23,23,23,1)]">
            <h2 className="font-display text-3xl font-bold text-brove-charcoal">
              STILL HAVE A QUESTION?
            </h2>
            <p className="text-sm font-sans text-brove-charcoal">
              Reach out directly to our team on Phone or WhatsApp.
            </p>
            <div className="flex justify-center gap-4 pt-2">
              <a
                href={`tel:${BUSINESS_FACTS.contact.phone}`}
                className="inline-flex items-center gap-2 bg-brove-charcoal text-brove-paper px-6 py-3 font-display text-xl tracking-wider border-2 border-brove-charcoal hover:bg-brove-graphite transition-all shadow-[2px_2px_0px_0px_rgba(255,255,255,1)]"
              >
                <Phone className="w-5 h-5 text-brove-yellow" />
                <span>{BUSINESS_FACTS.contact.phone}</span>
              </a>
            </div>
          </div>

        </div>
      </section>
    </>
  );
};
