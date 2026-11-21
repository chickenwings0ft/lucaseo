"use client";

export default function PrintButton({ label }: { label: string }) {
  return (
    <button type="button" className="inv-print" onClick={() => window.print()}>
      {label}
    </button>
  );
}
