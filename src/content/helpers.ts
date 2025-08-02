import { SiteConfig, Project } from "./types";
export function getFeaturedProjects(siteConfig: SiteConfig): Project[] {
  return siteConfig.projects.filter((p) => p.featured);
}
