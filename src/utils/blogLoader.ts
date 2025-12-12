import { BlogPost } from '../data/blogPosts';

// Helper to parse frontmatter from markdown string
function parseFrontmatter(text: string): { attributes: any, body: string } {
  const match = text.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  
  if (!match) {
    return { attributes: {}, body: text };
  }

  const frontmatterBlock = match[1];
  const body = match[2];
  const attributes: any = {};

  frontmatterBlock.split('\n').forEach(line => {
    const parts = line.split(':');
    if (parts.length >= 2) {
      const key = parts[0].trim();
      // Join back the rest in case the value has colons (like URLs)
      let value = parts.slice(1).join(':').trim();
      
      // Remove quotes if present
      if (value.startsWith('"') && value.endsWith('"')) {
        value = value.slice(1, -1);
      }
      
      // Handle array-like strings (simple comma separation)
      if (value.startsWith('[') && value.endsWith(']')) {
        value = value.slice(1, -1).split(',').map(v => v.trim().replace(/^"|"$/g, ''));
      }

      attributes[key] = value;
    }
  });

  return { attributes, body };
}

// Load all markdown files from /content/blog
export async function getAllBlogPosts(): Promise<BlogPost[]> {
  // Vite glob import for raw content
  const modules = import.meta.glob('/content/blog/*.md', { as: 'raw', eager: true });
  
  const posts: BlogPost[] = [];

  for (const path in modules) {
    const markdown = modules[path] as string;
    const { attributes, body } = parseFrontmatter(markdown);
    
    // Validate required fields
    if (attributes.title && attributes.slug) {
      posts.push({
        id: attributes.slug, // Use slug as ID for consistency in this system
        title: attributes.title,
        slug: attributes.slug,
        excerpt: attributes.description || '',
        content: body, // Full markdown content
        author: attributes.author || 'NibbleIQ Team',
        date: attributes.date || new Date().toISOString().split('T')[0],
        readTime: attributes.readTime || '5 min read',
        category: attributes.category || 'General',
        image: attributes.image || '', // Fallback handled in component
        featuredImage: attributes.coverImage || attributes.image,
        published: attributes.published === 'true' || attributes.published === true,
        metaTitle: attributes.title,
        metaDescription: attributes.description,
        keywords: Array.isArray(attributes.tags) ? attributes.tags.join(', ') : attributes.tags
      } as any); // Cast to any to match existing BlogPost interface flexibly
    }
  }

  // Sort by date descending
  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export async function getBlogPostBySlug(slug: string): Promise<BlogPost | null> {
  const posts = await getAllBlogPosts();
  return posts.find(p => p.slug === slug) || null;
}
