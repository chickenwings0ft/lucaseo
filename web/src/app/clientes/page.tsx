import type { Metadata } from "next";
import ServiceNav from "../components/ServiceNav";
import ServiceCta from "../components/ServiceCta";
import SiteFooter from "../components/SiteFooter";
import FaqSection from "../components/FaqSection";

export const metadata: Metadata = {
  title: "Clientes | Lucaseo — Problemas que dejamos de tener",
  description:
    "Casos reales con resultados medibles. SEO, Google Ads, Meta Ads y más para negocios que necesitaban crecer.",
};

const cases = [
  {
    num: "01",
    subtitle: "Una clínica que necesitaba pacientes, no seguidores.",
    sector: "Clínica dental · Madrid",
    problema:
      "Poca visibilidad local y demasiada dependencia de acciones puntuales.",
    hicimos: "SEO local + Google Ads + optimización de conversión.",
    resultado:
      "+520% en solicitudes de cita — De 12 a 74 solicitudes mensuales en cuatro meses.",
    importante: 'No querían "más tráfico". Querían la agenda llena.',
  },
  {
    num: "02",
    subtitle: "Un e-commerce que estaba pagando por vender.",
    sector: "Moda · E-commerce",
    problema:
      "Meta Ads tenía ventas, pero el retorno no era suficiente para escalar.",
    hicimos:
      "Reestructuración de campañas, audiencias, creatividades y optimización continua.",
    resultado:
      "3,8x ROI — Cada euro invertido generó 3,8 € en ventas directas durante el primer trimestre.",
    importante: "No buscábamos impresiones. Buscábamos margen.",
  },
  {
    num: "03",
    subtitle: "Un despacho que quería dejar de ser invisible.",
    sector: "Legal · Barcelona",
    problema: "Competían contra dominios con mucha más autoridad.",
    hicimos:
      "Investigación de demanda, estrategia de contenidos, optimización técnica y autoridad.",
    resultado:
      "#1 en Google — Para una búsqueda con alta intención comercial en cinco meses.",
    importante:
      'No fue cuestión de "escribir más". Fue cuestión de responder mejor.',
  },
  {
    num: "04",
    subtitle: "Una empresa de reformas cansada de pagar 87 € por lead.",
    sector: "Construcción · Reformas",
    problema:
      "Campañas fragmentadas, estructura deficiente y presupuesto desperdiciado.",
    hicimos:
      "Reestructuración completa de Google Ads y optimización de conversiones.",
    resultado: "−62% en CPA — De 87 € a 33 € por lead.",
    importante: "No recortamos presupuesto. Recortamos desperdicio.",
  },
];

const clientesFaqs = [
  { q: "¿Qué tipo de resultados conseguís para vuestros clientes?", a: "Depende del servicio: en SEO, posicionamos keywords que traen tráfico cualificado. En Ads, reducimos el coste por lead y aumentamos conversiones. En redes, construimos comunidad que genera negocio. Cada caso es distinto, pero siempre medimos resultados reales: leads, ventas y ROI, no métricas de vanidad." },
  { q: "¿Cuánto tarda en verse resultados con Lucaseo?", a: "Con Google Ads y Social Ads, desde las primeras semanas. Con SEO, entre 3 y 6 meses para notar movimiento y 6-12 meses para resultados sólidos. Con diseño web, el impacto en conversión se nota desde el día que se lanza la nueva web. Siempre somos transparentes con los plazos." },
  { q: "¿Puedo ver casos reales de clientes?", a: "Sí. En esta misma página puedes ver casos con resultados concretos: qué problema tenía el cliente, qué hicimos y qué conseguimos. No publicamos nombres sin permiso, pero en una conversación privada podemos compartir más detalles." },
  { q: "¿Trabajáis con empresas pequeñas o solo con grandes cuentas?", a: "Principalmente con pymes y negocios que están creciendo. No necesitas un presupuesto enorme para trabajar con nosotros. Lo que necesitas es un negocio con potencial y ganas de mejorar tu presencia digital." },
  { q: "¿Qué sectores conocéis mejor?", a: "Hostelería, servicios profesionales, e-commerce, turismo, formación y servicios locales. Pero no nos limitamos: lo importante es entender cómo funciona tu negocio y dónde están tus clientes. Cada proyecto empieza con una investigación del sector." },
  { q: "¿Cómo puedo ser el próximo caso de éxito?", a: "Contáctanos y cuéntanos tu situación. Te hacemos un diagnóstico gratuito y te decimos qué podemos hacer por ti. Sin presión, sin discurso de ventas. Si encajamos, empezamos." },
];

export default function ClientesPage() {
  return (
    <>
      <ServiceNav />
      <style>{`
        .clients-hero { padding: 9rem 2rem 4rem; background: linear-gradient(168deg, #f0f5ff 0%, #ffffff 68%); border-bottom: 1px solid rgba(0,74,173,0.1); }
        .clients-in { max-width: 900px; margin: 0 auto; }
        .clients-eyebrow { font-size: 0.75rem; font-weight: 600; color: #004aad; letter-spacing: 0.16em; text-transform: uppercase; margin-bottom: 1.5rem; }
        .clients-hero h1 { font-family: var(--font-display); font-weight: 800; font-size: clamp(2.25rem, 5vw, 4rem); line-height: 1.06; letter-spacing: -0.03em; margin-bottom: 1.25rem; }
        .clients-hero h1 em { font-style: normal; color: #004aad; }
        .clients-lead { font-size: 1.125rem; color: #5a6480; line-height: 1.75; max-width: 600px; }

        .cases-wrap { max-width: 1100px; margin: 0 auto; padding: 4rem 2rem; display: flex; flex-direction: column; gap: 2.5rem; }
        .case-card { border: 1px solid rgba(0,74,173,0.12); background: #fff; padding: 2.5rem 3rem; }
        .case-header { display: flex; align-items: baseline; gap: 1rem; margin-bottom: 0.5rem; }
        .case-num { font-size: 0.75rem; font-weight: 700; color: #004aad; letter-spacing: 0.14em; text-transform: uppercase; }
        .case-sector { font-size: 0.8125rem; color: #8b95b0; font-weight: 500; }
        .case-subtitle { font-family: var(--font-display); font-weight: 800; font-size: 1.375rem; letter-spacing: -0.02em; margin-bottom: 2rem; line-height: 1.25; }
        .case-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 2rem 3rem; }
        .case-block-label { font-size: 0.6875rem; font-weight: 700; color: #004aad; letter-spacing: 0.14em; text-transform: uppercase; margin-bottom: 0.5rem; }
        .case-block-text { font-size: 0.9375rem; color: #3a4054; line-height: 1.7; }
        .case-resultado .case-block-text { font-weight: 700; color: #0e1726; }
        .case-importante { grid-column: 1 / -1; border-top: 1px solid rgba(0,74,173,0.08); padding-top: 1.5rem; margin-top: 0.5rem; }
        .case-importante .case-block-text { font-style: italic; color: #5a6480; }

        @media (max-width: 768px) {
          .case-card { padding: 2rem 1.5rem; }
          .case-grid { grid-template-columns: 1fr; gap: 1.5rem; }
        }
      `}</style>

      <section className="clients-hero">
        <div className="clients-in">
          <div className="clients-eyebrow">Clientes</div>
          <h1>
            No enseñamos &ldquo;proyectos&rdquo;.
            <br />
            <em>Enseñamos problemas que dejamos de tener.</em>
          </h1>
          <p className="clients-lead">
            Cada negocio llega con una situación distinta. Pocas visitas. Ads
            caros. Una web que no convierte. Redes que no generan nada.
            Demasiado trabajo manual. Y nuestro trabajo empieza exactamente ahí.
          </p>
        </div>
      </section>

      <div className="cases-wrap">
        {cases.map((c) => (
          <div className="case-card" key={c.num}>
            <div className="case-header">
              <span className="case-num">Caso {c.num}</span>
              <span className="case-sector">{c.sector}</span>
            </div>
            <h2 className="case-subtitle">{c.subtitle}</h2>
            <div className="case-grid">
              <div>
                <div className="case-block-label">El problema</div>
                <p className="case-block-text">{c.problema}</p>
              </div>
              <div>
                <div className="case-block-label">Lo que hicimos</div>
                <p className="case-block-text">{c.hicimos}</p>
              </div>
              <div className="case-resultado">
                <div className="case-block-label">El resultado</div>
                <p className="case-block-text">{c.resultado}</p>
              </div>
              <div>
                <div className="case-block-label">Lo importante</div>
                <p className="case-block-text">{c.importante}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <FaqSection topic="nuestros clientes y resultados" faqs={clientesFaqs} />
      <ServiceCta
        title="Tu negocio todavía no está aquí. Perfecto."
        body="La próxima historia puede ser la tuya."
      />
      <SiteFooter />
    </>
  );
}
