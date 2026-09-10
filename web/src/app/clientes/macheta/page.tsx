import type { Metadata } from "next";
import Link from "next/link";
import ServiceNav from "../../components/ServiceNav";
import ServiceCta from "../../components/ServiceCta";
import SiteFooter from "../../components/SiteFooter";

export const metadata: Metadata = {
  title: "Macheta — Caso de éxito | Lucaseo",
  description: "Cómo ayudamos a Macheta con su estrategia digital completa: web, SEO local y redes sociales que llenan mesas.",
};

export default function MachetaPage() {
  return (
    <>
      <ServiceNav />
      <style>{`
        .case-hero { padding: 9rem 2rem 3rem; background: linear-gradient(168deg, #f0f5ff 0%, #ffffff 68%); border-bottom: 1px solid rgba(0,74,173,0.1); }
        .case-in { max-width: 900px; margin: 0 auto; }
        .case-back { font-size: 0.875rem; color: #5a6480; text-decoration: none; display: inline-flex; align-items: center; gap: 0.5rem; margin-bottom: 2rem; }
        .case-back:hover { color: #004aad; }
        .case-eyebrow { font-size: 0.75rem; font-weight: 600; color: #004aad; letter-spacing: 0.16em; text-transform: uppercase; margin-bottom: 1rem; }
        .case-hero h1 { font-family: var(--font-display); font-weight: 800; font-size: clamp(2rem, 4vw, 3.5rem); letter-spacing: -0.03em; margin-bottom: 1.25rem; }
        .case-lead { font-size: 1.0625rem; color: #5a6480; line-height: 1.75; max-width: 620px; margin-bottom: 1.5rem; }
        .case-tags { display: flex; gap: 0.5rem; flex-wrap: wrap; }
        .case-tag { font-size: 0.8125rem; font-weight: 500; color: #004aad; background: rgba(0,74,173,0.07); padding: 0.35rem 0.875rem; border-radius: 999px; }
        .case-iframe-wrap { max-width: 1100px; margin: 0 auto; padding: 3rem 2rem; }
        .case-iframe-label { font-size: 0.75rem; font-weight: 600; letter-spacing: 0.14em; text-transform: uppercase; color: #004aad; margin-bottom: 1rem; }
        .case-iframe { width: 100%; height: 700px; border: 1px solid rgba(0,74,173,0.15); border-radius: 8px; background: #f5f8ff; }
        .case-body { max-width: 800px; margin: 0 auto; padding: 3rem 2rem 4rem; }
        .case-body h2 { font-family: var(--font-display); font-weight: 700; font-size: 1.5rem; letter-spacing: -0.02em; margin-bottom: 1rem; margin-top: 2.5rem; }
        .case-body p { font-size: 1rem; color: #3d4661; line-height: 1.8; margin-bottom: 1rem; }
        @media (max-width: 768px) { .case-iframe { height: 500px; } }
      `}</style>

      <section className="case-hero">
        <div className="case-in">
          <Link href="/clientes" className="case-back">&larr; Todos los clientes</Link>
          <div className="case-eyebrow">Caso de éxito</div>
          <h1>Macheta</h1>
          <p className="case-lead">Restaurante con identidad propia que necesitaba trasladar su personalidad al mundo digital. Estrategia completa: web, SEO local y redes sociales que convierten visitas online en reservas reales.</p>
          <div className="case-tags">
            <span className="case-tag">Web</span>
            <span className="case-tag">SEO Local</span>
            <span className="case-tag">RRSS</span>
          </div>
        </div>
      </section>

      <div className="case-iframe-wrap">
        <div className="case-iframe-label">Vista previa de la web</div>
        <iframe src="https://www.macheta.es" className="case-iframe" title="Macheta — web" loading="lazy" sandbox="allow-scripts allow-same-origin" />
      </div>

      <div className="case-body">
        <h2>El reto</h2>
        <p>Macheta tenía una identidad gastronómica potente pero su presencia digital no la reflejaba. Su web anterior era una plantilla genérica que no transmitía la experiencia del restaurante, y su posicionamiento en Google Maps era prácticamente inexistente frente a la competencia local.</p>

        <h2>La solución</h2>
        <p>Diseñamos una web que respira la esencia de Macheta: auténtica, con carácter, sin artificios. Optimizamos su perfil de Google Business para que apareciera en las búsquedas locales de su zona, y creamos una estrategia de redes sociales que muestra el día a día del restaurante con un tono cercano y genuino.</p>

        <h2>Los resultados</h2>
        <p>Incremento significativo en las reservas online, mejora sustancial en la visibilidad en Google Maps y una comunidad en redes que crece de forma orgánica. La web se convirtió en un reflejo fiel de lo que el cliente encuentra cuando cruza la puerta.</p>
      </div>

      <ServiceCta
        title="¿Quieres resultados parecidos?"
        body="Cada negocio es diferente, pero el enfoque es el mismo: entender tu caso, diseñar una estrategia y ejecutar hasta ver resultados."
      />
      <SiteFooter />
    </>
  );
}
