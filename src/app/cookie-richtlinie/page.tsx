import React from 'react';
import dynamic from 'next/dynamic';
import Link from 'next/link';

// Import components
const Navbar = dynamic(() => import('@/components/Navbar'), { ssr: true });
const Footer = dynamic(() => import('@/components/Footer'), { ssr: true });
const CookieSettingsButton = dynamic(() => import('@/components/CookieSettingsButton'));

export const metadata = {
  title: 'Cookie Policy | Carter Tree Care',
  description: 'Learn which cookies we use and how we protect your data. Transparent information about our cookie usage.',
  keywords: 'cookies, privacy, cookie policy, gdpr, tree care',
};

export default function CookiePolicyPage() {
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
                  <span className="ml-2 text-neutral text-sm font-medium">Cookie Policy</span>
                </li>
              </ol>
            </nav>
            
            {/* Main Hero Content */}
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                Transparent Information
              </div>
              
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-neutral mb-4 lg:mb-6 leading-tight">
                Cookie <span className="text-primary relative">
                  Policy
                  <svg className="absolute -bottom-2 left-0 w-full h-2 text-primary/30" viewBox="0 0 100 10" preserveAspectRatio="none">
                    <path d="M0,8 Q50,0 100,8" stroke="currentColor" strokeWidth="2" fill="none"/>
                  </svg>
                </span>
              </h1>
              
              <p className="text-base sm:text-lg lg:text-xl text-neutral/80 mb-6 lg:mb-8 leading-relaxed max-w-3xl mx-auto">
                Learn which cookies we use and how we protect your data. 
                We are committed to complete transparency.
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

            {/* Introduction */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-neutral mb-4">What are Cookies?</h2>
              <p className="text-neutral/80 leading-relaxed mb-4">
                Cookies are small text files that are stored on your device when you visit our website. 
                They contain information about your use of the website and help us provide you with a better 
                browsing experience.
              </p>
              <p className="text-neutral/80 leading-relaxed">
                According to the General Data Protection Regulation (GDPR) and the Telecommunications-Telemedia Data Protection Act (TTDSG), 
                we are obligated to inform you about the use of cookies and obtain your consent.
              </p>
            </div>

            {/* Cookie Categories */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-neutral mb-6">Cookie Categories on Our Website</h2>
              
              {/* Necessary Cookies */}
              <div className="bg-white border border-neutral/10 rounded-xl p-6 mb-6 shadow-sm">
                <div className="flex items-center mb-4">
                  <div className="w-4 h-4 bg-green-500 rounded-full mr-3"></div>
                  <h3 className="text-xl font-semibold text-neutral">Necessary Cookies</h3>
                </div>
                <p className="text-neutral/80 mb-4">
                  These cookies are essential for the proper functioning of the website. 
                  They cannot be deactivated as the website would not function without them.
                </p>
                <div className="bg-neutral/5 rounded-lg p-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <strong className="text-neutral">Purpose:</strong>
                      <div className="mt-1 text-neutral/70 space-y-1">
                        <div className="flex items-start">
                          <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span>Session Management</span>
                        </div>
                        <div className="flex items-start">
                          <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span>Security Features</span>
                        </div>
                        <div className="flex items-start">
                          <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span>Contact Form Functionality</span>
                        </div>
                        <div className="flex items-start">
                          <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span>Save Cookie Settings</span>
                        </div>
                      </div>
                    </div>
                    <div>
                      <strong className="text-neutral">Details:</strong>
                      <div className="mt-1 text-neutral/70 space-y-1">
                        <div><strong>Provider:</strong> Carter Tree Care (First-Party)</div>
                        <div><strong>Storage Duration:</strong> Session to 30 days</div>
                        <div><strong>Legal Basis:</strong> Legitimate Interest (Art. 6 Para. 1 lit. f GDPR)</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Functional Cookies */}
              <div className="bg-white border border-neutral/10 rounded-xl p-6 mb-6 shadow-sm">
                <div className="flex items-center mb-4">
                  <div className="w-4 h-4 bg-blue-500 rounded-full mr-3"></div>
                  <h3 className="text-xl font-semibold text-neutral">Functional Cookies</h3>
                </div>
                <p className="text-neutral/80 mb-4">
                  These cookies enable advanced functionalities and personalizations 
                  to improve your user experience.
                </p>
                <div className="bg-neutral/5 rounded-lg p-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <strong className="text-neutral">Purpose:</strong>
                      <div className="mt-1 text-neutral/70 space-y-1">
                        <div className="flex items-start">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span>Save Language Preferences</span>
                        </div>
                        <div className="flex items-start">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span>Personalize User Experience</span>
                        </div>
                        <div className="flex items-start">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span>Remember Form Inputs</span>
                        </div>
                      </div>
                    </div>
                    <div>
                      <strong className="text-neutral">Details:</strong>
                      <div className="mt-1 text-neutral/70 space-y-1">
                        <div><strong>Provider:</strong> Carter Tree Care (First-Party)</div>
                        <div><strong>Storage Duration:</strong> 12 months</div>
                        <div><strong>Legal Basis:</strong> Consent (Art. 6 Para. 1 lit. a GDPR)</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Analytics Cookies */}
              <div className="bg-white border border-neutral/10 rounded-xl p-6 mb-6 shadow-sm">
                <div className="flex items-center mb-4">
                  <div className="w-4 h-4 bg-purple-500 rounded-full mr-3"></div>
                  <h3 className="text-xl font-semibold text-neutral">Analytics Cookies</h3>
                </div>
                <p className="text-neutral/80 mb-4">
                  These cookies help us understand how visitors interact with our website 
                  so we can continuously improve it.
                </p>
                <div className="bg-neutral/5 rounded-lg p-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <strong className="text-neutral">Purpose:</strong>
                      <div className="mt-1 text-neutral/70 space-y-1">
                        <div className="flex items-start">
                          <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span>Analyze Website Usage</span>
                        </div>
                        <div className="flex items-start">
                          <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span>Create Visitor Statistics</span>
                        </div>
                        <div className="flex items-start">
                          <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span>Monitor Performance</span>
                        </div>
                        <div className="flex items-start">
                          <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span>Identify Popular Content</span>
                        </div>
                      </div>
                    </div>
                    <div>
                      <strong className="text-neutral">Details:</strong>
                      <div className="mt-1 text-neutral/70 space-y-1">
                        <div><strong>Provider:</strong> Google Analytics (Third-Party)</div>
                        <div><strong>Storage Duration:</strong> 26 months</div>
                        <div><strong>Data Transfer:</strong> USA (adequate level of protection)</div>
                        <div><strong>Legal Basis:</strong> Consent (Art. 6 Para. 1 lit. a GDPR)</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Cookie Management */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-neutral mb-4">Manage Your Cookie Settings</h2>
              <p className="text-neutral/80 leading-relaxed mb-6">
                You always have the option to change or revoke your cookie settings. 
                You can do this in various ways:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-secondary rounded-lg p-6">
                  <h4 className="font-semibold text-neutral mb-3">🍪 Adjust Directly Here</h4>
                  <p className="text-sm text-neutral/70 mb-4">
                    Click the button below to manage your cookie settings 
                    directly from this page.
                  </p>
                  <CookieSettingsButton />
                </div>
                
                <div className="bg-secondary rounded-lg p-6">
                  <h4 className="font-semibold text-neutral mb-3">🔧 Settings Widget</h4>
                  <p className="text-sm text-neutral/70">
                    After initial consent, a small settings icon appears in the bottom left. 
                    You can adjust your cookie preferences at any time with this.
                  </p>
                </div>

                <div className="bg-secondary rounded-lg p-6">
                  <h4 className="font-semibold text-neutral mb-3">🌐 Browser Settings</h4>
                  <p className="text-sm text-neutral/70">
                    Manage cookies directly in your browser settings. 
                    This affects all websites.
                  </p>
                </div>
              </div>
            </div>

            {/* Browser Instructions */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-neutral mb-4">Browser-Specific Instructions</h2>
              <div className="bg-neutral/5 rounded-lg p-6">
                <p className="text-neutral/80 mb-4">
                  Here&apos;s how you can manage cookies in different browsers:
                </p>
                <div className="text-sm text-neutral/70 space-y-2">
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span><strong>Chrome:</strong> Settings → Privacy and Security → Cookies and other site data</span>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span><strong>Firefox:</strong> Settings → Privacy & Security → Cookies and Site Data</span>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span><strong>Safari:</strong> Settings → Privacy → Manage Cookies and Website Data</span>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span><strong>Edge:</strong> Settings → Cookies and Site Permissions → Cookies and Stored Data</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Data Processing */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-neutral mb-4">Data Processing and Transfer</h2>
              <p className="text-neutral/80 leading-relaxed mb-4">
                When you accept analytics cookies, anonymized data about your website usage 
                is transferred to Google Analytics. This transfer occurs:
              </p>
              
              <div className="bg-neutral/5 rounded-lg p-6">
                <div className="text-sm text-neutral/70 space-y-2">
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span><strong>Anonymized:</strong> Your IP address is shortened and cannot be traced back to you</span>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span><strong>Securely encrypted:</strong> All data is transmitted encrypted</span>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span><strong>GDPR compliant:</strong> Google Analytics is configured accordingly</span>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span><strong>Deletion:</strong> Data is automatically deleted after 26 months</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Rights */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-neutral mb-4">Your Rights</h2>
              <p className="text-neutral/80 leading-relaxed mb-4">
                According to GDPR, you have the following rights regarding your data:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white border border-neutral/10 rounded-lg p-4">
                  <h4 className="font-semibold text-neutral mb-2">📋 Right to Information</h4>
                  <p className="text-sm text-neutral/70">
                    You can request information about the data stored about you at any time.
                  </p>
                </div>
                
                <div className="bg-white border border-neutral/10 rounded-lg p-4">
                  <h4 className="font-semibold text-neutral mb-2">✏️ Right to Rectification</h4>
                  <p className="text-sm text-neutral/70">
                    You can have incorrect data corrected at any time.
                  </p>
                </div>
                
                <div className="bg-white border border-neutral/10 rounded-lg p-4">
                  <h4 className="font-semibold text-neutral mb-2">🗑️ Right to Erasure</h4>
                  <p className="text-sm text-neutral/70">
                    You can request the deletion of your data.
                  </p>
                </div>
                
                <div className="bg-white border border-neutral/10 rounded-lg p-4">
                  <h4 className="font-semibold text-neutral mb-2">⛔ Right to Object</h4>
                  <p className="text-sm text-neutral/70">
                    You can object to the processing of your data.
                  </p>
                </div>
              </div>
            </div>

            {/* Contact */}
            <div className="bg-primary/5 rounded-xl p-8 text-center">
              <h3 className="text-xl font-bold text-neutral mb-4">Questions about our Cookie Policy?</h3>
              <p className="text-neutral/80 mb-6">
                If you have questions about the use of cookies or exercising your rights, you can contact us at any time.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/kontakt"
                  className="inline-flex items-center px-6 py-3 bg-primary hover:bg-primary-dark text-white hover:text-white font-medium rounded-md transition-colors duration-300"
                >
                  <span className="text-white">Get in Touch</span>
                </Link>
                <Link 
                  href="/datenschutz"
                  className="inline-flex items-center px-6 py-3 border border-primary text-primary hover:text-primary font-medium rounded-md hover:bg-primary/5 transition-colors duration-300"
                >
                  <span className="text-primary">Privacy Policy</span>
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