
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
      "A React charting library I'm building to make common charts easier to add and customize.",
    href: "/work/react-simple-charts",
    status: "Preparing first release",
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

    story: [
      "React Simple Charts is a small library I'm building for people who need charts in their React apps. It supports line, area, bar, pie, and donut charts.",

      "A lot of the work has gone into making the components easy to use without limiting what developers can do with them. I've also spent time on accessibility, testing, and making sure the charts behave properly in different React setups.",
    ],

    highlights: [
      "Five chart types with shared functionality.",
      "TypeScript support and customizable components.",
      "A playground for trying out charts.",
      "Automated tests and documentation.",
    ],

    note:
      "The library is still in development. I'm working toward its first public release.",
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
