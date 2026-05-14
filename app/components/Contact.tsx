"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import { LinkedinIcon as Linkedin, GithubIcon as Github } from "./BrandIcons";
import { SectionTitle } from "./About";

export default function Contact() {
  return (
    <section id="contact" className="relative py-24">
      <div className="mx-auto max-w-6xl px-6 md:px-12">
        <SectionTitle eyebrow="05 — Reach out" title="Let's talk Fabric" />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55 }}
          className="mt-10 grid gap-4 md:grid-cols-2"
        >
          <ContactCard
            icon={<Mail className="h-5 w-5" />}
            label="Email"
            value="nandukannanmelath@gmail.com"
            href="mailto:nandukannanmelath@gmail.com"
          />
          <ContactCard
            icon={<Phone className="h-5 w-5" />}
            label="Phone"
            value="+91 7012293229"
            href="tel:+917012293229"
          />
          <ContactCard
            icon={<Linkedin className="h-5 w-5" />}
            label="LinkedIn"
            value="linkedin.com/in/nandukannanm"
            href="https://www.linkedin.com/in/nandukannanm/"
          />
          <ContactCard
            icon={<Github className="h-5 w-5" />}
            label="GitHub"
            value="github.com/nandukmelath"
            href="https://github.com/nandukmelath"
          />
        </motion.div>

        <div className="mt-12 flex flex-col items-center gap-2 text-xs uppercase tracking-[0.22em] text-slate-500">
          <div className="inline-flex items-center gap-2">
            <MapPin className="h-3.5 w-3.5" /> Bengaluru, India · Notice ≤ 30 days
          </div>
          <div className="mt-2 text-slate-600">
            © {new Date().getFullYear()} Nandu Kannan M. Built with Next.js,
            React Three Fiber, and Tailwind.
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactCard({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href: string;
}) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      className="group flex items-center gap-4 rounded-2xl border border-slate-800 bg-slate-900/40 p-5 transition hover:border-teal-400/40 hover:bg-slate-900/70"
    >
      <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-teal-400/10 text-teal-300">
        {icon}
      </span>
      <div className="min-w-0 flex-1">
        <div className="text-[10px] uppercase tracking-[0.22em] text-slate-500">
          {label}
        </div>
        <div className="truncate text-slate-200 group-hover:text-teal-300">
          {value}
        </div>
      </div>
    </a>
  );
}
