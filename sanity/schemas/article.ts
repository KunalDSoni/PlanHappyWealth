import { defineField, defineType } from "sanity";

export const article = defineType({
  name: "article",
  title: "Article",
  type: "document",
  fields: [
    defineField({ name: "title", type: "string", validation: (r) => r.required() }),
    defineField({ name: "slug", type: "slug", options: { source: "title" }, validation: (r) => r.required() }),
    defineField({ name: "dek", title: "Standfirst / Dek", type: "text", rows: 2 }),
    defineField({ name: "category", type: "reference", to: [{ type: "category" }] }),
    defineField({ name: "author", type: "reference", to: [{ type: "author" }] }),
    defineField({ name: "readTime", title: "Read time", type: "string" }),
    defineField({ name: "featured", type: "boolean", initialValue: false }),
    defineField({ name: "coverImage", type: "image", options: { hotspot: true } }),
    defineField({ name: "publishedAt", type: "datetime" }),
    defineField({
      name: "body",
      title: "Body",
      type: "array",
      of: [{ type: "block" }, { type: "image", options: { hotspot: true } }],
    }),
  ],
  preview: {
    select: { title: "title", subtitle: "category.title", media: "coverImage" },
  },
});
