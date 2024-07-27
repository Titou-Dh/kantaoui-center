import Hero from "@/components/hero";
import Features from "@/components/Features";
import Why from "@/components/Why";
import About from "@/components/About";
import Localisation from "@/components/Localisation";

export default function Home() {
  return (
    <section className="">
      <Hero />
      <About />
      
      <Features />
      <Why />
      <Localisation />
    </section>
  );
}


