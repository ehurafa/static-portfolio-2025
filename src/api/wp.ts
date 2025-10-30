export interface ImagePost {
  url: string;
}

export interface ACF {
  data_post: string;
  image_post: ImagePost;
  title_post: string;
}
export interface WPPost {
  id: number;
  acf: ACF;
  slug: string;
}

const API_BASE = 'https://www.rafaelgomes.net/postsapi/wp-json/wp/v2'
const BASE = import.meta.env.VITE_WP_BASE || "https://rafaelgomes.net/postsapi";
const POSTS_PATH = import.meta.env.VITE_WP_POSTS_PATH || "/wp-json/wp/v2/posts";
const ACF_POSTS_PATH = import.meta.env.VITE_WP_ACF_POSTS_PATH || "/wp-json/acf/v3/posts";

export async function fetchPosts() {
  const res = await fetch(`${API_BASE}/posts?_embed&acf_format=standard`)
  if (!res.ok) throw new Error(`Erro HTTP: ${res.status}`)
  return res.json()
}

// Try to resolve an image URL from multiple possible shapes
export function getPostImage(p: WPPost): string | null {
  const acfThumb = (p as any)?.acf?.image_post?.url || null;
  console.log('WPPost', p)
  if (typeof acfThumb === "string") return acfThumb;
  if (p.better_featured_image?.source_url) return p.better_featured_image.source_url;
  const emb = p?._embedded?.['wp:featuredmedia']?.[0]?.source_url;
  if (emb) return emb;
  return null;
}

export async function fetchPostBySlug(slug: string) {
  const res = await fetch(`${API_BASE}/posts?slug=${slug}&_embed&acf_format=standard`)
  if (!res.ok) throw new Error(`Erro HTTP: ${res.status}`)
  const data = await res.json()
  console.log('data by slug:', data)
  return data[0]
}

export async function fetchPostById(id: string | number) {
  const res = await fetch(`${API_BASE}/posts/${id}?_embed&acf_format=standard`)
  if (!res.ok) throw new Error(`Erro HTTP: ${res.status}`)
  const data = await res.json()
  console.log('data by id:', data)
  return data
}