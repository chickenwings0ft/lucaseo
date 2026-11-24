"use client";

import { startTransition, useActionState, useState } from "react";
import { bookTrial, type TrialState } from "@/app/actions";
import { Pill } from "./ui";

const initial: TrialState = { status: "idle" };

const inputCls =
  "w-full rounded-2xl border border-paper/15 bg-paper/[0.06] px-4 py-3 text-base text-paper placeholder:text-paper/40 outline-none transition-colors duration-200 focus:border-gold focus:bg-paper/10 aria-invalid:border-red-400 [&>option]:text-ink";

function Field({
  name,
  label,
  error,
  children,
}: {
  name: string;
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label htmlFor={name} className="grid gap-1.5 text-sm font-medium text-paper/80">
      {label}
      {children}
      {error && (
        <span id={`${name}-error`} className="text-xs text-red-300">
          {error}
        </span>
      )}
    </label>
  );
}

export function TrialForm() {
  const [state, action, pending] = useActionState(bookTrial, initial);
  const [program, setProgram] = useState("");
  const err = state.status === "error" ? state.fields ?? {} : {};
  const a11y = (k: string) =>
    err[k] ? { "aria-invalid": true as const, "aria-describedby": `${k}-error` } : {};

  if (state.status === "success") {
    return (
      <div role="status" className="grid place-items-center gap-4 rounded-[2rem] bg-paper p-10 text-center text-ink">
        <span className="grid size-16 place-items-center rounded-full bg-ink text-2xl text-gold" aria-hidden>✓</span>
        <h3 className="display text-4xl">You&apos;re booked in!</h3>
        <p className="max-w-sm text-mute">
          Thanks — we&apos;ll be in touch within 24 hours to confirm {state.playerName}&apos;s free trial session.
        </p>
      </div>
    );
  }

  return (
    <form
      // Submitted via a transition rather than the `action` prop: a form action makes
      // React 19 reset every field afterwards, which would wipe the parent's input on error.
      onSubmit={(e) => {
        e.preventDefault();
        const fd = new FormData(e.currentTarget);
        startTransition(() => action(fd));
      }}
      noValidate className="overflow-hidden rounded-[2rem] bg-paper/[0.05] ring-1 ring-paper/15 backdrop-blur-xl">
      <div className="flex items-center justify-between bg-paper px-6 py-4 text-ink">
        <span className="font-medium">Book your free trial</span>
        <span className="text-sm font-semibold"><span className="text-gold">★</span> No cost</span>
      </div>
      <div className="grid gap-4 p-6 sm:p-8">
      <div className="grid gap-4 sm:grid-cols-2">
        <Field name="parentName" label="Parent / guardian name" error={err.parentName}>
          <input id="parentName" name="parentName" autoComplete="name" required className={inputCls} {...a11y("parentName")} />
        </Field>
        <Field name="email" label="Email" error={err.email}>
          <input id="email" name="email" type="email" autoComplete="email" required className={inputCls} {...a11y("email")} />
        </Field>
        <Field name="phone" label="Phone" error={err.phone}>
          <input id="phone" name="phone" type="tel" autoComplete="tel" required className={inputCls} {...a11y("phone")} />
        </Field>
        <Field name="playerName" label="Player name" error={err.playerName}>
          <input id="playerName" name="playerName" required className={inputCls} {...a11y("playerName")} />
        </Field>
        <Field name="age" label="Player age" error={err.age}>
          <input id="age" name="age" type="number" inputMode="numeric" min={4} max={18} required className={inputCls} {...a11y("age")} />
        </Field>
        <Field name="program" label="Program" error={err.program}>
          <select
            id="program"
            name="program"
            required
            className={inputCls}
            {...a11y("program")}
            value={program}
            onChange={(e) => setProgram(e.target.value)}
          >
            <option value="" disabled>Choose a program</option>
            <option value="mini-kickers">Mini Kickers (4–6)</option>
            <option value="junior-development">Junior Development (7–12)</option>
            <option value="elite-pathway">Elite Pathway (13–18)</option>
            <option value="holiday-camps">Holiday Camps</option>
            <option value="private-coaching">Private Coaching</option>
            <option value="goalkeeper">Goalkeeper Academy</option>
          </select>
        </Field>
      </div>

      {state.status === "error" && (
        <p role="alert" className="text-sm text-red-300">{state.message}</p>
      )}

      <Pill type="submit" variant="gold" disabled={pending} className="mt-2 w-full justify-between disabled:opacity-60">
        {pending ? "Booking…" : "Book my free trial"}
      </Pill>
      <p className="text-center text-xs text-paper/50">No cost. No obligation. We reply within 24 hours.</p>
      </div>
    </form>
  );
}
