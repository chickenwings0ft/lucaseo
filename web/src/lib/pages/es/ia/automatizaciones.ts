import type { ServicePage } from "../../types";

export const automatizaciones: ServicePage = {
  slug: "ia/automatizaciones",
  metaTitle: "Automatizaciones con IA para Empresas | Lucaseo",
  metaDescription: "Automatiza tareas repetitivas con inteligencia artificial. Ahorra horas al día, reduce errores y escala tu negocio sin contratar más personal.",
  eyebrow: "IA · Automatizaciones",
  title: "Deja de hacer manualmente *lo que puedes hacer una vez.*",
  lead: "Captura de leads. Emails. Tareas. Notificaciones. CRM. Seguimientos. Diseñamos flujos que se activan solos y hacen el trabajo repetitivo por ti.",
  primaryCta: "Quiero automatizar un proceso →",
  secondaryCta: "Ver cómo funciona",
  stats: [
    { n: "73%", l: "Reducción de tareas manuales", c: "En los primeros 30 días de implementación" },
    { n: "4.2h", l: "Horas ahorradas al día por empleado", c: "Media en nuestros clientes activos" },
    { n: "0", l: "Errores de transcripción", c: "La IA no se distrae ni se equivoca en datos" },
    { n: "14 días", l: "Tiempo medio de implementación", c: "Desde la primera reunión hasta el go-live" },
  ],
  intro: {
    tag: "El problema",
    title: "Las tareas repetitivas están frenando tu crecimiento",
    paragraphs: [
      "Cada minuto que tu equipo dedica a copiar datos de un CRM a una hoja de cálculo, clasificar correos o generar facturas manualmente es un minuto que no dedica a vender, crear o atender a tus clientes.",
      "Las automatizaciones con IA no son ciencia ficción ni requieren programadores. Son flujos inteligentes que conectan tus herramientas actuales — tu email, tu CRM, tu ERP, tu WhatsApp — y hacen que las tareas se ejecuten solas, con una precisión que ningún humano puede mantener 8 horas al día.",
    ],
  },
  cards: {
    tag: "Qué automatizamos",
    title: "Desde emails hasta informes financieros",
    lead: "Cada negocio tiene sus propios cuellos de botella. Estos son los más comunes que eliminamos.",
    items: [
      { icon: "📧", title: "Email y comunicación", desc: "Respuestas automáticas inteligentes, clasificación de correos entrantes, seguimientos programados y notificaciones personalizadas sin tocar la bandeja de entrada." },
      { icon: "📊", title: "Informes y reporting", desc: "Dashboards que se actualizan solos, informes semanales generados automáticamente y alertas cuando un KPI se desvía del objetivo." },
      { icon: "🧾", title: "Facturación y contabilidad", desc: "Generación automática de facturas, conciliación bancaria, clasificación de gastos y envío de recordatorios de pago." },
      { icon: "🗂️", title: "Gestión de datos", desc: "Limpieza, deduplicación y enriquecimiento de bases de datos. Sincronización entre plataformas sin intervención manual." },
      { icon: "📱", title: "Atención al cliente", desc: "Respuestas automáticas en WhatsApp, chatbots con IA entrenados con tus datos y escalado inteligente a tu equipo humano." },
      { icon: "📋", title: "Procesos internos", desc: "Flujos de aprobación, asignación automática de tareas, onboarding de empleados y gestión documental inteligente." },
    ],
  },
  steps: {
    tag: "Proceso",
    title: "De la idea al ahorro de tiempo en 14 días",
    lead: "Un proceso claro, sin sorpresas, diseñado para que notes el impacto desde la primera semana.",
    items: [
      { n: "01", t: "Auditoría de procesos", d: "Mapeamos cada tarea repetitiva en tu negocio, medimos el tiempo que consume y priorizamos por impacto." },
      { n: "02", t: "Diseño del flujo", d: "Creamos la arquitectura de la automatización: qué herramientas se conectan, qué datos fluyen y qué reglas aplican." },
      { n: "03", t: "Implementación", d: "Configuramos los flujos en tus herramientas actuales. Sin cambiar tu stack, sin disrupciones en tu día a día." },
      { n: "04", t: "Optimización continua", d: "Monitorizamos los flujos, ajustamos reglas y añadimos nuevas automatizaciones conforme tu equipo identifica más oportunidades." },
    ],
  },
  bullets: {
    tag: "Por qué Lucaseo",
    title: "Automatización con sentido, no con hype",
    lead: "No vendemos tecnología por vender. Automatizamos lo que tiene sentido económico automatizar.",
    items: [
      "Empezamos por las tareas con mayor ROI — las que más tiempo consumen y menos valor aportan",
      "Trabajamos con tus herramientas actuales: no te obligamos a migrar a nada nuevo",
      "Cada automatización incluye manejo de errores y notificaciones — nada falla en silencio",
      "Documentamos todo para que tu equipo pueda mantenerlo sin nosotros",
      "Soporte continuo incluido durante los primeros 3 meses post-implementación",
      "Medimos el ahorro real en horas y euros — no en métricas vanidosas",
    ],
  },
  faqs: [
    { q: "¿Qué tareas de mi negocio puedo automatizar?", a: "Respuestas a leads, seguimiento comercial, envío de emails y WhatsApp, reporting, clasificación de solicitudes y cualquier proceso repetitivo que consuma tiempo de tu equipo. Si lo haces más de 10 veces al día, probablemente se puede automatizar." },
    { q: "¿Cuánto tiempo se tarda en montar una automatización?", a: "Las automatizaciones simples (emails, notificaciones, seguimientos) se implementan en 1-2 semanas. Los flujos más complejos con múltiples integraciones pueden tardar 3-4 semanas. Todo depende de la complejidad y las herramientas involucradas." },
    { q: "¿Necesito cambiar mis herramientas actuales?", a: "No. Nos integramos con las herramientas que ya usas: CRM, email, WhatsApp, Slack, hojas de cálculo. Automatizar no significa empezar de cero, sino conectar lo que ya funciona." },
    { q: "¿Cómo puedo empezar a automatizar procesos?", a: "Cuéntanos qué tareas te quitan más tiempo. Analizamos tu caso y te proponemos un plan con las automatizaciones que más impacto tendrán en tu día a día." },
  ],
  ctaTitle: "¿Cuántas horas al día pierde tu equipo?",
  ctaBody: "Hacemos una auditoría gratuita de tus procesos. Te decimos exactamente qué se puede automatizar, cuánto tiempo ahorrarás y cuánto cuesta.",
  related: {
    title: "Servicios relacionados",
    links: [
      { href: "/ia/agentes", label: "Agentes IA" },
      { href: "/ia/agentes-voz", label: "Agentes de voz" },
      { href: "/ia/personalizado", label: "IA a medida" },
      { href: "/web", label: "Creación web" },
    ],
  },
};
