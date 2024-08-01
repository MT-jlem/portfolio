import About from "@/components/About";
import Contact from "@/components/Contact";
import Education from "@/components/Education";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Projects from "@/components/Projects";
import Image from "next/image";

export default function Home() {
  return (
    <main id="main" className="flex flex-col items-center justify-center">
      <HeroSection />
      <About />
      {/* <Education /> */}
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
