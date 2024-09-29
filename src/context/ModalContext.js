import React, { useState, createContext } from 'react';

// Create the context
export const ModalContext = createContext();

// Modal Provider component
export function ModalProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <ModalContext.Provider value={{ isOpen, toggleModal }}>
      {children}
    </ModalContext.Provider>
  );
}
