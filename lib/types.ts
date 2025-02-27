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
  technologies: Technology[];
};

export type ProjectDetails = {
  name: string;
  description: string;
  technologies: Technology[];
  url: string;
  previewImages: string | StaticImageData;
  githubUrl: string;
};
