import type { Metadata } from "next";
import ServiceNav from "../components/ServiceNav";
import ServiceCta from "../components/ServiceCta";
import SiteFooter from "../components/SiteFooter";
import IaServicesGrid from "../components/IaServicesGrid";

export const metadata: Metadata = {
  title: "Automatizaciones de IA | Lucaseo — Trabaja menos, cierra más",
  description: "Automatizamos los procesos repetitivos de tu negocio con Inteligencia Artificial. CRM, leads, emails y atención al cliente en piloto automático.",
};

const useCases = [
  { sector: "Clínica o consulta", before: "20 minutos de trabajo manual por solicitud.", after: "La IA recoge la información, cualifica, agenda y envía confirmaciones." },
  { sector: "Inmobiliaria", before: "Leads entrando desde varios canales y seguimiento inconsistente.", after: "Lead capturado, CRM actualizado y seguimiento activado automáticamente." },
  { sector: "Academia o formación", before: "WhatsApp sin responder durante horas.", after: "Respuesta inmediata, información del curso y captura de datos." },
  { sector: "E-commerce", before: "Carritos abandonados que desaparecen.", after: "Automatizaciones de recuperación y seguimiento sin intervención manual." },
];

const tools = ["n8n", "Make (Integromat)", "Zapier", "OpenAI / GPT-4", "HubSpot", "Pipedrive", "ActiveCampaign", "WhatsApp Business API", "Notion", "Airtable", "Google Sheets", "Slack"];

const faqs = [
  { q: "¿Necesito conocimientos técnicos para gestionar estas automatizaciones?", a: "No. Diseñamos las automatizaciones de forma que funcionen solas una vez configuradas. Te formamos para que puedas ver los resultados, ajustar mensajes básicos y entender el sistema. Para cambios más profundos, estamos nosotros." },
  { q: "¿Con qué herramientas trabajáis?", a: "Trabajamos principalmente con n8n y Make para las automatizaciones, OpenAI/GPT-4 para los componentes de IA generativa, y nos integramos con prácticamente cualquier CRM, plataforma de email o app que uses. Si tiene API, lo podemos conectar." },
  { q: "¿Cuánto tiempo tarda en implementarse una automatización?", a: "Depende de la complejidad. Un flujo sencillo — como captura de lead y envío de email de bienvenida — puede estar listo en 1–2 días. Una integración completa CRM + chatbot + secuencias de nurturing, entre 2 y 4 semanas." },
  { q: "¿La IA puede equivocarse o dar información incorrecta a mis clientes?", a: "Sí, si no está bien configurada. Por eso entrenamos cada chatbot con conocimiento específico de tu negocio y establecemos límites claros: cuando la IA no sabe algo, no inventa — escala al humano. El chatbot nunca actúa sin supervisión para decisiones críticas." },
  { q: "¿Qué retorno puedo esperar de las automatizaciones?", a: "Depende del proceso que automatices. Un chatbot de cualificación puede ahorrar 10–15 horas semanales del equipo. Una secuencia de email para carritos abandonados puede recuperar el 15–20% de las ventas perdidas. Lo medimos todo desde el principio para que el retorno sea cuantificable." },
];

export default function IaPage() {
  return (
    <>
      <ServiceNav />
      <style>{`
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { background: #fff; color: #0a0f1e; font-family: var(--font-body), system-ui, sans-serif; }
        .hero { padding: 10rem 2.5rem 6rem; background: linear-gradient(160deg, #f0fff8 0%, #ffffff 60%); border-bottom: 1px solid rgba(0,74,173,0.1); }
        .hero-inner { max-width: 900px; margin: 0 auto; }
        .eyebrow { display: inline-flex; align-items: center; gap: 0.5rem; font-size: 0.8125rem; font-weight: 500; color: #004aad; letter-spacing: 0.12em; text-transform: uppercase; margin-bottom: 1.75rem; }
        .eyebrow::before { content: ''; display: block; width: 24px; height: 1px; background: #004aad; }
        h1 { font-family: var(--font-display), system-ui; font-weight: 800; font-size: clamp(2.75rem, 6vw, 5.5rem); line-height: 1.02; letter-spacing: -0.03em; margin-bottom: 1.75rem; text-wrap: balance; }
        h1 em { font-style: normal; color: #004aad; }
        .hero-lead { font-size: 1.1875rem; color: #5a6480; max-width: 600px; line-height: 1.75; margin-bottom: 2.5rem; font-weight: 300; }
        .hero-actions { display: flex; gap: 1rem; flex-wrap: wrap; }
        .btn { display: inline-block; padding: 0.75rem 1.75rem; background: #004aad; color: #fff; font-weight: 500; font-size: 0.9375rem; text-decoration: none; border-radius: 6px; transition: opacity 0.2s; }
        .btn:hover { opacity: 0.87; }
        .btn-ghost { background: transparent; color: #004aad; border: 1px solid rgba(0,74,173,0.3); }
        .wrap { max-width: 1100px; margin: 0 auto; padding: 5rem 2.5rem; }
        .tag { font-size: 0.75rem; font-weight: 500; letter-spacing: 0.14em; text-transform: uppercase; color: #004aad; margin-bottom: 1rem; }
        h2 { font-family: var(--font-display), system-ui; font-weight: 700; font-size: clamp(1.875rem, 3vw, 2.75rem); letter-spacing: -0.03em; line-height: 1.1; margin-bottom: 1.25rem; text-wrap: balance; }
        .lead { font-size: 1.0625rem; color: #5a6480; max-width: 580px; line-height: 1.75; font-weight: 300; }
        .cases-section { background: #0a0f1e; color: #fff; }
        .cases-section h2 { color: #fff; }
        .cases-section .lead { color: rgba(255,255,255,0.6); max-width: 100%; }
        .cases-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; margin-top: 3.5rem; }
        .case-card { border: 1px solid rgba(255,255,255,0.08); border-radius: 12px; padding: 2rem; }
        .c-sector { font-size: 0.8125rem; font-weight: 600; color: rgba(0,74,173,0.8); background: rgba(0,74,173,0.15); display: inline-block; padding: 0.2rem 0.75rem; border-radius: 20px; margin-bottom: 1.5rem; }
        .c-row { margin-bottom: 1rem; }
        .c-label { font-size: 0.75rem; font-weight: 600; letter-spacing: 0.08em; text-transform: uppercase; margin-bottom: 0.375rem; }
        .c-before .c-label { color: rgba(204,51,0,0.8); }
        .c-after .c-label { color: rgba(0,180,100,0.8); }
        .c-text { font-size: 0.9rem; line-height: 1.6; color: rgba(255,255,255,0.6); font-weight: 300; }
        .tools-section { background: #f5f8ff; border-top: 1px solid rgba(0,74,173,0.1); border-bottom: 1px solid rgba(0,74,173,0.1); }
        .tools-grid { display: flex; flex-wrap: wrap; gap: 0.75rem; margin-top: 2rem; }
        .tool-badge { background: #fff; border: 1px solid rgba(0,74,173,0.15); border-radius: 8px; padding: 0.5rem 1rem; font-size: 0.875rem; font-weight: 500; color: #0a0f1e; }
        .faq-wrap { max-width: 760px; margin: 0 auto; padding: 5rem 2.5rem; }
        .faq-item { border-bottom: 1px solid rgba(0,74,173,0.1); padding: 2rem 0; }
        .faq-q { font-family: var(--font-display), system-ui; font-weight: 700; font-size: 1.0625rem; margin-bottom: 0.875rem; }
        .faq-a { font-size: 0.9375rem; color: #5a6480; line-height: 1.75; font-weight: 300; }
        .process-section { background: #fff; border-top: 1px solid rgba(0,74,173,0.1); border-bottom: 1px solid rgba(0,74,173,0.1); }
        .steps { display: grid; grid-template-columns: repeat(4, 1fr); gap: 2rem; margin-top: 3.5rem; }
        .step-n { font-family: var(--font-display), system-ui; font-weight: 800; font-size: 1.75rem; color: rgba(0,74,173,0.15); letter-spacing: -0.04em; margin-bottom: 0.875rem; }
        .step-t { font-family: var(--font-display), system-ui; font-weight: 700; font-size: 1rem; margin-bottom: 0.5rem; }
        .step-d { font-size: 0.875rem; color: #5a6480; line-height: 1.65; font-weight: 300; }
        @media (max-width: 768px) {
          .cases-grid { grid-template-columns: 1fr; }
          .steps { grid-template-columns: 1fr 1fr; }
        }
      `}</style>

      {/* HERO */}
      <section className="hero">
        <div className="hero-inner">
          <div className="eyebrow">Automatizaciones de IA</div>
          <h1>Tu equipo no debería pasar el día haciendo cosas que <em>una máquina puede hacer en segundos.</em></h1>
          <p className="hero-lead">
            Responder lo mismo. Copiar datos. Actualizar un CRM. Perseguir leads. Mandar recordatorios. Preparar informes. Clasificar correos. Eso no necesita más horas. Necesita mejor sistema.
          </p>
          <div className="hero-actions">
            <a href="/#contacto" className="btn">Quiero automatizar mi negocio</a>
            <a href="#casos" className="btn btn-ghost">Ver casos reales</a>
          </div>
        </div>
      </section>

      {/* COPY BLOQUE */}
      <div className="wrap" style={{ borderBottom: "1px solid rgba(0,74,173,0.1)" }}>
        <div className="tag">La idea</div>
        <h2>La IA no viene a quitarte trabajo.<br />Viene a quitarte el trabajo que nunca quisiste hacer.</h2>
        <p className="lead">
          La combinamos con automatización, CRM y tus herramientas actuales para crear sistemas que funcionan incluso cuando tu equipo está ocupado. O de vacaciones. Especialmente de vacaciones.
        </p>
      </div>

      {/* SERVICIOS IA */}
      <div className="wrap">
        <div className="tag">Servicios de IA</div>
        <h2>Diez formas de quitar trabajo de la mesa.</h2>
        <IaServicesGrid />
      </div>

      {/* CASOS DE USO */}
      <div className="cases-section" id="casos">
        <div className="wrap">
          <div className="tag" style={{ color: "rgba(255,255,255,0.4)" }}>Casos de uso reales</div>
          <h2>Antes y después.</h2>
          <div className="cases-grid">
            {useCases.map(u => (
              <div className="case-card" key={u.sector}>
                <span className="c-sector">{u.sector}</span>
                <div className="c-row c-before">
                  <div className="c-label">Antes</div>
                  <p className="c-text">{u.before}</p>
                </div>
                <div className="c-row c-after">
                  <div className="c-label">Después</div>
                  <p className="c-text">{u.after}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* HERRAMIENTAS */}
      <div className="tools-section">
        <div className="wrap">
          <div className="tag">Tecnología</div>
          <h2>La herramienta importa menos que el sistema.</h2>
          <p className="lead">Trabajamos con herramientas como:</p>
          <div className="tools-grid">
            {tools.map(t => <span className="tool-badge" key={t}>{t}</span>)}
          </div>
        </div>
      </div>

      {/* PROCESO */}
      <div className="process-section">
        <div className="wrap">
          <div className="tag">Cómo trabajamos</div>
          <h2>De &quot;esto lo hacemos a mano&quot; a &quot;esto se hace solo&quot;.</h2>
          <div className="steps">
            {[
              { n: "01", t: "Mapeamos", d: "Encontramos tareas repetitivas." },
              { n: "02", t: "Diseñamos", d: "Decidimos qué automatizar y dónde debe entrar una persona." },
              { n: "03", t: "Construimos", d: "Integramos las herramientas y creamos el sistema." },
              { n: "04", t: "Monitorizamos", d: "Lo lanzamos, medimos y ajustamos." },
            ].map(s => (
              <div key={s.n}>
                <div className="step-n">{s.n}</div>
                <div className="step-t">{s.t}</div>
                <p className="step-d">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ */}
      <div className="faq-wrap">
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <div className="tag">FAQ</div>
          <h2>Todo lo que necesitas saber<br />sobre automatización con IA</h2>
        </div>
        {faqs.map(f => (
          <div className="faq-item" key={f.q}>
            <div className="faq-q">{f.q}</div>
            <p className="faq-a">{f.a}</p>
          </div>
        ))}
      </div>

      <ServiceCta
        title="¿Cuántas horas está perdiendo tu equipo en cosas que podrían hacerse automáticamente?"
        body="Cuéntanos cómo trabajáis hoy. Nosotros te diremos qué automatizaríamos primero."
      />
      <SiteFooter />
    </>
  );
}
