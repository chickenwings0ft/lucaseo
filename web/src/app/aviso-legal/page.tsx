import type { Metadata } from "next";
import ServiceNav from "../components/ServiceNav";
import SiteFooter from "../components/SiteFooter";

export const metadata: Metadata = {
  title: "Aviso Legal | Lucaseo",
  description: "Aviso legal e información sobre las condiciones de uso del sitio web lucaseo.com.",
  robots: { index: true, follow: true },
};

export default function AvisoLegal() {
  return (
    <>
      <ServiceNav />
      <style>{`
        .legal { max-width: 720px; margin: 0 auto; padding: 9rem 2rem 5rem; }
        .legal h1 { font-family: var(--font-display); font-weight: 800; font-size: clamp(2rem, 4vw, 3rem); letter-spacing: -0.03em; margin-bottom: 0.5rem; }
        .legal .updated { font-size: 0.875rem; color: #5a6480; margin-bottom: 3rem; }
        .legal h2 { font-family: var(--font-display); font-weight: 700; font-size: 1.25rem; margin-top: 2.5rem; margin-bottom: 0.75rem; }
        .legal p, .legal li { font-size: 0.9375rem; color: #3d4661; line-height: 1.8; }
        .legal p + p { margin-top: 1rem; }
        .legal ul { padding-left: 1.25rem; margin: 1rem 0; }
        .legal li { margin-bottom: 0.5rem; }
        .legal a { color: #004aad; text-decoration: none; }
        .legal a:hover { text-decoration: underline; }
      `}</style>

      <div className="legal">
        <h1>Aviso Legal</h1>
        <p className="updated">Última actualización: septiembre 2026</p>

        <h2>1. Datos identificativos</h2>
        <p>En cumplimiento del deber de información recogido en el artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y del Comercio Electrónico (LSSI-CE), se informa al usuario de lo siguiente:</p>
        <ul>
          <li><strong>Denominación:</strong> Lucaseo</li>
          <li><strong>Actividad:</strong> Agencia de marketing digital — SEO, SEM, redes sociales, desarrollo web e inteligencia artificial</li>
          <li><strong>Sitio web:</strong> lucaseo.com</li>
          <li><strong>Correo electrónico:</strong> hola@lucaseo.com</li>
        </ul>

        <h2>2. Objeto</h2>
        <p>El presente aviso legal regula el uso y las condiciones de acceso al sitio web lucaseo.com, propiedad de Lucaseo. El acceso a este sitio web implica la aceptación expresa de todas las condiciones establecidas en este aviso legal. Si no estás de acuerdo con alguna de estas condiciones, te rogamos que no utilices este sitio web.</p>

        <h2>3. Condiciones de uso</h2>
        <p>El usuario se compromete a hacer un uso adecuado de los contenidos y servicios ofrecidos a través de esta web y a no utilizarlos para:</p>
        <ul>
          <li>Realizar actividades contrarias a la ley, la moral o el orden público.</li>
          <li>Difundir contenidos de carácter racista, xenófobo, pornográfico, ilegal o atentatorio contra los derechos humanos.</li>
          <li>Provocar daños en los sistemas físicos y lógicos del sitio web o de terceros.</li>
          <li>Intentar acceder y, en su caso, utilizar las cuentas de correo electrónico de otros usuarios.</li>
        </ul>

        <h2>4. Propiedad intelectual e industrial</h2>
        <p>Todos los contenidos del sitio web (textos, fotografías, gráficos, imágenes, tecnología, software, diseños, logotipos, etc.) son propiedad intelectual de Lucaseo o de sus legítimos propietarios, quedando protegidos por las leyes de propiedad intelectual e industrial vigentes.</p>
        <p>Queda expresamente prohibida la reproducción, distribución, comunicación pública y transformación de cualquier contenido de este sitio web sin la autorización expresa de Lucaseo.</p>

        <h2>5. Exclusión de responsabilidad</h2>
        <p>Lucaseo no se hace responsable de:</p>
        <ul>
          <li>Los daños y perjuicios de cualquier naturaleza que pudieran derivarse del acceso o uso indebido del sitio web.</li>
          <li>Los contenidos de las páginas web de terceros a las que se pueda redirigir desde enlaces de esta web.</li>
          <li>Las interrupciones o fallos en el funcionamiento del sitio web causados por causas ajenas a su control.</li>
          <li>La presencia de virus o componentes dañinos en los contenidos transmitidos por terceros a través del sitio web.</li>
        </ul>

        <h2>6. Enlaces externos</h2>
        <p>Este sitio web puede contener enlaces a páginas de terceros. Lucaseo no asume ninguna responsabilidad sobre el contenido, la política de privacidad o las prácticas de sitios web de terceros. Te recomendamos leer los términos y condiciones y la política de privacidad de cualquier sitio web de terceros que visites.</p>

        <h2>7. Legislación aplicable y jurisdicción</h2>
        <p>Las presentes condiciones se rigen e interpretan conforme a la legislación española. Para cualquier controversia que pudiera derivarse del acceso o uso de este sitio web, las partes se someten a la jurisdicción de los juzgados y tribunales del domicilio del usuario, de conformidad con la normativa aplicable.</p>

        <h2>8. Modificaciones</h2>
        <p>Lucaseo se reserva el derecho de modificar el presente aviso legal en cualquier momento, siendo efectivas dichas modificaciones desde su publicación en el sitio web. El uso continuado del sitio web tras la publicación de cambios constituye la aceptación de los mismos.</p>
      </div>

      <SiteFooter />
    </>
  );
}
