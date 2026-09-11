import type { ServicePage } from "../../types";

export const googleAds: ServicePage = {
  slug: "sem/google-ads",
  metaTitle: "Google Ads para Empresas | Lucaseo — Campañas SEM",
  metaDescription: "Campañas de Google Ads que generan leads y ventas desde el primer día. Search, Display, Shopping y YouTube Ads con optimización diaria y ROAS garantizado.",
  eyebrow: "SEM · Google Ads",
  title: "Que te busquen. Que te encuentren. *Que te compren.*",
  lead: "Google Ads funciona mejor cuando apareces en el momento exacto en que alguien necesita lo que tú vendes. Nosotros diseñamos campañas para llegar ahí sin pagar de más por el camino.",
  primaryCta: "Quiero mejorar Google Ads →",
  secondaryCta: "Ver resultados",
  stats: [
    { n: "5.4x", l: "ROAS medio de nuestras campañas", c: "5.4€ de retorno por cada euro invertido" },
    { n: "-38%", l: "Reducción media del CPC", c: "Vs. la media del sector en los mismos keywords" },
    { n: "< 7d", l: "Primeros resultados", c: "Leads y ventas desde la primera semana de campaña" },
    { n: "94%", l: "Quality Score medio", c: "Anuncios más relevantes = costes más bajos" },
  ],
  intro: {
    tag: "El canal más directo",
    title: "La intención de búsqueda es el activo más valioso del marketing digital",
    paragraphs: [
      "Cuando alguien busca 'abogado laboralista Madrid' en Google, no está navegando por curiosidad. Necesita un abogado, ahora. Google Ads te permite aparecer exactamente en ese momento, con el mensaje correcto, y capturar esa intención de compra antes que tu competencia.",
      "Pero Google Ads mal gestionado es un pozo sin fondo. Keywords demasiado amplias, pujas sin estrategia, landing pages que no convierten y cero seguimiento de conversiones. El resultado: miles de euros en clics que no generan nada. Nosotros hacemos lo contrario.",
    ],
  },
  cards: {
    tag: "Tipos de campaña",
    title: "Cada formato de Google Ads tiene su propósito",
    items: [
      { icon: "🔍", title: "Search Ads", desc: "Capturamos demanda con intención real." },
      { icon: "📱", title: "Performance Max", desc: "Exprimimos el ecosistema de Google." },
      { icon: "🛒", title: "Shopping", desc: "Ponemos el producto delante del comprador." },
      { icon: "🔄", title: "Remarketing", desc: "Volvemos a entrar en la conversación cuando toca." },
      { icon: "📊", title: "Tracking", desc: "Medimos qué clic acaba convirtiéndose en dinero." },
    ],
  },
  steps: {
    tag: "Proceso",
    title: "De cero a ROAS positivo en 30 días",
    items: [
      { n: "01", t: "Auditoría y estrategia", d: "Analizamos tu mercado, competencia y keywords. Definimos estructura de campaña, presupuesto y objetivos de conversión." },
      { n: "02", t: "Setup técnico", d: "Configuramos Google Tag Manager, conversiones, audiencias de remarketing y la estructura de cuenta optimizada." },
      { n: "03", t: "Lanzamiento y testing", d: "Creamos múltiples anuncios por grupo, con variaciones de copy y extensiones. Lanzamos con pujas conservadoras para validar." },
      { n: "04", t: "Optimización y escala", d: "Análisis diario de términos de búsqueda, ajuste de pujas, negativización de keywords no rentables y escala de lo que funciona." },
    ],
  },
  bullets: {
    tag: "Nuestra diferencia",
    title: "No gestionamos cuentas. Generamos negocio",
    items: [
      "Setup completo de medición: Google Tag Manager, GA4, conversiones offline y atribución",
      "Estructura de cuenta basada en intención de búsqueda, no en categorías genéricas",
      "Negativización proactiva de términos — tu presupuesto solo va a búsquedas relevantes",
      "Landing pages optimizadas para conversión — no enviamos tráfico a la home",
      "Informes semanales con coste por lead, coste por venta y ROAS por campaña",
      "Sin permanencia y sin fee sobre el presupuesto — cobramos por gestión, no por tu gasto",
    ],
  },
  faqs: [
    { q: "¿Cuánto presupuesto necesito para Google Ads?", a: "Depende del sector y la competencia en tus keywords. En sectores poco competidos, con 500-800€/mes puedes empezar a ver resultados. En sectores como seguros, legal o finanzas, los CPCs son más altos y recomendamos 1.500-3.000€/mes para tener volumen suficiente. Siempre hacemos un estudio previo gratuito." },
    { q: "¿Cuánto tardáis en configurar las campañas?", a: "El setup completo — investigación de keywords, estructura de cuenta, configuración de conversiones, creación de anuncios y landing pages — tarda entre 5 y 10 días laborables. Los primeros anuncios empiezan a mostrarse inmediatamente después." },
    { q: "¿Por qué no usar solo SEO en vez de Google Ads?", a: "El SEO es una inversión a medio-largo plazo que da resultados sostenidos. Google Ads da resultados inmediatos pero requiere inversión continua. Lo ideal es combinar ambos: Ads para captar demanda ahora mientras el SEO construye posiciones orgánicas que a largo plazo reducen tu dependencia de la publicidad." },
    { q: "¿Puedo ver exactamente dónde va mi dinero?", a: "Absolutamente. Tienes acceso completo a tu cuenta de Google Ads. Además, nuestros informes semanales detallan: impresiones, clics, conversiones, coste por conversión y ROAS por cada campaña, grupo de anuncios y keyword. Total transparencia." },
    { q: "¿Hacéis también las landing pages?", a: "Sí. Una campaña sin una landing page optimizada para conversión es como un embudo sin fondo. Diseñamos y desarrollamos landing pages específicas para cada campaña, con A/B testing de titulares, formularios y CTAs. Está incluido en nuestra gestión." },
  ],
  ctaTitle: "Menos clics inútiles. Más conversaciones que merecen la pena.",
  ctaBody: "",
  related: {
    title: "Servicios relacionados",
    links: [
      { href: "/sem/meta-ads", label: "Meta Ads" },
      { href: "/sem/tiktok-ads", label: "TikTok Ads" },
      { href: "/seo", label: "SEO Orgánico" },
      { href: "/web", label: "Creación web" },
    ],
  },
};
