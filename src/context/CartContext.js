import React, { useState, useEffect, createContext } from 'react';

// Create the context
export const CartContext = createContext();

// Cart Provider component
export function CartProvider({ children }) {
  // Load the cart from localStorage, using a function to initialize the state
  const [cartItems, setCartItems] = useState(() => {
    const savedCartItems = localStorage.getItem('cartItems');
    return savedCartItems ? JSON.parse(savedCartItems) : [];
  });

  // State for subtotal
  const [subtotal, setSubtotal] = useState(0);

  // Save cart items to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));

    // Calculate subtotal whenever cartItems change
    const calculatedSubtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
    setSubtotal(calculatedSubtotal);
  }, [cartItems]);

  // Add item to the cart
const addItemInCart = (item, quantity) => {
  const itemExists = cartItems.some((cartItem) => cartItem.id === item.id);
  
  // Create a new item object with the quantity
  const itemWithQuantity = { ...item, quantity };

  if (!itemExists) {
      // If the item does not exist, add it to the cart
      setCartItems((prevItems) => [...prevItems, itemWithQuantity]);
  } else {
      // If the item exists, update the quantity
      setCartItems((prevItems) =>
          prevItems.map((cartItem) =>
              cartItem.id === item.id
                  ? { ...cartItem, quantity } // Update quantity
                  : cartItem
          )
      );
  }
};

  // Remove item from the cart and update localStorage
  const removeItemFromCart = (itemId) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
  };

  return (
    <CartContext.Provider value={{ cartItems, addItemInCart, removeItemFromCart, subtotal }}>
      {children}
    </CartContext.Provider>
  );
}
