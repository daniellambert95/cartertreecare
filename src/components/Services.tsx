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
  { id: 'tree-care', name: 'Tree Care' },
  { id: 'garden', name: 'Garden Work' },
  { id: 'safety', name: 'Safety' },
  { id: 'removal', name: 'Removal' }
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
        <Link href="/contact" className="text-primary-dark font-semibold flex items-center hover:text-primary transition group">
          Learn more
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
      title: 'Tree Care',
      description: 'Professional care for healthy and safe trees through proper pruning and regular maintenance.',
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
      title: 'Tree Inspection',
      description: 'Expert assessment of your trees health and safety by certified professionals.',
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
      title: 'Crown Reduction',
      description: 'Professional reduction of tree crown for size control and improved stability.',
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
      title: 'Tree Removal',
      description: 'Safe and controlled tree removal by experienced experts with consideration for the environment.',
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
      title: 'Garden Work',
      description: 'Professional hedge trimming and planting for a well-maintained and attractive garden.',
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
      title: 'Rope Access Technique',
      description: 'Tree care work using professional rope access techniques or aerial platforms for hard-to-reach areas.',
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
      title: 'Tree Removal',
      description: 'Controlled and safe removal of trees considering legal requirements and environmental protection.',
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
      title: 'Deadwood Removal',
      description: 'Safe removal of dead wood to prevent hazards and promote tree health.',
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
      title: 'Crown Care',
      description: 'Crown maintenance through removal of deadwood, crossing branches and low-hanging branches to comply with legal requirements on roads and buildings.',
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
      title: 'Storm Damage',
      description: 'Quick and safe removal of fallen or damaged trees after storms.',
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
      title: 'Crown Bracing',
      description: 'Installation of bracing systems to stabilize trees and prevent branch failure.',
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
      title: 'Green Waste Disposal',
      description: 'Environmentally friendly disposal of green waste after all tree care work.',
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
      title: 'Stump Removal',
      description: 'Professional removal of tree stumps and roots for a clean area.',
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
      title: 'New Plantings',
      description: 'Expert advice and implementation of new and replacement plantings with suitable tree species.',
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
          <h2 className="text-3xl md:text-4xl font-bold text-neutral mb-4">Our Services</h2>
          <p className="max-w-2xl mx-auto text-neutral/80 text-lg font-medium">
            Professional tree care and garden work with the highest safety standards and experience with over 2000 trees.
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
            href="/services" 
            className="inline-flex items-center px-6 py-3 border border-primary text-base font-medium rounded-md shadow-sm text-primary hover:bg-primary/10 transition-colors duration-300"
          >
            View All Services
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </Link>
          
          <a 
            href="/contact" 
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-primary hover:bg-primary-dark transition-colors duration-300"
          >
            Contact us for a quote
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