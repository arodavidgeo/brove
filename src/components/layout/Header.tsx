import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Search, Sun, Moon, Menu, X } from "lucide-react";
import { BRAND_LOGO } from "../../data/brove-content";
import { useTheme } from "../../context/ThemeContext";
import { SiteSearchModal } from "../ui/SiteSearchModal";

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();

  // Scroll detection for compact header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 25);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setIsMobileOpen(false);
  }, [location.pathname]);

  // Lock body scroll when mobile menu is open
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

  // Global keyboard shortcut '/' to open search
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (
        e.key === "/" &&
        !isSearchOpen &&
        !(e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement)
      ) {
        e.preventDefault();
        setIsSearchOpen(true);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isSearchOpen]);

  // Exact navigation per section 06: HOME, WARDROBE, PROCESS, PRICING, ABOUT, CONTACT
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
      <SiteSearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />

      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b ${
          isScrolled
            ? "h-16 bg-[#F4F1E6]/92 backdrop-blur-md border-[#E6E2D3] shadow-sm"
            : "h-20 bg-[#F4F1E6]/85 backdrop-blur-sm border-[#E6E2D3]"
        }`}
      >
        <div className="h-full max-w-[1400px] mx-auto px-margin-mobile lg:px-margin flex items-center justify-between gap-4">
          
          {/* Left: Brand Logo (Mascot / Character Completely Absent, STUDIO STATUS removed) */}
          <div className="flex items-center gap-4">
            <Link
              to="/"
              className="flex items-center shrink-0 transition-opacity hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-container rounded"
              aria-label="BROVE Custom Apparel Home"
            >
              <img
                src={BRAND_LOGO}
                alt="BROVE Logo"
                className={`w-auto object-contain shrink-0 transition-all duration-300 ${
                  isScrolled ? "h-10 sm:h-12 max-w-[150px]" : "h-12 sm:h-14 max-w-[180px]"
                }`}
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const isActive =
                link.path === "/"
                  ? location.pathname === "/"
                  : location.pathname.startsWith(link.path);
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`uppercase tracking-wider transition-colors text-sm xl:text-base font-bold relative py-1 ${
                    isActive
                      ? "text-[#181816] dark:text-[#F4F1E6]"
                      : "text-[#181816] hover:text-[#5A680C] dark:text-[#F4F1E6] dark:hover:text-[#F2D400]"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-primary-container rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Controls: Search + Dark Mode + Primary CTA + Mobile Menu */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Search Trigger Button */}
            <button
              onClick={() => setIsSearchOpen(true)}
              aria-label="Search site (Press /)"
              title="Search site (Press /)"
              className="p-2 sm:px-3 sm:py-1.5 rounded bg-[#FFFFFF] dark:bg-[#20201D] text-[#181816] dark:text-[#F4F1E6] hover:bg-[#FAF8F0] dark:hover:bg-[#2B2B26] transition-colors flex items-center gap-2 border border-[#E6E2D3] dark:border-[#383832] shadow-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-container"
            >
              <Search className="w-4 h-4 text-[#181816] dark:text-[#F4F1E6]" />
              <span className="hidden sm:inline-block font-mono text-xs text-[#181816] dark:text-[#F4F1E6] font-bold">
                Search
              </span>
              <kbd className="hidden md:inline-block px-1.5 py-0.2 bg-[#FAF8F0] dark:bg-[#262622] text-[#181816] dark:text-[#F4F1E6] font-mono text-[10px] rounded border border-[#E6E2D3] dark:border-[#383832]">
                /
              </kbd>
            </button>

            {/* Dark Mode Toggle */}
            <button
              onClick={toggleTheme}
              aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
              title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
              className="p-2 rounded bg-[#FFFFFF] dark:bg-[#20201D] text-[#2A2A24] dark:text-[#F4F1E6] hover:bg-[#FAF8F0] dark:hover:bg-[#2B2B26] transition-colors border border-[#E6E2D3] dark:border-[#383832] shadow-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-container"
            >
              {theme === "dark" ? (
                <Sun className="w-4 h-4 text-[#F2D400]" />
              ) : (
                <Moon className="w-4 h-4 text-[#2A2A24]" />
              )}
            </button>

            {/* Primary Header CTA: SEND YOUR REQUIREMENT → (Replacing old ecommerce cart) */}
            <Link
              to="/custom-order"
              className="hidden sm:inline-flex items-center justify-center px-4 py-2 rounded bg-primary-container text-text-primary font-headline text-xs sm:text-sm uppercase tracking-wider hover:bg-primary-fixed active:scale-95 transition-all shadow-[2px_2px_0px_#2A2A24] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-text-primary shrink-0"
            >
              SEND YOUR REQUIREMENT →
            </Link>

            {/* Mobile Menu Hamburger */}
            <button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className="lg:hidden p-2 text-[#2A2A24] hover:bg-[#FAF8F0] transition-colors rounded bg-[#FFFFFF] border border-[#E6E2D3]"
              aria-label="Toggle navigation menu"
              aria-expanded={isMobileOpen}
            >
              {isMobileOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {isMobileOpen && (
        <div className="fixed inset-0 z-40 bg-[#F4F1E6]/98 backdrop-blur-md lg:hidden flex flex-col pt-24 px-6 pb-8 overflow-y-auto animate-in fade-in duration-200">
          <div className="flex items-center justify-between pb-6 border-b border-[#E6E2D3]">
            <Link
              to="/"
              onClick={() => setIsMobileOpen(false)}
              className="flex items-center shrink-0"
              aria-label="BROVE Home"
            >
              <img
                src={BRAND_LOGO}
                alt="BROVE Logo"
                className="h-10 w-auto object-contain"
              />
            </Link>
            <div className="flex items-center gap-2">
              <button
                onClick={toggleTheme}
                className="p-2 rounded bg-[#FFFFFF] dark:bg-[#20201D] text-[#2A2A24] dark:text-[#F4F1E6] border border-[#E6E2D3] dark:border-[#383832] transition-colors"
                aria-label="Toggle dark mode"
              >
                {theme === "dark" ? <Sun className="w-4 h-4 text-[#F2D400]" /> : <Moon className="w-4 h-4 text-[#2A2A24]" />}
              </button>
              <span className="font-mono text-xs text-[#2A2A24] bg-[#FAF8F0] border border-[#E6E2D3] px-2.5 py-1 rounded">
                MOQ: 5 PCS
              </span>
            </div>
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
                    isActive
                      ? "text-[#2A2A24] pl-2 border-l-4 border-primary-container"
                      : "text-[#2A2A24]/75 hover:text-[#2A2A24]"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <Link
              to="/#faq"
              onClick={() => setIsMobileOpen(false)}
              className="font-headline text-2xl uppercase tracking-wider text-[#66645A] hover:text-[#2A2A24] pt-2"
            >
              FAQ
            </Link>
          </nav>

          <div className="mt-auto pt-6 border-t border-[#E6E2D3] space-y-4">
            <Link
              to="/custom-order"
              onClick={() => setIsMobileOpen(false)}
              className="w-full py-3.5 bg-primary-container text-text-primary font-headline text-base uppercase tracking-wider rounded text-center block shadow-[2px_2px_0px_#2A2A24]"
            >
              SEND YOUR REQUIREMENT →
            </Link>
            <div className="text-center font-mono text-xs text-[#66645A]">
              ST COURIER 3–7 DAYS • ALL OVER INDIA
            </div>
          </div>
        </div>
      )}
    </>
  );
};
