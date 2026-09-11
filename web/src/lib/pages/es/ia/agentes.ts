import type { ServicePage } from "../../types";

export const agentes: ServicePage = {
  slug: "ia/agentes",
  metaTitle: "Agentes de IA para Empresas | Lucaseo",
  metaDescription: "Agentes de inteligencia artificial que trabajan 24/7: atienden clientes, cualifican leads, gestionan tareas y toman decisiones con contexto completo de tu negocio.",
  eyebrow: "IA · Agentes Inteligentes",
  title: "No necesitas otro chatbot. *Necesitas un sistema que haga cosas.*",
  lead: "Un agente IA puede analizar información, tomar decisiones dentro de unos límites, consultar herramientas y ejecutar acciones. Lo importante no es que \"hable bonito\". Lo importante es que trabaje.",
  primaryCta: "Quiero un agente IA →",
  secondaryCta: "Ver casos de uso",
  stats: [
    { n: "24/7", l: "Disponibilidad total", c: "Tu agente no descansa, no enferma, no pide vacaciones" },
    { n: "< 3s", l: "Tiempo de respuesta medio", c: "Respuestas instantáneas con contexto completo" },
    { n: "89%", l: "Tasa de resolución autónoma", c: "Solo escala al equipo humano cuando es necesario" },
    { n: "x6", l: "Más leads cualificados al mes", c: "El agente precualifica 24h antes de pasar al comercial" },
  ],
  intro: {
    tag: "La revolución",
    title: "De chatbot a empleado digital con criterio propio",
    paragraphs: [
      "Un chatbot sigue un guión. Un agente de IA entiende. La diferencia es fundamental: el agente accede a tu CRM, tu base de conocimiento, tu calendario y tus reglas de negocio para dar respuestas que antes solo podía dar tu mejor empleado.",
      "Imagina un comercial que conoce cada producto de tu catálogo, que recuerda cada conversación con cada cliente, que puede consultar stock en tiempo real y que nunca tiene un mal día. Eso es un agente de IA bien configurado.",
    ],
  },
  cards: {
    tag: "Capacidades",
    title: "Qué puede hacer tu agente de IA",
    lead: "No es una lista de deseos — es lo que nuestros agentes hacen hoy en empresas reales.",
    items: [
      { icon: "🤝", title: "Cualificación de leads", desc: "Conversa con cada visitante de tu web, identifica si es un lead caliente, recoge la información que necesitas y lo asigna al comercial adecuado." },
      { icon: "📅", title: "Agenda reuniones", desc: "Consulta la disponibilidad de tu equipo en tiempo real, propone horarios, envía invitaciones y gestiona cambios sin intervención humana." },
      { icon: "🛒", title: "Asistente de ventas", desc: "Recomienda productos basándose en las necesidades del cliente, consulta stock, aplica descuentos según tus reglas y procesa pedidos." },
      { icon: "📚", title: "Soporte técnico", desc: "Resuelve dudas consultando tu base de conocimiento, crea tickets cuando no puede resolver y hace seguimiento hasta el cierre." },
      { icon: "📈", title: "Análisis de datos", desc: "Consulta tus métricas bajo demanda: ventas del mes, tickets abiertos, rendimiento de campañas. En lenguaje natural, sin dashboards." },
      { icon: "🔄", title: "Gestión de procesos", desc: "Ejecuta flujos de trabajo completos: desde onboarding de clientes hasta gestión de reclamaciones, con escalado inteligente." },
    ],
  },
  steps: {
    tag: "Implementación",
    title: "Tu agente operativo en 3 semanas",
    dark: true,
    items: [
      { n: "01", t: "Definición del agente", d: "Definimos su personalidad, sus capacidades, sus límites y las herramientas a las que tiene acceso. Diseñamos los flujos de conversación." },
      { n: "02", t: "Entrenamiento", d: "Alimentamos al agente con tu base de conocimiento, FAQs, catálogo de productos y reglas de negocio. Lo entrenamos con conversaciones reales." },
      { n: "03", t: "Integración", d: "Conectamos el agente con tu web, WhatsApp, CRM y resto de herramientas. Configuramos las acciones que puede ejecutar de forma autónoma." },
      { n: "04", t: "Lanzamiento y mejora", d: "Activamos el agente con supervisión humana inicial. Analizamos cada conversación y refinamos sus respuestas hasta alcanzar la tasa de resolución objetivo." },
    ],
  },
  bullets: {
    tag: "Diferenciadores",
    title: "Un agente que trabaja como tu mejor empleado",
    items: [
      "Entrenado específicamente con los datos de TU negocio — no respuestas genéricas",
      "Conectado a tus herramientas en tiempo real: CRM, calendario, inventario, base de datos",
      "Escala a un humano cuando detecta que la conversación lo requiere — con todo el contexto",
      "Aprende de cada interacción y mejora semana a semana sin intervención manual",
      "Panel de control con métricas reales: conversaciones, resoluciones, ventas generadas",
      "Multicanal: web, WhatsApp, Instagram, Telegram, email — una sola configuración",
    ],
  },
  faqs: [
    { q: "¿Qué es un agente de IA para empresas?", a: "Es un sistema autónomo que ejecuta tareas específicas sin intervención humana: responder consultas, cualificar leads, programar citas o gestionar seguimientos. Funciona 24/7 y se entrena con la información de tu negocio." },
    { q: "¿En qué se diferencia un agente IA de un chatbot?", a: "Un chatbot responde preguntas predefinidas. Un agente IA toma decisiones, ejecuta acciones y se adapta al contexto de cada conversación. Puede buscar información, conectar con tu CRM y resolver problemas complejos de forma autónoma." },
    { q: "¿Cuánto cuesta implementar un agente de IA?", a: "Depende de la complejidad y las integraciones. Hacemos propuestas con precio cerrado para que sepas lo que pagas antes de empezar. Contáctanos y te damos un presupuesto adaptado a tu caso." },
  ],
  ctaTitle: "¿Tu equipo no da abasto?",
  ctaBody: "Un agente de IA puede gestionar el 80% de las consultas repetitivas desde el primer día. Te enseñamos cómo en una demo de 30 minutos.",
  related: {
    title: "Servicios relacionados",
    links: [
      { href: "/ia/automatizaciones", label: "Automatizaciones IA" },
      { href: "/ia/agentes-voz", label: "Agentes de voz" },
      { href: "/ia/personalizado", label: "IA a medida" },
      { href: "/seo", label: "SEO Orgánico" },
    ],
  },
};
