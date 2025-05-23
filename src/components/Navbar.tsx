'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCalendlyOpen, setIsCalendlyOpen] = useState(false);

  const openCalendly = () => {
    setIsCalendlyOpen(true);
  };

  const closeCalendly = () => {
    setIsCalendlyOpen(false);
  };

  // Load Calendly script when modal opens
  useEffect(() => {
    if (isCalendlyOpen) {
      const script = document.createElement('script');
      script.src = 'https://assets.calendly.com/assets/external/widget.js';
      script.async = true;
      document.body.appendChild(script);

      return () => {
        // Cleanup script when component unmounts or modal closes
        const existingScript = document.querySelector('script[src="https://assets.calendly.com/assets/external/widget.js"]');
        if (existingScript) {
          document.body.removeChild(existingScript);
        }
      };
    }
  }, [isCalendlyOpen]);

  return (
    <>
      <nav className="fixed w-full z-50 py-2 bg-white backdrop-blur-md shadow-sm border-b border-primary/20">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
          <div className="flex justify-between items-center h-14 sm:h-16">
            {/* Logo and brand */}
            <div className="flex items-center flex-shrink-0 min-w-0">
              <Link href="/" className="flex items-center min-w-0">
                <Image 
                  src="/logo-light.svg" 
                  alt="DerBaumchirurg Logo" 
                  width={32} 
                  height={32} 
                  className="mr-2 w-8 h-8 sm:w-10 sm:h-10 flex-shrink-0" 
                />
                <span className="text-lg sm:text-xl font-bold text-black truncate">
                  Der Baumchirurg
                </span>
              </Link>
            </div>

            {/* Desktop navigation */}
            <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
              <Link href="/leistungen" className="text-black font-semibold hover:text-primary-dark transition duration-150">
                Leistungen
              </Link>
              <Link href="/blog" className="text-black font-semibold hover:text-primary-dark transition duration-150">
                Blog
              </Link>
              <Link href="/ueber-uns" className="text-black font-semibold hover:text-primary-dark transition duration-150">
                Über uns
              </Link>
              <Link href="/kontakt" className="text-black font-semibold hover:text-primary-dark transition duration-150">
                Kontakt
              </Link>
              <button 
                onClick={openCalendly}
                className="px-4 py-2 rounded-md font-semibold shadow-md transition duration-150 whitespace-nowrap bg-primary-dark text-white hover:bg-primary"
              >
                Jetzt Termin buchen
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="flex items-center lg:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-neutral hover:text-primary-dark hover:bg-secondary-dark focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                aria-expanded={isMenuOpen}
                aria-label="Toggle navigation menu"
              >
                <span className="sr-only">Open main menu</span>
                {/* Icon when menu is closed */}
                <svg
                  className={`${isMenuOpen ? 'hidden' : 'block'} h-6 w-6`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
                {/* Icon when menu is open */}
                <svg
                  className={`${isMenuOpen ? 'block' : 'hidden'} h-6 w-6`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu, show/hide based on menu state */}
        <div className={`${isMenuOpen ? 'block' : 'hidden'} lg:hidden bg-white border-t border-primary/10`}>
          <div className="px-3 pt-2 pb-3 space-y-1 sm:px-4 bg-white shadow-lg max-w-full overflow-hidden">
            <Link 
              href="/leistungen" 
              className="block px-3 py-2 rounded-md text-base font-semibold text-gray-800 hover:text-primary-dark hover:bg-secondary-light transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Leistungen
            </Link>
            <Link 
              href="/blog" 
              className="block px-3 py-2 rounded-md text-base font-semibold text-gray-800 hover:text-primary-dark hover:bg-secondary-light transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Blog
            </Link>
            <Link 
              href="/ueber-uns" 
              className="block px-3 py-2 rounded-md text-base font-semibold text-gray-800 hover:text-primary-dark hover:bg-secondary-light transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Über uns
            </Link>
            <Link 
              href="/kontakt" 
              className="block px-3 py-2 rounded-md text-base font-semibold text-gray-800 hover:text-primary-dark hover:bg-secondary-light transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Kontakt
            </Link>
            <button 
              onClick={() => {
                setIsMenuOpen(false);
                openCalendly();
              }}
              className="block px-3 py-2 mx-3 mt-2 rounded-md text-base font-semibold transition-colors text-center w-full bg-primary-dark text-white hover:bg-primary"
            >
              Jetzt Termin buchen
            </button>
          </div>
        </div>
      </nav>

      {/* Calendly Modal */}
      {isCalendlyOpen && (
        <div className="fixed inset-0 z-[9999] overflow-y-auto">
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 transition-opacity"
            onClick={closeCalendly}
          ></div>
          
          {/* Modal */}
          <div className="flex min-h-full items-center justify-center p-4">
            <div className="relative bg-white rounded-lg shadow-xl w-full max-w-4xl max-h-[90vh] overflow-hidden">
              {/* Header */}
              <div className="flex items-center justify-between p-4 border-b border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900">
                  Termin buchen
                </h3>
                <button
                  onClick={closeCalendly}
                  className="rounded-md p-2 hover:bg-gray-100 transition-colors"
                >
                  <svg className="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              {/* Calendly Widget */}
              <div className="p-4">
                <div 
                  className="calendly-inline-widget" 
                  data-url="https://calendly.com/derbaumchirurg?primary_color=2ecc40" 
                  style={{ minWidth: '320px', height: '700px' }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar; 