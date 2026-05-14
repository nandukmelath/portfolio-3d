"use client";

import { motion } from "framer-motion";
import { Building2, GraduationCap, MapPin, BadgeCheck } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="relative py-24">
      <div className="mx-auto max-w-6xl px-6 md:px-12">
        <SectionTitle eyebrow="01 — Profile" title="The short version" />

        <div className="mt-10 grid gap-10 lg:grid-cols-5">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            <p className="text-lg leading-relaxed text-slate-300">
              Microsoft Fabric Data Engineer at{" "}
              <span className="text-teal-300">TCS</span> with 2+ years building
              cloud-native data platforms for global banking and asset
              management clients. I take Alteryx-heavy, legacy BI estates and
              turn them into governed Fabric Lakehouses that power real-time
              executive reporting.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-slate-300">
              Sole owner of an Alteryx → Microsoft Fabric migration from POC to
              production — delivered{" "}
              <span className="text-amber-300">~£70K annual savings</span> and
              cut a 3-day pipeline cycle to under 6 hours.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-slate-300">
              Outside the day job, I build multi-agent AI systems —{" "}
              <span className="text-teal-300">Kavach</span> (a DPDP compliance
              co-pilot) and autonomous-agent experiments for income-stream
              automation. The same agentic lens shows up in how I design modern
              data platforms.
            </p>
          </motion.div>

          <motion.aside
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-2"
          >
            <div className="glass rounded-2xl p-6">
              <ul className="space-y-4 text-sm">
                <Row
                  icon={<Building2 className="h-4 w-4" />}
                  label="Now"
                  value="Analytics Engineer, TCS · Jul 2024 – Present"
                />
                <Row
                  icon={<MapPin className="h-4 w-4" />}
                  label="Based"
                  value="Bengaluru, India · Open to Remote"
                />
                <Row
                  icon={<BadgeCheck className="h-4 w-4" />}
                  label="Certified"
                  value="DP-700 · PL-300"
                />
                <Row
                  icon={<GraduationCap className="h-4 w-4" />}
                  label="Education"
                  value="B.Tech ECE, CUSAT · 2020 – 2024"
                />
              </ul>
              <div className="mt-6 rounded-xl border border-teal-400/20 bg-teal-400/5 p-4 text-xs leading-relaxed text-teal-200">
                <span className="font-semibold uppercase tracking-[0.18em]">
                  Recognitions
                </span>
                <div className="mt-2 text-slate-300">
                  TCS Top Performer (2025) · Rising Star (2024)
                </div>
              </div>
            </div>
          </motion.aside>
        </div>
      </div>
    </section>
  );
}

function Row({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <li className="flex items-start gap-3">
      <span className="mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-teal-400/10 text-teal-300">
        {icon}
      </span>
      <div>
        <div className="text-[10px] uppercase tracking-[0.2em] text-slate-500">
          {label}
        </div>
        <div className="text-slate-200">{value}</div>
      </div>
    </li>
  );
}

export function SectionTitle({
  eyebrow,
  title,
}: {
  eyebrow: string;
  title: string;
}) {
  return (
    <div>
      <div className="text-xs uppercase tracking-[0.3em] text-teal-300">
        {eyebrow}
      </div>
      <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-5xl">
        {title}
      </h2>
    </div>
  );
}
