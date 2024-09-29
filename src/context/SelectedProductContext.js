import React, { useState, createContext } from 'react';

// Create the context
export const SelectedProductContext = createContext();

// Cart Provider component
export function SelectedProductProvider({ children }) {
  // Correct useState usage
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <SelectedProductContext.Provider value={{ selectedProduct, setSelectedProduct }}>
      {children}
    </SelectedProductContext.Provider>
  );
}
