import Image from "next/image";

export interface CaseImageData {
  src?: string;
  alt: string;
  label: string;
}

interface Props extends CaseImageData {
  ratio?: string;
  className?: string;
}

export default function CaseImage({ src, alt, label, ratio = "16/10", className }: Props) {
  return (
    <>
      <style>{`
        .case-img { position: relative; border-radius: 14px; overflow: hidden; width: 100%; }
        .case-img--placeholder {
          display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 0.625rem;
          background: linear-gradient(135deg, #eef3fd 0%, #e2eaf9 100%);
          border: 1.5px dashed rgba(0,74,173,0.28);
          color: rgba(0,74,173,0.55);
        }
        .case-img--placeholder span { font-size: 0.8125rem; font-weight: 600; color: var(--accent); text-align: center; padding: 0 1rem; }
      `}</style>
      {src ? (
        <div className={`case-img ${className ?? ""}`} style={{ aspectRatio: ratio }}>
          <Image src={src} alt={alt} fill sizes="(max-width: 700px) 100vw, 50vw" style={{ objectFit: "cover" }} />
        </div>
      ) : (
        <div className={`case-img case-img--placeholder ${className ?? ""}`} style={{ aspectRatio: ratio }}>
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <rect x="2.5" y="4.5" width="19" height="15" rx="2" stroke="currentColor" strokeWidth="1.4" />
            <circle cx="8" cy="10" r="1.6" stroke="currentColor" strokeWidth="1.4" />
            <path d="M4 17L9 12.5L12.5 15.5L16 11L20 15.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span>{label}</span>
        </div>
      )}
    </>
  );
}
