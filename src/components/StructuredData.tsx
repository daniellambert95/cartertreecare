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
          "url": "https://www.cartertreecare.ie/leistungen"
        },
        {
          "@context": "https://schema.org",
          "@type": "SiteNavigationElement", 
          "name": "Über uns",
          "description": "Lernen Sie unser erfahrenes Team kennen",
          "url": "https://www.cartertreecare.ie/ueber-uns"
        },
        {
          "@context": "https://schema.org",
          "@type": "SiteNavigationElement",
          "name": "Kontakt", 
          "description": "Kontaktieren Sie uns für eine kostenlose Beratung",
          "url": "https://www.cartertreecare.ie/kontakt"
        },
        {
          "@context": "https://schema.org",
          "@type": "SiteNavigationElement",
          "name": "Blog",
          "description": "Tipps und Neuigkeiten rund um Baumpflege", 
          "url": "https://www.cartertreecare.ie/blog"
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
        "url": "https://www.cartertreecare.ie",
        "logo": {
          "@type": "ImageObject",
          "url": "https://www.cartertreecare.ie/logo.webp",
          "width": "400",
          "height": "400",
          "contentUrl": "https://www.cartertreecare.ie/logo.webp"
        },
        "image": "https://www.cartertreecare.ie/logo.png",
        "telephone": "+49174 5225935",
        "email": "jcartertreecare@gmail.com",
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
          "https://www.facebook.com/blackslopes", // Add actual social media URLs
          "https://www.instagram.com/blackslopes",
          "https://www.linkedin.com/company/blackslopes"
        ],
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": "https://www.cartertreecare.ie"
        },
        "potentialAction": {
          "@type": "ContactAction",
          "@id": "https://www.cartertreecare.ie"
        },
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
        },
        "actionableFeedbackPolicy": {
          "target": "https://www.cartertreecare.ie/leistungen",
          "image": {
            "@type": "ImageObject",
            "url": "https://www.cartertreecare.ie/og-image.png"
          }
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
            "url": "https://www.cartertreecare.ie/og-image.png"
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