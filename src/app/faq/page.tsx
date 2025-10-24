import React from 'react';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import Script from 'next/script';

// Import components
const Navbar = dynamic(() => import('@/components/Navbar'), { ssr: true });
const Footer = dynamic(() => import('@/components/Footer'), { ssr: true });
const FAQItem = dynamic(() => import('@/components/FAQItem'), { ssr: true });

export const metadata = {
  title: 'Frequently Asked Questions | Carter Tree Care',
  description: 'Answers to the most frequently asked questions about our tree care services, pricing and procedures.'
};

const faqData = [
  {
    question: "How do you calculate your services? What factors influence the costs?",
    answer: "We consider all factors: time, number of staff needed, tools, transport, experience, disposal and most importantly the risk."
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
    answer: "We have complete first-class insurance coverage for tree work worldwide."
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
    answer: "All personal protective equipment is worn by staff and unnecessary risks are never taken. Guy wire techniques are used when necessary."
  },
  {
    question: "How can homeowners prepare their property before you arrive?",
    answer: "Remove all valuable items that you can remove from the work area."
  },
  {
    question: "What follow-up care is required after your services?",
    answer: "Watch for possible diseases in the tree or deadwood/broken branches that need to be removed. Also, trees along the road must be pruned according to regulations - 2.5 m high from the sidewalk, 4 m high from the road."
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
    question: "Do you offer warranties or guarantees for your work?",
    answer: "We guarantee that the work is carried out in the safest way possible."
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

export default function FAQPage() {
  // Generate FAQ Schema for SEO
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqData.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <main className="min-h-screen flex flex-col bg-secondary">
      {/* FAQ Schema Markup */}
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />

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
                Help & Support
              </div>
              
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral mb-6 leading-tight">
                Frequently Asked <span className="text-primary relative">
                  Questions
                  <svg className="absolute -bottom-2 left-0 w-full h-2 text-primary/30" viewBox="0 0 100 10" preserveAspectRatio="none">
                    <path d="M0,8 Q50,0 100,8" stroke="currentColor" strokeWidth="2" fill="none"/>
                  </svg>
                </span>
              </h1>
              
              <p className="text-lg text-neutral/80 leading-relaxed max-w-3xl mx-auto">
                Answers to the most frequently asked questions about our services, 
                pricing and procedures. If you have any other questions, please feel free to contact us.
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
            <p className="text-neutral/80 mb-6">Do you have any other questions?</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://wa.me/353872522604" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-green-500 hover:bg-green-600 transition-colors duration-300"
              >
                WhatsApp Chat
                <svg className="h-5 w-5 ml-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                </svg>
              </a>
              <Link 
                href="/contact"
                className="inline-flex items-center px-6 py-3 border border-primary text-base font-medium rounded-md text-primary bg-white hover:bg-primary/5 transition-colors duration-300"
              >
                Contact Form
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