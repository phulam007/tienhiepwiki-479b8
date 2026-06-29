import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const nhanVat = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/nhan-vat' }),
  schema: z.object({
    ten: z.string(),
    boTruyen: z.string(),
    canhGioi: z.string(),
    xuatThan: z.string(),
    monPhai: z.string().optional(),
    tags: z.array(z.string()),
  }),
});

export const collections = { nhanVat };
