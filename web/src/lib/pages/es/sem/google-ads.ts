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
    { q: "¿Cuánto presupuesto necesito para empezar con Google Ads?", a: "No hay un mínimo obligatorio, pero recomendamos al menos 500€/mes de inversión publicitaria para tener datos suficientes y optimizar. El presupuesto ideal depende de tu sector, la competencia en las keywords y el valor de cada cliente para tu negocio." },
    { q: "¿Google Ads funciona para negocios locales?", a: "Especialmente bien. Con campañas de búsqueda local y Google Maps Ads puedes aparecer justo cuando alguien cerca de ti busca lo que ofreces. Es una de las formas más rentables de captar clientes en tu zona." },
    { q: "¿Qué tipos de campañas de Google Ads existen?", a: "Search (aparecer en búsquedas), Display (banners en webs), Shopping (productos con foto y precio), YouTube Ads (vídeo), Performance Max (todos los inventarios combinados) y Discovery. Elegimos el formato según tu objetivo y tu público." },
    { q: "¿Cómo medís si mis campañas están funcionando?", a: "Instalamos tracking de conversiones completo: formularios, llamadas, ventas y cualquier acción de valor. Cada lead queda atribuido a la campaña, el anuncio y la keyword que lo generó. Reporting mensual con datos reales, no impresiones vacías." },
    { q: "¿Cómo puedo solicitar una auditoría de Google Ads?", a: "Escríbenos por el formulario de contacto. Revisamos tu cuenta, analizamos estructura, keywords, pujas y calidad de anuncios, y te decimos dónde está el problema y cómo solucionarlo." },
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
