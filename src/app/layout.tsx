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
  title: "Der Baumchirurg | Baumpflege Berlin, Brandenburg",
  description: "Professionelle Baumpflege und Baumfällung mit höchster Sorgfalt und Expertise. Zertifizierte Baumpfleger in Berlin und Brandenburg.",
  keywords: "Baumpflege, Baumfällung, Baumschnitt, Berlin, Brandenburg, Baumpfleger, Fällarbeiten, Baumklettern, Kronenpflege, Baumgutachten",
  authors: [{ name: "Der Baumchirurg Team" }],
  creator: "Der Baumchirurg",
  publisher: "Der Baumchirurg",
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
    title: "Der Baumchirurg | Professionelle Baumpflege Berlin-Brandenburg",
    description: "Professionelle Baumpflege und Baumfällung mit höchster Sorgfalt und Expertise. Weil wir Bäume lieben und leben. Zertifizierte Baumpfleger in Berlin und Brandenburg.",
    url: 'https://www.cartertreecare.ie',
    siteName: 'Der Baumchirurg',
    images: [
      {
        url: '/social-image.webp',
        width: 1200,
        height: 630,
        alt: 'Der Baumchirurg - Professionelle Baumpflege Berlin-Brandenburg',
      }
    ],
    locale: 'de_DE',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Der Baumchirurg | Professionelle Baumpflege Berlin-Brandenburg",
    description: "Professionelle Baumpflege und Baumfällung mit höchster Sorgfalt und Expertise. Weil wir Bäume lieben und leben.",
    images: ['/social-image.webp'],
    creator: '@der baumchirurg',
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
    <html lang="de" className={`${inter.variable} scroll-smooth`}>
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
