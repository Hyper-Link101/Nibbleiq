import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT_DIR = path.resolve(__dirname, '../');
const CONTENT_DIR = path.join(ROOT_DIR, 'content');
const PUBLIC_DIR = path.join(ROOT_DIR, 'public');
const SITEMAP_PATH = path.join(PUBLIC_DIR, 'sitemap.xml');
const SITE_URL = 'https://nibbleiq.ai';

// Static routes from App.tsx
const STATIC_ROUTES = [
  '',
  '/resources',
  '/about',
  '/contact',
  '/book-demo',
  '/privacy',
  '/terms',
  '/cookies',
  '/security'
];

function getFrontmatter(content) {
  const match = content.match(/^---\n([\s\S]*?)\n---/);
  if (!match) return {};
  
  const frontmatter = {};
  const lines = match[1].split('\n');
  
  for (const line of lines) {
    const [key, ...values] = line.split(':');
    if (key && values.length) {
      let value = values.join(':').trim();
      // Remove quotes if present
      if (value.startsWith('"') && value.endsWith('"')) {
        value = value.slice(1, -1);
      }
      if (value.startsWith("'") && value.endsWith("'")) {
        value = value.slice(1, -1);
      }
      frontmatter[key.trim()] = value;
    }
  }
  
  return frontmatter;
}

function getMdxFiles(dir, fileList = []) {
  if (!fs.existsSync(dir)) return fileList;
  
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      getMdxFiles(filePath, fileList);
    } else if (file.endsWith('.mdx')) {
      fileList.push(filePath);
    }
  });
  
  return fileList;
}

function generateSitemap() {
  console.log('Generating sitemap...');
  
  // 1. Static URLs
  const urls = STATIC_ROUTES.map(route => {
    return {
      loc: `${SITE_URL}${route}`,
      lastmod: new Date().toISOString().split('T')[0],
      changefreq: 'weekly',
      priority: route === '' ? '1.0' : '0.8'
    };
  });
  
  // 2. MDX URLs
  const mdxFiles = getMdxFiles(CONTENT_DIR);
  
  mdxFiles.forEach(filePath => {
    const content = fs.readFileSync(filePath, 'utf-8');
    const frontmatter = getFrontmatter(content);
    
    // Determine type based on folder
    const relativePath = path.relative(CONTENT_DIR, filePath);
    const type = relativePath.split(path.sep)[0]; // blog, resources, podcast
    
    // Determine slug: frontmatter.slug > filename
    const filename = path.basename(filePath, '.mdx');
    const slug = frontmatter.slug || filename;
    
    if (type && slug) {
      // Don't include if draft/published is false
      if (frontmatter.published === 'false') return;

      let urlPath = '';
      if (type === 'blog') urlPath = `/blog/${slug}`;
      else if (type === 'resources') urlPath = `/resources/${slug}`; // Assuming resources detail page exists or maps to something
      else if (type === 'podcast') urlPath = `/podcast/${slug}`;
      
      if (urlPath) {
        urls.push({
          loc: `${SITE_URL}${urlPath}`,
          lastmod: frontmatter.date ? new Date(frontmatter.date).toISOString().split('T')[0] : new Date().toISOString().split('T')[0],
          changefreq: 'monthly',
          priority: '0.7'
        });
      }
    }
  });
  
  // Generate XML
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(url => `  <url>
    <loc>${url.loc}</loc>
    <lastmod>${url.lastmod}</lastmod>
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

  fs.writeFileSync(SITEMAP_PATH, sitemap);
  console.log(`Sitemap generated at ${SITEMAP_PATH} with ${urls.length} URLs`);
}

generateSitemap();
