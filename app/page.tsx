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
import BackToTop from "@/components/BackToTop";
import ScrollProgress from "@/components/ScrollProgress";
import MouseGlow from "@/components/MouseGlow";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <MouseGlow />
      <Nav />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Metrics />
        <CurrentThinking />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
