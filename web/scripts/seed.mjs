// Semilla de contenido inicial en Sanity.
// Uso: node scripts/seed.mjs   (lee web/.env.local)
import { createClient } from "@sanity/client";
import { readFileSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, "..");

// Cargar .env.local
const env = Object.fromEntries(
  readFileSync(resolve(root, ".env.local"), "utf8")
    .split("\n")
    .filter((l) => l.includes("="))
    .map((l) => {
      const i = l.indexOf("=");
      return [l.slice(0, i).trim(), l.slice(i + 1).trim()];
    })
);

const client = createClient({
  projectId: env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: "2024-01-01",
  token: env.SANITY_API_TOKEN,
  useCdn: false,
});

async function uploadLogo(file, label) {
  const buf = readFileSync(resolve(root, "public", file));
  const asset = await client.assets.upload("image", buf, { filename: file });
  console.log(`  ↑ ${label} → ${asset._id}`);
  return asset._id;
}

async function run() {
  console.log("Subiendo logos de clientes…");
  const macheta = await uploadLogo("macheta-logo.png", "Macheta");
  const roots = await uploadLogo("roots-logo.png", "Roots");
  const briya = await uploadLogo("briya-logo.png", "Briya");

  const tx = client.transaction();

  // siteSettings (singleton)
  tx.createOrReplace({
    _id: "siteSettings",
    _type: "siteSettings",
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
  });

  const services = [
    ["🔍", "SEO Orgánico", "Optimización técnica, contenido estratégico y link building para que aparezcas cuando tu cliente te está buscando. Sin pagar por cada clic."],
    ["⚡", "Google Ads (SEM)", "Campañas de búsqueda, display y Performance Max optimizadas para que cada euro invertido traiga clientes con intención de compra real."],
    ["📱", "Meta & Social Ads", "Publicidad en Instagram y Facebook con segmentación precisa y creatividades que convierten. Tu producto frente a quien ya lo quiere comprar."],
    ["🌐", "Web Optimizada", "Una web rápida, bien estructurada y diseñada para convertir visitas en leads. Core Web Vitals, velocidad de carga y arquitectura SEO-first."],
    ["📊", "Analytics & Medición", "GA4, píxeles, conversiones y dashboards en tiempo real para que sepas exactamente qué canal te trae clientes y cuánto te cuesta cada uno."],
    ["✍️", "Contenido & SEO Local", "Estrategia de contenidos, Google Business Profile y posicionamiento local para que los clientes de tu zona te encuentren a ti antes que a la competencia."],
  ];
  services.forEach(([icon, name, description], i) =>
    tx.createOrReplace({ _id: `service-${i + 1}`, _type: "service", icon, name, description, order: i })
  );

  const steps = [
    ["01 — Diagnóstico", "Auditamos tu situación real", "Analizamos tu web, competencia, palabras clave y campañas actuales. Identificamos dónde estás perdiendo clientes y cuánto te está costando."],
    ["02 — Estrategia", "Plan de acción en 5 días", "Definimos los canales con mejor retorno para tu sector, los KPIs que vamos a mover y el presupuesto necesario. Sin sorpresas."],
    ["03 — Ejecución", "Resultados medibles a los 90 días", "Implementamos, optimizamos y te informamos cada semana. Dashboard en tiempo real para que veas el progreso sin esperar al informe mensual."],
  ];
  steps.forEach(([label, title, description], i) =>
    tx.createOrReplace({ _id: `step-${i + 1}`, _type: "processStep", label, title, description, order: i })
  );

  const cases = [
    ["+520%", "Clínica dental en Madrid — de 12 a 74 solicitudes de cita al mes en 4 meses con SEO local + Google Ads.", "Salud · Clínica Dental"],
    ["3.8x ROI", "E-commerce de moda — cada euro invertido en Meta Ads retornó 3,8€ en ventas directas durante el primer trimestre.", "E-commerce · Moda"],
    ["#1 Google", 'Despacho de abogados — posición 1 en "abogados laboralistas Barcelona" en 5 meses desde cero, generando 30+ leads/mes.', "Servicios · Legal"],
    ["−62% CPA", "Empresa de reformas — redujimos el coste por lead de 87€ a 33€ restructurando sus campañas de Google Ads en 6 semanas.", "Construcción · Reformas"],
  ];
  cases.forEach(([result, context, sector], i) =>
    tx.createOrReplace({ _id: `case-${i + 1}`, _type: "caseStudy", result, context, sector, order: i })
  );

  const stats = [
    [340, "%", false, "Incremento medio en tráfico orgánico"],
    [2.4, "x", true, "ROI medio en campañas de pago"],
    [47, "+", false, "Negocios posicionados en primera página"],
    [90, " días", false, "Para resultados medibles"],
  ];
  stats.forEach(([value, suffix, decimal, label], i) =>
    tx.createOrReplace({ _id: `stat-${i + 1}`, _type: "stat", value, suffix, decimal, label, order: i })
  );

  const clients = [
    ["Macheta Smash Burger", "https://macheta.es", macheta, false],
    ["Roots", "https://rootsrioja.com", roots, false],
    ["Briya Exterior Cleaning", "https://briya.com.au", briya, true],
  ];
  clients.forEach(([name, url, assetId, darkBackground], i) =>
    tx.createOrReplace({
      _id: `client-${i + 1}`,
      _type: "client",
      name,
      url,
      darkBackground,
      order: i,
      logo: { _type: "image", asset: { _type: "reference", _ref: assetId } },
    })
  );

  await tx.commit();
  console.log("✓ Contenido inicial creado en Sanity.");
}

run().catch((e) => {
  console.error(e.message || e);
  process.exit(1);
});
