import { Pill } from "./ui";

/**
 * Pitch-corner line art standing in for the hero photo.
 * When the photo arrives, add inside <HeroMedia>:
 * <Image src="/hero.jpg" alt="" fill priority sizes="100vw" className="object-cover" />
 * and keep the gradient overlays on top for text contrast.
 */
function HeroMedia() {
  return (
    <div className="absolute inset-0 -z-10 bg-ink" aria-hidden>
      {/* Turf texture: soft vertical mowing stripes */}
      <div className="absolute inset-0 bg-[repeating-linear-gradient(90deg,rgb(255_255_255/0.018)_0_90px,transparent_90px_180px)]" />
      {/* Corner arc + touchline, like the reference photo */}
      <svg
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMidYMid slice"
        className="absolute inset-0 size-full text-paper/[0.14]"
        fill="none"
      >
        <path d="M-40 760 L1480 560" stroke="currentColor" strokeWidth="3" />
        <path d="M1050 615 L1480 860" stroke="currentColor" strokeWidth="3" />
        <path d="M1240 586 A190 120 0 0 0 1170 690" stroke="currentColor" strokeWidth="2" />
      </svg>
      {/* Warm gold light from the right, where the photo's subject will sit */}
      <div className="absolute -right-[10%] top-[10%] size-[70vmax] rounded-full bg-[radial-gradient(closest-side,rgb(184_145_58/0.28),transparent)]" />
      {/* Legibility scrims */}
      <div className="absolute inset-0 bg-gradient-to-r from-ink/80 via-ink/30 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-ink/70 to-transparent" />
    </div>
  );
}

function AvatarStack() {
  // Placeholder faces until real player photos arrive.
  const tones = ["bg-[#d8d2c4]", "bg-[#a9a190]", "bg-[#6f685a]"];
  return (
    <div className="flex items-center gap-3">
      <div className="flex -space-x-2.5">
        {tones.map((t, i) => (
          <span key={i} className={`size-10 rounded-full ring-2 ring-paper/90 ${t}`} />
        ))}
        <span className="grid size-10 place-items-center rounded-full bg-paper/15 text-paper ring-2 ring-paper/90 backdrop-blur-md">
          <svg viewBox="0 0 16 16" className="size-4" aria-hidden>
            <path d="M8 3.5v9M3.5 8h9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </span>
      </div>
      <p className="text-sm leading-tight text-paper/80">
        <span className="block font-semibold text-paper">600+ players</span>
        trained on the Gold Coast
      </p>
    </div>
  );
}

function TrialCard() {
  return (
    <a
      href="#trial"
      className="group block w-full max-w-[380px] overflow-hidden rounded-[1.25rem] bg-paper/10 ring-1 ring-paper/20 backdrop-blur-xl transition-transform duration-200 ease-out active:scale-[0.98]"
    >
      <div className="flex items-center justify-between bg-paper px-5 py-3.5 text-ink">
        <span className="font-medium">Free trial session</span>
        <span className="flex items-center gap-1.5 text-sm font-medium">
          <svg viewBox="0 0 16 16" className="size-4 text-gold" fill="currentColor" aria-hidden>
            <path d="m8 1.5 1.9 4.1 4.5.5-3.4 3 1 4.4L8 11.2l-4 2.3 1-4.4-3.4-3 4.5-.5Z" />
          </svg>
          5.0 parent rating
        </span>
      </div>
      <div className="grid grid-cols-[auto_1fr] items-center gap-6 px-5 py-5 text-paper">
        <div>
          <p className="text-sm italic text-paper/70">Term 1 intake</p>
          <p className="mt-1 text-4xl font-medium tracking-tight">
            $0 <span className="text-sm font-normal italic text-paper/70">first session</span>
          </p>
        </div>
        <ul className="grid gap-1.5 text-sm italic text-paper/85">
          {["1 coach per 8 players", "Licensed coaches", "Termly progress report"].map((x) => (
            <li key={x} className="flex items-center gap-2">
              <span className="size-1 rounded-full bg-gold-light" />
              {x}
            </li>
          ))}
        </ul>
      </div>
    </a>
  );
}

export function Hero() {
  return (
    <section id="hero" className="p-2 sm:p-3">
      <div className="relative isolate flex min-h-[calc(100svh-1rem)] flex-col overflow-hidden rounded-[1.75rem] sm:min-h-[calc(100svh-1.5rem)] sm:rounded-[2.25rem] lg:min-h-[max(calc(100svh-1.5rem),760px)]">
        <HeroMedia />

        <div className="mx-auto flex w-full max-w-[1240px] flex-1 flex-col justify-end px-5 pb-6 pt-32 sm:px-10 sm:pb-10 lg:justify-center lg:pb-12 lg:pt-40">
          <div className="hero-in max-w-[64rem]">
            <span className="inline-flex rounded-full bg-paper/10 px-4 py-2 text-sm text-paper ring-1 ring-paper/20 backdrop-blur-md">
              The Gold Coast’s junior football academy
            </span>
            <h1 className="mt-6 text-[clamp(2.6rem,6.4vw,5.25rem)] font-normal leading-[1.02] tracking-[-0.035em] text-paper">
              Serious coaching for
              <br className="hidden sm:block" />{" "}
              <em className="font-semibold">ambitious young players.</em>
            </h1>
            <p className="mt-6 max-w-[30rem] text-lg leading-relaxed text-paper/75">
              Small-group training for ages 4–18, led by licensed coaches who track every player’s progress.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-6">
              <Pill href="#trial" variant="light">Book a free trial</Pill>
              <AvatarStack />
            </div>
          </div>

          <div className="hero-in mt-10 [animation-delay:180ms] lg:absolute lg:bottom-12 lg:right-[max(2.5rem,calc((100%-1240px)/2+2.5rem))] lg:mt-0">
            <TrialCard />
          </div>
        </div>
      </div>
    </section>
  );
}
