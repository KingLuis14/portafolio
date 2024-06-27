import { defineCollection, reference, z } from "astro:content";

const blogCollection= defineCollection({
    type: 'content',
    schema: z.object({
        titlePage: z.string(),
        descriptionPage: z.string(),
        imagenBlog: z.string(),
        cardTitle: z.string(),
        pubDate: z.coerce.date(),
        tags: z.enum(['html', 'css', 'javascript']).array(),
        postReference : z.array(reference('blog')).optional(),
    })
});



export const collections = {
    'blog': blogCollection,
  };