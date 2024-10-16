import Hero from "@/components/hero";
import Features from "@/components/Features";
import Why from "@/components/Why";
import About from "@/components/About";
import Localisation from "@/components/Localisation";
import Stats from "@/components/Stats";

export default function Home() {
  return (
    <section >
      <Hero />
      <About />
      <Stats />
      <Why />
      <Localisation />
    </section>
  );
}


