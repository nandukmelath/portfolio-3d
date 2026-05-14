"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { ArrowDown, Mail } from "lucide-react";
import { LinkedinIcon as Linkedin, GithubIcon as Github } from "./BrandIcons";

const Scene3D = dynamic(() => import("./Scene3D"), { ssr: false });

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0">
        <Scene3D />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-grid opacity-30" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#05070d]" />

      <div className="relative z-10 flex h-full flex-col justify-end pb-24 md:justify-center md:pb-0">
        <div className="mx-auto w-full max-w-6xl px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="max-w-3xl"
          >
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-teal-400/30 bg-teal-400/5 px-3 py-1 text-xs uppercase tracking-[0.2em] text-teal-300">
              <span className="h-2 w-2 rounded-full bg-teal-400 pulse-ring" />
              Open to Fabric DE roles · Bengaluru / Remote
            </div>
            <h1 className="text-5xl font-bold leading-[1.05] tracking-tight md:text-7xl">
              <span className="block text-slate-100">Nandu Kannan M</span>
              <span className="mt-2 block bg-gradient-to-r from-teal-300 via-teal-400 to-amber-300 bg-clip-text text-transparent glow-teal">
                Microsoft Fabric Data Engineer
              </span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-300 md:text-xl">
              Building governed Lakehouses in OneLake, PySpark pipelines that
              process <span className="text-teal-300">10M+ records / day</span>,
              and Power BI semantic models for global banking &amp; asset
              management clients. Side hobby:{" "}
              <span className="text-amber-300">multi-agent AI systems</span>.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-teal-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-teal-300"
              >
                <span>See the work</span>
                <ArrowDown className="h-4 w-4 transition group-hover:translate-y-0.5" />
              </a>
              <a
                href="mailto:nandukannanmelath@gmail.com"
                className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900/60 px-6 py-3 text-sm font-medium text-slate-200 transition hover:border-teal-400/60 hover:text-teal-300"
              >
                <Mail className="h-4 w-4" /> Hire me
              </a>
              <a
                href="https://www.linkedin.com/in/nandukannanm/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-700 bg-slate-900/60 text-slate-200 transition hover:border-teal-400/60 hover:text-teal-300"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href="https://github.com/nandukmelath"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-700 bg-slate-900/60 text-slate-200 transition hover:border-teal-400/60 hover:text-teal-300"
              >
                <Github className="h-4 w-4" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
