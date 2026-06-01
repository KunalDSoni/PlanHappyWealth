import type { MetadataRoute } from "next";
import { SITE } from "@/lib/constants";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: SITE.name,
    short_name: SITE.shortName,
    description: SITE.tagline,
    start_url: "/",
    display: "standalone",
    background_color: "#07111F",
    theme_color: "#07111F",
    icons: [
      { src: "/favicon.svg", sizes: "any", type: "image/svg+xml" },
    ],
  };
}
