import type { ComponentProps } from "react";

export function ArrowUpRight({ className = "size-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" fill="none" className={className} aria-hidden>
      <path d="M4.5 11.5 11.5 4.5M5.5 4.5h6v6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

type Variant = "light" | "dark" | "gold";

const variants: Record<Variant, { pill: string; icon: string }> = {
  // white pill, black circle (reference 2 "Join now")
  light: { pill: "bg-paper text-ink ring-1 ring-ink/10 hover:bg-bone", icon: "bg-ink text-paper" },
  dark: { pill: "bg-ink text-paper hover:bg-ink-2", icon: "bg-gold text-ink" },
  gold: { pill: "bg-gold text-ink hover:bg-gold-light", icon: "bg-ink text-gold-light" },
};

type PillProps = { variant?: Variant; size?: "md" | "sm" } & (
  | ({ href: string } & ComponentProps<"a">)
  | ({ href?: undefined } & ComponentProps<"button">)
);

/** Pill CTA with a circular arrow, styled after reference 2. */
export function Pill({ variant = "light", size = "md", className = "", children, ...props }: PillProps) {
  const v = variants[variant];
  const cls = `pill ${v.pill} ${size === "sm" ? "text-sm" : "text-base"} ${className}`;
  const inner = (
    <>
      <span>{children}</span>
      <span className={`pill-icon ${v.icon} ${size === "sm" ? "!size-9" : ""}`}>
        <ArrowUpRight />
      </span>
    </>
  );
  if (props.href !== undefined) {
    return (
      <a {...(props as ComponentProps<"a">)} className={cls}>
        {inner}
      </a>
    );
  }
  return (
    <button {...(props as ComponentProps<"button">)} className={cls}>
      {inner}
    </button>
  );
}

export function Eyebrow({ children, tone = "dark" }: { children: React.ReactNode; tone?: "dark" | "light" }) {
  return (
    <p
      className={`mb-6 inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm ring-1 ${
        tone === "dark" ? "text-ink ring-ink/15" : "text-paper ring-paper/20"
      }`}
    >
      <span className="size-1.5 rounded-full bg-gold" />
      {children}
    </p>
  );
}
