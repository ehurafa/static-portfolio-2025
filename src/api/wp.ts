export interface ImageSizes {
  large: string;
  medium?: string;
  small?: string;
}
export interface ImagePost {
  url: string;
  sizes?: ImageSizes;
}

export interface TechnologyTag {
  term_id: number;
  name: string;
  slug?: string;
}
export interface ACF {
  data_post: string;
  image_post: ImagePost;
  title_post: string;
  post_content: string;
  list_of_technologies: TechnologyTag[];
}
export interface WPPost {
  id: number;
  acf: ACF;
  slug: string;
}

const API_BASE = 'https://www.rafaelgomes.net/postsapi/wp-json/wp/v2';
const _BASE = import.meta.env.VITE_WP_BASE || 'https://rafaelgomes.net/postsapi';
const _POSTS_PATH = import.meta.env.VITE_WP_POSTS_PATH || '/wp-json/wp/v2/posts';
const _ACF_POSTS_PATH = import.meta.env.VITE_WP_ACF_POSTS_PATH || '/wp-json/acf/v3/posts';

export async function fetchPosts(): Promise<WPPost[]> {
  const res = await fetch(`${API_BASE}/posts?per_page=100&_embed&acf_format=standard`);
  if (!res.ok) throw new Error(`Erro HTTP: ${res.status}`);
  return res.json() as Promise<WPPost[]>;
}

// Try to resolve an image URL from multiple possible shapes
export function getPostImage(p: WPPost): string | null {
  const acfThumb: string | undefined = p.acf?.image_post?.url;
  console.log('WPPost', p);
  if (typeof acfThumb === 'string' && acfThumb.length > 0) {
    return acfThumb;
  }
  // if (p.better_featured_image?.source_url) return p.better_featured_image.source_url
  // const emb = p?._embedded?.['wp:featuredmedia']?.[0]?.source_url
  // if (emb) return emb
  return null;
}

export async function fetchPostBySlug(slug: string): Promise<WPPost> {
  const res = await fetch(
    `${API_BASE}/posts?slug=${slug}&?per_page=100&_embed&acf_format=standard`
  );
  if (!res.ok) throw new Error(`Erro HTTP: ${res.status}`);
  const data = (await res.json()) as WPPost[];
  console.log('data by slug:', data);
  return data[0];
}

export async function fetchPostById(id: string | number): Promise<WPPost[]> {
  const res = await fetch(`${API_BASE}/posts/${id}?_embed&acf_format=standard`);
  if (!res.ok) throw new Error(`Erro HTTP: ${res.status}`);
  const data: unknown = await res.json();
  if (!Array.isArray(data)) {
    throw new Error('Formato inesperado de resposta da API');
  }
  return data as WPPost[];
}
