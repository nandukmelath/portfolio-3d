"use client";

import { useEffect, useState } from "react";

const links = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Work" },
  { href: "#skills", label: "Stack" },
  { href: "#certs", label: "Certs" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 transition ${
        scrolled
          ? "border-b border-slate-800/60 bg-[#05070d]/80 backdrop-blur-md"
          : "border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6 md:px-12">
        <a href="#top" className="group inline-flex items-center gap-2">
          <span className="inline-flex h-7 w-7 items-center justify-center rounded-lg bg-teal-400 text-xs font-bold text-slate-950 transition group-hover:rotate-12">
            NK
          </span>
          <span className="text-sm font-medium tracking-tight text-slate-200">
            Nandu Kannan M
          </span>
        </a>
        <ul className="hidden items-center gap-7 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm text-slate-400 transition hover:text-teal-300"
              >
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="mailto:nandukannanmelath@gmail.com"
              className="inline-flex items-center gap-2 rounded-full bg-teal-400 px-4 py-1.5 text-xs font-semibold text-slate-950 transition hover:bg-teal-300"
            >
              Hire me
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
