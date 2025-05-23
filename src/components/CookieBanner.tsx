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
      <div className="fixed bottom-0 left-0 right-0 z-50 p-4 sm:p-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-2xl border border-neutral/10">
            {!showDetails ? (
              // Main Banner Content
              <div className="p-6 sm:p-8">
                <div className="flex items-start mb-4">
                  <div className="h-10 w-10 rounded-xl bg-primary/15 flex items-center justify-center text-primary mr-4 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-neutral mb-2">
                      🍪 Wir respektieren Ihre Privatsphäre
                    </h3>
                    <p className="text-sm text-neutral/80 leading-relaxed">
                      Wir verwenden Cookies, um Ihre Erfahrung auf unserer Website zu verbessern, 
                      den Website-Traffic zu analysieren und zu verstehen, woher unsere Besucher kommen. 
                      Sie können selbst entscheiden, welche Kategorien von Cookies Sie zulassen möchten.
                    </p>
                  </div>
                </div>

                

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={handleRejectAll}
                    className="flex-1 px-4 py-3 border border-neutral/20 text-neutral font-medium rounded-md hover:bg-neutral/5 transition-colors duration-300 text-sm"
                  >
                    Nur notwendige Cookies
                  </button>
                  <button
                    onClick={() => setShowDetails(true)}
                    className="flex-1 px-4 py-3 border border-primary text-primary font-medium rounded-md hover:bg-primary/5 transition-colors duration-300 text-sm"
                  >
                    Einstellungen anpassen
                  </button>
                  <button
                    onClick={handleAcceptAll}
                    className="flex-1 px-4 py-3 bg-primary text-white font-medium rounded-md hover:bg-primary-dark transition-colors duration-300 text-sm"
                  >
                    Alle akzeptieren
                  </button>
                </div>

                {/* Legal Links */}
                <div className="mt-4 pt-4 border-t border-neutral/10 text-xs text-neutral/60 text-center">
                  Weitere Informationen finden Sie in unserer{' '}
                  <Link href="/datenschutz" className="text-primary hover:underline font-medium">
                    Datenschutzerklärung
                  </Link>
                  {' '}und{' '}
                  <Link href="/cookie-richtlinie" className="text-primary hover:underline font-medium">
                    Cookie-Richtlinie
                  </Link>
                </div>
              </div>
            ) : (
              // Detailed Settings
              <div className="p-6 sm:p-8">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-bold text-neutral">Cookie-Einstellungen</h3>
                  <button
                    onClick={() => setShowDetails(false)}
                    className="h-8 w-8 rounded-full bg-neutral/10 flex items-center justify-center text-neutral/60 hover:bg-neutral/20 transition-colors"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                <div className="space-y-6 max-h-96 overflow-y-auto">
                  {/* Necessary Cookies */}
                  <div className="border border-neutral/10 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center">
                        <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                        <h4 className="font-semibold text-neutral">Notwendige Cookies</h4>
                      </div>
                      <div className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-medium">
                        Immer aktiv
                      </div>
                    </div>
                    <p className="text-sm text-neutral/70 mb-3">
                      Diese Cookies sind für das ordnungsgemäße Funktionieren der Website erforderlich und können nicht deaktiviert werden.
                    </p>
                    <div className="text-xs text-neutral/60">
                      <strong>Zweck:</strong> Session-Management, Sicherheit, Kontaktformular-Funktionalität<br/>
                      <strong>Anbieter:</strong> Der Baumchirurg (First-Party)<br/>
                      <strong>Speicherdauer:</strong> Session / 30 Tage
                    </div>
                  </div>

                  {/* Functional Cookies */}
                  <div className="border border-neutral/10 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center">
                        <div className="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
                        <h4 className="font-semibold text-neutral">Funktionale Cookies</h4>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          checked={consent.functional}
                          onChange={(e) => handleConsentChange('functional', e.target.checked)}
                          className="sr-only peer"
                        />
                        <div className="w-11 h-6 bg-neutral/20 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                      </label>
                    </div>
                    <p className="text-sm text-neutral/70 mb-3">
                      Diese Cookies ermöglichen erweiterte Funktionalitäten und Personalisierungen, wie Spracheinstellungen und Benutzerpräferenzen.
                    </p>
                    <div className="text-xs text-neutral/60">
                      <strong>Zweck:</strong> Sprachpräferenzen, Benutzererfahrung<br/>
                      <strong>Anbieter:</strong> Der Baumchirurg (First-Party)<br/>
                      <strong>Speicherdauer:</strong> 12 Monate
                    </div>
                  </div>

                  {/* Analytics Cookies */}
                  <div className="border border-neutral/10 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center">
                        <div className="w-3 h-3 bg-purple-500 rounded-full mr-3"></div>
                        <h4 className="font-semibold text-neutral">Analytik-Cookies</h4>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          checked={consent.analytics}
                          onChange={(e) => handleConsentChange('analytics', e.target.checked)}
                          className="sr-only peer"
                        />
                        <div className="w-11 h-6 bg-neutral/20 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                      </label>
                    </div>
                    <p className="text-sm text-neutral/70 mb-3">
                      Diese Cookies helfen uns dabei zu verstehen, wie Besucher mit unserer Website interagieren, damit wir sie verbessern können.
                    </p>
                    <div className="text-xs text-neutral/60">
                      <strong>Zweck:</strong> Website-Analyse, Besucherstatistiken, Performance-Überwachung<br/>
                      <strong>Anbieter:</strong> Google Analytics (Third-Party)<br/>
                      <strong>Speicherdauer:</strong> 26 Monate<br/>
                      <strong>Datenübertragung:</strong> USA (angemessenes Schutzniveau)
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 mt-6 pt-6 border-t border-neutral/10">
                  <button
                    onClick={handleRejectAll}
                    className="flex-1 px-4 py-3 border border-neutral/20 text-neutral font-medium rounded-md hover:bg-neutral/5 transition-colors duration-300 text-sm"
                  >
                    Alle ablehnen
                  </button>
                  <button
                    onClick={handleSavePreferences}
                    className="flex-1 px-4 py-3 bg-primary text-white font-medium rounded-md hover:bg-primary-dark transition-colors duration-300 text-sm"
                  >
                    Einstellungen speichern
                  </button>
                  <button
                    onClick={handleAcceptAll}
                    className="flex-1 px-4 py-3 bg-primary text-white font-medium rounded-md hover:bg-primary-dark transition-colors duration-300 text-sm"
                  >
                    Alle akzeptieren
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