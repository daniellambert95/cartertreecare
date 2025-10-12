import React from 'react';
import dynamic from 'next/dynamic';
import Link from 'next/link';

// Import components dynamically for better performance
const Navbar = dynamic(() => import('@/components/Navbar'), { ssr: true });
const Footer = dynamic(() => import('@/components/Footer'), { ssr: true });
const Hero = dynamic(() => import('@/components/Hero'), { ssr: true });
const Services = dynamic(() => import('@/components/Services'), { ssr: true });
const ImageGallery = dynamic(() => import('@/components/ImageGallery'), { ssr: true });
const Reviews = dynamic(() => import('@/components/Reviews'), { ssr: true });

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-secondary">
      <Navbar />
      <Hero />
      <Services />
      
      {/* SEO-friendly internal links section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-neutral mb-4">Discover Our Expertise</h2>
            <p className="text-lg text-neutral/70 max-w-2xl mx-auto">
              Learn more about professional tree care and read our valuable tips for maintaining your trees.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Link to Services */}
            <Link href="/services" className="group block">
              <div className="bg-secondary rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  <svg className="h-6 w-6 text-primary group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-neutral mb-2 group-hover:text-primary transition-colors duration-300">
                  All Services
                </h3>
                <p className="text-neutral/70">
                  From tree removal to crown care - discover our complete range of services for your trees.
                </p>
              </div>
            </Link>

            {/* Link to Featured Blog Post */}
            <Link href="/blog/how-to-prune-trees" className="group block">
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
                  Learn when and how to properly prune trees - our complete guide for professional results.
                </p>
              </div>
            </Link>

            {/* Link to About Us */}
            <Link href="/about-us" className="group block">
              <div className="bg-secondary rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  <svg className="h-6 w-6 text-primary group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-neutral mb-2 group-hover:text-primary transition-colors duration-300">
                  About Us
                </h3>
                <p className="text-neutral/70">
                  Meet our experienced team and learn more about our years of expertise in tree care.
                </p>
              </div>
            </Link>
          </div>

          {/* Additional internal links for important blog posts */}
          <div className="mt-12 text-center">
            <h3 className="text-2xl font-bold text-neutral mb-6">Popular Guides</h3>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/blog/tree-diseases-identification" className="inline-flex items-center px-4 py-2 bg-primary/10 text-primary hover:bg-primary hover:text-white rounded-lg transition-colors duration-300">
                Tree Disease Identification
              </Link>
              <Link href="/blog/tree-care-guide" className="inline-flex items-center px-4 py-2 bg-primary/10 text-primary hover:bg-primary hover:text-white rounded-lg transition-colors duration-300">
                Tree Care Guide
              </Link>
              <Link href="/blog/winter-pruning" className="inline-flex items-center px-4 py-2 bg-primary/10 text-primary hover:bg-primary hover:text-white rounded-lg transition-colors duration-300">
                Winter Pruning Guide
              </Link>
              <Link href="/blog" className="inline-flex items-center px-4 py-2 bg-neutral/10 text-neutral hover:bg-neutral hover:text-white rounded-lg transition-colors duration-300">
                All Articles →
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      <ImageGallery />
      <Reviews />
      <Footer />
    </main>
  );
}
