import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

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
      </div>
    </nav>
  );
};

export default Navbar;
