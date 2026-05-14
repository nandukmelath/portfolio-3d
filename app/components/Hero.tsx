"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";

const Scene3D = dynamic(() => import("./Scene3D"), { ssr: false });

export default function Hero() {
  return (
    <section className="relative min-h-[100svh] overflow-hidden bg-noise">
      <div className="mx-auto grid min-h-[100svh] max-w-6xl grid-cols-12 items-center gap-10 px-6 pt-32 pb-20 md:px-10 md:pt-40">
        {/* Left — text */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.2, 0.7, 0.2, 1] }}
          className="col-span-12 lg:col-span-7"
        >
          <div className="mb-8 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.22em] text-zinc-500">
            <span className="inline-block h-px w-8 bg-zinc-700" />
            Available · Bengaluru / Remote
          </div>

          <h1 className="font-serif text-[clamp(2.5rem,6vw,4.6rem)] font-medium leading-[1.02] tracking-tight text-zinc-50">
            Data platforms that
            <br />
            <em className="not-italic text-emerald-200/90">
              actually finish on time.
            </em>
          </h1>

          <p className="mt-8 max-w-xl text-[15px] leading-relaxed text-zinc-400">
            I&apos;m{" "}
            <span className="text-zinc-100">Nandu Kannan M</span>, a Microsoft
            Fabric Data Engineer at TCS. I take Alteryx-heavy, legacy BI estates
            and turn them into governed Lakehouses on OneLake — the kind that
            executives actually open on Monday morning.
          </p>

          <dl className="mt-10 grid max-w-md grid-cols-3 gap-x-6 gap-y-1 border-t border-[#1f1f22] pt-6 font-mono text-[11px]">
            <Meta label="Role" value="Fabric DE @ TCS" />
            <Meta label="Cert" value="DP-700 · PL-300" />
            <Meta label="Notice" value="≤ 30 days" />
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

        {/* Right — 3D frame */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.2, 0.7, 0.2, 1] }}
          className="col-span-12 lg:col-span-5"
        >
          <figure className="relative aspect-square w-full max-w-[420px] lg:ml-auto">
            <div className="absolute inset-0 rounded-[28px] border border-[#1f1f22] bg-[#0c0c0d]" />
            <div className="absolute inset-0 overflow-hidden rounded-[28px]">
              <Scene3D />
            </div>
            <div className="pointer-events-none absolute inset-px rounded-[27px] ring-1 ring-inset ring-white/5" />
            <figcaption className="absolute -bottom-7 left-0 right-0 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.22em] text-zinc-500">
              <span>fig. 01</span>
              <span>Medallion · Bronze → Silver → Gold</span>
            </figcaption>
          </figure>
        </motion.div>
      </div>

      {/* footer hint */}
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
