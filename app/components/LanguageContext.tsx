"use client";

import { createContext, useContext, useState, ReactNode } from "react";

type Language = "ua" | "en";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  ua: {
    menu_solutions: "Рішення",
    menu_strategy: "Стратегія",
    contacts: "Контакти",

    hero_block_title_1:
      "Системи штучного інтелекту виробничого рівня та адаптивна інфраструктура для Kubernetes",
    hero_block_title_2:
      "Оцінка ШІ, гейтінг релізів, прогнозне масштабування та виробнича інженерія для робочих навантажень ШІ RAG та Agentic",
    hero_block_title_3:
      "Надійний • Передбачуваний • Відстежуваний • Перевіряється",
    hero_block_feature: "Дослідіть продукти",

    positioning_block_title_1:
      "RAG and Agentic AI systems are increasingly deployed into Kubernetes and cloud-native environments.",

    positioning_block_title_2:
      "What remains difficult is not deployment itself, but making these systems production-ready.",

    positioning_block_description_2_1:
      "There is no clear way to decide whether a new AI version is safe to release.",

    positioning_block_title_3:
      "Instead, AI systems are promoted based on confidence, not on measurable and explainable evaluation.",

    positioning_block_description_3_1:
      "This creates a gap between deployment and decision: systems can be deployed, but not reliably approved.",

    positioning_block_description_3_2:
      "Modern AI systems require a dedicated decision layer before promotion to production.",

    positioning_block_li_1: "validate behavior before promotion",
    positioning_block_li_2: "detect regressions between versions",
    positioning_block_li_3: "enforce consistent release criteria",
    positioning_block_li_4:
      "explain why a system should or should not be deployed",

    graph_title_1: "PR / Change",
    graph_title_2: "Build",
    graph_title_3: "Deploy",
    graph_title_4: "???",
    graph_title_5: "Production",

    graph_description_1: "code, prompts, retriever",
    graph_description_2: "container, config, pipeline",
    graph_description_3: "candidate is now live",
    graph_description_4: "no clear decision layer",
    graph_description_5: "risk moves forward",

    solution_title_1:
      "EvalRun extends the Kubernetes API with Custom Resources for AI evaluation.",
    solution_description_1_1:
      "Instead of hiding evaluation logic inside CI scripts, the system models evaluation as declarative API objects.",

    solution_title_2: "EvalDataset defines input data.",
    solution_description_2_1:
      "EvalSuite defines policy, thresholds, and regression rules.",
    solution_description_2_2:
      "EvalRun defines one concrete evaluation execution.",
    solution_description_3_1:
      "The operator watches EvalRun, starts the runner pod, and writes the final decision back into EvalRun.status.",
    
    sol_graph_title_1: "EvalDataset",
    sol_graph_description_1: "input data",
    sol_graph_title_2: "EvalSuite",
    sol_graph_description_2: "policy",
    sol_graph_title_3: "EvalRun",
    sol_graph_description_3: "execution",

    expertise_li_1: "Площини керування, нативні для Kubernetes та OpenShift",
    expertise_li_2: "Виробнича інженерія для систем RAG та Agentic AI",
    expertise_li_3: "Оцінювання, виявлення регресії та гейтування випуску",
    expertise_li_4:
      "Надійна та передбачувана поведінка системи штучного інтелекту",
    expertise_li_5:
      "Відстежуваність, можливість аудиту та операційна прозорість",
    expertise_li_6:
      "Автоматизація інфраструктури та прогнозне масштабування на основі машинного навчання",
    expertise_text:
      "Акцент робиться на системах, які можна надійно розгортати, оцінювати, керувати та експлуатувати у виробництві.",
    cta_primary: "Читати далі",
    cta_secondary: "Експертиза",

    kpi_1: "Працює разом з існуючими системами доставки:",
    kpi_2:
      "Конвеєри збірки та розгортання залишаються незмінними. Там, де цього вимагають сучасні системи штучного інтелекту, впроваджується додатковий рівень перевірки та прийняття рішень з урахуванням штучного інтелекту.",
    kpi_systems:
      "GitHub Actions • GitLab CI • Jenkins • Argo Rollouts │ Tekton / OpenShift Pipelines • Kubernetes / OpenShift",

    cta_title: "Running RAG, Agentic AI, or dynamic workloads in Kubernetes?",
    cta_text: "Discussion can start from one of three angles:",
    cta_li_1: "AI evaluation and release gating",
    cta_li_2: "predictive autoscaling",
    cta_li_3: "production engineering for RAG / Agentic AI",

    footer_text: "© 2026 Agentic AI Solutions. Всі права захищено.",
  },
  en: {
    menu_solutions: "Solutions",
    menu_strategy: "Strategy",
    contacts: "Contacts",

    hero_block_title_1:
      "Production-grade AI systems and adaptive infrastructure for Kubernetes",
    hero_block_title_2:
      "AI evaluation, release gating, predictive scaling, and production engineering for RAG and Agentic AI workloads",
    hero_block_title_3: "Reliable • Predictable • Traceable • Auditable",
    hero_block_feature: "Explore Products",

    positioning_block_title_1:
      "RAG and Agentic AI systems are increasingly deployed into Kubernetes and cloud-native environments.",

    positioning_block_title_2:
      "What remains difficult is not deployment itself, but making these systems production-ready.",

    positioning_block_description_2_1:
      "There is no clear way to decide whether a new AI version is safe to release.",

    positioning_block_title_3:
      "Instead, AI systems are promoted based on confidence, not on measurable and explainable evaluation.",

    positioning_block_description_3_1:
      "This creates a gap between deployment and decision: systems can be deployed, but not reliably approved.",

    positioning_block_description_3_2:
      "Modern AI systems require a dedicated decision layer before promotion to production.",

    positioning_block_li_1: "validate behavior before promotion",
    positioning_block_li_2: "detect regressions between versions",
    positioning_block_li_3: "enforce consistent release criteria",
    positioning_block_li_4:
      "explain why a system should or should not be deployed",

    graph_title_1: "PR / Change",
    graph_title_2: "Build",
    graph_title_3: "Deploy",
    graph_title_4: "???",
    graph_title_5: "Production",

    graph_description_1: "code, prompts, retriever",
    graph_description_2: "container, config, pipeline",
    graph_description_3: "candidate is now live",
    graph_description_4: "no clear decision layer",
    graph_description_5: "risk moves forward",

    solution_title_1:
      "EvalRun extends the Kubernetes API with Custom Resources for AI evaluation.",
    solution_description_1_1:
      "Instead of hiding evaluation logic inside CI scripts, the system models evaluation as declarative API objects",

    solution_title_2: "EvalDataset defines input data.",
    solution_description_2_1:
      "EvalSuite defines policy, thresholds, and regression rules.",
    solution_description_2_2:
      "EvalRun defines one concrete evaluation execution. ",

    solution_description_3_1:
      "The operator watches EvalRun, starts the runner pod, and writes the final decision back into EvalRun.status.",
    
    sol_graph_title_1: "EvalDataset",
    sol_graph_description_1: "input data",
    sol_graph_title_2: "EvalSuite",
    sol_graph_description_2: "policy",
    sol_graph_title_3: "EvalRun",
    sol_graph_description_3: "execution",   

    expertise_li_1: "Kubernetes and OpenShift-native control planes",
    expertise_li_2: "Production engineering for RAG and Agentic AI systems",
    expertise_li_3: "Evaluation, regression detection, and release gating",
    expertise_li_4: "Reliable and predictable AI system behavior",
    expertise_li_5: "Traceability, auditability, and operational clarity",
    expertise_li_6:
      "ML-driven infrastructure automation and predictive scaling",
    expertise_text:
      "The emphasis is on systems that can be deployed, evaluated, governed, and operated reliably in production.",
    cta_primary: "Read more",
    cta_secondary: "Еxpertise",

    kpi_1: "Works alongside existing delivery systems:",
    kpi_2:
      "Build and deployment pipelines remain unchanged. An additional AI-aware validation and decision layer is introduced where modern AI systems require it.",
    kpi_systems:
      "GitHub Actions • GitLab CI • Jenkins • Argo Rollouts │ Tekton / OpenShift Pipelines • Kubernetes / OpenShift",

    cta_title: "Running RAG, Agentic AI, or dynamic workloads in Kubernetes?",
    cta_text: "Discussion can start from one of three angles:",
    cta_li_1: "AI evaluation and release gating",
    cta_li_2: "predictive autoscaling",
    cta_li_3: "production engineering for RAG / Agentic AI",

    footer_text: "© 2026 Agentic AI Solutions. All rights reserved.",
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined,
);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en");

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.ua] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
}
