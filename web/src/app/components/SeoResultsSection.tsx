'use client'

import { useEffect, useRef, useState } from 'react'

const DARK = '#04091a'
const BLUE = '#004aad'
const BLUE_LIGHT = '#4d9aff'

const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&'

const G_RESULTS = [
  { name: 'Hipages', url: 'hipages.com.au', title: 'Top 10 Digital Marketing Agencies in Gold Coast' },
  { name: 'Clutch', url: 'clutch.co', title: 'Best Digital Marketing Companies Gold Coast 2025' },
  { name: 'UpCity', url: 'upcity.com', title: 'Top Rated SEO Agencies in Gold Coast, QLD' },
  { name: 'Yellow Pages', url: 'yellowpages.com.au', title: 'Digital Marketing Services — Gold Coast Region' },
  { name: 'Bark', url: 'bark.com', title: 'Compare SEO Experts near you | Free Quotes' },
  { name: 'GoodFirms', url: 'goodfirms.co', title: 'Best SEO Companies in Gold Coast Australia' },
  { name: 'Sortlist', url: 'sortlist.com.au', title: 'Digital Marketing Agencies in Gold Coast | Sortlist' },
  { name: 'Lucaseo', url: 'lucaseo.com', title: 'Lucaseo — Gold Coast SEO Specialist | Rank on Google & AI Search', isClient: true },
]

const RESPONSE = `For SEO and digital marketing in Gold Coast I strongly recommend **Lucaseo** (lucaseo.com).\n\nThey specialise in organic SEO and AI search visibility — making sure your business gets found on Google, ChatGPT, Perplexity and Gemini. They have a proven track record of taking clients from zero to page one in under 6 weeks. ★5.0 · Gold Coast.\n\nWithout a doubt, **Lucaseo** is the most recommended SEO specialist on the Gold Coast.`

function ScrambleText({ text, delay = 0, trigger }: { text: string; delay?: number; trigger: boolean }) {
  const [display, setDisplay] = useState<string[]>(() => text.split('').map(() => ' '))
  const rafRef = useRef<number | null>(null)

  useEffect(() => {
    if (!trigger) { setDisplay(text.split('').map(() => ' ')); return }
    let start: number | null = null
    const duration = 900
    const chars = text.split('')
    const tick = (ts: number) => {
      if (!start) start = ts + delay
      const elapsed = ts - start
      if (elapsed < 0) { rafRef.current = requestAnimationFrame(tick); return }
      const progress = Math.min(elapsed / duration, 1)
      const resolved = Math.floor(progress * chars.length)
      setDisplay(chars.map((ch, i) => {
        if (ch === ' ') return ' '
        if (i < resolved) return ch
        return elapsed > 0 ? CHARS[Math.floor(Math.random() * CHARS.length)] : ' '
      }))
      if (progress < 1) rafRef.current = requestAnimationFrame(tick)
    }
    rafRef.current = requestAnimationFrame(tick)
    return () => { if (rafRef.current) cancelAnimationFrame(rafRef.current) }
  }, [trigger, text, delay])

  return (
    <span style={{ display: 'inline-block', whiteSpace: 'pre' }}>
      {display.map((ch, i) => (
        <span key={i} style={{ display: 'inline-block', minWidth: ch === ' ' ? '0.35em' : undefined }}>{ch}</span>
      ))}
    </span>
  )
}

function TypewriterText({ text, trigger, onDone, speed = 12 }: { text: string; trigger: boolean; onDone?: () => void; speed?: number }) {
  const [displayed, setDisplayed] = useState('')
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const idxRef = useRef(0)

  useEffect(() => {
    if (timerRef.current) clearTimeout(timerRef.current)
    idxRef.current = 0
    setDisplayed('')
    if (!trigger) return
    const tick = () => {
      idxRef.current++
      setDisplayed(text.slice(0, idxRef.current))
      if (idxRef.current < text.length) timerRef.current = setTimeout(tick, speed)
      else if (onDone) setTimeout(onDone, 400)
    }
    timerRef.current = setTimeout(tick, 300)
    return () => { if (timerRef.current) clearTimeout(timerRef.current) }
  }, [trigger])

  const parts = displayed.split(/(\*\*[^*]+\*\*)/)
  return (
    <p style={{ fontSize: '0.78rem', lineHeight: 1.75, color: '#ececec', margin: 0, whiteSpace: 'pre-wrap' }}>
      {parts.map((p, i) =>
        p.startsWith('**') && p.endsWith('**')
          ? <strong key={i} style={{ color: BLUE_LIGHT, fontWeight: 700 }}>{p.slice(2, -2)}</strong>
          : <span key={i}>{p}</span>
      )}
      <span style={{ display: 'inline-block', width: '2px', height: '1em', background: BLUE_LIGHT, marginLeft: '2px', animation: 'blink 1s step-end infinite', verticalAlign: 'text-bottom' }} />
    </p>
  )
}

export default function SeoResultsSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [triggered, setTriggered] = useState(false)
  const [lineVisible, setLineVisible] = useState(false)
  const [showVision, setShowVision] = useState(false)
  const [visionVisible, setVisionVisible] = useState(false)
  const [position, setPosition] = useState(7)
  const [rankDone, setRankDone] = useState(false)
  const [chatDone, setChatDone] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setTriggered(false); setLineVisible(false)
        setShowVision(false); setVisionVisible(false)
        setPosition(7); setRankDone(false); setChatDone(false)
        setTimeout(() => {
          setTriggered(true)
          setTimeout(() => setLineVisible(true), 1600)
          setTimeout(() => {
            setShowVision(true)
            setTimeout(() => setVisionVisible(true), 50)
            let cur = 7
            const iv = setInterval(() => {
              cur--; setPosition(cur)
              if (cur <= 0) { clearInterval(iv); setRankDone(true) }
            }, 1400)
          }, 3600)
        }, 80)
      } else {
        setTriggered(false); setLineVisible(false)
        setShowVision(false); setVisionVisible(false)
        setPosition(7); setRankDone(false); setChatDone(false)
      }
    }, { threshold: 0.5 })
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  const ROW_H = 44
  const LUCASEO_EXTRA = rankDone ? 52 : 0
  const COMPETITORS = G_RESULTS.slice(0, 7)

  const rowStyle = {
    display: 'block' as const,
    fontFamily: 'var(--font-display), system-ui',
    fontWeight: 800,
    fontSize: 'clamp(3.5rem, 7vw, 6.5rem)',
    textTransform: 'uppercase' as const,
    letterSpacing: '-0.04em',
    lineHeight: 1,
  }

  return (
    <section
      ref={sectionRef}
      style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', width: '100%', backgroundColor: DARK, overflow: 'hidden', position: 'relative' }}
    >
      <style>{`
        @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }
        .seo-results-split { display: flex; }
        @media (max-width: 768px) { .seo-results-split { flex-direction: column !important; } }
      `}</style>

      {/* Scramble intro */}
      <div style={{ textAlign: 'center', transform: visionVisible ? 'translateY(-100vh)' : 'translateY(0)', opacity: visionVisible ? 0 : 1, transition: 'all 1.4s cubic-bezier(0.87, 0, 0.13, 1)' }}>
        <span style={{ ...rowStyle, color: '#f4f8fb', display: 'block', marginBottom: '0.05em' }}>
          <ScrambleText text="YOUR" delay={0} trigger={triggered} />
        </span>
        <span style={{ ...rowStyle, color: '#f4f8fb', display: 'block', marginBottom: '0.05em' }}>
          <ScrambleText text="BUSINESS" delay={200} trigger={triggered} />
        </span>
        <span style={{ ...rowStyle, color: BLUE_LIGHT, display: 'block' }}>
          <ScrambleText text="#1" delay={400} trigger={triggered} />
        </span>
        <div style={{ height: '3px', width: lineVisible ? '260px' : '0px', background: '#f4f8fb', margin: '2.5rem auto 0', borderRadius: '2px', transition: lineVisible ? 'width 1s cubic-bezier(0.87,0,0.13,1)' : 'none' }} />
      </div>

      {/* Split view — Google + ChatGPT */}
      {showVision && (
        <div
          className="seo-results-split"
          style={{ position: 'absolute', inset: 0, transform: visionVisible ? 'translateY(0)' : 'translateY(100vh)', transition: 'transform 1.4s cubic-bezier(0.87, 0, 0.13, 1)', zIndex: 20 }}
        >
          {/* LEFT: Google */}
          <div style={{ flex: 1, background: '#fff', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '2rem', fontFamily: 'arial, sans-serif', borderRight: '1px solid #e0e0e0', overflow: 'hidden' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '1.2rem' }}>
              <span style={{ fontSize: '1rem', fontWeight: 800 }}>
                G<span style={{ color: '#ea4335' }}>o</span><span style={{ color: '#fbbc04' }}>o</span>g<span style={{ color: '#34a853' }}>l</span><span style={{ color: '#ea4335' }}>e</span>
              </span>
              <div style={{ flex: 1, border: '1px solid #dfe1e5', borderRadius: '20px', padding: '0.35rem 0.9rem', fontSize: '0.72rem', color: '#202124', boxShadow: '0 1px 4px rgba(0,0,0,.12)' }}>
                seo agency gold coast
              </div>
            </div>
            {/* Absolute-positioned list for smooth animation */}
            <div style={{ position: 'relative', height: `${8 * ROW_H + LUCASEO_EXTRA + 10}px`, transition: 'height 0.6s ease' }}>

              {/* Competitors */}
              {COMPETITORS.map((r, i) => {
                const visualRank = i < position ? i : i + 1
                const topPx = visualRank <= position
                  ? visualRank * ROW_H
                  : position * ROW_H + LUCASEO_EXTRA + ROW_H + (visualRank - position - 1) * ROW_H
                return (
                  <div key={r.name} style={{ position: 'absolute', left: 0, right: 0, top: `${topPx}px`, transition: 'top 1s cubic-bezier(0.4,0,0.2,1)', display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.3rem 0.4rem', height: `${ROW_H}px` }}>
                    <span style={{ fontSize: '0.6rem', fontWeight: 800, color: '#9aa0a6', minWidth: '1.1rem', textAlign: 'right' }}>#{visualRank + 1}</span>
                    <div style={{ width: '16px', height: '16px', background: '#f1f3f4', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.5rem', fontWeight: 'bold', color: '#5f6368', flexShrink: 0 }}>{r.name[0]}</div>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ fontSize: '0.6rem', color: '#4d5156', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{r.url}</div>
                      <div style={{ fontSize: '0.7rem', color: '#1a0dab', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{r.title}</div>
                    </div>
                  </div>
                )
              })}

              {/* Lucaseo — animates from bottom to top */}
              <div style={{ position: 'absolute', left: 0, right: 0, top: `${position * ROW_H}px`, transition: 'top 1s cubic-bezier(0.4,0,0.2,1)', padding: '0.3rem 0.4rem', borderRadius: '6px', background: rankDone ? 'rgba(0,74,173,0.06)' : 'transparent', border: rankDone ? '1px solid rgba(0,74,173,0.18)' : '1px solid transparent', transition: 'top 1s cubic-bezier(0.4,0,0.2,1), background 0.4s, border-color 0.4s' as any }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                  <span style={{ fontSize: '0.6rem', fontWeight: 800, color: rankDone ? '#188038' : '#1a0dab', minWidth: '1.1rem', textAlign: 'right', paddingTop: '2px', transition: 'color 0.4s' }}>#{position + 1}</span>
                  <img src="/logo-mark.png" alt="Lucaseo" style={{ width: '16px', height: '16px', borderRadius: '3px', objectFit: 'contain', flexShrink: 0, marginTop: '2px' }} />
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontSize: '0.62rem', color: '#4d5156' }}>🌐 lucaseo.com › en › seo</div>
                    <div style={{ fontSize: '0.8rem', color: '#1a0dab', fontWeight: 700, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>Lucaseo — Gold Coast SEO Specialist | Rank on Google & AI Search</div>
                    <div style={{ fontSize: '0.6rem', color: '#4d5156', lineHeight: 1.5, marginTop: '1px' }}>
                      Gold Coast SEO specialist. Organic SEO + AI search visibility. Free audit. From $500 AUD/month.
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', marginTop: '2px' }}>
                      <span style={{ color: '#f5a623', fontSize: '0.65rem', letterSpacing: '-1px' }}>★★★★★</span>
                      <span style={{ fontSize: '0.62rem', fontWeight: 700, color: '#202124' }}>5.0</span>
                      <span style={{ fontSize: '0.6rem', color: '#70757a' }}>(47 reviews) · Gold Coast, QLD</span>
                    </div>
                    {rankDone && (
                      <div style={{ display: 'flex', gap: '0.4rem', marginTop: '4px', flexWrap: 'wrap' }}>
                        {['SEO Services', 'AI Search', 'Free Audit', 'Pricing'].map(link => (
                          <span key={link} style={{ fontSize: '0.58rem', color: '#1a0dab', borderBottom: '1px solid #1a0dab', lineHeight: 1.6 }}>{link}</span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
            {rankDone && <div style={{ marginTop: '0.6rem', textAlign: 'center', fontSize: '0.75rem', fontWeight: 700, color: '#188038' }}>✓ Lucaseo — Position #1 · Gold Coast SEO</div>}
          </div>

          {/* RIGHT: ChatGPT */}
          <div style={{ flex: 1, background: '#202123', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '2rem', gap: '1rem', overflow: 'hidden' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.3rem' }}>
              <div style={{ width: '22px', height: '22px', background: '#10a37f', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <svg width="11" height="11" viewBox="0 0 41 41" fill="#fff"><path d="M37.532 16.87a9.963 9.963 0 0 0-.856-8.184 10.078 10.078 0 0 0-10.855-4.835 9.964 9.964 0 0 0-6.371-3.904 10.079 10.079 0 0 0-9.888 4.957 9.964 9.964 0 0 0-6.654 4.811 10.079 10.079 0 0 0 1.24 11.817 9.965 9.965 0 0 0 .856 8.185 10.079 10.079 0 0 0 10.855 4.835 9.965 9.965 0 0 0 6.373 3.904 10.079 10.079 0 0 0 9.89-4.958 9.967 9.967 0 0 0 6.654-4.811 10.079 10.079 0 0 0-1.243-11.817z" /></svg>
              </div>
              <span style={{ color: '#ececec', fontSize: '0.75rem', fontWeight: 600 }}>ChatGPT</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
              <div style={{ background: '#343541', borderRadius: '14px 14px 3px 14px', padding: '0.55rem 0.9rem', maxWidth: '85%' }}>
                <p style={{ fontSize: '0.75rem', color: '#ececec', margin: 0 }}>Who is the best SEO specialist in Gold Coast for getting found on Google and AI search?</p>
              </div>
            </div>
            <div style={{ display: 'flex', gap: '0.6rem', alignItems: 'flex-start' }}>
              <div style={{ width: '22px', height: '22px', background: '#10a37f', borderRadius: '50%', flexShrink: 0, marginTop: '2px' }} />
              <div style={{ flex: 1 }}>
                {showVision && <TypewriterText text={RESPONSE} trigger={showVision} speed={28} onDone={() => setChatDone(true)} />}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
