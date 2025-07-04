import { HERO_CONTENT } from "../constants/index.js";
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
    <div className="flex items-center justify-center min-h-full py-20">
      <div className="text-center">
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
          className="pb-8 text-6xl font-bold tracking-tight lg:text-8xl mt-4"
        >
          Islam Assanov
        </motion.h1>
        <motion.span
          variants={container(0.5)}
          initial="hidden"
          animate="visible"
          className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent"
        >
          Full Stack Developer
        </motion.span>
        <motion.p
          variants={container(1)}
          initial="hidden"
          animate="visible"
          className="mt-8 text-xl font-light tracking-tighter text-gray-300 max-w-2xl mx-auto"
        >
          Passionate about creating innovative solutions and building scalable applications. 
          Welcome to my digital portfolio where creativity meets functionality.
        </motion.p>
      </div>
    </div>
  );
};

export default Hero;
