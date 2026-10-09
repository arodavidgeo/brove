import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export const CookieBanner: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("brove-cookie-consent");
    if (!consent) {
      // Small timeout so it doesn't abruptly pop in on first frame
      const timer = setTimeout(() => setVisible(true), 1200);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("brove-cookie-consent", "accepted");
    setVisible(false);
  };

  const handleDismiss = () => {
    localStorage.setItem("brove-cookie-consent", "dismissed");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="region"
      aria-label="Cookie consent banner"
      className="cookie-banner fixed bottom-4 left-4 right-4 sm:left-6 sm:right-auto sm:max-w-md z-50 p-4 rounded bg-surface-dark text-text-on-dark border-2 border-primary-container shadow-[4px_4px_0px_#171717] transition-all duration-300 animate-in fade-in slide-in-from-bottom-4"
    >
      <div className="flex flex-col gap-3">
        <p className="font-body text-xs text-surface-container-highest leading-relaxed">
          We use cookies to improve your experience and understand site usage.
        </p>
        <div className="flex items-center gap-2 pt-1">
          <button
            onClick={handleAccept}
            className="px-4 py-1.5 bg-primary-container text-text-primary font-mono text-xs font-bold uppercase tracking-wider rounded hover:bg-primary-fixed active:scale-95 transition-all shadow-[2px_2px_0px_#FFFFFF]"
          >
            Accept
          </button>
          <Link
            to="/privacy"
            onClick={handleDismiss}
            className="px-3 py-1.5 text-text-muted hover:text-text-on-dark font-mono text-xs uppercase tracking-wider transition-colors"
          >
            Learn More
          </Link>
        </div>
      </div>
    </div>
  );
};
