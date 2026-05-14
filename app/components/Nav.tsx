"use client";

import { useEffect, useState } from "react";

const links = [
  { href: "#work", label: "Work", num: "01" },
  { href: "#stack", label: "Stack", num: "02" },
  { href: "#certs", label: "Certs", num: "03" },
  { href: "#contact", label: "Contact", num: "04" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "border-b border-[#1f1f22] bg-[#0a0a0a]/85 backdrop-blur"
          : "border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-6 md:px-10">
        <a
          href="#top"
          className="flex items-baseline gap-2 text-sm tracking-tight text-zinc-200"
        >
          <span className="font-serif text-base">Nandu Kannan M</span>
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-500">
            / fabric&nbsp;de
          </span>
        </a>
        <ul className="hidden items-center gap-7 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="group inline-flex items-baseline gap-1.5 text-[13px] text-zinc-400 transition hover:text-zinc-100"
              >
                <span className="font-mono text-[10px] text-zinc-600 group-hover:text-emerald-300">
                  {l.num}
                </span>
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="mailto:nandukannanmelath@gmail.com"
              className="rounded-full border border-[#2a2a2e] px-3.5 py-1.5 text-xs text-zinc-200 transition hover:border-emerald-300/40 hover:text-emerald-200"
            >
              Get in touch
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
