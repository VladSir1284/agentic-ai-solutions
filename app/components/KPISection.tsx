"use client";

import { useLanguage } from "./LanguageContext";
import { PackageOpen, Scale } from "lucide-react";

export function KPISection() {
  const { t } = useLanguage();

  const kpis = [
    { icon: PackageOpen, label: t("kpi_1"), color: "#8b5cf6" },
    { icon: Scale, label: t("kpi_2"), color: "#a78bfa" },
  ];

  return (
    <section className="pt-6 pb-20 px-6 bg-gradient-to-b from-white to-purple-50/30">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {kpis.map((kpi, index) => {
            const Icon = kpi.icon;
            return (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg border border-purple-100 hover:shadow-xl transition-all"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                  style={{ backgroundColor: `${kpi.color}20` }}
                >
                  <Icon size={24} style={{ color: kpi.color }} />
                </div>
                <div
                  className="text-base leading-snug"
                  style={{ color: kpi.color }}
                >
                  {kpi.label}
                </div>
                {index === 0 && (
                  <div
                    className="text-base leading-snug"
                    style={{ color: kpi.color }}
                  >
                    {t("kpi_systems")}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
