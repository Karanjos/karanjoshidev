import { ExperienceDetails } from "@/lib/types";
import Image from "next/image";
import Link from "next/link";

type ExperienceCardProps = ExperienceDetails;

const ExperienceCard = ({ ...props }: ExperienceCardProps) => {
  return (
    <div className="flex justify-center items-center max-w-4xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between gap-4 lg:gap-10 p-4 w-full">
        <Link
          href={props.url}
          className="flex flex-col gap-2 lg:w-1/5 items-start justify-start"
          target="_blank"
        >
          <Image src={props.logo} alt="Company_Name" className="size-20" />
          <h3 className="text-lg">{props.company}</h3>
        </Link>
        <div className="flex items-center justify-center lg:w-3/5">
          <div className="flex flex-col gap-2 items-start justify-start">
            {" "}
            <h2 className="text-2xl font-bold">{props.role}</h2>
            <div className="font-normal text-md flex justify-start items-center">
              <p>
                Skills :{" "}
                {props.technologies.map((skill, index) => (
                  <span key={index} className="">
                    <span className="font-light text-md">
                      {skill}
                      {index < props.technologies.length - 1 && ", "}
                    </span>
                  </span>
                ))}
              </p>
            </div>
            <p>{props.summmary}</p>
          </div>
        </div>
        <div className="flex flex-col gap-0 lg:w-1/5 items-start justify-start">
          <p className="font-normal text-sm">
            {props.startDate} -
            {props.currentlyWorkHere ? "Present" : props.endDate}
          </p>
          <p className="font-light text-sm">
            {props.currentlyWorkHere
              ? "(Currently working here)"
              : `(${props.duration} of experience)`}
          </p>
        </div>
      </div>
    </div>
  );
};
export default ExperienceCard;
