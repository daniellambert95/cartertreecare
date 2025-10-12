import React from 'react';
import dynamic from 'next/dynamic';
import Link from 'next/link';

// Import components
const Navbar = dynamic(() => import('@/components/Navbar'), { ssr: true });
const Footer = dynamic(() => import('@/components/Footer'), { ssr: true });

export const metadata = {
  title: 'Impressum | Carter Tree Care',
  description: 'Impressum und rechtliche Angaben der Carter Tree Care - Professionelle Baumpflege.',
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
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-neutral mb-4 flex items-center">
                    <span className="text-primary mr-2">🏢</span>
                    Unternehmen
                  </h3>
                  <div className="space-y-2 text-neutral/80">
                    <div><strong>Firmenname:</strong> Carter Tree Care</div>
                    <div><strong>Inhaber:</strong> James Carter</div>
                    <div><strong>Rechtsform:</strong> Einzelunternehmen</div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-neutral mb-4 flex items-center">
                    <span className="text-primary mr-2">📍</span>
                    Anschrift
                  </h3>
                  <div className="space-y-2 text-neutral/80">
                    <div><strong>Straße:</strong> 123 Dublin Street</div>
                    <div><strong>PLZ/Ort:</strong> D02 Dublin</div>
                    <div><strong>Land:</strong> Irland</div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-neutral mb-4 flex items-center">
                    <span className="text-primary mr-2">📧</span>
                    Kontakt
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
            <h2 className="text-2xl font-bold text-neutral mb-6">Haftungsausschluss</h2>
            
            <div className="space-y-8">
              {/* Content Liability */}
              <div className="bg-white border border-neutral/10 rounded-xl p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-neutral mb-4 flex items-center">
                  <span className="text-primary mr-2">📄</span>
                  Haftung für Inhalte
                </h3>
                <div className="text-neutral/80 leading-relaxed">
                  <p>
                    Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen. Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
                  </p>
                </div>
              </div>

              {/* Links Liability */}
              <div className="bg-white border border-neutral/10 rounded-xl p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-neutral mb-4 flex items-center">
                  <span className="text-primary mr-2">🔗</span>
                  Haftung für Links
                </h3>
                <div className="text-neutral/80 leading-relaxed">
                  <p>
                    Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.
                  </p>
                </div>
              </div>

              {/* Copyright */}
              <div className="bg-white border border-neutral/10 rounded-xl p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-neutral mb-4 flex items-center">
                  <span className="text-primary mr-2">©</span>
                  Urheberrecht
                </h3>
                <div className="text-neutral/80 leading-relaxed">
                  <p>
                    Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet. Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
                  </p>
                </div>
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

        </div>
      </section>
      
      <Footer />
    </main>
  );
} 