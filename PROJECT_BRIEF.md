# Portfolio Website – Next.js

**Purpose**  
A personal portfolio site built with Next.js, styled with TailwindCSS, and animated with Framer Motion.  
All text, images, links, and metadata are sourced from `src/content/site.ts`.  
No component should hardcode content — only consume data from `site.ts`.

---

## Sections (driven by site.ts)

1. **Landing / Hero**

   - Displays owner’s avatar, name, title, tagline, badges, and CTA buttons.
   - Data comes from `siteConfig.hero` and `siteConfig.bio`.

2. **Projects**

   - Grid of cards populated from `siteConfig.projects`.
   - Each card shows: title, description, tech stack, optional highlights, image, GitHub/live links, featured flag.

3. **Experience**

   - Timeline or cards populated from `siteConfig.experience`.
   - Each entry includes: company, role, period, summary, tech stack, and achievements.

4. **Skills**

   - Grouped skill sets from `siteConfig.skills`.

5. **Education**

   - Education timeline/cards populated from `siteConfig.education`.

6. **Contact**

   - Contact information and form populated from `siteConfig.contact` and `siteConfig.socials`.

7. **Footer**
   - Copyright and quick links populated from `siteConfig.footer`.

---

## System Requirements

- **Framework & Libraries:** Next.js, TailwindCSS, Framer Motion, react-scroll (or equivalent).
- **Behavior:**
  - Smooth scrolling between sections.
  - Header hides on scroll down, reappears on scroll up.
  - Section reveal animations (fade/slide).
  - Fully responsive (mobile-first).
- **Content:** All content pulled from `src/content/site.ts`.
- **Accessibility & SEO:**
  - Semantic HTML landmarks.
  - Alt text for images.
  - Proper heading hierarchy.
  - Metadata (title, description, OG image) from `siteConfig.options.seo`.

---

## Deliverables

- Components: `Header`, `Hero`, `SectionWrapper`, `ProjectCard`, `ExperienceTimeline`, `SkillsGrid`, `ContactForm`, `Footer`.
- Components must dynamically consume content from `site.ts`.
- Placeholder images should be stored in `/public/images/...` and linked via `site.ts`.
- Basic smoke tests for at least two components.

---

## Tasks for the Agent

1. Read `PROJECT_BRIEF.md` and `src/content/site.ts`.
2. Ensure components are present and reading data from `site.ts`.
3. Implement smooth scrolling, animations, and responsive layout.
4. Add SEO and accessibility enhancements.
5. Report back with changes made and any remaining gaps.

---

## Stretch Goals (Optional)

- Dark mode toggle (prefers-color-scheme).
- Project filters (by tech tags).
- Sitemap generation.
- RSS/JSON feed for projects.
