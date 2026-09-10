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
    heroEyebrow: "SEO · SEM · Presencia Digital",
    heroHeadline: "Tu negocio merece *más* clientes.",
    heroSubtitle:
      "Construimos tu presencia digital desde la raíz — posicionamiento orgánico, publicidad de pago y estrategia de marca — para que Google trabaje para ti, no contra ti.",
    heroPrimaryCta: "Quiero más clientes",
    heroSecondaryCta: "Ver servicios",
    servicesTag: "Servicios",
    servicesTitle: "Todo lo que necesitas para dominar tu mercado",
    servicesBody:
      "Trabajamos el canal que más retorno te da, con datos reales y sin tecnicismos. Cada acción tiene un objetivo claro: más clientes para tu negocio.",
    processTag: "Proceso",
    processTitle: "Cómo trabajamos",
    processBody:
      "Sin reuniones eternas ni informes que nadie lee. Diagnóstico rápido, estrategia clara y ejecución con resultados visibles en 90 días.",
    resultsTag: "Resultados reales",
    resultsTitle: "Negocios que ya generan más clientes con nosotros",
    resultsBody:
      "Casos reales de empresas que apostaron por su presencia digital y multiplicaron sus leads en menos de seis meses.",
    clientsTag: "Nuestros clientes",
    clientsTitle: "Negocios que confían en nosotros",
    clientsBody: "Marcas con las que trabajamos su presencia digital día a día.",
    contactTitle: "¿Tu negocio necesita más clientes?",
    contactBody:
      "Cuéntanos tu situación. En menos de 24h te respondemos con un diagnóstico rápido sin compromiso.",
    contactBullets: [
      "Respuesta en menos de 24h",
      "Primera consulta sin coste",
      "Sin compromisos ni contratos largos",
    ],
    contactEmail: "hola@lucaseo.com",
  },
  services: [
    { _id: "s1", icon: "🔍", name: "SEO Orgánico", description: "Optimización técnica, contenido estratégico y link building para que aparezcas cuando tu cliente te está buscando. Sin pagar por cada clic." },
    { _id: "s2", icon: "⚡", name: "Google Ads (SEM)", description: "Campañas de búsqueda, display y Performance Max optimizadas para que cada euro invertido traiga clientes con intención de compra real." },
    { _id: "s3", icon: "📱", name: "Meta & Social Ads", description: "Publicidad en Instagram y Facebook con segmentación precisa y creatividades que convierten. Tu producto frente a quien ya lo quiere comprar." },
    { _id: "s4", icon: "🌐", name: "Creación Web", description: "Diseñamos y desarrollamos webs rápidas, optimizadas para SEO y pensadas para convertir visitas en clientes. Desde landing pages hasta e-commerce, con arquitectura profesional y velocidad de carga que Google premia." },
  ],
  steps: [
    { _id: "p1", label: "01 — Diagnóstico", title: "Auditamos tu situación real", description: "Analizamos tu web, competencia, palabras clave y campañas actuales. Identificamos dónde estás perdiendo clientes y cuánto te está costando." },
    { _id: "p2", label: "02 — Estrategia", title: "Plan de acción en 5 días", description: "Definimos los canales con mejor retorno para tu sector, los KPIs que vamos a mover y el presupuesto necesario. Sin sorpresas." },
    { _id: "p3", label: "03 — Ejecución", title: "Resultados medibles a los 90 días", description: "Implementamos, optimizamos y te informamos cada semana. Dashboard en tiempo real para que veas el progreso sin esperar al informe mensual." },
  ],
  cases: [
    { _id: "c1", result: "+520%", context: "Clínica dental en Madrid — de 12 a 74 solicitudes de cita al mes en 4 meses con SEO local + Google Ads.", sector: "Salud · Clínica Dental" },
    { _id: "c2", result: "3.8x ROI", context: "E-commerce de moda — cada euro invertido en Meta Ads retornó 3,8€ en ventas directas durante el primer trimestre.", sector: "E-commerce · Moda" },
    { _id: "c3", result: "#1 Google", context: 'Despacho de abogados — posición 1 en "abogados laboralistas Barcelona" en 5 meses desde cero, generando 30+ leads/mes.', sector: "Servicios · Legal" },
    { _id: "c4", result: "−62% CPA", context: "Empresa de reformas — redujimos el coste por lead de 87€ a 33€ restructurando sus campañas de Google Ads en 6 semanas.", sector: "Construcción · Reformas" },
  ],
  stats: [
    { _id: "st1", value: 340, suffix: "%", label: "Incremento medio en tráfico orgánico" },
    { _id: "st2", value: 2.4, suffix: "x", decimal: true, label: "ROI medio en campañas de pago" },
    { _id: "st3", value: 47, suffix: "+", label: "Negocios posicionados en primera página" },
    { _id: "st4", value: 90, suffix: " días", label: "Para resultados medibles" },
  ],
  clients: [],
};
