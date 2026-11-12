// Edit everything here: your name, links and project details.
export const profile = {
  name: "Abhijeet Kumar",
  email: "abhijeet8745@gmail.com",
  location: "Delhi, India",
  // links: [
  //   { label: "Behance", href: "https://behance.net/yourname" },
  //   { label: "Dribbble", href: "https://dribbble.com/yourname" },
  //   { label: "LinkedIn", href: "https://linkedin.com/in/yourname" },
  // ],
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
    title: "Malhar Fest: poster and identity",
    year: "2026",
    role: "Brand identity, poster series, social kit",
    summary:
      "A visual identity for a three-day student art festival. One set of bold shapes builds every poster, ticket and Instagram tile, so the whole campaign is recognisable from across a street.",
    points: [
      { heading: "The problem", text: "Past festival posters looked different every year and nobody remembered them." },
      { heading: "The idea", text: "A kit of four shapes that stack, overlap and crop to make a new poster each day." },
      // { heading: "The result", text: "Ticket sales opened 2 weeks early and the posters were reused by three partner colleges." },
    ],
    tools: ["Illustrator", "Photoshop", "InDesign"],
  },
  {
    id: "uiux",
    kind: "Web design & development",
    title: "Pranj Legal Associates: a law firm website",
    year: "2026",
    role: "UI design, front-end development, deployment",
    summary:
      "A website for a legal practice that explains its services in plain language and gives visitors a simple way to book a consultation. I designed, built and deployed it.",
    points: [
      {
        heading: "The problem",
        text: "Legal concerns feel stressful and confusing, and most law firm sites are cluttered and hard to act on.",
      },
      {
        heading: "The idea",
        text: "Clear practice areas, a short step-by-step process, and one simple enquiry form on every path.",
      },
      // { heading: "The result", text: "Add a real outcome here, e.g. live site, client feedback, load speed." },
    ],
    tools: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
  },
];

export const skills = {
  design: ["Brand identity", "Poster and print", "Illustration", "Layout"],
  product: ["User research", "Prototyping in Figma", "Design systems", "Front-end in Next.js"],
};
