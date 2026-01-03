import { images } from "./images";

export type Project = {
  id: string;
  img: string;
  title: string;
  desc: string;
  type: string;
};

export const projects: Project[] = [
  {
    id: "vsa",
    img: images.test,
    title: "Vietnamese Student Association Website",
    desc: "Collaborated with a team of 15 developers to build a website for the Vietnamese Student Association @ UC Riverside.",
    type: "Frontend",
  },
  {
    id: "lol",
    img: images.portfolio,
    title: "Personal Portfolio",
    desc: "Modern personal portfolio built using React, Tailwind CSS, and Vite, featuring reusable components, responsive layouts, and a fast development workflow.",
    type: "Frontend",
  },
];
