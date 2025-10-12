'use client';

import Link from 'next/link';
import dynamic from 'next/dynamic';

// Import components
const Navbar = dynamic(() => import('@/components/Navbar'), { ssr: true });
const Footer = dynamic(() => import('@/components/Footer'), { ssr: true });

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Main content area with white background and floating dots */}
      <div className="bg-white flex-1 relative overflow-hidden">
        {/* Floating leaves animation - constrained to this white area */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute w-3 h-3 bg-primary/30 rounded-full animate-pulse animate-float"
              style={{
                left: `${10 + i * 15}%`,
                top: `${20 + (i % 3) * 20}%`,
                animationDelay: `${i * 0.5}s`,
                animationDuration: `${3 + i}s`,
              }}
            />
          ))}
        </div>

        {/* Main content */}
        <div className="px-4 sm:px-6 lg:px-8 pt-30 pb-16 relative z-10">
          <div className="max-w-4xl w-full mx-auto text-center">
            {/* 404 Text */}
            <div className="animate-fade-in-up" style={{ animationDelay: '300ms' }}>
              <h1 className="text-6xl md:text-8xl font-bold text-primary mb-3">
                404
              </h1>
              <h2 className="text-2xl md:text-3xl font-bold text-neutral mb-4">
                This Branch Cannot Be Found
              </h2>
              <p className="text-base md:text-lg text-neutral/70 mb-6 max-w-2xl mx-auto">
                It seems you&apos;ve wandered onto a path we haven&apos;t planted yet. 
                No worries – even the best tree climbers get lost sometimes!
              </p>
            </div>

            {/* Action Buttons */}
            <div className="animate-fade-in-up" style={{ animationDelay: '500ms' }}>
              <div className="flex flex-col sm:flex-row gap-3 justify-center mb-8">
                <Link 
                  href="/"
                  className="px-6 py-3 bg-primary text-white font-medium text-base rounded-md shadow-lg hover:bg-primary-dark transform hover:-translate-y-1 transition duration-300"
                >
                  Back to Home
                </Link>
                <Link 
                  href="/leistungen"
                  className="px-6 py-3 bg-white text-primary border-2 border-primary font-medium text-base rounded-md shadow-lg hover:bg-primary hover:text-white transform hover:-translate-y-1 transition duration-300"
                >
                  Our Services
                </Link>
                <Link 
                  href="/kontakt"
                  className="px-6 py-3 bg-neutral text-white font-medium text-base rounded-md shadow-lg hover:bg-neutral/80 transform hover:-translate-y-1 transition duration-300"
                >
                  Get in Touch
                </Link>
              </div>
            </div>

            {/* Helpful Links */}
            <div className="animate-fade-in-up" style={{ animationDelay: '700ms' }}>
              <div className="bg-white/50 backdrop-blur-sm rounded-lg p-4 border border-primary/20 mb-6">
                <h3 className="text-lg font-semibold text-neutral mb-3">
                  Maybe you&apos;re looking for:
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  <Link 
                    href="/leistungen"
                    className="p-3 bg-white rounded-md shadow-sm hover:shadow-md transition duration-300 border border-primary/10 hover:border-primary/30"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                        <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                        </svg>
                      </div>
                      <div className="text-left">
                        <div className="font-medium text-neutral text-sm">All Services</div>
                        <div className="text-xs text-neutral/60">Tree Care & More</div>
                      </div>
                    </div>
                  </Link>

                  <Link 
                    href="/blog"
                    className="p-3 bg-white rounded-md shadow-sm hover:shadow-md transition duration-300 border border-primary/10 hover:border-primary/30"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                        <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                        </svg>
                      </div>
                      <div className="text-left">
                        <div className="font-medium text-neutral text-sm">Blog</div>
                        <div className="text-xs text-neutral/60">Tips & Guides</div>
                      </div>
                    </div>
                  </Link>

                  <Link 
                    href="/ueber-uns"
                    className="p-3 bg-white rounded-md shadow-sm hover:shadow-md transition duration-300 border border-primary/10 hover:border-primary/30"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                        <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                      </div>
                      <div className="text-left">
                        <div className="font-medium text-neutral text-sm">About Us</div>
                        <div className="text-xs text-neutral/60">Our Team</div>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>

            {/* Fun Tree Facts */}
            <div className="animate-fade-in-up" style={{ animationDelay: '1000ms' }}>
              <div className="bg-primary/5 rounded-lg p-4 border border-primary/20">
                <h4 className="text-base font-semibold text-neutral mb-2">
                  💡 Did you know?
                </h4>
                <p className="text-sm text-neutral/70">
                  A mature tree can evaporate up to 400 liters of water daily and 
                  lower the ambient temperature by up to 10°C. That&apos;s why professional tree care 
                  is so important for our climate!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <Footer />
    </div>
  );
} 