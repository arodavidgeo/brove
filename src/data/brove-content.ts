import { BusinessContact, BusinessDelivery } from "../types";

/**
 * CENTRALIZED BRAND LOGO CONFIGURATION
 * Set this to the local asset path for the company's official logo image.
 * Default path: "/assets/logo/company-logo.png" (located in public/assets/logo/)
 * Alternatively: "/src/assets/logo/company-logo.png"
 */
export const BRAND_LOGO = "/assets/logo/company-logo.png";

export const BUSINESS_FACTS = {
  brandName: "BROVE",
  tagline: "Wear Your Identity.",
  heroHeadline: "WE PRINT YOUR IDENTITY.",
  heroSubtext: "From ideas to ink, we create custom apparel that speaks your style and story. Premium fabrics, vivid prints, and exact craftsmanship, made for people who want their clothing to say something.",
  moqText: "MINIMUM ORDER: 5 PIECES",
  moqValue: 5,
  
  contact: {
    phone: "9443941897",
    whatsapp: "9443941897",
    instagram: "brove_fabrics",
    instagramUrl: "https://instagram.com/brove_fabrics",
    email: "ashwinkumar412002@gmail.com",
    locationLabel: "BROVE Studio / Official Location",
    locationUrl: "https://maps.google.com/?q=BROVE+Fabrics", // TODO: Owner to supply exact Google Maps URL link
  } as BusinessContact,

  delivery: {
    courier: "ST COURIER",
    timeframe: "3–7 DAYS",
    coverage: "ALL OVER INDIA",
  } as BusinessDelivery,

  audiences: [
    {
      title: "COLLEGES",
      description: "Department events, symposiums, clubs, teams, and student groups.",
    },
    {
      title: "COMPANIES",
      description: "Corporate apparel, team wear, uniforms, branding, and employee merchandise.",
    },
    {
      title: "TEAMS",
      description: "Sports teams, gaming teams, college teams, and community groups.",
    },
    {
      title: "EVENTS",
      description: "Festivals, events, celebrations, campaigns, and special occasions.",
    },
    {
      title: "BUSINESSES",
      description: "Branded apparel, uniforms, promotional clothing, and merchandise.",
    },
    {
      title: "INDIVIDUALS",
      description: "Your artwork. Your quote. Your T-shirt.",
    },
  ],

  processSteps: [
    {
      step: "01",
      title: "YOUR IDEA",
      subtitle: "It starts with an idea.",
      description: "Bring us your artwork, logo, reference, concept, or simply tell us what you have in mind.",
    },
    {
      step: "02",
      title: "WE DESIGN",
      subtitle: "We turn your idea into a print-ready design.",
      description: "We focus on placement, scale, colors, and overall appearance so your final apparel looks right.",
    },
    {
      step: "03",
      title: "WE PRINT",
      subtitle: "Your design meets the right printing method.",
      description: "Choose from DTF printing or embroidery, depending on the look and apparel you're creating.",
    },
    {
      step: "04",
      title: "QUALITY CHECK",
      subtitle: "Every piece gets checked before it leaves us.",
      description: "We pay attention to the print, placement, finishing, and overall quality.",
    },
    {
      step: "05",
      title: "DELIVERED",
      subtitle: "Packed and sent your way.",
      description: "We deliver through ST Courier across India in 3–7 days.",
    },
  ],

  aboutContent: {
    headline: "WE PRINT YOUR IDENTITY.",
    intro: "BROVE is a custom apparel and T-shirt printing company focused on creating clothing that represents the people wearing it.",
    body: "We combine quality apparel, custom printing, embroidery, and careful finishing to turn ideas into wearable designs. From a single concept to apparel for a college, company, team, event, or business, our goal is simple: MAKE YOUR IDEA WEARABLE.",
    pillars: [
      { name: "QUALITY", text: "We care about the final piece, not just the print." },
      { name: "CREATIVITY", text: "Your apparel should look like yours." },
      { name: "COMFORT", text: "Good design starts with good clothing." },
      { name: "AFFORDABILITY", text: "Premium doesn't have to mean impossible." },
    ],
  },
};

// Owner TODO Config Values for items not specified in source content
export const OWNER_CONFIG_TODOS = {
  VITE_SITE_URL: import.meta.env.VITE_SITE_URL || "https://brove.in",
  EXACT_MAPS_URL: "TODO_OWNER_SUPPLY: Insert direct Google Maps Pin URL for BROVE studio location",
  LEGAL_ENTITY_NAME: "BROVE Apparel", // TODO_OWNER_SUPPLY: Legal registered entity name if different
  LEGAL_JURISDICTION: "Tamil Nadu, India", // TODO_OWNER_SUPPLY: Formal legal jurisdiction
  LAST_UPDATED_DATE: "October 4, 2026",
};
