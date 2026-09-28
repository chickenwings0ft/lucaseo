'use client'

const C = {
  dark: '#061a3f',
  muted: '#6b889e',
  blue: '#0284c7',
  yellow: '#eab308',
  bg: '#f4f8fb',
}

const SERVICES = [
  {
    num: '01',
    name: 'SEO',
    tagline: 'Posicionamiento Orgánico',
    desc: 'Aparecer arriba en Google y en las respuestas de las IAs cuando alguien busca limpieza de exteriores en Gold Coast, Brisbane o NSW.',
    items: ['SEO local y Google Business Profile', 'Landings por servicio y zona', 'Optimización para ChatGPT e IAs'],
    result: 'Clientes recurrentes a largo plazo',
    color: C.blue,
    bg: 'rgba(2,132,199,0.06)',
  },
  {
    num: '02',
    name: 'SEM',
    tagline: 'Publicidad de Pago (Google, Facebook e Instagram)',
    desc: 'Campañas gestionadas en Google Ads y Meta Ads para captar presupuestos desde el primer día, mientras el SEO madura.',
    items: ['Google Ads: búsqueda de alta intención', 'Meta Ads: Instagram + Facebook', 'Optimización semanal del presupuesto'],
    result: 'Leads inmediatos y medibles',
    color: C.yellow,
    bg: 'rgba(234,179,8,0.07)',
  },
]

export default function ServicesSection() {
  return (
    <section style={{ padding: '5rem 2rem', background: C.bg }}>
      <style>{`
        .services-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.5rem;
          max-width: 860px;
          margin: 0 auto;
        }
        @media (max-width: 640px) {
          .services-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <p style={{ fontSize: '0.6rem', fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: C.muted, marginBottom: '0.5rem' }}>
          La Propuesta
        </p>
        <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 3rem)', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '-0.04em', color: C.dark, lineHeight: 1.05, marginBottom: '0.75rem' }}>
          Una estrategia,{' '}
          <span style={{ color: C.blue }}>dos motores.</span>
        </h2>
        <p style={{ fontSize: '0.9rem', color: C.muted, maxWidth: '560px', margin: '0 auto', lineHeight: 1.55 }}>
          SEO y SEM trabajando como un solo sistema: cada uno cubre una fase distinta del cliente y se refuerzan entre sí.
        </p>
      </div>

      <div className="services-grid">
        {SERVICES.map((s, i) => (
          <div key={i} style={{ background: 'white', border: '1px solid rgba(6,26,63,0.09)', borderRadius: '16px', padding: '1.6rem 1.4rem', position: 'relative', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '4px', background: s.color }} />

            <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.6rem', marginBottom: '0.2rem' }}>
              <span style={{ fontSize: '0.7rem', fontWeight: 800, color: s.color, letterSpacing: '0.1em' }}>{s.num}</span>
              <span style={{ fontSize: '1.7rem', fontWeight: 900, letterSpacing: '-0.03em', color: C.dark, textTransform: 'uppercase' }}>{s.name}</span>
            </div>
            <div style={{ fontSize: '0.62rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: s.color, marginBottom: '0.85rem' }}>
              {s.tagline}
            </div>

            <p style={{ fontSize: '0.78rem', color: C.muted, lineHeight: 1.55, marginBottom: '1rem' }}>
              {s.desc}
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '1.1rem' }}>
              {s.items.map((t, j) => (
                <div key={j} style={{ display: 'flex', gap: '0.5rem', alignItems: 'flex-start' }}>
                  <div style={{ width: 5, height: 5, borderRadius: '50%', background: s.color, flexShrink: 0, marginTop: '7px' }} />
                  <span style={{ fontSize: '0.74rem', color: C.dark, lineHeight: 1.45, opacity: 0.85 }}>{t}</span>
                </div>
              ))}
            </div>

            <div style={{ marginTop: 'auto', background: s.bg, border: `1px solid ${s.color}25`, borderRadius: '8px', padding: '0.65rem 0.85rem' }}>
              <div style={{ fontSize: '0.55rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#6b889e', marginBottom: '0.2rem' }}>Resultado</div>
              <div style={{ fontSize: '0.78rem', fontWeight: 800, color: C.dark }}>{s.result}</div>
            </div>
          </div>
        ))}
      </div>

      <p style={{ textAlign: 'center', fontSize: '0.78rem', color: C.muted, marginTop: '2rem' }}>
        SEO construye la base · SEM acelera los resultados
      </p>
    </section>
  )
}
