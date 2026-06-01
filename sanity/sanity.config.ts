import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { schemaTypes } from "./schemas";

/**
 * Sanity Studio config for the Plan Happy Wealth Education Hub.
 * Run a standalone studio, or mount at /studio in the Next app.
 *
 *   npx sanity@latest init --env
 *   npx sanity dev
 */
export default defineConfig({
  name: "plan-happy-wealth",
  title: "Plan Happy Wealth — Content",
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? "your-project-id",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production",
  plugins: [structureTool()],
  schema: { types: schemaTypes },
});
