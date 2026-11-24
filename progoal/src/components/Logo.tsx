// Placeholder wordmark until the real logo arrives.
export function Logo({ tone = "dark" }: { tone?: "dark" | "light" }) {
  return (
    <span className="flex items-center gap-2.5">
      <svg viewBox="0 0 32 32" className="size-8" fill="none" aria-hidden>
        <circle cx="16" cy="16" r="14.5" stroke="currentColor" strokeWidth="1.5" />
        <path d="m16 10 5.2 3.8-2 6.2h-6.4l-2-6.2Z" fill="var(--color-gold)" />
        <path d="M16 10V1.5M21.2 13.8l8-2.6M19.2 20l5 6.9M12.8 20l-5 6.9M10.8 13.8l-8-2.6" stroke="currentColor" strokeWidth="1.5" />
      </svg>
      <span className={`text-[1.3rem] font-medium tracking-[-0.03em] ${tone === "dark" ? "text-ink" : "text-paper"}`}>
        ProGoal
      </span>
    </span>
  );
}
