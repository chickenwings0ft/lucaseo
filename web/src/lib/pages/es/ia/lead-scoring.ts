import type { ServicePage } from "../../types";

export const leadScoring: ServicePage = {
  slug: "ia/lead-scoring",
  metaTitle: "Lead Scoring Automático con IA | Lucaseo",
  metaDescription: "Puntuamos automáticamente cada lead según su comportamiento, perfil y engagement. Tu equipo comercial trabaja primero en los leads con más probabilidad de cierre.",
  eyebrow: "IA · Lead Scoring",
  title: "No todos los leads merecen *la misma llamada.*",
  lead: "La IA analiza señales y comportamiento para ayudarte a identificar: quién acaba de mirar, quién está interesado, quién está listo para hablar. Tu equipo deja de perseguir a todo el mundo. Y empieza por quien importa.",
  primaryCta: "Quiero priorizar mis leads →",
  secondaryCta: "Cómo funciona",
  stats: [
    { n: "3.2×", l: "Más tasa de cierre", c: "Cuando comerciales trabajan leads por puntuación, no por orden de llegada" },
    { n: "40%", l: "Menos tiempo en leads fríos", c: "Tu equipo deja de perseguir leads que nunca comprarán" },
    { n: "+28%", l: "Revenue por comercial", c: "Mayor eficiencia = más cierre con el mismo equipo" },
    { n: "Auto", l: "Puntuación en tiempo real", c: "Cada acción del lead actualiza su score al instante" },
  ],
  intro: {
    tag: "El problema",
    title: "Tu equipo trata a todos los leads igual. Y eso te cuesta dinero.",
    paragraphs: [
      "Llega un lead. Tu comercial lo llama. No responde. Lo vuelve a llamar. Nada. Pasa al siguiente. Resulta que ese lead era un estudiante que descargó un PDF por curiosidad. Mientras tanto, el director de compras de una empresa mediana que visitó tu página de precios tres veces esta semana no recibió ni una llamada.",
      "El lead scoring soluciona esto. Cada contacto acumula puntos por sus acciones — visitar la web, abrir emails, descargar recursos, ver precios — y pierde puntos por inactividad. Cuando un lead supera el umbral, tu equipo lo trabaja. El resultado: más cierres, menos frustración, cero tiempo perdido.",
    ],
  },
  cards: {
    tag: "Qué puntuamos",
    title: "Cada señal de intención cuenta",
    lead: "Combinamos datos demográficos y de comportamiento para una puntuación precisa.",
    items: [
      { icon: "🌐", title: "Actividad web", desc: "Páginas visitadas, tiempo en la web, visitas a la página de precios, visitas repetidas. Cada acción suma puntos según su relevancia comercial." },
      { icon: "📧", title: "Engagement con email", desc: "Aperturas, clics, respuestas. Un lead que abre 5 emails consecutivos tiene más puntos que uno que no ha abierto ninguno en 3 semanas." },
      { icon: "📥", title: "Descargas y formularios", desc: "Descarga de catálogos, guías o casos de éxito. Envío de formularios de contacto o solicitud de presupuesto. Cada acción incrementa la puntuación." },
      { icon: "🏢", title: "Perfil de empresa", desc: "Tamaño de empresa, sector, cargo del contacto, ubicación. Un director de marketing de una empresa de 50 empleados puntúa distinto que un freelance." },
      { icon: "⏰", title: "Timing y frecuencia", desc: "Un lead que visita tu web 3 veces esta semana puntúa más que uno que la visitó una vez hace un mes. La recencia importa tanto como el volumen." },
      { icon: "📉", title: "Señales negativas", desc: "Inactividad prolongada, emails sin abrir, baja de newsletters. Las señales negativas restan puntos para que tu equipo no pierda el tiempo." },
    ],
  },
  steps: {
    tag: "Proceso",
    title: "De leads desordenados a pipeline priorizado en 2 semanas",
    lead: "Implementamos un sistema de puntuación a medida de tu negocio.",
    items: [
      { n: "01", t: "Definición de criterios", d: "Analizamos tu proceso de venta para identificar qué acciones predicen una compra y cuáles son ruido. Definimos el modelo de scoring contigo." },
      { n: "02", t: "Configuración del scoring", d: "Implementamos las reglas de puntuación en tu CRM o plataforma de marketing automation. Cada acción del lead suma o resta puntos automáticamente." },
      { n: "03", t: "Umbrales y alertas", d: "Definimos cuándo un lead está caliente (listo para venta) y cuándo frío (necesita más nurturing). Tu equipo recibe alertas cuando un lead supera el umbral." },
      { n: "04", t: "Calibración continua", d: "Analizamos qué leads cierran y cuáles no para ajustar los pesos del scoring. El modelo se hace más preciso cada mes." },
    ],
  },
  bullets: {
    tag: "Por qué Lucaseo",
    title: "Scoring que realmente predice, no que adorna el CRM",
    lead: "Diseñamos modelos de puntuación basados en datos reales de tu negocio.",
    items: [
      "Modelo personalizado: los criterios de scoring se basan en tu ciclo de venta, no en una plantilla genérica",
      "Integración nativa con HubSpot, Pipedrive, Salesforce, ActiveCampaign y más",
      "Alertas en tiempo real: tu equipo sabe cuándo un lead está listo para la llamada",
      "Nurturing automático para leads con puntuación baja — no los descartamos, los educamos",
      "Dashboard de scoring: distribución de leads por rango, velocidad de avance, tasa de cierre por score",
      "Revisión mensual del modelo: ajustamos pesos basándonos en qué leads realmente cerraron",
    ],
  },
  faqs: [
    { q: "¿Qué es el lead scoring automático?", a: "Es un sistema que asigna una puntuación a cada lead según su probabilidad de compra. Analiza comportamiento, datos demográficos e interacciones para que tu equipo comercial sepa a quién llamar primero." },
    { q: "¿Se integra con mi CRM?", a: "Sí. El lead scoring se conecta con HubSpot, Salesforce, Pipedrive y la mayoría de CRMs para que la puntuación sea visible donde tu equipo ya trabaja." },
    { q: "¿Cómo puedo implementar lead scoring en mi empresa?", a: "Cuéntanos cómo gestionas tus leads hoy. Analizamos tu proceso comercial y te proponemos un sistema de scoring adaptado a tu negocio." },
  ],
  ctaTitle: "¿Tu equipo está persiguiendo a los leads equivocados?",
  ctaBody: "Implementamos un sistema de lead scoring que prioriza los leads con mayor probabilidad de cierre. Diagnóstico gratuito de tu pipeline actual.",
  related: {
    title: "Servicios relacionados",
    links: [
      { href: "/ia/integracion-crm", label: "Integración CRM" },
      { href: "/ia/email-marketing", label: "Email Marketing Automatizado" },
      { href: "/ia/chatbots", label: "Chatbots con IA" },
      { href: "/ia/automatizaciones", label: "Automatizaciones" },
    ],
  },
};
