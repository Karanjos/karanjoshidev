import Image from "next/image";
import sideImage from "../public/full_me_2.jpg";
import Container from "./Container";

const About = () => {
  return (
    <Container
      id="about"
      tag="About"
      classNames="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-200"
    >
      <div className="flex-1">
        <Image
          src={sideImage}
          alt="Me | Karan Joshi"
          height={400}
          className="rounded-xl shadow-lg shadow-gray-900"
        />
      </div>
      <div className="flex flex-col gap-6 flex-1">
        <h2 className="text-3xl font-bold">
          Curious about me? Here you have it:
        </h2>
        <div className="flex flex-col gap-4">
          <p>
            I&apos;m a passionate, self-proclaimed developer who specializes in
            full stack development (React.js & Node.js). I am very enthusiastic
            about bringing the technical and visual aspects of digital products
            to life. User experience, pixel perfect design, and writing clear,
            readable, highly performant code matters to me.
          </p>
          <p>
            I began my journey in 2024, and since then, I&apos;ve continued to
            grow and evolve as a developer, taking on new challenges and
            learning the latest technologies along the way. I&apos;m building
            cutting-edge web applications using modern technologies such as
            Next.js, TypeScript, Tailwindcss, Node.js and much more.
          </p>
          <p>
            I am very much a progressive thinker and enjoy working on products
            end to end, from ideation all the way to development.
          </p>
          <p>Finally, some quick bits about me.</p>
          <ul className="list-disc list-inside p-2">
            <li>Based in New Delhi, India</li>
            <li>BTech in Computer Science and Engineering</li>
            <li>Avid learner</li>
            <li>Full time Game Developer</li>
            <li>Pasionate for Software Development</li>
          </ul>
          <p>
            One last thing, I&apos;m available for freelance work, so feel free
            to reach out and say hello! I promise I don&apos;t bite 😉
          </p>
        </div>
      </div>
    </Container>
  );
};
export default About;
