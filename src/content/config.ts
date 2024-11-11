import { defineCollection } from 'astro:content';
import { data } from './glossary.ts';

const glossary = defineCollection({
  loader: async () =>
    data.map((data, idx) => ({
      id: String(idx),
      title: data.title,
      description: data.description,
    })),
});

export const collections = { glossary };
