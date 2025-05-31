"use client"
import React, { useState } from 'react';
import Image from 'next/image';

// Define service categories and their types
type ServiceCategory = 'tree-care' | 'garden' | 'safety' | 'removal' | 'all';

type ServiceCategoryItem = {
  id: ServiceCategory;
  name: string;
};

type Service = {
  title: string;
  description: string;
  longDescription?: string;
  icon: React.ReactNode;
  category: Exclude<ServiceCategory, 'all'>;
};

const serviceCategories: ServiceCategoryItem[] = [
  { id: 'all', name: 'Alle Leistungen' },
  { id: 'tree-care', name: 'Baumpflege' },
  { id: 'garden', name: 'Gartenarbeit' },
  { id: 'safety', name: 'Sicherheit' },
  { id: 'removal', name: 'Entfernung' }
];

const ServiceCard = ({ 
  title, 
  description, 
  longDescription,
  icon 
}: {
  title: string;
  description: string;
  longDescription?: string;
  icon: React.ReactNode;
}) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div 
      className="bg-white rounded-xl shadow-lg p-5 transition-all duration-300 border-l-4 border-primary flex flex-col h-full hover:shadow-xl hover:translate-y-[-2px]"
    >
      <div className="flex items-start">
        <div className="h-14 w-14 rounded-full bg-primary/15 flex items-center justify-center text-primary-dark mr-3 flex-shrink-0">
          {icon}
        </div>
        <div>
          <h3 className="text-lg font-bold text-neutral mb-2">{title}</h3>
          <p className="text-neutral/80 text-sm">{description}</p>
        </div>
      </div>
      
      {longDescription && (
        <div 
          className={`mt-4 transition-all duration-300 overflow-hidden ${
            expanded ? 'opacity-100 max-h-96' : 'opacity-0 max-h-0'
          }`}
        >
          <p className="text-neutral/70 text-sm border-t border-primary/10 pt-3">{longDescription}</p>
        </div>
      )}
      
      <div className="mt-auto pt-4">
        {longDescription && (
          <button 
            onClick={() => setExpanded(!expanded)} 
            className="text-primary font-medium text-sm flex items-center hover:text-primary-dark transition group"
          >
            {expanded ? 'Weniger anzeigen' : 'Mehr erfahren'}
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className={`h-4 w-4 ml-1 transition-transform ${expanded ? 'rotate-180' : ''}`} 
              viewBox="0 0 20 20" 
              fill="currentColor"
            >
              <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        )}
      </div>
    </div>
  );
};

const AllServices = () => {
  const [activeCategory, setActiveCategory] = useState<ServiceCategory>('all');

  const services: Service[] = [
    {
      title: 'Baumpflege',
      description: 'Professionelle Pflege für gesunde und sichere Bäume durch fachgerechten Schnitt und regelmäßige Wartung.',
      longDescription: 'Unsere Baumpflegedienste umfassen regelmäßige Inspektionen, fachgerechten Schnitt und präventive Maßnahmen, um die Gesundheit und Sicherheit Ihrer Bäume zu gewährleisten. Mit modernsten Techniken und umfassendem Fachwissen sorgen wir dafür, dass Ihre Bäume optimal wachsen und gedeihen können.',
      icon: (
        <Image 
          src="/icons/2baumpflege.svg .svg" 
          alt="Baumpflege" 
          width={32} 
          height={32}
          className="object-contain"
        />
      ),
      category: 'tree-care'
    },
    {
      title: 'Baumprüfung',
      description: 'Fachkundige Beurteilung der Gesundheit und Sicherheit Ihrer Bäume durch zertifizierte Experten.',
      longDescription: 'Unsere zertifizierten Baumgutachter führen umfassende Baumprüfungen durch, um die Verkehrssicherheit zu gewährleisten und den Gesundheitszustand Ihrer Bäume zu bewerten. Mit modernsten Diagnoseverfahren erkennen wir frühzeitig potenzielle Probleme und entwickeln gezielte Pflegemaßnahmen.',
      icon: (
        <Image 
          src="/icons/7prufung.svg .svg" 
          alt="Baumprüfung" 
          width={32} 
          height={32}
          className="object-contain"
        />
      ),
      category: 'tree-care'
    },
    {
      title: 'Kroneneinkürzung',
      description: 'Fachgerechte Reduzierung der Baumkrone zur Größenkontrolle und Verbesserung der Stabilität.',
      longDescription: 'Durch professionelle Kroneneinkürzung reduzieren wir die Größe und das Gewicht der Baumkrone, um die Stabilität zu verbessern und das Risiko von Astbrüchen zu minimieren. Diese Technik ist besonders wichtig für Bäume in beengten Räumen oder in der Nähe von Gebäuden und Stromleitungen.',
      icon: (
        <Image 
          src="/icons/6einkurzung.svg .svg" 
          alt="Kroneneinkürzung" 
          width={32} 
          height={32}
          className="object-contain"
        />
      ),
      category: 'tree-care'
    },
    {
      title: 'Baumfällungen',
      description: 'Sichere und kontrollierte Baumfällung durch erfahrene Experten mit Rücksicht auf die Umgebung.',
      longDescription: 'Wenn ein Baum krank, beschädigt oder gefährlich geworden ist, bieten wir professionelle Fällungsdienste an. Unsere erfahrenen Arboristen führen kontrollierte Fällungen durch, wobei die Sicherheit und der Schutz umliegender Strukturen und Vegetation oberste Priorität haben.',
      icon: (
        <Image 
          src="/icons/3baumfallung.svg .svg" 
          alt="Baumfällungen" 
          width={32} 
          height={32}
          className="object-contain"
        />
      ),
      category: 'removal'
    },
    {
      title: 'Gartenarbeit',
      description: 'Professioneller Heckenschnitt und Bepflanzung für einen gepflegten und attraktiven Garten.',
      longDescription: 'Unser Gartenarbeitsdienst umfasst professionellen Heckenschnitt, Bepflanzung und allgemeine Gartenpflege. Wir helfen Ihnen, einen ästhetisch ansprechenden und gesunden Garten zu gestalten und zu erhalten, der das ganze Jahr über Freude bereitet.',
      icon: (
        <Image 
          src="/icons/8gartenarbeit.svg .svg" 
          alt="Gartenarbeit" 
          width={32} 
          height={32}
          className="object-contain"
        />
      ),
      category: 'garden'
    },
    {
      title: 'Seilklettertechnik',
      description: 'Baumpflegerische Arbeiten mit professioneller Seilklettertechnik oder Hubarbeitsbühne für schwer zugängliche Bereiche.',
      longDescription: 'Mit unserer fortschrittlichen Seilklettertechnik können wir auch schwer zugängliche Bereiche in Bäumen sicher erreichen. Diese Methode ist besonders schonend für den Baum und die umgebende Landschaft und ermöglicht präzise Arbeiten in großen Höhen.',
      icon: (
        <Image 
          src="/icons/10seilkletter.svg .svg" 
          alt="Seilklettertechnik" 
          width={32} 
          height={32}
          className="object-contain"
        />
      ),
      category: 'safety'
    },
    {
      title: 'Baumfällung',
      description: 'Kontrollierte und sichere Fällung von Bäumen unter Berücksichtigung gesetzlicher Vorgaben und Umweltschutz.',
      longDescription: 'Wenn ein Baum krank, beschädigt oder gefährlich geworden ist, bieten wir professionelle Fällungsdienste an. Unsere erfahrenen Arboristen führen kontrollierte Fällungen durch, wobei die Sicherheit und der Schutz umliegender Strukturen und Vegetation oberste Priorität haben.',
      icon: (
        <Image 
          src="/icons/12baumfallung.svg .svg" 
          alt="Baumfällung" 
          width={32} 
          height={32}
          className="object-contain"
        />
      ),
      category: 'tree-care'
    },
    {
      title: 'Totholzentfernung',
      description: 'Sichere Beseitigung von abgestorbenem Holz zur Vermeidung von Gefahren und zur Förderung der Baumgesundheit.',
      longDescription: 'Abgestorbene Äste und Holz können ein Sicherheitsrisiko darstellen und die Gesundheit des Baumes beeinträchtigen. Wir entfernen Totholz fachgerecht, um die Sicherheit zu erhöhen und die allgemeine Gesundheit und Ästhetik des Baumes zu verbessern.',
      icon: (
        <Image 
          src="/icons/4.totholz.svg .svg" 
          alt="Totholzentfernung" 
          width={32} 
          height={32}
          className="object-contain"
        />
      ),
      category: 'tree-care'
    },
    {
      title: 'Kronenpflege',
      description: 'Pflege der Baumkrone durch Entfernung von Totholz, sich kreuzenden Ästen und tief hängenden Zweigen zur Einhaltung gesetzlicher Vorschriften an Straßen und Gebäuden.',
      longDescription: 'Durch fachgerechte Kroneneinkürzung können wir die Größe und Form eines Baumes kontrollieren, seine Stabilität verbessern und das Risiko von Astbrüchen reduzieren. Diese Technik ist besonders wichtig für Bäume in beengten Räumen oder in der Nähe von Gebäuden.',
      icon: (
        <Image 
          src="/icons/5kronenpflege.svg .svg" 
          alt="Kronenpflege" 
          width={32} 
          height={32}
          className="object-contain"
        />
      ),
      category: 'tree-care'
    },
    {
      title: 'Sturmschaden',
      description: 'Schnelle und sichere Entfernung von umgestürzten oder beschädigten Bäumen nach Unwettern.',
      longDescription: 'Unser Fassadenschnitt-Service sorgt dafür, dass Bäume und Sträucher in der Nähe von Gebäuden ordentlich und kontrolliert wachsen. Dies verbessert nicht nur das Erscheinungsbild, sondern verhindert auch potenzielle Schäden an der Fassade und erhält den Lichteinfall in Gebäude.',
      icon: (
        <Image 
          src="/icons/15.stormschade.svg.svg" 
          alt="Sturmschaden" 
          width={32} 
          height={32}
          className="object-contain"
        />
      ),
      category: 'tree-care'
    },
    {
      title: 'Kronensicherungen',
      description: 'Installation von Sicherungssystemen zur Stabilisierung von Bäumen und Vermeidung von Astbrüchen.',
      longDescription: 'Für Bäume mit strukturellen Schwächen oder wertvollen historischen Bäumen bieten wir professionelle Kronensicherungssysteme an. Diese nicht-invasiven Systeme reduzieren das Risiko von Astbrüchen und verlängern die Lebensdauer des Baumes, während seine natürliche Schönheit erhalten bleibt.',
      icon: (
        <Image 
          src="/icons/11kronensicher.svg.svg" 
          alt="Kronensicherungen" 
          width={32} 
          height={32}
          className="object-contain"
        />
      ),
      category: 'safety'
    },
    {
      title: 'Grünschnittentsorgung',
      description: 'Umweltgerechte Entsorgung von Grünschnitt nach allen Baumpflegearbeiten.',
      longDescription: 'Nach Abschluss unserer Baumpflegearbeiten bieten wir eine umweltfreundliche Entsorgung des anfallenden Grünschnitts an. Je nach Material und Ihren Wünschen kann der Schnitt zu Mulch verarbeitet, kompostiert oder ordnungsgemäß entsorgt werden.',
      icon: (
        <Image 
          src="/icons/13.grunschnitt.svg .svg" 
          alt="Grünschnittentsorgung" 
          width={32} 
          height={32}
          className="object-contain"
        />
      ),
      category: 'removal'
    },
    {
      title: 'Baumstumpfentfernung',
      description: 'Professionelle Entfernung von Baumstümpfen und Wurzeln für eine saubere Fläche.',
      longDescription: 'Nach einer Baumfällung kann der zurückbleibende Stumpf unattraktiv sein und die Nutzung des Grundstücks einschränken. Unsere Baumstumpfentfernung beseitigt den Stumpf und die Hauptwurzeln vollständig, sodass Sie den Bereich neu gestalten oder bepflanzen können.',
      icon: (
        <Image 
          src="/icons/14stumpp.svg.svg" 
          alt="Baumstumpfentfernung" 
          width={32} 
          height={32}
          className="object-contain"
        />
      ),
      category: 'removal'
    },
    {
      title: 'Neupflanzungen',
      description: 'Fachkundige Beratung und Durchführung von Neu- und Ersatzpflanzungen mit geeigneten Baumarten.',
      longDescription: 'Wir beraten Sie bei der Auswahl geeigneter Baumarten für Ihren Standort und führen professionelle Pflanzungen durch. Unser Service umfasst die richtige Pflanzlochvorbereitung, Pflanzung und Erstpflege, um einen optimalen Start für Ihren neuen Baum zu gewährleisten.',
      icon: (
        <Image 
          src="/icons/9neuebam.svg.svg" 
          alt="Neupflanzungen" 
          width={32} 
          height={32}
          className="object-contain"
        />
      ),
      category: 'garden'
    }
  ];

  // Filter services based on active category
  const filteredServices = activeCategory === 'all'
    ? services
    : services.filter(service => service.category === activeCategory);

  return (
    <section className="py-16 bg-secondary relative overflow-hidden">
      {/* Decorative Background Element */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full translate-y-1/2 -translate-x-1/2"></div>
      
      {/* Background Image Element */}
      <div className="absolute right-0 top-1/4 w-40 h-40 opacity-5 hidden lg:block">
        <Image 
          src="/images/tree-action.webp" 
          alt="" 
          fill
          style={{ objectFit: 'contain' }}
        />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {serviceCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-5 py-2.5 rounded-full text-sm md:text-base font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-primary text-white shadow-md scale-105'
                  : 'bg-white text-neutral hover:bg-primary/10 hover:scale-105'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              longDescription={service.longDescription}
              icon={service.icon}
            />
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-20 text-center">
          <div className="bg-primary/10 rounded-2xl p-8 md:p-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-primary/10 rounded-full translate-y-1/2 -translate-x-1/2"></div>
            
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="text-left">
                <h3 className="text-2xl md:text-3xl font-bold text-neutral mb-4">Bereit für professionelle Baumpflege?</h3>
                <p className="text-neutral/80 mb-8">
                  Unsere Experten stehen Ihnen mit Rat und Tat zur Seite. Kontaktieren Sie uns noch heute für ein unverbindliches Angebot.
                </p>
                <a 
                  href="/kontakt" 
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-md text-white bg-primary hover:bg-primary-dark transition-colors duration-300"
                >
                  Kontaktieren Sie uns
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
              <div className="hidden md:block relative h-64">
                <div className="absolute inset-0 rounded-lg overflow-hidden shadow-lg">
                  <Image 
                    src="/images/tree-action.webp" 
                    alt="Baumpflege in Aktion" 
                    fill
                    style={{ objectFit: 'cover', objectPosition: 'center' }}
                    className="rounded-lg"
                  />
                  <div className="absolute inset-0 bg-primary/10 mix-blend-multiply"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AllServices; 