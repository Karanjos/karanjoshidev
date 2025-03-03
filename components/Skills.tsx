import { TECHNOLOGIES } from "@/lib/data";
import ImageWrapper from "./Image-Wrapper";
import Link from "next/link";
import Container from "./Container";

const Skills = () => {
  return (
    <Container
      id="skills"
      tag="Skills"
      classNames="bg-gray-100 dark:bg-gray-950 text-gray-900 dark:text-gray-100"
    >
      <div className="flex flex-col justify-center items-center">
        <h4 className="text-lg font-normal mt-8 text-center">
          Technologies I have worked with.
        </h4>
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 lg:gap-20 gap-10 px-4 lg:px-0 mt-20">
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
                  className="transition-transform duration-300 hover:scale-110"
                />
              </Link>
              <h2 className="text-xl font-semibold">{tech.name}</h2>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};
export default Skills;
