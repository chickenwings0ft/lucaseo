import type { Metadata } from "next";
import ServiceNav from "../components/ServiceNav";
import ServiceCta from "../components/ServiceCta";
import ServicesAccordionGrid from "../components/ServicesAccordionGrid";

export const metadata: Metadata = {
  title: "SEO Orgánico | Lucaseo — Posicionamiento en Google",
  description: "Aparecer en Google no es suerte. Es estrategia. Auditamos, optimizamos y posicionamos tu web para que tus clientes te encuentren antes que a la competencia.",
};

const faqs = [
  { q: "¿Cuánto tarda el SEO?", a: "Normalmente no necesitas esperar un año para ver si existe vida. Las primeras señales pueden aparecer en pocos meses y los resultados sólidos llegan a medida que la estrategia acumula autoridad y relevancia. No es inmediato. Es precisamente por eso que tiene tanto valor." },
  { q: "¿SEO o Google Ads?", a: "Ads te pone delante mañana. SEO construye un canal que puede darte tráfico durante mucho tiempo. La combinación suele ser mucho más potente." },
  { q: "¿Necesito una web nueva?", a: "No necesariamente. Primero vemos si tu web tiene arreglo. A veces necesita una cirugía. A veces solo necesita dejar de hacer algunas cosas fatal." },
  { q: "¿Garantizáis el número 1?", a: "No. Y desconfía de cualquiera que te lo garantice." },
];

const pillars = [
  { icon: "⚙️", title: "SEO Técnico", desc: "Primero hacemos que Google pueda entenderte. Velocidad, arquitectura, indexación, rastreo, estructura y todos esos detalles invisibles que pueden estar frenando tu crecimiento." },
  { icon: "✍️", title: "Contenido Estratégico", desc: "No escribimos para rellenar páginas. Creamos contenido para responder búsquedas reales y llevar a personas con intención de compra hacia tu negocio." },
  { icon: "🔗", title: "Autoridad y enlaces", desc: "Google también necesita razones para confiar en ti. Construimos autoridad de forma natural y estratégica, sin trucos que puedan salir caros después." },
  { icon: "📍", title: "SEO Local", desc: "Para que te encuentren los que están cerca de ti. Google Maps, búsquedas locales, perfiles de negocio y todo lo necesario para convertir búsquedas cercanas en clientes." },
  { icon: "📊", title: "Analítica & Reporting", desc: "No te mandamos un PDF para que te sientas culpable de no abrirlo. Te enseñamos qué está pasando, qué está creciendo y qué vamos a hacer después." },
  { icon: "🏪", title: "SEO para E-commerce", desc: "Más búsquedas. Más producto visto. Más oportunidades de venta. Trabajamos categorías, fichas, arquitectura, búsquedas transaccionales y todo el recorrido hasta la compra." },
];

const results = [
  { metric: "+340%", label: "Incremento medio en tráfico orgánico", context: "En los primeros 12 meses de trabajo continuo" },
  { metric: "6–12", label: "Meses para resultados consolidados", context: "Con estrategia sólida desde el primer día" },
  { metric: "#1", label: "Posición alcanzada por el 40% de nuestros clientes", context: "En sus keywords de mayor intención de compra" },
  { metric: "0€", label: "Coste por clic una vez posicionado", context: "El tráfico orgánico no tiene coste variable" },
];

export default function SeoPage() {
  return (
    <>
      <ServiceNav />
      <style>{`
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { background: #fff; color: #0a0f1e; font-family: var(--font-body), system-ui, sans-serif; }
        .hero { padding: 10rem 2.5rem 6rem; background: linear-gradient(160deg, #f0f5ff 0%, #ffffff 60%); border-bottom: 1px solid rgba(0,74,173,0.1); }
        .hero-inner { max-width: 900px; margin: 0 auto; }
        .eyebrow { display: inline-flex; align-items: center; gap: 0.5rem; font-size: 0.8125rem; font-weight: 500; color: #004aad; letter-spacing: 0.12em; text-transform: uppercase; margin-bottom: 1.75rem; }
        .eyebrow::before { content: ''; display: block; width: 24px; height: 1px; background: #004aad; }
        .hero h1 { font-family: var(--font-display), system-ui; font-weight: 800; font-size: clamp(2.75rem, 6vw, 5.5rem); line-height: 1.02; letter-spacing: -0.03em; margin-bottom: 1.75rem; text-wrap: balance; }
        .hero h1 em { font-style: normal; color: #004aad; }
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
        .results-strip { background: #f5f8ff; border-top: 1px solid rgba(0,74,173,0.1); border-bottom: 1px solid rgba(0,74,173,0.1); }
        .results-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 1px; background: rgba(0,74,173,0.1); }
        .result-cell { background: #f5f8ff; padding: 2.5rem 2rem; }
        .r-num { font-family: var(--font-display), system-ui; font-weight: 800; font-size: clamp(2rem, 3.5vw, 3rem); color: #004aad; letter-spacing: -0.04em; margin-bottom: 0.4rem; }
        .r-label { font-size: 0.9rem; font-weight: 600; margin-bottom: 0.3rem; }
        .r-ctx { font-size: 0.8125rem; color: #5a6480; }
        .process { background: #fff; }
        .steps { display: grid; grid-template-columns: repeat(4, 1fr); gap: 2rem; margin-top: 3.5rem; position: relative; }
        .steps::before { content: ''; position: absolute; top: 22px; left: 60px; right: 60px; height: 1px; background: rgba(0,74,173,0.15); }
        .step { position: relative; }
        .step-n { width: 44px; height: 44px; border-radius: 50%; background: #004aad; color: #fff; display: flex; align-items: center; justify-content: center; font-family: var(--font-display), system-ui; font-weight: 800; font-size: 0.875rem; margin-bottom: 1.25rem; position: relative; z-index: 1; }
        .step-t { font-family: var(--font-display), system-ui; font-weight: 700; font-size: 1.05rem; margin-bottom: 0.625rem; }
        .step-d { font-size: 0.9rem; color: #5a6480; line-height: 1.65; }
        .faq-wrap { max-width: 760px; margin: 0 auto; padding: 5rem 2.5rem; }
        .faq-item { border-bottom: 1px solid rgba(0,74,173,0.1); padding: 2rem 0; }
        .faq-q { font-family: var(--font-display), system-ui; font-weight: 700; font-size: 1.0625rem; margin-bottom: 0.875rem; }
        .faq-a { font-size: 0.9375rem; color: #5a6480; line-height: 1.75; font-weight: 300; }
        .diff { background: #0a0f1e; color: #fff; }
        .diff-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 3rem; align-items: center; }
        .diff h2 { color: #fff; }
        .diff .lead { color: rgba(255,255,255,0.65); max-width: 100%; }
        .diff-list { list-style: none; display: flex; flex-direction: column; gap: 1.25rem; }
        .diff-list li { display: flex; gap: 1rem; align-items: flex-start; font-size: 0.9375rem; line-height: 1.65; color: rgba(255,255,255,0.8); }
        .diff-list li::before { content: '→'; color: #004aad; font-weight: 700; flex-shrink: 0; margin-top: 0.1rem; }
        @media (max-width: 768px) {
          .results-grid { grid-template-columns: 1fr 1fr; }
          .steps { grid-template-columns: 1fr 1fr; }
          .steps::before { display: none; }
          .diff-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      {/* HERO */}
      <section className="hero">
        <div className="hero-inner">
          <div className="eyebrow">SEO Orgánico</div>
          <h1>Tu cliente ya te está buscando.<br /><em>La pregunta es si te encuentra a ti.</em></h1>
          <p className="hero-lead">
            Todos los días alguien escribe en Google exactamente lo que tu negocio vende. &quot;Dentista cerca de mí.&quot; &quot;Abogado laboralista Barcelona.&quot; &quot;Empresa de reformas.&quot; &quot;Restaurante italiano.&quot; No necesitas convencer a alguien de que quiere lo que vendes. Ya lo está buscando. Solo necesitas aparecer antes que tu competencia.
          </p>
          <div className="hero-actions">
            <a href="/#contacto" className="btn">Quiero aparecer en Google</a>
            <a href="#como-funciona" className="btn btn-ghost">Ver cómo lo hacemos</a>
          </div>
        </div>
      </section>

      {/* RESULTADOS STRIP */}
      <div className="results-strip">
        <div className="results-grid">
          {results.map(r => (
            <div className="result-cell" key={r.metric}>
              <div className="r-num">{r.metric}</div>
              <div className="r-label">{r.label}</div>
              <div className="r-ctx">{r.context}</div>
            </div>
          ))}
        </div>
      </div>

      {/* POR QUÉ SEO */}
      <div className="wrap" style={{ borderBottom: "1px solid rgba(0,74,173,0.1)" }}>
        <div className="tag">El verdadero valor del SEO</div>
        <h2>El mejor anuncio de Google es no necesitar pagar el clic.</h2>
        <p className="lead">
          Los Ads funcionan mientras pagas. El SEO funciona porque has conseguido algo más difícil: convertirte en una de las mejores respuestas. Una buena estrategia SEO construye un activo. Cada página optimizada. Cada búsqueda ganada. Cada contenido que posiciona. Cada mejora técnica. Todo suma. Y a diferencia de un anuncio, no desaparece cuando apagas la tarjeta.
        </p>
      </div>

      {/* PILARES */}
      <div className="wrap" id="como-funciona">
        <div className="tag">Servicios SEO</div>
        <h2>Google no tiene un botón de &quot;hazme primero&quot;.<br />Ojalá.</h2>
        <p className="lead">Mientras tanto, trabajamos todas las piezas que realmente influyen.</p>
        <ServicesAccordionGrid services={pillars} />
      </div>

      {/* PROCESO */}
      <div className="process" style={{ borderTop: "1px solid rgba(0,74,173,0.1)", borderBottom: "1px solid rgba(0,74,173,0.1)" }}>
        <div className="wrap">
          <div className="tag">Proceso</div>
          <h2>De &quot;¿por qué no aparezco?&quot; a &quot;¿cómo hemos llegado aquí arriba?&quot;</h2>
          <div className="steps">
            {[
              { n: "01", t: "Auditoría", d: "Desmontamos tu SEO pieza por pieza." },
              { n: "02", t: "Estrategia", d: "Encontramos las búsquedas que realmente pueden generar negocio." },
              { n: "03", t: "Optimización", d: "Corregimos lo técnico y mejoramos el contenido." },
              { n: "04", t: "Escala", d: "Medimos, aprendemos y ampliamos donde vemos oportunidad." },
            ].map(s => (
              <div className="step" key={s.n}>
                <div className="step-n">{s.n}</div>
                <div className="step-t">{s.t}</div>
                <p className="step-d">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* DIFERENCIADORES */}
      <div className="diff">
        <div className="wrap">
          <div className="diff-grid">
            <div>
              <div className="tag" style={{ color: "rgba(255,255,255,0.5)" }}>Por qué Lucaseo para SEO</div>
              <h2>SEO sin humo.</h2>
              <p className="lead">Nadie serio puede prometerte &quot;posición 1 en 30 días&quot;. Google no funciona así. Nosotros tampoco. Lo que sí hacemos es decirte: qué vemos, qué haríamos, por qué y cómo vamos a medirlo.</p>
            </div>
            <div></div>
          </div>
        </div>
      </div>

      {/* FAQ */}
      <div className="faq-wrap">
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <div className="tag">FAQ</div>
          <h2>Lo que más nos preguntan<br />sobre el SEO</h2>
        </div>
        {faqs.map(f => (
          <div className="faq-item" key={f.q}>
            <div className="faq-q">{f.q}</div>
            <p className="faq-a">{f.a}</p>
          </div>
        ))}
      </div>

      <ServiceCta
        title="¿Quieres saber cuánto tráfico estás dejando encima de la mesa?"
        body="Te enseñamos qué está pasando con tu web y dónde están las oportunidades. Sin coste inicial. Sin compromiso. En lenguaje humano."
      />
    </>
  );
}
