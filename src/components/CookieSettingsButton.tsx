'use client';

import { useState, useEffect } from 'react';
import CookieBanner from './CookieBanner';

const CookieSettingsButton = () => {
  const [showSettings, setShowSettings] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleOpenSettings = () => {
    console.log('Opening cookie settings...'); // Debug log
    setShowSettings(true);
  };

  const handleCloseSettings = () => {
    console.log('Closing cookie settings...'); // Debug log
    setShowSettings(false);
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    // Only close if clicking the backdrop itself, not its children
    if (e.target === e.currentTarget) {
      handleCloseSettings();
    }
  };

  // Don't render until mounted to avoid hydration issues
  if (!mounted) {
    return (
      <button
        disabled
        className="inline-flex items-center px-6 py-3 bg-primary/50 text-white font-medium rounded-md cursor-not-allowed"
      >
        🍪 Cookie-Einstellungen öffnen
      </button>
    );
  }

  return (
    <>
      <button
        onClick={handleOpenSettings}
        className="inline-flex items-center px-6 py-3 bg-primary text-white font-medium rounded-md hover:bg-primary-dark transition-colors duration-300"
      >
        🍪 Cookie-Einstellungen öffnen
      </button>

      {/* Cookie Banner when opened */}
      {showSettings && (
        <div className="fixed inset-0 z-40">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/50" 
            onClick={handleBackdropClick}
          ></div>
          
          {/* Banner Container */}
          <div className="relative z-10 pointer-events-none h-full flex items-end justify-center p-4 sm:p-6">
            <div className="pointer-events-auto max-w-4xl w-full">
              <CookieBanner key={`settings-${Date.now()}`} onClose={handleCloseSettings} forceShow={true} hideBackdrop={true} />
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

export default CookieSettingsButton; 