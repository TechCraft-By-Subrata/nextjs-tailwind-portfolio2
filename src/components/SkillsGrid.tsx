import { SiteConfig } from "@/content/types";
export default function SkillsGrid({ siteConfig }: { siteConfig: SiteConfig }) {
  return (
    <section id="skills" className="py-20 bg-slate-50">
      <h2 className="text-3xl font-bold mb-10 text-center text-slate-900 tracking-tight">
        Skills
      </h2>
      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {siteConfig.skills.map((group) => (
          <div
            key={group.category}
            className="bg-white rounded-2xl shadow-xl p-8 border border-slate-200"
          >
            <h3 className="text-xl font-bold mb-4 text-slate-900 tracking-tight">
              {group.category}
            </h3>
            <ul className="flex flex-wrap gap-3">
              {group.skills.map((skill) => (
                <li
                  key={skill}
                  className="bg-blue-600 text-white font-semibold px-4 py-2 rounded-full text-base shadow hover:bg-blue-700 transition-colors border border-blue-700/20"
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
