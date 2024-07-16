import aboutImg from "/assets/Me.jpg";
import { ABOUT_TEXT } from "../constants/index.js";
import { motion } from "framer-motion";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const About = () => {
  return (
    <div className="border-neutral-900 pb-4 pt-4">
      <h1 className="my-20 text-center text-4xl">
        About
        <span className="text-neutral-500"> Me</span>
      </h1>
      <div className="flex flex-wrap">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2 lg:p-8"
        >
          <div className="flex items-center justify-center">
            <img
              className="rounded-2xl w-64 h-64 lg:w-96 lg:h-96 object-cover"
              src={aboutImg}
              alt="about"
            />
          </div>
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2"
        >
          <div className="flex justify-center lg:justify-start">
            <p className="my-2 max-w-xl text-2xl py-6">{ABOUT_TEXT}</p>
          </div>
          <div className="flex items-center justify-between gap-4 px-5mt-4">
            <a
              href="/assets/00AssanovIsla.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-2 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
            >
              See My Resume
            </a>
            <div className="flex items-center gap-4 px-10 text-4xl">
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
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
