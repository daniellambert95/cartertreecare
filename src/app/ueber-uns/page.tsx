import React from 'react';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import Image from 'next/image';

// Import components
const Navbar = dynamic(() => import('@/components/Navbar'), { ssr: true });
const Footer = dynamic(() => import('@/components/Footer'), { ssr: true });

export const metadata = {
  title: 'Über Uns | Der Baumchirurg',
  description: 'Lernen Sie Der Baumchirurg kennen - Ihr Experte für professionelle Baumpflege und Gartenarbeit mit höchsten Qualitätsstandards.',
};

export default function AboutPage() {
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
                  <span className="ml-2 text-neutral text-sm font-medium">Über Uns</span>
                </li>
              </ol>
            </nav>
            
            {/* Main Hero Content */}
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Left Column - Text Content */}
              <div className="order-2 lg:order-1">
                <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20 mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  Ihr vertrauensvoller Partner
                </div>
                
                <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-neutral mb-4 lg:mb-6 leading-tight">
                  Über <span className="text-primary relative">
                    Uns
                    <svg className="absolute -bottom-2 left-0 w-full h-2 text-primary/30" viewBox="0 0 100 10" preserveAspectRatio="none">
                      <path d="M0,8 Q50,0 100,8" stroke="currentColor" strokeWidth="2" fill="none"/>
                    </svg>
                  </span>
                </h1>
                
                <p className="text-base sm:text-lg lg:text-xl text-neutral/80 mb-6 lg:mb-8 leading-relaxed max-w-2xl">
                  Das Team von Der Baumchirurg setzt neue Maßstäbe im Bereich Baumfällung und Baumpflege. 
                  Wir geben uns nicht mit mittelmäßiger Leistung zufrieden, sondern streben stets danach, 
                  unsere Qualität zu erhalten und weiter zu verbessern, damit Sie als Kunde vollständig zufrieden sind.
                </p>
                
                {/* Feature Highlights */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-3 lg:gap-4 mb-8">
                  <div className="flex items-center group">
                    <div className="h-10 w-10 rounded-xl bg-primary/15 flex items-center justify-center text-primary mr-3 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <span className="text-sm lg:text-base text-neutral font-medium">Höchste Qualität</span>
                  </div>
                  
                  <div className="flex items-center group">
                    <div className="h-10 w-10 rounded-xl bg-primary/15 flex items-center justify-center text-primary mr-3 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <span className="text-sm lg:text-base text-neutral font-medium">Zuverlässigkeit</span>
                  </div>
                  
                  <div className="flex items-center group">
                    <div className="h-10 w-10 rounded-xl bg-primary/15 flex items-center justify-center text-primary mr-3 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                    <span className="text-sm lg:text-base text-neutral font-medium">Erfahrenes Team</span>
                  </div>
                  
                  <div className="flex items-center group">
                    <div className="h-10 w-10 rounded-xl bg-primary/15 flex items-center justify-center text-primary mr-3 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                      </svg>
                    </div>
                    <span className="text-sm lg:text-base text-neutral font-medium">Fachkompetenz</span>
                  </div>
                </div>
                
                {/* CTA Button */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link 
                    href="/kontakt" 
                    className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-xl shadow-sm text-white bg-primary hover:bg-primary-dark hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300"
                  >
                    Kostenlose Beratung
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </Link>
                  <Link 
                    href="/leistungen" 
                    className="inline-flex items-center justify-center px-6 py-3 border border-neutral/20 text-base font-medium rounded-xl text-neutral bg-white/10 backdrop-blur-sm hover:bg-white/20 hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300"
                  >
                    Unsere Leistungen
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
                    alt="Der Baumchirurg Team bei der Arbeit" 
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
                      <span className="text-sm font-medium text-gray-800">Aktiv im Einsatz</span>
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
      
      {/* Company Values Section */}
      <section className="py-12 md:py-16 bg-secondary relative overflow-hidden">
        {/* Decorative Background Element */}
        <div className="hidden lg:block absolute top-0 -right-32 w-64 h-64 bg-primary/5 rounded-full"></div>
        <div className="hidden lg:block absolute bottom-0 -left-48 w-96 h-96 bg-primary/5 rounded-full"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-neutral mb-3 md:mb-4">Unsere Unternehmenswerte</h2>
            <p className="text-base sm:text-lg text-neutral/80 max-w-2xl mx-auto">
              Die folgenden Werte charakterisieren unser Fachunternehmen und bilden die Grundlage für unsere tägliche Arbeit.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8 hover:shadow-xl transition-shadow duration-300">
              <div className="h-12 w-12 sm:h-16 sm:w-16 rounded-full bg-primary/15 flex items-center justify-center text-primary mb-4 sm:mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 sm:h-8 sm:w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-neutral mb-2 sm:mb-3">Flexibilität und Kundenorientierung</h3>
              <p className="text-sm sm:text-base text-neutral/80">
                Wir passen uns Ihren individuellen Bedürfnissen an und stellen sicher, dass Ihre Anforderungen erfüllt werden. 
                Ihre Zufriedenheit steht für uns an erster Stelle.
              </p>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8 hover:shadow-xl transition-shadow duration-300">
              <div className="h-12 w-12 sm:h-16 sm:w-16 rounded-full bg-primary/15 flex items-center justify-center text-primary mb-4 sm:mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 sm:h-8 sm:w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-neutral mb-2 sm:mb-3">Fachkompetenz</h3>
              <p className="text-sm sm:text-base text-neutral/80">
                Von Bodenarbeitern bis zu Kletterern - unser Team besteht aus erfahrenen Fachleuten, 
                die ihr Handwerk verstehen und mit Präzision ausführen.
              </p>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8 hover:shadow-xl transition-shadow duration-300">
              <div className="h-12 w-12 sm:h-16 sm:w-16 rounded-full bg-primary/15 flex items-center justify-center text-primary mb-4 sm:mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 sm:h-8 sm:w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-neutral mb-2 sm:mb-3">Kontinuierliche Weiterbildung</h3>
              <p className="text-sm sm:text-base text-neutral/80">
                Wir investieren in die regelmäßige Schulung unserer Mitarbeiter, um stets auf dem neuesten Stand 
                der Technik und Methoden zu sein.
              </p>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8 hover:shadow-xl transition-shadow duration-300">
              <div className="h-12 w-12 sm:h-16 sm:w-16 rounded-full bg-primary/15 flex items-center justify-center text-primary mb-4 sm:mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 sm:h-8 sm:w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-neutral mb-2 sm:mb-3">Umfangreicher Fuhrpark</h3>
              <p className="text-sm sm:text-base text-neutral/80">
                Wir verfügen über einen umfangreichen Fuhrpark und Maschinenpark für die professionelle Arbeit 
                auf Ihrer Baustelle.
              </p>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8 hover:shadow-xl transition-shadow duration-300">
              <div className="h-12 w-12 sm:h-16 sm:w-16 rounded-full bg-primary/15 flex items-center justify-center text-primary mb-4 sm:mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 sm:h-8 sm:w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-neutral mb-2 sm:mb-3">Zuverlässigkeit</h3>
              <p className="text-sm sm:text-base text-neutral/80">
                Wir garantieren hohe Zuverlässigkeit und saubere Baustellenführung. 
                Auf unser Wort können Sie sich verlassen.
              </p>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8 hover:shadow-xl transition-shadow duration-300">
              <div className="h-12 w-12 sm:h-16 sm:w-16 rounded-full bg-primary/15 flex items-center justify-center text-primary mb-4 sm:mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 sm:h-8 sm:w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-neutral mb-2 sm:mb-3">Netzwerk</h3>
              <p className="text-sm sm:text-base text-neutral/80">
                Beste Kontakte zu kooperierenden Unternehmen für die Umsetzung fast jeden Wunsches.
                Wir finden immer eine Lösung.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Social Commitment Section */}
      {/* <section className="py-12 md:py-16 bg-secondary-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-neutral mb-4 md:mb-6">Unser soziales Engagement</h2>
              <p className="text-base sm:text-lg text-neutral/80 mb-4 md:mb-6">
                Der Baumchirurg engagiert sich aktiv in der Gemeinschaft und unterstützt lokale Organisationen und Initiativen.
                Wir glauben daran, dass Unternehmen eine Verantwortung gegenüber der Gesellschaft haben.
              </p>
              <p className="text-sm sm:text-base text-neutral/80 mb-6">
                Wir sind stolzer Sponsor verschiedener lokaler Sportvereine und Jugendprojekte. 
                Durch diese Partnerschaften möchten wir einen positiven Beitrag zur Gemeinschaft leisten und 
                die Entwicklung junger Menschen fördern.
              </p>
              
              <div className="flex space-x-3 sm:space-x-4 mt-6 sm:mt-8">
                <a href="#" className="h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-primary/15 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                  </svg>
                </a>
                <a href="#" className="h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-primary/15 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
                <a href="#" className="h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-primary/15 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                  </svg>
                </a>
              </div>
            </div>
            <div className="mt-8 md:mt-0 relative h-64 sm:h-80 md:h-96 rounded-lg overflow-hidden shadow-xl">
              <Image 
                src="/images/abseil.webp" 
                alt="Soziales Engagement" 
                fill
                style={{ objectFit: 'cover', objectPosition: 'center' }}
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </section> */}
      
      {/* Call to Action */}
      <section className="py-12 md:py-16 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-neutral mb-4 md:mb-6">Bereit, mit uns zusammenzuarbeiten?</h2>
          <p className="text-base sm:text-lg text-neutral/80 mb-6 md:mb-8 max-w-2xl mx-auto">
            Kontaktieren Sie uns noch heute für eine kostenlose Beratung und erfahren Sie, 
            wie wir Ihnen mit unseren professionellen Baumpflege-Dienstleistungen helfen können.
          </p>
          <Link 
            href="/kontakt" 
            className="inline-flex items-center px-5 py-2.5 sm:px-6 sm:py-3 border border-transparent text-sm sm:text-base font-medium rounded-md shadow-sm text-white bg-primary hover:bg-primary-dark transition-colors duration-300"
          >
            Kontakt aufnehmen
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </Link>
        </div>
      </section>
      
      <Footer />
    </main>
  );
} 