import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";
import { SITE } from "@/config";

export const BLOG_PATH = "src/data/blog";
export const PODCAST_PATH = "src/data/podcast";

const blog = defineCollection({
  loader: glob({ pattern: "**/[^_]*.md", base: `./${BLOG_PATH}` }),
  schema: ({ image }) =>
    z.object({
      author: z.string().default(SITE.author),
      pubDatetime: z.date(),
      modDatetime: z.date().optional().nullable(),
      title: z.string(),
      featured: z.boolean().optional(),
      draft: z.boolean().optional(),
      tags: z.array(z.string()).default(["others"]),
      series: z.string().optional(),
      ogImage: image().or(z.string()).optional(),
      description: z.string(),
      canonicalURL: z.string().optional(),
      hideEditPost: z.boolean().optional(),
      timezone: z.string().optional(),
    }),
});

const podcast = defineCollection({
  loader: glob({ pattern: "**/[^_]*.md", base: `./${PODCAST_PATH}` }),
  schema: z.object({
    episode: z.number(),
    title: z.string(),
    description: z.string(),
    pubDatetime: z.date(),
    audioUrl: z.string(),
    transcriptUrl: z.string().optional(),
    duration: z.string(),
    audioSize: z.number(),
    articleSlug: z.string().optional(),
    season: z.number().default(1),
    draft: z.boolean().optional(),
  }),
});

export const collections = { blog, podcast };
