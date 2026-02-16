import { HERO_CONTENT } from "../constants/index.js";
import { FaLinkedin, FaGithub, FaEnvelope, FaXTwitter } from "react-icons/fa6";

const Hero = () => {
  return (
    <section id="hero" className="pt-12">
      <div className="flex flex-col gap-5">
        <h1 className="text-5xl font-medium text-neutral-100 tracking-tight">
          Islam Assanov
        </h1>
        <p className="text-neutral-400 text-base">
          Full Stack Developer &bull; Software Engineer
        </p>
        <div className="flex items-center gap-5 text-neutral-400 mt-2">
          <a href="https://github.com/islamborghini" target="_blank" rel="noopener noreferrer" className="hover:text-neutral-100 transition-colors">
            <FaGithub size={22} />
          </a>
          <a href="https://linkedin.com/in/islamassanov" target="_blank" rel="noopener noreferrer" className="hover:text-neutral-100 transition-colors">
            <FaLinkedin size={22} />
          </a>
          <a href="https://x.com/issa___777" target="_blank" rel="noopener noreferrer" className="hover:text-neutral-100 transition-colors">
            <FaXTwitter size={22} />
          </a>
          <a href="mailto:islam@uni.minerva.edu" className="hover:text-neutral-100 transition-colors">
            <FaEnvelope size={22} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
