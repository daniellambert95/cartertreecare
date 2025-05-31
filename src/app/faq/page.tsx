import React from 'react';
import dynamic from 'next/dynamic';
import Link from 'next/link';

// Import components
const Navbar = dynamic(() => import('@/components/Navbar'), { ssr: true });
const Footer = dynamic(() => import('@/components/Footer'), { ssr: true });
const FAQItem = dynamic(() => import('@/components/FAQItem'), { ssr: true });

export const metadata = {
  title: 'Häufig gestellte Fragen | Der Baumchirurg',
  description: 'Antworten auf die am häufigsten gestellten Fragen zu unseren Baumpflege-Dienstleistungen, Preisen und Abläufen.',
};

const faqData = [
  {
    question: "Wie berechnen Sie Ihre Dienstleistungen? Welche Faktoren beeinflussen die Kosten?",
    answer: "Wir berücksichtigen alle Faktoren: Zeit, Anzahl der benötigten Mitarbeiter, Werkzeuge, Transport, Erfahrung, Entsorgung und vor allem das Risiko."
  },
  {
    question: "Wie weit im Voraus sollten Kunden verschiedene Dienstleistungen buchen?",
    answer: "Wir empfehlen eine Buchung 2-4 Wochen im Voraus."
  },
  {
    question: "Bieten Sie Notfalldienste für Bäume an? Wie schnell können Sie reagieren?",
    answer: "Ja, wir können innerhalb von 48 Stunden reagieren."
  },
  {
    question: "Welchen Versicherungsschutz haben Sie?",
    answer: "Wir verfügen über einen vollständigen erstklassigen Versicherungsschutz für Baumarbeiten weltweit."
  },
  {
    question: "Wie lange dauern typische Dienstleistungen (Baumfällung, Beschneidung usw.)?",
    answer: "Dies hängt vollständig vom Baum und möglichen Hindernissen, der Entfernung von der Straße usw. ab."
  },
  {
    question: "Was passiert mit dem Holz/Abfall nach der Baumarbeit?",
    answer: "Es wird zu einem Recyclingzentrum gebracht und zu Kompost verarbeitet."
  },
  {
    question: "Welche Sicherheitsmaßnahmen setzen Sie während der Baumarbeit um?",
    answer: "Alle persönlichen Schutzausrüstungen werden von den Mitarbeitern getragen und es werden niemals unnötige Risiken eingegangen. Bei Bedarf werden Abspanntechniken eingesetzt."
  },
  {
    question: "Wie können Hausbesitzer ihr Grundstück vorbereiten, bevor Sie eintreffen?",
    answer: "Entfernen Sie alle wertvollen Gegenstände, die Sie aus dem Arbeitsbereich entfernen können."
  },
  {
    question: "Welche Nachsorge ist nach Ihren Dienstleistungen erforderlich?",
    answer: "Achten Sie auf mögliche Krankheiten im Baum oder Totholz/gebrochene Äste, die entfernt werden müssen. Auch müssen Bäume an der Straße nach Vorschrift beschnitten werden - 2,5 m hoch vom Gehweg, 4 m hoch von der Straße."
  },
  {
    question: "Was sind Anzeichen dafür, dass ein Baum professionelle Aufmerksamkeit benötigt?",
    answer: "Totholz, gebrochene Äste, schräg stehende Bäume, erkrankte Bäume."
  },
  {
    question: "Bieten Sie kostenlose Beratungen oder Schätzungen an?",
    answer: "Ja."
  },
  {
    question: "Welche Zahlungsmethoden akzeptieren Sie?",
    answer: "Banküberweisung und Bargeld."
  },
  {
    question: "Bieten Sie Garantien oder Gewährleistungen für Ihre Arbeit an?",
    answer: "Wir garantieren, dass die Arbeit auf die sicherste Art und Weise durchgeführt wird."
  },
  {
    question: "Was unterscheidet Ihre Dienstleistungen von anderen Baumpflegern?",
    answer: "Wir führen hochwertige Schnitte zu erschwinglichen Preisen durch. Die saubersten und präzisesten Schnitte, die für die Gesundheit und Sicherheit Ihres Baumes für die Zukunft am besten sind."
  },
  {
    question: "Müssen Kunden während der Arbeit anwesend sein?",
    answer: "Nein, sobald der Arbeitsbereich vollständig zugänglich ist."
  }
];

export default function FAQPage() {
  return (
    <main className="min-h-screen flex flex-col bg-secondary">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-secondary-dark via-secondary-dark to-primary/20 overflow-hidden pt-24 sm:pt-20">
        {/* Modern Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-secondary-dark/95 to-secondary-dark/80"></div>
          <div className="hidden md:block absolute top-1/4 -right-16 w-32 h-32 bg-primary/10 rounded-full blur-3xl"></div>
          <div className="hidden md:block absolute bottom-1/4 -left-12 w-24 h-24 bg-primary/15 rounded-full blur-2xl"></div>
        </div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="py-8 sm:py-12 md:py-16">
            {/* Breadcrumb */}
            <nav className="flex mb-8" aria-label="Breadcrumb">
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
                  <span className="ml-2 text-neutral text-sm font-medium">FAQ</span>
                </li>
              </ol>
            </nav>
            
            {/* Header */}
            <div className="text-center">
              <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20 mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Hilfe & Support
              </div>
              
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral mb-6 leading-tight">
                Häufig gestellte <span className="text-primary relative">
                  Fragen
                  <svg className="absolute -bottom-2 left-0 w-full h-2 text-primary/30" viewBox="0 0 100 10" preserveAspectRatio="none">
                    <path d="M0,8 Q50,0 100,8" stroke="currentColor" strokeWidth="2" fill="none"/>
                  </svg>
                </span>
              </h1>
              
              <p className="text-lg text-neutral/80 leading-relaxed max-w-3xl mx-auto">
                Antworten auf die am häufigsten gestellten Fragen zu unseren Dienstleistungen, 
                Preisen und Abläufen. Sollten Sie weitere Fragen haben, kontaktieren Sie uns gerne.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-12 md:py-16 bg-secondary-dark relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-20 h-20 bg-primary/5 rounded-full -translate-y-1/2 -translate-x-1/2"></div>
        <div className="absolute bottom-0 right-0 w-32 h-32 bg-primary/5 rounded-full translate-y-1/3 translate-x-1/3"></div>
        
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="space-y-4">
            {faqData.map((faq, index) => (
              <FAQItem 
                key={index} 
                question={faq.question} 
                answer={faq.answer} 
              />
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-neutral/80 mb-6">Haben Sie weitere Fragen?</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://wa.me/491745225935" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-green-500 hover:bg-green-600 transition-colors duration-300"
              >
                WhatsApp schreiben
                <svg className="h-5 w-5 ml-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                </svg>
              </a>
              <Link 
                href="/kontakt"
                className="inline-flex items-center px-6 py-3 border border-primary text-base font-medium rounded-md text-primary bg-white hover:bg-primary/5 transition-colors duration-300"
              >
                Kontaktformular
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
} 