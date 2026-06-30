"use client";

import { useLanguage } from "./LanguageContext";
import { ArrowRight, ArrowDown, ArrowDownLeft, ArrowDownRight } from "lucide-react";
import "./../assets/styles/graph.css";
import "./../assets/styles/sol_graph.css";

interface Node {
  id: string;
  title: string;
  icon: typeof ArrowRight;
  description: string;
  color: string;
  border_color: string;
}

export function SolutionGraph() {
  const { t } = useLanguage();

  const nodes: Node[] = [
    {
      id: "1",
      title: t("sol_graph_title_1"),
      icon: ArrowRight,
      description: t("sol_graph_description_1"),
      color: "#ffffff",
      border_color: "#E2E8F0",
    },
    {
      id: "2",
      title: t("sol_graph_title_2"),
      icon: ArrowRight,
      description: t("sol_graph_description_2"),
      color: "#ffffff",
      border_color: "#E2E8F0",
    },
    {
      id: "3",
      title: t("sol_graph_title_3"),
      icon: ArrowRight,
      description: t("sol_graph_description_3"),
      color: "#ffffff",
      border_color: "#E2E8F0",
    },
  ];

  return (
    <div className="relative w-full max-w-6xl mx-auto pb-2">
      <div className="sol-graph-items">
        {nodes.map((item, index) => {
          //   const Icon = item.icon;
          return (
            <div className="graph-item-main" key={index}>
              <div className="graph-item-wrapper">
                <div
                  className="sol-graph-item"
                  style={{
                    backgroundColor: `${item.color}`,
                  }}
                >
                  <p className="item-title text-center">{item.title}</p>
                  <p className="item-description text-center">
                    {item.description}
                  </p>
                </div>
              </div>
                {index === 1 && ( <ArrowDown size={44} color="#3e9392" />)}
            </div>
          );
        })}
      </div>
      <div className="sol-graph-items">
        <ArrowDownRight size={44} color="#3e9392" />
        <ArrowDownLeft size={44} color="#3e9392" />
      </div>
      <div className="sol-graph-block">
        <p className="graph-title">Operator</p>
        <ArrowDown size={44} color="#3e9392"/>
      </div>
      <div className="sol-graph-block">
        <p className="graph-title">Runner Pod</p>
        <ArrowDown size={44} color="#3e9392"/>
      </div>
      <p className="graph-title w-full text-center">EvalRun.status</p>
    </div>
  );
}
