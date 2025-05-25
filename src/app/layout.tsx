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
  title: "DerBaumchirurg | Professionelle Baumpflege Berlin, Brandenburg, Potsdam",
  description: "Professionelle Baumpflege und Fällarbeiten mit höchster Sorgfalt und Expertise. Weil wir Bäume lieben und leben. Zertifizierte Baumpfleger in Berlin und Brandenburg.",
  keywords: "Baumpflege, Baumfällung, Baumschnitt, Berlin, Brandenburg, Baumpfleger, Fällarbeiten, Baumklettern, Kronenpflege, Baumgutachten",
  authors: [{ name: "DerBaumchirurg Team" }],
  creator: "DerBaumchirurg",
  publisher: "DerBaumchirurg",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://baumpflegeberlin-brandenburg.de'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "DerBaumchirurg | Professionelle Baumpflege Berlin-Brandenburg",
    description: "Professionelle Baumpflege und Fällarbeiten mit höchster Sorgfalt und Expertise. Weil wir Bäume lieben und leben. Zertifizierte Baumpfleger in Berlin und Brandenburg.",
    url: 'https://baumpflegeberlin-brandenburg.de',
    siteName: 'DerBaumchirurg',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'DerBaumchirurg - Professionelle Baumpflege Berlin-Brandenburg',
      }
    ],
    locale: 'de_DE',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "DerBaumchirurg | Professionelle Baumpflege Berlin-Brandenburg",
    description: "Professionelle Baumpflege und Fällarbeiten mit höchster Sorgfalt und Expertise. Weil wir Bäume lieben und leben.",
    images: ['/twitter-image.png'],
    creator: '@derbaumchirurg',
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
    icon: [
      {
        url: "/favicon.ico",
        sizes: "any",
      },
      {
        url: "/icon-192-2.png",
        sizes: "192x192",
        type: "image/png",
      },
    ],
    shortcut: "/favicon.ico",
    apple: "/icon-192-2.png",
  },
  verification: {
    google: 'your-google-verification-code', // Replace with actual Google Search Console verification code
    // yandex: 'your-yandex-verification-code', // Add if needed
    // bing: 'your-bing-verification-code', // Add if needed
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
    <html lang="de" className={`${inter.variable} scroll-smooth`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/favicon.ico" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#ffffff" />
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
        
        {/* Cookie Consent Management */}
        <CookieComponents />
      </body>
    </html>
  );
}
