import type { ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";
import { useReveal } from "./use-reveal";

function SectionHeading({ index, title, kicker }: { index: string; title: string; kicker: string }) {
  return (
    <div data-reveal className="mb-14 max-w-2xl">
      <p className="mb-3 font-mono text-[11px] tracking-[0.35em] text-primary uppercase">
        {index} — {kicker}
      </p>
      <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2>
    </div>
  );
}

function Section({ id, children }: { id: string; children: ReactNode }) {
  const ref = useReveal<HTMLElement>();
  return (
    <section id={id} ref={ref} className="relative mx-auto max-w-6xl px-6 py-28">
      {children}
    </section>
  );
}

const marqueeItems = [
  "Next.js",
  "React",
  "NestJS",
  "FastAPI",
  "Node.js",
  "Snowflake",
  "Stripe API",
  "GraphQL",
  "Meta Graph API",
  "Leaflet",
  "Turborepo",
  "Docker",
  "AWS",
  "GCP",
  "Git"
];

export function Marquee() {
  return (
    <div className="relative overflow-hidden border-y border-border/60 bg-surface/40 py-5">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-32 bg-[linear-gradient(to_right,var(--background),transparent)]" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-32 bg-[linear-gradient(to_left,var(--background),transparent)]" />
      <div className="flex w-max animate-marquee gap-12">
        {[...marqueeItems, ...marqueeItems].map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="font-mono text-sm tracking-[0.3em] text-muted-foreground uppercase"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

export function About() {
  return (
    <Section id="about">
      <SectionHeading index="01" kicker="About" title="Engineering depth, product focus." />
      <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
        <div data-reveal className="space-y-5 text-base leading-relaxed text-muted-foreground">
          <p>
            I design and build scalable software products across the full development lifecycle - from architecture and backend systems to polished, high-performance user experiences.
          </p>
          <p>
            I enjoy solving complex engineering problems, improving system performance, and building reliable software that can grow with the needs of a business.
          </p>
          <p>
            My work spans web applications, cloud platforms, APIs, data-driven systems, and AI-powered solutions, with a strong focus on clean architecture, maintainability, and production reliability.
          </p>
        </div>
        <ul data-reveal className="panel space-y-4 rounded-xl p-6 font-mono text-sm">
          {[
            ["Location", "Fort Worth · TX 76131"],
            ["Focus", "Product Engineering & Scalable Systems"],
            ["Availability", "Available immediately"],
            ["Response", "Within 24 hours"],
          ].map(([k, v]) => (
            <li key={k} className="flex justify-between gap-4 border-b border-border/50 pb-3 last:border-0">
              <span className="text-muted-foreground">{k}</span>
              <span className="text-right text-foreground">{v}</span>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}

const stack = [
  {
    letter: "N",
    name: "Next.js",
    detail: "Server-side rendering, API routes, authentication, and optimized web performance.",
    level: 98,
  },
  {
    letter: "R",
    name: "React",
    detail: "React 19, TanStack Query & Router, suspense data flow, design systems.",
    level: 97,
  },
  {
    letter: "E",
    name: "Express",
    detail: "REST + RPC services, middleware pipelines, JWT/OAuth, rate limiting, queues.",
    level: 95,
  },
  {
    letter: "N",
    name: "Node.js",
    detail: "Streams, workers, Socket.IO fan-out, Redis caching, observability.",
    level: 94,
  },
];

export function Stack() {
  return (
    <Section id="stack">
      <SectionHeading index="02" kicker="Stack" title="Four letters, one continuous runtime." />
      <div className="grid gap-5 sm:grid-cols-2">
        {stack.map((s) => (
          <article
            key={s.name}
            data-reveal
            className="panel group relative overflow-hidden rounded-xl p-7 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[var(--glow-soft)]"
          >
            <span className="hex-clip absolute -top-6 -right-4 grid size-28 place-items-center bg-primary/10 font-display text-4xl font-bold text-primary/40 transition-transform duration-700 group-hover:rotate-90">
              {s.letter}
            </span>
            <h3 className="font-display text-xl font-semibold">{s.name}</h3>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted-foreground">{s.detail}</p>
            <div className="mt-6 h-1 w-full overflow-hidden rounded-full bg-muted">
              <div
                className="h-full rounded-full bg-[image:var(--gradient-signal)] transition-[width] duration-1000"
                style={{ width: `${s.level}%` }}
              />
            </div>
            <p className="mt-2 font-mono text-[11px] tracking-widest text-muted-foreground">
              {s.level}% depth
            </p>
          </article>
        ))}
      </div>
    </Section>
  );
}

const projects = [
  {
    name: "Paylance",
    url: "https://paylance.com/",
    summary:
      "Built a MERN-based FinTech platform for multi-currency wallets, digital payments, transactions, and secure financial workflows.",
    tags: ["JavaScript", "TypeScript", "React", "Node.js", "Express.js", "MongoDB", "JWT", "Payment Integrations", "API Integration", "Github", "Docker", "AWS"],
    metric: "FENTECH PLATFORM",
  },
  {
    name: "Space ID",
    url: "https://space.id",
    summary:
      "Built an AI-driven crypto intelligence platform with real-time market data, blockchain analytics, and interactive dashboards.",
    tags: ["React", "TypeScript", "Node.js", "Express", "MongoDB", "Redis", "Socket.IO", "Ethers.js", "OpenAI", "AWS"],
    metric: "REAL-TIME ANALYTICS",
  },
  {
    name: "Kalio Commerce",
    url: "https://www.kaliocommerce.com/",
    summary:
      "Built a scalable ecommerce platform for product management, online ordering, and customer transactions.",
    tags: ["React", "TypeScript", "Node.js", "Express", "PostgreSQL", "Redis", "REST APIs", "AWS", "Stripe", "Elasticsearch"],
    metric: "SCALABLE ECOMMERCE",
  },
  {
    name: "Sevocity",
    url: "https://www.sevocity.com/",
    summary:
      "Built a cloud-based EHR platform for managing patient records, clinical workflows, and healthcare operations.",
    tags: ["Vue", "TypeScript", "Node.js", "Express", "PostgreSQL", "Redis", "AWS", "HL7", "FHIR", "REST APIs"],
    metric: "CLINICAL WORKFLOWS",
  },
];

export function Work() {
  return (
    <Section id="work">
      <SectionHeading index="03" kicker="Selected work" title="Systems that stayed in production." />
      <div className="grid gap-5 md:grid-cols-2">
        {projects.map((p) => (
          <article
            key={p.name}
            data-reveal
            className="panel group relative overflow-hidden rounded-xl p-7 transition-all duration-500 hover:-translate-y-1.5 hover:border-primary/40"
          >
            <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 grid-bg" />
            <div className="relative flex items-baseline justify-between gap-4">
              <h3 className="font-display text-2xl font-semibold">{p.name}</h3>
              <a
                href={p.url}
                target="_blank"
                rel="noreferrer"
                aria-label={`Visit ${p.name} website`}
                title={`Visit ${p.name}`}
                className="grid size-9 shrink-0 place-items-center rounded-md border border-border/70 text-muted-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/60 hover:text-primary"
              >
                <ArrowUpRight className="size-4" />
              </a>
            </div>
            <p className="relative mt-4 text-sm leading-relaxed text-muted-foreground">{p.summary}</p>
            <p className="relative mt-5 font-mono text-xs tracking-[0.2em] text-primary uppercase">
              {p.metric}
            </p>
            <ul className="relative mt-5 flex flex-wrap gap-2">
              {p.tags.map((t) => (
                <li
                  key={t}
                  className="rounded-full border border-border/70 px-3 py-1 font-mono text-[11px] text-muted-foreground"
                >
                  {t}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </Section>
  );
}

const timeline = [
  {
    role: "Lead Software Engineer",
    org: "Novatekra",
    period: "2023 — Present",
    text: [
      "Owned the delivery of client-facing web projects from initial requirements and system design through development, quality assurance, and release to production.",
      "Engineered feature-rich e-commerce platforms covering product management, purchasing workflows, and online payments while coordinating with design, product, and engineering stakeholders."
    ],
  },
  {
    role: "Software Engineer",
    org: "Connex Digital",
    period: "2021 — 2023",
    text: [
      "Designed and developed custom integration workflows using JavaScript, REST APIs, Webhooks, and third-party services to connect business applications and automate repetitive operational processes across multiple systems.",
      "Implemented data transformation, validation, error handling, and workflow logic for automated integrations, while debugging API issues and improving reliability, maintainability, and performance of production automation solutions."
    ],
  },
  {
    role: "Software Engineer",
    org: "Teragonia",
    period: "2020 — 2021",
    text: [
      "Developed responsive web applications and data-driven interfaces for analytics and business intelligence solutions, working with React, JavaScript/TypeScript, and modern frontend technologies to present complex operational data in clear, user-friendly dashboards.",
      "Built and integrated backend services and data APIs, working with engineering and analytics teams to connect data sources, implement business logic, troubleshoot integration issues, and improve application reliabiltiy and performance."
    ],
  },
];

export function Path() {
  return (
    <Section id="path">
      <SectionHeading index="04" kicker="Path" title="Where the hours went." />
      <ol className="relative border-l border-border/70 pl-8">
        {timeline.map((t) => (
          <li key={t.role} data-reveal className="relative pb-12 last:pb-0">
            <span className="absolute -left-[41px] top-1.5 grid size-4 place-items-center">
              <span className="absolute size-4 animate-pulse-ring rounded-full bg-primary/50" />
              <span className="size-2 rounded-full bg-primary" />
            </span>
            <p className="font-mono text-[11px] tracking-[0.25em] text-primary uppercase">
              {t.period}
            </p>
            <h3 className="mt-2 font-display text-xl font-semibold">
              {t.role} <span className="text-muted-foreground">· {t.org}</span>
            </h3>
            <ul className="mt-2 max-w-2xl space-y-2">
              {t.text.map((v, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 text-sm leading-relaxed text-muted-foreground"
                >
                  <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  <span>{v}</span>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </Section>
  );
}

const education = [
  {
    degree: "B.S. in Computer Science",
    school: "UF Herbert Wertheim College of Engineering",
    period: "2016 — 2020",
    detail:
      "Focus on distributed systems, databases and software engineering. Graduated with honors.",
  },
];

export function Education() {
  return (
    <Section id="education">
      <SectionHeading index="05" kicker="Education" title="Where the foundations were set." />
      <div className="grid gap-5 md:grid-cols-2">
        {education.map((e) => (
          <article
            key={e.degree}
            data-reveal
            className="panel group relative overflow-hidden rounded-xl p-7 transition-all duration-500 hover:-translate-y-1.5 hover:border-primary/40"
          >
            <p className="font-mono text-[11px] tracking-[0.25em] text-primary uppercase">
              {e.period}
            </p>
            <h3 className="mt-3 font-display text-xl font-semibold">{e.degree}</h3>
            <p className="mt-1 font-mono text-xs text-muted-foreground">{e.school}</p>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{e.detail}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}

export function Contact() {
  return (
    <Section id="contact">
      <div data-reveal className="panel relative overflow-hidden rounded-2xl px-8 py-16 text-center">
        <div className="pointer-events-none absolute inset-0 aurora opacity-40" />
        <p className="relative font-mono text-[11px] tracking-[0.35em] text-primary uppercase">
          06 — Contact
        </p>

        <h2 className="relative mt-4 font-display text-4xl font-bold tracking-tight sm:text-5xl">
          Got a stack that needs <span className="text-gradient">shipping?</span>
        </h2>
        <p className="relative mx-auto mt-5 max-w-xl text-muted-foreground">
          Tell me about the product, the deadline and the part that's currently breaking. I reply
          within a day.
        </p>
        <div className="relative mt-10 flex flex-wrap justify-center gap-4">
          <a
            href="mailto:jackdev981@gmail.com"
            className="rounded-md bg-primary px-7 py-3 font-mono text-xs tracking-[0.2em] text-primary-foreground uppercase shadow-[var(--glow-soft)] transition-transform duration-300 hover:-translate-y-0.5"
          >
            jackdev981@gmail.com
          </a>
          <a
            href="https://github.com/jack-driscoll-dev"
            target="_blank"
            rel="noreferrer"
            className="rounded-md border border-border px-7 py-3 font-mono text-xs tracking-[0.2em] uppercase transition-colors hover:border-primary/60 hover:text-primary"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/jack-d-82a94886"
            target="_blank"
            rel="noreferrer"
            className="rounded-md border border-border px-7 py-3 font-mono text-xs tracking-[0.2em] uppercase transition-colors hover:border-primary/60 hover:text-primary"
          >
            LinkedIn
          </a>
        </div>
      </div>
      <footer className="mt-16 flex flex-col items-center justify-between gap-3 border-t border-border/60 pt-8 font-mono text-[11px] tracking-widest text-muted-foreground uppercase sm:flex-row">
        <span>© {new Date().getFullYear()} Jack Driscoll</span>
        <span>Built with React · TypeScript · TailwindCSS</span>
      </footer>
    </Section>
  );
}
