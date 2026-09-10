import type { Metadata } from "next";
import ServiceNav from "../components/ServiceNav";
import ServiceCta from "../components/ServiceCta";
import ServicesAccordionGrid from "../components/ServicesAccordionGrid";

export const metadata: Metadata = {
  title: "SEO Orgánico | Lucaseo — Posicionamiento en Google",
  description: "Aparecer en Google no es suerte. Es estrategia. Auditamos, optimizamos y posicionamos tu web para que tus clientes te encuentren antes que a la competencia.",
};

const faqs = [
  { q: "¿Cuánto tiempo tarda el SEO en dar resultados?", a: "Las primeras señales de mejora — rankings subiendo, tráfico creciendo — suelen verse entre el mes 3 y el 5. Resultados consolidados y tráfico sostenido, entre los 6 y 12 meses. El SEO no es inmediato, pero es el activo digital más rentable a largo plazo: cuando paras de pagar, no desaparece." },
  { q: "¿Qué diferencia hay entre SEO y Google Ads?", a: "Los Ads dan visibilidad inmediata pero pagas por cada clic: cuando paras el presupuesto, desapareces. El SEO orgánico te posiciona de forma permanente sin pagar por clic. Lo ideal es combinarlos: Ads para resultados rápidos, SEO para construir una base de tráfico que no depende de tu presupuesto publicitario." },
  { q: "¿Necesito una web nueva para hacer SEO?", a: "No necesariamente. Auditamos tu web actual y determinamos qué se puede optimizar sin reconstruirla. En muchos casos, con ajustes técnicos, mejora de contenidos y estrategia de enlaces, la web existente ya puede escalar posiciones significativamente." },
  { q: "¿Garantizáis la posición número 1?", a: "Nadie puede garantizar posiciones concretas sin engañarte. Google lo determina mediante más de 200 factores que cambian constantemente. Lo que sí garantizamos es aplicar las mejores prácticas del sector, resultados medibles y transparencia total: verás cada acción y cada número." },
  { q: "¿Trabajáis con cualquier sector?", a: "Sí, aunque tenemos experiencia especial en salud, legal, hostelería, e-commerce y servicios locales. Cada sector tiene su propia lógica de búsqueda y competencia — y eso es exactamente lo que analizamos antes de empezar." },
];

const pillars = [
  { icon: "⚙️", title: "SEO Técnico", desc: "Tu web puede tener el mejor contenido del mundo, pero si Google no puede rastrearlo, publicarlo y entenderlo correctamente, no aparecerá. Auditamos velocidad de carga, arquitectura de URLs, datos estructurados, indexación, Core Web Vitals y todos los factores técnicos que determinan si Google confía en tu web." },
  { icon: "✍️", title: "Contenido Estratégico", desc: "El contenido que posiciona no es el que suena bien: es el que responde exactamente lo que tu cliente busca en el momento exacto en que lo busca. Investigamos keywords con volumen real, intención de búsqueda y baja competencia, y creamos contenido que convierte visitas en leads." },
  { icon: "🔗", title: "Link Building", desc: "Los enlaces de otras webs son votos de confianza para Google. Construimos un perfil de enlaces natural, con medios relevantes de tu sector, directorios de calidad y colaboraciones estratégicas. Sin spam, sin granjas de enlaces: autoridad real que hace subir tu web de forma sostenida." },
  { icon: "📍", title: "SEO Local", desc: "Si tienes un negocio físico o sirves a clientes en una zona geográfica, el SEO local es tu mayor oportunidad. Optimizamos tu Google Business Profile, gestionamos reseñas, creamos páginas de aterrizaje locales y te posicionamos en el pack de 3 de Google Maps que ven todos tus vecinos." },
  { icon: "📊", title: "Analítica & Reporting", desc: "Nada se hace a ciegas. Implementamos GA4, Search Console y dashboards en tiempo real para que sepas qué keywords suben, qué páginas generan más leads y qué está frenando tu crecimiento. Informes claros, sin tecnicismos, cada mes." },
  { icon: "🏪", title: "SEO para E-commerce", desc: "Las tiendas online tienen retos específicos: miles de páginas de producto, contenido duplicado, fichas de categoría sin optimizar. Estructuramos tu catálogo para que Google lo entienda, posicionamos tus productos más rentables y hacemos que cada búsqueda de producto sea una oportunidad de venta." },
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
          <h1>Tu cliente te está buscando.<br /><em>¿Apareces tú o aparece tu competencia?</em></h1>
          <p className="hero-lead">
            Cada día, miles de personas en España buscan exactamente lo que tú vendes. El problema no es la demanda — siempre ha estado ahí. El problema es que el 91% del tráfico de Google se queda en la primera página, y el 33% hace clic solo en el primer resultado. Si no estás arriba, no existes.
          </p>
          <div className="hero-actions">
            <a href="/#contacto" className="btn">Quiero aparecer en Google</a>
            <a href="#como-funciona" className="btn btn-ghost">Cómo lo hacemos</a>
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
        <div className="tag">Por qué el SEO cambia negocios</div>
        <h2>El canal que trabaja para ti<br />aunque estés durmiendo</h2>
        <p className="lead">
          Los anuncios de pago son un grifo: mientras pagas, fluye tráfico. Cuando paras el presupuesto, el grifo se cierra. El SEO es diferente. Es una inversión que se acumula: cada artículo que posiciona, cada enlace que conseguimos, cada mejora técnica que aplicamos se queda ahí, generando visitas y clientes mes tras mes, año tras año, sin coste variable.
        </p>
        <p className="lead" style={{ marginTop: "1.25rem" }}>
          Un negocio bien posicionado en Google recibe tráfico cualificado — personas que ya están buscando lo que vendes, con intención de compra real — de forma totalmente gratuita. No hay coste por clic, no hay presupuesto mínimo, no hay dependencia de plataformas externas. Solo clientes que te encuentran porque eres la mejor respuesta a su pregunta.
        </p>
      </div>

      {/* PILARES */}
      <div className="wrap" id="como-funciona">
        <div className="tag">Nuestro enfoque</div>
        <h2>El SEO no es una sola cosa.<br />Es un sistema completo.</h2>
        <p className="lead">Posicionarse en Google requiere trabajar en paralelo cuatro pilares que se refuerzan mutuamente. Descuidar uno limita el resto.</p>
        <ServicesAccordionGrid services={pillars} />
      </div>

      {/* PROCESO */}
      <div className="process" style={{ borderTop: "1px solid rgba(0,74,173,0.1)", borderBottom: "1px solid rgba(0,74,173,0.1)" }}>
        <div className="wrap">
          <div className="tag">Proceso</div>
          <h2>Cómo pasamos de cero<br />a primera página</h2>
          <p className="lead">Sin atajos, sin trucos de Black Hat que Google acaba penalizando. Solo estrategia sólida y ejecución consistente.</p>
          <div className="steps">
            {[
              { n: "01", t: "Auditoría completa", d: "Analizamos tu web al detalle: velocidad, indexación, errores, keywords actuales, competencia. Identificamos exactamente dónde estás perdiendo posiciones y por qué." },
              { n: "02", t: "Estrategia de keywords", d: "Mapeamos las búsquedas con mayor intención de compra en tu sector, ordenadas por volumen, competencia y rentabilidad potencial. Tu hoja de ruta para los próximos 12 meses." },
              { n: "03", t: "Optimización y contenido", d: "Implementamos las mejoras técnicas, optimizamos las páginas existentes y creamos nuevo contenido alineado con la estrategia. Todo lo que necesitas para que Google te prefiera." },
              { n: "04", t: "Resultados y escala", d: "Monitorizamos los rankings semanalmente, analizamos qué funciona y duplicamos sobre ello. A medida que crece el tráfico orgánico, escalamos la estrategia a más keywords y mercados." },
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
              <div className="tag" style={{ color: "rgba(255,255,255,0.5)" }}>Por qué Lucaseo</div>
              <h2>SEO sin humo,<br />sin atajos, sin sorpresas</h2>
              <p className="lead">La industria del SEO está llena de agencias que prometen posición 1 en 30 días. Eso no existe. Lo que sí existe es trabajo bien hecho, transparencia total y resultados que duran.</p>
            </div>
            <ul className="diff-list">
              <li>Reportes mensuales en lenguaje humano: qué subió, qué bajó y qué vamos a hacer al respecto</li>
              <li>Dashboard en tiempo real para que veas el progreso sin esperar al informe</li>
              <li>Estrategia de keywords basada en intención de compra, no solo en volumen de búsqueda</li>
              <li>Nunca comprometemos tu dominio con técnicas que Google penaliza</li>
              <li>Combinamos SEO técnico, de contenido y off-page en una estrategia integrada</li>
              <li>Experiencia en más de 10 sectores distintos — sabemos qué funciona en el tuyo</li>
            </ul>
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
        title="¿Tu web no aparece en Google?"
        body="Hacemos una auditoría gratuita de tu situación actual. Sabrás exactamente en qué posición estás, cuánto tráfico estás perdiendo y qué haremos para cambiarlo."
      />
    </>
  );
}
