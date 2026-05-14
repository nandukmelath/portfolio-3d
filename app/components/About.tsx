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
            I&apos;ve spent the last two years inside global banking and asset
            management estates — the kind where an Alteryx workflow is older
            than the analyst running it. My job is to rebuild that on Microsoft
            Fabric without breaking the report it&apos;s currently feeding.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-x-12 gap-y-6 text-[15px] leading-relaxed text-zinc-400 md:grid-cols-2">
            <p>
              At TCS I led an Alteryx → Fabric migration end-to-end — POC
              through production, sole owner. Bronze, Silver, Gold in OneLake;
              PySpark notebooks processing 10M+ rows a day; Power BI semantic
              models the C-suite can read without a briefing. ~£70K annual
              savings, pipeline cycle cut from three days to under six hours.
            </p>
            <p>
              Outside work I build multi-agent AI systems. The most useful one,{" "}
              <span className="text-zinc-200">Kavach</span>, is a DPDP
              compliance co-pilot that hands tasks between specialist agents and
              a reviewer agent. The agentic lens shows up in how I design data
              platforms — tools, contracts, handoffs.
            </p>
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
