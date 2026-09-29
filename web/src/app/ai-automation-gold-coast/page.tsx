import type { Metadata } from "next";
import Image from "next/image";
import ServiceNav from "../components/ServiceNav";
import SiteFooter from "../components/SiteFooter";
import FreeConsultationCta from "../components/FreeConsultationCta";
import BlogArticlesSection from "../components/BlogArticlesSection";
import ServiceAreaMap from "../components/ServiceAreaMap";
import FaqSection from "../components/FaqSection";
import PrefillQuoteButton from "../components/PrefillQuoteButton";
import RoiCalculator from "./RoiCalculator";
import { breadcrumbSchema, organizationSchema } from "@/lib/schema";
import {
  PRICING_TIERS,
  INTEGRATIONS,
  SERVICES,
  INDUSTRIES,
  EXAMPLE_WORKFLOWS,
  METHODOLOGY,
  FAQS,
} from "./config";

const PAGE_URL = "https://lucaseo.com/ai-automation-gold-coast";

export const metadata: Metadata = {
  title: "AI Automation Gold Coast — Lucaseo | Leads, Follow-Up & Admin on Autopilot",
  description:
    "AI automation for Gold Coast businesses, built around the tools you already use: HubSpot, Xero, Google Workspace and more. AI receptionists, lead response, quote follow-up and back office automation. Free automation audit.",
  alternates: { canonical: PAGE_URL },
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "AI Automation",
  name: "AI Automation Gold Coast",
  provider: {
    "@type": "Organization",
    name: "Lucaseo",
    url: "https://lucaseo.com",
  },
  areaServed: {
    "@type": "Place",
    name: "Gold Coast, Queensland, Australia",
  },
  description:
    "AI automation for Gold Coast businesses — lead response, quote follow-up, AI receptionists and voice agents, inbox automation, booking automation and back office automation, integrated with the tools businesses already use.",
  url: PAGE_URL,
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Lucaseo",
  url: "https://lucaseo.com",
  image: organizationSchema.logo.url,
  areaServed: {
    "@type": "Place",
    name: "Gold Coast, Queensland, Australia",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Gold Coast",
    addressRegion: "QLD",
    addressCountry: "AU",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: -28.0023,
    longitude: 153.4145,
  },
};

const breadcrumbJsonLd = breadcrumbSchema([
  { name: "Home", url: "https://lucaseo.com" },
  { name: "AI Automation Gold Coast", url: PAGE_URL },
]);

const SECTORS = [
  "Trades", "Construction", "Real Estate", "Property", "Tourism",
  "Hospitality", "Health", "Beauty", "Professional Services", "Technology",
];

const CONTROL_LEVELS = [
  { name: "AUTO", desc: "Routine, low-risk tasks run automatically — confirmations, reminders, simple replies." },
  { name: "REVIEW", desc: "AI drafts the response or action, and a team member glances over it before it goes out." },
  { name: "APPROVE", desc: "Anything involving money, contracts or sensitive commitments waits for explicit sign-off." },
  { name: "HUMAN ONLY", desc: "Complaints, disputes and anything genuinely uncertain go straight to a person — no automation involved." },
];

const AUTOMATION_BENEFITS = [
  { icon: "🎯", name: "Leads", desc: "Every enquiry gets a response in seconds, not hours — so fewer of them go cold." },
  { icon: "🔁", name: "Follow-up", desc: "Quotes and conversations get chased automatically, on schedule, without anyone forgetting." },
  { icon: "🗂️", name: "Admin", desc: "Data entry, invoices and inbox sorting happen in the background instead of eating your afternoon." },
  { icon: "📅", name: "Bookings", desc: "Appointments, reminders and reschedules run themselves, end to end." },
];

const PROBLEM_TIMELINE = [
  { time: "8:14am", event: "Missed call", detail: "A potential customer calls before you open. No one answers." },
  { time: "9:02am", event: "New enquiry", detail: "A website form comes in. It sits in an inbox behind twenty other emails." },
  { time: "11:30am", event: "CRM copy/paste", detail: "Someone manually copies the enquiry details into the CRM, if they get to it." },
  { time: "1:45pm", event: "Quote follow-up", detail: "A quote from last week still hasn't been chased. It's quietly going cold." },
  { time: "3:10pm", event: "Appointment change", detail: "A customer wants to reschedule. Someone has to call, update the calendar, confirm." },
  { time: "4:50pm", event: "Review request", detail: "A great job finished today. Nobody has time to ask for the Google review." },
];

export default function AiAutomationGoldCoastPage() {
  return (
    <>
      <ServiceNav locale="en" />
      <style>{`
        /* ══════════════════════════════════════════════
           Shared design tokens & primitives — matches /seo
           ══════════════════════════════════════════════ */
        .aig-page, .aig-hero, .aig-bar {
          --ink: #04091a;
          --accent-hover: #0057cc;
          --accent-light: #4d9aff;
          --success: #4dff9a;
          --surface: #f5f8ff;
          --card-border: rgba(0,74,173,0.12);
          --card-border-hover: rgba(0,74,173,0.32);
          --hairline: rgba(0,74,173,0.08);
        }

        .seo-tag { font-size: 0.75rem; font-weight: 700; letter-spacing: 0.14em; text-transform: uppercase; color: var(--accent); margin-bottom: 1rem; }
        .seo-h2 { font-family: var(--font-display); font-weight: 800; font-size: clamp(1.625rem, 5vw, 2.75rem); letter-spacing: -0.03em; line-height: 1.14; margin-bottom: 1.125rem; text-wrap: balance; color: var(--text); }
        .seo-lead { font-size: clamp(0.9375rem, 2vw, 1.0625rem); color: var(--muted); max-width: 620px; line-height: 1.75; font-weight: 300; margin-bottom: 2rem; }
        .seo-tile { background: var(--surface); border: 1px solid var(--card-border); border-radius: 12px; transition: transform 0.22s ease, border-color 0.22s ease, box-shadow 0.22s ease; }
        .seo-tile:hover { transform: translateY(-3px); border-color: var(--card-border-hover); box-shadow: 0 12px 28px rgba(0,74,173,0.1); }

        .aig-page { max-width: 1100px; margin: 0 auto; padding: 0 1.25rem; }
        .aig-section { padding: 3.5rem 0; border-bottom: 1px solid var(--hairline); }
        .aig-section:last-child { border-bottom: none; }
        @media (min-width: 900px) {
          .aig-page { padding: 0 2.5rem; }
          .aig-section { padding: 5.5rem 0; }
        }

        /* ── Hero ── */
        .aig-hero { position: relative; background: var(--ink); overflow: hidden; padding: 6.5rem 1.25rem 4rem; }
        .aig-hero__bg { position: absolute; inset: 0; background: radial-gradient(ellipse 80% 60% at 60% 40%, rgba(0,74,173,0.2) 0%, transparent 70%); pointer-events: none; }
        .aig-hero__grid { position: absolute; inset: 0; background-image: linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px); background-size: 44px 44px; pointer-events: none; }
        .aig-hero__inner { position: relative; z-index: 2; max-width: 1200px; margin: 0 auto; width: 100%; display: flex; flex-direction: column; gap: 3rem; align-items: center; text-align: center; }
        .aig-hero__copy { width: 100%; }
        .aig-hero__badge { display: inline-flex; align-items: center; gap: 0.5rem; font-size: 0.75rem; font-weight: 600; letter-spacing: 0.12em; text-transform: uppercase; color: var(--accent-light); background: rgba(77,154,255,0.1); border: 1px solid rgba(77,154,255,0.25); padding: 0.375rem 0.875rem; border-radius: 999px; margin-bottom: 1.5rem; }
        .aig-hero__badge::before { content: ''; width: 6px; height: 6px; border-radius: 50%; background: var(--success); box-shadow: 0 0 8px var(--success); flex-shrink: 0; }
        .aig-hero h1 { font-family: var(--font-display); font-weight: 800; font-size: clamp(2rem, 6vw, 3.5rem); line-height: 1.1; letter-spacing: -0.03em; color: #fff; margin: 0 auto 1.25rem; text-wrap: balance; max-width: 780px; }
        .aig-hero__lead { font-size: clamp(1rem, 2.2vw, 1.125rem); color: rgba(255,255,255,0.65); line-height: 1.7; font-weight: 300; max-width: 560px; margin: 0 auto 2rem; }
        .aig-hero__actions { display: flex; gap: 0.875rem; flex-wrap: wrap; justify-content: center; margin-bottom: 2.5rem; }
        .aig-hero__visual-wrap { width: 100%; }
        @media (min-width: 1024px) {
          .aig-hero__inner { flex-direction: row; gap: 3.5rem; text-align: left; align-items: center; }
          .aig-hero__copy { flex: 1; }
          .aig-hero h1, .aig-hero__lead { margin-left: 0; margin-right: 0; }
          .aig-hero__actions, .aig-hero__trust, .aig-hero__badge { justify-content: flex-start; }
          .aig-hero__visual-wrap { flex: 0 0 48%; max-width: 560px; }
        }
        .aig-hero__btn { display: inline-flex; align-items: center; justify-content: center; padding: 0.9375rem 1.75rem; background: var(--accent); color: #fff; font-weight: 600; font-size: 0.9375rem; text-decoration: none; border-radius: 8px; border: none; cursor: pointer; transition: background 0.2s; }
        .aig-hero__btn:hover { background: var(--accent-hover); }
        .aig-hero__btn--ghost { background: transparent; border: 1px solid rgba(255,255,255,0.3); color: #fff; }
        .aig-hero__btn--ghost:hover { border-color: #fff; background: rgba(255,255,255,0.08); }
        .aig-hero__trust { display: flex; gap: 1.5rem; justify-content: center; flex-wrap: wrap; margin-bottom: 3rem; }
        .aig-hero__trust span { font-size: 0.8125rem; color: rgba(255,255,255,0.55); display: flex; align-items: center; gap: 0.4rem; }
        .aig-hero__trust span::before { content: '✓'; color: var(--success); font-weight: 700; }

        /* ── Hero visual ── */
        .aig-hero__visual { width: 100%; max-width: 880px; height: auto; margin: 0 auto; filter: drop-shadow(0 30px 60px rgba(0,0,0,0.45)); }

        /* ── Trust bar ── */
        .aig-bar { background: #fff; border-bottom: 1px solid var(--hairline); padding: 1.125rem 1.25rem; }
        .aig-bar__inner { max-width: 1100px; margin: 0 auto; display: flex; align-items: center; justify-content: flex-start; gap: 1.25rem; flex-wrap: wrap; }
        .aig-bar__item { display: flex; align-items: center; gap: 0.625rem; font-size: 0.8125rem; color: var(--muted); }
        .aig-bar__dot { width: 7px; height: 7px; border-radius: 50%; background: var(--accent-light); flex-shrink: 0; }
        @media (min-width: 900px) {
          .aig-bar { padding: 1.25rem 2.5rem; }
          .aig-bar__inner { justify-content: center; gap: 3rem; }
          .aig-bar__item { font-size: 0.875rem; }
        }

        /* ── Problem timeline ── */
        .aig-timeline { display: flex; flex-direction: column; gap: 0; margin-top: 2rem; border-left: 2px solid var(--card-border); padding-left: 1.5rem; }
        .aig-timeline__item { position: relative; padding-bottom: 1.75rem; }
        .aig-timeline__item:last-child { padding-bottom: 0; }
        .aig-timeline__item::before { content: ''; position: absolute; left: -1.94rem; top: 0.3rem; width: 10px; height: 10px; border-radius: 50%; background: var(--accent); border: 2px solid #fff; box-shadow: 0 0 0 1px var(--card-border); }
        .aig-timeline__time { font-size: 0.75rem; font-weight: 700; color: var(--accent); letter-spacing: 0.04em; margin-bottom: 0.25rem; }
        .aig-timeline__event { font-family: var(--font-display); font-weight: 700; font-size: 1rem; margin-bottom: 0.25rem; color: var(--text); }
        .aig-timeline__detail { font-size: 0.875rem; color: var(--muted); line-height: 1.6; max-width: 480px; }

        /* ── Benefit cards ── */
        .aig-benefits { display: grid; grid-template-columns: repeat(4, 1fr); gap: 1.25rem; margin-top: 2rem; }
        .aig-benefit { padding: 1.75rem 1.5rem; }
        .aig-benefit__icon { font-size: 1.5rem; margin-bottom: 1rem; }
        .aig-benefit__name { font-family: var(--font-display); font-weight: 700; font-size: 1.0625rem; margin-bottom: 0.5rem; color: var(--text); }
        .aig-benefit__desc { font-size: 0.875rem; color: var(--muted); line-height: 1.6; }
        @media (max-width: 860px) { .aig-benefits { grid-template-columns: 1fr 1fr; } }
        @media (max-width: 480px) { .aig-benefits { grid-template-columns: 1fr; } }

        /* ── Services (detailed) ── */
        .aig-services { display: flex; flex-direction: column; gap: 1.25rem; margin-top: 2rem; }
        .aig-service { padding: 1.75rem; }
        .aig-service__name { font-family: var(--font-display); font-weight: 700; font-size: 1.25rem; margin-bottom: 1rem; color: var(--text); }
        .aig-service__grid { display: grid; grid-template-columns: 1fr; gap: 1.25rem; }
        .aig-service__label { font-size: 0.6875rem; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; color: var(--accent); margin-bottom: 0.375rem; }
        .aig-service__text { font-size: 0.875rem; color: var(--muted); line-height: 1.6; }
        .aig-service__example { font-size: 0.8125rem; color: var(--text); line-height: 1.6; background: #fff; border: 1px solid var(--card-border); border-radius: 8px; padding: 0.75rem 1rem; font-family: ui-monospace, "SF Mono", Menlo, monospace; }
        @media (min-width: 800px) { .aig-service__grid { grid-template-columns: 1fr 1fr; } }

        /* ── Integrations ── */
        .aig-integrations { display: flex; flex-wrap: wrap; gap: 0.75rem; margin-top: 2rem; }
        .aig-integration { background: var(--surface); border: 1px solid var(--card-border); padding: 0.625rem 1.25rem; border-radius: 999px; font-size: 0.875rem; font-weight: 500; color: var(--text); }

        /* ── Sector chips ── */
        .aig-sectors { display: flex; flex-wrap: wrap; gap: 0.625rem; margin-top: 1.5rem; }
        .aig-sector { background: var(--surface); border: 1px solid var(--card-border); padding: 0.45rem 0.875rem; border-radius: 999px; font-size: 0.8125rem; font-weight: 500; color: var(--text); }

        /* ── Industries ── */
        .aig-industries { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.25rem; margin-top: 2rem; }
        .aig-industry { padding: 1.5rem; }
        .aig-industry__name { font-family: var(--font-display); font-weight: 700; font-size: 1rem; margin-bottom: 0.75rem; color: var(--text); }
        .aig-industry__workflow { font-size: 0.8125rem; color: var(--muted); line-height: 1.6; font-family: ui-monospace, "SF Mono", Menlo, monospace; }
        @media (max-width: 860px) { .aig-industries { grid-template-columns: 1fr 1fr; } }
        @media (max-width: 560px) { .aig-industries { grid-template-columns: 1fr; } }

        /* ── ROI calculator ── */
        .roi-card { background: var(--surface); border: 1px solid var(--card-border); border-radius: 16px; padding: 2rem; display: grid; grid-template-columns: 1fr; gap: 2rem; margin-top: 2rem; }
        .roi-inputs { display: grid; grid-template-columns: 1fr 1fr; gap: 1.25rem; }
        .roi-field { display: flex; flex-direction: column; gap: 0.5rem; font-size: 0.8125rem; font-weight: 600; color: var(--text); }
        .roi-field__value { font-family: var(--font-display); font-size: 1.125rem; color: var(--accent); }
        .roi-result { background: #fff; border: 1px solid var(--card-border); border-radius: 12px; padding: 1.5rem; }
        .roi-result__row { display: flex; justify-content: space-between; align-items: center; font-size: 0.875rem; color: var(--muted); padding: 0.5rem 0; }
        .roi-result__row strong { color: var(--text); font-weight: 600; }
        .roi-result__total { display: flex; justify-content: space-between; align-items: center; margin-top: 0.75rem; padding-top: 1rem; border-top: 1px solid var(--card-border); font-size: 1rem; color: var(--text); font-weight: 600; }
        .roi-result__total strong { font-family: var(--font-display); font-size: 1.5rem; color: var(--accent); }
        .roi-disclaimer { font-size: 0.75rem; color: var(--muted); margin-top: 1rem; line-height: 1.5; }
        @media (min-width: 800px) { .roi-card { grid-template-columns: 1fr 1fr; } }
        @media (max-width: 480px) { .roi-inputs { grid-template-columns: 1fr; } }

        /* ── Example workflows (before/after) ── */
        .aig-examples { display: grid; grid-template-columns: 1fr; gap: 1.25rem; margin-top: 2rem; }
        .aig-example { padding: 1.625rem; border-top: 3px solid var(--accent); }
        .aig-example__tag { display: inline-block; font-size: 0.7rem; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; color: var(--accent); background: rgba(0,74,173,0.1); padding: 0.25rem 0.625rem; border-radius: 4px; margin-bottom: 1rem; }
        .aig-example__title { font-family: var(--font-display); font-weight: 700; font-size: 1rem; margin-bottom: 1rem; color: var(--text); line-height: 1.3; }
        .aig-example__row { display: flex; gap: 0.5rem; margin-bottom: 0.5rem; font-size: 0.875rem; color: var(--muted); line-height: 1.55; }
        .aig-example__row strong { color: var(--text); flex-shrink: 0; }
        @media (min-width: 900px) { .aig-examples { grid-template-columns: repeat(3, 1fr); } }

        /* ── Methodology ── */
        .aig-meth-grid { display: grid; grid-template-columns: 1fr; gap: 2rem; margin-top: 2rem; }
        .aig-meth-step { display: flex; gap: 1rem; align-items: flex-start; }
        .aig-meth-num { font-family: var(--font-display); font-weight: 800; font-size: 1.125rem; color: var(--accent-light); flex-shrink: 0; width: 40px; }
        .aig-meth-name { font-weight: 700; font-size: 0.9375rem; color: var(--text); margin-bottom: 0.25rem; }
        .aig-meth-desc { font-size: 0.8375rem; color: var(--muted); line-height: 1.6; }
        @media (min-width: 700px) { .aig-meth-grid { grid-template-columns: repeat(2, 1fr); column-gap: 2rem; row-gap: 2rem; } }

        /* ── Human control ladder ── */
        .aig-control { display: grid; grid-template-columns: 1fr; gap: 1rem; margin-top: 2rem; }
        .aig-control__level { display: flex; gap: 1.25rem; align-items: flex-start; padding: 1.25rem 1.5rem; border-radius: 10px; border: 1px solid var(--card-border); }
        .aig-control__tag { font-family: var(--font-display); font-weight: 800; font-size: 0.75rem; letter-spacing: 0.08em; flex-shrink: 0; width: 110px; padding: 0.375rem 0; }
        .aig-control__level:nth-child(1) { background: rgba(77,255,154,0.06); }
        .aig-control__level:nth-child(1) .aig-control__tag { color: #1a9d5c; }
        .aig-control__level:nth-child(2) { background: rgba(0,74,173,0.05); }
        .aig-control__level:nth-child(2) .aig-control__tag { color: var(--accent); }
        .aig-control__level:nth-child(3) { background: rgba(245,179,1,0.08); }
        .aig-control__level:nth-child(3) .aig-control__tag { color: #a3760a; }
        .aig-control__level:nth-child(4) { background: rgba(192,57,43,0.06); }
        .aig-control__level:nth-child(4) .aig-control__tag { color: var(--error); }
        .aig-control__desc { font-size: 0.875rem; color: var(--muted); line-height: 1.6; }
        @media (min-width: 700px) { .aig-control { grid-template-columns: repeat(2, 1fr); } }

        /* ── Pricing ── */
        .aig-pricing { display: grid; grid-template-columns: 1fr; gap: 1.25rem; margin-top: 2rem; }
        .aig-price-card { padding: 2rem 1.75rem; position: relative; display: flex; flex-direction: column; }
        .aig-price-card--highlight { border-color: var(--accent); box-shadow: 0 0 0 2px var(--accent) inset; }
        .aig-price-card__badge { position: absolute; top: -12px; left: 1.75rem; background: var(--accent); color: #fff; font-size: 0.6875rem; font-weight: 700; letter-spacing: 0.06em; text-transform: uppercase; padding: 0.3rem 0.75rem; border-radius: 999px; }
        .aig-price-card__name { font-family: var(--font-display); font-weight: 700; font-size: 1.125rem; margin-bottom: 0.5rem; color: var(--text); }
        .aig-price-card__amount { font-family: var(--font-display); font-weight: 800; font-size: 2rem; color: var(--text); letter-spacing: -0.02em; }
        .aig-price-card__note { font-size: 0.75rem; color: var(--muted); margin-bottom: 1rem; }
        .aig-price-card__desc { font-size: 0.875rem; color: var(--muted); line-height: 1.6; margin-bottom: 1.5rem; }
        .aig-price-card__includes { list-style: none; padding: 0; margin: 0 0 1.75rem; display: flex; flex-direction: column; gap: 0.625rem; flex-grow: 1; }
        .aig-price-card__includes li { font-size: 0.8375rem; color: var(--text); display: flex; align-items: flex-start; gap: 0.5rem; line-height: 1.5; }
        .aig-price-card__includes li::before { content: '✓'; color: var(--accent); font-weight: 700; flex-shrink: 0; }
        .aig-price-card__cta { display: inline-flex; align-items: center; justify-content: center; padding: 0.8125rem 1.5rem; background: var(--accent); color: #fff; font-weight: 600; font-size: 0.875rem; border-radius: 8px; border: none; cursor: pointer; transition: background 0.2s; text-align: center; }
        .aig-price-card__cta:hover { background: var(--accent-hover); }
        @media (min-width: 900px) { .aig-pricing { grid-template-columns: repeat(3, 1fr); } }

        /* ── Audit deliverables ── */
        .aig-audit { border-radius: 16px; background: linear-gradient(135deg, var(--ink) 0%, #0a1940 100%); padding: 2.5rem 1.75rem; margin-top: 2rem; }
        .aig-audit__list { list-style: none; padding: 0; margin: 0 0 2rem; display: grid; grid-template-columns: 1fr; gap: 1rem; }
        .aig-audit__list li { display: flex; gap: 0.75rem; align-items: flex-start; font-size: 0.9375rem; color: rgba(255,255,255,0.85); line-height: 1.6; }
        .aig-audit__list li::before { content: '✓'; color: var(--success); font-weight: 700; flex-shrink: 0; }
        .aig-audit__btn { display: inline-flex; align-items: center; justify-content: center; padding: 0.9375rem 2rem; background: #fff; color: var(--ink); font-weight: 700; font-size: 0.9375rem; border-radius: 8px; border: none; cursor: pointer; transition: transform 0.15s, box-shadow 0.15s; box-shadow: 0 4px 16px rgba(0,0,0,0.2); }
        .aig-audit__btn:hover { transform: translateY(-2px); box-shadow: 0 6px 24px rgba(0,0,0,0.3); }
        @media (min-width: 700px) { .aig-audit__list { grid-template-columns: repeat(2, 1fr); } }
        @media (min-width: 900px) { .aig-audit { padding: 3rem; } }

        /* ── Final CTA ── */
        .aig-final { background: var(--accent); padding: clamp(3rem, 8vw, 6rem) clamp(1.25rem, 5vw, 2.5rem); text-align: center; }
        .aig-final__in { max-width: 640px; margin: 0 auto; }
        .aig-final__title { font-family: var(--font-display); font-weight: 800; font-size: clamp(1.75rem,4vw,2.75rem); color: #fff; letter-spacing: -0.03em; line-height: 1.15; margin-bottom: 1.25rem; text-wrap: balance; }
        .aig-final__body { font-size: 1.0625rem; color: rgba(255,255,255,0.85); margin-bottom: 2.25rem; line-height: 1.7; font-weight: 300; }
        .aig-final__btn { display: inline-flex; align-items: center; justify-content: center; padding: 0.9375rem 2rem; background: #fff; color: var(--accent); font-weight: 700; font-size: 0.9375rem; border-radius: 8px; border: none; cursor: pointer; transition: transform 0.15s, box-shadow 0.15s; }
        .aig-final__btn:hover { transform: translateY(-2px); box-shadow: 0 6px 24px rgba(0,0,0,0.25); }

        @media (max-width: 640px) {
          .aig-page { padding: 0 1.25rem; }
        }
      `}</style>

      {/* ── 1. Hero ── */}
      <section className="aig-hero">
        <div className="aig-hero__bg" />
        <div className="aig-hero__grid" />
        <div className="aig-hero__inner">
          <div className="aig-hero__copy">
            <div className="aig-hero__badge">AI · Automation · Gold Coast</div>
            <h1>Stop doing work AI can do for you.</h1>
            <p className="aig-hero__lead">
              AI automation for Gold Coast businesses — built around the tools you already use.
            </p>
            <div className="aig-hero__actions">
              <PrefillQuoteButton message="I'd like a free AI automation audit." className="aig-hero__btn">
                Get your free automation audit →
              </PrefillQuoteButton>
              <a href="#services" className="aig-hero__btn aig-hero__btn--ghost">See what we can automate</a>
            </div>
            <div className="aig-hero__trust">
              <span>Gold Coast · Australia</span>
              <span>Free first consultation</span>
              <span>No long contracts</span>
            </div>
          </div>
          <div className="aig-hero__visual-wrap">
            <Image
              src="/ai-automation-gold-coast-hero.png"
              alt="AI automation workflow for Gold Coast businesses showing website enquiries, AI receptionist, CRM, quotes, calendar bookings and invoice processing"
              width={1774}
              height={887}
              className="aig-hero__visual"
              priority
            />
          </div>
        </div>
      </section>

      {/* ── Trust bar ── */}
      <div className="aig-bar">
        <div className="aig-bar__inner">
          <div className="aig-bar__item"><span className="aig-bar__dot" />Built around your existing tools</div>
          <div className="aig-bar__item"><span className="aig-bar__dot" />Human approval on anything sensitive</div>
          <div className="aig-bar__item"><span className="aig-bar__dot" />Gold Coast specialists</div>
          <div className="aig-bar__item"><span className="aig-bar__dot" />No long contracts</div>
        </div>
      </div>

      <div className="aig-page">

        {/* ── 2. Problem ── */}
        <section className="aig-section">
          <div className="seo-tag">A normal day</div>
          <h2 className="seo-h2">Your business is busy. Your team shouldn&apos;t be busy doing this.</h2>
          <p className="seo-lead">This is what a typical day looks like without automation — and every one of these moments is costing you either time or a customer.</p>
          <div className="aig-timeline">
            {PROBLEM_TIMELINE.map((item) => (
              <div className="aig-timeline__item" key={item.time}>
                <div className="aig-timeline__time">{item.time}</div>
                <div className="aig-timeline__event">{item.event}</div>
                <div className="aig-timeline__detail">{item.detail}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ── 3. Automation benefits ── */}
        <section className="aig-section">
          <div className="seo-tag">What changes</div>
          <h2 className="seo-h2">Four things automation fixes first</h2>
          <p className="seo-lead">These are the areas that eat the most time — and give back the most once they&apos;re automated.</p>
          <div className="aig-benefits">
            {AUTOMATION_BENEFITS.map((b) => (
              <div className="seo-tile aig-benefit" key={b.name}>
                <div className="aig-benefit__icon" aria-hidden="true">{b.icon}</div>
                <div className="aig-benefit__name">{b.name}</div>
                <div className="aig-benefit__desc">{b.desc}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ── 4. Services ── */}
        <section className="aig-section" id="services">
          <div className="seo-tag">Services</div>
          <h2 className="seo-h2">What we actually build</h2>
          <p className="seo-lead">Six workflows we build most often for Gold Coast businesses — each one connected to the tools you already run your business on.</p>
          <div className="aig-services">
            {SERVICES.map((s) => (
              <div className="seo-tile aig-service" key={s.name}>
                <div className="aig-service__name">{s.name}</div>
                <div className="aig-service__grid">
                  <div>
                    <div className="aig-service__label">The problem</div>
                    <p className="aig-service__text">{s.problem}</p>
                  </div>
                  <div>
                    <div className="aig-service__label">What happens instead</div>
                    <p className="aig-service__text">{s.whatHappens}</p>
                  </div>
                  <div>
                    <div className="aig-service__label">Example workflow</div>
                    <p className="aig-service__example">{s.example}</p>
                  </div>
                  <div>
                    <div className="aig-service__label">Who benefits</div>
                    <p className="aig-service__text">{s.whoBenefits}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── 5. Integrations ── */}
        <section className="aig-section">
          <div className="seo-tag">Integrations</div>
          <h2 className="seo-h2">You don&apos;t need to replace your software.</h2>
          <p className="seo-lead">We build automation on top of the tools you already run your business on.</p>
          <div className="aig-integrations">
            {INTEGRATIONS.map((tool) => (
              <div className="aig-integration" key={tool}>{tool}</div>
            ))}
          </div>
        </section>

        {/* ── 6. Gold Coast context ── */}
        <section className="aig-section">
          <div className="seo-tag">Gold Coast context</div>
          <h2 className="seo-h2">Gold Coast businesses don&apos;t run on 9–5. Your automation shouldn&apos;t either.</h2>
          <p className="seo-lead">
            Tourists arrive on weekends. Tradies get calls before sunrise. Clinics and salons run back-to-back bookings all day. Automation doesn&apos;t clock off — it keeps responding to enquiries, bookings and follow-ups whenever they come in, across every sector we work with locally.
          </p>
          <div className="aig-sectors">
            {SECTORS.map((s) => (
              <span className="aig-sector" key={s}>{s}</span>
            ))}
          </div>
        </section>

        {/* ── 7. Industries ── */}
        <section className="aig-section">
          <div className="seo-tag">Industries</div>
          <h2 className="seo-h2">Built around how your industry actually works</h2>
          <p className="seo-lead">Concrete examples of the kind of workflow we&apos;d build for each.</p>
          <div className="aig-industries">
            {INDUSTRIES.map((ind) => (
              <div className="seo-tile aig-industry" key={ind.name}>
                <div className="aig-industry__name">{ind.name}</div>
                <div className="aig-industry__workflow">{ind.workflow}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ── 8. ROI calculator ── */}
        <section className="aig-section" id="roi-calculator">
          <div className="seo-tag">Estimate your cost</div>
          <h2 className="seo-h2">What is manual work actually costing you?</h2>
          <p className="seo-lead">A rough estimate based on your numbers — not a promise, just a sense of scale.</p>
          <RoiCalculator />
        </section>

        {/* ── 9. Before / After ── */}
        <section className="aig-section">
          <div className="seo-tag">What this looks like in practice</div>
          <h2 className="seo-h2">Example workflows, not case studies</h2>
          <p className="seo-lead">These are illustrative examples of how automation would apply to a Gold Coast business — not real client results.</p>
          <div className="aig-examples">
            {EXAMPLE_WORKFLOWS.map((ex) => (
              <div className="seo-tile aig-example" key={ex.tag}>
                <div className="aig-example__tag">{ex.tag}</div>
                <div className="aig-example__title">{ex.title}</div>
                <div className="aig-example__row"><strong>Before:</strong><span>{ex.before}</span></div>
                <div className="aig-example__row"><strong>After:</strong><span>{ex.after}</span></div>
              </div>
            ))}
          </div>
        </section>

        {/* ── 10. Methodology ── */}
        <section className="aig-section" id="methodology">
          <div className="seo-tag">Our methodology</div>
          <h2 className="seo-h2">How we get you from idea to a working system</h2>
          <p className="seo-lead">A clear process, start to finish. No vague promises, no disappearing after launch.</p>
          <div className="aig-meth-grid">
            {METHODOLOGY.map((m) => (
              <div className="aig-meth-step" key={m.number}>
                <div className="aig-meth-num">{m.number}</div>
                <div>
                  <div className="aig-meth-name">{m.name}</div>
                  <div className="aig-meth-desc">{m.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── 11. Human control / safety ── */}
        <section className="aig-section">
          <div className="seo-tag">Human control</div>
          <h2 className="seo-h2">Automation doesn&apos;t mean handing your business to a robot.</h2>
          <p className="seo-lead">Every workflow is built with a clear line for what runs automatically, what gets checked, and what a human handles entirely. Sensitive or uncertain situations are always escalated.</p>
          <div className="aig-control">
            {CONTROL_LEVELS.map((c) => (
              <div className="aig-control__level" key={c.name}>
                <div className="aig-control__tag">{c.name}</div>
                <div className="aig-control__desc">{c.desc}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ── 12. Pricing ── */}
        <section className="aig-section" id="pricing">
          <div className="seo-tag">Pricing</div>
          <h2 className="seo-h2">Straightforward, productized pricing</h2>
          <p className="seo-lead">These are proposed Lucaseo offers — not fixed packages. Every quote is confirmed after we understand your exact workflow.</p>
          <div className="aig-pricing">
            {PRICING_TIERS.map((tier) => (
              <div className={`seo-tile aig-price-card${tier.highlight ? " aig-price-card--highlight" : ""}`} key={tier.name}>
                {tier.highlight && <span className="aig-price-card__badge">Most popular</span>}
                <div className="aig-price-card__name">{tier.name}</div>
                <div className="aig-price-card__amount">{tier.price}</div>
                <div className="aig-price-card__note">{tier.priceNote}</div>
                <p className="aig-price-card__desc">{tier.description}</p>
                <ul className="aig-price-card__includes">
                  {tier.includes.map((inc) => <li key={inc}>{inc}</li>)}
                </ul>
                <PrefillQuoteButton message={`I'm interested in the ${tier.name} AI automation package.`} className="aig-price-card__cta">
                  {tier.cta} →
                </PrefillQuoteButton>
              </div>
            ))}
          </div>
        </section>

        {/* ── 13. Free AI Automation Audit ── */}
        <section className="aig-section">
          <div className="seo-tag">Free AI automation audit</div>
          <h2 className="seo-h2">Not sure where to start? We&apos;ll map it out for free.</h2>
          <p className="seo-lead">One conversation, and you&apos;ll walk away knowing exactly what to automate first — no obligation to build anything with us.</p>
          <div className="aig-audit">
            <ul className="aig-audit__list">
              <li>A map of your current workflow, as it actually runs today</li>
              <li>The top 3 automation opportunities for your business</li>
              <li>An estimate of the time or money each one could save</li>
              <li>A recommended first build to start with</li>
            </ul>
            <PrefillQuoteButton message="I'd like a free AI automation audit." className="aig-audit__btn">
              Get your free automation audit →
            </PrefillQuoteButton>
          </div>
        </section>

      </div>

      {/* ── 14. FAQ ── */}
      <FaqSection topic="AI automation on the Gold Coast" faqs={FAQS} title="Frequently asked questions about AI automation" />

      {/* ── 15. Local area ── */}
      <ServiceAreaMap
        eyebrow="Service Area · AI Automation"
        title={<>Wherever you are on the <em>Gold Coast</em>, we&apos;ve got your automation covered.</>}
      />

      <FreeConsultationCta />

      <BlogArticlesSection category="ai" title="AI Automation Articles" />

      {/* ── 16. Final CTA ── */}
      <section className="aig-final">
        <div className="aig-final__in">
          <h2 className="aig-final__title">What would you automate first?</h2>
          <p className="aig-final__body">Give us one task your team repeats every week. We&apos;ll show you how it could work automatically.</p>
          <PrefillQuoteButton message="Here's one task my team repeats every week:" className="aig-final__btn">
            Tell us what takes too much time →
          </PrefillQuoteButton>
        </div>
      </section>

      <SiteFooter locale="en" />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
    </>
  );
}
