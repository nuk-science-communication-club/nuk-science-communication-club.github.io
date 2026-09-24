import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// 每一個活動／專案 = src/content/projects/ 裡的一個 .md 檔。
// 檔名就是網址：greenmind.md → /projects/greenmind
const projects = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    titleEn: z.string().optional(),
    year: z.number(),
    date: z.coerce.date(),
    // school 校園科學教育｜outreach 科普推廣｜workshop 工作坊｜event 大型活動協作｜member 社員專案
    category: z.enum(['school', 'outreach', 'workshop', 'event', 'member']),
    // 科傳社在活動中的身分：主辦、活動協作、活動支援、志工／工作人員、社員專案…
    involvement: z.string().default('主辦'),
    tags: z.array(z.string()).default([]),
    coverImage: z.string().optional(),
    coverAlt: z.string().optional(),
    gallery: z
      .array(z.object({ src: z.string(), alt: z.string().default('') }))
      .default([]),
    description: z.string(),
    about: z.string().optional(),
    ourRole: z.array(z.string()).default([]),
    partners: z.array(z.string()).default([]),
    location: z.string().optional(),
    result: z
      .object({
        members: z.number().optional(),
        students: z.number().optional(),
        hours: z.number().optional(),
        sessions: z.number().optional(),
      })
      .default({}),
    story: z.object({ quote: z.string(), author: z.string() }).optional(),
    externalLink: z.object({ label: z.string(), url: z.string() }).optional(),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
  }),
});

export const collections = { projects };
