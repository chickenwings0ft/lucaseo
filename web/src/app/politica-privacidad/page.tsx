import type { Metadata } from "next";
import ServiceNav from "../components/ServiceNav";
import SiteFooter from "../components/SiteFooter";

export const metadata: Metadata = {
  title: "Política de Privacidad | Lucaseo",
  description: "Política de privacidad de Lucaseo. Cómo recopilamos, usamos y protegemos tu información personal conforme al RGPD.",
  robots: { index: true, follow: true },
};

export default function PoliticaPrivacidad() {
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
        <h1>Política de Privacidad</h1>
        <p className="updated">Última actualización: septiembre 2026</p>

        <p>En Lucaseo, nos tomamos muy en serio la protección de tus datos personales. Esta Política de Privacidad explica cómo recopilamos, utilizamos, almacenamos y protegemos tu información cuando interactúas con nuestro sitio web lucaseo.com y nuestros servicios.</p>

        <h2>1. Responsable del tratamiento</h2>
        <p>El responsable del tratamiento de tus datos personales es Lucaseo, con domicilio a efectos de comunicaciones en España. Puedes contactarnos en cualquier momento a través del formulario de contacto de nuestra web o enviando un correo electrónico a hola@lucaseo.com.</p>

        <h2>2. Datos que recopilamos</h2>
        <p>Recopilamos los siguientes tipos de datos personales:</p>
        <ul>
          <li><strong>Datos de contacto:</strong> nombre, email, teléfono y empresa, proporcionados voluntariamente a través de nuestro formulario de contacto.</li>
          <li><strong>Datos de navegación:</strong> dirección IP, tipo de navegador, páginas visitadas y tiempo de permanencia, recopilados de forma automática mediante cookies analíticas.</li>
          <li><strong>Preferencias de comunicación:</strong> tu preferencia sobre cómo deseas ser contactado (email o teléfono).</li>
        </ul>

        <h2>3. Finalidad del tratamiento</h2>
        <p>Utilizamos tus datos para las siguientes finalidades:</p>
        <ul>
          <li>Responder a tu solicitud de información o presupuesto.</li>
          <li>Enviarte comunicaciones comerciales si has dado tu consentimiento.</li>
          <li>Analizar el uso de nuestra web para mejorar la experiencia del usuario.</li>
          <li>Cumplir con obligaciones legales aplicables.</li>
        </ul>

        <h2>4. Base legal del tratamiento</h2>
        <p>El tratamiento de tus datos se basa en:</p>
        <ul>
          <li><strong>Consentimiento:</strong> al enviar el formulario de contacto, aceptas que procesemos tus datos para responderte.</li>
          <li><strong>Interés legítimo:</strong> para mejorar nuestros servicios y la experiencia de usuario en nuestra web.</li>
          <li><strong>Cumplimiento legal:</strong> cuando la ley nos obliga a conservar ciertos datos.</li>
        </ul>

        <h2>5. Destinatarios de los datos</h2>
        <p>Tus datos pueden ser compartidos con los siguientes proveedores de servicios, exclusivamente para las finalidades descritas:</p>
        <ul>
          <li><strong>Sanity.io:</strong> plataforma CMS donde almacenamos los datos del formulario de contacto.</li>
          <li><strong>Resend:</strong> servicio de email transaccional para enviar confirmaciones y notificaciones.</li>
          <li><strong>Vercel:</strong> proveedor de hosting de nuestra web.</li>
          <li><strong>Google Analytics:</strong> análisis del tráfico web (datos anonimizados).</li>
        </ul>
        <p>No vendemos, alquilamos ni compartimos tus datos personales con terceros con fines comerciales.</p>

        <h2>6. Conservación de datos</h2>
        <p>Conservamos tus datos personales durante el tiempo necesario para cumplir con la finalidad para la que fueron recogidos:</p>
        <ul>
          <li><strong>Datos de formulario de contacto:</strong> se conservan durante un máximo de 2 años desde la última interacción.</li>
          <li><strong>Datos de navegación:</strong> se conservan durante un máximo de 26 meses.</li>
        </ul>

        <h2>7. Tus derechos</h2>
        <p>De conformidad con el RGPD, tienes derecho a:</p>
        <ul>
          <li><strong>Acceso:</strong> solicitar una copia de los datos personales que tenemos sobre ti.</li>
          <li><strong>Rectificación:</strong> solicitar la corrección de datos inexactos o incompletos.</li>
          <li><strong>Supresión:</strong> solicitar la eliminación de tus datos personales.</li>
          <li><strong>Limitación:</strong> solicitar que limitemos el tratamiento de tus datos.</li>
          <li><strong>Portabilidad:</strong> recibir tus datos en un formato estructurado y legible por máquina.</li>
          <li><strong>Oposición:</strong> oponerte al tratamiento de tus datos en determinadas circunstancias.</li>
        </ul>
        <p>Para ejercer cualquiera de estos derechos, envíanos un correo a hola@lucaseo.com con el asunto &ldquo;Derechos RGPD&rdquo;. Responderemos en un plazo máximo de 30 días.</p>

        <h2>8. Cookies</h2>
        <p>Nuestra web utiliza cookies propias y de terceros para mejorar la experiencia de navegación y analizar el tráfico. Puedes gestionar tus preferencias de cookies en cualquier momento a través de la configuración de tu navegador.</p>

        <h2>9. Seguridad</h2>
        <p>Implementamos medidas técnicas y organizativas adecuadas para proteger tus datos personales contra el acceso no autorizado, la alteración, la divulgación o la destrucción. Todas las comunicaciones con nuestra web están cifradas mediante SSL/TLS.</p>

        <h2>10. Modificaciones</h2>
        <p>Nos reservamos el derecho de actualizar esta Política de Privacidad en cualquier momento. Cualquier cambio será publicado en esta misma página con la fecha de última actualización.</p>

        <h2>11. Contacto</h2>
        <p>Si tienes alguna pregunta sobre esta Política de Privacidad o sobre el tratamiento de tus datos personales, puedes contactarnos en hola@lucaseo.com.</p>

        <p>También puedes presentar una reclamación ante la Agencia Española de Protección de Datos (AEPD) si consideras que el tratamiento de tus datos no se ajusta a la normativa vigente: <a href="https://www.aepd.es" target="_blank" rel="noopener noreferrer">www.aepd.es</a>.</p>
      </div>

      <SiteFooter />
    </>
  );
}
