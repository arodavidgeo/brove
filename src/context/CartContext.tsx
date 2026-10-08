import React, { createContext, useContext, useEffect, useState } from "react";
import { CartItem } from "../types";

interface CartContextType {
  cart: CartItem[];
  addToCart: (item: Omit<CartItem, "id">) => void;
  removeFromCart: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  subtotal: number;
  itemCount: number;
  hasCustomPriceItems: boolean;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

const LOCAL_STORAGE_KEY = "brove_cart_v1";

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed)) {
          return parsed;
        }
      }
    } catch (e) {
      console.warn("Failed to load BROVE cart from localStorage:", e);
    }
    return [];
  });

  useEffect(() => {
    try {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(cart));
    } catch (e) {
      console.warn("Failed to save BROVE cart to localStorage:", e);
    }
  }, [cart]);

  const addToCart = (newItemData: Omit<CartItem, "id">) => {
    setCart((prevCart) => {
      // Find if an identical line item configuration exists
      const existingIndex = prevCart.findIndex(
        (item) =>
          item.productId === newItemData.productId &&
          item.printMethod === newItemData.printMethod &&
          item.size === newItemData.size &&
          item.color === newItemData.color &&
          item.artworkName === newItemData.artworkName
      );

      if (existingIndex > -1) {
        const updated = [...prevCart];
        const existing = updated[existingIndex];
        updated[existingIndex] = {
          ...existing,
          quantity: existing.quantity + newItemData.quantity,
          customNotes: newItemData.customNotes || existing.customNotes,
        };
        return updated;
      } else {
        const newId = `brove_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`;
        return [...prevCart, { ...newItemData, id: newId }];
      }
    });
  };

  const removeFromCart = (id: string) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const updateQuantity = (id: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(id);
      return;
    }
    setCart((prev) =>
      prev.map((item) => (item.id === id ? { ...item, quantity } : item))
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  const subtotal = cart.reduce((acc, item) => {
    if (item.unitPrice !== null) {
      return acc + item.unitPrice * item.quantity;
    }
    return acc;
  }, 0);

  const itemCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  const hasCustomPriceItems = cart.some((item) => item.pricingType === "custom" || item.unitPrice === null);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        subtotal,
        itemCount,
        hasCustomPriceItems,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
