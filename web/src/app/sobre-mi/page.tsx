import type { Metadata } from "next";
import ServiceNav from "../components/ServiceNav";
import ServiceCta from "../components/ServiceCta";
import SiteFooter from "../components/SiteFooter";
import FaqSection from "../components/FaqSection";

export const metadata: Metadata = {
  title: "Sobre Lucas | Lucaseo — Quién está detrás",
  description: "Conoce a Lucas, fundador de Lucaseo. Marketing digital, SEO, inteligencia artificial y una obsesión: que tu negocio crezca.",
};

const sobreMiFaqs = [
  { q: "¿Quién está detrás de Lucaseo?", a: "Lucas, especialista en marketing digital con experiencia en SEO, publicidad online e inteligencia artificial aplicada a negocios. Lucaseo nació de una idea sencilla: que las empresas pequeñas y medianas tengan acceso al mismo marketing digital que las grandes, sin humo ni contratos eternos." },
  { q: "¿Lucaseo es un freelance o una agencia de marketing digital?", a: "Somos una agencia boutique. Trabajamos con un equipo reducido y especializado para poder dar un servicio cercano y personalizado. No somos una fábrica de clientes: elegimos los proyectos donde sabemos que podemos generar impacto real." },
  { q: "¿Con qué tipo de empresas trabaja Lucaseo?", a: "Principalmente con pymes, startups y negocios locales que quieren crecer en digital. Hostelería, servicios profesionales, e-commerce, formación… Nos adaptamos al sector, no al revés. Lo importante es que el negocio tenga potencial y ganas de crecer." },
  { q: "¿En qué os diferenciáis de otras agencias de marketing?", a: "En que no vendemos humo. No prometemos resultados imposibles ni te atamos con contratos de 12 meses. Medimos todo, te contamos qué funciona y qué no, y ajustamos. Si algo no tiene sentido para tu negocio, te lo decimos." },
  { q: "¿Trabajáis solo en España o también con clientes internacionales?", a: "Trabajamos con clientes en España y también con negocios internacionales. El marketing digital no tiene fronteras. Lo que importa es entender el mercado, el idioma y el público objetivo de cada proyecto." },
  { q: "¿Cómo puedo empezar a trabajar con Lucaseo?", a: "Escríbenos por el formulario de contacto. Cuéntanos qué necesitas y qué quieres conseguir. Te respondemos en menos de 24 horas con un diagnóstico inicial gratuito y sin compromiso." },
];

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
        .about-dark { background: #0a1628; padding: 4rem 2rem; }
        .about-dark .about-in { max-width: 800px; margin: 0 auto; }
        .about-dark .about-tag { color: rgba(255,255,255,0.5); }
        .about-dark h2 { font-family: var(--font-display); font-weight: 700; font-size: clamp(1.5rem, 3vw, 2rem); letter-spacing: -0.03em; margin-bottom: 1.25rem; color: #fff; }
        .about-dark p { font-size: 1rem; color: rgba(255,255,255,0.7); line-height: 1.8; margin-bottom: 1.25rem; }
      `}</style>

      <section className="about-hero">
        <div className="about-in">
          <div className="about-eyebrow">Sobre Lucas</div>
          <h1>Soy Lucas.<br /><em>Y monté Lucaseo porque veía demasiadas agencias hablando mucho y pensando poco.</em></h1>
          <p className="about-lead">
            Internet está lleno de empresas que dicen lo mismo. &ldquo;Estrategia.&rdquo; &ldquo;Sinergia.&rdquo; &ldquo;Transformación.&rdquo; &ldquo;Resultados.&rdquo; Todo suena estupendo hasta que preguntas: &ldquo;Vale. ¿Y esto cómo consigue clientes?&rdquo; Ahí es donde empieza mi trabajo.
          </p>
        </div>
      </section>

      <div className="about-section">
        <div className="about-tag">Mi forma de ver el marketing</div>
        <h2>El marketing no debería impresionar al marketer.<br />Debería impresionar al cliente.</h2>
        <p>Me interesa mucho más una campaña que genera ventas que una campaña que gana un premio interno por tener una tipografía preciosa. Me interesa una web que convierte. Un anuncio que hace clic la persona correcta. Un contenido que consigue una conversación. Una automatización que devuelve 20 horas a un equipo. Eso es marketing. Lo demás, dependiendo del caso, puede ser decoración.</p>
      </div>

      <div className="about-section">
        <div className="about-tag">Por qué Lucaseo</div>
        <h2>Porque creo que un negocio no necesita sonar más corporativo.<br />Necesita sonar más a sí mismo.</h2>
        <p>Lucaseo nace con una idea muy sencilla: hacer marketing con criterio, personalidad y obsesión por el resultado. Sin capas innecesarias. Sin complicar las cosas para parecer más inteligentes. Sin esconder el trabajo detrás de palabras bonitas.</p>
      </div>

      <section className="about-dark">
        <div className="about-in">
          <div className="about-tag">El shark</div>
          <h2>¿Por qué un tiburón?</h2>
          <p>Porque en el océano nadie le pide permiso al tiburón para estar arriba. No necesita ser el más simpático. Necesita saber moverse. Detectar oportunidades. Ahorrar energía. Ir a por la presa correcta. Y seguir nadando. Eso es exactamente lo que quiero que represente Lucaseo. No hacer más. Hacer mejor. Y moverse antes.</p>
        </div>
      </section>

      <div className="about-section">
        <div className="about-tag">Cómo trabajo</div>
        <h2>No quiero ser &ldquo;tu agencia&rdquo;.</h2>
        <p>Quiero ser esa persona a la que llamas y dices: &ldquo;Tenemos este problema.&rdquo; Y que te responda: &ldquo;Vale. Vamos a ver cómo lo solucionamos.&rdquo; Trabajo con estrategia, creatividad, datos y tecnología. Y cuando algo no tiene sentido, también te lo voy a decir.</p>
      </div>

      <FaqSection topic="Lucaseo y cómo trabajamos" faqs={sobreMiFaqs} />
      <ServiceCta
        title="Si quieres una agencia que te diga que todo está genial... Probablemente no soy tu persona."
        body="Si quieres alguien que entre, mire el negocio, encuentre oportunidades y se remangue para hacer el trabajo... hablemos."
      />
      <SiteFooter />
    </>
  );
}
