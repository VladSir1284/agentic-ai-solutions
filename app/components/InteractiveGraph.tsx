"use client";

import { useLanguage } from "./LanguageContext";
import { ArrowRight, ArrowDown } from "lucide-react";
import "./../graph.css";

interface Node {
  id: string;
  title: string;
  icon: typeof ArrowRight;
  description: string;
  color: string;
  border_color: string;
}

export function InteractiveGraph() {
  const { t } = useLanguage();

  const nodes: Node[] = [
    {
      id: "1",
      title: t("graph_title_1"),
      icon: ArrowRight,
      description: t("graph_description_1"),
      color: "#ffffff",
      border_color: "#E2E8F0",
    },
    {
      id: "2",
      title: t("graph_title_2"),
      icon: ArrowRight,
      description: t("graph_description_2"),
      color: "#ffffff",
      border_color: "#E2E8F0",
    },
    {
      id: "3",
      title: t("graph_title_3"),
      icon: ArrowRight,
      description: t("graph_description_3"),
      color: "#ffffff",
      border_color: "#E2E8F0",
    },
    {
      id: "4",
      title: t("graph_title_4"),
      icon: ArrowRight,
      description: t("graph_description_4"),
      color: "#FEF2F2",
      border_color: "#FECACA",
    },
    {
      id: "5",
      title: t("graph_title_5"),
      icon: ArrowRight,
      description: t("graph_description_5"),
      color: "#FFF7ED",
      border_color: "#FED7AA",
    },
  ];

  return (
    <div className="relative w-full max-w-6xl mx-auto py-20 bg-gradient-to-b from-white to-purple-50/30">
      <div className="graph-items">
        {nodes.map((item, index) => {
          const Icon = item.icon;
          return (
            <div className="graph-item-main" key={index}>
              <div className="graph-item-wrapper">
                <div
                  className="graph-item"
                  style={{
                    borderColor: `${item.border_color}`,
                    backgroundColor: `${item.color}`,
                  }}
                >
                  <p className="item-title">{item.title}</p>
                  <p className="item-description">{item.description}</p>
                </div>
                {item.id !== "5" && (
                  <div>
                    {" "}
                    <Icon width={48} height={20} style={{ color: "#000000" }} />
                  </div>
                )}
              </div>
              {item.id === "4" && (
                <>
                  <ArrowDown />
                  <div className="graph-item addition-item">
                    <p className="item-title" style={{ color: "#B91C1C" }}>
                      No explicit validation layer
                    </p>
                    <div className="item-description">
                      <ul className="mt-2">
                        <li>No clear PASS / FAIL decision</li>
                        <li>Silent regressions can ship</li>
                        <li>Deployment ≠ production readiness</li>
                      </ul>
                    </div>
                  </div>
                </>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
