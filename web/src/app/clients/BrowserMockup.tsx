interface Props {
  url: string;
  children: React.ReactNode;
}

export default function BrowserMockup({ url, children }: Props) {
  return (
    <div className="browser-mock">
      <style>{`
        .browser-mock { border-radius: 14px; overflow: hidden; border: 1px solid var(--border); box-shadow: var(--shadow-md); background: #fff; }
        .browser-mock__bar { display: flex; align-items: center; gap: 0.875rem; padding: 0.75rem 1rem; background: #eef1f6; border-bottom: 1px solid var(--border); }
        .browser-mock__dots { display: flex; gap: 0.4rem; flex-shrink: 0; }
        .browser-mock__dot { width: 10px; height: 10px; border-radius: 50%; }
        .browser-mock__dot--r { background: #ff5f57; }
        .browser-mock__dot--y { background: #febc2e; }
        .browser-mock__dot--g { background: #28c840; }
        .browser-mock__url { flex: 1; background: #fff; border: 1px solid var(--border); border-radius: 999px; padding: 0.3rem 1rem; font-size: 0.75rem; color: var(--muted); text-align: center; max-width: 320px; margin: 0 auto; }
        .browser-mock__body { position: relative; }
        .browser-mock__body .case-img { border-radius: 0; }
      `}</style>
      <div className="browser-mock__bar">
        <div className="browser-mock__dots">
          <span className="browser-mock__dot browser-mock__dot--r" />
          <span className="browser-mock__dot browser-mock__dot--y" />
          <span className="browser-mock__dot browser-mock__dot--g" />
        </div>
        <span className="browser-mock__url">{url}</span>
      </div>
      <div className="browser-mock__body">{children}</div>
    </div>
  );
}
