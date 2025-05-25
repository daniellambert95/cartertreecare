'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const abseilingRef = useRef<HTMLDivElement>(null);

  // Configuration for the abseiling animation - adjusted for better visibility
  const abseilingConfig = {
    // How fast the abseiler moves down as you scroll (higher = faster)
    speedFactor: 1,
    // Initial position - starting from within visible area
    startingOffset: 80,
    // Swinging motion intensity - reduced for stability
    swingIntensity: 50,
    // How quickly the swing oscillates (lower = slower swing)
    swingFrequency: 0.005,
    // How much the abseiler rotates during swing
    rotationAmount: 3,
  };

  useEffect(() => {
    // Initialize the position immediately on component mount
    if (abseilingRef.current) {
      // Set initial position
      abseilingRef.current.style.transform = `translateY(${abseilingConfig.startingOffset}px)`;
    }

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      
      if (heroRef.current) {
        // Parallax effect for background
        heroRef.current.style.backgroundPositionY = `${scrollPosition * 0.5}px`;
      }
      
      // Always animate regardless of image load state
      if (abseilingRef.current) {
        // Calculate how far down the abseiler should be
        const maxDescent = windowHeight + 100;
        const translateY = Math.min(
          abseilingConfig.startingOffset + scrollPosition * abseilingConfig.speedFactor, 
          maxDescent
        );
        
        // Add a natural swinging effect based on scroll position
        const swingAmount = Math.sin(scrollPosition * abseilingConfig.swingFrequency) * abseilingConfig.swingIntensity;
        const rotationAmount = Math.sin(scrollPosition * abseilingConfig.swingFrequency) * abseilingConfig.rotationAmount;
        
        // Apply transformations to the abseiler with opacity 1 to ensure visibility
        abseilingRef.current.style.transform = 
          `translateY(${translateY}px) translateX(${swingAmount}px) rotate(${rotationAmount}deg)`;
        abseilingRef.current.style.opacity = '1';
      }
    };

    // Run the handler immediately to set initial position
    handleScroll();

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [
    abseilingConfig.speedFactor,
    abseilingConfig.startingOffset,
    abseilingConfig.swingFrequency,
    abseilingConfig.swingIntensity,
    abseilingConfig.rotationAmount
  ]); // Add all dependencies

  return (
    <section className="relative flex items-center justify-center overflow-hidden h-screen w-screen">
      {/* Background image with overlay */}
      <div 
        ref={heroRef}
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(/images/hero-tree.webp)',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-neutral/70 to-primary/30"></div>
      </div>

      {/* Abseiling container - positioned more visibly */}
      <div 
        className="absolute z-0 top-0 left-1/3 sm:right-1/3 h-screen pointer-events-none"
        style={{ overflow: 'visible' }}
      >
        {/* Abseiling man */}
        <div 
          ref={abseilingRef} 
          className="absolute top-0"
          style={{ 
            transition: 'transform 0.3s ease-out',
            transform: `translateY(${abseilingConfig.startingOffset}px)`,
            opacity: 1,
          }}
        >
          <Image 
            src="/images/climber.webp" 
            alt="Abseiling tree surgeon" 
            width={200}
            height={300}
            className="h-auto w-auto max-w-none"
            priority
            onLoad={() => {
              console.log('Image loaded successfully');
            }}
            onError={(e) => {
              console.error('Image failed to load:', e);
            }}
          />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl">Der Baumchirurg</span>
            <span className="block max-w-2xl text-3xl md:text-5xl mt-2 text-primary-light">Professioneller Baumpfleger und Gärtner</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl">
            Hochwertige Arbeit. Sichere Arbeit. Toller Preis. Professioneller, zertifizierter Baumpfleger mit viel Erfahrung.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Link 
              href="/kontakt" 
              className="px-8 py-4 rounded-md bg-primary text-white font-medium text-lg shadow-lg hover:bg-primary-dark transform hover:-translate-y-1 transition duration-300 text-center"
            >
              Kontakt aufnehmen
            </Link>
            <Link 
              href="#leistungen" 
              className="px-8 py-4 rounded-md bg-white/10 backdrop-blur-sm text-white border border-white/30 font-medium text-lg shadow-lg hover:bg-white/20 transform hover:-translate-y-1 transition duration-300 text-center"
            >
              Unsere Leistungen
            </Link>
          </div>
          
          <div className="mt-12 flex items-center gap-6">
            <div className="flex flex-wrap gap-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary-dark border-2 border-white flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div className="text-white">
                  <div className="font-bold text-xl">2000+</div>
                  <div className="text-white/80 text-sm">Bäume gepflegt</div>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary-dark border-2 border-white flex items-center justify-center">
                  <Image 
                    src="/images/saw.webp" 
                    alt="Saw" 
                    width={40}
                    height={40}
                    className="h-6 w-6 filter brightness-0 invert"
                  />
                </div>
                <div className="text-white">
                  <div className="font-bold text-xl">Saubere</div>
                  <div className="text-white/80 text-sm">Schnitte</div>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary-dark border-2 border-white flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                  </svg>
                </div>
                <div className="text-white">
                  <div className="font-bold text-xl">4.9/5</div>
                  <div className="text-white/80 text-sm">Kundenbewertung</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      {/* <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-secondary to-transparent"></div> */}
      
      {/* Scroll indicator */}
      {/* <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-white/80 animate-bounce">
        <span className="text-sm mb-2">Mehr entdecken</span>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div> */}
    </section>
  );
};

export default Hero; 