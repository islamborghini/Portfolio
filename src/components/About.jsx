import aboutImg from "/assets/Me.jpg";
import { ABOUT_TEXT } from "../constants/index.js";

const About = () => {
  return (
    <section id="about">
      <h2 className="text-3xl font-medium text-neutral-100 mb-6">About</h2>
      <div className="flex flex-col sm:flex-row gap-6">
        <img
          className="rounded-lg w-36 h-36 object-cover flex-shrink-0"
          src={aboutImg}
          alt="Islam Assanov"
        />
        <div className="flex flex-col gap-4">
          <p className="text-neutral-400 leading-relaxed text-base">
            {ABOUT_TEXT}
          </p>
          <div>
            <a
              href="/assets/Assanov_Resume_.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-base text-neutral-100 hover:text-white border border-neutral-700 rounded-md px-4 py-2 hover:border-neutral-500 transition-colors"
            >
              Resume &rarr;
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
