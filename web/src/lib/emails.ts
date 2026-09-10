import { Resend } from "resend";

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

// onboarding@resend.dev funciona sin verificar dominio, pero Resend solo lo
// entrega a la cuenta propietaria. Para escribir a clientes hace falta
// verificar lucaseo.com y poner RESEND_FROM_EMAIL.
const from = process.env.RESEND_FROM_EMAIL ?? "Lucaseo <onboarding@resend.dev>";
const notifyTo = process.env.LEAD_NOTIFICATION_EMAIL;

export type Lead = {
  name?: string;
  company?: string;
  email: string;
  phone?: string;
  preference?: string;
  goal?: string;
  message?: string;
};

// El logo se referencia por URL absoluta: los clientes de correo no pueden
// resolver rutas relativas. alt lo cubre cuando el cliente bloquea imágenes.
const shell = (body: string) => `<!doctype html>
<html lang="es"><body style="margin:0;padding:24px;background:#f5f7fb;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Helvetica,Arial,sans-serif;color:#0a0f1e">
<div style="max-width:520px;margin:0 auto;background:#fff;border:1px solid #e4e9f2;border-radius:10px;padding:32px">
<img src="https://lucaseo.com/logo.png" alt="Lucaseo" width="44" height="44" style="display:block;border:0;width:44px;height:44px;margin-bottom:24px">
${body}
</div></body></html>`;

const row = (label: string, value?: string) =>
  value
    ? `<tr><td style="padding:8px 0;color:#5a6480;font-size:13px;width:110px;vertical-align:top">${label}</td><td style="padding:8px 0;font-size:14px">${esc(value)}</td></tr>`
    : "";

function esc(s: string) {
  return s.replace(/[&<>"']/g, (c) =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!
  );
}

export async function sendLeadEmails(lead: Lead): Promise<boolean> {
  if (!resend) return false;

  const who = lead.name || lead.email;

  // 1. Aviso interno
  if (notifyTo) {
    await resend.emails.send({
      from,
      to: notifyTo,
      replyTo: lead.email,
      subject: `Nuevo lead: ${who}${lead.company ? ` (${lead.company})` : ""}`,
      html: shell(`
        <p style="margin:0 0 20px;font-size:12px;letter-spacing:.12em;text-transform:uppercase;color:#004aad;font-weight:600">Nuevo lead</p>
        <h1 style="margin:0 0 20px;font-size:20px">${esc(who)}</h1>
        ${
          lead.preference
            ? `<div style="margin:0 0 20px;padding:12px 16px;background:#eef3fc;border-left:3px solid #004aad;border-radius:4px">
                 <span style="font-size:13px;color:#5a6480">Prefiere que le contactes por </span>
                 <strong style="font-size:14px;color:#004aad">${esc(lead.preference)}</strong>
                 ${lead.preference.toLowerCase().startsWith("tel") && lead.phone ? `<div style="margin-top:6px;font-size:15px;font-weight:600">${esc(lead.phone)}</div>` : ""}
               </div>`
            : ""
        }
        <table style="width:100%;border-collapse:collapse">
          ${row("Nombre", lead.name)}
          ${row("Empresa", lead.company)}
          ${row("Email", lead.email)}
          ${row("Teléfono", lead.phone)}
          ${row("Objetivo", lead.goal)}
        </table>
        ${lead.message ? `<div style="margin-top:20px;padding-top:20px;border-top:1px solid #e4e9f2"><p style="margin:0 0 6px;color:#5a6480;font-size:13px">Mensaje</p><p style="margin:0;font-size:14px;line-height:1.6;white-space:pre-wrap">${esc(lead.message)}</p></div>` : ""}
        <p style="margin:24px 0 0;font-size:13px;color:#5a6480">Responde a este email para contestarle directamente.</p>
      `),
    });
  }

  // 2. Respuesta automática al cliente
  await resend.emails.send({
    from,
    subject: "Hemos recibido tu mensaje — Lucaseo",
    to: lead.email,
    html: shell(`
      <p style="margin:0 0 20px;font-size:12px;letter-spacing:.12em;text-transform:uppercase;color:#004aad;font-weight:600">Mensaje recibido</p>
      <h1 style="margin:0 0 16px;font-size:22px;line-height:1.25">Gracias${lead.name ? `, ${esc(lead.name)}` : ""}.</h1>
      <p style="margin:0 0 16px;font-size:15px;line-height:1.65;color:#3d4661">
        Hemos recibido tu mensaje y ya estamos revisando tu caso. Te responderemos <strong>en menos de 24 horas</strong> con un primer diagnóstico: qué vemos en tu situación actual, dónde está la oportunidad y qué haríamos primero.
      </p>
      <p style="margin:0 0 24px;font-size:15px;line-height:1.65;color:#3d4661">
        Mientras tanto, si quieres añadir algo, simplemente responde a este email.
      </p>
      <a href="https://lucaseo.com" style="display:inline-block;background:#004aad;color:#fff;text-decoration:none;font-size:14px;font-weight:600;padding:12px 24px;border-radius:6px">Ver la web</a>
      <p style="margin:28px 0 0;padding-top:20px;border-top:1px solid #e4e9f2;font-size:13px;color:#5a6480">
        Lucaseo — SEO, SEM y presencia digital<br>
        <a href="https://lucaseo.com" style="color:#004aad;text-decoration:none">lucaseo.com</a>
      </p>
    `),
  });

  return true;
}
