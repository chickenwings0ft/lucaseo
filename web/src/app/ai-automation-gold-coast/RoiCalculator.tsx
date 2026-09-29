"use client";
import { useState } from "react";

function formatAud(n: number): string {
  return n.toLocaleString("en-AU", { style: "currency", currency: "AUD", maximumFractionDigits: 0 });
}

export default function RoiCalculator() {
  const [adminHours, setAdminHours] = useState(8);
  const [hourlyValue, setHourlyValue] = useState(45);
  const [missedEnquiries, setMissedEnquiries] = useState(3);
  const [jobValue, setJobValue] = useState(500);

  const adminCost = adminHours * hourlyValue * 52;
  const missedCost = missedEnquiries * jobValue * 52;
  const total = adminCost + missedCost;

  return (
    <div className="roi-card">
      <div className="roi-inputs">
        <label className="roi-field">
          <span>Hours per week on repetitive admin</span>
          <input
            type="number"
            min={0}
            max={80}
            value={adminHours}
            onChange={(e) => setAdminHours(Math.max(0, Number(e.target.value)))}
          />
        </label>
        <label className="roi-field">
          <span>Hourly value of your team&apos;s time (A$)</span>
          <input
            type="number"
            min={0}
            max={500}
            value={hourlyValue}
            onChange={(e) => setHourlyValue(Math.max(0, Number(e.target.value)))}
          />
        </label>
        <label className="roi-field">
          <span>Missed or unanswered enquiries per week</span>
          <input
            type="number"
            min={0}
            max={100}
            value={missedEnquiries}
            onChange={(e) => setMissedEnquiries(Math.max(0, Number(e.target.value)))}
          />
        </label>
        <label className="roi-field">
          <span>Average job value (A$)</span>
          <input
            type="number"
            min={0}
            max={100000}
            value={jobValue}
            onChange={(e) => setJobValue(Math.max(0, Number(e.target.value)))}
          />
        </label>
      </div>

      <div className="roi-result">
        <div className="roi-result__row">
          <span>Admin time cost per year</span>
          <strong>{formatAud(adminCost)}</strong>
        </div>
        <div className="roi-result__row">
          <span>Missed enquiry value per year</span>
          <strong>{formatAud(missedCost)}</strong>
        </div>
        <div className="roi-result__total">
          <span>Estimated annual cost</span>
          <strong>{formatAud(total)}</strong>
        </div>
        <p className="roi-disclaimer">This is an estimate, not a guaranteed saving. It&apos;s meant to show the scale of the problem, not a promise of results.</p>
      </div>
    </div>
  );
}
