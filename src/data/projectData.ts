import { images } from "./images";

export type Project = {
  id: string;
  img: string;
  title: string;
  desc: string;
  type: string;
  techStack: string[];
};

export const projects: Project[] = [
  {
    id: "vsa",
    img: images.vsa,
    title: "VSA@UCR Website",
    desc: "Collaborated with a team of 15 developers to build a website for the Vietnamese Student Association @ UC Riverside.",
    type: "Frontend",
    techStack: ["React", "Typescript", "TailwindCSS", "Next.js", "Figma"],
  },
  {
    id: "portfolio",
    img: images.portfolio,
    title: "Personal Portfolio",
    desc: "Modern personal portfolio built using React, Tailwind CSS, and Vite, featuring reusable components, responsive layouts, and a fast development workflow.",
    type: "Frontend",
    techStack: ["React", "Typescript", "Vite", "TailwindCSS"],
  },
  
];
