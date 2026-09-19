import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Lucaseo — Free Marketing Audit | Gold Coast",
  description: "Get a free marketing audit from Lucaseo. Tell us your situation and we'll tell you exactly where you're losing customers online. Response within 24h.",
  alternates: { canonical: "https://lucaseo.com/en/contact" },
};

export default function ContactPage() {
  return (
    <div style={{
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: "linear-gradient(135deg, #04091a 0%, #001a5e 100%)",
      padding: "2rem",
    }}>
      <div style={{ textAlign: "center", color: "#fff", maxWidth: "480px" }}>
        <div style={{ fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "#4dffb0", marginBottom: "1rem" }}>
          Free consultation
        </div>
        <h1 style={{ fontFamily: "var(--font-display), system-ui", fontWeight: 800, fontSize: "clamp(2rem, 4vw, 3rem)", letterSpacing: "-0.04em", lineHeight: 1.1, marginBottom: "1rem" }}>
          Let&apos;s talk about your business
        </h1>
        <p style={{ fontSize: "1rem", color: "rgba(255,255,255,0.65)", lineHeight: 1.65, marginBottom: "2rem" }}>
          Tell us where you are and what you want to achieve. We&apos;ll analyse your situation and tell you exactly where you&apos;re losing customers online.
        </p>
        <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", justifyContent: "center", marginBottom: "2rem" }}>
          {["100% free", "Reply within 24h", "No long contracts"].map(item => (
            <span key={item} style={{ fontSize: "0.875rem", color: "rgba(255,255,255,0.8)", display: "flex", alignItems: "center", gap: "0.375rem" }}>
              <span style={{ color: "#4dffb0" }}>✓</span> {item}
            </span>
          ))}
        </div>
        <noscript>
          <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.875rem" }}>
            Email us at <a href="mailto:hola@lucaseo.com" style={{ color: "#4d9aff" }}>hola@lucaseo.com</a>
          </p>
        </noscript>
      </div>
    </div>
  );
}
