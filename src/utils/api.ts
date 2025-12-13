import { projectId, publicAnonKey } from './supabase/info';

const BASE_URL = `https://${projectId}.supabase.co/functions/v1/make-server-94a4ef79`;

async function fetchWithAuth(endpoint: string, options: RequestInit = {}, token?: string) {
  const headers = {
    'Authorization': `Bearer ${token || publicAnonKey}`,
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
  saveBlogPosts: (posts: any[], token?: string) => fetchWithAuth('/blog-posts', {
    method: 'POST',
    body: JSON.stringify(posts),
  }, token),

  getPodcasts: () => fetchWithAuth('/podcasts'),
  savePodcasts: (podcasts: any[], token?: string) => fetchWithAuth('/podcasts', {
    method: 'POST',
    body: JSON.stringify(podcasts),
  }, token),

  getResourceLinks: () => fetchWithAuth('/resource-links'),
  saveResourceLinks: (links: any[], token?: string) => fetchWithAuth('/resource-links', {
    method: 'POST',
    body: JSON.stringify(links),
  }, token),
};