import { CONTACT } from "../constants";
import { FaLinkedin, FaGithub, FaEnvelope, FaXTwitter } from "react-icons/fa6";

const Contact = () => {
  return (
    <section id="contact">
      <h2 className="text-3xl font-medium text-neutral-100 mb-6">Contact</h2>
      <div className="rounded-lg border border-neutral-800 p-6">
        <p className="text-base text-neutral-400 mb-1">{CONTACT.address}</p>
        <p className="text-base text-neutral-400 mb-1">{CONTACT.phoneNo}</p>
        <a href={`mailto:${CONTACT.email}`} className="text-base text-neutral-100 hover:text-white transition-colors">
          {CONTACT.email}
        </a>
        <div className="flex items-center gap-4 mt-4 text-neutral-400">
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

export default Contact;
