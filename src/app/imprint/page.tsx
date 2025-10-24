import React from 'react';
import dynamic from 'next/dynamic';
import Link from 'next/link';

// Import components
const Navbar = dynamic(() => import('@/components/Navbar'), { ssr: true });
const Footer = dynamic(() => import('@/components/Footer'), { ssr: true });

export const metadata = {
  title: 'Imprint | Carter Tree Care',
  description: 'Imprint and legal information of Carter Tree Care - Professional Tree Care.',
  keywords: 'imprint, legal information, tree care, contact',
};

export default function ImpressumPage() {
  return (
    <main className="min-h-screen flex flex-col bg-secondary">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-secondary-dark via-secondary-dark to-primary/20 overflow-hidden pt-16 sm:pt-4">
        {/* Modern Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-secondary-dark/95 to-secondary-dark/80"></div>
          
          {/* Modern Geometric Shapes */}
          <div className="hidden md:block absolute top-1/4 -right-16 w-32 h-32 lg:w-48 lg:h-48 bg-primary/10 rounded-full blur-3xl"></div>
          <div className="hidden md:block absolute bottom-1/4 -left-12 w-24 h-24 lg:w-36 lg:h-36 bg-primary/15 rounded-full blur-2xl"></div>
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
                  <span className="ml-2 text-neutral text-sm font-medium">Imprint</span>
                </li>
              </ol>
            </nav>
            
            {/* Main Hero Content */}
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.5 3A1.5 1.5 0 006 4.5v.793c0 .026.01.052.025.072L8.5 8.5l2.475-3.135A.125.125 0 0111 5.293V4.5A1.5 1.5 0 009.5 3h-2z" />
                </svg>
                Legally required
              </div>
              
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-neutral mb-4 lg:mb-6 leading-tight">
                <span className="text-primary relative">
                  Imprint
                  <svg className="absolute -bottom-2 left-0 w-full h-2 text-primary/30" viewBox="0 0 100 10" preserveAspectRatio="none">
                    <path d="M0,8 Q50,0 100,8" stroke="currentColor" strokeWidth="2" fill="none"/>
                  </svg>
                </span>
              </h1>
              
              <p className="text-base sm:text-lg lg:text-xl text-neutral/80 mb-6 lg:mb-8 leading-relaxed max-w-3xl mx-auto">
                Legal information according to § 5 TMG (Telemedia Act)
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Content Section */}
      <section className="py-12 md:py-20 bg-white relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Business Information */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-neutral mb-6">Information according to § 5 TMG</h2>
            
            <div className="bg-white border border-neutral/10 rounded-xl p-6 shadow-sm">
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-neutral mb-4 flex items-center">
                    <span className="text-primary mr-2">🏢</span>
                    Company
                  </h3>
                  <div className="space-y-2 text-neutral/80">
                    <div><strong>Company name:</strong> Carter Tree Care</div>
                    <div><strong>Owner:</strong> James Carter</div>
                    <div><strong>Legal form:</strong> Sole proprietorship</div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-neutral mb-4 flex items-center">
                    <span className="text-primary mr-2">📍</span>
                    Address
                  </h3>
                  <div className="space-y-2 text-neutral/80">
                    <div><strong>Address:</strong> Grants Park, Greenoge, Co. Dublin</div>
                    <div><strong>Eircode:</strong> D24 FA40</div>
                    <div><strong>Country:</strong> Ireland</div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-neutral mb-4 flex items-center">
                    <span className="text-primary mr-2">📧</span>
                    Contact
                  </h3>
                  <div className="space-y-2 text-neutral/80">
                    <div className="flex items-center">
                      <strong className="mr-2">E-Mail:</strong>
                      <a href="mailto:jcartertreecare@gmail.com" className="text-primary hover:underline">
                        jcartertreecare@gmail.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Legal Disclaimer */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-neutral mb-6">Liability Disclaimer</h2>

            <div className="space-y-8">
              {/* Content Liability */}
              <div className="bg-white border border-neutral/10 rounded-xl p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-neutral mb-4 flex items-center">
                  <span className="text-primary mr-2">📄</span>
                  Liability for Content
                </h3>
                <div className="text-neutral/80 leading-relaxed">
                  <p>
                    The content of our pages has been created with the greatest care. However, we cannot guarantee the accuracy, completeness, and timeliness of the content. As a service provider, we are responsible for our own content on these pages in accordance with § 7 paragraph 1 TMG under general law. According to §§ 8 to 10 TMG, however, we as a service provider are not obligated to monitor transmitted or stored third-party information or to investigate circumstances that indicate illegal activity. Obligations to remove or block the use of information under general law remain unaffected. However, liability in this regard is only possible from the time of knowledge of a specific legal violation. Upon becoming aware of such legal violations, we will remove this content immediately.
                  </p>
                </div>
              </div>

              {/* Links Liability */}
              <div className="bg-white border border-neutral/10 rounded-xl p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-neutral mb-4 flex items-center">
                  <span className="text-primary mr-2">🔗</span>
                  Liability for Links
                </h3>
                <div className="text-neutral/80 leading-relaxed">
                  <p>
                    Our website contains links to external third-party websites over whose content we have no control. Therefore, we cannot assume any liability for this external content. The respective provider or operator of the pages is always responsible for the content of the linked pages. The linked pages were checked for possible legal violations at the time of linking. Illegal content was not recognizable at the time of linking. However, permanent monitoring of the content of linked pages is not reasonable without concrete evidence of a legal violation. Upon becoming aware of legal violations, we will remove such links immediately.
                  </p>
                </div>
              </div>

              {/* Copyright */}
              <div className="bg-white border border-neutral/10 rounded-xl p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-neutral mb-4 flex items-center">
                  <span className="text-primary mr-2">©</span>
                  Copyright
                </h3>
                <div className="text-neutral/80 leading-relaxed">
                  <p>
                    The content and works created by the site operators on these pages are subject to copyright law. Reproduction, editing, distribution, and any kind of exploitation outside the limits of copyright require the written consent of the respective author or creator. Downloads and copies of this site are only permitted for private, non-commercial use. Insofar as the content on this site was not created by the operator, the copyrights of third parties are respected. In particular, third-party content is marked as such. Should you nevertheless become aware of a copyright infringement, please inform us accordingly. Upon becoming aware of legal violations, we will remove such content immediately.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact CTA */}
          <div className="bg-primary/5 rounded-xl p-8 text-center">
            <h3 className="text-xl font-bold text-neutral mb-4">Legal Questions?</h3>
            <p className="text-neutral/80 mb-6">
              If you have legal questions or comments about this imprint, please feel free to contact us.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center px-6 py-3 bg-primary hover:bg-primary-dark text-white hover:text-white font-medium rounded-md transition-colors duration-300"
              >
                <span className="text-white">Contact now</span>
              </Link>
              <Link
                href="/privacy"
                className="inline-flex items-center px-6 py-3 border border-primary text-primary hover:text-primary font-medium rounded-md hover:bg-primary/5 transition-colors duration-300"
              >
                <span className="text-primary">Privacy Policy</span>
              </Link>
            </div>
          </div>

        </div>
      </section>
      
      <Footer />
    </main>
  );
} 