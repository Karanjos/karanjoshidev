import About from "@/components/About";
import Header from "@/components/Header";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center">
      <Header />
      <Hero />
      <About />
    </main>
  );
}
