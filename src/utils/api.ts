import { projectId, publicAnonKey } from './supabase/info';

const BASE_URL = `https://${projectId}.supabase.co/functions/v1/make-server-94a4ef79`;

async function fetchWithAuth(endpoint: string, options: RequestInit = {}) {
  const headers = {
    'Authorization': `Bearer ${publicAnonKey}`,
    'Content-Type': 'application/json',
    ...options.headers,
  };

  const response = await fetch(`${BASE_URL}${endpoint}`, {
    ...options,
    headers,
  });

  if (!response.ok) {
    throw new Error(`API call failed: ${response.statusText}`);
  }

  return response.json();
}

export const api = {
  getBlogPosts: () => fetchWithAuth('/blog-posts'),
  saveBlogPosts: (posts: any[]) => fetchWithAuth('/blog-posts', {
    method: 'POST',
    body: JSON.stringify(posts),
  }),

  getPodcasts: () => fetchWithAuth('/podcasts'),
  savePodcasts: (podcasts: any[]) => fetchWithAuth('/podcasts', {
    method: 'POST',
    body: JSON.stringify(podcasts),
  }),

  getResourceLinks: () => fetchWithAuth('/resource-links'),
  saveResourceLinks: (links: any[]) => fetchWithAuth('/resource-links', {
    method: 'POST',
    body: JSON.stringify(links),
  }),
};