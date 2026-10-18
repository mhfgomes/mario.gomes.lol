import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const profile = defineCollection({
  loader: glob({ pattern: 'profile.md', base: './src/content' }),
  schema: z.strictObject({
    name: z.string(),
    handle: z.string().optional(),
    location: z.string().optional(),
    headline: z.string().optional(),
    avatar: z.string().optional(),
    status: z.strictObject({
      text: z.string().optional(),
      indicator: z.enum(['green', 'blue', 'purple', 'amber', 'red']).optional(),
    }).optional(),
    socials: z.array(z.strictObject({
      name: z.string(),
      url: z.url(),
      icon: z.string(),
      label: z.string().optional(),
      handle: z.string().optional(),
    })),
    groups: z.array(z.strictObject({
      title: z.string().optional(),
      items: z.array(z.strictObject({
        title: z.string(),
        url: z.url(),
        github: z.url().optional(),
        releases: z.url().optional(),
        description: z.string().optional(),
        icon: z.string().optional(),
        highlight: z.boolean().optional(),
      })),
    })),
    hardware: z.array(z.strictObject({
      category: z.string(),
      items: z.array(z.strictObject({
        name: z.string(),
        specs: z.string().optional(),
        description: z.string().optional(),
        icon: z.string().optional(),
      })),
    })),
    whatIDo: z.array(z.strictObject({
      title: z.string(),
      description: z.string(),
      icon: z.string().optional(),
    })),
    skills: z.array(z.strictObject({
      category: z.string(),
      items: z.array(z.string()),
    })),
  }),
});

export const collections = { profile };
