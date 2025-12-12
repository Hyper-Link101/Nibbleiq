import fm from 'front-matter';

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  description: string;
  content: string;
  author: string;
  category: string;
  image: string;
  readTime: string;
  published: boolean;
  tags?: string[];
}

// Helper to load all blog posts from the local file system using Vite's import.meta.glob
export async function getAllPosts(): Promise<BlogPost[]> {
  const modules = import.meta.glob('/content/blog/*.md', { as: 'raw', eager: true });
  
  const posts: BlogPost[] = Object.keys(modules).map((path) => {
    const content = modules[path] as string;
    const { attributes, body } = fm(content);
    
    // Default slug from filename if not provided in frontmatter
    const filenameSlug = path.split('/').pop()?.replace('.md', '') || '';
    const slug = (attributes as any).slug || filenameSlug;

    return {
      slug,
      content: body, // The raw markdown body
      title: (attributes as any).title || 'Untitled',
      date: (attributes as any).date || new Date().toISOString(),
      description: (attributes as any).description || '',
      author: (attributes as any).author || 'NibbleIQ Team',
      category: (attributes as any).category || 'General',
      image: (attributes as any).image || '',
      readTime: (attributes as any).readTime || '5 min read',
      published: (attributes as any).published ?? true,
      tags: (attributes as any).tags || [],
    };
  });

  // Sort by date descending
  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export async function getPostBySlug(slug: string): Promise<BlogPost | undefined> {
  const posts = await getAllPosts();
  return posts.find((post) => post.slug === slug);
}
