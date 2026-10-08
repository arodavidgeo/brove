import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { BRAND_LOGO } from "../../data/brove-content";

export const Header: React.FC = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileOpen(false);
  }, [location.pathname]);

  // Lock scroll when mobile menu is open
  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileOpen]);

  // Updated navigation: HOME, WARDROBE, PROCESS, PRICING, ABOUT, CONTACT (No PRINTING duplicate)
  const navLinks = [
    { label: "HOME", path: "/" },
    { label: "WARDROBE", path: "/wardrobe" },
    { label: "PROCESS", path: "/process" },
    { label: "PRICING", path: "/pricing" },
    { label: "ABOUT", path: "/about" },
    { label: "CONTACT", path: "/contact" },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 bg-surface-dark border-b border-surface-dark-secondary">
        <div className="h-20 max-w-[1400px] mx-auto px-margin-mobile lg:px-margin flex items-center justify-between gap-gutter">
          
          {/* Logo & Brand Identity Image Slot */}
          <div className="flex items-center gap-4">
            <Link
              to="/"
              className="flex items-center shrink-0 transition-opacity hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-container rounded"
              aria-label="Company Home"
            >
              <img
                src={BRAND_LOGO}
                alt="BROVE Logo"
                className="h-12 sm:h-14 w-auto max-w-[160px] sm:max-w-[220px] object-contain shrink-0"
              />
            </Link>

            {/* Active Studio Status Indicator */}
            <div className="hidden 2xl:flex items-center gap-2 bg-surface-dark-secondary/80 border border-surface-dark-secondary px-3 py-1 rounded-full text-xs font-mono">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span className="text-text-on-dark tracking-wider uppercase text-[10px]">
                STUDIO STATUS: <span className="text-primary-container font-bold">OPEN (MOQ 5)</span>
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center gap-space-lg" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const isActive =
                link.path === "/"
                  ? location.pathname === "/"
                  : location.pathname.startsWith(link.path);
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`uppercase tracking-wider transition-colors text-sm font-bold ${
                    isActive
                      ? "text-primary-container border-b-2 border-primary-container pb-0.5"
                      : "text-text-on-dark hover:text-primary-container"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Right Header Actions: Requirement CTA + Mobile Toggle (Ecommerce Cart Removed) */}
          <div className="flex items-center gap-space-sm sm:gap-space-md">
            {/* Primary Order Requirement CTA */}
            <Link
              to="/custom-order"
              className="inline-flex items-center justify-center px-4 sm:px-5 py-2 sm:py-2.5 rounded bg-primary-container text-text-primary font-headline text-sm uppercase tracking-wider hover:bg-primary-fixed active:scale-95 transition-all shadow-[2px_2px_0px_#171717]"
            >
              START YOUR ORDER →
            </Link>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className="xl:hidden p-2 text-text-on-dark hover:text-primary-container transition-colors rounded bg-surface-dark-secondary"
              aria-label="Toggle navigation menu"
              aria-expanded={isMobileOpen}
            >
              <span className="material-symbols-outlined text-[24px]">
                {isMobileOpen ? "close" : "menu"}
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {isMobileOpen && (
        <div className="fixed inset-0 z-40 bg-surface-dark/95 backdrop-blur-md xl:hidden flex flex-col pt-24 px-6 pb-8 overflow-y-auto">
          <div className="flex items-center justify-between pb-6 border-b border-surface-dark-secondary">
            <Link
              to="/"
              onClick={() => setIsMobileOpen(false)}
              className="flex items-center shrink-0 transition-opacity hover:opacity-90"
              aria-label="Company Home"
            >
              <img
                src={BRAND_LOGO}
                alt="BROVE Logo"
                className="h-10 sm:h-12 w-auto max-w-[150px] sm:max-w-[180px] object-contain shrink-0"
              />
            </Link>
            <span className="font-mono text-xs text-primary-container bg-surface-dark-secondary px-2.5 py-1 rounded">
              MIN ORDER: 5 PIECES
            </span>
          </div>

          <nav className="flex flex-col gap-4 py-8">
            {navLinks.map((link) => {
              const isActive =
                link.path === "/"
                  ? location.pathname === "/"
                  : location.pathname.startsWith(link.path);
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMobileOpen(false)}
                  className={`font-headline text-3xl uppercase tracking-wider transition-colors ${
                    isActive ? "text-primary-container pl-2 border-l-4 border-primary-container" : "text-text-on-dark hover:text-primary-container"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <Link
              to="/our-work"
              onClick={() => setIsMobileOpen(false)}
              className="font-headline text-2xl uppercase tracking-wider text-text-muted hover:text-text-on-dark pt-2"
            >
              OUR WORK
            </Link>
            <Link
              to="/why-brove"
              onClick={() => setIsMobileOpen(false)}
              className="font-headline text-2xl uppercase tracking-wider text-text-muted hover:text-text-on-dark"
            >
              WHY BROVE
            </Link>
            <Link
              to="/faq"
              onClick={() => setIsMobileOpen(false)}
              className="font-headline text-2xl uppercase tracking-wider text-text-muted hover:text-text-on-dark"
            >
              FAQ
            </Link>
          </nav>

          <div className="mt-auto pt-6 border-t border-surface-dark-secondary space-y-4">
            <Link
              to="/custom-order"
              onClick={() => setIsMobileOpen(false)}
              className="w-full py-3.5 bg-primary-container text-text-primary font-headline text-lg uppercase tracking-wider rounded text-center block shadow-[2px_2px_0px_#FFFFFF]"
            >
              START YOUR ORDER →
            </Link>
            <div className="text-center font-mono text-xs text-text-muted">
              ST COURIER 3–7 DAYS • ALL OVER INDIA
            </div>
          </div>
        </div>
      )}
    </>
  );
};
