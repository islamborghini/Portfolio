import { HERO_CONTENT } from "../constants/index.js";
import { FaArrowDown } from "react-icons/fa";
import { motion } from "framer-motion";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

const Hero = () => {
  return (
    <div className="border-neutral-900 pb-4 lg:mb-60 lg:mt-10">
      <div className="flex flex-wrap justify-center">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center text-center">
            <motion.span
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent"
            >
              Hello, I am
            </motion.span>
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="pb-16 text-5xl font-bold tracking-tight lg:mt-16 lg:mb-8 lg:text-8xl"
            >
              Islam Assanov
            </motion.h1>
            <motion.span
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="mb-10 bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent"
            >
              Full Stack Developer
            </motion.span>
            <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="my-2 text-xl font-light py-6 tracking-tighter mt-10"
            >
              <a href="#about">
                <motion.span
                  initial={{ y: 0 }}
                  animate={{ y: 10 }}
                  transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
                  className="text-6xl font-black"
                >
                  <FaArrowDown className="animate-bounce" />
                </motion.span>
              </a>
              {/*HERO_CONTENT*/}
            </motion.p>
          </div>
        </div>
        {/* <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <motion.img
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.2 }}
              src={profilePic}
              alt=""
            />
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Hero;
