'use client';

import { TableOfContentsItem } from '@/lib/blog';

interface TableOfContentsProps {
  headings: TableOfContentsItem[];
}

export default function TableOfContents({ headings }: TableOfContentsProps) {
  if (!headings || headings.length === 0) {
    return null;
  }

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, headingId: string) => {
    e.preventDefault();
    const element = document.getElementById(headingId);
    if (element) {
      // Account for fixed navbar height
      const navbarHeight = 120; // Approximate height of navbar + padding
      const elementPosition = element.offsetTop - navbarHeight;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="bg-secondary rounded-xl p-6 mb-8 lg:sticky lg:top-32">
      <h3 className="text-lg font-bold text-neutral mb-4">Table of Contents</h3>
      <nav className="space-y-2">
        {headings.map((heading) => (
          <a
            key={heading.id}
            href={`#${heading.id}`}
            className={`block text-sm text-neutral/70 hover:text-primary transition-colors ${
              heading.level === 2 ? 'font-medium' : 
              heading.level === 3 ? 'ml-4' : 
              heading.level === 4 ? 'ml-8' : ''
            }`}
            onClick={(e) => handleClick(e, heading.id)}
          >
            {heading.title}
          </a>
        ))}
      </nav>
    </div>
  );
} 