import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "DerBaumchirurg | Professionelle Baumpflege",
  description: "Professionelle Baumpflege und Fällarbeiten mit höchster Sorgfalt und Expertise. Weil wir Bäume lieben und leben.",
  icons: {
    icon: "/logo.svg",
  },
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
      </body>
    </html>
  );
}
