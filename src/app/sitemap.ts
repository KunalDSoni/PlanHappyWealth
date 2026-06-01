import type { MetadataRoute } from "next";
import { SITE } from "@/lib/constants";

// Required for static export (output: 'export').
export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    { url: SITE.url, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${SITE.url}/#health-score`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE.url}/#dashboard`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE.url}/#learn`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },
    { url: `${SITE.url}/#consultation`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
  ];
}
