import type { MetadataRoute } from "next";
import { SITE } from "@/lib/constants";

// Required for static export (output: 'export').
export const dynamic = "force-static";

const ROUTES: Array<{ path: string; priority: number; cadence: "weekly" | "monthly" }> = [
  { path: "/", priority: 1.0, cadence: "weekly" },
  { path: "/blueprint", priority: 0.95, cadence: "weekly" },
  { path: "/architect", priority: 0.9, cadence: "monthly" },
  { path: "/journeys", priority: 0.85, cadence: "monthly" },
  { path: "/intelligence", priority: 0.85, cadence: "weekly" },
  { path: "/contact", priority: 0.9, cadence: "monthly" },
  { path: "/privacy", priority: 0.3, cadence: "monthly" },
  { path: "/terms", priority: 0.3, cadence: "monthly" },
  { path: "/disclosures", priority: 0.4, cadence: "monthly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return ROUTES.map((r) => ({
    url: `${SITE.url}${r.path === "/" ? "" : r.path}`,
    lastModified: now,
    changeFrequency: r.cadence,
    priority: r.priority,
  }));
}
