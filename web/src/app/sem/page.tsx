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
  { q: "¿Cuánto presupuesto necesito para empezar con Google Ads?", a: "Depende del sector y la competencia, pero con presupuestos desde 500–800€/mes ya se pueden obtener resultados medibles. Lo importante no es el presupuesto total, sino la eficiencia: cómo se distribuye, qué keywords se puja y cómo está configurada la campaña para convertir." },
  { q: "¿Qué diferencia hay entre Google Ads y el SEO?", a: "Son complementarios, no sustitutos. Los Ads dan visibilidad inmediata — apareces desde el día 1 — pero pagas por cada clic. El SEO tarda más en arrancar pero crea una base de tráfico gratuita y permanente. La estrategia ideal combina los dos: Ads para capturar demanda ahora, SEO para reducir la dependencia del presupuesto publicitario con el tiempo." },
  { q: "¿Puedo llevar mis propias campañas de Google Ads?", a: "Técnicamente sí. Pero Google Ads es una plataforma compleja donde las configuraciones incorrectas pueden desperdiciar el 60-70% del presupuesto. Hemos auditado decenas de cuentas gestionadas por el propio negocio y los errores más comunes son siempre los mismos: pujas mal configuradas, audiencias demasiado amplias, palabras negativas ausentes y páginas de destino que no convierten." },
  { q: "¿Cómo medís el retorno de las campañas?", a: "Implementamos tracking de conversiones completo: llamadas telefónicas, formularios enviados, compras en e-commerce, visitas a páginas clave. Cada euro invertido tiene un retorno medible. Reportamos ROAS, CPA, CPL y todas las métricas que realmente importan para tu negocio." },
  { q: "¿Trabajáis con Social Ads también?", a: "Sí. Dentro de nuestro servicio de SEM incluimos estrategia de Social Ads — Meta Ads (Instagram y Facebook) — como canal complementario a Google Ads cuando tiene sentido para el negocio. Para estrategias específicas de RRSS, tenemos también un servicio dedicado." },
];

const semServices: AccordionService[] = [
  { icon: "🔍", title: "Google Ads", desc: "Anuncios de texto en los resultados de búsqueda. El formato con mayor intención de compra: tu anuncio aparece cuando alguien está buscando activamente lo que tú ofreces. Configuramos las keywords, las pujas, las extensiones y las páginas de destino para maximizar la tasa de conversión.", href: "/sem/google-ads" },
  { icon: "🖼️", title: "Display & Remarketing", desc: "Banners visuales en millones de webs de la Red de Display de Google. Ideales para notoriedad de marca y, especialmente, para remarketing: recuperar visitantes que ya conocen tu negocio pero aún no han convertido. El clic más barato del ecosistema digital." },
  { icon: "⚡", title: "Performance Max", desc: "La campaña más avanzada de Google: un solo formato que distribuye presupuesto automáticamente entre Search, Display, YouTube, Gmail y Discover usando machine learning. Perfecta cuando tienes datos de conversión suficientes y quieres escalar de forma eficiente." },
  { icon: "🛒", title: "Shopping Ads", desc: "Para e-commerce: tus productos aparecen directamente en Google con foto, precio y nombre de la tienda antes de que el usuario haga clic. La mayor intención de compra posible. Optimizamos tu feed de productos, las pujas por categoría y la estrategia de descuentos estacional." },
  { icon: "🎥", title: "YouTube Ads", desc: "Video ads en el segundo buscador del mundo. Formatos in-stream que solo cobran cuando alguien ve al menos 30 segundos de tu anuncio. Especialmente efectivos para negocios con productos visuales, servicios premium o cuando quieres construir marca a escala." },
  { icon: "📱", title: "Meta Ads", desc: "Instagram y Facebook Ads como canal de demanda complementario a Google. Mientras Google captura a quien ya busca, Meta crea la necesidad en quienes todavía no han buscado. Combinados correctamente, multiplican el retorno total de tu inversión publicitaria.", href: "/sem/meta-ads" },
  { icon: "🎵", title: "TikTok Ads", desc: "TikTok ya no es solo para adolescentes. Es la plataforma donde 1.000 millones de usuarios pasan más de 90 minutos al día. Su publicidad tiene algo que no tiene ninguna otra: parece contenido, no publicidad. El CPM más bajo del mercado.", href: "/sem/tiktok-ads" },
  { icon: "🤖", title: "ChatGPT Ads", desc: "200 millones de personas usan ChatGPT cada semana para buscar información y tomar decisiones de compra. OpenAI ha abierto su plataforma publicitaria. Los early adopters van a llevarse la mayor ventaja competitiva de la década.", href: "/sem/chatgpt-ads" },
];

const process = [
  { n: "01", t: "Auditoría y configuración", d: "Revisamos tu cuenta actual (si existe), identificamos el dinero que se está desperdiciando y configuramos la estructura de campaña correcta desde cero: grupos de anuncios bien segmentados, keywords negativas, extensiones y conversiones correctamente trackeadas." },
  { n: "02", t: "Investigación de keywords", d: "Mapeamos las búsquedas con mayor intención de compra en tu sector, analizamos a tu competencia en Ads y determinamos las pujas óptimas para cada keyword. El objetivo: aparecer en los momentos que importan sin pagar de más." },
  { n: "03", t: "Creación de anuncios", d: "Escribimos anuncios que destacan, incluyen la propuesta de valor correcta y llevan al usuario exactamente donde necesita llegar. A/B testing continuo de titulares y descripciones para mejorar el CTR semana a semana." },
  { n: "04", t: "Optimización continua", d: "Las campañas no se configuran y se olvidan. Revisamos el rendimiento semanalmente, ajustamos pujas, pausamos lo que no funciona, escalamos lo que sí. Tu presupuesto trabaja cada vez más eficientemente con el tiempo." },
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
          <div className="eyebrow">SEM · Google Ads</div>
          <h1>Clientes desde <em>el primer día</em>,<br />no desde el primer año.</h1>
          <p className="hero-lead">
            El SEO orgánico es poderoso pero tarda meses. Tu negocio necesita resultados ahora. Google Ads pone tu oferta frente a personas que ya están buscando exactamente lo que vendes — con intención de compra real — y cobra solo cuando hacen clic. La pregunta no es si usar Ads, sino si los tienes bien configurados.
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
        <div className="tag">El problema real</div>
        <h2>Google Ads no es difícil.<br />Hacerlo bien sí lo es.</h2>
        <p className="lead">
          El 80% de las cuentas de Google Ads que auditamos tienen el mismo problema: presupuesto que se desperdicia en keywords irrelevantes, páginas de destino que no convierten, pujas configuradas de forma genérica y cero datos de conversión correctamente instalados. El resultado es una cuenta cara que no trae clientes.
        </p>
        <p className="lead" style={{ marginTop: "1.25rem" }}>
          Google Ads gestionado correctamente es una máquina de clientes: pagas una cantidad predecible por cada lead o venta, conoces exactamente tu coste de adquisición y puedes escalar el presupuesto sabiendo que el retorno se mantiene. Ese es el estándar que aplicamos a todas las cuentas que gestionamos.
        </p>
      </div>

      {/* FORMATOS */}
      <div className="wrap" id="formatos">
        <div className="tag">Formatos que gestionamos</div>
        <h2>Cada euro en el formato<br />que más retorno da para tu negocio</h2>
        <p className="lead">No todas las campañas son iguales. Elegimos el mix de formatos según tu objetivo, tu sector y la fase del embudo en que se encuentra tu cliente potencial.</p>
        <ServicesAccordionGrid services={semServices} />
      </div>

      {/* PROCESO */}
      <div className="process-sec">
        <div className="wrap">
          <div className="tag" style={{ color: "rgba(255,255,255,0.45)" }}>Proceso</div>
          <h2>De cuenta desde cero<br />a máquina de clientes</h2>
          <p className="lead">Cuatro fases que convierten tu presupuesto en resultados predecibles.</p>
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
          <div className="tag">SEM vs. gestión propia</div>
          <h2>Lo que cambia cuando<br />un especialista gestiona tus Ads</h2>
          <div className="compare-grid">
            <div className="compare-col">
              <h3>❌ Gestionando tus propias campañas</h3>
              <ul>
                <li><span className="cross">✗</span> Horas semanales que no tienes dedicadas a la plataforma</li>
                <li><span className="cross">✗</span> Presupuesto desperdiciado en keywords que no convierten</li>
                <li><span className="cross">✗</span> Sin datos de conversión correctamente configurados</li>
                <li><span className="cross">✗</span> Páginas de destino genéricas con tasas de conversión bajas</li>
                <li><span className="cross">✗</span> Pujas manuales sin estrategia ni benchmarks del sector</li>
              </ul>
            </div>
            <div className="compare-col">
              <h3>✅ Con Lucaseo gestionando tus Ads</h3>
              <ul>
                <li className="good"><span className="check">✓</span> Tú te dedicas a tu negocio, nosotros al rendimiento</li>
                <li className="good"><span className="check">✓</span> Cada céntimo en búsquedas con intención de compra real</li>
                <li className="good"><span className="check">✓</span> Tracking de conversiones 100% operativo desde el día 1</li>
                <li className="good"><span className="check">✓</span> Landing pages específicas por campaña y keyword</li>
                <li className="good"><span className="check">✓</span> Estrategia de pujas basada en datos del sector y CPA objetivo</li>
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
        title="¿Cuánto estás dejando de ganar ahora mismo?"
        body="Auditamos tu cuenta de Google Ads actual — o te diseñamos la estructura desde cero — y te mostramos el potencial exacto de tus campañas. Sin compromiso."
      />
    </>
  );
}
