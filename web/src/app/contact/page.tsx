import type { Metadata } from "next";
import { Suspense } from "react";
import ServiceNav from "../components/ServiceNav";
import SiteFooter from "../components/SiteFooter";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact Lucaseo — Free Marketing Audit | Gold Coast",
  description: "Get a free marketing audit from Lucaseo. Tell us your situation and we'll tell you exactly where you're losing customers online. Response within 24h.",
  alternates: { canonical: "https://lucaseo.com/contact" },
};

export default function ContactPage() {
  return (
    <>
      <ServiceNav locale="en" />
      <style>{`
        .contact-hero {
          min-height: 100vh; display: flex; align-items: center; justify-content: center;
          background: linear-gradient(135deg, #04091a 0%, #001a5e 100%);
          padding: 8rem 1.5rem 4rem;
        }
        .contact-hero__in {
          display: flex; flex-direction: column; align-items: center; gap: 2.5rem;
          max-width: 1000px; width: 100%;
        }
        .contact-hero__copy { text-align: center; color: #fff; max-width: 480px; }
        .contact-hero__tag {
          font-size: 0.75rem; font-weight: 700; letter-spacing: 0.14em; text-transform: uppercase;
          color: #4dffb0; margin-bottom: 1rem;
        }
        .contact-hero__copy h1 {
          font-family: var(--font-display), system-ui; font-weight: 800;
          font-size: clamp(2rem, 4vw, 3rem); letter-spacing: -0.04em; line-height: 1.1; margin-bottom: 1rem;
        }
        .contact-hero__copy p { font-size: 1rem; color: rgba(255,255,255,0.65); line-height: 1.65; margin-bottom: 2rem; }
        .contact-hero__checks { display: flex; gap: 1rem; flex-wrap: wrap; justify-content: center; }
        .contact-hero__checks span { font-size: 0.875rem; color: rgba(255,255,255,0.8); display: flex; align-items: center; gap: 0.375rem; }
        .contact-hero__checks span b { color: #4dffb0; font-weight: 700; }
      `}</style>

      <section className="contact-hero">
        <div className="contact-hero__in">
          <div className="contact-hero__copy">
            <div className="contact-hero__tag">Free consultation</div>
            <h1>Let&apos;s talk about your business</h1>
            <p>Tell us where you are and what you want to achieve. We&apos;ll analyse your situation and tell you exactly where you&apos;re losing customers online.</p>
            <div className="contact-hero__checks">
              {["100% free", "Reply within 24h", "No long contracts"].map((item) => (
                <span key={item}><b>✓</b> {item}</span>
              ))}
            </div>
          </div>

          <Suspense fallback={null}>
            <ContactForm />
          </Suspense>

          <noscript>
            <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.875rem" }}>
              Email us at <a href="mailto:hola@lucaseo.com" style={{ color: "#4d9aff" }}>hola@lucaseo.com</a>
            </p>
          </noscript>
        </div>
      </section>

      <SiteFooter locale="en" />
    </>
  );
}
