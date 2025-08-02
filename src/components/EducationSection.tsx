import { SiteConfig } from "@/content/types";
export default function EducationSection({
  siteConfig,
}: {
  siteConfig: SiteConfig;
}) {
  return (
    <section id="education" className="py-20 bg-slate-50">
      <h2 className="text-3xl font-bold mb-10 text-center text-slate-900 tracking-tight">
        Education
      </h2>
      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {siteConfig.education.map((edu) => (
          <div
            key={edu.school + edu.degree}
            className="bg-white rounded-2xl shadow-xl p-8 border border-slate-200 flex flex-col"
          >
            <h3 className="text-xl font-bold mb-2 text-blue-700 tracking-tight">
              {edu.degree}
            </h3>
            <p className="text-slate-900 mb-1 font-semibold">{edu.school}</p>
            <p className="text-blue-600 text-sm mb-2">
              {edu.period}{" "}
              {edu.location && (
                <span className="text-slate-500">| {edu.location}</span>
              )}
            </p>
            {edu.details && (
              <p className="text-slate-700 text-sm leading-relaxed mt-2">
                {edu.details}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
