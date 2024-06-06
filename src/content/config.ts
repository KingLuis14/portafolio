import { defineCollection, z } from "astro:content";

const html = defineCollection({
    type: 'content',
    schema: z.object({
        titlePage: z.string(),
        descriptionPage: z.string(),
        imagenBlog: z.string(),
        cardTitle: z.string(),
    })
});

const css = defineCollection({
    type: 'content',
    schema: z.object({
        titlePage: z.string(),
        descriptionPage: z.string(),
        imagenBlog: z.string(),
        cardTitle: z.string(),
    })
});

export const collections = {
    html, css
  };