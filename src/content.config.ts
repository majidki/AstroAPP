import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const products = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/products" }),
  schema: z.object({
    name: z.string(),
    price: z.number().nonnegative(),
    currency: z.string().default("USD"),
    image: z.string().url(),
    tagline: z.string(),
    category: z.string(),
    inStock: z.boolean().default(true),
  }),
});

export const collections = { products };
