import Script from 'next/script';

interface ArticleData {
  title: string;
  description: string;
  image: string;
  datePublished: string;
  dateModified?: string;
  url: string;
}

interface BreadcrumbItem {
  name: string;
  url: string;
}

interface StructuredDataProps {
  type?: 'organization' | 'localBusiness' | 'article' | 'navigation' | 'breadcrumb';
  data?: ArticleData;
  breadcrumbs?: BreadcrumbItem[];
}

export default function StructuredData({ type = 'organization', data, breadcrumbs }: StructuredDataProps) {
  const getStructuredData = () => {
    const baseData = {
      "@context": "https://schema.org",
      "@type": type === 'organization' ? "Organization" : type === 'localBusiness' ? "LocalBusiness" : type === 'navigation' ? "SiteNavigationElement" : type === 'breadcrumb' ? "BreadcrumbList" : "Article",
    };

    // Breadcrumb structured data
    if (type === 'breadcrumb' && breadcrumbs) {
      return {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": breadcrumbs.map((item, index) => ({
          "@type": "ListItem",
          "position": index + 1,
          "name": item.name,
          "item": item.url
        }))
      };
    }

    // Navigation structured data for sitelinks
    if (type === 'navigation') {
      return [
        {
          "@context": "https://schema.org",
          "@type": "SiteNavigationElement",
          "name": "Leistungen",
          "description": "Alle unsere professionellen Baumpflege-Dienstleistungen",
          "url": "https://baumpflegeberlin-brandenburg.de/leistungen"
        },
        {
          "@context": "https://schema.org",
          "@type": "SiteNavigationElement", 
          "name": "Über uns",
          "description": "Lernen Sie unser erfahrenes Team kennen",
          "url": "https://baumpflegeberlin-brandenburg.de/ueber-uns"
        },
        {
          "@context": "https://schema.org",
          "@type": "SiteNavigationElement",
          "name": "Kontakt", 
          "description": "Kontaktieren Sie uns für eine kostenlose Beratung",
          "url": "https://baumpflegeberlin-brandenburg.de/kontakt"
        },
        {
          "@context": "https://schema.org",
          "@type": "SiteNavigationElement",
          "name": "Blog",
          "description": "Tipps und Neuigkeiten rund um Baumpflege", 
          "url": "https://baumpflegeberlin-brandenburg.de/blog"
        }
      ];
    }

    if (type === 'organization' || type === 'localBusiness') {
      return {
        ...baseData,
        "@type": "LocalBusiness",
        "name": "Der Baumchirurg",
        "alternateName": "Der Baumchirurg",
        "description": "Professionelle Baumpflege und Baumfällung mit höchster Sorgfalt und Expertise. Weil wir Bäume lieben und leben. Zertifizierte Baumpfleger in Berlin und Brandenburg.",
        "url": "https://baumpflegeberlin-brandenburg.de",
        "logo": {
          "@type": "ImageObject",
          "url": "https://baumpflegeberlin-brandenburg.de/logo.webp",
          "width": "400",
          "height": "400",
          "contentUrl": "https://baumpflegeberlin-brandenburg.de/logo.webp"
        },
        "image": "https://baumpflegeberlin-brandenburg.de/logo.png",
        "telephone": "+49174 5225935",
        "email": "derbaumchirurg@gmail.com",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Berlin",
          "addressRegion": "Berlin",
          "addressCountry": "DE"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "52.5200", 
          "longitude": "13.4050"
        },
        "areaServed": [
          {
            "@type": "City",
            "name": "Berlin"
          },
          {
            "@type": "State",
            "name": "Brandenburg"
          }
        ],
        "serviceType": [
          "Baumpflege",
          "Baumfällung",
          "Baumschnitt",
          "Kronenpflege",
          "Baumgutachten",
          "Fällarbeiten"
        ],
        "priceRange": "€€",
        "openingHours": [
          "Mo-Fr 08:00-18:00",
          "Sa 09:00-16:00"
        ],
        "sameAs": [
          "https://www.facebook.com/derbaumchirurg", // Add actual social media URLs
          "https://www.instagram.com/derbaumchirurg",
          "https://www.linkedin.com/company/derbaumchirurg"
        ],
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": "https://baumpflegeberlin-brandenburg.de"
        },
        "potentialAction": [
          {
            "@type": "ContactAction",
            "target": "https://baumpflegeberlin-brandenburg.de/kontakt"
          },
          {
            "@type": "ViewAction", 
            "target": "https://baumpflegeberlin-brandenburg.de/leistungen",
            "name": "View Services"
          }
        ],
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Baumpflege Services",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Professionelle Baumpflege",
                "description": "Fachgerechte Pflege und Erhaltung von Bäumen"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Baumfällung",
                "description": "Sichere und professionelle Baumfällung"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Kronenpflege",
                "description": "Fachgerechte Kronenpflege und Baumschnitt"
              }
            }
          ]
        }
      };
    }

    if (type === 'article' && data) {
      return {
        ...baseData,
        "@type": "Article",
        "headline": data.title,
        "description": data.description,
        "image": data.image,
        "author": {
          "@type": "Organization",
          "name": "Der Baumchirurg"
        },
        "publisher": {
          "@type": "Organization",
          "name": "Der Baumchirurg",
          "logo": {
            "@type": "ImageObject",
            "url": "https://baumpflegeberlin-brandenburg.de/og-image.png"
          }
        },
        "datePublished": data.datePublished,
        "dateModified": data.dateModified || data.datePublished,
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": data.url
        }
      };
    }

    return baseData;
  };

  const structuredData = getStructuredData();

  return (
    <Script
      id={`structured-data-${type}`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData),
      }}
    />
  );
} 