import About from "@/components/About";
import Contact from "@/components/Contact";
import Education from "@/components/Education";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Nav from "@/components/Nav";
import Projects from "@/components/Projects";
import Image from "next/image";

export default function Home() {
  return (
    <main id="main">
      <Nav />
      <HeroSection />
      <About />
      <Education />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
