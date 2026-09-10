import type { Metadata } from "next";
import ServiceNav from "../components/ServiceNav";
import ServiceCta from "../components/ServiceCta";

export const metadata: Metadata = {
  title: "Automatizaciones de IA | Lucaseo — Trabaja menos, cierra más",
  description: "Automatizamos los procesos repetitivos de tu negocio con Inteligencia Artificial. CRM, leads, emails y atención al cliente en piloto automático.",
};

const automations = [
  { icon: "🤖", title: "Chatbots con IA", desc: "Un asistente de IA en tu web que responde preguntas, cualifica leads y agenda reuniones a cualquier hora del día. Entrenado con el conocimiento de tu negocio: servicios, precios, preguntas frecuentes. El lead entra, el bot cualifica, tú cierras." },
  { icon: "📧", title: "Email Marketing Automatizado", desc: "Secuencias de emails que se activan según el comportamiento del usuario: se registró, pidió información, vio una página específica, abandonó un carrito. Cada email en el momento exacto, con el mensaje exacto, sin que tengas que enviar nada manualmente." },
  { icon: "🎯", title: "Lead Scoring Automático", desc: "No todos los leads son iguales. Automatizamos la puntuación de cada contacto según su comportamiento, empresa, cargo y engagement con tu contenido. Tus comerciales trabajan primero en los leads con más probabilidad de cierre — no en los más recientes." },
  { icon: "🔄", title: "Integración CRM", desc: "Conectamos tu web, tus formularios, tus ads y tus emails con HubSpot, Pipedrive o el CRM que uses. Nada cae en el olvido: cada lead queda registrado automáticamente, enriquecido con datos y asignado al comercial correcto." },
  { icon: "📱", title: "WhatsApp Automation", desc: "Respuestas automáticas, confirmaciones de cita, recordatorios de seguimiento y notificaciones en WhatsApp Business. La plataforma con mayor tasa de apertura del mundo — y donde está realmente tu cliente." },
  { icon: "📊", title: "Reporting Automatizado", desc: "Dashboards que se actualizan solos con los datos que importan: leads esta semana, conversiones por canal, coste por cliente, ROI de cada campaña. La información que necesitas para tomar decisiones, sin tener que buscarla en cinco herramientas distintas." },
];

const tools = ["n8n", "Make (Integromat)", "Zapier", "OpenAI / GPT-4", "HubSpot", "Pipedrive", "ActiveCampaign", "WhatsApp Business API", "Notion", "Airtable", "Google Sheets", "Slack"];

const useCases = [
  { sector: "Clínica o consulta", before: "La recepcionista tarda 20 minutos en cualificar cada solicitud y agendar manualmente", after: "El chatbot cualifica, el paciente elige fecha en el calendario y el sistema envía confirmación y recordatorio — sin intervención humana" },
  { sector: "Inmobiliaria", before: "Cada lead de Idealista se gestiona a mano, algunos se pierden, el seguimiento es inconsistente", after: "El lead entra al CRM automáticamente, recibe un email de bienvenida en segundos y el agente solo interviene cuando el lead ha demostrado interés real" },
  { sector: "Academia o formación", before: "Alumno potencial pregunta por WhatsApp, nadie responde el fin de semana, lead perdido", after: "IA responde en segundos con toda la información del curso, recoge datos de contacto y cualifica antes de que el lunes llegue un humano" },
  { sector: "E-commerce", before: "Carrito abandonado = lead perdido. El equipo no tiene tiempo de hacer seguimiento manual", after: "Secuencia automatizada de 3 emails en 72h: recordatorio, testimonio y oferta limitada. El 15-20% de los abandonos recuperados sin intervención" },
];

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
        .automations-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1px; background: rgba(0,74,173,0.1); border: 1px solid rgba(0,74,173,0.1); margin-top: 3.5rem; }
        .auto-card { background: #fff; padding: 2.5rem; transition: background 0.2s; }
        .auto-card:hover { background: #f5f8ff; }
        .a-icon { width: 44px; height: 44px; border-radius: 10px; background: rgba(0,74,173,0.07); display: flex; align-items: center; justify-content: center; font-size: 1.25rem; margin-bottom: 1.5rem; }
        .a-title { font-family: var(--font-display), system-ui; font-weight: 700; font-size: 1.1rem; margin-bottom: 0.75rem; }
        .a-desc { font-size: 0.9375rem; color: #5a6480; line-height: 1.7; font-weight: 300; }
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
          .automations-grid { grid-template-columns: 1fr; }
          .cases-grid { grid-template-columns: 1fr; }
          .steps { grid-template-columns: 1fr 1fr; }
        }
      `}</style>

      {/* HERO */}
      <section className="hero">
        <div className="hero-inner">
          <div className="eyebrow">Automatizaciones de IA</div>
          <h1>Trabaja menos.<br /><em>Cierra más.</em></h1>
          <p className="hero-lead">
            Cada tarea repetitiva que hace tu equipo — responder emails, cualificar leads, agendar reuniones, hacer seguimiento de clientes, enviar presupuestos — puede estar ejecutándose automáticamente mientras tú te dedicas a lo que realmente mueve tu negocio. La IA no reemplaza a tu equipo: multiplica lo que puede hacer.
          </p>
          <div className="hero-actions">
            <a href="/#contacto" className="btn">Quiero automatizar mi negocio</a>
            <a href="#casos" className="btn btn-ghost">Ver casos reales</a>
          </div>
        </div>
      </section>

      {/* COPY BLOQUE */}
      <div className="wrap" style={{ borderBottom: "1px solid rgba(0,74,173,0.1)" }}>
        <div className="tag">La oportunidad que la mayoría ignora</div>
        <h2>Tus competidores aún lo hacen<br />todo a mano. Tú no tienes que hacerlo.</h2>
        <p className="lead">
          El 40% del tiempo de trabajo en empresas medianas se dedica a tareas que podrían estar automatizadas con la tecnología actual. Copiar datos entre herramientas, enviar emails de seguimiento, cualificar leads manualmente, generar informes semanales. Horas que tu equipo podría dedicar a cerrar ventas, atender a clientes o desarrollar el negocio.
        </p>
        <p className="lead" style={{ marginTop: "1.25rem" }}>
          La IA generativa — GPT-4, Claude, Gemini — combinada con herramientas de automatización como n8n o Make permite construir sistemas que hacen el trabajo repetitivo por ti: responden, cualifican, registran, envían y escalan al humano solo cuando hay valor real que añadir. No es el futuro. Es lo que los negocios más eficientes ya están haciendo ahora mismo.
        </p>
      </div>

      {/* AUTOMATIZACIONES */}
      <div className="wrap">
        <div className="tag">Qué automatizamos</div>
        <h2>Los procesos que más tiempo<br />te roban, en piloto automático</h2>
        <div className="automations-grid">
          {automations.map(a => (
            <div className="auto-card" key={a.title}>
              <div className="a-icon">{a.icon}</div>
              <div className="a-title">{a.title}</div>
              <p className="a-desc">{a.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CASOS DE USO */}
      <div className="cases-section" id="casos">
        <div className="wrap">
          <div className="tag" style={{ color: "rgba(255,255,255,0.4)" }}>Casos de uso reales</div>
          <h2>Antes y después:<br />negocios que ya funcionan en automático</h2>
          <p className="lead">Lo mismo que hacían a mano, ahora sin intervención humana.</p>
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
          <h2>Las herramientas con las<br />que construimos tus automatizaciones</h2>
          <p className="lead">Usamos las mejores herramientas del mercado para cada capa del sistema — sin atarte a una sola plataforma.</p>
          <div className="tools-grid">
            {tools.map(t => <span className="tool-badge" key={t}>{t}</span>)}
          </div>
        </div>
      </div>

      {/* PROCESO */}
      <div className="process-section">
        <div className="wrap">
          <div className="tag">Cómo trabajamos</div>
          <h2>De proceso manual a sistema<br />automático en 4 fases</h2>
          <div className="steps">
            {[
              { n: "01", t: "Mapeo de procesos", d: "Identificamos qué tareas se repiten, cuánto tiempo consumen y cuáles tienen mayor impacto si se automatizan. No todo hay que automatizar — empezamos por lo que más valor genera." },
              { n: "02", t: "Diseño del sistema", d: "Diseñamos el flujo completo: qué dispara la automatización, qué hace cada paso, cuándo interviene un humano y cómo se mide el resultado. Lo apruebas antes de construirlo." },
              { n: "03", t: "Construcción y pruebas", d: "Construimos las automatizaciones, las conectamos con tus herramientas actuales y hacemos pruebas exhaustivas con casos reales. Nada llega a producción sin estar probado." },
              { n: "04", t: "Lanzamiento y monitorización", d: "El sistema entra en producción. Monitorizamos el rendimiento las primeras semanas, ajustamos lo que sea necesario y te formamos para entender los datos que genera." },
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
        title="¿Cuántas horas pierde tu equipo en tareas repetitivas?"
        body="Hacemos un diagnóstico gratuito de tus procesos actuales e identificamos las automatizaciones con mayor impacto para tu negocio. Sin tecnicismos, sin compromisos."
      />
    </>
  );
}
