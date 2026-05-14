import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Certs from "./components/Certs";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <>
      <Nav />
      <main id="top">
        <Hero />
        <Stats />
        <About />
        <Projects />
        <Skills />
        <Certs />
        <Contact />
      </main>
    </>
  );
}
