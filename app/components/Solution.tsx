"use client";

import { useLanguage } from "./LanguageContext";
import { SolutionGraph } from "./SolutionGraph";
import "./../assets/styles/solution.css";

export function Solution() {
  const { t } = useLanguage();

  return (
    <section className="px-6 py-10 bg-gradient-to-b from-purple-50/50 to-white">
      <div className="max-w-6xl mx-auto">
        <div className="p-8">
          <p className="graph-title mb-3">
            Evaluation as Kubernetes API objects
          </p>

          <p className="solution-title-text">
            EvalRun describes AI evaluation declaratively: input data, policy,
            execution request, and decision status.
          </p>
          <div className="solution-subtitle">
            CUSTOM RESOURCES — EXTENSIONS OF THE KUBERNETES API
          </div>

          <SolutionGraph />
        </div>
      </div>
    </section>
  );
}
