"use client";

import { useLanguage } from "./LanguageContext";
import { Cpu, Database } from "lucide-react";

export function Solution() {
  const { t } = useLanguage();

  const features = [
    {
      icon: Cpu,
      title: t("solution_title_1"),
      description: t("solution_description_1_1"),
      color: "#8b5cf6",
    },
    {
      icon: Database,
      title: t("solution_title_2"),
      description: t("solution_description_1_1"),
      description_2: t("solution_description_2_1"),
      color: "#a78bfa",
    },
    {
      icon: Cpu,
      title: "",
      description: t("solution_description_3_1"),
      color: "#8b5cf6",
    },
  ];

  return (
    <section className="px-6 py-10 bg-white">
      <div className="max-w-6xl mx-auto">
        <div
          className="p-8  hover:shadow-xl transition-all rounded-2xl rounded-2xl"
          style={{ backgroundColor: `#8b5cf630` }}
        >
          <p className="graph-title mb-6">
            Evaluation as a Kubernetes control loop
          </p>
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index}>
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-6"
                  style={{ backgroundColor: `${feature.color}20` }}
                >
                  <Icon size={28} style={{ color: feature.color }} />
                </div>
                <h3 className="mb-4" style={{ color: feature.color }}>
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {feature.description}
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {feature.description_2}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
