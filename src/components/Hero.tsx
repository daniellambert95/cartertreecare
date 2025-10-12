'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ConsultationModal from './ConsultationModal';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const abseilingRef = useRef<HTMLDivElement>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

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
        className="absolute z-0 top-0 left-1/3 sm:left-1/2 md:left-2/3 lg:left-3/4 h-screen pointer-events-none"
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
            <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl pt-10">Carter Tree Care</span>
            <span className="block max-w-2xl text-3xl md:text-5xl mt-2 text-primary-light">Professional Tree Surgeon and Gardener</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl">
          Reliable Experience. Guaranteed Safety. Great Price.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <button 
              onClick={() => setIsModalOpen(true)}
              className="px-8 py-4 rounded-md bg-primary text-white font-medium text-lg shadow-lg hover:bg-primary-dark transform hover:-translate-y-1 transition duration-300 text-center"
            >
              Get a Quote
            </button>
            <Link 
              href="https://wa.me/+3531745225935" 
              className="px-8 py-4 rounded-md bg-[#25D366] text-white font-medium text-lg shadow-lg hover:bg-[#128C7E] transform hover:-translate-y-1 transition duration-300 text-center flex items-center justify-center gap-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
              </svg>
              WhatsApp
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
                  <div className="text-white/80 text-sm">Trees Maintained</div>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary-dark border-2 border-white flex items-center justify-center">
                  <Image 
                    src="/icons/1saubereschnitt.svg.svg" 
                    alt="Saw" 
                    width={400}
                    height={400}
                    className="h-7 w-7 filter brightness-0 invert"
                  />
                </div>
                <div className="text-white">
                  <div className="font-bold text-xl">Clean</div>
                  <div className="text-white/80 text-sm">Cuts</div>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary-dark border-2 border-white flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                  </svg>
                </div>
                <div className="text-white">
                  <div className="font-bold text-xl">5/5</div>
                  <div className="text-white/80 text-sm">Customer Rating</div>
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

      <ConsultationModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </section>
  );
};

export default Hero; 