import "server-only";
import { Resend } from "resend";
import { academy } from "@/lib/content";

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

// onboarding@resend.dev works without a verified domain, but Resend only delivers
// it to the account owner. To email parents, verify the academy's domain in Resend
// and set RESEND_FROM_EMAIL (e.g. "ProGoal Academy <hello@progoalacademy.com.au>").
const from = process.env.RESEND_FROM_EMAIL ?? `${academy.name} <onboarding@resend.dev>`;
const notifyTo = process.env.TRIAL_NOTIFICATION_EMAIL;

export const emailConfigured = Boolean(resend && notifyTo);

export type TrialBooking = {
  parentName: string;
  email: string;
  phone: string;
  playerName: string;
  age: number;
  program: string;
};

export const programLabels: Record<string, string> = {
  "mini-kickers": "Mini Kickers (4–6)",
  "junior-development": "Junior Development (7–12)",
  "elite-pathway": "Elite Pathway (13–18)",
  "holiday-camps": "Holiday Camps",
  "private-coaching": "Private Coaching",
  goalkeeper: "Goalkeeper Academy",
};

function esc(s: string) {
  return s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);
}

const shell = (body: string) => `<!doctype html>
<html lang="en-AU"><body style="margin:0;padding:24px;background:#f4f3ef;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Helvetica,Arial,sans-serif;color:#0a0a0a">
<div style="max-width:520px;margin:0 auto;background:#fff;border-radius:16px;overflow:hidden;border:1px solid #e2e8e4">
<div style="background:#0a0a0a;padding:20px 32px;font-weight:800;font-size:18px;letter-spacing:-.01em;color:#f4f3ef">PRO<span style="color:#b8913a">GOAL</span> <span style="font-size:11px;letter-spacing:.3em;color:#a9b8ae">ACADEMY</span></div>
<div style="padding:32px">${body}</div>
</div></body></html>`;

const row = (label: string, value: string) =>
  `<tr><td style="padding:8px 0;color:#5b6b61;font-size:13px;width:120px;vertical-align:top">${label}</td><td style="padding:8px 0;font-size:14px">${esc(value)}</td></tr>`;

/** Sends the internal notification and the parent's confirmation. Throws if Resend rejects a send. */
export async function sendTrialEmails(b: TrialBooking): Promise<void> {
  if (!resend || !notifyTo) throw new Error("Email is not configured");

  const program = programLabels[b.program] ?? b.program;

  // 1. Notify the academy (reply goes straight to the parent)
  const internal = await resend.emails.send({
    from,
    to: notifyTo,
    replyTo: b.email,
    subject: `New free trial: ${b.playerName} (${b.age}) – ${program}`,
    html: shell(`
      <p style="margin:0 0 8px;font-size:12px;letter-spacing:.14em;text-transform:uppercase;color:#8a6a22;font-weight:700">New trial booking</p>
      <h1 style="margin:0 0 20px;font-size:22px">${esc(b.playerName)}, age ${b.age}</h1>
      <table style="width:100%;border-collapse:collapse">
        ${row("Program", program)}
        ${row("Parent", b.parentName)}
        ${row("Email", b.email)}
        ${row("Phone", b.phone)}
      </table>
      <p style="margin:24px 0 0;font-size:13px;color:#5b6b61">Reply to this email to contact the parent directly.</p>
    `),
  });
  if (internal.error) throw new Error(`Resend (internal): ${internal.error.message}`);

  // 2. Confirmation to the parent. A failure here shouldn't lose the booking,
  // since the academy already has it, so it's logged rather than thrown.
  const reply = await resend.emails.send({
    from,
    to: b.email,
    replyTo: notifyTo,
    subject: `${b.playerName}'s free trial at ${academy.name}`,
    html: shell(`
      <h1 style="margin:0 0 16px;font-size:22px">You're booked in! ⚽</h1>
      <p style="margin:0 0 16px;font-size:15px;line-height:1.6">Hi ${esc(b.parentName.split(" ")[0])},</p>
      <p style="margin:0 0 16px;font-size:15px;line-height:1.6">
        Thanks for booking a free trial for <strong>${esc(b.playerName)}</strong> in our <strong>${esc(program)}</strong> program.
        One of our coaches will be in touch within 24 hours to confirm the session time and location.
      </p>
      <div style="margin:24px 0;padding:16px 20px;background:#f4f3ef;border-left:4px solid #b8913a;border-radius:8px;font-size:14px;line-height:1.7">
        <strong>What to bring</strong><br>
        Boots or runners · Shin pads · Water bottle · Hat for sunny days
      </div>
      <p style="margin:0;font-size:15px;line-height:1.6">See you on the pitch,<br><strong>The ${academy.name} team</strong></p>
      <p style="margin:24px 0 0;font-size:13px;color:#5b6b61">Questions? Just reply to this email or call ${esc(academy.phone)}.</p>
    `),
  });
  if (reply.error) console.error("[ProGoal] Parent confirmation failed:", reply.error.message);
}
