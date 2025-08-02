// Fill this file with your portfolio content, matching the types in types.ts
import { SiteConfig } from "./types";

export const siteConfig: SiteConfig = {
  title: "Subrata Das — Tech Lead Modern Hybrid Apps",
  owner: "Subrata Kumar Das",
  avatar:
    "https://media.licdn.com/dms/image/v2/D4D03AQEj9P4ZkuqH0w/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1674452508308?e=1756944000&v=beta&t=MYEdDCy4Zx_tiVjfhdrfdIKT9bA62uvx0kW2_tn1Gvk",
  tagline:
    "Seasoned React Native developer | 10+ years | 40+ Android & 5+ iOS apps delivered | Tech Lead & mentor.",
  bio: [
    "Tech Lead with a decade of experience building scalable, performant mobile apps with modern UI/UX.",
    "Shipped 40+ Android and 5+ iOS apps across enterprise and consumer use cases.",
    "Strong in OOP, Agile, cross-platform dev; passionate about mentorship and open source.",
  ],
  hero: {
    headline: "Hi, I'm Subrata!",
    subheadline:
      "Tech Lead Modern Hybrid Apps. 10+ years. 40+ Android & 5+ iOS apps delivered.",
  },
  projects: [
    {
      title: "E-Commerce App (1M+ users)",
      description:
        "High-traffic consumer app with performance tuning and scalable component architecture; shipped to Google Play & App store.",
      tech: ["React Native", "TypeScript", "Redux", "Android"],
      highlights: [
        "1M+ users on Play Store",
        "Performance optimizations",
        "Scalable UI kit",
      ],
      live: "ADD_PLAY_STORE_LINK",
      image:
        "https://cdn.pixabay.com/photo/2025/07/17/14/14/sparrow-9719599_1280.jpg",
      featured: true,
    },
    {
      title: "Warehouse Management Apps",
      description:
        "Barcode-driven picking/packing flows improving speed and accuracy in warehouse operations.",
      tech: ["Android", "Kotlin", "Java", "Retrofit", "Firebase"],
      highlights: ["~15% error reduction", "~30% faster fulfillment"],
      image:
        "https://cdn.pixabay.com/photo/2025/07/17/14/14/sparrow-9719599_1280.jpg",
      featured: true,
    },
    {
      title: "S60 PDA Printer & Scanner",
      description:
        "From-scratch rugged handheld app with native printer & scanner integrations for field operations.",
      tech: ["React Native", "Expo", "Native Modules", "REST"],
      highlights: ["Robust device integrations", "Offline-friendly flows"],
      image:
        "https://cdn.pixabay.com/photo/2025/07/17/14/14/sparrow-9719599_1280.jpg",
    },
    {
      title: "Employee Management (Enterprise)",
      description:
        "Attendance, holidays, and HR workflows for a large Indian insurer (enterprise distribution).",
      tech: ["React Native", "Redux", "React Navigation", "Android", "iOS"],
      live: "ADD_PRIVATE_LINK_IF_ALLOWED",
      image:
        "https://cdn.pixabay.com/photo/2025/07/17/14/14/sparrow-9719599_1280.jpg",
    },
    {
      title: "Insurance Policy Management + POS",
      description:
        "Policy workflows with native EzeTap POS, Face Authentication, and Location services.",
      tech: ["React Native", "Native Modules", "Razorpay/EzeTap", "Face Auth"],
      highlights: ["Native bridge for POS", "Secure auth & location"],
      image:
        "https://cdn.pixabay.com/photo/2025/07/17/14/14/sparrow-9719599_1280.jpg",
    },
    {
      title: "Skin Theory — Skincare Tracker",
      description:
        "‘The Scientific Acne & Skincare Tracker’ app for a Berlin startup; core features and performance.",
      tech: ["React Native", "MobX", "Location API", "SSO", "iOS"],
      live: "ADD_APP_STORE_OR_SITE_LINK",
      image:
        "https://cdn.pixabay.com/photo/2025/07/17/14/14/sparrow-9719599_1280.jpg",
      featured: true,
    },
    {
      title: "JWT WebSocket Chat Platform",
      description:
        "Modular chat using JWT-authenticated WebSockets and REST with dynamic MongoDB configuration.",
      tech: ["Node.js", "WebSockets", "MongoDB", "JWT", "React Native"],
      highlights: ["Dynamic DB per user/key", "REST + WS hybrid"],
      github: "ADD_REPO_LINK_IF_PUBLIC",
      image:
        "https://cdn.pixabay.com/photo/2025/07/17/14/14/sparrow-9719599_1280.jpg",
    },
    {
      title: "Admin Middleman Platform",
      description:
        "Admin layer connecting patients, labs, and doctors—appointments, coordination, and status tracking.",
      tech: ["React Native", "Redux", "REST APIs"],
      highlights: ["Config-driven flows", "Reusable UI primitives"],
      image:
        "https://cdn.pixabay.com/photo/2025/07/17/14/14/sparrow-9719599_1280.jpg",
    },
    {
      title: "Face Authentication Prototype",
      description:
        "Real-time face recognition login using face-api.js on top of TensorFlow.js.",
      tech: ["TensorFlow.js", "face-api.js", "Web"],
      github: "ADD_REPO_LINK",
      live: "ADD_DEMO_LINK",
      image:
        "https://cdn.pixabay.com/photo/2025/07/17/14/14/sparrow-9719599_1280.jpg",
    },
    {
      title: "MapView Premium Collection Aid",
      description:
        "Google Maps integration to locate nearest addresses for doorstep premium collection.",
      tech: ["React Native", "Google Maps"],
      image:
        "https://cdn.pixabay.com/photo/2025/07/17/14/14/sparrow-9719599_1280.jpg",
    },
    {
      title: "She Health — Period Tracker (Prototype)",
      description:
        "Concept/prototype of a women’s health tracker with clean UI and extensible data model.",
      tech: ["React Native"],
      image:
        "https://cdn.pixabay.com/photo/2025/07/17/14/14/sparrow-9719599_1280.jpg",
    },
  ],
  experience: [
    {
      company: "Krish Services Group",
      role: "Tech Lead",
      period: "Oct 2024 – Present",
      location: "Bengaluru, India (Remote)",
      summary:
        "Upgraded legacy RN projects, built reusable utilities, integrated admin features, and mentored devs.",
      tech: [
        "React Native",
        "Redux",
        "TypeScript",
        "Google Play",
        "WebSockets",
        "MongoDB",
        "JWT",
      ],
      achievements: [
        "Upgraded RN project from v0.59 → v0.76.6, fixing compatibility issues.",
        "Integrated admin functionality for appointments, labs, and doctor coordination.",
        "Built modular chat app using JWT-authenticated WebSockets and REST APIs with dynamic MongoDB configuration.",
        "Created reusable utilities for navigation, modals, and toast notifications.",
        "Mentored juniors and led internal sessions on clean code, Git hygiene, and scalable architecture.",
      ],
    },
    {
      company: "RIKTAM Technologies Pvt Ltd",
      role: "Sr. Software Engineer",
      period: "Mar 2023 – Aug 2024",
      location: "Hyderabad, India (Remote)",
      summary:
        "Delivered high-traffic e-commerce and enterprise apps, optimized performance, and modernized RN projects.",
      tech: [
        "React Native",
        "Redux",
        "Kotlin",
        "Java",
        "Retrofit",
        "Firebase",
        "Expo",
        "Android",
        "Native Modules",
      ],
      achievements: [
        "Contributed to e-commerce app with 1M+ users on Google Play Store.",
        "Improved warehouse management apps: reduced errors by ~15% and increased order fulfillment speed by 30%.",
        "Developed handheld S60 PDA app integrating printer and scanner from scratch.",
        "Migrated two Android apps to React Native for cross-platform support.",
        "Upgraded an Expo 48 app to Expo 51, resolving dependency conflicts.",
      ],
    },
    {
      company: "NeoSoft Technologies Pvt Ltd",
      role: "Sr. Software Engineer",
      period: "Jun 2022 – Mar 2023",
      location: "Bengaluru, India",
      summary:
        "Built enterprise apps for employee management and insurance workflows with native integrations.",
      tech: [
        "React Native",
        "Redux",
        "React Navigation",
        "Android",
        "iOS",
        "Firebase",
        "Razorpay",
      ],
      achievements: [
        "Developed employee management app for attendance, holidays, and HR workflows.",
        "Built insurance policy management app with EzeTap POS integration via native bridge.",
        "Implemented Face Authentication and location services for secure user access.",
      ],
    },
    {
      company: "Skin Theory (Startup)",
      role: "React Native Developer",
      period: "Jun 2021 – May 2022",
      location: "Berlin, Germany (Remote)",
      summary:
        "Core contributor to a German startup’s scientific acne & skincare tracker app.",
      tech: ["React Native", "MobX", "Location API", "SSO", "iOS"],
      achievements: [
        "Delivered core app features and optimizations for production release.",
        "Collaborated with distributed team to launch consumer-facing skincare tracker.",
      ],
    },
    {
      company: "Freelance Software Developer",
      role: "Full-stack & Mobile Developer",
      period: "Jan 2014 – May 2021",
      location: "Bhubaneswar, Odisha",
      summary:
        "Delivered mobile, web, and backend projects for clients; collaborated with an EdTech startup.",
      tech: ["React Native", "Node.js", "Android", "Web", "REST APIs"],
      achievements: [
        "Implemented face recognition authentication prototype using face-api.js and TensorFlow.js.",
        "Developed multiple custom Android apps for small businesses and startups.",
        "Built EdTech mobile application for a learning startup.",
      ],
    },
  ],
  education: [
    {
      school: "Mangalayatan University (WILP)",
      degree: "M.Tech — Computer Science (AI & ML)",
      period: "Jul 2022 – Jul 2024",
      location: undefined,
      details:
        "Work-Integrated Learning Programme (WILP). Focused on machine learning, deep learning, and applied AI for mobile.",
    },
    {
      school: "Punjab Technical University",
      degree: "M.Sc — Information Technology",
      period: "Sep 2011 – Sep 2013",
      location: undefined,
      details:
        "Core coursework in algorithms, software engineering, and databases. Projects emphasizing practical problem-solving and scalable software design.",
    },
  ],
  skills: [
    {
      category: "Primary",
      skills: [
        "JavaScript",
        "TypeScript",
        "React Native",
        "Android",
        "Expo",
        "Redux",
        "Firebase",
      ],
    },
    { category: "Testing", skills: ["React Testing Library", "Jest", "Mocha"] },
    { category: "Backend & APIs", skills: ["GraphQL", "REST API"] },
    {
      category: "Practices",
      skills: [
        "Data Structures & Algorithms",
        "Object-Oriented Programming",
        "CI/CD",
        "Agile",
        "Kanban",
        "Git & GitHub",
        "Offline Storage",
      ],
    },
    { category: "Native Build", skills: ["Xcode", "Android Studio"] },
    {
      category: "Strengths",
      skills: [
        "Clean, well-documented code",
        "Reusable component architecture",
        "Ability to pick up new tech quickly",
        "Mentorship & team enablement",
      ],
    },
  ],
  contact: {
    email: "subraatakumar@gmail.com",
    phone: "+91 9999999999",
    location: "Bengaluru (Remote)",
  },
  socials: [
    { name: "GitHub", url: "ADD_GITHUB_URL" },
    { name: "LinkedIn", url: "ADD_LINKEDIN_URL" },
    { name: "X", url: "https://x.com/ADD_HANDLE" },
  ],
  nav: {
    internal: [
      { name: "Home", href: "#home" },
      { name: "Projects", href: "#projects" },
      { name: "Experience", href: "#experience" },
      { name: "Contact", href: "#contact" },
    ],
    external: [
      { name: "GitHub", url: "https://github.com/subraatakumar" },
      { name: "LinkedIn", url: "https://www.linkedin.com/in/subraatakumar/" },
    ],
  },
  footer: {
    copyright: "© 2025 Subrata Kumar Das",
    links: [
      { name: "GitHub", url: "ADD_GITHUB_URL" },
      { name: "LinkedIn", url: "ADD_LINKEDIN_URL" },
    ],
  },
  options: {
    seo: {
      title: "Subrata Das Portfolio",
      description:
        "Portfolio of Subrata Kumar Das, Tech Lead - Hybrid Mobile Apps.",
      image: "/images/og-image.jpg",
      url: "https://subraatakumar.com",
    },
  },
};
