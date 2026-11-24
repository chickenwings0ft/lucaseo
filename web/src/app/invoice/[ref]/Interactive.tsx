"use client";

import { createContext, useContext, useMemo, useState, type ReactNode } from "react";
import type { InvoiceLine } from "@/lib/invoiceData";
import BrowserMockup from "../../clients/BrowserMockup";
import SiteFrame from "./SiteFrame";
import { hrs, money, perDayCeil, type Dict } from "./strings";

/* ── Shared state: which optional add-ons the client has switched on ── */

interface Pricing {
  bundle: { label: string; price: number };
  bundleHours: number;
  oneOff: { number: string; title: string; hours?: number }[];
  monthly: number;
  monthlyHours: number;
  months: number;
  firstMonthNow: boolean;
  gstRate: number;
  addons: { title: string; price: number; hours: number }[];
}

/** Effective hourly rate, rounded to whole dollars. */
const rate = (price: number, hours: number) => (hours > 0 ? Math.round(price / hours) : 0);

const Ctx = createContext<{ on: boolean[]; toggle: (i: number) => void } | null>(null);

export function ProposalProvider({ count, children }: { count: number; children: ReactNode }) {
  const [on, setOn] = useState<boolean[]>(() => Array.from({ length: count }, () => false));
  const value = useMemo(() => ({ on, toggle: (i: number) => setOn((p) => p.map((v, k) => (k === i ? !v : v))) }), [on]);
  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

function useProposal() {
  const c = useContext(Ctx);
  if (!c) throw new Error("ProposalProvider missing");
  return c;
}

function useTotals(p: Pricing) {
  const { on } = useProposal();
  const addonMonthly = p.addons.reduce((sum, a, i) => sum + (on[i] ? a.price : 0), 0);
  const monthly = p.monthly + addonMonthly;
  const monthlyHours = p.monthlyHours + p.addons.reduce((sum, a, i) => sum + (on[i] ? a.hours : 0), 0);
  const firstMonth = p.firstMonthNow ? monthly : 0;
  const restMonths = p.months - (p.firstMonthNow ? 1 : 0);
  const subtotal = p.bundle.price + firstMonth;
  const gst = Math.round(subtotal * p.gstRate * 100) / 100;
  return {
    on,
    monthly,
    monthlyHours,
    firstMonth,
    restMonths,
    subtotal,
    gst,
    total: subtotal + gst,
    agreement: p.bundle.price + monthly * p.months,
  };
}

export function AddonToggle({ index, t }: { index: number; t: Dict }) {
  const { on, toggle } = useProposal();
  const v = on[index] ?? false;
  return (
    <button type="button" role="switch" aria-checked={v} className={`sw${v ? " is-on" : ""}`} onClick={() => toggle(index)}>
      <span className="sw__track" aria-hidden="true">
        <span className="sw__thumb" />
      </span>
      <span className="sw__label">{v ? t.addonOn : t.addonOff}</span>
    </button>
  );
}

/* ── Investment summary that reacts to the add-on switches ── */

export function Investment({ p, t }: { p: Pricing; t: Dict }) {
  const s = useTotals(p);
  const { toggle } = useProposal();
  return (
    <div className="inv-card inv-invest">
      <div className="inv-row">
        <span>
          {p.bundle.label} <em className="hrs">{hrs(p.bundleHours, t.locale)}</em>
        </span>
        <strong>{money(p.bundle.price)}</strong>
      </div>
      {p.oneOff.map((l) => (
        <div className="inv-row inv-row--sub" key={l.number}>
          <span>
            {l.number} · {l.title}
          </span>
          <strong>{l.hours ? hrs(l.hours, t.locale) : t.included}</strong>
        </div>
      ))}
      {p.firstMonthNow && (
        <div className="inv-row inv-row--sep">
          <span>
            {t.firstMonthRow} <em className="hrs">{hrs(p.monthlyHours, t.locale)}</em>
          </span>
          <strong>{money(p.monthly)}</strong>
        </div>
      )}
      {p.addons.map((a, i) => (
        <div className={`inv-row inv-row--addon${s.on[i] ? " is-on" : ""}`} key={a.title}>
          <span>
            <button type="button" role="switch" aria-checked={s.on[i]} className={`sw sw--mini${s.on[i] ? " is-on" : ""}`} onClick={() => toggle(i)} aria-label={a.title}>
              <span className="sw__track" aria-hidden="true">
                <span className="sw__thumb" />
              </span>
            </button>
            {a.title}
            {p.firstMonthNow && s.on[i] ? ` — ${t.addonMonth1}` : ""}
            {s.on[i] && <em className="hrs">{hrs(a.hours, t.locale)}</em>}
          </span>
          <strong>{s.on[i] ? money(a.price) : t.optional}</strong>
        </div>
      ))}
      {p.gstRate > 0 && (
        <>
          <div className="inv-row inv-row--sep">
            <span>{t.subtotal}</span>
            <strong>{money(s.subtotal)}</strong>
          </div>
          <div className="inv-row">
            <span>GST ({Math.round(p.gstRate * 100)}%)</span>
            <strong>{money(s.gst)}</strong>
          </div>
        </>
      )}
      <div className="inv-row inv-row--total">
        <span>{t.totalDue}</span>
        <strong key={s.total} className="pop">
          {money(s.total)}
        </strong>
      </div>
      <p className="inv-then">
        {p.firstMonthNow ? (
          <>
            <strong>{t.restMonths}:</strong> {money(s.monthly)} {t.perMonth}, {t.restBilling} {t.perDayLong.replace("{d}", String(perDayCeil(s.monthly)))}
            <br />
            <strong>{hrs(s.monthlyHours, t.locale)}</strong> {t.hoursPerMonth} · A${rate(s.monthly, s.monthlyHours)}
            {t.perHour}
            <br />
            <strong>{t.contractTotal}:</strong> {money(s.agreement)} ({t.contractTotalNote} {p.months} {t.monthsWord})
          </>
        ) : (
          <>
            <strong>{t.mgmtTotal}:</strong> {p.months} × {money(s.monthly)} = {money(s.monthly * p.months)}, {t.mgmtBilling}
          </>
        )}
        <br />
        {t.adSpendNote}
      </p>
    </div>
  );
}

/** Final slide: what they pay today, then what it costs month to month. */
export function AcceptSummary({ p, t }: { p: Pricing; t: Dict }) {
  const s = useTotals(p);
  const day = String(perDayCeil(s.monthly));
  return (
    <div className="asum">
      <div className="asum__col">
        <div className="accept__label">{t.todayLabel}</div>
        <div className="asum__amount">
          <strong key={s.total} className="pop">
            {money(s.total)}
          </strong>
        </div>
        <div className="asum__hint">
          {t.setupShort} {money(p.bundle.price)} + {t.month1Short} {money(s.monthly)}
        </div>
        <div className="asum__hint">
          {hrs(p.bundleHours + s.monthlyHours, t.locale)} {t.hoursOfWork} · A${rate(s.total, p.bundleHours + s.monthlyHours)}
          {t.perHour}
        </div>
      </div>
      <div className="asum__arrow" aria-hidden="true">
        →
      </div>
      <div className="asum__col">
        <div className="accept__label">{t.thenLabel}</div>
        <div className="asum__amount asum__amount--sm">
          <strong key={s.monthly} className="pop">
            {money(s.monthly)}
          </strong>
          <small>{t.perMonth}</small>
        </div>
        <div className="asum__hint">
          {t.restLabel.replace("{n}", String(s.restMonths))} · {t.perDay.replace("{d}", day)}
        </div>
        <div className="asum__hint">
          {hrs(s.monthlyHours, t.locale)} {t.hoursPerMonth} · A${rate(s.monthly, s.monthlyHours)}
          {t.perHour}
        </div>
      </div>
    </div>
  );
}

export function AcceptButton({ p, t, email, number, client, items }: { p: Pricing; t: Dict; email: string; number: string; client: string; items: string[] }) {
  const s = useTotals(p);
  const chosen = [...items, ...p.addons.filter((_, i) => s.on[i]).map((a) => a.title)];
  const body = [
    t.acceptGreeting,
    "",
    `${t.acceptBody} ${number} (${client}).`,
    `${t.acceptIncludes}: ${chosen.join(", ")}.`,
    `${t.totalDue}: ${money(s.total)}`,
    "",
    t.acceptThanks,
  ].join("\n");
  const href = `mailto:${email}?subject=${encodeURIComponent(`${t.acceptSubject} ${number}`)}&body=${encodeURIComponent(body)}`;
  return (
    <a href={href} className="inv-accept__btn">
      {t.acceptBtn} <span aria-hidden="true">→</span>
    </a>
  );
}

/* ── Lists that collapse to the first few items (on mobile, or always) ── */

export function Expandable({
  items,
  visible = 4,
  t,
  always = false,
  hours,
}: {
  items: string[];
  visible?: number;
  t: Dict;
  always?: boolean;
  /** Hours per item, shown as a small badge. */
  hours?: number[];
}) {
  const [open, setOpen] = useState(false);
  const extra = items.length - visible;
  return (
    <div className={`xp${open ? " is-open" : ""}${always ? "" : " xp--mobile"}`}>
      <ul className="inv-list">
        {items.map((it, i) => (
          <li key={it} className={i >= visible ? "xp-extra" : undefined}>
            <span className="inv-list__text">{it}</span>
            {hours?.[i] !== undefined && <em className="hrs">{hrs(hours[i], t.locale)}</em>}
          </li>
        ))}
      </ul>
      {extra > 0 && (
        <button type="button" className="xp-btn" aria-expanded={open} onClick={() => setOpen((o) => !o)}>
          {open ? t.less : `${t.more} (+${extra})`}
        </button>
      )}
    </div>
  );
}

/* ── Accordion for the launch set-up items ── */

export function Accordion({ items, t }: { items: InvoiceLine[]; t: Dict }) {
  const [open, setOpen] = useState(0);
  return (
    <div className="acc-group">
      {items.map((l, i) => (
        <article className={`acc${open === i ? " is-open" : ""}`} key={l.number}>
          <button type="button" className="acc__head" aria-expanded={open === i} onClick={() => setOpen(open === i ? -1 : i)}>
            <span className="inv-item__num">{l.number}</span>
            <span className="acc__title">
              <strong>{l.title}</strong>
              <small>{l.summary}</small>
            </span>
            {l.hours !== undefined && <em className="hrs hrs--lg">{hrs(l.hours, t.locale)}</em>}
            <span className="acc__chev" aria-hidden="true" />
          </button>
          <div className="acc__body">
            <div className="acc__inner">
              <ul className="inv-list">
                {l.includes.map((inc) => (
                  <li key={inc}>{inc}</li>
                ))}
              </ul>
              {l.chips && (
                <div className="inv-chips">
                  <span className="inv-chips__label">{l.chips.label}</span>
                  <div className="inv-chips__row">
                    {l.chips.items.map((c) => (
                      <span key={c} className="inv-chip">
                        {c}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}

/* ── Reference sites as tabs with a live preview ── */

export function RefTabs({ sites, t }: { sites: { name: string; url: string; note: string }[]; t: Dict }) {
  const [i, setI] = useState(0);
  const host = (u: string) => new URL(u).hostname.replace(/^www\./, "");
  return (
    <div className="rt">
      <div className="rt__tabs" role="tablist">
        {sites.map((s, k) => (
          <button
            key={s.url}
            type="button"
            role="tab"
            aria-selected={k === i}
            className={`rt__tab${k === i ? " is-on" : ""}`}
            onClick={() => setI(k)}
          >
            <span className="rt__num">0{k + 1}</span>
            <span className="rt__text">
              <span className="rt__name">{s.name}</span>
              <span className="rt__note">{s.note}</span>
            </span>
          </button>
        ))}
      </div>
      <div className="rt__stage">
        <div className="rt__panels">
          {sites.map((s, k) => (
            <a
              key={s.url}
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`rt__panel${k === i ? " is-on" : ""}`}
              aria-hidden={k !== i}
              tabIndex={k === i ? 0 : -1}
              aria-label={s.name}
            >
              <BrowserMockup url={host(s.url)}>
                <SiteFrame url={s.url} title={s.name} />
              </BrowserMockup>
            </a>
          ))}
        </div>
        <p className="rt__caption">{sites[i]?.note}</p>
        <a className="rt__open" href={sites[i]?.url} target="_blank" rel="noopener noreferrer">
          {t.openSite}: {sites[i] ? host(sites[i].url) : ""} ↗
        </a>
      </div>
    </div>
  );
}
