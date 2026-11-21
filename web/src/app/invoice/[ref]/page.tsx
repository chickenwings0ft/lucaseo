import type { Metadata } from "next";
import Image from "next/image";
import { Poppins } from "next/font/google";
import { notFound } from "next/navigation";
import PrintButton from "./PrintButton";
import { invoices, getInvoice, type InvoiceLine } from "@/lib/invoiceData";

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

const money = (n: number) =>
  `A$${n.toLocaleString("en-AU", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;

const longDate = (iso: string, locale: string) =>
  new Date(`${iso}T00:00:00`).toLocaleDateString(locale, { day: "numeric", month: "long", year: "numeric" });

const T = {
  es: {
    locale: "es-ES",
    invoice: "Factura",
    metaTitle: "Factura",
    draftBanner: "BORRADOR — los importes y los datos de pago están pendientes de confirmar",
    print: "Guardar como PDF",
    eyebrow: "Propuesta y factura",
    number: "N.º de factura",
    issued: "Emitida",
    due: "Vence",
    status: "Estado",
    statuses: { draft: "Borrador", sent: "Pendiente de pago", paid: "Pagada" },
    included: "Incluido",
    bundleTag: "Precio cerrado",
    from: "De",
    billedTo: "Facturar a",
    toAdd: "por añadir",
    part1: "Parte 1 · Web nueva",
    part1h: "La nueva web de Costa Casa",
    part2: "Parte 2 · Puesta en marcha",
    part2h: "Todo lo que la web necesita para empezar a funcionar",
    part3: "Parte 3 · Recurrente",
    part3h: "Tres meses captando clientes",
    fromWord: "Desde",
    monthsWord: "meses",
    mgmtTotal: "Gestión de Google Ads",
    mgmtBilling: "facturados mes a mes una vez activas las campañas.",
    adSpendNote: "Inversión recomendada en anuncios: A$300–400 al mes, pagada directamente a Google (no incluida).",
    perMonth: "/ mes",
    summary: "Resumen",
    whatsDue: "Importe a pagar",
    subtotal: "Subtotal",
    totalDue: "Total a pagar",
    thenMonthly: "Después, mensual:",
    mgmtFrom: "gestión de Google Ads desde",
    perMonthLong: "al mes, una vez activas las campañas.",
    payment: "Datos de pago",
    accountName: "Titular de la cuenta",
    accountNumber: "N.º de cuenta",
    reference: "Referencia",
    terms: "Condiciones",
    fineprint: "Letra pequeña",
    thanks: "Gracias por confiar en Lucaseo para la nueva web de Costa Casa.",
    questions: "¿Dudas?",
  },
  en: {
    locale: "en-AU",
    invoice: "Invoice",
    metaTitle: "Invoice",
    draftBanner: "DRAFT — amounts and payment details are still to be confirmed",
    print: "Save as PDF",
    eyebrow: "Proposal & invoice",
    number: "Invoice no.",
    issued: "Issued",
    due: "Due",
    status: "Status",
    statuses: { draft: "Draft", sent: "Awaiting payment", paid: "Paid" },
    included: "Included",
    bundleTag: "Fixed price",
    from: "From",
    billedTo: "Billed to",
    toAdd: "to be added",
    part1: "Part 1 · New website",
    part1h: "The new Costa Casa website",
    part2: "Part 2 · Launch set-up",
    part2h: "Everything the website needs to start working",
    part3: "Part 3 · Ongoing",
    part3h: "Three months of winning clients",
    fromWord: "From",
    monthsWord: "months",
    mgmtTotal: "Google Ads management",
    mgmtBilling: "billed monthly once the campaigns are live.",
    adSpendNote: "Recommended ad spend: A$300–400 per month, paid directly to Google (not included).",
    perMonth: "/ month",
    summary: "Summary",
    whatsDue: "What's due",
    subtotal: "Subtotal",
    totalDue: "Total due",
    thenMonthly: "Then monthly:",
    mgmtFrom: "Google Ads management from",
    perMonthLong: "per month, once the campaigns are live.",
    payment: "Payment details",
    accountName: "Account name",
    accountNumber: "Account number",
    reference: "Reference",
    terms: "Terms",
    fineprint: "The fine print",
    thanks: "Thanks for trusting Lucaseo with the new Costa Casa website.",
    questions: "Questions?",
  },
} as const;

function ItemCard({ line }: { line: InvoiceLine }) {
  return (
    <article className="inv-item">
      <div className="inv-item__head">
        <span className="inv-item__num">{line.number}</span>
        <div className="inv-item__title">
          <h3>{line.title}</h3>
          <p>{line.summary}</p>
        </div>
        {line.price !== undefined && <div className="inv-item__price">{money(line.price)}</div>}
      </div>
      <ul className="inv-list">
        {line.includes.map((inc) => (
          <li key={inc}>{inc}</li>
        ))}
      </ul>
      {line.chips && (
        <div className="inv-chips">
          <span className="inv-chips__label">{line.chips.label}</span>
          <div className="inv-chips__row">
            {line.chips.items.map((c) => (
              <span key={c} className="inv-chip">{c}</span>
            ))}
          </div>
        </div>
      )}
    </article>
  );
}

export default async function InvoicePage({ params }: Props) {
  const { ref } = await params;
  const invoice = getInvoice(ref);
  if (!invoice) notFound();

  const t = T[invoice.lang];
  const oneOff = [invoice.website, ...invoice.launch];
  const subtotal = invoice.bundle.price;
  const gst = Math.round(subtotal * invoice.gstRate * 100) / 100;
  const total = subtotal + gst;
  const monthlyGst = Math.round(invoice.recurring.fromPrice * invoice.gstRate * 100) / 100;
  const pay = invoice.payment;

  return (
    <>
      <style>{`
        .inv-page { --accent: #3b3478; --accent-hover: #2f2960; --accent-soft: rgba(59,52,120,0.08); --gold: #c0a078; --ink: #1c1f3d; --surface: #f6f5fb; --card-border: rgba(59,52,120,0.14); --hairline: rgba(59,52,120,0.09); --font-display: var(--font-poppins), system-ui, sans-serif; min-height: 100vh; background: #fff; color: var(--text); padding-bottom: 4rem; }
        .inv-wrap { max-width: 920px; margin: 0 auto; padding: 0 1.25rem; }

        .inv-draft { background: #fff7e0; border-bottom: 1px solid #f0d98a; color: #7a5b00; font-size: 0.8125rem; font-weight: 600; text-align: center; padding: 0.5rem 1rem; }

        .inv-top { display: flex; align-items: center; justify-content: space-between; gap: 1rem; padding: 1.5rem 0; }
        .inv-top__brand { display: flex; align-items: center; gap: 0.875rem; }
        .inv-top__label { font-size: 0.75rem; font-weight: 700; letter-spacing: 0.14em; text-transform: uppercase; color: var(--muted); }
        .inv-print { display: inline-flex; align-items: center; height: 38px; padding: 0 1.125rem; background: transparent; color: var(--accent); border: 1px solid var(--card-border); border-radius: 999px; font-size: 0.8125rem; font-weight: 600; font-family: var(--font-body); cursor: pointer; transition: border-color 160ms var(--ease-out), transform 160ms var(--ease-out); }
        @media (hover: hover) and (pointer: fine) { .inv-print:hover { border-color: var(--accent); } }
        .inv-print:active { transform: scale(0.96); }

        .inv-hero { position: relative; overflow: hidden; background: linear-gradient(135deg, var(--ink) 0%, #322d6b 100%); border-radius: 20px; padding: 2.25rem 1.5rem; color: #fff; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
        .inv-hero::before { content: ''; position: absolute; inset: 0; background-image: linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px); background-size: 44px 44px; pointer-events: none; }
        .inv-hero__in { position: relative; }
        .inv-hero__eyebrow { font-size: 0.75rem; font-weight: 700; letter-spacing: 0.14em; text-transform: uppercase; color: var(--gold); margin-bottom: 1rem; }
        .inv-hero h1 { font-family: var(--font-display); font-weight: 800; font-size: clamp(1.75rem, 5vw, 2.75rem); line-height: 1.1; letter-spacing: -0.03em; margin-bottom: 1rem; text-wrap: balance; }
        .inv-hero__sub { font-size: clamp(0.9375rem, 2vw, 1.0625rem); color: rgba(255,255,255,0.7); line-height: 1.7; font-weight: 300; max-width: 620px; margin-bottom: 2rem; }
        .inv-meta { display: grid; grid-template-columns: repeat(2, 1fr); gap: 1.25rem; padding-top: 1.5rem; border-top: 1px solid rgba(255,255,255,0.14); }
        .inv-meta__label { font-size: 0.6875rem; font-weight: 600; letter-spacing: 0.12em; text-transform: uppercase; color: rgba(255,255,255,0.5); margin-bottom: 0.375rem; }
        .inv-meta__value { font-size: 0.9375rem; font-weight: 600; }
        .inv-status { display: inline-flex; align-items: center; gap: 0.4rem; padding: 0.2rem 0.65rem; border-radius: 999px; font-size: 0.75rem; font-weight: 700; }
        .inv-status::before { content: ''; width: 6px; height: 6px; border-radius: 50%; background: currentColor; }
        .inv-status--draft { background: rgba(254,188,46,0.18); color: #ffd36b; }
        .inv-status--sent { background: rgba(77,154,255,0.18); color: #8ec0ff; }
        .inv-status--paid { background: rgba(77,255,154,0.18); color: #4dff9a; }

        .inv-parties { display: grid; grid-template-columns: 1fr; gap: 1.25rem; margin-top: 1.5rem; }
        .inv-party { border: 1px solid var(--card-border); border-radius: 14px; padding: 1.5rem; }
        .inv-party__label { font-size: 0.75rem; font-weight: 700; letter-spacing: 0.14em; text-transform: uppercase; color: var(--accent); margin-bottom: 0.875rem; }
        .inv-party__logo { width: auto; height: 56px; margin-bottom: 1rem; }
        .inv-party__name { font-family: var(--font-display); font-weight: 700; font-size: 1.125rem; margin-bottom: 0.5rem; }
        .inv-party p { font-size: 0.875rem; color: var(--muted); line-height: 1.7; }
        .inv-todo { color: #b07d00; font-style: italic; }

        .inv-bundle { display: flex; align-items: center; justify-content: space-between; gap: 1rem; flex-wrap: wrap; margin-top: 1.5rem; padding: 1.25rem 1.5rem; border-radius: 14px; background: var(--accent-soft); border: 1px solid var(--card-border); }
        .inv-bundle__label { font-size: 0.6875rem; font-weight: 700; letter-spacing: 0.14em; text-transform: uppercase; color: var(--accent); margin-bottom: 0.25rem; }
        .inv-bundle__title { font-family: var(--font-display); font-weight: 700; font-size: 1.0625rem; }
        .inv-bundle__price { font-family: var(--font-display); font-weight: 800; font-size: 1.75rem; letter-spacing: -0.02em; color: var(--accent); }
        .inv-section { padding: 3rem 0 0; }
        .inv-tag { font-size: 0.75rem; font-weight: 700; letter-spacing: 0.14em; text-transform: uppercase; color: var(--accent); margin-bottom: 0.75rem; }
        .inv-h2 { font-family: var(--font-display); font-weight: 800; font-size: clamp(1.375rem, 3.5vw, 1.875rem); letter-spacing: -0.02em; line-height: 1.2; margin-bottom: 1.25rem; text-wrap: balance; }

        .inv-plan { margin-top: 3rem; }
        .inv-plan__intro { font-size: 1rem; color: var(--muted); line-height: 1.75; font-weight: 300; max-width: 720px; margin-bottom: 1.75rem; }
        .inv-plan__stats { display: grid; grid-template-columns: 1fr; gap: 1rem; margin-bottom: 1.5rem; }
        .inv-plan__stat { border-radius: 14px; padding: 1.5rem; background: linear-gradient(135deg, var(--ink) 0%, #322d6b 100%); color: #fff; -webkit-print-color-adjust: exact; print-color-adjust: exact; break-inside: avoid; }
        .inv-plan__value { white-space: nowrap; font-family: var(--font-display); font-weight: 800; font-size: clamp(1.25rem, 2.3vw, 1.5rem); letter-spacing: -0.02em; color: #fff; margin-bottom: 0.375rem; }
        .inv-plan__stat:first-child .inv-plan__value { color: var(--gold); }
        .inv-plan__label { font-size: 0.8125rem; color: rgba(255,255,255,0.7); line-height: 1.5; }
        .inv-plan__phases { display: grid; grid-template-columns: 1fr; gap: 1rem; }
        .inv-plan__phase { border: 1px solid var(--card-border); border-radius: 14px; padding: 1.25rem 1.5rem; position: relative; break-inside: avoid; }
        .inv-plan__when { display: inline-block; font-size: 0.6875rem; font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase; color: var(--accent); background: var(--accent-soft); border-radius: 999px; padding: 0.25rem 0.65rem; margin-bottom: 0.75rem; }
        .inv-plan__phase h3 { font-family: var(--font-display); font-weight: 700; font-size: 1.0625rem; margin-bottom: 0.375rem; }
        .inv-plan__phase p { font-size: 0.875rem; color: var(--muted); line-height: 1.6; font-weight: 300; }
        .inv-plan__note { margin-top: 1rem; font-size: 0.8125rem; color: var(--muted); font-style: italic; }
        .inv-why { background: var(--surface); border: 1px solid var(--card-border); border-radius: 14px; padding: 1.75rem; margin-top: 3rem; }
        .inv-why h2 { font-family: var(--font-display); font-weight: 800; font-size: 1.375rem; letter-spacing: -0.02em; margin-bottom: 0.875rem; }
        .inv-why p { font-size: 0.9375rem; color: var(--muted); line-height: 1.75; font-weight: 300; max-width: 720px; }
        .inv-why p + p { margin-top: 0.875rem; }

        .inv-item { border: 1px solid var(--card-border); border-radius: 14px; padding: 1.5rem; box-shadow: var(--shadow-sm); background: #fff; break-inside: avoid; }
        .inv-item + .inv-item { margin-top: 1.25rem; }
        .inv-item__head { display: flex; align-items: flex-start; gap: 1rem; flex-wrap: wrap; margin-bottom: 1.25rem; }
        .inv-item__num { font-family: var(--font-display); font-weight: 800; font-size: 0.875rem; color: var(--accent); background: var(--accent-soft); border-radius: 8px; padding: 0.4rem 0.65rem; flex-shrink: 0; }
        .inv-item__title { flex: 1; min-width: 220px; }
        .inv-item__title h3 { font-family: var(--font-display); font-weight: 700; font-size: 1.1875rem; letter-spacing: -0.01em; margin-bottom: 0.375rem; }
        .inv-item__title p { font-size: 0.875rem; color: var(--muted); line-height: 1.65; font-weight: 300; }
        .inv-item__price { font-family: var(--font-display); font-weight: 800; font-size: 1.5rem; letter-spacing: -0.02em; color: var(--text); margin-left: auto; }
        .inv-list { list-style: none; display: grid; grid-template-columns: 1fr; gap: 0.625rem 1.5rem; }
        .inv-list li { font-size: 0.875rem; color: var(--text); line-height: 1.55; display: flex; gap: 0.625rem; align-items: flex-start; }
        .inv-list li::before { content: '✓'; color: var(--accent); font-weight: 700; flex-shrink: 0; }
        .inv-chips { margin-top: 1.5rem; padding-top: 1.25rem; border-top: 1px solid var(--hairline); }
        .inv-chips__label { display: block; font-size: 0.6875rem; font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase; color: var(--muted); margin-bottom: 0.75rem; }
        .inv-chips__row { display: flex; flex-wrap: wrap; gap: 0.5rem; }
        .inv-chip { font-size: 0.8125rem; font-weight: 500; background: var(--surface); border: 1px solid var(--card-border); border-radius: 999px; padding: 0.35rem 0.8rem; }

        .inv-recurring { border: 1.5px solid var(--accent); border-radius: 14px; padding: 1.5rem; background: linear-gradient(180deg, rgba(59,52,120,0.05) 0%, #fff 60%); break-inside: avoid; }
        .inv-recurring .inv-item__num { background: var(--accent); color: #fff; }
        .inv-recurring__price { text-align: right; margin-left: auto; }
        .inv-recurring__from { display: block; font-size: 0.6875rem; font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase; color: var(--muted); }
        .inv-recurring__amount { font-family: var(--font-display); font-weight: 800; font-size: 1.75rem; letter-spacing: -0.02em; color: var(--accent); }
        .inv-recurring__amount small { font-size: 0.875rem; font-weight: 600; color: var(--muted); letter-spacing: 0; }
        .inv-recurring__note { margin-top: 1.25rem; padding-top: 1rem; border-top: 1px solid var(--card-border); font-size: 0.8125rem; color: var(--muted); line-height: 1.6; }

        .inv-summary { display: grid; grid-template-columns: 1fr; gap: 1.25rem; }
        .inv-card { border: 1px solid var(--card-border); border-radius: 14px; padding: 1.5rem; break-inside: avoid; }
        .inv-row { display: flex; justify-content: space-between; align-items: baseline; gap: 1rem; padding: 0.5rem 0; font-size: 0.9375rem; color: var(--muted); }
        .inv-row strong { color: var(--text); font-weight: 600; }
        .inv-row--sub { padding: 0.25rem 0 0.25rem 0.75rem; font-size: 0.8125rem; }
        .inv-row--sub strong { color: var(--muted); font-weight: 500; }
        .inv-row--total { margin-top: 0.5rem; padding-top: 1rem; border-top: 1px solid var(--card-border); color: var(--text); font-weight: 600; }
        .inv-row--total strong { font-family: var(--font-display); font-weight: 800; font-size: 1.625rem; color: var(--accent); letter-spacing: -0.02em; }
        .inv-then { margin-top: 1rem; padding: 0.875rem 1rem; background: var(--surface); border-radius: 10px; font-size: 0.8125rem; color: var(--muted); line-height: 1.6; }
        .inv-then strong { color: var(--text); }
        .inv-pay dt { font-size: 0.6875rem; font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase; color: var(--muted); margin-top: 0.875rem; }
        .inv-pay dt:first-child { margin-top: 0; }
        .inv-pay dd { font-size: 0.9375rem; font-weight: 500; }

        .inv-terms { list-style: none; display: flex; flex-direction: column; gap: 0.75rem; }
        .inv-terms li { font-size: 0.875rem; color: var(--muted); line-height: 1.65; padding-left: 1.25rem; position: relative; }
        .inv-terms li::before { content: ''; position: absolute; left: 0; top: 0.65em; width: 5px; height: 5px; border-radius: 50%; background: var(--accent); }

        .inv-foot { margin-top: 3.5rem; padding-top: 1.5rem; border-top: 1px solid var(--hairline); display: flex; justify-content: space-between; gap: 1rem; flex-wrap: wrap; font-size: 0.8125rem; color: var(--muted); }
        .inv-foot a { color: var(--accent); font-weight: 600; text-decoration: none; }

        @media (min-width: 700px) {
          .inv-wrap { padding: 0 2rem; }
          .inv-hero { padding: 3rem 2.5rem; }
          .inv-meta { grid-template-columns: repeat(4, 1fr); }
          .inv-parties { grid-template-columns: 1fr 1fr; }
          .inv-list { grid-template-columns: 1fr 1fr; }
          .inv-summary { grid-template-columns: 1.1fr 1fr; align-items: start; }
          .inv-plan__stats, .inv-plan__phases { grid-template-columns: repeat(3, 1fr); }
        }

        @media print {
          @page { margin: 12mm; }
          .inv-print, .inv-draft { display: none !important; }
          .inv-item, .inv-card, .inv-recurring { box-shadow: none; }
          .inv-section { padding-top: 2rem; }
        }
      `}</style>

      <main className={`inv-page ${poppins.variable}`}>
        {invoice.status === "draft" && (
          <div className="inv-draft">{t.draftBanner}</div>
        )}

        <div className="inv-wrap">
          <header className="inv-top">
            <div className="inv-top__brand">
              <Image src="/logo.png" alt="Lucaseo" width={48} height={48} priority style={{ width: "auto", height: "42px" }} />
              <span className="inv-top__label">{t.invoice}</span>
            </div>
            <PrintButton label={t.print} />
          </header>

          <section className="inv-hero">
            <div className="inv-hero__in">
              <div className="inv-hero__eyebrow">{t.eyebrow}</div>
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
          </section>

          <section className="inv-parties">
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
              {invoice.to.logo && (
                <Image src={invoice.to.logo} alt={invoice.to.name} width={921} height={339} className="inv-party__logo" />
              )}
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
          </section>

          {invoice.plan && (
            <section className="inv-plan">
              <div className="inv-tag">{invoice.plan.tag}</div>
              <h2 className="inv-h2">{invoice.plan.heading}</h2>
              <p className="inv-plan__intro">{invoice.plan.intro}</p>
              <div className="inv-plan__stats">
                {invoice.plan.stats.map((st) => (
                  <div className="inv-plan__stat" key={st.label}>
                    <div className="inv-plan__value">{st.value}</div>
                    <div className="inv-plan__label">{st.label}</div>
                  </div>
                ))}
              </div>
              <div className="inv-plan__phases">
                {invoice.plan.phases.map((ph) => (
                  <div className="inv-plan__phase" key={ph.when}>
                    <div className="inv-plan__when">{ph.when}</div>
                    <h3>{ph.title}</h3>
                    <p>{ph.text}</p>
                  </div>
                ))}
              </div>
              <p className="inv-plan__note">{invoice.plan.note}</p>
            </section>
          )}

          <section className="inv-why">
            <h2>{invoice.why.heading}</h2>
            {invoice.why.body.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </section>

          <section className="inv-bundle">
            <div>
              <div className="inv-bundle__label">{t.bundleTag}</div>
              <div className="inv-bundle__title">{invoice.bundle.label}</div>
            </div>
            <div className="inv-bundle__price">{money(invoice.bundle.price)}</div>
          </section>

          <section className="inv-section">
            <div className="inv-tag">{t.part1}</div>
            <h2 className="inv-h2">{t.part1h}</h2>
            <ItemCard line={invoice.website} />
          </section>

          <section className="inv-section">
            <div className="inv-tag">{t.part2}</div>
            <h2 className="inv-h2">{t.part2h}</h2>
            {invoice.launch.map((line) => (
              <ItemCard key={line.number} line={line} />
            ))}
          </section>

          <section className="inv-section">
            <div className="inv-tag">{t.part3}</div>
            <h2 className="inv-h2">{t.part3h}</h2>
            <article className="inv-recurring">
              <div className="inv-item__head">
                <span className="inv-item__num">05</span>
                <div className="inv-item__title">
                  <h3>{invoice.recurring.title}</h3>
                  <p>{invoice.recurring.summary}</p>
                </div>
                <div className="inv-recurring__price">
                  <span className="inv-recurring__from">× {invoice.recurring.months} {t.monthsWord}</span>
                  <span className="inv-recurring__amount">
                    {money(invoice.recurring.fromPrice)} <small>{t.perMonth}</small>
                  </span>
                </div>
              </div>
              <ul className="inv-list">
                {invoice.recurring.includes.map((inc) => (
                  <li key={inc}>{inc}</li>
                ))}
              </ul>
              <p className="inv-recurring__note">{invoice.recurring.note}</p>
            </article>
          </section>

          <section className="inv-section">
            <div className="inv-tag">{t.summary}</div>
            <h2 className="inv-h2">{t.whatsDue}</h2>
            <div className="inv-summary">
              <div className="inv-card">
                <div className="inv-row">
                  <span>{invoice.bundle.label}</span>
                  <strong>{money(invoice.bundle.price)}</strong>
                </div>
                {oneOff.map((l) => (
                  <div className="inv-row inv-row--sub" key={l.number}>
                    <span>{l.number} · {l.title}</span>
                    <strong>{t.included}</strong>
                  </div>
                ))}
                {invoice.gstRate > 0 && (
                  <div className="inv-row" style={{ marginTop: "0.5rem", borderTop: "1px solid var(--hairline)", paddingTop: "0.875rem" }}>
                    <span>{t.subtotal}</span>
                    <strong>{money(subtotal)}</strong>
                  </div>
                )}
                {invoice.gstRate > 0 && (
                  <div className="inv-row">
                    <span>GST ({Math.round(invoice.gstRate * 100)}%)</span>
                    <strong>{money(gst)}</strong>
                  </div>
                )}
                <div className="inv-row inv-row--total">
                  <span>{t.totalDue}</span>
                  <strong>{money(total)}</strong>
                </div>
                <p className="inv-then">
                  <strong>{t.mgmtTotal}:</strong> {invoice.recurring.months} × {money(invoice.recurring.fromPrice)}
                  {invoice.gstRate > 0 && <> + {money(monthlyGst)} GST</>} = {money(invoice.recurring.fromPrice * invoice.recurring.months)}, {t.mgmtBilling}
                  <br />
                  {t.adSpendNote}
                </p>
              </div>

              <div className="inv-card">
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
          </section>

          <section className="inv-section">
            <div className="inv-tag">{t.terms}</div>
            <h2 className="inv-h2">{t.fineprint}</h2>
            <ul className="inv-terms">
              {invoice.terms.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </section>

          <footer className="inv-foot">
            <span>{t.thanks}</span>
            <span>
              {t.questions} <a href={`mailto:${invoice.from.email}`}>{invoice.from.email}</a>
            </span>
          </footer>
        </div>
      </main>
    </>
  );
}
