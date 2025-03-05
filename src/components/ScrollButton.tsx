// src/components/ScrollButton.tsx
"use client"
import React, { useState, useEffect } from 'react';

const ScrollButton: React.FC = () => {
  // State to track if the button should be visible
  const [isVisible, setIsVisible] = useState(false);

  // Handle scroll event to toggle button visibility
  const handleScroll = () => {
    if (window.scrollY > 300) { // Show button after scrolling 300px
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll to the top of the page when the button is clicked
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Set up event listener for scroll
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll); // Clean up the event listener
    };
  }, []);

  return (
    isVisible && (
      <button
        onClick={scrollToTop}
        className="fixed bottom-10 right-10 bg-blue-600 text-white p-4 rounded-full shadow-lg transform transition-all duration-300 hover:scale-110 hover:bg-blue-500"
        aria-label="Scroll to top"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 19V6M5 12l7-7 7 7" />
        </svg>
      </button>
    )
  );
};

export default ScrollButton;
