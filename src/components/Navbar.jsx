
import { FaLinkedin, FaGithub, FaEnvelope, FaXTwitter} from "react-icons/fa6";
const Navbar = () => {
  return (
    <nav className="flex items-center justify-center py-6">
      <div className="flex flex-shrink-0 items-center">
      </div>
      <div className="mx-8 flex items-center justify-center gap-4 text-2xl">
        <a
          href="https://linkedin.com/in/islamassanov"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/islamborghini"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
        <a
          href="mailto:islam@uni.minerva.edu"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaEnvelope />
        </a>
        <a 
          href="https://x.com/issa___777"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-110 transition-transform duration-300"
        >
        <FaXTwitter/>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
