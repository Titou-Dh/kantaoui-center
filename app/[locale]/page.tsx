import Hero from "@/components/hero";
import Features from "@/components/Features";
import Why from "@/components/Why";
import About from "@/components/About";
import Localisation from "@/components/Localisation";
import Stats from "@/components/Stats";
import Image from "next/image";

export default function Home() {
  return (
    <section >
      <Hero />
      <About />
      <Stats />
      <Why />
      <Localisation />
      <Image src="/port.jpg" alt="hero" width={1100} height={600} className="mx-auto my-10 rounded-xl" />
    </section>
  );
}


