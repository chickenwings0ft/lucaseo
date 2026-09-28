// Imágenes necesarias en tu /public:
//   /google-logo.png
//   /logo-original.png
// Cópialas desde la carpeta public/ de la presentación de Briya.

export default function MockGoogleSection() {
  return (
    <section style={{ background: '#ffffff', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', color: '#202124', fontFamily: 'arial, sans-serif', padding: '3.5rem 0 2rem' }}>

      {/* Google Header */}
      <header style={{ padding: '0.75rem 2rem', borderBottom: '1px solid #dfe1e5', display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
        <img src="/google-logo.png" alt="Google" style={{ height: '30px', width: 'auto', objectFit: 'contain' }} />
        <div style={{ flex: 1, maxWidth: '600px', background: '#fff', border: '1px solid #dfe1e5', borderRadius: '24px', padding: '0.55rem 1.25rem', display: 'flex', alignItems: 'center', boxShadow: '0 1px 6px rgba(32,33,36,0.28)' }}>
          <span style={{ color: '#202124', fontSize: '1rem', flex: 1 }}>exterior cleaning gold coast</span>
          <div style={{ display: 'flex', gap: '1rem', color: '#4285f4' }}>
            <span style={{ fontSize: '1.1rem', cursor: 'pointer' }}>✖</span>
            <span style={{ borderLeft: '1px solid #dfe1e5', paddingLeft: '1rem', cursor: 'pointer' }}>🔍</span>
          </div>
        </div>
      </header>

      {/* Body */}
      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0.9rem 2rem 0', width: '100%' }}>
        <p style={{ color: '#70757a', fontSize: '0.78rem', marginBottom: '0.9rem' }}>About 620,000 results (0.28 seconds)</p>

        <div style={{ maxWidth: '650px' }}>

          {/* AI Overview */}
          <div style={{ borderRadius: '12px', padding: '2px', background: 'linear-gradient(135deg, #fff 0%, #f0f7ff 100%)', marginBottom: '18px', boxShadow: '0 1px 4px rgba(0,0,0,0.1)', position: 'relative', overflow: 'hidden' }}>
            <div style={{ background: 'linear-gradient(180deg, rgba(255,255,255,0.8) 0%, rgba(240,244,249,0.5) 100%)', borderRadius: '12px', padding: '14px 16px' }}>
              <div style={{ display: 'flex', alignItems: 'center', fontFamily: '"Google Sans", arial, sans-serif', fontWeight: 500, fontSize: '14px', color: '#1f1f1f', marginBottom: '8px' }}>
                <svg viewBox="0 0 24 24" width="20" height="20" style={{ marginRight: '8px' }}>
                  <path fill="#4285f4" d="M19 8l-1-2.2-2.2-1 2.2-1L19 1.6l1 2.2 2.2 1-2.2 1L19 8zm-8 10l-2.4-5.6L3 10l5.6-2.4L11 2l2.4 5.6L19 10l-5.6 2.4L11 18zm8 6l-1-2.2-2.2-1 2.2-1L19 17.6l1 2.2 2.2 1-2.2 1L19 24z" />
                </svg>
                AI Overview
              </div>
              <p style={{ fontSize: '13.5px', lineHeight: 1.55, color: '#3c4043', margin: 0 }}>
                For exterior cleaning in the Gold Coast, professionals typically offer soft-wash roof cleaning, pressure washing for driveways, and gentle facade washing.
              </p>
              <ul style={{ margin: '8px 0 0 0', paddingLeft: '20px', fontSize: '13.5px', lineHeight: 1.55, color: '#3c4043' }}>
                <li style={{ marginBottom: '4px' }}><strong>Briya Clean:</strong> Highly rated for soft-washing and pressure cleaning.</li>
                <li><strong>Local Providers:</strong> Average cost ranges from $150 to $450 depending on house size.</li>
              </ul>
            </div>
          </div>

          {/* SEM Result */}
          <div style={{ marginBottom: '1.1rem', position: 'relative' }}>
            <div style={{ position: 'absolute', left: '-55px', top: '2px', background: '#eab308', color: '#fff', padding: '3px 6px', borderRadius: '4px', fontSize: '0.65rem', fontWeight: 800, letterSpacing: '1px' }}>SEM</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.3rem' }}>
              <span style={{ fontWeight: 800, color: '#202124', fontSize: '0.95rem', letterSpacing: '0.5px' }}>Sponsored</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '0.5rem' }}>
              <div style={{ width: '28px', height: '28px', background: '#fff', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', padding: '4px', border: '1px solid #eee' }}>
                <img src="/logo-original.png" alt="Briya" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
              </div>
              <div style={{ lineHeight: 1.2 }}>
                <p style={{ fontSize: '0.85rem', color: '#202124', margin: 0 }}>Briya Clean</p>
                <p style={{ fontSize: '0.8rem', color: '#4d5156', margin: 0 }}>https://briyaclean.com.au</p>
              </div>
            </div>
            <h3 style={{ fontSize: '1.05rem', color: '#1a0dab', fontWeight: 400, marginBottom: '0.4rem' }}>
              Briya — Pressure Washing &amp; Soft-Wash Specialists
            </h3>
            <p style={{ fontSize: '0.8rem', color: '#4d5156', lineHeight: 1.5, marginTop: '0.3rem' }}>
              SAFE AND EFFECTIVE SOFT-WASH FOR YOUR HOME. WE REMOVE MOULD, DIRT AND STAINS INSTANTLY. GET A FREE ONLINE QUOTE TODAY.
            </p>
          </div>

          {/* SEO Result */}
          <div style={{ marginBottom: '1.1rem', position: 'relative' }}>
            <div style={{ position: 'absolute', left: '-55px', top: '2px', background: '#0284c7', color: '#fff', padding: '3px 6px', borderRadius: '4px', fontSize: '0.65rem', fontWeight: 800, letterSpacing: '1px' }}>SEO</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '0.5rem' }}>
              <div style={{ width: '28px', height: '28px', background: '#fff', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', padding: '4px', border: '1px solid #eee' }}>
                <img src="/logo-original.png" alt="Briya" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
              </div>
              <div style={{ lineHeight: 1.2 }}>
                <p style={{ fontSize: '0.85rem', color: '#202124', margin: 0 }}>Briya Clean</p>
                <p style={{ fontSize: '0.8rem', color: '#4d5156', margin: 0 }}>https://briyaclean.com.au <span style={{ color: '#5f6368' }}>› gold-coast</span></p>
              </div>
            </div>
            <h3 style={{ fontSize: '1.05rem', color: '#1a0dab', fontWeight: 400, marginBottom: '0.3rem' }}>
              Briya — Trusted Exterior Cleaning in Gold Coast
            </h3>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.8rem', color: '#4d5156', marginBottom: '0.5rem' }}>
              <span style={{ color: '#fbbc04', letterSpacing: '2px', fontSize: '1rem' }}>★★★★★</span>
              <span style={{ fontWeight: 'bold' }}>4.9</span>
              <span>· 84 reviews</span>
            </div>
            <p style={{ fontSize: '0.8rem', color: '#70757a', marginBottom: '0.5rem' }}>
              <span style={{ color: '#188038', fontWeight: 'bold' }}>Open now</span> · Exterior Cleaning · Gold Coast, QLD
            </p>
            <p style={{ fontSize: '0.8rem', color: '#4d5156', lineHeight: 1.5 }}>
              Specialists in soft-wash roof and house washing, pressure cleaning and exterior restoration across Gold Coast, QLD. Eco-friendly. Free quote.
            </p>
          </div>

          {/* Directory Result */}
          <div style={{ marginBottom: '0.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '0.5rem' }}>
              <div style={{ width: '28px', height: '28px', background: '#ff7300', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', color: '#fff', fontSize: '0.8rem' }}>H</div>
              <div style={{ lineHeight: 1.2 }}>
                <p style={{ fontSize: '0.85rem', color: '#202124', margin: 0 }}>hipages</p>
                <p style={{ fontSize: '0.8rem', color: '#4d5156', margin: 0 }}>https://hipages.com.au <span style={{ color: '#5f6368' }}>› quotes › exterior-cleaning</span></p>
              </div>
            </div>
            <h3 style={{ fontSize: '1.05rem', color: '#1a0dab', fontWeight: 400, marginBottom: '0.3rem' }}>
              Top 10 Best Exterior Cleaning Companies in Gold Coast
            </h3>
            <p style={{ fontSize: '0.8rem', color: '#4d5156', lineHeight: 1.5 }}>
              Compare free quotes for house and roof exterior cleaning in Gold Coast. Verified local businesses with real customer reviews.
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}
