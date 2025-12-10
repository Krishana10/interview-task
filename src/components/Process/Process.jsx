import React from "react";
import { FaSearch, FaChartLine, FaBullseye, FaCode } from "react-icons/fa";
import "./Process.css";

const steps = [
  {
    id: 1,
    icon: <FaSearch />,
    title: "Client Discovery",
    description:
      "Understand your goals, pain points, and market position tailored actionable plan.",
  },
  {
    id: 2,
    icon: <FaChartLine />,
    title: "Data Analysis",
    description:
      "Understand your goals, pain points, and market position tailored actionable plan.",
  },
  {
    id: 3,
    icon: <FaBullseye />,
    title: "Custom Strategy",
    description:
      "Understand your goals, pain points, and market position tailored actionable plan.",
  },
  {
    id: 4,
    icon: <FaCode />,
    title: "Development",
    description:
      "Understand your goals, pain points, and market position tailored actionable plan.",
  },
];

const Process = () => {
  return (
    <section className="process-section">
      <div className="process-header text-center">
        <p className="subheading">OUR WORK PROCESS</p>
        <h2>
          Let's View Our Consulting <span className="italic">Service Process</span>
        </h2>
      </div>

      <ol className="process-steps" aria-label="Consulting Service Process">
        {steps.map(({ id, icon, title, description }) => (
          <li key={id} className="process-step">
            <div className="step-icon">{icon}</div>
            <div className="step-info">
              <div className="step-number">{String(id).padStart(2, "0")}</div>
              <h3 className="step-title">{title}</h3>
              <p className="step-desc">{description}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
};

export default Process;