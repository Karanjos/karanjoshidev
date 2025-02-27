import About from "@/components/About";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import WorkExperience from "@/components/WorkExperience";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center scroll-smooth">
      <Header />
      <Hero />
      <About />
      <Skills />
      <WorkExperience />
    </main>
  );
}
