"use client";
import { SiteConfig } from "@/content/types";
export default function Header({ siteConfig }: { siteConfig: SiteConfig }) {
  return (
    <header className="sticky top-0 z-50 bg-white shadow">
      <nav>
        <ul className="flex gap-4">
          {siteConfig.nav.internal.map((link, idx) => (
            <li key={`${link.href}-${idx}`}>
              <a href={link.href}>{link.name}</a>
            </li>
          ))}
          {siteConfig.nav.external.map((link, idx) => (
            <li key={`${link.url}-${idx}`}>
              <a href={link.url} target="_blank" rel="noopener noreferrer">
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
