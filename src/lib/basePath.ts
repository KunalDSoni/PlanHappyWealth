/**
 * Public base path. Empty for root deploys (Vercel/custom domain),
 * "/PlanHappyWealth" for a GitHub Pages project site. Used to prefix
 * static asset URLs (favicon, OG image, manifest) that Next does not
 * rewrite automatically.
 */
export const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

/** Prefix a root-relative public asset with the active base path. */
export const asset = (path: string) => `${basePath}${path.startsWith("/") ? path : `/${path}`}`;
