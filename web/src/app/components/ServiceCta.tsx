"use client";
import Link from "next/link";

interface Props {
  title?: string;
  body?: string;
}

export default function ServiceCta({ title = "¿Listo para conseguir más clientes?", body = "Cuéntanos tu situación. En menos de 24h te respondemos con un diagnóstico sin compromiso." }: Props) {
  return (
    <section style={{ background: "#004aad", padding: "6rem 2.5rem", textAlign: "center" }}>
      <div style={{ maxWidth: "700px", margin: "0 auto" }}>
        <p style={{ fontSize: "0.8125rem", fontWeight: 500, letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(255,255,255,0.6)", marginBottom: "1.25rem" }}>Empieza hoy</p>
        <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "clamp(2rem,4vw,3.25rem)", color: "#fff", letterSpacing: "-0.03em", lineHeight: 1.1, marginBottom: "1.25rem" }}>{title}</h2>
        <p style={{ fontSize: "1.125rem", color: "rgba(255,255,255,0.75)", marginBottom: "2.5rem", lineHeight: 1.7, fontWeight: 300 }}>{body}</p>
        <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/#contacto" style={{
            display: "inline-block", padding: "0.875rem 2rem", background: "#fff", color: "#004aad",
            fontWeight: 600, fontSize: "0.9375rem", textDecoration: "none", borderRadius: "6px"
          }}>Quiero más clientes</Link>
          <Link href="/" style={{
            display: "inline-block", padding: "0.875rem 2rem", background: "transparent", color: "#fff",
            fontWeight: 500, fontSize: "0.9375rem", textDecoration: "none", borderRadius: "6px",
            border: "1px solid rgba(255,255,255,0.35)"
          }}>Ver todos los servicios</Link>
        </div>
        <div style={{ marginTop: "3rem", display: "flex", gap: "2.5rem", justifyContent: "center", flexWrap: "wrap" }}>
          {["Respuesta en menos de 24h", "Primera consulta sin coste", "Sin contratos largos"].map(b => (
            <div key={b} style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "rgba(255,255,255,0.7)", fontSize: "0.875rem" }}>
              <span style={{ color: "#fff", fontWeight: 700 }}>✓</span> {b}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
