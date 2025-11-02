"use client";

import { useState, ReactNode } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Github,
  Linkedin,
  ExternalLink,
  Download,
  CheckCircle,
  Code2,
  Rocket,
  Wrench,
} from "lucide-react";

/**
 * Chris Merino — Portfolio (single-file React component)
 *
 * How to use:
 * - Replace the data in `PROFILE`, `SKILLS`, and `PROJECTS` with your own.
 * - Drop a PDF resume at /public/resume.pdf (or update the link).
 * - Put your certificate at /public/certificates/ztm-cwd-2025.pdf (or update below).
 * - Use as app/page.tsx in a Next.js project. Deploy to Vercel.
 */

const PROFILE = {
  name: "Chris Merino",
  title: "Frontend / Full-Stack Web Developer",
  taglines: [
    "React • Next.js • TypeScript • JavaScript • Node",
    "Clean UI, solid architecture, and real-world results",
  ],
  location: "Miami, FL (open to remote)",
  email: "chrismerino.dev@gmail.com",
  github: "https://github.com/ChrisMerinoDev",
  linkedin: "https://www.linkedin.com/in/chrismerinodev",
  resumeUrl: "/ChrisM-Resume.pdf",
};

const SKILLS: { group: string; items: string[] }[] = [
  {
    group: "Core Web",
    items: [
      "HTML5",
      "CSS3 / Tailwind",
      "Responsive Design",
      "Accessibility",
      "JavaScript",
      "TypeScript",
    ],
  },
  {
    group: "Frontend",
    items: [
      "React",
      "Next.js",
      "State: Zustand / Context",
      "Forms & Validation",
      "ShadCN UI",
      "Framer Motion",
    ],
  },
  {
    group: "Backend",
    items: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "Auth (JWT, Supabase)",
      "MongoDB / PostgreSQL basics",
      "Stripe basics",
    ],
  },
  {
    group: "Workflow",
    items: [
      "Git & GitHub",
      "CI/CD (Vercel)",
      "Testing fundamentals",
      "Problem Solving",
      "Agile & PR reviews",
      "Performance & SEO basics",
    ],
  },
];

const PROJECTS: {
  title: string;
  description: string;
  tags: string[];
  href?: string;
  repo?: string;
  deploy?: string[];
}[] = [
  {
    title: "KontentFlowAI",
    description:
      "AI content generator SaaS for creators: 30 days of ideas with captions & hashtags. Free + Pro tiers with Stripe subscriptions.",
    tags: [
      "Next.js",
      "TypeScript",
      "Node",
      "Express",
      "Tailwind",
      "Stripe",
      "Claude AI",
      "SaaS",
      "Supabase"
    ],
    href: "https://www.kontentflowai.com",
    // TODO: add repo once you share it
    deploy: ["Frontend: Vercel", "Backend: Railway"],
  },
  {
    title: "SmartBrain — Face Recognition App",
    description:
      "Full-stack face detection app using Clarifai API. Users can sign up, sign in, and detect faces on submitted images.",
    tags: ["React", "Node", "Express", "PostgreSQL", "Clarifai API"],
    href: "https://smartbrain-facerecognition-app.onrender.com/",
    // TODO: add repo if public
    deploy: ["Full-stack: Render"],
  },
  {
    title: "Portfolio Website (This Site)",
    description:
      "My live portfolio built with React/Next.js + Tailwind + Framer Motion. Deployed on Vercel.",
    tags: ["Next.js", "React", "Tailwind", "Framer Motion"],
    // Add your live link after deployment
    deploy: ["Frontend: Vercel"],
  },
];

type SectionProps = {
  id: string;
  title: string;
  children: ReactNode;
};

const Section = ({ id, title, children }: SectionProps) => (
  <section id={id} className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
    <div className="flex items-center gap-3 mb-8">
      <div className="h-8 w-1.5 rounded `bg-gradient-to-b` from-indigo-500 to-sky-400" />
      <h2 className="text-2xl md:text-3xl font-bold tracking-tight">{title}</h2>
    </div>
    {children}
  </section>
);

const Pill = ({ children }: { children: ReactNode }) => (
  <span className="inline-flex items-center rounded-full border px-3 py-1 text-sm leading-6 backdrop-blur-sm bg-white/5 border-white/10">
    {children}
  </span>
);

const Card = ({ children }: { children: ReactNode }) => (
  <div className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-sm hover:shadow transition-shadow">
    {children}
  </div>
);

export default function Portfolio() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PROFILE.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      // no-op
    }
  };

  return (
    <div className="min-h-screen `bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))]` from-slate-900 via-slate-950 to-black text-slate-100">
      {/* NAV */}
      <header className="sticky top-0 z-30 backdrop-blur `supports-[backdrop-filter]:bg-slate-900/60` border-b border-white/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <a href="#home" className="font-semibold tracking-tight">
            {PROFILE.name}
          </a>
          <nav className="hidden md:flex gap-6 text-sm">
            <a href="#projects" className="hover:text-white/80">
              Projects
            </a>
            <a href="#skills" className="hover:text-white/80">
              Skills
            </a>
            <a href="#certs" className="hover:text-white/80">
              Certificates
            </a>
            <a href="#contact" className="hover:text-white/80">
              Contact
            </a>
          </nav>
          <div className="flex items-center gap-3">
            <a
              href={PROFILE.github}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-xl hover:bg-white/10"
            >
              <Github size={18} />
            </a>
            <a
              href={PROFILE.linkedin}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-xl hover:bg-white/10"
            >
              <Linkedin size={18} />
            </a>
          </div>
        </div>
      </header>

      {/* HERO & SECTIONS */}
      <main id="home" className="relative">
        {/* HERO */}
        <Section id="hero" title="">
          <div className="grid md:grid-cols-2 gap-6 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-sm uppercase tracking-[0.2em] text-sky-300/80 mb-3">
                {PROFILE.location}
              </p>
              <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
                {PROFILE.title}
              </h1>
              <p className="mt-4 text-slate-300 max-w-xl">
                {PROFILE.taglines[0]} — {PROFILE.taglines[1]}.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <a
                  href={PROFILE.resumeUrl}
                  className="inline-flex items-center gap-2 rounded-2xl px-4 py-2 border border-white/10 bg-white/10 hover:bg-white/15 transition"
                  target="_blank"
                >
                  <Download size={18} /> Download Resume
                </a>
                <a
                  href="#projects"
                  className="inline-flex items-center gap-2 rounded-2xl px-4 py-2 border border-indigo-500/30 `bg-gradient-to-r` from-indigo-600/70 to-sky-500/70 hover:from-indigo-600 hover:to-sky-500"
                >
                  <Rocket size={18} /> View Projects
                </a>
                <button
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-2 rounded-2xl px-4 py-2 border border-white/10 hover:bg-white/10 hover:cursor-pointer"
                >
                  <Mail size={18} /> {copied ? "Email copied!" : "Copy Email"}
                </button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <Card>
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-indigo-600/20 border border-indigo-500/30">
                    <Code2 />
                  </div>
                  <div>
                    <h3 className="font-semibold">What I build</h3>
                    <p className="text-sm text-slate-300 mt-1">
                      Modern, accessible UIs; API-driven apps; clean, type-safe
                      code; and a smooth developer experience.
                    </p>
                  </div>
                </div>
                <div className="mt-4 grid grid-cols-2 gap-2">
                  {["Performance", "Developer Experience", "API Integration", "Security", "UI/UX", "Deployment"].map(
                    (k) => (
                      <Pill key={k}>
                        <CheckCircle className="mr-2" size={14} /> {k}
                      </Pill>
                    )
                  )}
                </div>
              </Card>
            </motion.div>
          </div>
        </Section>

        {/* PROJECTS */}
        <Section id="projects" title="Featured Projects">
          <div className="grid md:grid-cols-3 gap-6">
            {PROJECTS.map((p) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <Card>
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-lg font-semibold tracking-tight">
                        {p.title}
                      </h3>
                      <p className="text-sm text-slate-300 mt-1">
                        {p.description}
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {p.tags.map((t) => (
                      <Pill key={t}>{t}</Pill>
                    ))}
                  </div>
                  {p.deploy && (
                    <div className="flex flex-wrap gap-2 mt-3">
                      {p.deploy.map((d) => (
                        <Pill key={d}>{d}</Pill>
                      ))}
                    </div>
                  )}
                  <div className="mt-5 flex gap-3">
                    {p.href && (
                      <a
                        className="inline-flex items-center gap-1 text-sm underline underline-offset-4 hover:no-underline"
                        href={p.href}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Live <ExternalLink size={14} />
                      </a>
                    )}
                    {p.repo && (
                      <a
                        className="inline-flex items-center gap-1 text-sm underline underline-offset-4 hover:no-underline"
                        href={p.repo}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Repo <Github size={14} />
                      </a>
                    )}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </Section>

        {/* SKILLS */}
        <Section id="skills" title="Skills">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {SKILLS.map((s) => (
              <Card key={s.group}>
                <div className="flex items-center gap-2 mb-3">
                  <Wrench size={18} />
                  <h3 className="font-semibold tracking-tight">{s.group}</h3>
                </div>
                <ul className="text-sm space-y-1 text-slate-300">
                  {s.items.map((i) => (
                    <li key={i} className="flex items-center gap-2">
                      <CheckCircle size={14} className="opacity-80" /> {i}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </Section>

        {/* CERTIFICATES */}
        <Section id="certs" title="Certificates">
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <h3 className="font-semibold">
                ZTM — Complete Web Developer in 2025
              </h3>
              <p className="text-sm text-slate-300 mt-1">
                Certificate of Completion — Practical foundations across web
                fundamentals, frontend, backend basics, and career preparation.
              </p>
              <div className="mt-4 space-y-3">
                {/* Put your PDF at /public/certificates/ztm-cwd-2025.pdf */}
                <div className="rounded-xl overflow-hidden border border-white/10">
                  <iframe
                    src="/certificates/ztm-cwd-2025.pdf#view=FitH"
                    className="w-full h-64 md:h-80"
                    title="ZTM Certificate"
                  />
                </div>
                <div className="flex gap-3">
                  <a
                    className="inline-flex items-center gap-2 rounded-xl px-3 py-2 border border-white/10 hover:bg-white/10"
                    href="/certificates/ztm-cwd-2025.pdf"
                    target="_blank"
                    rel="noreferrer"
                  >
                    View PDF <ExternalLink size={16} />
                  </a>
                </div>
              </div>
            </Card>
          </div>
        </Section>

        {/* CONTACT */}
        <Section id="contact" title="Get in touch">
          <Card>
            <div className="grid md:grid-cols-2 gap-6 items-center">
              <div>
                <h3 className="font-semibold">Let&apos;s build something people love.</h3>
                <p className="text-sm text-slate-300 mt-1">
                  I&apos;m actively applying for frontend and full-stack roles.
                  If you&apos;re hiring, I&apos;d love to chat.
                </p>
                <div className="mt-4 flex flex-wrap gap-3">
                  <a
                    href={`mailto:${PROFILE.email}`}
                    className="inline-flex items-center gap-2 rounded-xl px-3 py-2 border border-white/10 hover:bg-white/10"
                  >
                    <Mail size={16} /> Email me
                  </a>
                  <a
                    href={PROFILE.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl px-3 py-2 border border-white/10 hover:bg-white/10"
                  >
                    <Github size={16} /> GitHub
                  </a>
                  <a
                    href={PROFILE.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl px-3 py-2 border border-white/10 hover:bg-white/10"
                  >
                    <Linkedin size={16} /> LinkedIn
                  </a>
                </div>
              </div>
              <form
                className="space-y-3"
                onSubmit={(e) => {
                  e.preventDefault();
                  const data = new FormData(e.currentTarget as HTMLFormElement);
                  const subject = encodeURIComponent(
                    `Portfolio inquiry from ${data.get("name")}`
                  );
                  const body = encodeURIComponent(
                    `${data.get("message")}\n\nFrom: ${data.get("name")} — ${data.get(
                      "email"
                    )}`
                  );
                  window.location.href = `mailto:${PROFILE.email}?subject=${subject}&body=${body}`;
                }}
              >
                <div>
                  <label className="text-sm">Name</label>
                  <input
                    name="name"
                    required
                    className="mt-1 w-full rounded-xl bg-white/5 border border-white/10 p-2.5 outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>
                <div>
                  <label className="text-sm">Email</label>
                  <input
                    name="email"
                    type="email"
                    required
                    className="mt-1 w-full rounded-xl bg-white/5 border border-white/10 p-2.5 outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>
                <div>
                  <label className="text-sm">Message</label>
                  <textarea
                    name="message"
                    rows={4}
                    required
                    className="mt-1 w-full rounded-xl bg-white/5 border border-white/10 p-2.5 outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 rounded-2xl px-4 py-2 border border-indigo-500/30 `bg-gradient-to-r` from-indigo-600/70 to-sky-500/70 hover:from-indigo-600 hover:to-sky-500"
                >
                  <Rocket size={16} /> Send
                </button>
              </form>
            </div>
          </Card>
        </Section>
      </main>

      {/* FOOTER */}
      <footer className="border-t border-white/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-sm text-slate-400 flex flex-col md:flex-row items-center justify-between gap-3">
          <p>
            © {new Date().getFullYear()} {PROFILE.name}. Built with React +
            Tailwind.
          </p>
          <div className="flex items-center gap-3">
            <a href="#home" className="underline underline-offset-4">
              Back to top
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
