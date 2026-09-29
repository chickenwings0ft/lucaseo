const FLOWS: { icon: string; steps: string[] }[] = [
  { icon: "🌐", steps: ["Website enquiry", "AI", "CRM", "Quote", "Calendar"] },
  { icon: "📞", steps: ["Phone", "AI receptionist", "Qualified lead", "Team"] },
  { icon: "🧾", steps: ["Invoice", "AI extraction", "Xero", "Approval"] },
];

export default function WorkflowDiagram() {
  return (
    <div className="aig-diagram">
      {FLOWS.map((flow) => (
        <div className="aig-diagram__row" key={flow.icon}>
          <span className="aig-diagram__icon" aria-hidden="true">{flow.icon}</span>
          <div className="aig-diagram__chain">
            {flow.steps.map((step, i) => (
              <span className="aig-diagram__step-wrap" key={step}>
                <span className={`aig-diagram__step${i === 1 ? " aig-diagram__step--ai" : ""}`}>{step}</span>
                {i < flow.steps.length - 1 && <span className="aig-diagram__arrow" aria-hidden="true">→</span>}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
