"use client";

import { motion } from "framer-motion";
import { SectionLabel } from "./About";

const groups: { title: string; items: string[] }[] = [
  {
    title: "Microsoft Fabric",
    items: [
      "OneLake",
      "Lakehouse",
      "Warehouse",
      "Dataflows Gen2",
      "Data Pipelines",
      "Notebooks",
      "Real-Time Analytics",
      "Medallion",
    ],
  },
  {
    title: "Data engineering",
    items: [
      "PySpark",
      "Delta Lake",
      "Spark SQL",
      "ETL / ELT",
      "Data modelling",
      "Star schema",
      "Performance tuning",
    ],
  },
  {
    title: "Azure",
    items: [
      "Azure Data Factory",
      "ADLS Gen2",
      "Synapse",
      "DevOps",
      "CI / CD",
    ],
  },
  {
    title: "Analytics",
    items: [
      "Power BI",
      "DAX",
      "Semantic models",
      "Row-Level Security",
      "Warehousing",
    ],
  },
  {
    title: "Languages",
    items: ["Python", "SQL", "T-SQL", "Git", "Alteryx (legacy)"],
  },
  {
    title: "AI (side hobby)",
    items: [
      "Multi-agent systems",
      "LangGraph",
      "LangChain",
      "LLM engineering",
      "RAG",
    ],
  },
];

export default function Skills() {
  return (
    <section id="stack" className="relative py-28 md:py-36">
      <div className="mx-auto grid max-w-6xl grid-cols-12 gap-10 px-6 md:px-10">
        <aside className="col-span-12 lg:col-span-3">
          <SectionLabel num="02" label="Stack" />
        </aside>

        <div className="col-span-12 lg:col-span-9">
          <dl className="divide-y divide-[#1f1f22]">
            {groups.map((g, i) => (
              <motion.div
                key={g.title}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.45, delay: i * 0.04 }}
                className="grid grid-cols-12 gap-6 py-6"
              >
                <dt className="col-span-12 font-serif text-lg text-zinc-100 md:col-span-3">
                  {g.title}
                </dt>
                <dd className="col-span-12 md:col-span-9">
                  <ul className="flex flex-wrap gap-x-5 gap-y-2 text-[14px] text-zinc-400">
                    {g.items.map((it, idx) => (
                      <li
                        key={it}
                        className={
                          idx === 0
                            ? ""
                            : "before:mr-5 before:text-zinc-700 before:content-['·']"
                        }
                      >
                        {it}
                      </li>
                    ))}
                  </ul>
                </dd>
              </motion.div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
