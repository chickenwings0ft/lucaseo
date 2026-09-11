import type { Metadata } from "next";
import ServiceNav from "../components/ServiceNav";
import ServiceCta from "../components/ServiceCta";
import FaqSection from "../components/FaqSection";
import ServicesAccordionGrid from "../components/ServicesAccordionGrid";

export const metadata: Metadata = {
  title: "Creación Web | Lucaseo — Webs que venden, no que decoran",
  description: "Diseñamos y desarrollamos webs rápidas, optimizadas para SEO y diseñadas para convertir visitas en clientes. Sin plantillas genéricas. Resultados medibles.",
};

const services = [
  { icon: "🎨", title: "Diseño UX/UI", desc: "Diseñamos para que la gente entienda rápido y navegue sin pensar demasiado." },
  { icon: "⚡", title: "Rendimiento", desc: "Una web lenta es una forma elegante de echar clientes." },
  { icon: "🔍", title: "SEO-first", desc: "La estructura se construye pensando en Google desde el inicio." },
  { icon: "📱", title: "Mobile-first", desc: "Tu cliente probablemente está entrando desde el móvil." },
  { icon: "🔒", title: "Seguridad", desc: "Buen código, buenas prácticas y una base sólida." },
  { icon: "📈", title: "Conversión", desc: "Cada página tiene un propósito." },
];

const types = [
  { name: "Landing Page", best: "Ads, campañas y lanzamientos", desc: "Un objetivo. Un mensaje. Una acción. Perfecta para Ads, campañas y lanzamientos." },
  { name: "Web Corporativa", best: "Confianza antes de la llamada", desc: "Para empresas que necesitan confianza antes de la llamada. Servicios, casos, equipo, proceso y propuesta de valor." },
  { name: "E-commerce", best: "Venta online", desc: "Una tienda no debería parecer un catálogo. Debería vender. Diseño, producto, checkout y experiencia de compra." },
  { name: "Web con CMS", best: "Contenido editable", desc: "Tú también deberías poder cambiar tu web. Contenido editable sin depender del desarrollador para cada coma." },
];

const webFaqs = [
  { q: "¿Cuánto cuesta crear una página web profesional?", a: "Depende del tipo de web: una landing page no tiene el mismo coste que un e-commerce con 200 productos. En Lucaseo trabajamos con presupuestos adaptados a lo que necesita cada negocio. Lo que no hacemos es webs con plantilla genérica disfrazadas de diseño web a medida." },
  { q: "¿Cuánto se tarda en tener mi web lista?", a: "Una landing page puede estar en 1-2 semanas. Una web corporativa completa entre 3-6 semanas. Un e-commerce entre 4-8 semanas dependiendo de la complejidad. El desarrollo web tiene fases: diseño, desarrollo, contenido y testing. No las saltamos para ir más rápido." },
  { q: "¿Las webs que hacéis están optimizadas para SEO?", a: "Sí, siempre. Cada web que desarrollamos cumple los estándares técnicos de SEO: velocidad de carga, estructura de URLs, metadatos, schema markup, responsive design y Core Web Vitals. Una web optimizada SEO desde el principio se posiciona mucho más rápido que una que se arregla después." },
  { q: "¿Puedo actualizar yo mismo el contenido de la web?", a: "Sí. Trabajamos con sistemas de gestión de contenido que te permiten editar textos, imágenes y páginas sin tocar código. Te enseñamos cómo hacerlo. Y si prefieres no tocarlo, nos encargamos nosotros del mantenimiento." },
  { q: "¿Qué diferencia hay entre una web para empresas hecha por una agencia y una hecha con Wix o Squarespace?", a: "Rendimiento, flexibilidad y posicionamiento. Las plataformas tipo Wix son útiles para proyectos básicos, pero tienen limitaciones en velocidad, SEO técnico y personalización. Una web profesional se desarrolla pensando en cómo vende tu negocio, no en cómo funciona la plantilla." },
  { q: "¿Cómo puedo solicitar un presupuesto para mi web?", a: "Contáctanos por el formulario. Cuéntanos qué tipo de web necesitas y qué quieres conseguir con ella. Te enviamos una propuesta detallada con plazos, funcionalidades y precio cerrado. Sin sorpresas." },
];

export default function WebPage() {
  return (
    <>
      <ServiceNav />
      <style>{`
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { background: #fff; color: #0a0f1e; font-family: var(--font-body), system-ui, sans-serif; }
        .hero { padding: 10rem 2.5rem 6rem; background: linear-gradient(160deg, #f0f8ff 0%, #ffffff 60%); border-bottom: 1px solid rgba(0,74,173,0.1); }
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
        .stats-row { display: grid; grid-template-columns: repeat(4, 1fr); gap: 1px; background: rgba(0,74,173,0.1); border-top: 1px solid rgba(0,74,173,0.1); border-bottom: 1px solid rgba(0,74,173,0.1); }
        .stat-c { background: #fafbff; padding: 2.25rem 2rem; }
        .s-num { font-family: var(--font-display), system-ui; font-weight: 800; font-size: clamp(2rem, 3.5vw, 3rem); color: #004aad; letter-spacing: -0.04em; margin-bottom: 0.35rem; }
        .s-lbl { font-size: 0.875rem; font-weight: 600; margin-bottom: 0.25rem; }
        .s-ctx { font-size: 0.8125rem; color: #5a6480; }
        .types-section { background: #0a0f1e; color: #fff; }
        .types-section h2 { color: #fff; }
        .types-section .lead { color: rgba(255,255,255,0.6); max-width: 100%; }
        .types-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 1.5rem; margin-top: 3.5rem; }
        .type-card { border: 1px solid rgba(255,255,255,0.08); border-radius: 12px; padding: 2rem; background: rgba(255,255,255,0.03); }
        .t-name { font-family: var(--font-display), system-ui; font-weight: 700; font-size: 1.25rem; color: #fff; margin-bottom: 0.5rem; }
        .t-best { font-size: 0.8125rem; color: rgba(0,74,173,0.8); background: rgba(0,74,173,0.15); display: inline-block; padding: 0.2rem 0.75rem; border-radius: 20px; margin-bottom: 1rem; font-weight: 500; }
        .t-desc { font-size: 0.9375rem; color: rgba(255,255,255,0.55); line-height: 1.7; font-weight: 300; }
        .process-section { background: #fff; border-top: 1px solid rgba(0,74,173,0.1); border-bottom: 1px solid rgba(0,74,173,0.1); }
        .steps { display: grid; grid-template-columns: repeat(5, 1fr); gap: 1.5rem; margin-top: 3.5rem; }
        .step-n { font-family: var(--font-display), system-ui; font-weight: 800; font-size: 1.75rem; color: rgba(0,74,173,0.15); letter-spacing: -0.04em; margin-bottom: 0.875rem; }
        .step-t { font-family: var(--font-display), system-ui; font-weight: 700; font-size: 1rem; margin-bottom: 0.5rem; }
        .step-d { font-size: 0.875rem; color: #5a6480; line-height: 1.65; font-weight: 300; }
        @media (max-width: 768px) {
          .stats-row { grid-template-columns: 1fr 1fr; }
          .types-grid { grid-template-columns: 1fr; }
          .steps { grid-template-columns: 1fr 1fr; }
        }
      `}</style>

      {/* HERO */}
      <section className="hero">
        <div className="hero-inner">
          <div className="eyebrow">Creación Web</div>
          <h1>Tu web no debería explicar quién eres.<br /><em>Debería conseguir que alguien quiera trabajar contigo.</em></h1>
          <p className="hero-lead">
            Una buena web hace tres cosas muy rápido: te entiende, te cree y te mueve a actuar. Por eso no empezamos diseñando. Empezamos pensando.
          </p>
          <div className="hero-actions">
            <a href="/#contacto" className="btn">Quiero una web que venda</a>
            <a href="#tipos" className="btn btn-ghost">Ver tipos de web</a>
          </div>
        </div>
      </section>

      {/* STATS */}
      <div className="stats-row">
        {[
          { n: "3 seg", l: "Tiempo máximo de carga aceptable", c: "El 53% abandona antes si tarda más" },
          { n: "90+", l: "Puntuación PageSpeed objetivo", c: "Velocidad que Google premia con rankings" },
          { n: "65%", l: "Del tráfico llega desde móvil en España", c: "Por eso diseñamos mobile-first" },
          { n: "+40%", l: "Mejora media en conversión tras un rediseño", c: "Con arquitectura y copy orientados a vender" },
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
        <div className="tag">Problema</div>
        <h2>Una web bonita que no convierte<br />sigue siendo una web cara.</h2>
        <p className="lead">
          Hay webs que son visualmente espectaculares. Y luego está el pequeño detalle de que nadie sabe qué hacer cuando entra. Menús infinitos. Textos que dicen &ldquo;soluciones innovadoras&rdquo;. Botones que dicen &ldquo;saber más&rdquo;. Y una home que parece una presentación corporativa. Nosotros hacemos otra cosa.
        </p>
      </div>

      {/* SERVICIOS */}
      <div className="wrap">
        <div className="tag">Qué construimos</div>
        <h2>Una web pensada<br />para hacer negocio.</h2>
        <ServicesAccordionGrid services={services} />
      </div>

      {/* TIPOS */}
      <div className="types-section" id="tipos">
        <div className="wrap">
          <div className="tag" style={{ color: "rgba(255,255,255,0.4)" }}>Tipos de web</div>
          <h2>No todas las webs<br />necesitan lo mismo.</h2>
          <div className="types-grid">
            {types.map(t => (
              <div className="type-card" key={t.name}>
                <div className="t-name">{t.name}</div>
                <span className="t-best">Ideal para: {t.best}</span>
                <p className="t-desc">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* PROCESO */}
      <div className="process-section">
        <div className="wrap">
          <div className="tag">Cómo trabajamos</div>
          <h2>Cinco pasos.<br />Sin misterio.</h2>
          <div className="steps">
            {[
              { n: "01", t: "Briefing", d: "Entendemos negocio, cliente y objetivo." },
              { n: "02", t: "Arquitectura", d: "Organizamos la información antes de pensar en decoración." },
              { n: "03", t: "Diseño", d: "Convertimos la estrategia en una experiencia visual." },
              { n: "04", t: "Desarrollo", d: "Código, velocidad, SEO y funcionamiento." },
              { n: "05", t: "Lanzamiento", d: "Publicamos, revisamos y te dejamos todo preparado." },
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

      <FaqSection topic="diseño y desarrollo web" faqs={webFaqs} />

      <ServiceCta
        title="¿Tu web representa el negocio que tienes hoy?"
        body="Si la respuesta es &ldquo;más o menos&rdquo;... ya tenemos trabajo."
      />
    </>
  );
}
