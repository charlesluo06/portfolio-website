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
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting Lorem Ipsum is simply dummy text of the printing and typesettingLorem Ipsum is simply dummy text of the printing and typesetting",
    type: "Frontend",
  },
  {
    id: "lol",
    img: images.portfolio,
    title: "Personal Portfolio",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting Lorem Ipsum is simply dummy text of the printing and typesettingLorem Ipsum is simply dummy text of the printing and typesetting",
    type: "Frontend",
  },
];
