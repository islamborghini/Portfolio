import aboutImg from "/assets/Me.jpg";
import { ABOUT_TEXT } from "../constants/index.js";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="py-10">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mb-12 text-center text-4xl"
      >
        About
        <span className="text-neutral-500"> Me</span>
      </motion.h1>
      <div className="flex flex-wrap flex-col lg:flex-row">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
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
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="w-full lg:w-1/2"
        >
          <div className="flex justify-center lg:justify-start">
            <p className="my-2 max-w-xl text-xl lg:text-2xl py-6 text-center lg:text-left">{ABOUT_TEXT}</p>
          </div>
          <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-4 px-5 mt-4">
            <a
              href="/assets/0AssanovIslamCV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-2 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 mb-4 lg:mb-0"
            >
              See My Resume
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
