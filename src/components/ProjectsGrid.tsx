import { SiteConfig } from "@/content/types";
import ProjectCard from "./ProjectCard";
export default function ProjectsGrid({
  siteConfig,
}: {
  siteConfig: SiteConfig;
}) {
  return (
    <section id="projects" className="py-20 bg-slate-50">
      <h2 className="text-3xl font-bold mb-10 text-center text-slate-900 tracking-tight">
        Projects
      </h2>
      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {siteConfig.projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
}
