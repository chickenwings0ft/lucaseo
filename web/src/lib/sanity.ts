import { createClient } from "next-sanity";

export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;
const apiVersion = "2024-01-01";

// Sin estas variables createClient lanza al importar el módulo, lo que rompe el
// build entero en lugar de caer a los textos por defecto de content.ts.
export const isSanityConfigured = Boolean(projectId && dataset);

export const client = isSanityConfigured
  ? createClient({ projectId, dataset, apiVersion, useCdn: true })
  : null;

// Cliente con permisos de escritura, solo servidor (API routes)
export const writeClient = isSanityConfigured
  ? createClient({
      projectId,
      dataset,
      apiVersion,
      useCdn: false,
      token: process.env.SANITY_API_TOKEN,
    })
  : null;
