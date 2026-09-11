import type { ServicePage } from "../../types";

export const reportingAutomatizado: ServicePage = {
  slug: "ia/reporting-automatizado",
  metaTitle: "Reporting Automatizado con IA | Lucaseo",
  metaDescription: "Dashboards que se actualizan solos con los datos que importan: leads, conversiones, coste por cliente, ROI por campaña. Decisiones basadas en datos, sin buscar en 5 herramientas.",
  eyebrow: "IA · Reporting",
  title: "Deja de perder una mañana *preparando un informe.*",
  lead: "Conectamos tus fuentes de datos y generamos reporting automáticamente. Lo importante no es tener más dashboards. Es saber qué está pasando sin tener que construir el dashboard cada lunes.",
  primaryCta: "Quiero automatizar mis informes →",
  secondaryCta: "Ver ejemplo de dashboard",
  stats: [
    { n: "5h", l: "Ahorro semanal en reporting", c: "De buscar datos en 5 herramientas a verlo todo en una pantalla" },
    { n: "100%", l: "Datos actualizados en tiempo real", c: "Sin esperar al informe del lunes — los datos están ahí ahora" },
    { n: "1", l: "Dashboard unificado", c: "Google Ads + Meta + CRM + Analytics en un solo lugar" },
    { n: "Auto", l: "Alertas automáticas", c: "Cuando un KPI se desvía del objetivo, recibes aviso" },
  ],
  intro: {
    tag: "El problema",
    title: "Pasas más tiempo buscando datos que analizándolos",
    paragraphs: [
      "Para saber cómo va tu negocio esta semana tienes que abrir Google Analytics, luego Google Ads, luego Meta Business Suite, luego tu CRM, luego la hoja de cálculo donde alguien lleva el control de las ventas. Son 45 minutos para juntar números que deberías tener en una pantalla.",
      "El reporting automatizado elimina eso. Conectamos todas tus fuentes de datos en un dashboard unificado que se actualiza solo: métricas de marketing, ventas, costes y resultados. Abre el dashboard, toma la decisión, cierra la pestaña. Sin búsquedas, sin CSV, sin pedir informes.",
    ],
  },
  cards: {
    tag: "Qué conectamos",
    title: "Todos tus datos en un solo lugar",
    lead: "Cada fuente de datos conectada automáticamente a tu dashboard.",
    items: [
      { icon: "📊", title: "Google Analytics / GA4", desc: "Tráfico, fuentes, conversiones, eventos personalizados. Los datos de tu web sin entrar en la interfaz de Google." },
      { icon: "📣", title: "Google Ads + Meta Ads", desc: "Gasto, impresiones, clics, conversiones, CPA, ROAS — de todas tus campañas en un vistazo. Sin abrir cada plataforma por separado." },
      { icon: "🤝", title: "CRM (ventas)", desc: "Pipeline, leads por etapa, deals cerrados, revenue por comercial. Los datos de tu CRM integrados con el marketing para ver el embudo completo." },
      { icon: "📧", title: "Email marketing", desc: "Aperturas, clics, bajas, conversiones por secuencia. Correlación entre campañas de email y ventas reales." },
      { icon: "📱", title: "Redes sociales", desc: "Seguidores, engagement, publicaciones con mejor rendimiento, crecimiento mensual. Sin entrar en cada red social." },
      { icon: "💰", title: "Facturación y revenue", desc: "Ingresos, MRR, churn, LTV, coste de adquisición. Las métricas financieras que tu negocio necesita para crecer." },
    ],
  },
  steps: {
    tag: "Proceso",
    title: "De 5 herramientas a 1 dashboard en 10 días",
    lead: "Conectamos tus datos, diseñamos el dashboard y lo dejamos funcionando solo.",
    items: [
      { n: "01", t: "Definición de KPIs", d: "Identificamos qué métricas realmente importan para tu negocio. No las que quedan bonitas — las que ayudan a tomar decisiones." },
      { n: "02", t: "Conexión de fuentes", d: "Conectamos Google Analytics, Ads, CRM, email, redes sociales y cualquier otra fuente de datos relevante." },
      { n: "03", t: "Diseño del dashboard", d: "Creamos un dashboard claro y usable: números grandes para los KPIs principales, gráficos para tendencias, tablas para el detalle." },
      { n: "04", t: "Alertas y automatización", d: "Configuramos alertas automáticas cuando un KPI se desvía del objetivo e informes semanales que se envían por email o Slack." },
    ],
  },
  bullets: {
    tag: "Por qué Lucaseo",
    title: "Reporting que informa, no que abruma",
    lead: "Diseñamos dashboards para personas que toman decisiones, no para analistas de datos.",
    items: [
      "Dashboard diseñado para tu perfil: CEO, director de marketing, equipo comercial — cada uno ve lo que necesita",
      "Datos en tiempo real: no informes semanales, datos actualizados al minuto",
      "Alertas inteligentes: recibes aviso solo cuando algo requiere tu atención",
      "Informes automáticos por email/Slack: resumen semanal sin que nadie lo prepare",
      "Comparativas automáticas: este mes vs. anterior, este trimestre vs. objetivo",
      "Herramientas de visualización: Looker Studio, Power BI o Notion — la que prefieras",
    ],
  },
  faqs: [
    { q: "¿Qué es el reporting automatizado con IA?", a: "Un sistema que genera informes de rendimiento de forma automática: métricas de marketing, ventas, operaciones o lo que necesites. Sin abrir hojas de cálculo ni copiar datos a mano. Los informes llegan a tu email o Slack cuando tú decides." },
    { q: "¿De dónde saca los datos el reporting automatizado?", a: "De tus herramientas: Google Analytics, Google Ads, Meta Ads, CRM, bases de datos, hojas de cálculo. Conectamos todas las fuentes en un solo dashboard o informe automático." },
    { q: "¿Cómo puedo automatizar mis informes?", a: "Cuéntanos qué datos necesitas ver y con qué frecuencia. Montamos el sistema, lo conectamos a tus fuentes y lo dejamos funcionando en piloto automático." },
  ],
  ctaTitle: "¿Cuántas horas a la semana pierdes buscando datos?",
  ctaBody: "Te montamos un dashboard unificado con todas las métricas de tu negocio. Diagnóstico gratuito de tus fuentes de datos actuales.",
  related: {
    title: "Servicios relacionados",
    links: [
      { href: "/ia/automatizaciones", label: "Automatizaciones" },
      { href: "/ia/integracion-crm", label: "Integración CRM" },
      { href: "/ia/lead-scoring", label: "Lead Scoring Automático" },
      { href: "/sem", label: "Campañas SEM" },
    ],
  },
};
