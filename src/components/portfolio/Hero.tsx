import { useEffect, useState } from "react";
import heroMesh from "@/assets/hero-mesh.jpg";
import { usePointerGlow } from "./use-reveal";

const roles = [
  "MERN Stack Developer",
  "React & Node Engineer",
  "API & Realtime Systems",
  "Data Modeling",
];

function useTypewriter(words: string[]) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[index % words.length] ?? "";
    const done = !deleting && text === current;
    const cleared = deleting && text === "";
    const delay = done ? 1600 : cleared ? 200 : deleting ? 35 : 65;

    const t = setTimeout(() => {
      if (done) return setDeleting(true);
      if (cleared) {
        setDeleting(false);
        return setIndex((i) => i + 1);
      }
      setText(deleting ? current.slice(0, text.length - 1) : current.slice(0, text.length + 1));
    }, delay);
    return () => clearTimeout(t);
  }, [text, deleting, index, words]);

  return text;
}

export function Hero() {
  const glowRef = usePointerGlow<HTMLElement>();
  const typed = useTypewriter(roles);

  return (
    <section
      id="top"
      ref={glowRef}
      className="relative isolate flex min-h-screen items-center overflow-hidden pt-24"
    >
      <img
        src={heroMesh}
        alt=""
        width={1536}
        height={1024}
        className="pointer-events-none absolute inset-0 -z-30 size-full object-cover opacity-35"
      />
      <div className="pointer-events-none absolute inset-0 -z-20 aurora opacity-70" />
      <div className="pointer-events-none absolute inset-0 -z-10 grid-bg" />
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-70 transition-opacity"
        style={{
          background:
            "radial-gradient(22rem 22rem at var(--mx, 50%) var(--my, 30%), color-mix(in oklab, var(--signal) 14%, transparent), transparent 70%)",
        }}
      />

      <div className="mx-auto grid w-full max-w-6xl items-center gap-16 px-6 py-20 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-3 py-1 font-mono text-[11px] tracking-[0.25em] text-primary uppercase">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-pulse-ring rounded-full bg-primary" />
              <span className="relative inline-flex size-2 rounded-full bg-primary" />
            </span>
            WEB · CLOUD
          </p>

          <h1 className="font-display text-5xl leading-[1.05] font-bold tracking-tight sm:text-6xl lg:text-7xl">
            Jack Driscoll
            <span className="block text-gradient">Senior Software Engineer</span>
          </h1>

          <p className="mt-6 font-mono text-lg text-primary">
            {typed}
            <span className="ml-0.5 animate-caret">_</span>
          </p>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
            6+ years of experience designing and delivering scalable, high-performance software systems, with a focus on architecture, backend engineering, modern web applications and reliable production environments.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#work"
              className="group relative overflow-hidden rounded-md bg-primary px-6 py-3 font-mono text-xs tracking-[0.2em] text-primary-foreground uppercase shadow-[var(--glow-soft)] transition-transform duration-300 hover:-translate-y-0.5"
            >
              <span className="relative z-10">View selected work</span>
              <span className="absolute inset-0 -translate-x-full bg-[image:var(--gradient-signal)] transition-transform duration-500 group-hover:translate-x-0" />
            </a>
            <a
              href="#contact"
              className="rounded-md border border-border px-6 py-3 font-mono text-xs tracking-[0.2em] text-foreground uppercase transition-colors duration-300 hover:border-primary/60 hover:text-primary"
            >
              Start a project
            </a>
          </div>

          <dl className="mt-14 grid max-w-lg grid-cols-3 gap-6 border-t border-border/60 pt-8">
            {[
              ["6+", "Years shipping"],
              ["40+", "Apps delivered"],
              ["99.9%", "Uptime maintained"],
            ].map(([v, k]) => (
              <div key={k}>
                <dt className="font-display text-3xl font-bold text-foreground">{v}</dt>
                <dd className="mt-1 font-mono text-[11px] tracking-widest text-muted-foreground uppercase">
                  {k}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative mx-auto hidden aspect-square w-full max-w-sm place-items-center lg:grid">
          <div className="absolute inset-0 animate-float rounded-full bg-primary/10 blur-3xl" />
          <svg viewBox="0 0 200 200" className="absolute size-full text-primary/30">
            <polygon
              points="100,8 180,54 180,146 100,192 20,146 20,54"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.6"
            />
            <polygon
              points="100,28 162,64 162,136 100,172 38,136 38,64"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.6"
              className="origin-center [animation:spin_36s_linear_infinite]"
            />
            <polygon
              points="100,48 145,74 145,126 100,152 55,126 55,74"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.6"
              className="origin-center [animation:spin_24s_linear_infinite_reverse]"
            />
          </svg>
          <div className="panel relative w-64 overflow-hidden rounded-xl p-5 font-mono text-xs leading-relaxed">
            <div className="absolute inset-x-0 top-0 h-16 animate-scan bg-[linear-gradient(to_bottom,transparent,color-mix(in_oklab,var(--signal)_10%,transparent),transparent)]" />
            <div className="mb-3 flex gap-1.5">
              <span className="size-2 rounded-full bg-destructive/70" />
              <span className="size-2 rounded-full bg-chart-4/70" />
              <span className="size-2 rounded-full bg-primary/70" />
            </div>
            <pre className="text-muted-foreground">
              <span className="text-violet">const</span> dev = {"{"}
              {"\n  "}role: <span className="text-primary">"Software Engineer"</span>,{"\n  "}focus:{" "}
              <span className="text-primary">"realtime"</span>,{"\n  "}tz:{" "}
              <span className="text-primary">"UTC-6"</span>
              {"\n"}
              {"}"}
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
}
