"use client";

import { motion } from "framer-motion";

const stats = [
  { big: "£70K", small: "annual savings delivered" },
  { big: "10M+", small: "records processed / day" },
  { big: "3d → 6h", small: "pipeline cycle cut" },
  { big: "50+", small: "stakeholders served" },
  { big: "10+", small: "ETL workflows migrated" },
];

export default function Stats() {
  return (
    <section className="relative border-y border-slate-800/60 bg-gradient-to-r from-teal-500/10 via-transparent to-amber-500/10 py-10">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-6 md:grid-cols-5 md:px-12">
        {stats.map((s, i) => (
          <motion.div
            key={s.small}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: i * 0.07 }}
            className="text-center md:text-left"
          >
            <div className="bg-gradient-to-r from-teal-300 to-amber-300 bg-clip-text text-3xl font-bold tracking-tight text-transparent md:text-4xl">
              {s.big}
            </div>
            <div className="mt-1 text-xs uppercase tracking-[0.18em] text-slate-400">
              {s.small}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
