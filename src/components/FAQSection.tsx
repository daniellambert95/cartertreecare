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
        </div>
      </div>
    </section>
  );
};

export default FAQSection; 