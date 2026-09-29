"use client";
import { useState } from "react";
import { SloshSlider } from "../components/SloshSlider";

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
        <div className="roi-field">
          <span>Hours per week on repetitive admin</span>
          <strong className="roi-field__value">{adminHours} hrs/week</strong>
          <SloshSlider min={0} max={60} step={1} defaultValue={adminHours} onChange={setAdminHours} ariaLabel="Hours per week on repetitive admin" />
        </div>
        <div className="roi-field">
          <span>Hourly value of your team&apos;s time</span>
          <strong className="roi-field__value">{formatAud(hourlyValue)}/hr</strong>
          <SloshSlider min={20} max={200} step={5} defaultValue={hourlyValue} onChange={setHourlyValue} ariaLabel="Hourly value of your team's time" />
        </div>
        <div className="roi-field">
          <span>Missed or unanswered enquiries per week</span>
          <strong className="roi-field__value">{missedEnquiries}/week</strong>
          <SloshSlider min={0} max={30} step={1} defaultValue={missedEnquiries} onChange={setMissedEnquiries} ariaLabel="Missed or unanswered enquiries per week" />
        </div>
        <div className="roi-field">
          <span>Average job value</span>
          <strong className="roi-field__value">{formatAud(jobValue)}</strong>
          <SloshSlider min={50} max={5000} step={50} defaultValue={jobValue} onChange={setJobValue} ariaLabel="Average job value" />
        </div>
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
