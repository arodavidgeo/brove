import React from "react";

export const SkipToContent: React.FC = () => {
  return (
    <a
      href="#main-content"
      className="skip-link sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[9999] focus:px-4 focus:py-2 focus:bg-primary-container focus:text-text-primary focus:font-mono focus:text-xs focus:font-bold focus:shadow-[3px_3px_0px_#171717] focus:border focus:border-text-primary transition-all rounded"
    >
      Skip to content
    </a>
  );
};
