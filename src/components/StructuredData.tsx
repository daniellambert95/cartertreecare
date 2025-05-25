import Script from 'next/script';

interface ArticleData {
  title: string;
  description: string;
  image: string;
  datePublished: string;
  dateModified?: string;
  url: string;
}

interface StructuredDataProps {
  type?: 'organization' | 'localBusiness' | 'article';
  data?: ArticleData;
}

export default function StructuredData({ type = 'organization', data }: StructuredDataProps) {
  const getStructuredData = () => {
    const baseData = {
      "@context": "https://schema.org",
      "@type": type === 'organization' ? "Organization" : type === 'localBusiness' ? "LocalBusiness" : "Article",
    };

    if (type === 'organization' || type === 'localBusiness') {
      return {
        ...baseData,
        "@type": "LocalBusiness",
        "name": "DerBaumchirurg",
        "alternateName": "Der Baumchirurg",
        "description": "Professionelle Baumpflege und Baumfällung mit höchster Sorgfalt und Expertise. Weil wir Bäume lieben und leben. Zertifizierte Baumpfleger in Berlin und Brandenburg.",
        "url": "https://baumpflegeberlin-brandenburg.de",
        "logo": "https://baumpflegeberlin-brandenburg.de/og-image.png",
        "image": "https://baumpflegeberlin-brandenburg.de/og-image.png",
        "telephone": "+49-XXX-XXXXXXX", // Replace with actual phone number
        "email": "info@baumpflegeberlin-brandenburg.de", // Replace with actual email
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Berlin",
          "addressRegion": "Berlin",
          "addressCountry": "DE"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "52.5200", // Berlin coordinates - replace with actual
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
          "name": "DerBaumchirurg"
        },
        "publisher": {
          "@type": "Organization",
          "name": "DerBaumchirurg",
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

  return (
    <Script
      id={`structured-data-${type}`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(getStructuredData()),
      }}
    />
  );
} 