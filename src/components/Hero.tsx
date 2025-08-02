import { SiteConfig } from "@/content/types";
export default function Hero({ siteConfig }: { siteConfig: SiteConfig }) {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-background py-20 px-6 text-center">
      <img
        src={siteConfig.avatar}
        alt={siteConfig.owner}
        className="mx-auto mb-6 rounded-full w-36 h-36 shadow-lg border-4 border-primary/10"
      />
      <h1 className="text-4xl md:text-5xl font-extrabold text-text mb-4 tracking-tight">
        {siteConfig.hero.headline}
      </h1>
      <p className="text-xl text-muted mb-6 leading-relaxed">
        {siteConfig.hero.subheadline}
      </p>
      <div className="flex justify-center gap-4">
        <a
          href="#projects"
          className="bg-primary text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition font-bold"
        >
          View Projects
        </a>
        <a
          href="#contact"
          className="bg-accent text-white px-6 py-3 rounded-lg shadow hover:bg-orange-500 transition font-bold"
        >
          Contact
        </a>
      </div>
    </section>
  );
}
