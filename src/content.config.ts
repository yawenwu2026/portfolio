import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const work = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/work" }),
  schema: z.object({
    title: z.string(),
    subtitle: z.string(),
    company: z.string(),
    role: z.string(),
    team: z.string().optional(),
    platform: z.string(),
    timeline: z.string(),
    order: z.number(),
    isPersonalProject: z.boolean(),
    coverImage: z.string(),
    coverAlt: z.string(),
    thumbImage: z.string().optional(),
    coverPosition: z.string().optional(),
    summary: z.string(),
    tags: z.array(z.string()).optional(),
  }),
});

export const collections = { work };
