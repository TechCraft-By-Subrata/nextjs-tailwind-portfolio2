# Portfolio Website – Next.js

**Purpose**  
A personal portfolio site built with Next.js, styled with TailwindCSS, and animated with CSS (No Framer Motion).  
All text, images, links, and metadata are sourced from `site.ts`.  
No component should hardcode content — only consume data from `site.ts`.

---

## Sections (driven by site.ts)

# Next.js Portfolio Setup Script

This guide will help you create a personal portfolio website using Next.js (App Router), Tailwind CSS v4, and data-driven components.

**All content must come from `site.ts`.**  
Follow each step in order for a smooth setup.

---

## 1. Create a New Next.js App

```sh
npx create-next-app@latest portfolio3 --typescript --eslint --app
cd portfolio2
```

---

## 2. Install Dependencies

```sh
npm install next@15 react@19 tailwindcss@4 clsx lucide-react
```

---

## 3. Tailwind v4 Setup

- Create or update `postcss.config.mjs`:

```js
// filepath: /postcss.config.mjs
export default { plugins: { "@tailwindcss/postcss": {} } };
```

- Create or update `app/globals.css`:

```css
// filepath: /src/app/globals.css
@import "tailwindcss";

html {
  scroll-behavior: smooth;
}

:focus-visible {
  outline: 2px solid #3b82f6;
  outline-offset: 2px;
}
```

---

## 4. File Structure

```
src/
  app/
    layout.tsx
    page.tsx
    globals.css
  components/
    Header.tsx
    Hero.tsx
    Section.tsx
    ProjectsGrid.tsx
    ProjectCard.tsx
    ExperienceTimeline.tsx
    SkillsGrid.tsx
    EducationSection.tsx
    ContactForm.tsx
    Footer.tsx
  content/
    types.ts
    helpers.ts
    site.ts
public/
  images/
    avatar.jpg
    og-image.jpg
    projects/
      alpha.jpg
  favicon.ico
```

---

## 5. Content Types & Data

- Create `src/content/types.ts` with strict types for all sections:

```typescript
// filepath: /src/content/types.ts
export type Project = {
  title: string;
  description: string;
  tech: string[];
  highlights?: string[];
  image: string;
  github?: string;
  live?: string;
  featured?: boolean;
};
export type Experience = {
  company: string;
  role: string;
  period: string;
  location?: string;
  summary: string;
  tech: string[];
  achievements?: string[];
};
export type Education = {
  school: string;
  degree: string;
  period: string;
  location?: string;
  details?: string;
};
export type SkillGroup = {
  category: string;
  skills: string[];
};
export type SiteConfig = {
  title: string;
  owner: string;
  avatar: string;
  tagline: string;
  bio: string[];
  hero: { headline: string; subheadline: string };
  projects: Project[];
  experience: Experience[];
  education: Education[];
  skills: SkillGroup[];
  contact: { email: string; phone?: string; location?: string };
  socials: { name: string; url: string }[];
  nav: {
    internal: { name: string; href: string }[];
    external: { name: string; url: string }[];
  };
  footer: { copyright: string; links: { name: string; url: string }[] };
  options?: {
    seo?: {
      title?: string;
      description?: string;
      image?: string;
      url?: string;
    };
  };
};
```

- Create `src/content/site.ts` and fill with your content, matching the types above.

---

## 6. Content Helpers

- Create `src/content/helpers.ts` for selectors:

```typescript
// filepath: /src/content/helpers.ts
import { SiteConfig, Project } from "./types";
export function getFeaturedProjects(siteConfig: SiteConfig): Project[] {
  return siteConfig.projects.filter((p) => p.featured);
}
```

---

## 7. Scaffold Components

- Each component must consume data from `site.ts` via props.
- Example for `Header.tsx`:

```tsx
// filepath: /src/components/Header.tsx
"use client";
import { SiteConfig } from "@/content/types";
export default function Header({ siteConfig }: { siteConfig: SiteConfig }) {
  return (
    <header className="sticky top-0 z-50 bg-white shadow">
      <nav>
        <ul className="flex gap-4">
          {siteConfig.nav.internal.map((link) => (
            <li key={link.href}>
              <a href={link.href}>{link.name}</a>
            </li>
          ))}
          {siteConfig.nav.external.map((link) => (
            <li key={link.url}>
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
```

- Repeat for all other components, always using data from `site.ts`.

---

## 8. Section Reveal Animations (CSS Only)

- In `Section.tsx`, use Intersection Observer and Tailwind for fade/slide-in:

```tsx
// filepath: /src/components/Section.tsx
"use client";
import React, { useRef, useEffect, useState } from "react";
export default function Section({
  id,
  children,
}: {
  id: string;
  children: React.ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return (
    <section
      id={id}
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      {children}
    </section>
  );
}
```

---

## 9. Metadata & SEO

- In `app/layout.tsx`, use Metadata API and read from `siteConfig.options.seo`:

```tsx
// filepath: /src/app/layout.tsx
import { siteConfig } from "@/content/site";
export const metadata = {
  title: siteConfig.options?.seo?.title || siteConfig.title,
  description: siteConfig.options?.seo?.description || siteConfig.tagline,
  openGraph: {
    images: [siteConfig.options?.seo?.image || siteConfig.avatar],
    url: siteConfig.options?.seo?.url,
  },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
```

---

## 10. Images & Favicon

- Place all images referenced in `site.ts` under `/public/images/`.
- Place `favicon.ico` in `/public/` only.

---

## 11. Basic Tests

- Example: `ProjectsGrid.test.tsx` (using React Testing Library):

```tsx
// filepath: /tests/ProjectsGrid.test.tsx
import { render, screen } from "@testing-library/react";
import ProjectsGrid from "@/components/ProjectsGrid";
import { siteConfig } from "@/content/site";
test("renders all project titles", () => {
  render(<ProjectsGrid siteConfig={siteConfig} />);
  siteConfig.projects.forEach((project) => {
    expect(screen.getByText(project.title)).toBeInTheDocument();
  });
});
```

---

## 12. Accessibility & Performance

- Use semantic HTML (`<header>`, `<main>`, `<footer>`, `<section>`).
- Provide alt text for all images.
- Use correct heading hierarchy.
- Ensure focus styles are visible.
- Run Lighthouse for a11y and perf checks.

---

## 13. Common Pitfalls

- **Do not use Framer Motion** (not compatible with React 19 + Next.js App Router).
- **Do not put favicon in `/app`**—only in `/public`.
- **All content must come from `site.ts`**—no hardcoded strings in components.

---

## 14. Build & Run

```sh
npm run dev
```

---

**You now have a reproducible, data-driven portfolio site!  
Copy and adapt this guide for future projects.**
