import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Logo } from "@/components/Logo";
import { TrialForm } from "@/components/TrialForm";
import { Eyebrow, Pill } from "@/components/ui";
import {
  academy,
  coaches,
  extras,
  faqs,
  pillars,
  programs,
  schedule,
  stats,
  testimonials,
} from "@/lib/content";

export default function Home() {
  return (
    <>
      <Header />

      <main id="top">
        <Hero />


        {/* STATS */}
        <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6">
          <dl className="grid grid-cols-2 gap-x-6 gap-y-12 lg:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="reveal border-t border-ink/15 pt-6">
                <dd className="display text-6xl font-light sm:text-7xl">{s.value}</dd>
                <dt className="mt-3 flex items-center gap-2 text-sm text-mute">
                  <span className="size-1.5 rounded-full bg-gold" />
                  {s.label}
                </dt>
              </div>
            ))}
          </dl>
        </section>

        {/* PROGRAMS */}
        <section id="programs" className="mx-auto max-w-7xl scroll-mt-28 px-4 pb-24 sm:px-6">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div className="max-w-3xl">
              <Eyebrow>Programs</Eyebrow>
              <h2 className="display text-5xl sm:text-7xl">
                A pathway for every age,
                <br />
                <em>and every ambition.</em>
              </h2>
            </div>
            <Pill href="#trial" variant="light">Find the right program</Pill>
          </div>

          <div className="mt-14 grid gap-5 lg:grid-cols-3">
            {programs.map((p) => {
              const dark = p.featured;
              return (
                <article
                  key={p.slug}
                  className={`reveal relative flex flex-col overflow-hidden rounded-[2rem] p-8 ${
                    dark ? "bg-ink text-paper" : "bg-bone"
                  }`}
                >
                  {dark && <div className="absolute -right-16 -top-16 size-56 rounded-full bg-gold/25 blur-3xl" />}
                  <div className="relative flex items-center justify-between">
                    <span
                      className={`rounded-full px-3 py-1 text-xs font-semibold ${
                        dark ? "bg-gold text-ink" : "bg-paper ring-1 ring-ink/10"
                      }`}
                    >
                      {p.ages}
                    </span>
                    {dark && <span className="text-sm italic text-gold-light">Most popular</span>}
                  </div>
                  <h3 className="display relative mt-8 text-4xl">{p.name}</h3>
                  <p className={`relative mt-4 ${dark ? "text-paper/70" : "text-mute"}`}>{p.blurb}</p>
                  <ul className="relative mt-6 grid gap-3 text-sm">
                    {p.points.map((pt) => (
                      <li key={pt} className="flex items-center gap-3">
                        <span className="size-1.5 rounded-full bg-gold" />
                        {pt}
                      </li>
                    ))}
                  </ul>
                  <div className="relative mt-auto flex flex-wrap items-center justify-between gap-4 pt-10">
                    <p className="text-lg font-medium">{p.price}</p>
                    <Pill href="#trial" variant={dark ? "gold" : "dark"} size="sm">Try free</Pill>
                  </div>
                </article>
              );
            })}
          </div>

          <div className="mt-5 grid gap-5 md:grid-cols-3">
            {extras.map((e) => (
              <div key={e.name} className="reveal rounded-[2rem] p-7 ring-1 ring-ink/10">
                <h3 className="text-xl font-medium tracking-tight">{e.name}</h3>
                <p className="mt-2 text-sm text-mute">{e.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* METHOD */}
        <section id="method" className="relative scroll-mt-28 overflow-hidden bg-ink py-28 text-paper">
          <div className="hatched-panel absolute inset-0 opacity-40" />
          <div className="relative mx-auto grid max-w-7xl gap-14 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="lg:sticky lg:top-32 lg:self-start">
              <Eyebrow tone="light">The ProGoal Method</Eyebrow>
              <h2 className="display text-5xl sm:text-7xl">
                Better players.
                <br />
                <em>Better people.</em>
              </h2>
              <p className="mt-6 max-w-md text-lg text-paper/65">
                A player-centred curriculum built on the coaching used by leading academies around the world, adapted
                for Australian juniors.
              </p>
            </div>
            <ol className="grid gap-4 sm:grid-cols-2">
              {pillars.map((p) => (
                <li key={p.title} className="reveal rounded-[2rem] bg-paper/[0.04] p-8 ring-1 ring-paper/10 backdrop-blur">
                  <span className="mb-6 block h-px w-10 bg-gold" />
                  <h3 className="text-2xl font-medium tracking-tight">{p.title}</h3>
                  <p className="mt-3 text-paper/65">{p.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* COACHES */}
        <section id="coaches" className="mx-auto max-w-7xl scroll-mt-28 px-4 py-28 sm:px-6">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div className="max-w-2xl">
              <Eyebrow>Coaches</Eyebrow>
              <h2 className="display text-5xl sm:text-7xl">Coached by the best.</h2>
            </div>
            <p className="max-w-sm text-mute">
              Every coach is licensed, Blue Card checked and first-aid certified, and they love what they do.
            </p>
          </div>
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {coaches.map((c) => (
              <article key={c.role} className="reveal group">
                {/* Photo slot: replace with <Image> once coach photos arrive */}
                <div className="relative grid aspect-[4/5] place-items-center overflow-hidden rounded-[2rem] bg-bone">
                  <span className="display text-8xl font-light text-ink/[0.08] transition-transform duration-300 ease-out group-hover:scale-105">
                    {c.initials}
                  </span>
                  <span className="absolute bottom-4 left-4 rounded-full bg-ink px-3 py-1.5 text-xs font-semibold text-gold-light">
                    {c.cred}
                  </span>
                </div>
                <h3 className="mt-4 text-xl font-medium tracking-tight">{c.name}</h3>
                <p className="text-sm text-mute">{c.role}</p>
              </article>
            ))}
          </div>
        </section>

        {/* SCHEDULE */}
        <section id="schedule" className="mx-auto max-w-7xl scroll-mt-28 px-4 pb-28 sm:px-6">
          <div className="rounded-[2.5rem] bg-bone p-6 sm:p-12">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <Eyebrow>Weekly schedule</Eyebrow>
                <h2 className="display text-5xl sm:text-6xl">When we train</h2>
              </div>
              <p className="text-sm text-mute">School terms · {academy.city}</p>
            </div>
            <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
              {schedule.map((d) => (
                <div key={d.day} className="reveal rounded-3xl bg-paper p-5 ring-1 ring-ink/5">
                  <h3 className="text-base font-medium">{d.day}</h3>
                  <ul className="mt-4 grid gap-2.5 text-sm">
                    {d.sessions.map((s) => {
                      const [time, ...rest] = s.split(" ");
                      return (
                        <li key={s} className="flex gap-3">
                          <span className="w-10 shrink-0 font-semibold tabular-nums text-gold-dark">{time}</span>
                          <span>{rest.join(" ")}</span>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section className="mx-auto max-w-7xl px-4 pb-28 sm:px-6">
          <Eyebrow>Families say</Eyebrow>
          <div className="grid gap-5 md:grid-cols-3">
            {testimonials.map((t) => (
              <figure key={t.detail} className="reveal flex flex-col rounded-[2rem] p-8 ring-1 ring-ink/10">
                <p className="tracking-widest text-gold" aria-label="5 out of 5 stars">★★★★★</p>
                <blockquote className="mt-5 flex-1 text-xl italic leading-snug tracking-tight">
                  “{t.quote}”
                </blockquote>
                <figcaption className="mt-6 text-sm">
                  <span className="font-semibold">{t.name}</span> <span className="text-mute">· {t.detail}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        {/* TRIAL */}
        <section id="trial" className="relative isolate scroll-mt-20 overflow-hidden bg-ink py-28 text-paper">
          <div className="hatched-panel absolute inset-0 -z-10 opacity-40" />
          <div className="absolute -bottom-40 left-1/2 -z-10 size-[620px] -translate-x-1/2 rounded-full bg-gold/20 blur-[140px]" />
          <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2">
            <div>
              <Eyebrow tone="light">Free trial session</Eyebrow>
              <h2 className="display text-6xl sm:text-8xl">
                First session’s <em>on us.</em>
              </h2>
              <p className="mt-6 max-w-md text-lg text-paper/65">
                Tell us a little about your player and we’ll match them to the right group. No cost, no commitment.
                Just football.
              </p>
              <ul className="mt-8 grid gap-3 text-sm">
                {["Matched to age & ability", "Meet the coaches", "Free ProGoal training bib"].map((x) => (
                  <li key={x} className="flex items-center gap-3">
                    <span className="size-1.5 rounded-full bg-gold" />
                    {x}
                  </li>
                ))}
              </ul>
            </div>
            <TrialForm />
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="mx-auto max-w-3xl scroll-mt-28 px-4 py-28 sm:px-6">
          <div className="text-center">
            <Eyebrow>FAQ</Eyebrow>
            <h2 className="display text-5xl sm:text-6xl">Questions, answered.</h2>
          </div>
          <div className="mt-12 divide-y divide-ink/10 border-y border-ink/10">
            {faqs.map((f) => (
              <details key={f.q} name="faq" className="group py-6">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-lg font-medium">
                  {f.q}
                  <span className="faq-icon grid size-9 shrink-0 place-items-center rounded-full bg-ink text-gold-light transition-transform duration-200 ease-out">
                    +
                  </span>
                </summary>
                <p className="mt-4 text-mute">{f.a}</p>
              </details>
            ))}
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="bg-ink text-paper">
        <div className="mx-auto max-w-7xl px-4 pt-16 sm:px-6">
          <div className="grid gap-10 md:grid-cols-[1.5fr_1fr_1fr]">
            <div>
              <Logo tone="light" />
              <p className="mt-5 max-w-xs text-sm text-paper/60">
                {academy.tagline}. Junior football coaching on the {academy.city}, {academy.region}.
              </p>
              <Pill href="#trial" variant="gold" size="sm" className="mt-6">Book a free trial</Pill>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gold-light">Contact</h3>
              <ul className="mt-4 grid gap-2 text-sm text-paper/70">
                <li><a className="hover:text-paper" href={`tel:${academy.phone.replace(/\s/g, "")}`}>{academy.phone}</a></li>
                <li><a className="hover:text-paper" href={`mailto:${academy.email}`}>{academy.email}</a></li>
                <li><a className="hover:text-paper" href={academy.instagram} rel="noopener" target="_blank">Instagram</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gold-light">Programs</h3>
              <ul className="mt-4 grid gap-2 text-sm text-paper/70">
                {programs.map((p) => (
                  <li key={p.slug}><a className="hover:text-paper" href="#programs">{p.name}</a></li>
                ))}
                <li><a className="hover:text-paper" href="#programs">Holiday Camps</a></li>
              </ul>
            </div>
          </div>
          <p aria-hidden className="display mt-16 select-none text-center text-[22vw] leading-[0.8] text-paper/[0.07] lg:text-[17rem]">
            ProGoal
          </p>
        </div>
        <p className="border-t border-paper/10 py-6 text-center text-xs text-paper/50">
          © 2026 {academy.name}. All rights reserved.
        </p>
      </footer>
    </>
  );
}
