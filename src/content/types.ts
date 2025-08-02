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
