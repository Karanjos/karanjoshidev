import { ExperienceDetails, ProjectDetails, Technology } from "./types";
import Javascript from "../public/icon-javascript.svg";
import ReactJs from "../public/icon-react.svg";
import NodeJs from "../public/icon-nodejs.svg";
import Typescript from "../public/icon-typescript.svg";
import MongoDB from "../public/icon-mongodb.svg";
import Tailwind from "../public/icon-tailwindcss.svg";
import ExpressLightMode from "../public/icon-express-light.svg";
import ExpressDarkMode from "../public/icon-express.svg";
import NextJs from "../public/icon-nextjs.svg";
import Git from "../public/icon-git.svg";
import SocketIODarkMode from "../public/icon-socket.svg";
import SocketIOLightMode from "../public/icon-socket-light.svg";

export const TECHNOLOGIES: Technology[] = [
  {
    name: "Javascript",
    logo: Javascript,
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    name: "ReactJs",
    logo: ReactJs,
    url: "https://reactjs.org/",
  },
  {
    name: "NodeJs",
    logo: NodeJs,
    url: "https://nodejs.org/en/",
  },
  {
    name: "Typescript",
    logo: Typescript,
    url: "https://www.typescriptlang.org/",
  },
  {
    name: "MongoDB",
    logo: MongoDB,
    url: "https://www.mongodb.com/",
  },
  {
    name: "Tailwind",
    logo: Tailwind,
    url: "https://tailwindcss.com/",
  },
  {
    name: "Express",
    logo: ExpressDarkMode,
    darkModeLogo: ExpressLightMode,
    url: "https://expressjs.com/",
  },
  {
    name: "NextJs",
    logo: NextJs,
    url: "https://nextjs.org/",
  },
  {
    name: "Git",
    logo: Git,
    url: "https://git-scm.com",
  },
  {
    name: "SocketIO",
    logo: SocketIODarkMode,
    darkModeLogo: SocketIOLightMode,
    url: "https://socket.io/",
  },
];

export const PROJECTSDETAILS: ProjectDetails[] = [
  {
    name: "Portfolio",
    description: "A portfolio website to showcase my projects and skills.",
    technologies: [
      TECHNOLOGIES[0],
      TECHNOLOGIES[1],
      TECHNOLOGIES[2],
      TECHNOLOGIES[3],
      TECHNOLOGIES[6],
      TECHNOLOGIES[7],
      TECHNOLOGIES[8],
    ],
    githubUrl: "",
    previewImages: "",
    url: "",
  },
  {
    name: "Placement Portal",
    description:
      "A web application to manage the placement process of a college.",
    technologies: [
      TECHNOLOGIES[0],
      TECHNOLOGIES[1],
      TECHNOLOGIES[2],
      TECHNOLOGIES[3],
      TECHNOLOGIES[4],
      TECHNOLOGIES[6],
    ],
    githubUrl: "",
    previewImages: "",
    url: "",
  },
  {
    name: "E-Commerce",
    description: "An e-commerce website to buy and sell products.",
    technologies: [
      TECHNOLOGIES[0],
      TECHNOLOGIES[1],
      TECHNOLOGIES[2],
      TECHNOLOGIES[3],
      TECHNOLOGIES[4],
      TECHNOLOGIES[6],
    ],
    githubUrl: "",
    previewImages: "",
    url: "",
  },
  {
    name: "Blog",
    description: "A blog website to write and share blogs.",
    technologies: [
      TECHNOLOGIES[0],
      TECHNOLOGIES[1],
      TECHNOLOGIES[2],
      TECHNOLOGIES[3],
      TECHNOLOGIES[4],
      TECHNOLOGIES[6],
    ],
    githubUrl: "",
    previewImages: "",
    url: "",
  },
];

export const EXPERIENCEDETAILS: ExperienceDetails[] = [
  {
    company: "Company 1",
    logo: "",
    role: "Software Developer",
    startDate: "Jan 2021",
    endDate: "Present",
    currentlyWorkHere: true,
    duration: "1 year 6 months",
    summmary: "Worked on a project to develop a web application.",
    technologies: [TECHNOLOGIES[0], TECHNOLOGIES[1], TECHNOLOGIES[2]],
  },
  {
    company: "Company 2",
    logo: "",
    role: "Software Developer",
    startDate: "Jan 2020",
    endDate: "Dec 2020",
    currentlyWorkHere: false,
    duration: "1 year",
    summmary: "Worked on a project to develop a web application.",
    technologies: [TECHNOLOGIES[0], TECHNOLOGIES[1], TECHNOLOGIES[2]],
  },
  {
    company: "Company 3",
    logo: "",
    role: "Software Developer",
    startDate: "Jan 2019",
    endDate: "Dec 2019",
    currentlyWorkHere: false,
    duration: "1 year",
    summmary: "Worked on a project to develop a web application.",
    technologies: [TECHNOLOGIES[0], TECHNOLOGIES[1], TECHNOLOGIES[2]],
  },
];
