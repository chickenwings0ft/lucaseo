import type { Metadata } from "next";
import ServiceNav from "../components/ServiceNav";
import ServiceCta from "../components/ServiceCta";
import FaqSection from "../components/FaqSection";
import ServiceHero from "../components/ServiceHero";

export const metadata: Metadata = {
  title: "Google Ads & SEM Australia — Lucaseo | Resultados Rápidos",
  description: "Google Ads optimizado. Presupuesto igual, 3x más clientes. Casos reales: $2000/mes → 45 leads. Desde $500 AUD/mes gestión. Auditoría gratis.",
};

const semFaqs = [
  { q: "¿Cuánto cuesta hacer publicidad en Google Ads?", a: "No hay un mínimo fijo. Depende de tu sector, las keywords y cuánto vale cada cliente para ti. Nosotros calculamos el presupuesto que tiene sentido antes de encender nada. Hay negocios que empiezan con 500€/mes y otros que necesitan más. Lo importante es que cada euro invertido tenga retorno medible." },
  { q: "¿Cuándo empiezo a ver resultados con campañas SEM?", a: "Puedes recibir tráfico y conversiones desde las primeras 24-48 horas. La rentabilidad y la estabilidad del coste por lead mejoran con la optimización durante las primeras semanas. En 2-3 meses la cuenta suele estar en su punto óptimo de rendimiento." },
  { q: "¿Google Ads funciona para cualquier negocio?", a: "Funciona especialmente bien cuando hay demanda activa: gente buscando lo que vendes. Si tu servicio o producto se busca en Google, Ads puede ponerte delante de esas personas. Para productos nuevos sin demanda de búsqueda, combinamos con Meta Ads o TikTok Ads para generar esa demanda." },
  { q: "¿Qué diferencia hay entre gestionar Google Ads yo mismo o con una agencia?", a: "Puedes abrir una cuenta y lanzar campañas tú solo. El problema es que Google está diseñado para que gastes más, no para que vendas más. Una agencia Google Ads con experiencia sabe qué estructuras, pujas y segmentaciones funcionan para tu caso, y te ahorra el coste de aprender probando con tu dinero." },
  { q: "¿También hacéis campañas en Meta Ads y TikTok Ads?", a: "Sí. No nos casamos con una plataforma. Elegimos dónde poner tu presupuesto según dónde esté tu cliente y qué tipo de demanda quieras generar. Google para captar demanda existente, Meta y TikTok para crear demanda nueva y hacer remarketing." },
  { q: "¿Cómo puedo solicitar una auditoría de mis campañas?", a: "Contáctanos por el formulario o por email. Revisamos tu cuenta, analizamos qué está funcionando y qué no, y te proponemos un plan de acción concreto. Sin compromiso ni letra pequeña." },
];


export default function SemPage() {
  return (
    <>
      <ServiceNav />
      <ServiceHero
        eyebrow="SEM · Paid Ads"
        title="Estás gastando dinero en Ads."
        highlight="¿Pero está funcionando de verdad?"
        lead="Mientras lees esto, tu presupuesto publicitario se está quemando en Google Ads. ¿Sabes exactamente cuánto cuesta cada cliente que llega? ¿Sabes cuál es tu ROI real? En Lucaseo hacemos lo opuesto: minimizamos lo que no funciona y escalamos lo que sí."
        cta1Text="Audita tu presupuesto Ads"
        cta1Href="/#contacto"
      />

      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "5rem 2.5rem" }}>
        <section style={{ borderBottom: "1px solid rgba(0,74,173,0.1)", paddingBottom: "5rem" }}>
          <div style={{ fontSize: "0.75rem", fontWeight: 500, letterSpacing: "0.14em", textTransform: "uppercase", color: "#004aad", marginBottom: "1rem" }}>El problema</div>
          <h2 style={{ fontFamily: "var(--font-display), system-ui", fontWeight: 700, fontSize: "clamp(1.875rem, 3vw, 2.75rem)", letterSpacing: "-0.03em", lineHeight: 1.1, marginBottom: "1.25rem" }}>
            No es Google Ads. Es cómo lo usan.
          </h2>
          <p style={{ fontSize: "1.0625rem", color: "#5a6480", maxWidth: "580px", lineHeight: 1.75, fontWeight: 300, marginBottom: "2rem" }}>
            Google Ads funciona. El 90% de empresas que lo usan bien genera ROI positivo. El problema: la mayoría no lo usa bien.
          </p>
          <div style={{ background: "#f5f8ff", padding: "2rem", borderRadius: "8px", marginTop: "2rem" }}>
            <h3 style={{ fontWeight: 700, fontSize: "1.125rem", marginBottom: "1rem" }}>¿Por qué falla la mayoría?</h3>
            <ul style={{ listStyle: "none", paddingLeft: 0 }}>
              <li style={{ marginBottom: "0.875rem", fontSize: "0.9375rem", color: "#5a6480" }}>→ Palabras clave genéricas (gastan dinero en clics que no venden)</li>
              <li style={{ marginBottom: "0.875rem", fontSize: "0.9375rem", color: "#5a6480" }}>→ Sin tracking de conversiones (no saben qué funciona)</li>
              <li style={{ marginBottom: "0.875rem", fontSize: "0.9375rem", color: "#5a6480" }}>→ Anuncios débiles (sin propuesta clara)</li>
              <li style={{ marginBottom: "0.875rem", fontSize: "0.9375rem", color: "#5a6480" }}>→ Sin segmentación (llegas a gente que no es cliente)</li>
            </ul>
          </div>
        </section>

        <section style={{ paddingTop: "5rem", borderBottom: "1px solid rgba(0,74,173,0.1)", paddingBottom: "5rem" }}>
          <div style={{ fontSize: "0.75rem", fontWeight: 500, letterSpacing: "0.14em", textTransform: "uppercase", color: "#004aad", marginBottom: "1rem" }}>Casos</div>
          <h2 style={{ fontFamily: "var(--font-display), system-ui", fontWeight: 700, fontSize: "clamp(1.875rem, 3vw, 2.75rem)", letterSpacing: "-0.03em", lineHeight: 1.1, marginBottom: "1.25rem" }}>
            Presupuesto igual, resultados 3x
          </h2>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem", marginTop: "2rem" }}>
            <div style={{ background: "#f5f8ff", padding: "2rem", borderRadius: "8px" }}>
              <div style={{ fontSize: "0.75rem", fontWeight: 600, color: "#004aad", background: "rgba(0,74,173,0.08)", padding: "0.375rem 0.75rem", borderRadius: "4px", marginBottom: "1rem", display: "inline-block" }}>Restaurante</div>
              <h3 style={{ fontWeight: 700, fontSize: "1rem", marginBottom: "1rem", color: "#004aad" }}>Antes vs Después</h3>
              <p style={{ fontSize: "0.9375rem", color: "#5a6480", marginBottom: "0.875rem" }}><strong>Antes:</strong> $2000/mes → 15 leads/mes ($133 por lead)</p>
              <p style={{ fontSize: "0.9375rem", color: "#5a6480" }}><strong>Después:</strong> $2000/mes → 45 leads/mes ($44 por lead)</p>
            </div>

            <div style={{ background: "#f5f8ff", padding: "2rem", borderRadius: "8px" }}>
              <div style={{ fontSize: "0.75rem", fontWeight: 600, color: "#004aad", background: "rgba(0,74,173,0.08)", padding: "0.375rem 0.75rem", borderRadius: "4px", marginBottom: "1rem", display: "inline-block" }}>Servicio Local</div>
              <h3 style={{ fontWeight: 700, fontSize: "1rem", marginBottom: "1rem", color: "#004aad" }}>ROI transformado</h3>
              <p style={{ fontSize: "0.9375rem", color: "#5a6480", marginBottom: "0.875rem" }}><strong>Antes:</strong> $1500/mes → 1.2x ROI</p>
              <p style={{ fontSize: "0.9375rem", color: "#5a6480" }}><strong>Después:</strong> $1500/mes → 4.5x ROI</p>
            </div>
          </div>
        </section>

        <section style={{ paddingTop: "5rem" }}>
          <div style={{ fontSize: "0.75rem", fontWeight: 500, letterSpacing: "0.14em", textTransform: "uppercase", color: "#004aad", marginBottom: "1rem" }}>Inversión</div>
          <h2 style={{ fontFamily: "var(--font-display), system-ui", fontWeight: 700, fontSize: "clamp(1.875rem, 3vw, 2.75rem)", letterSpacing: "-0.03em", lineHeight: 1.1, marginBottom: "1.25rem" }}>
            ¿Cuánto cuesta?
          </h2>

          <div style={{ background: "#f5f8ff", padding: "2rem", borderRadius: "8px", marginTop: "2rem" }}>
            <h3 style={{ fontWeight: 700, fontSize: "1.125rem", marginBottom: "1rem" }}>Opciones</h3>
            <ul style={{ listStyle: "none", paddingLeft: 0 }}>
              <li style={{ marginBottom: "1rem", fontSize: "0.9375rem", color: "#5a6480" }}>
                <strong>Google Ads Estándar: $500 AUD/mes</strong> + tu presupuesto ad<br />
                Para pequeños negocios, presupuestos 500-2000 AUD/mes
              </li>
              <li style={{ marginBottom: "1rem", fontSize: "0.9375rem", color: "#5a6480" }}>
                <strong>Google Ads Avanzado: $1000 AUD/mes</strong> + tu presupuesto ad<br />
                Para medianos, e-commerce, múltiples campañas
              </li>
              <li style={{ fontSize: "0.9375rem", color: "#5a6480" }}>
                <strong>Multi-plataforma: $1500 AUD/mes</strong> + presupuesto ad<br />
                Google + Meta + TikTok Ads
              </li>
            </ul>
          </div>
        </section>
      </div>

      <FaqSection topic="SEM y Google Ads" faqs={semFaqs} />

      <ServiceCta
        title="¿Y si mi presupuesto es pequeño?"
        body="Mejor aún. Presupuestos pequeños requieren optimización PERFECTA. Eso es lo que hacemos: exprimir cada euro para que traiga el máximo retorno."
      />
    </>
  );
}
