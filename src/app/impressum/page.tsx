import React from 'react';
import dynamic from 'next/dynamic';
import Link from 'next/link';

// Import components
const Navbar = dynamic(() => import('@/components/Navbar'), { ssr: true });
const Footer = dynamic(() => import('@/components/Footer'), { ssr: true });

export const metadata = {
  title: 'Impressum | Der Baumchirurg',
  description: 'Impressum und rechtliche Angaben der Der Baumchirurg - Professionelle Baumpflege.',
  keywords: 'impressum, rechtliche angaben, baumpflege, kontakt',
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
                  <span className="ml-2 text-neutral text-sm font-medium">Impressum</span>
                </li>
              </ol>
            </nav>
            
            {/* Main Hero Content */}
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.5 3A1.5 1.5 0 006 4.5v.793c0 .026.01.052.025.072L8.5 8.5l2.475-3.135A.125.125 0 0111 5.293V4.5A1.5 1.5 0 009.5 3h-2z" />
                </svg>
                Rechtlich erforderlich
              </div>
              
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-neutral mb-4 lg:mb-6 leading-tight">
                <span className="text-primary relative">
                  Impressum
                  <svg className="absolute -bottom-2 left-0 w-full h-2 text-primary/30" viewBox="0 0 100 10" preserveAspectRatio="none">
                    <path d="M0,8 Q50,0 100,8" stroke="currentColor" strokeWidth="2" fill="none"/>
                  </svg>
                </span>
              </h1>
              
              <p className="text-base sm:text-lg lg:text-xl text-neutral/80 mb-6 lg:mb-8 leading-relaxed max-w-3xl mx-auto">
                Rechtliche Angaben gemäß § 5 TMG (Telemediengesetz)
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
            <h2 className="text-2xl font-bold text-neutral mb-6">Angaben gemäß § 5 TMG</h2>
            
            <div className="bg-white border border-neutral/10 rounded-xl p-6 shadow-sm">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold text-neutral mb-4 flex items-center">
                    <span className="text-primary mr-2">🏢</span>
                    Unternehmen
                  </h3>
                  <div className="space-y-2 text-neutral/80">
                    <div><strong>Firmenname:</strong> Der Baumchirurg</div>
                    <div><strong>Geschäftsführer:</strong> <span className="text-red-600">[BITTE ERGÄNZEN]</span></div>
                    <div><strong>Rechtsform:</strong> <span className="text-red-600">[z.B. Einzelunternehmen, GbR, GmbH]</span></div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-neutral mb-4 flex items-center">
                    <span className="text-primary mr-2">📍</span>
                    Anschrift
                  </h3>
                  <div className="space-y-2 text-neutral/80">
                    <div><strong>Straße:</strong> <span className="text-red-600">[VOLLSTÄNDIGE ADRESSE]</span></div>
                    <div><strong>PLZ/Ort:</strong> <span className="text-red-600">[POSTLEITZAHL UND ORT]</span></div>
                    <div><strong>Land:</strong> Deutschland</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-neutral mb-6">Kontakt</h2>
            
            <div className="bg-white border border-neutral/10 rounded-xl p-6 shadow-sm">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold text-neutral mb-4 flex items-center">
                    <span className="text-primary mr-2">📞</span>
                    Telefon & E-Mail
                  </h3>
                  <div className="space-y-2 text-neutral/80">
                    <div className="flex items-center">
                      <strong className="mr-2">Telefon:</strong>
                      <a href="tel:+491745225935" className="text-primary hover:underline">
                        +49 174 522 5935
                      </a>
                    </div>
                    <div className="flex items-center">
                      <strong className="mr-2">E-Mail:</strong>
                      <a href="mailto:derbaumchirurg@gmail.com" className="text-primary hover:underline">
                        derbaumchirurg@gmail.com
                      </a>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-neutral mb-4 flex items-center">
                    <span className="text-primary mr-2">🌐</span>
                    Online
                  </h3>
                  <div className="space-y-2 text-neutral/80">
                    <div><strong>Website:</strong> <span className="text-red-600">[IHRE DOMAIN]</span></div>
                    <div><strong>Verfügbarkeit:</strong> Mo-Fr, 8:00-18:00 Uhr</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Business Registration */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-neutral mb-6">Behördliche Angaben</h2>
            
            <div className="bg-neutral/5 rounded-xl p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold text-neutral mb-4 flex items-center">
                    <span className="text-primary mr-2">📋</span>
                    Registrierung
                  </h3>
                  <div className="space-y-2 text-neutral/80 text-sm">
                    <div><strong>Handelsregister:</strong> <span className="text-red-600">[Falls vorhanden: HRB-Nummer]</span></div>
                    <div><strong>Registergericht:</strong> <span className="text-red-600">[Falls vorhanden: z.B. Amtsgericht München]</span></div>
                    <div><strong>Steuernummer:</strong> <span className="text-red-600">[IHRE STEUERNUMMER]</span></div>
                    <div><strong>USt-IdNr.:</strong> <span className="text-red-600">[Falls vorhanden: DE123456789]</span></div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-neutral mb-4 flex items-center">
                    <span className="text-primary mr-2">🛡️</span>
                    Versicherung
                  </h3>
                  <div className="space-y-2 text-neutral/80 text-sm">
                    <div><strong>Betriebshaftpflicht:</strong> <span className="text-red-600">[VERSICHERUNGSNAME]</span></div>
                    <div><strong>Versicherungsraum:</strong> <span className="text-red-600">[z.B. Deutschland/Europa]</span></div>
                    <div><strong>Berufsgenossenschaft:</strong> <span className="text-red-600">[z.B. BG BAU]</span></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Professional Information */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-neutral mb-6">Berufsspezifische Angaben</h2>
            
            <div className="bg-white border border-neutral/10 rounded-xl p-6 shadow-sm">
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-neutral mb-3 flex items-center">
                    <span className="text-primary mr-2">🌳</span>
                    Tätigkeitsbereich
                  </h3>
                  <div className="text-neutral/80">
                    <p className="mb-2"><strong>Haupttätigkeit:</strong> Professionelle Baumpflege und Fällarbeiten</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                      <div>
                        <strong>Leistungen:</strong>
                        <div className="mt-1 space-y-1">
                          <div className="flex items-start">
                            <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            <span>Baumfällung</span>
                          </div>
                          <div className="flex items-start">
                            <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            <span>Baumpflege</span>
                          </div>
                          <div className="flex items-start">
                            <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            <span>Baumschnitt</span>
                          </div>
                          <div className="flex items-start">
                            <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            <span>Sturmschadenbeseitigung</span>
                          </div>
                        </div>
                      </div>
                      <div>
                        <strong>Qualifikationen:</strong>
                        <div className="mt-1 text-red-600 text-sm">
                          [z.B. Zertifizierter Baumpfleger, FLL-Zertifikat, etc.]
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Legal Notes */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-neutral mb-6">Rechtliche Hinweise</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white border border-neutral/10 rounded-lg p-6">
                <h3 className="font-semibold text-neutral mb-3 flex items-center">
                  <span className="text-primary mr-2">⚖️</span>
                  Haftungsausschluss
                </h3>
                <p className="text-sm text-neutral/70">
                  Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine Haftung für die Inhalte externer Links. 
                  Für den Inhalt der verlinkten Seiten sind ausschließlich deren Betreiber verantwortlich.
                </p>
              </div>
              
              <div className="bg-white border border-neutral/10 rounded-lg p-6">
                <h3 className="font-semibold text-neutral mb-3 flex items-center">
                  <span className="text-primary mr-2">©</span>
                  Urheberrecht
                </h3>
                <p className="text-sm text-neutral/70">
                  Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. 
                  Vervielfältigung und Verwendung bedürfen der schriftlichen Zustimmung.
                </p>
              </div>
            </div>
          </div>

          {/* Contact CTA */}
          <div className="bg-primary/5 rounded-xl p-8 text-center">
            <h3 className="text-xl font-bold text-neutral mb-4">Rechtliche Fragen?</h3>
            <p className="text-neutral/80 mb-6">
              Bei rechtlichen Fragen oder Anmerkungen zu diesem Impressum kontaktieren Sie uns gerne.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/kontakt"
                className="inline-flex items-center px-6 py-3 bg-primary hover:bg-primary-dark text-white hover:text-white font-medium rounded-md transition-colors duration-300"
              >
                <span className="text-white">Jetzt kontaktieren</span>
              </Link>
              <Link 
                href="/datenschutz"
                className="inline-flex items-center px-6 py-3 border border-primary text-primary hover:text-primary font-medium rounded-md hover:bg-primary/5 transition-colors duration-300"
              >
                <span className="text-primary">Datenschutzerklärung</span>
              </Link>
            </div>
          </div>

          {/* Important Note */}
          <div className="mt-8 bg-yellow-50 border border-yellow-200 rounded-lg p-4">
            <div className="flex items-start">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-600 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 15.5c-.77.833.192 2.5 1.732 2.5z" />
              </svg>
              <div>
                <h4 className="text-sm font-semibold text-yellow-800 mb-1">Wichtiger Hinweis</h4>
                <p className="text-xs text-yellow-700">
                  Bitte ergänzen Sie alle rot markierten Platzhalter mit Ihren korrekten Geschäftsdaten. 
                  Ein unvollständiges oder fehlerhaftes Impressum kann zu Abmahnungen führen. 
                  Bei Unsicherheiten konsultieren Sie einen Rechtsanwalt.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>
      
      <Footer />
    </main>
  );
} 