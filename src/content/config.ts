import { defineCollection, z } from "astro:content";

const html = defineCollection({
    type: 'content',
    schema: z.object({
        titlePage: z.string(),
        descriptionPage: z.string(),
        imagenBlog: z.string(),
        indice : z.string().array(),
        cardTitle: z.string(),
    })
});

export const collections = {
    html
  };