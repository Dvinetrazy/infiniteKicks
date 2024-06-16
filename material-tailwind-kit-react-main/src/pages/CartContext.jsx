import React, { createContext, useContext, useEffect, useState } from 'react';

const CartContext = createContext();

export const useCart = () => {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }

  return context;
};

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const storedCartItems = localStorage.getItem('cartItems');
    if (storedCartItems) {
      setCartItems(JSON.parse(storedCartItems));
    }
  }, []); // Load cartItems from localStorage on initial render

  const addToCart = (item) => {
    const updatedCartItems = [...cartItems, item];
    setCartItems(updatedCartItems);
    localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
    console.log('Item added to cart:', item);
  };

  const removeFromCart = (itemId, size) => {
    const updatedCartItems = cartItems.filter((item) => !(item.id === itemId && item.size === size));
    setCartItems(updatedCartItems);
    localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
    console.log('Item removed from cart:', itemId, size);
  };

  const clearCart = () => {
    setCartItems([]);
    localStorage.removeItem('cartItems');
    console.log('Cart cleared');
  };

  const getCartItemCount = () => {
    return cartItems.length;
  };

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, clearCart, getCartItemCount }}
    >
      {children}
    </CartContext.Provider>
  );
};
