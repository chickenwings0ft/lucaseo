import type { CSSProperties } from "react";
import type { Metadata } from "next";
import Image from "next/image";
import { Poppins } from "next/font/google";
import { notFound } from "next/navigation";
import PrintButton from "./PrintButton";
import Deck, { type Slide } from "./Deck";
import { Accordion, AcceptButton, AddonToggle, Expandable, Investment, ProposalProvider, RefTabs, UpfrontTotal } from "./Interactive";
import { T, money } from "./strings";
import { invoices, getInvoice } from "@/lib/invoiceData";

const poppins = Poppins({ subsets: ["latin"], weight: ["600", "700", "800"], variable: "--font-poppins" });

type Props = {
  params: Promise<{ ref: string }>;
};

export const dynamicParams = false;

export async function generateStaticParams() {
  return invoices.map((i) => ({ ref: i.ref }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { ref } = await params;
  const invoice = getInvoice(ref);
  if (!invoice) return {};
  return {
    title: `${T[invoice.lang].metaTitle} ${invoice.number} — ${invoice.to.name} | Lucaseo`,
    robots: { index: false, follow: false, nocache: true },
  };
}

const longDate = (iso: string, locale: string) =>
  new Date(`${iso}T00:00:00`).toLocaleDateString(locale, { day: "numeric", month: "long", year: "numeric" });

/** Stagger index for the reveal animation. */
const d = (i: number) => ({ "--i": i }) as CSSProperties;

export default async function InvoicePage({ params }: Props) {
  const { ref } = await params;
  const invoice = getInvoice(ref);
  if (!invoice) notFound();

  const t = T[invoice.lang];
  const rec = invoice.recurring;
  const addons = invoice.addons ?? [];
  const pricing = {
    bundle: invoice.bundle,
    oneOff: [invoice.website, ...invoice.launch].map((l) => ({ number: l.number, title: l.title })),
    monthly: rec.fromPrice,
    months: rec.months,
    firstMonthNow: rec.firstMonthNow ?? false,
    gstRate: invoice.gstRate,
    addons: addons.map((a) => ({ title: a.title, price: a.price })),
  };
  const pay = invoice.payment;
  const web = invoice.website;
  const labels = t.slides;

  const slides: Slide[] = [];

  /* 01 — Cover */
  slides.push({
    id: "portada",
    label: labels[0],
    content: (
      <div className="cover">
        {invoice.status === "draft" && <div className="inv-draft rv">{t.draftBanner}</div>}
        <header className="inv-top rv">
          <div className="inv-top__brand">
            <Image src="/logo.png" alt="Lucaseo" width={48} height={48} priority style={{ width: "auto", height: "42px" }} />
            <span className="inv-top__label">{t.invoice}</span>
          </div>
          <PrintButton label={t.print} />
        </header>
        <div className="inv-hero rv" style={d(1)}>
          <div className="inv-hero__in">
            <div className="inv-hero__row">
              <div className="inv-hero__eyebrow">{t.eyebrow}</div>
              {invoice.to.logo && (
                <div className="inv-hero__client">
                  <span>{t.preparedFor}</span>
                  <Image src={invoice.to.logo} alt={invoice.to.name} width={921} height={339} />
                </div>
              )}
            </div>
            <h1>{invoice.title}</h1>
            <p className="inv-hero__sub">{invoice.subtitle}</p>
            <div className="inv-meta">
              <div>
                <div className="inv-meta__label">{t.number}</div>
                <div className="inv-meta__value">{invoice.number}</div>
              </div>
              <div>
                <div className="inv-meta__label">{t.issued}</div>
                <div className="inv-meta__value">{longDate(invoice.issueDate, t.locale)}</div>
              </div>
              <div>
                <div className="inv-meta__label">{t.due}</div>
                <div className="inv-meta__value">{longDate(invoice.dueDate, t.locale)}</div>
              </div>
              <div>
                <div className="inv-meta__label">{t.status}</div>
                <div className="inv-meta__value">
                  <span className={`inv-status inv-status--${invoice.status}`}>{t.statuses[invoice.status]}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
  });

  /* 02 — Plan */
  if (invoice.plan) {
    const plan = invoice.plan;
    slides.push({
      id: "plan",
      label: labels[1],
      content: (
        <>
          <div className="inv-tag rv">{plan.tag}</div>
          <h2 className="inv-h2 rv" style={d(1)}>{plan.heading}</h2>
          <p className="inv-lead rv" style={d(2)}>{plan.intro}</p>
          <div className="inv-plan__stats">
            {plan.stats.map((st, i) => (
              <div className="inv-plan__stat rv" key={st.label} style={d(3 + i)}>
                <div className="inv-plan__value">{st.value}</div>
                <div className="inv-plan__label">{st.label}</div>
              </div>
            ))}
          </div>
          <div className="inv-plan__phases">
            {plan.phases.map((ph, i) => (
              <div className="inv-plan__phase rv" key={ph.when} style={d(6 + i)}>
                <div className="inv-plan__when">{ph.when}</div>
                <h3>{ph.title}</h3>
                <p>{ph.text}</p>
              </div>
            ))}
          </div>
          <p className="inv-note rv" style={d(9)}>{plan.note}</p>
        </>
      ),
    });
  }

  /* 03 — Why a new website */
  slides.push({
    id: "por-que",
    label: labels[2],
    content: (
      <div className="why">
        <div className="inv-tag rv">{labels[2]}</div>
        <h2 className="why__h rv" style={d(1)}>{invoice.why.heading}</h2>
        {invoice.why.body.map((p, i) => (
          <p className="why__p rv" key={p} style={d(2 + i)}>{p}</p>
        ))}
        <div className="inv-bundle rv" style={d(5)}>
          <div>
            <div className="inv-bundle__label">{t.bundleTag}</div>
            <div className="inv-bundle__title">{invoice.bundle.label}</div>
          </div>
          <div className="inv-bundle__price">{money(invoice.bundle.price)}</div>
        </div>
      </div>
    ),
  });

  /* 04 — References */
  if (invoice.references) {
    const refs = invoice.references;
    slides.push({
      id: "referencias",
      label: labels[3],
      content: (
        <>
          <div className="inv-tag rv">{refs.tag}</div>
          <h2 className="inv-h2 rv" style={d(1)}>{refs.heading}</h2>
          <p className="inv-lead rv" style={d(2)}>{refs.intro}</p>
          <div className="rv" style={d(3)}>
            <RefTabs sites={refs.sites} t={t} />
          </div>
        </>
      ),
    });
  }

  /* 05 — New website */
  slides.push({
    id: "web",
    label: labels[4],
    content: (
      <>
        <div className="inv-tag rv">{t.part1}</div>
        <h2 className="inv-h2 rv" style={d(1)}>{t.part1h}</h2>
        <article className="inv-item rv" style={d(2)}>
          <div className="inv-item__head">
            <span className="inv-item__num">{web.number}</span>
            <div className="inv-item__title">
              <h3>{web.title}</h3>
              <p>{web.summary}</p>
            </div>
          </div>
          <Expandable items={web.includes} visible={4} t={t} />
          {web.chips && (
            <div className="inv-chips">
              <span className="inv-chips__label">{web.chips.label}</span>
              <div className="inv-chips__row">
                {web.chips.items.map((c) => (
                  <span key={c} className="inv-chip">{c}</span>
                ))}
              </div>
            </div>
          )}
        </article>
      </>
    ),
  });

  /* 06 — Launch set-up */
  slides.push({
    id: "puesta-en-marcha",
    label: labels[5],
    content: (
      <>
        <div className="inv-tag rv">{t.part2}</div>
        <h2 className="inv-h2 rv" style={d(1)}>{t.part2h}</h2>
        <div className="rv" style={d(2)}>
          <Accordion items={invoice.launch} />
        </div>
      </>
    ),
  });

  /* 07 — Google Ads (+ optional Meta) */
  slides.push({
    id: "captacion",
    label: labels[6],
    content: (
      <>
        <div className="inv-tag rv">{t.part3}</div>
        <h2 className="inv-h2 rv" style={d(1)}>{t.part3h}</h2>
        <div className="cap">
          <article className="inv-recurring rv" style={d(2)}>
            <div className="inv-item__head">
              <span className="inv-item__num">05</span>
              <div className="inv-item__title">
                <h3>{rec.title}</h3>
                <p>{rec.summary}</p>
              </div>
            </div>
            <div className="cap__price">
              <span className="inv-recurring__amount">
                {money(rec.fromPrice)} <small>{t.perMonth}</small>
              </span>
              <span className="inv-recurring__from">× {rec.months} {t.monthsWord}</span>
            </div>
            <Expandable items={rec.includes} visible={3} t={t} always />
            <p className="inv-recurring__note">{rec.note}</p>
          </article>
          {addons.map((a, i) => (
            <article className="inv-addon rv" key={a.title} style={d(3 + i)}>
              <div className="inv-item__head">
                <span className="inv-item__num">{String(6 + i).padStart(2, "0")}</span>
                <div className="inv-item__title">
                  <span className="inv-addon__badge">{t.optional}</span>
                  <h3>{a.title}</h3>
                  <p>{a.summary}</p>
                </div>
              </div>
              <div className="cap__price">
                <span className="inv-addon__amount">
                  +{money(a.price)} <small>{t.perMonth}</small>
                </span>
                <AddonToggle index={i} t={t} />
              </div>
              <Expandable items={a.includes} visible={3} t={t} always />
              <p className="inv-recurring__note">{a.note}</p>
            </article>
          ))}
        </div>
      </>
    ),
  });

  /* 08 — Investment */
  slides.push({
    id: "inversion",
    label: labels[7],
    content: (
      <>
        <div className="inv-tag rv">{t.summary}</div>
        <h2 className="inv-h2 rv" style={d(1)}>{t.whatsDue}</h2>
        <div className="inv-summary">
          <div className="rv" style={d(2)}>
            <Investment p={pricing} t={t} />
          </div>
          <div className="inv-card rv" style={d(3)}>
            <div className="inv-tag" style={{ marginBottom: "1rem" }}>{t.payment}</div>
            <dl className="inv-pay">
              <dt>{t.accountName}</dt>
              <dd>{pay.accountName ?? <span className="inv-todo">{t.toAdd}</span>}</dd>
              <dt>BSB</dt>
              <dd>{pay.bsb ?? <span className="inv-todo">{t.toAdd}</span>}</dd>
              <dt>{t.accountNumber}</dt>
              <dd>{pay.accountNumber ?? <span className="inv-todo">{t.toAdd}</span>}</dd>
              <dt>PayID</dt>
              <dd>{pay.payId ?? <span className="inv-todo">{t.toAdd}</span>}</dd>
              <dt>{t.reference}</dt>
              <dd>{pay.reference}</dd>
            </dl>
          </div>
        </div>
      </>
    ),
  });

  /* 09 — Terms */
  slides.push({
    id: "condiciones",
    label: labels[8],
    content: (
      <>
        <div className="inv-tag rv">{t.terms}</div>
        <h2 className="inv-h2 rv" style={d(1)}>{t.fineprint}</h2>
        <ul className="inv-terms">
          {invoice.terms.map((term, i) => (
            <li className="rv" key={term} style={d(2 + i)}>{term}</li>
          ))}
        </ul>
      </>
    ),
  });

  /* 10 — Accept */
  slides.push({
    id: "aceptar",
    label: labels[9],
    content: (
      <div className="accept">
        <div className="inv-tag rv">{t.nextStep}</div>
        <h2 className="accept__h rv" style={d(1)}>{t.acceptH}</h2>
        <p className="accept__p rv" style={d(2)}>{t.acceptText}</p>
        <div className="accept__card rv" style={d(3)}>
          <div className="accept__label">{t.totalDue}</div>
          <div className="accept__amount">
            <UpfrontTotal p={pricing} />
          </div>
          <div className="accept__actions">
            <AcceptButton
              p={pricing}
              t={t}
              email={invoice.from.email}
              number={invoice.number}
              client={invoice.to.name}
              items={[invoice.bundle.label, rec.title]}
            />
            <PrintButton label={t.print} />
          </div>
        </div>
        <div className="inv-parties rv" style={d(4)}>
          <div className="inv-party">
            <div className="inv-party__label">{t.from}</div>
            <div className="inv-party__name">{invoice.from.name}</div>
            <p>
              {invoice.from.location}
              <br />
              {invoice.from.email}
              <br />
              ABN: {invoice.from.abn ?? <span className="inv-todo">{t.toAdd}</span>}
            </p>
          </div>
          <div className="inv-party">
            <div className="inv-party__label">{t.billedTo}</div>
            <div className="inv-party__name">{invoice.to.name}</div>
            <p>
              {invoice.to.site}
              <br />
              {invoice.to.email} · {invoice.to.phone}
              {invoice.to.abn && (
                <>
                  <br />
                  ABN: {invoice.to.abn}
                </>
              )}
            </p>
          </div>
        </div>
        <footer className="inv-foot rv" style={d(5)}>
          <span>{t.thanks}</span>
          <span>
            {t.questions} <a href={`mailto:${invoice.from.email}`}>{invoice.from.email}</a>
          </span>
        </footer>
      </div>
    ),
  });

  return (
    <>
      <style>{CSS}</style>
      <main className={`inv-page ${poppins.variable}`}>
        <ProposalProvider count={addons.length}>
          <Deck slides={slides} ui={{ prev: t.prev, next: t.next, start: t.start, scrollHint: t.scrollHint }} />
        </ProposalProvider>
      </main>
    </>
  );
}

const CSS = `
  .inv-page { --accent: #3b3478; --accent-hover: #2f2960; --accent-soft: rgba(59,52,120,0.08); --gold: #c0a078; --ink: #1c1f3d; --surface: #f6f5fb; --card-border: rgba(59,52,120,0.14); --hairline: rgba(59,52,120,0.09); --font-display: var(--font-poppins), system-ui, sans-serif; height: 100svh; overflow: hidden; background: #fff; color: var(--text); }

  /* ── Deck: desktop = vertical snap ── */
  .deck { position: relative; height: 100svh; overflow-y: auto; overflow-x: hidden; scroll-snap-type: y mandatory; outline: none; scrollbar-width: none; }
  .deck::-webkit-scrollbar { display: none; }
  .slide { position: relative; min-height: 100svh; scroll-snap-align: start; display: flex; flex-direction: column; justify-content: center; padding: 2.5rem 0; }
  .slide:nth-child(even) { background: var(--surface); }
  .slide__in { width: 100%; max-width: 1080px; margin: 0 auto; padding: 0 4.5rem 0 2rem; }

  .deck.is-ready .slide .rv { opacity: 0; transform: translateY(18px); }
  .deck.is-ready .slide.is-seen .rv { opacity: 1; transform: none; transition: opacity 600ms var(--ease-out), transform 600ms var(--ease-out); transition-delay: calc(var(--i, 0) * 70ms); }

  .deck-progress { position: fixed; top: 0; left: 0; right: 0; height: 3px; z-index: 50; pointer-events: none; }
  .deck-progress span { display: block; height: 100%; background: var(--accent); transform-origin: left; transition: transform 400ms var(--ease-out); }

  .deck-dots { position: fixed; right: 1.5rem; top: 50%; transform: translateY(-50%); display: flex; flex-direction: column; align-items: center; gap: 0.625rem; z-index: 40; }
  .deck-dots button { position: relative; width: 8px; height: 8px; padding: 0; border: 0; border-radius: 999px; background: rgba(59,52,120,0.22); cursor: pointer; transition: height 300ms var(--ease-out), background-color 200ms; }
  .deck-dots button::before { content: ''; position: absolute; inset: -5px -10px; }
  .deck-dots button.is-on { height: 26px; background: var(--accent); }
  .deck-dots__label { position: absolute; right: calc(100% + 14px); top: 50%; transform: translate(4px, -50%); white-space: nowrap; font-size: 0.75rem; font-weight: 600; color: #fff; background: var(--ink); padding: 0.3rem 0.6rem; border-radius: 6px; opacity: 0; pointer-events: none; transition: opacity 150ms, transform 150ms var(--ease-out); }
  .deck-dots button:focus-visible .deck-dots__label { opacity: 1; transform: translate(0, -50%); }
  @media (hover: hover) and (pointer: fine) { .deck-dots button:hover .deck-dots__label { opacity: 1; transform: translate(0, -50%); } }

  .deck-hint { position: fixed; bottom: 1.75rem; left: 50%; transform: translateX(-50%); z-index: 40; display: inline-flex; align-items: center; gap: 0.5rem; font: inherit; font-size: 0.8125rem; font-weight: 600; color: var(--muted); background: rgba(255,255,255,0.92); border: 1px solid var(--card-border); border-radius: 999px; padding: 0.55rem 1.1rem; cursor: pointer; transition: opacity 250ms, transform 250ms var(--ease-out); }
  .deck-hint span { display: inline-block; animation: nudge 1.6s ease-in-out infinite; color: var(--accent); }
  .deck-hint.is-gone { opacity: 0; pointer-events: none; transform: translate(-50%, 8px); }
  @keyframes nudge { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(3px); } }

  .deck-bar { display: none; }

  /* ── Blocks ── */
  .inv-draft { display: inline-block; background: #fff7e0; border: 1px solid #f0d98a; color: #7a5b00; font-size: 0.75rem; font-weight: 600; padding: 0.35rem 0.85rem; border-radius: 999px; margin-bottom: 0.5rem; }
  .inv-top { display: flex; align-items: center; justify-content: space-between; gap: 1rem; padding: 0.5rem 0 1.25rem; }
  .inv-top__brand { display: flex; align-items: center; gap: 0.875rem; }
  .inv-top__label { font-size: 0.75rem; font-weight: 700; letter-spacing: 0.14em; text-transform: uppercase; color: var(--muted); }
  .inv-print { display: inline-flex; align-items: center; height: 38px; padding: 0 1.125rem; background: transparent; color: var(--accent); border: 1px solid var(--card-border); border-radius: 999px; font-size: 0.8125rem; font-weight: 600; font-family: var(--font-body); cursor: pointer; transition: border-color 160ms var(--ease-out), transform 160ms var(--ease-out); }
  @media (hover: hover) and (pointer: fine) { .inv-print:hover { border-color: var(--accent); } }
  .inv-print:active { transform: scale(0.96); }

  .inv-hero { position: relative; overflow: hidden; background: linear-gradient(135deg, var(--ink) 0%, #322d6b 100%); border-radius: 22px; padding: 2rem 1.5rem; color: #fff; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
  .inv-hero::before { content: ''; position: absolute; inset: 0; background-image: linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px); background-size: 44px 44px; pointer-events: none; }
  .inv-hero__in { position: relative; }
  .inv-hero__row { display: flex; align-items: center; justify-content: space-between; gap: 1rem; flex-wrap: wrap; margin-bottom: 1.25rem; }
  .inv-hero__eyebrow { font-size: 0.75rem; font-weight: 700; letter-spacing: 0.14em; text-transform: uppercase; color: var(--gold); }
  .inv-hero__client { display: flex; align-items: center; gap: 0.75rem; background: #fff; border-radius: 12px; padding: 0.45rem 0.8rem; }
  .inv-hero__client span { font-size: 0.5625rem; font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase; color: var(--muted); }
  .inv-hero__client img { height: 30px; width: auto; }
  .inv-hero h1 { font-family: var(--font-display); font-weight: 800; font-size: clamp(1.875rem, 5.2vw, 3.25rem); line-height: 1.06; letter-spacing: -0.03em; margin-bottom: 1rem; text-wrap: balance; }
  .inv-hero__sub { font-size: clamp(0.9375rem, 1.8vw, 1.125rem); color: rgba(255,255,255,0.72); line-height: 1.7; font-weight: 300; max-width: 640px; margin-bottom: 2rem; }
  .inv-meta { display: grid; grid-template-columns: repeat(2, 1fr); gap: 1.25rem; padding-top: 1.5rem; border-top: 1px solid rgba(255,255,255,0.14); }
  .inv-meta__label { font-size: 0.6875rem; font-weight: 600; letter-spacing: 0.12em; text-transform: uppercase; color: rgba(255,255,255,0.5); margin-bottom: 0.375rem; }
  .inv-meta__value { font-size: 0.9375rem; font-weight: 600; }
  .inv-status { display: inline-flex; align-items: center; gap: 0.4rem; padding: 0.2rem 0.65rem; border-radius: 999px; font-size: 0.75rem; font-weight: 700; }
  .inv-status::before { content: ''; width: 6px; height: 6px; border-radius: 50%; background: currentColor; }
  .inv-status--draft { background: rgba(254,188,46,0.18); color: #ffd36b; }
  .inv-status--sent { background: rgba(77,154,255,0.18); color: #8ec0ff; }
  .inv-status--paid { background: rgba(77,255,154,0.18); color: #4dff9a; }

  .inv-tag { font-size: 0.75rem; font-weight: 700; letter-spacing: 0.14em; text-transform: uppercase; color: var(--accent); margin-bottom: 0.75rem; }
  .inv-h2 { font-family: var(--font-display); font-weight: 800; font-size: clamp(1.5rem, 3.6vw, 2.25rem); letter-spacing: -0.025em; line-height: 1.15; margin-bottom: 1rem; text-wrap: balance; max-width: 820px; }
  .inv-lead { font-size: 1rem; color: var(--muted); line-height: 1.7; font-weight: 300; max-width: 720px; margin-bottom: 1.5rem; }
  .inv-note { margin-top: 1rem; font-size: 0.8125rem; color: var(--muted); font-style: italic; }
  .inv-todo { color: #b07d00; font-style: italic; }

  .inv-plan__stats { display: grid; grid-template-columns: 1fr; gap: 0.875rem; margin-bottom: 0.875rem; }
  .inv-plan__stat { border-radius: 14px; padding: 1.25rem 1.5rem; background: linear-gradient(135deg, var(--ink) 0%, #322d6b 100%); color: #fff; -webkit-print-color-adjust: exact; print-color-adjust: exact; break-inside: avoid; }
  .inv-plan__value { white-space: nowrap; font-family: var(--font-display); font-weight: 800; font-size: clamp(1.25rem, 2.3vw, 1.5rem); letter-spacing: -0.02em; color: #fff; margin-bottom: 0.375rem; }
  .inv-plan__stat:first-child .inv-plan__value { color: var(--gold); }
  .inv-plan__label { font-size: 0.8125rem; color: rgba(255,255,255,0.7); line-height: 1.5; }
  .inv-plan__phases { display: grid; grid-template-columns: 1fr; gap: 0.875rem; }
  .inv-plan__phase { border: 1px solid var(--card-border); background: #fff; border-radius: 14px; padding: 1.125rem 1.375rem; break-inside: avoid; }
  .inv-plan__when { display: inline-block; font-size: 0.6875rem; font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase; color: var(--accent); background: var(--accent-soft); border-radius: 999px; padding: 0.25rem 0.65rem; margin-bottom: 0.625rem; }
  .inv-plan__phase h3 { font-family: var(--font-display); font-weight: 700; font-size: 1.0625rem; margin-bottom: 0.25rem; }
  .inv-plan__phase p { font-size: 0.875rem; color: var(--muted); line-height: 1.6; font-weight: 300; }

  .why__h { font-family: var(--font-display); font-weight: 800; font-size: clamp(2rem, 5.5vw, 3.5rem); letter-spacing: -0.035em; line-height: 1.05; margin-bottom: 1.5rem; }
  .why__p { font-size: clamp(1rem, 1.7vw, 1.25rem); color: var(--muted); line-height: 1.7; font-weight: 300; max-width: 760px; }
  .why__p:first-of-type { color: var(--text); font-weight: 400; }
  .why__p + .why__p { margin-top: 1rem; }
  .inv-bundle { display: flex; align-items: center; justify-content: space-between; gap: 1rem; flex-wrap: wrap; margin-top: 2rem; padding: 1.25rem 1.5rem; border-radius: 14px; background: #fff; border: 1px solid var(--card-border); box-shadow: var(--shadow-sm); max-width: 760px; }
  .inv-bundle__label { font-size: 0.6875rem; font-weight: 700; letter-spacing: 0.14em; text-transform: uppercase; color: var(--accent); margin-bottom: 0.25rem; }
  .inv-bundle__title { font-family: var(--font-display); font-weight: 700; font-size: 1.0625rem; }
  .inv-bundle__price { font-family: var(--font-display); font-weight: 800; font-size: 1.75rem; letter-spacing: -0.02em; color: var(--accent); }

  /* References tabs */
  .rt { display: grid; grid-template-columns: minmax(0, 1fr); gap: 1rem; }
  .rt__tabs { display: flex; gap: 0.5rem; overflow-x: auto; scrollbar-width: none; margin: 0 -1rem; padding: 0 1rem 0.125rem; }
  .rt__tabs::-webkit-scrollbar { display: none; }
  .rt__tab { flex-shrink: 0; display: flex; align-items: center; gap: 0.5rem; border: 1px solid var(--card-border); background: #fff; border-radius: 999px; padding: 0.55rem 0.95rem; font: inherit; font-size: 0.8125rem; font-weight: 600; color: var(--text); cursor: pointer; text-align: left; transition: background-color 200ms, border-color 200ms, color 200ms, box-shadow 200ms; }
  .rt__tab.is-on { background: var(--accent); border-color: var(--accent); color: #fff; }
  .rt__num { font-family: var(--font-display); font-weight: 800; font-size: 0.75rem; opacity: 0.6; }
  .rt__note { display: none; }
  .rt__panels { display: grid; }
  .rt__panel { grid-area: 1 / 1; display: block; text-decoration: none; opacity: 0; visibility: hidden; transform: scale(0.985); transition: opacity 350ms var(--ease-out), transform 350ms var(--ease-out), visibility 0s linear 350ms; }
  .rt__panel.is-on { opacity: 1; visibility: visible; transform: none; transition: opacity 350ms var(--ease-out), transform 350ms var(--ease-out), visibility 0s; }
  .rt__caption { font-size: 0.875rem; color: var(--muted); line-height: 1.6; margin-top: 0.875rem; }
  .rt__open { display: inline-block; margin-top: 0.5rem; font-size: 0.8125rem; font-weight: 600; color: var(--accent); text-decoration: none; }
  .inv-frame { position: relative; overflow: hidden; background: #fff; }
  .inv-frame iframe { position: absolute; top: 0; left: 0; display: block; border: 0; transform-origin: top left; pointer-events: none; }

  /* Items */
  .inv-item { border: 1px solid var(--card-border); border-radius: 16px; padding: 1.5rem; box-shadow: var(--shadow-sm); background: #fff; break-inside: avoid; }
  .inv-item__head { display: flex; align-items: flex-start; gap: 1rem; margin-bottom: 1.25rem; }
  .inv-item__num { font-family: var(--font-display); font-weight: 800; font-size: 0.875rem; color: var(--accent); background: var(--accent-soft); border-radius: 8px; padding: 0.4rem 0.65rem; flex-shrink: 0; }
  .inv-item__title { flex: 1; min-width: 0; }
  .inv-item__title h3 { font-family: var(--font-display); font-weight: 700; font-size: 1.1875rem; letter-spacing: -0.01em; margin-bottom: 0.375rem; }
  .inv-item__title p { font-size: 0.875rem; color: var(--muted); line-height: 1.65; font-weight: 300; }
  .inv-list { list-style: none; display: grid; grid-template-columns: 1fr; gap: 0.625rem 1.5rem; }
  .inv-list li { font-size: 0.875rem; color: var(--text); line-height: 1.55; display: flex; gap: 0.625rem; align-items: flex-start; }
  .inv-list li::before { content: '✓'; color: var(--accent); font-weight: 700; flex-shrink: 0; }
  .inv-chips { margin-top: 1.25rem; padding-top: 1.125rem; border-top: 1px solid var(--hairline); }
  .inv-chips__label { display: block; font-size: 0.6875rem; font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase; color: var(--muted); margin-bottom: 0.75rem; }
  .inv-chips__row { display: flex; flex-wrap: wrap; gap: 0.5rem; }
  .inv-chip { font-size: 0.8125rem; font-weight: 500; background: var(--surface); border: 1px solid var(--card-border); border-radius: 999px; padding: 0.35rem 0.8rem; }

  .xp:not(.is-open) .xp-extra { display: none; }
  .xp-btn { margin-top: 0.875rem; background: none; border: 1px solid var(--card-border); border-radius: 999px; padding: 0.45rem 0.95rem; font: inherit; font-size: 0.8125rem; font-weight: 600; color: var(--accent); cursor: pointer; transition: border-color 160ms, transform 160ms var(--ease-out); }
  .xp-btn:active { transform: scale(0.96); }

  /* Accordion */
  .acc-group { display: flex; flex-direction: column; gap: 0.75rem; }
  .acc { border: 1px solid var(--card-border); border-radius: 16px; background: #fff; transition: border-color 200ms, box-shadow 200ms; break-inside: avoid; }
  .acc.is-open { border-color: rgba(59,52,120,0.35); box-shadow: var(--shadow-sm); }
  .acc__head { width: 100%; display: flex; align-items: flex-start; gap: 1rem; padding: 1.125rem 1.25rem; background: none; border: 0; font: inherit; text-align: left; cursor: pointer; color: inherit; }
  .acc__title { flex: 1; min-width: 0; }
  .acc__title strong { display: block; font-family: var(--font-display); font-weight: 700; font-size: 1.0625rem; }
  .acc__title small { display: block; font-size: 0.8125rem; color: var(--muted); line-height: 1.55; margin-top: 0.25rem; font-weight: 300; }
  .acc__chev { position: relative; width: 30px; height: 30px; border-radius: 50%; background: var(--accent-soft); flex-shrink: 0; transition: background-color 200ms; }
  .acc__chev::before, .acc__chev::after { content: ''; position: absolute; left: 50%; top: 50%; width: 11px; height: 2px; border-radius: 1px; background: var(--accent); transform: translate(-50%, -50%); transition: transform 300ms var(--ease-out), background-color 200ms; }
  .acc__chev::after { transform: translate(-50%, -50%) rotate(90deg); }
  .acc.is-open .acc__chev { background: var(--accent); }
  .acc.is-open .acc__chev::before, .acc.is-open .acc__chev::after { background: #fff; }
  .acc.is-open .acc__chev::after { transform: translate(-50%, -50%) rotate(0deg); }
  .acc__body { display: grid; grid-template-rows: 0fr; transition: grid-template-rows 380ms var(--ease-out); }
  .acc.is-open .acc__body { grid-template-rows: 1fr; }
  .acc__inner { overflow: hidden; min-height: 0; }
  .acc__inner > .inv-list { padding: 0.25rem 1.25rem 1.25rem; }
  .acc__inner > .inv-chips { margin: 0 1.25rem 1.25rem; }

  /* Lead generation */
  .cap { display: grid; grid-template-columns: minmax(0, 1fr); gap: 1rem; }
  .cap .inv-list { grid-template-columns: 1fr; }
  .cap .inv-item__head { margin-bottom: 1rem; }
  .cap__price { display: flex; align-items: center; justify-content: space-between; gap: 1rem; flex-wrap: wrap; margin-bottom: 1rem; padding-bottom: 1rem; border-bottom: 1px solid var(--hairline); }
  .inv-recurring { border: 1.5px solid var(--accent); border-radius: 16px; padding: 1.5rem; background: linear-gradient(180deg, rgba(59,52,120,0.05) 0%, #fff 60%); break-inside: avoid; }
  .inv-recurring .inv-item__num { background: var(--accent); color: #fff; }
  .inv-recurring__from { font-size: 0.6875rem; font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase; color: var(--muted); }
  .inv-recurring__amount { font-family: var(--font-display); font-weight: 800; font-size: 1.75rem; letter-spacing: -0.02em; color: var(--accent); }
  .inv-recurring__amount small, .inv-addon__amount small { font-size: 0.875rem; font-weight: 600; color: var(--muted); letter-spacing: 0; }
  .inv-recurring__note { margin-top: 1.125rem; padding-top: 0.875rem; border-top: 1px solid var(--card-border); font-size: 0.8125rem; color: var(--muted); line-height: 1.6; }
  .inv-addon { border: 1.5px dashed rgba(59,52,120,0.3); border-radius: 16px; padding: 1.5rem; background: #fff; break-inside: avoid; transition: border-color 250ms, background-color 250ms, box-shadow 250ms; }
  .inv-addon:has(.sw.is-on) { border-style: solid; border-color: var(--gold); box-shadow: 0 10px 30px rgba(192,160,120,0.18); }
  .inv-addon__badge { display: inline-block; font-size: 0.625rem; font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase; color: var(--gold); border: 1px solid var(--gold); border-radius: 999px; padding: 0.15rem 0.55rem; margin-bottom: 0.5rem; }
  .inv-addon__amount { font-family: var(--font-display); font-weight: 800; font-size: 1.5rem; letter-spacing: -0.02em; color: var(--text); white-space: nowrap; }

  .sw { display: inline-flex; align-items: center; gap: 0.625rem; background: none; border: 0; padding: 0.25rem 0; font: inherit; font-size: 0.8125rem; font-weight: 600; color: var(--accent); cursor: pointer; }
  .sw__track { position: relative; width: 42px; height: 24px; border-radius: 999px; background: rgba(59,52,120,0.2); flex-shrink: 0; transition: background-color 200ms var(--ease-out); }
  .sw__thumb { position: absolute; top: 3px; left: 3px; width: 18px; height: 18px; border-radius: 50%; background: #fff; box-shadow: 0 1px 3px rgba(0,0,0,0.2); transition: transform 250ms var(--ease-out); }
  .sw.is-on .sw__track { background: var(--accent); }
  .sw.is-on .sw__thumb { transform: translateX(18px); }
  .sw--mini { padding: 0; margin-right: 0.625rem; }
  .sw--mini .sw__track { width: 34px; height: 20px; }
  .sw--mini .sw__thumb { width: 14px; height: 14px; }
  .sw--mini.is-on .sw__thumb { transform: translateX(14px); }

  /* Investment */
  .inv-summary { display: grid; grid-template-columns: minmax(0, 1fr); gap: 1rem; }
  .inv-card { border: 1px solid var(--card-border); border-radius: 16px; padding: 1.5rem; background: #fff; break-inside: avoid; }
  .inv-row { display: flex; justify-content: space-between; align-items: baseline; gap: 1rem; padding: 0.45rem 0; font-size: 0.9375rem; color: var(--muted); }
  .inv-row strong { color: var(--text); font-weight: 600; white-space: nowrap; }
  .inv-row--sub { padding: 0.2rem 0 0.2rem 0.75rem; font-size: 0.8125rem; }
  .inv-row--sub strong { color: var(--muted); font-weight: 500; }
  .inv-row--sep { margin-top: 0.5rem; border-top: 1px solid var(--hairline); padding-top: 0.875rem; }
  .inv-row--addon { align-items: center; }
  .inv-row--addon > span { display: flex; align-items: center; }
  .inv-row--addon:not(.is-on) strong { color: var(--muted); font-weight: 500; font-size: 0.8125rem; }
  .inv-row--total { margin-top: 0.5rem; padding-top: 1rem; border-top: 1px solid var(--card-border); color: var(--text); font-weight: 600; align-items: center; }
  .inv-row--total strong { font-family: var(--font-display); font-weight: 800; font-size: 1.75rem; color: var(--accent); letter-spacing: -0.02em; }
  .pop { display: inline-block; animation: pop 450ms var(--ease-out); }
  @keyframes pop { from { transform: scale(1.08); color: var(--gold); } to { transform: none; } }
  .inv-then { margin-top: 1rem; padding: 0.875rem 1rem; background: var(--surface); border-radius: 10px; font-size: 0.8125rem; color: var(--muted); line-height: 1.6; }
  .inv-then strong { color: var(--text); }
  .inv-pay dt { font-size: 0.6875rem; font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase; color: var(--muted); margin-top: 0.875rem; }
  .inv-pay dt:first-child { margin-top: 0; }
  .inv-pay dd { font-size: 0.9375rem; font-weight: 500; }

  /* Terms */
  .inv-terms { list-style: none; display: grid; grid-template-columns: 1fr; gap: 0.75rem 2rem; }
  .inv-terms li { font-size: 0.875rem; color: var(--muted); line-height: 1.65; padding: 1rem 1.125rem 1rem 2.25rem; position: relative; background: #fff; border: 1px solid var(--hairline); border-radius: 12px; }
  .inv-terms li::before { content: ''; position: absolute; left: 1.125rem; top: 1.6rem; width: 6px; height: 6px; border-radius: 50%; background: var(--accent); }
  .inv-terms li:first-child { color: var(--text); border-color: var(--card-border); }

  /* Accept */
  .accept { text-align: center; max-width: 760px; margin: 0 auto; }
  .accept__h { font-family: var(--font-display); font-weight: 800; font-size: clamp(2.25rem, 6vw, 3.75rem); letter-spacing: -0.035em; line-height: 1.05; margin-bottom: 1rem; }
  .accept__p { font-size: clamp(1rem, 1.7vw, 1.125rem); color: var(--muted); line-height: 1.7; font-weight: 300; max-width: 560px; margin: 0 auto; }
  .accept__card { margin: 1.75rem auto 0; background: linear-gradient(135deg, var(--ink) 0%, #322d6b 100%); color: #fff; border-radius: 22px; padding: 1.75rem 1.25rem; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
  .accept__label { font-size: 0.6875rem; font-weight: 700; letter-spacing: 0.14em; text-transform: uppercase; color: var(--gold); }
  .accept__amount strong { display: inline-block; font-family: var(--font-display); font-weight: 800; font-size: clamp(2.25rem, 6vw, 3.25rem); letter-spacing: -0.03em; margin-top: 0.25rem; }
  .accept__actions { display: flex; flex-wrap: wrap; justify-content: center; align-items: center; gap: 0.75rem; margin-top: 1.25rem; }
  .inv-accept__btn { display: inline-flex; align-items: center; gap: 0.5rem; height: 52px; padding: 0 1.75rem; border-radius: 999px; background: var(--gold); color: var(--ink); font-weight: 700; font-size: 0.9375rem; text-decoration: none; transition: transform 160ms var(--ease-out), box-shadow 200ms; }
  .inv-accept__btn:active { transform: scale(0.97); }
  @media (hover: hover) and (pointer: fine) { .inv-accept__btn:hover { transform: translateY(-2px); box-shadow: 0 10px 24px rgba(192,160,120,0.35); } }
  .accept__card .inv-print { height: 52px; color: #fff; border-color: rgba(255,255,255,0.3); }
  .inv-parties { display: grid; grid-template-columns: minmax(0, 1fr); gap: 0.75rem; margin-top: 1.5rem; text-align: left; }
  .inv-party { border: 1px solid var(--card-border); border-radius: 14px; padding: 1rem 1.25rem; background: #fff; }
  .inv-party__label { font-size: 0.6875rem; font-weight: 700; letter-spacing: 0.14em; text-transform: uppercase; color: var(--accent); margin-bottom: 0.5rem; }
  .inv-party__name { font-family: var(--font-display); font-weight: 700; font-size: 1rem; margin-bottom: 0.25rem; }
  .inv-party p { font-size: 0.8125rem; color: var(--muted); line-height: 1.6; }
  .inv-foot { margin-top: 1.5rem; display: flex; justify-content: center; gap: 0.5rem 1.5rem; flex-wrap: wrap; font-size: 0.8125rem; color: var(--muted); }
  .inv-foot a { color: var(--accent); font-weight: 600; text-decoration: none; }

  @media (min-width: 700px) {
    .inv-hero { padding: 2.75rem 2.5rem; }
    .inv-meta { grid-template-columns: repeat(4, 1fr); }
    .inv-list { grid-template-columns: 1fr 1fr; }
    .inv-plan__stats, .inv-plan__phases { grid-template-columns: repeat(3, 1fr); }
    .inv-summary { grid-template-columns: minmax(0, 1.25fr) minmax(0, 1fr); align-items: start; }
    .inv-terms { grid-template-columns: 1fr 1fr; }
    .inv-parties { grid-template-columns: 1fr 1fr; }
  }

  @media (min-width: 900px) {
    .xp--mobile .xp-extra { display: flex !important; }
    .xp--mobile .xp-btn { display: none; }
    .cap { grid-template-columns: minmax(0, 1fr) minmax(0, 1fr); align-items: start; }
    .rt { grid-template-columns: minmax(0, 0.8fr) minmax(0, 1.6fr); gap: 2rem; align-items: start; }
    .rt__tabs { flex-direction: column; overflow: visible; margin: 0; padding: 0; gap: 0.625rem; }
    .rt__tab { border-radius: 14px; padding: 1rem 1.125rem; align-items: flex-start; gap: 0.875rem; }
    .rt__tab.is-on { background: #fff; color: var(--text); border-color: var(--accent); box-shadow: 0 0 0 1px var(--accent), var(--shadow-sm); }
    .rt__tab.is-on .rt__num { color: var(--accent); opacity: 1; }
    .rt__text { display: block; }
    .rt__name { display: block; font-family: var(--font-display); font-weight: 700; font-size: 0.9375rem; }
    .rt__note { display: block; font-weight: 300; font-size: 0.8125rem; color: var(--muted); line-height: 1.55; max-height: 0; overflow: hidden; opacity: 0; transition: max-height 350ms var(--ease-out), opacity 250ms, margin-top 350ms var(--ease-out); }
    .rt__tab.is-on .rt__note { max-height: 8rem; opacity: 1; margin-top: 0.375rem; }
    .rt__caption { display: none; }
    .rt__stage { min-width: 0; }
  }

  /* ── Mobile: horizontal slides ── */
  @media (max-width: 899px) {
    .deck { display: flex; overflow-x: auto; overflow-y: hidden; scroll-snap-type: x mandatory; overscroll-behavior-x: contain; }
    .slide { flex: 0 0 100%; width: 100%; height: 100svh; min-height: 0; overflow-y: auto; overscroll-behavior-y: contain; scroll-snap-stop: always; justify-content: flex-start; padding: 1.25rem 0 calc(6.5rem + env(safe-area-inset-bottom)); scrollbar-width: none; }
    .slide::-webkit-scrollbar { display: none; }
    .slide__in { padding: 0 1rem; }
    .deck-dots, .deck-hint, .deck-progress { display: none; }
    .deck-bar { display: flex; position: fixed; left: 0.75rem; right: 0.75rem; bottom: calc(0.75rem + env(safe-area-inset-bottom)); z-index: 50; align-items: center; gap: 0.75rem; padding: 0.5rem; background: rgba(255,255,255,0.9); -webkit-backdrop-filter: blur(14px); backdrop-filter: blur(14px); border: 1px solid var(--card-border); border-radius: 18px; box-shadow: 0 10px 30px rgba(28,31,61,0.12); }
    .deck-bar__btn { flex-shrink: 0; width: 44px; height: 44px; display: grid; place-items: center; border-radius: 12px; border: 1px solid var(--card-border); background: #fff; color: var(--accent); font: inherit; font-size: 1.5rem; line-height: 1; cursor: pointer; touch-action: manipulation; transition: transform 120ms var(--ease-out), opacity 150ms; }
    .deck-bar__btn:active { transform: scale(0.94); }
    .deck-bar__btn:disabled { opacity: 0.35; }
    .deck-bar__btn--next { background: var(--accent); border-color: var(--accent); color: #fff; }
    .deck-bar__btn--next.is-wide { width: auto; padding: 0 1rem; font-size: 0.875rem; font-weight: 700; }
    .deck-bar__mid { flex: 1; min-width: 0; }
    .deck-bar__label { font-size: 0.75rem; font-weight: 600; color: var(--text); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; margin-bottom: 0.4rem; }
    .deck-bar__label span { color: var(--accent); margin-right: 0.4rem; font-variant-numeric: tabular-nums; }
    .deck-bar__segs { display: flex; gap: 3px; }
    .deck-bar__segs span { flex: 1; height: 3px; border-radius: 2px; background: rgba(59,52,120,0.15); transition: background-color 250ms; }
    .deck-bar__segs span.is-on { background: var(--accent); }
    .inv-h2 { font-size: 1.5rem; }
    .inv-lead { font-size: 0.9375rem; line-height: 1.6; margin-bottom: 1.125rem; }
    .inv-plan__stats, .inv-plan__phases { gap: 0.5rem; }
    .inv-plan__stat { display: flex; align-items: baseline; gap: 0.75rem; padding: 0.875rem 1rem; }
    .inv-plan__value { font-size: 1.125rem; margin-bottom: 0; }
    .inv-plan__label { font-size: 0.75rem; }
    .inv-plan__phase { padding: 0.875rem 1rem; }
    .inv-plan__when { margin-bottom: 0.375rem; }
    .inv-hero { padding: 1.5rem 1.25rem; }
    .inv-hero__sub { margin-bottom: 1.25rem; }
    .inv-meta { padding-top: 1rem; gap: 0.875rem; }
    .inv-item, .inv-recurring, .inv-addon, .inv-card { padding: 1.25rem; }
    .inv-top { padding-bottom: 1rem; }
  }

  @media (prefers-reduced-motion: reduce) {
    .deck.is-ready .slide .rv { transform: none; }
    .deck.is-ready .slide.is-seen .rv { transition: opacity 300ms; transition-delay: 0ms; }
    .deck-hint span, .pop { animation: none; }
    .acc__body, .rt__panel { transition: none; }
  }

  @media print {
    @page { margin: 12mm; }
    .inv-page, .deck { height: auto !important; overflow: visible !important; display: block !important; }
    .slide { display: block !important; min-height: 0 !important; height: auto !important; overflow: visible !important; padding: 1.25rem 0 !important; background: none !important; }
    .slide__in { padding: 0 !important; max-width: none; }
    .deck .rv { opacity: 1 !important; transform: none !important; }
    .deck-progress, .deck-dots, .deck-hint, .deck-bar, .xp-btn, .acc__chev, .sw, .inv-print, .inv-draft, .rt__stage, .inv-accept__btn { display: none !important; }
    .xp-extra { display: flex !important; }
    .acc__body { grid-template-rows: 1fr !important; }
    .rt__tabs { flex-direction: column; overflow: visible; }
    .rt__tab { border-radius: 10px; color: var(--text) !important; background: #fff !important; }
    .rt__note { display: block !important; max-height: none !important; opacity: 1 !important; }
    .inv-item, .inv-card, .inv-recurring, .inv-addon, .inv-bundle { box-shadow: none; }
  }
`;
