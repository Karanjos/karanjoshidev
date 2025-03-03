import type { StaticImageData } from "next/image";

export type Technology = {
  name: string;
  logo: string | StaticImageData;
  darkModeLogo?: string | StaticImageData;
  url: string;
};

export type ExperienceDetails = {
  logo: string | StaticImageData;
  company: string;
  role: string;
  duration: string;
  currentlyWorkHere?: boolean;
  startDate: string;
  endDate?: string;
  summmary: string;
  technologies: string[];
  location: string;
  url: string;
};

export type ProjectDetails = {
  name: string;
  description: string;
  technologies: string[];
  url: string;
  previewImage: string | StaticImageData;
  githubUrl: string;
};
