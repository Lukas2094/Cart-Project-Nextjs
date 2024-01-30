// contexts/CartContext.tsx
import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';

interface CartItem {
  id: string;
  title: string;
  price: number;
  quantity: number;
  src: string;
}

interface CartContextProps {
  cartItems: CartItem[];
  addToCart: (item: CartItem) => void;
  updateCartItem: (item: CartItem) => void;
  removeCartItem: (itemId: string) => void;
  cartCount: number;
}

const CartContext = createContext<CartContextProps | undefined>(undefined);

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const storedCartItems = localStorage.getItem('cartItems');
    const storedCartCount = localStorage.getItem('cartCount');

    if (storedCartItems) {
      setCartItems(JSON.parse(storedCartItems));
    }

    if (storedCartCount) {
      setCartCount(Number(storedCartCount));
    }
  }, []);

  const addToCart = (item: CartItem) => {
    setCartItems((prevItems) => [...prevItems, item]);
    setCartCount((prevCount) => prevCount + 1);
  };

  const updateCartItem = (item: CartItem) => {
    setCartItems((prevItems) => prevItems.map((cartItem) => (cartItem.id === item.id ? item : cartItem)));
  };

  const removeCartItem = (itemId: string) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
    setCartCount((prevCount) => Math.max(0, prevCount - 1));
  };

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    localStorage.setItem('cartCount', cartCount.toString());
  }, [cartItems, cartCount]);

  return (
    <CartContext.Provider value={{ cartItems, addToCart, updateCartItem, removeCartItem, cartCount }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
