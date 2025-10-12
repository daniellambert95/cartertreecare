import React from 'react';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';

// Import components
const Navbar = dynamic(() => import('@/components/Navbar'), { ssr: true });
const Footer = dynamic(() => import('@/components/Footer'), { ssr: true });
const AllServices = dynamic(() => import('@/components/AllServices'), { ssr: true });

export const metadata: Metadata = {
  title: 'All Services | Carter Tree Care - Professional Tree Care Berlin, Brandenburg, Potsdam',
  description: 'Overview of all tree care and garden work services from Carter Tree Care - Professional tree care with the highest safety standards in Berlin and Brandenburg.',
  keywords: 'Tree care services, Tree removal, Tree pruning, Crown care, Tree assessment, Berlin, Brandenburg, Arborist',
  openGraph: {
    title: 'All Services | Carter Tree Care - Professional Tree Care',
    description: 'Discover our comprehensive range of tree care and garden work services. With over 2000 trees of experience.',
    url: 'https://www.cartertreecare.ie/services',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Carter Tree Care Services - Professional Tree Care',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'All Services | Carter Tree Care - Professional Tree Care',
    description: 'Discover our comprehensive range of tree care and garden work services.',
    images: ['/twitter-image.png'],
  },
  alternates: {
    canonical: 'https://www.cartertreecare.ie/services',
  },
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen flex flex-col bg-secondary">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-secondary-dark via-secondary-dark to-primary/20 overflow-hidden pt-16 sm:pt-4">
        {/* Modern Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-secondary-dark/95 to-secondary-dark/80"></div>
          
          {/* Modern Geometric Shapes - positioned to stay within bounds */}
          <div className="hidden md:block absolute top-1/4 -right-16 w-32 h-32 lg:w-48 lg:h-48 bg-primary/10 rounded-full blur-3xl"></div>
          <div className="hidden md:block absolute bottom-1/4 -left-12 w-24 h-24 lg:w-36 lg:h-36 bg-primary/15 rounded-full blur-2xl"></div>
          <div className="hidden lg:block absolute top-1/2 right-1/4 w-16 h-16 lg:w-24 lg:h-24 bg-primary/5 rounded-full blur-xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="py-8 sm:py-12 md:py-16 lg:py-24">
            {/* Breadcrumb */}
            <nav className="flex mb-6 md:mb-8" aria-label="Breadcrumb">
              <ol className="flex items-center space-x-2">
                <li>
                  <Link 
                    href="/" 
                    className="text-neutral/60 hover:text-primary transition-colors text-sm flex items-center group"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                    Home
                  </Link>
                </li>
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-neutral/40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  <span className="ml-2 text-neutral text-sm font-medium">Services</span>
                </li>
              </ol>
            </nav>
            
            {/* Main Hero Content */}
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Left Column - Text Content */}
              <div className="order-2 lg:order-1">
                <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20 mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                  Professional Tree Care
                </div>
                
                <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-neutral mb-4 lg:mb-6 leading-tight">
                  Our <span className="text-primary relative">
                    Services
                    <svg className="absolute -bottom-2 left-0 w-full h-2 text-primary/30" viewBox="0 0 100 10" preserveAspectRatio="none">
                      <path d="M0,8 Q50,0 100,8" stroke="currentColor" strokeWidth="2" fill="none"/>
                    </svg>
                  </span> for Your Trees
                </h1>
                
                <p className="text-base sm:text-lg lg:text-xl text-neutral/80 mb-6 lg:mb-8 leading-relaxed max-w-2xl">
                  Discover our comprehensive range of tree care and garden work services. 
                  With over 2000 trees of experience, we offer you professional solutions for all your tree and garden requirements.
                </p>
                
                {/* Feature Highlights */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-3 lg:gap-4 mb-8">
                  <div className="flex items-center group">
                    <div className="h-10 w-10 rounded-xl bg-primary/15 flex items-center justify-center text-primary mr-3 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-sm lg:text-base text-neutral font-medium">Certified Experts</span>
                  </div>
                  
                  <div className="flex items-center group">
                    <div className="h-10 w-10 rounded-xl bg-primary/15 flex items-center justify-center text-primary mr-3 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <span className="text-sm lg:text-base text-neutral font-medium">Highest Safety Standards</span>
                  </div>
                  
                  <div className="flex items-center group">
                    <div className="h-10 w-10 rounded-xl bg-primary/15 flex items-center justify-center text-primary mr-3 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                    </div>
                    <span className="text-sm lg:text-base text-neutral font-medium">Environmentally friendly methods</span>
                  </div>
                  
                  <div className="flex items-center group">
                    <div className="h-10 w-10 rounded-xl bg-primary/15 flex items-center justify-center text-primary mr-3 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <span className="text-sm lg:text-base text-neutral font-medium">Fast response time</span>
                  </div>
                </div>
                
                {/* CTA Button */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link 
                    href="/contact" 
                    className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-xl shadow-sm text-white bg-primary hover:bg-primary-dark hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300"
                  >
                    Get a Quote
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </Link>
                  <Link 
                    href="#services" 
                    className="inline-flex items-center justify-center px-6 py-3 border border-neutral/20 text-base font-medium rounded-xl text-neutral bg-white/10 backdrop-blur-sm hover:bg-white/20 hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300"
                  >
                    View Services
                  </Link>
                </div>
              </div>
              
              {/* Right Column - Image */}
              <div className="order-1 lg:order-2 relative">
                <div className="relative h-64 sm:h-80 lg:h-96 xl:h-[500px] rounded-2xl overflow-hidden shadow-2xl group">
                  {/* Image Overlay for better text contrast */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10"></div>
                  
                  <Image 
                    src="/images/tree-action.webp" 
                    alt="Tree care in action" 
                    fill
                    style={{ objectFit: 'cover', objectPosition: 'center' }}
                    className="rounded-2xl group-hover:scale-105 transition-transform duration-700"
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 40vw"
                  />
                  
                  {/* Floating Badge */}
                  <div className="absolute bottom-4 left-4 z-20 bg-white/95 backdrop-blur-sm rounded-lg px-3 py-2 shadow-lg">
                    <div className="flex items-center space-x-2">
                      <div className="h-2 w-2 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="text-sm font-medium text-gray-800">2000+ Trees Experience</span>
                    </div>
                  </div>
                </div>
                
                {/* Decorative Elements */}
                <div className="hidden xl:block absolute -bottom-4 -right-4 w-20 h-20 bg-primary/10 rounded-full blur-xl"></div>
                <div className="hidden xl:block absolute -top-4 -left-4 w-12 h-12 bg-primary/15 rounded-full blur-lg"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <AllServices />
      
      {/* SEO Internal Links Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-neutral mb-4">Expert Knowledge & Guides</h2>
            <p className="text-lg text-neutral/70 max-w-2xl mx-auto">
              Learn more about professional tree care in our detailed guides and manuals.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Featured Blog Articles */}
            <Link href="/blog/wie-man-bäume-schneidet" className="group block">
              <div className="bg-secondary rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  <svg className="h-6 w-6 text-primary group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-neutral mb-2 group-hover:text-primary transition-colors duration-300">
                  Tree Pruning Guide
                </h3>
                <p className="text-neutral/70">
                  Learn the right technique for professional tree pruning - with practical tips from our experts.
                </p>
              </div>
            </Link>

            <Link href="/blog/baumkrankheiten-erkennen" className="group block">
              <div className="bg-secondary rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  <svg className="h-6 w-6 text-primary group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-neutral mb-2 group-hover:text-primary transition-colors duration-300">
                  Detecting Tree Diseases
                </h3>
                <p className="text-neutral/70">
                  Early detection of tree diseases can save your trees. Learn the most important warning signs.
                </p>
              </div>
            </Link>

            <Link href="/ueber-uns" className="group block">
              <div className="bg-secondary rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  <svg className="h-6 w-6 text-primary group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-neutral mb-2 group-hover:text-primary transition-colors duration-300">
                  Our Team
                </h3>
                <p className="text-neutral/70">
                  Meet our certified tree care experts and learn more about our philosophy.
                </p>
              </div>
            </Link>
          </div>
          
          {/* Additional Quick Links */}
          <div className="mt-12 text-center">
            <h3 className="text-xl font-bold text-neutral mb-6">Additional Helpful Information</h3>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/blog/baumpflege-ratgeber" className="inline-flex items-center px-4 py-2 bg-primary/10 text-primary hover:bg-primary hover:text-white rounded-lg transition-colors duration-300">
                Tree Care Basics
              </Link>
              <Link href="/blog/baumschnitt-winter" className="inline-flex items-center px-4 py-2 bg-primary/10 text-primary hover:bg-primary hover:text-white rounded-lg transition-colors duration-300">
                Winter Tree Pruning
              </Link>
              <Link href="/faq" className="inline-flex items-center px-4 py-2 bg-primary/10 text-primary hover:bg-primary hover:text-white rounded-lg transition-colors duration-300">
                Frequently Asked Questions
              </Link>
              <Link href="/kontakt" className="inline-flex items-center px-4 py-2 bg-neutral/10 text-neutral hover:bg-neutral hover:text-white rounded-lg transition-colors duration-300">
                Request Consultation →
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
} 