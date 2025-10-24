'use client';

import React from 'react';
import FAQItem from './FAQItem';

const faqData = [
  {
    question: "How do you calculate your services? What factors influence the costs?",
    answer: "We consider all factors: time, number of employees needed, tools, transport, experience, disposal, and especially the risk involved."
  },
  {
    question: "How far in advance should customers book various services?",
    answer: "We recommend booking 2-4 weeks in advance."
  },
  {
    question: "Do you offer emergency tree services? How quickly can you respond?",
    answer: "Yes, we can respond within 48 hours."
  },
  {
    question: "What insurance coverage do you have?",
    answer: "We have comprehensive first-class insurance coverage for tree work worldwide."
  },
  {
    question: "How long do typical services take (tree removal, pruning, etc.)?",
    answer: "This depends entirely on the tree and possible obstacles, distance from the road, etc."
  },
  {
    question: "What happens to the wood/waste after tree work?",
    answer: "It is taken to a recycling center and processed into compost."
  },
  {
    question: "What safety measures do you implement during tree work?",
    answer: "All personal protective equipment is worn by employees and unnecessary risks are never taken. Guy-rope techniques are used when necessary."
  },
  {
    question: "How can homeowners prepare their property before you arrive?",
    answer: "Remove any valuable items that you can move from the work area."
  },
  {
    question: "What aftercare is required after your services?",
    answer: "Watch for possible diseases in the tree or deadwood/broken branches that need to be removed. Trees by the road must also be pruned according to regulations - 2.5m high from the sidewalk, 4m high from the road."
  },
  {
    question: "What are signs that a tree needs professional attention?",
    answer: "Deadwood, broken branches, leaning trees, diseased trees."
  },
  {
    question: "Do you offer free consultations or estimates?",
    answer: "Over the phone, yes."
  },
  {
    question: "What payment methods do you accept?",
    answer: "Bank transfer and cash."
  },
  {
    question: "Do you offer guarantees or warranties for your work?",
    answer: "We guarantee that the work is carried out in the safest possible way."
  },
  {
    question: "What sets your services apart from other tree care providers?",
    answer: "We perform high-quality cuts at affordable prices. The cleanest and most precise cuts that are best for the health and safety of your tree for the future."
  },
  {
    question: "Do customers need to be present during the work?",
    answer: "No, once the work area is fully accessible."
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
          <h2 className="text-3xl font-bold text-neutral mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-neutral/80 max-w-xl mx-auto">
            Answers to the most frequently asked questions about our services
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
          <p className="text-neutral/80 mb-6">Have more questions?</p>
          <a 
            href="https://wa.me/353872522604" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-green-500 hover:bg-green-600 transition-colors duration-300"
          >
            Message on WhatsApp
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