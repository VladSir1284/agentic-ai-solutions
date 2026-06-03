"use client";

import { useLanguage } from "./LanguageContext";
import { motion } from "motion/react";
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
    <section className="pt-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div
          className="grid grid-cols-1 md:grid-cols-2 rounded-2xl border-2"
          style={{ backgroundColor: `${"#c4b5fd"}30` }}
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="p-8  hover:shadow-xl transition-all"
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
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
