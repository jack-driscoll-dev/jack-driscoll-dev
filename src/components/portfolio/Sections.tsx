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
  "C#",
  ".NET",
  "ASP.NET Core",
  "Azure OpenAI",
  "LLM Applications",
  "RAG Pipelines",
  "Prompt Engineering",
  "Python",
  "React",
  "Node.js",
  "REST APIs",
  "Docker",
  "Azure",
  "AWS",
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
      <SectionHeading index="01" kicker="About" title="Applied AI, grounded in engineering." />
      <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
        <div data-reveal className="space-y-5 text-base leading-relaxed text-muted-foreground">
          <p>
            I build AI-powered software that is useful beyond the demo: well-designed, observable, secure, and ready for real users. My strongest work sits at the intersection of C#, .NET, Python, cloud architecture, and applied AI.
          </p>
          <p>
            I enjoy turning ambiguous AI ideas into dependable workflows, from retrieval and prompt orchestration to API design, evaluation, and production delivery.
          </p>
          <p>
            Before specializing in AI development, I built web applications, integrations, and data-heavy platforms across the JavaScript ecosystem. That background helps me ship AI features as complete products, not isolated models.
          </p>
        </div>
        <ul data-reveal className="panel space-y-4 rounded-xl p-6 font-mono text-sm">
          {[
            ["Location", "Fort Worth · TX 76131"],
            ["Focus", "Applied AI & .NET Systems"],
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
    letter: "C#",
    name: "C# / .NET",
    detail: "Strong .NET foundation for maintainable services, domain logic, integrations, and production APIs.",
    level: 98,
  },
  {
    letter: "AI",
    name: "Applied AI",
    detail: "LLM applications, RAG workflows, prompt orchestration, evaluation, and human-centered AI features.",
    level: 97,
  },
  {
    letter: "Py",
    name: "Python for AI",
    detail: "Python services, data workflows, model integrations, experimentation, and AI automation.",
    level: 93,
  },
  {
    letter: "A",
    name: "ASP.NET Core",
    detail: "Clean APIs, background services, authentication, integrations, and cloud-ready application architecture.",
    level: 95,
  },
  {
    letter: "W",
    name: "Web Engineering",
    detail: "React, Node.js, TypeScript, and data-heavy interfaces from a proven full-stack background.",
    level: 94,
  },
];

export function Stack() {
  return (
    <Section id="stack">
      <SectionHeading index="02" kicker="Stack" title="AI capability with a production backbone." />
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
    name: "Customer 360 Copilot",
    url: "https://github.com/jack-driscoll-dev/customer-360-ai-copilot",
    summary:
      "Built a short demo of an enterprise AI customer-intelligence copilot using ASP.NET Core and React, with governed tool execution across CRM, order, support, and knowledge data.",
    tags: ["C#", ".NET 8", "ASP.NET Core", "AI Orchestration", "Tool Authorization", "Citations", "React", "TypeScript", "Docker"],
    metric: "GOVERNED AI DEMO",
  },
  {
    name: "Paylance",
    url: "https://paylance.com/",
    summary:
      "Built a production FinTech platform for multi-currency wallets, digital payments, transactions, and secure financial workflows.",
    tags: ["C#", ".NET", "React", "REST APIs", "PostgreSQL", "JWT", "Payment Integrations", "Docker", "AWS"],
    metric: "FENTECH PLATFORM",
  },
  {
    name: "Space ID",
    url: "https://space.id",
    summary:
      "Built an AI-driven crypto intelligence platform with real-time market data, blockchain analytics, and interactive dashboards.",
    tags: ["AI Applications", "OpenAI", "C#", ".NET", "React", "Redis", "Real-time Data", "AWS"],
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
      "Led the design and delivery of AI-powered applications using C#, .NET, and cloud services, translating business requirements into reliable, production-ready software.",
      "Built intelligent workflows and backend services with LLM integrations, API orchestration, data processing, and evaluation in mind, while collaborating with product and engineering stakeholders from discovery through release."
    ],
  },
  {
    role: "Software Engineer",
    org: "Connex Digital",
    period: "2021 — 2023",
    text: [
      "Designed and developed custom integration workflows and backend services using C#, .NET, REST APIs, webhooks, and third-party services to connect business applications across multiple systems.",
      "Implemented data transformation, validation, error handling, and workflow logic for automated integrations, while debugging API issues and improving the reliability, maintainability, and performance of production .NET solutions."
    ],
  },
  {
    role: "Software Engineer",
    org: "Teragonia",
    period: "2020 — 2021",
    text: [
      "Developed responsive web applications and data-driven interfaces for analytics and business intelligence solutions, pairing React and TypeScript with C#/.NET services to present complex operational data in clear, user-friendly dashboards.",
      "Built and integrated .NET backend services and data APIs, working with engineering and analytics teams to connect data sources, implement business logic, troubleshoot integration issues, and improve application reliability and performance."
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
