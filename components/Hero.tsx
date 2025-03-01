import LocationOnSharpIcon from "@mui/icons-material/LocationOnSharp";
import CircleIcon from "@mui/icons-material/Circle";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Image from "next/image";
import sideImage from "../public/me.jpg";
import FlipImage from "./FlipImage";
import Link from "next/link";

const Hero = () => {
  return (
    <section
      className="bg-gray-100 text-gray-950 dark:bg-gray-950 dark:text-gray-100 w-full h-full"
      id="hero"
    >
      <div className="max-w-7xl mx-auto px-4 lg:px-12 h-full flex lg:flex-row flex-col-reverse justify-between items-center py-20 gap-20 lg:gap-10 mt-12 lg:mt-0 ">
        <div className="lg:max-w-[50%] flex flex-col gap-16 lg:gap-20 flex-1">
          <div className="flex flex-col gap-4">
            <h1 className="text-4xl lg:text-5xl font-bold tracking-wider">
              Hi, I&apos;m Karan <span>👋</span>
            </h1>
            <p className="text-md tracking-normal font-light">
              I&apos;m a full-stack developer( React.js + Node.js) with a focus
              on creating (and occasionally designing) exceptional digital
              experiences that are fast, accessible, visually appealing, and
              responsive. Even though I have been creating web applications for
              over 2 years, I still love it as if it was something new.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-start gap-2">
              <LocationOnSharpIcon fontSize="large" />
              <p className="text-md tracking-wide font-semibold">
                New Delhi, India
              </p>
            </div>
            <div className="flex items-center justify-start gap-3 ps-1">
              <CircleIcon color="success" />
              <p className="text-md tracking-wide font-semibold">
                Available for new projects.
              </p>
            </div>
          </div>
          <div className="flex items-center justify-start gap-3">
            <Link
              href="https://www.linkedin.com/in/karan-joshi-8b3910213/"
              target="_blank"
            >
              <LinkedInIcon />
            </Link>
            <Link href="https://github.com/Karanjos" target="_blank">
              <GitHubIcon />
            </Link>
          </div>
        </div>

        <FlipImage />
      </div>
    </section>
  );
};
export default Hero;
