import { createClient, type SanityClient } from "@sanity/client";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production";
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION ?? "2024-10-01";

export const sanityConfigured = Boolean(projectId);

/** Read-only Sanity client. Null until a project id is provided. */
export const sanityClient: SanityClient | null = projectId
  ? createClient({
      projectId,
      dataset,
      apiVersion,
      useCdn: true,
      token: process.env.SANITY_API_READ_TOKEN,
      perspective: "published",
    })
  : null;

export interface SanityArticle {
  _id: string;
  title: string;
  dek: string;
  category: string;
  readTime: string;
  slug: string;
  featured?: boolean;
}

const ARTICLES_QUERY = `*[_type == "article" && !(_id in path("drafts.**"))] | order(publishedAt desc){
  _id, title, dek, "category": category->title, readTime, "slug": slug.current, featured
}`;

/**
 * Fetch Education Hub articles. Falls back to an empty array when Sanity
 * isn't configured (the UI ships with local editorial seed data).
 */
export async function fetchArticles(): Promise<SanityArticle[]> {
  if (!sanityClient) return [];
  try {
    return await sanityClient.fetch<SanityArticle[]>(ARTICLES_QUERY);
  } catch {
    return [];
  }
}
