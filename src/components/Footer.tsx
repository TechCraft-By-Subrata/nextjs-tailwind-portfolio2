import { SiteConfig } from "@/content/types";
export default function Footer({ siteConfig }: { siteConfig: SiteConfig }) {
  return (
    <footer className="py-8 text-center bg-surface mt-16 border-t border-slate-100">
      <div className="mb-2 text-muted text-sm">
        {siteConfig.footer.copyright}
      </div>
      <div className="flex justify-center gap-4">
        {siteConfig.footer.links.map((link) => (
          <a
            key={link.url}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline font-medium"
          >
            {link.name}
          </a>
        ))}
      </div>
    </footer>
  );
}
