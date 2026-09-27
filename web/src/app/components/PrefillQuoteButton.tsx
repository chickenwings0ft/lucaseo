"use client";

interface Props {
  message: string;
  className?: string;
  children: React.ReactNode;
}

export default function PrefillQuoteButton({ message, className, children }: Props) {
  function handleClick() {
    window.dispatchEvent(new CustomEvent("open-quote-popup-prefill", { detail: { message } }));
  }

  return (
    <button type="button" className={className} onClick={handleClick}>
      {children}
    </button>
  );
}
