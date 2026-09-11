import type { Metadata } from "next";
import ServiceNav from "../components/ServiceNav";
import ServiceCta from "../components/ServiceCta";
import ServicesAccordionGrid from "../components/ServicesAccordionGrid";
import type { AccordionService } from "../components/ServicesAccordionGrid";

export const metadata: Metadata = {
  title: "SEM · Google Ads | Lucaseo — Resultados desde el primer día",
  description: "Campañas de Google Ads que generan clientes reales. Search, Display y Performance Max optimizados para que cada euro invertido traiga el máximo retorno.",
};

const faqs = [
  { q: "¿Con cuánto presupuesto puedo empezar?", a: "Depende mucho del sector, competencia y valor de cada cliente. Antes de darte un número, calculamos qué tiene sentido para tu negocio." },
  { q: "¿Cuándo se ven resultados?", a: "Puedes empezar a recibir tráfico y conversiones desde el principio. La rentabilidad y estabilidad de la cuenta llegan con la optimización." },
  { q: "¿Medís conversiones reales?", a: "Sí. Formularios, llamadas, ventas y cualquier acción que tenga valor para tu negocio." },
  { q: "¿También hacéis Meta y TikTok?", a: "Sí. Elegimos plataforma según dónde esté tu cliente y qué tipo de demanda quieras generar." },
];

const semServices: AccordionService[] = [
  { icon: "🔍", title: "Google Ads", desc: "Aparece justo cuando alguien busca lo que vendes.", href: "/sem/google-ads" },
  { icon: "🖼️", title: "Display & Remarketing", desc: "Vuelve a aparecer delante de quien todavía no estaba listo para comprar." },
  { icon: "⚡", title: "Performance Max", desc: "Unimos diferentes inventarios de Google en campañas enfocadas en conversiones." },
  { icon: "🛒", title: "Shopping Ads", desc: "Tus productos frente a compradores que ya están comparando." },
  { icon: "🎥", title: "YouTube Ads", desc: "Vídeo para generar demanda, notoriedad y acción." },
  { icon: "📱", title: "Meta Ads", desc: "Facebook e Instagram para encontrar, impactar y convertir nuevas audiencias.", href: "/sem/meta-ads" },
  { icon: "🎵", title: "TikTok Ads", desc: "Llegar donde la atención todavía no está completamente secuestrada.", href: "/sem/tiktok-ads" },
  { icon: "🤖", title: "ChatGPT Ads", desc: "Nos preparamos también para la siguiente generación de descubrimiento y publicidad dentro de entornos conversacionales.", href: "/sem/chatgpt-ads" },
];

const process = [
  { n: "01", t: "Auditoría", d: "Descubrimos dónde se va el dinero y qué está funcionando." },
  { n: "02", t: "Arquitectura", d: "Campañas, segmentación, conversiones, audiencias y tracking." },
  { n: "03", t: "Creatividades", d: "Anuncios que hacen que el clic tenga sentido." },
  { n: "04", t: "Optimización", d: "Cortamos lo que no funciona. Apretamos donde sí." },
];

export default function SemPage() {
  return (
    <>
      <ServiceNav />
      <style>{`
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { background: #fff; color: #0a0f1e; font-family: var(--font-body), system-ui, sans-serif; }
        .hero { padding: 10rem 2.5rem 6rem; background: linear-gradient(160deg, #fff8f0 0%, #ffffff 60%); border-bottom: 1px solid rgba(0,74,173,0.1); }
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
        .btn-ghost:hover { border-color: #004aad; opacity: 1; }
        .wrap { max-width: 1100px; margin: 0 auto; padding: 5rem 2.5rem; }
        .tag { font-size: 0.75rem; font-weight: 500; letter-spacing: 0.14em; text-transform: uppercase; color: #004aad; margin-bottom: 1rem; }
        h2 { font-family: var(--font-display), system-ui; font-weight: 700; font-size: clamp(1.875rem, 3vw, 2.75rem); letter-spacing: -0.03em; line-height: 1.1; margin-bottom: 1.25rem; text-wrap: balance; }
        .lead { font-size: 1.0625rem; color: #5a6480; max-width: 580px; line-height: 1.75; font-weight: 300; }
        .stats-row { display: grid; grid-template-columns: repeat(4, 1fr); gap: 1px; background: rgba(0,74,173,0.1); border-top: 1px solid rgba(0,74,173,0.1); border-bottom: 1px solid rgba(0,74,173,0.1); }
        .stat-c { background: #fafbff; padding: 2.25rem 2rem; }
        .s-num { font-family: var(--font-display), system-ui; font-weight: 800; font-size: clamp(2rem, 3.5vw, 3rem); color: #004aad; letter-spacing: -0.04em; margin-bottom: 0.35rem; }
        .s-lbl { font-size: 0.875rem; font-weight: 600; margin-bottom: 0.25rem; }
        .s-ctx { font-size: 0.8125rem; color: #5a6480; }
        .process-sec { background: #0a0f1e; color: #fff; }
        .process-sec h2 { color: #fff; }
        .process-sec .lead { color: rgba(255,255,255,0.6); max-width: 100%; }
        .steps { display: grid; grid-template-columns: repeat(4, 1fr); gap: 2rem; margin-top: 3.5rem; }
        .step-n { font-family: var(--font-display), system-ui; font-weight: 800; font-size: 2rem; color: rgba(0,74,173,0.5); letter-spacing: -0.04em; margin-bottom: 1rem; }
        .step-t { font-family: var(--font-display), system-ui; font-weight: 700; font-size: 1.05rem; color: #fff; margin-bottom: 0.625rem; }
        .step-d { font-size: 0.9rem; color: rgba(255,255,255,0.55); line-height: 1.65; font-weight: 300; }
        .compare { background: #fff; border-top: 1px solid rgba(0,74,173,0.1); }
        .compare-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 4rem; align-items: start; margin-top: 3rem; }
        .compare-col h3 { font-family: var(--font-display), system-ui; font-weight: 700; font-size: 1.25rem; margin-bottom: 1.5rem; }
        .compare-col ul { list-style: none; display: flex; flex-direction: column; gap: 1rem; }
        .compare-col li { display: flex; gap: 0.75rem; font-size: 0.9375rem; color: #5a6480; line-height: 1.6; }
        .compare-col li.good { color: #0a0f1e; }
        .check { color: #004aad; font-weight: 700; flex-shrink: 0; }
        .cross { color: #cc3300; font-weight: 700; flex-shrink: 0; }
        .faq-wrap { max-width: 760px; margin: 0 auto; padding: 5rem 2.5rem; }
        .faq-item { border-bottom: 1px solid rgba(0,74,173,0.1); padding: 2rem 0; }
        .faq-q { font-family: var(--font-display), system-ui; font-weight: 700; font-size: 1.0625rem; margin-bottom: 0.875rem; }
        .faq-a { font-size: 0.9375rem; color: #5a6480; line-height: 1.75; font-weight: 300; }
        @media (max-width: 768px) {
          .stats-row { grid-template-columns: 1fr 1fr; }
          .steps { grid-template-columns: 1fr 1fr; }
          .compare-grid { grid-template-columns: 1fr; gap: 2rem; }
        }
      `}</style>

      {/* HERO */}
      <section className="hero">
        <div className="hero-inner">
          <div className="eyebrow">SEM · Paid Ads</div>
          <h1>Clientes desde mañana.<br /><em>No desde &quot;algún día cuando el SEO despegue&quot;.</em></h1>
          <p className="hero-lead">
            El SEO es una carrera de fondo. Los Ads son más parecidos a encender el motor. Si alguien está buscando exactamente lo que vendes, podemos ponerte delante ahora. La parte difícil no es encender la campaña. La parte difícil es no tirar el dinero.
          </p>
          <div className="hero-actions">
            <a href="/#contacto" className="btn">Quiero clientes ya</a>
            <a href="#formatos" className="btn btn-ghost">Ver formatos</a>
          </div>
        </div>
      </section>

      {/* STATS */}
      <div className="stats-row">
        {[
          { n: "3.8x", l: "ROI medio en nuestras campañas", c: "Euros recuperados por cada euro invertido" },
          { n: "−62%", l: "Reducción media del CPA", c: "Coste por lead tras 3 meses de optimización" },
          { n: "24h", l: "Para ver las primeras conversiones", c: "Campañas activas desde el primer día" },
          { n: "100%", l: "Tracking de conversiones instalado", c: "Cada lead y venta, perfectamente atribuido" },
        ].map(s => (
          <div className="stat-c" key={s.n}>
            <div className="s-num">{s.n}</div>
            <div className="s-lbl">{s.l}</div>
            <div className="s-ctx">{s.c}</div>
          </div>
        ))}
      </div>

      {/* COPY BLOQUE */}
      <div className="wrap" style={{ borderBottom: "1px solid rgba(0,74,173,0.1)" }}>
        <div className="tag">El problema</div>
        <h2>Google Ads no es difícil.<br />Hacer que Google Ads sea rentable sí.</h2>
        <p className="lead">
          Una cuenta mal configurada puede gastar dinero perfectamente. Ese es el problema. Puede tener tráfico. Puede tener clics. Puede tener impresiones. Y aun así no vender una mierda. Nosotros trabajamos al revés: primero negocio, después plataforma.
        </p>
      </div>

      {/* FORMATOS */}
      <div className="wrap" id="formatos">
        <div className="tag">Formatos</div>
        <h2>Ponemos tu presupuesto<br />donde tiene sentido.</h2>
        <ServicesAccordionGrid services={semServices} />
      </div>

      {/* PROCESO */}
      <div className="process-sec">
        <div className="wrap">
          <div className="tag" style={{ color: "rgba(255,255,255,0.45)" }}>Proceso</div>
          <h2>Tu presupuesto no necesita motivación.<br />Necesita dirección.</h2>
          <div className="steps">
            {process.map(s => (
              <div key={s.n}>
                <div className="step-n">{s.n}</div>
                <div className="step-t">{s.t}</div>
                <p className="step-d">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* COMPARATIVA */}
      <div className="compare">
        <div className="wrap">
          <div className="tag">Comparativa</div>
          <h2>¿Gestionarlo tú o dejar<br />que lo hagamos nosotros?</h2>
          <div className="compare-grid">
            <div className="compare-col">
              <h3>❌ Si lo llevas tú</h3>
              <ul>
                <li><span className="cross">✗</span> Aprendes la plataforma. Pierdes horas. Tocas algo. Algo deja de funcionar. Lo arreglas. Y vuelves a hacerlo el mes siguiente.</li>
              </ul>
            </div>
            <div className="compare-col">
              <h3>✅ Con Lucaseo</h3>
              <ul>
                <li className="good"><span className="check">✓</span> Tú llevas tu negocio. Nosotros vigilamos el presupuesto. Analizamos el rendimiento. Probamos. Optimizamos. Y te contamos qué está pasando sin hablarte en idioma robot.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ */}
      <div className="faq-wrap">
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <div className="tag">FAQ</div>
          <h2>Preguntas frecuentes<br />sobre SEM y Google Ads</h2>
        </div>
        {faqs.map(f => (
          <div className="faq-item" key={f.q}>
            <div className="faq-q">{f.q}</div>
            <p className="faq-a">{f.a}</p>
          </div>
        ))}
      </div>

      <ServiceCta
        title="¿Cuánto dinero estás dejando escapar?"
        body="Déjanos mirar tus campañas. Puede que estén bien. Puede que necesiten una reforma. Puede que directamente haya que apagar el incendio."
      />
    </>
  );
}
