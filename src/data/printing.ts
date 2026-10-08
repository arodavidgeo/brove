import { PrintMethodInfo } from "../types";

export const PRINTING_METHODS: Record<string, PrintMethodInfo> = {
  dtf: {
    id: "dtf",
    name: "DTF PRINTING",
    headline: "VIBRANT. DETAILED. CUSTOM.",
    description: "Direct-to-Film printing gives your artwork vibrant colors and detailed graphics.",
    idealFor: [
      "Custom T-shirts",
      "Oversized apparel",
      "Hoodies",
      "Sweatshirts",
      "Event apparel",
      "Team apparel",
      "Custom graphics",
    ],
    bestFor: "detailed, colorful and expressive artwork.",
    badge: "DIRECT-TO-FILM",
  },
  embroidery: {
    id: "embroidery",
    name: "EMBROIDERY",
    headline: "TEXTURE YOU CAN FEEL.",
    description: "Embroidery gives your apparel a premium, tactile finish.",
    idealFor: [
      "Polo T-shirts",
      "Hoodies",
      "Shirts",
      "Uniforms",
      "Company apparel",
      "Team apparel",
      "Logos and branding",
    ],
    bestFor: "logos, names, branding and premium minimal designs.",
    badge: "TACTILE FINISH",
  },
};
