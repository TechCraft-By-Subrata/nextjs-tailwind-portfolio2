import { SiteConfig } from "@/content/types";
export default function Hero({ siteConfig }: { siteConfig: SiteConfig }) {
  return (
    <section id="home" className="py-16 text-center">
      <img
        src={siteConfig.avatar}
        alt={siteConfig.owner}
        className="mx-auto mb-4 rounded-full w-32 h-32 object-cover"
      />
      <h1 className="text-4xl font-bold mb-2">{siteConfig.hero.headline}</h1>
      <p className="text-xl text-gray-600 mb-4">
        {siteConfig.hero.subheadline}
      </p>
      <div className="max-w-xl mx-auto text-gray-700">
        {siteConfig.bio.map((line, i) => (
          <p key={i}>{line}</p>
        ))}
      </div>
    </section>
  );
}
