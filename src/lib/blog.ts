import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import remarkGfm from 'remark-gfm';

const postsDirectory = path.join(process.cwd(), 'content/blog');

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  category: string;
  image: string;
  readTime: string;
  keywords?: string;
  featured?: boolean;
  content: string;
  headings: TableOfContentsItem[];
}

export interface BlogPostMeta {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  category: string;
  image: string;
  readTime: string;
  keywords?: string;
  featured?: boolean;
}

export interface TableOfContentsItem {
  id: string;
  title: string;
  level: number;
}

// Function to extract headings from markdown content
function extractHeadings(markdownContent: string): TableOfContentsItem[] {
  const headings: TableOfContentsItem[] = [];
  const lines = markdownContent.split('\n');
  
  for (const line of lines) {
    const match = line.match(/^(#{1,4})\s+(.+)$/);
    if (match) {
      const level = match[1].length;
      const title = match[2].trim();
      // Generate a simple slug from the title
      const id = title
        .toLowerCase()
        .replace(/[^a-z0-9\s-äöüß]/g, '')
        .replace(/ä/g, 'ae')
        .replace(/ö/g, 'oe')
        .replace(/ü/g, 'ue')
        .replace(/ß/g, 'ss')
        .replace(/\s+/g, '-')
        .replace(/-+/g, '-')
        .replace(/^-+|-+$/g, '');
      
      headings.push({
        id,
        title,
        level
      });
    }
  }
  
  return headings;
}

// Function to add IDs to headings in HTML
function addHeadingIds(html: string, headings: TableOfContentsItem[]): string {
  let result = html;
  
  headings.forEach(heading => {
    // Create regex to find the heading without an ID
    const headingRegex = new RegExp(`<h${heading.level}>([^<]*${heading.title.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}[^<]*)</h${heading.level}>`, 'i');
    const replacement = `<h${heading.level} id="${heading.id}">$1</h${heading.level}>`;
    result = result.replace(headingRegex, replacement);
  });
  
  return result;
}

export function getAllPosts(): BlogPostMeta[] {
  // Check if posts directory exists
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames
    .filter((fileName) => fileName.endsWith('.md'))
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, '');
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const matterResult = matter(fileContents);

      return {
        slug,
        ...matterResult.data,
      } as BlogPostMeta;
    });

  return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.md`);
    
    if (!fs.existsSync(fullPath)) {
      return null;
    }

    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const matterResult = matter(fileContents);

    // Extract headings before processing content
    const headings = extractHeadings(matterResult.content);

    // Process markdown content
    const processedContent = await remark()
      .use(html)
      .use(remarkGfm)
      .process(matterResult.content);
    
    let contentHtml = processedContent.toString();
    
    // Add IDs to headings
    contentHtml = addHeadingIds(contentHtml, headings);

    return {
      slug,
      content: contentHtml,
      headings,
      ...matterResult.data,
    } as BlogPost;
  } catch (error) {
    console.error(`Error loading post ${slug}:`, error);
    return null;
  }
}

export function getPostsByCategory(category: string): BlogPostMeta[] {
  const allPosts = getAllPosts();
  return allPosts.filter(post => 
    post.category.toLowerCase() === category.toLowerCase()
  );
}

export function getFeaturedPosts(): BlogPostMeta[] {
  const allPosts = getAllPosts();
  return allPosts.filter(post => post.featured === true);
}

export function getRelatedPosts(currentSlug: string, category: string, limit = 2): BlogPostMeta[] {
  const allPosts = getAllPosts();
  return allPosts
    .filter(post => post.slug !== currentSlug && post.category === category)
    .slice(0, limit);
} 