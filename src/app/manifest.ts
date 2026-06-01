import type { MetadataRoute } from "next";
import { SITE } from "@/lib/constants";
import { asset, basePath } from "@/lib/basePath";

// Required for static export (output: 'export').
export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: SITE.name,
    short_name: SITE.shortName,
    description: SITE.tagline,
    start_url: `${basePath}/`,
    display: "standalone",
    background_color: "#07111F",
    theme_color: "#07111F",
    icons: [
      { src: asset("/favicon.svg"), sizes: "any", type: "image/svg+xml" },
    ],
  };
}
