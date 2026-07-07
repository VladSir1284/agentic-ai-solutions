"use client";

import { useLanguage } from "./LanguageContext";

export function EvalBlock() {
  const { t } = useLanguage();

  return (
    <section className="pb-22 px-6">
      <div className="max-w-6xl mx-auto rounded-2xl border-1 p-4" style={{ backgroundColor: "#a78bfa30" }}>
        <div className="py-2" style={{ width: "75%" }}>
          <p className="text-muted-foreground leading-relaxed m-0 text-3xl font-bold">
            What it evaluates
          </p>
          <p className="text-muted-foreground leading-relaxed mt-4 text-xl font-bold">
            EvalRun focuses on the failure modes that matter before release.
          </p>
          <p className="text-muted-foreground leading-relaxed mt-4 text-xl font-bold">
            RAG quality
          </p>
          <p className="text-muted-foreground leading-relaxed mt-2 text-base">
            Retrieval quality, faithfulness, correctness, and regression.
          </p>
           <p className="text-muted-foreground leading-relaxed mt-4 text-xl font-bold">
            Agent behavior
          </p>
          <p className="text-muted-foreground leading-relaxed mt-2 text-base">
            Tool selection, tool arguments, policy violations, and task completion.
          </p>
           <p className="text-muted-foreground leading-relaxed mt-4 text-xl font-bold">
            Release readiness
          </p>
          <p className="text-muted-foreground leading-relaxed mt-2 text-base">
            Thresholds, baseline drops, root cause, and PASS / FAIL status.
          </p>
        </div>
      </div>
    </section>
  );
}
