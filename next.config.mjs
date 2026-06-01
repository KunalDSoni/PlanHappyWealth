// Set GITHUB_PAGES=true to produce a static export for GitHub Pages.
const isPages = process.env.GITHUB_PAGES === "true";

// Your repository name → the site serves at https://<user>.github.io/<repo>/
const REPO = "PlanHappyWealth";
const basePath = isPages ? `/${REPO}` : "";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  eslint: { ignoreDuringBuilds: true },
  experimental: {
    optimizePackageImports: ["lucide-react", "framer-motion"],
  },
  // Expose the base path to app code (used for favicon / OG / manifest URLs).
  env: { NEXT_PUBLIC_BASE_PATH: basePath },

  ...(isPages
    ? {
        // ── Static export for GitHub Pages ──────────────────────────────
        output: "export",
        basePath,
        trailingSlash: true,
        images: { unoptimized: true },
        // Note: route handlers and headers() are unsupported by static export.
        // The Pages workflow removes src/app/api before building, and the AI
        // guide + lead capture run client-side so nothing visibly breaks.
      }
    : {
        // ── Full server build (Vercel / Node) ───────────────────────────
        images: {
          formats: ["image/avif", "image/webp"],
          remotePatterns: [
            { protocol: "https", hostname: "cdn.sanity.io" },
            { protocol: "https", hostname: "images.unsplash.com" },
          ],
        },
        async headers() {
          return [
            {
              source: "/(.*)",
              headers: [
                { key: "X-Content-Type-Options", value: "nosniff" },
                { key: "X-Frame-Options", value: "SAMEORIGIN" },
                { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
                { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
              ],
            },
          ];
        },
      }),
};

export default nextConfig;
