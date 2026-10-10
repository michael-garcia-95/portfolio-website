export type Project = {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  href: string;
  technologies: string[];
  year: string;
  client: string;
  featured?: boolean;
  challenge: string;
  approach: string;
  outcome: string;
};

export const projects: Project[] = [
  {
    id: "omoda-jaecoo",
    title: "OMODA & JAECOO",
    category: "Automotive",
    description:
      "A modern digital experience designed to showcase OMODA & JAECOO vehicles through bold visuals and a refined user experience.",
    image: "/images/projects/omoda-jaecoo.webp",
    href: "/work/omoda-jaecoo",
    technologies: ["Next.js", "React", "Tailwind CSS"],
    year: "2026",
    client: "Concept Project",
    featured: true,
    challenge:
      "Create a premium digital experience for an automotive brand that feels modern, sophisticated, and visually distinctive while making its vehicle lineup easy to explore.",
    approach:
      "The design focused on strong typography, immersive vehicle imagery, clear information hierarchy, and a streamlined browsing experience. The interface was built to feel premium without becoming difficult to navigate.",
    outcome:
      "A polished automotive website concept that gives the brand a stronger digital presence and creates a clear path from discovering a vehicle to learning more about it.",
  },
  {
    id: "darren-car-sales",
    title: "Darren Car Sales",
    category: "Automotive",
    description:
      "A clean and approachable automotive website focused on presenting inventory clearly and making it easy for customers to get in touch.",
    image: "/images/projects/darren-car-sales.webp",
    href: "/work/darren-car-sales",
    technologies: ["Next.js", "React", "Tailwind CSS"],
    year: "2026",
    client: "Concept Project",
    featured: true,
    challenge:
      "Design a straightforward automotive experience that allows customers to browse available vehicles while presenting the dealership in a more professional digital environment.",
    approach:
      "The interface prioritizes vehicle imagery, straightforward navigation, inventory browsing, and prominent contact actions. The design balances personality with the practicality expected from an automotive website.",
    outcome:
      "A modern dealership experience designed to make browsing inventory simple while giving the business a stronger and more credible online presence.",
  },
  {
    id: "printing-works",
    title: "Trinidad & Tobago Printing Works",
    category: "Business",
    description:
      "A sophisticated web presence designed to give an established printing business a more modern digital identity.",
    image: "/images/projects/printing-works.webp",
    href: "/work/printing-works",
    technologies: ["Next.js", "React", "Tailwind CSS"],
    year: "2026",
    client: "Concept Project",
    challenge:
      "Create a more contemporary digital presence for an established business while maintaining the trust and professionalism associated with the company.",
    approach:
      "The visual direction combines refined typography, a restrained color palette, and structured content to create a premium but approachable experience.",
    outcome:
      "A refreshed digital direction that positions the business more confidently online.",
  },
];