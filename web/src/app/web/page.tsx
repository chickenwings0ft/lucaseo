import type { Metadata } from "next";
import ServiceNav from "../components/ServiceNav";
import ServiceCta from "../components/ServiceCta";
import ServicesAccordionGrid from "../components/ServicesAccordionGrid";

export const metadata: Metadata = {
  title: "Creación Web | Lucaseo — Webs que venden, no que decoran",
  description: "Diseñamos y desarrollamos webs rápidas, optimizadas para SEO y diseñadas para convertir visitas en clientes. Sin plantillas genéricas. Resultados medibles.",
};

const services = [
  { icon: "🎨", title: "Diseño UX/UI", desc: "Una web bonita que no convierte es cara decoración. Diseñamos pensando en el comportamiento del usuario: dónde mira, dónde hace clic, qué le genera confianza y qué le frena. Cada elemento visual tiene un propósito: llevar al visitante hacia la acción que quieres que tome." },
  { icon: "⚡", title: "Velocidad & Core Web Vitals", desc: "El 53% de los usuarios abandona una web si tarda más de 3 segundos en cargar. Construimos sitios que puntúan 90+ en PageSpeed Insights: código optimizado, imágenes en formato moderno, carga diferida y sin scripts innecesarios que ralenticen la experiencia." },
  { icon: "🔍", title: "SEO-first desde el primer día", desc: "Una web nueva sin arquitectura SEO bien pensada es una web que Google tardará meses en entender. Estructuramos URLs, jerarquía de encabezados, datos estructurados, sitemaps y robots.txt desde el principio, para que el posicionamiento arranque desde el momento del lanzamiento." },
  { icon: "📱", title: "Mobile-first responsive", desc: "El 65% del tráfico web en España llega desde el móvil. Diseñamos primero para pantallas pequeñas y luego escalamos al escritorio — no al revés — garantizando una experiencia perfecta en cualquier dispositivo sin compromisos de diseño." },
  { icon: "🔒", title: "Seguridad & rendimiento", desc: "HTTPS, certificados SSL, protección contra inyección de código, backups automáticos y actualizaciones regulares. Tu web es el escaparate de tu negocio: no puede caerse, no puede cargarse lenta y no puede ser hackeada." },
  { icon: "📈", title: "Optimización de conversión (CRO)", desc: "El tráfico que llega a tu web no sirve de nada si no convierte. Analizamos el comportamiento de los visitantes con mapas de calor, grabaciones de sesión y tests A/B para identificar dónde se pierden los leads y qué cambios multiplican los contactos." },
];

const types = [
  { name: "Landing Pages", best: "Campañas de Ads y conversión directa", desc: "Una sola página, un solo objetivo: que el visitante haga clic en 'Contactar', 'Comprar' o 'Reservar'. Diseñadas para maximizar la tasa de conversión con mensajes claros, prueba social y llamadas a la acción irresistibles." },
  { name: "Web Corporativa", best: "Negocios de servicios y empresas B2B", desc: "Tu web como herramienta de ventas: presentación clara de servicios, casos de éxito, equipo y proceso de trabajo. Diseñada para generar confianza y convertir visitas de clientes potenciales en solicitudes de propuesta." },
  { name: "E-commerce", best: "Venta online de productos físicos o digitales", desc: "Tiendas online optimizadas para conversión: fichas de producto que venden, proceso de pago sin fricción, gestión de inventario, cupones y toda la integración con pasarelas de pago. En Shopify, WooCommerce o a medida." },
  { name: "Web con CMS", best: "Negocios que necesitan actualizar contenido", desc: "Control total sobre tu web sin tocar código. Integramos WordPress, Sanity u otros CMS para que puedas publicar blogs, actualizar precios, añadir servicios y gestionar tu web con autonomía total." },
];

const faqs = [
  { q: "¿Cuánto tarda en hacerse una web?", a: "Una landing page optimizada puede estar lista en 2–3 semanas. Una web corporativa completa, entre 4 y 8 semanas dependiendo del número de páginas y la complejidad. Un e-commerce, entre 6 y 12 semanas. Siempre empezamos por un briefing detallado para darte un plazo real antes de empezar." },
  { q: "¿Hacéis webs en WordPress?", a: "Trabajamos con WordPress, Shopify, Next.js y desarrollo a medida según el proyecto. WordPress para webs con mucho contenido que el cliente quiere gestionar solo. Next.js para webs de alto rendimiento. Shopify para e-commerce. Recomendamos la tecnología según el objetivo del proyecto, no la que nos resulta más cómoda." },
  { q: "¿Me enseñáis a gestionar mi web después?", a: "Sí. Cuando usamos un CMS, hacemos una sesión de formación grabada para que puedas actualizar contenido, publicar en el blog y gestionar los elementos básicos sin depender de nosotros para cada cambio." },
  { q: "¿Incluís el hosting y el dominio?", a: "Podemos gestionarlo nosotros o trabajar con tu proveedor actual. Recomendamos Vercel o Netlify para webs en Next.js (rendimiento excelente), y SiteGround o Cloudways para WordPress. El coste del hosting no está incluido en el desarrollo pero te asesoramos en la mejor opción para tu caso." },
  { q: "¿Qué pasa si ya tengo web pero está mal hecha?", a: "Hacemos una auditoría de tu web actual: velocidad, SEO técnico, conversión y diseño. A partir de ahí decidimos juntos si es mejor optimizar la existente o construir una nueva desde cero. A veces con ajustes bien enfocados se puede mejorar el rendimiento sin reconstruir todo." },
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
        .faq-wrap { max-width: 760px; margin: 0 auto; padding: 5rem 2.5rem; }
        .faq-item { border-bottom: 1px solid rgba(0,74,173,0.1); padding: 2rem 0; }
        .faq-q { font-family: var(--font-display), system-ui; font-weight: 700; font-size: 1.0625rem; margin-bottom: 0.875rem; }
        .faq-a { font-size: 0.9375rem; color: #5a6480; line-height: 1.75; font-weight: 300; }
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
          <h1>Tu web no es un folleto digital.<br />Es tu <em>mejor comercial</em>.</h1>
          <p className="hero-lead">
            La mayoría de webs tienen el mismo problema: fueron hechas para verse bien en una presentación, no para vender. Sin velocidad suficiente para que Google las posicione, sin estructura clara para que el usuario encuentre lo que busca y sin llamadas a la acción que conviertan el tráfico en clientes. Construimos webs que hacen exactamente lo contrario.
          </p>
          <div className="hero-actions">
            <a href="/#contacto" className="btn">Quiero mi web nueva</a>
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
        <div className="tag">El problema de la mayoría de webs</div>
        <h2>Una web cara que no vende<br />es peor que no tener web.</h2>
        <p className="lead">
          Hemos auditado decenas de webs de negocios que "tenían web" pero no tenían clientes. Los problemas son siempre los mismos: carga lenta que Google penaliza en rankings y que los usuarios abandonan antes de leer nada, menús confusos que hacen que el visitante no sepa qué hace exactamente la empresa, y páginas sin llamadas a la acción claras que acaban con "si quieres más información, llámanos".
        </p>
        <p className="lead" style={{ marginTop: "1.25rem" }}>
          Una web bien construida es tu comercial 24/7: explica quién eres, qué resuelves, por qué eres la mejor opción y pone al visitante frente al botón correcto en el momento correcto. Eso no ocurre por accidente — ocurre cuando alguien diseña con ese objetivo desde el principio.
        </p>
      </div>

      {/* SERVICIOS */}
      <div className="wrap">
        <div className="tag">Qué construimos</div>
        <h2>Web diseñada para crecer<br />con tu negocio</h2>
        <ServicesAccordionGrid services={services} />
      </div>

      {/* TIPOS */}
      <div className="types-section" id="tipos">
        <div className="wrap">
          <div className="tag" style={{ color: "rgba(255,255,255,0.4)" }}>Tipos de web</div>
          <h2>El proyecto correcto<br />para cada objetivo</h2>
          <p className="lead">No todas las webs son iguales. La tecnología y el enfoque cambian según para qué sirve tu web.</p>
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
          <h2>De briefing a web publicada<br />en 5 fases claras</h2>
          <div className="steps">
            {[
              { n: "01", t: "Briefing y estrategia", d: "Entendemos tu negocio, tu competencia, tu cliente y tu objetivo. El diseño viene después: primero la estrategia." },
              { n: "02", t: "Arquitectura y wireframes", d: "Estructuramos las páginas, el flujo de usuario y las llamadas a la acción antes de diseñar. El esqueleto decide el 80% del resultado." },
              { n: "03", t: "Diseño visual", d: "Interfaz completa con tu identidad de marca, tipografía, color y todos los componentes. Lo apruebas antes de programar." },
              { n: "04", t: "Desarrollo y SEO técnico", d: "Código limpio, velocidad optimizada, SEO técnico implementado desde el principio. No es un add-on final: es parte del proceso." },
              { n: "05", t: "Lanzamiento y handoff", d: "Publicación, formación en el CMS si lo hay, y soporte post-lanzamiento para los primeros 30 días." },
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
          <h2>Preguntas frecuentes<br />sobre creación web</h2>
        </div>
        {faqs.map(f => (
          <div className="faq-item" key={f.q}>
            <div className="faq-q">{f.q}</div>
            <p className="faq-a">{f.a}</p>
          </div>
        ))}
      </div>

      <ServiceCta
        title="¿Tu web está vendiendo lo que puede vender?"
        body="Auditamos tu web actual o empezamos desde cero el proyecto que necesitas. Cuéntanos qué tienes ahora y qué quieres conseguir."
      />
    </>
  );
}
