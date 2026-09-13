import type { Metadata } from "next";
import ServiceNav from "../components/ServiceNav";
import ServiceCta from "../components/ServiceCta";
import FaqSection from "../components/FaqSection";
import ServiceHero from "../components/ServiceHero";

export const metadata: Metadata = {
  title: "Web Design & Development Australia — Lucaseo | Webs que Venden",
  description: "Diseño y desarrollo web profesional. Webs rápidas, optimizadas para SEO y diseñadas para convertir. Desde landing pages hasta e-commerce.",
};

const webFaqs = [
  { q: "¿Cuánto cuesta crear una página web profesional?", a: "Depende del tipo. Una landing page desde $1500 AUD. Una web corporativa entre $3000-6000 AUD. Un e-commerce entre $5000-15000 AUD. Hacemos presupuestos adaptados, no plantillas genéricas disfrazadas." },
  { q: "¿Cuánto tarda en estar lista?", a: "Landing page: 1-2 semanas. Web corporativa: 3-6 semanas. E-commerce: 4-8 semanas. Depende de complejidad, pero no saltamos fases: diseño → desarrollo → contenido → testing. Prisa es enemiga de calidad." },
  { q: "¿Están optimizadas para SEO?", a: "Siempre. Velocidad, estructura de URLs, metadatos, schema markup, responsive design, Core Web Vitals. Una web SEO desde el inicio se posiciona más rápido que una arreglada después." },
  { q: "¿Puedo actualizar contenido yo mismo?", a: "Sí, si usamos CMS. Editas textos, imágenes, páginas sin tocar código. Te enseñamos. O nos encargamos nosotros del mantenimiento." },
  { q: "¿Qué diferencia hay con Wix o Squarespace?", a: "Rendimiento, flexibilidad, SEO técnico. Wix es útil para proyectos básicos pero tiene limitaciones. Una web profesional se desarrolla pensando en tu negocio, no en cómo funciona la plantilla." },
  { q: "¿Cómo solicito un presupuesto?", a: "Contáctanos. Cuéntanos qué tipo de web necesitas y tu objetivo. Te enviamos propuesta detallada: plazos, funcionalidades, precio cerrado. Sin sorpresas." },
];

export default function WebPage() {
  return (
    <>
      <ServiceNav />
      <ServiceHero
        eyebrow="Web Design"
        title="Tu web no debería explicar quién eres."
        highlight="Debería conseguir que alguien quiera trabajar contigo."
        lead="Una buena web hace tres cosas muy rápido: te entiende, te cree y te mueve a actuar. Por eso no empezamos diseñando. Empezamos pensando en cómo vende tu negocio."
        cta1Text="Quiero una web que venda"
        cta1Href="/#contacto"
        withVideo={true}
      />

      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "5rem 2.5rem" }}>
        <section style={{ borderBottom: "1px solid rgba(0,74,173,0.1)", paddingBottom: "5rem" }}>
          <div style={{ fontSize: "0.75rem", fontWeight: 500, letterSpacing: "0.14em", textTransform: "uppercase", color: "#004aad", marginBottom: "1rem" }}>El problema</div>
          <h2 style={{ fontFamily: "var(--font-display), system-ui", fontWeight: 700, fontSize: "clamp(1.875rem, 3vw, 2.75rem)", letterSpacing: "-0.03em", lineHeight: 1.1, marginBottom: "1.25rem" }}>
            Una web bonita que no convierte sigue siendo una web cara
          </h2>
          <p style={{ fontSize: "1.0625rem", color: "#5a6480", maxWidth: "580px", lineHeight: 1.75, fontWeight: 300, marginBottom: "2rem" }}>
            Hay webs visualmente espectaculares donde nadie sabe qué hacer. Menús infinitos. Textos corporativos. Botones vagas. Una home que parece presentación ejecutiva. Nosotros hacemos otra cosa.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem", marginTop: "2rem" }}>
            <div style={{ background: "#f5f8ff", padding: "2rem", borderRadius: "8px" }}>
              <div style={{ fontSize: "0.75rem", fontWeight: 600, color: "#004aad", background: "rgba(0,74,173,0.08)", padding: "0.375rem 0.75rem", borderRadius: "4px", marginBottom: "1rem", display: "inline-block" }}>Velocidad</div>
              <h3 style={{ fontWeight: 700, fontSize: "1rem", marginBottom: "1rem", color: "#004aad" }}>3 segundos máximo</h3>
              <p style={{ fontSize: "0.9375rem", color: "#5a6480" }}>El 53% abandona si tarda más. Diseñamos webs que cargan rápido en móvil.</p>
            </div>

            <div style={{ background: "#f5f8ff", padding: "2rem", borderRadius: "8px" }}>
              <div style={{ fontSize: "0.75rem", fontWeight: 600, color: "#004aad", background: "rgba(0,74,173,0.08)", padding: "0.375rem 0.75rem", borderRadius: "4px", marginBottom: "1rem", display: "inline-block" }}>Conversión</div>
              <h3 style={{ fontWeight: 700, fontSize: "1rem", marginBottom: "1rem", color: "#004aad" }}>+40% mejora media</h3>
              <p style={{ fontSize: "0.9375rem", color: "#5a6480" }}>Con arquitectura y copy orientados a vender, no solo a existir.</p>
            </div>
          </div>
        </section>

        <section style={{ paddingTop: "5rem", borderBottom: "1px solid rgba(0,74,173,0.1)", paddingBottom: "5rem" }}>
          <div style={{ fontSize: "0.75rem", fontWeight: 500, letterSpacing: "0.14em", textTransform: "uppercase", color: "#004aad", marginBottom: "1rem" }}>Qué construimos</div>
          <h2 style={{ fontFamily: "var(--font-display), system-ui", fontWeight: 700, fontSize: "clamp(1.875rem, 3vw, 2.75rem)", letterSpacing: "-0.03em", lineHeight: 1.1, marginBottom: "1.25rem" }}>
            Una web pensada para hacer negocio
          </h2>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "2rem", marginTop: "2rem" }}>
            <div style={{ background: "#f5f8ff", padding: "2rem", borderRadius: "8px" }}>
              <div style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>🎨</div>
              <h3 style={{ fontWeight: 700, fontSize: "1rem", marginBottom: "1rem", color: "#004aad" }}>Diseño UX/UI</h3>
              <p style={{ fontSize: "0.9375rem", color: "#5a6480" }}>Que la gente entienda rápido y navegue sin pensar demasiado.</p>
            </div>

            <div style={{ background: "#f5f8ff", padding: "2rem", borderRadius: "8px" }}>
              <div style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>⚡</div>
              <h3 style={{ fontWeight: 700, fontSize: "1rem", marginBottom: "1rem", color: "#004aad" }}>Rendimiento</h3>
              <p style={{ fontSize: "0.9375rem", color: "#5a6480" }}>Una web lenta es una forma elegante de echar clientes.</p>
            </div>

            <div style={{ background: "#f5f8ff", padding: "2rem", borderRadius: "8px" }}>
              <div style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>🔍</div>
              <h3 style={{ fontWeight: 700, fontSize: "1rem", marginBottom: "1rem", color: "#004aad" }}>SEO-first</h3>
              <p style={{ fontSize: "0.9375rem", color: "#5a6480" }}>Estructura pensada para Google desde el inicio.</p>
            </div>

            <div style={{ background: "#f5f8ff", padding: "2rem", borderRadius: "8px" }}>
              <div style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>📱</div>
              <h3 style={{ fontWeight: 700, fontSize: "1rem", marginBottom: "1rem", color: "#004aad" }}>Mobile-first</h3>
              <p style={{ fontSize: "0.9375rem", color: "#5a6480" }}>Tu cliente probablemente entra desde móvil.</p>
            </div>

            <div style={{ background: "#f5f8ff", padding: "2rem", borderRadius: "8px" }}>
              <div style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>🔒</div>
              <h3 style={{ fontWeight: 700, fontSize: "1rem", marginBottom: "1rem", color: "#004aad" }}>Seguridad</h3>
              <p style={{ fontSize: "0.9375rem", color: "#5a6480" }}>Buen código, buenas prácticas, base sólida.</p>
            </div>

            <div style={{ background: "#f5f8ff", padding: "2rem", borderRadius: "8px" }}>
              <div style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>📈</div>
              <h3 style={{ fontWeight: 700, fontSize: "1rem", marginBottom: "1rem", color: "#004aad" }}>Conversión</h3>
              <p style={{ fontSize: "0.9375rem", color: "#5a6480" }}>Cada página tiene un propósito y un objetivo.</p>
            </div>
          </div>
        </section>

        <section style={{ paddingTop: "5rem" }}>
          <div style={{ fontSize: "0.75rem", fontWeight: 500, letterSpacing: "0.14em", textTransform: "uppercase", color: "#004aad", marginBottom: "1rem" }}>Tipos de web</div>
          <h2 style={{ fontFamily: "var(--font-display), system-us", fontWeight: 700, fontSize: "clamp(1.875rem, 3vw, 2.75rem)", letterSpacing: "-0.03em", lineHeight: 1.1, marginBottom: "1.25rem" }}>
            No todas las webs necesitan lo mismo
          </h2>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem", marginTop: "2rem" }}>
            <div style={{ background: "#f5f8ff", padding: "2rem", borderRadius: "8px" }}>
              <h3 style={{ fontWeight: 700, fontSize: "1.125rem", marginBottom: "0.5rem", color: "#004aad" }}>Landing Page</h3>
              <p style={{ fontSize: "0.8125rem", color: "#004aad", marginBottom: "1rem", fontWeight: 500 }}>Ideal para: Ads, campañas y lanzamientos</p>
              <p style={{ fontSize: "0.9375rem", color: "#5a6480" }}>Un objetivo. Un mensaje. Una acción.</p>
            </div>

            <div style={{ background: "#f5f8ff", padding: "2rem", borderRadius: "8px" }}>
              <h3 style={{ fontWeight: 700, fontSize: "1.125rem", marginBottom: "0.5rem", color: "#004aad" }}>Web Corporativa</h3>
              <p style={{ fontSize: "0.8125rem", color: "#004aad", marginBottom: "1rem", fontWeight: 500 }}>Ideal para: Confianza antes de contactar</p>
              <p style={{ fontSize: "0.9375rem", color: "#5a6480" }}>Servicios, casos, equipo, propuesta de valor.</p>
            </div>

            <div style={{ background: "#f5f8ff", padding: "2rem", borderRadius: "8px" }}>
              <h3 style={{ fontWeight: 700, fontSize: "1.125rem", marginBottom: "0.5rem", color: "#004aad" }}>E-commerce</h3>
              <p style={{ fontSize: "0.8125rem", color: "#004aad", marginBottom: "1rem", fontWeight: 500 }}>Ideal para: Venta online</p>
              <p style={{ fontSize: "0.9375rem", color: "#5a6480" }}>Tienda que vende, no solo catálogo.</p>
            </div>

            <div style={{ background: "#f5f8ff", padding: "2rem", borderRadius: "8px" }}>
              <h3 style={{ fontWeight: 700, fontSize: "1.125rem", marginBottom: "0.5rem", color: "#004aad" }}>Web con CMS</h3>
              <p style={{ fontSize: "0.8125rem", color: "#004aad", marginBottom: "1rem", fontWeight: 500 }}>Ideal para: Contenido editable</p>
              <p style={{ fontSize: "0.9375rem", color: "#5a6480" }}>Tú cambias tu web sin depender del developer.</p>
            </div>
          </div>
        </section>
      </div>

      <FaqSection topic="diseño y desarrollo web" faqs={webFaqs} />

      <ServiceCta
        title="¿Tu web representa el negocio que tienes hoy?"
        body="Si la respuesta es 'más o menos'... ya tenemos trabajo que hacer."
      />
    </>
  );
}
