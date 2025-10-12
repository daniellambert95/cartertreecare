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
              <h2 className="text-2xl font-bold text-neutral mb-6">Cookie-Kategorien auf unserer Website</h2>
              
              {/* Necessary Cookies */}
              <div className="bg-white border border-neutral/10 rounded-xl p-6 mb-6 shadow-sm">
                <div className="flex items-center mb-4">
                  <div className="w-4 h-4 bg-green-500 rounded-full mr-3"></div>
                  <h3 className="text-xl font-semibold text-neutral">Notwendige Cookies</h3>
                </div>
                <p className="text-neutral/80 mb-4">
                  Diese Cookies sind für das ordnungsgemäße Funktionieren der Website unerlässlich. 
                  Sie können nicht deaktiviert werden, da die Website ohne sie nicht funktionieren würde.
                </p>
                <div className="bg-neutral/5 rounded-lg p-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <strong className="text-neutral">Zweck:</strong>
                      <div className="mt-1 text-neutral/70 space-y-1">
                        <div className="flex items-start">
                          <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span>Session-Management</span>
                        </div>
                        <div className="flex items-start">
                          <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span>Sicherheitsfunktionen</span>
                        </div>
                        <div className="flex items-start">
                          <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span>Kontaktformular-Funktionalität</span>
                        </div>
                        <div className="flex items-start">
                          <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span>Cookie-Einstellungen speichern</span>
                        </div>
                      </div>
                    </div>
                    <div>
                      <strong className="text-neutral">Details:</strong>
                      <div className="mt-1 text-neutral/70 space-y-1">
                        <div><strong>Anbieter:</strong> Der Baumchirurg (First-Party)</div>
                        <div><strong>Speicherdauer:</strong> Session bis 30 Tage</div>
                        <div><strong>Rechtsgrundlage:</strong> Berechtigtes Interesse (Art. 6 Abs. 1 lit. f DSGVO)</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Functional Cookies */}
              <div className="bg-white border border-neutral/10 rounded-xl p-6 mb-6 shadow-sm">
                <div className="flex items-center mb-4">
                  <div className="w-4 h-4 bg-blue-500 rounded-full mr-3"></div>
                  <h3 className="text-xl font-semibold text-neutral">Funktionale Cookies</h3>
                </div>
                <p className="text-neutral/80 mb-4">
                  Diese Cookies ermöglichen erweiterte Funktionalitäten und Personalisierungen, 
                  um Ihre Nutzererfahrung zu verbessern.
                </p>
                <div className="bg-neutral/5 rounded-lg p-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <strong className="text-neutral">Zweck:</strong>
                      <div className="mt-1 text-neutral/70 space-y-1">
                        <div className="flex items-start">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span>Sprachpräferenzen speichern</span>
                        </div>
                        <div className="flex items-start">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span>Benutzererfahrung personalisieren</span>
                        </div>
                        <div className="flex items-start">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span>Formular-Eingaben merken</span>
                        </div>
                      </div>
                    </div>
                    <div>
                      <strong className="text-neutral">Details:</strong>
                      <div className="mt-1 text-neutral/70 space-y-1">
                        <div><strong>Anbieter:</strong> Der Baumchirurg (First-Party)</div>
                        <div><strong>Speicherdauer:</strong> 12 Monate</div>
                        <div><strong>Rechtsgrundlage:</strong> Einwilligung (Art. 6 Abs. 1 lit. a DSGVO)</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Analytics Cookies */}
              <div className="bg-white border border-neutral/10 rounded-xl p-6 mb-6 shadow-sm">
                <div className="flex items-center mb-4">
                  <div className="w-4 h-4 bg-purple-500 rounded-full mr-3"></div>
                  <h3 className="text-xl font-semibold text-neutral">Analytik-Cookies</h3>
                </div>
                <p className="text-neutral/80 mb-4">
                  Diese Cookies helfen uns dabei zu verstehen, wie Besucher mit unserer Website interagieren, 
                  damit wir sie kontinuierlich verbessern können.
                </p>
                <div className="bg-neutral/5 rounded-lg p-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <strong className="text-neutral">Zweck:</strong>
                      <div className="mt-1 text-neutral/70 space-y-1">
                        <div className="flex items-start">
                          <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span>Website-Nutzung analysieren</span>
                        </div>
                        <div className="flex items-start">
                          <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span>Besucherstatistiken erstellen</span>
                        </div>
                        <div className="flex items-start">
                          <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span>Performance überwachen</span>
                        </div>
                        <div className="flex items-start">
                          <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span>Beliebte Inhalte identifizieren</span>
                        </div>
                      </div>
                    </div>
                    <div>
                      <strong className="text-neutral">Details:</strong>
                      <div className="mt-1 text-neutral/70 space-y-1">
                        <div><strong>Anbieter:</strong> Google Analytics (Third-Party)</div>
                        <div><strong>Speicherdauer:</strong> 26 Monate</div>
                        <div><strong>Datenübertragung:</strong> USA (angemessenes Schutzniveau)</div>
                        <div><strong>Rechtsgrundlage:</strong> Einwilligung (Art. 6 Abs. 1 lit. a DSGVO)</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Cookie Management */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-neutral mb-4">Ihre Cookie-Einstellungen verwalten</h2>
              <p className="text-neutral/80 leading-relaxed mb-6">
                Sie haben jederzeit die Möglichkeit, Ihre Cookie-Einstellungen zu ändern oder zu widerrufen. 
                Dies können Sie auf verschiedene Weise tun:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-secondary rounded-lg p-6">
                  <h4 className="font-semibold text-neutral mb-3">🍪 Direkt hier anpassen</h4>
                  <p className="text-sm text-neutral/70 mb-4">
                    Klicken Sie auf die Schaltfläche unten, um Ihre Cookie-Einstellungen 
                    direkt von dieser Seite aus zu verwalten.
                  </p>
                  <CookieSettingsButton />
                </div>
                
                <div className="bg-secondary rounded-lg p-6">
                  <h4 className="font-semibold text-neutral mb-3">🔧 Einstellungs-Widget</h4>
                  <p className="text-sm text-neutral/70">
                    Nach der ersten Zustimmung erscheint unten links ein kleines Einstellungs-Symbol. 
                    Damit können Sie jederzeit Ihre Cookie-Präferenzen anpassen.
                  </p>
                </div>

                <div className="bg-secondary rounded-lg p-6">
                  <h4 className="font-semibold text-neutral mb-3">🌐 Browser-Einstellungen</h4>
                  <p className="text-sm text-neutral/70">
                    Verwalten Sie Cookies direkt in den Einstellungen Ihres Browsers. 
                    Dies betrifft alle Websites.
                  </p>
                </div>
              </div>
            </div>

            {/* Browser Instructions */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-neutral mb-4">Browser-spezifische Anleitungen</h2>
              <div className="bg-neutral/5 rounded-lg p-6">
                <p className="text-neutral/80 mb-4">
                  So können Sie Cookies in verschiedenen Browsern verwalten:
                </p>
                <div className="text-sm text-neutral/70 space-y-2">
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span><strong>Chrome:</strong> Einstellungen → Datenschutz und Sicherheit → Cookies und andere Websitedaten</span>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span><strong>Firefox:</strong> Einstellungen → Datenschutz & Sicherheit → Cookies und Website-Daten</span>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span><strong>Safari:</strong> Einstellungen → Datenschutz → Cookies und Website-Daten verwalten</span>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span><strong>Edge:</strong> Einstellungen → Cookies und Websiteberechtigungen → Cookies und gespeicherte Daten</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Data Processing */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-neutral mb-4">Datenverarbeitung und Übertragung</h2>
              <p className="text-neutral/80 leading-relaxed mb-4">
                Wenn Sie Analytik-Cookies akzeptieren, werden anonymisierte Daten über Ihre Website-Nutzung 
                an Google Analytics übertragen. Diese Übertragung erfolgt:
              </p>
              
              <div className="bg-neutral/5 rounded-lg p-6">
                <div className="text-sm text-neutral/70 space-y-2">
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span><strong>Anonymisiert:</strong> Ihre IP-Adresse wird gekürzt und kann nicht zu Ihnen zurückverfolgt werden</span>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span><strong>Sicher verschlüsselt:</strong> Alle Daten werden verschlüsselt übertragen</span>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span><strong>DSGVO-konform:</strong> Google Analytics ist entsprechend konfiguriert</span>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span><strong>Löschung:</strong> Daten werden nach 26 Monaten automatisch gelöscht</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Rights */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-neutral mb-4">Ihre Rechte</h2>
              <p className="text-neutral/80 leading-relaxed mb-4">
                Gemäß der DSGVO haben Sie folgende Rechte bezüglich Ihrer Daten:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white border border-neutral/10 rounded-lg p-4">
                  <h4 className="font-semibold text-neutral mb-2">📋 Auskunftsrecht</h4>
                  <p className="text-sm text-neutral/70">
                    Sie können jederzeit Auskunft über die über Sie gespeicherten Daten verlangen.
                  </p>
                </div>
                
                <div className="bg-white border border-neutral/10 rounded-lg p-4">
                  <h4 className="font-semibold text-neutral mb-2">✏️ Berichtigungsrecht</h4>
                  <p className="text-sm text-neutral/70">
                    Unrichtige Daten können Sie jederzeit korrigieren lassen.
                  </p>
                </div>
                
                <div className="bg-white border border-neutral/10 rounded-lg p-4">
                  <h4 className="font-semibold text-neutral mb-2">🗑️ Löschungsrecht</h4>
                  <p className="text-sm text-neutral/70">
                    Sie können die Löschung Ihrer Daten verlangen.
                  </p>
                </div>
                
                <div className="bg-white border border-neutral/10 rounded-lg p-4">
                  <h4 className="font-semibold text-neutral mb-2">⛔ Widerspruchsrecht</h4>
                  <p className="text-sm text-neutral/70">
                    Sie können der Verarbeitung Ihrer Daten widersprechen.
                  </p>
                </div>
              </div>
            </div>

            {/* Contact */}
            <div className="bg-primary/5 rounded-xl p-8 text-center">
              <h3 className="text-xl font-bold text-neutral mb-4">Fragen zu unserer Cookie-Richtlinie?</h3>
              <p className="text-neutral/80 mb-6">
                Bei Fragen zur Verwendung von Cookies oder zur Ausübung Ihrer Rechte können Sie uns jederzeit kontaktieren.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/kontakt"
                  className="inline-flex items-center px-6 py-3 bg-primary hover:bg-primary-dark text-white hover:text-white font-medium rounded-md transition-colors duration-300"
                >
                  <span className="text-white">Kontakt aufnehmen</span>
                </Link>
                <Link 
                  href="/datenschutz"
                  className="inline-flex items-center px-6 py-3 border border-primary text-primary hover:text-primary font-medium rounded-md hover:bg-primary/5 transition-colors duration-300"
                >
                  <span className="text-primary">Datenschutzerklärung</span>
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