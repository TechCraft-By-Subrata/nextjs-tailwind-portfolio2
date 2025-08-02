import { render, screen } from "@testing-library/react";
import ProjectsGrid from "@/components/ProjectsGrid";
import { siteConfig } from "@/content/site";
test("renders all project titles", () => {
  render(<ProjectsGrid siteConfig={siteConfig} />);
  siteConfig.projects.forEach((project) => {
    expect(screen.getByText(project.title)).toBeInTheDocument();
  });
});
