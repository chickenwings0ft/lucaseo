import type { Metadata } from "next";
import ServiceNav from "../components/ServiceNav";
import ServiceCta from "../components/ServiceCta";
import SiteFooter from "../components/SiteFooter";

export const metadata: Metadata = {
  title: "Sobre Lucas | Lucaseo — Quién está detrás",
  description: "Conoce a Lucas, fundador de Lucaseo. Marketing digital, SEO, inteligencia artificial y una obsesión: que tu negocio crezca.",
};

export default function SobreMi() {
  return (
    <>
      <ServiceNav />
      <style>{`
        .about-hero { padding: 9rem 2rem 5rem; background: linear-gradient(168deg, #f0f5ff 0%, #ffffff 68%); border-bottom: 1px solid rgba(0,74,173,0.1); }
        .about-in { max-width: 800px; margin: 0 auto; }
        .about-eyebrow { font-size: 0.75rem; font-weight: 600; color: #004aad; letter-spacing: 0.16em; text-transform: uppercase; margin-bottom: 1.5rem; }
        .about-hero h1 { font-family: var(--font-display); font-weight: 800; font-size: clamp(2.25rem, 5vw, 4rem); line-height: 1.06; letter-spacing: -0.03em; margin-bottom: 1.75rem; }
        .about-hero h1 em { font-style: normal; color: #004aad; }
        .about-lead { font-size: 1.125rem; color: #5a6480; line-height: 1.75; margin-bottom: 1.25rem; max-width: 640px; }
        .about-section { max-width: 800px; margin: 0 auto; padding: 4rem 2rem; }
        .about-section + .about-section { border-top: 1px solid rgba(0,74,173,0.1); }
        .about-tag { font-size: 0.75rem; font-weight: 600; letter-spacing: 0.14em; text-transform: uppercase; color: #004aad; margin-bottom: 1rem; }
        .about-section h2 { font-family: var(--font-display); font-weight: 700; font-size: clamp(1.5rem, 3vw, 2rem); letter-spacing: -0.03em; margin-bottom: 1.25rem; }
        .about-section p { font-size: 1rem; color: #3d4661; line-height: 1.8; margin-bottom: 1.25rem; }
        .about-values { display: grid; grid-template-columns: 1fr 1fr; gap: 2rem; margin-top: 2rem; }
        .about-value { padding: 1.5rem; border: 1px solid rgba(0,74,173,0.12); border-radius: 8px; }
        .about-value h3 { font-family: var(--font-display); font-weight: 700; font-size: 1.0625rem; margin-bottom: 0.5rem; }
        .about-value p { font-size: 0.9375rem; color: #5a6480; margin-bottom: 0; }
        .about-timeline { list-style: none; padding: 0; margin: 2rem 0 0; display: flex; flex-direction: column; gap: 1.5rem; }
        .about-timeline li { display: flex; gap: 1.25rem; align-items: flex-start; }
        .about-year { font-family: var(--font-display); font-weight: 800; font-size: 1rem; color: #004aad; flex-shrink: 0; min-width: 48px; }
        .about-timeline p { font-size: 0.9375rem; color: #3d4661; line-height: 1.7; margin: 0; }
        @media (max-width: 600px) { .about-values { grid-template-columns: 1fr; } }
      `}</style>

      <section className="about-hero">
        <div className="about-in">
          <div className="about-eyebrow">Sobre Lucas</div>
          <h1>Marketing digital con <em>obsesión por los resultados</em></h1>
          <p className="about-lead">
            No me hice marketero por accidente. Empecé vendiendo en internet a los 17 años y desde entonces no he parado de aprender, experimentar y, sobre todo, generar resultados medibles para negocios reales.
          </p>
          <p className="about-lead">
            Lucaseo nace de una frustración: ver cómo agencias grandes cobran mucho, hacen poco y nadie rinde cuentas. Decidí crear algo diferente: una agencia donde la transparencia, la velocidad y los resultados no son eslóganes — son la forma de trabajar.
          </p>
        </div>
      </section>

      <div className="about-section">
        <div className="about-tag">Mi historia</div>
        <h2>De vender por internet a construir agencia</h2>
        <p>Empecé en el mundo digital antes de saber que existía el marketing digital. A los 17 años vendía productos por internet, aprendiendo a base de prueba y error cómo funcionaban Google, las redes sociales y la publicidad online. Cada euro de mi bolsillo que invertía tenía que dar retorno — y eso me enseñó algo que muchas agencias grandes nunca aprenden: el dinero del cliente no es abstracto.</p>
        <p>Después vinieron años de formación, de trabajar con empresas de todos los tamaños y de especializarme en SEO, SEM e inteligencia artificial aplicada al marketing. Hoy combino esa experiencia práctica con las herramientas más avanzadas del mercado para dar a cada cliente lo que necesita: más clientes, no más métricas de vanidad.</p>
        <p>Lucaseo no es una agencia que quiere ser grande. Es una agencia que quiere ser buena. Prefiero tener 15 clientes a los que dedico la atención que merecen que 150 a los que no puedo servir bien.</p>

        <ul className="about-timeline">
          <li><span className="about-year">2019</span><p>Primeras ventas online y descubrimiento del marketing digital como disciplina.</p></li>
          <li><span className="about-year">2021</span><p>Primeros clientes de SEO y SEM. Resultados medibles desde el primer proyecto.</p></li>
          <li><span className="about-year">2023</span><p>Especialización en inteligencia artificial aplicada al marketing y automatización de procesos.</p></li>
          <li><span className="about-year">2024</span><p>Fundación de Lucaseo como agencia. Foco en SEO, SEM, RRSS, web e IA.</p></li>
          <li><span className="about-year">2025</span><p>Expansión internacional. Clientes en España, Latinoamérica y Australia.</p></li>
        </ul>
      </div>

      <div className="about-section">
        <div className="about-tag">Cómo trabajo</div>
        <h2>Cuatro principios que no negocio</h2>
        <div className="about-values">
          <div className="about-value">
            <h3>Transparencia radical</h3>
            <p>Verás cada acción que hago, cada euro que gasto y cada resultado que obtengo. Si algo no funciona, lo digo yo antes de que lo descubras tú.</p>
          </div>
          <div className="about-value">
            <h3>Resultados sobre actividad</h3>
            <p>No mido mi trabajo en horas facturadas ni en informes enviados. Lo mido en clientes conseguidos, posiciones ganadas y retorno generado.</p>
          </div>
          <div className="about-value">
            <h3>Velocidad real</h3>
            <p>Respondo en horas, no en días. Ejecuto en días, no en semanas. En un mundo donde las agencias tardan un mes en enviarte una propuesta, yo la tengo lista el mismo día.</p>
          </div>
          <div className="about-value">
            <h3>Sin contratos largos</h3>
            <p>Si mi trabajo no te convence este mes, te vas el próximo. Sin penalizaciones, sin letra pequeña. Si tengo que retenerte con un contrato, algo estoy haciendo mal.</p>
          </div>
        </div>
      </div>

      <div className="about-section">
        <div className="about-tag">Especialización</div>
        <h2>Lo que sé hacer y lo que no</h2>
        <p>Soy bueno en SEO, SEM, redes sociales, desarrollo web e inteligencia artificial aplicada al marketing. Esos son mis cinco pilares y es donde puedo darte resultados demostrables.</p>
        <p>No hago branding corporativo, diseño de identidad visual, producción audiovisual ni relaciones públicas. Si necesitas algo fuera de mi especialidad, te recomiendo a alguien de confianza en lugar de hacerlo a medias.</p>
        <p>Prefiero ser excelente en cinco cosas que mediocre en veinte. Y prefiero decirte que algo no es lo mío a darte un servicio que no esté a la altura.</p>
      </div>

      <ServiceCta
        title="¿Hablamos?"
        body="Cuéntame tu situación. Sin compromiso, sin presión, sin pitch de venta. Solo una conversación para ver si puedo ayudarte."
      />
      <SiteFooter />
    </>
  );
}
