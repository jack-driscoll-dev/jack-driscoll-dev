import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/portfolio/Nav";
import { Hero } from "@/components/portfolio/Hero";
import { About, Contact, Education, Marquee, Path, Stack, Work } from "@/components/portfolio/Sections";

const SITE_URL = "https://arcane-mern-showcase.lovable.app";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Jack Driscoll — C# / .NET AI Developer" },
      {
        name: "description",
        content:
          "C# and .NET AI developer building reliable LLM applications, cloud services, and production software with a strong full-stack background.",
      },
      {
        name: "keywords",
        content:
          "C# developer, .NET developer, Python AI developer, ASP.NET Core, LLM applications, RAG, Azure, React",
      },
      { property: "og:title", content: "Jack Driscoll — C# / .NET AI Developer" },
      {
        property: "og:description",
        content:
          "AI developer shipping production LLM applications and .NET systems, with a strong full-stack engineering background.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE_URL}/` },
      { property: "og:site_name", content: "Jack Driscoll Rahman" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Jack Driscoll — C# / .NET AI Developer" },
      {
        name: "twitter:description",
        content:
          "AI developer shipping production LLM applications and .NET systems, with a strong full-stack engineering background.",
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
          jobTitle: "C# / .NET AI Developer",
          email: "mailto:jackdev981@gmail.com",
          description:
            "C# and .NET AI developer building reliable LLM applications, cloud services, and production software.",
          knowsAbout: [
            "C#",
            ".NET",
            "ASP.NET Core",
            "Python",
            "Artificial intelligence",
            "Large language model applications",
            "React",
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
