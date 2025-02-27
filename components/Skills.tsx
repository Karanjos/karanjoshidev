import { TECHNOLOGIES } from "@/lib/data";
import ImageWrapper from "./Image-Wrapper";
import Link from "next/link";
import Tag from "./Tag";

const Skills = () => {
  return (
    <section
      id="skills"
      className="bg-gray-100 text-gray-950 dark:bg-gray-950 dark:text-gray-100 w-full py-20"
    >
      <div className="flex flex-col justify-center items-center">
        <div className="self-center">
          <Tag label="Skills" />
        </div>
        <div className="max-w-7xl mx-auto flex gap-12 items-center justify-center lg:justify-between py-8 px-4 lg:px-12 my-20">
          {TECHNOLOGIES.map((tech, index) => (
            <div
              key={index}
              className="flex items-center flex-col justify-center gap-4"
            >
              <Link href={tech.url} target="_blank" rel="noopener noreferrer">
                <ImageWrapper
                  src={tech.logo}
                  srcForDarkMode={tech.darkModeLogo}
                  alt={tech.name}
                  className="transition-transform duration-300 md:hover:scale-110"
                />
              </Link>
              <h2 className="text-xl font-semibold">{tech.name}</h2>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Skills;
