import type { Metadata } from "next";
import ServiceNav from "../components/ServiceNav";
import ServiceCta from "../components/ServiceCta";
import FaqSection from "../components/FaqSection";
import ServiceHero from "../components/ServiceHero";

export const metadata: Metadata = {
  title: "SEO Australia & Google — Lucaseo | Posicionamiento Garantizado",
  description: "SEO que posiciona en Google + IA. De 0 a rankings en meses. Casos reales: 30→147 clientes, 5 leads/semana. Auditoría gratuita. Desde $500 AUD/mes.",
};

const seoFaqs = [
  { q: "¿Cuánto tarda en funcionar el SEO?", a: "3-6 meses para movimiento. 6-12 para sólido. Depende del sector y la competencia. Si alguien te promete resultados en 30 días, está mintiendo." },
  { q: "¿Es mejor SEO o Google Ads?", a: "Ambos. Pero diferente. Google Ads = resultados inmediatos, pagas por cada clic. SEO = resultados lentos, tráfico gratuito a perpetuidad. Idealmente combinas ambos: Ads para cash rápido, SEO para independencia a largo plazo." },
  { q: "¿Qué pasa si cambio de agencia después?", a: "El trabajo que hicimos en tu web es tuyo. No te lo quitamos. Pero es importante que encuentres alguien que continúe optimizando. No dejes el SEO abandonado." },
  { q: "¿Garantiza resultados?", a: "No. Nadie puede garantizar rankings (quien lo hace, está mintiendo). Lo que sí garantizo: trabajo profesional, transparencia, y ajustes si algo no funciona." },
  { q: "¿De verdad el SEO funciona?", a: "Sí. Pero solo si se hace bien y tienes paciencia. La mayoría de agencias fracasa porque promete resultados en 30 días, no optimiza para donde realmente buscan, o desaparece después de 3 meses." },
  { q: "¿Cómo puedo empezar?", a: "Pide tu auditoría gratuita. Analizamos tu web actual, dónde rankeas, dónde deberías rankear, qué está fallando, por dónde empezamos. Sin venta presionada. Sin contratos." },
];

export default function SeoPage() {
  return (
    <>
      <ServiceNav />
      <style>{`
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { background: #fff; color: #0a0f1e; font-family: var(--font-body), system-ui, sans-serif; }
        .wrap { max-width: 1100px; margin: 0 auto; padding: 5rem 2.5rem; }
        .section-tag { font-size: 0.75rem; font-weight: 500; letter-spacing: 0.14em; text-transform: uppercase; color: #004aad; margin-bottom: 1rem; }
        h2 { font-family: var(--font-display), system-ui; font-weight: 700; font-size: clamp(1.875rem, 3vw, 2.75rem); letter-spacing: -0.03em; line-height: 1.1; margin-bottom: 1.25rem; text-wrap: balance; }
        .lead { font-size: 1.0625rem; color: #5a6480; max-width: 580px; line-height: 1.75; font-weight: 300; margin-bottom: 2rem; }
        .section { padding: 5rem 0; border-bottom: 1px solid rgba(0,74,173,0.1); }
        .section:last-child { border-bottom: none; }
        .content-block { background: #f5f8ff; padding: 3rem 2.5rem; border-radius: 8px; margin-top: 2rem; }
        .content-block h3 { font-family: var(--font-display), system-ui; font-weight: 700; font-size: 1.125rem; margin-bottom: 1rem; color: #0a0f1e; }
        .content-block p { font-size: 0.9375rem; color: #5a6480; line-height: 1.7; margin-bottom: 1rem; }
        .content-block ul { list-style: none; padding-left: 0; }
        .content-block li { display: flex; gap: 0.75rem; margin-bottom: 0.875rem; font-size: 0.9375rem; color: #5a6480; line-height: 1.6; }
        .content-block li::before { content: '→'; color: #004aad; font-weight: 700; flex-shrink: 0; }
        .dark-section { background: #0a0f1e; color: #fff; }
        .dark-section h2 { color: #fff; }
        .dark-section .lead { color: rgba(255,255,255,0.65); }
        .case-grid { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 2rem; margin-top: 2rem; }
        .case-card { background: #f5f8ff; padding: 2rem; border-radius: 8px; }
        .case-card h3 { font-family: var(--font-display), system-ui; font-weight: 700; font-size: 1rem; margin-bottom: 1rem; color: #004aad; }
        .case-card p { font-size: 0.9375rem; color: #5a6480; line-height: 1.6; margin-bottom: 0.875rem; }
        .case-label { display: inline-block; font-size: 0.75rem; font-weight: 600; color: #004aad; background: rgba(0,74,173,0.08); padding: 0.375rem 0.75rem; border-radius: 4px; margin-bottom: 0.5rem; }
        @media (max-width: 768px) {
          .case-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      <ServiceHero
        eyebrow="SEO Orgánico"
        title="El SEO cambió. Tu competencia lo sabe."
        highlight="¿Y tú?"
        lead="Hace 3 años, posicionarse en Google era suficiente. Hoy, tu cliente busca en ChatGPT, Claude, Perplexity, TikTok, YouTube. Si solo estás en Google, pierdes el 60% de las búsquedas. Tu competencia está en todos lados. ¿Dónde estás tú?"
        cta1Text="Pide tu auditoría SEO gratuita"
        cta1Href="/#contacto"
      />

      <div className="wrap">
        <section className="section">
          <div className="section-tag">El problema del SEO antiguo</div>
          <h2>Posicionar en Google ya no es suficiente</h2>
          <p className="lead">Google sigue siendo la puerta principal. Pero ya NO es la única puerta.</p>

          <div className="content-block">
            <h3>Tus clientes buscan en:</h3>
            <ul>
              <li>Google (claro)</li>
              <li>ChatGPT (pregunta "mejores restaurantes cerca")</li>
              <li>Perplexity (investiga antes de comprar)</li>
              <li>Claude (busca soluciones específicas)</li>
              <li>TikTok, Instagram (reviews, recomendaciones)</li>
              <li>YouTube (tutoriales, análisis)</li>
            </ul>
          </div>

          <p className="lead" style={{ marginTop: "2rem" }}>Si no estás en todos esos lugares, tu competencia te está adelantando y tú ni te enteras.</p>
        </section>

        <section className="section">
          <div className="section-tag">La verdad sobre SEO hoy</div>
          <h2>Google sigue importando<br />(pero no es lo único)</h2>

          <div className="content-block">
            <h3>El cambio de búsqueda es real</h3>
            <p>Las búsquedas en IA crecen 300% anual. En 2 años, la mitad de las búsquedas serán en LLMs, no en Google.</p>
            <p style={{ marginTop: "1rem" }}>¿Tu agencia SEO actual sabe posicionar en IA? Probablemente no.</p>
            <p style={{ marginTop: "1rem" }}>Estar en los dos lados es la diferencia entre tu negocio y la competencia.</p>
          </div>
        </section>

        <section className="section">
          <div className="section-tag">Casos reales</div>
          <h2>De 0 a rankings en meses</h2>

          <div className="case-grid">
            <div className="case-card">
              <div className="case-label">Restaurante</div>
              <h3>Invisible → Visible en Google + IA</h3>
              <p><strong>Antes:</strong> No rankea para nada, no aparece en ChatGPT</p>
              <p><strong>Después:</strong> Página 1 en 6 semanas, recomendado en IA</p>
              <p><strong>Resultado:</strong> 30 → 147 clientes en 3 meses</p>
            </div>
            <div className="case-card">
              <div className="case-label">Servicio Local</div>
              <h3>Negocio nuevo → 5 leads/semana</h3>
              <p><strong>Antes:</strong> Cero visibilidad</p>
              <p><strong>Después:</strong> Posicionado en Google + Ads</p>
              <p><strong>Resultado:</strong> Rentable desde mes 1</p>
            </div>
            <div className="case-card">
              <div className="case-label">E-commerce</div>
              <h3>Competencia alta → Primeras posiciones</h3>
              <p><strong>Antes:</strong> Compitiendo con sitios grandes</p>
              <p><strong>Después:</strong> 15+ keywords en página 1</p>
              <p><strong>Resultado:</strong> Tráfico rentable sin depender de Ads</p>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="section-tag">Inversión y plazos</div>
          <h2>¿Cuánto cuesta? ¿Cuándo veo resultados?</h2>

          <div className="content-block">
            <h3>Precios</h3>
            <ul>
              <li><strong>SEO Estándar: $500-800 AUD/mes</strong> — Para pequeños negocios, startups</li>
              <li><strong>SEO Avanzado: $1000-1500 AUD/mes</strong> — Para competencia alta, e-commerce</li>
            </ul>

            <h3 style={{ marginTop: "2rem" }}>Plazos</h3>
            <ul>
              <li><strong>Mes 1-2:</strong> Implementación (sin cambios visibles aún)</li>
              <li><strong>Mes 3:</strong> Primeros movimientos en posiciones</li>
              <li><strong>Mes 6:</strong> Resultados sólidos y predecibles</li>
              <li><strong>Año 1+:</strong> Crecimiento compounding</li>
            </ul>
          </div>

          <p className="lead" style={{ marginTop: "2rem" }}>No prometo milagros en 30 días. Eso es mentira. El SEO toma tiempo. Pero funciona.</p>
        </section>

        <section className="section">
          <div className="section-tag">Por qué Lucaseo para SEO</div>
          <h2>Resultados, no promesas</h2>

          <div className="content-block">
            <h3>Nosotros sabemos posicionar en IA</h3>
            <p>Otras agencias aún están en 2020 (solo Google). Nosotros estamos en 2026 (Google + IA).</p>

            <h3 style={{ marginTop: "1.5rem" }}>Medimos lo que importa</h3>
            <p>No te mandamos "1.2M impresiones!!". Te mandamos keywords en los que rankeas, tráfico que llega, leads/conversiones que genera, ROI real.</p>

            <h3 style={{ marginTop: "1.5rem" }}>Precios justos</h3>
            <p>Agencia consagrada: $2000-3000/mes. Nosotros: $500-1500/mes. Tu negocio crece sin quebrase.</p>
          </div>
        </section>
      </div>

      <FaqSection topic="SEO y posicionamiento web" faqs={seoFaqs} />

      <ServiceCta
        title="¿Qué pasa ahora?"
        body="Pide tu auditoría gratuita. Analizamos tu web actual, dónde rankeas, dónde deberías rankear, qué está fallando, por dónde empezamos. Sin venta presionada. Sin contratos."
      />
    </>
  );
}
