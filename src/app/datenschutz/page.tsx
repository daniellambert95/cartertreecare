import React from 'react';
import dynamic from 'next/dynamic';
import Link from 'next/link';

// Import components
const Navbar = dynamic(() => import('@/components/Navbar'), { ssr: true });
const Footer = dynamic(() => import('@/components/Footer'), { ssr: true });

export const metadata = {
  title: 'Privacy Policy | Carter Tree Care',
  description: 'Privacy policy of Carter Tree Care. Learn how we protect and process your data.',
  keywords: 'privacy, gdpr, tree care, data, protection',
};

export default function PrivacyPolicyPage() {
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
                  <span className="ml-2 text-neutral text-sm font-medium">Privacy Policy</span>
                </li>
              </ol>
            </nav>
            
            {/* Main Hero Content */}
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                GDPR Compliant
              </div>
              
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-neutral mb-4 lg:mb-6 leading-tight">
                Privacy <span className="text-primary relative">
                  Policy
                  <svg className="absolute -bottom-2 left-0 w-full h-2 text-primary/30" viewBox="0 0 100 10" preserveAspectRatio="none">
                    <path d="M0,8 Q50,0 100,8" stroke="currentColor" strokeWidth="2" fill="none"/>
                  </svg>
                </span>
              </h1>
              
              <p className="text-base sm:text-lg lg:text-xl text-neutral/80 mb-6 lg:mb-8 leading-relaxed max-w-3xl mx-auto">
                Your privacy is important to us. Here you can learn how we protect and process your data.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Content Section */}
      <section className="py-12 md:py-20 bg-white relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="prose prose-lg max-w-none">
            
            {/* Last Updated */}
            <div className="bg-secondary rounded-lg p-4 mb-8">
              <p className="text-sm text-neutral/70 mb-0">
                <strong>Last Updated:</strong> {new Date().toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </p>
            </div>

            {/* Responsible Party */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-neutral mb-4">Data Controller</h2>
              <div className="bg-neutral/5 rounded-lg p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold text-neutral mb-2">Company</h3>
                    <div className="text-neutral/80 space-y-1">
                      <div>Carter Tree Care</div>
                      <div>Professional Tree Services</div>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-neutral mb-2">Contact</h3>
                    <div className="text-neutral/80 space-y-1">
                      <div>📧 jcartertreecare@gmail.com</div>
                      <div>📞 +353 174 522 5935</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Data Collection */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-neutral mb-4">What Data Do We Collect?</h2>
              
              {/* Contact Form Data */}
              <div className="bg-white border border-neutral/10 rounded-xl p-6 mb-6 shadow-sm">
                <div className="flex items-center mb-4">
                  <div className="w-4 h-4 bg-blue-500 rounded-full mr-3"></div>
                  <h3 className="text-xl font-semibold text-neutral">Contact Form</h3>
                </div>
                <p className="text-neutral/80 mb-4">
                  When you send us a message via our contact form, we collect the following data:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <strong className="text-neutral">Collected Data:</strong>
                    <div className="mt-1 text-neutral/70 space-y-1">
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span>Name</span>
                      </div>
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span>Email Address</span>
                      </div>
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span>Phone Number (optional)</span>
                      </div>
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span>Message Content</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <strong className="text-neutral">Details:</strong>
                    <div className="mt-1 text-neutral/70 space-y-1">
                      <div><strong>Purpose:</strong> Processing your inquiry</div>
                      <div><strong>Legal Basis:</strong> Legitimate Interest (Art. 6 Para. 1 lit. f GDPR)</div>
                      <div><strong>Storage Duration:</strong> 3 years after project completion</div>
                      <div><strong>Deletion:</strong> On request or automatically</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Website Analytics */}
              <div className="bg-white border border-neutral/10 rounded-xl p-6 mb-6 shadow-sm">
                <div className="flex items-center mb-4">
                  <div className="w-4 h-4 bg-purple-500 rounded-full mr-3"></div>
                  <h3 className="text-xl font-semibold text-neutral">Website Analytics</h3>
                </div>
                <p className="text-neutral/80 mb-4">
                  To improve our website, we use Google Analytics (only with your consent):
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <strong className="text-neutral">Collected Data:</strong>
                    <div className="mt-1 text-neutral/70 space-y-1">
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span>Shortened IP Address</span>
                      </div>
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span>Visited Pages</span>
                      </div>
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span>Time Spent</span>
                      </div>
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span>Browser Information</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <strong className="text-neutral">Details:</strong>
                    <div className="mt-1 text-neutral/70 space-y-1">
                      <div><strong>Purpose:</strong> Website Optimization</div>
                      <div><strong>Legal Basis:</strong> Consent (Art. 6 Para. 1 lit. a GDPR)</div>
                      <div><strong>Provider:</strong> Google LLC, USA</div>
                      <div><strong>Storage Duration:</strong> 26 months</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Technical Data */}
              <div className="bg-white border border-neutral/10 rounded-xl p-6 shadow-sm">
                <div className="flex items-center mb-4">
                  <div className="w-4 h-4 bg-green-500 rounded-full mr-3"></div>
                  <h3 className="text-xl font-semibold text-neutral">Technical Data</h3>
                </div>
                <p className="text-neutral/80 mb-4">
                  Technical information automatically collected when visiting our website:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <strong className="text-neutral">Collected Data:</strong>
                    <div className="mt-1 text-neutral/70 space-y-1">
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span>IP Address</span>
                      </div>
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span>Browser Type and Version</span>
                      </div>
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span>Operating System</span>
                      </div>
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span>Access Time</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <strong className="text-neutral">Details:</strong>
                    <div className="mt-1 text-neutral/70 space-y-1">
                      <div><strong>Purpose:</strong> Website Security and Functionality</div>
                      <div><strong>Legal Basis:</strong> Legitimate Interest (Art. 6 Para. 1 lit. f GDPR)</div>
                      <div><strong>Storage Duration:</strong> 7 days</div>
                      <div><strong>Deletion:</strong> Automatically</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* User Rights */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-neutral mb-4">Your Rights</h2>
              <p className="text-neutral/80 leading-relaxed mb-6">
                Under GDPR, you have the following rights regarding your personal data:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white border border-neutral/10 rounded-lg p-4">
                  <h4 className="font-semibold text-neutral mb-2 flex items-center">
                    <span className="text-primary mr-2">📋</span>
                    Right to Information
                  </h4>
                  <p className="text-sm text-neutral/70">
                    You can request information about the data stored about you at any time.
                  </p>
                </div>
                
                <div className="bg-white border border-neutral/10 rounded-lg p-4">
                  <h4 className="font-semibold text-neutral mb-2 flex items-center">
                    <span className="text-primary mr-2">✏️</span>
                    Right to Rectification
                  </h4>
                  <p className="text-sm text-neutral/70">
                    You can have incorrect or incomplete data corrected.
                  </p>
                </div>
                
                <div className="bg-white border border-neutral/10 rounded-lg p-4">
                  <h4 className="font-semibold text-neutral mb-2 flex items-center">
                    <span className="text-primary mr-2">🗑️</span>
                    Right to Erasure
                  </h4>
                  <p className="text-sm text-neutral/70">
                    You can request the deletion of your data if there is no reason for storage.
                  </p>
                </div>
                
                <div className="bg-white border border-neutral/10 rounded-lg p-4">
                  <h4 className="font-semibold text-neutral mb-2 flex items-center">
                    <span className="text-primary mr-2">⛔</span>
                    Right to Object
                  </h4>
                  <p className="text-sm text-neutral/70">
                    You can object to the processing of your data.
                  </p>
                </div>
                
                <div className="bg-white border border-neutral/10 rounded-lg p-4">
                  <h4 className="font-semibold text-neutral mb-2 flex items-center">
                    <span className="text-primary mr-2">📦</span>
                    Data Portability
                  </h4>
                  <p className="text-sm text-neutral/70">
                    You can receive your data in a structured format.
                  </p>
                </div>
                
                <div className="bg-white border border-neutral/10 rounded-lg p-4">
                  <h4 className="font-semibold text-neutral mb-2 flex items-center">
                    <span className="text-primary mr-2">🚫</span>
                    Withdraw Consent
                  </h4>
                  <p className="text-sm text-neutral/70">
                    You can withdraw granted consents at any time.
                  </p>
                </div>
              </div>
            </div>

            {/* Data Security */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-neutral mb-4">Data Security</h2>
              <div className="bg-neutral/5 rounded-lg p-6">
                <p className="text-neutral/80 mb-4">
                  We take all necessary technical and organizational measures to protect your data:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-sm text-neutral/70">SSL encryption of the website</span>
                    </div>
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-sm text-neutral/70">Secure server infrastructure</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-sm text-neutral/70">Regular security updates</span>
                    </div>
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-sm text-neutral/70">Access restrictions</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact for Privacy */}
            <div className="bg-primary/5 rounded-xl p-8 text-center">
              <h3 className="text-xl font-bold text-neutral mb-4">Questions about Data Protection?</h3>
              <p className="text-neutral/80 mb-6">
                If you have questions about data processing or exercising your rights, please feel free to contact us.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/kontakt"
                  className="inline-flex items-center px-6 py-3 bg-primary hover:bg-primary-dark text-white hover:text-white font-medium rounded-md transition-colors duration-300"
                >
                  <span className="text-white">Submit Privacy Request</span>
                </Link>
                <Link 
                  href="/cookie-richtlinie"
                  className="inline-flex items-center px-6 py-3 border border-primary text-primary hover:text-primary font-medium rounded-md hover:bg-primary/5 transition-colors duration-300"
                >
                  <span className="text-primary">Cookie Policy</span>
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
} 