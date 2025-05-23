import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import dynamic from "next/dynamic";
import "./globals.css";

// Import cookie components wrapper (client component)
const CookieComponents = dynamic(() => import('@/components/CookieComponents'));

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "DerBaumchirurg | Professionelle Baumpflege",
  description: "Professionelle Baumpflege und Fällarbeiten mit höchster Sorgfalt und Expertise. Weil wir Bäume lieben und leben.",
  icons: {
    icon: "/favicon.ico",
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
      <body className="font-sans antialiased">
        {children}
        
        {/* Cookie Consent Management */}
        <CookieComponents />
      </body>
    </html>
  );
}
