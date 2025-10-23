import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import dynamic from "next/dynamic";
import Script from "next/script";
import "./globals.css";

// Import cookie components wrapper (client component)
const CookieComponents = dynamic(() => import('@/components/CookieComponents'));
const StructuredData = dynamic(() => import('@/components/StructuredData'));

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Carter Tree Care | Professional Tree Services Dublin, Ireland",
  description: "Professional tree care and tree removal services with the highest level of care and expertise. Certified arborists serving Dublin and all of Ireland.",
  keywords: "tree care, tree removal, tree pruning, Dublin, Ireland, arborist, tree removal, tree climbing, crown care, tree survey",
  authors: [{ name: "Carter Tree Care Team" }],
  creator: "Carter Tree Care",
  publisher: "Carter Tree Care",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://www.cartertreecare.ie'),
  alternates: {
    canonical: 'https://www.cartertreecare.ie',
  },
  openGraph: {
    title: "Carter Tree Care | Professional Tree Services Dublin, Ireland",
    description: "Professional tree care and tree removal services with the highest level of care and expertise. Because we love and live trees. Certified arborists serving Dublin and all of Ireland.",
    url: 'https://www.cartertreecare.ie',
    siteName: 'Carter Tree Care',
    images: [
      {
        url: '/social-image.webp',
        width: 1200,
        height: 630,
        alt: 'Carter Tree Care - Professional Tree Services Dublin, Ireland',
      }
    ],
    locale: 'en_IE',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Carter Tree Care | Professional Tree Services Dublin, Ireland",
    description: "Professional tree care and tree removal services with the highest level of care and expertise. Because we love and live trees.",
    images: ['/social-image.webp'],
    creator: '@cartertreecare',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: [
      {
        url: "/icon-192-2.png",
        sizes: "192x192",
        type: "image/png",
      },
    ],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/favicon.ico" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#22c55e" />
      </head>
      <body className="font-sans antialiased">
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-FPQEXY5YE0"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-FPQEXY5YE0');
          `}
        </Script>

        {children}
        
        {/* Structured Data for SEO */}
        <StructuredData type="localBusiness" />
        <StructuredData type="navigation" />
        
        {/* Cookie Consent Management */}
        <CookieComponents />
      </body>
    </html>
  );
}
