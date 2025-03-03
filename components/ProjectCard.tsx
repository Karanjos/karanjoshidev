import { ProjectDetails } from "@/lib/types";
import Image from "next/image";
import Link from "next/link";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import GitHubIcon from "@mui/icons-material/GitHub";
import image from "../public/full_me_2.jpg";

type ProjectDetailsProps = ProjectDetails;

const ProjectCard = ({
  name,
  description,
  url,
  githubUrl,
  technologies,
  previewImage,
}: ProjectDetailsProps) => {
  return (
    <div className="flex justify-center flex-col lg:flex-row items-center max-w-5xl mx-auto gap-4 lg:gap-10 w-full my-4">
      <div className="flex justify-center items-center lg:w-1/2  rounded-2xl lg:pe-10">
        <Link href={url} target="_blank">
          <Image src={image} alt={name} className="size-full rounded-xl" />
        </Link>
      </div>
      <div className="flex flex-col gap-10 items-start justify-start lg:w-1/2">
        <h2 className="font-bold text-2xl">{name}</h2>
        <p className="text-md font-normal">{description}</p>
        <div className="flex gap-2 flex-wrap">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="rounded-2xl dark:bg-gray-700 bg-gray-300 dark:text-gray-200 text-gray-800 p-2 px-4 transition-all duration-300 hover:scale-110 hover:dark:text-white hover:text-gray-950"
            >
              <p className="text-md">{tech}</p>
            </div>
          ))}
        </div>
        <div className="flex gap-4">
          <Link
            href={url}
            target="_blank"
            className="transition-all duration-300 hover:bg-gray-200 dark:hover:bg-gray-700 p-2 rounded-2xl"
          >
            <OpenInNewIcon />
          </Link>
          <Link
            href={githubUrl}
            target="_blank"
            className="transition-all duration-300 hover:bg-gray-200 dark:hover:bg-gray-700 p-2 rounded-2xl"
          >
            <GitHubIcon />
          </Link>
        </div>
      </div>
    </div>
  );
};
export default ProjectCard;
