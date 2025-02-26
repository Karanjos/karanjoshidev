import Image from "next/image";
import sideImage from "../public/me.jpg";

const About = () => {
  return (
    <section
      id="about"
      className="bg-gray-100 text-gray-950 dark:bg-gray-900 dark:text-gray-100 w-full h-full py-20"
    >
      <div className="rounded-3xl px-4 py-2 dark:bg-gray-700 bg-gray-300 w-40 mx-auto">
        <h1 className="text-gray-900 dark-text-gray-100 text-xl font-bold uppercase text-center">
          About me
        </h1>
      </div>
      <div className="max-w-7xl mx-auto px-4 lg:px-12 h-full flex lg:flex-row flex-col justify-between items-center gap-20 lg:gap-10 py-20">
        <div className="">
          <Image
            src={sideImage}
            alt="Me | Karan Joshi"
            width={250}
            height={250}
            className="rounded-xl shadow-lg shadow-gray-900"
          />
        </div>
        <div className=""></div>
      </div>
    </section>
  );
};
export default About;
