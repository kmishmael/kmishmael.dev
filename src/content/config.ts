import { z, defineCollection } from 'astro:content';
import { glob } from 'astro/loaders'

const blog = defineCollection({
    loader: glob({ pattern: '**/*.md', base: './src/content/posts' }),
    schema: z.object({
        title: z.string(),
        slug: z.string(),
        description: z.string(),
        publishDate: z.date(),
        author: z.string(),
        tags: z.array(z.string()),
    }),
});

export const collections = {
    blog,
};
