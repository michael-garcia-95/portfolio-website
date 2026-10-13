
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
      "A collection of party games that friends can play together using their own phones.",
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
    image: "/images/projects/roundza.webp",
    liveUrl: "https://playroundza.com",

    story: [
      "Roundza is a party-game app built around playing together. Players join a shared lobby on their own devices and choose from games like Charades, Imposter, Draw It, and Hot Seat.",

      "I've been working on both the games themselves and the systems that make everything work together. That includes managing lobbies, handling game sessions, and building the account features needed for future paid content.",
    ],

    highlights: [
      "Four different party games.",
      "Shared lobbies and multiplayer sessions.",
      "Game rules and session management.",
      "Account and content features for the full release.",
    ],

    note:
      "A playable web version is available. I'm continuing to work on the first full release.",
  },

  {
    id: "ttmotorsales",
    title: "TTMotorSales",
    category: "Vehicle classifieds",
    description:
      "A website for buying and selling used vehicles in Trinidad & Tobago.",
    href: "/work/ttmotorsales",
    status: "Live website",
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
      "TTMotorSales is a used-vehicle classifieds website for Trinidad & Tobago. People can browse vehicles for sale or create listings to advertise their own.",

      "Alongside the existing website, I've been working on a Laravel rebuild. The aim is to make the application easier to maintain and improve how listings and administrative tasks are handled.",
    ],

    highlights: [
      "Vehicle listings and browsing.",
      "Features for buyers and sellers.",
      "Listing management and administrative tools.",
      "An ongoing rebuild using Laravel.",
    ],

    note:
      "The existing website remains live while development on the Laravel version continues.",
  },
];
