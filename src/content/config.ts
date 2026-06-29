import { z, defineCollection } from 'astro:content';

const nhanVatCollection = defineCollection({
  type: 'content',
  schema: z.object({
    ten: z.string(),
    boTruyen: z.string(),
    canhGioi: z.string(),
    xuatThan: z.string(),
    monPhai: z.string().optional(),
    tags: z.array(z.string()),
    anhDai: z.string().optional(),  // URL ảnh đại diện
  }),
});

export const collections = {
  'nhan-vat': nhanVatCollection,
};
