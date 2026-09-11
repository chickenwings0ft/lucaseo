// Contenido por defecto. Si Sanity no tiene datos, la web usa esto.

export type LogoAsset = { url: string; w: number; h: number } | null;

export type LandingData = {
  settings: {
    heroEyebrow: string;
    heroHeadline: string; // usa *palabra* para azul
    heroSubtitle: string;
    heroPrimaryCta: string;
    heroSecondaryCta: string;
    servicesTag: string;
    servicesTitle: string;
    servicesBody: string;
    processTag: string;
    processTitle: string;
    processBody: string;
    resultsTag: string;
    resultsTitle: string;
    resultsBody: string;
    clientsTag: string;
    clientsTitle: string;
    clientsBody: string;
    contactTitle: string;
    contactBody: string;
    contactBullets: string[];
    contactEmail: string;
  };
  services: { _id: string; icon?: string; name: string; description: string }[];
  steps: { _id: string; label: string; title: string; description: string }[];
  cases: { _id: string; result: string; context: string; sector?: string }[];
  stats: { _id: string; value: number; suffix?: string; decimal?: boolean; label: string }[];
  clients: {
    _id: string;
    name: string;
    url: string;
    darkBackground?: boolean;
    logo: LogoAsset;
  }[];
};

export const defaults: LandingData = {
  settings: {
    heroEyebrow: "SEO · Ads · RRSS · Web · IA",
    heroHeadline: "Tu negocio merece *más* clientes.",
    heroSubtitle:
      "En internet hay tiburones, peces y negocios que todavía están esperando a ver qué pasa. Nosotros hacemos que el tuyo sea de los primeros. SEO, Ads, redes, webs e inteligencia artificial para conseguir algo bastante sencillo: más clientes, mejor coste y menos tiempo perdido.",
    heroPrimaryCta: "Quiero que mi negocio crezca",
    heroSecondaryCta: "Ver cómo trabajamos",
    servicesTag: "Lo que hacemos",
    servicesTitle: "Todo lo que necesitas para dejar de perseguir clientes.",
    servicesBody:
      "No necesitas contratar cinco agencias, seis freelancers y un primo que \"sabe bastante de Instagram\". Necesitas una estrategia que conecte las piezas.",
    processTag: "Proceso",
    processTitle: "Cero teatro. Cuatro pasos. Vamos al lío.",
    processBody:
      "No creemos en reuniones de tres horas para decidir el color de un botón. Primero entendemos dónde estás. Después decidimos qué merece la pena hacer. Y luego lo hacemos.",
    resultsTag: "Resultados",
    resultsTitle: "Algunos números hablan. Estos tienen historia detrás.",
    resultsBody:
      "No nos interesa enseñarte gráficas que parecen el electrocardiograma de una startup. Nos interesa enseñarte negocios que empezaron con un problema y terminaron con más negocio.",
    clientsTag: "Clientes",
    clientsTitle: "Marcas con las que estamos haciendo ruido.",
    clientsBody: "Hay proyectos que empiezan con una estrategia. Y otros que empiezan con: \"Tenemos un problema. ¿Lo puedes arreglar?\" Nos gustan los dos.",
    contactTitle: "Cuéntanos qué pasa.",
    contactBody:
      "No hace falta que llegues con un briefing perfecto. Cuéntanos qué haces, qué te preocupa y qué te gustaría conseguir.",
    contactBullets: [
      "Te respondemos en menos de 24h",
      "Primera conversación sin coste",
      "Sin compromisos ni contratos eternos",
    ],
    contactEmail: "hola@lucaseo.com",
  },
  services: [
    { _id: "s1", icon: "🔍", name: "SEO Orgánico", description: "Que te encuentren cuando ya te están buscando. Subimos tu negocio en Google para que el próximo cliente no termine en la competencia antes de saber que existes." },
    { _id: "s2", icon: "⚡", name: "SEM & Paid Ads", description: "Ponemos dinero delante de demanda real. Google, Meta, TikTok y nuevas plataformas. Diseñamos campañas para generar ventas y leads, no para presumir de impresiones." },
    { _id: "s3", icon: "📱", name: "Redes Sociales", description: "Contenido que hace algo más que llenar tu feed. Estrategia, creatividad, paid media y storytelling para que tus redes construyan marca y también negocio." },
    { _id: "s4", icon: "🌐", name: "Creación Web", description: "Tu web debería vender mientras tú haces otras cosas. Diseño, copy, desarrollo, SEO y conversión en una sola pieza. Bonita, rápida y con un objetivo claro: que alguien haga clic." },
    { _id: "s5", icon: "🤖", name: "Inteligencia Artificial", description: "Menos trabajo repetido. Más trabajo que importa. Automatizamos procesos, atención, seguimiento, leads, CRM, emails, WhatsApp y todo lo que tu equipo no debería estar haciendo a mano en 2026." },
  ],
  steps: [
    { _id: "p1", label: "01 — Diagnóstico", title: "Miramos lo que está pasando de verdad.", description: "Tu web. Tus rankings. Tus campañas. Tu competencia. Tus números. Buscamos fugas de dinero, oportunidades y las cosas que llevas demasiado tiempo dejando para \"más adelante\"." },
    { _id: "p2", label: "02 — Estrategia", title: "Elegimos dónde atacar.", description: "No hacemos SEO porque toca. No hacemos TikTok porque está de moda. Elegimos canales según tu negocio, tus clientes y dónde está el dinero." },
    { _id: "p3", label: "03 — Ejecución", title: "Aquí es donde desaparecen los PowerPoints.", description: "Creamos, lanzamos, optimizamos, testeamos y corregimos. Marketing real. Ejecutado." },
    { _id: "p4", label: "04 — Optimización", title: "Lo que funciona, se multiplica. Lo que no, se corta.", description: "Medimos lo que importa y tomamos decisiones con datos. Sin casarnos con una táctica solo porque quedó bonita en una reunión." },
  ],
  cases: [
    { _id: "c1", result: "+520%", context: "Clínica dental · Madrid — De 12 a 74 solicitudes de cita al mes en cuatro meses combinando SEO local y Google Ads. No necesitaban más likes. Necesitaban más pacientes.", sector: "Clínica dental · Madrid" },
    { _id: "c2", result: "3,8x ROI", context: "E-commerce · Moda — Por cada euro invertido en Meta Ads, 3,8 € de retorno en ventas directas durante el primer trimestre. La campaña dejó de \"verse bien\" y empezó a vender.", sector: "E-commerce · Moda" },
    { _id: "c3", result: "#1 Google", context: "Despacho de abogados · Barcelona — Posición número 1 para una búsqueda con intención comercial muy alta en cinco meses. Porque aparecer primero para la búsqueda correcta mola bastante más.", sector: "Legal · Barcelona" },
    { _id: "c4", result: "−62% CPA", context: "Empresa de reformas — De 87 € a 33 € por lead después de reestructurar sus campañas de Google Ads. Menos dinero quemado. Más oportunidades entrando.", sector: "Construcción · Reformas" },
  ],
  stats: [
    { _id: "st1", value: 340, suffix: "%", label: "Más tráfico orgánico" },
    { _id: "st2", value: 3.8, suffix: "x", decimal: true, label: "ROI medio en campañas de pago" },
    { _id: "st3", value: 47, suffix: "+", label: "Negocios llevados a primera página" },
    { _id: "st4", value: 90, suffix: " días", label: "Para empezar a ver movimiento real" },
  ],
  clients: [],
};
