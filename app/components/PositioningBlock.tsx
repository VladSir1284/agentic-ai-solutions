"use client";

import { useLanguage } from "./LanguageContext";
import { Cpu, Database, Building2 } from "lucide-react";

export function PositioningBlock() {
  const { t } = useLanguage();

  const features = [
    {
      icon: Cpu,
      description: t("positioning_block_title_1"),
      color: "#8b5cf6",
    },
    {
      icon: Database,
      description: t("positioning_block_title_2"),
      color: "#a78bfa",
    },
    {
      icon: Building2,
      description: t("positioning_block_title_3"),
      color: "#c4b5fd",
    },
  ];

  return (
    <section className="pt-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="p-8 rounded-2xl border-2 hover:shadow-xl transition-all"
                style={{ backgroundColor: `${feature.color}30` }}
              >
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-6"
                  style={{ backgroundColor: `${feature.color}20` }}
                >
                  <Icon size={28} style={{ color: feature.color }} />
                </div>
                {/* <h3 className="mb-4" style={{ color: feature.color }}>
                  {feature.title}
                </h3> */}
                <p className="text-muted-foreground leading-relaxed m-0">
                  {feature.description}
                </p>
                {index === 1 && (
                  <ul className="mt-2">
                    <li className="mt-1">- {t("positioning_block_li_1")}</li>
                    <li className="mt-1">- {t("positioning_block_li_2")}</li>
                    <li className="mt-1">- {t("positioning_block_li_3")}</li>
                    <li className="mt-1">- {t("positioning_block_li_4")}</li>
                  </ul>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
