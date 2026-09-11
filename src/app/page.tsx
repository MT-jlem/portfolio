import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Projects from "@/components/Projects";

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
