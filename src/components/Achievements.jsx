import { ACHIEVEMENTS } from "../constants";
import { motion } from "framer-motion";

const Achievements = () => {
  return (
    <div className="border-neutral-900 pb-20">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        Achievements
      </motion.h1>
      <div className="relative">
        <div className="absolute left-1/2 h-full border-l-2 border-neutral-400 transform -translate-x-1/2"></div>
        {ACHIEVEMENTS.map((achievement, index) => (
          <motion.div
            key={index}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 100 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`mb-8 flex w-full items-center justify-between ${
              index % 2 === 0 ? "flex-row-reverse" : "flex-row"
            }`}
          >
            <div className="order-1 w-5/12"></div>
            <div className="z-20 flex items-center order-1 bg-purple-800 shadow-xl w-8 h-8 rounded-full"></div>
            <div className="order-1 w-5/12 bg-neutral-800 rounded-lg shadow-xl p-6">
              <h3 className="mb-2 font-bold text-white text-lg">{achievement.title}</h3>
              <p className="text-sm leading-snug tracking-wide text-neutral-300 text-opacity-100">
                {achievement.description}
              </p>
              <span className="mt-2 text-sm font-medium text-neutral-400">{achievement.year}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Achievements;
