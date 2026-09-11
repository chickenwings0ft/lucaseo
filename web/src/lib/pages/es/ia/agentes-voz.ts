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
    { q: "¿La gente nota que habla con una IA?", a: "En nuestras pruebas, menos del 5% de los interlocutores identifica correctamente que hablan con una IA. Las voces neurales actuales tienen entonación, pausas naturales y capacidad de improvisar que las hacen prácticamente indistinguibles. Además, el agente se identifica como tal si se le pregunta directamente — siempre transparente." },
    { q: "¿Funciona con mi número de teléfono actual?", a: "Sí. Configuramos el agente para que atienda las llamadas a tu número actual, bien como primera línea (contesta todo) o como respaldo (contesta cuando no coges). No necesitas cambiar de número ni de operador." },
    { q: "¿Puede el agente transferir a un humano?", a: "Absolutamente. Definimos las reglas de transferencia: por tipo de consulta, por horario, por nivel de urgencia o cuando el propio interlocutor lo solicita. La transferencia incluye un resumen automático de la conversación para que tu equipo tenga todo el contexto." },
    { q: "¿Qué idiomas soporta?", a: "Español (todas las variantes), inglés, francés, alemán, portugués, italiano, catalán y más de 40 idiomas adicionales. La detección es automática: el agente responde en el idioma en que le hablan." },
    { q: "¿Es legal usar una IA para atender llamadas?", a: "Sí, siempre que cumpla con la normativa vigente. Nuestros agentes se identifican como asistentes virtuales cuando se les pregunta y cumplen con la RGPD en el tratamiento de datos de las conversaciones. Toda la implementación se hace conforme a la legislación europea." },
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
