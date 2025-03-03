import { PROJECTSDETAILS } from "@/lib/data";
import Container from "./Container";
import ProjectCard from "./ProjectCard";
import Card from "./Card";

const Projects = () => {
  return (
    <Container
      tag="Projects"
      id="projects"
      classNames="bg-gray-100 dark:bg-gray-950 text-gray-900 dark:text-gray-100"
    >
      <div className="flex flex-col justify-between items-center gap-20 lg:gap-10">
        <h4 className="text-lg font-normal my-8 text-center">
          Some of the noteworthy projects I have worked on.
        </h4>
        <div className="flex flex-col gap-10">
          {PROJECTSDETAILS.map((project, index) => (
            <Card key={index}>
              <ProjectCard {...project} />
            </Card>
          ))}
        </div>
      </div>
    </Container>
  );
};
export default Projects;
