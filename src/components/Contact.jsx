import { CONTACT } from "../constants";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaEnvelope, FaXTwitter} from "react-icons/fa6";

const Contact = () => {
  return (          
    <div className="py-10">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mb-12 text-center text-4xl"
      >
        Get in Touch
      </motion.h1>
      <div className="flex items-center justify-center gap-8 px-10 text-6xl mb-10">
              <a
                href="https://linkedin.com/in/islamassanov"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition-transform duration-300"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://github.com/islamborghini"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition-transform duration-300"
              >
                <FaGithub />
              </a>
              <a 
                href="mailto:islam@uni.minerva.edu"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition-transform duration-300"
              >
                <FaEnvelope />
              </a>
              <a 
                href="https://x.com/issa___777"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition-transform duration-300"
              >
                <FaXTwitter />

              </a>
              
            </div>
      <div className="text-center tracking-tighter">
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className="my-4"
        >
          {CONTACT.address}
        </motion.p>
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1 }}
          className="my-4"
        >
          {CONTACT.phoneNo}
        </motion.p>
      </div>
    </div>
  );
};

export default Contact;
