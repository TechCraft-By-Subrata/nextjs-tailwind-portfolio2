import { Project } from "@/content/types";
export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="bg-white rounded-lg shadow p-6 flex flex-col">
      <img
        src={project.image}
        alt={project.title}
        className="mb-4 rounded object-cover h-40 w-full"
      />
      <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
      <p className="text-gray-600 mb-2">{project.description}</p>
      <div className="flex flex-wrap gap-2 mb-2">
        {project.tech.map((tech) => (
          <span key={tech} className="bg-gray-100 px-2 py-1 rounded text-xs">
            {tech}
          </span>
        ))}
      </div>
      {project.highlights && (
        <ul className="list-disc list-inside text-sm text-gray-500 mb-2">
          {project.highlights.map((h, i) => (
            <li key={i}>{h}</li>
          ))}
        </ul>
      )}
      <div className="mt-auto flex gap-4">
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline"
          >
            GitHub
          </a>
        )}
        {project.live && (
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-600 underline"
          >
            Live
          </a>
        )}
      </div>
    </div>
  );
}
