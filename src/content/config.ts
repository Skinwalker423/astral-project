import { defineCollection } from "astro:content";
import { z } from "zod";

const BlogCollectionSchema = z.object({
  title: z.string(),
  pubDate: z.date(),
  author: z.string(),
  image: z.string(),
  tags: z.array(z.string()),
  slug: z.string().optional(),
});

const blogCollection = defineCollection({
  type: "content",
  schema: BlogCollectionSchema,
});

export const collection = {
  blog: blogCollection,
};
