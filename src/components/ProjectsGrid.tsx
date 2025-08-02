import { SiteConfig } from "@/content/types";
import ProjectCard from "./ProjectCard";
export default function ProjectsGrid({
  siteConfig,
}: {
  siteConfig: SiteConfig;
}) {
  return (
    <section id="projects" className="py-16">
      <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {siteConfig.projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
}
