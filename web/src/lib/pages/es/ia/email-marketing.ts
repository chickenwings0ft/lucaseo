import type { ServicePage } from "../../types";

export const emailMarketing: ServicePage = {
  slug: "ia/email-marketing",
  metaTitle: "Email Marketing Automatizado con IA | Lucaseo",
  metaDescription: "Secuencias de email que se activan según el comportamiento del usuario. Nurturing, carritos abandonados, onboarding y más — sin enviar un solo email a mano.",
  eyebrow: "IA · Email Marketing",
  title: "El email de \"hola, te escribimos porque...\" *puede morir.*",
  lead: "Creamos secuencias que cambian según lo que hace cada contacto. Más relevantes. Más personales. Más automáticas.",
  primaryCta: "Quiero automatizar mi email marketing →",
  secondaryCta: "Ver ejemplos de secuencias",
  stats: [
    { n: "3.8×", l: "Más apertura que emails masivos", c: "Los emails por comportamiento son relevantes — se abren" },
    { n: "15-20%", l: "Carritos recuperados", c: "Con secuencias automatizadas de 3 emails en 72h" },
    { n: "0", l: "Emails enviados a mano", c: "Todo funciona en piloto automático una vez configurado" },
    { n: "47%", l: "Más conversiones de leads", c: "Nurturing automatizado vs. seguimiento manual" },
  ],
  intro: {
    tag: "El problema",
    title: "Tienes leads. Lo que no tienes es seguimiento.",
    paragraphs: [
      "Un lead se registra en tu web. Tu equipo lo ve al día siguiente, quizá. Le manda un email genérico. Pasan tres días. Se olvidan. El lead se enfría y se va a otro sitio. Es la historia de siempre.",
      "El email marketing automatizado resuelve esto: cada lead entra en una secuencia personalizada según lo que hizo, lo que vio y lo que necesita. Recibe el email correcto en el momento correcto — bienvenida, información, caso de éxito, oferta — sin que nadie tenga que recordar enviarlo.",
    ],
  },
  cards: {
    tag: "Qué automatizamos",
    title: "Secuencias para cada momento del embudo",
    lead: "Cada tipo de interacción dispara la secuencia adecuada.",
    items: [
      { icon: "👋", title: "Bienvenida y onboarding", desc: "Cuando alguien se registra o pide información: presentación, qué esperar, primeros pasos. La primera impresión que convierte visitantes en leads activos." },
      { icon: "🔥", title: "Nurturing de leads", desc: "Secuencias que van educando al lead con contenido relevante según su interés: casos de éxito, guías, comparativas. Sin presionar, pero sin desaparecer." },
      { icon: "🛒", title: "Carritos abandonados", desc: "El usuario dejó algo a medias. A las 2h le recordamos. A las 24h le mostramos un testimonio. A las 48h, una oferta limitada. El 15-20% vuelve a completar la compra." },
      { icon: "🎯", title: "Reactivación de inactivos", desc: "Leads que no abren emails desde hace semanas. Secuencia específica para recuperar su atención o limpiar la lista — ambos escenarios te benefician." },
      { icon: "⭐", title: "Post-venta y fidelización", desc: "El cliente compró. Ahora toca: confirmación, guía de uso, encuesta de satisfacción, venta cruzada. Automatizado y en el timing perfecto." },
      { icon: "📊", title: "Segmentación dinámica", desc: "Según qué emails abre, qué enlaces clica y qué páginas visita, el sistema mueve al contacto entre segmentos automáticamente. Siempre recibe lo que le interesa." },
    ],
  },
  steps: {
    tag: "Proceso",
    title: "De cero envíos a flujos automáticos en 2 semanas",
    lead: "Configuramos las secuencias, escribimos los emails y dejamos el sistema listo para que funcione solo.",
    items: [
      { n: "01", t: "Mapeo del embudo", d: "Identificamos cada punto de contacto con tu cliente: registro, visita, descarga, compra, inactividad. Cada uno es el disparador de una secuencia." },
      { n: "02", t: "Copywriting de las secuencias", d: "Redactamos cada email con tu tono de voz: asunto, cuerpo, CTA. No son emails genéricos — son mensajes que tu público abre porque son relevantes." },
      { n: "03", t: "Configuración técnica", d: "Montamos los flujos en ActiveCampaign, Mailchimp, Brevo o la plataforma que uses. Conectamos los disparadores, los segmentos y las condiciones." },
      { n: "04", t: "Lanzamiento y optimización", d: "Activamos los flujos, monitorizamos tasas de apertura y conversión, y ajustamos asuntos, tiempos y contenido para maximizar resultados." },
    ],
  },
  bullets: {
    tag: "Por qué Lucaseo",
    title: "Email marketing que vende, no que molesta",
    lead: "Diseñamos secuencias que tus contactos quieren recibir.",
    items: [
      "Cada email se envía porque el usuario hizo algo — nunca por calendario arbitrario",
      "Copywriting profesional: asuntos que se abren, textos que se leen, CTAs que convierten",
      "Segmentación por comportamiento, no solo por datos demográficos",
      "A/B testing automático de asuntos y horarios de envío",
      "Cumplimiento RGPD: doble opt-in, enlace de baja y gestión de consentimientos",
      "Informes mensuales de rendimiento: aperturas, clics, conversiones y revenue atribuido",
    ],
  },
  faqs: [
    { q: "¿Cómo mejora la IA mi email marketing?", a: "Personalización automática de asuntos y contenido, segmentación inteligente, envío en el momento óptimo para cada contacto y análisis predictivo de qué leads están más cerca de comprar. Más aperturas, más clics, más ventas." },
    { q: "¿Funciona con mi herramienta de email actual?", a: "Sí. Nos integramos con Mailchimp, ActiveCampaign, HubSpot, Brevo y la mayoría de plataformas de email marketing. No necesitas cambiar de herramienta." },
    { q: "¿Cómo puedo automatizar mi email marketing con IA?", a: "Contáctanos y analizamos tu estrategia actual. Te proponemos las automatizaciones que más impacto tendrán en tus métricas de apertura, clic y conversión." },
  ],
  ctaTitle: "¿Cuántos leads se te están enfriando?",
  ctaBody: "Te diseñamos las secuencias de email que tu negocio necesita. Sin compromiso, te mostramos qué flujos implementaríamos y qué resultados puedes esperar.",
  related: {
    title: "Servicios relacionados",
    links: [
      { href: "/ia/lead-scoring", label: "Lead Scoring Automático" },
      { href: "/ia/integracion-crm", label: "Integración CRM" },
      { href: "/ia/automatizaciones", label: "Automatizaciones" },
      { href: "/ia/chatbots", label: "Chatbots con IA" },
    ],
  },
};
