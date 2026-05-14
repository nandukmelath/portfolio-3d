"use client";

import { motion } from "framer-motion";
import { SectionLabel } from "./About";

const projects = [
  {
    year: "2024 — Present",
    client: "Global Banking & Asset Management · TCS",
    title: "Alteryx → Microsoft Fabric migration",
    body:
      "Initiated, scoped, and led the POC. Owned production rollout: 10+ ETL workflows migrated into Fabric Dataflows Gen2 and Notebooks; Bronze → Silver → Gold layers in OneLake; PySpark notebooks processing 10M+ rows / day; pipeline cycle cut from three days to under six hours; ~£70K annual savings.",
    stack: [
      "Microsoft Fabric",
      "OneLake",
      "PySpark",
      "Dataflows Gen2",
      "Delta Lake",
      "Azure DevOps",
    ],
  },
  {
    year: "2023 — 2024",
    client: "Asset Management Client · TCS",
    title: "Enterprise Power BI transformation",
    body:
      "Unified six disparate sources into one reporting layer. Rewrote DAX KPI frameworks for 50+ stakeholders; rebuilt star-schema semantic models; implemented Row-Level Security for enterprise-grade access. Usability and load performance up ~60%; dashboards now drive C-suite and board calls.",
    stack: ["Power BI", "DAX", "RLS", "Star Schema", "Dataflows Gen2"],
  },
  {
    year: "Side build",
    client: "Independent · Multi-agent AI",
    title: "Kavach — DPDP compliance co-pilot",
    body:
      "A multi-agent system for Indian product teams navigating DPDP. Specialist agents reason over privacy notices, data flows, and breach playbooks; a reviewer agent gates the output before it leaves the loop. Same agentic patterns I push into modern data platform design.",
    stack: ["LangGraph", "Multi-agent", "RAG", "Python", "LLM tooling"],
  },
];

export default function Projects() {
  return (
    <section id="work" className="relative py-28 md:py-36">
      <div className="mx-auto grid max-w-6xl grid-cols-12 gap-10 px-6 md:px-10">
        <aside className="col-span-12 lg:col-span-3">
          <SectionLabel num="01" label="Selected work" />
        </aside>

        <div className="col-span-12 lg:col-span-9">
          <ol className="space-y-12 md:space-y-16">
            {projects.map((p, i) => (
              <motion.li
                key={p.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.55, delay: i * 0.05 }}
                className="group relative border-t border-[#1f1f22] pt-8"
              >
                <div className="grid grid-cols-12 gap-6">
                  <div className="col-span-12 md:col-span-3">
                    <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-zinc-500">
                      {p.year}
                    </div>
                    <div className="mt-2 text-[12px] leading-snug text-zinc-500">
                      {p.client}
                    </div>
                  </div>
                  <div className="col-span-12 md:col-span-9">
                    <h3 className="font-serif text-2xl leading-tight tracking-tight text-zinc-50 md:text-[28px]">
                      {p.title}
                    </h3>
                    <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-zinc-400">
                      {p.body}
                    </p>
                    <ul className="mt-5 flex flex-wrap gap-x-4 gap-y-2 font-mono text-[11px] text-zinc-500">
                      {p.stack.map((s) => (
                        <li
                          key={s}
                          className="before:mr-3 before:text-zinc-700 before:content-['/']"
                        >
                          {s}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <span className="pointer-events-none absolute left-0 top-0 h-px w-12 bg-emerald-300/70 opacity-0 transition group-hover:w-24 group-hover:opacity-100" />
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
