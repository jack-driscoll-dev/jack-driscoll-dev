import { useEffect, useState } from "react";

const links = [
  { href: "#about", label: "About" },
  { href: "#stack", label: "Stack" },
  { href: "#work", label: "Work" },
  { href: "#path", label: "Path" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setScrolled(window.scrollY > 24);
      setProgress(max > 0 ? (window.scrollY / max) * 100 : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={`transition-all duration-500 ${
          scrolled ? "border-b border-border/70 bg-background/80 backdrop-blur-xl" : "bg-transparent"
        }`}
      >
        <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          <a href="#top" className="group flex items-center gap-3">
            <span className="hex-clip grid size-8 place-items-center bg-primary font-mono text-sm font-bold text-primary-foreground transition-transform duration-500 group-hover:rotate-180">
              JD
            </span>
            <span className="font-display text-sm tracking-[0.3em] text-muted-foreground uppercase">
              Jack.dev
            </span>
          </a>
          <ul className="hidden items-center gap-8 md:flex">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="relative font-mono text-xs tracking-widest text-muted-foreground uppercase transition-colors hover:text-primary after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            className="rounded-md border border-primary/40 px-4 py-2 font-mono text-xs tracking-widest text-primary uppercase transition-all duration-300 hover:bg-primary/10 hover:shadow-[var(--glow-signal)]"
          >
            Hire me
          </a>
        </nav>
      </div>
      <div
        className="h-px origin-left bg-[image:var(--gradient-signal)] transition-[width] duration-150"
        style={{ width: `${progress}%` }}
      />
    </header>
  );
}
