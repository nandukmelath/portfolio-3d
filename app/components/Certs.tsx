"use client";

import { motion } from "framer-motion";
import { SectionLabel } from "./About";

const certs = [
  {
    code: "DP-700",
    title: "Microsoft Certified: Fabric Data Engineer Associate",
    issuer: "Microsoft",
  },
  {
    code: "PL-300",
    title: "Microsoft Certified: Power BI Data Analyst Associate",
    issuer: "Microsoft",
  },
];

export default function Certs() {
  return (
    <section id="certs" className="relative py-28 md:py-36">
      <div className="mx-auto grid max-w-6xl grid-cols-12 gap-10 px-6 md:px-10">
        <aside className="col-span-12 lg:col-span-3">
          <SectionLabel num="03" label="Credentials" />
        </aside>

        <div className="col-span-12 lg:col-span-9">
          <ul className="divide-y divide-[#1f1f22]">
            {certs.map((c, i) => (
              <motion.li
                key={c.code}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.45, delay: i * 0.05 }}
                className="grid grid-cols-12 gap-6 py-7"
              >
                <div className="col-span-12 md:col-span-3">
                  <div className="font-serif text-3xl tracking-tight text-zinc-50">
                    {c.code}
                  </div>
                  <div className="mt-1 font-mono text-[11px] uppercase tracking-[0.2em] text-zinc-500">
                    {c.issuer}
                  </div>
                </div>
                <div className="col-span-12 self-center text-zinc-300 md:col-span-9">
                  {c.title}
                </div>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
