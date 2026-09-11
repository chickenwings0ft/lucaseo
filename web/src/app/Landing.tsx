"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import type { LandingData } from "@/lib/content";

import ServiceNav from "./components/ServiceNav";
import ServicesAccordionGrid from "./components/ServicesAccordionGrid";

const localClients = [
  { _id: "l0", name: "EEhh", url: "#", darkBackground: false, localLogo: "/eehh-logo.png", w: 512, h: 512, tagline: "Una marca más visible. Una web más viva. Más oportunidades." },
  { _id: "l1", name: "Macheta Smash Burger", url: "https://macheta.es", darkBackground: false, localLogo: "/macheta-logo.png", w: 960, h: 540, tagline: "Construimos presencia digital para que la marca no pase desapercibida." },
  { _id: "l2", name: "Roots Rioja", url: "https://rootsrioja.com", darkBackground: false, localLogo: "/roots-logo.png", w: 512, h: 512, tagline: "Una marca con historia necesitaba una presencia digital a la altura." },
  { _id: "l3", name: "Briya Exterior Cleaning", url: "https://briya.com.au", darkBackground: true, localLogo: "/briya-logo.png", w: 192, h: 222, tagline: "De servicio local a presencia digital capaz de competir." },
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

  const ctaLabels: Record<string, string> = {
    "/seo": "Quiero aparecer en Google →",
    "/sem": "Quiero clientes ya →",
    "/rrss": "Quiero que mis redes trabajen →",
    "/web": "Quiero una web que venda →",
    "/ia": "Quiero automatizar mi negocio →",
  };
  const accordionServices = services.map(s => {
    let href: string | undefined;
    const lower = s.name.toLowerCase();
    if (lower.includes("seo")) href = "/seo";
    else if (lower.includes("sem") || lower.includes("paid")) href = "/sem";
    else if (lower.includes("redes") || lower.includes("social")) href = "/rrss";
    else if (lower.includes("web")) href = "/web";
    else if (lower.includes("ia") || lower.includes("inteligencia") || lower.includes("automat")) href = "/ia";
    return { icon: s.icon || "", title: s.name, desc: s.description, href, ctaLabel: href ? ctaLabels[href] : undefined };
  });
  const clientsFromCms = data.clients ?? [];
  const useLocalClients = clientsFromCms.length === 0;

  const router = useRouter();
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
      preference: fd.get("preferencia"),
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
      if (res.ok) {
        router.push("/gracias");
      } else {
        setFormState("error");
      }
    } catch {
      setFormState("error");
    }
  }

  return (
    <>
      <style>{`
        .btn { display: inline-block; padding: 0.625rem 1.5rem; background: var(--accent); color: #fff; font-family: var(--font-body); font-weight: 500; font-size: 0.875rem; text-decoration: none; border-radius: 6px; border: none; cursor: pointer; transition: opacity 0.2s, transform 0.15s; letter-spacing: 0.01em; }
        .btn:hover { opacity: 0.88; transform: translateY(-1px); }
        .btn:disabled { opacity: 0.6; cursor: default; }
        .btn-outline { background: transparent; border: 1px solid var(--border); color: var(--text); }
        .btn-outline:hover { border-color: var(--accent); color: var(--accent); opacity: 1; }
        .hero { position: relative; display: flex; align-items: center; justify-content: center; text-align: center; min-height: 100vh; overflow: hidden; }
        .hero-video { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; z-index: 0; object-position: 70% center; }
        .hero-overlay { position: absolute; inset: 0; background: rgba(0,0,0,0.45); z-index: 1; }
        .hero-content { position: relative; z-index: 2; max-width: 780px; display: flex; flex-direction: column; align-items: center; padding: 2rem; }
        .hero-headline { font-family: var(--font-display); font-weight: 800; font-size: clamp(2.5rem, 6vw, 4.5rem); line-height: 1.08; letter-spacing: -0.03em; text-wrap: balance; margin-bottom: 2.5rem; color: #fff; }
        .hero-glow { color: #4d9aff; text-shadow: 0 0 20px rgba(0,74,173,0.8), 0 0 40px rgba(0,74,173,0.5), 0 0 80px rgba(0,74,173,0.3); }
        .hero-actions { display: flex; gap: 1rem; align-items: center; flex-wrap: wrap; justify-content: center; }
        .hero .btn { padding: 0.875rem 2rem; font-size: 1rem; }
        .hero .btn-outline { border-color: rgba(255,255,255,0.4); color: #fff; }
        .hero .btn-outline:hover { border-color: #fff; color: #fff; background: rgba(255,255,255,0.1); }
        .stats-bar { border-top: 1px solid var(--border); border-bottom: 1px solid var(--border); display: grid; grid-template-columns: repeat(4, 1fr); gap: 1px; background: var(--border); }
        .stat-cell { background: var(--bg); padding: 2rem 2.5rem; }
        .stat-num { font-family: var(--font-display); font-weight: 800; font-size: clamp(2rem, 4vw, 3.25rem); letter-spacing: -0.04em; color: var(--accent); font-variant-numeric: tabular-nums; line-height: 1; margin-bottom: 0.4rem; }
        .stat-label { font-size: 0.8125rem; color: var(--muted); font-weight: 400; letter-spacing: 0.02em; }
        .section-wrap { padding: 6rem 2.5rem; max-width: 1200px; margin: 0 auto; }
        .section-tag { font-size: 0.75rem; font-weight: 500; letter-spacing: 0.14em; text-transform: uppercase; color: var(--accent); margin-bottom: 1rem; }
        .section-title { font-family: var(--font-display); font-weight: 700; font-size: clamp(2rem, 3.5vw, 3rem); letter-spacing: -0.03em; line-height: 1.1; text-wrap: balance; margin-bottom: 1.25rem; }
        .section-body { font-size: 1.0625rem; color: var(--muted); max-width: 540px; line-height: 1.7; font-weight: 300; }
        .process-section { background: var(--bg); border-top: 1px solid var(--border); border-bottom: 1px solid var(--border); }
        .process-steps { display: grid; grid-template-columns: repeat(4, 1fr); gap: 3rem; margin-top: 3.5rem; }
        .step-num { font-family: var(--font-display); font-weight: 800; font-size: 0.75rem; letter-spacing: 0.1em; color: var(--accent); margin-bottom: 1rem; }
        .step-title { font-family: var(--font-display); font-weight: 700; font-size: 1.25rem; letter-spacing: -0.02em; margin-bottom: 0.75rem; }
        .step-desc { font-size: 0.9375rem; color: var(--muted); line-height: 1.65; font-weight: 300; }
        .proof-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1px; background: var(--border); border: 1px solid var(--border); margin-top: 3.5rem; }
        .proof-card { background: var(--bg); padding: 2.5rem; }
        .proof-result { font-family: var(--font-display); font-weight: 800; font-size: 2.5rem; letter-spacing: -0.04em; color: var(--accent); margin-bottom: 0.5rem; line-height: 1; }
        .proof-context { font-size: 0.9375rem; color: var(--muted); margin-bottom: 1.25rem; line-height: 1.6; font-weight: 300; }
        .proof-sector { display: inline-block; font-size: 0.75rem; font-weight: 500; letter-spacing: 0.08em; text-transform: uppercase; color: var(--muted); background: var(--surface); border: 1px solid var(--border); padding: 0.25rem 0.625rem; border-radius: 4px; }
        .clients-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 1.25rem; margin-top: 3.5rem; }
        .client-card { display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 1.25rem; padding: 2.5rem 2rem; border: 1px solid var(--border); border-radius: 12px; background: var(--bg); text-decoration: none; transition: border-color 0.2s, transform 0.2s, box-shadow 0.2s; min-height: 200px; }
        .client-card:hover { border-color: var(--accent); transform: translateY(-3px); box-shadow: 0 12px 32px rgba(0,74,173,0.1); }
        .client-logo-box { display: flex; align-items: center; justify-content: center; width: 100%; height: 110px; }
        .client-logo-box--dark { background: #0a1733; border-radius: 10px; padding: 1rem 1.5rem; }
        .client-logo { height: 100%; width: auto; max-width: 100%; object-fit: contain; }
        .client-visit { font-family: var(--font-body); font-size: 0.8125rem; font-weight: 500; letter-spacing: 0.04em; color: var(--accent); }
        .client-tagline { font-size: 0.875rem; color: var(--muted); text-align: center; line-height: 1.5; font-weight: 300; padding: 0 0.5rem; }
        .concept-section { text-align: center; padding: 5rem 2.5rem; }
        .concept-title { font-family: var(--font-display); font-weight: 700; font-size: clamp(1.5rem, 3vw, 2.25rem); letter-spacing: -0.02em; line-height: 1.3; max-width: 600px; margin: 0 auto; }
        .concept-accent { color: var(--accent); }
        .brand-idea { text-align: center; padding: 5rem 2.5rem; border-top: 1px solid var(--border); border-bottom: 1px solid var(--border); background: var(--surface); }
        .brand-idea-title { font-family: var(--font-display); font-weight: 700; font-size: clamp(1.75rem, 3vw, 2.5rem); letter-spacing: -0.03em; line-height: 1.2; margin-bottom: 1.5rem; }
        .brand-idea-body { font-size: 1.0625rem; color: var(--muted); max-width: 560px; margin: 0 auto; line-height: 1.75; font-weight: 300; }
        .closing-cta { text-align: center; padding: 5rem 2.5rem; border-bottom: 1px solid var(--border); }
        .closing-cta-title { font-family: var(--font-display); font-weight: 700; font-size: clamp(1.75rem, 3vw, 2.5rem); letter-spacing: -0.03em; line-height: 1.2; margin-bottom: 1rem; }
        .closing-cta-body { font-size: 1.0625rem; color: var(--muted); max-width: 560px; margin: 0 auto; line-height: 1.75; font-weight: 300; margin-bottom: 2rem; }
        .stats-intro { text-align: center; padding: 3rem 2.5rem 1rem; }
        .stats-intro-text { font-size: 0.875rem; color: var(--muted); letter-spacing: 0.06em; text-transform: uppercase; font-weight: 500; }
        .stats-outro { text-align: center; padding: 1rem 2.5rem 3rem; }
        .stats-outro-text { font-size: 1rem; color: var(--muted); font-weight: 300; font-style: italic; }
        .contact-wrap { display: grid; grid-template-columns: 1fr 1fr; gap: 5rem; align-items: start; }
        .contact-form { display: flex; flex-direction: column; gap: 1rem; }
        .form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; }
        .field { display: flex; flex-direction: column; gap: 0.375rem; }
        label { font-size: 0.8125rem; font-weight: 500; color: var(--muted); letter-spacing: 0.02em; }
        input, textarea, select { background: var(--surface); border: 1px solid var(--border); border-radius: 6px; padding: 0.75rem 1rem; color: var(--text); font-family: var(--font-body); font-size: 0.9375rem; font-weight: 400; width: 100%; transition: border-color 0.2s; outline: none; appearance: none; }
        input:focus, textarea:focus, select:focus { border-color: var(--accent); box-shadow: 0 0 0 3px var(--accent-glow); }
        .pref-group { display: flex; gap: 0.625rem; }
        .pref { flex: 1; display: flex; align-items: center; justify-content: center; gap: 0.5rem; background: var(--surface); border: 1px solid var(--border); border-radius: 6px; padding: 0.75rem 1rem; cursor: pointer; font-size: 0.9375rem; color: var(--text); font-weight: 400; transition: border-color 0.2s, background 0.2s; }
        .pref input { position: absolute; opacity: 0; width: 0; height: 0; }
        .pref:hover { border-color: var(--accent); }
        .pref:has(input:checked) { border-color: var(--accent); background: var(--accent-glow); color: var(--accent); font-weight: 500; }
        .pref:has(input:focus-visible) { box-shadow: 0 0 0 3px var(--accent-glow); }
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
          .stats-bar { grid-template-columns: repeat(2, 1fr); }
          .process-steps { grid-template-columns: 1fr; gap: 2rem; }
          .proof-grid { grid-template-columns: 1fr; }
          .clients-grid { grid-template-columns: 1fr; }
          .contact-wrap { grid-template-columns: 1fr; gap: 3rem; }
          .form-row { grid-template-columns: 1fr; }
        }
        @media (max-width: 600px) {
          .hero { padding: 6rem 1.25rem 3rem; }
          .section-wrap { padding: 4rem 1.25rem; }
          .stat-cell { padding: 1.5rem; }
          footer { flex-direction: column; gap: 1rem; text-align: center; }
        }
      `}</style>

      <ServiceNav />

      <div className="hero" id="hero-section">
        <video
          className="hero-video"
          src="/hero-video.mp4"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
        />
        <div className="hero-overlay" />
        <div className="hero-content">
          <h1 className="hero-headline">Tu negocio merece más <span className="hero-glow">clientes</span>.</h1>
          <div className="hero-actions">
            <a href="#contacto" className="btn">{settings.heroPrimaryCta}</a>
            <a href="#servicios" className="btn btn-outline">{settings.heroSecondaryCta}</a>
          </div>
        </div>
      </div>

      <div className="concept-section">
        <div className="concept-title">
          El océano digital está lleno.<br />
          La pregunta no es si hay clientes.<br />
          La pregunta es: <span className="concept-accent">¿Quién se los está llevando?</span>
        </div>
      </div>

      <div className="stats-intro">
        <div className="stats-intro-text">Algunas cosas que nos gusta mover:</div>
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
      <div className="stats-outro">
        <div className="stats-outro-text">No hacemos magia. Hacemos que el marketing deje de ser una apuesta.</div>
      </div>

      <section id="servicios">
        <div className="section-wrap">
          <div className="section-tag">{settings.servicesTag}</div>
          <h2 className="section-title">{settings.servicesTitle}</h2>
          <p className="section-body">{settings.servicesBody}</p>
          <ServicesAccordionGrid services={accordionServices} />
        </div>
      </section>

      <div className="brand-idea">
        <h2 className="brand-idea-title">El océano no premia al que espera.<br />Premia al que se mueve mejor.</h2>
        <p className="brand-idea-body">
          Tu competencia también tiene una web. También publica en Instagram. También hace Ads. También dice que &ldquo;ofrece la mejor calidad&rdquo;.<br /><br />
          Entonces deja de competir por parecerte a ellos. Hazlo mejor. Hazlo más rápido. Hazlo con más intención.<br /><br />
          En Lucaseo trabajamos para que tu negocio tenga una presencia digital imposible de ignorar.
        </p>
      </div>

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
                    <span className="client-tagline">{c.tagline}</span>
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

      <div className="closing-cta">
        <h2 className="closing-cta-title">¿Tienes buen negocio pero internet no se ha enterado?</h2>
        <p className="closing-cta-body">
          Perfecto. Ese es un problema bastante más fácil de solucionar que tener un mal negocio.<br /><br />
          Cuéntanos qué tienes, dónde estás y qué quieres conseguir. Te diremos qué vemos, qué cambiaríamos y por dónde empezaríamos.<br /><br />
          Sin presión. Sin discurso de ventas de 47 diapositivas.
        </p>
        <a href="#contacto" className="btn">Cuéntanos qué necesitas →</a>
      </div>

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
                    <label>¿Cómo prefieres que te contactemos?</label>
                    <div className="pref-group">
                      <label className="pref">
                        <input type="radio" name="preferencia" value="Email" defaultChecked />
                        <span>Por email</span>
                      </label>
                      <label className="pref">
                        <input type="radio" name="preferencia" value="Teléfono" />
                        <span>Por teléfono</span>
                      </label>
                    </div>
                  </div>
                  <div className="field">
                    <label htmlFor="objetivo">¿Qué quieres conseguir?</label>
                    <select id="objetivo" name="objetivo" defaultValue="">
                      <option value="">Selecciona una opción</option>
                      <option>Que me encuentren más en Google</option>
                      <option>Conseguir clientes con Ads</option>
                      <option>Mejorar mis redes</option>
                      <option>Crear una web nueva</option>
                      <option>Automatizar procesos con IA</option>
                      <option>No tengo ni idea. Necesito orientación</option>
                    </select>
                  </div>
                  <div className="field">
                    <label htmlFor="mensaje">Cuéntanos un poco sobre tu negocio</label>
                    <textarea id="mensaje" name="mensaje" placeholder="¿Qué haces? ¿Qué te preocupa? ¿Qué te gustaría conseguir?" />
                  </div>
                  {formState === "error" && (
                    <p className="form-err">No se pudo enviar. Inténtalo de nuevo o escríbenos a {settings.contactEmail}.</p>
                  )}
                  <p className="form-note">Tus datos son tuyos. No los vendemos, no los alquilamos y no te mandamos veinte emails por semana.</p>
                  <button type="submit" className="btn btn-full" disabled={formState === "sending"}>
                    {formState === "sending" ? "Enviando…" : "Quiero hablar con Lucaseo →"}
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
