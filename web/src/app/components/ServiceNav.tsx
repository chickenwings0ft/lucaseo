"use client";
import Image from "next/image";
import Link from "next/link";

export default function ServiceNav() {
  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
      display: "grid", gridTemplateColumns: "1fr auto 1fr", alignItems: "center",
      padding: "1rem 2.5rem",
      background: "rgba(255,255,255,0.92)", backdropFilter: "blur(16px)",
      borderBottom: "1px solid rgba(0,74,173,0.14)"
    }}>
      <Link href="/" style={{ display: "flex", alignItems: "center", textDecoration: "none" }}>
        <Image src="/logo.png" alt="Lucaseo" width={52} height={52} priority style={{ width: "auto", height: "48px" }} />
      </Link>
      <ul style={{ listStyle: "none", display: "flex", gap: "2rem", alignItems: "center", justifyContent: "center", margin: 0, padding: 0 }}>
        <li><Link href="/seo" style={{ color: "#5a6480", textDecoration: "none", fontSize: "0.875rem", fontWeight: 500 }}>SEO</Link></li>
        <li><Link href="/sem" style={{ color: "#5a6480", textDecoration: "none", fontSize: "0.875rem", fontWeight: 500 }}>SEM</Link></li>
        <li><Link href="/rrss" style={{ color: "#5a6480", textDecoration: "none", fontSize: "0.875rem", fontWeight: 500 }}>RRSS</Link></li>
        <li><Link href="/web" style={{ color: "#5a6480", textDecoration: "none", fontSize: "0.875rem", fontWeight: 500 }}>Web</Link></li>
        <li><Link href="/ia" style={{ color: "#5a6480", textDecoration: "none", fontSize: "0.875rem", fontWeight: 500 }}>IA</Link></li>
      </ul>
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <Link href="/#contacto" style={{
          display: "inline-block", padding: "0.625rem 1.5rem", background: "#004aad", color: "#fff",
          fontWeight: 500, fontSize: "0.875rem", textDecoration: "none", borderRadius: "6px"
        }}>Hablemos</Link>
      </div>
    </nav>
  );
}
