import type { ServicePage } from "../../types";

export const agentesVoz: ServicePage = {
  slug: "ia/agentes-voz",
  metaTitle: "Agentes de Voz con IA | Lucaseo — Llamadas Automatizadas",
  metaDescription: "Agentes de voz con inteligencia artificial que atienden llamadas, agendan citas y cualifican leads por teléfono 24/7 con una voz natural indistinguible de un humano.",
  eyebrow: "IA · Agentes de Voz",
  title: "Tu teléfono también puede *trabajar por ti.*",
  lead: "Agentes de voz para: atender llamadas, recoger datos, cualificar oportunidades, confirmar citas y hacer seguimiento. Una voz que no se cansa. Un sistema que no se pone enfermo.",
  primaryCta: "Quiero explorar agentes de voz →",
  secondaryCta: "Escuchar una demo",
  stats: [
    { n: "100%", l: "Llamadas atendidas", c: "Ninguna llamada se pierde, ni siquiera a las 3 de la mañana" },
    { n: "< 1s", l: "Tiempo de respuesta", c: "Contesta al primer tono, sin esperas ni menús IVR" },
    { n: "47%", l: "Más citas agendadas", c: "Al no perder llamadas fuera de horario laboral" },
    { n: "98%", l: "Satisfacción del interlocutor", c: "Medida por encuesta post-llamada automática" },
  ],
  intro: {
    tag: "El futuro ya suena",
    title: "Adiós al 'en estos momentos no podemos atenderle'",
    paragraphs: [
      "Cada llamada perdida es un cliente que se va a la competencia. Y la realidad es que la mayoría de negocios pierden entre el 30% y el 60% de sus llamadas entrantes — por horario, por volumen, por falta de personal.",
      "Un agente de voz con IA resuelve esto de raíz. No es un contestador automático ni un menú de opciones. Es una voz natural que mantiene conversaciones reales, consulta tu sistema en tiempo real y ejecuta acciones: agendar citas, tomar pedidos, resolver dudas, cualificar leads y transferir a tu equipo cuando es necesario.",
    ],
  },
  cards: {
    tag: "Casos de uso",
    title: "Dónde un agente de voz marca la diferencia",
    items: [
      { icon: "🏥", title: "Clínicas y consultas", desc: "Agenda citas, confirma horarios, envía recordatorios por SMS y gestiona cancelaciones. Todo por teléfono, sin personal de recepción." },
      { icon: "🏨", title: "Hostelería", desc: "Toma reservas, informa sobre disponibilidad en tiempo real, gestiona cambios y confirmaciones automáticas." },
      { icon: "🏢", title: "Inmobiliarias", desc: "Cualifica interesados preguntando presupuesto, zona y tipología. Agenda visitas directamente en el calendario del agente comercial." },
      { icon: "🛍️", title: "E-commerce", desc: "Atiende consultas sobre pedidos, gestiona devoluciones y procesa reclamaciones consultando tu sistema de gestión." },
      { icon: "⚖️", title: "Despachos profesionales", desc: "Filtra consultas iniciales, recoge la información básica del caso y agenda la primera reunión con el profesional adecuado." },
      { icon: "🔧", title: "Servicios técnicos", desc: "Recoge avisos de incidencias, diagnostica problemas básicos y programa visitas del técnico según disponibilidad y zona." },
    ],
  },
  steps: {
    tag: "Implementación",
    title: "Tu agente de voz en 10 días hábiles",
    dark: true,
    items: [
      { n: "01", t: "Diseño de la voz", d: "Elegimos el tono, velocidad y personalidad de la voz. Definimos los flujos de conversación y los escenarios posibles." },
      { n: "02", t: "Entrenamiento", d: "Alimentamos al agente con tu información: servicios, precios, horarios, FAQs, protocolos de atención. Simulamos decenas de llamadas." },
      { n: "03", t: "Integración telefónica", d: "Conectamos el agente a tu centralita o número actual. Configuramos horarios, reglas de transferencia y acciones automáticas." },
      { n: "04", t: "Monitorización y ajuste", d: "Escuchamos las primeras llamadas reales, ajustamos respuestas y afinamos el reconocimiento de voz hasta alcanzar el rendimiento óptimo." },
    ],
  },
  bullets: {
    tag: "Ventajas clave",
    title: "La recepcionista que nunca se pone enferma",
    items: [
      "Voz natural con entonación humana — los interlocutores no distinguen que es IA",
      "Multiidioma automático: detecta el idioma del llamante y responde en el mismo",
      "Integrado con tu calendario, CRM y sistemas de gestión en tiempo real",
      "Transferencia inteligente a tu equipo con resumen de la conversación",
      "Transcripción completa de cada llamada disponible en tu panel",
      "Escalable: de 10 a 10.000 llamadas simultáneas sin coste adicional por línea",
    ],
  },
  faqs: [
    { q: "¿Qué es un agente de voz con IA?", a: "Es un sistema que atiende y realiza llamadas telefónicas de forma autónoma usando inteligencia artificial. Puede cualificar leads, confirmar citas, resolver dudas frecuentes y derivar a un humano cuando es necesario." },
    { q: "¿Los agentes de voz suenan naturales?", a: "Sí. La tecnología actual de síntesis de voz permite conversaciones fluidas y naturales. Se configuran con el tono y el vocabulario de tu negocio para que la experiencia sea coherente con tu marca." },
    { q: "¿Cómo puedo implementar un agente de voz en mi empresa?", a: "Contáctanos y te explicamos cómo funciona, qué casos de uso tiene sentido automatizar y cuánto cuesta. Te hacemos una demo personalizada." },
  ],
  ctaTitle: "¿Cuántas llamadas pierdes al día?",
  ctaBody: "Configuramos una demo gratuita con tu información real. Llámala tú mismo y comprueba cómo suena tu nuevo agente de voz.",
  related: {
    title: "Servicios relacionados",
    links: [
      { href: "/ia/agentes", label: "Agentes IA" },
      { href: "/ia/automatizaciones", label: "Automatizaciones" },
      { href: "/ia/personalizado", label: "IA a medida" },
      { href: "/sem", label: "SEM & Ads" },
    ],
  },
};
