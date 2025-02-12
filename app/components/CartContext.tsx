"use client";
import { createContext, useState, useContext, ReactNode, useEffect } from "react";

// Define Cart Item Type
type CartItem = {
  id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
};

// Context Type
type CartContextType = {
  cart: CartItem[];
  addToCart: (product: CartItem) => void;
  removeFromCart: (id: string) => void;
  total: number;
};

// Create Context
const CartContext = createContext<CartContextType | undefined>(undefined);

// Provide Cart Context
export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);

  // Load cart from localStorage on mount
  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) setCart(JSON.parse(storedCart));
  }, []);
  // Save cart to localStorage only if it changes
useEffect(() => {
  if (cart.length > 0) {
    localStorage.setItem("cart", JSON.stringify(cart));
  }
}, [cart]);


  // Save cart to localStorage
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // Add Item to Cart
  function addToCart(product: CartItem) {
    setCart((prev) => {
      const existingItem = prev.find((item) => item.id === product.id);
      if (existingItem) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  }

  // Remove Item from Cart
  function removeFromCart(id: string) {
    setCart((prev) => prev.filter((item) => item.id !== id));
  }

  // Calculate Total Price
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, total }}>
      {children}
    </CartContext.Provider>
  );
}

// Hook for Cart
export function useCart() {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used within a CartProvider");
  return context;
}
