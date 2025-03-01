import { ExperienceDetails } from "@/lib/types";
import Image from "next/image";
import Link from "next/link";

type ExperienceCardProps = ExperienceDetails;

const ExperienceCard = ({ ...props }: ExperienceCardProps) => {
  return (
    <div className="flex justify-center items-center max-w-4xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between gap-4 lg:gap-10 p-4 md:p-8 w-full">
        <Link href={props.url} className="flex flex-col gap-2">
          <Image src={props.logo} alt="Company_Name" />
          <h3 className="text-lg">{props.company}</h3>
        </Link>
        <div className="flex flex-col gap-2 items-start justify-start">
          <h2 className="text-2xl font-bold">{props.role}</h2>
          <div className="font-normal text-md flex gap-2 items-center">
            <p>Skills : </p>
            <p>
              {props.technologies.map((skill, index) => (
                <span key={index} className="">
                  <span className="font-light text-md">
                    {skill.name}
                    {index < props.technologies.length - 1 && ", "}
                  </span>
                </span>
              ))}
            </p>
          </div>
          <p>{props.summmary}</p>
        </div>
        <div className="flex flex-col gap-0">
          <p className="font-normal text-lg">
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
