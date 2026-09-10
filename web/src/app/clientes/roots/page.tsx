import type { Metadata } from "next";
import Link from "next/link";
import ServiceNav from "../../components/ServiceNav";
import ServiceCta from "../../components/ServiceCta";
import SiteFooter from "../../components/SiteFooter";

export const metadata: Metadata = {
  title: "Roots — Caso de éxito | Lucaseo",
  description: "Cómo ayudamos a Roots con su posicionamiento de marca, presencia digital y estrategia de contenidos.",
};

export default function RootsPage() {
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
          <h1>Roots</h1>
          <p className="case-lead">Una marca con raíces profundas que necesitaba conectar con su comunidad en el mundo digital. Posicionamiento de marca, presencia en redes y contenido con propósito.</p>
          <div className="case-tags">
            <span className="case-tag">Branding</span>
            <span className="case-tag">RRSS</span>
            <span className="case-tag">Contenidos</span>
          </div>
        </div>
      </section>

      <div className="case-iframe-wrap">
        <div className="case-iframe-label">Vista previa de la web</div>
        <iframe src="https://www.roots.es" className="case-iframe" title="Roots — web" loading="lazy" sandbox="allow-scripts allow-same-origin" />
      </div>

      <div className="case-body">
        <h2>El reto</h2>
        <p>Roots tenía una historia poderosa pero no la estaba contando. Su presencia digital era dispersa, sin un hilo narrativo que conectara su propósito con su audiencia. Necesitaban una voz coherente y una estrategia que convirtiera valores en comunidad.</p>

        <h2>La solución</h2>
        <p>Definimos el ADN narrativo de la marca y lo trasladamos a todos los canales digitales. Creamos una estrategia de contenidos basada en storytelling que muestra los valores de Roots a través de historias reales, no de eslóganes. Cada publicación, cada story, cada pieza de contenido refuerza la misma idea central.</p>

        <h2>Los resultados</h2>
        <p>Crecimiento orgánico de comunidad, aumento significativo del engagement y, lo más importante, una marca que ahora tiene una voz reconocible y consistente en todos sus canales. Los seguidores no solo consumen contenido — interactúan, comparten y recomiendan.</p>
      </div>

      <ServiceCta
        title="¿Tu marca tiene una historia por contar?"
        body="Encontramos la narrativa que conecta tu marca con las personas que deberían conocerla."
      />
      <SiteFooter />
    </>
  );
}
