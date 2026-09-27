interface Props {
  header?: React.ReactNode;
}

const platforms = [
  { icon: "🔵", name: "Google Search", share: "8.5B searches/day" },
  { icon: "🔍", name: "Google AI Overview", share: "90%+ market share" },
  { icon: "🤖", name: "ChatGPT", share: "180M+ users" },
  { icon: "🌐", name: "Perplexity", share: "15M+ daily queries" },
  { icon: "🗺️", name: "Google Maps", share: "\"Near me\" local search" },
  { icon: "💎", name: "Google Gemini", share: "Built into Android" },
];

export default function AiSearchGraphic({ header }: Props) {
  return (
    <div className="aisg-wrap">
      <style>{`
        .aisg-wrap {
          --text: #0a0f1e;
          --muted: #5a6480;
          --card-border: rgba(0,74,173,0.12);
          --card-border-hover: rgba(0,74,173,0.32);
        }
        .aisg-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 0.875rem; }
        .aisg-tile {
          background: #f5f8ff; border: 1px solid var(--card-border); border-radius: 12px;
          padding: 1.125rem 0.875rem; text-align: center;
          transition: transform 0.22s ease, border-color 0.22s ease, box-shadow 0.22s ease;
        }
        .aisg-tile:hover { transform: translateY(-3px); border-color: var(--card-border-hover); box-shadow: 0 12px 28px rgba(0,74,173,0.1); }
        .aisg-icon { font-size: 1.375rem; margin-bottom: 0.5rem; }
        .aisg-name { font-size: 0.8125rem; font-weight: 600; color: var(--text); margin-bottom: 0.25rem; }
        .aisg-share { font-size: 0.75rem; color: var(--muted); }
        @media (min-width: 560px) { .aisg-grid { grid-template-columns: repeat(3, 1fr); } }
        @media (min-width: 900px) { .aisg-grid { grid-template-columns: repeat(6, 1fr); } }
      `}</style>

      {header}

      <div className="aisg-grid">
        {platforms.map((p) => (
          <div key={p.name} className="aisg-tile">
            <div className="aisg-icon">{p.icon}</div>
            <div className="aisg-name">{p.name}</div>
            <div className="aisg-share">{p.share}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
