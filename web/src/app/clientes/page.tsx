import type { Metadata } from "next";
import ServiceNav from "../components/ServiceNav";
import ServiceCta from "../components/ServiceCta";
import SiteFooter from "../components/SiteFooter";

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

      <ServiceCta
        title="Tu negocio todavía no está aquí. Perfecto."
        body="La próxima historia puede ser la tuya."
      />
      <SiteFooter />
    </>
  );
}
