"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

// Define the shape of the context value
interface UtilitiesContextType {
  isOpen: boolean;
  toggle: () => void;
}

// Initialize context with a default value (this will be overridden in the provider)
const UtilitiesContext = createContext<UtilitiesContextType | null>(null);

// Define the provider component
const UtilitiesProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState<boolean>(true);

  const toggle = () => setIsOpen((prev) => !prev);

  return (
    <UtilitiesContext.Provider value={{ isOpen, toggle }}>
      {children}
    </UtilitiesContext.Provider>
  );
};

// Custom hook to use the UtilitiesContext
const useToggle = () => {
  const context = useContext(UtilitiesContext);
  if (context === null) {
    throw new Error("useToggle must be used within a UtilitiesProvider");
  }
  return context;
};

export default UtilitiesProvider;
export { useToggle };
