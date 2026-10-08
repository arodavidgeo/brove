export type PricingType = "fixed" | "custom";
export type PerspectiveType = "front" | "back" | "macro" | "fit";

export interface WorkSample {
  id: string;
  image: string;
  title: string;
  perspective: PerspectiveType;
  perspectiveLabel: string;
  apparelType: string;
  printMethod: string;
  highlight?: string;
  description?: string;
}

export interface Product {
  id: string;
  name: string;
  price: number | null;
  pricingType: PricingType;
  description: string;
  shortDescription?: string;
  category: string;
  image: string;
  referenceImages: string[];
  workSamples?: WorkSample[];
  availablePrintingMethods: ("DTF" | "Embroidery")[];
  moq: number;
  customizable: boolean;
  availableSizes: string[];
  availableColors: { name: string; hex: string }[];
  details?: string[];
  fabricWeight?: string;
}

export type PrintMethodType = "dtf" | "embroidery";

export interface PrintMethodInfo {
  id: PrintMethodType;
  name: string;
  headline: string;
  description: string;
  idealFor: string[];
  bestFor: string;
  badge: string;
}

export interface BusinessContact {
  phone: string;
  whatsapp: string;
  instagram: string;
  instagramUrl: string;
  email: string;
  locationLabel: string;
  locationUrl: string;
}

export interface BusinessDelivery {
  courier: string;
  timeframe: string;
  coverage: string;
}

export interface CartItem {
  id: string; // unique line item id
  productId: string;
  productName: string;
  image: string;
  printMethod: PrintMethodType;
  size: string;
  color: string;
  quantity: number;
  unitPrice: number | null; // null for custom pricing
  pricingType: PricingType;
  customNotes?: string;
  artworkUrl?: string; // object URL or data string
  artworkName?: string;
}

export interface CustomerDetails {
  name: string;
  phone: string;
  email: string;
  address: string;
  city: string;
  state: string;
  pinCode: string;
  country: string;
}

export interface OrderRecord {
  orderId: string;
  createdAt: string;
  items: CartItem[];
  customer: CustomerDetails;
  subtotal: number;
  deliveryFee: number | string;
  total: number;
  status: "PENDING_CONFIRMATION" | "PROCESSING" | "DISPATCHED";
  paymentMethod: "DEMO_GATEWAY" | "DIRECT_ENQUIRY";
}

export interface FAQItem {
  question: string;
  answer: string;
  category?: string;
}
