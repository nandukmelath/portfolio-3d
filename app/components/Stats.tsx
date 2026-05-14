"use client";

import { motion } from "framer-motion";

const stats = [
  { big: "£70K", small: "Annual savings delivered" },
  { big: "10M+", small: "Records processed / day" },
  { big: "3d → 6h", small: "Pipeline cycle cut" },
  { big: "50+", small: "Stakeholders served" },
  { big: "10+", small: "ETL workflows migrated" },
];

export default function Stats() {
  return (
    <section className="border-y border-[#1f1f22] bg-[#0a0a0a]">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div className="grid grid-cols-2 divide-x divide-[#1f1f22] md:grid-cols-5">
          {stats.map((s, i) => (
            <motion.div
              key={s.small}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="px-5 py-10 first:pl-0 last:pr-0 md:px-6"
            >
              <div className="font-serif text-[28px] leading-none tracking-tight text-zinc-50">
                {s.big}
              </div>
              <div className="mt-3 font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-500">
                {s.small}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
