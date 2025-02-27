import Tag from "./Tag";

const WorkExperience = () => {
  return (
    <section
      id="experience"
      className="bg-gray-100 text-gray-950 dark:bg-gray-900 dark:text-gray-100 w-full h-full py-20"
    >
      <div className="flex flex-col justify-center items-center">
        <div className="self-center">
          <Tag label="Experience" />
        </div>
        <div className="max-w-7xl mx-auto px-4 lg:px-12 h-full flex lg:flex-row flex-col justify-between items-center gap-20 lg:gap-10 py-20"></div>
      </div>
    </section>
  );
};
export default WorkExperience;
