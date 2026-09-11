import type { ServicePage } from "../../types";

export const whatsappAutomation: ServicePage = {
  slug: "ia/whatsapp-automation",
  metaTitle: "WhatsApp Automation con IA | Lucaseo",
  metaDescription: "Respuestas automáticas, confirmaciones de cita, recordatorios y notificaciones por WhatsApp Business. La plataforma con mayor tasa de apertura del mundo.",
  eyebrow: "IA · WhatsApp Automation",
  title: "Tu cliente ya está en WhatsApp. *Úsalo.*",
  lead: "Automatizamos conversaciones para responder preguntas, recoger información, cualificar contactos, hacer seguimiento y derivar conversaciones al equipo.",
  primaryCta: "Quiero automatizar WhatsApp →",
  secondaryCta: "Ver casos de uso",
  stats: [
    { n: "98%", l: "Tasa de apertura en WhatsApp", c: "Vs. 20% del email. Tu mensaje se lee." },
    { n: "45%", l: "Reducción de no-shows", c: "Con recordatorios automáticos 24h antes de la cita" },
    { n: "<1min", l: "Tiempo de respuesta", c: "El cliente recibe respuesta en segundos, no en horas" },
    { n: "3×", l: "Más engagement que email", c: "La gente responde en WhatsApp — no en su bandeja de entrada" },
  ],
  intro: {
    tag: "El problema",
    title: "Tu cliente vive en WhatsApp. Tu negocio, no.",
    paragraphs: [
      "Tus clientes abren WhatsApp 80 veces al día. Abren el email 3 veces. ¿Por dónde prefieres comunicarte? El problema es que gestionar WhatsApp a mano no escala: tu equipo pierde horas respondiendo las mismas preguntas, mandando confirmaciones, haciendo seguimientos uno a uno.",
      "WhatsApp Automation resuelve esto. Conectamos WhatsApp Business con tus sistemas — CRM, calendario, e-commerce, web — para que las respuestas, confirmaciones, recordatorios y notificaciones se envíen automáticamente. Tu equipo interviene solo cuando aporta valor.",
    ],
  },
  cards: {
    tag: "Qué automatizamos",
    title: "Cada interacción de WhatsApp, en piloto automático",
    lead: "Desde la primera pregunta hasta el seguimiento post-venta.",
    items: [
      { icon: "⚡", title: "Respuestas instantáneas", desc: "El cliente escribe y recibe respuesta inmediata con IA: precios, disponibilidad, ubicación, horarios. Sin esperas, sin frustraciones." },
      { icon: "📅", title: "Confirmación de citas", desc: "Cuando alguien agenda una cita, recibe automáticamente la confirmación por WhatsApp con fecha, hora, ubicación y un enlace para cancelar o reagendar." },
      { icon: "🔔", title: "Recordatorios automáticos", desc: "24h antes de la cita: recordatorio. 1h antes: otro recordatorio con indicaciones. Tus no-shows bajan un 45% sin que nadie envíe un solo mensaje." },
      { icon: "📦", title: "Notificaciones de pedido", desc: "Confirmación de compra, actualización de envío, entrega completada. Tu cliente sabe en todo momento el estado de su pedido — por WhatsApp, donde lo va a ver." },
      { icon: "🔁", title: "Seguimiento post-venta", desc: "Encuesta de satisfacción, solicitud de reseña, oferta de producto complementario. Todo automatizado y en el timing perfecto." },
      { icon: "🤖", title: "Chatbot conversacional", desc: "IA que mantiene conversaciones naturales por WhatsApp: cualifica leads, resuelve dudas y escala a humano cuando es necesario." },
    ],
  },
  steps: {
    tag: "Proceso",
    title: "Tu WhatsApp automatizado en 7 días",
    lead: "Configuramos todo sobre WhatsApp Business API sin disrupciones.",
    items: [
      { n: "01", t: "Análisis de flujos", d: "Identificamos qué mensajes envía tu equipo repetidamente: respuestas, confirmaciones, recordatorios, seguimientos. Esos son los primeros candidatos a automatizar." },
      { n: "02", t: "Diseño de plantillas", d: "Creamos las plantillas de mensaje aprobadas por Meta: texto, botones, enlaces. Cada plantilla es revisada y aprobada por ti antes de activarla." },
      { n: "03", t: "Configuración técnica", d: "Conectamos WhatsApp Business API con tu CRM, calendario y sistemas internos. Los disparadores se configuran para que el mensaje correcto se envíe en el momento correcto." },
      { n: "04", t: "Lanzamiento y optimización", d: "Activamos los flujos, monitorizamos entregas, aperturas y respuestas. Ajustamos tiempos y mensajes para maximizar engagement." },
    ],
  },
  bullets: {
    tag: "Por qué Lucaseo",
    title: "WhatsApp profesional, no spam",
    lead: "Automatización que respeta al usuario y cumple las políticas de Meta.",
    items: [
      "Usamos WhatsApp Business API oficial — sin riesgo de bloqueo de número",
      "Plantillas aprobadas por Meta: cumplimiento de políticas garantizado",
      "Integración con HubSpot, Pipedrive, Google Calendar, Calendly y más",
      "Segmentación inteligente: cada cliente recibe solo los mensajes relevantes",
      "Gestión de opt-out automática: si un cliente pide no recibir más mensajes, el sistema lo respeta al instante",
      "Métricas detalladas: entregas, lecturas, respuestas, conversiones por flujo",
    ],
  },
  faqs: [
    { q: "¿Qué se puede automatizar en WhatsApp Business?", a: "Respuestas automáticas, seguimiento de leads, confirmaciones de citas, envío de catálogos, notificaciones de pedidos y flujos de cualificación. Todo desde la API oficial de WhatsApp Business, sin riesgo de bloqueo." },
    { q: "¿Es legal automatizar WhatsApp?", a: "Sí, siempre que uses la API oficial de WhatsApp Business y cumplas con sus políticas de uso. No usamos herramientas no oficiales ni spam. Los mensajes automatizados se envían solo a contactos que han dado su consentimiento." },
    { q: "¿Cómo puedo empezar con WhatsApp Automation?", a: "Escríbenos y te explicamos cómo funciona, qué puedes automatizar y cuánto cuesta. Configuramos todo en 1-2 semanas." },
  ],
  ctaTitle: "¿Tu competencia ya habla con sus clientes por WhatsApp?",
  ctaBody: "Automatiza tu WhatsApp Business: confirmaciones, recordatorios, seguimientos y atención al cliente en piloto automático. Te enseñamos cómo sin compromiso.",
  related: {
    title: "Servicios relacionados",
    links: [
      { href: "/ia/chatbots", label: "Chatbots con IA" },
      { href: "/ia/integracion-crm", label: "Integración CRM" },
      { href: "/ia/automatizaciones", label: "Automatizaciones" },
      { href: "/ia/email-marketing", label: "Email Marketing Automatizado" },
    ],
  },
};
