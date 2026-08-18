import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/portfolio/Nav";
import { Hero } from "@/components/portfolio/Hero";
import { About, Contact, Education, Marquee, Path, Stack, Work } from "@/components/portfolio/Sections";

const SITE_URL = "https://arcane-mern-showcase.lovable.app";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Jack Driscoll — Senior Software Developer Portfolio" },
      {
        name: "description",
        content:
          "MERN stack developer building realtime, data-heavy apps with MongoDB, Express, React and Node. Selected work, stack depth and contact.",
      },
      {
        name: "keywords",
        content:
          "MERN stack developer, full-stack JavaScript engineer, React developer, Node.js developer, MongoDB, Express",
      },
      { property: "og:title", content: "Mahmoud Rahman — MERN Stack Developer" },
      {
        property: "og:description",
        content:
          "Full-stack JavaScript engineer shipping production MongoDB, Express, React and Node applications.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE_URL}/` },
      { property: "og:site_name", content: "Mahmoud Rahman" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Mahmoud Rahman — MERN Stack Developer" },
      {
        name: "twitter:description",
        content:
          "Full-stack JavaScript engineer shipping production MongoDB, Express, React and Node applications.",
      },
      { name: "robots", content: "index, follow" },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/` }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Mahmoud Rahman",
          url: `${SITE_URL}/`,
          jobTitle: "MERN Stack Developer",
          email: "mailto:hello@mahmoud.dev",
          description:
            "Full-stack JavaScript engineer building realtime, data-heavy applications with MongoDB, Express, React and Node.",
          knowsAbout: [
            "MongoDB",
            "Express",
            "React",
            "Node.js",
            "TypeScript",
            "Realtime systems",
          ],
          sameAs: ["https://github.com", "https://linkedin.com"],
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="relative overflow-x-hidden">
      <Nav />
      <Hero />
      <Marquee />
      <About />
      <Stack />
      <Work />
      <Path />
      <Education />
      <Contact />
    </main>
  );
}
