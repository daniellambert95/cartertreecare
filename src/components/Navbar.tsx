'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 py-2 bg-white backdrop-blur-md shadow-sm border-b border-primary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo and brand */}
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <Image src="/logo-light.svg" alt="DerBaumchirurg Logo" width={40} height={40} className="mr-2" />
              <span className="text-xl font-bold text-black">Der Baumchirurg</span>
            </Link>
          </div>

          {/* Desktop navigation */}
          <div className="hidden lg:flex items-center space-x-8">
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
            <Link 
              href="#bewerben" 
              className="px-4 py-2 rounded-md bg-primary-dark text-white font-semibold shadow-md hover:bg-primary transition duration-150"
            >
              Jetzt Bewerben
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-neutral hover:text-primary-dark hover:bg-secondary-dark focus:outline-none"
              aria-expanded="false"
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
      <div className={`${isMenuOpen ? 'block' : 'hidden'} lg:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
          <Link 
            href="/leistungen" 
            className="block px-3 py-2 rounded-md text-base font-semibold text-gray-800 hover:text-primary-dark hover:bg-secondary-light"
            onClick={() => setIsMenuOpen(false)}
          >
            Leistungen
          </Link>
          <Link 
            href="/blog" 
            className="block px-3 py-2 rounded-md text-base font-semibold text-gray-800 hover:text-primary-dark hover:bg-secondary-light"
            onClick={() => setIsMenuOpen(false)}
          >
            Blog
          </Link>
          <Link 
            href="/ueber-uns" 
            className="block px-3 py-2 rounded-md text-base font-semibold text-gray-800 hover:text-primary-dark hover:bg-secondary-light"
            onClick={() => setIsMenuOpen(false)}
          >
            Über uns
          </Link>
          <Link 
            href="/kontakt" 
            className="block px-3 py-2 rounded-md text-base font-semibold text-gray-800 hover:text-primary-dark hover:bg-secondary-light"
            onClick={() => setIsMenuOpen(false)}
          >
            Kontakt
          </Link>
          <Link 
            href="#bewerben" 
            className="block px-3 py-2 rounded-md text-base font-semibold bg-primary-dark text-white hover:bg-primary"
            onClick={() => setIsMenuOpen(false)}
          >
            Jetzt Bewerben
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 