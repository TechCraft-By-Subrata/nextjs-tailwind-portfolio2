import { SiteConfig } from "@/content/types";
export default function SkillsGrid({ siteConfig }: { siteConfig: SiteConfig }) {
  return (
    <section id="skills" className="py-16">
      <h2 className="text-3xl font-bold mb-8 text-center">Skills</h2>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {siteConfig.skills.map((group) => (
          <div key={group.category} className="bg-white rounded-lg shadow p-6">
            <h3 className="text-xl font-semibold mb-2">{group.category}</h3>
            <ul className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <li
                  key={skill}
                  className="bg-gray-100 px-2 py-1 rounded text-xs"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
