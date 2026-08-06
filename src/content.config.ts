// Astro v6 — Content Layer API
// Emplacement : src/content.config.ts (à la racine de src/, pas dans content/)
// Docs : https://docs.astro.build/en/guides/upgrade-to/v6/#removed-legacy-content-collections

import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// ─── Actualités ───────────────────────────────────────────────────────────────
const actualites = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/actualites' }),
  schema: z.object({
    title:         z.string(),
    description:   z.string(),
    date:          z.coerce.date(),
    tag:           z.enum([
      'Environnement',
      'Économie',
      'Social',
      'Vote',
      'Action',
      'Communiqué',
      'Vie associative',
      'Événement',
    ]),
    image:         z.string().optional(),
    // .transform() évite le rejet si Decap écrit une chaîne vide au lieu d'omettre le champ
    video_youtube: z.string().optional().transform(v => v || undefined),
    draft:         z.boolean().default(false),
  }),
});

// ─── Membres ──────────────────────────────────────────────────────────────────
const membres = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/membres' }),
  schema: z.object({
    nom:       z.string(),
    role:      z.string(),
    photo:     z.string().optional(),
    ordre:     z.number().default(99),
    twitter:   z.string().optional(),
    linkedin:  z.string().optional(),
    instagram: z.string().optional(),
  }),
});

// ─── Valeurs ──────────────────────────────────────────────────────────────────
const valeurs = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/valeurs' }),
  schema: z.object({
    titre:  z.string(),
    icone:  z.string().optional(),
    resume: z.string(),
    ordre:  z.number().default(99),
  }),
});

export const collections = { actualites, membres, valeurs };