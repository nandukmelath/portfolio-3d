"use client";

import { motion } from "framer-motion";
import { SectionLabel } from "./About";

const channels = [
  { label: "Email", value: "nandukannanmelath@gmail.com", href: "mailto:nandukannanmelath@gmail.com" },
  { label: "Phone", value: "+91 7012293229", href: "tel:+917012293229" },
  { label: "LinkedIn", value: "linkedin.com/in/nandukannanm", href: "https://www.linkedin.com/in/nandukannanm/" },
  { label: "GitHub", value: "github.com/nandukmelath", href: "https://github.com/nandukmelath" },
];

export default function Contact() {
  return (
    <section id="contact" className="relative pt-28 pb-20 md:pt-36">
      <div className="mx-auto grid max-w-6xl grid-cols-12 gap-10 px-6 md:px-10">
        <aside className="col-span-12 lg:col-span-3">
          <SectionLabel num="04" label="Contact" />
        </aside>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="col-span-12 lg:col-span-9"
        >
          <h2 className="max-w-2xl font-serif text-4xl leading-[1.1] tracking-tight text-zinc-50 md:text-5xl">
            Need someone who can{" "}
            <em className="not-italic text-emerald-200/95">
              own a Fabric build end-to-end
            </em>{" "}
            and bring an agentic instinct with them?
          </h2>
          <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-zinc-400">
            Open to Microsoft Fabric DE, Analytics Engineer, and Azure DE roles
            in Bengaluru or fully remote. Notice ≤ 30 days. India and
            international onsite client travel is fine.
          </p>

          <ul className="mt-12 divide-y divide-[#1f1f22] border-y border-[#1f1f22]">
            {channels.map((c) => (
              <li key={c.label}>
                <a
                  href={c.href}
                  target={c.href.startsWith("http") ? "_blank" : undefined}
                  rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="group flex items-center justify-between py-5 transition hover:pl-2"
                >
                  <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-zinc-500">
                    {c.label}
                  </span>
                  <span className="flex items-center gap-3 text-zinc-200">
                    <span className="underline-soft">{c.value}</span>
                    <span className="font-mono text-emerald-300 transition-transform group-hover:translate-x-1">
                      →
                    </span>
                  </span>
                </a>
              </li>
            ))}
          </ul>

          <footer className="mt-16 flex flex-col items-start justify-between gap-3 font-mono text-[10px] uppercase tracking-[0.22em] text-zinc-600 md:flex-row md:items-center">
            <span>© {new Date().getFullYear()} Nandu Kannan M</span>
            <span>Built · Next.js · R3F · Tailwind</span>
          </footer>
        </motion.div>
      </div>
    </section>
  );
}
