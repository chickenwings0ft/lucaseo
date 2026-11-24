// Online invoices live at /invoice/[ref]. Edit everything here — the page just renders it.
// To add another client, add an entry to `invoices` with a new, hard-to-guess `ref`.
//
// ⚠ DRAFT: amounts follow what was agreed verbally (set-up A$597 + Ads A$597/month, month 1 billed with the set-up; Meta optional +A$347/month); confirm before sending. Same for the payment
// details and Lucaseo's ABN. Set `status` to "sent" once the numbers are final.

export type InvoiceLang = "es" | "en";
export type InvoiceStatus = "draft" | "sent" | "paid";

export interface InvoiceLine {
  number: string;
  title: string;
  summary: string;
  includes: string[];
  /** Optional labelled chips, e.g. the proposed page structure of a website. */
  chips?: { label: string; items: string[] };
  /** One-off amount in AUD, excluding GST. */
  price?: number;
  /** Estimated hours of work for this item. */
  hours?: number;
}

export interface RecurringLine {
  title: string;
  summary: string;
  includes: string[];
  /** Monthly management fee in AUD, excluding GST. */
  fromPrice: number;
  /** Length of the management agreement, in months. */
  months: number;
  /** Bill month 1 of management on this invoice, together with the set-up. */
  firstMonthNow?: boolean;
  /** Hours per month for each entry in `includes` (same order). */
  includeHours?: number[];
  note: string;
}

export interface AddonLine {
  title: string;
  summary: string;
  includes: string[];
  /** Extra monthly fee in AUD, excluding GST. */
  price: number;
  /** Hours per month for each entry in `includes` (same order). */
  includeHours?: number[];
  note: string;
}

export interface InvoicePlan {
  tag: string;
  heading: string;
  intro: string;
  stats: { value: string; label: string }[];
  phases: { when: string; title: string; text: string }[];
  note: string;
}

export interface InvoiceReferences {
  tag: string;
  heading: string;
  intro: string;
  sites: { name: string; url: string; note: string }[];
  note: string;
}

export interface Invoice {
  ref: string;
  lang: InvoiceLang;
  number: string;
  status: InvoiceStatus;
  issueDate: string;
  dueDate: string;
  /** 0.1 = 10% GST added on top of the amounts. Set to 0 to hide the GST line. */
  gstRate: number;
  title: string;
  subtitle: string;
  from: { name: string; location: string; email: string; abn?: string };
  to: { name: string; site: string; email: string; phone: string; abn?: string; logo?: string };
  /** The headline campaign plan, shown near the top of the invoice. */
  plan?: InvoicePlan;
  why: { heading: string; body: string[] };
  /** Live previews of well-designed sites in the client's sector, shown as scaled iframes. */
  references?: InvoiceReferences;
  /** One closed price for the website + launch set-up (items 01–04), in AUD excluding GST. */
  bundle: { label: string; price: number };
  website: InvoiceLine;
  launch: InvoiceLine[];
  recurring: RecurringLine;
  /** Optional extras the client can add; shown in Part 3 and the summary, not included in the totals. */
  addons?: AddonLine[];
  payment: { accountName?: string; bsb?: string; accountNumber?: string; payId?: string; reference: string };
  terms: string[];
}

export const invoices: Invoice[] = [
  {
    ref: "costa-casa-7k2m9x",
    lang: "es",
    number: "LUC-2026-001",
    status: "draft",
    issueDate: "2026-11-21",
    dueDate: "2026-12-05",
    gstRate: 0,
    title: "Google Ads y web nueva para captar clientes desde el primer mes",
    subtitle:
      "Una campaña de Google Ads de tres meses para construir una lista de clientes en Gold Coast y Northern NSW, apoyada en una web nueva, más fresca y premium, diseñada para convertir cada clic en una solicitud de presupuesto.",
    from: {
      name: "Lucaseo",
      location: "Gold Coast, Queensland, Australia",
      email: "hola@lucaseo.com",
      abn: undefined,
    },
    to: {
      name: "Costa Casa — Kitchen & Bathroom Renovations",
      site: "costacasa.com.au",
      email: "info@costacasa.com.au",
      phone: "0489 925 593",
      abn: "63 697 106 326",
      logo: "/costa-casa-logo.webp",
    },
    plan: {
      tag: "El plan",
      heading: "Tres meses de Google Ads para construir vuestra lista de clientes",
      intro:
        "El objetivo de este proyecto es claro: conseguir llamadas y solicitudes de presupuesto de personas que están buscando ahora mismo reformar su cocina, su baño o su lavadero. Durante los tres primeros meses, Google Ads es el motor que trae esas búsquedas; la web nueva es donde esas visitas se convierten en clientes.",
      stats: [
        { value: "A$300–400 / mes", label: "Inversión recomendada en anuncios, pagada directamente a Google" },
        { value: "A$597 / mes", label: "Gestión de las campañas por Lucaseo" },
        { value: "3 meses", label: "Duración de la gestión incluida en este acuerdo" },
      ],
      phases: [
        {
          when: "Mes 1",
          title: "Lanzamiento",
          text: "Campañas activas, conversiones medidas desde el primer clic y primeras solicitudes de presupuesto entrando.",
        },
        {
          when: "Mes 2",
          title: "Optimización",
          text: "Ajustamos palabras clave, anuncios y pujas según qué búsquedas traen clientes reales y cuáles no.",
        },
        {
          when: "Mes 3",
          title: "Consolidación",
          text: "Concentramos la inversión en lo que mejor funciona y cerramos con un informe de resultados y próximos pasos.",
        },
      ],
      note: "La inversión en anuncios es orientativa: la ajustamos juntos según los resultados y no forma parte de esta propuesta.",
    },
    why: {
      heading: "Por qué una web nueva",
      body: [
        "La web actual usa un CMS cerrado que limita la velocidad, el SEO y la medición de llamadas y presupuestos.",
        "La rehacemos sobre el mismo dominio, más rápida y con una imagen fresca y premium a la altura de vuestras reformas, conservando proyectos y redirigiendo las URLs antiguas para no perder visibilidad. Además, es la base de Google Ads: cada anuncio necesita una página rápida y convincente a la que llegar.",
      ],
    },
    references: {
      tag: "Referencias",
      heading: "El nivel de web que buscamos",
      intro:
        "Tres empresas de reformas de la zona con webs bien diseñadas y optimizadas: imagen premium, proyectos como protagonistas, llamadas a la acción claras y la confianza visible desde el primer momento. Es la línea en la que trabajaremos para Costa Casa — con su propia identidad, no una copia.",
      sites: [
        {
          name: "4D Renovations",
          url: "https://www.4drenovations.com.au/",
          note: "Imagen y vídeo de proyectos a pantalla completa, un posicionamiento clarísimo (reformas de lujo en Gold Coast) y botones de contacto y de proyectos desde el primer pantallazo.",
        },
        {
          name: "Intrend Bathrooms",
          url: "https://intrendbathrooms.com.au/",
          note: "Tipografía elegante y una paleta suave que transmite lujo, la consulta gratuita como llamada a la acción principal y las reseñas de Google justo debajo para generar confianza.",
        },
        {
          name: "Smith & Sons — Gold Coast Central & South",
          url: "https://www.smithandsons.com.au/renovation-builder/gold-coast-central-south-683/",
          note: "Una página pensada para una zona concreta: teléfono y contacto visibles al instante, premios y testimonios arriba. Justo el tipo de página que funciona como destino de Google Ads.",
        },
      ],
      note: "Vistas previas en directo. Cambia de web con las pestañas y pulsa la vista previa para abrirla completa.",
    },
    bundle: { label: "Nueva web + puesta en marcha (01–04)", price: 597 },
    website: {
      number: "01",
      hours: 8.5,
      title: "Nueva web — diseño, desarrollo y lanzamiento",
      summary:
        "Una web nueva construida desde cero sobre vuestro dominio actual, con un estilo visual mucho más fresco y premium, pensado para el sector de las reformas de alta calidad: rápida, pensada primero para móvil y gestionada por Lucaseo.",
      includes: [
        "Diseño a medida, fresco y premium, pensado para el sector de las reformas: vuestros proyectos como protagonistas, tipografía elegante y una estética que transmite la calidad de vuestro trabajo",
        "Desarrollo responsive, mobile-first y optimizado para velocidad (Core Web Vitals)",
        "Páginas dedicadas a reformas de cocinas, baños y lavaderos, además de alicatado, impermeabilización y microcemento",
        "Galería de proyectos con imágenes optimizadas, usando vuestras fotos actuales",
        "Formulario de presupuesto gratuito con protección anti-spam y aviso inmediato por email",
        "Botón de llamada directa y sección de zona de servicio: Gold Coast y Northern NSW",
        "Migración de los textos, fotos y datos de contacto existentes",
        "HTTPS, cabeceras de seguridad y puesta en marcha del hosting",
        "Cambio de dominio en costacasa.com.au con redirecciones 301 de todas las URLs antiguas",
        "Pruebas en distintos dispositivos antes del lanzamiento y revisión posterior",
      ],
      chips: {
        label: "Estructura de páginas propuesta",
        items: [
          "Inicio",
          "Reformas de cocinas",
          "Reformas de baños",
          "Reformas de lavaderos",
          "Alicatado · Impermeabilización · Microcemento",
          "Proyectos",
          "Pide presupuesto gratis",
          "Política de privacidad",
        ],
      },
    },
    launch: [
      {
        number: "02",
        hours: 1.5,
        title: "Analítica — GA4 y Google Search Console",
        summary: "Todo lo necesario para ver qué hace la web desde la primera visita, en cuentas que son propiedad de Costa Casa.",
        includes: [
          "Propiedad de Google Analytics 4 y flujo de datos web creados en la cuenta de Google de Costa Casa",
          "Seguimiento de envíos del formulario de presupuesto, clics en el teléfono y clics en el email",
          "Solicitudes de presupuesto y llamadas configuradas como conversiones",
          "Google Search Console verificado a nivel de dominio",
          "Sitemap XML enviado y seguimiento de la indexación durante el lanzamiento",
          "Revisión de indexación web antigua vs. nueva: cobertura, redirecciones y errores de rastreo",
          "Banner de cookies para que el seguimiento cumpla con la privacidad",
          "Acceso compartido con Costa Casa y Lucaseo; la propiedad siempre es vuestra",
        ],
      },
      {
        number: "03",
        hours: 1.25,
        title: "Base SEO",
        summary: "SEO básico on-page y técnico para que la web nueva nazca lista para posicionar. Es una base, no una iguala continua de SEO.",
        includes: [
          "Investigación de palabras clave para búsquedas de reformas de cocina, baño y lavadero en Gold Coast y Northern NSW",
          "Title tags, meta descriptions y estructura de encabezados únicos en cada página",
          "Estructura de URLs limpia, enlazado interno, y texto alternativo y compresión de imágenes",
          "Datos estructurados LocalBusiness y Service (schema markup)",
          "robots.txt y sitemap XML",
          "Revisión de velocidad y Core Web Vitals",
          "Revisión del Perfil de Empresa de Google: datos, servicios y zona de servicio alineados con la web nueva",
        ],
      },
      {
        number: "04",
        hours: 2,
        title: "Google Ads — configuración completa",
        summary: "Un lanzamiento completo de Google Ads, listo para generar solicitudes de presupuesto en cuanto la web nueva salga en vivo.",
        includes: [
          "Cuenta de Google Ads creada (o auditada, si ya existe) a nombre de Costa Casa, con la facturación configurada",
          "Seguimiento de conversiones de formularios de presupuesto y llamadas, vinculado a GA4",
          "Investigación de palabras clave y estructura de cuenta: campañas separadas para cocinas, baños y lavaderos",
          "Campañas de búsqueda segmentadas a Gold Coast y Northern NSW, con ubicación, horarios y presupuesto",
          "Anuncios adaptables de búsqueda para cada servicio, con extensiones de enlaces, llamada, ubicación y texto destacado",
          "Listas de palabras clave negativas para reducir el gasto desperdiciado",
          "Estrategia de pujas y plan de presupuesto diario acordados con Costa Casa",
          "Páginas de destino de la web nueva alineadas con cada campaña",
          "Revisión previa, lanzamiento y monitorización durante la primera semana",
        ],
      },
    ],
    recurring: {
      title: "Gestión de Google Ads — 3 meses",
      summary: "Gestión continua de las campañas durante los tres primeros meses, facturada mes a mes. El primer mes se paga al inicio, junto con la puesta en marcha.",
      includes: [
        "Monitorización y optimización continua de campañas, pujas y presupuestos",
        "Revisión de términos de búsqueda y gestión de palabras clave negativas",
        "Pruebas de textos de anuncios y de páginas de destino",
        "Seguimiento de conversiones y control de la calidad de los contactos",
        "Informe mensual en lenguaje claro: llamadas, solicitudes de presupuesto y coste por contacto",
        "Acceso directo a Lucas para dudas y estrategia",
      ],
      fromPrice: 597,
      includeHours: [5, 2.5, 2.5, 1.5, 1, 0.75],
      months: 3,
      firstMonthNow: true,
      note: "La inversión en anuncios (recomendada: A$300–400 al mes) la paga Costa Casa directamente a Google y no está incluida en esta cuota.",
    },
    addons: [
      {
        title: "Anuncios en Facebook e Instagram",
        summary: "Si queréis llegar también a quien todavía no está buscando, añadimos campañas en Meta para mostrar vuestros proyectos a propietarios de la zona en Facebook e Instagram.",
        includes: [
          "Configuración del Business Manager, el píxel de Meta y la medición de contactos",
          "Campañas con vuestras fotos y vídeos de proyectos: antes y después, reformas terminadas",
          "Público de propietarios en Gold Coast y Northern NSW, más retargeting de quien ya ha visitado la web",
          "Formularios de contacto y anuncios que llevan a la web nueva",
          "Optimización continua y resultados incluidos en el informe mensual",
        ],
        price: 347,
        includeHours: [1, 2.5, 1.5, 1, 1.75],
        note: "Opcional. Se suma a la gestión de Google Ads durante los mismos meses. La inversión en anuncios de Meta la paga Costa Casa directamente a Meta y no está incluida.",
      },
    ],
    payment: {
      accountName: undefined,
      bsb: undefined,
      accountNumber: undefined,
      payId: undefined,
      reference: "LUC-2026-001",
    },
    terms: [
      "Para aceptar la propuesta basta con confirmarlo por escrito (email o WhatsApp). Al aceptarla emitiremos la factura del pago inicial y empezaremos el trabajo.",
      "Todos los importes están en dólares australianos (AUD).",
      "La inversión publicitaria de Google Ads la factura Google directamente a Costa Casa y es independiente de la cuota de gestión de Lucaseo.",
      "El dominio costacasa.com.au sigue siendo propiedad de Costa Casa. Lucaseo necesitará acceso al registrador del dominio o al DNS para completar el cambio.",
      "Costa Casa facilita su logo, fotos de proyectos, aprobación de contenidos y acceso a las cuentas de Google correspondientes (Ads, Analytics, Search Console, Perfil de Empresa).",
      "Los costes de terceros, como la renovación del dominio o herramientas de pago, no están incluidos salvo que se indique.",
      "La gestión de Google Ads tiene una duración de 3 meses y se factura mensualmente: el primer mes se paga al aceptar la propuesta, junto con la puesta en marcha, y los meses 2 y 3 al inicio de cada mes.",
      "La inversión recomendada en anuncios (A$300–400 al mes) es orientativa y puede ajustarse de mutuo acuerdo según los resultados.",
    ],
  },
];

export function getInvoice(ref: string): Invoice | undefined {
  return invoices.find((i) => i.ref === ref);
}
