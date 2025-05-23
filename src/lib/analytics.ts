// Google Analytics configuration that respects cookie consent

// Replace with your actual Google Analytics ID when you set it up
export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID || '';

// Initialize Google Analytics
export const initGA = () => {
  if (typeof window !== 'undefined' && GA_TRACKING_ID) {
    // Load Google Analytics script
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`;
    document.head.appendChild(script);

    // Initialize gtag
    window.gtag = window.gtag || function (...args: unknown[]) {
      (window.gtag.q = window.gtag.q || []).push(args);
    };

    window.gtag('js', new Date());

    // Initialize with denied consent (GDPR compliant)
    window.gtag('consent', 'default', {
      analytics_storage: 'denied',
      ad_storage: 'denied',
      wait_for_update: 500,
    });

    window.gtag('config', GA_TRACKING_ID, {
      page_title: document.title,
      page_location: window.location.href,
    });
  }
};

// Grant analytics consent
export const grantAnalyticsConsent = () => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('consent', 'update', {
      analytics_storage: 'granted',
    });
  }
};

// Deny analytics consent
export const denyAnalyticsConsent = () => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('consent', 'update', {
      analytics_storage: 'denied',
    });
  }
};

// Track page views
export const trackPageView = (url: string) => {
  if (typeof window !== 'undefined' && window.gtag && GA_TRACKING_ID) {
    window.gtag('config', GA_TRACKING_ID, {
      page_path: url,
    });
  }
};

// Track events
export const trackEvent = (action: string, category: string, label?: string, value?: number) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

// Track contact form submissions
export const trackContactForm = () => {
  trackEvent('submit', 'contact_form', 'header');
};

// Track blog article views
export const trackBlogView = (articleTitle: string) => {
  trackEvent('view', 'blog_article', articleTitle);
};

// Track service page views
export const trackServiceView = (serviceName: string) => {
  trackEvent('view', 'service_page', serviceName);
};

// Global gtag interface for TypeScript
declare global {
  interface Window {
    gtag: {
      (...args: unknown[]): void;
      q?: unknown[][];
    };
  }
} 