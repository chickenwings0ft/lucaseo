import type { ServicePage } from "../../types";

export const paidMedia: ServicePage = {
  slug: "rrss/paid-media",
  metaTitle: "Social Ads & Paid Media | Lucaseo — Publicidad en Redes Sociales",
  metaDescription: "Campañas de publicidad en Instagram, Facebook, TikTok y LinkedIn. Segmentación avanzada, creatividades que convierten y optimización diaria para maximizar tu ROAS.",
  eyebrow: "RRSS · Paid Media",
  title: "Tu contenido puede llegar a 1.000 personas. *O a 100.000.*",
  lead: "La diferencia está en qué haces después. Construimos campañas para amplificar el contenido que funciona, encontrar nuevas audiencias y convertir atención en resultados. No pagamos por enseñar cosas. Pagamos por generar oportunidades.",
  primaryCta: "Quiero escalar con Paid Media →",
  secondaryCta: "Ver cómo funciona",
  stats: [
    { n: "4.2x", l: "ROAS medio de nuestras campañas", c: "Por cada euro invertido, 4.2€ de retorno" },
    { n: "-42%", l: "Reducción media del CPA", c: "Vs. campañas gestionadas internamente por el cliente" },
    { n: "A/B", l: "Testing continuo", c: "Creatividades, copys, audiencias — todo se testea" },
    { n: "24h", l: "Optimización diaria", c: "Ajustamos pujas, audiencias y presupuestos cada día" },
  ],
  intro: {
    tag: "Más allá del botón de promocionar",
    title: "Hay una diferencia entre gastar en ads y invertir en ads",
    paragraphs: [
      "Promocionar un post desde Instagram no es hacer publicidad. Es darle dinero a Meta sin estrategia, sin segmentación avanzada y sin optimización. El resultado: llegas a mucha gente que nunca va a comprarte.",
      "Una campaña profesional de Social Ads empieza por entender a quién quieres llegar, qué quieres que haga y cuánto estás dispuesto a pagar por esa acción. Después viene la creatividad que para el scroll, el copy que genera clics y la optimización diaria que baja el coste por resultado semana a semana.",
    ],
  },
  cards: {
    tag: "Plataformas",
    title: "Donde está tu audiencia, estamos nosotros",
    items: [
      { icon: "📸", title: "Instagram Ads", desc: "Reels, stories, feed y explore. Creatividades nativas que no parecen publicidad. Ideal para e-commerce, hostelería, moda y lifestyle." },
      { icon: "👥", title: "Facebook Ads", desc: "La plataforma con mayor capacidad de segmentación del mercado. Perfecta para generación de leads, tráfico a web y remarketing." },
      { icon: "🎵", title: "TikTok Ads", desc: "El canal con mayor engagement y el CPM más bajo del momento. Creatividades en vídeo vertical que generan viralidad y conversión." },
      { icon: "💼", title: "LinkedIn Ads", desc: "Publicidad B2B de precisión. Segmenta por cargo, empresa, sector e intereses profesionales. Ideal para servicios y SaaS." },
      { icon: "🔄", title: "Remarketing cross-platform", desc: "Persigue a quienes visitaron tu web o interactuaron con tu contenido. En todas las plataformas, con mensajes secuenciales." },
      { icon: "📈", title: "Lookalike & scaling", desc: "Audiencias similares a tus mejores clientes. Escalamos las campañas que funcionan manteniendo la rentabilidad." },
    ],
  },
  steps: {
    tag: "Metodología",
    title: "De la estrategia al ROAS positivo",
    dark: true,
    items: [
      { n: "01", t: "Estrategia y setup", d: "Definimos objetivos, audiencias, presupuesto y embudo. Configuramos pixel, conversiones y audiencias personalizadas." },
      { n: "02", t: "Creatividades y testing", d: "Lanzamos 3-5 variaciones de anuncios para cada audiencia. A/B testing de creatividades, copys, formatos y CTAs." },
      { n: "03", t: "Optimización diaria", d: "Analizamos métricas cada día. Pausamos lo que no funciona, escalamos lo que sí y ajustamos pujas para maximizar el ROAS." },
      { n: "04", t: "Reporting y escala", d: "Informe semanal con resultados, aprendizajes y próximos pasos. Escalamos las campañas ganadoras a nuevas audiencias." },
    ],
  },
  bullets: {
    tag: "Nuestra ventaja",
    title: "No gestionamos presupuestos. Generamos retorno",
    items: [
      "Setup completo: pixel, API de conversiones, catálogo de productos, audiencias custom",
      "Creatividades diseñadas para parar el scroll — no adaptaciones de material existente",
      "Testing científico: cada decisión se basa en datos, nunca en intuición",
      "Optimización diaria — no semanal, no quincenal, diaria",
      "Informes transparentes: sabrás exactamente dónde va cada euro",
      "Sin fee sobre el presupuesto publicitario — nuestro incentivo es tu resultado, no tu gasto",
    ],
  },
  faqs: [
    { q: "¿Qué diferencia hay entre gestión orgánica y paid media en redes sociales?", a: "La gestión orgánica es publicar contenido y crecer de forma natural. El paid media es invertir dinero para amplificar tu alcance a audiencias que no te siguen. Lo ideal es combinar ambas: el orgánico construye credibilidad y el paid trae volumen." },
    { q: "¿Cuánto presupuesto publicitario necesito para Social Ads?", a: "Recomendamos un mínimo de 300-500€/mes en inversión publicitaria para obtener datos suficientes y poder optimizar. El presupuesto ideal depende de tu sector, tu público y tus objetivos." },
    { q: "¿En qué plataformas hacéis paid media?", a: "Meta (Facebook e Instagram), TikTok y LinkedIn. Elegimos la plataforma según dónde esté tu público objetivo y qué tipo de campaña necesitas: captación, remarketing, branding o conversión directa." },
    { q: "¿Cómo puedo empezar con publicidad en redes sociales?", a: "Contáctanos por el formulario. Te hacemos una propuesta con estrategia, presupuesto recomendado y objetivos medibles. Sin compromiso." },
  ],
  ctaTitle: "¿Tus anuncios no dan retorno?",
  ctaBody: "Auditamos tus campañas actuales gratis. Te decimos exactamente qué está fallando y cómo mejorar tu ROAS.",
  related: {
    title: "Servicios relacionados",
    links: [
      { href: "/rrss/estrategia-mensual", label: "Estrategia mensual" },
      { href: "/sem/meta-ads", label: "Meta Ads" },
      { href: "/sem/tiktok-ads", label: "TikTok Ads" },
      { href: "/seo", label: "SEO Orgánico" },
    ],
  },
};
