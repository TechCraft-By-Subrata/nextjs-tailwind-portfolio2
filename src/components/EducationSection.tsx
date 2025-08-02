import { SiteConfig } from "@/content/types";
export default function EducationSection({
  siteConfig,
}: {
  siteConfig: SiteConfig;
}) {
  return (
    <section id="education" className="py-16">
      <h2 className="text-3xl font-bold mb-8 text-center">Education</h2>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {siteConfig.education.map((edu) => (
          <div
            key={edu.school + edu.degree}
            className="bg-white rounded-lg shadow p-6"
          >
            <h3 className="text-xl font-semibold mb-2">{edu.degree}</h3>
            <p className="text-gray-700 mb-1">{edu.school}</p>
            <p className="text-gray-500 text-sm mb-1">
              {edu.period} {edu.location && `| ${edu.location}`}
            </p>
            {edu.details && (
              <p className="text-gray-600 text-sm">{edu.details}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
