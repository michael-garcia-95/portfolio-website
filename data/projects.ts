
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
  packageUrl?: string;
  sourceUrl?: string;
  liveUrl?: string;
  story: string[];
  highlights: string[];
  note: string;
};

export const projects: Project[] = [
  
  {
    id: "react-simple-charts",
    title: "React Simple Charts",
    category: "Open-source library",
    description:
      "An open-source React and TypeScript charting library with five chart types, customizable components, and accessible interactions.",
    href: "/work/react-simple-charts",
    status: "v0.1.0 published on npm",
    role: "Creator & maintainer",
    technologies: [
      "React",
      "TypeScript",
      "SVG",
      "Vitest",
    ],
    featured: true,
    cover: "charts",
    image: "/images/projects/react-simple-charts.webp",
  
    sourceUrl:
      "https://github.com/michael-garcia-95/react-simple-charts",
    liveUrl:
      "https://michael-garcia-95.github.io/react-simple-charts/",
    packageUrl:
      "https://www.npmjs.com/package/@michael-garcia-95/react-simple-charts",
  
    story: [
      "I created React Simple Charts to make it easier to add common charts to React applications. The first public release, v0.1.0, includes line, area, bar, pie, and donut charts.",
  
      "A significant part of the work involved designing a flexible TypeScript API, supporting keyboard and screen-reader interactions, handling responsive layouts and server rendering, and testing compatibility across different React environments.",
    ],
  
    highlights: [
      "Published version 0.1.0 to npm under the MIT license.",
      "Five chart types with customizable components.",
      "Accessibility features, including keyboard navigation and data alternatives.",
      "Automated testing and compatibility verification for React 18 and 19.",
    ],
  
    note:
      "Version 0.1.0 is publicly available on npm. I'm continuing to develop and improve the library.",
  },
  

  
  {
    id: "roundza",
    title: "Roundza",
    category: "Multiplayer party games",
    description:
      "A multiplayer party-game app built with Next.js and Supabase, where players use their own phones to join shared lobbies and play together.",
    href: "/work/roundza",
    status: "Playable web version · Full release in development",
    role: "Independent developer",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Supabase",
    ],
    featured: true,
    cover: "games",
    image: "/images/projects/roundza.webp",
    liveUrl: "https://playroundza.com",
  
    story: [
      "Roundza brings four party games together in one application: Charades, Imposter, Draw It, and Hot Seat. Players join a shared lobby from their own phones and can switch between games without setting everything up again.",
  
      "I've worked on the multiplayer lobby system, game rules, and session management that keep players connected throughout a game. The app supports guest play, and I'm developing account and content-access features for the first full release.",
    ],
  
    highlights: [
      "Four party games with different rules and interactions.",
      "Shared multiplayer lobbies and game-session management.",
      "Guest play and account functionality.",
      "Server-side game validation and content-access systems.",
    ],
  
    note:
      "A playable web version is available at playroundza.com. Development continues on the first full production release.",
  },
  
  {
    id: "ttmotorsales",
    title: "TTMotorSales",
    category: "Vehicle classifieds",
    description:
      "A live vehicle classifieds website for Trinidad & Tobago, with features for browsing, advertising, and managing used-vehicle listings.",
    href: "/work/ttmotorsales",
    status: "Live website · Laravel rebuild in progress",
    role: "Full-stack development & maintenance",
    technologies: [
      "PHP",
      "MySQL",
      "Laravel (rebuild)",
    ],
    featured: true,
    cover: "marketplace",
    image: "/images/projects/ttmotorsales.webp",
    liveUrl: "https://ttmotorsales.com",
  
    story: [
      "TTMotorSales is a vehicle classifieds website I built for Trinidad & Tobago. It allows people to browse used vehicles for sale and create listings to advertise their own vehicles.",
  
      "The existing website uses PHP and MySQL. I'm also working on a Laravel rebuild to modernize the application, improve maintainability, and develop better listing-management and administrative workflows.",
    ],
  
    highlights: [
      "Used-vehicle listings and browsing.",
      "Listing creation and management for sellers.",
      "Administrative tools for managing website operations.",
      "An ongoing modernization project using Laravel.",
    ],
  
    note:
      "The existing PHP/MySQL website remains live. The Laravel rebuild is a separate work in progress.",
  },
  
];
