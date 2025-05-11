'use client';

import React from 'react';
import FAQItem from './FAQItem';

const faqData = [
  {
    question: "Wie schnell können Sie einen Termin anbieten?",
    answer: "In der Regel können wir innerhalb von 1-2 Wochen einen Termin für eine Beratung oder Besichtigung anbieten. Bei Notfällen versuchen wir, so schnell wie möglich zu reagieren und bieten einen Notfallservice an."
  },
  {
    question: "Bieten Sie kostenlose Beratungen an?",
    answer: "Ja, wir bieten eine kostenlose Erstberatung an, bei der wir Ihre Bäume begutachten und Ihnen Empfehlungen geben können. Für detaillierte Analysen oder Gutachten fallen jedoch Kosten an, die wir Ihnen transparent mitteilen."
  },
  {
    question: "Wie werden die Kosten berechnet?",
    answer: "Die Kosten hängen von verschiedenen Faktoren ab, wie der Art der Dienstleistung, der Größe und Anzahl der Bäume sowie der Zugänglichkeit. Nach einer Besichtigung erstellen wir Ihnen ein detailliertes und transparentes Angebot ohne versteckte Kosten."
  },
  {
    question: "Welche Qualifikationen haben Ihre Mitarbeiter?",
    answer: "Unsere Mitarbeiter sind ausgebildete Baumpfleger mit langjähriger Erfahrung und regelmäßigen Weiterbildungen. Wir arbeiten nach den neuesten Sicherheitsstandards und verwenden moderne Techniken und Geräte."
  },
  {
    question: "In welchem Umkreis sind Sie tätig?",
    answer: "Wir sind hauptsächlich im Umkreis von 50 km um Waldstadt tätig. Bei größeren Projekten oder speziellen Anforderungen sind wir aber auch bereit, weitere Strecken zurückzulegen. Sprechen Sie uns gerne an."
  }
];

const FAQSection = () => {
  return (
    <section className="py-16 bg-secondary-dark">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-20 h-20 bg-primary/5 rounded-full -translate-y-1/2 -translate-x-1/2"></div>
        <div className="absolute bottom-0 right-0 w-32 h-32 bg-primary/5 rounded-full translate-y-1/3 translate-x-1/3"></div>
        
        <div className="text-center mb-12 relative z-10">
          <h2 className="text-3xl font-bold text-neutral mb-4">Häufig gestellte Fragen</h2>
          <p className="text-lg text-neutral/80 max-w-xl mx-auto">
            Antworten auf die am häufigsten gestellten Fragen zu unseren Dienstleistungen
          </p>
        </div>
        
        <div className="space-y-4 relative z-10">
          {faqData.map((faq, index) => (
            <FAQItem 
              key={index} 
              question={faq.question} 
              answer={faq.answer} 
            />
          ))}
        </div>
        
        <div className="mt-12 text-center relative z-10">
          <p className="text-neutral/80 mb-6">Haben Sie weitere Fragen?</p>
          <a 
            href="/kontakt" 
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-primary hover:bg-primary-dark transition-colors duration-300"
          >
            Kontaktieren Sie uns
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQSection; 