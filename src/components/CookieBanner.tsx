'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { initGA, grantAnalyticsConsent, denyAnalyticsConsent } from '@/lib/analytics';

interface CookieConsent {
  necessary: boolean;
  functional: boolean;
  analytics: boolean;
  timestamp: string;
}

interface CookieBannerProps {
  onClose?: () => void;
  forceShow?: boolean;
  hideBackdrop?: boolean;
}

const CookieBanner = ({ onClose, forceShow = false, hideBackdrop = false }: CookieBannerProps) => {
  const [showBanner, setShowBanner] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [consent, setConsent] = useState<CookieConsent>({
    necessary: true, // Always true - required for website functionality
    functional: false,
    analytics: false,
    timestamp: ''
  });

  useEffect(() => {
    // If forceShow is true, always show the banner
    if (forceShow) {
      setShowBanner(true);
      // Load existing consent if available
      const existingConsent = localStorage.getItem('cookie-consent');
      if (existingConsent) {
        const parsedConsent = JSON.parse(existingConsent);
        setConsent(parsedConsent);
      }
      return;
    }

    // Normal behavior - check if user has already given consent
    const existingConsent = localStorage.getItem('cookie-consent');
    if (!existingConsent) {
      setShowBanner(true);
    } else {
      const parsedConsent = JSON.parse(existingConsent);
      setConsent(parsedConsent);
      
      // Check if consent is older than 12 months
      const consentDate = new Date(parsedConsent.timestamp);
      const now = new Date();
      const monthsDiff = (now.getFullYear() - consentDate.getFullYear()) * 12 + 
                        (now.getMonth() - consentDate.getMonth());
      
      if (monthsDiff >= 12) {
        setShowBanner(true);
      } else {
        // Apply existing consent
        applyConsent(parsedConsent);
      }
    }
  }, [forceShow]);

  const saveConsent = (newConsent: CookieConsent) => {
    const consentWithTimestamp = {
      ...newConsent,
      timestamp: new Date().toISOString()
    };
    
    localStorage.setItem('cookie-consent', JSON.stringify(consentWithTimestamp));
    setConsent(consentWithTimestamp);
    applyConsent(consentWithTimestamp);
    setShowBanner(false);
    
    // Call onClose callback if provided (for policy page integration)
    if (onClose) {
      onClose();
    }
  };

  const applyConsent = (consentData: CookieConsent) => {
    // Initialize Google Analytics if not already done
    if (typeof window !== 'undefined' && !window.gtag) {
      initGA();
    }

    // Apply analytics consent
    if (consentData.analytics) {
      grantAnalyticsConsent();
    } else {
      denyAnalyticsConsent();
    }
  };

  const handleAcceptAll = () => {
    saveConsent({
      necessary: true,
      functional: true,
      analytics: true,
      timestamp: new Date().toISOString()
    });
  };

  const handleRejectAll = () => {
    saveConsent({
      necessary: true,
      functional: false,
      analytics: false,
      timestamp: new Date().toISOString()
    });
  };

  const handleSavePreferences = () => {
    saveConsent(consent);
  };

  const handleConsentChange = (category: keyof CookieConsent, value: boolean) => {
    if (category === 'necessary') return; // Cannot change necessary cookies
    setConsent(prev => ({ ...prev, [category]: value }));
  };

  if (!showBanner) return null;

  return (
    <>
      {/* Backdrop */}
      {!hideBackdrop && (
        <div className="fixed inset-0 bg-black/50 z-40" onClick={() => setShowBanner(false)}></div>
      )}
      
      {/* Cookie Banner */}
      <div className="fixed bottom-0 left-0 right-0 z-50 p-2 sm:p-4 md:p-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg sm:rounded-xl shadow-2xl border border-neutral/10 max-h-[85vh] sm:max-h-[90vh] overflow-hidden">
            {!showDetails ? (
              // Main Banner Content
              <div className="p-4 sm:p-6 md:p-8">
                <div className="flex items-start mb-3 sm:mb-4">
                  <div className="h-8 w-8 sm:h-10 sm:w-10 rounded-lg sm:rounded-xl bg-primary/15 flex items-center justify-center text-primary mr-3 sm:mr-4 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-base sm:text-lg font-bold text-neutral mb-1 sm:mb-2">
                      🍪 We respect your privacy
                    </h3>
                    <p className="text-xs sm:text-sm text-neutral/80 leading-relaxed">
                      We use cookies to improve your experience on our website,
                      analyze website traffic and understand where our visitors come from.
                      You can decide for yourself which categories of cookies you want to allow.
                    </p>
                  </div>
                </div>

                

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                  <button
                    onClick={handleRejectAll}
                    className="flex-1 px-3 py-2 sm:px-4 sm:py-3 border border-neutral/20 text-neutral font-medium rounded-md hover:bg-neutral/5 transition-colors duration-300 text-xs sm:text-sm"
                  >
                    Essential cookies only
                  </button>
                  <button
                    onClick={() => setShowDetails(true)}
                    className="flex-1 px-3 py-2 sm:px-4 sm:py-3 border border-primary text-primary font-medium rounded-md hover:bg-primary/5 transition-colors duration-300 text-xs sm:text-sm"
                  >
                    Customize settings
                  </button>
                  <button
                    onClick={handleAcceptAll}
                    className="flex-1 px-3 py-2 sm:px-4 sm:py-3 bg-primary text-white font-medium rounded-md hover:bg-primary-dark transition-colors duration-300 text-xs sm:text-sm"
                  >
                    Accept all
                  </button>
                </div>

                {/* Legal Links */}
                <div className="mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-neutral/10 text-xs text-neutral/60 text-center">
                  For more information, please see our{' '}
                  <Link href="/privacy" className="text-primary hover:underline font-medium">
                    Privacy Policy
                  </Link>
                  {' '}and{' '}
                  <Link href="/cookie-policy" className="text-primary hover:underline font-medium">
                    Cookie Policy
                  </Link>
                </div>
              </div>
            ) : (
              // Detailed Settings
              <div className="p-4 sm:p-6 md:p-8 flex flex-col h-full">
                <div className="flex items-center justify-between mb-4 sm:mb-6 flex-shrink-0">
                  <h3 className="text-base sm:text-lg font-bold text-neutral">Cookie Settings</h3>
                  <button
                    onClick={() => setShowDetails(false)}
                    className="h-7 w-7 sm:h-8 sm:w-8 rounded-full bg-neutral/10 flex items-center justify-center text-neutral/60 hover:bg-neutral/20 transition-colors"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                <div className="space-y-3 sm:space-y-4 flex-1 overflow-y-auto max-h-[50vh] sm:max-h-96">
                  {/* Necessary Cookies */}
                  <div className="border border-neutral/10 rounded-lg p-3 sm:p-4">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center">
                        <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-500 rounded-full mr-2 sm:mr-3"></div>
                        <h4 className="font-semibold text-neutral text-sm sm:text-base">Essential Cookies</h4>
                      </div>
                      <div className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-medium">
                        Always active
                      </div>
                    </div>
                    <p className="text-xs sm:text-sm text-neutral/70 mb-2 sm:mb-3">
                      These cookies are required for the proper functioning of the website and cannot be disabled.
                    </p>
                    <div className="text-xs text-neutral/60">
                      <strong>Purpose:</strong> Session management, security, contact form functionality<br/>
                      <strong>Provider:</strong> Carter Tree Care (First-Party)<br/>
                      <strong>Storage duration:</strong> Session / 30 days
                    </div>
                  </div>

                  {/* Functional Cookies */}
                  <div className="border border-neutral/10 rounded-lg p-3 sm:p-4">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center">
                        <div className="w-2 h-2 sm:w-3 sm:h-3 bg-blue-500 rounded-full mr-2 sm:mr-3"></div>
                        <h4 className="font-semibold text-neutral text-sm sm:text-base">Functional Cookies</h4>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          checked={consent.functional}
                          onChange={(e) => handleConsentChange('functional', e.target.checked)}
                          className="sr-only peer"
                        />
                        <div className="w-9 h-5 sm:w-11 sm:h-6 bg-neutral/20 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-4 after:w-4 sm:after:h-5 sm:after:w-5 after:transition-all peer-checked:bg-primary"></div>
                      </label>
                    </div>
                    <p className="text-xs sm:text-sm text-neutral/70 mb-2 sm:mb-3">
                      These cookies enable advanced functionalities and personalizations, such as language settings and user preferences.
                    </p>
                    <div className="text-xs text-neutral/60">
                      <strong>Purpose:</strong> Language preferences, user experience<br/>
                      <strong>Provider:</strong> Carter Tree Care (First-Party)<br/>
                      <strong>Storage duration:</strong> 12 months
                    </div>
                  </div>

                  {/* Analytics Cookies */}
                  <div className="border border-neutral/10 rounded-lg p-3 sm:p-4">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center">
                        <div className="w-2 h-2 sm:w-3 sm:h-3 bg-purple-500 rounded-full mr-2 sm:mr-3"></div>
                        <h4 className="font-semibold text-neutral text-sm sm:text-base">Analytics Cookies</h4>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          checked={consent.analytics}
                          onChange={(e) => handleConsentChange('analytics', e.target.checked)}
                          className="sr-only peer"
                        />
                        <div className="w-9 h-5 sm:w-11 sm:h-6 bg-neutral/20 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-4 after:w-4 sm:after:h-5 sm:after:w-5 after:transition-all peer-checked:bg-primary"></div>
                      </label>
                    </div>
                    <p className="text-xs sm:text-sm text-neutral/70 mb-2 sm:mb-3">
                      These cookies help us understand how visitors interact with our website so we can improve it.
                    </p>
                    <div className="text-xs text-neutral/60">
                      <strong>Purpose:</strong> Website analysis, visitor statistics, performance monitoring<br/>
                      <strong>Provider:</strong> Google Analytics (Third-Party)<br/>
                      <strong>Storage duration:</strong> 26 months<br/>
                      <strong>Data transfer:</strong> USA (adequate level of protection)
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-neutral/10 flex-shrink-0">
                  <button
                    onClick={handleRejectAll}
                    className="flex-1 px-3 py-2 sm:px-4 sm:py-3 border border-neutral/20 text-neutral font-medium rounded-md hover:bg-neutral/5 transition-colors duration-300 text-xs sm:text-sm"
                  >
                    Reject all
                  </button>
                  <button
                    onClick={handleSavePreferences}
                    className="flex-1 px-3 py-2 sm:px-4 sm:py-3 bg-primary text-white font-medium rounded-md hover:bg-primary-dark transition-colors duration-300 text-xs sm:text-sm"
                  >
                    Save settings
                  </button>
                  <button
                    onClick={handleAcceptAll}
                    className="flex-1 px-3 py-2 sm:px-4 sm:py-3 bg-primary text-white font-medium rounded-md hover:bg-primary-dark transition-colors duration-300 text-xs sm:text-sm"
                  >
                    Accept all
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default CookieBanner; 