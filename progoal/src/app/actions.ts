"use server";

import { academy } from "@/lib/content";
import { emailConfigured, programLabels, sendTrialEmails } from "@/lib/emails";

export type TrialState =
  | { status: "idle" }
  | { status: "error"; message: string; fields?: Record<string, string> }
  | { status: "success"; playerName: string };

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function bookTrial(_prev: TrialState, formData: FormData): Promise<TrialState> {
  const get = (k: string) => String(formData.get(k) ?? "").trim();

  const data = {
    parentName: get("parentName"),
    email: get("email"),
    phone: get("phone"),
    playerName: get("playerName"),
    age: Number(get("age")),
    program: get("program"),
  };

  const fields: Record<string, string> = {};
  if (data.parentName.length < 2) fields.parentName = "Please enter your name.";
  if (!EMAIL.test(data.email)) fields.email = "Please enter a valid email.";
  if (data.phone.replace(/\D/g, "").length < 8) fields.phone = "Please enter a valid phone number.";
  if (data.playerName.length < 2) fields.playerName = "Please enter the player's name.";
  if (!Number.isInteger(data.age) || data.age < 4 || data.age > 18) fields.age = "Ages 4–18 only.";
  if (!Object.hasOwn(programLabels, data.program)) fields.program = "Please choose a program.";

  if (Object.keys(fields).length > 0) {
    return {
      status: "error",
      message: "Please check the highlighted fields.",
      fields,
    };
  }

  console.log("[ProGoal] New trial booking", data);

  const failMessage = `Sorry, we couldn't send your booking. Please call us on ${academy.phone} and we'll book you in.`;

  if (!emailConfigured) {
    // In development, allow testing the form without Resend keys.
    if (process.env.NODE_ENV !== "production") {
      console.warn("[ProGoal] Resend not configured: booking was logged only, no email sent.");
      return { status: "success", playerName: data.playerName };
    }
    console.error("[ProGoal] RESEND_API_KEY / TRIAL_NOTIFICATION_EMAIL missing: booking not delivered.");
    return { status: "error", message: failMessage };
  }

  try {
    await sendTrialEmails(data);
  } catch (err) {
    console.error("[ProGoal] Trial email failed:", err);
    return { status: "error", message: failMessage };
  }

  return { status: "success", playerName: data.playerName };
}
