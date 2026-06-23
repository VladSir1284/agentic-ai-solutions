"use client";

import { useLanguage } from "./LanguageContext";
import { Cpu, Database } from "lucide-react";

export function Overview() {
  const { t } = useLanguage();

  const features = [
    {
      icon: Cpu,
      title: t("overview_title_1"),
      description: t("overview_text_1"),
      color: "#8b5cf6",
    },
    {
      icon: Database,
      title: t("overview_title_2"),
      description: t("overview_text_2"),
      color: "#a78bfa",
    },
  ];

  return (
    <section className="px-6 py-10 bg-white">
      <div className="max-w-6xl mx-auto">
        <div
          className="grid grid-cols-1 md:grid-cols-2 rounded-2xl"
          style={{ gap: "12px" }}
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="p-8  hover:shadow-xl transition-all rounded-2xl"
                style={{ backgroundColor: `${feature.color}30` }}
              >
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-6"
                  style={{ backgroundColor: `${feature.color}20` }}
                >
                  <Icon size={28} style={{ color: feature.color }} />
                </div>
                <h3 className="mb-4" style={{ color: feature.color }}>
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed m-0">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
