'use client';

import React, { useState, useEffect } from 'react';
import CookieBanner from './CookieBanner';

const CookieWidget = () => {
  const [showBanner, setShowBanner] = useState(false);
  const [hasConsent, setHasConsent] = useState(false);

  useEffect(() => {
    // Check if user has given any consent
    const existingConsent = localStorage.getItem('cookie-consent');
    if (existingConsent) {
      setHasConsent(true);
    }
  }, []);

  const handleOpenSettings = () => {
    setShowBanner(true);
  };

  const handleCloseSettings = () => {
    setShowBanner(false);
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    // Only close if clicking the backdrop itself, not its children
    if (e.target === e.currentTarget) {
      handleCloseSettings();
    }
  };

  // Only show widget if user has already given consent
  if (!hasConsent) return null;

  return (
    <>
      {/* Floating Cookie Settings Widget */}
      <div className="fixed bottom-4 left-4 z-30">
        <button
          onClick={handleOpenSettings}
          className="group bg-white shadow-lg border border-neutral/10 rounded-full p-3 hover:shadow-xl transition-all duration-300 hover:scale-105"
          aria-label="Cookie-Einstellungen öffnen"
          title="Cookie-Einstellungen"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-5 w-5 text-neutral group-hover:text-primary transition-colors" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" 
            />
          </svg>
        </button>
      </div>

      {/* Cookie Banner when opened */}
      {showBanner && (
        <div className="fixed inset-0 z-40">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/50" 
            onClick={handleBackdropClick}
          ></div>
          
          {/* Banner Container */}
          <div className="relative z-10 pointer-events-none h-full flex items-end justify-center p-4 sm:p-6">
            <div className="pointer-events-auto max-w-4xl w-full">
              <CookieBanner onClose={handleCloseSettings} forceShow={true} hideBackdrop={true} />
            </div>
          </div>
          
          {/* Close button overlay */}
          <div className="absolute top-4 right-4 z-20">
            <button
              onClick={handleCloseSettings}
              className="bg-white rounded-full p-2 shadow-lg border border-neutral/10 hover:bg-neutral/5 transition-colors"
              aria-label="Schließen"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-neutral" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default CookieWidget; 