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
  { id: 'all', name: 'All Services' },
  { id: 'tree-care', name: 'Tree Care' },
  { id: 'garden', name: 'Garden Work' },
  { id: 'safety', name: 'Safety' },
  { id: 'removal', name: 'Removal' }
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
            {expanded ? 'Show less' : 'Learn more'}
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
      title: 'Tree Care',
      description: 'Professional care for healthy and safe trees through proper pruning and regular maintenance.',
      longDescription: 'Our tree care services include regular inspections, proper pruning and preventive measures to ensure the health and safety of your trees. With state-of-the-art techniques and comprehensive expertise, we ensure that your trees can grow and thrive optimally.',
      icon: (
        <Image 
          src="/icons/2baumpflege.svg .svg" 
          alt="Tree Care" 
          width={32} 
          height={32}
          className="object-contain"
        />
      ),
      category: 'tree-care'
    },
    {
      title: 'Tree Inspection',
      description: 'Expert assessment of the health and safety of your trees by certified experts.',
      longDescription: 'Our certified tree assessors conduct comprehensive tree inspections to ensure traffic safety and evaluate the health status of your trees. With state-of-the-art diagnostic procedures, we identify potential problems early and develop targeted care measures.',
      icon: (
        <Image 
          src="/icons/7prufung.svg .svg" 
          alt="Tree Inspection" 
          width={32} 
          height={32}
          className="object-contain"
        />
      ),
      category: 'tree-care'
    },
    {
      title: 'Crown Reduction',
      description: 'Professional reduction of the tree crown for size control and improved stability.',
      longDescription: 'Through professional crown reduction, we reduce the size and weight of the tree crown to improve stability and minimize the risk of branch breakage. This technique is particularly important for trees in confined spaces or near buildings and power lines.',
      icon: (
        <Image 
          src="/icons/6einkurzung.svg .svg" 
          alt="Crown Reduction" 
          width={32} 
          height={32}
          className="object-contain"
        />
      ),
      category: 'tree-care'
    },
    {
      title: 'Tree Removal',
      description: 'Safe and controlled tree removal by experienced experts with consideration for the environment.',
      longDescription: 'When a tree has become sick, damaged or dangerous, we offer professional felling services. Our experienced arborists perform controlled felling, with safety and protection of surrounding structures and vegetation being the top priority.',
      icon: (
        <Image 
          src="/icons/3baumfallung.svg .svg" 
          alt="Tree Removal" 
          width={32} 
          height={32}
          className="object-contain"
        />
      ),
      category: 'removal'
    },
    {
      title: 'Garden Work',
      description: 'Professional hedge trimming and planting for a well-maintained and attractive garden.',
      longDescription: 'Our garden work service includes professional hedge trimming, planting and general garden maintenance. We help you create and maintain an aesthetically pleasing and healthy garden that brings joy all year round.',
      icon: (
        <Image 
          src="/icons/8gartenarbeit.svg .svg" 
          alt="Garden Work" 
          width={32} 
          height={32}
          className="object-contain"
        />
      ),
      category: 'garden'
    },
    {
      title: 'Rope Access Technique',
      description: 'Tree care work using professional rope access techniques or aerial platforms for hard-to-reach areas.',
      longDescription: 'With our advanced rope access technique, we can safely reach even hard-to-reach areas in trees. This method is particularly gentle on the tree and surrounding landscape and enables precise work at great heights.',
      icon: (
        <Image 
          src="/icons/10seilkletter.svg .svg" 
          alt="Rope Access Technique" 
          width={32} 
          height={32}
          className="object-contain"
        />
      ),
      category: 'safety'
    },
    {
      title: 'Tree Felling',
      description: 'Controlled and safe felling of trees considering legal requirements and environmental protection.',
      longDescription: 'When a tree has become sick, damaged or dangerous, we offer professional felling services. Our experienced arborists perform controlled felling, with safety and protection of surrounding structures and vegetation being the top priority.',
      icon: (
        <Image 
          src="/icons/12baumfallung.svg .svg" 
          alt="Tree Felling" 
          width={32} 
          height={32}
          className="object-contain"
        />
      ),
      category: 'tree-care'
    },
    {
      title: 'Deadwood Removal',
      description: 'Safe removal of dead wood to prevent hazards and promote tree health.',
      longDescription: 'Dead branches and wood can pose a safety risk and affect the health of the tree. We remove deadwood professionally to increase safety and improve the overall health and aesthetics of the tree.',
      icon: (
        <Image 
          src="/icons/4.totholz.svg .svg" 
          alt="Deadwood Removal" 
          width={32} 
          height={32}
          className="object-contain"
        />
      ),
      category: 'tree-care'
    },
    {
      title: 'Crown Care',
      description: 'Crown maintenance through removal of deadwood, crossing branches and low-hanging branches to comply with legal requirements on roads and buildings.',
      longDescription: 'Through professional crown reduction, we can control the size and shape of a tree, improve its stability and reduce the risk of branch breakage. This technique is particularly important for trees in confined spaces or near buildings.',
      icon: (
        <Image 
          src="/icons/5kronenpflege.svg .svg" 
          alt="Crown Care" 
          width={32} 
          height={32}
          className="object-contain"
        />
      ),
      category: 'tree-care'
    },
    {
      title: 'Storm Damage',
      description: 'Quick and safe removal of fallen or damaged trees after storms.',
      longDescription: 'Our facade pruning service ensures that trees and shrubs near buildings grow neatly and in a controlled manner. This not only improves the appearance, but also prevents potential damage to the facade and maintains light penetration into buildings.',
      icon: (
        <Image 
          src="/icons/15.stormschade.svg.svg" 
          alt="Storm Damage" 
          width={32} 
          height={32}
          className="object-contain"
        />
      ),
      category: 'tree-care'
    },
    {
      title: 'Crown Bracing',
      description: 'Installation of bracing systems to stabilize trees and prevent branch failure.',
      longDescription: 'For trees with structural weaknesses or valuable historic trees, we offer professional crown bracing systems. These non-invasive systems reduce the risk of branch failure and extend the life of the tree while preserving its natural beauty.',
      icon: (
        <Image 
          src="/icons/11kronensicher.svg.svg" 
          alt="Crown Bracing" 
          width={32} 
          height={32}
          className="object-contain"
        />
      ),
      category: 'safety'
    },
    {
      title: 'Green Waste Disposal',
      description: 'Environmentally friendly disposal of green waste after all tree care work.',
      longDescription: 'After completing our tree care work, we offer environmentally friendly disposal of the resulting green waste. Depending on the material and your wishes, the cuttings can be processed into mulch, composted or properly disposed of.',
      icon: (
        <Image 
          src="/icons/13.grunschnitt.svg .svg" 
          alt="Green Waste Disposal" 
          width={32} 
          height={32}
          className="object-contain"
        />
      ),
      category: 'removal'
    },
    {
      title: 'Stump Removal',
      description: 'Professional removal of tree stumps and roots for a clean area.',
      longDescription: 'After tree felling, the remaining stump can be unsightly and limit the use of the property. Our stump removal completely eliminates the stump and main roots, allowing you to redesign or replant the area.',
      icon: (
        <Image 
          src="/icons/14stumpp.svg.svg" 
          alt="Stump Removal" 
          width={32} 
          height={32}
          className="object-contain"
        />
      ),
      category: 'removal'
    },
    {
      title: 'New Plantings',
      description: 'Expert advice and implementation of new and replacement plantings with suitable tree species.',
      longDescription: 'We advise you on selecting suitable tree species for your location and carry out professional plantings. Our service includes proper planting hole preparation, planting and initial care to ensure an optimal start for your new tree.',
      icon: (
        <Image 
          src="/icons/9neuebam.svg.svg" 
          alt="New Plantings" 
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
                <h3 className="text-2xl md:text-3xl font-bold text-neutral mb-4">Ready for professional tree care?</h3>
                <p className="text-neutral/80 mb-8">
                  Our experts are here to help you with advice and action. Contact us today for a non-binding quote.
                </p>
                <a 
                  href="/contact" 
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-md text-white bg-primary hover:bg-primary-dark transition-colors duration-300"
                >
                  Contact us
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