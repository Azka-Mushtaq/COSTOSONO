import React, { useState, createContext } from 'react';

// Create the context
export const ProductModalContext = createContext();

// Product Modal Provider component
export function ProductModalProvider({ children }) {
  const [productDetailsIsOpen, setProductDetailsIsOpen] = useState(true);

  const toggleProductModal = () => {
    setProductDetailsIsOpen(!productDetailsIsOpen);
  };

  return (
    <ProductModalContext.Provider value={{setProductDetailsIsOpen, productDetailsIsOpen, toggleProductModal }}>
      {children}
    </ProductModalContext.Provider>
  );
}
