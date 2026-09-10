import type { ServicePage } from "../../types";

export const personalizado: ServicePage = {
  slug: "ia/personalizado",
  metaTitle: "Soluciones de IA a Medida | Lucaseo — Desarrollo Personalizado",
  metaDescription: "Desarrollo de soluciones de inteligencia artificial a medida para tu negocio. Desde modelos de predicción hasta sistemas de procesamiento de lenguaje natural adaptados a tu sector.",
  eyebrow: "IA · Desarrollo a Medida",
  title: "Una IA diseñada *exclusivamente para tu negocio*",
  lead: "A veces las soluciones estándar no encajan. Cuando tu problema es único, la solución también tiene que serlo. Desarrollamos sistemas de IA desde cero, adaptados a tus datos, tus procesos y tus objetivos específicos.",
  primaryCta: "Hablemos de tu proyecto",
  secondaryCta: "Ver posibilidades",
  stats: [
    { n: "100%", l: "Personalización", c: "Cada solución se construye desde cero para tu caso" },
    { n: "3-8", l: "Semanas de desarrollo", c: "Dependiendo de la complejidad del proyecto" },
    { n: "∞", l: "Propiedad del código", c: "Todo el desarrollo es tuyo: código, modelos, datos" },
    { n: "ROI+", l: "Rentabilidad demostrada", c: "Medimos el retorno antes y después de implementar" },
  ],
  intro: {
    tag: "Cuando lo estándar no basta",
    title: "Tu negocio no es genérico. Tu IA tampoco debería serlo",
    paragraphs: [
      "Las herramientas de IA genéricas resuelven problemas genéricos. Pero tu negocio tiene datos propios, procesos únicos y necesidades que ningún SaaS del mercado cubre exactamente.",
      "Desarrollamos soluciones de IA completamente a medida: desde modelos de predicción de demanda entrenados con TUS datos históricos, hasta sistemas de procesamiento de documentos que entienden TU terminología sectorial. El código, los modelos y los datos son siempre tuyos.",
    ],
  },
  cards: {
    tag: "Soluciones",
    title: "Qué podemos construir para ti",
    items: [
      { icon: "🔮", title: "Modelos predictivos", desc: "Predicción de demanda, churn, precios dinámicos, scoring de leads. Entrenados con tus datos reales para decisiones basadas en evidencia." },
      { icon: "📄", title: "Procesamiento de documentos", desc: "Extracción automática de datos de facturas, contratos, informes médicos o cualquier documento. OCR + NLP adaptado a tu formato." },
      { icon: "🔍", title: "Búsqueda inteligente", desc: "Motor de búsqueda semántico para tu base de conocimiento, catálogo o documentación interna. Busca por significado, no por palabras exactas." },
      { icon: "🎯", title: "Sistemas de recomendación", desc: "Recomendaciones personalizadas de productos, contenidos o servicios basadas en el comportamiento de tus usuarios." },
      { icon: "📸", title: "Visión artificial", desc: "Detección de defectos en producción, reconocimiento de productos, análisis de imágenes médicas, control de calidad visual automatizado." },
      { icon: "🧠", title: "Modelos de lenguaje fine-tuned", desc: "LLMs ajustados específicamente a tu vocabulario, tono y casos de uso. Tu propio ChatGPT que habla el idioma de tu sector." },
    ],
  },
  steps: {
    tag: "Metodología",
    title: "Del problema al producto en sprints cortos",
    items: [
      { n: "01", t: "Discovery", d: "Entendemos el problema de negocio, evaluamos los datos disponibles y definimos el alcance del proyecto. Resultado: propuesta técnica con estimación de impacto." },
      { n: "02", t: "Prototipo", d: "Construimos un MVP funcional con tus datos reales. En 1-2 semanas tienes algo que puedes probar y validar antes de invertir más." },
      { n: "03", t: "Desarrollo", d: "Iteramos sobre el prototipo validado. Cada sprint entrega funcionalidad nueva que tu equipo puede usar y evaluar." },
      { n: "04", t: "Despliegue y soporte", d: "Ponemos el sistema en producción, formamos a tu equipo y ofrecemos soporte técnico continuo para evolucionar la solución." },
    ],
  },
  bullets: {
    tag: "Nuestra filosofía",
    title: "Tecnología con propósito, no por moda",
    lead: "No todo necesita IA. Pero cuando sí la necesitas, mereces una solución que funcione de verdad.",
    items: [
      "Empezamos por el problema de negocio, no por la tecnología — si no necesitas IA, te lo decimos",
      "Prototipo funcional en 1-2 semanas — validas antes de comprometerte",
      "Todo el código fuente y los modelos son de tu propiedad — sin vendor lock-in",
      "Stack moderno y mantenible: Python, PyTorch, Hugging Face, FastAPI, Docker",
      "Documentación técnica completa — tu equipo puede mantenerlo y evolucionar",
      "Medimos el impacto real del proyecto en tus KPIs de negocio, no en métricas técnicas",
    ],
  },
  faqs: [
    { q: "¿Necesito tener datos propios para un proyecto de IA?", a: "Depende del proyecto. Para modelos predictivos o sistemas de recomendación, sí necesitas datos históricos. Para procesamiento de documentos o agentes conversacionales, podemos empezar con poca data e ir mejorando. En la fase de discovery evaluamos la calidad y cantidad de tus datos y te decimos exactamente qué es viable." },
    { q: "¿Cuánto cuesta un proyecto de IA a medida?", a: "Varía según la complejidad. Un prototipo básico puede estar entre 3.000€ y 8.000€. Un sistema de producción completo, entre 10.000€ y 40.000€. Siempre hacemos un discovery inicial gratuito para darte un presupuesto cerrado antes de empezar. No hay sorpresas." },
    { q: "¿Puedo integrar la IA con mis sistemas actuales?", a: "Sí, ese es precisamente el valor de una solución a medida. Diseñamos las APIs y conectores para que la IA se integre con tu ERP, CRM, web, app móvil o cualquier sistema que uses. La integración forma parte del proyecto desde el primer día." },
    { q: "¿Qué pasa después de la entrega?", a: "Ofrecemos planes de mantenimiento y evolución. Los modelos de IA necesitan re-entrenamiento periódico con nuevos datos para mantener su precisión. Incluimos monitorización de rendimiento, actualizaciones y soporte técnico." },
    { q: "¿Trabajáis con startups o solo con grandes empresas?", a: "Trabajamos con ambas. Muchas startups necesitan un MVP con IA para validar su modelo de negocio, y ahí la velocidad importa. Grandes empresas suelen necesitar integrar IA en procesos existentes, y ahí la robustez es clave. Adaptamos el enfoque al contexto." },
  ],
  ctaTitle: "¿Tienes un problema que la IA podría resolver?",
  ctaBody: "Hacemos un discovery gratuito de tu caso. Si la IA es la solución correcta, te presentamos un plan con presupuesto cerrado. Si no lo es, te lo decimos.",
  related: {
    title: "Servicios relacionados",
    links: [
      { href: "/ia/automatizaciones", label: "Automatizaciones" },
      { href: "/ia/agentes", label: "Agentes IA" },
      { href: "/ia/agentes-voz", label: "Agentes de voz" },
      { href: "/web", label: "Creación web" },
    ],
  },
};
