"use client";

import { motion } from "framer-motion";
import { asset } from "../lib/asset";

export default function Hero() {
  return (
    <section className="relative min-h-[100svh] overflow-hidden">
      {/* dot grid backdrop */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.18]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(rgba(231,229,228,0.5) 1px, transparent 1px)",
            backgroundSize: "26px 26px",
            maskImage:
              "radial-gradient(ellipse 70% 50% at 60% 40%, black 0%, transparent 70%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 70% 50% at 60% 40%, black 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="mx-auto grid min-h-[100svh] max-w-6xl grid-cols-12 items-center gap-10 px-6 pt-32 pb-20 md:px-10 md:pt-36">
        {/* Left — text */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.2, 0.7, 0.2, 1] }}
          className="relative z-10 col-span-12 lg:col-span-7"
        >
          <div className="mb-8 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.22em] text-zinc-500">
            <span className="inline-block h-px w-8 bg-zinc-700" />
            Available · Bengaluru / Remote
          </div>

          <h1 className="font-serif text-[clamp(2.4rem,5.8vw,4.4rem)] font-medium leading-[1.04] tracking-tight text-zinc-50">
            Data engineer by trade,
            <br />
            <em className="not-italic text-emerald-200/95">
              agent-wrangler on weekends.
            </em>
          </h1>

          <p className="mt-8 max-w-xl text-[15px] leading-relaxed text-zinc-400">
            I&apos;m{" "}
            <span className="text-zinc-100">Nandu Kannan M</span>. By day I
            build Microsoft Fabric Lakehouses for global banking and asset
            management clients at TCS — PySpark, OneLake, Power BI, the whole
            thing. By night I build{" "}
            <span className="text-zinc-100">multi-agent AI systems</span> for
            fun, then quietly fold what works into the day job.
          </p>

          <dl className="mt-10 grid max-w-md grid-cols-3 gap-x-6 gap-y-1 border-t border-[#1f1f22] pt-6 font-mono text-[11px]">
            <Meta label="Day job" value="Fabric DE · TCS" />
            <Meta label="Night job" value="Agentic AI · for fun" />
            <Meta label="Certs" value="DP-700 · PL-300" />
          </dl>

          <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm">
            <a
              href="#work"
              className="group inline-flex items-center gap-3 text-zinc-100"
            >
              <span className="underline-soft">Selected work</span>
              <span className="font-mono text-emerald-300 transition-transform group-hover:translate-x-0.5">
                →
              </span>
            </a>
            <a
              href="mailto:nandukannanmelath@gmail.com"
              className="text-zinc-400 underline-soft hover:text-zinc-100"
            >
              nandukannanmelath@gmail.com
            </a>
          </div>
        </motion.div>

        {/* Right — cartoon sprite, blended into page */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.2, 0.7, 0.2, 1] }}
          className="relative z-10 col-span-12 lg:col-span-5"
        >
          <div className="relative mx-auto w-full max-w-[420px] lg:ml-auto">
            {/* soft mint wash behind figure, blends into hero bg */}
            <div className="pointer-events-none absolute left-1/2 top-[18%] h-[55%] w-[80%] -translate-x-1/2 rounded-[50%] bg-emerald-300/[0.07] blur-3xl" />

            {/* grounding shadow */}
            <div className="pointer-events-none absolute inset-x-12 bottom-[6%] h-4 rounded-[50%] bg-black/55 blur-md" />

            <img
              src={asset("/cartoon-avatar.png")}
              alt="Nandu Kannan M"
              className="pointer-events-none relative block h-auto w-full select-none drop-shadow-[0_24px_40px_rgba(0,0,0,0.55)]"
              draggable={false}
            />
          </div>
        </motion.div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-5 flex justify-center font-mono text-[10px] uppercase tracking-[0.3em] text-zinc-600">
        scroll
      </div>
    </section>
  );
}

function Meta({ label, value }: { label: string; value: string }) {
  return (
    <>
      <dt className="text-[10px] uppercase tracking-[0.18em] text-zinc-600">
        {label}
      </dt>
      <dd className="col-span-2 text-zinc-200">{value}</dd>
    </>
  );
}
