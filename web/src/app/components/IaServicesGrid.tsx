"use client";
import Link from "next/link";
import { useState } from "react";

const services = [
  { href: "/ia/automatizaciones", icon: "⚙️", title: "Automatizaciones", desc: "Conectamos las herramientas que ya utilizas para que los procesos ocurran solos." },
  { href: "/ia/agentes", icon: "🧠", title: "Agentes IA", desc: "Sistemas capaces de razonar, responder y ejecutar tareas dentro de un flujo de trabajo." },
  { href: "/ia/agentes-voz", icon: "🎙️", title: "Agentes de Voz", desc: "Llamadas automáticas para atender, cualificar, confirmar o hacer seguimiento." },
  { href: "/ia/personalizado", icon: "🔧", title: "IA a Medida", desc: "Construimos sistemas específicos para problemas que no tienen una solución de catálogo." },
  { href: "/ia/chatbots", icon: "🤖", title: "Chatbots con IA", desc: "Atención rápida, natural y disponible 24/7." },
  { href: "/ia/email-marketing", icon: "📧", title: "Email Marketing Automatizado", desc: "Secuencias que reaccionan a lo que hace cada contacto." },
  { href: "/ia/lead-scoring", icon: "🎯", title: "Lead Scoring", desc: "Descubrimos qué leads merecen atención primero." },
  { href: "/ia/integracion-crm", icon: "🔄", title: "Integración CRM", desc: "Dejamos que tus herramientas hablen entre ellas." },
  { href: "/ia/whatsapp-automation", icon: "📱", title: "WhatsApp Automation", desc: "Atención, seguimiento y cualificación desde el canal donde ya está tu cliente." },
  { href: "/ia/reporting-automatizado", icon: "📊", title: "Reporting Automatizado", desc: "Menos tiempo preparando informes. Más tiempo tomando decisiones." },
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
