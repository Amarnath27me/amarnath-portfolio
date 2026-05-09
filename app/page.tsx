import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Metrics from "@/components/Metrics";
import Skills from "@/components/Skills";
import CurrentThinking from "@/components/CurrentThinking";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Metrics />
        <Skills />
        <CurrentThinking />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
