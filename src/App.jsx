import { useState } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Achievements from "./components/Achievements";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Technologies from "./components/Technologies";
import Blog from "./components/Blog";
import Sidebar from "./components/Sidebar";
import './index.css';

const App = () => {
  const [activeSection, setActiveSection] = useState('hero');

  const renderActiveSection = () => {
    switch (activeSection) {
      case 'hero':
        return <Hero />;
      case 'about':
        return <About />;
      case 'experience':
        return <Experience />;
      case 'achievements':
        return <Achievements />;
      case 'technologies':
        return <Technologies />;
      case 'projects':
        return <Projects />;
      case 'blog':
        return <Blog />;
      case 'contact':
        return <Contact />;
      default:
        return <Hero />;
    }
  };

  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
      <div className="fixed top-0 -z-10 h-full w-full">
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%, rgba(120,119,198,0.3), rgba(255,255,255,0))], bg-gradient-to-b from-[#0A0D4BFF] to-black"></div>
      </div>
      
      <div className="flex h-screen">
        {/* Sidebar */}
        <Sidebar activeSection={activeSection} setActiveSection={setActiveSection} />
        
        {/* Main content area */}
        <div className="flex-1 flex flex-col">
          {/* Top navbar */}
          <div className="px-8 py-4">
            <Navbar />
          </div>
          
          {/* Content area */}
          <div className="flex-1 overflow-y-auto px-8 pb-8">
            <div className="max-w-6xl mx-auto">
              {renderActiveSection()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
