import React from "react";
import { Link } from "react-router-dom";
import { BRAND_LOGO, BUSINESS_FACTS } from "../../data/brove-content";
import { PRODUCTS } from "../../data/products";
import { formatPrice } from "../../lib/utils";

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-surface-dark text-text-on-dark border-t border-surface-dark-secondary">
      <div className="max-w-[1400px] mx-auto px-margin-mobile lg:px-margin pt-space-xl pb-space-lg">
        {/* Top Header Strip */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-space-lg pb-space-xl border-b border-surface-dark-secondary">
          <div className="flex items-center gap-4">
            <Link to="/" aria-label="BROVE Home">
              <img
                src={BRAND_LOGO}
                alt="BROVE Logo"
                className="h-16 sm:h-20 w-auto object-contain shrink-0"
              />
            </Link>
            <div className="space-y-space-xs">
              <p className="font-headline text-4xl sm:text-6xl uppercase text-primary-container leading-none tracking-tight">
                BROVE
              </p>
              <p className="font-headline text-xl sm:text-2xl uppercase tracking-wider text-text-on-dark">
                WEAR YOUR IDENTITY.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-space-md">
            <div className="bg-primary-container text-text-primary px-space-md py-space-xs rounded font-headline text-sm uppercase tracking-widest">
              MINIMUM ORDER: 5 PIECES
            </div>
            <div className="bg-surface-dark-secondary text-text-on-dark px-space-md py-space-xs rounded font-mono text-xs uppercase tracking-wider">
              ST COURIER | 3–7 DAYS | ALL OVER INDIA
            </div>
          </div>
        </div>

        {/* 4 Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-xl py-space-xl">
          {/* Col 1: Navigation */}
          <div className="space-y-space-md">
            <p className="font-mono text-xs uppercase tracking-widest text-primary-container font-bold">
              NAVIGATION
            </p>
            <ul className="grid grid-cols-2 gap-y-space-xs gap-x-space-md text-sm text-text-on-dark">
              <li><Link className="hover:text-primary-container transition-colors" to="/">HOME</Link></li>
              <li><Link className="hover:text-primary-container transition-colors" to="/wardrobe">WARDROBE</Link></li>
              <li><Link className="hover:text-primary-container transition-colors" to="/process">PROCESS</Link></li>
              <li><Link className="hover:text-primary-container transition-colors" to="/pricing">PRICING</Link></li>
              <li><Link className="hover:text-primary-container transition-colors" to="/our-work">OUR WORK</Link></li>
              <li><Link className="hover:text-primary-container transition-colors" to="/about">ABOUT</Link></li>
              <li><Link className="hover:text-primary-container transition-colors" to="/contact">CONTACT</Link></li>
              <li><Link className="hover:text-primary-container transition-colors" to="/why-brove">WHY BROVE</Link></li>
              <li><Link className="hover:text-primary-container transition-colors" to="/custom-order">CUSTOM ORDER</Link></li>
              <li><Link className="hover:text-primary-container transition-colors" to="/faq">FAQ</Link></li>
            </ul>
          </div>

          {/* Col 2: Catalogue (Dynamically sourced from centralized products data) */}
          <div className="space-y-space-md">
            <p className="font-mono text-xs uppercase tracking-widest text-primary-container font-bold">
              CATALOGUE
            </p>
            <ul className="space-y-space-xs text-sm text-text-on-dark">
              {PRODUCTS.map((prod) => (
                <li key={prod.id}>
                  <Link
                    className="hover:text-primary-container transition-colors flex items-center justify-between"
                    to={`/product/${prod.id}`}
                  >
                    <span>{prod.name}</span>
                    <span className="font-mono text-xs text-text-muted">
                      ({formatPrice(prod.price, prod.pricingType)})
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Studio Contact */}
          <div className="space-y-space-md">
            <p className="font-mono text-xs uppercase tracking-widest text-primary-container font-bold">
              STUDIO CONTACT
            </p>
            <div className="space-y-space-xs text-sm text-text-on-dark font-mono">
              <p className="flex items-center gap-space-xs">
                <span className="text-primary-container text-xs uppercase font-bold">Phone:</span>
                <a href={`tel:${BUSINESS_FACTS.contact.phone}`} className="hover:text-primary-container">
                  {BUSINESS_FACTS.contact.phone}
                </a>
              </p>
              <p className="flex items-center gap-space-xs">
                <span className="text-primary-container text-xs uppercase font-bold">WhatsApp:</span>
                <a
                  href={`https://wa.me/91${BUSINESS_FACTS.contact.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary-container"
                >
                  {BUSINESS_FACTS.contact.whatsapp}
                </a>
              </p>
              <p className="flex items-center gap-space-xs">
                <span className="text-primary-container text-xs uppercase font-bold">Instagram:</span>
                <a
                  href={BUSINESS_FACTS.contact.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary-container"
                >
                  @{BUSINESS_FACTS.contact.instagram}
                </a>
              </p>
              <p className="flex items-center gap-space-xs">
                <span className="text-primary-container text-xs uppercase font-bold">Email:</span>
                <a
                  href={`mailto:${BUSINESS_FACTS.contact.email}`}
                  className="hover:text-primary-container break-all"
                >
                  {BUSINESS_FACTS.contact.email}
                </a>
              </p>
            </div>
          </div>

          {/* Col 4: Print Workshop Notice (Authentic BROVE info, no fabricated guarantees) */}
          <div className="space-y-space-md">
            <p className="font-mono text-xs uppercase tracking-widest text-primary-container font-bold">
              CUSTOM APPAREL WORKSHOP
            </p>
            <div className="bg-surface-dark-secondary p-space-md rounded space-y-space-xs border border-surface-dark-secondary">
              <p className="font-headline text-lg uppercase text-text-on-dark">
                PRINT &amp; EMBROIDERY
              </p>
              <p className="text-xs text-text-muted leading-relaxed">
                Direct physical workshop printmaking and custom embroidery for college symposiums, department events, clubs, teams, companies, and personal group orders. Minimum order 5 pieces.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Rights Strip */}
        <div className="pt-space-lg border-t border-surface-dark-secondary flex flex-col sm:flex-row items-center justify-between gap-space-md text-xs text-text-muted">
          <p>© {new Date().getFullYear()} BROVE APPAREL &amp; PRINTING WORKSHOP. ALL RIGHTS RESERVED.</p>
          <div className="flex items-center gap-space-md font-mono uppercase tracking-wider">
            <span>CUSTOM APPAREL</span>
            <span>•</span>
            <span>DTF &amp; EMBROIDERY</span>
            <span>•</span>
            <span>ST COURIER ALL INDIA</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
