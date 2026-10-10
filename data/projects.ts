
export type Project = {
  id: string;
  title: string;
  category: string;
  description: string;
  href: string;
  status: string;
  role: string;
  technologies: string[];
  featured: boolean;
  cover: "charts" | "games" | "marketplace";
  image?: string;
  sourceUrl?: string;
  liveUrl?: string;
  challenge: string;
  approach: string;
  outcome: string;
};

export const projects: Project[] = [
  {
    id: "react-simple-charts",
    title: "React Simple Charts",
    category: "Open-source library",
    description:
      "A lightweight, customizable React charting library built with TypeScript, with a focus on approachable APIs and accessible data visualization.",
    href: "/work/react-simple-charts",
    status: "Preparing 1.0",
    role: "Creator & maintainer",
    technologies: ["React", "TypeScript", "SVG", "Vitest"],
    featured: true,
    cover: "charts",
    sourceUrl:
      "https://github.com/michael-garcia-95/react-simple-charts",
    challenge:
      "Make common React charting needs easier to implement while maintaining a useful balance of customization, accessibility, and developer experience.",
    approach:
      "Designed typed component APIs, SVG-based chart rendering, shared chart infrastructure, and automated tests. The library currently includes line, area, bar, pie, and donut charts.",
    outcome:
      "Five chart components are implemented with an integration playground and supporting documentation. The first 1.0 release is being prepared.",
  },
  {
    id: "roundza",
    title: "Roundza",
    category: "Multiplayer web application",
    description:
      "A multiplayer party-game platform featuring interactive social games designed for groups playing together.",
    href: "/work/roundza",
    status: "In development",
    role: "Independent developer",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Supabase",
    ],
    featured: true,
    cover: "games",
    liveUrl: "https://playroundza.com",
    challenge:
      "Build an accessible multiplayer party-game experience that groups can enjoy across their own devices.",
    approach:
      "Developed the application using Next.js and Supabase, including game sessions, multiplayer lobby functionality, authentication, and backend game rules.",
    outcome:
      "A playable web version is available, with continued work toward the first full production release.",
  },
  {
    id: "ttmotorsales",
    title: "TTMotorSales",
    category: "Vehicle classifieds platform",
    description:
      "A used-vehicle classifieds website helping people in Trinidad & Tobago find vehicles or advertise their own for sale.",
    href: "/work/ttmotorsales",
    status: "Live website",
    role: "Full-stack development & maintenance",
    technologies: ["PHP", "Laravel", "MySQL"],
    featured: true,
    cover: "marketplace",
    liveUrl: "https://ttmotorsales.com",
    challenge:
      "Make it easier for vehicle buyers and sellers in Trinidad & Tobago to connect through a dedicated online classifieds platform.",
    approach:
      "Worked on PHP-based application functionality, database-backed listings, and administrative workflows. A Laravel modernization is also underway.",
    outcome:
      "The public classifieds website remains available while further development and modernization continue.",
  },
];
