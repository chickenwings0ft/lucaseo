import type { Metadata } from "next";
import Link from "next/link";
import ServiceNav from "../components/ServiceNav";

export const metadata: Metadata = {
  title: "Gracias por contactar | Lucaseo",
  description: "Hemos recibido tu mensaje. Te respondemos en menos de 24 horas con un diagnóstico inicial de tu situación.",
  robots: { index: false, follow: true },
};

const steps = [
  { n: "01", t: "Revisamos tu caso", d: "Analizamos tu web, tu sector y tu competencia antes de contactarte, para que la primera conversación sea útil desde el minuto uno." },
  { n: "02", t: "Te escribimos en 24h", d: "Recibirás un email con un diagnóstico inicial: qué vemos, dónde está la oportunidad y qué haríamos primero." },
  { n: "03", t: "Hablamos sin compromiso", d: "Si encaja, agendamos una llamada de 30 minutos. Sin presión comercial y sin coste." },
];

export default function GraciasPage() {
  return (
    <>
      <ServiceNav />
      <style>{`
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { background: #fff; color: #0a0f1e; font-family: var(--font-body), system-ui, sans-serif; }
        .g-hero { padding: 9rem 2rem 4rem; text-align: center; background: linear-gradient(170deg, #f0f5ff 0%, #ffffff 70%); border-bottom: 1px solid rgba(0,74,173,0.1); }
        .g-inner { max-width: 640px; margin: 0 auto; }
        .g-check { width: 64px; height: 64px; border-radius: 50%; background: #004aad; color: #fff; display: flex; align-items: center; justify-content: center; font-size: 1.75rem; margin: 0 auto 2rem; }
        .g-eyebrow { font-size: 0.75rem; font-weight: 600; color: #004aad; letter-spacing: 0.16em; text-transform: uppercase; margin-bottom: 1.25rem; }
        .g-hero h1 { font-family: var(--font-display), system-ui; font-weight: 800; font-size: clamp(2.25rem, 4.5vw, 3.5rem); line-height: 1.08; letter-spacing: -0.03em; margin-bottom: 1.25rem; text-wrap: balance; }
        .g-lead { font-size: 1.0625rem; color: #5a6480; line-height: 1.7; margin-bottom: 2.25rem; }
        .g-actions { display: flex; gap: 1.5rem; align-items: center; justify-content: center; flex-wrap: wrap; }
        .g-btn { display: inline-block; padding: 0.75rem 1.75rem; background: #004aad; color: #fff; font-weight: 500; font-size: 0.9375rem; text-decoration: none; border-radius: 6px; }
        .g-link { color: #0a0f1e; font-size: 0.9375rem; font-weight: 500; text-decoration: none; }
        .g-link:hover { color: #004aad; }
        .g-next { max-width: 900px; margin: 0 auto; padding: 4.5rem 2rem; }
        .g-next h2 { font-family: var(--font-display), system-ui; font-weight: 700; font-size: 1.5rem; letter-spacing: -0.02em; margin-bottom: 2.5rem; text-align: center; }
        .g-steps { display: grid; grid-template-columns: repeat(3, 1fr); gap: 2.5rem; }
        .g-n { font-family: var(--font-display), system-ui; font-weight: 800; font-size: 0.75rem; letter-spacing: 0.1em; color: #004aad; margin-bottom: 0.875rem; }
        .g-t { font-family: var(--font-display), system-ui; font-weight: 700; font-size: 1.0625rem; margin-bottom: 0.5rem; }
        .g-d { font-size: 0.9375rem; color: #5a6480; line-height: 1.65; font-weight: 300; }
        .g-explore { background: #f5f8ff; border-top: 1px solid rgba(0,74,173,0.1); padding: 4rem 2rem; }
        .g-explore-inner { max-width: 900px; margin: 0 auto; text-align: center; }
        .g-explore h2 { font-family: var(--font-display), system-ui; font-weight: 700; font-size: 1.5rem; letter-spacing: -0.02em; margin-bottom: 0.75rem; }
        .g-explore p { font-size: 0.9375rem; color: #5a6480; margin-bottom: 2rem; }
        .g-tags { display: flex; gap: 0.75rem; justify-content: center; flex-wrap: wrap; }
        .g-tag { background: #fff; border: 1px solid rgba(0,74,173,0.15); border-radius: 999px; padding: 0.5rem 1.25rem; font-size: 0.875rem; font-weight: 500; color: #0a0f1e; text-decoration: none; transition: border-color 0.18s, color 0.18s; }
        .g-tag:hover { border-color: #004aad; color: #004aad; }
        @media (max-width: 768px) { .g-steps { grid-template-columns: 1fr; gap: 2rem; } }
      `}</style>

      <section className="g-hero">
        <div className="g-inner">
          <div className="g-check">✓</div>
          <div className="g-eyebrow">Mensaje recibido</div>
          <h1>Gracias. Ya estamos mirando tu caso.</h1>
          <p className="g-lead">
            Hemos recibido tu mensaje correctamente. Te acabamos de enviar un email de confirmación — si no lo ves en unos minutos, revisa la carpeta de spam.
          </p>
          <div className="g-actions">
            <Link href="/" className="g-btn">Volver al inicio</Link>
            <Link href="/seo" className="g-link">Ver qué hacemos →</Link>
          </div>
        </div>
      </section>

      <div className="g-next">
        <h2>Qué pasa ahora</h2>
        <div className="g-steps">
          {steps.map((s) => (
            <div key={s.n}>
              <div className="g-n">{s.n}</div>
              <div className="g-t">{s.t}</div>
              <p className="g-d">{s.d}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="g-explore">
        <div className="g-explore-inner">
          <h2>Mientras tanto</h2>
          <p>Échale un vistazo a cómo trabajamos cada canal.</p>
          <div className="g-tags">
            <Link href="/seo" className="g-tag">SEO Orgánico</Link>
            <Link href="/sem" className="g-tag">Google Ads</Link>
            <Link href="/rrss" className="g-tag">RRSS & Social Ads</Link>
            <Link href="/web" className="g-tag">Creación Web</Link>
            <Link href="/ia" className="g-tag">Automatizaciones IA</Link>
          </div>
        </div>
      </div>
    </>
  );
}
