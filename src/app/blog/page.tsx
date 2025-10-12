import React from 'react';
import dynamic from 'next/dynamic';
import { getAllPosts } from '@/lib/blog';
import BlogContent from '@/components/BlogContent';

// Import components
const Navbar = dynamic(() => import('@/components/Navbar'), { ssr: true });
const Footer = dynamic(() => import('@/components/Footer'), { ssr: true });

export const metadata = {
  title: 'Blog | Tree Care Berlin-Brandenburg',
  description: 'Professional articles and expert tips on tree care, tree removal and garden care in Berlin and Brandenburg. Learn more about professional tree care.',
  keywords: 'tree care blog, tree removal tips, garden care berlin, tree pruning brandenburg, tree care guide',
  alternates: {
    canonical: 'https://www.cartertreecare.ie/blog',
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