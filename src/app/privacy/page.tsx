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
                GDPR-compliant
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
                Your privacy is important to us. Here you will learn how we protect and process your data.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Content Section */}
      <section className="py-12 md:py-20 bg-white relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="prose prose-lg max-w-none">
            
            {/* Professional Translation Notice */}
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-8">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <svg className="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="ml-3">
                  <h3 className="text-sm font-medium text-yellow-800">Professional Legal Translation Required</h3>
                  <p className="mt-1 text-sm text-yellow-700">
                    This privacy policy contains detailed legal content in German that requires professional legal translation to ensure compliance with data protection laws. The content below maintains the original German text for legal accuracy.
                  </p>
                </div>
              </div>
            </div>

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
                      <div>Professional Tree Care</div>
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
              <h2 className="text-2xl font-bold text-neutral mb-4">Welche Daten sammeln wir?</h2>
              
              {/* Contact Form Data */}
              <div className="bg-white border border-neutral/10 rounded-xl p-6 mb-6 shadow-sm">
                <div className="flex items-center mb-4">
                  <div className="w-4 h-4 bg-blue-500 rounded-full mr-3"></div>
                  <h3 className="text-xl font-semibold text-neutral">Kontaktformular</h3>
                </div>
                <p className="text-neutral/80 mb-4">
                  Wenn Sie uns über unser Kontaktformular eine Nachricht senden, sammeln wir die folgenden Daten:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <strong className="text-neutral">Erfasste Daten:</strong>
                    <div className="mt-1 text-neutral/70 space-y-1">
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span>Name</span>
                      </div>
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span>E-Mail-Adresse</span>
                      </div>
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span>Telefonnummer (freiwillig)</span>
                      </div>
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span>Nachrichteninhalt</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <strong className="text-neutral">Details:</strong>
                    <div className="mt-1 text-neutral/70 space-y-1">
                      <div><strong>Zweck:</strong> Bearbeitung Ihrer Anfrage</div>
                      <div><strong>Rechtsgrundlage:</strong> Berechtigtes Interesse (Art. 6 Abs. 1 lit. f DSGVO)</div>
                      <div><strong>Speicherdauer:</strong> 3 Jahre nach Projektabschluss</div>
                      <div><strong>Löschung:</strong> Auf Anfrage oder automatisch</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Website Analytics */}
              <div className="bg-white border border-neutral/10 rounded-xl p-6 mb-6 shadow-sm">
                <div className="flex items-center mb-4">
                  <div className="w-4 h-4 bg-purple-500 rounded-full mr-3"></div>
                  <h3 className="text-xl font-semibold text-neutral">Website-Analyse</h3>
                </div>
                <p className="text-neutral/80 mb-4">
                  Zur Verbesserung unserer Website verwenden wir Google Analytics (nur mit Ihrer Einwilligung):
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <strong className="text-neutral">Erfasste Daten:</strong>
                    <div className="mt-1 text-neutral/70 space-y-1">
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span>Gekürzte IP-Adresse</span>
                      </div>
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span>Besuchte Seiten</span>
                      </div>
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span>Verweildauer</span>
                      </div>
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span>Browser-Informationen</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <strong className="text-neutral">Details:</strong>
                    <div className="mt-1 text-neutral/70 space-y-1">
                      <div><strong>Zweck:</strong> Website-Optimierung</div>
                      <div><strong>Rechtsgrundlage:</strong> Einwilligung (Art. 6 Abs. 1 lit. a DSGVO)</div>
                      <div><strong>Anbieter:</strong> Google LLC, USA</div>
                      <div><strong>Speicherdauer:</strong> 26 Monate</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Technical Data */}
              <div className="bg-white border border-neutral/10 rounded-xl p-6 shadow-sm">
                <div className="flex items-center mb-4">
                  <div className="w-4 h-4 bg-green-500 rounded-full mr-3"></div>
                  <h3 className="text-xl font-semibold text-neutral">Technische Daten</h3>
                </div>
                <p className="text-neutral/80 mb-4">
                  Automatisch beim Besuch unserer Website erfasste technische Informationen:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <strong className="text-neutral">Erfasste Daten:</strong>
                    <div className="mt-1 text-neutral/70 space-y-1">
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span>IP-Adresse</span>
                      </div>
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span>Browser-Typ und Version</span>
                      </div>
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span>Betriebssystem</span>
                      </div>
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span>Zugriffszeitpunkt</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <strong className="text-neutral">Details:</strong>
                    <div className="mt-1 text-neutral/70 space-y-1">
                      <div><strong>Zweck:</strong> Website-Sicherheit und Funktionalität</div>
                      <div><strong>Rechtsgrundlage:</strong> Berechtigtes Interesse (Art. 6 Abs. 1 lit. f DSGVO)</div>
                      <div><strong>Speicherdauer:</strong> 7 Tage</div>
                      <div><strong>Löschung:</strong> Automatisch</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* User Rights */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-neutral mb-4">Ihre Rechte</h2>
              <p className="text-neutral/80 leading-relaxed mb-6">
                Nach der DSGVO haben Sie folgende Rechte bezüglich Ihrer personenbezogenen Daten:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white border border-neutral/10 rounded-lg p-4">
                  <h4 className="font-semibold text-neutral mb-2 flex items-center">
                    <span className="text-primary mr-2">📋</span>
                    Auskunftsrecht
                  </h4>
                  <p className="text-sm text-neutral/70">
                    Sie können jederzeit Auskunft über die über Sie gespeicherten Daten verlangen.
                  </p>
                </div>
                
                <div className="bg-white border border-neutral/10 rounded-lg p-4">
                  <h4 className="font-semibold text-neutral mb-2 flex items-center">
                    <span className="text-primary mr-2">✏️</span>
                    Berichtigungsrecht
                  </h4>
                  <p className="text-sm text-neutral/70">
                    Unrichtige oder unvollständige Daten können Sie korrigieren lassen.
                  </p>
                </div>
                
                <div className="bg-white border border-neutral/10 rounded-lg p-4">
                  <h4 className="font-semibold text-neutral mb-2 flex items-center">
                    <span className="text-primary mr-2">🗑️</span>
                    Löschungsrecht
                  </h4>
                  <p className="text-sm text-neutral/70">
                    Sie können die Löschung Ihrer Daten verlangen, wenn kein Grund für die Speicherung besteht.
                  </p>
                </div>
                
                <div className="bg-white border border-neutral/10 rounded-lg p-4">
                  <h4 className="font-semibold text-neutral mb-2 flex items-center">
                    <span className="text-primary mr-2">⛔</span>
                    Widerspruchsrecht
                  </h4>
                  <p className="text-sm text-neutral/70">
                    Sie können der Verarbeitung Ihrer Daten widersprechen.
                  </p>
                </div>
                
                <div className="bg-white border border-neutral/10 rounded-lg p-4">
                  <h4 className="font-semibold text-neutral mb-2 flex items-center">
                    <span className="text-primary mr-2">📦</span>
                    Datenportabilität
                  </h4>
                  <p className="text-sm text-neutral/70">
                    Sie können Ihre Daten in einem strukturierten Format erhalten.
                  </p>
                </div>
                
                <div className="bg-white border border-neutral/10 rounded-lg p-4">
                  <h4 className="font-semibold text-neutral mb-2 flex items-center">
                    <span className="text-primary mr-2">🚫</span>
                    Einwilligung widerrufen
                  </h4>
                  <p className="text-sm text-neutral/70">
                    Erteilte Einwilligungen können Sie jederzeit widerrufen.
                  </p>
                </div>
              </div>
            </div>

            {/* Data Security */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-neutral mb-4">Datensicherheit</h2>
              <div className="bg-neutral/5 rounded-lg p-6">
                <p className="text-neutral/80 mb-4">
                  Wir treffen alle notwendigen technischen und organisatorischen Maßnahmen, um Ihre Daten zu schützen:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-sm text-neutral/70">SSL-Verschlüsselung der Website</span>
                    </div>
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-sm text-neutral/70">Sichere Server-Infrastruktur</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-sm text-neutral/70">Regelmäßige Sicherheitsupdates</span>
                    </div>
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-sm text-neutral/70">Zugriffsbeschränkungen</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact for Privacy */}
            <div className="bg-primary/5 rounded-xl p-8 text-center">
              <h3 className="text-xl font-bold text-neutral mb-4">Questions about data protection?</h3>
              <p className="text-neutral/80 mb-6">
                If you have questions about the processing of your data or exercising your rights, please feel free to contact us.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/kontakt"
                  className="inline-flex items-center px-6 py-3 bg-primary hover:bg-primary-dark text-white hover:text-white font-medium rounded-md transition-colors duration-300"
                >
                  <span className="text-white">Submit data protection request</span>
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