// Edit everything here: your name, links and project details.
export const profile = {
  name: "Your Name",
  email: "hello@yourname.com",
  location: "Delhi, India",
  links: [
    { label: "Behance", href: "https://behance.net/yourname" },
    { label: "Dribbble", href: "https://dribbble.com/yourname" },
    { label: "LinkedIn", href: "https://linkedin.com/in/yourname" },
  ],
};

export type Project = {
  id: "graphic" | "uiux";
  kind: string;
  title: string;
  year: string;
  role: string;
  summary: string;
  points: { heading: string; text: string }[];
  tools: string[];
};

export const projects: Project[] = [
  {
    id: "graphic",
    kind: "Graphic design",
    title: "Kala Fest: poster and identity",
    year: "2026",
    role: "Brand identity, poster series, social kit",
    summary:
      "A visual identity for a three-day student art festival. One set of bold shapes builds every poster, ticket and Instagram tile, so the whole campaign is recognisable from across a street.",
    points: [
      { heading: "The problem", text: "Past festival posters looked different every year and nobody remembered them." },
      { heading: "The idea", text: "A kit of four shapes that stack, overlap and crop to make a new poster each day." },
      { heading: "The result", text: "Ticket sales opened 2 weeks early and the posters were reused by three partner colleges." },
    ],
    tools: ["Illustrator", "Photoshop", "InDesign"],
  },
  {
    id: "uiux",
    kind: "UI/UX design",
    title: "Fern: a plant-care app",
    year: "2026",
    role: "Research, UX flows, UI design, prototype",
    summary:
      "A mobile app that tells new plant owners exactly what to do today. I researched, designed and prototyped it, then tested it with 8 first-time plant owners.",
    points: [
      { heading: "The problem", text: "Beginners forget to water, or water too much, and give up within a month." },
      { heading: "The idea", text: "One clear task per plant per day, with a one-tap way to mark it done." },
      { heading: "The result", text: "7 of 8 testers finished their first care task in under 20 seconds." },
    ],
    tools: ["Figma", "FigJam", "Next.js", "TypeScript"],
  },
];

export const skills = {
  design: ["Brand identity", "Poster and print", "Typography", "Illustration", "Layout"],
  product: ["User research", "Wireframes", "Prototyping in Figma", "Design systems", "Front-end in Next.js"],
};
