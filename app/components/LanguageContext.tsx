'use client'

import { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'ua' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  ua: {
    menu_solutions: 'Рішення',
    menu_strategy: 'Стратегія',
    menu_about: 'Про нас',

    hero_block_title_1: 'Системи штучного інтелекту виробничого рівня та адаптивна інфраструктура для Kubernetes',
    hero_block_title_2: 'Оцінка ШІ, гейтінг релізів, прогнозне масштабування та виробнича інженерія для робочих навантажень ШІ RAG та Agentic',
    hero_block_title_3: 'Надійний • Передбачуваний • Відстежуваний • Перевіряється',
    hero_block_feature: 'Дослідіть продукти',

    positioning_block_title_1: 'Системи RAG та Agentic AI все частіше розгортаються в середовищах Kubernetes.',
    positioning_block_title_2: 'Складним залишається не саме розгортання, а підготовка цих систем до виробництва:',
    positioning_block_title_3: 'Сучасні системи штучного інтелекту вимагають більше, ніж автоматизації розгортання. Вони потребують рівня операційного прийняття рішень.',
    positioning_block_li_1: 'перевірка безпечності випуску нової версії ШІ',
    positioning_block_li_2: 'запобігання тихим регресіям',
    positioning_block_li_3: 'підтримка поведінки надійною та зрозумілою',
    positioning_block_li_4: 'проактивне масштабування робочих навантажень замість запізнілої реакції',
    
    steps_title: 'Рішення / Як воно підходить',

    overview_title_1: 'EvalRun ',
    overview_title_2: 'Predictive Scaling',
    overview_text_1: 'Шлюз оцінювання та випуску штучного інтелекту на базі Kubernetes для систем RAG та Agentic',
    overview_text_2: 'Прогнозоване автомасштабування на основі машинного навчання для робочих навантажень Kubernetes',

    expertise_title: 'AI / Platform EXPERTISE',
    expertise_li_1: 'Площини керування, нативні для Kubernetes та OpenShift',
    expertise_li_2: 'Виробнича інженерія для систем RAG та Agentic AI',
    expertise_li_3: 'Оцінювання, виявлення регресії та гейтування випуску',
    expertise_li_4: 'Надійна та передбачувана поведінка системи штучного інтелекту',
    expertise_li_5: 'Відстежуваність, можливість аудиту та операційна прозорість',
    expertise_li_6: 'Автоматизація інфраструктури та прогнозне масштабування на основі машинного навчання',
    expertise_text: 'Акцент робиться на системах, які можна надійно розгортати, оцінювати, керувати та експлуатувати у виробництві.',

    hero_title: 'Корпоративні системи Agentic AI',
    hero_subtitle: 'Не просто чат-боти. Складні автономні системи корпоративного рівня з гарантованою безпекою та юридичною відповідністю',
    cta_primary: 'Читати далі',
    cta_secondary: 'Експертиза',
    pillar_security: 'Security',
    pillar_compliance: 'Compliance',
    pillar_auditability: 'Auditability',
    pillar_reliability: 'Reliability',
    security_title: 'Безпека',
    security_desc: 'Приватне розгортання, захист даних, ізоляція від відкритих моделей',
    security_detail: 'Повністю ізольоване середовище з контролем доступу на рівні підприємства. Ваші дані залишаються в межах вашої інфраструктури.',
    compliance_title: 'Відповідність',
    compliance_desc: 'Юридична відповідність регуляціям EU AI Act та українського законодавства',
    compliance_detail: '100% відповідність EU AI Act. Готовність до майбутнього законодавства України. Повна документація для юридичних департаментів.',
    auditability_title: 'Аудит',
    auditability_desc: 'Прозорість прийняття рішень ШІ, логування кожного кроку (Reasoning Path)',
    auditability_detail: 'Кожне рішення системи повністю задокументоване. Повний шлях міркувань (Reasoning Path) доступний для перевірки в будь-який момент.',
    reliability_title: 'Надійність',
    reliability_desc: 'Гарантована точність відповідей, відсутність галюцинацій, високий SLA',
    reliability_detail: 'SLA 99.9%. Точність відповідей 98%+. Жодних галюцинацій завдяки контрольованій архітектурі та перевірці фактів.',
    
    kpi_1: 'Працює разом з існуючими системами доставки:',
    kpi_2: 'Конвеєри збірки та розгортання залишаються незмінними. Там, де цього вимагають сучасні системи штучного інтелекту, впроваджується додатковий рівень перевірки та прийняття рішень з урахуванням штучного інтелекту.',
    kpi_systems: 'GitHub Actions • GitLab CI • Jenkins • Argo Rollouts │ Tekton / OpenShift Pipelines • Kubernetes / OpenShift',
    
    workflow_title: 'Чотири стовпи наших проектів',
    workflow_subtitle: '',
    features_title: 'Чому обирають нас',
    feature_1_title: 'Автономні агенти',
    feature_1_desc: 'Складні системи Autonomous Agents, здатні виконувати багатоетапні завдання без втручання людини',
    feature_2_title: 'Agentic RAG',
    feature_2_desc: 'Інтелектуальний пошук та обробка корпоративних даних з гарантованою точністю',
    feature_3_title: 'Корпоративний рівень',
    feature_3_desc: 'Розроблено для великого бізнесу з урахуванням всіх вимог безпеки та масштабування',
    footer_text: '© 2026 Agentic AI Solutions. Всі права захищено.',
  },
  en: {
    menu_solutions: 'Solutions',
    menu_strategy: 'Strategy',
    menu_about: 'About Us',
    
    hero_block_title_1: 'Production-grade AI systems and adaptive infrastructure for Kubernetes',
    hero_block_title_2: 'AI evaluation, release gating, predictive scaling, and production engineering for RAG and Agentic AI workloads',
    hero_block_title_3: 'Reliable • Predictable • Traceable • Auditable',
    hero_block_feature: 'Explore Products',

    positioning_block_title_1: 'RAG and Agentic AI systems are increasingly deployed into Kubernetes environments.',
    positioning_block_title_2: 'What remains difficult is not deployment itself, but making these systems production-ready:',
    positioning_block_title_3: 'Modern AI systems require more than deployment automation. They require an operational decision layer.',
    positioning_block_li_1: 'validating whether a new AI version is safe to release',
    positioning_block_li_2: 'preventing silent regressions',
    positioning_block_li_3: 'keeping behavior reliable and explainable',
    positioning_block_li_4: 'scaling workloads proactively instead of reacting too late',

    steps_title: 'Solution / How It Fits',

    overview_title_1: 'EvalRun ',
    overview_title_2: 'Predictive Scaling',
    overview_text_1: 'Kubernetes-native AI evaluation and release gate for RAG and Agentic systems',
    overview_text_2: 'ML-driven predictive autoscaling for Kubernetes workloads',

    expertise_title: 'AI / Platform Expertise',
    expertise_li_1: 'Kubernetes and OpenShift-native control planes',
    expertise_li_2: 'Production engineering for RAG and Agentic AI systems',
    expertise_li_3: 'Evaluation, regression detection, and release gating',
    expertise_li_4: 'Reliable and predictable AI system behavior',
    expertise_li_5: 'Traceability, auditability, and operational clarity',
    expertise_li_6: 'ML-driven infrastructure automation and predictive scaling',
    expertise_text: 'The emphasis is on systems that can be deployed, evaluated, governed, and operated reliably in production.',

    hero_title: 'Enterprise Agentic AI Systems',
    hero_subtitle: 'Not just chatbots. Complex autonomous enterprise-level systems with guaranteed security and legal compliance',
    cta_primary: 'Read more',
    cta_secondary: 'Еxpertise',
    pillar_security: 'Security',
    pillar_compliance: 'Compliance',
    pillar_auditability: 'Auditability',
    pillar_reliability: 'Reliability',
    security_title: 'Security',
    security_desc: 'Private deployment, data protection, isolation from open models',
    security_detail: 'Fully isolated environment with enterprise-grade access control. Your data stays within your infrastructure.',
    compliance_title: 'Compliance',
    compliance_desc: 'Legal compliance with EU AI Act and Ukrainian regulations',
    compliance_detail: '100% EU AI Act compliance. Ready for future Ukrainian legislation. Complete documentation for legal departments.',
    auditability_title: 'Auditability',
    auditability_desc: 'Transparent AI decision-making, logging every step (Reasoning Path)',
    auditability_detail: 'Every system decision is fully documented. Complete Reasoning Path available for verification at any time.',
    reliability_title: 'Reliability',
    reliability_desc: 'Guaranteed answer accuracy, no hallucinations, high SLA',
    reliability_detail: '99.9% SLA. 98%+ answer accuracy. Zero hallucinations through controlled architecture and fact verification.',
    
    kpi_1: 'Works alongside existing delivery systems:',
    kpi_2: 'Build and deployment pipelines remain unchanged. An additional AI-aware validation and decision layer is introduced where modern AI systems require it.',
    kpi_systems: 'GitHub Actions • GitLab CI • Jenkins • Argo Rollouts │ Tekton / OpenShift Pipelines • Kubernetes / OpenShift',
    
    workflow_title: 'Four Pillars of Our Projects',
    workflow_subtitle: '',
    features_title: 'Why Choose Us',
    feature_1_title: 'Autonomous Agents',
    feature_1_desc: 'Complex Autonomous Agent systems capable of executing multi-step tasks without human intervention',
    feature_2_title: 'Agentic RAG',
    feature_2_desc: 'Intelligent search and processing of corporate data with guaranteed accuracy',
    feature_3_title: 'Enterprise Grade',
    feature_3_desc: 'Built for large businesses with all security and scalability requirements in mind',
    footer_text: '© 2026 Agentic AI Solutions. All rights reserved.',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('ua');

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
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
}
