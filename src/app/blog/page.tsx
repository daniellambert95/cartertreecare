import React from 'react';
import dynamic from 'next/dynamic';
import { getAllPosts } from '@/lib/blog';
import BlogContent from '@/components/BlogContent';

// Import components
const Navbar = dynamic(() => import('@/components/Navbar'), { ssr: true });
const Footer = dynamic(() => import('@/components/Footer'), { ssr: true });

export const metadata = {
  title: 'Blog | Baumpflege Berlin-Brandenburg',
  description: 'Fachbeiträge und Expertentipps zu Baumpflege, Baumfällung und Gartenpflege in Berlin und Brandenburg. Erfahren Sie mehr über professionelle Baumpflege.',
  keywords: 'baumpflege blog, baumfällung tipps, gartenpflege berlin, baumschnitt brandenburg, baumpflege ratgeber',
  alternates: {
    canonical: 'https://www.baumpflegeberlin-brandenburg.de/blog',
  },
};

export default function BlogPage() {
  const allPosts = getAllPosts();
  const postsPerPage = 3;

  return (
    <main className="min-h-screen flex flex-col bg-secondary">
      <Navbar />
      <BlogContent posts={allPosts} postsPerPage={postsPerPage} />
      <Footer />
    </main>
  );
} 