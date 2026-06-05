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
      "Системи RAG та Agentic AI все частіше розгортаються в середовищах Kubernetes.",
    positioning_block_title_2:
      "Складним залишається не саме розгортання, а підготовка цих систем до виробництва:",
    positioning_block_title_3:
      "Сучасні системи штучного інтелекту вимагають більше, ніж автоматизації розгортання. Вони потребують рівня операційного прийняття рішень.",
    positioning_block_li_1: "перевірка безпечності випуску нової версії ШІ",
    positioning_block_li_2: "запобігання тихим регресіям",
    positioning_block_li_3: "підтримка поведінки надійною та зрозумілою",
    positioning_block_li_4:
      "проактивне масштабування робочих навантажень замість запізнілої реакції",

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

    overview_title_1: "EvalRun ",
    overview_title_2: "Predictive Scaling",
    overview_text_1:
      "Шлюз оцінювання та випуску штучного інтелекту на базі Kubernetes для систем RAG та Agentic",
    overview_text_2:
      "Прогнозоване автомасштабування на основі машинного навчання для робочих навантажень Kubernetes",

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
      "RAG and Agentic AI systems are increasingly deployed into Kubernetes environments.",
    positioning_block_title_2:
      "What remains difficult is not deployment itself, but making these systems production-ready:",
    positioning_block_title_3:
      "Modern AI systems require more than deployment automation. They require an operational decision layer.",
    positioning_block_li_1:
      "validating whether a new AI version is safe to release",
    positioning_block_li_2: "preventing silent regressions",
    positioning_block_li_3: "keeping behavior reliable and explainable",
    positioning_block_li_4:
      "scaling workloads proactively instead of reacting too late",

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

    overview_title_1: "EvalRun ",
    overview_title_2: "Predictive Scaling",
    overview_text_1:
      "Kubernetes-native AI evaluation and release gate for RAG and Agentic systems",
    overview_text_2:
      "ML-driven predictive autoscaling for Kubernetes workloads",

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
