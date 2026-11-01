import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/portfolio/Nav";
import { Hero } from "@/components/portfolio/Hero";
import { About, Contact, Education, Marquee, Path, Stack, Work } from "@/components/portfolio/Sections";

const SITE_URL = "https://arcane-mern-showcase.lovable.app";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Jack Driscoll — Senior Software Engineer / AI Engineer" },
      {
        name: "description",
        content:
          "Senior software engineer and AI engineer building reliable LLM applications, cloud services, and production software with a strong full-stack background.",
      },
      {
        name: "keywords",
        content:
          "Senior software engineer, AI engineer, full-stack engineer, LLM applications, RAG, Python, TypeScript, Node.js, React, Azure, AWS",
      },
      { property: "og:title", content: "Jack Driscoll — Senior Software Engineer / AI Engineer" },
      {
        property: "og:description",
        content:
          "Senior software engineer and AI engineer shipping production LLM applications and scalable software systems, with a strong full-stack engineering background.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE_URL}/` },
      { property: "og:site_name", content: "Jack Driscoll Rahman" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Jack Driscoll — Senior Software Engineer / AI Engineer" },
      {
        name: "twitter:description",
        content:
          "Senior software engineer and AI engineer shipping production LLM applications and scalable software systems, with a strong full-stack engineering background.",
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
          name: "Jack Driscoll",
          url: `${SITE_URL}/`,
          jobTitle: "Senior Software Engineer / AI Engineer",
          email: "mailto:jackdev981@gmail.com",
          description:
            "Senior software engineer and AI engineer building reliable LLM applications, cloud services, and production software.",
          knowsAbout: [
            "Artificial intelligence",
            "Large language model applications",
            "Software engineering",
            "Python",
            "TypeScript",
            "Node.js",
            "React",
            "C#",
            ".NET",
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
