"use client"
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

// Define service categories and their types
type ServiceCategory = 'tree-care' | 'garden' | 'safety' | 'removal';

type ServiceCategoryItem = {
  id: ServiceCategory;
  name: string;
};

type Service = {
  title: string;
  description: string;
  icon: React.ReactNode;
  category: ServiceCategory;
};

type ServiceCardProps = {
  title: string;
  description: string;
  icon: React.ReactNode;
};

const serviceCategories: ServiceCategoryItem[] = [
  { id: 'tree-care', name: 'Baumpflege' },
  { id: 'garden', name: 'Gartenarbeit' },
  { id: 'safety', name: 'Sicherheit' },
  { id: 'removal', name: 'Entfernung' }
];

const ServiceCard: React.FC<ServiceCardProps> = ({ 
  title, 
  description, 
  icon
}) => {
  return (
    <div 
      className="bg-white rounded-xl shadow-lg hover:shadow-xl p-6 transition-all duration-300 border-l-4 border-primary flex flex-col h-full"
    >
      <div className="h-16 w-16 rounded-full bg-primary/15 flex items-center justify-center text-primary-dark mb-5">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-neutral mb-3">{title}</h3>
      <p className="text-neutral/80 flex-grow text-base">{description}</p>
      <div className="mt-6">
        <Link href="/kontakt" className="text-primary-dark font-semibold flex items-center hover:text-primary transition group">
          Mehr erfahren
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1 transform group-hover:translate-x-1 transition-transform" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </Link>
      </div>
    </div>
  );
};

const Services = () => {
  const [activeCategory, setActiveCategory] = useState<ServiceCategory>('tree-care');

  const services: Service[] = [
    {
      title: 'Baumpflege',
      description: 'Professionelle Pflege für gesunde und sichere Bäume durch fachgerechten Schnitt und regelmäßige Wartung.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-9 w-9" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      ),
      category: 'tree-care'
    },
    {
      title: 'Baumprüfung',
      description: 'Fachkundige Beurteilung der Gesundheit und Sicherheit Ihrer Bäume durch zertifizierte Experten.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-9 w-9" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      category: 'tree-care'
    },
    {
      title: 'Kroneneinkürzung',
      description: 'Fachgerechte Reduzierung der Baumkrone zur Größenkontrolle und Verbesserung der Stabilität.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-9 w-9" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4a1 1 0 011-1h4m5 0h4a1 1 0 011 1v4m0 5v4a1 1 0 01-1 1h-4m-5 0H5a1 1 0 01-1-1v-4" />
        </svg>
      ),
      category: 'tree-care'
    },
    {
      title: 'Baumfällungen',
      description: 'Sichere und kontrollierte Baumfällung durch erfahrene Experten mit Rücksicht auf die Umgebung.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-9 w-9" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 17v-6m0-6V4" />
        </svg>
      ),
      category: 'removal'
    },
    {
      title: 'Gartenarbeit',
      description: 'Professioneller Heckenschnitt und Bepflanzung für einen gepflegten und attraktiven Garten.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-9 w-9" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      category: 'garden'
    },
    {
      title: 'Seilklettertechnik',
      description: 'Baumpflegerische Arbeiten mit professioneller Seilklettertechnik oder Hubarbeitsbühne für schwer zugängliche Bereiche.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-9 w-9" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
      category: 'safety'
    },
    {
      title: 'Baumfällung',
      description: 'Kontrollierte und sichere Fällung von Bäumen unter Berücksichtigung gesetzlicher Vorgaben und Umweltschutz.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-9 w-9" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      category: 'tree-care'
    },
    {
      title: 'Totholzentfernung',
      description: 'Sichere Beseitigung von abgestorbenem Holz zur Vermeidung von Gefahren und zur Förderung der Baumgesundheit.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-9 w-9" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
        </svg>
      ),
      category: 'tree-care'
    },
    {
      title: 'Kronenpflege',
      description: 'Pflege der Baumkrone durch Entfernung von Totholz, sich kreuzenden Ästen und tief hängenden Zweigen zur Einhaltung gesetzlicher Vorschriften an Straßen und Gebäuden.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-9 w-9" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
        </svg>
      ),
      category: 'tree-care'
    },
    {
      title: 'Sturmschaden',
      description: 'Schnelle und sichere Entfernung von umgestürzten oder beschädigten Bäumen nach Unwettern.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-9 w-9" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      ),
      category: 'tree-care'
    },
    {
      title: 'Kronensicherungen',
      description: 'Installation von Sicherungssystemen zur Stabilisierung von Bäumen und Vermeidung von Astbrüchen.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-9 w-9" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
      category: 'safety'
    },
    {
      title: 'Grünschnittentsorgung',
      description: 'Umweltgerechte Entsorgung von Grünschnitt nach allen Baumpflegearbeiten.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-9 w-9" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
        </svg>
      ),
      category: 'removal'
    },
    {
      title: 'Baumstumpfentfernung',
      description: 'Professionelle Entfernung von Baumstümpfen und Wurzeln für eine saubere Fläche.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-9 w-9" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      category: 'removal'
    },
    {
      title: 'Neupflanzungen',
      description: 'Fachkundige Beratung und Durchführung von Neu- und Ersatzpflanzungen mit geeigneten Baumarten.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-9 w-9" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
        </svg>
      ),
      category: 'garden'
    }
  ];

  // Filter services based on active category
  const filteredServices = services.filter(service => service.category === activeCategory);

  return (
    <section id="leistungen" className="py-20 bg-gradient-to-b from-secondary-dark to-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-neutral mb-4">Unsere Leistungen</h2>
          <p className="max-w-2xl mx-auto text-neutral/80 text-lg font-medium">
            Professionelle Baumpflege und Gartenarbeit mit höchsten Sicherheitsstandards und über 2000 Bäumen Erfahrung.
          </p>
        </motion.div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {serviceCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-full text-sm md:text-base font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-primary text-white shadow-md'
                  : 'bg-white text-neutral hover:bg-primary/10'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Service Cards with Staggered Animation */}
        <div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredServices.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
            />
          ))}
        </div>

        {/* Call to Action */}
        <motion.div 
          className="mt-16 text-center flex flex-col items-center gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          viewport={{ once: true }}
        >
          <Link 
            href="/leistungen" 
            className="inline-flex items-center px-6 py-3 border border-primary text-base font-medium rounded-md shadow-sm text-primary hover:bg-primary/10 transition-colors duration-300"
          >
            Alle Leistungen anzeigen
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </Link>
          
          <a 
            href="/kontakt" 
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-primary hover:bg-primary-dark transition-colors duration-300"
          >
            Kontaktieren Sie uns für ein Angebot
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Services; 