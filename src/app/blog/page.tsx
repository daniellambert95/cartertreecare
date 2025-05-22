import React from 'react';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import Image from 'next/image';

// Import components
const Navbar = dynamic(() => import('@/components/Navbar'), { ssr: true });
const Footer = dynamic(() => import('@/components/Footer'), { ssr: true });

export const metadata = {
  title: 'Blog | Baumpflege Berlin-Brandenburg',
  description: 'Fachbeiträge und Expertentipps zu Baumpflege, Baumfällung und Gartenpflege in Berlin und Brandenburg. Erfahren Sie mehr über professionelle Baumpflege.',
  keywords: 'baumpflege blog, baumfällung tipps, gartenpflege berlin, baumschnitt brandenburg, baumpflege ratgeber',
  alternates: {
    canonical: 'https://baumpflegeberlin-brandenburg.de/blog',
  },
};

// List of blog posts - in a real app this would come from a CMS or database
const blogPosts = [
  {
    id: 'baumschnitt-winter',
    title: 'Baumschnitt im Winter: Die ideale Zeit für gesunde Bäume',
    excerpt: 'Erfahren Sie, warum der Winter die optimale Zeit ist, um Ihre Bäume zu schneiden und wie dies das Wachstum im Frühjahr fördert.',
    date: '2023-12-15',
    author: 'Der Baumchirurg Team',
    category: 'Baumpflege',
    image: '/images/blog/winter-tree-pruning.webp',
    readTime: '5 min'
  },
  {
    id: 'sturmsichere-baeume',
    title: 'So machen Sie Ihre Bäume sturmsicher',
    excerpt: 'Praktische Tipps zur Vorbereitung Ihrer Bäume auf Herbst- und Winterstürme in Berlin und Brandenburg.',
    date: '2023-11-02',
    author: 'Der Baumchirurg Team',
    category: 'Sicherheit',
    image: '/images/blog/storm-safety.webp',
    readTime: '4 min'
  },
  {
    id: 'baumkrankheiten-erkennen',
    title: 'Baumkrankheiten frühzeitig erkennen und behandeln',
    excerpt: 'Leitfaden zur Identifikation häufiger Baumkrankheiten in der Region Berlin-Brandenburg und wie Sie schnell reagieren können.',
    date: '2023-10-18',
    author: 'Der Baumchirurg Team',
    category: 'Baumgesundheit',
    image: '/images/blog/tree-diseases.webp',
    readTime: '7 min'
  },
];

export default function BlogPage() {
  return (
    <main className="min-h-screen flex flex-col bg-secondary">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-secondary-dark pt-32 pb-16 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full">
            <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
              <pattern id="tree-pattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M20,0 L20,40 M0,20 L40,20" stroke="currentColor" strokeWidth="0.5" />
                <circle cx="20" cy="20" r="2" fill="currentColor" />
              </pattern>
              <rect x="0" y="0" width="100%" height="100%" fill="url(#tree-pattern)" />
            </svg>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Breadcrumb */}
          <nav className="flex mb-6" aria-label="Breadcrumb">
            <ol className="flex items-center space-x-2">
              <li>
                <Link 
                  href="/" 
                  className="text-neutral/60 hover:text-primary transition-colors text-sm flex items-center"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                  Home
                </Link>
              </li>
              <li className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-neutral/40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
                <span className="ml-2 text-neutral text-sm font-medium">Blog</span>
              </li>
            </ol>
          </nav>
          
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-neutral mb-6">
              Unser <span className="text-primary">Baumpflege</span> Blog
            </h1>
            <p className="text-lg text-neutral/80 max-w-2xl mx-auto">
              Aktuelle Tipps, Fachwissen und Inspiration rund um Baumpflege, Baumfällung
              und Gartengestaltung in Berlin und Brandenburg.
            </p>
          </div>
        </div>
      </section>
      
      {/* Featured categories */}
      <section className="py-8 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {['Alle Beiträge', 'Baumpflege', 'Baumfällung', 'Sicherheit', 'Baumgesundheit', 'Gartengestaltung'].map((category, index) => (
              <a
                key={index}
                href={index === 0 ? '/blog' : `/blog/kategorie/${category.toLowerCase().replace('ä', 'ae')}`}
                className={`px-4 py-2 rounded-full text-sm font-medium ${
                  index === 0 
                    ? 'bg-primary text-white' 
                    : 'bg-white text-neutral hover:bg-primary hover:text-white'
                } transition-colors duration-300 shadow-sm`}
              >
                {category}
              </a>
            ))}
          </div>
        </div>
      </section>
      
      {/* Blog posts grid */}
      <section className="py-12 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article key={post.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <Link href={`/blog/article/${post.id}`} className="block">
                  <div className="relative h-48 overflow-hidden">
                    <div className="absolute inset-0 bg-neutral/20"></div>
                    <div className="bg-secondary-dark h-full w-full flex items-center justify-center">
                      {/* In a real app, you would have actual images */}
                      <svg className="h-16 w-16 text-primary/30" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="absolute top-4 left-4">
                      <span className="bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">
                        {post.category}
                      </span>
                    </div>
                  </div>
                </Link>
                <div className="p-6">
                  <div className="flex items-center text-sm text-neutral/60 mb-2">
                    <span>{post.date}</span>
                    <span className="mx-2">•</span>
                    <span>{post.readTime} Lesezeit</span>
                  </div>
                  <Link href={`/blog/article/${post.id}`} className="block">
                    <h2 className="text-xl font-bold text-neutral mb-3 hover:text-primary transition-colors">
                      {post.title}
                    </h2>
                  </Link>
                  <p className="text-neutral/70 mb-4">
                    {post.excerpt}
                  </p>
                  <Link 
                    href={`/blog/article/${post.id}`}
                    className="inline-flex items-center text-primary font-medium hover:text-primary-dark transition-colors"
                  >
                    Weiterlesen
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                </div>
              </article>
            ))}
          </div>
          
          {/* Pagination */}
          <div className="mt-12 flex justify-center">
            <nav className="inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
              <a
                href="#"
                className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-neutral hover:bg-secondary"
              >
                <span className="sr-only">Previous</span>
                <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </a>
              <a
                href="#"
                className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-primary text-sm font-medium text-white"
                aria-current="page"
              >
                1
              </a>
              <a
                href="#"
                className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-neutral hover:bg-secondary"
              >
                2
              </a>
              <a
                href="#"
                className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-neutral hover:bg-secondary"
              >
                3
              </a>
              <a
                href="#"
                className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-neutral hover:bg-secondary"
              >
                <span className="sr-only">Next</span>
                <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              </a>
            </nav>
          </div>
        </div>
      </section>
      
      {/* Newsletter Section */}
      <section className="bg-primary/5 py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-neutral mb-4">Bleiben Sie informiert!</h2>
              <p className="text-lg text-neutral/70">
                Melden Sie sich für unseren Newsletter an und erhalten Sie regelmäßig Expertentipps 
                zur Baumpflege und exklusive Angebote.
              </p>
            </div>
            <form className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Ihre E-Mail-Adresse"
                  required
                  className="px-4 py-3 rounded-md bg-secondary border border-neutral/10 text-neutral flex-grow focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-primary text-white font-medium rounded-md hover:bg-primary-dark transition-colors whitespace-nowrap"
                >
                  Abonnieren
                </button>
              </div>
              <p className="mt-3 text-xs text-center text-neutral/60">
                Wir respektieren Ihre Privatsphäre. Abmeldung jederzeit möglich.
              </p>
            </form>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
} 