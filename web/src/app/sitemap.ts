import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://lucaseo.com";
  const now = new Date().toISOString();

  const pages = [
    { url: "", priority: 1, changeFrequency: "weekly" as const },
    // Servicios principales ES
    { url: "/seo", priority: 0.9, changeFrequency: "monthly" as const },
    { url: "/sem", priority: 0.9, changeFrequency: "monthly" as const },
    { url: "/rrss", priority: 0.9, changeFrequency: "monthly" as const },
    { url: "/web", priority: 0.9, changeFrequency: "monthly" as const },
    { url: "/ia", priority: 0.9, changeFrequency: "monthly" as const },
    // Subpáginas IA
    { url: "/ia/automatizaciones", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/ia/agentes", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/ia/agentes-voz", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/ia/personalizado", priority: 0.8, changeFrequency: "monthly" as const },
    // Subpáginas RRSS
    { url: "/rrss/estrategia-mensual", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/rrss/paid-media", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/rrss/estrategia-storytelling", priority: 0.8, changeFrequency: "monthly" as const },
    // Subpáginas SEM
    { url: "/sem/google-ads", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/sem/tiktok-ads", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/sem/chatgpt-ads", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/sem/meta-ads", priority: 0.8, changeFrequency: "monthly" as const },
    // Páginas de empresa
    { url: "/sobre-mi", priority: 0.7, changeFrequency: "monthly" as const },
    { url: "/clientes", priority: 0.7, changeFrequency: "monthly" as const },
    { url: "/clientes/macheta", priority: 0.6, changeFrequency: "monthly" as const },
    { url: "/clientes/roots", priority: 0.6, changeFrequency: "monthly" as const },
    { url: "/clientes/briya", priority: 0.6, changeFrequency: "monthly" as const },
    // Legal
    { url: "/politica-privacidad", priority: 0.3, changeFrequency: "yearly" as const },
    { url: "/aviso-legal", priority: 0.3, changeFrequency: "yearly" as const },
    // English
    { url: "/en", priority: 0.9, changeFrequency: "weekly" as const },
    { url: "/en/seo", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/en/sem", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/en/social-media", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/en/web", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/en/ai", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/en/about", priority: 0.6, changeFrequency: "monthly" as const },
    { url: "/en/privacy-policy", priority: 0.3, changeFrequency: "yearly" as const },
    { url: "/en/legal-notice", priority: 0.3, changeFrequency: "yearly" as const },
  ];

  return pages.map((p) => ({
    url: `${base}${p.url}`,
    lastModified: now,
    changeFrequency: p.changeFrequency,
    priority: p.priority,
  }));
}
