import type { Metadata } from "next";
import ServiceNav from "../components/ServiceNav";
import ServiceCta from "../components/ServiceCta";
import FaqSection from "../components/FaqSection";
import ServiceHero from "../components/ServiceHero";

export const metadata: Metadata = {
  title: "Social Media Management Australia — Lucaseo | Estrategia Redes Sociales",
  description: "Gestión completa de redes sociales. Contenido, community management, publicidad Meta Ads. Desde $400 AUD/mes. Clientes reales, resultados visibles.",
};

const rrssFaqs = [
  { q: "¿Qué incluye la gestión de redes sociales?", a: "Todo. Estrategia de contenido, creación de posts, community management en respuestas, publicidad Meta Ads si lo necesitas, analítica e informes. No es solo postear fotos bonitas: es convertir seguidores en clientes." },
  { q: "¿Cuántas redes sociales gestionáis?", a: "Instagram, TikTok, LinkedIn, Facebook, YouTube. Elegimos dónde está tu cliente y nos enfocamos ahí. No tiene sentido estar en 6 redes si tu gente está en 2." },
  { q: "¿Crean contenido o usan el que doy?", a: "Ambos. Podemos crear contenido original, redirigir el tuyo, o una mezcla. Depende de lo que necesites y cuál sea tu presupuesto." },
  { q: "¿Qué tal con TikTok y la generación Z?", a: "TikTok es el canal más potente hoy para crecer si tu público es menor de 35 años. Sabemos qué funciona: tendencias, formato vertical, autenticidad. Es diferente a Instagram pero con nuestra estrategia se ve rentable." },
  { q: "¿Me ayudáis si ya tengo redes y las queremos mejorar?", a: "Claro. Hacemos un análisis de qué está funcionando, qué no, y diseñamos una estrategia nueva para escalarlo. A veces los cambios pequeños tienen impacto gigante." },
  { q: "¿Cómo contrato la gestión de redes?", a: "Empezamos con una llamada para entender tu negocio, tu público, tu objetivo. Hacemos una propuesta, acuerdas, y empezamos. Sin contratos largos; mes a mes." },
];

export default function RrssPage() {
  return (
    <>
      <ServiceNav />
      <ServiceHero
        eyebrow="RRSS · Community"
        title="Tus redes sociales son un canal de ventas."
        highlight="¿O solo las usas para publicar fotos?"
        lead="Instagram, TikTok, LinkedIn: son donde tus clientes pasan 2-3 horas diarias. Si no estás ahí generando leads, tu competencia lo está. La mayoría de pequeños negocios abandona sus redes a mitad de camino. Así que hay hueco para quien lo haga bien."
        cta1Text="Consulta de redes gratis"
        cta1Href="/#contacto"
        withVideo={true}
      />

      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "5rem 2.5rem" }}>
        <section style={{ borderBottom: "1px solid rgba(0,74,173,0.1)", paddingBottom: "5rem" }}>
          <div style={{ fontSize: "0.75rem", fontWeight: 500, letterSpacing: "0.14em", textTransform: "uppercase", color: "#004aad", marginBottom: "1rem" }}>El problema</div>
          <h2 style={{ fontFamily: "var(--font-display), system-ui", fontWeight: 700, fontSize: "clamp(1.875rem, 3vw, 2.75rem)", letterSpacing: "-0.03em", lineHeight: 1.1, marginBottom: "1.25rem" }}>
            La mayoría de negocios no sabe vender por redes
          </h2>
          <p style={{ fontSize: "1.0625rem", color: "#5a6480", maxWidth: "580px", lineHeight: 1.75, fontWeight: 300, marginBottom: "2rem" }}>
            Instagram y TikTok son potentes. El problema: la mayoría postea sin estrategia.
          </p>
          <div style={{ background: "#f5f8ff", padding: "2rem", borderRadius: "8px", marginTop: "2rem" }}>
            <h3 style={{ fontWeight: 700, fontSize: "1.125rem", marginBottom: "1rem" }}>¿Por qué fracasan las redes de pequeños negocios?</h3>
            <ul style={{ listStyle: "none", paddingLeft: 0 }}>
              <li style={{ marginBottom: "0.875rem", fontSize: "0.9375rem", color: "#5a6480" }}>→ Postean sin plan (sin objetivo ni público claro)</li>
              <li style={{ marginBottom: "0.875rem", fontSize: "0.9375rem", color: "#5a6480" }}>→ Inconsistencia (publican 2 meses, desaparecen 3)</li>
              <li style={{ marginBottom: "0.875rem", fontSize: "0.9375rem", color: "#5a6480" }}>→ No responden comentarios (pierden conexión)</li>
              <li style={{ marginBottom: "0.875rem", fontSize: "0.9375rem", color: "#5a6480" }}>→ No saben cómo convertir en ventas (solo vanity metrics)</li>
            </ul>
          </div>
        </section>

        <section style={{ paddingTop: "5rem", borderBottom: "1px solid rgba(0,74,173,0.1)", paddingBottom: "5rem" }}>
          <div style={{ fontSize: "0.75rem", fontWeight: 500, letterSpacing: "0.14em", textTransform: "uppercase", color: "#004aad", marginBottom: "1rem" }}>Qué hacemos</div>
          <h2 style={{ fontFamily: "var(--font-display), system-ui", fontWeight: 700, fontSize: "clamp(1.875rem, 3vw, 2.75rem)", letterSpacing: "-0.03em", lineHeight: 1.1, marginBottom: "1.25rem" }}>
            Redes que venden
          </h2>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem", marginTop: "2rem" }}>
            <div style={{ background: "#f5f8ff", padding: "2rem", borderRadius: "8px" }}>
              <div style={{ fontSize: "0.75rem", fontWeight: 600, color: "#004aad", background: "rgba(0,74,173,0.08)", padding: "0.375rem 0.75rem", borderRadius: "4px", marginBottom: "1rem", display: "inline-block" }}>Estrategia</div>
              <h3 style={{ fontWeight: 700, fontSize: "1rem", marginBottom: "1rem", color: "#004aad" }}>Plan claro desde el inicio</h3>
              <p style={{ fontSize: "0.9375rem", color: "#5a6480", marginBottom: "0.875rem" }}>Definimos tu público, tu tone, qué plataformas usar, qué tipo de contenido convierte. Sin improviso.</p>
            </div>

            <div style={{ background: "#f5f8ff", padding: "2rem", borderRadius: "8px" }}>
              <div style={{ fontSize: "0.75rem", fontWeight: 600, color: "#004aad", background: "rgba(0,74,173,0.08)", padding: "0.375rem 0.75rem", borderRadius: "4px", marginBottom: "1rem", display: "inline-block" }}>Contenido</div>
              <h3 style={{ fontWeight: 700, fontSize: "1rem", marginBottom: "1rem", color: "#004aad" }}>Contenido que genera leads</h3>
              <p style={{ fontSize: "0.9375rem", color: "#5a6480" }}>No solo fotos bonitas. Contenido educativo, entretenido, con CTA. Cada post es una oportunidad de venta.</p>
            </div>

            <div style={{ background: "#f5f8ff", padding: "2rem", borderRadius: "8px" }}>
              <div style={{ fontSize: "0.75rem", fontWeight: 600, color: "#004aad", background: "rgba(0,74,173,0.08)", padding: "0.375rem 0.75rem", borderRadius: "4px", marginBottom: "1rem", display: "inline-block" }}>Community</div>
              <h3 style={{ fontWeight: 700, fontSize: "1rem", marginBottom: "1rem", color: "#004aad" }}>Responden comentarios</h3>
              <p style={{ fontSize: "0.9375rem", color: "#5a6480" }}>Cada comentario es un cliente potencial. Respondemos, nos relacionamos, convertimos.</p>
            </div>

            <div style={{ background: "#f5f8ff", padding: "2rem", borderRadius: "8px" }}>
              <div style={{ fontSize: "0.75rem", fontWeight: 600, color: "#004aad", background: "rgba(0,74,173,0.08)", padding: "0.375rem 0.75rem", borderRadius: "4px", marginBottom: "1rem", display: "inline-block" }}>Publicidad</div>
              <h3 style={{ fontWeight: 700, fontSize: "1rem", marginBottom: "1rem", color: "#004aad" }}>Meta Ads optimizado</h3>
              <p style={{ fontSize: "0.9375rem", color: "#5a6480" }}>Si necesitas acelerar, hacemos publicidad en Meta/TikTok con ROI medible.</p>
            </div>
          </div>
        </section>

        <section style={{ paddingTop: "5rem" }}>
          <div style={{ fontSize: "0.75rem", fontWeight: 500, letterSpacing: "0.14em", textTransform: "uppercase", color: "#004aad", marginBottom: "1rem" }}>Inversión</div>
          <h2 style={{ fontFamily: "var(--font-display), system-ui", fontWeight: 700, fontSize: "clamp(1.875rem, 3vw, 2.75rem)", letterSpacing: "-0.03em", lineHeight: 1.1, marginBottom: "1.25rem" }}>
            ¿Cuánto cuesta?
          </h2>

          <div style={{ background: "#f5f8ff", padding: "2rem", borderRadius: "8px", marginTop: "2rem" }}>
            <h3 style={{ fontWeight: 700, fontSize: "1.125rem", marginBottom: "1rem" }}>Planes</h3>
            <ul style={{ listStyle: "none", paddingLeft: 0 }}>
              <li style={{ marginBottom: "1rem", fontSize: "0.9375rem", color: "#5a6480" }}>
                <strong>Gestión Básica: $400 AUD/mes</strong><br />
                1 red social, 8 posts/mes, respuestas
              </li>
              <li style={{ marginBottom: "1rem", fontSize: "0.9375rem", color: "#5a6480" }}>
                <strong>Gestión Estándar: $700 AUD/mes</strong><br />
                2-3 redes, 20 posts/mes, community, reportes
              </li>
              <li style={{ fontSize: "0.9375rem", color: "#5a6480" }}>
                <strong>Gestión Premium: $1200 AUD/mes</strong><br />
                4 redes, contenido original, Meta Ads, strategy calls
              </li>
            </ul>
          </div>
        </section>
      </div>

      <FaqSection topic="Social media y redes sociales" faqs={rrssFaqs} />

      <ServiceCta
        title="¿Hablamos de tu estrategia?"
        body="Cuéntanos qué es lo que quieres lograr con tus redes. Hacemos una consulta sin compromiso y te proponemos un plan específico para tu caso."
      />
    </>
  );
}
