import type { ServicePage } from "../../types";

export const integracionCrm: ServicePage = {
  slug: "ia/integracion-crm",
  metaTitle: "Integración CRM con IA | Lucaseo",
  metaDescription: "Conectamos tu web, formularios, ads y emails con HubSpot, Pipedrive o el CRM que uses. Cada lead registrado automáticamente, enriquecido y asignado.",
  eyebrow: "IA · Integración CRM",
  title: "Tu CRM lleno de datos. *Sin que nadie los meta a mano.*",
  lead: "Conectamos tu web, tus formularios, tus ads y tus emails con HubSpot, Pipedrive o el CRM que uses. Nada cae en el olvido: cada lead queda registrado automáticamente, enriquecido con datos y asignado al comercial correcto.",
  primaryCta: "Quiero integrar mi CRM",
  secondaryCta: "Ver integraciones disponibles",
  stats: [
    { n: "0", l: "Leads perdidos", c: "Cada contacto queda registrado automáticamente en tu CRM" },
    { n: "100%", l: "Datos del lead capturados", c: "Fuente, página visitada, campaña de origen, datos de formulario" },
    { n: "< 5s", l: "Tiempo de registro", c: "Desde que el lead contacta hasta que aparece en tu CRM" },
    { n: "2.4×", l: "Más tasa de seguimiento", c: "Cuando el CRM avisa, tu equipo actúa" },
  ],
  intro: {
    tag: "El problema",
    title: "Tienes un CRM. Pero nadie lo usa bien.",
    paragraphs: [
      "Tu equipo tiene un CRM, pero la mitad de los leads se meten a mano (cuando se acuerdan), sin datos de origen, sin contexto de lo que hizo el lead antes de contactar, sin asignar al comercial correcto. El CRM acaba siendo una hoja de Excel cara.",
      "Una integración CRM bien hecha cambia todo: el lead llega a través de tu web, un formulario, un anuncio o WhatsApp — y en segundos está en el CRM con todos los datos enriquecidos, la fuente de adquisición, la página que visitó y el comercial asignado según las reglas que tú defines.",
    ],
  },
  cards: {
    tag: "Qué conectamos",
    title: "Todo lo que genera leads, directo a tu CRM",
    lead: "Cada canal de captación integrado automáticamente.",
    items: [
      { icon: "🌐", title: "Formularios web", desc: "Cada formulario de tu web — contacto, presupuesto, descarga, registro — envía los datos directamente a tu CRM. Sin copy-paste, sin CSV, sin olvidos." },
      { icon: "📱", title: "WhatsApp y chat", desc: "Los contactos que llegan por WhatsApp Business, chatbot o live chat quedan registrados con toda la conversación en el CRM." },
      { icon: "📣", title: "Campañas de ads", desc: "Los leads de Google Ads, Meta Ads y TikTok Ads entran al CRM con la campaña, anuncio y keyword de origen. Sabes exactamente qué te costó cada lead." },
      { icon: "📧", title: "Email marketing", desc: "Sincronización bidireccional entre tu plataforma de email y tu CRM. Las aperturas, clics y respuestas actualizan el perfil del contacto automáticamente." },
      { icon: "📋", title: "Typeform y formularios externos", desc: "Usas Typeform, JotForm, Google Forms o Calendly? Los conectamos con tu CRM para que cada respuesta cree o actualice un contacto." },
      { icon: "🔄", title: "Enriquecimiento de datos", desc: "Cuando un lead llega, buscamos automáticamente datos adicionales: empresa, cargo, LinkedIn, tamaño de empresa. Tu equipo recibe el lead ya investigado." },
    ],
  },
  steps: {
    tag: "Proceso",
    title: "De datos dispersos a CRM unificado en 10 días",
    lead: "Conectamos todos tus canales con tu CRM sin cambiar tus herramientas.",
    items: [
      { n: "01", t: "Auditoría de canales", d: "Mapeamos todos los puntos por donde llegan leads a tu negocio: web, ads, email, WhatsApp, eventos, referrals. Identificamos qué datos se pierden en cada uno." },
      { n: "02", t: "Diseño de la integración", d: "Definimos qué datos capturar de cada canal, qué reglas de asignación aplicar y cómo debe quedar el perfil del lead en el CRM." },
      { n: "03", t: "Implementación y conexión", d: "Configuramos las integraciones usando APIs nativas, n8n o Make. Probamos cada flujo con datos reales hasta que todo funciona sin errores." },
      { n: "04", t: "Formación y lanzamiento", d: "Formamos a tu equipo para que entienda el nuevo flujo: cómo ven los leads, qué datos tienen, cómo usar las alertas. Sin tecnicismos." },
    ],
  },
  bullets: {
    tag: "Por qué Lucaseo",
    title: "Integración de verdad, no un plugin que se rompe cada mes",
    lead: "Construimos integraciones robustas que funcionan en segundo plano.",
    items: [
      "Compatible con HubSpot, Pipedrive, Salesforce, Zoho, monday.com y más",
      "Datos enriquecidos automáticamente: no solo el nombre y email, también empresa, cargo y origen",
      "Reglas de asignación personalizadas: por zona, producto, tamaño de empresa o round-robin",
      "Gestión de duplicados: si el lead ya existe, actualizamos su perfil en vez de crear uno nuevo",
      "Alertas configurables: notificación por Slack, email o SMS cuando llega un lead prioritario",
      "Soporte de errores: si una integración falla, el sistema la reintenta y te avisa — nada se pierde",
    ],
  },
  faqs: [
    { q: "¿Puedo seguir usando mi CRM actual?", a: "Sí. No te obligamos a cambiar de CRM. Trabajamos con el que ya uses: HubSpot, Pipedrive, Salesforce, Zoho, monday.com o cualquier otro con API. Si no tienes CRM, te recomendamos el que mejor encaje con tu negocio y lo configuramos." },
    { q: "¿Qué pasa si un lead llega por varios canales?", a: "El sistema lo detecta y unifica. Si alguien contacta por WhatsApp y luego rellena un formulario con el mismo email, el CRM actualiza el mismo perfil con los datos de ambas interacciones. Nada de duplicados." },
    { q: "¿Cuánto tarda en implementarse?", a: "Una integración básica (web + formularios → CRM) puede estar lista en 3-5 días. Una integración completa (web + ads + email + WhatsApp + enriquecimiento) entre 10 y 15 días. Te damos timeline cerrado antes de empezar." },
    { q: "¿Y si ya tengo integraciones que no funcionan bien?", a: "Las revisamos. Muchas veces las integraciones fallan porque se configuraron con plugins básicos que no manejan errores, duplicados ni campos personalizados. Las reconstruimos correctamente y las dejamos funcionando de forma fiable." },
    { q: "¿Mis datos están seguros?", a: "Sí. Las integraciones usan las APIs oficiales de cada plataforma con autenticación OAuth o API keys. No almacenamos ningún dato en servidores intermedios — todo va directo de la fuente al CRM. Cumplimiento RGPD incluido." },
  ],
  ctaTitle: "¿Cuántos leads se te pierden entre herramientas?",
  ctaBody: "Conectamos todos tus canales de captación con tu CRM. Diagnóstico gratuito de tus integraciones actuales.",
  related: {
    title: "Servicios relacionados",
    links: [
      { href: "/ia/lead-scoring", label: "Lead Scoring Automático" },
      { href: "/ia/email-marketing", label: "Email Marketing Automatizado" },
      { href: "/ia/automatizaciones", label: "Automatizaciones" },
      { href: "/ia/chatbots", label: "Chatbots con IA" },
    ],
  },
};
