"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Database, BarChart3, Bot } from "lucide-react";
import { SectionTitle } from "./About";

const projects = [
  {
    icon: <Database className="h-5 w-5" />,
    tag: "Fabric · Lakehouse · PySpark",
    title: "Alteryx → Microsoft Fabric Migration",
    period: "TCS · 2024 – Present",
    body: "Sole owner from POC to production. Migrated 10+ ETL workflows into Fabric Dataflows Gen2 + Notebooks. Architected Bronze → Silver → Gold layers in OneLake. Cut pipeline cycle 3+ days → < 6 hr. Delivered ~£70K annual savings and ~40% ROI uplift.",
    bullets: [
      "PySpark notebooks processing 10M+ records / day",
      "End-to-end Data Pipelines with monitoring & alerting",
      "Data validation, lineage tracking, governance frameworks",
    ],
    accent: "from-teal-400/30 to-emerald-400/10",
  },
  {
    icon: <BarChart3 className="h-5 w-5" />,
    tag: "Power BI · DAX · RLS",
    title: "Enterprise Power BI Transformation",
    period: "TCS · Asset Management Client",
    body: "Led end-to-end Power BI transformation unifying 6+ disparate sources into a single reporting layer. Rationalised and redesigned executive dashboards — usability and load performance up 60%. RLS governance framework for enterprise-grade access control.",
    bullets: [
      "Advanced DAX KPI frameworks for 50+ stakeholders",
      "Star-schema semantic models, optimised for Power BI",
      "Dashboards drove C-suite and board-level decisions",
    ],
    accent: "from-amber-400/30 to-yellow-400/10",
  },
  {
    icon: <Bot className="h-5 w-5" />,
    tag: "AI · Multi-agent · Side build",
    title: "Kavach — DPDP Compliance Co-pilot",
    period: "Side project",
    body: "Multi-agent system that helps Indian product teams stay DPDP-compliant. Specialist agents reason over privacy notices, data flows, and breach playbooks, then hand off to a reviewer agent for sign-off. Same agentic lens applied to autonomous-agent income experiments.",
    bullets: [
      "LangGraph orchestration, tool-using agents",
      "RAG over DPDP Act + DPB rules",
      "Reviewer-agent loop for compliance sign-off",
    ],
    accent: "from-fuchsia-400/30 to-purple-400/10",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-24">
      <div className="mx-auto max-w-6xl px-6 md:px-12">
        <SectionTitle eyebrow="02 — Work" title="Things I've shipped" />

        <div className="mt-12 space-y-6">
          {projects.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.55, delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-3xl border border-slate-800/80 bg-slate-900/40 p-8 transition hover:border-teal-400/40"
            >
              <div
                className={`absolute -inset-px -z-10 bg-gradient-to-br ${p.accent} opacity-0 transition group-hover:opacity-100`}
              />
              <div className="flex flex-col gap-6 md:flex-row md:items-start md:gap-10">
                <div className="md:w-56 shrink-0">
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-teal-400/10 text-teal-300">
                    {p.icon}
                  </div>
                  <div className="mt-4 text-[11px] uppercase tracking-[0.22em] text-slate-400">
                    {p.tag}
                  </div>
                  <div className="mt-2 text-sm text-slate-500">{p.period}</div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold tracking-tight md:text-2xl">
                    {p.title}
                    <ArrowUpRight className="ml-1 inline h-5 w-5 text-slate-500 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-teal-300" />
                  </h3>
                  <p className="mt-3 text-slate-300">{p.body}</p>
                  <ul className="mt-4 space-y-1.5">
                    {p.bullets.map((b) => (
                      <li
                        key={b}
                        className="flex items-start gap-2 text-sm text-slate-400"
                      >
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-teal-300" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
