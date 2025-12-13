export interface ContentMeta {
  slug: string;
  frontmatter: Record<string, any>;
  component: any;
}

export function getAllContent(type: 'blog' | 'resources' | 'podcast'): ContentMeta[] {
  const modules = import.meta.glob('/content/**/*.mdx', { eager: true });
  const content: ContentMeta[] = [];

  for (const path in modules) {
    // Filter by type (folder name)
    if (!path.includes(`/${type}/`)) continue;

    const mod = modules[path] as any;
    const filename = path.split('/').pop() || '';
    const slug = filename.replace('.mdx', '');
    
    content.push({
      slug,
      frontmatter: mod.frontmatter || {},
      component: mod.default,
    });
  }

  // Sort by date if available
  return content.sort((a, b) => {
    const dateA = new Date(a.frontmatter.date || 0).getTime();
    const dateB = new Date(b.frontmatter.date || 0).getTime();
    return dateB - dateA;
  });
}
