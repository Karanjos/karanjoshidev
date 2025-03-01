import About from "@/components/About";
import GetInTouch from "@/components/GetInTouch";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import WorkExperience from "@/components/WorkExperience";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center w-full h-full">
      <Header />
      <Hero />
      <About />
      <Skills />
      <WorkExperience />
      <Projects />
      <GetInTouch />
    </main>
  );
}
