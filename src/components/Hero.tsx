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
          backgroundImage: 'url(/images/hero-tree.jpg)',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-neutral/70 to-primary/30"></div>
      </div>

      {/* Abseiling container - positioned more visibly */}
      <div 
        className="absolute z-20 top-0 right-1/3 h-screen pointer-events-none"
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
            src="/images/abseil.webp" 
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
            <span className="block">Der Baumchirurg</span>
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
            <div className="flex -space-x-2">
              {[1, 2, 3].map((i) => (
                <div key={i} className="w-10 h-10 rounded-full bg-primary-dark border-2 border-white flex items-center justify-center text-white font-bold">
                  {i}
                </div>
              ))}
            </div>
            <p className="text-white/80">Über <span className="text-primary-light font-bold">2000+</span> Bäume Erfahrung</p>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-secondary to-transparent"></div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-white/80 animate-bounce">
        <span className="text-sm mb-2">Mehr entdecken</span>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default Hero; 