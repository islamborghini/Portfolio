import { RiReactjsLine } from "react-icons/ri";
import { FaPython, FaNode, FaAws, FaDocker } from "react-icons/fa";
import { SiMysql, SiNextdotjs, SiExpress, SiJavascript, SiCplusplus } from "react-icons/si";
import { DiDjango, DiPostgresql } from "react-icons/di";
import { motion } from "framer-motion";

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Technologies = () => {
  return (
    <div className="py-10">
      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mb-12 text-center text-4xl"
      >
        My Skills
      </motion.h2>
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="grid grid-cols-3 md:grid-cols-4 gap-6 px-4"
      >
        {/* Row 1: Programming Languages */}
        <motion.div
          variants={iconVariants(3.2)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-indigo-600 p-4 flex flex-col items-center"
        >
          <SiJavascript className="text-7xl text-yellow-500" />
          <span className="text-sm mt-2 text-neutral-300">JavaScript</span>
        </motion.div>
        <motion.div
          variants={iconVariants(5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-indigo-600 p-4 flex flex-col items-center"
        >
          <FaPython className="text-7xl text-yellow-400" />
          <span className="text-sm mt-2 text-neutral-300">Python</span>
        </motion.div>
        <motion.div
          variants={iconVariants(4.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-indigo-600 p-4 flex flex-col items-center"
        >
          <SiCplusplus className="text-7xl text-blue-600" />
          <span className="text-sm mt-2 text-neutral-300">C++</span>
        </motion.div>
        
        {/* Row 2: Frontend & Backend Frameworks */}
        <motion.div
          variants={iconVariants(2.8)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-indigo-600 p-4 flex flex-col items-center"
        >
          <SiNextdotjs className="text-7xl text-white" />
          <span className="text-sm mt-2 text-neutral-300">Next.js</span>
        </motion.div>
        <motion.div
          variants={iconVariants(3.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-indigo-600 p-4 flex flex-col items-center"
        >
          <FaNode className="text-7xl text-green-500" />
          <span className="text-sm mt-2 text-neutral-300">Node.js</span>
        </motion.div>
        <motion.div
          variants={iconVariants(4)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-indigo-600 p-4 flex flex-col items-center"
        >
          <SiExpress className="text-7xl text-gray-300" />
          <span className="text-sm mt-2 text-neutral-300">Express.js</span>
        </motion.div>
        <motion.div
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-indigo-600 p-4 flex flex-col items-center"
        >
          <RiReactjsLine className="text-7xl text-cyan-500" />
          <span className="text-sm mt-2 text-neutral-300">React</span>
        </motion.div>
        
        {/* Row 3: Backend Framework & Databases */}
        <motion.div
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-indigo-600 p-4 flex flex-col items-center"
        >
          <DiDjango className="text-7xl text-green-700" />
          <span className="text-sm mt-2 text-neutral-300">Django</span>
        </motion.div>
        <motion.div
          variants={iconVariants(6)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-indigo-600 p-4 flex flex-col items-center"
        >
          <DiPostgresql className="text-7xl text-blue-500" />
          <span className="text-sm mt-2 text-neutral-300">PostgreSQL</span>
        </motion.div>
        <motion.div
          variants={iconVariants(5.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-indigo-600 p-4 flex flex-col items-center"
        >
          <SiMysql className="text-7xl text-blue-700" />
          <span className="text-sm mt-2 text-neutral-300">MySQL</span>
        </motion.div>
        
        {/* Row 4: Cloud & DevOps */}
        <motion.div
          variants={iconVariants(3.8)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-indigo-600 p-4 flex flex-col items-center"
        >
          <FaAws className="text-7xl text-orange-500" />
          <span className="text-sm mt-2 text-neutral-300">AWS</span>
        </motion.div>
        <motion.div
          variants={iconVariants(4.2)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-indigo-600 p-4 flex flex-col items-center"
        >
          <FaDocker className="text-7xl text-blue-400" />
          <span className="text-sm mt-2 text-neutral-300">Docker</span>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Technologies;
