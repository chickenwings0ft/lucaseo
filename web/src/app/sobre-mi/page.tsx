import type { Metadata } from "next";
import ServiceNav from "../components/ServiceNav";
import ServiceCta from "../components/ServiceCta";
import ServiceHero from "../components/ServiceHero";

export const metadata: Metadata = {
  title: "Sobre Lucas — Lucaseo | Agencia Web, SEO & IA Australia",
  description: "Soy Lucas. Empecé Lucaseo porque estaba cansado de ver agencias mentir. Resultados reales, precios honestos, trato personal. Así es como trabajo.",
};

export default function SobreMiPage() {
  return (
    <>
      <ServiceNav />
      <ServiceHero
        eyebrow="Sobre Mí"
        title="Yo soy Lucas."
        highlight="Y empecé Lucaseo porque estaba cansado de ver agencias mentir."
        lead="Hace unos años trabajaba como freelancer. Un día un cliente me preguntó por qué otra agencia cobraba $5000 por lo que yo hacía en $500. Se me encendió una bombilla. Decidí hacer una agencia diferente."
        cta1Text="Hablemos"
        cta1Href="/#contacto"
        withVideo={true}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Lucas",
            "url": "https://lucaseo.com.au/sobre-mi",
            "jobTitle": "Founder & CEO at Lucaseo",
            "worksFor": {
              "@type": "Organization",
              "name": "Lucaseo"
            },
            "knowsAbout": ["Web Development", "SEO", "Google Ads", "AI Automation", "Custom Software"]
          })
        }}
      />

      <div style={{ maxWidth: "900px", margin: "0 auto", padding: "5rem 2.5rem" }}>
        <section style={{ paddingBottom: "5rem", borderBottom: "1px solid rgba(0,74,173,0.1)" }}>
          <p style={{ fontSize: "1.0625rem", color: "#5a6480", lineHeight: 1.8, fontWeight: 300, marginBottom: "1.5rem" }}>
            Crecí viendo a mi familia con pequeños negocios. Trabajaban 12 horas al día sin entender por qué su competencia vendía más. Después descubrí que era porque su competencia estaba online y ellos no.
          </p>
          <p style={{ fontSize: "1.0625rem", color: "#5a6480", lineHeight: 1.8, fontWeight: 300, marginBottom: "1.5rem" }}>
            Internet cambió el juego. Pero nadie se lo había explicado.
          </p>
          <p style={{ fontSize: "1.0625rem", color: "#5a6480", lineHeight: 1.8, fontWeight: 300 }}>
            Cuando empecé en marketing digital, vi la oportunidad. Pero también vi el problema: agencias que cobraban $200/hora por "estrategia" que en realidad era sentarse en una reunión sin escuchar.
          </p>
        </section>

        <section style={{ paddingTop: "5rem", paddingBottom: "5rem", borderBottom: "1px solid rgba(0,74,173,0.1)" }}>
          <h2 style={{ fontFamily: "var(--font-display), system-ui", fontWeight: 700, fontSize: "clamp(1.875rem, 3vw, 2.75rem)", letterSpacing: "-0.03em", lineHeight: 1.1, marginBottom: "2.5rem" }}>
            Cómo llegué aquí
          </h2>

          <div style={{ marginBottom: "3rem" }}>
            <h3 style={{ fontFamily: "var(--font-display), system-ui", fontWeight: 700, fontSize: "1.25rem", marginBottom: "1rem", color: "#0a0f1e" }}>
              El punto de quiebre
            </h3>
            <p style={{ fontSize: "1.0625rem", color: "#5a6480", lineHeight: 1.8, fontWeight: 300 }}>
              Pensé: "Esto no está bien. Tiene que haber otra forma." Así que decidí hacer una agencia diferente. Una donde no mienta con métricas. No cobre por horas que no trabajó. No desaparezca después de vender. Sea honesto.
            </p>
          </div>

          <div>
            <h3 style={{ fontFamily: "var(--font-display), system-ui", fontWeight: 700, fontSize: "1.25rem", marginBottom: "1rem", color: "#0a0f1e" }}>
              Por qué SEO + IA, no solo diseño web
            </h3>
            <p style={{ fontSize: "1.0625rem", color: "#5a6480", lineHeight: 1.8, fontWeight: 300, marginBottom: "1rem" }}>
              Al principio hacía webs. Bonitas, funcionales, pero webs. Luego descubrí algo: una web bonita que nadie encuentra es como un restaurante 5 estrellas en el medio del desierto.
            </p>
            <p style={{ fontSize: "1.0625rem", color: "#5a6480", lineHeight: 1.8, fontWeight: 300, marginBottom: "1rem" }}>
              Entonces aprendí SEO. Posicionar en Google. Traer tráfico orgánico. Eso funciona.
            </p>
            <p style={{ fontSize: "1.0625rem", color: "#5a6480", lineHeight: 1.8, fontWeight: 300 }}>
              Pero luego pasó algo: la gente empezó a buscar en ChatGPT, Claude, Perplexity. Ya no solo en Google. Así que tuve que aprender a posicionar ahí también. Y a usar IA no como reemplazo, sino como amplificador. Hacer en 2 semanas lo que antes tardaba 2 meses.
            </p>
          </div>
        </section>

        <section style={{ paddingTop: "5rem", paddingBottom: "5rem", borderBottom: "1px solid rgba(0,74,173,0.1)" }}>
          <h2 style={{ fontFamily: "var(--font-display), system-ui", fontWeight: 700, fontSize: "clamp(1.875rem, 3vw, 2.75rem)", letterSpacing: "-0.03em", lineHeight: 1.1, marginBottom: "2.5rem" }}>
            Lo que descubrí en el camino
          </h2>

          <div style={{ marginBottom: "3rem" }}>
            <h3 style={{ fontFamily: "var(--font-display), system-ui", fontWeight: 700, fontSize: "1.25rem", marginBottom: "1rem", color: "#0a0f1e" }}>
              Los clientes no necesitan una agencia corporativa
            </h3>
            <p style={{ fontSize: "1.0625rem", color: "#5a6480", lineHeight: 1.8, fontWeight: 300 }}>
              Queremos creer que a mayor tamaño, mejor trabajo. No es verdad. Una agencia de 50 personas donde te pasan entre 5 departamentos es más lenta que un tipo que sabe exactamente qué está haciendo. Mis mejores clientes me dicen lo mismo: "No quiero hablar con 'el equipo'. Quiero hablar contigo."
            </p>
          </div>

          <div style={{ marginBottom: "3rem" }}>
            <h3 style={{ fontFamily: "var(--font-display), system-ui", fontWeight: 700, fontSize: "1.25rem", marginBottom: "1rem", color: "#0a0f1e" }}>
              La mayoría de agencias cobran como si estuviésemos en 2015
            </h3>
            <p style={{ fontSize: "1.0625rem", color: "#5a6480", lineHeight: 1.8, fontWeight: 300 }}>
              Hace 15 años hacer un sitio web costaba semanas y miles de dólares. Hoy, con IA, puedo hacer una web funcional en 1-2 semanas. ¿Qué hacen otras agencias? Cobran igual de caro. ¿Qué hago yo? Bajo el precio. Tu negocio crece sin quebrarse.
            </p>
          </div>

          <div>
            <h3 style={{ fontFamily: "var(--font-display), system-ui", fontWeight: 700, fontSize: "1.25rem", marginBottom: "1rem", color: "#0a0f1e" }}>
              La IA cambió el juego. Otros no lo saben aún.
            </h3>
            <p style={{ fontSize: "1.0625rem", color: "#5a6480", lineHeight: 1.8, fontWeight: 300 }}>
              Muchas agencias ven la IA como una amenaza. Yo la veo diferente: como una herramienta para trabajar más rápido, entregar más valor y cobrar menos. Pero la mayoría aún no se ha adaptado. Siguen cobrando como si fuese 2015.
            </p>
          </div>
        </section>

        <section style={{ paddingTop: "5rem", paddingBottom: "5rem", borderBottom: "1px solid rgba(0,74,173,0.1)" }}>
          <h2 style={{ fontFamily: "var(--font-display), system-ui", fontWeight: 700, fontSize: "clamp(1.875rem, 3vw, 2.75rem)", letterSpacing: "-0.03em", lineHeight: 1.1, marginBottom: "2.5rem" }}>
            Cómo trabajo contigo
          </h2>

          <div style={{ marginBottom: "3rem" }}>
            <h3 style={{ fontFamily: "var(--font-display), system-ui", fontWeight: 700, fontSize: "1.25rem", marginBottom: "1rem", color: "#0a0f1e" }}>
              Escucha primero, venta después
            </h3>
            <p style={{ fontSize: "1.0625rem", color: "#5a6480", lineHeight: 1.8, fontWeight: 300 }}>
              No te voy a llamar con un discurso de ventas memorizado. Voy a hacer preguntas. La mayoría de agencias hace lo contrario: te presenta 5 opciones. Yo primero escucho. Después propongo lo que realmente necesitas.
            </p>
          </div>

          <div style={{ marginBottom: "3rem" }}>
            <h3 style={{ fontFamily: "var(--font-display), system-ui", fontWeight: 700, fontSize: "1.25rem", marginBottom: "1rem", color: "#0a0f1e" }}>
              Honestidad radical
            </h3>
            <p style={{ fontSize: "1.0625rem", color: "#5a6480", lineHeight: 1.8, fontWeight: 300 }}>
              Si pienso que tu idea no funcionará, te lo digo. Aunque pierda la venta. Si tu presupuesto es pequeño pero tu potencial es grande, te propongo una solución más barata. Sé que suena raro en el mundo de las agencias. Pero es cómo hago negocio.
            </p>
          </div>

          <div>
            <h3 style={{ fontFamily: "var(--font-display), system-ui", fontWeight: 700, fontSize: "1.25rem", marginBottom: "1rem", color: "#0a0f1e" }}>
              Resultados, no humo
            </h3>
            <p style={{ fontSize: "1.0625rem", color: "#5a6480", lineHeight: 1.8, fontWeight: 300 }}>
              Me importan 3 cosas: leads, conversiones y ROI. No me importan impresiones, alcance, vanity metrics. Te voy a enviar reportes donde veas exactamente qué está funcionando. Si algo no funciona, lo arreglamos. Si funciona, lo escalamos.
            </p>
          </div>
        </section>

        <section style={{ paddingTop: "5rem", paddingBottom: "5rem", borderBottom: "1px solid rgba(0,74,173,0.1)" }}>
          <h2 style={{ fontFamily: "var(--font-display), system-ui", fontWeight: 700, fontSize: "clamp(1.875rem, 3vw, 2.75rem)", letterSpacing: "-0.03em", lineHeight: 1.1, marginBottom: "2.5rem" }}>
            Qué esperar de Lucaseo
          </h2>

          <div style={{ marginBottom: "3rem" }}>
            <h3 style={{ fontFamily: "var(--font-display), system-ui", fontWeight: 700, fontSize: "1.25rem", marginBottom: "1rem", color: "#0a0f1e" }}>
              Respuesta rápida (no radio silencio)
            </h3>
            <p style={{ fontSize: "1.0625rem", color: "#5a6480", lineHeight: 1.8, fontWeight: 300 }}>
              Te escribo en 24h. Si es urgente, antes. No soy de desaparecer después de vender ni de dejar mensajes sin responder.
            </p>
          </div>

          <div style={{ marginBottom: "3rem" }}>
            <h3 style={{ fontFamily: "var(--font-display), system-ui", fontWeight: 700, fontSize: "1.25rem", marginBottom: "1rem", color: "#0a0f1e" }}>
              Trato personal (hablas conmigo, no con "el equipo")
            </h3>
            <p style={{ fontSize: "1.0625rem", color: "#5a6480", lineHeight: 1.8, fontWeight: 300 }}>
              Cuando contactas a Lucaseo, hablas conmigo. No con un "especialista" ni con un "manager de cuentas". Yo manejo todo. Yo decido la estrategia. Yo veo los números. Tú siempre hablas conmigo.
            </p>
          </div>

          <div>
            <h3 style={{ fontFamily: "var(--font-display), system-ui", fontWeight: 700, fontSize: "1.25rem", marginBottom: "1rem", color: "#0a0f1e" }}>
              Precios justos (no los máximos del mercado)
            </h3>
            <p style={{ fontSize: "1.0625rem", color: "#5a6480", lineHeight: 1.8, fontWeight: 300 }}>
              No intento verte como una cartera abierta. Cobro lo justo. Si algo no lo vale, te lo digo. Si puedo hacerlo más barato sin sacrificar calidad, lo hago.
            </p>
          </div>
        </section>

        <section style={{ paddingTop: "5rem", paddingBottom: "5rem", borderBottom: "1px solid rgba(0,74,173,0.1)" }}>
          <h2 style={{ fontFamily: "var(--font-display), system-ui", fontWeight: 700, fontSize: "clamp(1.875rem, 3vw, 2.75rem)", letterSpacing: "-0.03em", lineHeight: 1.1, marginBottom: "2.5rem" }}>
            No soy perfecto. Pero sí soy honesto.
          </h2>

          <p style={{ fontSize: "1.0625rem", color: "#5a6480", lineHeight: 1.8, fontWeight: 300, marginBottom: "2.5rem" }}>
            Soy un tipo que está empezando. No tengo 20 años de experiencia (aunque he trabajado en esto desde hace varios años). No soy una agencia de 50 personas.
          </p>

          <p style={{ fontSize: "1.0625rem", color: "#5a6480", lineHeight: 1.8, fontWeight: 300, marginBottom: "2.5rem" }}>
            Lo que sí tengo:
          </p>

          <ul style={{ listStyle: "none", paddingLeft: 0, marginBottom: "2.5rem" }}>
            <li style={{ fontSize: "1.0625rem", color: "#5a6480", lineHeight: 1.8, fontWeight: 300, marginBottom: "0.75rem" }}>✓ Resultados reales (30→147 clientes en 3 meses)</li>
            <li style={{ fontSize: "1.0625rem", color: "#5a6480", lineHeight: 1.8, fontWeight: 300, marginBottom: "0.75rem" }}>✓ Ganas de hacerlo bien</li>
            <li style={{ fontSize: "1.0625rem", color: "#5a6480", lineHeight: 1.8, fontWeight: 300, marginBottom: "0.75rem" }}>✓ Precios que tienen sentido</li>
            <li style={{ fontSize: "1.0625rem", color: "#5a6480", lineHeight: 1.8, fontWeight: 300 }}>✓ Trato honesto</li>
          </ul>

          <div style={{ background: "#f5f8ff", padding: "2.5rem", borderRadius: "8px", marginTop: "2.5rem" }}>
            <h3 style={{ fontFamily: "var(--font-display), system-ui", fontWeight: 700, fontSize: "1.25rem", marginBottom: "1.5rem", color: "#004aad" }}>
              Lo que NO hago
            </h3>
            <ul style={{ listStyle: "none", paddingLeft: 0 }}>
              <li style={{ fontSize: "0.9375rem", color: "#5a6480", lineHeight: 1.7, marginBottom: "0.75rem" }}>✗ No prometo resultados que no puedo garantizar</li>
              <li style={{ fontSize: "0.9375rem", color: "#5a6480", lineHeight: 1.7, marginBottom: "0.75rem" }}>✗ No te ato con contratos eternos</li>
              <li style={{ fontSize: "0.9375rem", color: "#5a6480", lineHeight: 1.7, marginBottom: "0.75rem" }}>✗ No subo precios porque sí</li>
              <li style={{ fontSize: "0.9375rem", color: "#5a6480", lineHeight: 1.7, marginBottom: "0.75rem" }}>✗ No desaparezco después de vender</li>
              <li style={{ fontSize: "0.9375rem", color: "#5a6480", lineHeight: 1.7, marginBottom: "0.75rem" }}>✗ No te paso entre 5 personas diferentes</li>
              <li style={{ fontSize: "0.9375rem", color: "#5a6480", lineHeight: 1.7 }}>✗ No cobro por horas que no trabajé</li>
            </ul>
          </div>
        </section>

        <section style={{ paddingTop: "5rem", paddingBottom: "5rem", borderBottom: "1px solid rgba(0,74,173,0.1)" }}>
          <h2 style={{ fontFamily: "var(--font-display), system-ui", fontWeight: 700, fontSize: "clamp(1.875rem, 3vw, 2.75rem)", letterSpacing: "-0.03em", lineHeight: 1.1, marginBottom: "2.5rem" }}>
            Por qué esto importa
          </h2>

          <p style={{ fontSize: "1.0625rem", color: "#5a6480", lineHeight: 1.8, fontWeight: 300, marginBottom: "1.5rem" }}>
            Porque tu negocio probablemente es tu vida. Pasas 12 horas pensando en ello. Gastas dinero de tu bolsillo. Tomas riesgos.
          </p>

          <p style={{ fontSize: "1.0625rem", color: "#5a6480", lineHeight: 1.8, fontWeight: 300 }}>
            Mereces alguien que entienda eso. No que te vea como un número en una hoja de cálculo.
          </p>

          <p style={{ fontSize: "1.0625rem", color: "#5a6480", lineHeight: 1.8, fontWeight: 300, marginTop: "1.5rem" }}>
            En Lucaseo, cuando tu negocio crece, yo celebro. Cuando se ataska, me molesta tanto como a ti.
          </p>

          <p style={{ fontSize: "1.0625rem", color: "#5a6480", lineHeight: 1.8, fontWeight: 300, marginTop: "1.5rem", fontStyle: "italic" }}>
            No es un servicio. Es una asociación.
          </p>
        </section>
      </div>

      <ServiceCta
        title="¿Empezamos?"
        body="No es una venta. Es una conversación. Hablemos de tu negocio, qué necesitas, y cómo puedo ayudarte."
      />
    </>
  );
}
