import type { Metadata } from "next";
import ServiceNav from "../components/ServiceNav";
import ServiceCta from "../components/ServiceCta";
import FaqSection from "../components/FaqSection";
import ServicesAccordionGrid from "../components/ServicesAccordionGrid";
import type { AccordionService } from "../components/ServicesAccordionGrid";

export const metadata: Metadata = {
  title: "RRSS & Social Ads | Lucaseo — Tu marca donde están tus clientes",
  description: "Gestión de redes sociales y Social Ads en Meta, Instagram y TikTok. Comunidad, contenido y publicidad que convierte seguidores en clientes reales.",
};

const rrssServices: AccordionService[] = [
  { icon: "📸", title: "Instagram", desc: "La parte visual de tu marca necesita intención, no solo diseño bonito." },
  { icon: "👥", title: "Facebook", desc: "Contenido, comunidad y campañas para llegar a públicos reales." },
  { icon: "🎵", title: "TikTok & Reels", desc: "Ideas que entienden el lenguaje del vídeo corto." },
  { icon: "🎯", title: "Meta Ads", desc: "Ponemos dinero detrás de lo que merece escalar." },
  { icon: "✍️", title: "Copywriting", desc: "Escribimos para captar atención y provocar acción." },
  { icon: "📊", title: "Análisis", desc: "Medimos qué consigue negocio." },
  { icon: "📅", title: "Estrategia Mensual", desc: "Tu contenido no debería improvisarse cada lunes.", href: "/rrss/estrategia-mensual" },
  { icon: "💰", title: "Paid Media", desc: "Más alcance. Mejor segmentación. Más oportunidades.", href: "/rrss/paid-media" },
  { icon: "📖", title: "Storytelling", desc: "Porque la gente recuerda historias mucho más que claims.", href: "/rrss/estrategia-storytelling" },
];

const socialAds = [
  { platform: "Instagram Ads", color: "#C13584", icon: "📸", desc: "El feed y las stories de Instagram tienen la mayor tasa de engagement por usuario. Formatos de imagen, vídeo, carrusel y Reels pagados, con segmentación milimétrica por edad, ubicación, intereses y comportamientos de compra." },
  { platform: "Facebook Ads", color: "#1877F2", icon: "📘", desc: "La plataforma con más opciones de segmentación del mundo digital. Lead Ads para capturar contactos directamente en la app, campañas de conversión para e-commerce y tráfico cualificado a tu web sin fricciones." },
  { platform: "TikTok Ads", color: "#010101", icon: "🎵", desc: "El formato de vídeo más viralizable. Campañas In-Feed que aparecen de forma nativa en el scroll de los usuarios, Spark Ads que amplifican tu contenido orgánico y TopView para máxima notoriedad de marca." },
];

const rrssFaqs = [
  { q: "¿Cuánto cuesta la gestión de redes sociales para un negocio?", a: "Depende del alcance: número de plataformas, frecuencia de publicación, si incluye contenido gráfico y vídeo, y si añades Social Ads. En Lucaseo adaptamos cada propuesta al negocio. Lo que no hacemos es paquetes genéricos donde todos pagan lo mismo y reciben lo mismo." },
  { q: "¿Cuántas publicaciones por semana necesita mi negocio en Instagram?", a: "No hay una cifra mágica. Trabajamos habitualmente con 3-5 publicaciones semanales en feed y 2-3 Reels o Stories. Pero la frecuencia no es lo importante: lo es la consistencia, la calidad y que cada pieza tenga un objetivo dentro de la estrategia de redes sociales." },
  { q: "¿Necesito presupuesto de publicidad aparte de la gestión de contenido?", a: "Para la gestión orgánica no. Para Social Ads sí necesitas un presupuesto publicitario que va directamente a Meta o TikTok. Recomendamos un mínimo de 300-500€/mes en publicidad en Instagram o Facebook para tener datos suficientes y poder optimizar las campañas." },
  { q: "¿Vosotros creáis todo el contenido para redes o necesito aportar material?", a: "Creamos los copies, la estrategia y el diseño gráfico. Para vídeos con presencia de personas del negocio necesitamos grabaciones tuyas o de tu equipo. Nosotros nos encargamos de la edición, el montaje y la publicación. Para contenido de producto podemos crearlo completo." },
  { q: "¿Cuánto tarda en verse resultados con una estrategia de redes sociales?", a: "El impacto en alcance y engagement se nota desde el primer mes. El impacto en negocio — leads y ventas — depende de muchos factores, pero con Social Ads bien configurados hay resultados medibles en 2-4 semanas. La gestión orgánica pura tarda más en traducirse en clientes directos." },
  { q: "¿Cómo puedo empezar a trabajar con vosotros en redes sociales?", a: "Escríbenos por el formulario de contacto. Analizamos tus perfiles actuales, tu sector y tu competencia, y te proponemos una estrategia adaptada. La primera conversación no tiene coste ni compromiso." },
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
        @media (max-width: 768px) {
          .ads-platforms { grid-template-columns: 1fr; }
          .why-grid { grid-template-columns: 1fr; gap: 2rem; }
        }
      `}</style>

      {/* HERO */}
      <section className="hero">
        <div className="hero-inner">
          <div className="eyebrow">Redes Sociales</div>
          <h1>Tus clientes ya están ahí.<br /><em>Ahora falta que tu marca diga algo que merezca la pena.</em></h1>
          <p className="hero-lead">
            No necesitamos ayudarte a &quot;estar presente&quot;. Necesitamos ayudarte a ser relevante. Contenido, estrategia, creatividad, paid media y storytelling para que tus redes dejen de ser el sitio donde subes algo los martes.
          </p>
          <div className="hero-actions">
            <a href="/#contacto" className="btn">Quiero una estrategia de RRSS</a>
          </div>
        </div>
      </section>

      {/* INTRO COPY */}
      <div className="wrap" style={{ borderBottom: "1px solid rgba(0,74,173,0.1)" }}>
        <div className="tag">El error</div>
        <h2>Publicar no es tener una estrategia.</h2>
        <p className="lead">
          Puedes publicar cinco veces a la semana. Tener un feed precioso. Conseguir likes. Y seguir sin vender nada. Las redes sociales funcionan cuando cada pieza tiene un papel: atraer, entretener, educar, generar confianza o convertir.
        </p>
      </div>

      {/* SERVICIOS */}
      <div className="wrap">
        <div className="tag">Qué hacemos</div>
        <h2>Hacemos que tu marca tenga algo que contar.</h2>
        <ServicesAccordionGrid services={rrssServices} />
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
              <h2>Contenido que gusta está bien.<br />Contenido que consigue algo está mejor.</h2>
            </div>
            <div>
              <div className="why-list">
                {[
                  { t: "Estrategia", d: "Primero decidimos qué decir y a quién." },
                  { t: "Atención", d: "Después creamos la idea que hace que alguien pare." },
                  { t: "Confianza", d: "Demostramos que sabes de qué hablas." },
                  { t: "Acción", d: "Y llevamos a la persona al siguiente paso." },
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

      <FaqSection topic="redes sociales y Social Ads" faqs={rrssFaqs} />

      <ServiceCta
        title="¿Tus redes generan negocio o solo notificaciones?"
        body="Las miramos contigo y te decimos dónde están las oportunidades."
      />
    </>
  );
}
