import type { Metadata } from "next";
import ServiceNav from "../components/ServiceNav";
import ServiceCta from "../components/ServiceCta";
import FaqSection from "../components/FaqSection";
import ServiceHero from "../components/ServiceHero";

export const metadata: Metadata = {
  title: "AI Automation Australia — Lucaseo | Trabaja Menos, Cierra Más",
  description: "Automatizamos procesos repetitivos con IA. CRM, leads, emails, atención al cliente en piloto automático. Integración con tus herramientas actuales.",
};

const iaFaqs = [
  { q: "¿Qué procesos puedo automatizar con IA?", a: "Respuesta a leads, seguimiento comercial, chatbots, clasificación de emails, reporting, lead scoring, WhatsApp automático y cualquier tarea repetitiva. La IA quita lo que tu equipo no debería estar haciendo manualmente." },
  { q: "¿Necesito conocimientos técnicos?", a: "No. Nos encargamos de todo: desarrollo, integración, configuración. Recibes un sistema funcionando que se conecta con tus herramientas: CRM, email, WhatsApp. La IA para empresas tiene que ser fácil de usar." },
  { q: "¿Cuánto cuesta un chatbot con IA?", a: "Depende de complejidad. Un chatbot básico no cuesta lo mismo que un asistente conectado a tu CRM. Hacemos propuestas cerradas con precio fijo, sin sorpresas." },
  { q: "¿Sustituye a personas de mi equipo?", a: "No. Automatiza tareas repetitivas: responder consultas frecuentes, cualificar leads, enviar seguimientos. Tu equipo se enfoca en cerrar ventas y resolver lo complejo." },
  { q: "¿Se integra con HubSpot, Slack, WhatsApp?", a: "Sí. Usamos APIs e integraciones nativas para conectar IA con tu CRM, email, WhatsApp Business, Slack. No cambias lo que tienes; conectamos todo." },
  { q: "¿Cómo empiezo?", a: "Cuéntanos qué procesos te quitan más tiempo. Analizamos y te proponemos qué automatizar primero para ver resultados rápido. Sin jerga técnica." },
];

export default function IaPage() {
  return (
    <>
      <ServiceNav />
      <ServiceHero
        eyebrow="IA · Automation"
        title="Tu equipo no debería pasar el día haciendo cosas que"
        highlight="una máquina puede hacer en segundos."
        lead="Responder lo mismo. Copiar datos. Actualizar el CRM. Perseguir leads. Recordatorios. Reportes. Clasificar emails. Eso no necesita más horas: necesita mejor sistema."
        cta1Text="Quiero automatizar mi negocio"
        cta1Href="/es#contacto"
        withVideo={true}
      />

      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "5rem 2.5rem" }}>
        <section style={{ borderBottom: "1px solid rgba(0,74,173,0.1)", paddingBottom: "5rem" }}>
          <div style={{ fontSize: "0.75rem", fontWeight: 500, letterSpacing: "0.14em", textTransform: "uppercase", color: "#004aad", marginBottom: "1rem" }}>La idea</div>
          <h2 style={{ fontFamily: "var(--font-display), system-ui", fontWeight: 700, fontSize: "clamp(1.875rem, 3vw, 2.75rem)", letterSpacing: "-0.03em", lineHeight: 1.1, marginBottom: "1.25rem" }}>
            La IA no viene a quitarte trabajo. Viene a quitarte el trabajo que nunca quisiste hacer.
          </h2>
          <p style={{ fontSize: "1.0625rem", color: "#5a6480", maxWidth: "580px", lineHeight: 1.75, fontWeight: 300, marginBottom: "2rem" }}>
            Combinamos IA con automatización, CRM y tus herramientas actuales para crear sistemas que funcionan incluso cuando tu equipo está ocupado. O de vacaciones.
          </p>
          <div style={{ background: "#f5f8ff", padding: "2rem", borderRadius: "8px", marginTop: "2rem" }}>
            <h3 style={{ fontWeight: 700, fontSize: "1.125rem", marginBottom: "1rem" }}>Qué automatizamos</h3>
            <ul style={{ listStyle: "none", paddingLeft: 0 }}>
              <li style={{ marginBottom: "0.875rem", fontSize: "0.9375rem", color: "#5a6480" }}>→ Respuesta a leads y calificación automática</li>
              <li style={{ marginBottom: "0.875rem", fontSize: "0.9375rem", color: "#5a6480" }}>→ Seguimiento comercial y recordatorios</li>
              <li style={{ marginBottom: "0.875rem", fontSize: "0.9375rem", color: "#5a6480" }}>→ Chatbots inteligentes para web y WhatsApp</li>
              <li style={{ marginBottom: "0.875rem", fontSize: "0.9375rem", color: "#5a6480" }}>→ Clasificación de emails y reporting automático</li>
            </ul>
          </div>
        </section>

        <section style={{ paddingTop: "5rem", borderBottom: "1px solid rgba(0,74,173,0.1)", paddingBottom: "5rem" }}>
          <div style={{ fontSize: "0.75rem", fontWeight: 500, letterSpacing: "0.14em", textTransform: "uppercase", color: "#004aad", marginBottom: "1rem" }}>Casos reales</div>
          <h2 style={{ fontFamily: "var(--font-display), system-ui", fontWeight: 700, fontSize: "clamp(1.875rem, 3vw, 2.75rem)", letterSpacing: "-0.03em", lineHeight: 1.1, marginBottom: "1.25rem" }}>
            Cómo la IA libera tiempo
          </h2>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem", marginTop: "2rem" }}>
            <div style={{ background: "#f5f8ff", padding: "2rem", borderRadius: "8px" }}>
              <div style={{ fontSize: "0.75rem", fontWeight: 600, color: "#004aad", background: "rgba(0,74,173,0.08)", padding: "0.375rem 0.75rem", borderRadius: "4px", marginBottom: "1rem", display: "inline-block" }}>Clínica</div>
              <h3 style={{ fontWeight: 700, fontSize: "1rem", marginBottom: "1rem", color: "#004aad" }}>Antes vs Después</h3>
              <p style={{ fontSize: "0.9375rem", color: "#5a6480", marginBottom: "0.875rem" }}><strong>Antes:</strong> 20 minutos de trabajo manual por solicitud</p>
              <p style={{ fontSize: "0.9375rem", color: "#5a6480" }}><strong>Después:</strong> IA recoge info, cualifica, agenda y envía confirmación</p>
            </div>

            <div style={{ background: "#f5f8ff", padding: "2rem", borderRadius: "8px" }}>
              <div style={{ fontSize: "0.75rem", fontWeight: 600, color: "#004aad", background: "rgba(0,74,173,0.08)", padding: "0.375rem 0.75rem", borderRadius: "4px", marginBottom: "1rem", display: "inline-block" }}>E-commerce</div>
              <h3 style={{ fontWeight: 700, fontSize: "1rem", marginBottom: "1rem", color: "#004aad" }}>Recuperación de carritos</h3>
              <p style={{ fontSize: "0.9375rem", color: "#5a6480", marginBottom: "0.875rem" }}><strong>Antes:</strong> Carritos abandonados que desaparecen</p>
              <p style={{ fontSize: "0.9375rem", color: "#5a6480" }}><strong>Después:</strong> Automatización de recuperación sin intervención manual</p>
            </div>
          </div>
        </section>

        <section style={{ paddingTop: "5rem" }}>
          <div style={{ fontSize: "0.75rem", fontWeight: 500, letterSpacing: "0.14em", textTransform: "uppercase", color: "#004aad", marginBottom: "1rem" }}>Integración</div>
          <h2 style={{ fontFamily: "var(--font-display), system-ui", fontWeight: 700, fontSize: "clamp(1.875rem, 3vw, 2.75rem)", letterSpacing: "-0.03em", lineHeight: 1.1, marginBottom: "1.25rem" }}>
            Conectamos con lo que ya usas
          </h2>

          <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", marginTop: "2rem" }}>
            {["HubSpot", "Pipedrive", "ActiveCampaign", "WhatsApp Business", "Notion", "Airtable", "Google Sheets", "Slack", "OpenAI", "Zapier", "Make", "n8n"].map(tool => (
              <div key={tool} style={{ background: "#f5f8ff", padding: "0.75rem 1.5rem", borderRadius: "8px", fontSize: "0.9375rem", fontWeight: 500, color: "#004aad" }}>
                {tool}
              </div>
            ))}
          </div>
        </section>
      </div>

      <FaqSection topic="IA y automatización" faqs={iaFaqs} />

      <ServiceCta
        title="¿Cuántas horas de tu equipo se pierden en tareas repetitivas?"
        body="La IA puede liberar esas horas. Empezamos con un análisis gratis."
      />
    </>
  );
}
