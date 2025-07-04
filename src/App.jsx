import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Achievements from "./components/Achievements";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Technologies from "./components/Technologies";
import ScrollHeader from "./components/ScrollHeader";
import './index.css'; // Make sure to import the CSS file where you added the smooth scroll

const App = () => {
  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
      <div className="fixed top-0 -z-10 h-full w-full">
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%, rgba(120,119,198,0.3), rgba(255,255,255,0))], bg-gradient-to-b from-[#0A0D4BFF] to-black"></div>
      </div>
      <div className="container mx-auto px-8">
        <ScrollHeader />
        <Navbar />
        <Hero />
        <section id="about">
          <About />
        </section>
        <section id="technologies">
          <Technologies />
        </section>
        <section id="experience">
          <Experience />
        </section>
        <section id="achievements">
          <Achievements />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </div>
    </div>
  );
};

export default App;
