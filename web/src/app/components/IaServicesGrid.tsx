"use client";
import Link from "next/link";
import { useState } from "react";

const services = [
  { href: "/ia/automatizaciones", icon: "⚙️", title: "Automatizaciones", desc: "Automatizamos tareas repetitivas — emails, datos, informes, facturas — con flujos inteligentes que conectan tus herramientas actuales. Tu equipo deja de copiar y pegar para dedicarse a lo que realmente importa." },
  { href: "/ia/agentes", icon: "🧠", title: "Agentes IA", desc: "Agentes autónomos que ejecutan tareas complejas por ti: investigación, generación de contenido, análisis de datos, gestión de tareas. No son chatbots — son trabajadores digitales que entienden contexto y toman decisiones." },
  { href: "/ia/agentes-voz", icon: "🎙️", title: "Agentes de Voz", desc: "IA que atiende llamadas telefónicas por ti: responde preguntas, cualifica leads, agenda citas y escala a humano cuando es necesario. Disponible 24/7, sin tiempos de espera, sin centralitas." },
  { href: "/ia/personalizado", icon: "🔧", title: "IA a Medida", desc: "Soluciones de inteligencia artificial diseñadas específicamente para tu negocio: modelos entrenados con tus datos, workflows personalizados, integraciones a medida. Lo que necesites, lo construimos." },
  { href: "/ia/chatbots", icon: "🤖", title: "Chatbots con IA", desc: "Un asistente en tu web que responde preguntas, cualifica leads y agenda reuniones a cualquier hora del día. Entrenado con el conocimiento de tu negocio: servicios, precios, preguntas frecuentes." },
  { href: "/ia/email-marketing", icon: "📧", title: "Email Marketing Automatizado", desc: "Secuencias de emails que se activan según el comportamiento del usuario: registro, descarga, visita, carrito abandonado. Cada email en el momento exacto, con el mensaje exacto, sin enviar nada a mano." },
  { href: "/ia/lead-scoring", icon: "🎯", title: "Lead Scoring Automático", desc: "Puntuación automática de cada contacto según su comportamiento, empresa, cargo y engagement. Tus comerciales trabajan primero en los leads con más probabilidad de cierre — no en los más recientes." },
  { href: "/ia/integracion-crm", icon: "🔄", title: "Integración CRM", desc: "Conectamos tu web, formularios, ads y emails con HubSpot, Pipedrive o el CRM que uses. Cada lead queda registrado automáticamente, enriquecido con datos y asignado al comercial correcto." },
  { href: "/ia/whatsapp-automation", icon: "📱", title: "WhatsApp Automation", desc: "Respuestas automáticas, confirmaciones de cita, recordatorios de seguimiento y notificaciones en WhatsApp Business. La plataforma con mayor tasa de apertura del mundo." },
  { href: "/ia/reporting-automatizado", icon: "📊", title: "Reporting Automatizado", desc: "Dashboards que se actualizan solos con los datos que importan: leads, conversiones, coste por cliente, ROI por campaña. Toda la información en una pantalla, sin buscar en cinco herramientas." },
];

export default function IaServicesGrid() {
  const [open, setOpen] = useState<string | null>(null);

  return (
    <>
      <style>{`
        .ia-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 1rem; margin-top: 3rem; }
        .ia-card {
          border: 1px solid rgba(0,74,173,0.12);
          border-radius: 12px;
          background: #fff;
          overflow: hidden;
          transition: border-color 0.2s, box-shadow 0.2s;
        }
        .ia-card:hover { border-color: rgba(0,74,173,0.25); }
        .ia-card--open { border-color: rgba(0,74,173,0.3); box-shadow: 0 4px 24px rgba(0,74,173,0.08); }
        .ia-card__toggle {
          width: 100%; display: flex; align-items: center; gap: 1rem;
          padding: 1.25rem 1.5rem;
          background: none; border: none; cursor: pointer;
          text-align: left; color: inherit;
        }
        .ia-card__toggle:hover { background: rgba(0,74,173,0.03); }
        .ia-card__icon {
          width: 40px; height: 40px; border-radius: 10px;
          background: rgba(0,74,173,0.07);
          display: flex; align-items: center; justify-content: center;
          font-size: 1.2rem; flex-shrink: 0;
        }
        .ia-card__title {
          font-family: var(--font-display), system-ui;
          font-weight: 700; font-size: 1rem;
          flex: 1;
        }
        .ia-card__chevron {
          width: 20px; height: 20px; flex-shrink: 0;
          transition: transform 0.25s ease;
          color: #004aad;
        }
        .ia-card--open .ia-card__chevron { transform: rotate(180deg); }
        .ia-card__body {
          display: grid;
          grid-template-rows: 0fr;
          transition: grid-template-rows 0.3s ease;
        }
        .ia-card--open .ia-card__body { grid-template-rows: 1fr; }
        .ia-card__inner {
          overflow: hidden;
        }
        .ia-card__content {
          padding: 0 1.5rem 1.5rem;
        }
        .ia-card__desc {
          font-size: 0.9375rem; color: #5a6480;
          line-height: 1.7; font-weight: 300;
          margin-bottom: 1.25rem;
        }
        .ia-card__link {
          display: inline-flex; align-items: center; gap: 0.5rem;
          font-size: 0.875rem; font-weight: 600;
          color: #004aad; text-decoration: none;
          padding: 0.5rem 1rem;
          border: 1px solid rgba(0,74,173,0.25);
          border-radius: 6px;
          transition: background 0.2s, border-color 0.2s;
        }
        .ia-card__link:hover { background: rgba(0,74,173,0.05); border-color: rgba(0,74,173,0.4); }
        @media (max-width: 768px) { .ia-grid { grid-template-columns: 1fr; } }
      `}</style>

      <div className="ia-grid">
        {services.map(s => {
          const isOpen = open === s.href;
          return (
            <div className={`ia-card${isOpen ? " ia-card--open" : ""}`} key={s.href}>
              <button
                className="ia-card__toggle"
                onClick={() => setOpen(isOpen ? null : s.href)}
                aria-expanded={isOpen}
              >
                <span className="ia-card__icon">{s.icon}</span>
                <span className="ia-card__title">{s.title}</span>
                <svg className="ia-card__chevron" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <div className="ia-card__body">
                <div className="ia-card__inner">
                  <div className="ia-card__content">
                    <p className="ia-card__desc">{s.desc}</p>
                    <Link href={s.href} className="ia-card__link">
                      Ver servicio completo &rarr;
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
