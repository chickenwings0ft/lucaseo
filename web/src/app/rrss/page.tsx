import type { Metadata } from "next";
import ServiceNav from "../components/ServiceNav";
import ServiceCta from "../components/ServiceCta";

export const metadata: Metadata = {
  title: "RRSS & Social Ads | Lucaseo — Tu marca donde están tus clientes",
  description: "Gestión de redes sociales y Social Ads en Meta, Instagram y TikTok. Comunidad, contenido y publicidad que convierte seguidores en clientes reales.",
};

const services = [
  { icon: "📸", title: "Gestión de Instagram", desc: "Tu perfil de Instagram como motor de clientes. Estrategia de contenido mensual, diseño de publicaciones, copies que generan engagement real, gestión de comentarios y DMs. No publicamos por publicar: cada post tiene un objetivo claro dentro del embudo." },
  { icon: "👥", title: "Gestión de Facebook", desc: "Facebook sigue siendo la plataforma con más datos de audiencia del mundo. Optimizamos tu página, publicamos contenido de valor para tu segmento, gestionamos reseñas y construimos una comunidad activa alrededor de tu marca." },
  { icon: "🎵", title: "TikTok & Reels", desc: "El formato de vídeo corto es la mayor oportunidad de alcance orgánico actual. Creamos guiones, editamos vídeos y publicamos contenido que engancha — para que tu negocio aparezca en los feeds de miles de potenciales clientes sin invertir en publicidad." },
  { icon: "🎯", title: "Meta Ads (Social Ads)", desc: "Publicidad de pago en Instagram y Facebook con una segmentación que Google no puede igualar: comportamientos, intereses, datos demográficos y audiencias lookalike. Creamos las creatividades, configuramos las campañas y optimizamos el presupuesto para el menor coste por cliente posible." },
  { icon: "✍️", title: "Copywriting & Creatividad", desc: "Las redes sociales se ganan con contenido que detiene el scroll. Escribimos copies con gancho, diseñamos visuales que destacan en el feed y creamos mensajes que conectan con tu audiencia porque hablan exactamente de sus problemas y deseos." },
  { icon: "📊", title: "Análisis & Reporting", desc: "Sin métricas de vanidad. Reportamos alcance, engagement, clics a web, leads generados y coste por resultado. Sabrás exactamente qué publicaciones funcionan, qué audiencias convierten y cómo está evolucionando tu presencia mes a mes." },
];

const socialAds = [
  { platform: "Instagram Ads", color: "#C13584", icon: "📸", desc: "El feed y las stories de Instagram tienen la mayor tasa de engagement por usuario. Formatos de imagen, vídeo, carrusel y Reels pagados, con segmentación milimétrica por edad, ubicación, intereses y comportamientos de compra." },
  { platform: "Facebook Ads", color: "#1877F2", icon: "📘", desc: "La plataforma con más opciones de segmentación del mundo digital. Lead Ads para capturar contactos directamente en la app, campañas de conversión para e-commerce y tráfico cualificado a tu web sin fricciones." },
  { platform: "TikTok Ads", color: "#010101", icon: "🎵", desc: "El formato de vídeo más viralizable. Campañas In-Feed que aparecen de forma nativa en el scroll de los usuarios, Spark Ads que amplifican tu contenido orgánico y TopView para máxima notoriedad de marca." },
];

const faqs = [
  { q: "¿Cuántas publicaciones hacéis por semana?", a: "Depende de la estrategia y la plataforma, pero habitualmente trabajamos con 3–5 publicaciones semanales en Instagram/Facebook y 2–3 Reels o TikToks. La frecuencia no es lo importante: lo es la consistencia y la calidad. Publicamos cuando tenemos algo de valor que decir." },
  { q: "¿Necesito presupuesto de publicidad además de la gestión?", a: "Para la gestión orgánica (publicaciones, comunidad, contenido) no. Para Social Ads sí necesitas un presupuesto publicitario aparte que va directamente a Meta o TikTok. Recomendamos mínimo 300–500€/mes de presupuesto publicitario para poder obtener datos suficientes y optimizar." },
  { q: "¿Vosotros creáis el contenido o necesito dármelo yo?", a: "Creamos los copies, el diseño gráfico y la estrategia de contenido. Para vídeos con presencia de personas del negocio necesitamos grabaciones tuyas o de tu equipo — nosotros hacemos la edición, el montaje y la publicación. Para Reels y TikToks puramente de producto o servicio, podemos crearlo completo." },
  { q: "¿Cómo se diferencia la gestión orgánica de los Social Ads?", a: "La gestión orgánica es el trabajo de publicar contenido, gestionar la comunidad y crecer de forma natural. Los Social Ads son publicidad de pago que amplifica tu alcance a audiencias fuera de tus seguidores actuales. Lo ideal es hacer ambas cosas: el orgánico construye credibilidad, los Ads traen volumen." },
  { q: "¿Cuánto tiempo tarda en verse el impacto en redes sociales?", a: "El impacto en alcance y engagement se ve desde el primer mes. El impacto en negocio — leads, ventas — depende de muchos factores, pero con Social Ads bien configurados hay resultados medibles en las primeras 2–4 semanas. La gestión orgánica pura tarda más en traducirse en clientes." },
];

export default function RrssPage() {
  return (
    <>
      <ServiceNav />
      <style>{`
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { background: #fff; color: #0a0f1e; font-family: var(--font-body), system-ui, sans-serif; }
        .hero { padding: 10rem 2.5rem 6rem; background: linear-gradient(160deg, #fff0f8 0%, #ffffff 60%); border-bottom: 1px solid rgba(0,74,173,0.1); }
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
        .services-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1px; background: rgba(0,74,173,0.1); border: 1px solid rgba(0,74,173,0.1); margin-top: 3.5rem; }
        .svc-card { background: #fff; padding: 2.5rem; transition: background 0.2s; }
        .svc-card:hover { background: #f5f8ff; }
        .s-icon { width: 44px; height: 44px; border-radius: 10px; background: rgba(0,74,173,0.07); display: flex; align-items: center; justify-content: center; font-size: 1.25rem; margin-bottom: 1.5rem; }
        .s-title { font-family: var(--font-display), system-ui; font-weight: 700; font-size: 1.1rem; margin-bottom: 0.75rem; }
        .s-desc { font-size: 0.9375rem; color: #5a6480; line-height: 1.7; font-weight: 300; }
        .ads-section { background: #0a0f1e; color: #fff; }
        .ads-section h2 { color: #fff; }
        .ads-section .lead { color: rgba(255,255,255,0.6); max-width: 100%; }
        .ads-platforms { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.5rem; margin-top: 3.5rem; }
        .platform-card { border-radius: 12px; padding: 2.5rem; border: 1px solid rgba(255,255,255,0.08); background: rgba(255,255,255,0.04); }
        .p-top { display: flex; align-items: center; gap: 0.875rem; margin-bottom: 1.25rem; }
        .p-badge { width: 40px; height: 40px; border-radius: 10px; display: flex; align-items: center; justify-content: center; font-size: 1.125rem; }
        .p-name { font-family: var(--font-display), system-ui; font-weight: 700; font-size: 1.05rem; color: #fff; }
        .p-desc { font-size: 0.9375rem; color: rgba(255,255,255,0.55); line-height: 1.7; font-weight: 300; }
        .why-section { background: #f5f8ff; border-top: 1px solid rgba(0,74,173,0.1); border-bottom: 1px solid rgba(0,74,173,0.1); }
        .why-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 4rem; align-items: center; }
        .why-list { display: flex; flex-direction: column; gap: 1.5rem; margin-top: 1.5rem; }
        .why-item { display: flex; gap: 1rem; }
        .why-n { font-family: var(--font-display), system-ui; font-weight: 800; font-size: 1.5rem; color: rgba(0,74,173,0.2); line-height: 1; flex-shrink: 0; width: 2.5rem; }
        .why-t { font-family: var(--font-display), system-ui; font-weight: 700; font-size: 1rem; margin-bottom: 0.4rem; }
        .why-d { font-size: 0.9rem; color: #5a6480; line-height: 1.65; font-weight: 300; }
        .faq-wrap { max-width: 760px; margin: 0 auto; padding: 5rem 2.5rem; }
        .faq-item { border-bottom: 1px solid rgba(0,74,173,0.1); padding: 2rem 0; }
        .faq-q { font-family: var(--font-display), system-ui; font-weight: 700; font-size: 1.0625rem; margin-bottom: 0.875rem; }
        .faq-a { font-size: 0.9375rem; color: #5a6480; line-height: 1.75; font-weight: 300; }
        @media (max-width: 768px) {
          .services-grid { grid-template-columns: 1fr; }
          .ads-platforms { grid-template-columns: 1fr; }
          .why-grid { grid-template-columns: 1fr; gap: 2rem; }
        }
      `}</style>

      {/* HERO */}
      <section className="hero">
        <div className="hero-inner">
          <div className="eyebrow">RRSS & Social Ads</div>
          <h1>Tu marca donde están<br />tus clientes — <em>todos los días</em>.</h1>
          <p className="hero-lead">
            4.800 millones de personas usan redes sociales cada día. Tu cliente potencial está ahí ahora mismo, desplazando el feed, buscando inspiración, comparando opciones. La pregunta es si tu negocio aparece — y si cuando aparece, tiene algo que valga la pena ver.
          </p>
          <div className="hero-actions">
            <a href="/#contacto" className="btn">Quiero mi estrategia en RRSS</a>
            <a href="#social-ads" className="btn btn-ghost">Ver Social Ads</a>
          </div>
        </div>
      </section>

      {/* INTRO COPY */}
      <div className="wrap" style={{ borderBottom: "1px solid rgba(0,74,173,0.1)" }}>
        <div className="tag">La oportunidad real</div>
        <h2>Las redes sociales ya no son<br />opcionales para los negocios.</h2>
        <p className="lead">
          El 74% de los consumidores utiliza las redes sociales para orientar su decisión de compra. El 54% de los usuarios de Instagram ha buscado un producto o servicio después de verlo en la plataforma. Esto no es marketing digital: es el comportamiento de compra moderno.
        </p>
        <p className="lead" style={{ marginTop: "1.25rem" }}>
          Pero estar en redes sociales sin estrategia es como abrir una tienda en el centro comercial y no poner el rótulo. Publicar por publicar, sin coherencia de marca, sin copy que enganche y sin datos que orienten las decisiones, es dinero y tiempo tirado a la basura. Lo que necesitas es presencia con propósito.
        </p>
      </div>

      {/* SERVICIOS */}
      <div className="wrap">
        <div className="tag">Qué incluye</div>
        <h2>Gestión completa de<br />tu presencia en redes</h2>
        <p className="lead">Desde la estrategia hasta la publicación diaria, pasando por la publicidad de pago.</p>
        <div className="services-grid">
          {services.map(s => (
            <div className="svc-card" key={s.title}>
              <div className="s-icon">{s.icon}</div>
              <div className="s-title">{s.title}</div>
              <p className="s-desc">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* SOCIAL ADS */}
      <div className="ads-section" id="social-ads">
        <div className="wrap">
          <div className="tag" style={{ color: "rgba(255,255,255,0.4)" }}>Social Ads</div>
          <h2>Publicidad en redes que<br />convierte, no solo que impresiona</h2>
          <p className="lead">Los Social Ads permiten llegar a tu cliente ideal con una precisión que ningún medio offline puede igualar. Diseñamos campañas con un solo objetivo: que alguien que no te conoce se convierta en tu cliente.</p>
          <div className="ads-platforms">
            {socialAds.map(p => (
              <div className="platform-card" key={p.platform}>
                <div className="p-top">
                  <div className="p-badge" style={{ background: `${p.color}22`, fontSize: "1.25rem" }}>{p.icon}</div>
                  <div className="p-name">{p.platform}</div>
                </div>
                <p className="p-desc">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* POR QUÉ LUCASEO */}
      <div className="why-section">
        <div className="wrap">
          <div className="why-grid">
            <div>
              <div className="tag">Nuestro enfoque</div>
              <h2>Contenido que vende,<br />no que gusta.</h2>
              <p className="lead">La mayoría de agencias de RRSS te dan likes. Nosotros te damos clientes. La diferencia es el enfoque: cada decisión de contenido está orientada a generar interés real en tu producto o servicio, no a acumular seguidores que nunca comprarán.</p>
            </div>
            <div>
              <div className="why-list">
                {[
                  { t: "Estrategia antes que ejecución", d: "Antes de publicar nada, definimos a quién le hablas, qué problema resuelves, cuál es tu diferencia y cómo se lo contamos de forma que genere acción." },
                  { t: "Copy que detiene el scroll", d: "El primer segundo decide si alguien sigue leyendo o pasa de largo. Escribimos primeras líneas que enganchan porque hablan de lo que le importa a tu cliente." },
                  { t: "Datos para decidir, no para decorar", d: "Analizamos qué tipo de contenido genera más clics a tu web, más mensajes, más ventas — y hacemos más de eso, menos de lo que no funciona." },
                  { t: "Orgánico + Ads: la fórmula completa", d: "El contenido orgánico construye credibilidad y comunidad. Los Ads amplifican lo que ya funciona. Juntos, multiplican el resultado." },
                ].map((w, i) => (
                  <div className="why-item" key={w.t}>
                    <div className="why-n">0{i + 1}</div>
                    <div>
                      <div className="why-t">{w.t}</div>
                      <p className="why-d">{w.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ */}
      <div className="faq-wrap">
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <div className="tag">FAQ</div>
          <h2>Todo lo que necesitas saber<br />sobre RRSS y Social Ads</h2>
        </div>
        {faqs.map(f => (
          <div className="faq-item" key={f.q}>
            <div className="faq-q">{f.q}</div>
            <p className="faq-a">{f.a}</p>
          </div>
        ))}
      </div>

      <ServiceCta
        title="¿Tus redes sociales generan clientes o solo seguidores?"
        body="Hacemos un análisis gratuito de tu presencia digital actual y te mostramos exactamente qué cambiar para que tus redes empiecen a generar negocio real."
      />
    </>
  );
}
