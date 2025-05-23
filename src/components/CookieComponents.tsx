'use client';

import dynamic from 'next/dynamic';

// Dynamically import cookie components for better performance
const CookieBanner = dynamic(() => import('./CookieBanner'), { ssr: false });
const CookieWidget = dynamic(() => import('./CookieWidget'), { ssr: false });

export default function CookieComponents() {
  return (
    <>
      <CookieBanner />
      <CookieWidget />
    </>
  );
} 