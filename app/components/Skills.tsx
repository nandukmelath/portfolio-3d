"use client";

import { motion } from "framer-motion";
import { SectionTitle } from "./About";

const groups = [
  {
    title: "Microsoft Fabric",
    color: "text-teal-300",
    items: [
      "OneLake",
      "Lakehouse",
      "Warehouse",
      "Dataflows Gen2",
      "Data Pipelines",
      "Notebooks",
      "Real-Time Analytics",
      "Medallion (Bronze/Silver/Gold)",
    ],
  },
  {
    title: "Data Engineering",
    color: "text-amber-300",
    items: [
      "PySpark",
      "Delta Lake",
      "Spark SQL",
      "Apache Spark",
      "ETL / ELT",
      "Data Modelling",
      "Star Schema",
      "Performance Tuning",
    ],
  },
  {
    title: "Azure",
    color: "text-sky-300",
    items: [
      "Azure Data Factory",
      "ADLS Gen2",
      "Synapse",
      "Azure DevOps",
      "CI/CD",
      "Microsoft Azure",
    ],
  },
  {
    title: "BI & Analytics",
    color: "text-rose-300",
    items: [
      "Power BI",
      "DAX",
      "Power BI Semantic Models",
      "Row-Level Security",
      "Business Intelligence",
      "Data Warehousing",
    ],
  },
  {
    title: "Languages",
    color: "text-violet-300",
    items: ["Python", "SQL", "T-SQL", "Git", "Alteryx (migration)"],
  },
  {
    title: "AI (side hobby)",
    color: "text-fuchsia-300",
    items: [
      "AI Agents",
      "Agentic AI",
      "Multi-Agent Systems",
      "LangChain",
      "LangGraph",
      "LLM Engineering",
      "RAG",
      "Generative AI",
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="relative py-24">
      <div className="mx-auto max-w-6xl px-6 md:px-12">
        <SectionTitle eyebrow="03 — Stack" title="What I build with" />

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {groups.map((g, i) => (
            <motion.div
              key={g.title}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="glass rounded-2xl p-6"
            >
              <div
                className={`text-xs uppercase tracking-[0.2em] ${g.color}`}
              >
                {g.title}
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {g.items.map((it) => (
                  <span
                    key={it}
                    className="rounded-full border border-slate-700/80 bg-slate-900/60 px-3 py-1 text-xs text-slate-300"
                  >
                    {it}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
