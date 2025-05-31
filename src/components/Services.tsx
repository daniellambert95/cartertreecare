"use client"
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

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
        <Image 
          src="/icons/2baumpflege.svg .svg" 
          alt="Baumpflege" 
          width={36} 
          height={36}
          className="object-contain"
        />
      ),
      category: 'tree-care'
    },
    {
      title: 'Baumprüfung',
      description: 'Fachkundige Beurteilung der Gesundheit und Sicherheit Ihrer Bäume durch zertifizierte Experten.',
      icon: (
        <Image 
          src="/icons/7prufung.svg .svg" 
          alt="Baumprüfung" 
          width={36} 
          height={36}
          className="object-contain"
        />
      ),
      category: 'tree-care'
    },
    {
      title: 'Kroneneinkürzung',
      description: 'Fachgerechte Reduzierung der Baumkrone zur Größenkontrolle und Verbesserung der Stabilität.',
      icon: (
        <Image 
          src="/icons/6einkurzung.svg .svg" 
          alt="Kroneneinkürzung" 
          width={36} 
          height={36}
          className="object-contain"
        />
      ),
      category: 'tree-care'
    },
    {
      title: 'Baumfällungen',
      description: 'Sichere und kontrollierte Baumfällung durch erfahrene Experten mit Rücksicht auf die Umgebung.',
      icon: (
        <Image 
          src="/icons/3baumfallung.svg .svg" 
          alt="Baumfällungen" 
          width={36} 
          height={36}
          className="object-contain"
        />
      ),
      category: 'removal'
    },
    {
      title: 'Gartenarbeit',
      description: 'Professioneller Heckenschnitt und Bepflanzung für einen gepflegten und attraktiven Garten.',
      icon: (
        <Image 
          src="/icons/8gartenarbeit.svg .svg" 
          alt="Gartenarbeit" 
          width={36} 
          height={36}
          className="object-contain"
        />
      ),
      category: 'garden'
    },
    {
      title: 'Seilklettertechnik',
      description: 'Baumpflegerische Arbeiten mit professioneller Seilklettertechnik oder Hubarbeitsbühne für schwer zugängliche Bereiche.',
      icon: (
        <Image 
          src="/icons/10seilkletter.svg .svg" 
          alt="Seilklettertechnik" 
          width={36} 
          height={36}
          className="object-contain"
        />
      ),
      category: 'safety'
    },
    {
      title: 'Baumfällung',
      description: 'Kontrollierte und sichere Fällung von Bäumen unter Berücksichtigung gesetzlicher Vorgaben und Umweltschutz.',
      icon: (
        <Image 
          src="/icons/12baumfallung.svg .svg" 
          alt="Baumfällung" 
          width={36} 
          height={36}
          className="object-contain"
        />
      ),
      category: 'tree-care'
    },
    {
      title: 'Totholzentfernung',
      description: 'Sichere Beseitigung von abgestorbenem Holz zur Vermeidung von Gefahren und zur Förderung der Baumgesundheit.',
      icon: (
        <Image 
          src="/icons/4.totholz.svg .svg" 
          alt="Totholzentfernung" 
          width={36} 
          height={36}
          className="object-contain"
        />
      ),
      category: 'tree-care'
    },
    {
      title: 'Kronenpflege',
      description: 'Pflege der Baumkrone durch Entfernung von Totholz, sich kreuzenden Ästen und tief hängenden Zweigen zur Einhaltung gesetzlicher Vorschriften an Straßen und Gebäuden.',
      icon: (
        <Image 
          src="/icons/5kronenpflege.svg .svg" 
          alt="Kronenpflege" 
          width={36} 
          height={36}
          className="object-contain"
        />
      ),
      category: 'tree-care'
    },
    {
      title: 'Sturmschaden',
      description: 'Schnelle und sichere Entfernung von umgestürzten oder beschädigten Bäumen nach Unwettern.',
      icon: (
        <Image 
          src="/icons/15.stormschade.svg.svg" 
          alt="Sturmschaden" 
          width={36} 
          height={36}
          className="object-contain"
        />
      ),
      category: 'tree-care'
    },
    {
      title: 'Kronensicherungen',
      description: 'Installation von Sicherungssystemen zur Stabilisierung von Bäumen und Vermeidung von Astbrüchen.',
      icon: (
        <Image 
          src="/icons/11kronensicher.svg.svg" 
          alt="Kronensicherungen" 
          width={36} 
          height={36}
          className="object-contain"
        />
      ),
      category: 'safety'
    },
    {
      title: 'Grünschnittentsorgung',
      description: 'Umweltgerechte Entsorgung von Grünschnitt nach allen Baumpflegearbeiten.',
      icon: (
        <Image 
          src="/icons/13.grunschnitt.svg .svg" 
          alt="Grünschnittentsorgung" 
          width={36} 
          height={36}
          className="object-contain"
        />
      ),
      category: 'removal'
    },
    {
      title: 'Baumstumpfentfernung',
      description: 'Professionelle Entfernung von Baumstümpfen und Wurzeln für eine saubere Fläche.',
      icon: (
        <Image 
          src="/icons/14stumpp.svg.svg" 
          alt="Baumstumpfentfernung" 
          width={36} 
          height={36}
          className="object-contain"
        />
      ),
      category: 'removal'
    },
    {
      title: 'Neupflanzungen',
      description: 'Fachkundige Beratung und Durchführung von Neu- und Ersatzpflanzungen mit geeigneten Baumarten.',
      icon: (
        <Image 
          src="/icons/9neuebam.svg.svg" 
          alt="Neupflanzungen" 
          width={36} 
          height={36}
          className="object-contain"
        />
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