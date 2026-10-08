import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatPrice(price: number | null, pricingType: "fixed" | "custom" = "fixed"): string {
  if (pricingType === "custom" || price === null) {
    return "CUSTOM PRICING";
  }
  return `₹${price.toLocaleString("en-IN")}`;
}
