import { SiteConfig } from "@/content/types";
export default function ExperienceTimeline({
  siteConfig,
}: {
  siteConfig: SiteConfig;
}) {
  return (
    <section id="experience" className="py-16">
      <h2 className="text-3xl font-bold mb-8 text-center">Experience</h2>
      <ol className="relative border-l border-gray-200">
        {siteConfig.experience.map((exp) => (
          <li key={exp.company + exp.role} className="mb-10 ml-6">
            <span className="absolute flex items-center justify-center w-8 h-8 bg-blue-100 rounded-full -left-4 ring-8 ring-white">
              <svg
                className="w-4 h-4 text-blue-600"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M6 2a1 1 0 00-1 1v2a1 1 0 001 1h8a1 1 0 001-1V3a1 1 0 00-1-1H6zM4 7a2 2 0 012-2h8a2 2 0 012 2v9a2 2 0 01-2 2H6a2 2 0 01-2-2V7zm2 2v7h8V9H6z" />
              </svg>
            </span>
            <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900">
              {exp.role} @ {exp.company}
            </h3>
            <time className="block mb-2 text-sm font-normal leading-none text-gray-400">
              {exp.period} {exp.location && `| ${exp.location}`}
            </time>
            <p className="mb-2 text-base font-normal text-gray-700">
              {exp.summary}
            </p>
            <div className="flex flex-wrap gap-2 mb-2">
              {exp.tech.map((tech) => (
                <span
                  key={tech}
                  className="bg-gray-100 px-2 py-1 rounded text-xs"
                >
                  {tech}
                </span>
              ))}
            </div>
            {exp.achievements && (
              <ul className="list-disc list-inside text-sm text-gray-500">
                {exp.achievements.map((a, i) => (
                  <li key={i}>{a}</li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ol>
    </section>
  );
}
