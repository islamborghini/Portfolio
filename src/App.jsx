import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Achievements from "./components/Achievements";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Technologies from "./components/Technologies";
import Blog from "./components/Blog";
import Footer from "./components/Footer";
import './index.css';

const Divider = () => (
  <hr className="border-neutral-800" />
);

const App = () => {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-300 antialiased selection:bg-cyan-300/20 selection:text-cyan-200">
      <Navbar />
      <main className="mx-auto max-w-3xl px-4 flex flex-col gap-y-10 pt-6 pb-16">
        <Hero />
        <Divider />
        <About />
        <Divider />
        <Experience />
        <Divider />
        <Technologies />
        <Divider />
        <Projects />
        <Divider />
        <Achievements />
        <Divider />
        <Blog />
        <Divider />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
