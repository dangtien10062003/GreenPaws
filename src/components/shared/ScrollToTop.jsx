import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-24 right-4 md:right-4 lg:right-6 md:bottom-24 lg:bottom-6 z-30 w-14 h-14 bg-white hover:bg-neutral-50 text-primary-600 rounded-lg shadow-ambient-lg border-2 border-primary-200 flex items-center justify-center text-xl transition-all duration-300 hover:scale-110 hover:shadow-ambient active:scale-95"
          title="Scroll to top"
          aria-label="Scroll to top"
        >
          <span className="material-icons">arrow_upward</span>
        </button>
      )}
    </>
  );
};

export default ScrollToTop;

