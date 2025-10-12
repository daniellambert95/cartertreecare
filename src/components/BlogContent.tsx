'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { BlogPostMeta } from '@/lib/blog';
import BlogPagination from '@/components/BlogPagination';

interface BlogContentProps {
  posts: BlogPostMeta[];
  postsPerPage: number;
}

export default function BlogContent({ posts, postsPerPage }: BlogContentProps) {
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
                  <span className="ml-2 text-neutral text-sm font-medium">Blog</span>
                </li>
              </ol>
            </nav>
            
            {/* Main Hero Content */}
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Left Column - Text Content */}
              <div className="order-2 lg:order-1">
                <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20 mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                  Tree Care Expertise
                </div>
                
                <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-neutral mb-4 lg:mb-6 leading-tight">
                  Our <span className="text-primary relative">
                    Tree Care
                    <svg className="absolute -bottom-2 left-0 w-full h-2 text-primary/30" viewBox="0 0 100 10" preserveAspectRatio="none">
                      <path d="M0,8 Q50,0 100,8" stroke="currentColor" strokeWidth="2" fill="none"/>
                    </svg>
                  </span> Blog
                </h1>
                
                <p className="text-base sm:text-lg lg:text-xl text-neutral/80 mb-6 lg:mb-8 leading-relaxed max-w-2xl">
                  Current tips, expertise and inspiration about tree care, tree removal
                  and garden design in Dublin and Ireland.
                </p>
                
                {/* Feature Highlights */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-3 lg:gap-4 mb-8">
                  <div className="flex items-center group">
                    <div className="h-10 w-10 rounded-xl bg-primary/15 flex items-center justify-center text-primary mr-3 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                    </div>
                    <span className="text-sm lg:text-base text-neutral font-medium">Expert Knowledge</span>
                  </div>
                  
                  <div className="flex items-center group">
                    <div className="h-10 w-10 rounded-xl bg-primary/15 flex items-center justify-center text-primary mr-3 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                    </div>
                    <span className="text-sm lg:text-base text-neutral font-medium">Practical Tips</span>
                  </div>
                  
                  <div className="flex items-center group">
                    <div className="h-10 w-10 rounded-xl bg-primary/15 flex items-center justify-center text-primary mr-3 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <span className="text-sm lg:text-base text-neutral font-medium">Current Topics</span>
                  </div>
                  
                  <div className="flex items-center group">
                    <div className="h-10 w-10 rounded-xl bg-primary/15 flex items-center justify-center text-primary mr-3 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      </svg>
                    </div>
                    <span className="text-sm lg:text-base text-neutral font-medium">Regional Insights</span>
                  </div>
                </div>
                
                {/* CTA Button */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link 
                    href="#articles" 
                    className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-xl shadow-sm text-white bg-primary hover:bg-primary-dark hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300"
                  >
                    Read Articles
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </Link>
                  <button 
                    onClick={openCalendly}
                    className="inline-flex items-center justify-center px-6 py-3 border border-neutral/20 text-base font-medium rounded-xl text-neutral bg-white/10 backdrop-blur-sm hover:bg-white/20 hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300"
                  >
                    Request Consultation
                  </button>
                </div>
              </div>
              
              {/* Right Column - Featured Image/Graphic */}
              <div className="order-1 lg:order-2 relative">
                <div className="relative h-64 sm:h-80 lg:h-96 xl:h-[500px] rounded-2xl overflow-hidden shadow-2xl group bg-gradient-to-br from-primary/20 to-primary/5">
                  {/* Blog Illustration */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center p-8">
                      {/* Large Book/Blog Icon */}
                      <div className="mx-auto w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40 rounded-2xl bg-primary/15 flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-500">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 sm:h-16 sm:w-16 lg:h-20 lg:w-20 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                        </svg>
                      </div>
                      
                      {/* Floating Elements */}
                      <div className="absolute top-1/4 left-1/4 w-3 h-3 sm:w-4 sm:h-4 bg-primary/30 rounded-full animate-bounce" style={{animationDelay: '0s'}}></div>
                      <div className="absolute top-1/3 right-1/4 w-2 h-2 sm:w-3 sm:h-3 bg-primary/20 rounded-full animate-bounce" style={{animationDelay: '0.5s'}}></div>
                      <div className="absolute bottom-1/3 left-1/3 w-4 h-4 sm:w-5 sm:h-5 bg-primary/25 rounded-full animate-bounce" style={{animationDelay: '1s'}}></div>
                      
                      <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-neutral/80 mb-2">Knowledge & Expertise</h3>
                      <p className="text-sm sm:text-base text-neutral/60">Practical knowledge for your trees</p>
                    </div>
                  </div>
                  
                  {/* Floating Badge */}
                  <div className="absolute bottom-4 left-4 z-20 bg-white/95 backdrop-blur-sm rounded-lg px-3 py-2 shadow-lg  hidden sm:block">
                    <div className="flex items-center space-x-2">
                      <div className="h-2 w-2 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="text-sm font-medium text-gray-800">Regular new articles</span>
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
      
      {/* Featured categories */}
      <section className="py-8 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral mb-4">
              Our Blog
            </h2>
            <p className="text-lg text-neutral/70 max-w-2xl mx-auto mb-8">
              Discover valuable tips and insights about tree care, gardening and sustainable green space management.
            </p>
            <div className="inline-flex items-center justify-center space-x-2 text-primary">
              <span className="font-medium">Regular new articles</span>
            </div>
          </div>
        </div>
      </section>
      
      {/* Blog posts grid with pagination */}
      <BlogPagination posts={posts} postsPerPage={postsPerPage} />
      
      {/* Call-to-Action Section */}
      <section className="bg-primary/5 py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-neutral mb-4">Do you have questions about your trees?</h2>
              <p className="text-lg text-neutral/70">
                Contact our experts for free consultation or ask your questions directly via WhatsApp.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
              {/* WhatsApp Contact */}
              <a
                href="https://wa.me/3531745225935?text=Hello, I have a question about my trees..."
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-green-50 hover:bg-green-100 border-2 border-green-200 hover:border-green-300 rounded-xl p-6 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-green-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.706"/>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-green-700 mb-2">WhatsApp</h3>
                  <p className="text-green-600 mb-4">Quick answers to your questions</p>
                  <div className="inline-flex items-center text-green-700 font-medium">
                    Write now
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                </div>
              </a>

              {/* Book Consultation - Now a button */}
              <button
                onClick={openCalendly}
                className="group bg-primary/5 hover:bg-primary/10 border-2 border-primary/20 hover:border-primary/30 rounded-xl p-6 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-primary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-2">Consultation Appointment</h3>
                  <p className="text-primary/70 mb-4">Free initial consultation on-site</p>
                  <div className="inline-flex items-center text-primary font-medium">
                    Book appointment
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                </div>
              </button>
            </div>

            {/* Additional Contact Info */}
            <div className="mt-8 text-center">
              <p className="text-sm text-neutral/60 mb-4">
                Or call us directly:
              </p>
              <a 
                href="tel:+3531745225935"
                className="inline-flex items-center text-primary font-semibold hover:text-primary-dark transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                +353 174 522 5935
              </a>
              <p className="text-xs text-neutral/50 mt-2">
                Mon - Fri: 8:00 - 18:00 | Sat: 9:00 - 16:00
              </p>
            </div>
          </div>
        </div>
      </section>

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
                  Book Appointment
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
} 