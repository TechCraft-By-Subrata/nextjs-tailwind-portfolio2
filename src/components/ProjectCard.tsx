import { Project } from "@/content/types";
export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow p-6 flex flex-col border border-slate-200">
      <img
        src={project.image}
        alt={project.title}
        className="rounded-lg mb-4 h-40 w-full object-cover border border-slate-100"
      />
      <h3 className="text-xl font-bold text-slate-900 mb-2 tracking-tight">
        {project.title}
      </h3>
      <p className="text-slate-700 mb-3 leading-relaxed">
        {project.description}
      </p>
      <div className="flex flex-wrap gap-2 mb-3">
        {project.tech.map((tech) => (
          <span
            key={tech}
            className="bg-blue-600 text-white px-2 py-1 rounded text-xs font-semibold shadow"
          >
            {tech}
          </span>
        ))}
      </div>
      <div className="mt-auto flex gap-4">
        {project.github && (
          <a
            href={project.github}
            className="text-blue-600 hover:underline font-medium"
          >
            GitHub
          </a>
        )}
        {project.live && (
          <a
            href={project.live}
            className="text-orange-500 hover:underline font-medium"
          >
            Live
          </a>
        )}
      </div>
    </div>
  );
}
