"use client";
import { SiteConfig } from "@/content/types";
export default function Header({ siteConfig }: { siteConfig: SiteConfig }) {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-slate-200 shadow-sm">
      <nav className="max-w-6xl mx-auto flex items-center justify-between py-4 px-6">
        <span className="text-2xl font-extrabold text-blue-700 tracking-tight drop-shadow-sm">
          {siteConfig.owner}
        </span>
        <ul className="flex gap-6">
          {siteConfig.nav.internal.map((link, idx) => (
            <li key={link.href + idx}>
              <a
                href={link.href}
                className="text-slate-800 font-semibold px-3 py-2 rounded-lg hover:bg-blue-50 hover:text-blue-700 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-600"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
