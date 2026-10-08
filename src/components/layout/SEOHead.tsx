import React, { useEffect } from "react";

interface SEOHeadProps {
  title: string;
  description: string;
  path?: string;
}

export const SEOHead: React.FC<SEOHeadProps> = ({ title, description, path = "" }) => {
  useEffect(() => {
    // Update document title
    document.title = `${title} | BROVE Custom Apparel`;

    // Update meta description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement("meta");
      metaDesc.setAttribute("name", "description");
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute("content", description);

    // Canonical link
    const baseUrl = import.meta.env.VITE_SITE_URL || "https://brove.in";
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", `${baseUrl}${path}`);
  }, [title, description, path]);

  return null;
};
