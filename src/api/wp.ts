
export interface WPPost {
  id: number;
  date: string;
  link?: string;
  title: { rendered: string };
  excerpt?: { rendered: string };
  better_featured_image?: { source_url: string };
  featured_media?: number;
  acf?: Record<string, any>;
  _embedded?: any;
}

const BASE = import.meta.env.VITE_WP_BASE || "https://rafaelgomes.net/postsapi";
const POSTS_PATH = import.meta.env.VITE_WP_POSTS_PATH || "/wp-json/wp/v2/posts";
const ACF_POSTS_PATH = import.meta.env.VITE_WP_ACF_POSTS_PATH || "/wp-json/acf/v3/posts";

function join(u: string, p: string){ return u.replace(/\/$/,'') + p; }

export async function fetchPosts(params: Record<string,string|number> = {}, useAcf = false): Promise<WPPost[]> {
  const search = new URLSearchParams({
    per_page: "100",
    _embed: "1",
    ...params
  });
  const path = useAcf ? ACF_POSTS_PATH : POSTS_PATH;
  const url = join(BASE, path) + "?" + search.toString();
  const res = await fetch(url, { headers: { "Accept": "application/json" } });
  if(!res.ok) throw new Error("WP error " + res.status);
  const data = await res.json();
  return data as WPPost[];
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
