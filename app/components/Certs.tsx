"use client";

import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";
import { SectionTitle } from "./About";

const certs = [
  {
    code: "DP-700",
    title: "Microsoft Certified: Fabric Data Engineer Associate",
    issuer: "Microsoft",
    color: "from-teal-400/40 to-emerald-400/10",
  },
  {
    code: "PL-300",
    title: "Microsoft Certified: Power BI Data Analyst Associate",
    issuer: "Microsoft",
    color: "from-amber-400/40 to-yellow-400/10",
  },
];

export default function Certs() {
  return (
    <section id="certs" className="relative py-24">
      <div className="mx-auto max-w-6xl px-6 md:px-12">
        <SectionTitle eyebrow="04 — Credentials" title="Microsoft certified" />

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {certs.map((c, i) => (
            <motion.div
              key={c.code}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="group relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/40 p-8"
            >
              <div
                className={`absolute -inset-px -z-10 bg-gradient-to-br ${c.color} opacity-60`}
              />
              <div className="flex items-start gap-5">
                <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-950/80 text-teal-300 ring-1 ring-teal-400/30">
                  <ShieldCheck className="h-7 w-7" />
                </div>
                <div>
                  <div className="text-3xl font-bold tracking-tight text-slate-100">
                    {c.code}
                  </div>
                  <div className="mt-1 text-slate-300">{c.title}</div>
                  <div className="mt-2 text-xs uppercase tracking-[0.2em] text-slate-500">
                    {c.issuer}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
