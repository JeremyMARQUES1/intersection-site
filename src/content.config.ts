import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
// 1. Importez le loader "glob" pour charger vos fichiers locaux
import { glob } from 'astro/loaders';

const actualites = defineCollection({
  // 2. Remplacez type: 'content' par le loader glob
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: './src/content/actualites' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.date(),
    tag: z.enum(['Vote', 'Action', 'Communiqué', 'Vie associative', 'Événement']),
    image: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

const membres = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: './src/content/membres' }),
  schema: z.object({
    nom: z.string(),
    role: z.string(),
    photo: z.string().optional(),
    ordre: z.number().default(99),
  }),
});

const valeurs = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: './src/content/valeurs' }),
  schema: z.object({
    titre: z.string(),
    ordre: z.number().default(99),
  }),
});

export const collections = { actualites, membres, valeurs };