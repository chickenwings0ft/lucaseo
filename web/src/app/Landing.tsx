"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import type { LandingData } from "@/lib/content";

const Logo3D = dynamic(() => import("./components/Logo3D"), { ssr: false });

const localClients = [
  { _id: "l1", name: "Macheta Smash Burger", url: "https://macheta.es", darkBackground: false, localLogo: "/macheta-logo.png", w: 960, h: 540 },
  { _id: "l2", name: "Roots", url: "https://rootsrioja.com", darkBackground: false, localLogo: "/roots-logo.png", w: 512, h: 512 },
  { _id: "l3", name: "Briya Exterior Cleaning", url: "https://briya.com.au", darkBackground: true, localLogo: "/briya-logo.png", w: 192, h: 222 },
];

function Headline({ text }: { text: string }) {
  // divide por *palabra* y pinta las envueltas en asteriscos
  const parts = text.split(/(\*[^*]+\*)/g).filter(Boolean);
  return (
    <>
      {parts.map((p, i) =>
        p.startsWith("*") && p.endsWith("*") ? (
          <em key={i}>{p.slice(1, -1)}</em>
        ) : (
          <span key={i}>{p}</span>
        )
      )}
    </>
  );
}

export default function Landing({ data }: { data: LandingData }) {
  const { settings, services, steps, cases, stats } = data;
  const clientsFromCms = data.clients ?? [];
  const useLocalClients = clientsFromCms.length === 0;

  const statsRef = useRef<HTMLDivElement>(null);
  const animated = useRef(false);
  const [formState, setFormState] = useState<"idle" | "sending" | "done" | "error">("idle");

  useEffect(() => {
    const el = statsRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !animated.current) {
          animated.current = true;
          animateCounters();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  function animateCounters() {
    document.querySelectorAll<HTMLElement>("[data-target]").forEach((el) => {
      const target = parseFloat(el.dataset.target!);
      const isDecimal = el.dataset.decimal === "true";
      const suffix = el.dataset.suffix || "";
      const duration = 1800;
      const start = performance.now();
      function update(now: number) {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        const current = target * eased;
        el.textContent = (isDecimal ? current.toFixed(1) : Math.floor(current)) + suffix;
        if (progress < 1) requestAnimationFrame(update);
      }
      requestAnimationFrame(update);
    });
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    const payload = {
      name: fd.get("nombre"),
      company: fd.get("empresa"),
      email: fd.get("email"),
      phone: fd.get("telefono"),
      goal: fd.get("objetivo"),
      message: fd.get("mensaje"),
    };
    setFormState("sending");
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      setFormState(res.ok ? "done" : "error");
    } catch {
      setFormState("error");
    }
  }

  return (
    <>
      <style>{`
        nav { position: fixed; top: 0; left: 0; right: 0; z-index: 100; display: grid; grid-template-columns: 1fr auto 1fr; align-items: center; padding: 1rem 2.5rem; background: rgba(255,255,255,0.9); backdrop-filter: blur(16px); border-bottom: 1px solid var(--border); }
        .nav-logo { display: flex; align-items: center; justify-content: center; text-decoration: none; }
        nav ul { list-style: none; display: flex; gap: 2.5rem; align-items: center; justify-content: flex-end; }
        nav ul a { color: var(--muted); text-decoration: none; font-size: 0.875rem; font-weight: 500; transition: color 0.2s; }
        nav ul a:hover { color: var(--text); }
        .btn { display: inline-block; padding: 0.625rem 1.5rem; background: var(--accent); color: #fff; font-family: var(--font-body); font-weight: 500; font-size: 0.875rem; text-decoration: none; border-radius: 6px; border: none; cursor: pointer; transition: opacity 0.2s, transform 0.15s; letter-spacing: 0.01em; }
        .btn:hover { opacity: 0.88; transform: translateY(-1px); }
        .btn:disabled { opacity: 0.6; cursor: default; }
        .btn-outline { background: transparent; border: 1px solid var(--border); color: var(--text); }
        .btn-outline:hover { border-color: var(--accent); color: var(--accent); opacity: 1; }
        .hero { display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; padding: 10rem 2.5rem 6rem; min-height: 100vh; position: relative; overflow: hidden; }
        .hero-glow { position: absolute; width: 700px; height: 700px; border-radius: 50%; background: var(--accent-glow); filter: blur(180px); top: 50%; left: 50%; transform: translate(-50%, -50%); pointer-events: none; }
        .hero-logo-wrap { position: relative; margin-bottom: 3rem; animation: heroFloat 4s ease-in-out infinite; }
        @keyframes heroFloat { 0%,100% { transform: translateY(0px); } 50% { transform: translateY(-18px); } }
        .hero-logo-img { display: block; filter: drop-shadow(0 20px 60px rgba(0,74,173,0.18)); transform-origin: center center; will-change: transform; }
        .hero-content { position: relative; max-width: 780px; }
        .hero-eyebrow { display: inline-flex; align-items: center; gap: 0.5rem; font-size: 0.8125rem; font-weight: 500; color: var(--accent); letter-spacing: 0.12em; text-transform: uppercase; margin-bottom: 1.75rem; }
        .hero-eyebrow::before,.hero-eyebrow::after { content: ''; display: block; width: 24px; height: 1px; background: var(--accent); }
        .hero-headline { font-family: var(--font-display); font-weight: 800; font-size: clamp(2.5rem, 5.5vw, 5rem); line-height: 1.05; letter-spacing: -0.03em; text-wrap: balance; margin-bottom: 1.5rem; }
        .hero-headline em { font-style: normal; color: var(--accent); }
        .hero-sub { font-size: 1.125rem; color: var(--muted); max-width: 520px; margin: 0 auto 2.5rem; font-weight: 300; line-height: 1.7; }
        .hero-actions { display: flex; gap: 1rem; align-items: center; flex-wrap: wrap; justify-content: center; }
        .stats-bar { border-top: 1px solid var(--border); border-bottom: 1px solid var(--border); display: grid; grid-template-columns: repeat(4, 1fr); gap: 1px; background: var(--border); }
        .stat-cell { background: var(--bg); padding: 2rem 2.5rem; }
        .stat-num { font-family: var(--font-display); font-weight: 800; font-size: clamp(2rem, 4vw, 3.25rem); letter-spacing: -0.04em; color: var(--accent); font-variant-numeric: tabular-nums; line-height: 1; margin-bottom: 0.4rem; }
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
        .process-section { background: var(--bg); border-top: 1px solid var(--border); border-bottom: 1px solid var(--border); }
        .process-steps { display: grid; grid-template-columns: repeat(3, 1fr); gap: 3rem; margin-top: 3.5rem; }
        .step-num { font-family: var(--font-display); font-weight: 800; font-size: 0.75rem; letter-spacing: 0.1em; color: var(--accent); margin-bottom: 1rem; }
        .step-title { font-family: var(--font-display); font-weight: 700; font-size: 1.25rem; letter-spacing: -0.02em; margin-bottom: 0.75rem; }
        .step-desc { font-size: 0.9375rem; color: var(--muted); line-height: 1.65; font-weight: 300; }
        .proof-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1px; background: var(--border); border: 1px solid var(--border); margin-top: 3.5rem; }
        .proof-card { background: var(--bg); padding: 2.5rem; }
        .proof-result { font-family: var(--font-display); font-weight: 800; font-size: 2.5rem; letter-spacing: -0.04em; color: var(--accent); margin-bottom: 0.5rem; line-height: 1; }
        .proof-context { font-size: 0.9375rem; color: var(--muted); margin-bottom: 1.25rem; line-height: 1.6; font-weight: 300; }
        .proof-sector { display: inline-block; font-size: 0.75rem; font-weight: 500; letter-spacing: 0.08em; text-transform: uppercase; color: var(--muted); background: var(--surface); border: 1px solid var(--border); padding: 0.25rem 0.625rem; border-radius: 4px; }
        .clients-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.25rem; margin-top: 3.5rem; }
        .client-card { display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 1.25rem; padding: 2.5rem 2rem; border: 1px solid var(--border); border-radius: 12px; background: var(--bg); text-decoration: none; transition: border-color 0.2s, transform 0.2s, box-shadow 0.2s; min-height: 200px; }
        .client-card:hover { border-color: var(--accent); transform: translateY(-3px); box-shadow: 0 12px 32px rgba(0,74,173,0.1); }
        .client-logo-box { display: flex; align-items: center; justify-content: center; width: 100%; height: 110px; }
        .client-logo-box--dark { background: #0a1733; border-radius: 10px; padding: 1rem 1.5rem; }
        .client-logo { height: 100%; width: auto; max-width: 100%; object-fit: contain; }
        .client-visit { font-family: var(--font-body); font-size: 0.8125rem; font-weight: 500; letter-spacing: 0.04em; color: var(--accent); }
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
        .form-err { font-size: 0.8125rem; color: #c0392b; }
        .btn-full { width: 100%; justify-content: center; display: flex; padding: 0.875rem; font-size: 1rem; }
        .form-success { padding: 2rem; border: 1px solid var(--teal); border-radius: 8px; background: var(--teal-dim); text-align: center; }
        .form-success h3 { font-family: var(--font-display); font-weight: 700; font-size: 1.25rem; margin-bottom: 0.5rem; color: var(--accent); }
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
          .clients-grid { grid-template-columns: 1fr; }
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

      <nav>
        <a href="#" className="nav-logo">
          <Image src="/logo.png" alt="Lucaseo" width={52} height={52} priority style={{ width: "auto", height: "52px" }} />
        </a>
        <ul>
          <li><a href="/seo">SEO</a></li>
          <li><a href="/sem">SEM</a></li>
          <li><a href="/rrss">RRSS</a></li>
          <li><a href="/web">Web</a></li>
          <li><a href="/ia">IA</a></li>
          <li><a href="#contacto" className="btn">Hablemos</a></li>
        </ul>
      </nav>

      <div className="hero" id="hero-section">
        <div className="hero-glow" />
        <div className="hero-logo-wrap" id="hero-logo-wrap">
          <Logo3D />
        </div>
        <div className="hero-content">
          <div className="hero-eyebrow">{settings.heroEyebrow}</div>
          <h1 className="hero-headline"><Headline text={settings.heroHeadline} /></h1>
          <p className="hero-sub">{settings.heroSubtitle}</p>
          <div className="hero-actions">
            <a href="#contacto" className="btn">{settings.heroPrimaryCta}</a>
            <a href="#servicios" className="btn btn-outline">{settings.heroSecondaryCta}</a>
          </div>
        </div>
      </div>

      <div className="stats-bar" ref={statsRef}>
        {stats.map((s) => (
          <div className="stat-cell" key={s._id}>
            <div className="stat-num" data-target={s.value} data-suffix={s.suffix || ""} data-decimal={s.decimal ? "true" : "false"}>
              {s.decimal ? s.value.toFixed(1) : s.value}{s.suffix}
            </div>
            <div className="stat-label">{s.label}</div>
          </div>
        ))}
      </div>

      <section id="servicios">
        <div className="section-wrap">
          <div className="section-tag">{settings.servicesTag}</div>
          <h2 className="section-title">{settings.servicesTitle}</h2>
          <p className="section-body">{settings.servicesBody}</p>
          <div className="services-grid">
            {services.map((s) => (
              <div className="service-card" key={s._id}>
                {s.icon && <div className="service-icon">{s.icon}</div>}
                <div className="service-name">{s.name}</div>
                <p className="service-desc">{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="process-section">
        <section id="proceso">
          <div className="section-wrap">
            <div className="section-tag">{settings.processTag}</div>
            <h2 className="section-title">{settings.processTitle}</h2>
            <p className="section-body">{settings.processBody}</p>
            <div className="process-steps">
              {steps.map((st) => (
                <div key={st._id}>
                  <div className="step-num">{st.label}</div>
                  <div className="step-title">{st.title}</div>
                  <p className="step-desc">{st.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      <section id="resultados">
        <div className="section-wrap">
          <div className="section-tag">{settings.resultsTag}</div>
          <h2 className="section-title">{settings.resultsTitle}</h2>
          <p className="section-body">{settings.resultsBody}</p>
          <div className="proof-grid">
            {cases.map((p) => (
              <div className="proof-card" key={p._id}>
                <div className="proof-result">{p.result}</div>
                <p className="proof-context">{p.context}</p>
                {p.sector && <span className="proof-sector">{p.sector}</span>}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="clientes">
        <div className="section-wrap">
          <div className="section-tag">{settings.clientsTag}</div>
          <h2 className="section-title">{settings.clientsTitle}</h2>
          <p className="section-body">{settings.clientsBody}</p>
          <div className="clients-grid">
            {useLocalClients
              ? localClients.map((c) => (
                  <a className="client-card" href={c.url} target="_blank" rel="noopener noreferrer" key={c._id}>
                    <span className={c.darkBackground ? "client-logo-box client-logo-box--dark" : "client-logo-box"}>
                      <Image src={c.localLogo} alt={c.name} width={c.w} height={c.h} className="client-logo" />
                    </span>
                    <span className="client-visit">Visitar web →</span>
                  </a>
                ))
              : clientsFromCms.map((c) => (
                  <a className="client-card" href={c.url} target="_blank" rel="noopener noreferrer" key={c._id}>
                    <span className={c.darkBackground ? "client-logo-box client-logo-box--dark" : "client-logo-box"}>
                      {c.logo && (
                        <Image src={c.logo.url} alt={c.name} width={c.logo.w} height={c.logo.h} className="client-logo" />
                      )}
                    </span>
                    <span className="client-visit">Visitar web →</span>
                  </a>
                ))}
          </div>
        </div>
      </section>

      <section id="contacto">
        <div className="section-wrap">
          <div className="contact-wrap">
            <div>
              <div className="section-tag">Contacto</div>
              <h2 className="section-title">{settings.contactTitle}</h2>
              <p className="section-body" style={{ marginBottom: "2rem" }}>{settings.contactBody}</p>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.875rem" }}>
                {settings.contactBullets.map((item) => (
                  <div className="check-item" key={item}>
                    <span className="check-icon">✓</span> {item}
                  </div>
                ))}
              </div>
            </div>
            <div>
              {formState === "done" ? (
                <div className="form-success">
                  <h3>¡Mensaje recibido!</h3>
                  <p>Te escribimos en menos de 24h con un diagnóstico inicial de tu situación.</p>
                </div>
              ) : (
                <form className="contact-form" onSubmit={handleSubmit}>
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
                    <select id="objetivo" name="objetivo" defaultValue="">
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
                  {formState === "error" && (
                    <p className="form-err">No se pudo enviar. Inténtalo de nuevo o escríbenos a {settings.contactEmail}.</p>
                  )}
                  <p className="form-note">Tus datos están seguros. No los compartimos con terceros.</p>
                  <button type="submit" className="btn btn-full" disabled={formState === "sending"}>
                    {formState === "sending" ? "Enviando…" : "Quiero más clientes →"}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      <footer>
        <div className="footer-copy">
          <Image src="/logo.png" alt="Lucaseo" width={40} height={40} style={{ marginBottom: "0.5rem", width: "40px", height: "auto" }} />
          <div>© {new Date().getFullYear()} Lucaseo · lucaseo.com</div>
        </div>
        <div className="footer-links">
          <a href="#">Política de privacidad</a>
          <a href="#">Aviso legal</a>
          <a href={`mailto:${settings.contactEmail}`}>{settings.contactEmail}</a>
        </div>
      </footer>
    </>
  );
}
