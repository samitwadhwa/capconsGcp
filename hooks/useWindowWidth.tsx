"use client";
import { useState, useLayoutEffect } from "react";

function useWindowWidth() {
  // Check if window is defined before setting its initial state
  const [windowWidth, setWindowWidth] = useState<number>(
    typeof window !== "undefined" ? window.innerWidth : 0
  );

  // useLayoutEffect to handle window resize events
  useLayoutEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Initialize the window width on mount
    setWindowWidth(window.innerWidth);

    // Add event listener only if running in the browser
    if (typeof window !== "undefined") {
      window.addEventListener("resize", handleResize);
    }

    // Cleanup function to remove event listener
    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("resize", handleResize);
      }
    };
  }, []);

  return windowWidth;
}

export default useWindowWidth;
