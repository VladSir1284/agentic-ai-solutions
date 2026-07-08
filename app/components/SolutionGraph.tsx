"use client";

import { useLanguage } from "./LanguageContext";
import { Fragment } from "react";
import "./../assets/styles/graph.css";
import "./../assets/styles/sol_graph.css";
import Xarrow from "react-xarrows";

interface Node {
  id: string;
  title: string;
  description: string;
  color: string;
  border_color: string;
  text: string;
}

export function SolutionGraph() {
  const { t } = useLanguage();

  const nodes: Node[] = [
    {
      id: "start_1",
      title: t("sol_graph_title_1"),
      description: t("sol_graph_description_1"),
      color: "#BFDBFE",
      border_color: "#bfdbfe",
      text: "<p>kind: EvalDataset</p> <p>metadata: name: dataset</p> <p>spec: source:'s3://server/buckets/'</p>",
    },
    {
      id: "start_2",
      title: t("sol_graph_title_2"),
      description: t("sol_graph_description_2"),
      color: "#DDD6FE",
      border_color: "#E2E8F0",
      text: "<p>kind: EvalSuite</p> <p>metadata:</br> name: suite</p> <p>spec: datasetRef: name: dataset</p> <p>metrics: generation.minFaithfulness: 0.80...</p>",
    },
    {
      id: "start_3",
      title: t("sol_graph_title_3"),
      description: t("sol_graph_description_3"),
      color: "#FED7AA",
      border_color: "#E2E8F0",
      text: "<p>kind: EvalDataset</p> <p>metadata:</br> name: dataset</p> <p>spec: source:'s3://server/buckets/'</p>",
    },
  ];

  return (
    <div className="relative w-full max-w-6xl mx-auto mt-10 py-2 sol-graph-wrapper">
      <div className="sol-graph-items">
        {nodes.map((item) => (
          <Fragment key={item.id}>
            <div
              className="sol-graph-item"
              id={item.id}
              style={{
                backgroundColor: item.color,
              }}
            >
              <p className="item-title">{item.title}</p>
              <p className="item-description">{item.description}</p>
              <div className="sol-graph-item-code">
                <code dangerouslySetInnerHTML={{ __html: item.text }} />
              </div>
            </div>

            <Xarrow start={item.id} end="second" color="grey" strokeWidth={2} />
          </Fragment>
        ))}
      </div>
      <div className="flex items-center justify-center mt-12">
        <div className="sol-graph-second" id="second">
          <p className="item-title">Decision core</p>
          <p className="item-description">
            Turns scores into release decisions
          </p>
        </div>
      </div>
      <Xarrow start="second" end="third" color="grey" strokeWidth={2} />
      <div className="flex items-center justify-center mt-12">
        <div className="sol-graph-third" id="third">
          <p className="item-title">Decision core</p>
          <p className="item-description">
            Turns scores into release decisions
          </p>
          <div className="sol-graph-item-code">
            <code>
              <p style={{ color: "#166534" }}>verdict: PASS | FAIL</p>
              <p style={{ color: "#166534" }}>rootCause.stage: Policy</p>
              <p style={{ color: "#166534" }}>artifacts.summaryUri: s3://..</p>
            </code>
          </div>
        </div>
      </div>
    </div>
  );
}
