const BASE_URL = '/.netlify/functions';

async function fetchJson(endpoint: string, options: RequestInit = {}, token?: string) {
  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
    ...(options.headers as Record<string, string> | undefined),
  };

  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  const response = await fetch(`${BASE_URL}${endpoint}`, {
    ...options,
    headers,
  });

  if (!response.ok) {
    const text = await response.text().catch(() => '');
    throw new Error(text || response.statusText);
  }

  return response.json().catch(() => ({}));
}

export const api = {
  verifyAdmin: (token: string) => fetchJson('/admin-auth', { method: 'GET' }, token),

  getBlogPosts: () => fetchJson('/blog-posts'),
  saveBlogPosts: (posts: any[], token: string) =>
    fetchJson(
      '/blog-posts',
      {
        method: 'POST',
        body: JSON.stringify(posts),
      },
      token,
    ),

  getPodcasts: () => fetchJson('/podcasts'),
  savePodcasts: (podcasts: any[], token: string) =>
    fetchJson(
      '/podcasts',
      {
        method: 'POST',
        body: JSON.stringify(podcasts),
      },
      token,
    ),

  getResourceLinks: () => fetchJson('/resource-links'),
  saveResourceLinks: (links: any[], token: string) =>
    fetchJson(
      '/resource-links',
      {
        method: 'POST',
        body: JSON.stringify(links),
      },
      token,
    ),

  getArticles: () => fetchJson('/articles'),
  saveArticles: (articles: any[], token: string) =>
    fetchJson(
      '/articles',
      {
        method: 'POST',
        body: JSON.stringify(articles),
      },
      token,
    ),
};
