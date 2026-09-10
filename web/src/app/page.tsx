"use client";

import { useEffect, useRef } from "react";

const services = [
  {
    icon: "🔍",
    name: "SEO Orgánico",
    desc: "Optimización técnica, contenido estratégico y link building para que aparezcas cuando tu cliente te está buscando. Sin pagar por cada clic.",
  },
  {
    icon: "⚡",
    name: "Google Ads (SEM)",
    desc: "Campañas de búsqueda, display y Performance Max optimizadas para que cada euro invertido traiga clientes con intención de compra real.",
  },
  {
    icon: "📱",
    name: "Meta & Social Ads",
    desc: "Publicidad en Instagram y Facebook con segmentación precisa y creatividades que convierten. Tu producto frente a quien ya lo quiere comprar.",
  },
  {
    icon: "🌐",
    name: "Web Optimizada",
    desc: "Una web rápida, bien estructurada y diseñada para convertir visitas en leads. Core Web Vitals, velocidad de carga y arquitectura SEO-first.",
  },
  {
    icon: "📊",
    name: "Analytics & Medición",
    desc: "GA4, píxeles, conversiones y dashboards en tiempo real para que sepas exactamente qué canal te trae clientes y cuánto te cuesta cada uno.",
  },
  {
    icon: "✍️",
    name: "Contenido & SEO Local",
    desc: "Estrategia de contenidos, Google Business Profile y posicionamiento local para que los clientes de tu zona te encuentren a ti antes que a la competencia.",
  },
];

const stats = [
  { value: 340, suffix: "%", label: "Incremento medio en tráfico orgánico" },
  { value: 2.4, suffix: "x", label: "ROI medio en campañas de pago", decimal: true },
  { value: 47, suffix: "+", label: "Negocios posicionados en primera página" },
  { value: 90, suffix: " días", label: "Para resultados medibles" },
];

const proof = [
  {
    result: "+520%",
    context: "Clínica dental en Madrid — de 12 a 74 solicitudes de cita al mes en 4 meses con SEO local + Google Ads.",
    sector: "Salud · Clínica Dental",
  },
  {
    result: "3.8x ROI",
    context: "E-commerce de moda — cada euro invertido en Meta Ads retornó 3,8€ en ventas directas durante el primer trimestre.",
    sector: "E-commerce · Moda",
  },
  {
    result: "#1 Google",
    context: "Despacho de abogados — posición 1 en \"abogados laboralistas Barcelona\" en 5 meses desde cero, generando 30+ leads/mes.",
    sector: "Servicios · Legal",
  },
  {
    result: "−62% CPA",
    context: "Empresa de reformas — redujimos el coste por lead de 87€ a 33€ restructurando sus campañas de Google Ads en 6 semanas.",
    sector: "Construcción · Reformas",
  },
];

export default function Home() {
  const statsRef = useRef<HTMLDivElement>(null);
  const animated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !animated.current) {
          animated.current = true;
          animateCounters();
        }
      },
      { threshold: 0.3 }
    );
    if (statsRef.current) observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, []);

  function animateCounters() {
    document.querySelectorAll<HTMLElement>("[data-target]").forEach((el) => {
      const target = parseFloat(el.dataset.target!);
      const isDecimal = el.dataset.decimal !== undefined;
      const suffix = el.dataset.suffix!;
      const duration = 1800;
      const start = performance.now();

      function update(now: number) {
        const elapsed = now - start;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        const current = target * eased;
        el.textContent = (isDecimal ? current.toFixed(1) : Math.floor(current)) + suffix;
        if (progress < 1) requestAnimationFrame(update);
      }
      requestAnimationFrame(update);
    });
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const success = document.getElementById("formSuccess")!;
    form.style.display = "none";
    success.style.display = "block";
  }

  return (
    <>
      <style>{`
        nav {
          position: fixed;
          top: 0; left: 0; right: 0;
          z-index: 100;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1.25rem 2.5rem;
          background: rgba(10,10,20,0.75);
          backdrop-filter: blur(16px);
          border-bottom: 1px solid var(--border);
        }
        @media (prefers-color-scheme: light) {
          :root:not([data-theme="dark"]) nav { background: rgba(244,244,248,0.8); }
        }
        :root[data-theme="light"] nav { background: rgba(244,244,248,0.8); }
        .nav-logo { font-family: var(--font-display); font-weight: 800; font-size: 1.25rem; letter-spacing: -0.03em; color: var(--text); text-decoration: none; }
        .nav-logo span { color: var(--accent); }
        nav ul { list-style: none; display: flex; gap: 2.5rem; align-items: center; }
        nav ul a { color: var(--muted); text-decoration: none; font-size: 0.875rem; font-weight: 500; transition: color 0.2s; }
        nav ul a:hover { color: var(--text); }
        .btn { display: inline-block; padding: 0.625rem 1.5rem; background: var(--accent); color: #fff; font-family: var(--font-body); font-weight: 500; font-size: 0.875rem; text-decoration: none; border-radius: 6px; border: none; cursor: pointer; transition: opacity 0.2s, transform 0.15s; letter-spacing: 0.01em; }
        .btn:hover { opacity: 0.88; transform: translateY(-1px); }
        .btn-outline { background: transparent; border: 1px solid var(--border); color: var(--text); }
        .btn-outline:hover { border-color: var(--accent); color: var(--accent); opacity: 1; }
        .hero { min-height: 100svh; display: flex; flex-direction: column; justify-content: flex-end; padding: 7rem 2.5rem 4rem; position: relative; overflow: hidden; }
        .hero-grid-bg { position: absolute; inset: 0; background-image: linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px); background-size: 60px 60px; mask-image: radial-gradient(ellipse 80% 60% at 50% 100%, black 30%, transparent 100%); }
        .hero-glow { position: absolute; width: 700px; height: 700px; border-radius: 50%; background: var(--accent-glow); filter: blur(120px); top: -100px; right: -100px; pointer-events: none; }
        .hero-content { position: relative; max-width: 1100px; }
        .hero-eyebrow { display: inline-flex; align-items: center; gap: 0.5rem; font-size: 0.8125rem; font-weight: 500; color: var(--teal); letter-spacing: 0.12em; text-transform: uppercase; margin-bottom: 1.75rem; }
        .hero-eyebrow::before { content: ''; display: block; width: 24px; height: 1px; background: var(--teal); }
        .hero-headline { font-family: var(--font-display); font-weight: 800; font-size: clamp(3.25rem, 7vw, 6.5rem); line-height: 1.0; letter-spacing: -0.03em; text-wrap: balance; margin-bottom: 2rem; }
        .hero-headline em { font-style: normal; color: var(--accent); }
        .hero-sub { font-size: 1.125rem; color: var(--muted); max-width: 520px; margin-bottom: 2.5rem; font-weight: 300; line-height: 1.7; }
        .hero-actions { display: flex; gap: 1rem; align-items: center; flex-wrap: wrap; }
        .stats-bar { border-top: 1px solid var(--border); border-bottom: 1px solid var(--border); display: grid; grid-template-columns: repeat(4, 1fr); gap: 1px; background: var(--border); }
        .stat-cell { background: var(--bg); padding: 2rem 2.5rem; }
        .stat-num { font-family: var(--font-display); font-weight: 800; font-size: clamp(2rem, 4vw, 3.25rem); letter-spacing: -0.04em; color: var(--text); font-variant-numeric: tabular-nums; line-height: 1; margin-bottom: 0.4rem; }
        .stat-label { font-size: 0.8125rem; color: var(--muted); font-weight: 400; letter-spacing: 0.02em; }
        .section-wrap { padding: 6rem 2.5rem; max-width: 1200px; margin: 0 auto; }
        .section-tag { font-size: 0.75rem; font-weight: 500; letter-spacing: 0.14em; text-transform: uppercase; color: var(--accent); margin-bottom: 1rem; }
        .section-title { font-family: var(--font-display); font-weight: 700; font-size: clamp(2rem, 3.5vw, 3rem); letter-spacing: -0.03em; line-height: 1.1; text-wrap: balance; margin-bottom: 1.25rem; }
        .section-body { font-size: 1.0625rem; color: var(--muted); max-width: 540px; line-height: 1.7; font-weight: 300; }
        .services-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1px; background: var(--border); margin-top: 3.5rem; border: 1px solid var(--border); }
        .service-card { background: var(--bg); padding: 2.5rem; transition: background 0.2s; }
        .service-card:hover { background: var(--surface); }
        .service-icon { width: 40px; height: 40px; border-radius: 8px; background: var(--accent-glow); display: flex; align-items: center; justify-content: center; margin-bottom: 1.5rem; font-size: 1.125rem; }
        .service-name { font-family: var(--font-display); font-weight: 700; font-size: 1.125rem; letter-spacing: -0.02em; margin-bottom: 0.75rem; }
        .service-desc { font-size: 0.9375rem; color: var(--muted); line-height: 1.65; font-weight: 300; }
        .process-section { background: var(--surface); border-top: 1px solid var(--border); border-bottom: 1px solid var(--border); }
        .process-steps { display: grid; grid-template-columns: repeat(3, 1fr); gap: 3rem; margin-top: 3.5rem; }
        .step-num { font-family: var(--font-display); font-weight: 800; font-size: 0.75rem; letter-spacing: 0.1em; color: var(--accent); margin-bottom: 1rem; }
        .step-title { font-family: var(--font-display); font-weight: 700; font-size: 1.25rem; letter-spacing: -0.02em; margin-bottom: 0.75rem; }
        .step-desc { font-size: 0.9375rem; color: var(--muted); line-height: 1.65; font-weight: 300; }
        .proof-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1px; background: var(--border); border: 1px solid var(--border); margin-top: 3.5rem; }
        .proof-card { background: var(--bg); padding: 2.5rem; }
        .proof-result { font-family: var(--font-display); font-weight: 800; font-size: 2.5rem; letter-spacing: -0.04em; color: var(--teal); margin-bottom: 0.5rem; line-height: 1; }
        .proof-context { font-size: 0.9375rem; color: var(--muted); margin-bottom: 1.25rem; line-height: 1.6; font-weight: 300; }
        .proof-sector { display: inline-block; font-size: 0.75rem; font-weight: 500; letter-spacing: 0.08em; text-transform: uppercase; color: var(--muted); background: var(--surface); border: 1px solid var(--border); padding: 0.25rem 0.625rem; border-radius: 4px; }
        .contact-wrap { display: grid; grid-template-columns: 1fr 1fr; gap: 5rem; align-items: start; }
        .contact-form { display: flex; flex-direction: column; gap: 1rem; }
        .form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; }
        .field { display: flex; flex-direction: column; gap: 0.375rem; }
        label { font-size: 0.8125rem; font-weight: 500; color: var(--muted); letter-spacing: 0.02em; }
        input, textarea, select { background: var(--surface); border: 1px solid var(--border); border-radius: 6px; padding: 0.75rem 1rem; color: var(--text); font-family: var(--font-body); font-size: 0.9375rem; font-weight: 400; width: 100%; transition: border-color 0.2s; outline: none; appearance: none; }
        input:focus, textarea:focus, select:focus { border-color: var(--accent); box-shadow: 0 0 0 3px var(--accent-glow); }
        textarea { resize: vertical; min-height: 120px; }
        input::placeholder, textarea::placeholder { color: var(--muted); opacity: 0.6; }
        .form-note { font-size: 0.8125rem; color: var(--muted); line-height: 1.5; }
        .btn-full { width: 100%; justify-content: center; display: flex; padding: 0.875rem; font-size: 1rem; }
        .form-success { display: none; padding: 2rem; border: 1px solid var(--teal); border-radius: 8px; background: var(--teal-dim); text-align: center; }
        .form-success h3 { font-family: var(--font-display); font-weight: 700; font-size: 1.25rem; margin-bottom: 0.5rem; color: var(--teal); }
        .form-success p { color: var(--muted); font-size: 0.9375rem; }
        .check-item { display: flex; gap: 0.875rem; align-items: center; font-size: 0.9375rem; color: var(--muted); }
        .check-icon { color: var(--teal); font-size: 1rem; }
        footer { border-top: 1px solid var(--border); padding: 2rem 2.5rem; display: flex; align-items: center; justify-content: space-between; }
        .footer-copy { font-size: 0.8125rem; color: var(--muted); }
        .footer-links { display: flex; gap: 2rem; }
        .footer-links a { font-size: 0.8125rem; color: var(--muted); text-decoration: none; transition: color 0.2s; }
        .footer-links a:hover { color: var(--text); }
        @media (max-width: 900px) {
          nav ul { display: none; }
          .stats-bar { grid-template-columns: repeat(2, 1fr); }
          .services-grid { grid-template-columns: 1fr; }
          .process-steps { grid-template-columns: 1fr; gap: 2rem; }
          .proof-grid { grid-template-columns: 1fr; }
          .contact-wrap { grid-template-columns: 1fr; gap: 3rem; }
          .form-row { grid-template-columns: 1fr; }
        }
        @media (max-width: 600px) {
          nav { padding: 1rem 1.25rem; }
          .hero { padding: 6rem 1.25rem 3rem; }
          .section-wrap { padding: 4rem 1.25rem; }
          .stat-cell { padding: 1.5rem; }
          footer { flex-direction: column; gap: 1rem; text-align: center; }
        }
      `}</style>

      {/* NAV */}
      <nav>
        <a href="#" className="nav-logo">luca<span>seo</span></a>
        <ul>
          <li><a href="#servicios">Servicios</a></li>
          <li><a href="#proceso">Proceso</a></li>
          <li><a href="#resultados">Resultados</a></li>
          <li><a href="#contacto" className="btn">Hablemos</a></li>
        </ul>
      </nav>

      {/* HERO */}
      <div className="hero">
        <div className="hero-grid-bg" />
        <div className="hero-glow" />
        <div className="hero-content">
          <div className="hero-eyebrow">SEO · SEM · Presencia Digital</div>
          <h1 className="hero-headline">
            Tu negocio<br />merece <em>más</em><br />clientes.
          </h1>
          <p className="hero-sub">
            Construimos tu presencia digital desde la raíz — posicionamiento orgánico, publicidad de pago y estrategia de marca — para que Google trabaje para ti, no contra ti.
          </p>
          <div className="hero-actions">
            <a href="#contacto" className="btn">Quiero más clientes</a>
            <a href="#servicios" className="btn btn-outline">Ver servicios</a>
          </div>
        </div>
      </div>

      {/* STATS */}
      <div className="stats-bar" ref={statsRef}>
        {stats.map((s) => (
          <div className="stat-cell" key={s.label}>
            <div
              className="stat-num"
              data-target={s.value}
              data-suffix={s.suffix}
              {...(s.decimal ? { "data-decimal": "" } : {})}
            >
              {s.decimal ? s.value.toFixed(1) : s.value}{s.suffix}
            </div>
            <div className="stat-label">{s.label}</div>
          </div>
        ))}
      </div>

      {/* SERVICES */}
      <section id="servicios">
        <div className="section-wrap">
          <div className="section-tag">Servicios</div>
          <h2 className="section-title">Todo lo que necesitas<br />para dominar tu mercado</h2>
          <p className="section-body">Trabajamos el canal que más retorno te da, con datos reales y sin tecnicismos. Cada acción tiene un objetivo claro: más clientes para tu negocio.</p>
          <div className="services-grid">
            {services.map((s) => (
              <div className="service-card" key={s.name}>
                <div className="service-icon">{s.icon}</div>
                <div className="service-name">{s.name}</div>
                <p className="service-desc">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <div className="process-section">
        <section id="proceso">
          <div className="section-wrap">
            <div className="section-tag">Proceso</div>
            <h2 className="section-title">Cómo trabajamos</h2>
            <p className="section-body">Sin reuniones eternas ni informes que nadie lee. Diagnóstico rápido, estrategia clara y ejecución con resultados visibles en 90 días.</p>
            <div className="process-steps">
              <div>
                <div className="step-num">01 — Diagnóstico</div>
                <div className="step-title">Auditamos tu situación real</div>
                <p className="step-desc">Analizamos tu web, competencia, palabras clave y campañas actuales. Identificamos dónde estás perdiendo clientes y cuánto te está costando.</p>
              </div>
              <div>
                <div className="step-num">02 — Estrategia</div>
                <div className="step-title">Plan de acción en 5 días</div>
                <p className="step-desc">Definimos los canales con mejor retorno para tu sector, los KPIs que vamos a mover y el presupuesto necesario. Sin sorpresas.</p>
              </div>
              <div>
                <div className="step-num">03 — Ejecución</div>
                <div className="step-title">Resultados medibles a los 90 días</div>
                <p className="step-desc">Implementamos, optimizamos y te informamos cada semana. Dashboard en tiempo real para que veas el progreso sin esperar al informe mensual.</p>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* PROOF */}
      <section id="resultados">
        <div className="section-wrap">
          <div className="section-tag">Resultados reales</div>
          <h2 className="section-title">Negocios que ya generan<br />más clientes con nosotros</h2>
          <p className="section-body">Casos reales de empresas que apostaron por su presencia digital y multiplicaron sus leads en menos de seis meses.</p>
          <div className="proof-grid">
            {proof.map((p) => (
              <div className="proof-card" key={p.result}>
                <div className="proof-result">{p.result}</div>
                <p className="proof-context">{p.context}</p>
                <span className="proof-sector">{p.sector}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contacto">
        <div className="section-wrap">
          <div className="contact-wrap">
            <div>
              <div className="section-tag">Contacto</div>
              <h2 className="section-title">¿Tu negocio necesita más clientes?</h2>
              <p className="section-body" style={{ marginBottom: "2rem" }}>
                Cuéntanos tu situación. En menos de 24h te respondemos con un diagnóstico rápido sin compromiso.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.875rem" }}>
                {["Respuesta en menos de 24h", "Primera consulta sin coste", "Sin compromisos ni contratos largos"].map((item) => (
                  <div className="check-item" key={item}>
                    <span className="check-icon">✓</span> {item}
                  </div>
                ))}
              </div>
            </div>
            <div>
              <form className="contact-form" id="contactForm" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="field">
                    <label htmlFor="nombre">Nombre</label>
                    <input type="text" id="nombre" name="nombre" placeholder="Tu nombre" required />
                  </div>
                  <div className="field">
                    <label htmlFor="empresa">Empresa</label>
                    <input type="text" id="empresa" name="empresa" placeholder="Nombre del negocio" />
                  </div>
                </div>
                <div className="field">
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" name="email" placeholder="tu@email.com" required />
                </div>
                <div className="field">
                  <label htmlFor="telefono">Teléfono</label>
                  <input type="tel" id="telefono" name="telefono" placeholder="+34 600 000 000" />
                </div>
                <div className="field">
                  <label htmlFor="objetivo">¿Cuál es tu objetivo principal?</label>
                  <select id="objetivo" name="objetivo">
                    <option value="">Selecciona una opción</option>
                    <option>Aparecer en Google (SEO)</option>
                    <option>Publicidad en Google Ads</option>
                    <option>Publicidad en redes sociales</option>
                    <option>Mejorar mi web</option>
                    <option>Estrategia completa de marketing digital</option>
                  </select>
                </div>
                <div className="field">
                  <label htmlFor="mensaje">Cuéntanos sobre tu negocio</label>
                  <textarea id="mensaje" name="mensaje" placeholder="¿A qué te dedicas? ¿Cuántos clientes quieres al mes? ¿Qué has probado antes?" />
                </div>
                <p className="form-note">Tus datos están seguros. No los compartimos con terceros.</p>
                <button type="submit" className="btn btn-full">Quiero más clientes →</button>
              </form>
              <div className="form-success" id="formSuccess">
                <h3>¡Mensaje recibido!</h3>
                <p>Te escribimos en menos de 24h con un diagnóstico inicial de tu situación.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="footer-copy">© 2025 Lucaseo · lucaseo.com</div>
        <div className="footer-links">
          <a href="#">Política de privacidad</a>
          <a href="#">Aviso legal</a>
          <a href="mailto:hola@lucaseo.com">hola@lucaseo.com</a>
        </div>
      </footer>
    </>
  );
}
