import React, { useState } from "react";
import { SEOHead } from "../components/layout/SEOHead";
import { FAQS } from "../data/faq";
import { ChevronDown, Phone, MessageCircle } from "lucide-react";
import { BUSINESS_FACTS } from "../data/brove-content";
import { WorkshopTicker } from "../components/layout/WorkshopTicker";

export const FAQPage: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <SEOHead
        title="FAQ : Frequently Asked Questions | BROVE Custom Apparel"
        description="Answers to common questions regarding minimum order quantity (5 pieces), DTF printing, embroidery, college & corporate bulk orders, sizing, and ST Courier delivery across India."
        path="/faq"
      />

      <div className="w-full bg-surface-paper dark:bg-surface-dark text-text-primary dark:text-text-on-dark pt-20 transition-colors duration-200">
        
        {/* Header Hero */}
        <section className="w-full bg-surface-dark text-text-on-dark py-12 md:py-16 border-b-4 border-primary-container relative overflow-hidden">
          <div className="max-w-[1400px] mx-auto px-margin-mobile lg:px-margin space-y-4 relative z-10">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 bg-primary-container inline-block"></span>
                <span className="font-mono text-xs uppercase tracking-widest text-primary-container font-bold">
                  STUDIO QUESTIONS &amp; PRODUCTION POLICIES
                </span>
              </div>
              <div className="bg-primary-container text-text-primary px-3 py-1 font-mono text-xs uppercase tracking-wider font-bold shadow-sm">
                MINIMUM ORDER: 5 PIECES
              </div>
            </div>

            <div className="max-w-3xl space-y-2">
              <h1 className="font-headline text-5xl sm:text-7xl lg:text-8xl uppercase tracking-tight text-text-on-dark leading-none">
                FREQUENTLY ASKED.
              </h1>
              <p className="font-headline text-2xl sm:text-3xl text-primary-container uppercase tracking-wide">
                CLEAR ANSWERS. NO HIDDEN POLICIES.
              </p>
              <p className="font-body text-base text-surface-container-highest max-w-2xl leading-relaxed">
                Everything you need to know about placing custom apparel orders, artwork readiness, minimum quantities, print methods, and nationwide shipping.
              </p>
            </div>
          </div>
        </section>

        <WorkshopTicker />

        <div className="max-w-[900px] mx-auto px-margin-mobile lg:px-margin py-12 sm:py-16 space-y-12">
          
          {/* Accordion List */}
          <div className="space-y-4">
            {FAQS.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={faq.question}
                  id={`faq-${index}`}
                  className="bg-surface-white dark:bg-surface-dark-secondary border-2 border-text-primary dark:border-surface-dark-secondary rounded-lg shadow-[4px_4px_0px_#171717] dark:shadow-[4px_4px_0px_#F2D400] overflow-hidden transition-all"
                >
                  <button
                    type="button"
                    onClick={() => toggleAccordion(index)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${index}`}
                    className="w-full p-6 text-left flex items-center justify-between gap-4 font-headline text-xl sm:text-2xl uppercase tracking-wide text-text-primary dark:text-text-on-dark hover:bg-surface-paper/50 dark:hover:bg-surface-dark transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-container"
                  >
                    <span>{faq.question}</span>
                    <ChevronDown
                      className={`w-6 h-6 shrink-0 text-text-primary dark:text-primary-container transition-transform duration-200 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div
                      id={`faq-answer-${index}`}
                      className="px-6 pb-6 pt-1 text-sm sm:text-base font-body text-text-muted dark:text-surface-container-highest leading-relaxed border-t border-border-neutral dark:border-surface-dark"
                    >
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Support Strip */}
          <div className="bg-surface-dark text-text-on-dark p-8 rounded-lg border-2 border-primary-container text-center space-y-4 shadow-[6px_6px_0px_#171717]">
            <h3 className="font-headline text-3xl uppercase text-text-on-dark">
              STILL HAVE A QUESTION?
            </h3>
            <p className="font-body text-sm text-surface-container-highest max-w-md mx-auto">
              Our workshop technicians are available to answer sizing, design resolution, and delivery inquiries.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <a
                href={`tel:${BUSINESS_FACTS.contact.phone}`}
                className="px-5 py-3 rounded bg-surface-dark-secondary text-text-on-dark font-mono text-xs uppercase font-bold flex items-center gap-2 hover:bg-surface-dark border border-surface-dark-secondary transition-colors"
              >
                <Phone className="w-4 h-4 text-primary-container" />
                <span>{BUSINESS_FACTS.contact.phone}</span>
              </a>
              <a
                href={`https://wa.me/91${BUSINESS_FACTS.contact.whatsapp}?text=${encodeURIComponent(
                  "Hello BROVE, I have a question regarding custom apparel orders."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded bg-primary-container text-text-primary font-headline text-sm uppercase tracking-wider flex items-center gap-2 hover:bg-primary-fixed active:scale-95 transition-all shadow-[2px_2px_0px_#FFFFFF]"
              >
                <MessageCircle className="w-4 h-4 fill-current stroke-none" />
                <span>CHAT ON WHATSAPP</span>
              </a>
            </div>
          </div>

        </div>

      </div>
    </>
  );
};
