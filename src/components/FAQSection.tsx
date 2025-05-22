'use client';

import React from 'react';
import FAQItem from './FAQItem';

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