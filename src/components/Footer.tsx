import { SiteConfig } from "@/content/types";
export default function Footer({ siteConfig }: { siteConfig: SiteConfig }) {
  return (
    <footer className="py-8 text-center bg-gray-50 mt-16">
      <div className="mb-2 text-gray-600 text-sm">
        {siteConfig.footer.copyright}
      </div>
      <div className="flex justify-center gap-4">
        {siteConfig.footer.links.map((link) => (
          <a
            key={link.url}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline"
          >
            {link.name}
          </a>
        ))}
      </div>
    </footer>
  );
}
