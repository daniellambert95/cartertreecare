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
          "name": "Services",
          "description": "All our professional tree care services",
          "url": "https://www.cartertreecare.ie/services"
        },
        {
          "@context": "https://schema.org",
          "@type": "SiteNavigationElement", 
          "name": "About Us",
          "description": "Meet our experienced team",
          "url": "https://www.cartertreecare.ie/about-us"
        },
        {
          "@context": "https://schema.org",
          "@type": "SiteNavigationElement",
          "name": "Contact", 
          "description": "Contact us for a free consultation",
          "url": "https://www.cartertreecare.ie/contact"
        },
        {
          "@context": "https://schema.org",
          "@type": "SiteNavigationElement",
          "name": "Blog",
          "description": "Tips and news about tree care", 
          "url": "https://www.cartertreecare.ie/blog"
        }
      ];
    }

    if (type === 'organization' || type === 'localBusiness') {
      return {
        ...baseData,
        "@type": "LocalBusiness",
        "name": "Carter Tree Care",
        "alternateName": "Carter Tree Care",
        "description": "Professional tree care and tree removal with the highest level of care and expertise. Because we love and live trees. Certified arborists serving Dublin and all of Ireland.",
        "url": "https://www.cartertreecare.ie",
        "logo": {
          "@type": "ImageObject",
          "url": "https://www.cartertreecare.ie/logo.webp",
          "width": "400",
          "height": "400",
          "contentUrl": "https://www.cartertreecare.ie/logo.webp"
        },
        "image": "https://www.cartertreecare.ie/logo.png",
        "telephone": "+353 174 522 5935",
        "email": "jcartertreecare@gmail.com",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Dublin",
          "addressRegion": "Dublin",
          "addressCountry": "IE"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "53.3498", 
          "longitude": "-6.2603"
        },
        "areaServed": [
          {
            "@type": "City",
            "name": "Dublin"
          },
          {
            "@type": "Country",
            "name": "Ireland"
          }
        ],
        "serviceType": [
          "Tree care",
          "Tree removal",
          "Tree pruning",
          "Crown care",
          "Tree survey",
          "Tree felling"
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
          "name": "Tree Care Services",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Professional Tree Care",
                "description": "Expert care and maintenance of trees"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Tree Removal",
                "description": "Safe and professional tree removal"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Crown Care",
                "description": "Expert crown care and tree pruning"
              }
            }
          ]
        },
        "actionableFeedbackPolicy": {
          "target": "https://www.cartertreecare.ie/services",
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
          "name": "Carter Tree Care"
        },
        "publisher": {
          "@type": "Organization",
          "name": "Carter Tree Care",
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