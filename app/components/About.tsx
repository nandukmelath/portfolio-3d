"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="relative py-28 md:py-36">
      <div className="mx-auto grid max-w-6xl grid-cols-12 gap-10 px-6 md:px-10">
        <motion.aside
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="col-span-12 lg:col-span-3"
        >
          <SectionLabel num="00" label="Profile" />
        </motion.aside>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.08 }}
          className="col-span-12 lg:col-span-9"
        >
          <p className="font-serif text-2xl leading-[1.4] tracking-tight text-zinc-100 md:text-[28px] md:leading-[1.35]">
            Two jobs, one mind. Day one is a Fabric Lakehouse on OneLake for a
            bank that still ran on Alteryx last quarter. Day two is a
            multi-agent system I built on a Saturday because I wanted to see if
            five small agents could outrun one big prompt.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-x-12 gap-y-6 text-[15px] leading-relaxed text-zinc-400 md:grid-cols-2">
            <div>
              <div className="mb-3 font-mono text-[11px] uppercase tracking-[0.22em] text-emerald-300">
                / day job
              </div>
              <p>
                Microsoft Fabric Data Engineer at TCS. Led an Alteryx → Fabric
                migration end-to-end — POC through production, sole owner.
                Bronze / Silver / Gold in OneLake; PySpark notebooks crunching
                10M+ rows a day; Power BI semantic models the C-suite can read
                without a briefing. ~£70K annual savings, three-day pipelines
                down to under six hours.
              </p>
            </div>
            <div>
              <div className="mb-3 font-mono text-[11px] uppercase tracking-[0.22em] text-emerald-300">
                / night job (for fun)
              </div>
              <p>
                I build multi-agent AI systems on the side.{" "}
                <span className="text-zinc-200">Kavach</span>, a DPDP compliance
                co-pilot, hands tasks between specialist agents and a reviewer
                agent before anything ships. The same agentic lens — tools,
                contracts, handoffs — shows up in how I design modern data
                platforms.
              </p>
            </div>
          </div>

          <dl className="mt-12 grid grid-cols-2 gap-y-3 border-t border-[#1f1f22] pt-6 font-mono text-[12px] md:grid-cols-4">
            <Row label="Now" value="Analytics Engineer · TCS · Jul 2024 –" />
            <Row label="Based" value="Bengaluru, IN" />
            <Row label="Education" value="B.Tech ECE · CUSAT · 2020 – 24" />
            <Row label="Recognised" value="TCS Top Performer 2025" />
          </dl>
        </motion.div>
      </div>
    </section>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="text-[10px] uppercase tracking-[0.2em] text-zinc-600">
        {label}
      </dt>
      <dd className="mt-1 text-zinc-300">{value}</dd>
    </div>
  );
}

export function SectionLabel({
  num,
  label,
}: {
  num: string;
  label: string;
}) {
  return (
    <div className="sticky top-24 hidden flex-col gap-3 font-mono text-[11px] uppercase tracking-[0.22em] lg:flex">
      <div className="flex items-center gap-3 text-zinc-500">
        <span className="text-emerald-300">{num}</span>
        <span className="h-px w-12 bg-[#2a2a2e]" />
      </div>
      <div className="text-zinc-300">{label}</div>
    </div>
  );
}
