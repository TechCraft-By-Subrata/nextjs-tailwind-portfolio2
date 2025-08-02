import { SiteConfig } from "@/content/types";
export default function ExperienceTimeline({
  siteConfig,
}: {
  siteConfig: SiteConfig;
}) {
  return (
    <section id="experience" className="py-20 bg-slate-50">
      <h2 className="text-3xl font-bold mb-10 text-center text-slate-900 tracking-tight">
        Experience
      </h2>
      <ol className="relative border-l-4 border-blue-200 max-w-4xl mx-auto">
        {siteConfig.experience.map((exp, idx) => (
          <li key={exp.company + exp.role} className="mb-12 ml-8">
            <span className="absolute flex items-center justify-center w-8 h-8 bg-blue-600 text-white rounded-full -left-5 ring-8 ring-slate-50 shadow-lg font-bold text-lg">
              {idx + 1}
            </span>
            <h3 className="flex items-center mb-1 text-xl font-bold text-slate-900 tracking-tight">
              {exp.role} <span className="mx-2 text-blue-600">@</span>{" "}
              {exp.company}
            </h3>
            <time className="block mb-2 text-sm font-medium text-blue-600">
              {exp.period}{" "}
              {exp.location && (
                <span className="text-slate-500">| {exp.location}</span>
              )}
            </time>
            <p className="mb-3 text-base text-slate-700 leading-relaxed">
              {exp.summary}
            </p>
            <div className="flex flex-wrap gap-2 mb-2">
              {exp.tech.map((tech) => (
                <span
                  key={tech}
                  className="bg-blue-100 text-blue-700 font-semibold px-3 py-1 rounded-full text-xs shadow-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
            {exp.achievements && (
              <ul className="list-disc list-inside text-sm text-slate-600 pl-4">
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
